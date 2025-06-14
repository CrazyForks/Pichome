<?php
/*
 * @copyright   QiaoQiaoShiDai Internet Technology(Shanghai)Co.,Ltd
 * @license     https://www.oaooa.com/licenses/
 * 
 * @link        https://www.oaooa.com
 * @author      zyx(zyx@oaooa.com)
 */
if(!defined('IN_OAOOA')) {
	exit('Access Denied');
}

class table_session extends dzz_table
{
	public function __construct() {

		$this->_table = 'session';
		$this->_pk    = 'sid';

		parent::__construct();
	}

	public function fetch($sid, $ip = false, $uid = false) {
		if(empty($sid)) {
			return array();
		}
		$this->checkpk();
		$session = parent::fetch($sid);
		if($session && $ip !== false && $ip != $session['ip']) {
			$session = array();
		}
		if($session && $uid !== false && $uid != $session['uid']) {
			$session = array();
		}
		return $session;
	}

	public function fetch_member($ismember = 0, $invisible = 0, $start = 0, $limit = 0) {
		$sql = array();
		if($ismember === 1) {
			$sql[] = 'uid > 0';
		} elseif($ismember === 2) {
			$sql[] = 'uid = 0';
		}
		if($invisible === 1) {
			$sql[] = 'invisible = 1';
		} elseif($invisible === 2) {
			$sql[] = 'invisible = 0';
		}
		$wheresql = !empty($sql) && is_array($sql) ? ' WHERE '.implode(' AND ', $sql) : '';
		$sql = 'SELECT * FROM %t '.$wheresql.' ORDER BY lastactivity DESC'.DB::limit($start, $limit);
		return DB::fetch_all($sql, array($this->_table), $this->_pk);
	}

	public function count_invisible($type = 1) {
		return DB::result_first('SELECT COUNT(*) FROM %t WHERE invisible=%d', array($this->_table, $type));
	}

	public function count($type = 0) {
		$condition = $type == 1 ? ' WHERE uid>0 ' : ($type == 2 ? ' WHERE uid=0 ' : '');
		return DB::result_first("SELECT count(*) FROM ".DB::table($this->_table).$condition);

	}

	public function delete_by_session($session, $onlinehold, $guestspan) {
		if(!empty($session) && is_array($session)) {
			$onlinehold = time() - $onlinehold;
			$guestspan = time() - $guestspan;
			$session = daddslashes($session);

			$condition = " sid='".$session['sid']."' ";
			$condition .= " OR lastactivity<$onlinehold ";
			$condition .= " OR (uid='0' AND ip='".$session['ip']."' AND lastactivity>$guestspan) ";
			$condition .= $session['uid'] ? " OR (uid='{$session['uid']}') " : '';
			DB::delete('session', $condition);
		}
	}

	public function fetch_by_uid($uid) {
		return !empty($uid) ? DB::fetch_first('SELECT * FROM %t WHERE uid=%d', array($this->_table, $uid)) : false;
	}

	public function fetch_all_by_uid($uids, $start = 0, $limit = 0) {
		$data = array();
		if(!empty($uids)) {
			$data = DB::fetch_all('SELECT * FROM %t WHERE '.DB::field('uid', $uids).DB::limit($start, $limit), array($this->_table), null, 'uid');
		}
		return $data;
	}

	public function update_by_ipban($ip) {
		return DB::query('UPDATE '.DB::table('session')." SET groupid='6' WHERE ip='$ip'");
	}

	public function update_max_rows($max_rows) {
		return DB::query('ALTER TABLE '.DB::table('session').' MAX_ROWS='.dintval($max_rows));
	}

	public function clear() {
		return DB::query('DELETE FROM '.DB::table('session'));
	}



	public function update_by_uid($uid, $data){
		if(($uid = dintval($uid)) && !empty($data) && is_array($data)) {
			return DB::update($this->_table, $data, DB::field('uid', $uid));
		}
		return 0;
	}

	public function count_by_ip($ip) {
		$count = 0;

		if(!empty($ip)){
			$count = DB::result_first("SELECT COUNT(*) FROM ".DB::table('session')." WHERE ip='{$ip}'");
		}
		return $count;
	}

	public function fetch_all_by_ip($ip, $start = 0, $limit = 0) {
		$data = array();

		if(!empty($ip)) {
			$data = DB::fetch_all('SELECT * FROM %t WHERE ip=%s  ORDER BY lastactivity DESC '.DB::limit($start, $limit), array($this->_table, $ip), null);
		}
		return $data;
	}
}

?>

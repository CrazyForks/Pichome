<?php
if(!defined('IN_OAOOA')) {
    exit('Access Denied');
}
@set_time_limit(0);
dfsockopen(getglobal('localurl'). 'mod=misc?mod=doupdatethumb',0, '', '', false, '', 1);
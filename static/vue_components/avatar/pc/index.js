const comavatar = {
    props:{
        level:{//密级
            type: Number,
        },
        iscollect:{//是否显示收藏夹
            type: Boolean,
        },
        adminid:{//是否为管理员
            type: Number,
        },
        PICHOME_LIENCE:{//是否开启多人
            type: Boolean,
        },
        uid:{//是否登入
            type: Number,
        },
        upgrade:{//是否有通知
            type: String,
        },
        version:{//版本信息
            type: String,
        },
        formhash:{
            type: String,
        },
        isrefresh:{
            required:false,
            type: Boolean,
            default:false,
        },
    },
    template:`
        <template v-if="isuid">
            <el-dropdown trigger="click" @command="handlecommand"  v-cloak>
                <div class="dzz_avatar_img">
                    <slot></slot>
                    <template v-if="level">
                        <template v-for="item in LevelData">
                            <el-tooltip v-if="item.val == level" class="level" effect="dark" content="密级" placement="bottom-end">
                                <el-image v-cloak class="level-image" :src="item.img" fit="contain"></el-image>
                            </el-tooltip>
                        </template>
                    </template>
                </div>
                <template #dropdown>
                    <el-dropdown-menu slot="dropdown" style="width: 165px;">
                        <el-dropdown-item command="personal">个人中心</el-dropdown-item>
                        <el-dropdown-item command="systeminfo" v-if="adminid==1">系统管理</el-dropdown-item>
                        <el-divider class="adjust-divider"></el-divider>
						<el-dropdown-item command="about">关于Pichome</el-dropdown-item>
                        <el-dropdown-item command="OutLogin">退出站点</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
        <template v-else>
            <el-button type="primary" size="mini" @click="GoLogin">登录</el-button>
        </template>
    `,
    setup(props, context){
        let isuid = ref(props.uid);
        const LevelData = [
            {val:1,img:'static/vue_components/avatar/image/1.png'},
            {val:2,img:'static/vue_components/avatar/image/2.png'},
            {val:3,img:'static/vue_components/avatar/image/3.png'},
            {val:4,img:'static/vue_components/avatar/image/4.png'},
            {val:5,img:'static/vue_components/avatar/image/5.png'},
        ];
        function handlecommand(type){
            switch(type){
                case 'collection':
                    window.location.href = 'index.php?mod=collection';
                break;
                case 'orguser':
                    window.open('admin.php?mod=orguser');
                break;
                case 'personal':
                    window.location.href = 'user.php?mod=my';
                break;
                case 'help':
                    window.open('https://www.yuque.com/pichome');
                break;
                case 'problem':
                    window.open('https://support.qq.com/products/340252');
                break;
                case 'setting':
                    window.location.href = 'index.php?mod=pichome&op=admin&do=basic';
                break;
                case 'systeminfo':
                    window.location.href = 'index.php?mod=systeminfo';
                break;
                case 'tab':
                    window.location.href = 'index.php?mod=tab';
                break;
                case 'library':
                    window.location.href = 'index.php?mod=pichome&op=library';
                break;
                case 'about':
                    ElementPlus.ElMessageBox.alert(`
                    <div class="aboutBox">
                        <div class="el-image" style="width: 100%;height: 150px;margin-bottom: 16px;">
                            <img src="data/attachment/sitelogo/sitelogo.png" alt="" class="el-image__inner" style="object-fit: contain;">
                        </div>
                        <div class="el-form el-form--default el-form--label-left">
                            <div class="el-form-item" style="margin-bottom: 0;">
                                <label class="el-form-item__label" style="width:90px;">软件名称：</label>
                                <div class="el-form-item__content">欧奥PicHome</div>
                            </div>
                            <div class="el-form-item" style="margin-bottom: 0;">
                                <label class="el-form-item__label" style="width:90px;">版本信息：</label>
                                <div class="el-form-item__content">${props.version}</div>
                            </div>
                            <div class="el-form-item" style="margin-bottom: 0;">
                                <label class="el-form-item__label" style="width:90px;">版权信息：</label>
                                <div class="el-form-item__content">
                                    <span class="el-text">Powered By PicHome </span>
                                </div>
                            </div>
                            <div class="el-form-item" style="margin-bottom: 0;">
                                <label class="el-form-item__label" style="width:90px;">网站地址：</label>
                                <div class="el-form-item__content">
                                    <a class="el-link el-link--primary" href="https://oaooa.com/" target="_blank">
                                        <span class="el-link__inner">oaooa.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`,
                    '',
                    {
                        customClass:'aboutPichome',
                        showClose:false,
                        showConfirmButton:false,
                        dangerouslyUseHTMLString: true,
                        closeOnClickModal:true
                    });
                break;
                case 'OutLogin':
                    ElementPlus.ElMessageBox.confirm('您确定要注销登录?', '提示', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                        }).then(async function() {
                            let {data: res} = await axios.post('user.php?mod=login&op=logging&inajax=1&action=logout&formhash='+props.formhash+'&t='+new Date().getTime());
                            if(res.success){
                                window.location.reload();
                                // if(props.isrefresh){
                                //     window.location.reload();
                                // }else{
                                //     isuid.value = 0;
                                //     context.emit('handlelogout',res.formhash);
                                // }
                                
                            }else{
                                ElementPlus.ElMessage.error(res.msg || '退出登录失败')
                            }
                        }).catch(function() {
                                   
                        });
                break;
                case 'system':
                    window.open(SITEURL+'admin.php?mod=system');
                break;
                case 'systemlog':
                    window.open(SITEURL+'admin.php?mod=systemlog');
                break;
            }
           
        }
        function GoLogin(){
            var referer = encodeURIComponent(window.location.href);
            window.location.href = 'user.php?mod=login&referer='+referer;
        }
        return {
            LevelData,
            handlecommand,
            isuid,
            GoLogin
        }
    }
};
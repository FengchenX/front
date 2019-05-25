
module.exports = {
  name: 'app',
  version: '1.0.0',
  items: [
    {name:'视频上传', path: '/operation/upload-video', icon:'el-icon-upload'},
    {name:'电影管理', path: '/operation/movies', icon:'el-icon-film'},
    {name:'TV管理', path: '/operation/tvs', icon:'el-icon-monitor'},
  ],
  menus: [{
    path:  "/home",
    label: "主页"
  },{
    path:  "/movie",
    label: "电影"
  },{
    path:  "/about",
    label: "关于我"
  },{
    path:  "/operation",
    label: "运维管理"
  }],
  rightMenus:[
    {
      path:  "/user",
      label: "用户中心"
    },
    {
      path:  "/set",
      label: "系统设置"
    },
    {
      path:  "/login",
      label: "登陆"
    },
  ],
  File: "/fileApi/files/upload/videos"
}

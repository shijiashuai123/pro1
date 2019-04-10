//index.js
//获取应用实例
const app = getApp()
const { $Toast } = require('../../dist/base/index');
Page({
  data: {
    judgeIsUserLogin: false
  },
  onLoad: function () {
  },
  handleToLoginPage() {
    console.log("确定登陆")
    this.setData({
      judgeIsUserLogin: false
    })
  },
  handleCloseLoginDialog() {
    console.log("取消登陆")
    this.setData({
      judgeIsUserLogin: false
    })
    $Toast({
      content: '授权失败',
      type: 'error'
    });
  },
  userConcelAuthorization() {
    console.log("取消登陆")
    // this.setData({
    //   judgeIsUserLogin: true
    // })
    $Toast({
      content: '授权失败',
      type: 'error'
    });
  }
})

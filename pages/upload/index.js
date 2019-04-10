// pages/upload/index.js
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citiesList: [
      { pinyin: 'Beijing', name: '测试1' },
      { pinyin: 'Beijing', name: '测试9' },
      { pinyin: 'Beijing', name: '测试10' },
      { pinyin: 'Shanghai', name: '测试2' },
      { pinyin: 'Henan', name: '测试3' },
      { pinyin: 'Aenan', name: '测试4' },
      { pinyin: 'Denan', name: '测试5' },
      { pinyin: 'Yenan', name: '测试6' },
      { pinyin: 'Cenan', name: '测试7' },
      { pinyin: 'Cenan', name: '测试8'},
    ],
    cities: [],
    images: [],
    uploadNum: [0, 1, 2, 3],
    brandList: [
      { ind: 0, name: '品牌1' },
      { ind: 1, name: '品牌2' },
      { ind: 2, name: '品牌3' },
      { ind: 3, name: '品牌4' },
      { ind: 4, name: '品牌5' },
      { ind: 5, name: '品牌6' },
    ],
    stepList: [
      { ind: 0, status: 'process', name: '选择品牌', desc: '选择品牌'},
      { ind: 1, status: '', name: '上传图片', desc: '上传图片' },
      { ind: 2, status: '', name: '智能审核', desc: '智能审核' },
      { ind: 3, status: '', name: '人工复审', desc: '人工复审'},
    ],
    judgeIsOpenIndexSelector: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 初始化index选择器
    this.initIndexSel()
  },
  // 初始化index选择器
  initIndexSel() {
    let storeCity = new Array(26);
    console.log(storeCity)
    const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    words.forEach((item, index) => {
      storeCity[index] = {
        key: item,
        list: []
      }
    })
    this.data.citiesList.forEach((item) => {
      console.log(item)
      let firstName = item.pinyin.substring(0, 1);
      console.log(firstName)
      let index = words.indexOf(firstName.toUpperCase())
      console.log(index)
      storeCity[index].list.push({
        name: item.name,
        key: firstName
      });
    })
    console.log(storeCity)
    // this.data.cities = storeCity;
    this.setData({
      cities: storeCity
    })
    console.log(this.data.cities)
  },
  // index选择器触发
  onChange(event) {
    console.log(event)
    console.log(event.detail, 'click right menu callback data')
  },
  uploadImg(e) {
    console.log(e)
    console.log(e.currentTarget.dataset.ind)
    wx.chooseImage({
      success: res => {
        console.log(res.tempFilePaths)
        if ((this.data.images.length - 1) >= e.currentTarget.dataset.ind) {
          var arr = this.data.images
          arr[e.currentTarget.dataset.ind] = res.tempFilePaths[0]
          this.setData({
            images: arr
          })
        } else {
          var arr = this.data.images
          arr.push(res.tempFilePaths[0])
          this.setData({
            images: arr
          })
          console.log(this.data.images)
        }
      }
    })
  },
  // 选择品牌
  selectBrandBtn() {
    this.setData({
      judgeIsOpenIndexSelector: false
    })
  },
  selCurItem(e) {
    console.log('点击了')
    console.log(e)
    this.setData({
      'stepList[0].status': 'finish',
      'stepList[1].status': 'process',
      judgeIsOpenIndexSelector: true
    })
    console.log(this.data.stepList)
  },
  // 提交鉴定
  submitAu() {
    console.log(this.data.images.length)
    if (this.data.images.length != 4) {
      $Toast({
        content: '请上传必须图片',
        type: 'error'
      });
      return
    } else {
      this.setData({
        'stepList[1].status': 'finish',
        'stepList[2].status': 'process'
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
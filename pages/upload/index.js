// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citiesList: [],
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
    judgeIsOpenIndexSelector: false
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
    const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    words.forEach((item, index) => {
      storeCity[index] = {
        key: item,
        list: []
      }
    })
    this.data.citiesList.forEach((item) => {
      let firstName = item.pinyin.substring(0, 1);
      let index = words.indexOf(firstName);
      storeCity[index].list.push({
        name: item.name,
        key: firstName
      });
    })
    this.data.cities = storeCity;
    this.setData({
      cities: this.data.cities
    })
  },
  // index选择器触发
  onChange(event) {
    console.log(event)
    console.log(event.detail, 'click right menu callback data')
    var obj1 = 'stepList[0].status'
    var obj2 = 'stepList[1].status'
    this.setData({
      [obj1]: 'finish',
      [obj2]: 'process',
      judgeIsOpenIndexSelector: false
    })
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
      judgeIsOpenIndexSelector: true
    })
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
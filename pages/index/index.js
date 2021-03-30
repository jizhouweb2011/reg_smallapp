// pages/result.js
Page({
  data: {
  },
  formSubmit(e) {
    console.log(e);
    wx.request({
      url: 'https://wx.smallapp.vip/api/reg/',
      data: {
        unit:e.detail.value.unit,
        code:e.detail.value.code,
        name:e.detail.value.name,
        wx:e.detail.value.wx},
      method: 'GET',
      header: {
          "Content-Type": "application/x-www-form-urlencoded"
      }, // 设置请求的 header
      success: function(res){
          console.log(res.data);
          if(res.data==0){
            wx.showToast({
              title:'提交成功',
              icon: 'success',
              duration: 3000
            })
            }else{
              wx.showToast({
                title:'提交失败',
                icon: 'error',
                duration: 3000
              })  
          }
          
      }
    })
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
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
  onShareAppMessage: function (res) {
    if(res.from=='menu'){
      console.log(res.target)
    }
    return{
      title:'邀请你注册小程序 免300元认证费',
      imageUrl: '../../img/share.jpg'
    }
  },
  onShareTimeline:function(res){
    if(res.from=='menu'){
      console.log(res.target)
    }
    return{
      title:'邀请你注册小程序 免300元认证费',
      imageUrl: '../../img/share.jpg'
    }
  }
})
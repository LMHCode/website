(function() {
  // 页面刷新 滚动到顶部
  window.onbeforeunload = function (e) {
    window.scrollTo(0, 0)      
  }; 
})
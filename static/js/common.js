(function() {
  // phone
  // 首页菜单点击
  $('.phone-menu-btn').click(function() {
    $('.phone-menu-btn').hide()
    $('.phone-menu-close').show()
    $('.phone-menu-tabs').show()
  })
  
  $('.phone-menu-close').click(function() {
    $('.phone-menu-close').hide()
    $('.phone-menu-btn').show()
    $('.phone-menu-tabs').hide()
  })

  // 手机端菜单按钮事件
  $('.phone-tabs-item').click(function() {
    $(this).addClass('phone-tab-active')
    $(this).siblings('.phone-tabs-item').removeClass('phone-tab-active')
    var states = $(this).attr('name')
    if (states === 'home') {
      // 主页
    } else if (states === 'pro') {
      // 产品介绍
    } else if (states === 'store') {
      // 药店联盟
    } else if (states === 'aboutMe') {
      // 关于我们
    }
  })
  
  //pc
  // 页面刷新 滚动到顶部
  window.onbeforeunload = function (e) {
    window.scrollTo(0, 0)      
  }; 

  // 菜单点击切换
  $('.menu-item').click(function(e) {      
    $(e.target).addClass('active')
    // console.log('menu', e, e.target.siblings)
    $(e.target).siblings().removeClass('active')
    switch (e.target.innerText) {
      case '首页':
        // 首页处理逻辑
        break
      case '产品介绍':
        break
      case '药店联盟':
        break
      case '关于我们':
        break
    }
  })

  // 回到顶部监听
  window.addEventListener('scroll', function (event) {
    var scrolltopTemp = document.documentElement.scrollTop || document.body.scrollTop
    var windowHeight = document.documentElement.clientHeight
    // console.log(windowHeight, scrolltopTemp)
    if (windowHeight < scrolltopTemp) {
      $('.to-top').css({'display': 'flex'})
    } else {
      $('.to-top').css({'display': 'none'})
    }
  })

  // 返回顶部
  $('.to-top').click(function(e) {
    window.scrollTo(0, 0)
  })

   // phone 
   $('.show-phone').hover(function() {
    $('.service-tell').addClass('service-tell-animation')
  }, function() {
    $('.service-tell').removeClass('service-tell-animation')
  })
  
  // code
  $('.show-code').hover(function() {
    $('.fixed-code').addClass('fixed-code-animation')
  }, function() {
    $('.fixed-code').removeClass('fixed-code-animation')
  })
  
})()
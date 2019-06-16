(function () {
  let operate = {
    el: $('.page-container'),
    init: () => {
      operate.smoothScroll()
    },
    smoothScroll: () => {
      $('body').smoothScroll({
        delegateSelector: '.navbar a',
        offset: -64,
        beforeScroll: () => {
          $('.navbar a').removeClass('active')
        },
        afterScroll: (options) => {
          $(options.link).addClass('active');
        }
      });
    }
  }
  operate.init()
})()

var frontCommon = frontCommon || {};
frontCommon.Html = (function () {
  var instance = null;
  function init() {
    instance = {
        reset: function () {
            scrollTopBtn();
        },

    };
    return instance;
  }
  if (instance) {
    return instance;
  } else {
    return init();
  }
})();

//smooth scroll
function go_scroll(id_name)	{
	var top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
}

//top scroll button
function scrollTopBtn() {
    const quickScrollBtnToTop = document.querySelector('.btn-to-top .top-btn');
    const topButton = document.querySelector('.btn-to-top');

    quickScrollBtnToTop.addEventListener('click', function(){
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    })

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const pageBodyHeight = parseInt(document.querySelector('#wrap').clientHeight);
        const showLine = pageBodyHeight * 0.05;
        const contentHeight = document.querySelector('#main').clientHeight;
        const hotLine = contentHeight - window.innerHeight;

        if (scrollTop >= showLine) {
            topButton.classList.add('active');
        } else {
            topButton.classList.remove('active');
        }
        if (scrollTop >= hotLine) {
            topButton.classList.add('fixed');
        } else {
            topButton.classList.remove('fixed');
        }
    });
}
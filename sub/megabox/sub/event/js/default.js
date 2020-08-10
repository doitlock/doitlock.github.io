  
  $(document).ready(function(){
	$('.slide_wrap').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		arrows:true,
		dots:false,
		centerPadding:30,
		centerMode:true
	});
  });
		  
  
  function show_menu(layer_sitemap){
	const menu = document.getElementById('layer_sitemap');
	const menuBtn = document.querySelector('.dropdown_button');
	const searchBar = document.getElementById('search_map');
	const searchBtn = document.querySelector('.search_btn');


	if(menu.style.display == 'block'){
		menu.style.display = 'none';
		menuBtn.classList.remove('on');
	} else {
		menu.style.display = 'block';  
		menuBtn.classList.add('on');          
	}
}  
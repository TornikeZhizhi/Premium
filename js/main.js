$(document).ready(function(){


	$(".hidden_stare").mouseenter(function(){
		console.log("s")
		$(".hidden_stare").css("fill","rgba(0,0,0,.7)")
	})

	$(".hidden_stare").mouseleave(function(){

		$(".hidden_stare").css("fill","transparent")
	})


})

$("#Layer_1 .build_hover").each(function(index){

	$(this).mouseenter(function(){
		if (!$(this).hasClass("hidden_stare")) {


 		$('#Layer_2 .st'+(index + 1)+'').css("fill","rgba(255,255,255,.7)")
 		$('#Layer_2 .st'+(index + 1)+'').css("x","535")
 		}
	
	})

	$(this).mouseleave(function(){
 		$('#Layer_2 .st'+(index + 1)+'').css("fill","#000000");
 		$('#Layer_2 .st'+(index + 1)+'').css("x","524.9")
	
	})

})



$('body').on('click','.link_path',function(){

      window.location = $(this).data('url');
    });


$('.portfolio-slides').slick({
  infinite        : true,
  slidesToShow    : 3,
  slidesToScroll  : 1,
  mobileFirst     : true,
  prevArrow: $('.arrow_left'),
nextArrow: $('.arrow_right')
});


$('.portfolio-slides').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true
});


$(".flat_footer a").click(function(e){

	e.preventDefault()

	$(".feedback-modal").addClass("activ")
})

var partData = Number($(".part_value span").attr("data-max"))
var defValue = Number($(".part_value span").text())


$(".part_min").click(function(){
	if (defValue >= 1) {
		defValue--;
		$(".part_value span").text(defValue)	
	}
})

$(".part_max").click(function(){
	if (defValue < partData) {
		defValue++;
		$(".part_value span").text(defValue)	
	}	
})


var costDefValue = Number($(".cost_period_value span").text())

$(".cost_period_min").click(function(){

		if (costDefValue >= 2) {
			costDefValue--;
			$(".cost_period_value span").text(costDefValue)	
		}
	
})
var monthData = Number($(".cost_period_value span").attr("month-max"))
$(".cost_period_max").click(function(){
		if (costDefValue < monthData) {
			costDefValue++;
			$(".cost_period_value span").text(costDefValue)	
		}
})

	var flatPrice = Number($(".flat_price span").text().replace(/\s/g, ''))
$(".calc").click(function(){

	$(this).addClass("anime")

	setTimeout(function(){
		$(".calc").removeClass("anime")
	},500)

	var partly = flatPrice * defValue / 100
	$(".calc_sum .first span").text(partly)
	

	var monthly = (flatPrice - partly) / costDefValue
	$(".calc_sum .second span").text(monthly)

})
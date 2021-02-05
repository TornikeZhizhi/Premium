$(document).ready(function(){


	$(".hidden_stare").mouseenter(function(){
		$(this).css("fill","rgba(0,0,0,.7)")
	})

	$(".hidden_stare").mouseleave(function(){

		$(".hidden_stare").css("fill","transparent")
	})


})

$("#Layer_1 .build_hover").each(function(index){

	$(this).mouseenter(function(){



 		$('#Layer_2 .st'+(index + 1)+'').css("fill","rgba(255,255,255,.7)")
 		$('#Layer_2 .st'+(index + 1)+'').css("x","535")

	
	})

	$(this).mouseleave(function(){
 		$('#Layer_2 rect.st'+(index + 1)+'').css("fill","#fff");
 		$('#Layer_2 rect.st'+(index + 1)+'').css("x","524.9")

 		$('#Layer_2 text.st'+(index + 1)+'').css("fill","transparent");
 		$('#Layer_2 text.st'+(index + 1)+'').css("x","524.9")
	
	})

})



$('body').on('click','.link_path',function(){

	if (!$(this).hasClass("sold")) {

      window.location = $(this).data('url');
	}
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

var partData = Number($(".part_value span").attr("data-min"))
var defValue = Number($(".part_value span").text())


$(".part_min").click(function(){
	if (defValue > partData) {
		defValue--;
		$(".part_value span").text(defValue)	
	}
})

$(".part_max").click(function(){
	if (defValue < 100) {
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

		$(".calc_sum").fadeIn()
	$(this).addClass("anime")

	setTimeout(function(){
		$(".calc").removeClass("anime")
	},500)

	var partly = flatPrice * defValue / 100
	$(".calc_sum .first .dt").text(partly.toFixed(2))
	

	var monthly = (flatPrice - partly) / costDefValue
	$(".calc_sum .second .dt").text(monthly.toFixed(2))

})


$(".flat_calculator").click(function(){
		$(".flat_gradient").fadeIn(50)
		$(".flat_calculator_fluid").fadeIn(450);
		$("body").addClass("body_over")

})

$(".calc_close, .flat_gradient").click(function(){
	$(".flat_gradient").fadeOut(50)
		$(".flat_calculator_fluid").fadeOut(50);
		$("body").removeClass("body_over")
		$(".calc_sum").fadeOut()
})

$(".flat_calculator_fluid").click(function(e){

	e.stopPropagation()
})



$('.link_path').on('mouseenter',function(){

      var num = $(this).data('number');
      console.log(num)
      $(".flat_aparment_info span").eq(1).text(num)
    });
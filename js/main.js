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
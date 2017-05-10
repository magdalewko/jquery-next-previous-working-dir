$(document).ready(function(){
	
	var count = 0;
	var lenghty = $("#imgs img").length;
	$("#imgs img:eq(0)").css({"border":"10px solid #669999","z-index":"6","opacity":"1"});
	$.ajax({
			url:""+count+".txt",
			success: function(result){
				$("#screen").html(result);}
			
		});
	
	$("#next").click(function(){
		count++;
		$("#imgs img:eq(" + count + ")").css({"border":"10px solid #669999","z-index":"6","opacity":"1"});
		$("#imgs img:eq(" + count + ")").prev().css({"border":"","z-index":"2","opacity":""});	
		
		$.ajax({
			url:""+count+".txt",
			success: function(result){
				$("#screen").html(result);}
			
		});
	});
	
		
	$("#previous").click(function(){
		count--;
		$("#imgs img:eq(" + count + ")").css({"border":"10px solid #669999","z-index":"6","opacity":"1"});
		$("#imgs img:eq(" + count + ")").next().css({"border":"","z-index":"2","opacity":"0"});
		
		$.ajax({
			url:""+count+".txt",
			success: function(result){
				$("#screen").html(result);}
			
		});
		
	});

});
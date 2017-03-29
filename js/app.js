//exo 1
$("#removeDiv").click(function(){
	$("div.remove").remove();
	$(this).parent().remove();
	});

//exo2
$( "#setText" ).keyup(function(){
    var caractere = $( this ).val();
    $( "#needText" ).text( caractere )

});


//exo3

$("#setColor").click(function(){
	$("#changeColor").css('background-color','red');
});
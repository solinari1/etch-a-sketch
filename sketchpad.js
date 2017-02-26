function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='unit'></div>");
        };
    };
    $(".unit").width(960/x);
    $(".unit").height(960/x);
};

function clearGrid(){
    $(".unit").remove();
	  $(".unit").css("background", "#729f98");
	  $(".unit").css("opacity", 1);
};

function refreshGrid(){
    var choice = prompt("What grid size would you like? (Enter a value between 2 and 64)");
    	if (choice >= 2 && choice <= 64) {
    		clearGrid();
    		createGrid(choice);
    	} else {
    		alert("Please enter a valid number.")
    	}
};

function normal(){
	$(".unit").hover(function() {
        $(this).css('background-color', 'black');
        });
};

function reset(){
    refreshGrid();
    $(".unit").hover(function() {
        $(this).css('background-color', 'black');
    });
};

function random (){
	$(".unit").hover(function() {
    	red = Math.floor((Math.random() * 256) + 1);
		blue = Math.floor((Math.random() * 256) + 1);
		green = Math.floor((Math.random() * 256) + 1);
			$(this).css({"background-color": "rgb("+red+", "+green+", "+blue+")"});
	});
};

function opacity() {
	$(".unit").hover(function() {
		var opacity = $(this).css("opacity");
		if(opacity !== 0) {
			$(this).css("opacity", opacity - 0.1);
		}
	});
}


$(document).ready(function() {
    createGrid(16);
    normal();

    $('#reset').click(function() {
    	refreshGrid();
    	normal();
    });

    $('#randomColor').click(function() {
    	refreshGrid();
    	random();
    });
    
    $('#fadeToBlack').click(function(){
    	refreshGrid();
    	opacity();
    });

});

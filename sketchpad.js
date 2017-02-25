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
};

function refreshGrid(){
    var choice = prompt("What grid size would you like? (Enter a value between 2 and 64)");
    clearGrid();
    createGrid(choice);
};


$(document).ready(function() {
    createGrid(16);

	$(".unit").hover(function() {
        $(this).css('background-color', 'black');
        });

    $('#reset').click(function() {
    	refreshGrid();
    	$(".unit").hover(function() {
        	$(this).css('background-color', 'black');
        });
    });
});



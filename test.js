function coloring() {
  $(".unit").hover.(function() {
      var colorR = Math.floor((Math.random() * 256));
      var colorG = Math.floor((Math.random() * 256));
      var colorB = Math.floor((Math.random() * 256));

      for (var opacity = 0; opacity < 1; opacity += 0.1) {
		if (opacity < 1) {
			$(this).css("background-color", "rgb("colorR + "," + colorG + "," + colorB + "," + opacity")")} else {
				$(this).css("background-color", "black")};
  };
};
};


$(".unit").hover(function() {
        $(this).css('background-color', 'black');
        });



        $(".unit").hover.(function() {
      	var colorR = Math.floor((Math.random() * 256));
      	var colorG = Math.floor((Math.random() * 256));
      	var colorB = Math.floor((Math.random() * 256));

      for (var opacity = 0; opacity < 1; opacity += 0.1) {
		if (opacity < 1) {
			$(this).css("background-color", "rgb("colorR + "," + colorG + "," + colorB + "," + opacity")");
				} else {
				$(this).css("background-color", "black");
			}



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
    $('#random').click(function() {
    	red = Math.floor((Math.random() * 256) + 1);
		blue = Math.floor((Math.random() * 256) + 1);
		green = Math.floor((Math.random() * 256) + 1);
			$(this).stop(true, true).css({"background-color": "rgb("+red+", "+green+", "+blue+")"});
	})
});



$('#fadeToBlack').click(function() {
		$(".unit").hover(function() {
			var opa = $(this).css("opacity");
				if (opa < 1) {
					$(this).css("opacity", opa * 2);
				}
		});
	});





$('#reset').click(function() {
    	refreshGrid();
    	$(".unit").hover(function() {
        	$(this).css('background-color', 'black');
        });
    });
    $('#randomColor').click(function() {
    	$(".unit").hover(function() {
    		red = Math.floor((Math.random() * 256) + 1);
			blue = Math.floor((Math.random() * 256) + 1);
			green = Math.floor((Math.random() * 256) + 1);
				$(this).css({"background-color": "rgb("+red+", "+green+", "+blue+")"});
		});
	});



	function opacity() {
    $(".unit").hover(function(){
    	for (opa = 0; opa < 1; opa += 0.1) {
    		
    	}
		var opacity = $(this).css("opacity");
		var opacity = 0.1;
			if (opacity < 1) {
				$(this).css("opacity", opacity += 0.1);
				} else {
					$(this).css("opacity", 1);
			}
	});
};
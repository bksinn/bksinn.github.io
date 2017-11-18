$( document ).ready(function() {
  //console.log("Hi");  

	var replace;

	$( "input:text" ).focus(function() {
		replace = $(this).val();
	  	$(this).val("");
	  	//console.log(replace);

	});

	$( "input:text" ).blur(function() {
		console.log($(this).val());
		//$(this).val(replace);


		if ($(this).val() == "") {
			$(this).val(replace);
		}
	});

    $("#mobile-menu").click(function () {

        if($(this).hasClass("enabled")) {

            $(this).removeClass("enabled");

            $("nav").slideUp();

        }else {

            $(this).addClass("enabled");

            $("nav").slideDown();

        }

    });

    $(window).resize(function () {

        console.log("value " + $(this).width());

        if($(this).width() > 767) {

            $("mobile-menu").removeClass("enabled");

            $("nav").show();
        }
        else {

            $("mobile-menu").addClass("enabled");

            $("nav").hide();
        }

    });
});
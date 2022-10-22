function openModalFunction(modalDiv){
	let modalsOpen	= $(".iziModal").filter(":visible").length;
	modalsOpen		= modalsOpen + 1;
	$modalDiv		= modalDiv || $("#" + $(this).data("display") + "IziModal");
	$modalDiv.css("z-index", (1000 * modalsOpen)).iziModal("open");
	$().add($modalDiv.find(".closeButton")).add($modalDiv.find(".closeLink"))
		.on(
			"click",
			"",
			function(){
				$(this).closest(".iziModal").iziModal("close");
			}
		);
}

$(document).ready(function(){
	if(typeof $().slick == "function"){
		$(".slickAutoplay").slick($(".slickAutoplay").data("slickoptions"));
	}
	$(".odometer").each(function(index, element){
		if(typeof($(element).data("changeto")) != "undefined" && typeof($(element).data("changeafter")) != "undefined"){
			setTimeout(function(){
				element.innerHTML = $(element).data("changeto");
			}, $(element).data("changeafter"));
		} else if(typeof($(element).data("changeusing")) != "undefined" && typeof($(element).data("changeafter")) != "undefined"){
			setTimeout(function(){
				if(typeof $("#" + $(element).data("changeusing")).val() !== "undefined"){
					element.innerHTML = $("#" + $(element).data("changeusing")).val();
				}
			}, $(element).data("changeafter"));
		}
	});
	$(".blockLink").on("click", "", function(){
		let linkLocation	= $(this).data("link");
		if(typeof linkLocation !== "undefined"){
			window.location = linkLocation;
		}
	});
	if(typeof $().pan == "function"){
		$("#far-clouds").pan({fps: 30, speed: 0.7, dir: 'left', depth: 30});
		$("#near-clouds").pan({fps: 30, speed: 1, dir: 'left', depth: 70});
		window.actions = {
			speedyClouds: function(){
				$('#far-clouds').spSpeed(12);
				$('#near-clouds').spSpeed(20);
			},
			runningClouds: function(){
				$('#far-clouds').spSpeed(8);
				$('#near-clouds').spSpeed(12);
			},
			walkingClouds: function(){
				$('#far-clouds').spSpeed(3);
				$('#near-clouds').spSpeed(5);
			},
			lazyClouds: function(){
				$('#far-clouds').spSpeed(0.7);
				$('#near-clouds').spSpeed(1);
			},
			stop: function(){
				$('#far-clouds, #near-clouds').spStop();
			},
			start: function(){
				$('#far-clouds, #near-clouds').spStart();
			},
			toggle: function(){
				$('#far-clouds, #near-clouds').spToggle();
			},
			left: function(){
				$('#far-clouds, #near-clouds').spChangeDir('left');
			},
			right: function(){
				$('#far-clouds, #near-clouds').spChangeDir('right');
			}
		};
	}
});


const evPoints = e => e.type.substring(0,5)!="touch"?[e]:!e.touches.length?e.changedTouches:e.touches;

const getEXY = (e,o) => { let rect = (o||e.target).getBoundingClientRect(); return ({ x:e.pageX-rect.left, y:e.pageY-rect.top }); }

const getEventXY = (e,o) => getEXY(evPoints(e)[0],o);

const clamp = (min,max) => n => {
    return n > max ? max : n < min ? min : n;
};

$(function(){
	$(".main-image").on("mousemove touchmove", function(event){
        let pos = getEventXY(event);
		
		let zoompos = {
			x: clamp(0, 290)(pos.x-105-scrollX),
			y: clamp(0, 240)(pos.y-85-scrollY)
		}

		$(this).closest(".zoom").find(".zoomer").css({
			transform: 'translate(' + zoompos.x + 'px, ' + zoompos.y + 'px)'
		});

		$(this).closest(".zoom").find(".zoomed-image").css({
			"background-position": (-zoompos.x*2) + 'px ' + (-zoompos.y*2) + 'px'
		})
	});

	

	$(".main-image-cans").on("mousemove touchmove", function(event){
        let pos = getEventXY(event);
		
		let zoompos = {
			x: clamp(0, 150)(pos.x-75-scrollX),
			y: clamp(0, 190)(pos.y-97.5-scrollY)
		}

		$(this).closest(".zoom-cans").find(".zoomer-cans").css({
			transform: 'translate(' + zoompos.x + 'px, ' + zoompos.y + 'px)'
		});

		$(this).closest(".zoom-cans").find(".zoomed-image-cans").css({
			"background-position": (-zoompos.x*2) + 'px ' + (-zoompos.y*2) + 'px'
		})
	});
});
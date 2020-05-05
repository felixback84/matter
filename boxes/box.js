function Box (x,y,w,h){

	// fisic props of boxes 
	let options = {
		friction: 0.3,
		restitution: 0.6
	}

	// type of body and setts
	this.body = Bodies.rectangle(x,y,w,h,options);

	// props size
	this.w = w;
	this.h = h;

	// add to world
	World.add(world, this.body);

	// show method
	this.show = function(){

		// body props
		let pos = this.body.position;
		let angle = this.body.angle;

		// init process
		push();
		translate(pos.x, pos.y);

		// be aware of the angle & origin of the boxes
		rotate(angle);
		rectMode(CENTER);

		// carac of boxes
		strokeWeight(1);
		stroke(255);
		fill(127);

		// create rectangles
		rect(0,0,this.w, this.h);

		// kill process
		pop();
	}
}
// Left lobe

var image_tracker='leftHead';

function leftLobe(){
	var image = document.getElementById('leftLobe');
	if(image_tracker=='leftHead'){
		image.src='images/leftbrain-ver-2.png';
		image_tracker="leftLobe";
	}
	else{
		image.src="images/lefthead.png";
		image_tracker="leftHead";
	}
}

// Right lobe


var image_seek='rightHead';

function rightLobe(){
	var img = document.getElementById('rightLobe');
	if(image_seek=='rightHead'){
	img.src='images/rightbrain-ver-2.png';
	image_seek="rightLobe";
	}
	else{
		img.src="images/righthead.png";
		image_seek="rightHead";
	}
}

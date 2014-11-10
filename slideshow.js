slideshow = function() {

	var imageRotation = function() {

		var self = this;

		var maxCount= $('#image > *').length,
			count=2,
			previous=1;

		$('#image-'+previous).fadeOut();
		$('#image-'+count).fadeIn();
		previous = count;
		count ++;

		if(count==maxCount+1) {

			count=1;

		}

	}

	rotateImages = function(){

		window.setInterval(function(){
			imageRotation();
		}, 5000); 

	}

	rotateImages();

},
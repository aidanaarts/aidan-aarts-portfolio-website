$( "#nav-btn" ).on( "click", function() {
  $('#takeover-nav').toggleClass("shown");
  $('.sticky-nav').toggleClass("difference");
});

$( "#contact-btn" ).on( "click", function() {
	$('#takeover-nav').toggleClass("shown");
	$('.sticky-nav').toggleClass("difference");

});
$( "#about-me-btn" ).on( "click", function() {
	$('#takeover-nav').toggleClass("shown");
	$('.sticky-nav').toggleClass("difference");

});

$("#home-btn" ).on( "click", function() {
	$('#takeover-nav').toggleClass("shown");
	$('.sticky-nav').toggleClass("difference");

});

$("#projects-btn" ).on( "click", function() {
	$('#takeover-nav').toggleClass("shown");
	$('.sticky-nav').toggleClass("difference");

});
///Initiation Variables
var icon_1 = document.getElementById("nav-btn");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;
var home_btn = document.getElementById("home-btn")
var projects_btn = document.getElementById("projects-btn");
var contact_btn = document.getElementById("contact-btn");
var about_me_btn = document.getElementById("about-me-btn");

///Animation Variables
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

///Menu Disappear
function menuDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "0";
		currentFrame_1 = 1;
		menuDisappearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Cross Appear
function arrowAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		arrowAppearComplete_1 = true;
		openMenuAnimation_1();
	}
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
	if ( !menuDisappearComplete_1 ) {
		menuDisappearAnimation_1();
	} else if ( !arrowAppearComplete_1) {
		arrowAppearAnimation_1();
	}
}

///Cross Disappear
function arrowDisappearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
			//bottom line
			bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
			topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
			//recursion
			arrowDisappearAnimation_1();
		});
	} else {
		middleLine_1.style.opacity = "1";
		currentFrame_1 = 1;
		arrowDisappearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Menu Appear
function menuAppearAnimation_1() {
	currentFrame_1++;
	if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
		window.requestAnimationFrame( ()=> {
			//top line
			topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
			topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
			//bottom line
			bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
			bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
			//recursion
			menuAppearAnimation_1();
		});
	} else {
		currentFrame_1 = 1;
		menuAppearComplete_1 = true;
		closeMenuAnimation_1();
	}
}

///Close Menu Animation
function closeMenuAnimation_1() {
	if ( !arrowDisappearComplete_1 ) {
		arrowDisappearAnimation_1();
	} else if ( !menuAppearComplete_1 ) {
		menuAppearAnimation_1();
	}
}

///Events

icon_1.addEventListener( "click", ()=> {
  if ( state_1 === "menu" ) {
  	openMenuAnimation_1();
  	state_1 = "arrow";
  	arrowDisappearComplete_1 = false;
		menuAppearComplete_1 = false;
  } else if ( state_1 === "arrow" ) {
  	closeMenuAnimation_1();
  	state_1 = "menu";
  	menuDisappearComplete_1 = false;
		arrowAppearComplete_1 = false;
  }
});
/*Contact link btn */
contact_btn.addEventListener( "click", ()=> {
	if ( state_1 === "menu" ) {
		openMenuAnimation_1();
		state_1 = "arrow";
		arrowDisappearComplete_1 = false;
		  menuAppearComplete_1 = false;
	} else if ( state_1 === "arrow" ) {
		closeMenuAnimation_1();
		state_1 = "menu";
		menuDisappearComplete_1 = false;
		  arrowAppearComplete_1 = false;
	}
  });
/* About Me Btn */
  about_me_btn.addEventListener( "click", ()=> {
	if ( state_1 === "menu" ) {
		openMenuAnimation_1();
		state_1 = "arrow";
		arrowDisappearComplete_1 = false;
		  menuAppearComplete_1 = false;
	} else if ( state_1 === "arrow" ) {
		closeMenuAnimation_1();
		state_1 = "menu";
		menuDisappearComplete_1 = false;
		  arrowAppearComplete_1 = false;
	}
  });
  home_btn.addEventListener( "click", ()=> {
	if ( state_1 === "menu" ) {
		openMenuAnimation_1();
		state_1 = "arrow";
		arrowDisappearComplete_1 = false;
		  menuAppearComplete_1 = false;
	} else if ( state_1 === "arrow" ) {
		closeMenuAnimation_1();
		state_1 = "menu";
		menuDisappearComplete_1 = false;
		  arrowAppearComplete_1 = false;
	}
  });



// Cursor
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a, button, #nav-btn, input.btn");

  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }


  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.5, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.ontouchmove = function(e) {
    var mouseX = e.touches[0].clientX;
    var mouseY = e.touches[0].clientY;
    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };

  window.ontouchstart = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 1
    });
  };

  window.ontouchend = function(e) {
    setTimeout( function() {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
    }, 200);
  };

});

/*Typewriter animation for header */
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};


/*Animate*/

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show-card');
		} else {
			entry.target.classList.remove('show-card');
		}
	});
});

const hiddenElements = document.querySelectorAll('.projects');
hiddenElements.forEach((el) => observer.observe(el));


class SpyClass {
	constructor(classesList) {
	  //inProgress prevents events from firing when element manipulations are taking place
	  this.inProgress = false;
	  //the array to hold elements to be shown
	  this.elements = [];
	  //populate the array with elements, classes of which have been passed
	  this.populateElements(classesList);
	  //attach listening to window scrolling
	  this.windowListen();
	}

	populateElements(classesList) {
	  classesList.forEach(element => {
		//grab a collection of each class
		let collection = document.getElementsByClassName(element);
		let l = collection.length;
		//grab each individual element
		for (let x = 0; x < l; x++) {
		  let el = collection[x];
		  //push the element, it's position and its class to the array
		  this.elements.push({
			htmlElement: el,
			position: el.offsetTop,
			elClass: element
		  });
		}
	  });
	}

	windowListen() {
	  //on scroll check if any element in the array comes into view
	  window.addEventListener("scroll", this.checkPosition.bind(this));
	}
	windowStopListening() {
	  window.removeEventListener("scroll", this.checkPosition);
	}

	checkPosition() {
	  //don't do anything if there's work in progress
	  //or if there are no elements to watch
	  if (this.inProgress == false && this.elements.length > 0) {
		//start working
		this.inProgress = true;
		//the array will hold indexes of elements that are to be shown, they will later be removed from the elements array to reduce its size
		let forRemoval = [];

		let check = new Promise((resolve, reject) => {
		  let topOffset = window.pageYOffset + window.innerHeight / 2;
		  let maxIndex = this.elements.length;

		  for (let x = 0; x < maxIndex; x++) {
			//console.log(`element offset: ${this.elements[x].position} page offset: ${topOffset}`);
			if (this.elements[x].position < topOffset) {
			  this.elements[x].htmlElement.classList.remove(
				this.elements[x].elClass
			  );
			  forRemoval.push(x);
			}
		  }
		  resolve(forRemoval);
		});

		check
		  .then(forRemoval => {
			//remove all elements that have been shown
			//iterate from end not to mess things up, max index
			//length -1
			let x = forRemoval.length - 1;
			for (x; x >= 0; x--) {
			  this.elements.splice(forRemoval[x], 1);
			}
		  })
		  .then(() => {
			//elements removed, proceed listening
			this.inProgress = false;
		  });
	  } else if (this.elements.length == 0) {
		//remove event listener as soon as there are no elements to show
		this.windowStopListening();
	  }
	}
  }
  let hiddenClasses = [];

  for (let x = 0; x < 10; x++) hiddenClasses.push(`hidden${x}`);

  let popper = new SpyClass(hiddenClasses);

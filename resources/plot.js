
// Add active class to current nav selected link
var a = document.querySelectorAll(".navbar li a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".navbar li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
  };
}

// Color palette variables
let dark = '#252525';
let mid = '#888';
let light = 'rgba(255, 255, 255, 0.4)';

// Add scrollmagic controller
let controller = new ScrollMagic.Controller();

//------------------
//TIMELINE 1
//------------------

// Add timeline
let tl1 = anime.timeline({autoplay: false});

// Add animations
let s1a1 = {
  targets: '#one .elem',
  opacity: 1,
  translateX: {
    value: [250, 0],
    duration: 800
  },
  rotate: {
    value: [90, 0],
    duration: 1200,
    easing: 'easeInOutSine'
  },
  scale: {
    value: [2, 1.5],
    duration: 1100,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  color: [light, dark],
  duration: 800,
  delay: 0,
  easing: 'easeInOutSine'
};

let s1a2 = {
  targets: '#one .elem .blocks > div',
  backgroundColor: [light, dark],
  borderRadius: function(el) { return anime.random(2, 10); },
  delay: function(el) { return anime.random(0, 800); }
};

let s1a3 = {
  targets: '#one .rectangle',
  opacity: [0,1],
  translateX: {
    value: ['-100vw', '0vw'],
    duration: 1500,
  },
  translateY: {
    value: [-100, 0],
    duration: 1500,
  },
  easing: 'easeInOutSine',
  duration: 2000
};

// Add children
tl1.add(s1a3).add(s1a1, '-=1600').add(s1a2, '-=1300');

// Get section height
let oneHeight = document.getElementById("one").clientHeight;
console.log('oneHeight: ' + oneHeight);

//------------------
//SCENE 1
//------------------

//Add first scrollmagic scene
let scene1 = new ScrollMagic.Scene({
  triggerElement: "#one",
  triggerHook: 0.5,
  reverse: false
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
.on("enter", function (event) {
  tl1.play();
})
  
.addTo(controller);



//------------------
//TIMELINE 2
//------------------

// Add timeline
let tl2 = anime.timeline({autoplay: false});

// Add animations
let s2a1 = {
  targets: '#two .elem img',
  opacity: [0.3,1],
  scale: [4,1],
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

let s2a2 = {
  targets: '#two .elem img',
  scale: 1,
  duration: 2000,
};

// Add children
tl2.add(s2a1).add(s2a2);

// Get section height
let twoHeight = document.getElementById("two").clientHeight;
console.log('twoHeight: ' + twoHeight);

//------------------
//SCENE 2
//------------------

//Add second scrollmagic scene
let scene2 = new ScrollMagic.Scene({
  triggerElement: "#two",
  duration: 4500,
  triggerHook: 0,
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
//Use scroll position to play animation
.on("progress", function (event) {
  tl2.seek(tl2.duration * event.progress);
})

.setPin('#two')
.addTo(controller);



//------------------
//TIMELINE 3
//------------------

// Add timeline
let tl3 = anime.timeline({autoplay: false});

// Add animations
let s3a1 = {
  targets: '#three h2',
  opacity: 1,
  scale: [4,1.5],
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

// Add children
tl3.add(s3a1);

//------------------
//TIMELINE 4
//------------------

// Add timeline
let tl4 = anime.timeline({autoplay: false});

// Add animations
let s3a2 = {
  targets: '#three .image',
  opacity: [0,.5],
  translateX: {
    value: ['-100%', '0%'],
    duration: 1500,
  },
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

// Add children
tl4.add(s3a2);

//------------------
//SCENE 3
//------------------

//Add third scrollmagic scene
let scene3 = new ScrollMagic.Scene({
  triggerElement: "#three",
  duration: 2000,
  triggerHook: 0
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
//Use scroll position to play animation
.on("enter", function (event) {
  tl3.play();
})
.on("progress", function (event) {
  tl4.seek((tl4.duration * event.progress) * 3);
})

.setPin('#three')
.addTo(controller);




//------------------
//TIMELINE 5
//------------------

// Add timeline
let tl5 = anime.timeline({autoplay: false});

// Add animations
let s4a1 = {
  targets: '#four h2',
  opacity: 1,
  scale: [1.5,3],
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

// Add children
tl5.add(s4a1);

//------------------
//TIMELINE 6
//------------------

// Add timeline
let tl6 = anime.timeline({autoplay: false});

// Add animations
let s4a2 = {
  targets: '#four .image',
  opacity: [0,.5],
  translateX: {
    value: ['100%', '0%'],
    duration: 1500,
  },
  duration: 1000,
  delay: 0,
  easing: 'easeInOutSine'
};

// Add children
tl6.add(s4a2);

//------------------
//SCENE 4
//------------------

//Add third scrollmagic scene
let scene4 = new ScrollMagic.Scene({
  triggerElement: "#four",
  duration: 2000,
  triggerHook: 0
})

// Add debug indicators
.addIndicators({
  colorTrigger: "black",
  colorStart: "blue",
  colorEnd: "red",
  indent: 10
})

// Trigger animation timeline
//Use scroll position to play animation
.on("enter", function (event) {
  tl5.play();
})
.on("progress", function (event) {
  tl6.seek((tl6.duration * event.progress) * 3);
})

.setPin('#four')
.addTo(controller);
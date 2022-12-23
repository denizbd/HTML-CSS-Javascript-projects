// whenever we load a page, display the first picture

var currentSlide = 0

// here we set how many slides we have using the length property
// this is useful, becaus we can use it as our max slide value
var totalSlides = $('.holder div').length

var moveSlide = function(slide) {

var leftPosition = (- slide * 100) + 'vw'

$('.holder').css('left', leftPosition)

var slideNumber = slide + 1
// here we set the text for the steps using currentSlide and total number
$('.steps').text(slideNumber + ' / ' + totalSlides)
}

// here we assign a function to the nexslide

var nextSlide = function () {

currentSlide = currentSlide + 1

// here we test to check whether the currentSlide number is greater 
// or equal to to the numberofSlides. If it is, we are going to set
// the current slide back to zero (initial stage)

if(currentSlide >= totalSlides) {
  currentSlide = 0
}
moveSlide(currentSlide)
}
// here we assign a function to the previousSlide

var previousSlide = function() {
currentSlide = currentSlide - 1

if(currentSlide < 0) {
  currentSlide = totalSlides - 1
}

moveSlide(currentSlide)
}
// set intervall allows to run a function every x amount of time, 7500 means 7.5 seconds

var autoSlide = setInterval(function() {

// here our nexslide function will run
nextSlide ()
}, 7500)


$('.next').on('click', function() {
// this is going to cancel the auto Slide transition, because user clicks on next
clearInterval(autoSlide)
nextSlide()

})

$('.prev').on('click', function() {
clearInterval(autoSlide)
previousSlide()

})
// array always start at 0, so we need to add + 1, so the currentSlide does not start with 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total number
$('.steps').text(slideNumber + ' / ' + totalSlides)

//
$('body').on('keydown', function(event) {
// here we are grabbing the keycode of the key
// that we have just pressed down on the keyboard
var keyCode = event.keyCode

// if the keycode is equal to our left arrow (37)
// run the previous side
// if you want to compare something use ==
if (keyCode ==37) {
clearInterval(autoSlide)
previousSlide()
}
// if the keycode is equal to our ref arrow (39)
// run the previous side
if (keyCode ==39) {
clearInterval(autoSlide)
nextSlide()
}
})
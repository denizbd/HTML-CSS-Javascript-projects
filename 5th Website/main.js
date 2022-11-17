$('.filters a').on('click', function () {
  // get the value of the data filter attribute
  var filter = $(this).attr('data-filter')

  $('.product').hide()
  $(filter).show()

  $('.filters a').removeClass('selected')
  $(this).addClass('selected')
  
  return false
})

$('.show-filters').on("click", function () {

  if ($('.filters').is(':visible')) {
    $('.filters').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters').slideDown()
    $('.show-filters').text('Hide filters')
  }

  return false
})
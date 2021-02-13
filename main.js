var data = {
  entries: [],
  nextEntryId: 1,
  editing: null,
  view: 'view monday'
};

var $addEntryButton = document.querySelector('.button-add-entry');

var $modalView = document.querySelector('.modal');

var $submitButton = document.querySelector('.button-submit');

var $form = document.querySelector('form');

$addEntryButton.addEventListener('click', function (event) {
  $modalView.className = 'modal view';
});

$submitButton.addEventListener('submit', function(event){
  event.preventDefault();
 // $modalView.className = 'modal view';
 // console.log('test');
  var dayValue = $form.elements.day.value;
  var timeValue = $form.elements.time.value;
  var descriptionValue = $form.elements.description.value;
  var entryObj = {
    day: dayValue,
    time: timeValue,
    description: descriptionValue
  };

});

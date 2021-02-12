var data = {
  entries: [],
  nextEntryId: 1,
  editing: null,
  view: 'view monday'
};

var $addEntryButton = document.querySelector('.button-add-entry');

var $modalView = document.querySelector('.modal');

var $submitButton = document.querySelector('.button-submit');

$addEntryButton.addEventListener('click', function (event) {
  $modalView.className = 'modal view';

});

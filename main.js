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
var $tBody = document.querySelector('tbody');

$addEntryButton.addEventListener('click', function (event) {
  $modalView.className = 'modal view';
});

var $entry;

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var dayValue = $form.elements.day.value;
  var timeValue = $form.elements.time.value;
  var descriptionValue = $form.elements.description.value;
  var entryObj = {
    day: dayValue,
    time: timeValue,
    description: descriptionValue,
    entryId: data.nextEntryId
  };
  data.entries.push(entryObj);
  data.nextEntryId++;
  $entry = renderEntry(entryObj);
  $tBody.prepend($entry);
  $form.reset();
  $modalView.className = 'modal view hidden';
});

function renderEntry(object) {
  var $tableRow = document.createElement('tr');
  $tBody.append($tableRow);

  var $tableTime = document.createElement('td');
  $tableTime.textContent = object.time;
  $tableRow.append($tableTime);

  var $tableDescription = document.createElement('td');
  $tableDescription.textContent = object.description;
  $tableRow.append($tableDescription);

  return $tableRow;
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i= 0; i < data.entries.length; i++) {
    $entry = renderEntry(data.entry[i]);
    $tBody.append($entry);
  }
});


var previousEntriesJSON = localStorage.getItem('js-local-storage');

if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}

window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('js-local-storage', dataJSON);
})

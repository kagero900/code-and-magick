'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var namesOfWizards = ['Иван', 'Хуан Себастьян', 'Мария',
   'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesOfWizards = ['да Марья', 'Верон', 'Мирабелла',
   'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
    'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var names=[];

var getRandomElement = function(arr) {
	return Math.floor(Math.random() * arr.length);
}

var randCoatColor = getRandomElement(coatColor);
var randEyesColor = getRandomElement(eyesColor);
/*var getRandomCoatColor = function () {
  var randCoatColor = coatColor[Math.floor(Math.random() * coatColor.length)];
  return randCoatColor;
};

var getRandomEyesColor = function () {
  var randEyesColor = eyesColor[Math.floor(Math.random() * eyesColor.length)];
  return randEyesColor;
};*/

var getNameOfWizard = function() {

  for (var i = 0; i < namesOfWizards.length; i++) {
    names[i]= namesOfWizards[getRandomElement(namesOfWizards)] + ' ' + surnamesOfWizards[getRandomElement(surnamesOfWizards)];
    names.concat(names[i]);
  }
  return names;
}

var WIZARD_NAMES = getNameOfWizard();

var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[4],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[5],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[6],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  },
  {
    name: WIZARD_NAMES[7],
    coatColor: randCoatColor,
    eyesColor: randEyesColor
    //coatColor: getRandomCoatColor(),
    //eyesColor: getRandomEyesColor()
  }
];

var renderWizard = function(wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

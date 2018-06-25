var generateWizardsJS = function (amount) {
  var dataWizards = [];

  for (var i = 0; i < amount; i++) {

    var wizard = {
      name: '',
      coatColor: '',
      eyesColor: ''
    };

    var generateName = function () {

      var nameData = [
        'Иван',
        'Хуан Себастьян',
        'Мария',
        'Кристоф',
        'Виктор',
        'Юлия',
        'Люпита',
        'Вашингтон'
      ];

      var surnameData = [
        'да Марья',
        'Верон',
        'Мирабелла',
        'Вальц',
        'Онопко',
        'Топольницкая',
        'Нионго',
        'Ирвинг'
      ];

      var nameField = nameData[Math.floor(Math.random() * nameData.length)];
      var surnameField = surnameData[Math.floor(Math.random() * surnameData.length)];

      var nameWizard = nameField + ' ' + surnameField;

      return nameWizard;
    };

    var generateCoatColor = function () {

      var dataCoatColor = [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ];

      var coatColorWizard = dataCoatColor[Math.floor(Math.random() * dataCoatColor.length)];
      return coatColorWizard;
    };

    var generateEyesColor = function () {

      var dataEyesColor = [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
      ];

      var eyesColorWizard = dataEyesColor[Math.floor(Math.random() * dataEyesColor.length)];
      return eyesColorWizard;
    };

    wizard.name = generateName();
    wizard.coatColor = generateCoatColor();
    wizard.eyesColor = generateEyesColor();

    dataWizards.push(wizard);
    }
  return dataWizards;
};

var generateWizardsDOM = function (elementsJS) {
  var wizardsSimilarDOM = [];

  for (var i = 0; i < elementsJS.length; i++) {
    var wizardTemplateDOM = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

    wizardTemplateDOM.querySelector('.setup-similar-label').textContent = elementsJS[i].name;
    wizardTemplateDOM.querySelector('.wizard-coat').style.fill = elementsJS[i].coatColor;
    wizardTemplateDOM.querySelector('.wizard-eyes').style.fill = elementsJS[i].eyesColor;

    var wizardElementDOM = wizardTemplateDOM.cloneNode(true);
    wizardsSimilarDOM.push(wizardElementDOM);
  }
  return wizardsSimilarDOM
};

var addWizard = function (elementsDOM) {
  var setupWindow = document.querySelector('.setup');
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');

  var wizardSimilarBlock = document.querySelector('.setup-similar-list');
  var blockFragment = document.createDocumentFragment();

  for (var i = 0; i < elementsDOM.length; i++) {
    var blockFragmentWithWizard = elementsDOM[i];
    blockFragment.appendChild(blockFragmentWithWizard);
  }
  wizardSimilarBlock.appendChild(blockFragment);
};

var wizardsJS = generateWizardsJS(4);
var wizardsDOM = generateWizardsDOM(wizardsJS);
addWizard(wizardsDOM);

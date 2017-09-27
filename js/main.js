//Project 9: JS


const alert = document.createElement('div');

alert.className = 'alert-box';

const p = document.createElement('p');

const span = document.createElement('span');

const alertText = document.createTextNode('Alert!');

span.appendChild(alertText);

p.appendChild(span);

const alertMessage = document.createTextNode(' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellen...');

p.appendChild(alertMessage);

alert.appendChild(p);

const cancelButton = document.createElement('span');

cancelButton.className = 'cancel-button';

const buttonSymbol = document.createTextNode('X');

cancelButton.appendChild(buttonSymbol);

alert.appendChild(cancelButton);

const alertBox = document.querySelector('#alert').appendChild(alert);



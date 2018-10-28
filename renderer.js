const testing = require('./js/test.js')

window.document.getElementById('countries').addEventListener('click', function(){
  window.document.getElementById('test').innerText = 'countries';
});

window.document.getElementById('bestiary').addEventListener('click', function(){
  window.document.getElementById('test').innerText = 'bestiary';
});

window.document.getElementById('characters').addEventListener('click', function(){
  window.document.getElementById('test').innerText = 'characters';
});

window.document.getElementById('test').append(document.createElement('div'))

testing.testing();
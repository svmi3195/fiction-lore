const data = require('./data1/index.json')


window.document.getElementById('countries').addEventListener('click', function () {
  const container = window.document.getElementById('test');
  const list = window.document.createElement('ul');

  data.countries.forEach(element => {
    list.append(window.document.createElement('li').innerText = element.name)
  });

  container.append(list);
});

window.document.getElementById('bestiary').addEventListener('click', function () {
  const container = window.document.getElementById('test');
  const list = window.document.createElement('ul');

  data.bestiary.forEach(element => {
    list.append(window.document.createElement('li').innerText = element.name)
  });

  container.append(list);
});

window.document.getElementById('characters').addEventListener('click', function () {
  const container = window.document.getElementById('test');
  const list = window.document.createElement('ul');

  data.characters.forEach(element => {
    list.append(window.document.createElement('li').innerText = element.name)
  });

  container.append(list);
});



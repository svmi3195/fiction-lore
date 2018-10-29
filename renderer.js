const data = require('./data1/index.json')


window.document.getElementById('countries').addEventListener('click', function () {
  const container = window.document.getElementById('main');
  const list = window.document.createElement('ul');

  data.countries.forEach(element => {
    let listItem = window.document.createElement('li');
    listItem.innerText = element.name;
    list.append(listItem);
  });

  container.innerHTML = '';
  container.append(list);
});

window.document.getElementById('bestiary').addEventListener('click', function () {
  const container = window.document.getElementById('main');
  const list = window.document.createElement('ul');

  data.bestiary.forEach(element => {
    let listItem = window.document.createElement('li');
    listItem.innerText = element.name;
    list.append(listItem);
  });

  container.innerHTML = '';
  container.append(list);
});

window.document.getElementById('characters').addEventListener('click', function () {
  const container = window.document.getElementById('main');
  const list = window.document.createElement('ul');

  data.characters.forEach(element => {
    let listItem = window.document.createElement('li');
    listItem.innerText = element.name;
    list.append(listItem);
  });

  container.innerHTML = '';
  container.append(list);
});



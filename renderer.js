const data = require('./data1/index.json')

window.document.getElementById('countries').addEventListener('click', function () {
  createList('countries');
});

window.document.getElementById('bestiary').addEventListener('click', function () {
  createList('bestiary');
});

window.document.getElementById('characters').addEventListener('click', function () {
  createList('characters');
});

function createList(category){
  const container = window.document.getElementById('main');
  const list = window.document.createElement('ul');

 data[category].forEach(element => {
    let listItem = window.document.createElement('li');
    let btn = window.document.createElement('button');
    btn.innerText = element.name;
    btn.addEventListener('click', function () {
      createItem(category, element);
    })
    listItem.append(btn)
    list.append(listItem);
  });

  container.innerHTML = '';
  container.append(list);
}

function createItem(category, element){
  const container = window.document.getElementById('main');
  const template = window.document.createElement('div');

  if(category == 'countries'){
    template.innerText = 'country';
  }else if(category == 'bestiary'){
    template.innerText = 'creature';
  }else if(category == 'characters'){
    template.innerText = 'charater';
  }

  container.innerHTML = '';
  container.append(template);
}
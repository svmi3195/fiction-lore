const data = require('./data1/index.json')

window.document.getElementById('countries').addEventListener('click', function () {
  createList(data.countries);
});

window.document.getElementById('bestiary').addEventListener('click', function () {
  createList(data.bestiary);
});

window.document.getElementById('characters').addEventListener('click', function () {
  createList(data.characters);
});

function createList(dataArray){
  const container = window.document.getElementById('main');
  const list = window.document.createElement('ul');

  dataArray.forEach(element => {
    let listItem = window.document.createElement('li');
    let btn = window.document.createElement('button');
    btn.innerText = element.name;
    btn.addEventListener('click', function () {
      console.log(element)
    })
    listItem.append(btn)
    list.append(listItem);
  });

  container.innerHTML = '';
  container.append(list);
}

const data = require('./data1/index.json')
const loc = require('./data/loc.json')

let lang = 'en';

window.document.getElementById('lang').addEventListener('click', function () {
  if(lang == 'en'){
    lang = 'ru';
    window.document.getElementById('lang').innerHTML = 'Language: RU';
  }else if(lang = 'ru'){
    lang = 'en';
    window.document.getElementById('lang').innerHTML = 'Language: EN';
  }
  window.document.getElementById('countries').innerHTML = loc.countries[lang];
  window.document.getElementById('bestiary').innerHTML = loc.bestiary[lang];
  window.document.getElementById('characters').innerHTML = loc.characters[lang];
});

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

  const title = window.document.createElement('h1');
  title.innerText = element.name;
  template.append(title);

  const description = window.document.createElement('p');
  description.innerText = element.description;
  template.append(description);

  if(category == 'countries'){
    const ruler = window.document.createElement('p');
    ruler.innerHTML = formatTitle('ruler') + element.ruler;
    template.append(ruler);

    const borders = window.document.createElement('p');
    let bordersString = formatTitle('bordersWith');    
    element.borders.forEach(function(item){
      bordersString += item + ', '
    })
    bordersString = bordersString.slice(0, bordersString.length - 2);
    borders.innerHTML = bordersString;
    template.append(borders);
  }else if(category == 'bestiary'){
    const areal = window.document.createElement('p');
    areal.innerHTML = formatTitle('livesIn') + element.areal;
    template.append(areal);
  }else if(category == 'characters'){
    const age = window.document.createElement('p');
    age.innerHTML = formatTitle('age') + element.age;
    template.append(age);

    const parents = window.document.createElement('p');
    parents.innerHTML = formatTitle('parents') + element.parents;
    template.append(parents);
  }

  container.innerHTML = '';
  container.append(template);
}

function formatTitle(title){
  return '<strong>' + loc[title][lang] + ': </strong>'
}

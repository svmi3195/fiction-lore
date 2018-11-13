const data = require('./data1/index.json')
const loc = require('./data/loc.json')

let lang = 'en';

window.document.getElementById('lang').addEventListener('click', function () {
  if(lang == 'en'){
    lang = 'ru';
  }else if(lang = 'ru'){
    lang = 'en';
  }

  window.document.getElementById('countries').innerHTML = loc.countries[lang];
  window.document.getElementById('bestiary').innerHTML = loc.bestiary[lang];
  window.document.getElementById('characters').innerHTML = loc.characters[lang];

  window.document.getElementById('lang').innerHTML = loc.language[lang] + ': '+ lang.toUpperCase();
});

window.document.getElementById('countries').addEventListener('click', function () {
  createList('countries');
  createAddBtn('countries');
  createDeleteBtn('countries');
});

window.document.getElementById('bestiary').addEventListener('click', function () {
  createList('bestiary');
  createAddBtn('bestiary');
  createDeleteBtn('countries');
});

window.document.getElementById('characters').addEventListener('click', function () {
  createList('characters');
  createAddBtn('characters');
  createDeleteBtn('countries');
});

function createAddBtn(category){
  const btn = window.document.createElement('button');
  btn.className = 'add-btn';
  btn.innerHTML = 'Add';
  window.document.getElementById('main').append(btn);
}

function createDeleteBtn(category){
  const btn = window.document.createElement('button');
  btn.className = 'delete-btn';
  btn.innerHTML = 'Delete';
  window.document.getElementById('main').append(btn);
}

function createEditBtn(category){
  const btn = window.document.createElement('button');
  btn.className = 'edit-btn';
  btn.innerHTML = 'Edit';
  return btn;
}

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
    let bordersString = formatTitle('bordersWith') + formatList(element, 'borders');
    borders.innerHTML = bordersString;
    template.append(borders);

    const towns = window.document.createElement('p');
    let townsString = formatTitle('towns') + formatList(element, 'towns');
    towns.innerHTML = townsString;
    template.append(towns);

    const waters = window.document.createElement('p');
    let watersString = formatTitle('waters') + formatList(element, 'waters');
    waters.innerHTML = watersString;
    template.append(waters);

    const mountains = window.document.createElement('p');
    let mountainsString = formatTitle('mountains') + formatList(element, 'mountains');   
    mountains.innerHTML = mountainsString;
    template.append(mountains);

    const forests = window.document.createElement('p');
    let forestsString = formatTitle('forests') + formatList(element, 'forests');
    forests.innerHTML = forestsString;
    template.append(forests);
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

    const looks = window.document.createElement('p');
    looks.innerHTML = formatTitle('looks') + element.looks.description;
    template.append(looks);
  }

  container.innerHTML = '';
  container.append(createEditBtn());
  container.append(template);
}

function formatTitle(title){
  return '<strong>' + loc[title][lang] + ': </strong>'
}

function formatList(element, title){
    let string = '';  
    element[title].forEach(function(item){
      string += item + ', '
    })
    string = string.slice(0, string.length - 2);
    return string;
}
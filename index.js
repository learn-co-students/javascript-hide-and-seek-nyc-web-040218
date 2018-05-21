function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list');

  for(let i=0; i < list.length; i++) {
    for(let j=0; j < list[i].children.length; j++) {
      list[i].children[j].innerHTML = parseInt(list[i].children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');

  for(let i=0; i < lis.length; i++) {
    for(let j=0; j < lis[i].children.length; j++) {
      lis[i].children[j].innerHTML = parseInt(lis[i].children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

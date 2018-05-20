function getFirstSelector(selector) {
  if (selector.includes('.')) {
    return document.getElementsByClassName(selector.split('.')[1])[0]
  } else {
    return document.getElementsByTagName(selector)[0]
  }
}

function nestedTarget() {
  // debugger
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

// COME BACK TO THE BELOW EXAMLPLES

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

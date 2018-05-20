

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").getElementsByClassName("target")[0];
  //document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll("ul.ranked-list li");

  for(let i = 0; i < lis.length; i++) {
    const num = parseInt(lis[i].innerHTML) + n;
    lis[i].innerHTML = num;
  }
}
//
// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
//  (Remember, you can iterate over elements and call querySelector()
// and querySelectorAll() on them.
//  This is challenging to implement correctly, but not beyond your ability!)

 function deepestChild() {
   const grandNode = document.querySelectorAll("#grand-node div");

   return grandNode[grandNode.length - 1];

 }

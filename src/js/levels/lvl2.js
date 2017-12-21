
/* LEVEL 1
-----------------*/

const displayCSS = `
.container {
  /* Your code goes here 
  align-items: center*/
}`;

const startCSS = `
.container {
  background: lightgray;
  max-width: 960px;
  margin: 10px auto;
  min-height: 100vh;

  display: flex;
  justify-content: center;
}
.box {
  background: pink;
  width: 50px;
  height: 50px;
}
`;

const solutionCSS = {
  'align-items': 'center',
};

const hint = {
  first: 'You should display flex',
  second: 'You would like to justify the content',
  third: 'remember that the box is an item inside the container and you want to align it vertically',
};

const preHTML = '';

const postHTML = '';

const displayHTML = `
<div class="container">
  <div class="box"></div>
</div>
`;


module.exports = {
  startCSS: startCSS,
  displayCSS: displayCSS,
  solution: solutionCSS,
  hint: hint,
  preHTML: preHTML,
  postHTML: postHTML,
  displayHTML: displayHTML,
  complete: false,
};

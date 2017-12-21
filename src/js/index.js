import InlineCodeSuite from 'inline-code-suite';
import levels from './levels';
import CSSOM from 'cssom';

const validator = require('./validator');

document.onreadystatechange = function showEditor() {
  if (document.readyState === 'interactive') {
    const rootElement = document.getElementsByTagName('app-root')[0];
    const nextButton = document.querySelector('.next');
    var level = 1;

    const workArea = new InlineCodeSuite({
      name: 'example-3',
      root: rootElement,
      hasConsole: false,
      height: 400,
      editors: [
        {
          name: 'CSS',
          mode: 'css',
          value: levels[level].displayCSS,
        },
        {
          name: 'HTML',
          mode: 'htmlmixed',
          value: levels[level].displayHTML,
        },
      ],
      preview: {
        styles: levels[level].startCSS,
        html: {
          pre: levels[level].preHTML,
          post: levels[level].postHTML,
        },
      },
    });

      // console.log(levels);
      
    document.onkeyup = function (e) {
      let userCSS = workArea.getEditorData().CSS.userValue;
      let parsedCSS = CSSOM.parse(userCSS).cssRules[0].style;
      let solution = levels[level].solution;
      let minProperties = Object.keys(solution).length;
      
      let cssObj = {};

      if(parsedCSS.length === minProperties) {
        for (let i = 0; i < parsedCSS.length; i++){
          cssObj[parsedCSS[i]] = parsedCSS[parsedCSS[i]];
        }
      }     
      var size = Object.keys(cssObj).length;

      if(size >= minProperties &&  validator.deepObjComparison(cssObj, solution)){
        nextButton.classList.add("active");
        workArea.setEditorContent({ name: 'CSS', content: 'display:flex;'})
      } else {
        nextButton.classList.remove("active");
      }

    };



  }
};

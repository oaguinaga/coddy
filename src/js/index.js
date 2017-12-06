import InlineCodeSuite from 'inline-code-suite';
import cssLevels from './levels/lvl1';

document.onreadystatechange = function showEditor() {
  if (document.readyState === 'interactive') {
    const rootElement = document.getElementsByTagName('app-root')[0];


    const workArea = new InlineCodeSuite({
      name: 'example-3',
      root: rootElement,
      height: 400,
      editors: [
        {
          name: 'CSS',
          mode: 'css',
          value: cssLevels.one.displayCSS,
        },
        {
          name: 'HTML',
          mode: 'htmlmixed',
          value: cssLevels.one.displayHTML,
        },
      ],
      preview: {
        styles: cssLevels.one.startCSS,
        html: {
          pre: cssLevels.one.preHTML,
          post: cssLevels.one.postHTML,
        },
      },
    });

    console.log(workArea.inlineCodeSuite.editorData.CSS.userValue);
  }
};

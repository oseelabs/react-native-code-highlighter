import { Theme } from '../types';

const draculaTheme: Theme = {
  backgroundColor: '#282a36',
  textColor: '#f8f8f2',
  lineNumberColor: '#6272a4',
  highlightedLineColor: '#44475a',
  tokens: {
    keyword: { color: '#ff79c6' },
    string: { color: '#f1fa8c' },
    comment: { color: '#6272a4', fontStyle: 'italic' },
    function: { color: '#50fa7b' },
    number: { color: '#bd93f9' },
    tag: { color: '#ff79c6' },
    attr: { color: '#50fa7b' },
    builtin: { color: '#8be9fd', fontStyle: 'italic' },
    literal: { color: '#bd93f9' },
    symbol: { color: '#ff79c6' },
    operator: { color: '#ff79c6' },
    variable: { color: '#f8f8f2' },
    punctuation: { color: '#f8f8f2' },
  }
};

export default draculaTheme;
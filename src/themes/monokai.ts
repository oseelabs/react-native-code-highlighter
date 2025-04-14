import { Theme } from '../types';

const monokaiTheme: Theme = {
  backgroundColor: '#272822',
  textColor: '#f8f8f2',
  lineNumberColor: '#90908a',
  highlightedLineColor: '#3e3d32',
  tokens: {
    keyword: { color: '#f92672' },
    string: { color: '#e6db74' },
    comment: { color: '#75715e', fontStyle: 'italic' },
    function: { color: '#a6e22e' },
    number: { color: '#ae81ff' },
    tag: { color: '#f92672' },
    attr: { color: '#a6e22e' },
    builtin: { color: '#66d9ef', fontStyle: 'italic' },
    literal: { color: '#ae81ff' },
    symbol: { color: '#f92672' },
    operator: { color: '#f92672' },
    variable: { color: '#f8f8f2' },
    punctuation: { color: '#f8f8f2' },
  }
};

export default monokaiTheme;
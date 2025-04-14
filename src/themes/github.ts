import { Theme } from '../types';

const githubTheme: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#24292e',
  lineNumberColor: '#6a737d',
  highlightedLineColor: '#f1f8ff',
  tokens: {
    keyword: { color: '#d73a49' },
    string: { color: '#032f62' },
    comment: { color: '#6a737d', fontStyle: 'italic' },
    function: { color: '#6f42c1' },
    number: { color: '#005cc5' },
    tag: { color: '#22863a' },
    attr: { color: '#6f42c1' },
    builtin: { color: '#e36209' },
    literal: { color: '#005cc5' },
    symbol: { color: '#005cc5' },
    operator: { color: '#d73a49' },
    variable: { color: '#24292e' },
    punctuation: { color: '#24292e' },
  }
};

export default githubTheme;
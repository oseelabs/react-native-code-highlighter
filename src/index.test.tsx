import React from 'react';
import { render } from '@testing-library/react-native';
import { CodeHighlighter, CodeBlock } from './index';

describe('CodeHighlighter', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <CodeHighlighter 
        code="const hello = 'world';" 
        language="javascript" 
      />
    );
    
    // Basic sanity check - at least the code is rendered
    expect(getByText('const')).toBeTruthy();
    expect(getByText('hello')).toBeTruthy();
    expect(getByText('=')).toBeTruthy();
    expect(getByText("'world'")).toBeTruthy();
    expect(getByText(';')).toBeTruthy();
  });
});

describe('CodeBlock', () => {
  it('renders with title', () => {
    const { getByText } = render(
      <CodeBlock
        code="const hello = 'world';"
        language="javascript"
        title="Example"
      />
    );
    
    expect(getByText('Example')).toBeTruthy();
  });
  
  it('shows copy button when copyable is true', () => {
    const { getByText } = render(
      <CodeBlock
        code="const hello = 'world';"
        language="javascript"
        copyable={true}
      />
    );
    
    expect(getByText('Copy')).toBeTruthy();
  });
});

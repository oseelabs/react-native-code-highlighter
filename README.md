# React Native Code Highlighter

A lightweight and customizable code syntax highlighting library for React Native applications.

## Features

- Syntax highlighting for over 20 programming languages
- Auto language detection
- Line numbering
- Line highlighting
- Multiple built-in themes (GitHub, Dracula, Monokai, Solarized)
- Copy to clipboard functionality
- Customizable styles
- Written in TypeScript

## Installation

```bash
npm install react-native-code-highlighter
# or
yarn add react-native-code-highlighter
```

## Basic Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { CodeBlock, draculaTheme } from 'react-native-code-highlighter';

const MyComponent = () => {
    const code = `
        function helloWorld() {
            console.log('Hello, world!');
        }

        helloWorld();
    `;

  return (
    <View style={{ padding: 16 }}>
      <CodeBlock
        code={code}
        language="javascript"
        theme={draculaTheme}
        showLineNumbers={true}
        highlightedLines={[2]}
        title="Hello World Example"
      />
    </View>
  );
};

export default MyComponent;
```

## Components

### CodeHighlighter

Core component for syntax highlighting.

```tsx
import { CodeHighlighter } from 'react-native-code-highlighter';

<CodeHighlighter
  code="const hello = 'world';"
  language="javascript"
  showLineNumbers={true}
/>
```

### CodeBlock

Enhanced component with title bar and copy button.

```tsx
import { CodeBlock } from 'react-native-code-highlighter';

<CodeBlock
  code="const hello = 'world';"
  language="javascript"
  title="Example"
  copyable={true}
/>
```

## Props

### CodeHighlighter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| code | string | (required) | The code to highlight |
| language | string | auto-detect | Programming language for syntax highlighting |
| style | ViewStyle | {} | Style for the container |
| textStyle | TextStyle | {} | Style for the text |
| fontSize | number | 14 | Font size for code text |
| fontFamily | string | 'monospace' | Font family for code text |
| theme | Theme | githubTheme | Theme object for styling |
| showLineNumbers | boolean | false | Whether to show line numbers |
| highlightedLines | number[] | [] | Array of line numbers to highlight |

### CodeBlock Props (extends CodeHighlighter Props)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | undefined | Title to show in header |
| titleStyle | TextStyle | {} | Style for the title text |
| containerStyle | ViewStyle | {} | Style for the outer container |
| contentContainerStyle | ViewStyle | {} | Style for the content container |
| copyable | boolean | true | Whether to show copy button |
| onCopy | () => void | undefined | Callback when copy is pressed |

## Available Themes

- `githubTheme` - Light theme based on GitHub's code styling
- `draculaTheme` - Dark theme based on Dracula
- `monokaiTheme` - Dark theme based on Monokai
- `solarizedLightTheme` - Light theme based on Solarized
- `solarizedDarkTheme` - Dark theme based on Solarized

## Creating Custom Themes

```tsx
import { Theme } from 'react-native-code-highlighter';

const myCustomTheme: Theme = {
  backgroundColor: '#f5f5f5',
  textColor: '#333333',
  lineNumberColor: '#999999',
  highlightedLineColor: '#e8e8e8',
  tokens: {
    keyword: { color: '#ff0000', fontWeight: 'bold' },
    string: { color: '#00aa00' },
    comment: { color: '#999999', fontStyle: 'italic' },
    // Add more token styles as needed
  }
};
```

## License

MIT
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import { CodeHighlighter } from './CodeHighlighter';
import { CodeBlockProps } from './types';
import { githubTheme } from './themes';

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  title,
  titleStyle,
  style,
  containerStyle,
  contentContainerStyle,
  textStyle,
  fontSize = 14,
  fontFamily = 'monospace',
  theme = githubTheme,
  showLineNumbers = true,
  highlightedLines = [],
  copyable = true,
  onCopy,
}) => {
  const handleCopy = () => {
    Clipboard.setString(code);
    if (onCopy) {
      onCopy();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {(title || copyable) && (
        <View style={[styles.header, { backgroundColor: theme.backgroundColor }]}>
          {title && (
            <Text style={[styles.title, { color: theme.textColor }, titleStyle]}>
              {title}
            </Text>
          )}
          <View style={styles.spacer} />
          {copyable && (
            <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
              <Text style={{ color: theme.textColor }}>Copy</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <CodeHighlighter
          code={code}
          language={language}
          style={style}
          textStyle={textStyle}
          fontSize={fontSize}
          fontFamily={fontFamily}
          theme={theme}
          showLineNumbers={showLineNumbers}
          highlightedLines={highlightedLines}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 4,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  spacer: {
    flex: 1,
  },
  copyButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  contentContainer: {
    overflow: 'hidden',
  },
});

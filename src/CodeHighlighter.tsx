import React, { useMemo } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { CodeHighlighterProps } from './types';
import { highlight } from './utils/languageDetection';
import { githubTheme } from './themes';

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language,
  style,
  textStyle,
  fontSize = 14,
  fontFamily = 'monospace',
  theme = githubTheme,
  showLineNumbers = false,
  highlightedLines = [],
}) => {
  const { tokens, detectedLanguage } = useMemo(() => {
    const result = highlight(code, language);
    return {
      tokens: result.tokens,
      detectedLanguage: result.language
    };
  }, [code, language]);

  const lines = useMemo(() => {
    const codeLines = code.split('\n');
    const tokenLines: any[][] = [[]];
    
    let lineIndex = 0;
    for (const token of tokens) {
      const content = token.content;
      const contentLines = content.split('\n');
      
      for (let i = 0; i < contentLines.length; i++) {
        if (i > 0) {
          lineIndex++;
          tokenLines[lineIndex] = [];
        }
        
        if (contentLines[i]) {
          tokenLines[lineIndex].push({
            ...token,
            content: contentLines[i]
          });
        }
      }
    }
    
    return codeLines.map((_, index) => {
      return tokenLines[index] || [];
    });
  }, [tokens, code]);

  return (
    <ScrollView 
      horizontal 
      style={[styles.container, { backgroundColor: theme.backgroundColor }, style]}
      showsHorizontalScrollIndicator={true}
    >
      <View>
        {lines.map((lineTokens, lineIndex) => (
          <View 
            key={lineIndex} 
            style={[
              styles.line,
              highlightedLines.includes(lineIndex + 1) && { backgroundColor: theme.highlightedLineColor }
            ]}
          >
            {showLineNumbers && (
              <Text 
                style={[
                  styles.lineNumber, 
                  { 
                    color: theme.lineNumberColor,
                    fontSize,
                    fontFamily,
                  }
                ]}
              >
                {lineIndex + 1}
              </Text>
            )}
            <View style={styles.lineContent}>
              {lineTokens.map((token, tokenIndex) => (
                <Text
                  key={tokenIndex}
                  style={[
                    {
                      color: theme.textColor,
                      fontSize,
                      fontFamily,
                    },
                    theme.tokens[token.type] || {},
                    textStyle
                  ]}
                >
                  {token.content}
                </Text>
              ))}
              {lineTokens.length === 0 && <Text>{' '}</Text>}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  line: {
    flexDirection: 'row',
  },
  lineNumber: {
    width: 40,
    paddingRight: 8,
    textAlign: 'right',
  },
  lineContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

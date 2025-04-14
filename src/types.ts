import { TextStyle, ViewStyle } from 'react-native';

export interface CodeHighlighterProps {
  code: string;
  language?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fontSize?: number;
  fontFamily?: string;
  theme?: Theme;
  showLineNumbers?: boolean;
  highlightedLines?: number[];
}

export interface CodeBlockProps extends CodeHighlighterProps {
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  copyable?: boolean;
  onCopy?: () => void;
}

export interface Theme {
  backgroundColor: string;
  textColor: string;
  lineNumberColor: string;
  highlightedLineColor: string;
  tokens: {
    [key: string]: TextStyle;
  };
}

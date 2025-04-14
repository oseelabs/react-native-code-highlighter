import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import csharp from 'highlight.js/lib/languages/csharp';
import cpp from 'highlight.js/lib/languages/cpp';
import ruby from 'highlight.js/lib/languages/ruby';
import php from 'highlight.js/lib/languages/php';
import swift from 'highlight.js/lib/languages/swift';
import go from 'highlight.js/lib/languages/go';
import rust from 'highlight.js/lib/languages/rust';
import kotlin from 'highlight.js/lib/languages/kotlin';
import scala from 'highlight.js/lib/languages/scala';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import markdown from 'highlight.js/lib/languages/markdown';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
import sql from 'highlight.js/lib/languages/sql';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('python', python);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('php', php);
hljs.registerLanguage('swift', swift);
hljs.registerLanguage('go', go);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('scala', scala);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('sql', sql);

export function detectLanguage(code: string, language?: string): string {
  if (language && hljs.getLanguage(language)) {
    return language;
  }
  
  try {
    // Try to detect language if not specified
    const result = hljs.highlightAuto(code, Object.keys(hljs.listLanguages()));
    return result.language || 'plaintext';
  } catch (e) {
    return 'plaintext';
  }
}

export function highlight(code: string, language?: string): { language: string, tokens: any[] } {
  const detectedLanguage = detectLanguage(code, language);
  
  try {
    const result = hljs.highlight(code, { language: detectedLanguage });
    
    // Parse the HTML output into tokens
    const tokens = parseHighlightOutput(result.value);
    
    return {
      language: detectedLanguage,
      tokens
    };
  } catch (e) {
    // Fallback to plaintext
    return {
      language: 'plaintext',
      tokens: [{ type: 'text', content: code }]
    };
  }
}

function parseHighlightOutput(html: string): any[] {
  // This is a simplified parser for the HTML output from highlight.js
  // In a real implementation, you'd want to use a proper HTML parser
  const tokens: any[] = [];
  const regex = /<span class="hljs-([^"]+)">([^<]+)<\/span>|([^<]+)/g;
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    if (match[1] && match[2]) {
      // It's a highlighted token
      tokens.push({
        type: match[1],
        content: match[2]
      });
    } else if (match[3]) {
      // It's plain text
      tokens.push({
        type: 'text',
        content: match[3]
      });
    }
  }
  
  return tokens;
}

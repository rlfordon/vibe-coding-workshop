import { useEffect, useRef } from 'react';

// Map of known npm packages to their browser global variable names
const LIB_GLOBALS = {
  'react': null,        // handled specially
  'react-dom': null,    // handled specially
  'react-dom/client': null,
  'recharts': 'Recharts',
  'lucide-react': 'LucideReact',
  'framer-motion': 'Motion',
};

function parseImports(code) {
  // Match all import statements (including multiline ones)
  const importRegex = /import\s+(?:(\w+)(?:\s*,\s*)?)?(?:\{([^}]*)\})?\s*from\s*['"]([^'"]+)['"]/g;
  const imports = [];
  let match;
  while ((match = importRegex.exec(code)) !== null) {
    const defaultImport = match[1] || null;
    const namedRaw = match[2] || '';
    const source = match[3];
    const named = namedRaw
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .map(s => {
        const parts = s.split(/\s+as\s+/);
        return { original: parts[0], alias: parts[1] || parts[0] };
      });
    imports.push({ defaultImport, named, source });
  }
  return imports;
}

function buildImportShims(imports) {
  const lines = [];
  for (const imp of imports) {
    const globalName = LIB_GLOBALS[imp.source];
    if (globalName === null) continue; // react/react-dom — handled separately
    if (globalName === undefined) continue; // unknown lib — skip, hope for the best

    const lib = `window.${globalName} || {}`;
    if (imp.defaultImport) {
      lines.push(`const ${imp.defaultImport} = ${lib};`);
    }
    if (imp.named.length > 0) {
      const destructures = imp.named.map(n =>
        n.original === n.alias ? n.original : `${n.original}: ${n.alias}`
      ).join(', ');
      lines.push(`const { ${destructures} } = ${lib};`);
    }
  }
  return lines.join('\n');
}

function wrapReactCode(code) {
  const imports = parseImports(code);
  const importShims = buildImportShims(imports);

  // Determine which CDN scripts to include based on what's imported
  const importedSources = new Set(imports.map(i => i.source));
  const cdnScripts = [];
  if (importedSources.has('recharts')) {
    cdnScripts.push('<script src="https://unpkg.com/recharts@2.15.3/umd/Recharts.js" crossorigin><` + `/script>');
  }
  if (importedSources.has('lucide-react')) {
    cdnScripts.push('<script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.js" crossorigin><` + `/script>');
  }
  if (importedSources.has('framer-motion')) {
    cdnScripts.push('<script src="https://unpkg.com/framer-motion@11/dist/framer-motion.js" crossorigin><` + `/script>');
  }

  // Strip all import statements (including multiline) and export default
  let strippedCode = code;
  // Remove all import ... from '...' statements (multiline-safe)
  strippedCode = strippedCode.replace(/import\s+(?:[\w*{}\s,]+)\s+from\s*['"][^'"]+['"];?/g, '');
  // Remove bare imports like import './style.css'
  strippedCode = strippedCode.replace(/import\s+['"][^'"]+['"];?/g, '');

  let componentName = 'App';
  const exportMatch = strippedCode.match(/export\s+default\s+(\w+)/);
  if (exportMatch) {
    componentName = exportMatch[1];
    strippedCode = strippedCode.replace(/export\s+default\s+\w+;?/g, '');
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><` + `/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><` + `/script>
<script src="https://unpkg.com/@babel/standalone@7/babel.min.js"><` + `/script>
<script src="https://cdn.tailwindcss.com"><` + `/script>
<script>window.react = window.React;<` + `/script>
${cdnScripts.join('\n')}
<style>
  body { margin: 0; font-family: system-ui, sans-serif; }
  #error-display { color: red; padding: 20px; font-family: monospace; white-space: pre-wrap; font-size: 13px; }
</style>
</head>
<body>
<div id="root"></div>
<div id="error-display"></div>
<script>
window.onerror = function(msg, url, line, col, err) {
  document.getElementById('error-display').textContent = 'Error: ' + msg + '\\nLine: ' + line;
  return true;
};
<` + `/script>
<script type="text/babel" data-type="module">
const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext, Fragment, memo, forwardRef } = React;

${importShims}

${strippedCode}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(${componentName}));
<` + `/script>
</body>
</html>`;
}

function isReactCode(code) {
  return /^\s*import\s+.*from\s+['"]react['"]/m.test(code) ||
         /^\s*import\s+React/m.test(code) ||
         /export\s+default\s+/m.test(code);
}

function prepareHtml(code) {
  if (isReactCode(code)) {
    return wrapReactCode(code);
  }
  // If it's already full HTML, use as-is
  if (/^\s*<!DOCTYPE|^\s*<html/i.test(code)) {
    return code;
  }
  // Bare HTML snippet — wrap in a basic page
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{margin:0;font-family:sans-serif;}</style></head><body>${code}</body></html>`;
}

export default function SandboxedIframe({ html, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const rendered = prepareHtml(html);
    const blob = new Blob([rendered], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframe.src = url;

    return () => URL.revokeObjectURL(url);
  }, [html]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      sandbox="allow-scripts allow-same-origin"
      className="w-full h-full border-0"
    />
  );
}

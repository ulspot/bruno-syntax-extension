# Bruno Custom Syntax Highlighter

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/your-username/bruno-syntax-extension)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Custom VS Code syntax highlighting for Bruno API (.bru) files with JavaScript and XML support.

> **⚠️ Note:** Example `.bru` files are for demonstration only and have not been tested.

## Features

- **Bruno blocks**: `meta {}`, `post {}`, `script:post-response {}`, `tests {}`, etc.
- **JavaScript highlighting** in script/test blocks
- **XML highlighting** in multipart-form blocks  
- **JSON highlighting** for configuration blocks
- **Variables**: `{{variable-name}}` highlighted consistently

## Installation

### From VSIX (Recommended)
1. Download `bruno-custom-syntax-highlighter-2.0.0.vsix` from releases
2. VS Code → `Ctrl+Shift+P` → "Extensions: Install from VSIX..."
3. Select the downloaded file

### From Source
```bash
git clone https://github.com/your-username/bruno-syntax-extension.git
cd bruno-syntax-extension
npm install -g @vscode/vsce
vsce package
code --install-extension bruno-custom-syntax-highlighter-2.0.0.vsix
```

## Usage

1. Open any `.bru` file
2. Language will be detected automatically
3. Or manually select "Bruno Custom" in language selector

## Architecture

Uses VS Code standard grammars for maximum compatibility:
- `"include": "source.js"` → JavaScript highlighting
- `"include": "text.xml"` → XML highlighting  
- `"include": "source.json"` → JSON highlighting

Benefits: 60% less code, better performance, automatic updates.

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

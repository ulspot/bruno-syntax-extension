# Bruno Custom Syntax Highlighter

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/your-username/bruno-syntax-extension)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Customized** enhanced syntax highlighting for Bruno API (.bru) files with full JavaScript and XML support.

## 🎯 Features

This is a **custom-built** syntax highlighter specifically designed for enhanced Bruno API file support, independent of the official Bruno client.

> **⚠️ Important Note:**  
> The included `.bru` example files are **for syntax highlighting demonstration purposes only**. The scripts, API calls, and configurations have **not been tested** and should not be used in production environments without proper validation and testing.

### 🎨 **Advanced Syntax Highlighting**
- **Bruno-specific blocks**: `meta {}`, `post {}`, `script:post-response {}`, `tests {}`, etc.
- **JavaScript highlighting** in script and test blocks with:
  - Keywords: `const`, `if`, `function`, etc.
  - Bruno functions: `bru.setVar()`, `res.getBody()`, `expect()`
  - Strings, numbers, operators, regex patterns
- **XML highlighting** in multipart-form blocks with:
  - Tags: `<AdminSettings/>`, `<Configuration>`, etc.
  - Attributes and values
  - XML comments
- **Variables**: `{{variable-name}}` highlighted consistently across all contexts

### 📋 **Supported Bruno Blocks**

#### JSON-style blocks:
- `meta {}`
- `post {}`, `get {}`, `put {}`, `delete {}`, etc.
- `settings {}`
- `vars:pre-request {}`
- `vars:post-response {}`
- `assert {}`

#### JavaScript blocks:
- `script:pre-request {}`
- `script:post-response {}`
- `tests {}`

#### Content blocks:
- `multipart-form {}` with XML support
- `docs {}` with Markdown support

## 📁 **Example Files**

The repository includes example `.bru` files in the `04 SNMP Agent & Community Configuration/` folder to demonstrate the syntax highlighting capabilities:

- **Purpose**: Show how different Bruno blocks are highlighted
- **Content**: Firewall API configuration examples with pseudonymized data
- **Status**: ⚠️ **For demonstration only - not tested or validated**

**Before using any example code:**
1. ✅ Replace all `{{variables}}` with your actual values
2. ✅ Test thoroughly in a development environment
3. ✅ Validate API endpoints and authentication methods
4. ✅ Review and adapt scripts to your specific requirements

## 🚀 Installation

### Method 1: Install from VSIX (Recommended)
1. Download the latest `bruno-custom-syntax-highlighter-x.x.x.vsix` from releases
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Extensions: Install from VSIX..."
5. Select the downloaded `.vsix` file

### Method 2: Build from Source
```bash
# Clone repository
git clone https://github.com/your-username/bruno-syntax-extension.git
cd bruno-syntax-extension

# Install dependencies
npm install -g @vscode/vsce

# Build VSIX package
vsce package

# Install in VS Code
code --install-extension bruno-custom-syntax-highlighter-x.x.x.vsix
```

### Method 3: Manual Installation
1. Download and extract the extension folder
2. Copy to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`
3. Restart VS Code

## 📖 Usage

1. Open any `.bru` file
2. The syntax highlighting will be applied automatically
3. If not, click on the language selector (bottom right) and choose **"Bruno Custom"**

## 🔒 **Security & Disclaimer**

### **Example Files Disclaimer**
The included `.bru` example files are provided solely to demonstrate syntax highlighting features. They contain:

- ❌ **Untested API calls and scripts**
- ❌ **Pseudonymized but potentially realistic-looking configurations**  
- ❌ **No warranty or guarantee of functionality**
- ✅ **Examples of Bruno file structure and syntax**

### **Security Best Practices**
- Replace all `{{variables}}` with your actual values
- Use environment variables or Bruno's environment system
- Never commit real credentials to version control
- Test in development environment first
- Validate all API endpoints and authentication methods

### **Variables to Configure**
- `firewall-ip` - Your firewall's management IP
- `username/password` - Admin credentials  
- Network interfaces and IP ranges
- SNMP community strings and settings

## 🏗️ Architecture

Version 2.0 uses a **revolutionary approach** with standard grammar includes:

- **`"include": "source.js"`** → Full JavaScript highlighting
- **`"include": "text.xml"`** → Full XML highlighting  
- **`"include": "source.json"`** → Full JSON highlighting
- **`"include": "text.html.markdown"`** → Full Markdown highlighting

This results in:
- ✅ **60% less code** (85 vs 250 lines)
- ✅ **Better performance** 
- ✅ **Automatic updates** from VS Code core improvements
- ✅ **Consistent behavior** with standard file types

## 🛠️ Development

### File Structure
```
bruno-syntax-extension/
├── package.json
├── language-configuration.json
├── README.md
├── LICENSE
├── .gitignore
├── syntaxes/
│   └── bruno.tmLanguage.json
├── bruno-custom-syntax-highlighter-x.x.x.vsix
└── 04 SNMP Agent & Community Configuration/     # ⚠️ Examples only!
    └── *.bru files (for demonstration purposes)
```

### Building
```bash
# Install VS Code Extension Manager
npm install -g @vscode/vsce

# Create VSIX package
vsce package

# Test installation
code --install-extension bruno-custom-syntax-highlighter-x.x.x.vsix
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bruno API Client team for the awesome tool
- VS Code team for the excellent TextMate grammar system
- All contributors and users of this extension

---

**Made with ❤️ for the Bruno API community**

> **Reminder:** Example files are for syntax highlighting demonstration only and should not be used in production without proper testing and validation.
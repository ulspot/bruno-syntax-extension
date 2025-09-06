const vscode = require('vscode');

function activate(context) {
    console.log('Bruno Syntax Highlighter extension is now active!');
    
    // Register language configuration
    vscode.languages.setLanguageConfiguration('bruno', {
        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
            ['<', '>']
        ],
        autoClosingPairs: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
            ['<', '>'],
            ['"', '"'],
            ["'", "'"],
            ["'''", "'''"]
        ]
    });
}

function deactivate() {
    console.log('Bruno Syntax Highlighter extension is deactivated.');
}

module.exports = {
    activate,
    deactivate
};

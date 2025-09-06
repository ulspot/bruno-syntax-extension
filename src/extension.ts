import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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
            ["'", "'"]
        ]
    });
}

export function deactivate() {
    console.log('Bruno Syntax Highlighter extension is deactivated.');
}

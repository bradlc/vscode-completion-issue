"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider('typescriptreact', {
        provideCompletionItems(document, position, token, context) {
            const simpleCompletion = new vscode.CompletionItem('foo-20');
            simpleCompletion.range = new vscode.Range(new vscode.Position(0, 1), position);
            const simpleCompletion2 = new vscode.CompletionItem('foo-hello');
            simpleCompletion2.range = new vscode.Range(new vscode.Position(0, 1), position);
            return [simpleCompletion, simpleCompletion2];
        },
    });
    context.subscriptions.push(provider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
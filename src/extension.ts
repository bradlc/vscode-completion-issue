/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider('typescriptreact', {
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position,
			token: vscode.CancellationToken,
			context: vscode.CompletionContext
		) {
			const simpleCompletion = new vscode.CompletionItem('foo-20');
			simpleCompletion.range = new vscode.Range(new vscode.Position(0, 1), position);

			const simpleCompletion2 = new vscode.CompletionItem('foo-hello');
			simpleCompletion2.range = new vscode.Range(new vscode.Position(0, 1), position);

			return [simpleCompletion, simpleCompletion2];
		},
	});

	context.subscriptions.push(provider);
}

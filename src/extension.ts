/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider('html', {
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position,
			token: vscode.CancellationToken,
			context: vscode.CompletionContext
		) {
			const item = new vscode.CompletionItem('example');
			item.kind = vscode.CompletionItemKind.Color;
			item.documentation = new vscode.MarkdownString('#f00');

			return [item];
		},
	});

	context.subscriptions.push(provider);
}

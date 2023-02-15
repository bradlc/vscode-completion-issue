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
			const documentation = '#f00';

			const item1 = new vscode.CompletionItem('example (MarkdownString)');
			item1.kind = vscode.CompletionItemKind.Color;
			item1.documentation = new vscode.MarkdownString(documentation);

			const item2 = new vscode.CompletionItem('example (string)');
			item2.kind = vscode.CompletionItemKind.Color;
			item2.documentation = documentation;

			return [item1, item2];
		},
	});

	context.subscriptions.push(provider);
}

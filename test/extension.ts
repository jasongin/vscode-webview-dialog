
import * as vscode from 'vscode';
import * as dialog from '../lib';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
	vscode.commands.registerCommand('vscode-webview-dialog-test.showDialog', showWebview);
}

export async function deactivate(): Promise<void> {
}

async function showWebview(): Promise<void> {
	const d = new dialog.WebviewDialog('webview-dialog-test', 'WebView Dialog Test');

}

import * as vscode from 'vscode';

export class WebviewDialog {
	public readonly panel: vscode.WebviewPanel;

	public constructor(viewType: string, title: string, viewColumn?: vscode.ViewColumn) {
		viewColumn = viewColumn || vscode.ViewColumn.Beside;
		const options: vscode.WebviewOptions | vscode.WebviewPanelOptions = {
		};
		this.panel = vscode.window.createWebviewPanel(
			viewType,
			title,
			viewColumn,
			options);
	}

	public show(): void {
		this.panel.reveal();
	}
}

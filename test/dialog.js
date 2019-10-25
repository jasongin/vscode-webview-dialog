let vscode;
let nameText;
let createButton;
let cancelButton;

window.addEventListener('load', () => {
	// https://code.visualstudio.com/api/extension-guides/webview#scripts-and-message-passing
	try {
		vscode = acquireVsCodeApi();
	} catch (e) {
		// Not running as a VS Code webview - maybe testing in external browser.
		console.error(e.message);
	}

	nameText = document.getElementById('envName');
	createButton = document.getElementById('submitCreate');
	cancelButton = document.getElementById('submitCancel');

	nameText.addEventListener('keyup', validate);
	nameText.addEventListener('change', validate);
	createButton.addEventListener('click', submitCreate);
	cancelButton.addEventListener('click', submitCancel);
});

function submitCreate() {
	// TODO: Fill in other result properties.
	const result = {
		name: nameText.value
	};
	vscode.postMessage({ command: 'result', value: result });
}

function submitCancel() {
	vscode.postMessage({ command: 'cancel' });
}

function validate() {
	const isValid = !!nameText.value;
	createButton.disabled = !isValid;
}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ng-switch" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("ng-switch.switch", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    // vscode.window.showInformationMessage('Hello World from ng-switch!');
    const path = vscode.window.activeTextEditor?.document.uri.fsPath;
    // debugger;

    //   var path =
    // 	"/Users/bharathravi/Desktop/angular/lazy-modal/src/app/elastic-input/elastic-input.component.html";
    var pathArr = path.split("/");
    var isHtml = pathArr[pathArr.length - 1].endsWith(".html") ? true : false;
    if (isHtml) {
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(
        ".html",
        ".ts"
      );
    } else {
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(
        ".ts",
        ".html"
      );
    }
    var openFilePath = pathArr.join("/");
    var openPath = vscode.Uri.file(openFilePath);
    vscode.workspace.openTextDocument(openPath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

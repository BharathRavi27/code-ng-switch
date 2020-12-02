import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("ng-switch.switch", () => {
    const path = vscode.window.activeTextEditor?.document.uri.fsPath || "";
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
export function deactivate() {}

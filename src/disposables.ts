import * as vscode from "vscode";

/** Switch between html, ts and scss files */
export const switchDisposable = vscode.commands.registerCommand(
  "ng-switch.switch",
  () => {
    const path: string =
      vscode.window.activeTextEditor?.document.uri.fsPath || "";
    var pathArr: string[] = path.split("/");
    const isInsideNgFile: boolean =
      pathArr[pathArr.length - 1].includes(".component");
    if (!isInsideNgFile) {
      vscode.window.showWarningMessage(
        "You are probably not inside an Angular component file"
      );
      return;
    }
    const fileNameArr: string[] = pathArr[pathArr.length - 1].split(".");
    switch (fileNameArr[fileNameArr.length - 1]) {
      case "ts":
      case "css":
      case "scss":
      case "sass":
      case "less":
        fileNameArr[fileNameArr.length - 1] = "html";

        pathArr[pathArr.length - 1] = fileNameArr.join(".");
        break;
      case "html":
      default:
        pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(
          ".html",
          ".ts"
        );
        break;
    }
    var openFilePath: string = pathArr.join("/");
    var vsCodeOpenPath: vscode.Uri = vscode.Uri.file(openFilePath);
    vscode.workspace.openTextDocument(vsCodeOpenPath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  }
);

/** Switch between spec and ts files */
export const switchSpecDisposable = vscode.commands.registerCommand(
  "ng-switch.switchspec",
  () => {
    const path: string =
      vscode.window.activeTextEditor?.document.uri.fsPath || "";
    var pathArr: string[] = path.split("/");
    const isSpecFile = pathArr[pathArr.length - 1].endsWith(".spec.ts");
    if (isSpecFile) {
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(
        ".spec.ts",
        ".ts"
      );
    } else {
      pathArr[pathArr.length - 1] = pathArr[pathArr.length - 1].replace(
        ".ts",
        ".spec.ts"
      );
    }
    var openFilePath: string = pathArr.join("/");
    var vsCodeOpenPath: vscode.Uri = vscode.Uri.file(openFilePath);
    vscode.workspace.openTextDocument(vsCodeOpenPath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  }
);

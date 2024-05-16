import * as vscode from "vscode";
import { switchDisposable, switchSpecDisposable } from "./disposables";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(switchDisposable);
  context.subscriptions.push(switchSpecDisposable);
}

export function deactivate() {}

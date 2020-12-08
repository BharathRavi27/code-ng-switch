# ng-switch

Simple VS Code extension enabling file switching between template and controller files in Angular projects

![demo](demo.gif)

## Features

Press `Ctrl+Alt+Y` or `Cmd+Y`(mac) to make the switch!

Or type `switch` in vscode command pallete(`Ctrl+Shift+P`)

If in a stylesheet, pressing `Ctrl+Alt+Y` or `Cmd+Y` will switch to the templating file

## Keybinding conflict issue

Some devices might have keybinding conflicts with other extensions. In that case

- Open vscode command pallete(`Ctrl+Shift+P`).
- Search for **Open Keyboard Shortcuts**.
- Find `Alt+Ctrl+Y`.
- If there are multiple entries, assign a different binding for `switch` command as convenience.

## Release Notes

### 1.0.0

Initial release of ng-switch with minimal functionality.

### 1.1.0

Added support for stylesheet switching.

### 1.1.1

Key binding for non-mac devices changed to `Ctrl+Alt+Y`.

**Enjoy!**

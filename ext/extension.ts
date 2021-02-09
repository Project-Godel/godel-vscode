import { extensions, ExtensionContext, commands, Uri, window } from 'vscode';

import { run } from './godel';

export async function activate(context: ExtensionContext) {
  const spooky = extensions.getExtension('jsannemo.spooky');
  if (!spooky) {
    window.showErrorMessage("Could not load Spooky extension.");
    return;
  }
  spooky.activate().then(() => {
    context.subscriptions.push(commands.registerCommand("projectgodel.run", (fileUri: Uri) => {
      run(fileUri.path);
    }));
  });
}
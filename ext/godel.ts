import * as path from 'path';
import { window, extensions, commands } from 'vscode';
import * as shellescape from 'shell-escape';

export async function run(sourcePath: string) {
    const spooky = extensions.getExtension('jsannemo.spooky');
    const spookyApi = spooky?.exports;
    console.log(spookyApi);
    const spookyPath = spookyApi.getSpookyPath();
    const javaPath = spookyApi.getJavaPath();

    window.showOpenDialog({
        canSelectMany: false,
        openLabel: 'Test',
    }).then(fileUri => {
        if (fileUri && fileUri[0]) {
            console.log([javaPath, "--enable-preview", "-cp", spookyPath, "-jar", getHarnessPath(), sourcePath, fileUri[0].path]);
            commands.executeCommand("workbench.action.terminal.toggleTerminal").then(() => 
                window.activeTerminal?.sendText(shellescape(
                    [javaPath, "--enable-preview", "-cp", spookyPath, "-jar", getHarnessPath(), sourcePath, fileUri[0].path])));
            }
    });
}

const extDir = extensions.getExtension("jsannemo.projectgodel")?.extensionPath;

export function getHarnessPath(): string | null {
    if (!extDir) {
        return null;
    }
    return path.join(extDir, "harness.jar");
}
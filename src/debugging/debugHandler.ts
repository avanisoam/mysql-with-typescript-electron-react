import { DebugState } from './debugstate';
import { BrowserWindow } from 'electron';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer';

export async function EnableDebugExtensions(state: DebugState, mainWindow: BrowserWindow) {
  if (state.reactDevToolsEnabled) {
    await installExtension(REACT_DEVELOPER_TOOLS);
  }

  if (state.reduxDevToolsEnabled) {
    await installExtension(REDUX_DEVTOOLS);
  }
  
  if (state.isDevMode) {
    mainWindow.webContents.openDevTools();
  }

  return state;
}

export function GetDebugState(): DebugState {
  let reactDevToolsEnabled = false;
  let reduxDevToolsEnabled = false;
  let openChromeDevTools = false;
  let isDevMode = false;
  var args = process.argv;

  if (process.execPath.match(/[\\/]electron/)) {
    isDevMode = true;

    for (let index = 0; index < args.length; index++) {
      const element = args[index];
      if (element === '--debugreact') {
        reactDevToolsEnabled = true;
      }
      if (element === '--debugredux') {
        reduxDevToolsEnabled = true;
      }
      if (element === '-debug') {
        openChromeDevTools = true;
      }
    }
  }

  return {
    isDevMode,
    reactDevToolsEnabled,
    reduxDevToolsEnabled,
    openChromeDevTools
  };
}

export default { EnableDebugExtensions, GetDebugState };

const { remote, shell } = require('electron');

const {
    Menu, MenuItem, dialog, app,
} = remote;

const rootMenu = new Menu();

// ----------------------------------------------------------------------------
// Build the menus
// ----------------------------------------------------------------------------
function buildRootMenu(m) {
    men = new Menu();
    men.append(new MenuItem({
        label: 'Open',
        click: () => { console.log('Open clicked') },
        accelerator: 'CommandOrControl+O'
    }));
    men.append(new MenuItem({
        type: 'separator',
    }));
    men.append(new MenuItem({
        label: 'Quit',
        role: 'quit'
    }));

    m.append(new MenuItem({
        label: 'File',
        submenu: men
    }));
}

// ----------------------------------------------------------------------------
module.exports = {
    init() {
        buildRootMenu(rootMenu);

        Menu.setApplicationMenu(rootMenu);
    }
}
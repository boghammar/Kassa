const ipc = require('electron-better-ipc');
const menus = require('./renderer/menus');
const kassa = require('./renderer/kassa');

const modules = {
    menus, 
    kassa,
};

// ----------------------------------------------------------------------------
// Init all renderer modules
// ----------------------------------------------------------------------------
menus.init();
kassa.init();
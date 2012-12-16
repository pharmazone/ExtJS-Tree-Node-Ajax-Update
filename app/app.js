Ext.Loader.setConfig({
    enabled: true
});
//Ext.Loader.setPath('Ext.ux', 'src/ux');

Ext.onReady(function() {
    Ext.require([
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.ux.CheckColumn'
    ]);
});

Ext.application({
    //controllers: ["Main"],
    models: ["TreeModel"],
    stores: ["TreeStore"],
    views: ["Main"],

    name: 'Tree',
    autoCreateViewport: true
});

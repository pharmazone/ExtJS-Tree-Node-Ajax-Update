Ext.Loader.setConfig({
    enabled: true
});

Ext.onReady(function() {
    Ext.require([
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*'
    ]);
});

Ext.application({
    models: ["TreeModel"],
    stores: ["TreeStore"],
    views: ["Main"],

    name: 'Tree',
    autoCreateViewport: true
});

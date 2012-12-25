Ext.define('Tree.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',

    items: [{
        xtype: 'tree',
    }]
});
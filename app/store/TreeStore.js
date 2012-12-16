Ext.define('Tree.store.TreeStore',{
    extend: 'Ext.data.TreeStore',
    model: 'Tree.model.TreeModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'data/tree.json'
    }
});

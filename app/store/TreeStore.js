Ext.define('Tree.store.TreeStore',{
    extend: 'Ext.data.TreeStore',
    model: 'Tree.model.TreeModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'data/files.php'
    },
    listeners:{
        _load: function(node, records, successful, eOpts ){
            console.log('-------------');
            console.log('Node: ', node);
            console.log('Records: ', records );
            console.log('Eopts: ', eOpts );
        }
    },
});

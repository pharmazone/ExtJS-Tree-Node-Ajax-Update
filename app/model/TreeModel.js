Ext.define('Tree.model.TreeModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'path', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'size', type: 'string' }
    ]
});


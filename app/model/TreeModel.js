Ext.define('Tree.model.TreeModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'task', type: 'string' },
        { name: 'user', type: 'string' },
        { name: 'duration', type: 'string' },
        { name: 'done', type: 'boolean' }
    ]
});


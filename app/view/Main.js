Ext.define("Tree.view.Main", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.tree',

    store: 'TreeStore',
    useArrows: true,
    rootVisible: false,

    columns:[{
        xtype: 'treecolumn',
        text: 'Task',
        flex: 2,
        dataIndex: 'name'
    },{
        text: 'Size',
        flex: 1,
        dataIndex: 'size',
        sortable: true
    }, {
        text: 'Edit',
        width: 40,
        menuDisabled: true,
        xtype: 'actioncolumn',
        tooltip: 'Edit task',
        align: 'center',
        icon: 'resources/images/edit_task.png',
        handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
            var store = Ext.getStore('TreeStore');
            store.getProxy().extraParams.token = 'token';
            var res = store.load({
                node: record, 
                callback: function(newRecords){
                    // Clean up Proxy extra Parameters
                    this.getProxy().extraParams = {};
                    // NewRecords is array of new nodes.
                    // We know that we always have only on new node to update.
                    var newRecord = newRecords[0];
                    // raplace old node with updated one
                    record.parentNode.replaceChild(newRecord, record);
                }
            });
        },
        // Only leaf level tasks may be edited
        isDisabled: function(view, rowIdx, colIdx, item, record) {
            return !record.data.leaf;
        }
    }
    ]
});
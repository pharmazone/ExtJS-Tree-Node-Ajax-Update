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
        xtype: 'checkcolumn',
        header: 'Done',
        dataIndex: 'done',
        width: 40,
        stopSelection: false
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
                callback: function(a,d,f){
                    this.getProxy().extraParams = {};
                    var record2 = a[0];
                    record.parentNode.replaceChild(record2, record);
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
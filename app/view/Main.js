Ext.define("Tree.view.Main", {
    extend: 'Ext.tree.Panel',
    alias: 'widget.tree',

    store: 'TreeStore',
    //collapsible: false,
    useArrows: true,
    rootVisible: false,
    //multiSelect: false,
    //singleExpand: true,

    columns:[{
        xtype: 'treecolumn',
        text: 'Task',
        flex: 2,
        dataIndex: 'task'
    },{
        //we must use the templateheader component so we can use a custom tpl
        xtype: 'templatecolumn',
        text: 'Duration',
        flex: 1,
        sortable: true,
        dataIndex: 'duration',
        align: 'center',
        //add in the custom tpl for the rows
        tpl: Ext.create('Ext.XTemplate', '{duration:this.formatHours}', {
            formatHours: function(v) {
                if (v < 1) {
                    return Math.round(v * 60) + ' mins';
                } else if (Math.floor(v) !== v) {
                    var min = v - Math.floor(v);
                    return Math.floor(v) + 'h ' + Math.round(min * 60) + 'm';
                } else {
                    return v + ' hour' + (v === 1 ? '' : 's');
                }
            }
        })
    },{
        text: 'Assigned To',
        flex: 1,
        dataIndex: 'user',
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
            Ext.Msg.alert('Editing' + (record.get('done') ? ' completed task' : '') , record.get('task'));
        },
        // Only leaf level tasks may be edited
        isDisabled: function(view, rowIdx, colIdx, item, record) {
            return !record.data.leaf;
        }
    }
    ],
    html: 'Hello, World!!'
});
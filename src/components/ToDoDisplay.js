var ToDoDisplay = function(React, rBootstrap) {
    // Bootstrap Form
    var Checkbox = rBootstrap.Checkbox;

    // Bootstrap List Group
    var ListGroup = rBootstrap.ListGroup;
    var ListGroupItem = rBootstrap.ListGroupItem;
    
    var setFinished = function (i) {
        this.props.data[i].changeState();
        this.props.onItemUpdate();
    };
    
    return React.createClass({
        render: function() {
            // Self referencing variable
            var self = this;
            // Iterate through the ToDo list
            var listItems = self.props.data.map(function(item, i){
                return (
                    // Set style to "success" if to-do item has been completed, else nothing
                    // On click, passes the self reference, the current array position, and the data object
                    // If item is "finished", checkbox should be checked.
                    <ListGroupItem key={i} bsStyle={(item.finished ? 'success' : '')} onClick={setFinished.bind(self, i)}>
                        <Checkbox inline checked={item.finished}>
                            {item.description}
                        </Checkbox>
                    </ListGroupItem>
                )
            });
            return (
                <ListGroup>
                    {listItems}
                </ListGroup>
            );
        }
    });
}

module.exports = ToDoDisplay;
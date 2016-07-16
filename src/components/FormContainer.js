var FormContainer = function(React, rBootstrap, Item, ToDoInput, ToDoDisplay, todoList) {
    // Bootstrap Grid
    var Grid = rBootstrap.Grid;
    var Row = rBootstrap.Row;
    var Col = rBootstrap.Col;
    
    return React.createClass({
        getInitialState: function() {
            // Sets initial data to an empty array
            return { data: []};
        },
        handleDataChange: function() {
            // On data change, set data to equal the todoList.
            this.setState({data: todoList})
        },
        render: function () {
            return (
                <div>
                    <Grid>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                <ToDoInput onToDoSubmit={this.handleDataChange}></ToDoInput>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                <ToDoDisplay data={this.state.data} onItemUpdate={this.handleDataChange}></ToDoDisplay>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        }
    });
}

module.exports = FormContainer;
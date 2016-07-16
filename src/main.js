// Dependencies that are purely front-end dependencies.
require('jquery');
require('bootstrap-webpack');

var Item = require('./ItemClass.js')

// Dependencies that actually get used.
var React = require('react');
var ReactDOM = require('react-dom');
var rBootstrap = require('react-bootstrap');

// Bootstrap Grid
var Grid = rBootstrap.Grid;
var Row = rBootstrap.Row;
var Col = rBootstrap.Col;

// Bootstrap Form
var Form = rBootstrap.Form;
var FormGroup = rBootstrap.FormGroup;
var InputGroup = rBootstrap.InputGroup;
var FormControl = rBootstrap.FormControl;
var Button = rBootstrap.Button;
var Checkbox = rBootstrap.Checkbox;

// Bootstrap List Group
var ListGroup = rBootstrap.ListGroup;
var ListGroupItem = rBootstrap.ListGroupItem;

// Stores the ToDo list.
var todoList = [];

var ToDoInput = React.createClass({
    getInitialState: function() {
        // Initial box is empty.
        return {text: ''};
    },
    handleTextChange: function(e) {
        // When input text changes, set the state "Text" to the current value of the input
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        // Prevents default form actions.
        e.preventDefault();
        // Creates new Item and stores to the todo list.
        todoList.push(new Item(this.state.text.trim()));
        // Resets text state to empty
        this.setState({text: ''});
        // Triggers update of the ToDo List
        this.props.onToDoSubmit();
    },
    render: function () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Enter your task here"></FormControl>
                        <InputGroup.Button>
                            <Button bsStyle="success" type="submit">Submit</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
});

/**
 * Need to figure how to move this into a component
 * @param i {number} - current item position in array
 */
var setFinished = function (i) {
    this.props.data[i].changeState();
    this.props.onItemUpdate();
};

var ToDoList = React.createClass({
    render: function() {
        // Self referencing variable
        var self = this;
        // Iterate through the ToDo list
        var listItems = self.props.data.map(function(item, i){
            return (
                // Set style to "success" if to-do item has been completed, else "info"
                // On click, passes the self reference, the current array position, and the data object
                // If item is "finished", checkbox should be checked.
                <ListGroupItem key={i} bsStyle={(item.finished ? 'success' : 'info')} onClick={setFinished.bind(self, i)}>
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

var FormContainer = React.createClass({
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
                            <ToDoList data={this.state.data} onItemUpdate={this.handleDataChange}></ToDoList>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

// Renders page
var Page = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center">React To-Do List</h1>
                <FormContainer></FormContainer>
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(Page, null),
    document.getElementById('main')
);
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

// Bootstrap Fade
var Fade = rBootstrap.Fade;

var todoList = [];

var ToDoInput = React.createClass({
    getInitialState: function() {
        return {text: ''};
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        todoList.push(new Item(this.state.text.trim()));
        this.setState({text: ''});
        this.props.onToDoSubmit();
        console.log(todoList)
    },
    render: function () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" value={this.state.text} onChange={this.handleTextChange}></FormControl>
                        <InputGroup.Button>
                            <Button bsStyle="success" type="submit">Submit</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
});

var setFinished = function (i, data) {
    data[i].changeState();
    this.props.onItemUpdate();
    console.log(data[i]);
};

var ToDoList = React.createClass({
    test: function() {
        console.log('changed');
    },
    render: function() {
        var self = this;
        var listItems = self.props.data.map(function(item, i){
            return (
                <ListGroupItem key={i} bsStyle={(item.finished ? 'success' : 'info')} onChange={self.test} onClick={setFinished.bind(self, i, self.props.data)}>
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
        return { data: []};
    },
    handleDataChange: function() {
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
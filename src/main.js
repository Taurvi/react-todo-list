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

var FormContainer = React.createClass({
    render: function () {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} xsOffset={3}>
                            <ToDoInput></ToDoInput>
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
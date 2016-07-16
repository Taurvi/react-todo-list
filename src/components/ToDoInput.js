var ToDoInput = function(React, rBootstrap, Item, todoList) {
    var Form = rBootstrap.Form;
    var FormGroup = rBootstrap.FormGroup;
    var InputGroup = rBootstrap.InputGroup;
    var FormControl = rBootstrap.FormControl;
    var Button = rBootstrap.Button;
    
    return React.createClass({
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
}

module.exports = ToDoInput;
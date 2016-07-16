// Dependencies that are purely front-end dependencies.
require('jquery');
require('bootstrap-webpack');

// Item Class
var Item = require('./classes/ItemClass.js');
// Dependencies that actually get used.
var React = require('react');
var ReactDOM = require('react-dom');
var rBootstrap = require('react-bootstrap');

// Stores the ToDo list.
var todoList = [];

// Grabs the various components.
var ToDoInput = require("./components/ToDoInput.js")(React, rBootstrap, Item, todoList);
var ToDoDisplay = require("./components/ToDoDisplay.js")(React, rBootstrap);
var FormContainer = require("./components/FormContainer.js")(React, rBootstrap, Item, ToDoInput, ToDoDisplay, todoList);
var Page = require("./components/Page.js")(React, FormContainer);

// Renders the page.
ReactDOM.render(
    React.createElement(Page, null),
    document.getElementById('main')
);
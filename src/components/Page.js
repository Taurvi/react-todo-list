var Page = function(React, FormContainer) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <h1 className="text-center">React To-Do List</h1>
                    <FormContainer></FormContainer>
                </div>
            );
        }
    });
}

module.exports = Page;
var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var helpers = require("./helpers");

var App = React.createClass({
    render: function() {
        return (
            <div>
                App
            </div>
        )
    }
});

var NotFound = React.createClass({
    render: function() {
        return <h1>Not Found :(</h1>;
    }
});

var routes = (
    <Router history={BrowserHistory}>
        <Route path="/" components={App} />
        <Route path="*" components={NotFound} />
    </Router>
);

ReactDOM.render(routes, document.querySelector("#app"));

var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var helpers = require("./helpers").default;

var Header = React.createClass({
    mixins: [BrowserHistory],
    goTo: function(e) {
        this.push(e.target.dataset.href);
    },
    render: function() {
        return <nav className="navbar navbar-info navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-info"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                            <a className="navbar-brand" data-href="/" onClick={this.goTo} >URL Shortener</a>
                        </div>
                        <div className="collapse navbar-collapse" id="example-navbar-info">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active">
                                    <a data-href="/create/" onClick={this.goTo}>
                                        Create short url!
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>;
    }
})

var Details = React.createClass({
    getInitialState: function() {
        console.log(this.props);
        return {
            url: this.props.data.url,
            shortUrl: this.props.data.shortUrl,
            created: this.props.data.created
        };
    },
    render: function() {
        return <div className="sh-list-item">
                    <div className="sh-list-item-main-column">{this.state.url}</div>
                    <div className="sh-list-item-secondary-column">{this.state.shortUrl}</div>
                    <div className="sh-list-item-secondary-column">{this.state.created}</div>
                </div>;
    }
});

var List = React.createClass({
    getInitialState: function() {
        return {
            urls: [
                {
                    url: "twitter.com/toonyhc",
                    shortUrl: "/tohc",
                    created: "10/Feb/2017"
                },
                {
                    url: "facebook.com/me",
                    shortUrl: "/fbme",
                    created: "12/May/2016"
                },
                {
                    url: "google.com.mx",
                    shortUrl: "/goog",
                    created: "29/Dec/2016"
                }
            ]
        }
    },
    render: function() {
        return <div>
            <div>
                <h3>List of URLs</h3>
            </div>
            <div>
                <div className="sh-list-item sh-list-item-headers">
                    <div className="sh-list-item-main-column">Original Url</div>
                    <div className="sh-list-item-secondary-column">Short Url</div>
                    <div className="sh-list-item-secondary-column">Created</div>
                </div>
                {this.state.urls.map(function(url){
                    return <Details data={url} key={helpers.generate_UUID()} />
                })}
            </div>
        </div>;
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container sh-container">
                    <List />
                </div>
            </div>
        )
    }
});

var CreateUrl = React.createClass({
    render: function() {
        return <div>
                    <Header />
                    <div className="container sh-container">
                        <h1>Creating new url</h1>
                    </div>
                </div>;
    }
});

var NotFound = React.createClass({
    render: function() {
        return <div>
                    <Header />
                    <div className="container sh-container">
                        <h1>Not Found :(</h1>
                    </div>
                </div>;
    }
});

var routes = (
    <Router history={BrowserHistory}>
        <Route path="/" components={App} />
        <Route path="/create" components={CreateUrl} />
        <Route path="*" components={NotFound} />
    </Router>
);

ReactDOM.render(routes, document.querySelector("#app"));

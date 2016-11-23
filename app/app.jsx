var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Flow = require('Flow');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}> 		
  		<IndexRoute component={Flow} />

  	</Route>
  </Router>,
  document.getElementById('app')
);

      // <Route path="/headaches" component={Headaches} />
      // <Route path="/blog" component={Blog} />
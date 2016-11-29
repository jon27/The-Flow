var React = require('react');

var Quote = React.createClass({
  render: function() {
    return (
    <div className="news-letter-container">
      <div className="quote-container">
        <div className="quote-image"></div>
      </div>
      <div className="go-with-the-flow">
        <h1>The Flow appreciates you</h1>
        <p>
         <span className="quote">&#8220; </span>The Flow would like to thank everyone for their patience and support on our new venture. Also to all of those students on that back to school flow, we want to 
          wish you a great upcoming year! Stay tuned because we are launching our product soon and we would like for you to be a part of The Flow movement. <span className="quote"> &#8221;</span>
                  </p>
          <div className="quote-name">- Omar M. Khan & Juan S. Gallo</div>

      </div>
    </div>
    );
  }
});

module.exports = Quote;
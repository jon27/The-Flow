var React = require('react');
var Banner = require('Banner');
var AboutTheFlow = require('AboutTheFlow');
var Store = require('Store');
var Quote = require('Quote');
var Contact = require('Contact');

var Flow = React.createClass({

handleImageLoaded : function(){
  $('.flow-banner').fadeIn(2000);
},

  render: function() {
    return (
    <div>
      <Banner />
      <AboutTheFlow />
      <Store />
      <Quote />
      <h1 className="contact-title">Follow Us</h1>
      <Contact />      
    </div>
    );
  }
});

module.exports = Flow;
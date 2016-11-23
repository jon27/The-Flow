var React = require('react');

var Flow = React.createClass({


// onHover : function(){
//   $('.flow-banner').fadeOut(2000);
// },
handleImageLoaded : function(){
  $('.flow-banner').fadeIn(2000);
},

  render: function() {
    return (
    <div>
    <div className="container">
      <div className="flow-img">
        <div className="banner">
          <img className="sun" src="https://www.dropbox.com/pri/get/The%20FLOW/SunAlone.gif?raw=1&_subject_uid=624034348&w=AADfiIsWiVAe3BQ7XvPq5ILgG7J39Wxh61b8MHTElN79pg&size=1600x1200&size_mode=3" />
          <img className="flow-alone" src="https://www.dropbox.com/pri/get/The%20FLOW/flowAlone.gif?raw=1&_subject_uid=624034348&w=AAAbI6XCVh2z4aCAniocH8Hj77N4q_Tto7lItuavuCvC0A&size=1600x1200&size_mode=3" />
        </div> 
        <div className="ssk-group ssk-lg share">
          <h4>Share The Flow</h4>
            <a href="https://www.facebook.com" className="ssk ssk-facebook"></a>
            <a href="https://www.twitter.com" className="ssk ssk-twitter"></a>
            <a href="https://plus.google.com" className="ssk ssk-google-plus"></a>
          </div>
      </div>
    </div>
      <div className="flow">
        <h1>The Flow</h1>
        <p>
          A Florida inspired lifestyle and brand focusing on the principle of going with the flow. We all face different trials and tribulations that prevents
          us from reaching the ultimate level of success, whether it be mental, physical, social or financial. It is up to us to not let those things interfere
          with our daily lives. Learn to go with the flow, bu liing life without regret and full of passion. Conquer all challenges that life throws your way, never give
          up, and be a better you. whether you are from the southern most point of Florida, Gulf Coast, Central Florida, Northern Florida or anywhere around the world We
          are united as one. Join the movement and just GO WITH THE FLOW.
        </p>
      </div>
      <div className="go-with-the-flow">
        <h1>The Flow appreciates you…</h1>
        <p>
          The Flow would like to thank everyone for their patience and support on our new venture. Also to all of those students on that back to school flow, we want to wish you a great upcoming year! Stay tuned because we are launching our product soon and we would like for you to be a part of The Flow movement. If you have any questions about our brand please feel free to comment below.
        </p>
      </div>
    </div>
    );
  }
});

module.exports = Flow;
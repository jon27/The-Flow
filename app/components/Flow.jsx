var React = require('react');

var Flow = React.createClass({

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
          up, and be a better you. Whether you are from the southern most point of Florida, Gulf Coast, Central Florida, Northern Florida or anywhere around the world We
          are united as one. Join the movement and just GO WITH THE FLOW.
        </p>
      </div>

    <div className="news-letter-container">
      <div className="go-with-the-flow">
        <h1>The Flow appreciates you…</h1>
        <p>
          The Flow would like to thank everyone for their patience and support on our new venture. Also to all of those students on that back to school flow, we want to 
          wish you a great upcoming year! Stay tuned because we are launching our product soon and we would like for you to be a part of The Flow movement. If you have any 
          questions about our brand please feel free to comment below.
        </p>
      </div>

      <div className="news-letter">
        <h3>News Letter</h3>
        <ul>
          <li><a>August 2016</a></li>
          <li><a>September 2016</a></li>
          <li><a>October 2016</a></li>
          <li><a>November 2016</a></li>
        </ul>
      </div>
    </div>

      <div className="store">
        <div className="store-logo main-store-div"></div>
        <div className="main-store-div">
          <div className="shirt-image">
            <div className="options">
              <a href="#"><div className="black"></div></a>
              <a href="#"><div className="blue"></div></a>
              <a href="#"><div className="grey"></div></a>
            </div>
          </div>
        </div>
        <div className="hoodies main-store-div">
          <div className="options">
              <a href="#"><div className="black"></div></a>
              <a href="#"><div className="blue"></div></a>
              <a href="#"><div className="grey"></div></a>
            </div>
        </div>
        <div className="hats main-store-div">
          <div className="options">
            <a href="#"><div className="black"></div></a>
            <a href="#"><div className="blue"></div></a>
            <a href="#"><div className="grey"></div></a>
           </div>  
        </div>
      </div>
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact">

        <div className="social-icons">
          <a href="https://" target="_blank"><img src="https://lh3.googleusercontent.com/g1GT2eVsddhTRUgg4Yn22_H3vTJbl_N6TrKbPMWNCfu7ga7zHJBLFq2Xg1l6W4yKYtjKrDCH8LM08MSah7qJJo_vryW5ytOrecHz3uDqnwOBYENx5eCarYQlNeqOzacqrSgahmo7fVfQrk4ildzb7zz_bs9vyUdMKIPAEn8nTZvs5KaIO9qmjqC2eCPeKfl0rh50oZTW4m_ULbm3UyEdxzPgTZGg8EUP3nXWA_teR-CgNQFXm6IK1zQZl2D_i5HVs0CcXrixWeH56aEt2pCq_hYffbMbCOkHQmnSfIY6vYlQl6njuWjYs5GcRhVz8JIy1hjHNhTJX2YhlKYSpE30cv4Dncu3lIalBpBp6j8iXMEj8bMi2PxyjdZWL9NpApJ234PXVZsN6WZaxZIje-gaRfCbkW17fLnG6VjkyFaISoNzEw8Ik5CK24paMlSoXjneLUFMpM_jYrDptJXYhPfKb9AO5ETJTpuCFmAs5K3f3Tm91fRsLSFYrUkM0vbfC-7mAkbMx5rgylgjdsc-2C4LDKBHtiLrSwTYSMpPUNY57GxX4QtVi7BIphoGk55nVkXLYv9j87MuHr_btLkwi4YyH1--ssdPyFFGWtfjbJqH3EUnOJcn=s128-no" /></a>
        </div>  
        <div className="social-icons">  
          <a href="https://" target="_blank"><img src="https://lh3.googleusercontent.com/wtIfsHJj4u7kjRfvD-zzYidUfCinm5_aYKJB1h1zsgTmvmLjvKkF8kj7QcvGTQBuOnzTRLfIFjpVHIxeJ57fE92ZLMgK4JuJvZ0f_VxtFOYxrO1tB4irNCAvYswA50sRMbfssJWy1ZJWL6EIWf0779LrQORqlSq22feOyZLmKAX8QfboDNdrmb9dtZukgr4ww7E3rnxDtIYdQWpLLgV4Jwmn00YncTAD3NyoUJgNZ79E62PrQkTACIZWofssmWmMkinn74-PmEyOGtIKZZDDOLTIOyJu5cn0W1yvxc_71Q1HmQs1M4aUx9u6FTEsNeExZR_8MGXREDw4zOel7W24tGh1DQOfhcCw5J_Gvw-KTpxvaHSHAcNtbHtwUCemle50V6SPFLPqlMscw89tTJJVliQuwPxgaEfh7zzsUoa8ZvYJAkfvwT8616UPRI-U_YcpJrNTFujXGvn_LFA78ARJC1QwjB7Q_8-bFNOYHS_jQJij9yAjNLsm6-ENoc2VsFSR2YVlD-hytpkeTHdtkrwRMZSaqtI8vxWCGwaDamn3-vuE7Z3acp4FrrF-JkPI7vqmPOUJjwmBRJrvEPu4yLQHmLJ1D5V-aCs6Dviu08rlS5ydZLH1=s128-no" /></a>
        </div>  
        <div className="social-icons">  
          <a href="https://" target="_blank"><img src="https://lh3.googleusercontent.com/bTSX7fbDwVLors01VI9OCFc8DP990AeI0sqUV95mg4qzPZNwIadLDJZHJJY9pc06pVWlirbtTJgdDTagN9v2Fa5s6FlnP3iDiKXWIJIyaIe7qjfQZE-MEpldwKzqL88Rs5SGZICUfVGlue0Idp8FAzmnQu9EB_4y_ACrtv-TzWEStv5TQD68W7YO_XpgifCkMVl-p9g1IkUIYtM5_do4DeSLI3euG9-OOuB51Zc2kfmeWU1dUg3AtakgvIHO41PF-jcUDRsRXiL1LZLDdJ4tg8cJEXzgfsReETIrHSerK0e115QfuHeOfdYmR5vVMCm7MmwaCK4ZoN57keT5t-KS5N-gxykWYMwn5cEEXjiLQkPdNB0KcquDAmdSxKmXvpsj6jsik85xQbcIhR-GO8G8oAld2KFb64qNoUF1odHmIFgtueXv8KNepcdbsClZKJF2pJ0Lk1nrNmy1yO01PoTvvt0VocbsiJgGo50cE04P9rGLm8aAkqVJp41HDlZlLqJYwDUVOKI8ewbHAOPMd3L6R5dztcfFNFKmrV9ezzXSqQhKZ_YXuwdMrW0GXX8_mgWBt3K4ZEvp_BrxQylh1sZ6j2hkGcARJbnserZgcJVeb2ZOC5MR=s128-no" /></a>
        </div>  
        
      </div>      
    </div>
    );
  }
});

module.exports = Flow;
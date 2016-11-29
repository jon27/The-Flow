var React = require('react');

var Banner = React.createClass({
  render: function() {
    return (
    <div className="container">
      <div className="flow-img">
        <div className="banner">
          <img className="sun" src="https://lh3.googleusercontent.com/0waJLbZE1GpoKUxPJyJB3U1AhxbHVGjg84Ket-l79MqYynvlB7yOokWKu-loDZlVhwppuWtOzG0gZweSLzo1O7cURAEdV2SvRgoHnYVjKM2R0Pju_8I4zUAaZDqoy0lH0DbbYf9PzQG8HN1pLJQe6KYJ7Q11pkAMnSZkuZB8wnCo2Mv-0MHPMx-6LBaYw3W_uxmhRwbqi6pCh7zFr8jbxOcbyLiSf_Gec5rC1McIUU18DADKbK8HD1I4p6N8BV0Blk7Fbt4dhXYKWppL0WLIU8tWKWaHEMNFBJHkSQPU5mvxyVGlnvdgZKydH-z_L9al9v0HQUzRlxPtTJpAIBp9MfohVchhu9k9x2W6dfBXDZ9-L6_4372B_hsSviReLX2zRE9hZ5pIdMPI6JtDPgSvbpgnCEz69rL0EOzAeeSV0yA3CfMG2S3l_tyqaPWheimdaMLTWPsHYeaKc5OG0-U6Rx6rmE0EhYni5h0nrQb2Y7zTnd1UinWn4Y6hnWAW57nS18qzlD_chN1YsuV-DaQy4kzzF-xJjwwx22jYc61Z_BH7HI5yKKWrdi6abgVpaPPRs2ehyJjq_jj238pBImL-adaEm9cSWUgYSYPeIBEIVZ0edBaZ=s832-no" />
          <img className="flow-alone" src="https://lh3.googleusercontent.com/m9MBCFfezzbpeskLWvqB0lakgS4N-UlOQeFVhsv-iAfG5AS4Dh_tLn-4bt7wyeiFRXW8qb2bhpNUN8pLX8UeVceeJBk4BYfCzeSKDbCJjFslm5jeba_sxfOgXWg2REDfjKx4iXD6bx-Fg-imPf6xd1E7vYi-VeoMctGy5IeVXPEQCGt13_DE2vCKKOIwo6IEV-MrzMU8Y57cRBWyXsIk_9UFPq0fHdm9fdz49U9Eg9xTEOUadk2e1Fg7U2UNj7x9tsO784ISXama-M87bxPr9u8JZ4YZZj3ILqCweRo_QUi5fZ8akyj4HDYUjYRXa02A0Y2OeHmtTxigU1KwYwlrhKckp2WlNc4G6385hZ_smHiOIh8IFGj4SYi1PSY91vh0-7bld5MBXTyYxGSU7eTSY8u1wV5SkR8tJ1rZaL63krbfsVXGBhrdQ3FJO-GZu7lTWgU8sar5sV8vToxAw8pyC0bJg5YNBi45NR1Wj1nQExWhj6-tjnFx7dMTO6VE-0UI6HPPOR1OtMVLyIkyNuVs-b68FduPBhzwKMuSKbC2l_IxzP1mrmKRNrtehUJ-ytsELTUKUzgWM-0_u7bBJTEKi-h_n5KCz3RKnHXWSOPgQfIdmW-n=w1200-h700-no" />
        </div> 
        <div className="ssk-group ssk-lg share">
          <h4>Share The Flow</h4>
            <a href="https://www.facebook.com" className="ssk ssk-facebook"></a>
            <a href="https://www.twitter.com" className="ssk ssk-twitter"></a>
          </div>
      </div>
    </div>
    );
  }
});

module.exports = Banner;
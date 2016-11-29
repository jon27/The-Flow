var React = require('react');

var Banner = React.createClass({
  render: function() {
    return (
    <div className="container">
      <div className="flow-img">
        <div className="banner">
          <div className="both-images">
          <img className="sun" src="https://lh3.googleusercontent.com/0waJLbZE1GpoKUxPJyJB3U1AhxbHVGjg84Ket-l79MqYynvlB7yOokWKu-loDZlVhwppuWtOzG0gZweSLzo1O7cURAEdV2SvRgoHnYVjKM2R0Pju_8I4zUAaZDqoy0lH0DbbYf9PzQG8HN1pLJQe6KYJ7Q11pkAMnSZkuZB8wnCo2Mv-0MHPMx-6LBaYw3W_uxmhRwbqi6pCh7zFr8jbxOcbyLiSf_Gec5rC1McIUU18DADKbK8HD1I4p6N8BV0Blk7Fbt4dhXYKWppL0WLIU8tWKWaHEMNFBJHkSQPU5mvxyVGlnvdgZKydH-z_L9al9v0HQUzRlxPtTJpAIBp9MfohVchhu9k9x2W6dfBXDZ9-L6_4372B_hsSviReLX2zRE9hZ5pIdMPI6JtDPgSvbpgnCEz69rL0EOzAeeSV0yA3CfMG2S3l_tyqaPWheimdaMLTWPsHYeaKc5OG0-U6Rx6rmE0EhYni5h0nrQb2Y7zTnd1UinWn4Y6hnWAW57nS18qzlD_chN1YsuV-DaQy4kzzF-xJjwwx22jYc61Z_BH7HI5yKKWrdi6abgVpaPPRs2ehyJjq_jj238pBImL-adaEm9cSWUgYSYPeIBEIVZ0edBaZ=s832-no" />
          <img className="flow-alone" src="https://lh3.googleusercontent.com/7t6iw1zGuST7F4dJGjg8d1dsfD1H30csQ2L9_EjU9xlxFDAdFnCPuzZ69ah2iDi5bxhX_D035msoYyAIGTRWp0Jznot6n3NRiR01hMdMfVMTFA48xZgBFcdmlkGLoLGP_Ou0T0-KXigTL13EEaq_WxVImmTnWa6qK9wRpOWfBHrHockRfsA_SY1SD4biRoz4cJC5ByI4YjO7qA4_6POxSZK1oWzDimFNFLHGhm_kc8R73-aMkVN-RhBxE_WPZSTETGNYQp27mLx_UA0DWexpyeUML8466IyP5GUQ3eibqp5ZfMizbMCYztlhioa1P4ju_FpJsQUe38M1tJPoXggH65VpbhtUWPemi5EXXsUH4qKvxGMJxBnTAlA2gnPkOQYMoQ8g9BaeVVd0t7wy1bB0cqtHDNBRlw6JE4ff1mHAiWRqNMdT40HOzClmHU8TzqK7r3nkQtqUx88OlGvaOEdCU8FfRdVebkM6aZClJ6mXd3JPoHwBPot2Y39-W9WCUxUEfYKHfqg807ZYaWagVuhEO9hq3v7RAdbF5IIzPhAdF6Ax9-xUlcJkRSqWDn3rl_4XgUBzE6Wq3AAEQZHIE42-mhZFZVe9vNTG1984JUG1a8CotGsf=w1200-h700-no" />
          </div>
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
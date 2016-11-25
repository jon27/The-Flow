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
      <div className="flow">
        <h1>The Flow</h1>
        <p>
          A Florida inspired lifestyle and brand focusing on the principle of going with the flow. We all face different trials and tribulations that prevents
          us from reaching the ultimate level of success, whether it be mental, physical, social or financial. It is up to us to not let those things interfere
          with our daily lives. Learn to go with the flow, by living life without regret and full of passion. Conquer all challenges that life throws your way, never give
          up, and be a better you. Whether you are from the southern most point of Florida, Gulf Coast, Central Florida, Northern Florida or anywhere around the world We
          are united as one. Join the movement and just GO WITH THE FLOW.
        </p>
      </div>


      <div className="store">
        <div className="store-logo main-store-div"></div>
        <div className="main-store-div">
          <div className="shirt-image">
          <img className="shirts" src="https://lh3.googleusercontent.com/UrjwIybzW5TLHPgGAV4L15R4KgbBRsww6JAne2ROqckxE1E9ovjkLMwWwDpKepzl6p-2APm56K6KRlBNn7J1Hvrmk4nGplUJRoO2KjEwsArwWT3mWyy_szdeHm6mT_PCt1nTvMUHapmjvKtwaFgA78KPY_RO2qIymJkR1N_PTPGsz58qO0RMBt5oODlQVwUvOfMyzFQAY3gaBd0UIaiUeKlH-ZdaXO6QpumOyS_WLKlrhDJQeB-qz4L08FfDqViJgmrZkLs31omWijdWYPvZ2WoO7haHwsPLuZ29tJOFDmA4z29MquoDjRk-8ETHTNcqkcrnvEN8QLdXI7_06JVamIqypiJLJ8CHoZ0KivEecxMPZ56T1DxZlYMrGoVyv_iZHCxUbwX7bGwRTXVViJ7dPhse9oz7X4F5llJXYCSz7R3sueaUVn_DOLVmESBTqRjZP0t7hYAE1mEmvQbQ5ixlrV-nsXbpYUbG3vmCfOnqydCwWLTCyMLk5vWYJ85hRqArdrWtcU42h0NR0-oZ69YXAJdDyRUI78RTRrF3GCIEt7bGyeu3a5gBXQQmcftbeY3ElT8esTk0kRub9KoMtpSiEzgtEcGK7GxGQhB_arQbPMqXGqNd=w342-h376-no" />
            <div className="options">
              <a href="#"><div className="black"></div></a>
              <a href="#"><div className="blue"></div></a>
              <a href="#"><div className="grey"></div></a>
            </div>
          </div>
        </div>
        <div className="main-store-div">
          <div className="shirt-image">
          <img className="hoodies" src="https://lh3.googleusercontent.com/HNLjwXSWqrzM27znpalCsLYCs22Ux-05tszWxGJoFQnUZTUKcSAftCuPOMdlILodpnZTzlMJSXEr9VnH8BqXncLUw4Cg6SUA75hLd3FmWrh_1DyXxnuZTI_K-VSdfYbjUxArIU3xf2TUqGwSXomIRzJPN8Cj8I5M7Q3nwG9mfYbEGfoJ_RfuJmV7lBZxKCUa_IVfrsKlWEuhjI2XHO54rGoxA6UID3n-vpjw8y0m3di_B9YigGaf0zri4za6G44-HnMxes_koG6Cd-2WsK-WBF67VxbMYL0tN6sTK8oU3CUpjZQLAgj67iTL-O4O4EWCdjwYotfZvKJ6VLRCMJ3NicQ4_Zf8leZvczaJlAmrk2JdU6CNWK5KFhGYA7unV9HThCPbckv46joaJi0eskCpU8rmZ8fIU9LTH1Qv7Ilp-Y-UKvvsZnQXCfUBWxF-DUBJiuH8KMdKKA-BHrxt29Shm5zlJITwvtNUb4MatYtY5hfK_KMs_HnxGvjAgWgdSgLTYKf6GfBYSM3Qvf2YABFbPJWX2vvdAKn2DU228ESPbzvalOC2TmBIpH0ndwXz0SYSw3U8M6PGnaWyLNO7jpFtgUW4CPSHN0ppToAZtLO-h71vj4PV=w666-h832-no" />
          <div className="options">
              <a href="#"><div className="black"></div></a>
              <a href="#"><div className="light-blue"></div></a>
            </div>
          </div>
        </div>
        <div className="main-store-div">
          <div className="shirt-image">
          <img className="hats" src="https://lh3.googleusercontent.com/J5HqfCSvFYmoWIU1aansZnUlfHPTRrgVU5zY84_GOQj_i9IOyDnqxdrFPtIRRzfXZz_gNElMjk7HXlRcPusYZt8oQ5PbEnw_yEJE87I0S6qX8cZZ9TAxiX_v2jv0Io5VIrJV-woNwPxccYRU_CdOvDgsTT-gq-xNO0jeTHBKZNdVTOEj-SbIp-fu9lptFQVhM4r5ykktPIMctExDjBxfTBj2r4wfKrbxJGFEcrxw2IxTxOdUF87_EXn59po-usrJhnHG-Bv2pd2owLbg8n8pBEIvq4eoy0MTKoP2bbd1LxKB0WmBVj80beCdrSO7XMEdOYuXTCUWQkOSZxv4Jg8eadR-587EbTXG-AYCw3s5HptI5FgFGZlNuZ2Sj-Qloa4zVzzFhuqIGRsSVMoLo1RiyeZ4q8XqlnhmE2R791tQ28ZOU6-v68R6klt_8ZFfDfaczEb3534Htg6CyBXT4Te4br65SoyOFcGTT_kyfskVOVFX6F3HWmljNGt7aH66e9e_MPkcDo_jB5L0e_XxLswlLmAzmZ35gFXcltgNnopo2uPeewvtt_70AUYgkFVwZlandIXcMM4AhP5rsFZWJbu6g1bRCMPHnPxadFzaFnuDqn4imvXK=s450-no" />
          <div className="options">
            <a href="#"><div className="black"></div></a>
            <a href="#"><div className="light-blue"></div></a>
            <a href="#"><div className="white"></div></a>
           </div>  
        </div>
      </div>
    </div>
    

    <div className="news-letter-container">
    <div className="quote-image"></div>
      <div className="go-with-the-flow">
        <h1>The Flow appreciates you…</h1>
        <p>
         <span className="quote">&#8220; </span>The Flow would like to thank everyone for their patience and support on our new venture. Also to all of those students on that back to school flow, we want to 
          wish you a great upcoming year! Stay tuned because we are launching our product soon and we would like for you to be a part of The Flow movement. <span className="quote"> &#8221;</span>
          </p>

      </div>

    </div>

      <h1 className="contact-title">Follow Us</h1>
      <div className="contact">

        <div className="social-icons">
          <a href="https://www.instagram.com/theflowbrand" target="_blank"><img src="https://lh3.googleusercontent.com/g1GT2eVsddhTRUgg4Yn22_H3vTJbl_N6TrKbPMWNCfu7ga7zHJBLFq2Xg1l6W4yKYtjKrDCH8LM08MSah7qJJo_vryW5ytOrecHz3uDqnwOBYENx5eCarYQlNeqOzacqrSgahmo7fVfQrk4ildzb7zz_bs9vyUdMKIPAEn8nTZvs5KaIO9qmjqC2eCPeKfl0rh50oZTW4m_ULbm3UyEdxzPgTZGg8EUP3nXWA_teR-CgNQFXm6IK1zQZl2D_i5HVs0CcXrixWeH56aEt2pCq_hYffbMbCOkHQmnSfIY6vYlQl6njuWjYs5GcRhVz8JIy1hjHNhTJX2YhlKYSpE30cv4Dncu3lIalBpBp6j8iXMEj8bMi2PxyjdZWL9NpApJ234PXVZsN6WZaxZIje-gaRfCbkW17fLnG6VjkyFaISoNzEw8Ik5CK24paMlSoXjneLUFMpM_jYrDptJXYhPfKb9AO5ETJTpuCFmAs5K3f3Tm91fRsLSFYrUkM0vbfC-7mAkbMx5rgylgjdsc-2C4LDKBHtiLrSwTYSMpPUNY57GxX4QtVi7BIphoGk55nVkXLYv9j87MuHr_btLkwi4YyH1--ssdPyFFGWtfjbJqH3EUnOJcn=s128-no" /></a>
        </div>  
        <div className="social-icons">  
          <a href="https://www.facebook.com/theflowbrandllc" target="_blank"><img src="https://lh3.googleusercontent.com/wtIfsHJj4u7kjRfvD-zzYidUfCinm5_aYKJB1h1zsgTmvmLjvKkF8kj7QcvGTQBuOnzTRLfIFjpVHIxeJ57fE92ZLMgK4JuJvZ0f_VxtFOYxrO1tB4irNCAvYswA50sRMbfssJWy1ZJWL6EIWf0779LrQORqlSq22feOyZLmKAX8QfboDNdrmb9dtZukgr4ww7E3rnxDtIYdQWpLLgV4Jwmn00YncTAD3NyoUJgNZ79E62PrQkTACIZWofssmWmMkinn74-PmEyOGtIKZZDDOLTIOyJu5cn0W1yvxc_71Q1HmQs1M4aUx9u6FTEsNeExZR_8MGXREDw4zOel7W24tGh1DQOfhcCw5J_Gvw-KTpxvaHSHAcNtbHtwUCemle50V6SPFLPqlMscw89tTJJVliQuwPxgaEfh7zzsUoa8ZvYJAkfvwT8616UPRI-U_YcpJrNTFujXGvn_LFA78ARJC1QwjB7Q_8-bFNOYHS_jQJij9yAjNLsm6-ENoc2VsFSR2YVlD-hytpkeTHdtkrwRMZSaqtI8vxWCGwaDamn3-vuE7Z3acp4FrrF-JkPI7vqmPOUJjwmBRJrvEPu4yLQHmLJ1D5V-aCs6Dviu08rlS5ydZLH1=s128-no" /></a>
        </div>  
        <div className="social-icons">  
          <a href="https://www.twitter.com/theflowbrand" target="_blank"><img src="https://lh3.googleusercontent.com/bTSX7fbDwVLors01VI9OCFc8DP990AeI0sqUV95mg4qzPZNwIadLDJZHJJY9pc06pVWlirbtTJgdDTagN9v2Fa5s6FlnP3iDiKXWIJIyaIe7qjfQZE-MEpldwKzqL88Rs5SGZICUfVGlue0Idp8FAzmnQu9EB_4y_ACrtv-TzWEStv5TQD68W7YO_XpgifCkMVl-p9g1IkUIYtM5_do4DeSLI3euG9-OOuB51Zc2kfmeWU1dUg3AtakgvIHO41PF-jcUDRsRXiL1LZLDdJ4tg8cJEXzgfsReETIrHSerK0e115QfuHeOfdYmR5vVMCm7MmwaCK4ZoN57keT5t-KS5N-gxykWYMwn5cEEXjiLQkPdNB0KcquDAmdSxKmXvpsj6jsik85xQbcIhR-GO8G8oAld2KFb64qNoUF1odHmIFgtueXv8KNepcdbsClZKJF2pJ0Lk1nrNmy1yO01PoTvvt0VocbsiJgGo50cE04P9rGLm8aAkqVJp41HDlZlLqJYwDUVOKI8ewbHAOPMd3L6R5dztcfFNFKmrV9ezzXSqQhKZ_YXuwdMrW0GXX8_mgWBt3K4ZEvp_BrxQylh1sZ6j2hkGcARJbnserZgcJVeb2ZOC5MR=s128-no" /></a>
        </div>  
      </div>
            
    </div>
    );
  }
});

module.exports = Flow;
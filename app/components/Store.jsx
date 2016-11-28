var React = require('react');

var Store = React.createClass({

getInitialState: function(){
  return {
    blackShirt: true,
    blueShirt: false,
    greyShirt: false,
    blackHoodie: true,
    blueHoodie: false,
    blackHat: true,
    blueHat: false,
    whiteHat: false
  }
},
handleClickShirt: function(e){
var blackShirt = this.state.blackShirt;
var blueShirt = this.state.blueShirt;
var greyShirt = this.state.greyShirt;


if(e == "blackShirt"){
  this.setState({
    blackShirt: true,
    blueShirt: false,
    greyShirt: false
  });
}else if(e == "blueShirt"){
  this.setState({
    blackShirt: false,
    blueShirt: true,
    greyShirt: false
  });
}else if(e == "greyShirt"){
  this.setState({
    blackShirt: false,
    blueShirt: false,
    greyShirt: true
  });
}

},

handleClickHoodie: function(e){
var blackHoodie = this.state.blackHoodie;
var blueHoodie = this.state.blueHoodie;

if(e == "blackHoodie"){
  this.setState({
    blackHoodie: true,
    blueHoodie: false
  });
}else if(e == "blueHoodie"){
  this.setState({
    blackHoodie: false,
    blueHoodie: true
  });
  }
},

handleClickHat: function(e){
var blackHat = this.state.blackHat;
var blueHat = this.state.blueHat;
var whiteHat = this.state.whiteHat;

if(e == "blackHat"){
  this.setState({
    blackHat: true,
    blueHat: false,
    whiteHat: false
  });
}else if(e == "blueHat"){
  this.setState({
    blackHat: false,
    blueHat: true,
    whiteHat: false
  });
}else if(e == "whiteHat"){
  this.setState({
    blackHat: false,
    blueHat: false,
    whiteHat: true
  });
}
},
render: function() {
var blackShirt = this.state.blackShirt;
var blueShirt = this.state.blueShirt;
var greyShirt = this.state.greyShirt;
var blackHoodie = this.state.blackHoodie;
var blueHoodie = this.state.blueHoodie;
var blackHat = this.state.blackHat;
var blueHat = this.state.blueHat;
var whiteHat = this.state.whiteHat;

console.log(blackShirt, blueShirt,greyShirt, " shirts");
console.log(blackHoodie, blueHoodie, " hoodies");
console.log(blackHat, blueHat,whiteHat, " hats");

  
  var renderShirts = () => {
    var blackShirtImage = <img className="shirts" src="https://lh3.googleusercontent.com/UrjwIybzW5TLHPgGAV4L15R4KgbBRsww6JAne2ROqckxE1E9ovjkLMwWwDpKepzl6p-2APm56K6KRlBNn7J1Hvrmk4nGplUJRoO2KjEwsArwWT3mWyy_szdeHm6mT_PCt1nTvMUHapmjvKtwaFgA78KPY_RO2qIymJkR1N_PTPGsz58qO0RMBt5oODlQVwUvOfMyzFQAY3gaBd0UIaiUeKlH-ZdaXO6QpumOyS_WLKlrhDJQeB-qz4L08FfDqViJgmrZkLs31omWijdWYPvZ2WoO7haHwsPLuZ29tJOFDmA4z29MquoDjRk-8ETHTNcqkcrnvEN8QLdXI7_06JVamIqypiJLJ8CHoZ0KivEecxMPZ56T1DxZlYMrGoVyv_iZHCxUbwX7bGwRTXVViJ7dPhse9oz7X4F5llJXYCSz7R3sueaUVn_DOLVmESBTqRjZP0t7hYAE1mEmvQbQ5ixlrV-nsXbpYUbG3vmCfOnqydCwWLTCyMLk5vWYJ85hRqArdrWtcU42h0NR0-oZ69YXAJdDyRUI78RTRrF3GCIEt7bGyeu3a5gBXQQmcftbeY3ElT8esTk0kRub9KoMtpSiEzgtEcGK7GxGQhB_arQbPMqXGqNd=w342-h376-no" />;
    var blueShirtImage = <img className="shirts" src="https://lh3.googleusercontent.com/K6V1jvN-IQ81mTKLQYnQGZ1-pp4CRnz8sHKz_FOU-Y5vcurdVWPkbpKlxiJtscCydlbA26NBiJwqnHvu0x5SP7ped0JCLn0hSh_5ucbUDesgHN-fj8aP3_AGYH2PJSSUEMYxc24B5JkHVY8XD3wNko2efWF3zQQp1Aex1F8Q_SRXMD-GqF6EvJp9NFQZtIrjYurBf07TMUCqjLnf7Ud6woB9sPqzCSoOW5pHJsCKIeJax0-1m96xqKuHI50rS--B7wFal-p19PdQ4SHC5Cv-gAm-CskT1M9QBe9OjyzeBws7djZ9lDeww8FUC4tZurtuckivd2dSQzFQITI72rNFr-LP6lxa9t3hC0D6nyhQ8cA7a6UHSRg77Xzb8Zj-mxpFQp5GcJvf62WACgLWs-6ejt0Z1WcuSlNKppcOpm0NQeUUbVpCDfS91pD8JQ-PFXVZgVi9rP5c8EGrbNG41aGRc08lmERy47yF1BNi2NZunQYsNlEJAbo7RrS1HEn447YV_ehUMEM-NQH8fenc5j3WfwIGjGDNxfwTCIdwyeLub-VAAlR1gWorrC5BqgIiclxKsal3Fczqk6uA6tBIiKWNwmJFMMGlUf9XCzVzdvq39QGZpCMI=w342-h376-no" />;
    var greyShirtImage = <img className="shirts" src="https://lh3.googleusercontent.com/toXzsShlFiZ998SKv4TyYjcTUfVlG9K5gKWPd_481fgO6WkCAxFezH5Wj353vh7eYAPN8aA--4eqt_e05knObUPWVcbDAUYDgiIIOUaGpJPZNv9y1s1y6at2B6Mzoi7qAsApCY6FvmlhajQs4oLgzA-h5ii2gvNn-WF4kUnas9NKb6auH9NBbQ94xD5IUDW6aki8brjfKbBhsNjcitDTKgAbn0qEtM03IKavpHMfc5t0HExB0LKfHptosdQFdDdt-4Wv_gE67E7RTFBC38CZBMld_T7D4Tz1h_1HkfrSuUGuQePUGedhw_n3bgJ7qjBpccT_lC-AmOUqGTCA6zNksKQ728pzUUTSK52GJbcDbnQAeJ4VtMx2QA9W5_VgMTd6H8Y3-ALKvCmRqW7k94rucl-ZwWuaJTinxdn1S2PRos1t8LrD1YTtqrWe9QImY4rRg91mCi8kZ4efzJ6cCEPMWHojM8CJQa4pekvsqr3fE2zKXC2wV5GaBY6J2C2y-m9_80NO56javzqvBc73v3HMvLvwZRt1ILrn8hzJNFG300_QFjgw7X6-Dw37mCYDB7FecGotke_DBur07IxGNA8FGjATH1DcnuvWlVTBX1Oix8cxRnxB=w342-h376-no" />;

    var currentImg;
      if(blackShirt){
        return currentImg = blackShirtImage;
      }if(blueShirt){
        return currentImg = blueShirtImage;
      }if(greyShirt){
        return currentImg = greyShirtImage;
      }else{
        return currentImg;
      }
  }
  var renderHoodies = () => {
    var blackHoodieImage = <img className="hoodies" src="https://lh3.googleusercontent.com/HNLjwXSWqrzM27znpalCsLYCs22Ux-05tszWxGJoFQnUZTUKcSAftCuPOMdlILodpnZTzlMJSXEr9VnH8BqXncLUw4Cg6SUA75hLd3FmWrh_1DyXxnuZTI_K-VSdfYbjUxArIU3xf2TUqGwSXomIRzJPN8Cj8I5M7Q3nwG9mfYbEGfoJ_RfuJmV7lBZxKCUa_IVfrsKlWEuhjI2XHO54rGoxA6UID3n-vpjw8y0m3di_B9YigGaf0zri4za6G44-HnMxes_koG6Cd-2WsK-WBF67VxbMYL0tN6sTK8oU3CUpjZQLAgj67iTL-O4O4EWCdjwYotfZvKJ6VLRCMJ3NicQ4_Zf8leZvczaJlAmrk2JdU6CNWK5KFhGYA7unV9HThCPbckv46joaJi0eskCpU8rmZ8fIU9LTH1Qv7Ilp-Y-UKvvsZnQXCfUBWxF-DUBJiuH8KMdKKA-BHrxt29Shm5zlJITwvtNUb4MatYtY5hfK_KMs_HnxGvjAgWgdSgLTYKf6GfBYSM3Qvf2YABFbPJWX2vvdAKn2DU228ESPbzvalOC2TmBIpH0ndwXz0SYSw3U8M6PGnaWyLNO7jpFtgUW4CPSHN0ppToAZtLO-h71vj4PV=w666-h832-no" />;
    var blueHoodieImage = <img className="hoodies" src="https://lh3.googleusercontent.com/zsdQpBDbzCEZjRNVpXWXgDBAoNqkF4EIDCECfq4dn-u_YI4cr3Kc72-qtfC7WSlMNXhK5-P3MPk84St4DItz3hAY0QBTyQDFY-VZ8aJsgNE0TuI294fBsdo_EpizS6RKjm_oEFelWTQQmfu9buqv9tTi5B5pcmidbt3HTlR7ZWLAWC-ZQ0livh1EEhIISUxdHkOhRD-8r_TflcPsjxxS05GE2slM-qbLyDgvoV1nWbLLSQGofTGTbPwkp4oXn6B0sGvRCZeo_CBzxhfkKz1fLiV5k2TKyXNghKP2MAb-rprUqWH0ShHY3EvBPXA_RGtTQa28TB-YaCP_GoTVN4r5r4LNlOtjjStZTL7cdUhN0ydGkFxqVPNW8_sBo6Yz3ofsjPmTJUMCkb7SN19sIqKPpfYpc5F2EC_-dMdfBejhuhRIqJmUrFYB-1ZxlZZXI7B5kLZ4iPA1EQH7GOxFIPT6JjfQozSP5Skrde-ZfvAuDQ1KJTVNz99G3QBvSBtxuAYwf0SonCEBBOl5TVp0tHKxzWkzdZ4iXHhh8brKThxzFCtxAsxpJ7R6sJctVLWybpObDQXKrbN5TpukHgcfEWxJvfEj_MQqMsbcm_IC7-DT9cFfFuJm=w652-h814-no" />;
    
    var currentImg;
      if(blackHoodie){
        return currentImg = blackHoodieImage;
      }if(blueHoodie){
        return currentImg = blueHoodieImage;
      }else{
        return currentImg;
      }  
    }

  var renderHats = () => {
    var blackHatImage = <img className="hats" src="https://lh3.googleusercontent.com/tlDAlaqDLZwX0IniW4yCOHKufcL5sksXnfIyu0U0hq4zwRU4Pz8fg2mdMjnvXbIIPgyn_6D3_V2XWS7cDXS4eot3hb38SgvuyBIjsHY4kgjeujYpeN6mBVQpoBg3fSngXdj6JDPMmmMX687tPr9XFikYPRTmQ6nzIfGkperhJTOnaINWLSimFJ3LrW2K4NQ_n-JGB8Zne30dd1a7hHBrl0mR8T3OqFOXrmYzrTM5pklXQgmaUawyeDpCSMQZzK-vvU2wSowqPAyAQf-UPE2OjnUNki6p-5Gjl9dMx9gaTTeYKgNnvX1BBAtKfjdzcKd5UK4RxGbhg_4N5FBCfPciNL4l682Jjd_ZSKyUa2VMrPAxcK_gFNNOsYUQ-_OIpZ3R3AAvkkJcdQF7cSSOYoBADda63whyBy-CCUaRkqnd9gFE6mHDRoRBrk9W52oi_YrbtdtCv2Eh_sfxg5YUCFwI24W5djSYrS24X7LPrctDXsURPOQX_Z-vVkmKqfivvmUz23Qd0YRZGw7Y4I3VBPSISqWVBdZQRJG7BXxjslOHoBq0pbMUfYnLcTV1QvS4z1ujUnBw007VEpN6ywMmrdB7uGULp0p0T2aUQqkjq-4vfOAQ7zxz=s450-no" />;
    var blueHatImage = <img className="hats" src="https://lh3.googleusercontent.com/U2amF5z34of32lVp7dpW3C7vlv9AcpknxUo38D8UARaPaQRtmLdUCQ9rzZUgrPguFqMPAlROdGszhwIjG4NnKC_v4TW9g_PPJrSTL0sxHoMAnES-cS61Zwsk7EtEVJT9xd8wqDiv4Dw9_LfDkLgJ6jzA0XKMlFftGrd8vUYv7kr8VmVZOuJDNU5jElEPasOgcvUEPOnWC1yFpNjCnuKlMyXUfL05OY72OOShepLCDq-1bGQh62odogZpt2HVgr68VsghgrD1X6GHWeeh7PT-Nz47njCFFL0l6AMN99vJKztRWffR31tJZSrxkUuOOGSe3C-JSoqwB1AAqmXIcUxWj3KZmpjIoZqBarrXp27UaZQdyuFeL-quFOH23KIngB1RsBqg0Fw2wYLuXTnEWsawldylI1Kkgca8qwAT24Re8xPd_wwW1TFxG38GdHHdxQi0hwvNkqqsNojihHJ7om-0jnSZbIBlMGEI12_30tHKXXl3hpItOt5OAzqghK7_cx7W_ZadLFHacLqXHZ5mS8fsIKjvSjyFbYs31kXUGTz38XAMssiCRiH15rJ1W-kv7G_UJtQpAydxaj3791HGUm6gyWCN79oyPflDqFHVWoCk9IWF3vUl=s450-no" />;
    var whiteHatImage = <img className="hats" src="https://lh3.googleusercontent.com/o83LJr1qY66j4x8ySJ0zXmd88oXbNCM71nhdwoYULalT_j7ZX7kPV5HONfUeFF-EgcKdY1K3_gLSwQzHwmgzuYDDOU-rldWQqRi9BvmnCUD7UeZw7r0-SVyOxXQW2tH2zLqxIlMrQzGRwNx68QiatK8nTNWowUa16144OjZP5bVO43Vu462wB8hpZ_91KIftACY_r1ev9FdVfS9Ng8L1wtcqSOVsctnZ8Np41YfYZkKJZfj0A47Z8gn8aB_rTPxKealUzUc9c9kJAPuQkp1LSdR6SazEma9s6aNHMQoWJuzb_ZI_VmLJ5XHUkMW1e17mjdzkzO4ko4I7f_W4eUJPijAifKLEmk67sGAaEjnug9RyRI_XY2_o7mbjJOtRDaS0ESx0HPmpzBA_DnbDvkkbhJFaJSlCmhG4Tfy8ctAMQATV8T9arR_lgRjXXi2KReG3P2Tugyx0CvWzOjpLc1B3PHWkKnygavJ8F5G9H8bCZbWIMFYBNfJ49mhBh48TgAV2xdMbgmQCC0P0FEoGqnm3uk3orATRJx0tepXqSQgaja00zHvq6HOZzK_lTn1Y2qSTyLFsnRC693fFR38Ne-ESXCpbVFDJwu1o0_Cl_FI1wM1Q5VtF=s450-no" />;
    
    var currentImg;
      if(blackHat){
        return currentImg = blackHatImage;
      }if(blueHat){
        return currentImg = blueHatImage;
      }if(whiteHat){
        return currentImg = whiteHatImage;
      }else{
        return currentImg;
      }  }

    return (
      <div className="store">
        <div className="store-logo main-store-div"></div>
        <div className="main-store-div">
          <div className="shirt-image">
          {renderShirts()}
            <div className="options">
              <a className="blackShirt" onClick={this.handleClickShirt.bind(this, 'blackShirt')}><div className="black"></div></a>
              <a className="blueShirt " onClick={this.handleClickShirt.bind(this, 'blueShirt')}><div className="blue"></div></a>
              <a className="greyShirt " onClick={this.handleClickShirt.bind(this, 'greyShirt')}><div className="grey"></div></a>
            </div>
          </div>
        </div>
        <div className="main-store-div">
          <div className="shirt-image">
          {renderHoodies()}
          <div className="options">
              <a className="blackHoodie" onClick={this.handleClickHoodie.bind(this, 'blackHoodie')}><div className="black"></div></a>
              <a className="blueHoodie" onClick={this.handleClickHoodie.bind(this, 'blueHoodie')}><div className="light-blue"></div></a>
            </div>
          </div>
        </div>
        <div className="main-store-div">
          <div className="shirt-image">
           {renderHats()}         
          <div className="options">
            <a className="blackHat" onClick={this.handleClickHat.bind(this, 'blackHat')}><div className="black"></div></a>
            <a className="whiteHat" onClick={this.handleClickHat.bind(this, 'whiteHat')}><div className="white"></div></a>
            <a className="blueHat" onClick={this.handleClickHat.bind(this, 'blueHat')}><div className="light-blue"></div></a>
           </div>  
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Store;

          // <img className="hoodies" src="https://lh3.googleusercontent.com/HNLjwXSWqrzM27znpalCsLYCs22Ux-05tszWxGJoFQnUZTUKcSAftCuPOMdlILodpnZTzlMJSXEr9VnH8BqXncLUw4Cg6SUA75hLd3FmWrh_1DyXxnuZTI_K-VSdfYbjUxArIU3xf2TUqGwSXomIRzJPN8Cj8I5M7Q3nwG9mfYbEGfoJ_RfuJmV7lBZxKCUa_IVfrsKlWEuhjI2XHO54rGoxA6UID3n-vpjw8y0m3di_B9YigGaf0zri4za6G44-HnMxes_koG6Cd-2WsK-WBF67VxbMYL0tN6sTK8oU3CUpjZQLAgj67iTL-O4O4EWCdjwYotfZvKJ6VLRCMJ3NicQ4_Zf8leZvczaJlAmrk2JdU6CNWK5KFhGYA7unV9HThCPbckv46joaJi0eskCpU8rmZ8fIU9LTH1Qv7Ilp-Y-UKvvsZnQXCfUBWxF-DUBJiuH8KMdKKA-BHrxt29Shm5zlJITwvtNUb4MatYtY5hfK_KMs_HnxGvjAgWgdSgLTYKf6GfBYSM3Qvf2YABFbPJWX2vvdAKn2DU228ESPbzvalOC2TmBIpH0ndwXz0SYSw3U8M6PGnaWyLNO7jpFtgUW4CPSHN0ppToAZtLO-h71vj4PV=w666-h832-no" />
          // <img className="hats" src="https://lh3.googleusercontent.com/J5HqfCSvFYmoWIU1aansZnUlfHPTRrgVU5zY84_GOQj_i9IOyDnqxdrFPtIRRzfXZz_gNElMjk7HXlRcPusYZt8oQ5PbEnw_yEJE87I0S6qX8cZZ9TAxiX_v2jv0Io5VIrJV-woNwPxccYRU_CdOvDgsTT-gq-xNO0jeTHBKZNdVTOEj-SbIp-fu9lptFQVhM4r5ykktPIMctExDjBxfTBj2r4wfKrbxJGFEcrxw2IxTxOdUF87_EXn59po-usrJhnHG-Bv2pd2owLbg8n8pBEIvq4eoy0MTKoP2bbd1LxKB0WmBVj80beCdrSO7XMEdOYuXTCUWQkOSZxv4Jg8eadR-587EbTXG-AYCw3s5HptI5FgFGZlNuZ2Sj-Qloa4zVzzFhuqIGRsSVMoLo1RiyeZ4q8XqlnhmE2R791tQ28ZOU6-v68R6klt_8ZFfDfaczEb3534Htg6CyBXT4Te4br65SoyOFcGTT_kyfskVOVFX6F3HWmljNGt7aH66e9e_MPkcDo_jB5L0e_XxLswlLmAzmZ35gFXcltgNnopo2uPeewvtt_70AUYgkFVwZlandIXcMM4AhP5rsFZWJbu6g1bRCMPHnPxadFzaFnuDqn4imvXK=s450-no" />

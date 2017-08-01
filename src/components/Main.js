require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <video src="http://video.mp.sj.360.cn/vod_zhushou/vod-shouzhu-bj/c322dbfd84a4155f59c9f2b2405d0dcd.mp4" autoPlay/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

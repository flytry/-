import React, { Component } from 'react';
import {Button,Icon} from 'antd';
import './index.less';

export default class HeaderMain extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-main-top">
          <Button size="small"><Icon type="fullscreen"/></Button>
          <Button v>English</Button>
          <span>hello,admin</span>
          <Button size="small" type="link">退出</Button>
        </div>
        <div className="header-main-bottom">
          <span className="header-main-left">商品管理</span>
          <span className="header-main-right">时间显示</span>
        </div>
      </div>
    )
  }
}

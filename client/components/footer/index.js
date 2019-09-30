import React, { Component } from 'react';
import {Layout} from 'antd';
const { Footer } = Layout;

export default class Element extends Component {

  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
          Created By Dhruv Mahajan {`<dhruv1754@gmail.com>`}
        </Footer>
    );
  }
}
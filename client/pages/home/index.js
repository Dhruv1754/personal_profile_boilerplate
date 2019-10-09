import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { Affix, Layout, Row, Button} from 'antd';
const { Content } = Layout;

import Header from 'client/components/header';
import Submenu from 'client/components/submenu';
import Footer from 'client/components/footer'
import {inc,dec} from '../../actions/demoActions' 

import './home.css';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  postData = ()=>{
    this.props.dispatch(inc({stuff: 'dattttaaaaaa'})).then(()=>{
      console.log('gotddddddddd',this.props.stuff)
    })
}

postData1 = ()=>{
  this.props.dispatch(dec({stuff: 'dattttaaaaaa22222'})).then(()=>{
    console.log('second call',this.props.stuff)
  })
}
  render() {
    const {
      location,
      routes
    } = this.props;

    return (
      <Layout>
        <Affix>
          <Header/>
          <Submenu/>
        </Affix>
        <Content className='bg_color_grey_light' style={{padding:'0px 10%', minHeight: 800}}>
            <Row>
             <Button onClick={this.postData}>stuff</Button>
             <Button onClick={this.postData1}>stuff2222</Button>
            </Row>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    stuff: state.stuff
  };
};
export default connect(mapStateToProps)(Element);
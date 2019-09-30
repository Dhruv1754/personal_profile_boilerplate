import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { Affix, Layout, Row, Button} from 'antd';
const { Content } = Layout;

import Header from 'client/components/header';
import Submenu from 'client/components/submenu';
import Footer from 'client/components/footer'
import RouteWithSubRoutes from 'client/routeWithSubRoutes';
import {inc} from '../../actions/demoActions' 

import './home.css';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  postData = ()=>{
    this.props.dispatch(inc({stuff: 'dattttaaaaaa'}))
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
            </Row>
        </Content>
        <Footer/>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  ...state
 })
export default connect(mapStateToProps)(Element);
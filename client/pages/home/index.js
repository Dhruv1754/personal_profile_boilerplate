import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Affix, Layout, Row, Button} from 'antd';
const { Content } = Layout;

import Header from 'client/components/header';
import Footer from 'client/components/footer';
import WrappedAdvancedSearchForm from 'client/components/MongoForm';
import {inc,dec} from '../../actions/demoActions' ;

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


    return (
      <div className="demo-big-content">
      <Layout>
      <Affix>
          <Header scroll>
            
          </Header>
        </Affix>
          <Content className='bg_color_grey_light' style={{padding:'0px 10%', minHeight: 800}}>
           
              <WrappedAdvancedSearchForm />
            
          </Content>
          <Footer></Footer>
      </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    stuff: state.stuff
  };
};
export default connect(mapStateToProps)(Element);
import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Layout, Row, Button } from 'antd';
import RouteWithSubRoutes from 'client/routeWithSubRoutes';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  postData = ()=>{
    this.props.dispatch(inc())
}
  render() {
    const {
      routes
    } = this.props;

    return (
      <Layout>
        <Row style={{paddingLeft:'50px'}}>
          <Button>increment</Button>

        </Row>
      </Layout>
    );
  }
}

export default Element;
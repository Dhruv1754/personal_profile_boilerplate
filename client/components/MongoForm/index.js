import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Row, Col, Input, Button, PageHeader ,Icon} from 'antd';

import {getMongoData} from '../../actions/demoActions' ;

class AdvancedSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    
      children.push(
        <Col span={7} offset={1}key={0} style={{ display: 1 < count ? 'block' : 'none' }}>
          <Form.Item label={`No-Sql Query`}>
            {getFieldDecorator(`query`, {
              rules: [
                {
                  required: true,
                  message: 'Input something for query or {} for all data!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );

      children.push(
        <Col span={7} key={1} style={{ display: 1 < count ? 'block' : 'none' }}>
          <Form.Item label={`User Name`}>
            {getFieldDecorator(`user`, {
              rules: [
                {
                  required: true,
                  message: 'Input user name of auth!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );

      children.push(
        <Col span={7} key={2} style={{ display: 2 < count ? 'block' : 'none' }}>
          <Form.Item label={`Password`}>
            {getFieldDecorator(`pass`, {
              rules: [
                {
                  required: true,
                  message: 'Input password for auth!',
                },
              ],
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>,
      );
    
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      this.props.dispatch(getMongoData({query:values['query'],user:values['user'],pass:values['pass']})).then(()=>{
        console.log('gotddddddddd',this.props.stuff)
      })
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row><PageHeader style={{border: '1px solid rgb(235, 237, 240)',}}title={<div>This is a basic Redux AntD Form to query a Mongo DB with a user and password. To see how click on the Icon on the right --->   
        <a href="https://github.com/Dhruv1754/web_application_boilerplate"><Icon type="github" /></a></div>}></PageHeader></Row>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={23} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

const mapStateToProps = state => {
  return {
    stuff: state.stuff
  };
};
export default connect(mapStateToProps)(WrappedAdvancedSearchForm);

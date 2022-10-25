import React from 'react';
import 'antd/dist/antd.min.css';
import './Home.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
);

export default Home;
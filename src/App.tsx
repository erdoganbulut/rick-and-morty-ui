import React, { FunctionComponent } from 'react';
import { Breadcrumb, Layout } from 'antd';
import Router from './routes/router';
import LayoutHeader from './components/partials/App/LayoutHeader/LayoutHeader';

const { Content, Footer } = Layout;

// FIXME: inline styles
// FIXME: breadcrumb

const App: FunctionComponent = () => (
  <div className="App">
    <Layout className="layout">
      <LayoutHeader />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <p>App Works!</p>
          <Router />
        </div>
      </Content>
      <Footer />
    </Layout>
  </div>
);

export default App;

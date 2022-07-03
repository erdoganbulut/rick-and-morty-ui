import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import Router from './routes/router';
import LayoutHeader from './components/partials/App/LayoutHeader/LayoutHeader';

const { Content, Footer } = Layout;

const App: FunctionComponent = () => (
  <div className="App">
    <Layout className="layout">
      <LayoutHeader />
      <Content style={{ padding: '0 3rem', marginTop: '3rem' }}>
        <div className="site-layout-content">
          <Router />
        </div>
      </Content>
      <Footer />
    </Layout>
  </div>
);

export default App;

import React, { FC } from 'react';
import { Layout, Menu } from 'antd';

const LayoutHeader: FC = () => (
  <Layout.Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    />
  </Layout.Header>
);

export default LayoutHeader;

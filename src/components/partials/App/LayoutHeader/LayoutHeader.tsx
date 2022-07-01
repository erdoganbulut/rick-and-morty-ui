import React, { FunctionComponent } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './LayoutHeader.scss';

const LayoutHeader: FunctionComponent = () => {
  const menuContent = [
    {
      title: 'Episodes',
      isInternal: true,
      to: '/',
    },
    {
      title: 'Episode Detail',
      isInternal: true,
      to: '/1',
    },
    {
      title: 'Github',
      isInternal: false,
      to: 'https://github.com/erdoganbulut',
    },
    {
      title: 'API',
      isInternal: false,
      to: 'https://rickandmortyapi.com/',
    },
  ];

  return (
    <Layout.Header className="LayoutHeader">
      <div className="logo">Rick and Morty</div>
      <Menu selectable={false} theme="dark" mode="horizontal">
        {menuContent.map((m) => (
          <Menu.Item>
            {m.isInternal ? (
              <Link to={m.to}>{m.title}</Link>
            ) : (
              <a href={m.to} target="_blank" rel="noreferrer">
                {m.title}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default LayoutHeader;

import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import EpisodeList from './Episode/List';

const EpisodeDetail = lazy(() => import('./Episode/Detail'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<EpisodeList />} />
    <Route
      path="/:episodeId"
      element={
        <Suspense fallback={<Spin />}>
          <EpisodeDetail />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;

import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';

const Episode = lazy(() => import('./Episode'));
const EpisodeList = lazy(() => import('./Episode/List'));
const EpisodeDetail = lazy(() => import('./Episode/Detail'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/episode" replace />} />
    <Route
      path="/episode"
      element={
        <Suspense fallback={<Spin />}>
          <Episode />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={<Spin />}>
            <EpisodeList />
          </Suspense>
        }
      />
      <Route
        path=":episodeId"
        element={
          <Suspense fallback={<Spin />}>
            <EpisodeDetail />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default Router;

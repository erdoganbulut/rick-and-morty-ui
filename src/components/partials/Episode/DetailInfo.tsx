import React, { FunctionComponent } from 'react';
import { Descriptions, Spin } from 'antd';
import { ERequestStatus } from '../../../common/request';
import { useAppSelector } from '../../../store/hooks';
import { IEpisode } from '../../../store/slices/episodes.slice';

const EpisodeDetailInfo: FunctionComponent = () => {
  const episodeDetail: IEpisode | null = useAppSelector((state) => state.episodes.detail);
  const allEpisodesStatus = useAppSelector((state) => state.episodes.status);

  return (
    <div className="EpisodeDetailInfo">
      {allEpisodesStatus === ERequestStatus.LOADING && <Spin />}
      {allEpisodesStatus === ERequestStatus.SUCCEEDED && (
        <Descriptions title="Episode Detail">
          <Descriptions.Item label="ID">{episodeDetail?.id}</Descriptions.Item>
          <Descriptions.Item label="NAME">{episodeDetail?.name}</Descriptions.Item>
          <Descriptions.Item label="AIR DATE">{episodeDetail?.air_date}</Descriptions.Item>
          <Descriptions.Item label="EPISODE">{episodeDetail?.episode}</Descriptions.Item>
          <Descriptions.Item label="CREATED">{episodeDetail?.created}</Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default EpisodeDetailInfo;

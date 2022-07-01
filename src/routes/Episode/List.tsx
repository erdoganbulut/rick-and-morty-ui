import React, { FunctionComponent, useEffect } from 'react';
import { Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchEpisodeList } from '../../store/slices/episodes.slice';
import { ERequestStatus } from '../../common/request';
import EpisodeListItem from '../../components/partials/Episode/ListItem';
import EpisodesPagination from '../../components/partials/Episode/Pagination';

const EpisodeList: FunctionComponent = () => {
  const allEpisodes = useAppSelector((state) => state.episodes.data);
  const allEpisodesStatus = useAppSelector((state) => state.episodes.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allEpisodesStatus === ERequestStatus.IDLE) {
      dispatch(fetchEpisodeList());
    }
  }, [allEpisodesStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchEpisodeList());
  }, [dispatch]);

  return (
    <div className="EpisodeList">
      {allEpisodesStatus === ERequestStatus.LOADING && <Spin />}
      {allEpisodesStatus === ERequestStatus.SUCCEEDED && (
        <div className="EpisodeList--list">
          {allEpisodes?.results.map((e) => (
            <EpisodeListItem
              id={e.id}
              name={e.name}
              air_date={e.air_date}
              episode={e.episode}
              characters={e.characters}
              url=""
              created=""
            />
          ))}
        </div>
      )}
      <EpisodesPagination />
    </div>
  );
};

export default EpisodeList;

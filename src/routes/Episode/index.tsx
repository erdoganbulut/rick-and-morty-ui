import React, { FunctionComponent, useEffect } from 'react';
import { Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchEpisodeList } from '../../store/slices/episodes.slice';
import { ERequestStatus } from '../../common/request';
import EpisodeItem from '../../components/partials/Episode/Item';
import EpisodesPagination from '../../components/partials/Episode/Pagination';

const Episodes: FunctionComponent = () => {
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
    <div className="Episodes">
      {allEpisodesStatus === ERequestStatus.LOADING && <Spin />}
      {allEpisodesStatus === ERequestStatus.SUCCEEDED && (
        <div className="episodes--list">
          {allEpisodes?.results.map((e) => (
            <EpisodeItem
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

export default Episodes;

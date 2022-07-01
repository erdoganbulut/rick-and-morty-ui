import React, { FunctionComponent } from 'react';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchEpisodeList } from '../../../store/slices/episodes.slice';

const EpisodesPagination: FunctionComponent = () => {
  const allEpisodes = useAppSelector((state) => state.episodes.data);
  const dispatch = useAppDispatch();
  const handleChangePagination = (page: number) => {
    dispatch(fetchEpisodeList(page));
  };
  return (
    <div className="EpisodesPagination">
      {!!allEpisodes && (
        <Pagination
          onChange={handleChangePagination}
          defaultCurrent={1}
          defaultPageSize={20}
          showSizeChanger={false}
          total={allEpisodes?.info.count}
        />
      )}
    </div>
  );
};

export default EpisodesPagination;

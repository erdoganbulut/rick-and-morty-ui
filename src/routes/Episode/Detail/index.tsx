import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeDetailCharacterList from '../../../components/partials/Episode/CharacterList';
import EpisodeDetailInfo from '../../../components/partials/Episode/DetailInfo';
import { useAppDispatch } from '../../../store/hooks';
import { fetchEpisodeDetail } from '../../../store/slices/episodes.slice';

const EpisodeDetail: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const routerParams = useParams();

  useEffect(() => {
    const episodeId = routerParams.episodeId ? parseInt(routerParams.episodeId, 10) : -1;
    dispatch(fetchEpisodeDetail(episodeId));
  }, [dispatch, routerParams.episodeId]);

  return (
    <div className="EpisodeDetail" data-testid="episode-detail">
      <EpisodeDetailInfo />
      <EpisodeDetailCharacterList />
    </div>
  );
};

export default EpisodeDetail;

import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetailInfo from '../../../components/partials/Character/DetailInfo';
import { useAppDispatch } from '../../../store/hooks';
import { fetchCharacterDetail } from '../../../store/slices/characters.slice';

const CharacterDetail: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const routerParams = useParams();

  useEffect(() => {
    const characterId = routerParams.characterId ? parseInt(routerParams.characterId, 10) : -1;
    dispatch(fetchCharacterDetail(characterId));
  }, [dispatch, routerParams.characterId]);

  return (
    <div className="CharacterDetail" data-testid="character-detail">
      <CharacterDetailInfo />
    </div>
  );
};

export default CharacterDetail;

import React, { FunctionComponent, useEffect } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
import { ERequestStatus } from '../../../common/request';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  fetchMultipleCharacters,
  ICharacter,
  characters,
  resetFilter,
} from '../../../store/slices/characters.slice';
import { IEpisode } from '../../../store/slices/episodes.slice';
import EpisodeDetailCharacterFilter from './CharacterFilter';
import EpisodeDetailCharacterItem from './CharacterItem';

import './CharacterList.scss';

const EpisodeDetailCharacterList: FunctionComponent = () => {
  const characterList: ICharacter[] = useAppSelector(characters);
  const charactersStatus: ERequestStatus = useAppSelector((state) => state.characters.status);
  const episodeDetail: IEpisode | null = useAppSelector((state) => state.episodes.detail);
  const allEpisodesStatus = useAppSelector((state) => state.episodes.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allEpisodesStatus === ERequestStatus.SUCCEEDED) {
      dispatch(fetchMultipleCharacters(episodeDetail ? episodeDetail.characters : []));
      dispatch(resetFilter());
    }
  }, [allEpisodesStatus, dispatch, episodeDetail]);

  return (
    <div className="EpisodeDetailCharacterList">
      {(charactersStatus === ERequestStatus.LOADING ||
        allEpisodesStatus === ERequestStatus.LOADING) && (
        <>
          <h3>Character List</h3>
          <Spin />
        </>
      )}
      {charactersStatus === ERequestStatus.SUCCEEDED && (
        <>
          <h3>Character List</h3>
          <EpisodeDetailCharacterFilter />
          <div className="EpisodeDetailCharacterList--list">
            {characterList.map((c) => (
              <div className="EpisodeDetailCharacterList--list__item" key={c.id}>
                <Link to={`/character/${c.id}`}>
                  <EpisodeDetailCharacterItem
                    id={c.id}
                    name={c.name}
                    status={c.status}
                    species={c.species}
                    type={c.type}
                    gender={c.gender}
                    origin={c.origin}
                    location={c.location}
                    image={c.image}
                    episode={c.episode}
                    url={c.url}
                    created={c.created}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EpisodeDetailCharacterList;

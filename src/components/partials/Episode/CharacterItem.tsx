import { Card } from 'antd';
import React, { FunctionComponent } from 'react';
import { ICharacter } from '../../../store/slices/characters.slice';

const EpisodeDetailCharacterItem: FunctionComponent<ICharacter> = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  created,
}: ICharacter) => (
  <Card hoverable cover={<img alt={name} src={image} />}>
    <Card.Meta
      title={`ID${id} - ${name}`}
      description={
        <>
          <p>
            {status} - {species} - {type} - {gender}
          </p>
          <p>
            {origin.name} - {location.name}
          </p>
          <p>{created}</p>
        </>
      }
    />
  </Card>
);

export default EpisodeDetailCharacterItem;

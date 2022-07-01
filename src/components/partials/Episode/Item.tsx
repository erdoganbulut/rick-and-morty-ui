import React, { FunctionComponent } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { IEpisode } from '../../../store/slices/episodes.slice';

const EpisodeItem: FunctionComponent<IEpisode> = ({
  id,
  name,
  air_date,
  episode,
  characters,
}: IEpisode) => (
  <Card title={`${episode} - ${name}`} extra={<Link to={`/${id}`}>Go to detail</Link>}>
    <p>{characters.length} Characters</p>
    <p>{air_date}</p>
  </Card>
);

export default EpisodeItem;

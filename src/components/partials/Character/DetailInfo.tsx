import React, { FunctionComponent } from 'react';
import { Descriptions, Spin } from 'antd';
import { ERequestStatus } from '../../../common/request';
import { useAppSelector } from '../../../store/hooks';
import { ICharacter } from '../../../store/slices/characters.slice';

const CharacterDetailInfo: FunctionComponent = () => {
  const characterDetail: ICharacter | null = useAppSelector((state) => state.characters.character);
  const characterStatus = useAppSelector((state) => state.characters.status);

  return (
    <div className="CharacterDetailInfo">
      {characterStatus === ERequestStatus.LOADING && <Spin />}
      {characterStatus === ERequestStatus.SUCCEEDED && (
        <Descriptions title="Character Detail">
          <Descriptions.Item label="IMAGE">
            <img
              style={{ maxWidth: '100%' }}
              src={characterDetail?.image}
              alt={characterDetail?.name}
            />
          </Descriptions.Item>
          <Descriptions.Item label="ID">{characterDetail?.id}</Descriptions.Item>
          <Descriptions.Item label="NAME">{characterDetail?.name}</Descriptions.Item>
          <Descriptions.Item label="STATUS">{characterDetail?.status}</Descriptions.Item>
          <Descriptions.Item label="SPECIES">{characterDetail?.species}</Descriptions.Item>
          <Descriptions.Item label="TYPE">{characterDetail?.type}</Descriptions.Item>
          <Descriptions.Item label="GENDER">{characterDetail?.gender}</Descriptions.Item>
          <Descriptions.Item label="ORIGIN">{characterDetail?.origin.name}</Descriptions.Item>
          <Descriptions.Item label="LOCATION">{characterDetail?.location.name}</Descriptions.Item>
          <Descriptions.Item label="CREATED">{characterDetail?.created}</Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
};

export default CharacterDetailInfo;

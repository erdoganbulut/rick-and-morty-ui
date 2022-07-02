import React, { FunctionComponent } from 'react';
import { Select } from 'antd';
import { useAppDispatch } from '../../../store/hooks';
import {
  changeGenderFilter,
  changeSort,
  changeStatusFilter,
} from '../../../store/slices/characters.slice';

const EpisodeDetailCharacterFilter: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Select
        placeholder="Status"
        style={{ width: 240 }}
        onChange={(value) => dispatch(changeStatusFilter(value))}
      >
        <Select.Option value="Alive">Alive</Select.Option>
        <Select.Option value="Dead">Dead</Select.Option>
        <Select.Option value="unknown">unknown</Select.Option>
      </Select>
      <Select
        placeholder="Gender"
        style={{ width: 240 }}
        onChange={(value) => dispatch(changeGenderFilter(value))}
      >
        <Select.Option value="Female">Female</Select.Option>
        <Select.Option value="Male">Male</Select.Option>
        <Select.Option value="Genderless">Genderless</Select.Option>
        <Select.Option value="unknown">unknown</Select.Option>
      </Select>
      <Select
        defaultValue={null}
        style={{ width: 240 }}
        onChange={(value) => dispatch(changeSort(value))}
      >
        <Select.Option value={null}>Sort by Default</Select.Option>
        <Select.Option value="idAsc">Sort by ID A to Z</Select.Option>
        <Select.Option value="idDesc">Sort by ID Z to A</Select.Option>
        <Select.Option value="nameAsc">Sort by Name A to Z</Select.Option>
        <Select.Option value="nameDesc">Sort by Name Z to A</Select.Option>
      </Select>
    </div>
  );
};

export default EpisodeDetailCharacterFilter;

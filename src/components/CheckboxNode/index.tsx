import React from 'react';

import { Category } from '../../common/types';

interface Props {
  category: Category;
  isSelected: boolean;
  onChange: VoidFunction;
  onClick: VoidFunction;
}

const CheckboxNode: React.FC<Props> = ({
  category,
  isSelected,
  onChange,
  onClick
}) => {
  return (
    <>
      <input type='checkbox' checked={isSelected} onChange={onChange} />
      <label onClick={onClick}>{category.name}</label>
    </>
  );
};

export default CheckboxNode;

import React from 'react';

import { Category } from '../../common/types';
import { useCategories } from '../../hooks/useCategories';

import './styles.css';

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
  const { categories } = useCategories();

  const hasChildrenNodes = Boolean(
    categories.find((cat) => cat.parent === category.id)
  );

  return (
    <>
      <input type='checkbox' checked={isSelected} onChange={onChange} />
      <label
        onClick={onClick}
        className={hasChildrenNodes ? 'checkbox-node-label' : ''}
      >
        {category.name}
      </label>
    </>
  );
};

export default CheckboxNode;

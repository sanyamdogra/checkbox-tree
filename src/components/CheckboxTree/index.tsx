import React from 'react';

import CheckboxNode from '../CheckboxNode';
import { useCategories } from '../../hooks/useCategories';

const CheckboxTree: React.FC = () => {
  const {
    categories,
    selectedCategories,
    expandedCategories,
    toggleCategorySelection,
    toggleCategoryExpansion
  } = useCategories();

  const renderCheckboxNodes = (parentId = '0') => {
    const checkboxNodes = categories.filter(
      (category) => category.parent === parentId
    );

    return checkboxNodes.map((category) => {
      const isSelected = selectedCategories.includes(category.id);
      const isExpanded = expandedCategories.includes(category.id);

      return (
        <div key={category.id}>
          <CheckboxNode
            category={category}
            onChange={() => toggleCategorySelection(category.id)}
            onClick={() => toggleCategoryExpansion(category.id)}
            isSelected={isSelected}
          />
          {isExpanded && <div>{renderCheckboxNodes(category.id)}</div>}
        </div>
      );
    });
  };

  return <div>{renderCheckboxNodes()}</div>;
};

export default CheckboxTree;

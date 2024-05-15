import React from 'react';

import CheckboxNode from '../CheckboxNode';
import { useCategories } from '../../hooks/useCategories';

import './styles.css';

const CheckboxTree: React.FC = () => {
  const {
    categories,
    selectedCategories,
    expandedCategories,
    handleSelectAll,
    handleClearAll,
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
          {isExpanded && (
            <div className='checkbox-node-children'>
              {renderCheckboxNodes(category.id)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className='checkbox-tree-container'>
      <button onClick={handleSelectAll} className='checkbox-tree-button'>
        Select All
      </button>
      <button onClick={handleClearAll} className='checkbox-tree-clear-button'>
        Clear All
      </button>
      <div className='checkbox-tree-wrapper'>{renderCheckboxNodes()}</div>
    </div>
  );
};

export default CheckboxTree;

import React from 'react';

import { useCategories } from '../../hooks/useCategories';

import './styles.css';

const SelectedCategories: React.FC = () => {
  const { selectedCategories, categories } = useCategories();

  const selectedCategoriesWithInfo = categories.filter((category) =>
    selectedCategories.includes(category.id)
  );

  return (
    <div>
      <h2>Selected Categories</h2>
      <p className='selected-category-wrapper'>
        {selectedCategoriesWithInfo.map((category) => (
          <span key={category.id} className='selected-category-pill'>
            {category.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SelectedCategories;

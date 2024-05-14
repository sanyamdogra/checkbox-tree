import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories';

export const useCategories = () => {
  return useContext(CategoriesContext);
};

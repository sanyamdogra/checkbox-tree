import { createContext, useEffect, useMemo, useState } from 'react';

import { Category } from '../../common/types';
import { getCategories } from '../../services';

export interface CategoriesContextValue {
  categories: Category[];
}

/**
 * This is the context that deals with handling the categories
 */
export const CategoriesContext = createContext<CategoriesContextValue>({
  categories: []
});

export const CategoriesProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data.categories);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const values = useMemo<CategoriesContextValue>(
    () => ({
      categories
    }),
    [categories]
  );

  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};

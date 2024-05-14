import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Category } from '../../common/types';
import { getCategories } from '../../services';

export interface CategoriesContextValue {
  categories: Category[];
  selectedCategories: string[];
  expandedCategories: string[];
  toggleCategorySelection: (categoryId: string) => void;
  toggleCategoryExpansion: (categoryId: string) => void;
}

/**
 * This is the context that deals with handling the categories
 */
export const CategoriesContext = createContext<CategoriesContextValue>({
  categories: [],
  selectedCategories: [],
  expandedCategories: [],
  toggleCategorySelection: () => {},
  toggleCategoryExpansion: () => {}
});

export const CategoriesProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

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

  const toggleCategorySelection = useCallback(
    (categoryId: string) => {
      const childrenIds = categories
        .filter((category) => category.parent === categoryId)
        .map((category) => category.id);

      if (!selectedCategories.includes(categoryId)) {
        setSelectedCategories((prevState) => [
          ...prevState,
          categoryId,
          ...childrenIds
        ]);
      } else {
        setSelectedCategories((prevState) =>
          prevState.filter(
            (id) => id !== categoryId && !childrenIds.includes(id)
          )
        );
      }
    },
    [categories, selectedCategories]
  );

  const toggleCategoryExpansion = useCallback(
    (categoryId: string) => {
      if (expandedCategories.includes(categoryId)) {
        setExpandedCategories(
          expandedCategories.filter((id) => id !== categoryId)
        );
      } else {
        setExpandedCategories([...expandedCategories, categoryId]);
      }
    },
    [expandedCategories]
  );

  const values = useMemo<CategoriesContextValue>(
    () => ({
      categories,
      selectedCategories,
      expandedCategories,
      toggleCategorySelection,
      toggleCategoryExpansion
    }),
    [
      categories,
      selectedCategories,
      expandedCategories,
      toggleCategorySelection,
      toggleCategoryExpansion
    ]
  );

  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
};

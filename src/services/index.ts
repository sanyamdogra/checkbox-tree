import { DUMMY_CATEGORIES } from './data';

const getCategories = () => {
  return Promise.resolve(DUMMY_CATEGORIES);
};

export { getCategories };

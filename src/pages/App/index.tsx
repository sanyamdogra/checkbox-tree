import { useCategories } from '../../hooks/useCategories';
import './styles.css';

function App() {
  const { categories } = useCategories();

  console.log(categories, 'categories');

  return (
    <>
      <h3>Checkbox Tree Component</h3>
    </>
  );
}

export default App;

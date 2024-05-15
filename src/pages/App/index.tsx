import CheckboxTree from '../../components/CheckboxTree';
import SelectedCategories from '../../components/SelectedCategories';

import './styles.css';

function App() {
  return (
    <div className='container'>
      <h2>Checkbox Tree Component</h2>
      <CheckboxTree />
      <SelectedCategories />
    </div>
  );
}

export default App;

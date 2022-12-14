import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './Components/FormComponent';
import HeadingComponent from './Components/HeadingComponent';

function App() {
  return (
    <div className='d-flex flex-column items-center gap-20 mt-8'>
      <HeadingComponent/>
      <FormComponent/>
    </div>
  );
}

export default App;

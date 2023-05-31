import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Addtodo from './component/Addtodo';
import DisplayTodo from './component/DisplayTodo';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Container className='py-3'>
        <Addtodo />
        <DisplayTodo />
      </Container>
    </Provider>
  );
}

export default App;

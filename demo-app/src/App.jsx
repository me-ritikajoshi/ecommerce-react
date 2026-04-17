import './App.css';
import MyRoute from './MyRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
}

export default App;

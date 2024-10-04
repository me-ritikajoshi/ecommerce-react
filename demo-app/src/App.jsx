import './App.css';
import MyRoute from './MyRoute';
// import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
// import cartReducer from './redux/reducers/cartReducer';
import store from './redux/store';

function App() {
  // const store=legacy_createStore(cartReducer)
  return (
  <>
  <Provider store={store}>
      <MyRoute/>
  </Provider>
  </>
  );
}

export default App;

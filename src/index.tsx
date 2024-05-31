import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Home from './pages/Home';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);

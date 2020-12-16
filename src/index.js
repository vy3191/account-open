import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import App from './pages/App';
import configureStore from './redux/store/configureStore';

import './scss/main.scss';

const store = configureStore();

const BasicApp = () => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

ReactDOM.render( <BasicApp />, document.getElementById("root"));
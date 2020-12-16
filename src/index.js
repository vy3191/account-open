import { Provider } from 'react-redux';
import App from './pages/App';
import configureStore from './redux/store/configureStore';

const store = configureStore();

const BasicApp = () => (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render( <BasicApp />, document.getElementById("root"))
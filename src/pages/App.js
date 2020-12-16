import Header from '../components/Header';
import Router from './Router'
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App;
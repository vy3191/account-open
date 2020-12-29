import { useEffect } from 'react';
import { Header, Footer, Loader, Sidebar } from 'components';
import { useSelector, useDispatch  } from 'react-redux';
import Router from './Router';
import { showLoader } from '../redux/actions';

const App = () => {
  const { loader } = useSelector( (state) => state.loaderReducer),
          dispatch = useDispatch();
  console.log('loader from redux', loader);
  useEffect( () => {
    dispatch(showLoader(true));
    setTimeout( () => {
      dispatch(showLoader(false));
    }, 3000)
  },[])

  if(loader) {
    return(
      <div className="main-container">
        <section className="right">
          <Header />
          <Loader />
          <Footer />
        </section>
    </div>
    )
  }
  return (  
    <div className="main-container">
      <section className="left">
        <Sidebar />
      </section>
      <section className="right">
        <Header />
        <Router />
        <Footer />
      </section>
    </div>
  )
}

export default App;

/*********************************
  Layout designs for reference
**********************************/

// Horizontal Layout:
// <body>
// 	<header/>
// 	<section>
// 		<section className="left-container" />
// 		<section className="right-container" />
// 	</section>
// 	<footer />
// </body>

// Vertical Layout:
// <body>
// 	<section className="left-container>
// 		<section className
// 	</section>
// 	<secton className="right-container">
// 		<header/>
// 		<section className="content-area"/>
// 		<footer />
// 	</section>
// </body>

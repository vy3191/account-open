import { useEffect } from 'react';
import { Header, Footer, Loader, Sidebar } from 'components';
import { useSelector, useDispatch  } from 'react-redux';
import Router from './Router';
import { getApplicationById, createApplication } from '../redux/actions';

const App = () => {
  const { loader, applicationData } = useSelector( (state) => state.applicationReducer),
          dispatch = useDispatch();        
 
  useEffect( () => {
    const applicationID = window.localStorage.getItem('applicationID');

    if(applicationID) {
      dispatch(getApplicationById(applicationID))
    } else {
      dispatch(createApplication());
    }
  },[]);

  useEffect( () => {
    console.log('application data',applicationData);
    if(!applicationData.id) return;
    window.localStorage.setItem('applicationID', applicationData.id)
  }, [applicationData.id])



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

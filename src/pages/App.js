import { Header, Footer, Sidebar } from 'components';
import Router from './Router';

const App = () => {
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

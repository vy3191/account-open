import { Header, Footer, Sidebar } from 'components'

const App = () => {
  return (  
    <React.Fragment>
      <section className="container left">
        <Sidebar />
      </section>
      <section className="container right">
        <Header />
        <Router />
        <Footer />
      </section>
    </React.Fragment>
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

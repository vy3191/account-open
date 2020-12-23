import { Route, Redirect, Switch} from 'react-router-dom';
import { PersonalDetails } from '../PersonalDetails';

const Router = () => {
  return (
    <div className='pages-router'>
      <Switch>
        <Redirect exact from="/" to="/personal-details" />
        <Route path="/personal-details" render={(props) => <PersonalDetails {...props }/>} />
      </Switch>
    </div>
  )
}

export default Router

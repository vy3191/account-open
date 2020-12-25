import { Route, Redirect, Switch} from 'react-router-dom';
import { PersonalDetails } from '../PersonalDetails';
import { PreviousAddressDetails } from '../PreviousAddress';
import { CurrentAddressDetails } from '../CurrentAddress';

const Router = () => {
  return (
    <div className='pages-router'>
      <Switch>
        <Redirect exact from="/" to="/personal-details" />
        <Route path="/personal-details" render={(props) => <PersonalDetails {...props }/>} />
        <Route path="/previous-address" render={(props) => <PreviousAddressDetails {...props }/>} />
        <Route path="/current-address" render={(props) => <CurrentAddressDetails {...props }/>} />
      </Switch>
    </div>
  )
}

export default Router

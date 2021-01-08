import { Route, Redirect, Switch} from 'react-router-dom';
import { PersonalDetails } from '../PersonalDetails';
import { PreviousAddressDetails } from '../PreviousAddress';
import { CurrentAddressDetails } from '../CurrentAddress';
import { MonthlyIncome } from '../MonthlyIncome';
import { MonthlyExpenses } from '../MonthlyExpenses';
import { Products } from '../Products';
import { ReviewAndEdit } from '../ReviewAndEdit';


const Router = () => {
  return (
    <div className='pages-router'>
      <Switch>
        <Redirect exact from="/" to="/personal-details" />
        <Route 
          path="/personal-details" 
          render={(props) => <PersonalDetails {...props }/>} 
        />
        <Route 
          path="/previous-address" 
          render={(props) => <PreviousAddressDetails {...props }/>} 
        />
        <Route 
          path="/current-address" 
          render={(props) => <CurrentAddressDetails {...props }/>} 
        />
        <Route 
          path="/monthly-income" 
          render={(props) => <MonthlyIncome {...props }/>} 
        />
        <Route 
          path="/monthly-expenses" 
          render={(props) => <MonthlyExpenses {...props }/>} 
        />
        <Route 
          path="/products" 
          render={(props) => <Products {...props }/>} 
        />
        <Route 
          path="/review" 
          render={(props) => <ReviewAndEdit {...props }/>} 
        />
      </Switch>
    </div>
  )
}

export default Router

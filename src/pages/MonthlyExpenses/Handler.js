import MonthExpensesContainer from './Container';

function MonthlyExpenses() {

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div>
      <MonthExpensesContainer onSubmit={ onSubmit } />
    </div>
  )
}

export default MonthlyExpenses;

import MonthIncomeContainer from './Container';

function MonthlyIncome() {
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <div>
      <MonthIncomeContainer onSubmit={ onSubmit } />
    </div>
  )
}

export default MonthlyIncome;

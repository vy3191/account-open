import PreviousAddressContainer from './Container';

function PreviousAddressDetails() {
  const onSubmit = values => {
    console.log('values>>>', values)
 }
  return (
    <PreviousAddressContainer onSubmit={ onSubmit }/>
  )
}

export default PreviousAddressDetails;

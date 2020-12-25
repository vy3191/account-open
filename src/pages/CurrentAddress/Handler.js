import CurrentAddressContainer from './Container'

function CurrentAddressDetails() {
  const onSubmit = values => {
    console.log('values>>>', values)
 }
  return (
    <div>
      <CurrentAddressContainer onSubmit={ onSubmit }/>
    </div>
  )
}

export default CurrentAddressDetails;

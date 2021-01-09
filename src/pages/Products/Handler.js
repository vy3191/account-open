import { useSelector, useDispatch } from 'react-redux';
import ProductsContainer from './Container';
import { saveApplication } from '../../redux/actions'

function Products(props) {
  const {applicationData: {id , products }} = useSelector(state => state.applicationReducer),
                  dispatch = useDispatch();

  const onSubmit = (values) => {
    const payload = { products: values}
    dispatch(saveApplication(id, payload, handleRoute))
  }

  const handleRoute = () => {
    props.history.push("/review")
  }

  return (
    <div>
      <ProductsContainer onSubmit={ onSubmit } initialValues={ products } />
    </div>
  )
}

export default Products;

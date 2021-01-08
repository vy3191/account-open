import ProductsContainer from './Container';

function Products() {

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div>
      <ProductsContainer onSubmit={ onSubmit } />
    </div>
  )
}

export default Products;

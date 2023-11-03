import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditProductPage({products, setProducts}) {

  const [productToUpdate, setProductToUpdate] = useState(null);
  const location = useLocation()
  
  console.log(location)

  console.log({ productToUpdate });

  useEffect(() => setProductToUpdate(location.state.product), [location])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setProducts([...products, productToUpdate])
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;

import { FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { useProductsProvider } from '../context/ProductsContexProvider';

const Product = ({ product }) => {
  const { handleAddToCart } = useProductsProvider();

  const { name, media, description, price, id } = product;
  return (
    <Styles className='col-span-1 p-5'>
      <div className='relative wrapper'>
        <img className='mb-3 w-[450px] h-[450px] object-cover' src={media.source} alt={name} />
        <button
          onClick={() => handleAddToCart(id, 1)}
          aria-label='Add to basket'
          className='overlay focus:outline-none '>
          <FaCartPlus className='text-[#A44200]' size={30} />
        </button>
      </div>
      <p className='text-gray-600 text-sm capitalize'>{name}</p>
      <p className='text-gray-800'>{price.formatted_with_symbol}</p>
    </Styles>
  );
};

export default Product;

const Styles = styled.div`
  .overlay {
    position: absolute;
    bottom: 0;
    height: 0;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .wrapper:hover .overlay {
    height: 12%;
  }
`;

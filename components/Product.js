import { FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { useProductsProvider } from '../context/ProductsContexProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Product = ({ product }) => {
  const { handleAddToCart } = useProductsProvider();
  const router = useRouter();
  const { name, media, description, price, id, permalink } = product;
  return (
    <Styles className='col-span-1 p-5'>
      <div className='relative wrapper'>
        <Link href={`/product/${permalink}`}>
          <a>
            <img
              className='mb-3 md:w-[450px] md:h-[450px] w-full h-full object-cover'
              src={media.source}
              alt={name}
            />
          </a>
        </Link>
        <button
          onClick={async () => {
            await handleAddToCart(id, 1);
          }}
          aria-label='Add to basket'
          className=' focus:outline-none overlay px-5 bg-black w-full text-gray-300'>
          <span className='flex justify-between items-center tracking-wide'>
            Add to basket
            <FaCartPlus size={30} />
          </span>
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

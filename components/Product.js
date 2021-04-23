import styled from 'styled-components';
import Link from 'next/link';

const Product = ({ product }) => {
  const { name, media, description, price, id, permalink, assets } = product;
  return (
    <Styles className='col-span-1 p-5'>
      <div className='relative wrapper'>
        <img className='mb-3 ' src={media.source} alt={name} />
        <Link href={`/product/${permalink}`}>
          <a>
            <img src={assets[1].url} className=' focus:outline-none overlay w-full text-gray-300' />
          </a>
        </Link>
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
  }

  .wrapper:hover .overlay {
    height: 100%;
  }
`;

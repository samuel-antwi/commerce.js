import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const router = useRouter();

  const { name, media, description, price, id, permalink, assets } = product;
  return (
    <Styles className='col-span-1 mb-8 md:mb-0'>
      <div className='relative wrapper'>
        <img className='mb-3 ' src={media.source} alt={name} />
        <Link href={`/product/${permalink}`}>
          <a>
            <img
              // src={router.pathname === '/products/all' ? assets[1].url : media.source}
              src={(assets && assets[1].url) || media.source}
              // src={assets[1].url}
              className='text-gray-300 focus:outline-none overlay'
            />
          </a>
        </Link>
      </div>
      <p className='text-sm text-gray-600 capitalize'>{name}</p>
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

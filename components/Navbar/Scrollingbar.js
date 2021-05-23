import styled from 'styled-components';

const Scrollingbar = () => {
  return (
    <Styles className='bar hidden md:block fixed  top-0 left-0 z-20 w-full text-gray-200 bg-[#202020]'>
      <div className='flex items-center justify-between text-sm tracking-wide bar_content'>
        <h1 className='bg-[#FF610D] px-10 py-1.5'>20% off and free UK delivery with unidays</h1>
        <h1 className=''>Free UK Standard Delivery on orders over £70 </h1>
        <h1 className='bg-[#FF610D] px-10 py-1.5'>20% off and free UK delivery</h1>
        <h1>Contact us</h1>
        <h1 className='bg-[#FF610D] px-10 py-1.5'>Black Friday!! Get up to 50% off</h1>
      </div>
    </Styles>
  );
};

export default Scrollingbar;

const Styles = styled.div`
  .bar_content {
    /* display: block; Important to give the content a width */
    width: 100%;
    transform: translateX(100%); /* Animation start out of the screen */
    /* Add the animation */
    animation: move 40s linear infinite /* infinite make reapeat the animation indefinitely */;
  }

  /* Create the animation */
  @keyframes move {
    to {
      transform: translateX(-100%);
    }
  }
`;

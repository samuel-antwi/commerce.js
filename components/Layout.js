import Head from 'next/head';
import AnnoucementBar from './AnnoucementBar';
import Navbar from './Navbar/Navbar';

const Layout = ({ title, children }) => {
  return (
    <div className='font-roboto'>
      <Navbar />
      <AnnoucementBar />
      <Head>{title}</Head>
      <div className='py-20'>{children}</div>
    </div>
  );
};

export default Layout;

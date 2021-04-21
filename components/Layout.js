import Head from 'next/head';
import Navbar from './Navbar/Navbar';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Navbar />
      <Head>{title}</Head>
      <div className='py-20'>{children}</div>
    </div>
  );
};

export default Layout;

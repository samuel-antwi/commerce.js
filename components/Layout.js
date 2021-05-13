import Head from 'next/head'
import AnnoucementBar from './AnnoucementBar'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import { useRouter } from 'next/router'
import useScroll from '../hooks/useScroll'
import { BsChevronUp } from 'react-icons/bs'

const Layout = ({ title, children }) => {
  const router = useRouter()
  const pageHasScrolled = useScroll()
  return (
    <div className='font-poppins'>
      <Navbar />
      <AnnoucementBar />
      <Head>{title}</Head>
      <div>{children}</div>
      {router.pathname !== '/checkout' && <Footer />}
      {pageHasScrolled && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className='fixed right-5 bottom-5 transition duration-400'>
          <BsChevronUp className='bg-black h-10 w-10 rounded-full p-2.5 text-gray-100' />
        </button>
      )}
    </div>
  )
}

export default Layout

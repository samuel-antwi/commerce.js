import Layout from '../components/Layout';
import { ProductContextProvider } from '../context/ProductsContexProvider';
import '../styles/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
      <ProductContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductContextProvider>
    </QueryClientProvider>
  );
};

export default MyApp;

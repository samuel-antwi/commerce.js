import { commerce } from '../lib/commerce';

export default function Home({ response }) {
  console.log(response);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await commerce.categories.list();
  return {
    props: {
      response,
    },
  };
};

import ProductsList from '../../components/ProductsList'
import { commerce } from '../../lib/commerce'

const Products = ({ data }) => {
  return (
    <div className='md:pt-10'>
      <ProductsList data={data} />
    </div>
  )
}

export default Products

export const getStaticProps = async () => {
  const { data } = await commerce.products.list({ limit: 100 })
  return {
    props: {
      data,
    },
  }
}

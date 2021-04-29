import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react/cjs/react.development'
import { commerce } from '../../lib/commerce'
import FormInput from './FormInput'

const CheckoutForm = ({ checkoutToken }) => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setCountries(countries)
    setCountry(Object.keys(countries)[0])
  }

  useEffect(() => {
    fetchCountries(checkoutToken?.id)
  }, [checkoutToken])

  return (
    <main>
      <h1 className='mb-10 font-medium text-lg'>Customer and shipping details</h1>
      <form>
        <div className='sm:grid grid-cols-3 gap-3 sm:mb-5'>
          <FormInput name='firstName' label='First name *' />
          <FormInput name='middleName' label='Middle name (optional)' />
          <FormInput name='lastName' label='Last name *' />
        </div>
        <div className='sm:grid grid-cols-2 gap-3 sm:mb-5'>
          <div className='flex flex-col mb-5 sm:mb-0'>
            <label className='text-gray-500 text-sm'>Country</label>
            <select
              value={country}
              onChange={(e) => setShippingCountry(e.target.value)}
              className='border border-[#D6D6D6] py-[8px]  px-2 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'
              name='country'>
              {Object.entries(countries)
                .map(([code, name]) => ({ id: code, label: name }))
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
            </select>
          </div>
          <FormInput name='city' label='City' />
        </div>
        <div className='sm:grid grid-cols-2 gap-3 sm:mb-5'>
          <FormInput name='adress1' label='Address line 1' />
          <FormInput name='address2' label='Address line 2 (optional)' />
        </div>
        <div className='sm:grid grid-cols-2 gap-3 sm:mb-5'>
          <div className='flex flex-col'>
            <FormInput name='county' label='County' />
          </div>
          <FormInput name='postcode' label='Post code *' />
        </div>
        <div className='sm:grid grid-cols-2 gap-3 sm:mb-5'>
          <FormInput name='telephone' label='Telephone' />
          <FormInput name='email' label='Email address *' />
        </div>
      </form>
    </main>
  )
}

export default CheckoutForm

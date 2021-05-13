import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react/cjs/react.development'
import { commerce } from '../../lib/commerce'
import Order from './Order'
import PaymentDetailsForm from './PaymentDetailsForm'

const CheckoutForm = ({ checkoutToken }) => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState('')
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  const { register, handleSubmit } = useForm()

  // Fetch shipping countrie
  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setCountries(countries)
    setCountry(Object.keys(countries)[0])
  }

  // Fetch country subdivision
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  // Fetch shipping options
  const fetchShippingOptions = async (checkoutTokenId, country, stateCounty = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {
      country,
      region: stateCounty,
    })
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

  useEffect(() => {
    fetchCountries(checkoutToken?.id)
  }, [checkoutToken])

  useEffect(() => {
    if (country) fetchSubdivisions(country)
  }, [country])

  useEffect(() => {
    if (shippingSubdivision) {
      fetchShippingOptions(checkoutToken.id, country, shippingSubdivision)
    }
  }, [shippingSubdivision, checkoutToken, country])

  // handle submit function
  const onSubmimit = (data) => {
    console.log(data)
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmimit)}>
        <h1 className='mb-5 text-lg font-medium'>Customer and shipping details</h1>
        <div className='grid-cols-4 gap-10 '>
          <div className='col-span-2 py-5 mb-5 md:mb-0'>
            <div className='grid-cols-3 gap-3 sm:grid sm:mb-5'>
              <FormInput label='First name *' />
              <FormInput name='middleName' label='Middle name (optional)' />
              <FormInput name='lastName' label='Last name *' />
            </div>
            <div className='grid-cols-2 gap-3 sm:grid sm:mb-5'>
              <div className='flex flex-col mb-5 sm:mb-0'>
                <label className='text-sm text-gray-500'>Country</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
            <div className='grid-cols-2 gap-3 sm:grid sm:mb-5'>
              <FormInput name='adress1' label='Address line 1' />
              <FormInput name='address2' label='Address line 2 (optional)' />
            </div>
            <div className='grid-cols-2 gap-3 sm:grid sm:mb-5'>
              <div className='flex flex-col mb-5 sm:mb-0'>
                <label className='text-sm text-gray-500'>County</label>
                <select
                  value={shippingSubdivision}
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                  className='border border-[#D6D6D6] py-[8px]  px-2 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'
                  name='shippingSubDivision'>
                  {Object.entries(shippingSubdivisions)
                    .map(([code, name]) => ({ id: code, label: name }))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </div>
              <FormInput name='postcode' label='Post code *' />
            </div>
            <div className='grid-cols-2 gap-3 sm:grid sm:mb-5'>
              <FormInput name='telephone' label='Telephone' />
              <FormInput name='email' label='Email address *' />
            </div>
            <div className='gap-3 sm:mb-5'>
              <div className='flex flex-col mb-5 sm:mb-0'>
                <label className='text-sm text-gray-500'>Shipping Option *</label>
                <select
                  value={shippingOption}
                  onChange={(e) => setShippingOption(e.target.value)}
                  className='border border-[#D6D6D6] py-[8px]  px-2 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'
                  name='shippingSubDivision'>
                  {shippingOptions &&
                    shippingOptions.map((option) => (
                      <option key={option.id} value={option.description}>
                        {option.description} - ({option.price.formatted_with_symbol})
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <PaymentDetailsForm />
          </div>
        </div>
      </form>
    </main>
  )
}

export default CheckoutForm

const FormInput = ({ label, name, inputRef }) => {
  return (
    <div className='flex flex-col mb-5 sm:mb-0'>
      <label className='text-sm text-gray-500'>{label}</label>
      <input
        className='border border-[#D6D6D6]  p-2 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'
        type='text'
      />
    </div>
  )
}

function FormInput({ label, name, InputRef }) {
  return (
    <div className='flex flex-col mb-5 sm:mb-0'>
      <label className='text-gray-500 text-sm'>{label}</label>
      <input
        className='border border-[#D6D6D6]  p-2 focus:outline-none focus:ring-1 focus:ring-[#D6D6D6]'
        ref={InputRef}
        name={name}
        type='text'
      />
    </div>
  );
}

export default FormInput;

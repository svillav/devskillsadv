import React, { useState, useEffect } from 'react';
import Table from '../Table/Table';
import { getData, postData } from '../../services';

const Form = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    ssn: '',
  };

  const [values, setValues] = useState(initialState)
  const [error, setError] = useState('')
  const [data, setData] = useState({ users: [], isFetching: false })

  const handleValue = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    postData(initialState, data, setData, values, setValues, setError)
  }

  useEffect(() => {
    getData(data, setData, setError)
  }, [])

  useEffect(() => {
    let interval = setInterval(() => getData(data, setData, setError), (1000 * 60 * 2))
    return () => clearInterval(interval)
  })

  const handleCleaner = (event) => {
    event.preventDefault()
    setValues(initialState)
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap py-5">
      <form onSubmit={handleSubmit} className='w-full p-6 bg-gray-900 text-white'>
        <div className='flex flex-col p-3'>
          <label
            className='flex justify-start my-2'
            htmlFor="firstName">
            First Name
          </label>
          <input
            type='text'
            className='p-1 border border-black bg-gray-600 rounded-sm'
            required
            name='firstName'
            value={values.firstName}
            onChange={handleValue}
          />
        </div>
        <div className='flex flex-col p-3'>
          <label
            className='flex justify-start my-2'
            htmlFor="lastName">
            Last Name
          </label>
          <input
            type='text'
            className='p-1 border border-black bg-gray-600 rounded-sm'
            required
            name='lastName'
            value={values.lastName}
            onChange={handleValue}
          />
        </div>
        <div className='flex flex-col p-3'>
          <label
            className='flex justify-start my-2'
            htmlFor="address">
            Address
          </label>
          <input
            type='text'
            className='p-1 border border-black bg-gray-600 rounded-sm'
            required
            name='address'
            value={values.address}
            onChange={handleValue}
          />
        </div>
        <div className='flex flex-col p-3'>
          <label
            className='flex justify-start my-2'
            htmlFor="ssn">
            SSN
          </label>
          <input
            type='text'
            className='p-1 border border-black bg-gray-600 rounded-sm'
            required
            name='ssn'
            value={values.ssn}
            onChange={handleValue}
          />
        </div>
        <div className='flex justify-evenly py-6'>
          <input
            className='px-16 py-2 bg-slate-700 rounded-lg cursor-pointer'
            type='button'
            value='Reset'
            onClick={handleCleaner}
          />
          <input
            className='px-16 py-2 bg-slate-600 rounded-lg cursor-pointer'
            type='submit'
            value='Save'
          />
        </div>
      </form>
      <Table data={data} setData={setData} setError={setError} />
    </div>
  )
}

export default Form;

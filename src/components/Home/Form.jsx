
import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Images
// import { SignIn, Instagram, AppStore, Chat, Profile, Home, Story, GStore } from "../../assets/images";



const HomePage = (props) => {
  // ** Hooks

  const formValidation = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().required('Please enter your email'),
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm(
    { mode: 'onChange', resolver: yupResolver(formValidation) },
    { defaultValues: { name: '', email: '' } },
  )

  const onSubmit = data => {

    if (Object.values(data).every(field => field.length > 0)) {
        // handleCreateData(data)
        console.log('dataaa', data)
    } else {
        console.log('error', data)
    }
  }

  return (
    <>
      <div className="bg-green-600">
        <div className="container items-center h-screen py-8 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6 mx-auto bg-white rounded-md shadow-md w-80">
              <div className="mb-3">
                <label className="block mb-2 font-bold text-grey-700" for='name'> Name</label>
                <Controller
                  id='name'
                  name='name'
                  defaultValue=''
                  control={control}
                  render={({ field }) => <input autoComplete='off' className="w-full p-2 border border-gray-300 rounded" {...field} placeholder='Name' invalid={errors.name && true} />}
                />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
              </div>

              <div className="mb-3">
                <label className="block mb-2 font-bold text-grey-700" for='name'> Email</label>
                <Controller
                  id='email'
                  name='email'
                  defaultValue=''
                  control={control}
                  render={({ field }) => <input autoComplete='off' className="w-full p-2 border border-gray-300 rounded" {...field} placeholder='Email' invalid={errors.email && true} />}
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>
              
              <div className="mb-4">
                {/* <button className="p-2 border rounded border-black-300 bg-black-800 w-60" type="submit" >Submit</button> */}
                <button className="p-2 border rounded btn btn-primary md:w-full">Submit</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default HomePage;

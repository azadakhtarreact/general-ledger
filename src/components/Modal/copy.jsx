import React, { useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Select from 'react-select';
import moment from 'moment'
import Flatpickr from 'react-flatpickr'
// ** Styles

// import '@styles/react/libs/flatpickr/flatpickr.scss'
import "flatpickr/dist/flatpickr.css";
import 'flatpickr/dist/themes/dark.css';

import { Button } from 'react-daisyui'

const form = () => {

    // const [isModal, setModal] = useState(false)

    // const handleModal = () => {
    //     setModal(showModal())
    // }
    const [selectedCategory, setCategory] = useState();
    const [selectedDate, setDate] = useState(moment().format('YYYY-MM-DD'))

    const options = [

        { value: 'style', label: 'Style' },
        { value: 'bag', label: 'Bag' },
        { value: 'phone', label: 'Phone' },
    ];

    // ** Hooks
    const formValidation = yup.object().shape({
        name: yup.string().required('Please enter your name'),
        description: yup.string().required('Please enter your description'),
        price: yup.string().required('Please enter your price'),
    })

    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm(
        { mode: 'onChange', resolver: yupResolver(formValidation) },
        { defaultValues: { name: '', price: '', description: '' } },
    )

    const onSubmit = data => {

        if (Object.values(data).every(field => field.length > 0)) {
            // handleCreateData(data)
            console.log('dataaa', data)
            // const onlyDate = moment(selectedDate[0]).format("YYYY-MM-DD")
        } else {
            console.log('error', data)
        }
    }

    const handleSelect = (e) => {
        const selectedFilter = e?.value
        if (selectedFilter) {
            console.log('selected', selectedFilter, e?.value)
            setCategory(selectedFilter)
        }
    }

    return (
        <div>
            <div className="custom-form">
                <Button className="text-black btn btn-outline btn-sm" onClick={() => document.getElementById('my_modal_3').showModal()}>Create Product</Button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div><h4 className="text-lg font-bold">Product Details</h4></div>
                            <div><button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2" >✕</button></div>

                        </div>
                        <div className="mb-4">
                            <hr />
                        </div>
                        <div className="">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <div className="mb-3">
                                        <label className="block mb-2 text-sm text-grey-600" > Name<span className='text-sm text-red-600'>*</span></label>
                                        <Controller
                                            id='name'
                                            name='name'
                                            defaultValue=''
                                            control={control}
                                            render={({ field }) => <input autoComplete='off' className="w-full p-2 input input-bordered" {...field} placeholder='Name' invalid={errors.name && true} />}
                                        />
                                        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                                    </div>
                                </div>
                            </div>
                            {/* end name input */}

                            <div className="grid grid-cols-1 gap-3">
                                <div>
                                    <div className="mb-3">
                                        <label className="block mb-2 text-sm text-black" >Description<span className='text-sm text-red-600'>*</span></label>
                                        <Controller
                                            id='description'
                                            name='description'
                                            defaultValue=''
                                            control={control}
                                            render={({ field }) => <input type='textarea' autoComplete='off' className="w-full p-2 rounded textarea textarea-bordered" {...field} placeholder='Description' invalid={errors.description && true} />}
                                        />
                                        {errors.description && <p className="text-xs text-red-600">{errors.description.message}</p>}
                                    </div>

                                </div>
                            </div>
                            {/* end description  */}

                            <div className="grid grid-cols-2 gap-3 mb-2">
                                <div>
                                    <div className="mb-3">
                                        <label className="block mb-2 text-sm text-grey-600" > Name<span className='text-sm text-red-600'>*</span></label>
                                        <Controller
                                            id='price'
                                            name='price'
                                            defaultValue=''
                                            control={control}
                                            render={({ field }) => <input type='number' autoComplete='off' className="w-full p-2 input input-bordered" {...field} placeholder='Price' invalid={errors.price && true} />}
                                        />
                                        {errors.price && <p className="text-xs text-red-600">{errors.price.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <label className="block mb-2 text-sm text-grey-600" >Category<span className='text-sm text-red-600'>*</span></label>
                                        <Select
                                            // style={{ minWidth: '150px !important' }}
                                            // theme={selectThemeColors}
                                            className='react-select'
                                            classNamePrefix='select'
                                            defaultValue={selectedCategory}
                                            name='clear'
                                            options={options}
                                            placeholder='Category'
                                            onChange={handleSelect}
                                        />

                                        {/* {errors.selectedCategory && <p className="text-red-600">{errors.description.message}</p>} */}
                                    </div>
                                </div>
                            </div>
                            {/* end description  */}

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="div">
                                    <label className="block mb-2 text-sm text-grey-600" >Create At<span className='text-sm text-red-600'>*</span></label>
                                    <div className="flex items-center gap-2">
                                        {/* <Flatpickr
                                        className='form-control'
                                        // value={endTime}
                                        defaultValue={selectedDate}
                                        required
                                        id='timepicker'
                                        options={{
                                            minDate: 'today',
                                            enableTime: false,
                                            dateFormat: "Y-m-d",
                                        }}
                                        onChange={date => setDate(date)}
                                    /> */}
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-4 h-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg> */}

                                    </div>
                                </div>
                                <div className="div">
                                    {/* <Flatpickr
                                        className='form-control'
                                        // value={endTime}
                                        defaultValue={selectedDate}
                                        required
                                        id='timepicker'
                                        options={{
                                            minDate: 'today',
                                            enableTime: false,
                                            dateFormat: "Y-m-d",
                                        }}
                                        onChange={date => setDate(date)}
                                    /> */}
                                </div>

                            </div>

                            <div className="mb-2 text-end">
                                {/* <button className="p-2 border rounded border-black-300 bg-black-800 w-60" onClick={reset()} type="submit" >Submit</button> */}
                                <button type='reset' className="p-2 bg-white border rounded btn w-25" >Cancel</button>
                                <button type='submit' className="ml-2 bg-white border rounded btn w-25 ">Submit</button>
                            </div>
                        </form>
                    </div>


                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default form
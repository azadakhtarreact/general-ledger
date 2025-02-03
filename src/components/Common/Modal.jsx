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

    const [isOpen, setModal] = useState(false)

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

    const handleModalShow = () => {
        setModal(true)
    }

    const handleModalClose = () => {
        setModal(false)
    }

    return (
        <div>
            <div className="custom-form">
                <Button className="text-black btn btn-outline btn-sm" onClick={() => handleModalShow()}>Create Product</Button>
                {/* <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div><h4 className="text-lg font-bold">Product Details</h4></div>
                            <div><button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2" >✕</button></div>

                        </div>
                        <div className="mb-4">
                            <hr />
                        </div>
                        <div className="">
                            <h1>welcome</h1>
                        </div>
                    </div>
                </dialog> */}

                <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                    {/* <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}> */}
                    <div className={`modal-box max-w-5xl}`}>
                        <button className="absolute btn btn-sm btn-circle right-2 top-2" onClick={() => handleModalClose()}>✕</button>
                        <h3 className="pb-6 text-2xl font-semibold text-center">Product Details</h3>
                        <div className="mb-4">
                            <hr />
                        </div>

                        {/* Loading modal body according to different modal type */}

                        <div className="">
                            <h1>welcome</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default form
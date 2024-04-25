import React from 'react'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../services/products.service'

function AddProductForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const addProductResponse = await addProduct(data)
        reset()
        alert('Product added successfully')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='name' {...register("name", { required: true })} />
            {errors.name && <span>required</span>}
            <br />
            <input type='number' placeholder='price' {...register("price", { required: true })} />
            {errors.price && <span>required</span>}
            <br />
            <input type='number' placeholder='quantity' {...register("qty", { required: true })} />
            {errors.qty && <span>required</span>}
            <br />
            <textarea placeholder='description' cols="30" rows="10" {...register("description", { required: true })}></textarea>
            {errors.description && <span>required</span>}
            <br />

            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddProductForm
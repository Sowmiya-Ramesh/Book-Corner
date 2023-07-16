/*
 * File: HookForm.tsx
 * Project: <<Book Corner>>
 * File Created: Sunday, 16th July 2023 11:15:32 am
 * Author: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Last Modified: Sunday, 16th July 2023 11:16:43 am
 * Modified By: Sowmiya-Ramesh (miyaramesh9944@gmail.com)
 * -----
 * Copyright 2023 - 2023 Your Company, Your Company
 */
import { useForm } from 'react-hook-form';
import './HookForm.css';
import { Typography } from '@mui/material';

type FormInputs = {
    id: string;
    bookName: string;
    author: string;
    image: string;
    description: string;
    likeCount: number;
    availability: string;
};

const HookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };

    console.log(errors);

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-box'>
                <div className='form-group'>
                    <label htmlFor='id' className='form-title'><Typography variant='subtitle1'>Id*</Typography></label>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Id'
                            {...register('id', { required: 'Book Id is required' })}
                        />
                        {errors.id && <Typography className='inline-error-msg' variant='subtitle2'>{errors.id.message}</Typography>}
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='bookName' className='form-title'><Typography variant='subtitle1'>Book Name*</Typography></label>
                    <div className='input-box'> <input
                        id='bookName'
                        type='text'
                        placeholder='Book Name'
                        {...register('bookName', { required: 'Book name is required', maxLength: 80 })}
                    />
                        {errors.bookName && <Typography className='inline-error-msg' variant='subtitle2'>{errors.bookName.message}</Typography>}
                    </div></div>
                <div className='form-group'>
                    <label htmlFor='author' className='form-title'><Typography variant='subtitle1'>Author*</Typography></label>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Author'
                            {...register('author', { required: 'Author name is required', maxLength: 100 })}
                        />
                        {errors.author && <Typography className='inline-error-msg' variant='subtitle2'>{errors.author.message}</Typography>}</div></div>
                <div className='form-group'>
                    <label htmlFor='description' className='form-title'><Typography variant='subtitle1'>Description*</Typography></label>
                    <div className='input-box'>
                        <textarea {...register('description', { required: 'Brief description is required' })} />
                        {errors.description && <Typography className='inline-error-msg' variant='subtitle2'>{errors.description.message}</Typography>}</div></div>
                <div className='form-group'>
                    <label htmlFor='image' className='form-title'><Typography variant='subtitle1'>Image*</Typography></label>
                    <div className='input-box'><input
                        type='file'
                        accept='image/png, image/jpeg'
                        placeholder='Image'
                        title=''
                        {...register('image', { required: 'Add image url' })}
                    />
                        {errors.image && <Typography className='inline-error-msg' variant='subtitle2'>{errors.image.message}</Typography>}</div></div>
                <div className='form-group'>
                    <label htmlFor='likeCount' className='form-title'><Typography variant='subtitle1'>Like Count</Typography></label>
                    <input
                        type='number'
                        placeholder='Like Count'
                        {...register('likeCount')}
                        defaultValue={0}
                    /></div>
                <div className='form-group'>
                    <div className='input-box'>
                        <label htmlFor='availability' className='form-title'><Typography variant='subtitle1'>Available</Typography></label><label>
                            <input
                                {...register('availability', { required: 'Select availability' })}
                                type='radio'
                                value='Yes'
                            />
                            Yes
                        </label>

                        <label>
                            <input
                                {...register('availability', { required: 'Select availability' })}
                                type='radio'
                                value='No'
                            />
                            No
                        </label>{errors.availability && <Typography className='inline-error-msg' variant='subtitle2'>{errors.availability.message}</Typography>}</div></div>
                <div className='form-group'>
                    <input type='submit' /></div>
            </div>
        </form>
    );
}

export default HookForm;
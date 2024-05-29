
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './ContactForm.css'
import { Input } from '../UI/input/Input'
import { Textfield } from '../UI/textfield/Textfield'
import { Button } from '../UI/button/Button'
import { useAppDispatch } from '../../hooks'
import { fetchSubmitForm } from '../../store/projectsSlice'


export const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const dispatch = useAppDispatch()

  interface Params {
    Email: string
    firstName: string
    mobileNumber: string
  }
  
  const changeHandlerMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    setMessage(e.target.value)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: Params) => {
    const params = {
      phone: data.mobileNumber,
      email: data.Email,
      message,
      name: data.firstName
    }
    
    dispatch(fetchSubmitForm(params))
    
  }
  console.log(errors);
  return (
    <div className='contact_form_main_div'>
     
      <div className='main_form' >
        <div className='contact_text'>
          <span className='contact_tittle' >Расскажите <br />о вашем проекте:</span></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='form' >
        <div className='inputs' >

          <Input containerTextfields={'input_one'} label={'Ваше имя*'} nameReg={'firstName'} reg={register} option={{ required: true, maxLength: 80 }} /> {/*value={name} changeHandler={changeHandlerName}  */}

          <Input reg={register} containerTextfields={'input_one'} label={'Email*'} nameReg={'Email'} option={{ required: true, pattern: /^\S+@\S+$/i }} /> {/*value={email} changeHandler={changeHandlerEmail} */}

          <Input reg={register} containerTextfields={'input_one'} label={'Телефон*'} nameReg={'mobileNumber'} option={{ required: true, minLength: 10, maxLength: 12 }} /> {/*value={phone} changeHandler={changeHandlerPhone}*/}
          
        </div>
        <Textfield containerTextfields={'message'} label={'Сообщение'} value={message} changeHandler={changeHandlerMessage} />


        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Button stylesClass={'submitBtn'} title={'Отправить форму'} />
        </div>
      </form>
    </div>
  )
}

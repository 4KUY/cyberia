import React, { useState } from 'react'
import { Img } from './Group 1347'
import './ContactForm.css'
import { Input } from '../UI/input/Input'
import { Textfield } from '../UI/textfield/Textfield'
import { Button } from '../UI/button/Button'
import { useAppDispatch } from '../../hooks'
import { formFeedback } from '../../store/projectsSlice'

export const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [attachment, setAttachment] = useState('')

  const dispatch = useAppDispatch()
  const submitForm: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAttachment('')
    console.log(JSON.stringify({ email, phone, message, attachment }))
    void dispatch(formFeedback({ email, phone, message, attachment }))
    e.preventDefault()
  }

  const changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setEmail(e.target.value)
  }
  const changeHandlerPhone: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setPhone(e.target.value)
  }
  const changeHandlerMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='main_form' >
      <div className='contact_text'> <Img />
        <span className='contact_tittle' >Расскажите о вашем проекте</span>
        <span className='contact_info' >Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете, тем продуктивнее будет дальнейшее обсуждение</span>
      </div>
      <form className='form' >
        <Input type="email" placeholder="Email" value={email} changeHandler={changeHandler} containerTextfields='container_textfields' styleclass='form_input' ></Input>
        <Input placeholder="Телефон" value={phone} changeHandler={changeHandlerPhone} containerTextfields='container_textfields' styleclass='form_input'></Input>
        <Textfield placeholder="Сообщение" value={message} changeHandler={changeHandlerMessage} containerTextfields='container_textfields' styleclass='text_area' />
        <div className='formsub'><Button submitForm={ submitForm } stylesClass='btn_form' title='Отправить' /> <p>Нажимая «Отправить», вы даете согласие на обработку персональных данных</p> </div>
      </form>
    </div>
  )
}

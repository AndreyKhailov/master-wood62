import React from 'react';

import emailjs from 'emailjs-com';

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    isChecked: true,
};

// ********************************************************************
// ********************************************************************

function useInputsData(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

// ********************************************************************
// ********************************************************************

function Form({ setModalActive }) {
    const [data, setData] = React.useState(initialState);
    const [resultSend, setResultSend] = React.useState('');

    const input = useInputsData('')

    const onHandleChange = (e) => {


        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,
        });
    };

    const onClickUserConfirm = () => {
        setModalActive(true);
    };

    const onSendDataToEmail = () => {

        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        };
         
        emailjs.send('service_il6d3e8', 'template_r5bv7g9', templateParams, 'user_76axNdhbPsRrEwNKvdSqq')
            .then(() => {

                    setResultSend('SUCCESS');
                    setData(initialState);
            }, 
                () => { setResultSend('FAILED') }
            );
            setTimeout(() => { setResultSend('') }, 5000);
    };

    return (
        <section className="footer__form">
            <h3>Написать нам</h3>
            <div className="footer__form-sections" >
                <section className="footer__form-section">
                    <input
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={onHandleChange}
                        placeholder='Иван'
                    />
                    <label htmlFor='userName'>Ваше имя *</label>
                </section>
                <section className="footer__form-section">
                    <input
                        type='email'
                        name='email'
                        value={data.email}
                        onChange={onHandleChange}
                        placeholder='Ivanov@gmail.com *'
                    />
                    <label htmlFor='userEmail'>Ваш e-mail *</label>
                </section>
                <section className="footer__form-section">
                    <input
                        type='tel'
                        name='phone'
                        value={data.phone}
                        onChange={onHandleChange}
                        placeholder='+7(000)000-00-00 *'
                    />
                    <label htmlFor='phone'>Номер телефона</label>
                </section>
                <section className="footer__form-section">
                    <textarea
                        type='text'
                        name='message'
                        value={data.message}
                        onChange={onHandleChange}
                        placeholder='Оставьте сообщение'
                    />
                    <label htmlFor='message'>Комментарий</label>
                </section>
                <section className="footer__section-checkbox">
                    <input className="footer__checkbox"
                        id='checkbox'
                        type='checkbox'
                        name='isChecked'
                        checked={data.isChecked}
                        onChange={onHandleChange}
                    />
                    <label htmlFor='checkbox'></label>
                    <p>Настоящим подтверждаю, что я ознакомлен и согласен с 
                        <button onClick={onClickUserConfirm}>пользовательским соглашением</button>
                    </p>
                </section> 
                <section className="footer__section-btn">
                    <button 
                        className={`${data.isChecked ? 'footer__form-btn' : 'footer__form-btn desable'}`}
                        onClick={ data.isChecked && onSendDataToEmail }
                    >
                        Отправить
                    </button>
                    <div className="footer__section-send">
                        {
                            resultSend === 'SUCCESS' 
                            ? ( <p className="footer__send-success">Ваша заявка успешно отправлена!</p> ) 
                                : resultSend === 'FAILED' 
                            ? ( <p className="footer__send-failed">Ошибка! Сообщение не было отправлено. Повторите попытку</p>) 
                                : null
                        }

                    </div>
                </section>
            </div>
        </section>
    )
}

export default Form;

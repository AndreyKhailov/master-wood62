import React from 'react';

function Form() {
    const [data, setData] = React.useState({});

    return (
        <div className='form'>
            <div className="container">
                <div className="form__inner">
                    <h3 className="form__title">Свяжитесь с нами</h3>
                    <div className="form__sections">
                        <section className="form__section">
                            <input
                                id='name'
                                type='text'
                                name='userName'
                                value={data.name}
                                onChange=''
                                placeholder='Иван'
                            />
                            <label htmlFor='userName'>Ваше имя *</label>
                        </section>

                        <section className="form__section">
                            <input
                                id='userEmail'
                                type='email'
                                name='email'
                                value={data.email}
                                onChange=''
                                placeholder='Ivanov@gmail.com *'
                            />
                            <label htmlFor='userEmail'>Ваш e-mail *</label>
                        </section>

                        <section className="form__section">
                            <input
                                id='phone'
                                type='tel'
                                name='phone'
                                value={data.phone}
                                onChange=''
                                placeholder='+7(000)000-00-00 *'
                            />
                            <label htmlFor='phone'>Номер телефона *</label>
                        </section>

                        <section className="form__section">
                            <textarea
                                id='message'
                                name='text'
                                value={data.message}
                                onChange=''
                                placeholder='Оставьте комментарий'
                            />
                            <label htmlFor='message'>Комментарий</label>
                        </section>

                        <section className="form__section-checkbox">
                            <input className="form__checkbox"
                                id='checkbox'
                                type='checkbox'
                                name='checkbox'
                                value='true'
                                onChange=''
                            />
                            <label htmlFor='checkbox'></label>
                            <p>Настоящим подтверждаю, что я ознакомлен и согласен с <a href='index.js'>пользовательским соглашением</a></p>
                        </section> 

                        <section className="form__section-btn">
                            <button 
                                className="form__btn"
                                type='submit'
                            >
                                Отправить
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;

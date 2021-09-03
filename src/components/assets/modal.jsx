import React from 'react';

function Modal({isOpened, setModalActive}) {

    const onModalClose = () => {
        setModalActive(false);
    }

    return (
        <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`}>
            <div className="modal__body">
                <div 
                    className="modal__btn-close"
                    onClick={onModalClose}
                >
                   Закрыть Х
                </div>
                <h3>СОГЛАСИЕ</h3>
                <hr />
                <p>
                    на обработку персональных данных
                    В соответствии со статьей 9 Федерального закона от 27 июля 2006 года «№ 152-ФЗ «О персональных данных» даю в электронной форме согласие Интернет-ресурсу woodworker62@gmail.com (далее интернет-ресурсу) на автоматизированную, а также без использования средств автоматизации обработку моих персональных данных, а именно на сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных, а именно совершение действий, предусмотренных пунктом 3 части первой статьи 3 Федерального закона от 27 июля 2006 года № 152-ФЗ «О персональных данных», со сведениями, представленными мной на данном интернет-ресурсе:
                    <br />
                    - фамилия, имя;
                    <br />
                    - адресс электронной почты;
                    <br />
                    - номер телефона;
                    <br />
                    Цель обработки персональных данных:
                    <br />
                    - получение информации от пользователя интернет-ресурса;
                </p>
            </div>
        </div>
    )
}

export default Modal;

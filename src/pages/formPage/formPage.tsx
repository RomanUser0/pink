import { useResize } from '../../hooks/useResize'
import Styles from './formPage.module.scss'


import backMobile from '../../assets/image/photoPage/back-mobile.jpg.png'
import backTablet from '../../assets/image/photoPage/back-tablet@1x.png'
import backDesktop from '../../assets/image/photoPage/back-desktop.png'
import { useForm } from 'react-hook-form'



function FormPage() {


    const width = useResize()

    const { register, handleSubmit } = useForm()

    const submit = (data: object) => {
        console.log(data)
    }


    return (
        <div className={Styles.form__page}>
            <header className={Styles.form__header}>
                <img src={width < 660 ? backMobile : (width < 960) ? backTablet : backDesktop} />
                <div className={Styles.form__header__wrapper}>
                    <h1>Конкурс на самое безбашенное{width > 960 ? <br /> : null} путишествие с Пинк</h1>
                    <p>Поделитесь своей историей и получите шанс выигратьценный приз - 1000 миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:</p>
                </div>
            </header>
            <form className={Styles.submit__form} onSubmit={handleSubmit(submit)}>
                <div className={Styles.surname}>
                    <div className={Styles.firstName}>
                        <label>ФАМИЛИЯ:</label>
                        <input type='text' placeholder='Укажите фамилию *' />
                    </div>
                    <div className={Styles.name}>
                        <label>ИМЯ:</label>
                        <input type='text' placeholder='Введите ваше имя *' />
                    </div>
                    <div className={Styles.patronymic}>
                        <label>ОТЧЕСТВО:</label>
                        <input type='text' placeholder='Ну и отчество тоже' />
                    </div>
                </div>
                <div className={Styles.achievements}>
                    <div className={Styles.achievements__wrapper}>
                        <p>ВАШИ БЕЗБАШЕННЫЕ ДОСТИЖЕНИЯ В ПУТИШЕСТВИИ</p>
                        <input id='achievements_one' type='checkbox'  {...register('селфи')}/>
                        <label htmlFor='achievements_one'>Сделал селфи с акулой</label>
                        <input id='achievements_two' type='checkbox' />
                        <label htmlFor='achievements_two'>Обгорел на пляже</label>
                        <input id='achievements_three' type='checkbox' />
                        <label htmlFor='achievements_three'>Видел Чака Норриса</label>
                        <input id='achievements_four' type='checkbox' />
                        <label htmlFor='achievements_four'>Накупил сувениров</label>
                        <input id='achievements_five' type='checkbox' />
                        <label htmlFor='achievements_five'>Удержал башню</label>
                        <input id='achievements_six' type='checkbox' />
                        <label htmlFor='achievements_six'>Разгромил отель</label>
                    </div>
                </div>
                
                <div className={Styles.contacts}>    
                    <div className={Styles.contacts__wrapper}>
                        {width > 660 ? <p>КОНТАКТНАЯ ИНФОРМАЦИЯ</p> : null }
                        <div className={Styles.number}>
                            <label htmlFor='number'>НОМЕР ТЕЛЕФОНА</label>
                            <input type='number' id='number' placeholder='Номер, пожалуйста'/>
                        </div>
                        <div className={Styles.address}>
                            <label htmlFor='address'>АДРЕС ПОЧТЫ</label>
                            <input type='email' placeholder='Введите почту *' />
                        </div>
                    </div>
                </div>
                <div className={Styles.apps}>
                    <div className={Styles.apps__wrapper}>
                        <p>С каким приложением путишествовали?</p>
                        <input name='apps' type='radio' id='iOS'/>
                        <label htmlFor='iOS'>Pink для iOS</label>
                        <input name='apps' type='radio' id='android'/>
                        <label htmlFor='android'>Pink для Android</label>
                        <input name='apps' type='radio' id='phone'/>
                        <label htmlFor='phone'>Windows Phone</label>
                    </div>
                </div>
                <div className={Styles.description}>
                    <div className={Styles.description__wrapper}>
                        <p>ОПИШИТЕ СВОИ ЭМОЦИИ</p>
                        <textarea  placeholder='Можно прям в красках, не стесняясь в выражениях'/>
                    </div>
                </div>
                <div className={Styles.btn}>
                    <button>ОТПРАВИТЬ ФОРМУ</button>
                    <p><span>*</span> - ОБЯЗАТЕЛЬНЫЕ ПОЛЯ</p>
                </div>
            </form>
        </div>
    )
}


export default FormPage
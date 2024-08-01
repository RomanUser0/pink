import Styles from './mainPage.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import imageFonMobile from '../../assets/image/mainPage/back-mobile@1x.jpg.png'
import imageHandMobile from '../../assets/image/mainPage/iphone-5-in-hand-png.png'
import imageHandTablet from '../../assets/image/mainPage/iphone-6-copy.png'
import imageHandDesctop from '../../assets/image/mainPage/iphone-6.png'
import imageLayer from '../../assets/image/mainPage/Layer.png'
import iphoneScreen from '../../assets/image/mainPage/iphonescreen.png'
import iphoneScreenGrey from '../../assets/image/information/Iphonescreengrey.png'
import iphoneScreen2 from '../../assets/image/information/Iphonescreen2.png'
import iphoneScreen3 from '../../assets/image/information/Iphonescreen3.png'
import iphone from '../../assets/image/information/Iphone.png'
import iphoneInformation from '../../assets/image/descriptionSite/Iphone.png'
import iphoneScreenInformation from '../../assets/image/descriptionSite/Iphonescreen.png'

import androidLogo from '../../assets/svg/logo/android-logo.svg'
import appleLogo from '../../assets/svg/logo/apple-logo.svg'
import microsoftLogo from '../../assets/svg/logo/microsoft-logo.svg'
import no from '../../assets/svg/mainPage/no.svg'
import yes from '../../assets/svg//mainPage/yes.svg'
import fon from '../../assets/svg/footer/triangle-white-footer.svg'
import diagram from '../../assets/svg/mainPage/diagram-fill.svg'
import timer from '../../assets/svg/mainPage/timer.svg'







function MainPage() {

    const [width, setWidth] = useState(window.innerWidth)




    useEffect(() => {

        const radioBtn = document.querySelectorAll<HTMLElement>(`#radio_1,#radio_2,#radio_3`)
        const items = document.querySelectorAll<HTMLElement>(`.${Styles.reivew__item}`)

        const radioBtnPrise = document.querySelectorAll<HTMLElement>(`#radio_1_prise,#radio_2_prise,#radio_3_prise`)
        const wrapperPrise = document.querySelector<HTMLElement>(`.${Styles.wrapper__prise}`) as HTMLElement

        wrapperPrise.style.transform = (width < 660 ? `translateX(${-420 + (width / 2)}px)` : `translateX(${0}px)`)

        window.addEventListener('resize', () => {
            items.forEach((item) => {
                item.style.transform = `translateX(-${width}px)`
                item.style.transition = '0s'
            })
            wrapperPrise.style.transition = '0s'
            wrapperPrise.style.transform = (width < 660 ? `translateX(${-420 + (width / 2)}px)` : `translateX(${0}px)`)
            setWidth(window.innerWidth)
        })

        radioBtn.forEach((item, index) => {
            let widthItem = index * width
            item.addEventListener('click', () => {
                items.forEach((item) => {
                    item.style.transition = '1s'
                    item.style.transform = `translateX(-${widthItem}px)`
                })
            })
        })

        radioBtnPrise.forEach((item, index) => {
            item.addEventListener('click', () => {
                wrapperPrise.style.transition = '1s'
                wrapperPrise.style.transform = `translateX(-${260 + (index * 260)}px)`
            })
        })



    }, [width])




    return (
        <div className={Styles.mainPage}>
            <div className={Styles.mainPage__header}>
                {width < 660 ? <div className={Styles.fon__mobile}>
                    <img src={imageFonMobile} />
                    <div className={Styles.hand}><img src={imageHandMobile} /><img src={imageLayer} /></div>
                </div> : null}
                <div className={Styles.mainPage__header__wrapper}>
                    <div className={Styles.content__header}>
                        <div className={Styles.links}>
                            {width > 660 ? <h2 className={Styles.links_description}>Взгляните на жизнь иначе!</h2> : null}
                            <button className={Styles.installbtn}>Скачать приложение</button>
                            <div className={Styles.link__list}>
                                <Link to={'#'}><img src={appleLogo} /></Link>
                                <Link to={'#'}><img src={androidLogo} /></Link>
                                <Link to={'#'}><img src={microsoftLogo} /></Link>
                            </div>
                            <p className={Styles.description}>Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8</p>
                        </div>
                        {width > 660 ? <div className={Styles.hand__desktop}>
                            <img src={width < 960 ? imageHandTablet : imageHandDesctop} />
                            <img src={imageLayer} />
                        </div> : null}
                    </div>
                </div>

            </div>
            <div className={Styles.description__site}>
                <div className={Styles.description__wrapper}>
                    <div className={Styles.heading}>
                        <h3>Устали от серости мегаполиса?</h3>
                        <h3>Нам есть, что вам предложить!</h3>
                    </div>
                    <div className={Styles.description__aplication}>
                        <div className={Styles.item}>
                            {width > 960 ? <div className={Styles.item__image}>
                                <img src={iphone} />
                                <img src={iphoneScreenGrey} />
                            </div> : null}
                            <h3>Поднимает настроение</h3>
                            <p>Приложение позволит вам победить осеннюю хандру и депрессию буквально в несколько кликов!</p>
                        </div>
                        <div className={Styles.item}>
                            {width > 960 ? <div className={Styles.item__image}>
                                <img src={iphone} />
                                <img src={iphoneScreen2} />
                            </div> : null}
                            <h3>Меняет мир вокруг</h3>
                            <p>Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект</p>
                        </div>
                        <div className={Styles.item}>
                            {width > 960 ? <div className={Styles.item__image}>
                                <img src={iphone} />
                                <img src={iphoneScreen3} />
                            </div> : null}
                            <h3>Заводит новых друзей</h3>
                            <p>Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых</p>
                        </div>
                    </div>
                    {width < 960 ? <div className={Styles.image__iphone}>
                        <img src={width < 660 ? iphoneScreen : iphoneInformation} />
                        {width > 660 ? <img src={iphoneScreenInformation} /> : null}
                    </div> : null}
                </div>
            </div>
            {width > 660 ? <div className={Styles.round_diagram}>
                <div className={Styles.round_diagram__wrapper}>
                    <div className={Styles.time}>
                        <img src={timer} />
                        <img className={Styles.diagram} src={diagram} />
                        <span>24</span>
                    </div>
                    <div className={Styles.info__time}>
                        <h3>Эффект на 24 часа!</h3>
                        <p>Британские ученые провели исследования и доказали, что положительный эффект от использования приложения длиться целые сутки!</p>
                        <Link to={'#'}>Узнать больше об исследовании</Link>
                    </div>
                </div>
            </div> : null}
            <div className={Styles.reivew}>
                <div className={Styles.reivew__list}>
                    <div className={Styles.reivew__item}>
                        <p>&laquo;Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные вещи! А еще я познакомился со своей будущей женой в коммментариях к выложенной фотографии!&raquo;</p>
                        <h3>Николай Петров</h3>
                        {width > 660 ? <p>25 лет, водитель трамвая</p> : null}
                    </div>
                    <div className={Styles.reivew__item}>
                        <p>&laquo;Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные вещи! А еще я познакомился со своей будущей женой в коммментариях к выложенной фотографии!&raquo;</p>
                        <h3>Николай Петров</h3>
                        {width > 660 ? <p>25 лет, водитель трамвая</p> : null}
                    </div>
                    <div className={Styles.reivew__item}>
                        <p>&laquo;Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные вещи! А еще я познакомился со своей будущей женой в коммментариях к выложенной фотографии!&raquo;</p>
                        <h3>Николай Петров</h3>
                        {width > 660 ? <p>25 лет, водитель трамвая</p> : null}
                    </div>
                </div>
                <div className={Styles.radioBtn__list}>
                    <input name='contact' id='radio_1' defaultChecked type='radio' />
                    <input name='contact' id='radio_2' type='radio' />
                    <input name='contact' id='radio_3' type='radio' />
                </div>
            </div>
            <div className={Styles.prise}>
                <div className={Styles.wrapper__prise}>
                    <div className={Styles.prise__list}>
                        <div className={`${Styles.null} ${Styles.prise__item}`}></div>
                        <div className={`${Styles.basic} ${Styles.prise__item}`}>
                            <h3>БАЗА</h3>
                            <p>1,99 USD</p>
                        </div>
                        <div className={`${Styles.standart} ${Styles.prise__item}`}>
                            <h3>СТАНДАРТ</h3>
                            <p>3,99 USD</p>
                        </div>
                        <div className={`${Styles.unlimited} ${Styles.prise__item}`}>
                            <h3>АНЛИМ</h3>
                            <p>9,99 USD</p>
                        </div>
                    </div>
                    <div className={Styles.prise__description}>
                        <div className={Styles.description__item}>
                            <p>Розовый фильтр</p>
                            <div><img src={yes} /></div>
                            <div><img src={yes} /></div>
                            <div><img src={yes} /></div>
                        </div>
                        <div className={Styles.description__item}>
                            <p>Смайлики</p>
                            <div><img src={no} /></div>
                            <div><img src={yes} /></div>
                            <div><img src={yes} /></div>
                        </div>
                        <div className={Styles.description__item}>
                            <p>Комментарии</p>
                            <div><img src={no} /></div>
                            <div><img src={no} /></div>
                            <div><img src={yes} /></div>
                        </div>
                    </div>
                </div>
                {width < 660 ? <div className={Styles.prise__radioBtn__list}>
                    <input name='contact_prise' id='radio_1_prise' type='radio' />
                    <input name='contact_prise' id='radio_2_prise' defaultChecked type='radio' />
                    <input name='contact_prise' id='radio_3_prise' type='radio' />
                </div> : null}
            </div>
            <div className={Styles.position}>
                <div className={Styles.address}>
                    <div className={Styles.adress__wrapper}>
                        <div className={Styles.wrapper}>
                            <h2>Осталить вопросы?</h2>
                            <h2>Свяжитесь с нами!</h2>
                        </div>
                        <h3>Звоните:</h3>
                        <p>+7 812 555-66-66</p>
                        <h3>Пишите:</h3>
                        <p><Link to={'#'}>mail@htmlacademy.ru</Link></p>
                        <h3>Приезжайте в гости:</h3>
                        <p>ул. Большая Конюшенная, 19/8</p>
                    </div>
                    <div className={Styles.fon}><img src={fon} /></div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A518690e6d91650e0ca5c7860554e1267c952246230022a1574b46307118d5838&amp;source=constructor" width="562" height="641" frameBorder="0"></iframe>
            </div> 
        </div>
    )
}

export default MainPage
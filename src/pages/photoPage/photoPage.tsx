import Styles from './photoPage.module.scss'
import { useResize } from '../../hooks/useResize'
import { useEffect, useState } from 'react'

import backMobile from '../../assets/image/photoPage/back-mobile.jpg.png'
import backTablet from '../../assets/image/photoPage/back-tablet@1x.png'
import backDesktop from '../../assets/image/photoPage/back-desktop.png'

import panoramaMobile from '../../assets/image/photoPage/panorama-mobile.jpg.png'
import panoramaTablet from '../../assets/image/photoPage/panorama-tablet.jpg.png'
import panoramaDesktop from '../../assets/image/photoPage/panorama-desktop.jpg.png'

import cardsImage1 from '../../assets/image/photoPage/carsd/photo-1-mobile.jpg.png'
import cardsImage2 from '../../assets/image/photoPage/carsd/photo-2-mobile.jpg.png'
import cardsImage3 from '../../assets/image/photoPage/carsd/photo-3-mobile.jpg.png'
import cardsImage4 from '../../assets/image/photoPage/carsd/photo-4-mobile.jpg.png'
import cardsImage5 from '../../assets/image/photoPage/carsd/photo-5-mobile.jpg.png'
import cardsImage6 from '../../assets/image/photoPage/carsd/photo-6-mobile.jpg.png'
import cardsImageDesktop1 from '../../assets/image/photoPage/carsd/photo-1-desktop.jpg.png'
import cardsImageDesktop2 from '../../assets/image/photoPage/carsd/photo-2-desktop.jpg.png'
import cardsImageDesktop3 from '../../assets/image/photoPage/carsd/photo-3-desktop.jpg.png'
import cardsImageDesktop4 from '../../assets/image/photoPage/carsd/photo-4-desktop.jpg.png'
import cardsImageDesktop5 from '../../assets/image/photoPage/carsd/photo-5-desktop.jpg.png'
import cardsImageDesktop6 from '../../assets/image/photoPage/carsd/photo-6-desktop.jpg.png'
import filterImage from '../../assets/svg/photoPage/photo-7-tablet.jpg.png'

import likes from '../../assets/svg/photoPage/icon-heart.svg'
import fill from '../../assets/svg/photoPage/fill.svg'
import crop from '../../assets/svg/photoPage/crop.svg'
import contrast from '../../assets/svg/photoPage/contrast.svg'





function PhotoPage() {

    const width = useResize()

    const [valueFilter, setValueFilter] = useState({ crop: 0, fill: 0, contracts: 0 })

    useEffect(() => {
        const btn = document.querySelectorAll<HTMLElement>(`.${Styles.crop}, .${Styles.fill}, .${Styles.contracts}`) as NodeList
        const items = document.querySelectorAll<HTMLElement>(`.${Styles.sliders__wrapper__crop},.${Styles.sliders__wrapper__fill},.${Styles.sliders__wrapper__contracts}`)
        
        if (width < 660) {
            items.forEach((item) => {
                item.style.display = 'none'
            })
        }
        items[0].style.display = 'block'
        if (width > 660) {
            items.forEach((item) => {
                item.style.display = 'flex'
            })
        }



        const clickBtn = (event: Event) => {

            if(event.target instanceof HTMLInputElement) {
                 if (event.target.classList.value === Styles.crop) {
                items[0].style.display = 'block'
                items[1].style.display = 'none'
                items[2].style.display = 'none'
                return
            }
            else if (event.target.classList.value === Styles.fill) {
                items[0].style.display = 'none'
                items[1].style.display = 'block'
                items[2].style.display = 'none'
                return
            }
            else if (event.target.classList.value === Styles.contracts) {
                items[0].style.display = 'none'
                items[1].style.display = 'none'
                items[2].style.display = 'block'
                return
            }

            }
    

           
        }
        btn.forEach((item) => {
            item.addEventListener('click', clickBtn)
        })

        return () => btn.forEach((item) => {
            item.removeEventListener('click', clickBtn)
        })
    }, [width, valueFilter])

    const sliders = (event: any) => {
        if (event.target.id === 'range_1') {
            setValueFilter({
                crop: event.target.value,
                fill: valueFilter.fill,
                contracts: valueFilter.contracts
            })
            return
        } else if (event.target.id === 'range_2') {
            setValueFilter({
                crop: valueFilter.crop,
                fill: event.target.value,
                contracts: valueFilter.contracts
            })
            return
        } else if (event.target.id === 'range_3') {
            setValueFilter({
                crop: valueFilter.crop,
                fill: valueFilter.fill,
                contracts: event.target.value
            })
            return
        }
    }

    return (
        <div className={Styles.photoPage}>
            <header className={Styles.page__header}>
                <img src={width < 660 ? backMobile : (width < 960) ? backTablet : backDesktop} />
                <div className={Styles.page__header__wrapper}>
                    <h1>Фотографии<br />пользователей</h1>
                    <p>Взгляните на фотографии, которые выкладывают пользователи! Видите, как не хватает ваших?</p>
                </div>
            </header>
            <div className={Styles.panorama}>
                <img src={width < 660 ? panoramaMobile : (width < 960) ? panoramaTablet : panoramaDesktop} />
                <div className={Styles.panorama__description}>
                    <div className={Styles.whoWroteLikes}>
                        <p className={Styles.who}>Анна <span>5 МИНУТ НАЗАД</span></p>
                        {width > 660 ? <div className={Styles.likes}><p>НРАВИТЬСЯ: 215</p> <img src={likes} /></div> : null}
                    </div>
                    <p className={Styles.description}>Прыгать или нет? Напишите в коментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!</p>
                    {width < 660 ? <p className={Styles.likesMobile}><img src={likes} /> НРАВИТЬСЯ: 215</p> : null}
                </div>
            </div>
            <div className={Styles.cards}>
                <div className={Styles.cards__list}>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage1 : cardsImageDesktop1} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Левон <span>5 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Вчера он на луну летал, сегодня в руки к нам попал</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 356</p>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage2 : cardsImageDesktop2} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Антон <span>12 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Соседи будут рады!</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 556</p>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage3 : cardsImageDesktop3} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Борис <span>20 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Здесь могла быть ваша цитата о высоком и вечном.</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 215</p>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage4 : cardsImageDesktop4} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Сергей <span>25 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Самая кубанская в мире!</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 4</p>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage5 : cardsImageDesktop5} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Максим <span>40 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Где снег-то?</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 150</p>
                        </div>
                    </div>
                    <div className={Styles.item}>
                        <img src={width < 960 ? cardsImage6 : cardsImageDesktop6} />
                        <div className={Styles.description}>
                            <p className={Styles.who}>Надежда <span>45 ЧАСОВ НАЗАД</span></p>
                            <p className={Styles.description__image}>Всем GM и взаимные лайки!</p>
                            <p className={Styles.likes}><img src={likes} /> НРАВИТЬСЯ: 2560</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.postIt}>
                <h2>Затмите их всех!<br />Выкладывайте все, что накопилось в телефоне!</h2>
                <div className={Styles.filters}>
                    <div className={Styles.image}>
                        <img src={filterImage} />
                    </div>
                    <div className={Styles.image__filter}>
                        <div className={Styles.filter}>
                            {width < 660 ? <div className={Styles.filter__btn}>
                                <input className={Styles.crop} name='filter' defaultChecked type='radio' id='crop' />
                                <label htmlFor='crop'><img src={crop} /></label>
                                <input className={Styles.fill} name='filter' type='radio' id='fill' />
                                <label htmlFor='fill'><img src={fill} /></label>
                                <input className={Styles.contracts} name='filter' type='radio' id='contracts' />
                                <label htmlFor='contracts'><img src={contrast} /></label>
                            </div> : null}
                            <div className={Styles.sliders}>
                                <form onInput={sliders}>
                                    <div className={Styles.sliders__wrapper__crop}>
                                        {width > 660 ? <img src={crop} /> : null}
                                        <input min={0} max={100} step={1} defaultValue={valueFilter.crop} type='range' id='range_1' />
                                    </div>
                                    <div className={Styles.sliders__wrapper__fill}>
                                        {width > 660 ? <img src={fill} /> : null}
                                        <input min={0} max={100} step={1} defaultValue={valueFilter.fill} type='range' id='range_2' />
                                    </div>
                                    <div className={Styles.sliders__wrapper__contracts}>
                                        {width > 660 ? <img src={contrast} /> : null}
                                        <input min={0} max={100} step={1} defaultValue={valueFilter.contracts} type='range' id='range_3' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={Styles.submit__image}>
                            <button className={Styles.post}>Запостить</button>
                            <button className={Styles.cancel}>Отмена</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage
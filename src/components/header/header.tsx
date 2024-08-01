import Styles from './header.module.scss'
import iconSite from '../../assets/svg/header/icon.svg'
import iconSiteTablet from '../../assets/svg/header/icon-tablet.svg'
import iconSiteDesctop from '../../assets/svg/header/logotype-white-desktop.svg'
import { AlignJustify, X } from 'lucide-react'
import { useResize } from '../../hooks/useResize'
import { useState } from 'react'
import { Link } from 'react-router-dom'




function Header() {

    const width = useResize()

    const [isActive, setIsActive] = useState(false)


    return (
        <div className={Styles.header}>
            <div className={Styles.wrapper}>
            <img className={Styles.icon} src={width < 659 ? iconSite : (width < 960) ? iconSiteTablet : iconSiteDesctop}></img>
            
           {width < 960 ? <AlignJustify onClick={() => setIsActive(!isActive)} className={Styles.lucideMenu} /> : null }
            {isActive ? <div className={Styles.topMenu}>
                <div className={Styles.topMenu__header}>
                <img className={Styles.topMenuIcon} src={width > 659 ? iconSiteTablet : iconSite}></img>
                <X onClick={() => setIsActive(!isActive)} className={Styles.lucideClose}/>
                </div>
                <ul className={Styles.topMenu__list}>
                    <li className={Styles.item}><Link onClick={() => setIsActive(false)} to={'/'}>ГЛАВНАЯ</Link></li>
                    <li className={Styles.item}><Link onClick={() => setIsActive(false)} to={'/photo'}>ФОТОГРАФИИ</Link></li>
                    <li className={Styles.item}><Link onClick={() => setIsActive(false)} to={'/form'}>КОНКУРС</Link></li>
                    <li className={Styles.item}><Link to={'#'}>HTML ACADEMY</Link></li>
                </ul>
            </div> : null}
           {width > 960 ? <ul className={Styles.topMenu__list__desktop}>
                    <li className={Styles.item}><Link to={'/'}>ГЛАВНАЯ</Link></li>
                    <li className={Styles.item}><Link to={'/photo'}>ФОТОГРАФИИ</Link></li>
                    <li className={Styles.item}><Link to={'/form'}>КОНКУРС</Link></li>
                    <li className={Styles.item}><Link to={'#'}>HTML ACADEMY</Link></li>
                </ul> : null }
            </div> 
        </div>
    )
}

export default Header
import Styles from './footer.module.scss'


import twitter from '../../assets/svg/footer/twitter.svg'
import facebook from '../../assets/svg/footer/facebook.svg'
import youtube from '../../assets/svg/footer/youtube.svg'
import iconFooter from '../../assets/svg/footer/logotype-blue-tablet.svg'
import author from '../../assets/svg/footer/htmlacademy.svg'
import { Link } from 'react-router-dom'




function Footer() {
    return (
        <footer className={Styles.footer}>
                <div className={Styles.footer__icon}>
                    <img src={iconFooter} />
                </div>
                <div className={Styles.footer__links}>
                    <span><Link target="_blank" to={'https://ru.wikipedia.org/wiki/Твиттер'}><img src={twitter} /></Link></span>
                    <span><Link target="_blank" to={'https://en.wikipedia.org/wiki/Facebook'}><img src={facebook} /></Link></span>
                    <span><Link target="_blank" to={'https://www.youtube.com/'}><img src={youtube} /></Link></span>
                </div>
                <div className={Styles.footer__author}><span>Разработано</span><img src={author} /></div>
            </footer>
    )
}


export default Footer
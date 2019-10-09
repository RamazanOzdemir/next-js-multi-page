import React,{useContext} from 'react';
import navbarStyle from '../Sass/navbarStyle.scss'
import triAngle from '../Sass/triaAngleStyle.scss'
import Link from 'next/link';
import LanguageFlag from './LanguageFlag';
import { Context } from '../context/Context';


const langArray = [
    ['en','English'],
    ['ar','العربية'],
    ['fa','فارسی'],
    ['fr','français'],
    ['de','Deutsch']
];


const Navbar = ()=>{
  
   
    const {lang,openLangDrop,money,navbarText} = useContext(Context);
    return (
        <nav className={navbarStyle.navbar}>
            <div className={navbarStyle.logo}> 
                <Link href={'/'}>
                    <img src='/static/image/trem-global-logo.png' alt='tremGlobal' />
                </Link>
            </div>
            <div className={navbarStyle.menu}>
                <div className={navbarStyle.menu__top}>
                    <div className={navbarStyle.dropdown}>
                        <div>
                            <button className={navbarStyle.dropdown__lang} >
                                <LanguageFlag language={lang} isOpen={true} />
                            </button>
                            <div className={navbarStyle.lang__content} id='lang__drop'>
                                {
                                    langArray.map(element=>(
                                        <LanguageFlag key={'languageFlag'+element[1]} language={element} isOpen={false}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <button className={navbarStyle.dropdown__money} >
                                <p className={navbarStyle.money} onClick={openLangDrop.bind(this,true,'money__drop',money)}>{money[1]}</p>
                            </button>
                            <div className={navbarStyle.money__content} id='money__drop'>
                                <p className={navbarStyle.money} onClick={openLangDrop.bind(this,false,'money__drop',['dl','\u0024'])}>{'\u0024'}</p>
                                <p className={navbarStyle.money} onClick={openLangDrop.bind(this,false,'money__drop',['tl','\u20BA'])}>{'\u20BA'}</p>
                                <p className={navbarStyle.money} onClick={openLangDrop.bind(this,false,'money__drop',['eu','\u20AC'])}>{'\u20AC'}</p>
                            </div>
                        </div>
                    </div>
                    <div className={navbarStyle.follow__menu}>
                        <a href="https://www.facebook.com/tremglobal" className="icon-fb">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/tremglobal" className="icon-ig">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCyvJGtFMxJDzDAN7sgmJPdw" className="icon-yt">
                            <i className="fa fa-youtube-play"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/tremglobal" className="icon-in">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://www.twitter.com/tremglobal" className="icon-tw">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://www.reddit.com/user/tremglobal" className="icon-reddit">
                            <i className="fa fa-reddit-alien"></i>
                        </a>
                        <a href="https://in.pinterest.com/tremglobal/" className="icon-pinterest">
                            <i className="fa fa-pinterest"></i>
                        </a>

                    </div>
                </div>
                <div className={navbarStyle.menu__bottom}>
                    <Link href='/' ><a className={navbarStyle.menu__button}>{navbarText.menu[`${lang[0]}`].home}</a></Link>
                    <Link href='/' ><a className={navbarStyle.menu__button}>{navbarText.menu[`${lang[0]}`].about}</a></Link>
                    <div>
                        <a href='/#' onClick={openLangDrop.bind(this,true,'properties__drop')} className={navbarStyle.menu__button}>
                            {navbarText.menu[`${lang[0]}`].properties}
                            <div className={triAngle.downTriAngle}></div>
                        </a>
                        <div className={navbarStyle.properties__content} id='properties__drop'>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].all}</a></Link>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].istanbul}</a></Link>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].bursa}</a></Link>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].sakarya}</a></Link>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].bodrum}</a></Link>
                            <Link href='/'><a className={navbarStyle.properties} onClick={openLangDrop.bind(this,false,'properties__drop')} >{navbarText.properties[`${lang[0]}`].usa}</a></Link>
                        </div>
                    </div>                
                    <Link href='/' ><a className={navbarStyle.menu__button}>{navbarText.menu[`${lang[0]}`].services}</a></Link>
                    <Link href='/' ><a className={navbarStyle.menu__button}>{navbarText.menu[`${lang[0]}`].articles}</a></Link>
                    <Link href='/' ><a className={navbarStyle.menu__button}>{navbarText.menu[`${lang[0]}`].contact}</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React,{useContext} from 'react';
import navbarStyle from '../Sass/navbarStyle.scss';
import {Context} from '../context/Context';


const LanguageFlag = (props) => {
    const {language,isOpen} = props;
    const {openLangDrop} = useContext(Context);
    return (
        <div className={navbarStyle.flag} onClick={openLangDrop.bind(this,isOpen,'lang__drop',language)} >
            <img src={`/static/image/${language[0]}-flag.png`}/>
            <span>{language[1]}</span>
        </div>
    )
}

export default LanguageFlag;

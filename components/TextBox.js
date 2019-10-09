import React,{useContext} from 'react';
import slideShowStyle from '../Sass/sileShowStyle.scss';
import { Context } from '../context/Context';

const TextBox = (props) => {

    const {image,index} = props;
    const {moneySlide,money} = useContext(Context);

    return (
    <div className={slideShowStyle.text__block}>
        <h3>{image[1].head}</h3>
        <h5>{image[1].loc}</h5>
        <h5>{moneySlide[`slide${index+1}`][money[0]]} {money[1]}</h5>
    </div>    )
}

export default TextBox;

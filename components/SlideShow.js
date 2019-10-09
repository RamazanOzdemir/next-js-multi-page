import React,{useEffect,useContext} from 'react';
import slideShowStyle from '../Sass/sileShowStyle.scss';
import TextBox from './TextBox';



const slideImages = [
    ['/static/image/cer-istanbul-slider-bg.jpg',{head:'Lakeside Heaven',loc:'Istanbul/Kuçukçekmece'}],
    ['/static/image/deniz-istanbul-slider-bg.jpg',{head:'Lakeside Heaven',loc:'Istanbul/Kuçukçekmece'}],
    ['/static/image/yesilyaka-koru-slider-bg.jpg',{head:'Lakeside Heaven',loc:'Istanbul/Kuçukçekmece'}]
]

const SlideShow = () => {
  

    var slideIndex=1;
    
    const showSlide = (n)=>{
        var i;
        const slides = document.getElementsByClassName('mySlides___2oXCc');
       
        const dots = document.getElementsByClassName("dot___316xS");
    
       if (n > slides.length) {slideIndex = 1}
       if (n < 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active___2g1BY", "");
       }
       slides[slideIndex-1].style.display = "block";
       dots[slideIndex-1].className += " active___2g1BY";
      
    };
    useEffect(()=>{
        showSlide(1);
    },[showSlide]);
    const plusSlides=(count)=>{
        showSlide(slideIndex += count);
    };
    const curentSlide =(n)=>{
        slideIndex = n;
        showSlide(slideIndex);
    } 
    return (
        <div className={slideShowStyle.slideshow__container+' '+slideShowStyle.active}>
            {slideImages.map((image,index)=>(
                <div className={slideShowStyle.mySlides+' '+slideShowStyle.fade} id={`mySlide${index}`} key={`mySlide${index}`}>
                    <img  src={image[0]} alt=''></img>
                    <TextBox image={image} index={index}/> 
                </div>
            ))}
           

            <a className={slideShowStyle.prev} onClick={plusSlides.bind(this,-1)}>&#10094;</a>
            <a className={slideShowStyle.next} onClick={plusSlides.bind(this,1)} >&#10095;</a>

            <div className={slideShowStyle.show__curentSlide}>
                {
                    slideImages.map((image,index)=>(
                        <span className={slideShowStyle.dot} onClick={curentSlide.bind(this,index+1)}
                        id={`dot${index}`} key={image+'curent'+index} ></span>
                    ))
                }
            </div>

        </div>
    )
}

export default SlideShow;

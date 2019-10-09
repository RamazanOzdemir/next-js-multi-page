import React,{createContext,useState,useEffect} from 'react';

export const Context = createContext();


const ContextProvider = (props) => {

    const [lang,setLang] = useState(['en','English']);
    const [money,setMoney] = useState(['dl','\u0024'])
    const openLangDrop = (isOpen,clss,lang)=>{
        const content = document.getElementById(clss);
        content.style.display = isOpen ? 'block' : 'none'; 
        if(!isOpen&&clss==='lang__drop'){
            setLang(lang);
        }
        else if(!isOpen&&clss==='money__drop'){
            setMoney(lang)
        }
    
    };
    const setTitle = (curent) => {
        const curentTitle = navbarText.menu[lang[0]][curent];

        return (
            `tremglobal | ${curentTitle}`
        )
    }

    const navbarText = {
        menu:{
            en:{home:'Home',about:'About Us',properties:'Properties',services:'Services',articles:'Articles',contact:'Contact'},
            ar:{home:'الصفحة الرئيسية',about:'من نحن',properties:'الممتلكات',services:'خدماتنا',articles:'مقالات تهمّك',contact:'أتصل بنا'},
            fa:{home:'Home',about:'About Us',properties:'Properties',services:'Services',articles:'Articles',contact:'Contact'},
            fr:{home:'Home',about:'About Us',properties:'Properties',services:'Services',articles:'Articles',contact:'Contact'},
            de:{home:'Zuhause',about:'Über Uns',properties:'Eigenschaften',services:'Dienstleistungen',articles:'Artikel',contact:'Kontakt'},
        },
        properties:{
            en:{all:'All Properties',istanbul:'Istanbul Properties',bursa:'Istanbul Properties',sakarya:'Sakarya Properties',bodrum:'Bodrum Properties',usa:'USA Properties'},
            ar:{all:'مشاريعنا',istanbul:'Istanbul الممتلكات',bursa:'Bursa الممتلكات',sakarya:'Sakarya الممتلكات',bodrum:'Bodrum الممتلكات',usa:'USA الممتلكات'},
            fa:{all:'All Properties',istanbul:'Istanbul Properties',bursa:'Istanbul Properties',sakarya:'Sakarya Properties',bodrum:'Bodrum Properties',usa:'USA Properties'},
            fr:{all:'All Properties',istanbul:'Istanbul Properties',bursa:'Istanbul Properties',sakarya:'Sakarya Properties',bodrum:'Bodrum Properties',usa:'USA Properties'},
            de:{all:'Alle Eigenschaften',istanbul:'Istanbul Eigenschaften',bursa:'Istanbul Eigenschaften',sakarya:'Sakarya Eigenschaften',bodrum:'Bodrum Eigenschaften',usa:'USA Eigenschaften'},
        }
    }
    const moneySlide = {
        slide1: {dl:'50000', tl:'324000', eu:'43000' },
        slide2: {dl:'43000', tl:'318000', eu:'39547' },
        slide3: {dl:'83000', tl:'641000', eu:'73548' }
    }

    useEffect(()=>{
        const language = (window.navigator.userLanguage || window.navigator.language)+'';
        let brwLang = ['en','English'];
        
              if(language.indexOf('ar') !== -1)
                brwLang = ['ar','العربية'];
              else if(language.indexOf('fa') !== -1)
                brwLang = ['fa','فارسی'];
              else if(language.indexOf('fr') !== -1)
                brwLang = ['fr','français'];
              else if(language.indexOf('de') !== -1)
                brwLang = ['de','Deutsch'];
         
        
        setLang(brwLang);
    },[setLang]);

    return (
        <Context.Provider value={{lang,setLang,openLangDrop,money,navbarText,setTitle,moneySlide}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;

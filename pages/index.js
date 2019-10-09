import React,{useContext} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import homeStyle from '../Sass/home.scss';
import { Context } from '../context/Context';
import SlideShow from '../components/SlideShow';

const index = ()=>{
     const {setTitle} = useContext(Context);
    return (
        <Layout title={setTitle('home')}>
            <div className={homeStyle.main}>
                <SlideShow />
                
            </div>
        </Layout>
  
    );
};



export default index;
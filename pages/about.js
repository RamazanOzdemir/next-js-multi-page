import React,{useContext} from 'react';
import Layout from '../components/Layout';
import {useRouter} from 'next/router';
import aboutStyle from '../Sass/about.scss';
import { Context } from '../context/Context';

const About = ()=>{
    const router = useRouter();
    const {setTitle} = useContext(Context);
    const {pid} = router.query;
    return(
        <Layout title={setTitle(`about`)}>
            <div>
                <p className={aboutStyle.pag}>This page s Abaout Page!!!</p>
                <h6>{pid}</h6>
            </div>
        </Layout>
        
    );
};
export default About;
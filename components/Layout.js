import Head from 'next/head';
import Navbar from './Navbar';
import mainStyle from '../Sass/mainStyle.scss'; 
import ContextProvider from '../context/Context';

const Layout = (props)=>{
    const {title} = props;
    return(
        <ContextProvider>

            <Head>
                <title>{title}</title>
            </Head>
            <Navbar/>
            <div className={mainStyle.main}>
                {props.children}
            </div>
            </ContextProvider>

    );
};

export default Layout;
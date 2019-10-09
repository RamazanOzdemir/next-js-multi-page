import App, { Container } from 'next/app'
/* First we import our provider */
import ContextProvider,{Context} from '../context/Context';

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
         <ContextProvider>
            <Component {...pageProps} />
         </ContextProvider>  
     
    )
  }
}

export default MyApp
import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ForgotPassword from '../components/common/ForgotPassword'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

class ForgotPasswordPage extends Component {

     componentDidMount(){
          window.scroll(0,0)
     }

     render() {
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <ForgotPassword />  

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default ForgotPasswordPage
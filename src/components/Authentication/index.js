import React, { Component } from 'react';

import SingIn from './SingIn/index';
import SingUp from './SingUp/index';
import Styles from './Authentication.module.css';

export default class Authentication extends Component {

  render() {
    return(
     <section className={Styles.FormsSection}>
       <div  className={Styles.SingIn}>
         <h1>Sing In</h1>
         <SingIn />
       </div>
       <div className={Styles.SingIn}>
         <h1>Sing Up</h1>
         <SingUp />
       </div>
     </section>
    )

  }
}

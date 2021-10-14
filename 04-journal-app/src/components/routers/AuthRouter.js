import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { motion } from "framer-motion";

const list = {
    visible: { opacity: 1, transition: { duration: 1 }},
    hidden: { opacity: 0 },
  }


export const AuthRouter = () => {

    
    return (
        <div className="auth__main">
            <motion.div 
             initial="hidden"
            animate="visible"
            variants={list}
            
            >
                <div className="auth__box-container">
                    <Switch>
                        <Route path="/auth/login" component= {LoginScreen} />
                        <Route path="/auth/register" component= {RegisterScreen} />
                        <Redirect to="/auth/login"/>
                    </Switch>
                </div>

            </motion.div>
            
        </div>
    )
}

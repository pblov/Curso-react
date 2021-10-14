import React from 'react';
import firebase from 'firebase/app';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import {AuthRouter} from './AuthRouter';
import {JournalScreen } from '../journal/JournalScreen';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { SpinnerCircularFixed } from '../../../node_modules/spinners-react/lib/esm/SpinnerCircularFixed';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';



export const AppRouter = () => {


    
    const dispatch = useDispatch(); 
    
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(async (user) =>{
            if( user?.uid ){ //evalua si el objeto user tiene algo, pregunta si existe el uid
                
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch (startLoadingNotes(user.uid));

            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        })

    }, [ dispatch,setChecking,setIsLoggedIn ])


    if (checking){
        return (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                <SpinnerCircularFixed size={40} thickness={180} speed={180} color="rgba(89, 57, 172, 1)" secondaryColor="rgba(172, 57, 57, 0)" />
            </div>
        )
    }


    return (
        <Router>
                <div>

                    <Switch>
                        <PublicRoute 
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={isLoggedIn}
                
                           
                        />

                        <PrivateRoute 
                            exact
                            path="/"
                            isAuthenticated={isLoggedIn}
                            component={JournalScreen}
                        />

                        <Redirect to="/auth/login" />

                    </Switch>
                </div>
         </Router>
    )
}

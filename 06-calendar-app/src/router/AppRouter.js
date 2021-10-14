import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch,Redirect } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'
import ClipLoader from "react-spinners/ClipLoader";
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);


    useEffect(() => {
        
        dispatch( startChecking() );
        

    }, [dispatch]);


    if (checking ){
        return (<div style={{display:'flex', alignItems:'center',justifyContent:'center', height:'100vh'}}>
                    <ClipLoader />
               </div>);
    }

    return (
        <Router>
            
            <Switch>
                <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ !!uid }/>       
                <PrivateRoute exact path="/" component={CalendarScreen} isAuthenticated={ !!uid } />

                <Redirect to="/"/>
            </Switch>


        </Router>
    )
}

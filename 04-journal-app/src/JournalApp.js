import React from 'react';
import { AppRouter } from './components/routers/AppRouter';
import { Provider } from 'react-redux'; //Provee información a toda la app.
import { store } from './store/store';

export const JournalApp = () => {


    return (
        <div>
            <Provider store={store}>
                 <AppRouter/>
            </Provider>
        </div>
    )
}

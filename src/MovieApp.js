import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';
// Router
import { AppRouter } from './routers/AppRouter';

import './styles.css';

export const MovieApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    );
};

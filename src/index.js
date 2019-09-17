import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import ErrorIndicator from './components/error-indecator/error-indicator';
import CinemaService from './services/cinema-service';
import {ServiceProvider} from './components/service-context/service-context';
import store from './store';
import { SnackbarProvider } from 'notistack';

const cinemaService = new CinemaService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorIndicator>
            <ServiceProvider value={cinemaService}>
                
                <BrowserRouter>
                    <SnackbarProvider maxSnack={3}>
                        <App />
                    </SnackbarProvider>
                </BrowserRouter>
            </ServiceProvider>
        </ErrorIndicator>
    </Provider>
    ,document.getElementById('root'));
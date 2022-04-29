import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './app/router';

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    root
);

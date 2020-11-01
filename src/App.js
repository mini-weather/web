import React from 'react';
import './App.scss';
import routes from './app/routes/index';

function App() {
    return (
        <div>
            <div id="ngView">
                {routes}
            </div>
        </div>
    );
}

export default App;

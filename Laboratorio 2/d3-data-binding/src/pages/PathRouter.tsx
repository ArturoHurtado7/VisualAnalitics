import * as React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Dashboard/Home';

export const paths = {
    home: "/",
};

const PathRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={paths.home} element={<Home/>}/>
            </Routes>
        </Router>
    );
};

export default PathRouter;
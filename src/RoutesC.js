import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';

const RoutesC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes >
        </div>
    )
}

export default RoutesC

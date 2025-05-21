import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
// import JSProjects from './pages/JSProjects';

const RoutesC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/js_projects" element={<JSProjects />} /> */}
            </Routes >
        </div>
    )
}

export default RoutesC

import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import List from '../components/List';
import NavbarBlock from '../components/Navbar';


export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
            <NavbarBlock/>
                <Routes>
                    <Route path="/" element={<List />} />
                    
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes>
            </div>

        </>
    )
}

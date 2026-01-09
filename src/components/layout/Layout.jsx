import { Outlet } from 'react-router-dom';
import Header from './Header';
import MinimalFooter from './MinimalFooter';
import './Layout.css';

function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <MinimalFooter />
        </div>
    );
}

export default Layout;

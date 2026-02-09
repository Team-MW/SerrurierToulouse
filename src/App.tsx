import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ZonesIntervention from './pages/ZonesIntervention';
import MentionsLegales from './pages/MentionsLegales';
import ScrollToTop from './components/ScrollToTop';

function App() {
    const location = useLocation();

    return (
        <>
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="zones-intervention" element={<ZonesIntervention />} />
                    <Route path="mentions-legales" element={<MentionsLegales />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

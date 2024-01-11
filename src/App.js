import './App.css';
import TopBanner from "./components/TopBanner";
import BottomBanner from "./components/BottomBanner";
import {useEffect, useState} from "react";

const App = () => {

    const [showTopBanner, setShowTopBanner] = useState(true);
    const [showBottomBanner, setShowBottomBanner] = useState(false);

    const handleCloseTopBanner = () => {
        setShowTopBanner(false);
    };

    const handleCloseBottomBanner = () => {
        setShowBottomBanner(false);
        localStorage.setItem('isBottomBannerClosed', 'true');
    };

    useEffect(() => {
        const handleScroll = () => {
            const topBanner = document.querySelector('#top-banner');
            const topBannerRect = topBanner.getBoundingClientRect();
            const isBottomBannerClosed = localStorage.getItem('isBottomBannerClosed');
            if (topBannerRect.bottom <= 0 && !isBottomBannerClosed) {
                setShowBottomBanner(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="App">
      {showTopBanner && <TopBanner onClose={handleCloseTopBanner}/>}
       <BottomBanner isVisible={showBottomBanner} onClose={handleCloseBottomBanner}/>
    </div>
  );
}
export default App;

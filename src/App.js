import { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx"
import HeroSection from "./Components/HeroSection/HeroSection.jsx"
import CardSection from './Components/CardSection/CardSection';
import AccordionSection from './Components/AccordionSection/AccordionSection';
import { getTopSongsData, getNewSongsData, getSongsData } from './utils/util';

function App() {
  const [topSongsData, setTopSongsData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    (async () => {
      const topSongsData = await getTopSongsData();
      setTopSongsData(topSongsData);

      const newSongsData = await getNewSongsData();
      setNewSongsData(newSongsData);

      const songsData = await getSongsData();
      setSongsData(songsData);
    })();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <CardSection name="Top Albums" songsData={topSongsData} />
        <CardSection name="New Albums" songsData={newSongsData} />
        <hr/>
        <CardSection name="Songs" songsData={songsData} showFilters />
        <AccordionSection />
      </div>
    </>
  );
}

export default App;

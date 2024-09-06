import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

function App() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const [nasaData, setNasaData] = useState();
    const [showModal, setShowModal] = useState(false);

    async function fetchNasaData() {
        try {
            setNasaData(null);
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=10`;
            const res = await fetch(url);
            const data = await res.json();
            const randomItemIndex = Math.floor(Math.random() * data.length);
            setNasaData(data[randomItemIndex]);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchNasaData();
    }, []);

    return (
        <>
            {nasaData && (
                <button className="refresh" onClick={() => fetchNasaData()}>
                    <i className="fa-solid fa-rotate"></i>
                </button>
            )}
            {showModal && (
                <SideBar nasaData={nasaData} setShowModal={setShowModal} />
            )}
            {nasaData ? (
                <Main nasaData={nasaData} />
            ) : (
                <div className="loading-container">
                    <i className="fa-solid fa-spinner"></i>
                </div>
            )}
            {nasaData && (
                <Footer nasaData={nasaData} setShowModal={setShowModal} />
            )}
        </>
    );
}

export default App;

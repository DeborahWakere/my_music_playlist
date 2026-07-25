import "./music.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Songs } from "./components/data";
import Card from "./components/Playlist";
import Footer from "./components/Footer";

export default function App() {
  const BLOB_BASE_URL = "https://your_unique_store_://vercel-storage.com";

  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>

      <h2>Your Playlist</h2>
      <div id="Playlist" className="playlist-grid">
        {Songs.map((song) => {
          const cleanFileName = song.audioUrl ? song.audioUrl.replace("/audio/", "") : "";
          
          const encodedFileName = encodeURIComponent(cleanFileName);
          
          const liveStreamingUrl = cleanFileName ? `${BLOB_BASE_URL}/${encodedFileName}` : "";

          return (
            <Card
              key={song.id}
              image={song.image}
              name={song.name}
              description={song.description}
              audioUrl={liveStreamingUrl}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

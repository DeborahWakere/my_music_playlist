import "./music.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Songs } from "./components/data";
import Card from "./components/Playlist";
import Footer from "./components/Footer";

export default function App() {
  const CLOUD_AUDIO_BASE = "https://cloudinary.com";

  return (
    <>
     <Navbar />
     <div id="hero">
        <Hero />
     </div>

      <h2>Your Playlist</h2>
      <div id="Playlist" className="playlist-grid">
        {Songs.map((song) => {
          let cleanFileName = song.audioUrl ? song.audioUrl.replace("/audio/", "") : "";
          
          cleanFileName = cleanFileName.replaceAll(" ", "-");
          
          const encodedFileName = encodeURIComponent(cleanFileName);
          
          const liveStreamingUrl = cleanFileName ? `${CLOUD_AUDIO_BASE}/${encodedFileName}` : "";

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

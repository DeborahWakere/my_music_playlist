import "./music.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Songs } from "./components/data";
import Card from "./components/Playlist";
import Footer from "./components/Footer";

export default function App() {
  // 1. Your exact Cloudinary directory folder string path
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
          // 2. Safely strip out the local prefix string text
          const cleanFileName = song.audioUrl ? song.audioUrl.replace("/audio/", "") : "";
          
          // 3. Convert all raw space gaps safely to %20 characters so browsers can trace them
          const encodedFileName = encodeURIComponent(cleanFileName);
          
          // 4. Form the complete live absolute storage streaming URL parameter link
          const liveStreamingUrl = cleanFileName ? `${CLOUD_AUDIO_BASE}/${encodedFileName}` : "";

          return (
            <Card
              key={song.id}
              image={song.image}
              name={song.name}
              description={song.description}
              // Pass the newly computed online stream link safely into your player element block
              audioUrl={liveStreamingUrl} 
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

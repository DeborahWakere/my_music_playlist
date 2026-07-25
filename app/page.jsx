import "./music.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Songs } from "./components/data";
import Card from "./components/Playlist";
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
     <Navbar />
     <div id="hero">
     <Hero />
     </div>

      <h2>Your Playlist</h2>
      <div id="Playlist" className="playlist-grid">
        {Songs.map((song) => (
          <Card
            key={song.id}
            image={song.image}
            name={song.name}
            description={song.description}
            audioUrl={song.audioUrl}
            embedUrl={song.embedUrl}
            videoUrl={song.videoUrl}
          />
        ))}
      </div>

      <Footer />

    </>
  )
}

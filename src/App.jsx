import "./App.css";
import YoutubePlayer from "./components/YoutubePlayer";
import video from "./data/video.json";

export default function App() {
  return (
    <div className="App">
      <YoutubePlayer Link={video[0].videoLink1} />
      <YoutubePlayer Link={video[1].videoLink2} />
      <YoutubePlayer Link={video[2].videoLink3} />

      <button>Play</button>
      <br />
      <button>Play</button>
      <br />
      <button>Play</button>
      <br />
      <button>Play</button>
    </div>
  );
}

import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "ThankYou God",
      artist: "Dhvani Bhanushali",
      favourite: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Manike",
      artist: "Jubin Nautiyal",
      favourite: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww",
      name: "Satisfaya",
      artist: "Imran Khan",
      favourite: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Desh Mere",
      artist: "Arijit Singh",
      favourite: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "ThankYou God",
      artist: "Dhvani Bhanushali",
      favourite: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Manike",
      artist: "Jubin Nautiyal",
      favourite: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww",
      name: "Satisfaya",
      artist: "Imran Khan",
      favourite: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Desh Mere",
      artist: "Arijit Singh",
      favourite: false,
    },
  ];
  const [songs, setSongs] = useState(data);

  function updateFavourite(index) {
    setSongs((prev) => {
      return prev.map((song, indx) => {
        if (indx === index) {
          return { ...song, favourite: !song.favourite };
        }
        return song
      });
    });
  }
  return (
    <div className="h-full md:h-screen bg-zinc-300">
      <Navbar songs={songs}></Navbar>
      <div className="flex flex-wrap">
        {songs.map((song, indx) => (
          <Card
            song={song}
            indx={indx}
            updateFavourite={updateFavourite}
            key={indx}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

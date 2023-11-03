import './App.css';
import audioPlayer from './components/audioPlayer/audioPlayer.jsx';
import navMenu from './components/navMenu/navMenu.jsx';
import centerBlock from './components/centerBlock/centerBlock.jsx';
import sidebar from './components/sidebar/sidebar.jsx';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
       {navMenu()}
          {centerBlock()}
          {sidebar()}
        </main>
        {audioPlayer()}
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;

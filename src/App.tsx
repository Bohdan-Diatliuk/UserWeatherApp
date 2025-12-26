import { AppRouter } from "./routes/AppRouter";
import './App.scss';
import white from './assets/bg-white.mp4';
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <>
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src={white} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <ScrollTop />
        <AppRouter />
      </div>
    </>
  );
}

export default App;

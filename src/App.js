import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';

import VideoDetails from './components/VideoDetails';
import { AppContext } from "./context/contextApi";
import NotFound from './components/NotFound';


function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className=' flex flex-col h-full'>

          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </BrowserRouter>


    </AppContext>
  );
}

export default App;

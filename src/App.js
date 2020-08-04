import React from 'react';
import initialData from './data/initial_data.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';

function App() {
  return (
    <div>
      <Menu />
      
      <BannerMain
        videoTitle={initialData.category[0].videos[0].title}
        url={initialData.category[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />
    </div>
  );
}

export default App;

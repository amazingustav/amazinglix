import React from 'react';
import initialData from './data/initial_data.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Menu />
      
      <BannerMain
        videoTitle={initialData.category[0].videos[0].title}
        url={initialData.category[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.category[0]}
      />

      <Carousel category={initialData.category[1]} />
      <Carousel category={initialData.category[2]} />
      <Carousel category={initialData.category[3]} />
      <Carousel category={initialData.category[4]} />
      <Carousel category={initialData.category[5]} />
    </div>
  );
}

export default App;

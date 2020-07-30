import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}} >
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O verão ainda está aquecido com o Vem Verão do Fortnite! Teremos MTLs diários, com clássicos renovados e alguns inéditos chegando em breve. E não esqueça de conferir o Pacote Lendas de Verão que já está disponível."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Footer/>
    </div>
  );
}

export default App;

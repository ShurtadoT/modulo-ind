import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../sections/Main';

function Root() {
  return (
    <main>
      <Header
        src={'https://umanizales.edu.co/sites/default/files/2024-01/ing_industrial_entrada_amplia.png'}
        alt={'Ingeniería Industrial'}
        title={'Ingeniería Industrial'}
      />
      <Main />
      <Footer />
    </main>
  );
}

export default Root;

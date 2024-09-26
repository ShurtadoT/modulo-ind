import Sidebar from '../components/Sidebar/Sidebar';
import TabNavigator from '../components/TabNavigator/TabNavigator';
import TextSection from '../components/TextSection/TextSection';
import TextSectionInfo from './MainInfo';
import TabInfo from '../components/TabNavigator/TabNavigatorInfo.json'

const Main = () => {
  return (
    <section className='main'>
      <p className='heading-title'>
        El Programa de Ingeniería Industrial de la Institución Universitaria de Envigado, fue creado mediante Acuerdo
        del Consejo Directivo 012 del 27 de abril de 2017.
      </p>
      <article className='main-container'>
        <article className='main-row'>
          <TextSection text={TextSectionInfo[0].text} />
          <TabNavigator TabInfo={TabInfo} /> 
          {TextSectionInfo.slice(1).map((section, index) => (
            <TextSection
              key={index}
              isComposedText={section.isComposedText}
              title={section.title}
              text={section.text}
              isOrderedList={section.isOrderedList}
              list={section.list}
              subtext={section.subtext}
            />
          ))}
        </article>
        <article className='secondary-row'>
          <Sidebar />
        </article>
      </article>
    </section>
  );
};

export default Main;

import React from "react";
import { useParams } from "react-router-dom";
import SubPagesInfo from "../SubPagesInfo.json";
import TabNavigator from "../components/TabNavigator/TabNavigator";
import Header from "../components/Header/Header";
import TextSection from "../components/TextSection/TextSection";

const SubPages = () => {
  const { idPage } = useParams();

  const pageData = SubPagesInfo.find((page) => page.idPage === idPage);

  if (!pageData) {
    return <div>Página no encontrada</div>;
  }

  return (
    <main>
      <Header
        src={pageData.imagePage}
        alt={pageData.altPage}
        title={pageData.titlePage}
      />

      <section className='main'>
        {pageData.contentPage[0].textPage.map((section, index) => (
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

        {pageData.contentPage[1] && (
          <div className='tab-navigator'>
            <TabNavigator TabInfo={pageData.contentPage[1].tabNavigator} />
          </div>
        )}
      </section>
    </main>
  );
};
export default SubPages;

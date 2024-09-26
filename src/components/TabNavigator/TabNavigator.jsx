import { useState } from 'react';
import './TabNavigator.css';

const TabNavigator = ({ TabInfo }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='tab-container'>
      <div className='tab-header'>
        {TabInfo.map((tab, index) => {
          return (
            <button
              key={index}
              className={`tab-link ${activeTab === index ? 'active-tab' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className='tab-content'>
        <div className='tab-info'>
          {TabInfo[activeTab].content.split('\n').map((paragraph, index) => {
            console.log(paragraph);
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigator;

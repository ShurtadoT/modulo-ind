import { HeaderInfo } from '../Header/HeaderInformation';
import './Sidebar.css';

const SidebarInfo = HeaderInfo[1].submenu;

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3 className='heading'>Temas de interés</h3>
      <ul className='sidebar-list'>
        {SidebarInfo.map((item, index) => {
          return (
            <li key={index} className='sidebar-list-item'>
              <i className='fa-solid fa-angle-right'></i>
              <a href={item.id} className='item-link'>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

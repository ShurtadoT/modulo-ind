import './Header.css';
import { HeaderInfo, HeaderImages } from './HeaderInformation';

const Header = () => {
  return (
    <section className='header'>
      <div className='nav-container'>
        <div className='logo-container'>
          <a href='/'>
            <img src={HeaderImages[0].src} alt={HeaderImages[0].alt} title={HeaderImages[0].alt} className='logo'></img>
          </a>
        </div>

        <nav className='navbar'>
          <ul>
            {HeaderInfo.map((index, key) => {
              return (
                <>
                  {index.submenu === undefined ? (
                    <li>
                      <a href={index.id}>{index.title}</a>
                    </li>
                  ) : (
                    <li>
                      <div className='arrow-submenu'>
                        <a href={index.id}>{index.title}</a>
                        <i className='fa-solid fa-sort-down'></i>
                      </div>
                      <ol className='submenu'>
                        {index.submenu.map((subindex, subkey) => {
                          return (
                            <li key={subkey}>
                              <a href={subindex.id}>{subindex.title}</a>
                            </li>
                          );
                        })}
                      </ol>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className='header-title-container'>
        <div className='header-image'>
          <img src={HeaderImages[1].src} alt={HeaderImages[1].alt} title={HeaderImages[1].alt}></img>
        </div>
        <h2 className='header-title'>Ingeniería Industrial</h2>
      </div>
    </section>
  );
};
export default Header;

import './Header.css';
import { HeaderInfo } from './HeaderInformation';

const Header = ({ src, alt, title }) => {
  return (
    <section className='header'>
      <div className='nav-container'>
        <div className='logo-container'>
          <a href='/'>
            <img
              src={'https://www.iue.edu.co/wp-content/uploads/2023/08/logo-iue-envigado.svg'}
              alt={'Institución Universitaria de Envigado - IUE | Logo'}
              title={'Institución Universitaria de Envigado - IUE | Logo'}
              className='logo'
            ></img>
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
          <img src={src} alt={alt} title={alt}></img>
        </div>
        <h2 className='header-title'>{title}</h2>
      </div>
    </section>
  );
};
export default Header;

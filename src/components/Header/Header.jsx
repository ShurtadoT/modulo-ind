import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="nav-container">
        <div className="logo-container">
          <a href="#">
            <img
              src="https://www.iue.edu.co/wp-content/uploads/2023/08/logo-iue-envigado.svg"
              alt="Logo"
              className="logo"
            ></img>
          </a>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              {" "}
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              {" "}
              <div className="flecha">
                <a href="#">Temas de interes</a>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
              </div>
              <ol className="submenu">
                <li>
                  <a href="#info-lean-manufacturing">Lean manufacturing</a>
                </li>
                <li>
                  <a href="#info-automatizacion-industrial">
                    Automatización Industrial
                  </a>
                </li>
                <li>
                  <a href="info-industria">Industrias 4.0-5.0</a>
                </li>
                <li>
                  <a href="#info-desarrollo-sostenible">
                    Desarrollo Sostenible
                  </a>
                </li>
                <li>
                  <a href="info-gestion-operaciones">Gestión de operaciones</a>
                </li>
                <li>
                  <a href="info-mejora-continua">Mejora continua </a>
                </li>
                <li>
                  <a href="info-gestion-talento-humano">
                    Gestión del talento humano
                  </a>
                </li>
                <li>
                  <a href="info-temas-especificos">Temas especifícos</a>
                </li>
              </ol>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header-title-container">
        <div className="header-image">
          <img src="https://umanizales.edu.co/sites/default/files/2024-01/ing_industrial_entrada_amplia.png"></img>
        </div>
        <h2 className="header-title">Ingeniería Industrial</h2>
      </div>
    </section>
  );
};
export default Header;

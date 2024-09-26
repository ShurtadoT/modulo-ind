import './Page404.css';

const Page404 = () => {
  return (
    <section className='page404'>
      <article className='page404-container'>
        <img
          className='page404-image'
          src='https://cdn.pixabay.com/photo/2021/10/25/00/00/mike-wazowski-6739521_960_720.png'
          alt='Imagen Error 404'
          title='Imagen Error 404'
        />
        <div className='page404-text-container'>
          <p className='page404-title'>Opps! Página no encontrada</p>
          <p className='page404-subtitle'>
            La página a la que intentas acceder no se encuentra en el servidor (Error 404).
          </p>
          <p className='page404-text'>
            Intenta nuevamente en la página de inicio
            <a href='/' className='page404-back'>
              IUE
            </a>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Page404;

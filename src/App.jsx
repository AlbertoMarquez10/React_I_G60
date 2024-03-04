import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/Header'
import Carta from './componentes/MyCard'
import Footer from './componentes/Footer'
import Cachorro1 from './assets/img/cachorro1.jpg'
import Cachorro2 from './assets/img/cachorro2.jpg'
import Cachorro3 from './assets/img/cachorro3.jpg'
import Cachorro4 from './assets/img/cachorro4.jpg'

const App = () => {
  

  return (
    <>
      <Header titulo="Adopta un Perrito"/>
      <div className='conteiner d-flex mt-5 mb-5 gap-3'>
        <Carta
          nombre='San Bernados'
          img={Cachorro1}
          desc='Lindos perritos San Bernardo en adopción, recuperados de casa de reproducción pirata'
          color='success'
          texto='San Bernardo'
        />
        <Carta
          nombre='La dama y el vagabundo'
          img={Cachorro2}
          desc='Perritos de distinto origen social pero hoy los reunidos en adopción'
          color='danger'
          texto='Biggie'
        />
        <Carta
          nombre='Ladradores'
          img={Cachorro3}
          desc='Camada de 3 perritos labradores listos para llegar a tu hogar'
          color='dark'
          texto='Labrador'
        />
        <Carta
          nombre='Balto y su hermano'
          img={Cachorro4}
          desc='Perritos nacido de pareja de perros campeones en carreras de trineos, hoy exiliados, buscan hogar'
          color='secondary'
          texto='Husky siberiano'
        />
      </div>      
      <Footer/>

    </>
  )
}

export default App

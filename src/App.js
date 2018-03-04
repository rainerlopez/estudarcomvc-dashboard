import React, { Component } from 'react';
import {
  Navbar, NavbarBrand, Fa, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink,
  Button, Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem
} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Logo from './logo.png';
import Calc2 from './images/233-Calc2.large.png'
import EcvcCardComponent from './components/ecvcCardComponent';
import * as Scroll from 'react-scroll';

import ReactDOM from 'react-dom';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const generateRand = function () {
  return Math.floor(1 + Math.random() * (500 - 1));
}

const ecvcURL = 'https://www.estudar.com.vc';

const data = [
  {
    section: 'Acessados recentemente', id: 'recentes',
    cursos: [
      {
        title: 'Cálculo I',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/360-43-Calc-1.large.large.png',
        bg: 'bg-ecvc-recentes'
      },
      {
        title: 'Cálculo II',
        content: generateRand() + ' conteúdos',
        image: Calc2,
        bg: 'bg-ecvc-recentes'
      },
      {
        title: 'Cálculo III',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/192-Calculo3.large.png',
        bg: 'bg-ecvc-recentes'
      },
    ]
  },
  {
    section: 'Matérias personalizadas Poli USP', id: 'poli',
    cursos: [
      {
        title: 'Álgebra Linear I',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/185-AlgebraLinear.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Álgebra Linear II',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/235-algebra-linear-2_v2.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Cálculo I',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/360-43-Calc-1.large.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Cálculo II',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/233-Calc2.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Cálculo III',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/192-Calculo3.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Cálculo IV',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/240-Ca%CC%81lculo_4.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Cálculo Numérico',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/189-CalculoNumerico.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Eletrecidade Geral',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/189-CalculoNumerico.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Estatística',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/230-180-169-Estat-1.large.large.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Física I',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/190-Fisica1.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Física II',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/122-F%C3%ADsica-2.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Física IIII',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/191-Fisica3.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Física IV',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/237-Fisica4.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Mecânica A',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/238-126-Meca%CC%82nica.large.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Probabilidade',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/357-Probabilidade.large.png',
        bg: 'bg-ecvc-poli'
      },
      {
        title: 'Programação em Python',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/232-MacEmPython.large.png',
        bg: 'bg-ecvc-poli'
      }
    ]
  },
  {
    section: 'Matérias Gerais', id: 'gerais',
    cursos: [
      {
        title: 'Álgebra Linear',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/249-algelin2.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Computação',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/110-Comp-1.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Contabilidade',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/113-Contabilidade.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Controladoria',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/125-Controladoria.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Estatística e Econometria',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/245-estat1.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Finanças',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/248-matfin.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Física',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/243-fis_2.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Macroeconomia Bernanke',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/197-53-Macroeconomia.large.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Macroeconomia Blanchard',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/53-Macroeconomia.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Matemática Básica',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/99-Mat-Basica.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'Microeconomia',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/246-micro2.large.png',
        bg: 'bg-ecvc-gerais'
      },
      {
        title: 'TI - Excel',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/118-SI.large.png',
        bg: 'bg-ecvc-gerais'
      },
    ]
  },
  {
    section: 'Outras Matérias da Estudar com Você', id: 'outras',
    cursos: [
      {
        title: 'Exâme ANPEC',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/314-logo_anpec_fundotransparente_%281%29.large.png',
        bg: 'bg-ecvc-outras'
      },
      {
        title: 'Sistemas de Informação',
        content: generateRand() + ' conteúdos',
        image: ecvcURL + '/images/courses/54-SI.large.png',
        bg: 'bg-ecvc-outras'
      },
    ]
  },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    return (
      <div className="app">
        <header>
          <Navbar light color="white lighten-5" expand="md" fixed="top" scrolling>
            <NavbarBrand href="#">
              <img src={Logo} height="30" />
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav className="mr-auto" onClick={this.onClick}>
                <NavItem>
                  <NavLink className="nav-link" to="/" style={{ fontSize: 18 + 'px', color: '#777777' }}><i className="fa fa-credit-card" style={{ fontSize: 18 + 'px' }}></i> Ver planos</NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link nounderline profile-nav">
                    <div className="p-image">
                      <img alt="" className="circle-small" src="https://www.estudar.com.vc/images/users/16932-18119405_10155233913409383_1317005833959546623_n.small.jpg" />
                    </div>
                    <div className="profile-content">
                      <p className="profile-name">
                        Rainer

                        </p>
                      <p className="profile-university">
                        Poli USP
                        </p>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="https://facebook.com/"><Fa icon="facebook" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="https://twitter.com/"><Fa icon="twitter" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="https://instagram.com/"><Fa icon="instagram" /></NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
        </header>

        <main>
          <div className="main-wrapper">
            <div className="container-fluid bg-light">

              <div className="row">
                {/* Main column */}
                <div className="col-lg-10 col-md-12">
                  <div className="container">

                    {/* <div className="row mt-5 pt-5">
                      <div className="col text-center">
                        <Carousel
                          activeItem={this.state.activeItem}
                          next={this.next}
                          className="z-depth-1">
                          <CarouselInner>
                            <CarouselItem itemId="1">
                              <div className="row">
                                <div className="col-md-4">
                                  <EcvcCardComponent
                                    imageSrc={Calc2}
                                    title='Cálculo 2'
                                    content='311 conteúdos' bg='bg-ecvc-primary'
                                  ></EcvcCardComponent>
                                </div>

                                <div className="col-md-4">
                                  <EcvcCardComponent
                                    imageSrc={Calc2}
                                    title='Cálculo 2'
                                    content='311 conteúdos' bg='bg-ecvc-secondary'
                                  ></EcvcCardComponent>
                                </div>

                                <div className="col-md-4">
                                  <EcvcCardComponent
                                    imageSrc={Calc2}
                                    title='Cálculo 2'
                                    content='311 conteúdos' bg='bg-ecvc-secondary'
                                  ></EcvcCardComponent>
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="First slide" />
                              <CarouselCaption>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="First slide" />
                              <CarouselCaption>
                                <h3 className="h3-responsive">Slight mask</h3>
                                <p>Third text</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="4">
                              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                              <CarouselCaption>
                                <h3 className="h3-responsive">Sopot Beach</h3>
                                <p>Taken june 21th by @mattonit</p>
                              </CarouselCaption>
                            </CarouselItem>
                          </CarouselInner>
                          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
                          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
                        </Carousel>
                      </div>
                    </div> */}

                    {data.map((item) =>
                      <section id={item.id} name={item.id}>
                        <div className="row mt-5 pt-5">
                          <h3 className="font-weight-bold text-muted">{item.section}</h3>
                        </div>

                        <div className="row mt-2 pt-2">
                          {item.cursos.map((curso) =>
                            <div className="col-md-2 mt-2 pt-2">
                              <EcvcCardComponent
                                imageSrc={curso.image}
                                title={curso.title}
                                content={curso.content} bg={curso.bg}
                              ></EcvcCardComponent>
                            </div>
                          )}
                        </div>
                      </section>
                    )}
                  </div>
                </div>
                {/* Right Sidebar */}
                <div className="col-md-2">
                  <div id="scrollspy" className="sticky bg-white" style={{ position: 'fixed', top: '6rem', width: 167.844, zIndex: 2 }}>
                    <ul className="nav nav-pills default-pills flex-column" data-allow-hashes="true">
                      {data.map((item) =>
                        <li className="nav-item">
                          <Link activeClass="active" className={item.id + " nav-link"} to={item.id} spy={true} smooth={true} duration={500} offset={-50}>
                            {item.section}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div><div className="sticky-placeholder" style={{ width: 167.844, height: 132 }}></div>
                </div>
                <div className="col-md-10">
                  {/* /. Right Sidebar */}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <img src="https://www.estudar.com.vc/img/dashboard-norb.png" alt="Norberta Mascote da Estudar com Você bons estudos" className="norb-img img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer mt-5">
          <div className="container-fluid">
            <div className="row text-justify" style={{ fontSize: 18 + 'px', color: '#777777' }}>
              <div className="col-10">
                <a href="/institucional/termos-de-uso" className="mr-2" style={{ fontSize: 18 + 'px', color: '#777777' }}>Termos de Uso</a>
                <a href="/institucional/politica-de-privacidade" className="mr-2" style={{ fontSize: 18 + 'px', color: '#777777' }}>Política de Privacidade</a>
                <a href="https://blog.estudar.com.vc" className="mr-2" style={{ fontSize: 18 + 'px', color: '#777777' }}>Blog</a>
              </div>
              <div className="col float-right">
                <p className="">© 2018 Estudar.com.vc</p>
              </div>
            </div>
          </div>
        </footer>
      </div >
    )
  }
}

export default App;
import abstract12 from './webp/abstract12.webp';
import person103 from './webp/person103.webp';
import { motion } from 'framer-motion';
import { InView  } from 'react-intersection-observer';
import {FaHeart} from "react-icons/fa";

interface Props {
    divRef: React.MutableRefObject<null>;
}

function Body({divRef}:Props) {




    return (
        <>
        <div className="bg-dark">
            <div ref={divRef} className="container px-vw-5 py-vh-5">
                <div className="row d-flex align-items-center">

               
                <InView>
                {({ inView, ref}) => (
                      <motion.div
                      ref={ref}
                      className="col-12 col-lg-7 text-lg-end aos-init aos-animate"
                      data-aos="fade-right"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-secondary mb-1">Desevolvedor Fullstack</p>
                      <h1 style={{color:"#fff"}}>Desenvolvimento fullstack envolve habilidades tanto no frontend quanto no backend. Um fullstack developer é capaz de criar tanto a interface do usuário (frontend) quanto a lógica do servidor e banco de dados (backend)</h1>
                      <p className="text-secondary">
                      <a href="#" className="link-fancy link-fancy-light me-2">Ver projetos</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg>
                      </p>
                    </motion.div>
                  )}
                </InView>
                
                <InView>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      className="col-12 col-lg-5 aos-init aos-animate"
                      data-aos="fade-left"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="pt-5" style={{color:"#fff"}}>Frontend</h3>
                      <p className="text-secondary">O frontend no desenvolvimento web refere-se à parte visível e interativa de um site ou aplicação. Envolve a criação e implementação dos elementos que os usuários veem e com os quais interagem diretamente, como layouts, botões, menus, formulários e animações. <br />
                        <a href="#" className="link-fancy link-fancy-light me-2">Ver projetos</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg>
                      </p>
                      <h3 className="border-top border-secondary pt-5   mt-5" style={{color:"#fff"}}>Backend</h3>
                      <p className="text-secondary">O backend no desenvolvimento web refere-se à parte não visível de um site ou aplicação. Envolve a criação e gestão dos componentes que sustentam a funcionalidade do sistema, como o servidor, banco de dados e lógica de negócios. Desenvolvedores backend lidam com a manipulação de dados, segurança, autenticação e integrações<br />
                        <a href="#" className="link-fancy link-fancy-light me-2">Ver projetos</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg>
                      </p>
                    </motion.div>
                  )}
                </InView>

              </div>
            </div>
        </div>
        
        <div className="bg-black py-vh-3">
      <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">

        <div className="row gx-5">
        <div className="col-12 col-md-6">
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="card bg-transparent mb-5 aos-init"
                data-aos="zoom-in-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-dark shadow rounded-5 p-0">
                  <div className="p-5 pt-0">
                  <h3 className="pt-5" style={{color: "#fff"}}>
                      Gerenciamento de Tarefas
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                    </h3>
                    <p className="pb-4 text-secondary">
                    Simplifique a organização diária dos usuários com uma API que permite criar, agendar e marcar tarefas como concluídas. Com autenticação segura, essa API oferece uma maneira eficaz de manter o controle das responsabilidades.
                    </p>
                    <a href="#" className="link-fancy link-fancy-light">Vizualizar</a> <a href="#" className="link-fancy link-fancy-light ms-3">Documentação</a>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>

          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="card bg-transparent mb-5 mt-5 aos-init"
                data-aos="zoom-in-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-dark shadow rounded-5 p-0">
                  <div className="p-5 pt-0">
                  <h3 className="pt-5" style={{color: "#fff"}}>
                      Blog Pessoal
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                    </h3>
                    <p className="pb-4 text-secondary">
                    Libere a criatividade dos usuários por meio de uma API que possibilita escrever, editar e compartilhar postagens personalizadas. Além disso, os leitores podem interagir com comentários e reações, tornando o blogging uma experiência social.
                    </p>
                    <a href="#" className="link-fancy link-fancy-light">Vizualizar</a> <a href="#" className="link-fancy link-fancy-light ms-3">Documentação</a>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
          
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="p-5 pt-0 mt-5 aos-init"
                data-aos="fade"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="display-4"> As APIs permitem que aplicações e serviços troquem informações de forma eficiente </h2>
              </motion.div>
            )}
          </InView>
        </div>

        <div className="col-12 col-md-6">
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="p-5 pt-0 mt-5 aos-init"
                data-aos="fade"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="h5 text-secondary fw-lighter">API REST</span>
                <h2 className="display-4">Uma API é um conjunto de regras e protocolos que permitem que diferentes softwares se comuniquem entre si</h2>
              </motion.div>
            )}
          </InView>
          
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="card bg-transparent mb-5 mt-5 aos-init"
                data-aos="zoom-in-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-dark shadow rounded-5 p-0">
                  <div className="p-5 pt-0">
                  <h3 className="pt-5" style={{color: "#fff"}}>
                      Avaliação de Livros/Filmes
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                    </h3>
                    <p className="pb-4 text-secondary">
                    Explore o universo literário e cinematográfico com uma API que fornece informações detalhadas e permite que os usuários adicionem suas próprias avaliações. Descubra novos títulos com base em recomendações da comunidade.
                    </p>
                    <a href="#" className="link-fancy link-fancy-light">Vizualizar</a> <a href="#" className="link-fancy link-fancy-light ms-3">Documentação</a>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>

          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="card bg-transparent mb-5 mt-5 aos-init"
                data-aos="zoom-in-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-dark shadow rounded-5 p-0">
                  <div className="p-5 pt-0">
                    <h3 className="pt-5" style={{color: "#fff"}}>
                      Clima
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                      <img className="icon-node-api" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
                    </h3>
                    <p className="pb-4 text-secondary">
                    Esteja preparado para qualquer clima com uma API que oferece dados climáticos em tempo real para qualquer localização. Desde temperatura até previsões futuras, os usuários podem se manter informados antes de planejar atividades ao ar livre.
                    </p>
                    <a href="#" className="link-fancy link-fancy-light">Vizualizar</a> <a href="#" className="link-fancy link-fancy-light ms-3">Documentação</a>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
          
        </div>
        </div>
      </div>
    </div>

    <div  className="position-relative bg-dark">
      <div className="container px-vw-5 py-vh-5">
        <div className="row d-flex align-items-center">

          <div className="col-12 col-lg-6 circles  position-relative">


            <div 
              id="first-circle"
              style={{
              width: '150px',
              height: '150px',
              background:'transparent',
              border: '2px solid #6d25d0',
              borderRadius: '100%',
              position: "absolute",
              top: "-511px",
              right: "119px",
            }}></div>

            <div 
            id="second-circle"
            style={{
              width: '100px',
              height: '100px',
              background:'transparent',
              border: '2px solid #1f08e2',
              borderRadius: '100%',
              position: "absolute",
              top: "-169px",
              right:" 230px"
            }}></div>

            <div 
            id="third-circle"
            style={{
              width: '100px',
              height: '100px',
              background:'transparent',
              border: '2px solid #ff7434',
              borderRadius: '100%',
              position: "absolute",
              top: "-169px",
              right:" 230px"
            }}>
            </div>

            <div 
            id="fourth-circle"
            style={{
              width: '200px',
              height: '200px',
              background:'transparent',
              border: '2px solid #7140bb',
              borderRadius: '100%',
              position: "absolute",
              top: "-150px",
              filter: "blur(2px)"
            }}>
            </div>

            <div 
            id="fifth-circle"
            style={{
              width: '150px',
              height: '150px',
              background:'transparent',
              border: '2px solid #df3360',
              borderRadius: '100%',
              position: "absolute",
              top: "131px",
              right: "319px",
            }}>
            </div>


            <div 
            id="sixth-circle"
            style={{
              width: '100px',
              height: '100px',
              background:'transparent',
              border: '2px solid rgb(255, 116, 52)',
              borderRadius: '100%',
              position: "absolute",
              top: "410px",
              right: "-181px"
            }}>
            </div>


            <div 
            id="seventh-circle"
            style={{
              width: '130px',
              height: '130px',
              background:'transparent',
              border: '2px solid rgb(234 52 98)',
              borderRadius: '100%',
              position: "absolute",
              top: "189px",
              right: "-881px",
              filter: "blur(2px)"
            }}>
            </div>



          </div>
          
          
          <div className="col-12 col-lg-6 rounded-5 py-5 aos-init aos-animate align-with-circles" data-aos="fade">
          
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="p-5 pt-0 mt-5 aos-init"
                data-aos="fade"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="h5 text-secondary fw-lighter">Melhoria de Desempenho</span>
              
                <h2 className="display-4">O desempenho influencia diretamente as taxas de conversão em sites de comércio eletrônico e outros serviços online</h2>
              
              <p style={{color:"#fff"}}>
                <a href="#" className="link-fancy link-fancy-light me-2">Ver projetos</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                </svg>
              </p>

              </motion.div>
            )}
          </InView>
            </div>
        </div>
      </div>
    </div>
    
    <div className="bg-black">
      <div className="container px-vw-5 py-vh-5 pb-0">
        <div className="row d-flex align-items-center">

          
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="col-12 col-lg-5 ms-4 text-center text-lg-end aos-init aos-animate"
                data-aos="fade"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="h5 text-secondary fw-lighter">Quais tecnologias você usa?</span>
                <h2 className="display-4">
                  Sempre utilizar as melhores tecnologias
                </h2>
              </motion.div>
            )}
          </InView>
          
          <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="col-12 col-lg-5 bg-dark mb-5 rounded-5 py-vh-3 text-center my-5 aos-init aos-animate" 
                data-aos="zoom-in-up"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="position-relative display-huge mb-5">
                  <span style={{
                    right: "160px",
                    top: "30px",
                    transform: "rotate(22deg)"
                  }} className='position-absolute'>
                    <FaHeart color="red" size={35}/>
                  </span>
                  <div className="col-sm-12">
                    <img width={100} height={100} style={{borderRadius:"13px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className="col-sm-12 mt-4">
                    <img width={80} height={80} style={{borderRadius:"13px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <img width={80} height={80} style={{borderRadius:"13px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  </div>
                  <span style={{
                    left: "160px",
                    top: "30px",
                    transform: "rotate(-22deg)"
                  }} className='position-absolute'>
                    <FaHeart color="red" size={35}/>
                  </span>
                </h2>
                <p className="lead text-secondary mb-5">Atualmente eu utilizo Javascript como minha principal linguagem, junto com ele, umas das principais bibliotecas como ReactJs e NodeJs</p>
                <a href="#" className="btn btn-xl btn-light">Ver projetos
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                  </svg>
                </a>
              </motion.div>
            )}
          </InView>


          <div
          style={{padding:"50px"}}
          className="col-sm-12 pb-0 text-center mb-4 mt-5 mb-0 d-flex flex-column align-items-center aos-init aos-animate"
          >
              <h3 style={{color:"#fff",width:"fit-content",background:"#111111",zIndex:"100"}} className="mb-0 p-4 pt-0 pb-0">Oque falam de mim?</h3>
              <hr 
                className="w-100"
                style={{                  
                  borderWidth: "2px",
                  borderColor: "#fff",
                  opacity: "initial",
                  borderRadius: "1px",
                  marginTop: "-20px"
                }}
              />
          </div>

        </div>
      </div>
    </div>

    


    {/** Fade */}
    <div className="container-fluid px-vw-5 pt-0 position-relative aos-init aos-animate" style={{background:"linear-gradient(24deg,#1717e5,transparent 21%),linear-gradient(198deg,rgba(255,193,7,.2) 11%,transparent 0),linear-gradient(50deg,#6610f2 5%,#6f42c1 32%,#d63384 35%,#dc3545 65%,#fd7e14 83%,#ffc107 91%)"}} data-aos="fade">
      <div className="position-absolute w-100 h-50 bg-black top-0 start-0"></div>
      <div className="position-relative py-vh-5 pt-0  bg-cover bg-center rounded-5" style={{backgroundImage: abstract12}}>
        <div className="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
          <div className="row d-flex align-items-center">

            <div className="col-6 d-flex align-items-center  shadow rounded-5 p-0 aos-init aos-animate" data-aos="zoom-in-up">
              <div className="row d-flex justify-content-center">
              <InView>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="row d-flex justify-content-center aos-init aos-animate"
                data-aos="zoom-in-up"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="col-12">
                  <img src={person103} width="684" height="457" alt="our CEO with some nice numbers" className="img-fluid rounded-5 mt-5" loading="lazy" />
                </div>
                <div className="col-12 col-lg-10 col-xl-8 text-center my-5">
                  <p className="lead border-bottom pb-4 border-secondary">"Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet."</p>
                  <p className="text-secondary text-center">Jane Doe, CEO</p>
                </div>
              </motion.div>
            )}
          </InView>
              </div>
            </div>
        
            <div className="col-5 offset-1">
            <span className="h5 text-secondary fw-lighter">The numbers</span>
                <InView>
                  {({ inView, ref }) => (
                    <motion.h2
                      ref={ref}
                      className="display-huge fw-bolder aos-init aos-animate"
                      data-aos="zoom-in-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      +400
                    </motion.h2>
                  )}
                </InView>

                <p className="h4 fw-lighter text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <InView>
                  {({ inView, ref }) => (
                    <motion.h2
                      ref={ref}
                      className="display-huge fw-bolder border-top border-secondary pt-5 mt-5 aos-init aos-animate"
                      data-aos="zoom-in-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      78.981
                    </motion.h2>
                  )}
                </InView>

                <p className="h4 fw-lighter text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <InView>
                  {({ inView, ref }) => (
                    <motion.h2
                      ref={ref}
                      className="display-huge fw-bolder border-top border-secondary pt-5 mt-5 aos-init aos-animate"
                      data-aos="zoom-in-left"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      98%
                    </motion.h2>
                  )}
                </InView>

                <p className="h4 fw-lighter text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="bg-dark py-vh-5">
      <div className="container px-vw-5">
        <div className="row d-flex gx-5 align-items-center">
          <div className="col-12 col-lg-6">
            <div className="rounded-5 bg-black p-5 shadow aos-init aos-animate" data-aos="zoom-in-right">
              <div className="fs-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


              </div>
              <p className="text-secondary lead">"Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                <div>
                  <span className="h6 text-secondary  fw-5">Jane Doemunsky</span><br />
                  <small className="">COO, The Boo Corp.</small>
                </div>
              </div>
            </div>
            <div className="rounded-5 bg-black p-5 shadow mt-5 aos-init aos-animate" data-aos="zoom-in-right">
              <div className="fs-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                </svg>

              </div>
              <p className="text-secondary lead">"Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat."</p>
              <div className="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                <div>
                  <span className="h6 fw-5 text-secondary">Jane Doemunsky</span><br />
                  <small >COO, The Boo Corp.</small>
                </div>
              </div>
            </div>

          </div>
          <div className="col-12 col-lg-6">
            <div className="p-5 pt-0 aos-init aos-animate" data-aos="fade">
              <span className="h5 text-secondary fw-lighter">Em local de trabalho</span>
              <h2 className="display-4">O que meus colegas falam de mim?</h2>
            </div>
            <div className="rounded-5 bg-black p-5 shadow mt-5 gradient aos-init aos-animate" data-aos="zoom-in-left">
              <div className="fs-1">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>

              </div>
              <p className="lead">"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat."</p>
              <div className="d-flex justify-content-start align-items-center border-top pt-3">
                <div>
                  <span className="h6 fw-5 text-white">Jane Doemunsky</span><br />
                  <small>COO, The Boo Corp.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


        </>
    )

}

export default Body

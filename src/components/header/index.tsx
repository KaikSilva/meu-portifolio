import { FiArrowDown } from "react-icons/fi";
import {BsInstagram,BsGithub,BsLinkedin,BsFileEarmarkPdfFill} from "react-icons/bs";

interface Props {
  scrollToDiv: () => void;
}

function Header({scrollToDiv}:Props) {

    return (
    <div className="w-100 background-colorfluid-container overflow-hidden position-relative bg-black text-white aos-init aos-animate" data-aos="fade">
      <div className="position-absolute w-100 h-100 top-0 start-0"></div>
      <div className="container position-relative mt-5 text-center">
        <div className="row d-flex align-items-center justify-content-center py-vh-5">
          <div className="col-12 col-xl-10">
            <span className="h5 text-secondary mb-2 fw-lighter">
              <img 
              width={220}
              height={220}
              style={{borderRadius:"100%"}}
              src="
              https://avatars.githubusercontent.com/u/83962112?s=400&u=72218d6b90ed6c34bba316339f4080b1c276b899&v=4
              " alt="" />
            </span>
            <h1 className="display-huge mb-3 lh-1 mt-4">Kaik Silva</h1>
          </div>
          <div className="col-12 col-xl-6 ">
            <p className="lead" style={{color:"#fff",fontSize:"20px"}}>Olá! Sou um <b><u>desenvolvedor web fullstack</u></b> com mais de 3 anos de experiência na área. Minha paixão está em criar soluções inovadoras e eficientes usando tecnologias como <b><u>TypeScript</u></b>, <b><u>ReactJS</u></b>, <b><u>Node.js e NestJS</u></b></p>
          </div>
          <div className="w-100 d-flex mt-2 justify-content-center mb-5">
            <BsInstagram className="me-2"/>
            <BsGithub className="me-2"/>
            <BsLinkedin className="me-2"/>
            <BsFileEarmarkPdfFill /> 
          </div>
          <div className="col-12 text-center">
            <a onClick={scrollToDiv} className="text-white">
              <FiArrowDown size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
    )

}

export default Header

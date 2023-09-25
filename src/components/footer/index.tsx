
function Footer() {

    return (
        <footer className="bg-black border-top border-dark">
            <div className="container py-vh-4r">
            </div>
            <div style={{fontSize:"16px",fontWeight:"600",background:"linear-gradient(45deg, rgba(36,0,35,1) 0%, rgba(190,32,212,1) 42%, rgba(177,0,255,1) 90%)"}} className=" text-center small py-vh-2 border-top border-dark">
                © Copyright {`${new Date().getFullYear()}`}
                
                <a href="https://templatedeck.com" className="link-fancy link-fancy-light ms-2" target="_blank">
                    Kaik Silva
                </a>

            </div>
        </footer>
    )

}

export default Footer

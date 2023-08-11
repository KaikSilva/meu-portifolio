
function Footer() {

    return (
        <footer className="bg-black border-top border-dark">
            <div className="container py-vh-4r">
            </div>
            <div style={{fontSize:"16px",fontWeight:"600",background:"linear-gradient(24deg, #1717e5, transparent 21%), linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), linear-gradient(50deg, #6610f2 5%, #6f42c1 32%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)"}} className=" text-center small py-vh-2 border-top border-dark">
                © Copyright {`${new Date().getFullYear()}`}
                
                <a href="https://templatedeck.com" className="link-fancy link-fancy-light ms-2" target="_blank">
                    Kaik Silva
                </a>

            </div>
        </footer>
    )

}

export default Footer

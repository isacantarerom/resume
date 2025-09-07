import footerLinks from "./../data/footerLinks"

export default function Footer() {
  return (
    <footer className="text-center p-4 footer">
      
      <div className="d-flex justify-content-center gap-5">
          {footerLinks.map((link) => {
            const IconComponenet = link.icon;
            return(
              <a 
                key = {link.id}
                href={link.url}
                target = "_blank"
                rel="noonpener noreferrer"
                download={link.downloadName || false}
                className="footer-icon"
              >
                <IconComponenet size={30} />
              </a>
            )
          })

          }
      </div>
     
    </footer>
  );
}







//style={{ backgroundColor: "#C8C8C8", color: "#3B2F2F" }}> //D9E2EC //EBF2F8
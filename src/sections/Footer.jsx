import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {/* Wrap the image in an anchor tag */}
              <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
                <img src={socialImg.imgPath} alt={socialImg.name} />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ella Mahalia Simeon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
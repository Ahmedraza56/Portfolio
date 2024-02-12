import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <p className="text-lg">&copy; 2024 Build by Ahmed Raza. All rights reserved.</p>
        <div className="flex space-x-4 text-lg">
        <a href="https://www.facebook.com/profile.php?id=100015746790720" className="text-gray-300 hover:text-white transition duration-300 ">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/Ahmedraza_56" className="text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/ahmed_raza.56/" className="text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-raza-706252233/" className="text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Ahmedraza56" className="text-gray-300 hover:text-white transition duration-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoWhiteBoxed.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to={"/"} className={styles.footerLogoContainer}>
          <img className={styles.logo} src={Logo} alt='' />
        </Link>
        <div className={styles.listContainer}>
          <div className={styles.list}>
            <h3>About Us</h3>
            <ul>
              <li>
                <h4>About ChefBox</h4>
              </li>
              <li>
                <h4>Contact Us</h4>
              </li>
              <li>
                <h4>Features</h4>
              </li>
              <li>
                <h4>Careers</h4>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3>Resources</h3>
            <ul>
              <li>
                <h4>Help center</h4>
              </li>
              <li>
                <h4>Privacy Policy</h4>
              </li>
              <li>
                <h4>Term of Service</h4>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <h4>Questions or feedback?</h4>
              </li>
              <li>
                <h4>We’d love to hear from you</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.textFooter}>
        <p>©2021 ChefBox. All right reserved</p>
        <div className={styles.iconsContainer}>
          <div className={styles.icons}>
            <FaFacebookF />
          </div>
          <div className={styles.icons}>
            <FaTwitter />
          </div>
          <div className={styles.icons}>
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}

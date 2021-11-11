import React from 'react';
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <a href="https://github.com/SPares393/brewdogAPI-project" target="_blank" rel="noreferrer">            
                <FontAwesomeIcon icon={faGithub} className={styles.GithubLink}></FontAwesomeIcon>
            </a>
        </footer>
    )
}

export default Footer

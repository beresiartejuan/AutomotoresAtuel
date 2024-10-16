import CarIcon from "../assets/CarIcon";
import BarsIcon from "../assets/BarsIcon";
import styles from "../styles/Navbar.module.scss";
import type { ComponentProps } from "react";

export default function Navbar(props: ComponentProps<'nav'>) {
    return (
        <nav {...props} className={`${styles.navbar} ${props.className ?? ''}`}>
            <div>
                <CarIcon></CarIcon>
                <BarsIcon></BarsIcon>
            </div>
            <div>
                <a href="#">Autos</a>
                <a href="#">0 km</a>
                <a href="#">Usados</a>
                <a href="#">¿Donde estamos?</a>
            </div>
        </nav>
    )
}
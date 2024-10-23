import CarIcon from "../assets/CarIcon";
import BarsIcon from "../assets/BarsIcon";
import styles from "../styles/Navbar.module.scss";
import { useEffect, type ComponentProps } from "react";
import { useMediaQuery, useToggle } from "@uidotdev/usehooks";

export default function Navbar(props: ComponentProps<'nav'>) {

    const [isHidden, setHidden] = useToggle(true);
    const isPhone = useMediaQuery('(max-width: 1000px)');

    useEffect(() => {
        if (!isPhone) setHidden(false);
    }, [isPhone, setHidden]);

    return (
        <nav {...props} className={`${styles.navbar} ${props.className ?? ''}`}>
            <div>
                <CarIcon></CarIcon>
                <button onClick={() => {
                    if (isPhone) setHidden();
                }}><BarsIcon></BarsIcon></button>
            </div>
            <div style={{
                ...(isHidden ? { display: 'none' } : {})
            }}>
                <a href="/">Autos</a>
                <a href="/?0km">0 km</a>
                <a href="/?usados">Usados</a>
                <a href="/#location">¿Donde estamos?</a>
            </div>
        </nav>
    )
}
import styles from "../styles/Navbar.module.sass";
import CarIcon from "../assets/CarIcon";
import styled, { css } from "styled-components";

const Content = styled.div<{ $left?: boolean, $right?: boolean }>`
    ${props => props.$left && css`
        padding: 0 0 0 4rem;
    `}
    ${props => props.$right && css`
        padding: 0 4rem 0 0;
    `}
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 0 3vw;
    transition: all 0.6s ease;
    height: 100%;

    &:hover {
        background-color: rgba(51, 51, 51, 0.80);
    }
`;

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Content $left>
                <CarIcon></CarIcon>
            </Content>
            <Content $right>
                <Link href="#">Autos</Link>
                <Link href="#">0 km</Link>
                <Link href="#">Usados</Link>
                <Link href="#">¿Donde estamos?</Link>
            </Content>
        </nav>
    )
}
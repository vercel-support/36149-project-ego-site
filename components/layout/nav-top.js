// dependences
import Link from 'next/link';

// icons
import IconCode from '../ui/icons/icon-code';
import IconEmail from '../ui/icons/icon-email';

// styles
import styled from 'styled-components';
const Nav = styled.div`
    background-color: var(--color-app-primary);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
`;
const NavApp = styled.div`
    color: white;
    font-size: 120%;
    font-weight: bold;
    cursor: pointer;

    display: flex;
    align-items: center;
    
    & img {
        max-width: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
`;
const NavMain = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;

    & * {
        margin-left: 10px;
    }

    & a {
        color: white;
        text-decoration: underline wavy;
    }
`;

export default function NavTop() {
    return <Nav>
        <Link href="/" passHref>
            <NavApp>
                <img src="/favicon-transparent.png" alt="" />
            </NavApp>
        </Link>

        <NavMain>
            <Link href="/music">music</Link>
            <Link href="/life">life</Link>
            <Link href="/code">{`</code>`}</Link>
            <a target="_self" href="mailto:lalala@dolalala.me">
                <IconEmail className="stroke-white" />
            </a>
            <a target="_blank" href="https://github.com/egotr">
                <IconCode className="stroke-white" />
            </a>
        </NavMain>
    </Nav>
}
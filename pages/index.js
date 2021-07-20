import Image from 'next/image';

// styles
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
    #wrapper {
        display: flex;
        align-items: center;
    }
`;
const Container = styled.div`
    width: clamp(200px, 50%, 300px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & * {
        text-align: center;
    }

    & h1 {
        color: var(--color-app-primary);
    }
    
    & code {
        background-color: #f9f9f9;
        color: var(--color-app-primary);
        padding: 5px;
        border: solid 1px #ddd;
        border-radius: 5px;
    }
`;
export default function About() {
    return <>
        <GlobalStyles />
        <Container>
            <Image
                alt=""
                src="/favicon.png"
                width={300}
                height={300}
            />

            <h1>EGO TRẦN</h1>
            <div>A <code>coder</code> who loves to <code>sing</code></div>
        </Container>
    </>
}
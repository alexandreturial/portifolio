import styled from 'styled-components';
import media from 'styled-media-query';


export const ContainerAside = styled.aside`
    align-items: center;
    border-right: 1px solid var(--borders);
    background: var(--mediumBackground);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    padding: 2rem;
    text-align: center;
    width: 17rem;

    ${media.lessThan("large")`
        border-bottom: 1px solid var(--borders);
        align-items: flex-start;
        height: auto;
        padding: 1rem 2rem;
        width: 100%;
        position: absolute;
        z-index: 9999;
    `}
`;

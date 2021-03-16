import styled from 'styled-components';
import media from 'styled-media-query';


export const ContainerLayout = styled.div`
  display: flex;

  ${media.lessThan("large")`
    flex-direction: column;
  `}

  position: relative;

`;

export const MainLayout = styled.div`
  background:var(--background);
  min-width: 100vh;
  padding: 0 3.75rem 0 17rem;
  width: 100%;
  height: 100vh;


  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
    min-width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    
    &{
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    
  `}
  
  body#grid &{ 
    grid-template-areas: 
      "posts"
      "paginations";
  }
`;


import React from 'react';

import Perfil from '../Perfil';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';


import { ContainerAside } from './styles';

function Aside() {
  return(
      <ContainerAside>
           <Perfil/>
           <SocialLinks/>
           <MenuLinks/>
      </ContainerAside>
  );
}

export default Aside;

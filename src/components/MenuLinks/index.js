import React from 'react';

import links from './content';
import getThemeColor from '../../Utils/getThemeColor';

import * as S from './styles';

function MenuLinks() {
  return (
      <S.MenuLinksWrapper>
          <S.MenuLinksList>
              {
                  links.map((link, index) =>(
                      <S.MenuLinksItem key={index}>
                          <S.MenuLinksILink cover direction="left" bg={getThemeColor()} duration={0.6} to={link.url} activeClassName="active">
                              {link.label}
                          </S.MenuLinksILink>
                      </S.MenuLinksItem>
                  ))
              }
          </S.MenuLinksList>
      </S.MenuLinksWrapper>
  );
}

export default MenuLinks;

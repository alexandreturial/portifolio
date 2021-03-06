import React from 'react';

import getThemeColor from '../../Utils/getThemeColor'
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import * as S from './styles';

const Pagitation = ({
    isFirst, 
    isLast, 
    currentPage, 
    numPages, 
    prevPage, 
    nextPage
}) => {
  return (
      <S.PaginationWrapper>
          {
              !isFirst &&
              <AniLink to={prevPage} cover direction="left" bg={getThemeColor()} duration={0.6}>
                  página anterior
              </AniLink>
          }
          
          <p> {currentPage} de { numPages }</p>

          {
              !isLast &&
              <AniLink to={nextPage} cover direction="right" bg={getThemeColor()} duration={0.6}>
                  proxima página 
              </AniLink>
          }
          
      </S.PaginationWrapper>
  );
}

Pagitation.propTypes = {
    isFirst: propTypes.bool.isRequired, 
    isLast: propTypes.bool.isRequired, 
    currentPage: propTypes.number.isRequired, 
    numPages: propTypes.number.isRequired, 
    prevPage: propTypes.string, 
    nextPage: propTypes.string,
}

export default Pagitation;
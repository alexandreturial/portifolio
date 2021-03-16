import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import getThemeColor from '../../Utils/getThemeColor';

import Avatar from '../Avatar';

import * as S from './styles';

const Perfil = () =>{
    const { 
        site:{
            siteMetadata:{
                title, position, description
            },
        }
    } = useStaticQuery(graphql`
        query HeadingQuery {
            site {
                siteMetadata {
                    position
                    description
                    title
                }
            }
        }
    `);

    return(
        <S.ProfileWrapper>
            <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
                <Avatar/>
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>    
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Perfil;
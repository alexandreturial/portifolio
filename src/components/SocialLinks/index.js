import React from 'react';

import Icons from './icons';
import links from './content';

import * as S from './styles.js';

function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            {
                links.map((link, index) =>{
                    const Icon = Icons[link.label]

                    return(
                        <S.SocialLinksitem key={index}>
                            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" tel="noopener noreferrer">
                                <S.IconWrapper>
                                    <Icon/>
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksitem>
                    )
                })
            }
        </S.SocialLinksList>
    </S.SocialLinksWrapper>
  );
}

export default SocialLinks;
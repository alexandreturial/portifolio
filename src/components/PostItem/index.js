import React from 'react';
import PropType from 'prop-types';

import getThemeColor from '../../Utils/getThemeColor';
import * as S from './styles';

const PostItem = ({
    slug, 
    background,
    category, 
    date, 
    timeToRead, 
    title, 
    description 
    
    }) => {
       
    return (
        <S.PostItemLink cover direction="right" bg={getThemeColor()} duration={0.6} to={slug}>
            <S.PostItemWrapper>
                <S.PostItemTag background={background}>{category}</S.PostItemTag>
                <S.PostItemInfo>
                    <S.PostItemDate>
                        {date} ° {timeToRead} min de leitura
                </S.PostItemDate>
                    <S.PostItemTitle>
                        {title}
                </S.PostItemTitle>
                <S.PostItemDescription>
                    {description}
                </S.PostItemDescription>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    );
}

PostItem.PropType={
    slug: PropType.string.isRequired, 
    background: PropType.string,
    category: PropType.string.isRequired,
    date: PropType.string.isRequired,  
    timeToRead: PropType.string.isRequired, 
    title: PropType.string.isRequired, 
    description: PropType.string.isRequired
}

export default PostItem;
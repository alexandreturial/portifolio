import React from 'react'
import propTypes from 'prop-types'

import * as S from './styled';

const RecomendedPosts = ({next, previous}) => (
    <S.RecommendedWrapper>
        {
            previous &&(
                <S.RecommendedLink
                    to={previous.fields.slug}
                    cover direction="left" bg="#16282C" duration={0.6}
                    className="previuos"
                >
                    {previous.frontmatter.title}
                </S.RecommendedLink>
            )
        }
        {
            next && (
                <S.RecommendedLink
                    to={next.fields.slug}
                    cover direction="right" bg="#16282C" duration={0.6}
                    className="next"
                >
                    {next.frontmatter.title}
                </S.RecommendedLink>
            )
        }
    </S.RecommendedWrapper>
)

RecomendedPosts.propTypes = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields : propTypes.shape({
            slug: propTypes.string.isRequired
        })
    }),
    previous: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields : propTypes.shape({
            slug: propTypes.string.isRequired
        })
    })
}

export default RecomendedPosts;
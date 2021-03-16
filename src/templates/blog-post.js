import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecomendedPost from '../components/RecomendedPosts';
import Comments from '../components/Comments';

import * as S from "../components/Post/styled";


const blogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const next = pageContext.nextPost;
    const previous = pageContext.previousPost;

    return (
        <Layout>
            <SEO 
                title={post.frontmatter.title} 
                description={post.frontmatter.description}
                image={post.frontmatter.image}
            />
            <S.PostHeader>
                <S.PostDate>
                {post.frontmatter.date} °  {post.frontmatter.timeToRead}
                </S.PostDate>
                <S.PostTitle>
                    {post.frontmatter.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.frontmatter.description}
                </S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div 
                dangerouslySetInnerHTML ={{__html: post.html}}
                ></div>
            </S.MainContent>
            <RecomendedPost 
                next={next}
                previous={previous}
            />
            <Comments 
                url={post.fields.slug}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
        fields{
            slug
        }
        frontmatter {
            title
            description,
            date(
                locale: "pt-bt",
                formatString: "DD [de] MMMM [de] YYYY"
            )
            image
        }
        html,
        timeToRead
        }
    }
`

export default blogPost;
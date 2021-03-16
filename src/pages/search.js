import React from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import SEO from "../components/seo"

// import { Container } from './styles';

const SearchPages = () => (
   <Layout>
     <SEO title="search"/>
     <Search/>
   </Layout>
);

export default SearchPages;


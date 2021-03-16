import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';

import * as S from './styled';
import Hit from './Hit';


const algolia = {
    appId : process.env.GATSBY_ALGOLIA_APP_ID,
    searchOnlyAPIKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(
    algolia.appId, 
    algolia.searchOnlyAPIKey
);




const Search = () => {
  return (
    <S.SearchWrapper>
        <InstantSearch 
            searchClient={searchClient} 
            indexName={algolia.indexName}
        >
            <SearchBox autoFocus translations={{placeholder: 'Pesquisar...'}}/>
            <Stats translations={{stats(nbHits, timeSpentMS){
                return `${nbHits} resultados encontrados em ${timeSpentMS}ms`;
            }}}/>
            <Hits hitComponent={Hit}/>
        </InstantSearch>
    </S.SearchWrapper>
  );
}

export default Search;
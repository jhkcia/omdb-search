import React, { useState } from 'react';
import styled from "styled-components";
import searchIcon from "../assets/searchIcon.png";

type SearchAreaProps = {
    handleSearchQuery: (query: string) => void
}

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #131A22;
    padding:10px;
`;

export const Searchbox = styled.input`
    background-color: #ffffff;
    width: 50%;
    height: 40px;
    border: none;
`

export const SearchIconWrapper = styled.span`
    background-color:#fabd60;
    border-radius: 0em .2em .2em 0em ;
    cursor: pointer;
    margin-left: 4px;
    &:hover{
        background-color:#ff9900;
    }
    width: 40px;
    height: 40px;
`

export const Logo = styled.img`
    padding: 4px;
    width: 32px;
`

export function SearchArea({ handleSearchQuery }: SearchAreaProps): JSX.Element {
    const [query, setQuery] = useState<string>("");

    return (
        <Container>
            <Searchbox data-testid="queryText" value={query}
                onChange={(event) => setQuery(event.target.value)} 
                onKeyDown={(e)=>e.key==='Enter' && handleSearchQuery(query)}/>
            <SearchIconWrapper data-testid="searchButton" onClick={() => handleSearchQuery(query)}>
                <Logo src={searchIcon} />
            </SearchIconWrapper>
        </Container>
    )
} 
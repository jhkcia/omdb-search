import styled from "styled-components";

type MovieListHeaderProps = {
    query: string;
    pageNumber: number;
    totalResults: number;
    error: string;
}

export const SearchResultDiv = styled.div`
    border: 1px solid #ddd;
    padding: .6em;
    width: 95%;
    border-radius: 4px;
`

export const Text = styled.span`
    color:${(props) => props.color ? props.color : "#131A22"};
    font-size: ".9em" ;
    font-weight: bold;
    padding: .4em;`

export function MovieListHeader({ query, pageNumber, totalResults, error, }: MovieListHeaderProps): JSX.Element {

    return (
        <SearchResultDiv>
            {
                error || totalResults === 0 ?
                    <Text data-testid="currentQueryInfoTest">Your search - {query} - did not match any movie.
                    </Text>
                    :
                    <Text data-testid="currentQueryInfoTest">page {pageNumber} of {totalResults} result for {query}
                    </Text>
            }

            <Text data-testid="errorText" color="#c45500"> {error}
            </Text>
        </SearchResultDiv>
    )
} 
import styled from "styled-components";

type MovieListFooterProps = {
    hasMore: boolean;
    handleLoadMore: () => void;
}

export const SearchResultDiv = styled.div`
    border: 1px solid #ddd;
    padding: .6em;
    width: 95%;
    border-radius: 4px;
`
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
export function MovieListFooter({ hasMore, handleLoadMore }: MovieListFooterProps): JSX.Element {

    return (
        <SearchResultDiv>
            {
                hasMore && <Button onClick={handleLoadMore}>Load More</Button>
            }
        </SearchResultDiv>
    )
} 
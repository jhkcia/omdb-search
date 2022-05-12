import styled from "styled-components";

type MovieListFooterProps = {
    page: number;
    count: number;
    onChange: (page: number) => void;
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
export function MovieListFooter({ page, count, onChange }: MovieListFooterProps): JSX.Element {

    return (
        <SearchResultDiv>
            {
                page > 1 && <Button data-testid="previousPageTest" onClick={() => onChange(page - 1)}>Previous page</Button>
            }
            {
                page <count && <Button data-testid="nextPageTest" onClick={() => onChange(page + 1)}>Next page</Button>
            }
        </SearchResultDiv>
    )
} 
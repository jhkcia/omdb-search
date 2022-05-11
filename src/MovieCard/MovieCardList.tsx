import styled from "styled-components";
import { IMovieSearchResult } from './IMovieSearchResult';
import { MovieCard } from './MovieCard';

type MovieCardListProps = {
    result: IMovieSearchResult
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
`
export const BoldText = styled(Text)`
    font-weight: bold;
    padding: .4em;
`

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export function MovieCardList({ result }: MovieCardListProps): JSX.Element {

    return (
        <>
            <SearchResultDiv>
                <BoldText>Showing result for
                </BoldText>
                <BoldText color="#c45500"> God Father
                </BoldText>
            </SearchResultDiv>

            {
                result.response
                    ?
                    <MovieContainer>
                        {
                            result.search?.map(item => (<MovieCard item={item} />))
                        }
                    </MovieContainer>
                    :
                    <BoldText data-testid="errorText" color="#c45500"> {result.error}
                    </BoldText>
            }
        </>)
} 
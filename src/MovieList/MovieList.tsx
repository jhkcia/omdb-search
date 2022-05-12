import styled from "styled-components";
import { IMovie } from "../MovieCard/IMovie";
import { MovieCard } from "../MovieCard/MovieCard";

type MovieListProps = {
    items: IMovie[];
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
    padding: .4em;
`
export const BoldText = styled(Text)`

`

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export function MovieList({ items }: MovieListProps): JSX.Element {

    return (
        <MovieContainer>
            {
                items.map(item => (<MovieCard item={item} key={item.imdbID} />))
            }
        </MovieContainer>
    )
} 
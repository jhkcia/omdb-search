import { IMovie } from './IMovie';
import styled from "styled-components"

type MovieCardProps = {
    item: IMovie
}

interface WrapperProps {
    direction?: 'row' | 'column',
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    margin-right: 1em;
    flex-direction: ${props => props.direction ?? "row"};
`
export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`

const RootWrapper = styled(Wrapper)`
    padding: 10px;
`
const InfoWrapper = styled(Wrapper)`
    padding: 10px;
    flex-direction: column;

`
export const Image = styled.img`
    height: 8em;
`
export const Text = styled.span`
    color:${(props) => props.color ? props.color : "#131A22"};
`

export const Chip = styled.button`
    color:${(props) => props.color ? props.color : "#131A22"};
    margin: 0.5em 0 0.5em 0 ;
    width:80px;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

export function MovieCard({ item }: MovieCardProps): JSX.Element {

    return (
        <RootWrapper direction="row">
            <ImageContainer>
                <Image data-testid="posterImage" src={item.poster === 'N/A' ? '/no-poster.png' : item.poster} />
            </ImageContainer>
            <InfoWrapper >
                <Text data-testid="titleText">{item.title}</Text>
                <Chip data-testid="typeText" color={item.type === "movie" ? "grey" : item.type === "green" ? "blue" : "orange"} >{item.type}</Chip>

                <Text color="blue" data-testid="yearText">{item.year}</Text>
            </InfoWrapper>

        </RootWrapper>
    )
} 
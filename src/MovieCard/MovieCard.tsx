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
export const Image = styled.img`
    height: 8em;
`
export const Text = styled.h5`
    color:${(props) => props.color ? props.color : "#131A22"};
`
export function MovieCard({ item }: MovieCardProps): JSX.Element {


    return (
        <RootWrapper direction="row">
            <ImageContainer>
                <Image data-testid="posterImage" src={item.poster === 'N/A' ? '/no-poster.png' : item.poster} />
            </ImageContainer>
            <Text data-testid="titleText">{item.title}</Text>
            <Text data-testid="typeText" color="grey" >{item.type}</Text>

            <Wrapper>
                <Text color="blue" data-testid="yearText">{item.year}</Text>
            </Wrapper>

        </RootWrapper>
    )
} 
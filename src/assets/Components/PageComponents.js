import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageTitle = styled.h1`
    align-self: flex-start;
    font-family: 'Inconsolata', monospace;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    margin: 1.25rem 0 4rem 1.5rem;
    text-transform: uppercase;
`

export const Image = styled.img`
    width: 17.927rem;
`

export const MainText = styled.p `
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: -0.035em;
    margin: 3.75rem 0 1.875rem 1.5rem;
`

export const Text = styled.p`
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.026em;
    margin-left: 1.438rem;
`

export const Button = styled.div`
    align-self: flex-start;
    background-color: #333333;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    margin: 4.125rem 0 7.125rem 1.5rem;
    padding: 24px 43px;
    text-transform: uppercase;
`

export const Trademark = styled.p`
    color: #BDBDBD;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`

export const Creator = styled.a`
    color: #BDBDBD;
    font-weight: 700;
`
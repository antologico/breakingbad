/* istanbul ignore file */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 44px;
    color: #333;
`

export const LanguageSelectorWrapper = styled.div`
    text-align: right;
    background: #EEE;
    width: 100%;
    margin-top: -10px;
    max-width: 780px;
    display: block;
    padding: 10px 10px 10px 5px;
    border-radius: 0px 0 5px 5px;
`

export const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
`

export const CharacterSection = styled.section`
    margin-top: 5px 0;
    display: flex;
    min-height: 40px;
    align-items: center;
    border-bottom: 1px solid #EEE;
`

export const CharacterImage = styled.img`
    object-fit: cover;
    object-position: 0 0;
    border-radius: 5px;
`

export const ErrorWrapper = styled.div`
    max-width: 600px;
    margin-top: 20px;
    color: black;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    display: inline-flex;
    text-align: center;
    padding: 100px;
    background: #FAA;
    font-size: 1.5em;
    flex-direction: column;
`
export const LoadingWrapper = styled(ErrorWrapper)`
    background: #FAFAFA;
    font-size: 12px;
    line-height: 30px;
    text-transform: uppercase;
`

export const CharacterWrapper = styled.article`
    max-width: 400px;
    text-align: left;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
`

export const CharacterInfoList = styled.ul`
    list-style: none;
	margin: 0;
	padding: 0;
    display: inline-block;
    li {
        background: #DDD;
        color; red;
        display: inline-block;
        margin: 5px;
        border: 1px solid #AAA;
        color: #666;
        padding: 3px 5px;
        font-size: 0.7em;
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const LinkButton = styled(Link)`
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #DDD;
    color: black;
    font-size: 14px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 40px;
    
    &:hover {
        background: black;
        color: white;
    }
`

export const Select = styled.select`
    padding: 10px 20px 10px 10px;
    border: 0;
    display: inline-block;
    border-radius: 3px;
    background: #DDD;
    color: black;
    font-size: 0.8em; 
    font-family: Arial, Helvetica, sans-serif;
`

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #DDD;
    display: inline-block;
    border-radius: 3px;
    background: #EEE;
    color: black;
    font-size: 0.8em; 
    width: 300px;
    max-width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
`

export const Characteres = styled.div`
    width: 100%;
    max-width: 800px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 568px) {
        grid-template-columns: 1fr;
    }

    nav {
        a {
            margin: 5px;
            border-radius: 5px;
            text-decoration: none;
            display: block;
            text-align: center;
            background: #EEEEEE;
            color: black;
            font-size: 14px;
            height: 40px;
            padding-left: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:hover {
                background: black;
                color: white;
            }
        }
    }
`

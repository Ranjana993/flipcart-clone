import { InputBase, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';



const SearchComponent = () => {
    return (
        <SearchContainer>
            <SearchInputBase placeholder='Search for products brands and more' />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default SearchComponent

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;

`;
const SearchInputBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`
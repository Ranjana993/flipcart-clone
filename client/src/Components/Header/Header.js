import React from 'react'
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material"
import SearchComponent from './SearchComponent';
import CustomButtons from './CustomButtons';
import { Link } from "react-router-dom"

const Logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <ComponentBox to={'/'}>
                    <img src={Logo} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore &nbsp; <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sublogo" />
                    </Box>
                </ComponentBox>

                <SearchComponent />
                <CustomBtnWrappper>
                    <CustomButtons />
                </CustomBtnWrappper>
            </Toolbar>
        </StyledHeader>
    )
}



export default Header

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;

`

const ComponentBox = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration:none;
    color:inherit

`


const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style:italic;
`
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomBtnWrappper = styled(Box)`
    margin: 0 5% 0 auto;
`
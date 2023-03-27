import { Badge, Box, Button, styled, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../Context/dataProvider';
import Profile from './Profile';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext)
    const { cartItems } = useSelector(state => state.cart)
    // console.log(cartItems.length);
    return (
        <Wrapper>
            {account ?
                <Profile account={account} setAccount={setAccount} />
                :
                <LoginBtn variant='contained' onClick={() => setOpen(true)}>Login</LoginBtn>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to={'/cart'}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fontSsize: '14px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))



const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))



const LoginBtn = styled(Button)`
    color: #2874f0;
    background-color: white;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    height: 32px;
    box-shadow: none;
    font-weight: 600;

`
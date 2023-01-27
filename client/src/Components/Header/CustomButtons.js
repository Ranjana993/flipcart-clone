import { Box, Button, styled, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../Context/dataProvider';
import Profile from './Profile';


const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext)

    return (
        <Wrapper>
            {account ?
                <Profile account={account} setAccount={setAccount}/>
                :
                <LoginBtn variant='contained' onClick={() => setOpen(true)}>Login</LoginBtn>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons
const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button , & > p , & > div {
    margin-right: 40px;
    font-size: 14px;
    align-items: center;
}
`

const Container = styled(Box)`
    display:flex ;
`

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
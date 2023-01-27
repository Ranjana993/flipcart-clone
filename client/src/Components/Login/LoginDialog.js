import React, { useState, useContext } from 'react'
import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material';
import { authSignUpUser, authLogin } from '../../service/api';
import { DataContext } from '../../Context/dataProvider';


// const loginImage= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png';

const initialAccount = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}


const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(initialAccount.login)
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        Username: "",
        email: "",
        password: "",
        phone: ""
    })
    const [login, setLogin] = useState({ Username: "", password: "" })
    const { setAccount } = useContext(DataContext)
    const [error, setError] = useState(false)





    const handleClose = () => {
        setOpen(false)
        toggleAccount(initialAccount.login)
        setError(false)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUser({ ...user, [name]: value })
        // console.log(user);
    }

    // signUpUser
    const signUpUser = async () => {
        let res = await authSignUpUser(user);
        if (!res) return;
        handleClose()
        // console.log(res);
        setAccount(user.firstName)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    // login
    const loginUser = async () => {
        let res = await authLogin(login)
        console.log(res.data.data);
        if (res.status === 200) {
            handleClose();
            setAccount(res.data.data.firstName)
        } else {
            setError(true)
        }
    }
    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wraper>
                                <TextField
                                    label="Enter Username"
                                    variant="standard"
                                    name='Username'
                                    value={login.Username}
                                    // autoComplete='off'
                                    onChange={e => onValueChange(e)}
                                />
                                {
                                    error && <Error>Plz enter correct username password</Error>
                                }
                                <TextField
                                    label="Enter Password"
                                    variant="standard"
                                    name='password'
                                    // autoComplete='off'
                                    value={login.password}
                                    onChange={e => onValueChange(e)}
                                />
                                <Text>By continuiing , you agree to flipfart's Terms of use and privacy Policy</Text>
                                <LoginBtn onClick={() => loginUser()}>Login</LoginBtn>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestBtn>Request OTP</RequestBtn>
                                <CreateAccount onClick={() => toggleAccount(initialAccount.signup)}>New to flipkart ?? Create an Account </CreateAccount>
                            </Wraper>
                            :
                            <Wraper>
                                <TextField
                                    variant="standard"
                                    name='firstName'
                                    value={user.firstName}
                                    onChange={e => handleChange(e)}
                                    label="Enter First Name"
                                />
                                <TextField
                                    variant="standard"
                                    name='lastName'
                                    value={user.lastName}
                                    onChange={e => handleChange(e)}
                                    label="Enter Last name"
                                />
                                <TextField
                                    variant="standard"
                                    name='Username'
                                    value={user.Username}
                                    onChange={e => handleChange(e)}
                                    label="Enter Username"
                                />
                                <TextField
                                    variant="standard"
                                    name='email'
                                    value={user.email}
                                    onChange={e => handleChange(e)}
                                    label="Enter Email"
                                />
                                <TextField
                                    variant="standard"
                                    name='password'
                                    value={user.password}
                                    onChange={e => handleChange(e)}
                                    label="Enter Password"
                                />
                                <TextField
                                    variant="standard"
                                    name='phone'
                                    value={user.phone}
                                    onChange={e => handleChange(e)}
                                    label="Enter Phone"
                                />
                                <LoginBtn onClick={() => signUpUser()}>Continue</LoginBtn>
                            </Wraper>
                    }

                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog
const Component = styled(Box)`
    height: 70vh;
    width: 97vh;

`
const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
    height: 82%;
    width: 28%;
    padding: 45px 35px;
    &>p , &>h5{
        color: #ffffff;
        font-weight: 600;
    }
`

const Wraper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div ,& > button ,& >p{
        margin-top: 20px;
    }


`

const LoginBtn = styled(Button)`
    text-transform: none;
    background-color: #fB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;


`
const RequestBtn = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
    

`

const Text = styled(Typography)`
font-size: 13px;
color: #878787;

`

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    font-weight: 600;
    margin-top: 10px;
`
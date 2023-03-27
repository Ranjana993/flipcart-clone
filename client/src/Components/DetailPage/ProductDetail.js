import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from '@emotion/styled';


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const ADURL = "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"

const ProductDetail = ({ products }) => {


    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    return (
        <>
            <Typography>{products.title.longTitle}</Typography>
            <Typography style={{ color: '#878787', marginTop: 5, fontSize: 14 }}>8 Ratings & 1 Reviews
                <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{products.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{products.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{products.price.discount} off</Box>
            </Typography>
            <Typography>Available offers </Typography>
            <SmallText>
                <Typography><Badge /> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹750*</Typography>
                <Typography><Badge />5% Cashback on Flipkart Axis Bank Card</Typography>
                <Typography><Badge />Purchase now & get a surprise cashback coupon till November 2023</Typography>
                <Typography><Badge />Buy this product and get upto ₹250 off on Flipkart Furniture</Typography>
                <Typography><Badge />10% off on Indian Bank Mastercard Debit Cards, up to ₹250. On orders of ₹2000 and above</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warrenty</TableCell>
                        <TableCell>1 Year </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box style={{ color: '#2874f0' }} component='span'> SuperComminent</Box>
                            <Typography>7 Days Return Policy</Typography>
                            <Typography>Starting rate from {products.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={ADURL} style={{ width: 390 }} alt="" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{products.description} </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & >p{
        font-size: 14px;
        margin-top: 10px;
    }

`

const Badge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`


const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & >td{
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }

`
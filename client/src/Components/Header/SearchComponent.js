import { InputBase, List, ListItem, styled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';



const SearchComponent = () => {
    const [text, setText] = useState('')
    const { products } = useSelector(state => state.getProducts)
    // console.log("Products ....." , products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    const getText = (text) => {
        setText(text)
    }
    return (
        <SearchContainer>
            <SearchInputBase placeholder='Search for products brands and more' onChange={(e) => getText(e.target.value)} value={text} />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {
                text && <ListWrapper>
                    {
                        products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
                            <ListItem>
                                <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{textDecoration:'none' , color:'inherit'}}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
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


const ListWrapper = styled(List)`
position: absolute;
background:#ffffff ;
color: #000;
margin-top: 36px;
`
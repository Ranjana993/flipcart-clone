import { Box, Button, Divider, styled, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
};


const Slide = ({ products, title, timer }) => {
    return (
        <>
            <Component>
                <Deal>
                    <DealText>{title}</DealText>
                    {
                        timer && <Timer>
                            <img src={timerURL} alt="" style={{ width: 24 }} />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Timer>
                    }

                    <StyledBtn variant='contained'>View All</StyledBtn>
                </Deal>
                <Divider />
                <Carousel
                    responsive={responsive}
                    dotListClass="custom-dot-list-style"
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                    centerMode={true}
                >
                    {
                        products.map((data) => (
                            <Box textAlign={"center"} style={{ padding: "20px 15px" }}>
                                <Image key={data.id} src={data.url} alt="" />
                                <Text style={{ color: '#212121', fontWeight: 600 }}>{data.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{data.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '0.6' }}>{data.tagline}</Text>
                            </Box>
                        ))
                    }
                </Carousel>
            </Component>
        </>
    )
}

export default Slide


const Text = styled(Typography)`
font-size: 14px;
margin-top: 5px;
`

const StyledBtn = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`

const Component = styled(Box)`
    margin-top: 5px;
    background: #FFFFFf;

`

const Deal = styled(Box)`
padding: 15px 20px;
display: flex;
`

const Timer = styled(Box)`
display: flex;
margin-left: 10px;
align-items: center;
color: #7f7f7f;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;

`

const Image = styled('img')({
    width: 'auto',
    height: 150

})
import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import {Beachy, Colonial, Contemporary, Industrial, Mediterranean, Minimalist, Modern, Traditional} from "../assets/index"

const PhotoList = () => {
    const itemData = [
        {
            img:  Beachy ,
            title: 'Bed',
        },
        {
            img: Colonial,
            title: 'Kitchen',
        },
        {
            img: Contemporary,
            title: 'Sink',
        },
        {
            img: Industrial,
            title: 'Books',
        },
        {
            img: Mediterranean,
            title: 'Chairs',
        },
        {
            img: Minimalist,
            title: 'Candle',
        },
        {
            img: Modern,
            title: 'Laptop',
        },
        {
            img: Traditional,
            title: 'Doors',
        },
        {
            img: Contemporary,
            title: 'Coffee',
        },
        {
            img: Mediterranean,
            title: 'Storage',
        },
        {
            img: Industrial,
            title: 'Coffee table',
        },
        {
            img: Minimalist,
            title: 'Blinds',
        },

        {
            img:  Beachy ,
            title: 'Bed',
        },
        {
            img: Colonial,
            title: 'Kitchen',
        },
        {
            img: Contemporary,
            title: 'Sink',
        },
        {
            img: Industrial,
            title: 'Books',
        },
        {
            img: Mediterranean,
            title: 'Chairs',
        },
        {
            img: Minimalist,
            title: 'Candle',
        },
        {
            img: Modern,
            title: 'Laptop',
        },
        {
            img: Traditional,
            title: 'Doors',
        },
        {
            img: Contemporary,
            title: 'Coffee',
        },
        {
            img: Mediterranean,
            title: 'Storage',
        },
        {
            img: Industrial,
            title: 'Coffee table',
        },
        {
            img: Minimalist,
            title: 'Blinds',
        },
        {
            img:  Beachy ,
            title: 'Bed',
        },
        {
            img: Colonial,
            title: 'Kitchen',
        },
        {
            img: Contemporary,
            title: 'Sink',
        },
        {
            img: Industrial,
            title: 'Books',
        },
        {
            img: Mediterranean,
            title: 'Chairs',
        },
        {
            img: Minimalist,
            title: 'Candle',
        },
        {
            img: Modern,
            title: 'Laptop',
        },
        {
            img: Traditional,
            title: 'Doors',
        },
        {
            img: Contemporary,
            title: 'Coffee',
        },
        {
            img: Mediterranean,
            title: 'Storage',
        },
        {
            img: Industrial,
            title: 'Coffee table',
        },
        {
            img: Minimalist,
            title: 'Blinds',
        },
        {
            img:  Beachy ,
            title: 'Bed',
        },
        {
            img: Colonial,
            title: 'Kitchen',
        },
        {
            img: Contemporary,
            title: 'Sink',
        },
        {
            img: Industrial,
            title: 'Books',
        },
        {
            img: Mediterranean,
            title: 'Chairs',
        },
        {
            img: Minimalist,
            title: 'Candle',
        },
        {
            img: Modern,
            title: 'Laptop',
        },
        {
            img: Traditional,
            title: 'Doors',
        },
        {
            img: Contemporary,
            title: 'Coffee',
        },
        {
            img: Mediterranean,
            title: 'Storage',
        },
        {
            img: Industrial,
            title: 'Coffee table',
        },
        {
            img: Minimalist,
            title: 'Blinds',
        },
    ]

    return (
            <ImageList sx={{ width: "160%", height: "auto", padding: "20px"}}
                variant="woven" cols={8} gap={28}>
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />  
                    </ImageListItem>
                ))}
            </ImageList>
    )
}

export default PhotoList
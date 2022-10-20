import React from 'react'
import { Parallax } from 'react-parallax';
import Image1 from '../media/drum_set.jpg'
import './styles.css'

const ImageOne = () => (
    <Parallax className='image' bgImage={Image1} strength={2800}>
        <div className='content'>
            <span className='img-txt'>Best Lessons for the Best Price</span>
        </div>
    </Parallax>
);

export default ImageOne;
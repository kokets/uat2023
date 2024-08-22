import React from 'react'
import './News.scss';
import FeaturedNews from './FeaturedNews';
import { image1, image2, image3, image4, image5,image6,image7,image8 ,image9,image10,image11,image12,image13,image14} from "./assets/index.jsx";
import {
  Agriculture,
  Education,
  Economic,
  Health,
  Housing,
  Power,
  Social,
  Law,Event1,
} from "../../assets/index";
const News = () => {
    const featuredNews = [
        {
          id: 1,
          image: image1,
          title: 'Title of Featured News 1',
          summary: 'Short summary of the featured news article...',
          link: '/news1'
        },
        {
            id: 1,
            image: image1,
            title: 'Title of Featured News 1',
            summary: 'Short summary of the featured news article...',
            link: '/news1'
          },
        // Add more featured news items
      ];
  return (
    <div className='newsSection'>
      <div>
        <h1>Latest news</h1>
      </div>
      <div className='newsContainer'>
      <div className='newsScroll'>
        <div className='newsCard'>
            <img src={Event1} alt='News Image 1' />
            <h3>Uniting voices, sparking change—this Women's Month, join United Africans Transformation's 'Mother Nature' as we celebrate the strength and resilience of women everywhere.</h3>
            <p>Date 1</p>
        </div>
        <div className='newsCard'>
            <img src={image2} alt='News Image 2' />
            <h3>Uniting voices, sparking change—this Women's Month, join United Africans Transformation's 'Mother Nature' as we celebrate the strength and resilience of women everywhere.</h3>
            <p>Date 2</p>
        </div>
        <div className='newsCard'>
            <img src={image3}  alt='News Image 3' />
            <h3>Title 3</h3>
            <p>Date 3</p>
        </div>
        <div className='newsCard'>
            <img src={image4}  alt='News Image 3' />
            <h3>Uniting voices, sparking change—this Women's Month, join United Africans Transformation's 'Mother Nature' as we celebrate the strength and resilience of women everywhere.</h3>
            <p>Date 3</p>
        </div>
        <div className='newsCard'>
            <img src={image5}  alt='News Image 3' />
            <h3>Uniting voices, sparking change—this Women's Month, join United Africans Transformation's 'Mother Nature' as we celebrate the strength and resilience of women everywhere.</h3>
            <p>Date 3</p>
        </div>
        <div className='newsCard'>
            <img src={image6}  alt='News Image 3' />
            <h3>Title 3</h3>
            <p>Date 3</p>
        </div>
        <div className='newsCard'>
            <img src={image8}  alt='News Image 3' />
            <h3>Title 3</h3>
            <p>Date 3</p>
        </div>
    </div>
      </div>
    </div>
  )
}

export default News

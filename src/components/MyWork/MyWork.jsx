import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mymork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div className='mywork' id="work">
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mymork_data.map((work, index) => {
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
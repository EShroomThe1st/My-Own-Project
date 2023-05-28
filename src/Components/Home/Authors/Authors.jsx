import React from 'react'
import { authors, honorable } from '../../../Share/NavOptions'
import './Authors.css'

const Authors = () => {
  return (
    <div>
      <div className='FullAuthorsList'>
          <h1>Authors</h1>
          <div className='AuthorsItems'>
              {authors.map((option)=>(
                      <div className={option.name} key={option.name}>
                          <img src={option.icon}/>
                          <p>{option.name}</p>
                      </div>
              ))}
          </div>
      </div>
              <div className='FullHonor'>
                <h2>Honorable Mentions</h2>
                <div className='Honorable'>
                  {honorable.map((option)=>(
                              <div className={option.class} key={option.name}>
                                  <img src={option.icon}/>
                                  <p>{option.name}</p>
                                  <p>{option.quote}</p>
                              </div>
                      ))}
                </div>
              </div>
              <div className='SpecialThanks'>
                <h1>Special Thanks</h1>
                <img src="asset/img/CAM.png"/>
                <p>CAM</p>
              </div>
    </div>
  )
}

export default Authors
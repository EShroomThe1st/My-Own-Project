import React from 'react'
import { authors } from '../../Share/NavOptions'
import './Authors.css'

const Authors = () => {
  return (
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
  )
}

export default Authors
import React from 'react'
import './ProjectList.css'
import { useAppSelector } from '../../hooks'

export const ProjectList: React.FC = () => {
  const items = useAppSelector(state => state.projects.filtedItems)
  return (
    <article className='projectList'>
      {items.map((item) => <div className='card' key={item.id}>
        <img className='background' src={item.image} ></img>
        <div className='description'>
        <span className='item-title' >{item.title}</span></div>
        </div>)}
    </article>
  )
}

import React, { useState } from 'react'

import './FilterList.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { filterItems } from 'src/store/projectsSlice'

export const FilterList: React.FC = () => {
  const items = useAppSelector(state => state.projects.categories)
  
  const [id, setId] = useState(0) 
  const dispatch = useAppDispatch()
  const [unFilt, setUnFilt] = useState(true) 
  const filterHandler = (id:number )=> {
    //let chooseID = id1
    //if(chooseID){}
    
    setUnFilt(!unFilt)
    setId(id)
    dispatch(filterItems({id, unFilt}))
  }

  return (
    <div className='filters'>
        {items.map((item) => <button style={item.id !== id || unFilt ? {background:'#313341'}: {background: '#2f40c4'}} key={item.id} onClick={(e) => filterHandler(item.id)}>{item.name}</button>)}
    </div>
  )
}

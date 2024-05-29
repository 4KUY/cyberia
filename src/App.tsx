import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { fetchProjects, fetchProjectsCateg } from './store/projectsSlice'
import { AppBar } from './components/AppBar/AppBar'
import './App.css'
import { HeaderContainter } from './components/HeaderContainer/HeaderContainter'
import { ProjectList } from './components/ProjectList/ProjectList'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer/Footer'
import { FilterList } from './components/Filters/FilterList'
import { BurgerMenu } from './components/AppBar/Menu/BurgerMenu'
const App: React.FC = () => {
  // interface bb {
  //   items: { items: MyData[] }
  // }
  const items = useAppSelector(state => state.projects.items)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    void dispatch(fetchProjects())
    void dispatch(fetchProjectsCateg())
  }, [dispatch])
  return (// <article></article> ul li form footer
    <div className="App Content">
      <AppBar />
        <HeaderContainter/>
        <FilterList/>
        <ProjectList/>
        <ContactForm/>
      <Footer/>
      </div>
  )
}

export default App

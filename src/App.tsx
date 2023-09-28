import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { fetchProjects } from './store/projectsSlice'
import { AppBar } from './components/AppBar/AppBar'
import './App.css'
import { HeaderContainter } from './components/HeaderContainer/HeaderContainter'
import { ProjectList } from './components/ProjectList/ProjectList'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer/Footer'
const App: React.FC = () => {
  // interface bb {
  //   items: { items: MyData[] }
  // }
  const items = useAppSelector(state => state.projects.items)
  const dispatch = useAppDispatch()
  console.log(items.items)
  useEffect(() => {
    void dispatch(fetchProjects())
  }, [dispatch])
  return (
    <>
      <AppBar />
      <div className="App Content">
        <HeaderContainter/>
        <ProjectList/>
        <ContactForm/>
      </div>
      <Footer/>
    </>
  )
}

export default App

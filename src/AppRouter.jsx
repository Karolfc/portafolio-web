import React from 'react'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { AboutUsPage, HomePage, LoginPage, ProjectsPage, PageNotFound, ContacPage, Dashboard, ProjectsEditPage, CreateProjectPage } from './pages'

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/portafolio-web/'
          element={<HomePage />}
        />

        <Route
          path='/portafolio-web/about'
          element={<AboutUsPage />}
        />

        <Route
          path='/portafolio-web/projects'
          element={<ProjectsPage />}
        />

        <Route
          path='/portafolio-web/contact'
          element={<ContacPage />}
        />

        <Route
          path='/portafolio-web/login'
          element={<LoginPage />}
        />

        <Route
          path='/portafolio-web/dashboard'
          element={<Dashboard />}
        />

        <Route
          path='/portafolio-web/edit'
          element={<ProjectsEditPage />}
        />

        <Route
          path='/portafolio-web/create'
          element={<CreateProjectPage />}
        />

        <Route
          path='/portafolio-web/*'
          element={<PageNotFound />}
        />
      </Routes>
    </AuthProvider>
  )
}

export default App

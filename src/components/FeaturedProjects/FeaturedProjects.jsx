import React from 'react'
import './FeaturedProjects.css'
import { Card, Preview, ActionButton } from '../../subcomponentes'

export function FeaturedProjects () {
  const projectData = [
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkTWgAAnw07?format=png&name=360x360',
      previewUrl: 'https://pbs.twimg.com/media/F9nw81CWwAAV_4Z?format=jpg&name=large',
      tittle: 'Ridepal UX/UI Streaming app'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVNkUWEAADiOW?format=png&name=360x360',
      previewUrl: 'https://pbs.twimg.com/media/F9lVNkTX0AAyowN?format=png&name=900x900',
      tittle: 'Cheetos Out Of Home Experience'
    },
    {
      cardUrl: 'https://pbs.twimg.com/media/F9lVPW8WQAA0xdN?format=png&name=360x360',
      previewUrl: 'https://pbs.twimg.com/media/F9lVPWoWoAAsh-R?format=png&name=900x900',
      tittle: 'Nintendo Airport experience'
    }
  ]

  return (
    <section className='FeaturedProjects'>
      <div className='FeaturedTittle flex flex-col font-semibold'>
        <h2 className='SmallTittle text-3xl sm:text-7xl'>Featured</h2>
        <h2 className='BigTittle text-6xl sm:text-9xl'>Projects</h2>
      </div>
      <section className='ProjectsFeatured'>
        {projectData.map((project, index) => (
          <div className='Project' key={index}>
            <Card url={project.cardUrl} className='card' />
            <Preview previewUrl={project.previewUrl} tittle={project.tittle} className='preview' />
          </div>
        ))}
        <div className='ActionButton2'>
          <ActionButton />
        </div>
      </section>
    </section>
  )
}

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Demian Nicolás Caivano - Full Stack Developer Portfolio',
    short_name: 'Demian Portfolio',
    description: 'Professional portfolio of Demian Nicolás Caivano, Full Stack Developer specialized in React, Flask, and PostgreSQL.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  React.useEffect(() => {
    document.title = '404 Not Found | Court Data Fetcher'
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-5xl font-bold text-amber-500 mb-4">404</h1>
      <p className="text-lg text-slate-400 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition">Go Home</Link>
    </div>
  )
}

export default NotFound

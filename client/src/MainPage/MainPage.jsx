import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-orange-500 mb-8">Vite + React + Tailwind CSS</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors mb-4 border-2 border-orange-700"
          >
            Count is {count}
          </button>
          <p className="text-gray-600">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-gray-500 text-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default MainPage 
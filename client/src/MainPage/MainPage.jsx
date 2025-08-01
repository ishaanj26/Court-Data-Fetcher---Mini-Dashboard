import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

function MainPage() {
  const [formData, setFormData] = useState({
    caseType: '',
    caseNumber: '',
    filingYear: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.caseType) {
      newErrors.caseType = 'Please select a case type'
    }
    
    if (!formData.caseNumber) {
      newErrors.caseNumber = 'Case number is required'
    } else if (formData.caseNumber.length < 3) {
      newErrors.caseNumber = 'Case number must be at least 3 characters'
    }
    
    if (!formData.filingYear) {
      newErrors.filingYear = 'Filing year is required'
    } else {
      const year = parseInt(formData.filingYear)
      const currentYear = new Date().getFullYear()
      if (year < 1900 || year > currentYear) {
        newErrors.filingYear = `Year must be between 1900 and ${currentYear}`
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    setMessage({ type: '', text: '' })
    
    try {
      const response = await fetch('http://localhost:8080/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Server error')
      }
      setMessage({
        type: 'success',
        text: 'Case data retrieved successfully!'
      })
      toast.success('Case data retrieved successfully!')
      console.log('Server response:', data)
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to retrieve case data. Please try again.'
      })
      toast.error('Failed to retrieve case data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card with law-themed styling */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-amber-200">
          {/* Header with law-themed icon */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Court Data Fetcher
            </h1>
            <p className="text-slate-600">
              Legal Research & Case Information
            </p>
          </div>

          {/* Success/Error Message */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center">
                <svg className={`w-5 h-5 mr-2 ${
                  message.type === 'success' ? 'text-green-500' : 'text-red-500'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  {message.type === 'success' ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  )}
                </svg>
                {message.text}
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Case Type Dropdown */}
            <div>
              <label htmlFor="caseType" className="block text-sm font-semibold text-slate-700 mb-2">
                Case Type *
              </label>
              <select
                id="caseType"
                name="caseType"
                aria-label="Case Type"
                value={formData.caseType}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white ${
                  errors.caseType ? 'border-red-300' : 'border-slate-300'
                }`}
              >
                <option value="">Select a case type</option>
                <option value="civil">Civil Case</option>
                <option value="criminal">Criminal Case</option>
                <option value="family">Family Law</option>
                <option value="probate">Probate</option>
                <option value="bankruptcy">Bankruptcy</option>
                <option value="traffic">Traffic Violation</option>
                <option value="small-claims">Small Claims</option>
                <option value="juvenile">Juvenile</option>
              </select>
              {errors.caseType && (
                <p className="mt-1 text-sm text-red-600">{errors.caseType}</p>
              )}
            </div>

            {/* Case Number Input */}
            <div>
              <label htmlFor="caseNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                Case Number *
              </label>
              <input
                type="text"
                id="caseNumber"
                name="caseNumber"
                aria-label="Case Number"
                value={formData.caseNumber}
                onChange={handleInputChange}
                placeholder="e.g., 2024-CV-001234"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                  errors.caseNumber ? 'border-red-300' : 'border-slate-300'
                }`}
              />
              {errors.caseNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.caseNumber}</p>
              )}
            </div>

            {/* Filing Year Input */}
            <div>
              <label htmlFor="filingYear" className="block text-sm font-semibold text-slate-700 mb-2">
                Filing Year *
              </label>
              <input
                type="number"
                id="filingYear"
                name="filingYear"
                aria-label="Filing Year"
                value={formData.filingYear}
                onChange={handleInputChange}
                min="1900"
                max={new Date().getFullYear()}
                placeholder="e.g., 2024"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${
                  errors.filingYear ? 'border-red-300' : 'border-slate-300'
                }`}
              />
              {errors.filingYear && (
                <p className="mt-1 text-sm text-red-600">{errors.filingYear}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              aria-label="Search Case Data"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform ${
                isLoading 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 hover:scale-105 focus:ring-4 focus:ring-amber-300'
              } text-white shadow-lg`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </div>
              ) : (
                'Search Case Data'
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 mb-2">
              * Required fields
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                Secure Search
              </span>
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Encrypted
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MainPage 
import React from 'react'
import { motion } from 'framer-motion'

function About() {
  React.useEffect(() => {
    document.title = 'About | Court Data Fetcher';
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 py-8 sm:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-amber-200"
          variants={cardVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
              About Court Data Fetcher
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium">
              Revolutionizing Legal Research
            </p>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.section variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                Our Mission
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Court Data Fetcher is a comprehensive legal research platform designed to streamline 
                the process of accessing court records, case information, and legal documents across 
                multiple jurisdictions. Our mission is to provide legal professionals, researchers, 
                and the public with efficient, accurate, and secure access to legal information.
              </p>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                Key Features
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <motion.div 
                  className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Advanced Search</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Powerful search capabilities across multiple case types and jurisdictions with 
                    intelligent filtering and sorting options.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Secure Access</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Enterprise-grade security with encrypted connections and secure authentication 
                    to protect sensitive legal information.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Multi-Jurisdiction</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Access court records from federal, state, and local jurisdictions with 
                    standardized data formats and comprehensive coverage.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Real-time Updates</h3>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Stay current with real-time case updates, new filings, and status changes 
                    across all integrated court systems.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                Technology
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
                Built with modern web technologies, Court Data Fetcher leverages advanced 
                search algorithms, machine learning, and secure APIs to provide the most 
                comprehensive legal research experience available.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  React
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Node.js
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  PostgreSQL
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Elasticsearch
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  AWS
                </motion.span>
                <motion.span 
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Docker
                </motion.span>
              </div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                Contact
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                For more information about Court Data Fetcher or to discuss integration 
                opportunities, please contact our team at{' '}
                <a href="mailto:support@courtdata.com" className="text-amber-600 hover:text-amber-700 font-medium underline">
                  support@courtdata.com
                </a>
              </p>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About 
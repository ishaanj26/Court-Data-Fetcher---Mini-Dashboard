import React from 'react'
import { motion } from 'framer-motion'
import MainPage from '../MainPage/MainPage'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen"
    >
      <MainPage />
    </motion.div>
  )
}

export default Home 
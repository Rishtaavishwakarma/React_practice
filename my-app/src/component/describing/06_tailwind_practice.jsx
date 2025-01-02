import React from 'react'

function TailwindPractice() {
  return (
    <div className='darkmode'>
        {/* using bg colour */}
      <h1 className='sm:bg-pink-600 md:bg-red-600 lg:bg-blue-600 bg-green-600'>hello</h1>
      <p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  font-bold text-4xl text-transparent bg-clip-text inline-block'>Rishta</p>
      <p className='sm:text-xl md:text-2xl lg:text-3xl transition-all ease shadow-red delay-150'>Is brilliant</p>
      <p></p>
    </div>
  )
}

export default TailwindPractice

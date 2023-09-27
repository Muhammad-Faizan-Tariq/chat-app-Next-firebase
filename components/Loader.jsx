import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
<div className='fixed inset-0 flex justify-center items-center'>
    <Image
        src="/loader.svg"
        alt='Loading...'
        width={100}
        height={100}
    />
</div>
  )
}

export default Loader
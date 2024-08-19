import { PlaceIcon } from '@/icons/Icons'
import React from 'react'

type Props = {
    label?: string
    text?: string  
    search?: () => void
}

const Input = (props: Props) => {

    const label = 'Search' ?? props.label

  return (
    <label className='input input-bordered flex items-center gap-2'>
        <input type="text" className='grow' placeholder={label} />
       <span className='text-2xl'><PlaceIcon/></span>
    </label>
  )
}

export default Input
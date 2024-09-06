import React from 'react'

export default function Main(props) {
  const { nasaData } = props;
  return (
    <img className='nasa-img' src={nasaData?.hdurl} alt={nasaData?.title || 'bg-img'} />
  )
}

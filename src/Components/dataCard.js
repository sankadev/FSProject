import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsDropletFill } from 'react-icons/bs'
import { FaTemperatureHigh, FaHandsWash } from 'react-icons/fa'

function DataCard ({ heartRate, temp, spo, movement }) {
  console.log(heartRate, temp, spo, movement, 'data in card')
  const medicalData = [
    {
      name: 'Heart Rate',
      value: heartRate,
      icon: <AiFillHeart />
    },
    {
      name: 'Temperature',
      value: temp,
      icon: <FaTemperatureHigh />
    },
    {
      name: 'SpO2',
      value: spo,
      icon: <BsDropletFill />
    },
    {
      name: 'Hand Movement',
      value: movement ? 'Yes' : 'No',
      icon: <FaHandsWash />
    }
  ]

  return (
    <div className=' mt-md-3 mx-auto card container py-5 parent-card'>
      <h3 className='text-center text-white mb-3 mb-md-5 fw-bold text-uppercase'>
        Badge meter
      </h3>
      <div className='d-flex flex-wrap justify-content-center align-content-center card-body'>
        {medicalData.map(data => (
          <div key={data.name} className='card shadow data-card m-3 m-md-auto'>
            <div className='card-body pt-3 py-5 '>
              <h5 className='card-title text-center'>{data.name}</h5>
              <div className='d-flex align-items-center justify-content-center h-100'>
                <div className='h3 w-50 mb-0'>
                  {data.name !== 'Hand Movement'
                    ? Math.round(data.value)
                    : data.value}
                  {data.name === 'Temperature' && data.value && '°C'}
                </div>
                <div className='display-4 text-danger'>{data.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataCard

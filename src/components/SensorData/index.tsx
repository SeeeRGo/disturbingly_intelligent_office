import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectRoot } from '../../reducers'

export const SensorData = () => {
  const data = useAppSelector(selectRoot);
  return (
    <ul>
      {data.map(item => <li>{item.id}</li>)}
    </ul>
  )
}

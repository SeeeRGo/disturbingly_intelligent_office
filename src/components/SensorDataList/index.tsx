import React from 'react'
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { useAppSelector } from 'hooks'
import { selectRoot } from 'reducers/index'
import { StoredItems } from 'api/types';
import { CustomTooltip } from '../CustomTooltip';

export const SensorData = () => {
  const data = useAppSelector(selectRoot);
  const adaptData = data.map(el => ({
    ...el,
    name: StoredItems[el.storageType],
    percent: Math.round((100 * el.weight) / el.capacity)
  }))

  return (
    <div className='list'>
      <p className='title'>Vizualization data</p>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart
          data={adaptData}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="green" />
              <stop offset=".6" stopColor="yellow" />
              <stop offset=".8" stopColor="orange" />
              <stop offset="1" stopColor="red" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="name" fontWeight='bold' stroke='none' tick={{ fill: "#E55812" }} tickLine={false} />
          <Tooltip
            content={(data) => {
              const {
                active, payload,
              } = data;
              if (active && payload) {
                const name = payload[0]?.payload.name;
                const partialValue = payload[0]?.payload.weight
                const totalValue = payload[0]?.payload.capacity
                return (
                  <CustomTooltip
                    name={name}
                    total={totalValue}
                    amount={partialValue}
                  />
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="percent"
            fill="url(#colorUv)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

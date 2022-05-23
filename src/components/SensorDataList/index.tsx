import { CustomTooltip } from '../CustomTooltip';
import React from 'react'
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { adaptItem, countPercent } from 'utils';

import { useAppSelector } from 'hooks'
import { selectRoot } from 'reducers/index'
import { StoredItems } from 'api/types';
import { IAdaptItem } from 'types';

export const SensorData = () => {
  const data = useAppSelector(selectRoot);
  const adaptData = data.map(el => [{ ...el, name: StoredItems[el.storageType] }]) as IAdaptItem[][];

  return (
    <div className='list'>
      {adaptData.map(item => {
        const { id, name, partialValue, totalValue } = adaptItem(item)
        return (
          <div key={id} className='list-item'>
            <ResponsiveContainer>
              <BarChart
                data={item}
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
                <YAxis dataKey="capacity" tickFormatter={(tick) => tick} />
                <XAxis dataKey="name" fontWeight='bold' stroke='none' tick={{ fill: "#E55812" }} tickLine={false} />
                <Tooltip
                  content={
                    <CustomTooltip
                      name={name}
                      amount={partialValue}
                      percent={countPercent({ totalValue, partialValue })}
                    />}
                />
                <Bar
                  dataKey="weight"
                  fill="url(#colorUv)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )
      })}
    </div>
  )
}

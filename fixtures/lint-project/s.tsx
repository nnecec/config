import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Button } from 'antd'
import path from 'node:path'

import { Previewer } from '@/ui/markdown'
import { getPost } from '~/services/post.server'
import { Layout, Tag } from '~/ui'

import { SITE_CONFIG } from 'components/constants'

import { searchUp } from './t'

export function App() {
  const [count, setCount] = useState<number>(0)

  const printEvent = e => {
    searchUp(count)
    console.log(e)
  }

  return (
    <div>
      <button onClick={printEvent}>Click me</button>
      <a href="www.baidu.com">baidu</a>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}

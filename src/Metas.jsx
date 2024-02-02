import React from 'react'
import {Helmet} from 'react-helmet'

export default function Metas() {
  return (
    <div>
        <Helmet>
            <meta property='og:title'  content='Rantly' />
            <meta property='og:description'  content='Recieve, Send and share anonymous messages with friends' />
            <meta property='og:url'  content='rantly.vercel.app' />
            <meta property='og:type'  content='website' />

        </Helmet>
    </div>
  )
}

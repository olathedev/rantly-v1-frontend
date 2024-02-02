import React from 'react'
import { Helmet } from 'react-helmet'

export default function Metas() {
    return (
        <div>
            <Helmet>
                <meta property="og:title" content="Rantly" />
                <meta property="og:site_name" content="Rantly" />
                <meta property="og:url" content="https://rantly.vercel.app/" />
                <meta property="og:description" content="create anonymous message links with rantly." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://drive.google.com/file/d/1s1RC4lnWKPTqtELzLYJC2yzQebgxtbcl/view?usp=sharing" />

            </Helmet>
        </div>
    )
}

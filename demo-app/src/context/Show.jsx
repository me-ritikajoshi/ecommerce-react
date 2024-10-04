import React from 'react'
import ComA from './ComA'
import GlobalValueProvider from './GlobalValue'

const Show = () => {
    return (
        <>
            <GlobalValueProvider>
                <ComA />
            </GlobalValueProvider>
        </>
    )
}

export default Show
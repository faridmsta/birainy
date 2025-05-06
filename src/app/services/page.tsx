import React from 'react'


const Page = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const id = searchParams.id || 1
    const tab = searchParams.tab || 1;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Tab: {tab}</p>
        </div>
    )
}

export default Page


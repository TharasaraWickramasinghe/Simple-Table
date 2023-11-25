import React from 'react'
import "../styles/badge.css"

function Badge ({children, color}: {children: React.ReactNode, color: string}) {
    return(
        <div className="badge-style">
            <div className='badge' style={{backgroundColor: color}}>
                {children}
            </div>
        </div>

    )
}

export default Badge
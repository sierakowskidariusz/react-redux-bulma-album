import React from 'react'
import './Spinner.css';

export default function Spinner(): React.ReactElement<HTMLDivElement> {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}

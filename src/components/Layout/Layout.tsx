import React, { FC, ReactNode } from 'react'
import { Header } from '../Header/Header'

interface Props {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

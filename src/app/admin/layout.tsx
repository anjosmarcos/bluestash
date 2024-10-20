import {ReactNode} from 'react'

import {Metadata} from 'next'
export const metadata: Metadata = {
  description: '',
  title: 'Admin',
}

type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return children
}

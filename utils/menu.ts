import { IconType } from 'react-icons'
export type MenuItem = {
    name: string
    slug: string
    icon?: IconType
}
export type Menu = MenuItem[]
export const PrincipalMenu: Menu = [
    {
        name: 'Home',
        slug: '/',
    },
    {
        name: 'Chat',
        slug: '/chat',
    },
]
import React from 'react'
import { TbMapPin, TbMail, TbClock, TbPhone } from 'react-icons/tb'

export interface ContactItem {
    icon: React.ElementType
    label: string;
    link: string;
}
export const contact: ContactItem[] = [
    {
        icon: TbMapPin,
        label: 'Worlwide',
        link: '#'
    },
    {
        icon: TbMail,
        label: 'contacto@joserivas.gt',
        link: 'mailto:contacto@joserivas.gt'
    },
]
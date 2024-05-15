import React from 'react';
import { ContactItem, contact } from '@/utils/contact';
import Link from 'next/link'
import Image from 'next/image'

export const Footer: React.FC = () => {
    const items = contact;
    return (
        <footer className={'w-full bg-bob-dark'}>
            <div className={'relative max-w-5xl mx-auto px-4 py-6 flex flex-row justify-between items-center'}>
                <div className={'col-span-1 md:pt-2'}>
                    <Image
                        className={'w-[65px] h-[30px]'}
                        src={'/assets/brand/friend-bob-white.png'}
                        alt={'FriendBob'}
                        width={65}
                        height={30}
                        quality={100}
                        priority={false}
                    />
                    <p className={'mt-2 text-white text-sm'}>Connect with your friends and family, easily</p>
                </div>
                <div className={'col-span-2 md:col-span-1 md:pt-2'}>
                <p className={'text-white text-sm'}>© 2024 FriendBob.</p>
                </div>
            </div>
        </footer>
    );
}
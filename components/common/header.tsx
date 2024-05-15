'use client'
import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PrincipalMenu } from '@/utils/menu'
import { Dialog } from '@headlessui/react'
import { ManagerContext } from '@/contexts/manage-context'
import { usePathname } from 'next/navigation'
import { TbMenu2, TbShoppingBag, TbSquareXFilled } from "react-icons/tb"

export const HeaderComponent = () => {
    const { isLoading } = useContext(ManagerContext);
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className={'bg-white'}>
            <div className={'mx-auto max-w-5xl flex flex-row justify-between items-center px-4 lg:px-0'}>
                <div className={'logo my-6 flex flex-col'}>
                    <Link href={'/'}>
                        <Image
                            className={'h-[60px] w-[130px]'}
                            src={'/assets/brand/logo-friend-bob.png'}
                            height={60}
                            width={130}
                            alt={'FriendBob'}
                            quality={100}
                            priority={true}
                        />
                    </Link>
                </div>
                <div className={'hidden md:block menu md:!flex !flex-row items-center'}>
                    {PrincipalMenu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.slug}
                            className={`block mx-4 p-3 rounded-lg font-medium text-sm md:text-base ${pathname === item.slug ? 'bg-bob-blue text-white font-bold hover:bg-bob-orange' : 'text-bob-dark hover:text-bob-blue'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <TbMenu2 className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <Image
                                className={'h-[60px] w-[130px]'}
                                src={'/assets/brand/logo-friend-bob.png'}
                                height={60}
                                width={130}
                                alt={'FriendBob'}
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <TbSquareXFilled className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="flex flex-col divide-y divide-bob-dark/20">
                            {PrincipalMenu.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.slug}
                                    className={`p-4 mx-auto w-full text-bob-dark font-medium text-sm md:text-base hover:text-bob-orange ${pathname === item.slug ? 'bg-bob-blue text-white font-bold' : 'text-bob-dark'}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
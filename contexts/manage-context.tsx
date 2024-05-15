'use client'
import React, { createContext } from 'react';
import { useChats } from '@/hooks/use-chat';
import { v4 as uuidv4 } from 'uuid';
//dependencies

interface ManagerContextData {
    isLoading: boolean;
}
export const ManagerContext = createContext<ManagerContextData>({
    isLoading: false,
})
export const ManagerProvider = ({ children }: { children: any }) => {
    const { isLoading } = useChats()
    const contextValue = {
        isLoading,
    }
    return (
        <ManagerContext.Provider value={contextValue}>
            {children}
        </ManagerContext.Provider>
    )
}
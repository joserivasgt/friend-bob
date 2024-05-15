import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// interfaces

interface ChatHookInterface {
    isLoading: boolean;
}
export const useChats = (): ChatHookInterface => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        // const fetchChats = async () => {
        //     try {
        //         setIsLoading(true)
        //         const fetchedChats = await getChats()
        //         setChats(fetchedChats)
        //     } catch (error) {
        //         console.error('Error fetching chats:', error)
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchChats()
    }, [])

    return {
        isLoading,
    };
};
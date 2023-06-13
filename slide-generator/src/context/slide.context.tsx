import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

export interface ContextState {
    slideContextValue: string
    setSlideContextValue: Dispatch<SetStateAction<string>>
}
export const SlideContext = createContext<ContextState>({} as ContextState)
export const SlideProvider = ({ children }: { children: any }) => {
    const [SlideContextValue, setSlideContextValue] = useState<string>('props')
    return <SlideContext.Provider value={{ slideContextValue: SlideContextValue, setSlideContextValue }}>{children}</SlideContext.Provider>
}
export const useSlideContext = () => {
    const context = useContext(SlideContext)
    if (context === undefined) {
        throw new Error('SlideContext must be used within a SlideProvider')
    }
    return context
}
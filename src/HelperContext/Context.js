import { createContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {
    const [brainColor, setBrainColor] = useState('');
    const [feeling, setFeeling] = useState('mood');
    const [textAreaValue, setTextValue] = useState('');



    return (
        <AppContext.Provider value={{ brainColor, setBrainColor, feeling, setFeeling, textAreaValue, setTextValue }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

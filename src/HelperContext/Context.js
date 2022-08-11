import { createContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {
    const [brainColor, setBrainColor] = useState('');
    const [feeling, setFeeling] = useState('mood');
    const [feelingValue, setFeelingValue] = useState();
    const [textAreaValue, setTextValue] = useState('');
    let userValueData = {};
    const [userFeelObj, setUserFeelObj] = useState();


    return (
        <AppContext.Provider value={{ userFeelObj, setUserFeelObj, userValueData, feelingValue, setFeelingValue, brainColor, setBrainColor, feeling, setFeeling, textAreaValue, setTextValue }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

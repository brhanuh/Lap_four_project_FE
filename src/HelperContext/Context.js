import { createContext, useRef, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {
    const [brainColor, setBrainColor] = useState('');
    const [feeling, setFeeling] = useState('mood');
    const [feelingValue, setFeelingValue] = useState();
    const [textAreaValue, setTextValue] = useState('');
    const [class1, setClass] = useState('');
    const [userFeelObj, setUserFeelObj] = useState();
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        energy: 0,
        depression: 0,
        irritability: 0,
        motivation: 0,
        stress: 0,
        appetite: 0,
        concentration: 0,
        diet: '',
        enter: '',
        social: '',
        mood: 0,
    });
    const emojiRef = useRef();




    return (
<<<<<<< HEAD
        <AppContext.Provider value={{ emojiRef, formData, setFormData, show, setShow, userFeelObj, setUserFeelObj, feelingValue, setFeelingValue, brainColor, setBrainColor, feeling, setFeeling, textAreaValue, setTextValue, class1, setClass }}>
=======
        <AppContext.Provider value={{ userFeelObj, setUserFeelObj, feelingValue, setFeelingValue, brainColor, setBrainColor, feeling, setFeeling, textAreaValue, setTextValue, class1, setClass }}>
>>>>>>> 1b676077364a061d1a86bf6bd71f8213922ab702
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;

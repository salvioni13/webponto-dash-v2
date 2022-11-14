import { useCallback, useState } from "react";

function useLocalStorage(key: string, initialValue: any){

    const [state, setState] = useState(()=>{
        try{
            const storedValue = localStorage.getItem(key);

            return storedValue ? JSON.parse(storedValue) : initialValue;
        }catch(e){            
            return initialValue;
        }
    });

    const setValue = useCallback((value: any)=>{
        try{
            setState(value);
            localStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            console.log(e)
        }
    },[key])

    return  [state, setValue];
}

export {useLocalStorage}
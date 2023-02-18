import { useState } from "react";

const useArray = (item) => {
    const [array, setArray] = useState([]);
    setArray(item => [...array, item]);
    return array;
}

export default useArray;
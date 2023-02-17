import { useState } from 'react';

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipState = () => {
        setIsFacingUp(state => !state);
    }
    return [isFacingUp, flipState]
}

export default useFlip;
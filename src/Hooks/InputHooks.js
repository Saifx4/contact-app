import React, { useState } from 'react';

const InputHooks = (val) => {
    const [state,setState] = useState(val)
    const inputField = (e) => {
      setState(e.target.value)
    }

    const Clear = () => {
      setState("")
    }

    return [state,inputField,Clear]
        
    
};

export default InputHooks;
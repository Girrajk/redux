export const increase = () => {
    return {
        type: "Increment",
    };
};

export const decrease = () => {
    return {
        type: "Decrement",
    };
};

export const reset = () => {
    return {
        type: "Reset",
    };
};
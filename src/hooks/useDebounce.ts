import { useState, useEffect } from "react";

type Props = {
    value: any;
    delay: number;
};

const useDebounce = function ({ value, delay }: Props) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(function () {
            return setDebounceValue(value);
        }, delay);

        return function () {
            clearTimeout(handler);
        };
    }, [value]);

    return debounceValue;
};

export default useDebounce;

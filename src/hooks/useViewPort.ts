import { useEffect, useState } from 'react';

export default function() {
    const [height, setHeight] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }, [window.innerHeight, window.innerWidth]);

    return [height, width];
};
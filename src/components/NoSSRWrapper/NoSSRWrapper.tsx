import React, { useEffect, useState } from 'react';

const NoSSRWrapper: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <>{children}</>;
};

export default NoSSRWrapper;

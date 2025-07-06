import { useState, useEffect } from 'react';

interface UseNetworkStatusReturn {
    isOnline: boolean;
    isOffline: boolean;
    connectionType: string | null;
}

export function useNetworkStatus(): UseNetworkStatusReturn {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [connectionType, setConnectionType] = useState<string | null>(null);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        const updateConnectionType = () => {
            if ('connection' in navigator) {
                const connection = (navigator as any).connection;
                if (connection) {
                    setConnectionType(connection.effectiveType || connection.type || 'unknown');
                }
            }
        };

        // Set initial connection type
        updateConnectionType();

        // Add event listeners
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        if ('connection' in navigator) {
            const connection = (navigator as any).connection;
            if (connection) {
                connection.addEventListener('change', updateConnectionType);
            }
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);

            if ('connection' in navigator) {
                const connection = (navigator as any).connection;
                if (connection) {
                    connection.removeEventListener('change', updateConnectionType);
                }
            }
        };
    }, []);

    return {
        isOnline,
        isOffline: !isOnline,
        connectionType,
    };
} 
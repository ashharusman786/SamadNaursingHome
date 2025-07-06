import { useState, useEffect, useRef } from 'react';

interface UseMapLoadingReturn {
    mapError: boolean;
    mapLoading: boolean;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    handleMapLoad: () => void;
    handleMapError: () => void;
    retryMap: () => void;
}

export function useMapLoading(timeoutMs: number = 10000): UseMapLoadingReturn {
    const [mapError, setMapError] = useState(false);
    const [mapLoading, setMapLoading] = useState(true);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        // Set a timeout to detect if the iframe fails to load
        timeoutRef.current = setTimeout(() => {
            if (mapLoading) {
                setMapError(true);
                setMapLoading(false);
            }
        }, timeoutMs);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [mapLoading, timeoutMs]);

    const handleMapLoad = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setMapLoading(false);
        setMapError(false);
    };

    const handleMapError = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setMapError(true);
        setMapLoading(false);
    };

    const retryMap = () => {
        setMapError(false);
        setMapLoading(true);

        // Force iframe reload
        if (iframeRef.current) {
            const currentSrc = iframeRef.current.src;
            iframeRef.current.src = '';
            setTimeout(() => {
                if (iframeRef.current) {
                    iframeRef.current.src = currentSrc;
                }
            }, 100);
        }
    };

    return {
        mapError,
        mapLoading,
        iframeRef,
        handleMapLoad,
        handleMapError,
        retryMap,
    };
} 
import { useEffect, useRef } from 'react';

interface UsePageReloadOptions {
    onReload?: () => void;
    onBeforeUnload?: () => void;
}

export function usePageReload(options: UsePageReloadOptions = {}) {
    const { onReload, onBeforeUnload } = options;
    const isReloading = useRef(false);

    useEffect(() => {
        const handleBeforeUnload = () => {
            isReloading.current = true;
            onBeforeUnload?.();
        };

        const handleLoad = () => {
            // Check if this is a page reload (not initial load)
            if (performance.navigation.type === 1) {
                onReload?.();
            }
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && isReloading.current) {
                isReloading.current = false;
                onReload?.();
            }
        };

        // Listen for page reload events
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Check if this is a reload on mount
        if (performance.navigation.type === 1) {
            onReload?.();
        }

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [onReload, onBeforeUnload]);

    return {
        isReloading: isReloading.current
    };
} 
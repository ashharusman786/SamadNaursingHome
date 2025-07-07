import { useNetworkStatus } from "@/hooks/use-network-status";
import { WifiOff, Wifi, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function NetworkStatusIndicator() {
  const { isOnline, isOffline } = useNetworkStatus();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (isOffline) {
      setShowIndicator(true);
    } else {
      // Hide indicator after a short delay when coming back online
      const timer = setTimeout(() => {
        setShowIndicator(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, isOffline]);

  const handleRetry = () => {
    window.location.reload();
  };

  if (!showIndicator) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="glassmorphism rounded-xl p-3 border border-red-200 bg-red-50 shadow-lg">
        <div className="flex items-center gap-3">
          {isOffline ? (
            <>
              <WifiOff className="w-5 h-5 text-red-600" />
              <div className="text-sm">
                <p className="font-medium text-red-700">You're offline</p>
                <p className="text-red-600 text-xs">No internet connection. Please check your network.</p>
              </div>
            </>
          ) : (
            <>
              <Wifi className="w-5 h-5 text-green-600" />
              <div className="text-sm">
                <p className="font-medium text-green-700">Back online</p>
                <p className="text-green-600 text-xs">Connection restored</p>
              </div>
            </>
          )}
          {isOffline && (
            <Button
              onClick={handleRetry}
              size="sm"
              variant="outline"
              className="ml-2"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNetworkStatus } from '@/hooks/use-network-status';
import {
  MapPin,
  ExternalLink,
  RefreshCw,
  Loader2,
  AlertCircle,
  WifiOff,
  Navigation,
} from 'lucide-react';

interface MapWithFallbackProps {
  embedUrl: string;
  fallbackUrl: string;
  directionsUrl: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  className?: string;
}

export default function MapWithFallback({
  embedUrl,
  fallbackUrl,
  directionsUrl,
  location,
  className = "",
}: MapWithFallbackProps) {
  const { isOnline, isOffline } = useNetworkStatus();
  const [mapState, setMapState] = useState<'loading' | 'loaded' | 'error' | 'timeout'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<number | undefined>();

  const maxRetries = 3;
  const timeoutMs = 8000;

  useEffect(() => {
    if (isOffline) {
      setMapState('error');
      return;
    }

    setMapState('loading');
    
    // Set timeout for map loading
    timeoutRef.current = setTimeout(() => {
      if (mapState === 'loading') {
        setMapState('timeout');
      }
    }, timeoutMs) as unknown as number;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOffline, retryCount]);

  const handleMapLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMapState('loaded');
  };

  const handleMapError = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMapState('error');
  };

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      setMapState('loading');
      
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
    }
  };

  const getErrorMessage = () => {
    if (isOffline) {
      return "You are currently offline. Please check your internet connection and try again.";
    }
    if (retryCount >= maxRetries) {
      return "Unable to load map after multiple attempts. Please try again later.";
    }
    return "Unable to load interactive map due to network issues.";
  };

  const getFallbackLinks = () => [
    {
      label: "Open in Google Maps",
      href: fallbackUrl,
      icon: <ExternalLink className="w-4 h-4" />
    },
    {
      label: "Get Directions",
      href: directionsUrl,
      icon: <MapPin className="w-4 h-4" />
    }
  ];

  return (
    <>
      {/* Custom Offline Popup */}
      {isOffline && (mapState === 'error' || mapState === 'timeout') && (
        <div>
          {/* Desktop/Tablet: Centered */}
          <div className="hidden md:fixed md:inset-0 md:flex md:items-center md:justify-center md:z-50">
            <div className="glassmorphism border-2 border-red-500 bg-white shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center max-w-md w-full font-sans">
              <WifiOff className="w-10 h-10 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-red-700 mb-2">No Internet Connection</h3>
              <p className="text-gray-700 mb-4 text-center">You are offline. Please check your connection and reload the map.</p>
              <Button
                onClick={handleRetry}
                variant="outline"
                className="border-red-500 text-red-700 hover:bg-red-50 font-semibold"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry Map
              </Button>
            </div>
          </div>
          {/* Mobile: Top of screen */}
          <div className="md:hidden fixed top-0 left-0 w-full flex justify-center z-50 px-2">
            <div className="glassmorphism border-2 border-red-500 bg-white shadow-2xl rounded-b-2xl px-4 py-3 flex flex-col items-center w-full max-w-sm font-sans mt-2">
              <WifiOff className="w-8 h-8 text-red-500 mb-2" />
              <h3 className="text-base font-bold text-red-700 mb-1">No Internet Connection</h3>
              <p className="text-gray-700 mb-2 text-center text-sm">You are offline. Please check your connection and reload the map.</p>
              <Button
                onClick={handleRetry}
                variant="outline"
                className="border-red-500 text-red-700 hover:bg-red-50 font-semibold w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry Map
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Main Map Card */}
    <Card className={`glassmorphism rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm ${className}`}>
      <div className="relative h-96">
        {/* Loading State */}
        {mapState === 'loading' && (
          <div className="w-full h-full bg-gray-100 rounded-t-3xl flex flex-col items-center justify-center p-6">
            <div className="text-center">
              <Loader2 className="w-8 h-8 text-teal-600 mx-auto mb-4 animate-spin" />
              <p className="text-gray-600 text-sm">Loading map...</p>
              {retryCount > 0 && (
                <p className="text-gray-500 text-xs mt-2">Retry attempt {retryCount}/{maxRetries}</p>
              )}
            </div>
          </div>
        )}

        {/* Map iframe */}
        {mapState !== 'error' && mapState !== 'timeout' && (
          <iframe 
            ref={iframeRef}
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: mapState === 'loading' ? 'none' : 'block' }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-t-3xl"
            onLoad={handleMapLoad}
            onError={handleMapError}
          />
        )}

        {/* Error State */}
        {(mapState === 'error' || mapState === 'timeout') && (
          <div className="w-full h-full bg-gray-100 rounded-t-3xl flex flex-col items-center justify-center p-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {isOffline ? (
                  <WifiOff className="w-12 h-12 text-red-500" />
                ) : (
                  <AlertCircle className="w-12 h-12 text-orange-500" />
                )}
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {isOffline ? "You're Offline" : "Map Unavailable"}
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                {getErrorMessage()}
              </p>
              <div className="space-y-3">
                {isOnline && retryCount < maxRetries && (
                  <Button
                    onClick={handleRetry}
                    variant="outline"
                    className="w-full fallback-btn"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>Retry Map</span>
                  </Button>
                )}
                {getFallbackLinks().map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="w-full fallback-btn"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Map overlay */}
        <div className="absolute top-4 left-4 glassmorphism rounded-xl p-3 border border-white/20">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Navigation className="w-4 h-4 text-teal-600" />
            <span>{mapState === 'loaded' ? "Live Location" : "Location"}</span>
          </div>
        </div>

        {/* Network status indicator */}
        {isOffline && (
          <div className="absolute top-4 right-4 glassmorphism rounded-xl p-2 border border-red-200 bg-red-50">
            <div className="flex items-center gap-1 text-xs text-red-600">
              <WifiOff className="w-3 h-3" />
              <span>Offline</span>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-8">
        <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-teal-600" />
          Hospital Address
        </h4>
        <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">
          {location.address}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </Button>
          {(mapState === 'error' || mapState === 'timeout') && isOnline && (
            <Button
              asChild
              variant="outline"
              className="px-6 py-3 rounded-2xl font-semibold transition-all duration-300 fallback-btn"
            >
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
    </>
  );
} 
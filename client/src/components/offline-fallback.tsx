import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WifiOff, RefreshCw, ExternalLink } from "lucide-react";

interface OfflineFallbackProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
  showExternalLinks?: boolean;
  externalLinks?: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

export default function OfflineFallback({
  title = "You're Offline",
  message = "Please check your internet connection and try again.",
  showRetry = true,
  onRetry,
  showExternalLinks = false,
  externalLinks = [],
  className = "",
}: OfflineFallbackProps) {
  return (
    <Card className={`glassmorphism rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm ${className}`}>
      <CardContent className="p-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <WifiOff className="w-12 h-12 text-red-500" />
          </div>
          <h4 className="text-lg font-semibold text-gray-700 mb-2">{title}</h4>
          <p className="text-gray-600 mb-6 text-sm">{message}</p>
          
          <div className="space-y-3">
            {showRetry && onRetry && (
              <Button
                onClick={onRetry}
                variant="outline"
                className="w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                <span>Retry</span>
              </Button>
            )}
            
            {showExternalLinks && externalLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {link.icon || <ExternalLink className="w-4 h-4" />}
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
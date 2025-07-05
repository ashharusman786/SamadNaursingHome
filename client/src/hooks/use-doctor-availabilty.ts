import { useState, useEffect } from 'react';

interface DoctorAvailability {
  isAvailable: boolean;
  currentShift: 'morning' | 'evening' | 'closed' | null;
  nextAvailable: string;
  statusText: string;
}

export function useDoctorAvailability(
  morningHours: string,
  eveningHours: string,
  days: string[]
): DoctorAvailability {
  const [availability, setAvailability] = useState<DoctorAvailability>({
    isAvailable: false,
    currentShift: null,
    nextAvailable: '',
    statusText: ''
  });

  useEffect(() => {
    const checkAvailability = () => {
      const now = new Date();
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes

      // Check if today is a working day
      const isWorkingDay = days.includes(currentDay);

      if (!isWorkingDay) {
        setAvailability({
          isAvailable: false,
          currentShift: 'closed',
          nextAvailable: `Next available: ${days[0]} ${morningHours}`,
          statusText: 'Closed Today'
        });
        return;
      }

      // Parse morning hours (e.g., "9:00 AM - 03:00 PM")
      const morningMatch = morningHours.match(/(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/);
      const eveningMatch = eveningHours.match(/(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/);

      if (!morningMatch || !eveningMatch) {
        setAvailability({
          isAvailable: false,
          currentShift: 'closed',
          nextAvailable: 'Schedule unavailable',
          statusText: 'Schedule Error'
        });
        return;
      }

      // Convert to 24-hour format
      const convertToMinutes = (hour: number, minute: number, period: string): number => {
        let h = hour;
        if (period === 'PM' && hour !== 12) h += 12;
        if (period === 'AM' && hour === 12) h = 0;
        return h * 60 + minute;
      };

      const morningStart = convertToMinutes(
        parseInt(morningMatch[1]),
        parseInt(morningMatch[2]),
        morningMatch[3]
      );
      const morningEnd = convertToMinutes(
        parseInt(morningMatch[4]),
        parseInt(morningMatch[5]),
        morningMatch[6]
      );

      const eveningStart = convertToMinutes(
        parseInt(eveningMatch[1]),
        parseInt(eveningMatch[2]),
        eveningMatch[3]
      );
      const eveningEnd = convertToMinutes(
        parseInt(eveningMatch[4]),
        parseInt(eveningMatch[5]),
        eveningMatch[6]
      );

      // Check current availability
      let isAvailable = false;
      let currentShift: 'morning' | 'evening' | 'closed' | null = null;
      let nextAvailable = '';

      if (currentTime >= morningStart && currentTime <= morningEnd) {
        isAvailable = true;
        currentShift = 'morning';
        nextAvailable = `Evening shift: ${eveningHours}`;
      } else if (currentTime >= eveningStart && currentTime <= eveningEnd) {
        isAvailable = true;
        currentShift = 'evening';
        nextAvailable = `Tomorrow morning: ${morningHours}`;
      } else if (currentTime < morningStart) {
        isAvailable = false;
        currentShift = 'closed';
        nextAvailable = `Morning shift starts: ${morningHours}`;
      } else if (currentTime > morningEnd && currentTime < eveningStart) {
        isAvailable = false;
        currentShift = 'closed';
        nextAvailable = `Evening shift starts: ${eveningHours}`;
      } else {
        isAvailable = false;
        currentShift = 'closed';
        nextAvailable = `Tomorrow: ${morningHours}`;
      }

      const statusText = isAvailable
        ? `${currentShift === 'morning' ? 'Morning' : 'Evening'} Shift - Available Now`
        : 'Currently Closed';

      setAvailability({
        isAvailable,
        currentShift,
        nextAvailable,
        statusText
      });
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [morningHours, eveningHours, days]);

  return availability;
}
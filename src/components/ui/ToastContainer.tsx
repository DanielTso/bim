'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast from './Toast';
import type { Toast as ToastType, ToastType as Type, ToastPosition } from '@/types/components';

interface ToastContextType {
  toasts: ToastType[];
  addToast: (message: string, type: Type, duration?: number, action?: ToastType['action']) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
}

export function ToastProvider({ children, position = 'top-right', maxToasts = 5 }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback(
    (message: string, type: Type, duration?: number, action?: ToastType['action']) => {
      const id = Math.random().toString(36).substring(7);
      const newToast: ToastType = { id, message, type, duration, action };

      setToasts((prev) => {
        const updated = [newToast, ...prev];
        return updated.slice(0, maxToasts);
      });
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className={`fixed z-50 flex flex-col gap-2 ${positionStyles[position]}`}>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

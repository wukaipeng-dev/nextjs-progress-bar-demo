'use client';

import { ProgressProvider } from '@bprogress/next/app';

interface ProgressWrapperProps {
  children: React.ReactNode;
}

export function ProgressWrapper({ children }: ProgressWrapperProps) {
  return (
    <ProgressProvider
      height="4px"
      color="#0000ff"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
} 
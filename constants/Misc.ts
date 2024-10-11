import { MutationStatus } from '@tanstack/react-query';

export const Misc = {
  // app/(tabs)/index.tsx
  headerBgColor: {
    light: '#A1CEDC',
    dark: '#1D3D47',
  },
  headerImageUri: 'https://assets.semboja.tech/screenshots/cclarity.png',
  pendingStatus: 'pending' as MutationStatus,
  eventListener: 'change' as const,
  // components/ParallaxScrollView.tsx
  theme: {
    light: 'light' as const,
    dark: 'dark' as const,
  },
  icon: {
    dark: 'dark-mode',
    light: 'light-mode',
  },
  // components/MainContentArea/MagicWriteButton.tsx
  magicWriteIcon: {
    name: 'color-wand',
    type: 'ionicon',
    size: 15,
    color: 'white',
  }
};

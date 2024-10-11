import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Platform, StyleSheet, View } from 'react-native';

import AIResponse from '@/components/MainContentArea/AIResponse';
import ErrorDialog from '@/components/MainContentArea/ErrorDialog';
import Greeter from '@/components/MainContentArea/Greeter';
import LoaderDialog from '@/components/MainContentArea/LoaderDialog';
import MagicWriteButton from '@/components/MainContentArea/MagicWriteButton';
import { FIRST, SECOND_A, SECOND_B, THIRD } from '@/components/MainContentArea/PromptButtons';
import UserInput from '@/components/MainContentArea/UserInput';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Misc } from '@/constants/Misc';
import { md, sm, xs } from '@/services/utils';
import { IDimensions, useStore } from '@/store/useStore';
import { Image } from '@rneui/themed';
import { useMutationState } from '@tanstack/react-query';

export default function HomeScreen() {
  const dimensions = useStore((state) => state.dimensions);
  const error = useStore((state) => state.error);
  const setDimensions = useStore((state) => state.setDimensions);

  const getPromptButton = (window: { width: number; }) => (sm(window) && !md(window) || xs(window)) ? SECOND_B : SECOND_A;
  const [promptButtons, setPromptButtons] = useState<any[]>([...FIRST, getPromptButton(dimensions.window), ...THIRD]);
  const [isLoading] = useMutationState({
    filters: { status: Misc.pendingStatus },
    select: (mutation) => mutation.state.status,
  });

  useEffect(() => {
    const dimensionsChanged = ({ window, screen } : IDimensions) => {
      setDimensions({ window, screen });
      setPromptButtons([ ...FIRST, getPromptButton(window), ...THIRD]);
    }

    const subscription = Dimensions.addEventListener(Misc.eventListener, dimensionsChanged);
    return () => { if (subscription) subscription?.remove() };
  }, [promptButtons, setDimensions]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={Misc.headerBgColor}
      headerImage={
        <Image
          source={{ uri: Misc.headerImageUri }}
          PlaceholderContent={<ActivityIndicator />}
          containerStyle={styles.logo}
        />
      }>
      <ThemedView style={styles.container}>
        <Greeter />
        <View style={styles.centered}>
          <UserInput promptButtons={promptButtons} />
          <MagicWriteButton />
          <AIResponse />
        </View>

        {!isLoading && <ErrorDialog error={error} />}
        {!error && <LoaderDialog isVisible={!!isLoading} />}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: Platform.OS === 'android' ? 120 : 100,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
  }
});

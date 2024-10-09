import { useState } from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useStore } from '@/store/useStore';
import { mockAIService } from '@/services/mockAI';
import { Button, Text } from 'react-native-elements';
import TextInput from '@/components/TextInput';
import PromptButton from '@/components/PromptButton';
import AIResponse from '@/components/AIResponse';

export default function HomeScreen() {
  const inputText = useStore((state) => state.inputText);
  const setAIResponse = useStore((state) => state.setAIResponse);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (inputText.trim() === '') return;
    setLoading(true);
    const response = await mockAIService();
    setAIResponse(response);
    setLoading(false);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type='defaultSemiBold'>
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type='defaultSemiBold'>app</ThemedText> directory. This will move the current{' '}
          <ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
          <ThemedText type='defaultSemiBold'>app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <View style={styles.container}>
        <Text style={styles.header}>What do you want to write today?</Text>
        <View style={styles.buttonContainer}>
          {['Prompt 1', 'Prompt 2', 'Prompt 3', 'Prompt 4', 'Prompt 5', 'Prompt 6'].map((prompt) => (
            <PromptButton key={prompt} prompt={prompt} />
          ))}
        </View>
        <TextInput />
        <Button
          title={loading ? 'Loading...' : 'Write with AI'}
          onPress={handleSubmit}
          disabled={inputText.trim() === ''}
          containerStyle={{ marginTop: 10 }}
          buttonStyle={{
            backgroundColor: '#007BFF',
            borderRadius: 5,
          }}
        />
        <AIResponse />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

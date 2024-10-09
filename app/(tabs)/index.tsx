import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useStore } from '@/store/useStore';
import { mockAIService } from '@/services/mockAI';
import { Button, Text } from 'react-native-elements';
import TextInput from '@/components/TextInput';
import PromptButton from '@/components/PromptButton';
import AIResponse from '@/components/AIResponse';
import { Dialog } from '@rneui/themed';

export default function HomeScreen() {
  const inputText = useStore((state) => state.inputText);
  const setAIResponse = useStore((state) => state.setAIResponse);

  const [loading, setLoading] = useState<boolean>(false);

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
          source={require('@/assets/images/cclarity.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <Text style={styles.header}>What do you want to write today?</Text>
        <View style={styles.buttonContainer}>
          {[
            {
              icon: 'favorite',
              title: 'My personal story',
              content: "Let me share a personal journey that has shaped who I am today. It's a story about growth, challenges, and the valuable lessons learned along the way."
            },
            {
              icon: 'compare-arrows',
              title: 'My contrarian view',
              content: "Most people believe X, but I see things differently. Here's why my perspective challenges the conventional wisdom on this topic."
            },
            {
              icon: 'track-changes',
              title: 'Challenge / solution',
              content: "I faced a significant roadblock when trying to achieve my goals. Here's the strategy I used to overcome it, and how it led to success."
            },
            {
              icon: 'lightbulb-outline',
              title: 'A valuable insight',
              content: "Through careful observation and analysis, I've gained an important insight that I believe can make a big difference. Here's what I discovered and why it matters."
            },
            {
              icon: 'check-box',
              title: 'What I did and learnt',
              content: "This project pushed me to expand my skills. Here's what I accomplished, and the key lessons I learned in the process."
            },
            {
              icon: 'campaign',
              title: 'Promote an offer',
              content: "I'm excited to share this exclusive offer with you! It's a limited-time opportunity that provides incredible value and benefits."
            }
          ].map((prompt, i) => (
            <PromptButton key={`${i}-${prompt.title}`} prompt={prompt} />
          ))}
        </View>
        <TextInput />
        <Button
          title={'Magic write'}
          onPress={handleSubmit}
          disabled={inputText.trim() === ''}
          containerStyle={{ marginTop: 10, borderRadius: 13 }}
          buttonStyle={{
            backgroundColor: '#3b3b3b',
            borderRadius: 5,
            padding: 10
          }}
          icon={{
            name: 'color-wand',
            type: 'ionicon',
            size: 15,
            color: 'white',
          }}
        />
        <AIResponse />
      </ThemedView>
      <Dialog isVisible={loading} overlayStyle={styles.dialog}>
        <Dialog.Loading />
      </Dialog>
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
    width: 420,
    height: 178,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  dialog: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

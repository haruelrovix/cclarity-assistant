import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={100} name='code-slash' style={styles.headerImage} />}>
      <ThemedView style={styles.container}>
        <ThemedText>A simplified version of the CClarity writing assistant interface, focusing on core functionality and clean implementation.</ThemedText>
        <ThemedView style={styles.wrapper}>
          <Collapsible title='User Interface ✔️'>
            <ThemedText>
              - "What do you want to write today?" heading ✅{'\n'}
              - All 6 writing prompt buttons ✅{'\n'}
              - Text input field with placeholder text ✅{'\n'}
              - "Write with AI" button ✅
            </ThemedText>
          </Collapsible>
          <Collapsible title='Functionality ✔️'>
            <ThemedText>
              - Clicking a writing prompt button should update the input field's placeholder text ✅{'\n'}
              - The "Write with AI" button should be disabled when the input field is empty ✅{'\n'}
              - Clicking "Write with AI" should request an API call to an AI service ✅
            </ThemedText>
          </Collapsible>
          <Collapsible title='AI Integration ✔️'>
            <ThemedText>
              - Integration with an AI service that returns a Response based on a Prompt ✅{'\n'}
              - Implement a basic loading state while waiting for the AI response ✅{'\n'}
              - Display the AI-generated content below the input field ✅
            </ThemedText>
          </Collapsible>
          <Collapsible title='Responsive Design ✔️'>
            <ThemedText>
              - The interface is responsive for desktop and mobile views ✅
            </ThemedText>
          </Collapsible>
          <Collapsible title='Tech Stacks'>
            <ThemedText>
              - <ThemedText type={'defaultSemiBold'}>Expo: 🌐📱✨{'\n'}</ThemedText>Create universal native apps with React that run on Android, iOS, and the web{'\n'}
              - <ThemedText type={'defaultSemiBold'}>React Native Elements: ⚛️📦📲{'\n'}</ThemedText>A React Native framework for making cross platform applications{'\n'}
              - <ThemedText type={'defaultSemiBold'}>TanStack Query: 🚀🔄📡{'\n'}</ThemedText>A powerful data-fetching library designed for managing server state in front-end applications{'\n'}
              - <ThemedText type={'defaultSemiBold'}>Zustand: 🐻⚡📊{'\n'}</ThemedText>A small, fast, and scalable bearbones state management solution
            </ThemedText>
          </Collapsible>
        </ThemedView>
        <ThemedText>
          by: Havit (surat@havit.web.id)
        </ThemedText>
        <ExternalLink href='mailto:surat@havit.web.id'>
          <ThemedText type='link'>Send Email</ThemedText>
        </ExternalLink>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    width: 350,
    height: Platform.OS === 'android' ? 120 : 100,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'flex-start',
    margin: 10,
  }
});

import PromptButtons, { PromptButtonsProps } from '@/components/MainContentArea/PromptButtons';
import TextInput from '@/components/MainContentArea/TextInput';
import { StyleSheet, View } from 'react-native';

export default function UserInput({ promptButtons }: PromptButtonsProps) {
  return (
    <View style={styles.container}>
      <PromptButtons promptButtons={promptButtons} />
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
});

import { useStore } from '@/store/useStore';
import { Text } from '@rneui/themed';
import { Platform, StyleSheet, View } from 'react-native';

export default function CharCounter() {
  const inputText = useStore((state) => state.inputText);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>({inputText.length})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: Platform.OS === 'web' ? 20 : 10,
    left: 20,
    position: 'absolute',
  },
  text: {
    fontSize: 10,
  },
});

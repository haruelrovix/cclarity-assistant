import { Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

export default function Greeter() {
  return (
    <View style={styles.centered}>
    <Text h4 style={styles.header}>What do you want to write today?</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});

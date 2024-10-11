import CharCounter from '@/components/MainContentArea/CharCounter';
import { useStore } from '@/store/useStore';
import { Input } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

export default function TextInput() {
  const inputText = useStore((state) => state.inputText);
  const setInputText = useStore((state) => state.setInputText);

  return (
    <View>
      <Input
        value={inputText}
        onChangeText={setInputText}
        placeholder="CClarity is a great tool to streamline workflow for Ghost Writers and Agencies to manage their customers' LinkedIn profile! Now writers can manage multiple LinkedIn accounts in one tool with ease!"
        containerStyle={styles.containerStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        multiline
      />
      <CharCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    borderColor: '#86939E',
    borderRadius: 20,
    borderWidth: 1,
    color: '#86939E',
    height: 200,
    padding: 10,
    fontSize: 15,
  }
});

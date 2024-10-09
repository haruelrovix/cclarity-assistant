import { useStore } from '@/store/useStore';
import React from 'react';
import { Input } from 'react-native-elements';

const TextInput: React.FC = () => {
  const inputText = useStore((state) => state.inputText);
  const setInputText = useStore((state) => state.setInputText);

  return (
    <Input
      value={inputText}
      onChangeText={setInputText}
      placeholder="CClarity is a great tool to streamline workflow for Ghost Writers and Agencies to manage their customers' LinkedIn profile! Now writers can manage multiple LinkedIn accounts in one tool with ease!"
      containerStyle={{ marginVertical: 10, maxWidth: 910 }}
      inputStyle={{ height: 200, borderWidth: 1, borderColor: '#86939E', padding: 10, borderRadius: 20, color: '#86939E'  }}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      multiline
    />
  );
};

export default TextInput;

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
      placeholder='What do you want to write today?'
      containerStyle={{ margin: 10 }}
      inputStyle={{ height: 40 }}
    />
  );
};

export default TextInput;

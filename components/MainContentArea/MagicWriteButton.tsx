import { generateContent } from '@/services/generateContent';
import { lg, md, sm } from '@/services/utils';
import { useStore } from '@/store/useStore';
import { Button } from '@rneui/themed';
import { useMutation } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';

export default function MagicWriteButton() {
  const dimensions = useStore((state) => state.dimensions);
  const inputText = useStore((state) => state.inputText);
  const setAIResponse = useStore((state) => state.setAIResponse);
  const setError = useStore((state) => state.setError);

  const mutation = useMutation<void, Error, string>({
    mutationFn: generateContent,
    onSuccess: (data) => {
      const anyData = data as any;

      if (!anyData.isError) {
        setAIResponse((new Date()).toISOString(), data as any);
      } else {
        setError(anyData);
      }
    },
  });

  const handleSubmit = async () => {
    if (inputText.trim() === '') return;

    mutation.mutate(inputText);
  };

  const width = lg(dimensions.window) ? 880 : md(dimensions.window) ? 730 : sm(dimensions.window) ? 480 : 380 ;
  const alignItems = md(dimensions.window) ? 'flex-end' : 'stretch' ;

  return (
    <View style={{ width, alignItems }}>
      <Button
        title={'Magic write'}
        onPress={handleSubmit}
        disabled={inputText.trim() === ''}
        buttonStyle={styles.buttonStyle}
        icon={{
          name: 'color-wand',
          type: 'ionicon',
          size: 15,
          color: 'white',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   borderWidth: 1,
  //   borderColor: 'green',
  // },
  buttonContainer: {
    marginBottom: 0,
    borderRadius: 13,
  },
  buttonStyle: {
    backgroundColor: '#3b3b3b',
    borderRadius: 7,
  }
});

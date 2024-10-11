import { useStore } from '@/store/useStore';
import { Dialog, Text } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type Props = {
  error: any;
}

export default function ErrorDialog({ error }: Props) {
  const setError = useStore((state) => state.setError);
  const toggleErrorDialog = () => setError(null);

  return (
    <Dialog
      isVisible={error !== null}
      onBackdropPress={toggleErrorDialog}
      overlayStyle={styles.dialog}
    >
      <Dialog.Title title={`${(error as any)?.error} (${(error as any)?.statusCode}) 🚨`} />
      <Text>{(error as any)?.message}</Text>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialog: {
    maxWidth: 400,
  },
});

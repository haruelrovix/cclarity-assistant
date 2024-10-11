import { Dialog } from '@rneui/themed';
import { StyleSheet } from 'react-native';

type Props = {
  isVisible: boolean;
}

export default function LoaderDialog({ isVisible }: Props) {
  return (
    <Dialog isVisible={isVisible} overlayStyle={styles.dialog}>
      <Dialog.Loading />
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

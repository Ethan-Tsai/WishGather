import { useState } from 'react';
import Dialog from "react-native-dialog";

export function useAlertDialog(){ 
    const [showDialog, setShowDialog] = useState(false);
    const [dialogProps, setDialogProps] = useState({
        title: '',
        description: ''
    });

    const showAlertDialog = (title, description) => {
        setDialogProps({ title, description });
        setShowDialog(true);
    };

    const hideAlertDialog = () => {
        setShowDialog(false);
    };

    const renderAlertDialog = () => (
        <Dialog.Container visible={showDialog}>
            <Dialog.Title>{dialogProps.title}</Dialog.Title>
            <Dialog.Description>
                {dialogProps.description}
            </Dialog.Description>
            <Dialog.Button label="Ok" onPress={hideAlertDialog} />
        </Dialog.Container>
    );

    return {
        showAlertDialog,
        hideAlertDialog,
        renderAlertDialog,
    };

}


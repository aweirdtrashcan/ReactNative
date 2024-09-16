import React, {useCallback} from "react";
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const OpenURL = ({url, children}) => {
    const handlePress = useCallback(async() => {
        const isSupported = Linking.canOpenURL(url);

        if (isSupported) {
            Linking.openURL(url);
        }
    });

    return <Button title={children} onPress={OpenURL} />;
}

export default OpenURL;
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BButtonType {
    callback: any;
    title: string;
}

function BButton({ callback, title }: BButtonType): JSX.Element {
    return (
        <TouchableOpacity style={styles.container} onPress={callback}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#00cdbd',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Jost-Bold',
    },
});

export default BButton;

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import BColors from '../../utilities/colors';

interface BSocialLoginType {
    title: string;
}

function BSocialLogin({ title }: BSocialLoginType) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Continue with {title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: BColors.grey,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: BColors.grey_10,
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Jost-Regular',
    },
});

export default BSocialLogin;

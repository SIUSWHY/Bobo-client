import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/Button';

function Onboarding() {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <Text style={styles.title}>Welcome to Bobo, a great friend to chat with you</Text>
            <Text>stepper</Text>
            <CustomButton title={'Next'} callback={console.log('aaa')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    img: {
        flex: 3,
    },
    title: {
        fontSize: 25,
    },
});

export default Onboarding;

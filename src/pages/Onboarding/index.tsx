import { StyleSheet, Text, View } from 'react-native';
import BButton from '../../components/Button';
import { useState } from 'react';

function Onboarding() {
    const [step, setStep] = useState<number>(0);

    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <Text style={styles.title}>Welcome to Bobo, a great friend to chat with you</Text>
            <View style={styles.stepperContainer}>
                <Text>...</Text>
            </View>
            <BButton title={'Next'} callback={() => setStep(step + 1)} />
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
    stepperContainer: {
        marginVertical: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 48,
        fontFamily: 'Jost-Bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
});

export default Onboarding;

import { StyleSheet, View } from 'react-native';
import BColors from '../../utilities/colors';

interface BStepperType {
    count: number;
    currentStep: number;
}

function BStepper({ count, currentStep }: BStepperType) {
    const rangeSteps: number[] = [...Array(count).keys()];

    return (
        <View style={styles.wrapper}>
            {rangeSteps.map(step => (
                <View key={step} style={[{ width: currentStep === step ? 25 : 7 }, styles.step]}></View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    step: {
        height: 7,
        backgroundColor: BColors.primary,
        borderRadius: 5,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5,
    },
});

export default BStepper;

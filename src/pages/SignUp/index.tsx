import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../components/Layout';
import BInput from '../../components/BInput';
import BCheckbox from '../../components/BCheckbox';
import { useState } from 'react';

function SignUp() {
    const [isRemember, setRemember] = useState(false);

    return (
        <Layout>
            <Text style={styles.title}>Create your Account</Text>
            <View style={styles.inputWrapper}>
                <BInput placeholder="Email"></BInput>
                <BInput placeholder="Password" isPassword={true}></BInput>
            </View>
            <View>
                <BCheckbox
                    isChecked={isRemember}
                    onPress={() => setRemember(!isRemember)}
                    title="Remember me"
                ></BCheckbox>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 50,
        fontFamily: 'Jost-Bold',
    },
    inputWrapper: {
        flex: 1,
        rowGap: 20,
    },
});

export default SignUp;

import { StyleSheet, Text, View } from 'react-native';
import BSocialLogin from '../../components/BSocialLogin';
import BButton from '../../components/Button';
import Layout from '../../components/Layout';
import BSeparator from '../../components/BSeparator';

function LetsIn({ navigation }) {
    return (
        <Layout>
            <View style={styles.img}></View>
            <Text style={styles.title}>Let's you in</Text>
            <View style={styles.btnContainer}>
                <BSocialLogin title="Facebook"></BSocialLogin>
                <BSocialLogin title="Google"></BSocialLogin>
                <BSocialLogin title="Apple"></BSocialLogin>
            </View>
            <BSeparator text="or"></BSeparator>
            <View style={{ flex: 1 }}>
                <BButton title="Sign in with password" callback={() => navigation.navigate('SignUp')}></BButton>
            </View>
            <Text style={styles.signUp}>
                Don't have an account?
                <Text> Sign Up</Text>
            </Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    signUp: {
        textAlign: 'center',
    },
    btnContainer: {
        flex: 1,
        marginVertical: 20,
        rowGap: 15,
    },
    img: {
        flex: 3,
    },
    title: {
        fontSize: 48,
        fontFamily: 'Jost-Bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
});

export default LetsIn;

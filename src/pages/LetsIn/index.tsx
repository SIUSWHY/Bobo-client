import { StyleSheet, Text, View } from 'react-native';
import BSocialLogin from '../../components/BSocialLogin';
import BButton from '../../components/Button';
import Layout from '../../components/Layout';
import BColors from '../../utilities/colors';

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
            <View style={styles.orSection}>
                <View style={styles.separator}></View>
                <Text style={styles.orText}>or</Text>
                <View style={styles.separator}></View>
            </View>
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
    orSection: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        flex: 1,
    },
    orText: {
        marginHorizontal: 10,
        fontFamily: 'Jost-Bold',
        fontSize: 20,
    },
    separator: {
        borderColor: BColors.grey_10,
        borderBottomWidth: 1,
        flex: 1,
        width: '50%',
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

import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import LogoProvider from '../components/icon-helper/logo-provider';
import LoginFormComponent from '../components/login-component/login-form';
import SignupForm from '../components/login-component/signup-form';
// import {Account} from '../Cognito/Accounts';

const LandingScreen = () => {
  const [hasNoAccount, setHasNoAccount] = useState(true);
  const [bool, setBool] = useState(false);

  function setHasNoAccountAsPropFromComponent() {
    setHasNoAccount(true);
  }
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*If user DOESN'T have account OR first time starting application, show login-component*/}
      {hasNoAccount ? (
        <>
          <LogoProvider />
          <LoginFormComponent />
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => setHasNoAccount(false)}>
            <Text category="s2">Inget konto?</Text>
          </TouchableOpacity>
        </>
      ) : (
        // If user press Create Account setHasAccount to false to show SignupForm
        <>
          <LogoProvider />
          <SignupForm
            dataSetHasNoAccountOnLandingScreen={
              setHasNoAccountAsPropFromComponent
            }
          />
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => setHasNoAccount(true)}>
            <Text category="s2">Logga in</Text>
          </TouchableOpacity>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputEmail: {
    width: '80%',
    marginTop: '30%',
  },
  bypass: {
    marginTop: '10%',
  },
  inputPassword: {
    width: '80%',
    marginTop: 20,
  },
  loginButton: {
    marginTop: '20%',
  },
});

export default LandingScreen;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useLogin} from '@services/hooks/useLogin';
import {useSecureData} from '@utils/hooks/useSecureData';
import {RootStackParamList} from '@utils/routeTypes';
import {loginTouchable, loginTouchableLabel, textInput} from '@utils/styles';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login: FunctionComponent<Props> = ({navigation}) => {
  const {setSecureValue} = useSecureData();

  const scheme = useColorScheme();
  const {loginMutation} = useLogin();
  const [showPassword] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, toggleDisable] = useState(true);

  const handleLogin = async () => {
    const response = await loginMutation.mutateAsync({
      userLoginText: username,
      password,
    });
    console.log(response);
    if (response.data.access_token) {
      await setSecureValue('access_token', response.data.access_token);

      navigation.navigate('AllCollections');
    }
  };

  useEffect(() => {
    if (username && password) {
      toggleDisable(false);
    } else {
      toggleDisable(true);
    }
  }, [username, password]);

  if (loginMutation.isLoading) {
    return <ActivityIndicator />;
  }

  if (loginMutation.error) {
    return (
      <View>
        <Text style={{fontSize: 40}}>A error ocurred</Text>
        <Text>{JSON.stringify(loginMutation.error)}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: textInput(scheme),
    loginTouchable: loginTouchable(scheme),
    loginTouchableLabel: loginTouchableLabel(scheme),
  });

  return (
    <View>
      <Text>Welcome to My Creative Collection</Text>
      <TextInput
        textContentType="nickname"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'gray'}
        keyboardType="default"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <View>
        <TextInput
          secureTextEntry={showPassword}
          textContentType="password"
          placeholderTextColor={'gray'}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginTouchable}
        onPress={handleLogin}
        disabled={isDisable}>
        <Text style={styles.loginTouchableLabel}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

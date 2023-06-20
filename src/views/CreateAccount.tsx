import {loginTouchable, loginTouchableLabel, textInput} from '@utils/styles';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword] = useState(true);

  return (
    <SafeAreaView>
      <Text>Create account</Text>
      <TextInput
        textContentType="name"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'gray'}
        keyboardType="default"
        value={name}
        onChangeText={text => setName(text)}
      />

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

      <TextInput
        textContentType="emailAddress"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'gray'}
        keyboardType="default"
        value={email}
        onChangeText={text => setEmail(text)}
      />

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
      <TouchableOpacity style={styles.loginTouchable}>
        <Text style={styles.loginTouchableLabel}>Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: textInput,
  loginTouchable: loginTouchable,
  loginTouchableLabel: loginTouchableLabel,
});

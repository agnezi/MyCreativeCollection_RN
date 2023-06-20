import * as SecureStore from 'expo-secure-store';
import {useState} from 'react';

export const useSecureData = () => {
  const [dataFromSecureStore, setDataFromSecureStore] = useState<string>('');

  const getValueFor = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setDataFromSecureStore(result);
    } else {
      console.error('No values stored under that key.');
    }
  };

  const setSecureValue = async (key: string, data: any) => {
    await SecureStore.setItemAsync(key, data);
  };

  return {getValueFor, setSecureValue, dataFromSecureStore};
};

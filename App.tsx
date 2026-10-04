import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-950'>
      <Text className='text-2xl font-semibold text-slate-100'>
        Sentinel
      </Text>
      <Text className='mt-2 text-sm text-slate-400'>
        M1 — dev build ready
      </Text>
      <StatusBar style='light' />
    </View>
  );
}
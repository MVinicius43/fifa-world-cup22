import { NativeBaseProvider, Box } from 'native-base'
import { Routes } from './routes';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
    </NativeBaseProvider>
  );
}

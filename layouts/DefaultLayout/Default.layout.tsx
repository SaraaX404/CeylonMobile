import {Box} from 'native-base';
import {ReactNode} from 'react';
import {NavigationBar} from '../../components';

type props = {
  children: ReactNode;
};

export default ({children}: props) => {
  return (
    <Box flex={1}>
      <Box flex={10}>{children}</Box>
      <Box flex={1} backgroundColor={'#ffffff'}>
        <NavigationBar />
      </Box>
    </Box>
  );
};

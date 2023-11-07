import {Box, Button, IconButton, Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {faThLarge} from '@fortawesome/free-solid-svg-icons/faThLarge';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {useNavigation} from '@react-navigation/native';

export default () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const {navigate} = useNavigation<Nav>();

  const handleBellPress = () => {
    console.log('notify');
  };

  const handleMarketPress = () => {
    navigate('Marketplace');
  };

  const handleSettingsPress = () => {
    navigate('Settings');
  };
  return (
    <Box mt="3%" backgroundColor={'white'} zIndex={1000} height={66} flex={1}>
      <Box
        flex={1}
        mx={'11%'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        <Box
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}>
          <IconButton
            icon={<FontAwesomeIcon icon={faBell} color="#3B3569" />}
            onPress={handleBellPress}
          />

          <Text fontSize={'10px'} color="#3B3569">
            Notifications
          </Text>
        </Box>
        <Box
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}>
          <IconButton
            icon={<FontAwesomeIcon icon={faThLarge} color="#3B3569" />}
            onPress={handleMarketPress}
          />

          <Text fontSize={'10px'} color="#3B3569">
            Dashboard
          </Text>
        </Box>
        <Box
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}>
          <IconButton
            icon={<FontAwesomeIcon icon={faGear} color="#3B3569" />}
            onPress={handleSettingsPress}
          />

          <Text fontSize={'10px'} color="#3B3569">
            Settings
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

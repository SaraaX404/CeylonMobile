import {Avatar, Box, ChevronRightIcon, IconButton, Text} from 'native-base';
import {DefaultLayout} from '../../layouts';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  type Nav = {
    navigate: (value: string) => void;
  };

  const {navigate} = useNavigation<Nav>();

  const profileNavigate = () => {
    navigate('Profile');
  };

  const logout = () => {
    navigate('Login');
  };

  const policyNavigate = () => {
    navigate('Policies');
  };

  return (
    <DefaultLayout>
      <Box style={{flex: 1, backgroundColor: '#f5f5fa'}}>
        <Box style={{flex: 1}}>
          <Text
            fontSize="30px"
            ml="6%"
            mt="8%"
            fontWeight={500}
            color={'#000000'}>
            Settings
          </Text>
        </Box>

        <Box style={{flex: 6}}>
          <Box
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: '12%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              ml={'4%'}
              bg="green.500"
              source={require('../../assets/sample_profile.png')}>
              AJ
            </Avatar>
            <Box flexDirection={'column'}>
              <Text
                fontSize={'20px'}
                ml={'2%'}
                fontWeight={500}
                color={'#4E4B66'}>
                Tim Cook
              </Text>
              <Text
                fontSize={'16px'}
                ml={'2%'}
                fontWeight={400}
                color={'#4E4B66'}>
                Apple ID,iCloud & app store
              </Text>
            </Box>
            <IconButton
                 ml={'auto'}
                 mr={'4%'}
                 mt={'6%'}
                 mb={'4%'}
                
                onPress={profileNavigate}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'}/>}
              />
          </Box>
          <Box
            backgroundColor={'#FFFFFF'}
            height={'100%'}
            mt={'6%'}
            flexDirection={'column'}>
            <Box
              flexDirection={'row'}
              height={'10%'}
              ml={'6%'}
              borderBottomWidth={1}
              borderBottomColor={'rgba(78, 75, 102, 0.24)'}>
              <Text
                mt={'6%'}
                fontSize={'16px'}
                fontWeight={400}
                color="#4E4B66">
                Your Profile
              </Text>
              <IconButton
                ml={'auto'}
                mr={'4%'}
                mt={'6%'}
                mb={'2%'}
                onPress={profileNavigate}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'} />}
              />
            </Box>
            <Box
              flexDirection={'row'}
              height={'10%'}
              ml={'6%'}
              borderBottomWidth={1}
              borderBottomColor={'rgba(78, 75, 102, 0.24)'}>
              <Text
                mt={'6%'}
                fontSize={'16px'}
                fontWeight={400}
                color="#4E4B66">
                Policies
              </Text>
              <IconButton
                ml={'auto'}
                mr={'4%'}
                mt={'6%'}
                mb={'2%'}
                onPress={policyNavigate}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'} />}
              />
            </Box>
            <Box
              flexDirection={'row'}
              height={'10%'}
              ml={'6%'}
              borderBottomWidth={1}
              borderBottomColor={'rgba(78, 75, 102, 0.24)'}>
              <Text
                mt={'6%'}
                fontSize={'16px'}
                fontWeight={400}
                color="#4E4B66">
                Statements & Documents
              </Text>
              <IconButton
                ml={'auto'}
                mr={'4%'}
                mt={'6%'}
                mb={'2%'}
                onPress={profileNavigate}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'} />}
              />
            </Box>
            <Box
              flexDirection={'row'}
              height={'10%'}
              ml={'6%'}
              borderBottomWidth={1}
              justifyContent={'center'}
              borderBottomColor={'rgba(78, 75, 102, 0.24)'}>
              <Text
                mt={'6%'}
                fontSize={'16px'}
                fontWeight={400}
                color="#4E4B66">
                Notifications
              </Text>
              <IconButton
                ml={'auto'}
                mr={'4%'}
                mt={'6%'}
                mb={'2%'}
                onPress={profileNavigate}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'}  />}
              />
            </Box>
            <Box
              flexDirection={'row'}
              height={'10%'}
              ml={'6%'}
              borderBottomWidth={1}
              borderBottomColor={'rgba(78, 75, 102, 0.24)'}>
              <Text
                mt={'6%'}
                fontSize={'16px'}
                fontWeight={400}
                color="#4E4B66">
                Logout
              </Text>
              <IconButton
                ml={'auto'}
                mr={'4%'}
                mt={'6%'}
                mb={'2%'}
                onPress={logout}
                icon={<ChevronRightIcon  color={'rgba(78, 75, 102, 1)'}  />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default App;

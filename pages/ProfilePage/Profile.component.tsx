import {
  Avatar,
  Box,
  ChevronRightIcon,
  IconButton,
  Text,
  Button,
  ChevronLeftIcon,
} from 'native-base';
import {DefaultLayout} from '../../layouts';
import { useNavigation } from '@react-navigation/native';

const App = () => {



  type Nav = {
    navigate: (value: string) => void;
  };

  const {navigate} = useNavigation<Nav>();

  const settingsNavigate = () => {
    navigate('Settings');
  };




  return (
    <DefaultLayout>
      <Box style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      
      <Box style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} backgroundColor="#f5f5fa">
      <IconButton
      onPress={settingsNavigate}
        icon={<ChevronLeftIcon color={'rgba(78, 75, 102, 1)'} />}
      />
      <Text
        fontSize="20px"
        fontWeight={500}
        color={'#000000'}
        flex={1}
        mr={'10%'}
        textAlign="center"
      >
        Profile
      </Text>
    </Box>
        <Box flex={6}>
          <Box
            flex={2}
            backgroundColor={'#FFFFFF'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Avatar
              bg="green.500"
              width={82}
              height={82}
              source={require('../../assets/sample_profile.png')}>
              AJ
            </Avatar>
            <Text fontSize={'20px'} fontWeight={700} color="#4E4B66">
              Tim Cook
            </Text>
            <Text fontSize={'16px'} fontWeight={400} color="#4E4B66" mt={'-2%'}>
              timcook@.co
            </Text>
            <Button
              endIcon={<ChevronRightIcon />}
              backgroundColor={'#3627DE'}
              mt={'4%'}
              borderRadius={'8px'}
              width={192}
              height={42}>
              <Text fontSize={'16px'} fontWeight={500} color={'#FFFFFF'}>
                Edit Profile
              </Text>
            </Button>
          </Box>
          <Box flex={3}>
            <Box flex={1}>
              <Box backgroundColor="#f5f5fa" flex={1}>
                <Box flex={1} justifyContent={'center'} ml={'4%'}>
                  <Text fontSize={'16px'} fontWeight={400} color={'#000000'}>
                    Your Profile
                  </Text>
                </Box>
              </Box>

              <Box flex={3} backgroundColor={'#FFFFFF'} flexDirection={'row'}>
                <Box
                  flex={1}
                  flexDirection={'column'}
                  justifyContent={'space-evenly'}>
                  <Text
                    fontWeight={400}
                    color={'#9797B6'}
                    fontSize={'16px'}
                    ml={'10%'}>
                    Legal Name
                  </Text>
                  <Text
                    fontWeight={400}
                    color={'#9797B6'}
                    fontSize={'16px'}
                    ml={'10%'}>
                    Email
                  </Text>
                  <Text
                    fontWeight={400}
                    color={'#9797B6'}
                    fontSize={'16px'}
                    ml={'10%'}>
                    Phone Number
                  </Text>
                </Box>
                <Box
                  flex={2}
                  flexDirection={'column'}
                  justifyContent={'space-evenly'}>
                  <Text
                    borderBottomWidth={1}
                    borderBottomColor={'rgba(78, 75, 102, 0.24)'}
                    ml={4}
                    color={'#4E4B66'}
                    fontWeight={400}
                    fontSize={'16px'}>
                    Tim Cook
                  </Text>
                  <Text
                    borderBottomWidth={1}
                    borderBottomColor={'rgba(78, 75, 102, 0.24)'}
                    ml={4}
                    color={'#4E4B66'}
                    fontWeight={400}
                    fontSize={'16px'}>
                    timcook@.co
                  </Text>
                  <Text
                    borderBottomWidth={1}
                    borderBottomColor={'rgba(78, 75, 102, 0.24)'}
                    ml={4}
                    color={'#4E4B66'}
                    fontWeight={400}
                    fontSize={'16px'}>
                    +97 11 345 6783
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flex={1}>
              <Box backgroundColor="#f5f5fa" flex={1}>
                <Box flex={1} justifyContent={'center'} ml={'4%'}>
                  <Text fontSize={'16px'} fontWeight={400} color={'#000000'}>
                    Bank Account information
                  </Text>
                </Box>
              </Box>
              <Box flex={3} backgroundColor={'#FFFFFF'} flexDirection={'row'}>
                <Box flex={1} flexDirection={'column'}>
                  <Text
                    fontWeight={400}
                    color={'#9797B6'}
                    fontSize={'16px'}
                    ml={'10%'}
                    mt={'20%'}>
                    Wells Fargo
                  </Text>
                </Box>
                <Box
                  flex={2}
                  flexDirection={'column'}
                  justifyContent={'space-evenly'}>
                  <Text
                    borderBottomWidth={1}
                    borderBottomColor={'rgba(78, 75, 102, 0.24)'}
                    ml={4}
                    color={'#4E4B66'}
                    fontWeight={400}
                    fontSize={'16px'}>
                    Routing #: ...9182
                  </Text>
                  <Text
                    borderBottomWidth={1}
                    borderBottomColor={'rgba(78, 75, 102, 0.24)'}
                    ml={4}
                    color={'#4E4B66'}
                    fontWeight={400}
                    fontSize={'16px'}>
                    Account #: ...0016
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default App;

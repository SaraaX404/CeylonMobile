import {faBuilding} from '@fortawesome/free-solid-svg-icons/faBuilding';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {faSwimmingPool} from '@fortawesome/free-solid-svg-icons/faSwimmingPool';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  AspectRatio,
  Box,
  Button,
  Image,
  Progress,
  Stack,
  Text,
  ScrollView,
} from 'native-base';

export default () => {
  return (
    <ScrollView flex={1}>
      <Box flex={1}>
        <AspectRatio w="100%" ratio={16 / 9} flex={1.4}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>

        <Box flex={3} mt={'4%'}>
          <Box flexDirection="column" flex={1}>
            <Text
              fontWeight={500}
              fontSize={'30px'}
              color={'rgba(0, 0, 0, 1)'}
              mx={'4%'}>
              Cozy Claremont Flip
            </Text>
            <Box
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              mx={'4%'}>
                <FontAwesomeIcon icon={faBuilding} color={'rgba(235, 115, 115, 1)'} />
              <Text
                fontSize={'16px'}
                color={'rgba(78, 75, 102, 1)'}
                fontWeight={400}>
                
                Appartment complex
              </Text>
              <Text
                fontSize={'16px'}
                color={'rgba(78, 75, 102, 1)'}
                fontWeight={400}>
                •
              </Text>
              <Text
                fontSize={'16px'}
                color={'rgba(54, 39, 222, 1)'}
                fontWeight={400}>
                Long term investment
              </Text>
            </Box>

            <Box
              backgroundColor={'#ffffff'}
              width={'92%'}
              borderRadius={'18px'}
              mt={'4%'}
              mx={'4%'}>
              <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text
                  fontSize={'20px'}
                  fontWeight={500}
                  color={'rgba(16, 16, 20, 1)'}
                  ml={'4%'}
                  mt={'2%'}>
                  Opportunity details
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}
                  color={'rgba(13, 138, 70, 1)'}
                  mr={'4%'}
                  mt={'4%'}>
                  Pre-funding
                </Text>
              </Box>
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                mx={'4%'}
                mt={'4%'}>
                <Box flexDirection={'column'}>
                  <Text
                    fontSize={'13px'}
                    fontWeight={400}
                    color={'rgba(78, 75, 102, 1)'}>
                    Total Funding required
                  </Text>
                  <Text
                    fontSize={'20px'}
                    color={'rgba(0, 0, 0, 1)'}
                    fontWeight={400}>
                    $560,000
                  </Text>
                </Box>
                <Box flexDirection={'column'}>
                  <Text
                    fontSize={'13px'}
                    fontWeight={400}
                    color={'rgba(78, 75, 102, 1)'}>
                    Remaining amount
                  </Text>
                  <Text
                    fontSize={'20px'}
                    color={'rgba(0, 0, 0, 1)'}
                    fontWeight={400}>
                    $205,000
                  </Text>
                </Box>
              </Box>
              <Progress
                value={65}
                backgroundColor={'rgba(171, 171, 241, 0.3);'}
                colorScheme={'rgba(35, 24, 153, 1)'}
                mx={'4%'}
                mt={'2%'}
              />
              <Box
                flexDirection={'row'}
                mx={'4%'}
                mt={'6%'}
                justifyContent={'space-between'}>
                <Box flexDirection={'column'}>
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    color={'rgba(78, 75, 102, 1)'}>
                    Projected ROI
                  </Text>
                  <Text
                    fontSize={'20px'}
                    fontWeight={400}
                    color={'rgba(0, 0, 0, 1)'}>
                    9-12%
                  </Text>
                </Box>
                <Button
                  backgroundColor={'rgba(54, 39, 222, 1)'}
                  w="135px"
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={'8px'}
                  h="40px">
                  <Text fontSize={'16px'} color={'#FFFFFF'}>
                    Invest
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box
              backgroundColor={'#ffffff'}
              width={'100%'}
              height={'100%'}
              borderRadius={'18px'}
              mt={'4%'}>
              <Box mb={'2%'}>
                <Text
                  fontSize={'20px'}
                  color={'rgba(0, 0, 0, 1)'}
                  fontWeight={400}
                  ml={'4%'}
                  mt={'5%'}>
                  Property Details
                </Text>
                <Box
                  flexDirection={'row'}
                  mx={'4%'}
                  mt={'3%'}
                  alignItems={'center'}
                  justifyContent={'space-between'}>
                  <Text
                    fontSize={'16px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon icon={faCalendar} color={'rgba(78, 75, 102, 1)'} /> Built in 2013
                  </Text>
                  <Text
                    fontSize={'16px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon icon={faBuilding} color={'rgba(78, 75, 102, 1)'} /> 2015 Units
                  </Text>
                  <Text
                    fontSize={'16px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon icon={faSwimmingPool} color={'rgba(78, 75, 102, 1)'} /> Includes Pool
                  </Text>
                </Box>
              </Box>
              <Box
                borderTopWidth={1}
                borderTopColor={'rgba(221, 221, 221, 1)'}
                mx={'4%'}
                mb={'2%'}>
                <Text
                  fontSize={'20px'}
                  color={'rgba(0, 0, 0, 1)'}
                  fontWeight={400}
                  mt={'5%'}>
                  Additional Details
                </Text>
                <Text
                  fontSize={'16px'}
                  mt={'3%'}
                  textAlign={'justify'}
                  color={'rgba(78, 75, 102, 1)'}
                  fontWeight={400}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </Text>
              </Box>
              <Box mx={'4%'} borderTopWidth={1}
                borderTopColor={'rgba(221, 221, 221, 1)'}>
                <Text
                  fontSize={'20px'}
                  color={'rgba(0, 0, 0, 1)'}
                  fontWeight={400}
                  mt={'5%'}>
                  Map
                </Text>
                <Box
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  mt={'3%'}>
                  <Text
                    fontSize={'15px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={'rgba(229, 70, 70, 1)'}
                    />{' '}
                    San Antonio, TX
                  </Text>
                  <Text
                    fontSize={'15px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    13900 Mitten Blue Rd, 78717
                  </Text>
                </Box>
                <Button
                  mt={'10%'}
                  w={'218px'}
                  backgroundColor={'#ffffff'}
                  borderWidth={1}
                  borderColor={'rgba(35, 24, 153, 0.18)'}
                  borderRadius={'6px'}
                  h={'45px'}>
                  <Box
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color={'rgba(35, 24, 153, 1)'}
                    />
                    <Text
                      ml={'5%'}
                      fontSize={'16px'}
                      color={'rgba(35, 24, 153, 1)'}
                      fontWeight={400}>
                      Open in Maps
                    </Text>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

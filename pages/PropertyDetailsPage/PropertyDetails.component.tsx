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
  Text,
  ScrollView,
} from 'native-base';
import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default () => {
  return (
    <ScrollView flex={1}>
      <Box flex={1}>
        <AspectRatio w="100%" ratio={16 / 9} flex={1.4}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.4e77eba2912d796e25d5c824f5a8c415?rik=Fa3dl%2fIdhuzA5A&riu=http%3a%2f%2fwww.presentpush.com%2fwp-content%2fuploads%2f2012%2f03%2fame_gem.jpg&ehk=O3kpJOyKzLrfaLAXWBE0Vd7k1L5rxBJFSuKysWmaqr0%3d&risl=&pid=ImgRaw&r=0',
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
              Golden Ruby
            </Text>
        

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
                  Bid details
                </Text>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}
                  color={'rgba(13, 138, 70, 1)'}
                  mr={'4%'}
                  mt={'4%'}>
                  Open to Bid
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
                    Starts from
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
                    Hightest Bid
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
                <Button
                  backgroundColor={'rgba(54, 39, 222, 1)'}
                  w="135px"
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={'8px'}
                  h="40px">
                  <Text fontSize={'16px'} color={'#FFFFFF'}>
                    Bid
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
                  Stone Details
                </Text>
                <Box
                  flexDirection={'row'}
                  mx={'4%'}
                  mt={'3%'}
                  alignItems={'center'}
                  justifyContent={'flex-start'}>
                  <Text
                    fontSize={'16px'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon icon={faLocationDot} color={'rgba(78, 75, 102, 1)'} /> Country : Sri Lanka
                  </Text>
                  <Text
                    fontSize={'16px'}
                    ml={'5%'}
                    color={'rgba(78, 75, 102, 1)'}
                    fontWeight={400}>
                    <FontAwesomeIcon icon={faStar} color={'rgba(78, 75, 102, 1)'} /> Seller Raiting : 4.7
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
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

import {Box, Text} from 'native-base';
import {ScrollView} from 'react-native';
import {DefaultLayout} from '../../layouts';

import {PropertyCard, InvestedCard} from '../../components';
import {useEffect, useState} from 'react';
import React from 'react';
import {useQuery} from 'react-query';
import {GetAllPostsResponse} from '../../models/ProductModels';
import {GetPosts} from '../../services/ProductsService';
import GridView from '../../components/GridView/GridView.component';
import {GetBidsResponse} from '../../models/BidsModel';
import {getBidsBySeller} from '../../services/BidsService';
import {useUserContext} from '../../context';

const App = () => {
  const [selectedTab, setSelectedTab] = useState<'mp' | 'yi'>('mp');
  const [posts, setPosts] = useState<GetAllPostsResponse[]>([]);
  const UserCTX = useUserContext();

  const {data} = useQuery<GetAllPostsResponse[]>('posts', () => GetPosts());

  const {data: bidData, refetch} = useQuery<GetBidsResponse[], Error>(
    'Bids',
    () => getBidsBySeller(),
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const selectTabMP = () => {
    setSelectedTab('mp');
  };

  const selectTabYI = () => {
    setSelectedTab('yi');
  };

  return (
    <DefaultLayout>
      <ScrollView>
        <Box style={{flex: 1, backgroundColor: '#f5f5fa'}}>
          <Box style={{flex: 1}}>
            <Text
              fontSize="30px"
              ml="6%"
              mt="8%"
              mb={'3%'}
              fontWeight={500}
              color={'#000000'}>
              Welcome, {UserCTX.user?.username}!
            </Text>
          </Box>
          <Box flex={6}>
            <Box flex={3} backgroundColor="#FFFFFF">
              <Box
                flex={3}
                flexDirection={'column'}
                justifyContent={'center'}
                mt={'4%'}
                mb={'2%'}
                ml={'6%'}>
                <Text fontSize={'16px'}>Total Bids</Text>
                <Box flexDirection={'row'} alignItems={'flex-end'}>
                  <Text fontSize={'25px'} fontWeight={400}>
                    25
                  </Text>
                </Box>
              </Box>
              <Box
                flex={5}
                borderTopWidth={'1px'}
                mb={'2%'}
                borderTopColor={'rgba(78, 75, 102, 0.24)'}
                mx={'2%'}>
                <Box flex={1} flexDirection={'row'} ml={'4%'} mt={'4%'}>
                  <Box flexDirection={'column'} mr={'auto'}>
                    <Text fontWeight={400} fontSize={'14px'}>
                      Total Sells
                    </Text>
                    <Text fontSize={'25px'} fontWeight={400}>
                      08
                    </Text>
                  </Box>
                  <Box flexDirection={'column'} ml={'auto'} mr={'3%'}>
                    <Text fontWeight={400} fontSize={'14px'}>
                      Customer Feedbacks
                    </Text>
                    <Text fontSize={'25px'} fontWeight={400}>
                      05
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box flex={4} mt={'2%'} backgroundColor="#FFFFFF">
              <Box flex={1}>
                <Box
                  mx={'6%'}
                  flexDirection={'row'}
                  flex={1}
                  justifyContent={'space-between'}
                  mt={'3%'}
                  borderBottomColor={'rgba(217, 219, 233, 1)'}>
                  <Box
                    width={150}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text
                      onPress={selectTabMP}
                      color={
                        selectedTab == 'mp'
                          ? 'rgba(54, 39, 222, 1);'
                          : 'rgba(0, 0, 0, 1)'
                      }
                      fontWeight={500}
                      pb={'3%'}
                      fontSize={'20px'}>
                      Market Place
                    </Text>
                  </Box>
                  <Box
                    width={150}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text
                      onPress={selectTabYI}
                      color={
                        selectedTab == 'yi'
                          ? 'rgba(54, 39, 222, 1);'
                          : 'rgba(0, 0, 0, 1)'
                      }
                      fontWeight={500}
                      pb={'3%'}
                      fontSize={'20px'}>
                      Your Bids
                    </Text>
                  </Box>
                </Box>
                <Box mx={'6%'}>
                  {selectedTab == 'mp' ? (
                    <Box>
                      {posts.map((x, i) => (
                        <PropertyCard
                          key={i}
                          id={x._id}
                          name={x.name}
                          photo={x.photos[0].photo}
                          highestBid={x.highestPrice}
                          price={x.start_price}
                        />
                      ))}
                    </Box>
                  ) : (
                    <GridView
                      col={2}
                      data={bidData || []}
                      renderItem={(x: GetBidsResponse) => (
                        <InvestedCard
                          highestBid={x?.postID?.highestPrice}
                          name={x?.postID?.name}
                          photo={x?.postID?.photos[0]?.photo}
                          price={x?.price}
                          key={x?._id}
                        />
                      )}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </DefaultLayout>
  );
};

export default App;

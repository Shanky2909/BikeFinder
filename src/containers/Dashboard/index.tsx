import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { BikeApiParams } from '../../../public/interfaces';
import GlobalHeader from '../../components/GlobalHeader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Cards from '../../components/Cards';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../components/Pagination';
import './style.css';

const Dashboard: React.FC = () => {
  const [bikeData, setBikeData] = useState<Array<Object>>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [totalStolenCount, setTotalStolenCount] = useState<number>(0);
  const [searchQuery,setSearchQuery] = useState<string>('');
  const _data = usePagination(bikeData, 10);

  // Handleing Page Change
  const handleChange = (e: any, p: number) => {
    setPageNumber(p);
    _data.jump(p);
  };

  //Handleing Search
  const handleSearch = (value:string)=>{
    setSearchQuery(value);
  }

  //Getting Bike Data from API
  React.useEffect(() => {
    async function getBikeData(apiParams: BikeApiParams) {
      setLoading(true);
      axios({
        method: 'get',
        url: `https://bikeindex.org:443/api/v3/search`,
        withCredentials: false,
        params: apiParams,
      })
        .then((responseData: any) => {
          if (responseData) {
            const { data } = responseData;
            setBikeData(data.bikes);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
    const apiParams: BikeApiParams = {
      page: pageNumber,
      per_page: 10,
      query:searchQuery,
      location: 'Sydney',
      stolenness: 'stolen',
      access_token: '2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk',
    };
    getBikeData(apiParams);
  }, [pageNumber,searchQuery]);

  // Getting Total Page Count of Bikes stolen in Sydney 
  useEffect(() => {
    async function getPAginationCount(apiParams: BikeApiParams) {
      setLoading(true);
      axios({
        method: 'get',
        url: `https://bikeindex.org:443/api/v3/search/count`,
        withCredentials: false,
        params: apiParams,
      })
        .then((responseData: any) => {
          if (responseData) {
            const { data } = responseData;
            const { stolen } = data;
            let pages = parseInt(stolen) / 10 + '';
            setPageCount(parseInt(pages));
            setTotalStolenCount(stolen);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
    const apiParams: BikeApiParams = {
      location: 'Sydney',
      stolenness: 'stolen',
      access_token: '2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk',
    };
    getPAginationCount(apiParams);
  }, []);

  return (
    <Fragment>
      <GlobalHeader count={totalStolenCount} handleSearch={handleSearch}/>
      <div className='pagination'>
        <Pagination
          count={pageCount}
          size='large'
          page={pageNumber}
          variant='outlined'
          shape='rounded'
          className='page-count'
          onChange={handleChange}
        />
      </div>
      {loading ? (
        <CircularProgress color='inherit' className='loader'/>
      ) : (
        <Cards bikeData={bikeData} />
      )}
      <div className='pagination'>
        <Pagination
          count={pageCount}
          size='large'
          page={pageNumber}
          variant='outlined'
          shape='rounded'
          onChange={handleChange}
          className='page-count'
        />
      </div>
    </Fragment>
  );
};

export default Dashboard;

// //[7:03 pm] Ranjan Mishra
// https://github.com/SHOOTSTA/coding-challange
// ​[7:03 pm] Ranjan Mishra
//     https://bikeindex.org/documentation/api_v3#!/search/GET_version_search_format_get_0
// API v3The best bike registry: Simple, secure and free.bikeindex.org​[7:04 pm] Ranjan Mishra
//     2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk
// ​[7:04 pm] Ranjan Mishra
//     https://bikeindex.org/bikes?serial=&button=&location=Sydney&distance=300&stolenness=proximity
// Search resultsSearch for bikes that have been registered on Bike Indexbikeindex.org

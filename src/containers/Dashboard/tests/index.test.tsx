import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from '..';

jest.mock('axios');
const axios = require('axios');


describe('Dashboard', () => {
  test('renders learn Dashboard', async () => {
    axios.get = jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            date_stolen: 1666102625,
            description: null,
            frame_colors: ['Black'],
            frame_model: 'Element C50',
            id: 1419598,
            is_stock_img: false,
            large_img:
              'https://files.bikeindex.org/uploads/Pu/649347/large_DE763928-31CC-4489-A27F-329547DF62A9.jpeg',
            location_found: null,
            manufacturer_name: 'Rocky Mountain Bicycles',
            external_id: null,
            registry_name: null,
            registry_url: null,
            serial: 'SRMVCTHEE9S3903',
            status: 'stolen',
            stolen: true,
            stolen_coordinates: [51.02, -114.11],
            stolen_location: 'Calgary, T2T 4V8, CA',
            thumb:
              'https://files.bikeindex.org/uploads/Pu/649347/small_DE763928-31CC-4489-A27F-329547DF62A9.jpeg',
            title: '2022 Rocky Mountain Bicycles Element C50',
            url: 'https://bikeindex.org/bikes/1419598',
            year: 2022,
          },
        ],
        status: 200,
        statusText: 'Ok',
        headers: {},
        config: {},
      })
    );
    axios.get = jest.fn().mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            non: 807664,
            proximity: 33,
            stolen: 121642,
          },
        ],
        status: 200,
        statusText: 'Ok',
        headers: {},
        config: {},
      })
    );
    const wrapper = renderer.create(<Dashboard />);
    expect(wrapper.toJSON()).toMatchSnapshot()
  });
});

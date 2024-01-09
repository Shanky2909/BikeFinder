import { render } from "@testing-library/react";
import React from "react";
import usePagination from "..";

describe('usePagination',()=>{
    it('should test usePagination Component',()=>{
        var mockData = [{
            "date_stolen": 1666102625,
            "description": null,
            "frame_colors": [
                "Black"
            ],
            "frame_model": "Element C50",
            "id": 1419598,
            "is_stock_img": false,
            "large_img": "https://files.bikeindex.org/uploads/Pu/649347/large_DE763928-31CC-4489-A27F-329547DF62A9.jpeg",
            "location_found": null,
            "manufacturer_name": "Rocky Mountain Bicycles",
            "external_id": null,
            "registry_name": null,
            "registry_url": null,
            "serial": "SRMVCTHEE9S3903",
            "status": "stolen",
            "stolen": true,
            "stolen_coordinates": [
                51.02,
                -114.11
            ],
            "stolen_location": "Calgary, T2T 4V8, CA",
            "thumb": "https://files.bikeindex.org/uploads/Pu/649347/small_DE763928-31CC-4489-A27F-329547DF62A9.jpeg",
            "title": "2022 Rocky Mountain Bicycles Element C50",
            "url": "https://bikeindex.org/bikes/1419598",
            "year": 2022
        },
        {
            "date_stolen": 1666101196,
            "description": null,
            "frame_colors": [
                "Black"
            ],
            "frame_model": "CANN-S2-RD",
            "id": 1419546,
            "is_stock_img": false,
            "large_img": null,
            "location_found": null,
            "manufacturer_name": "Cannondale",
            "external_id": null,
            "registry_name": null,
            "registry_url": null,
            "serial": "MD26090",
            "status": "stolen",
            "stolen": true,
            "stolen_coordinates": [
                49.7,
                -112.83
            ],
            "stolen_location": "Lethbridge, T1J 0C7, CA",
            "thumb": null,
            "title": "2020 Cannondale CANN-S2-RD",
            "url": "https://bikeindex.org/bikes/1419546",
            "year": 2020
        },
        {
            "date_stolen": 1666095526,
            "description": "Stolen in Midlothian VA    Has Cardinal Bicycle shop sticker. ",
            "frame_colors": [
                "Black",
                "Blue"
            ],
            "frame_model": "My2019Atx3",
            "id": 1419535,
            "is_stock_img": false,
            "large_img": null,
            "location_found": null,
            "manufacturer_name": "Giant",
            "external_id": null,
            "registry_name": null,
            "registry_url": null,
            "serial": "K58020796",
            "status": "stolen",
            "stolen": true,
            "stolen_coordinates": null,
            "stolen_location": "US",
            "thumb": null,
            "title": "2019 Giant My2019Atx3",
            "url": "https://bikeindex.org/bikes/1419535",
            "year": 2019
        }]
        const initialData=1;
        React.useState = jest.fn().mockReturnValueOnce([initialData,{}]);
        usePagination(mockData,2);
    })
})
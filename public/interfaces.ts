interface BikeApiParams {
    page?: number;
    per_page?: number;
    query?:string;
    location?: string;
    distance?: number;
    stolenness?: 'stolen';
    access_token?: '2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk';
};

interface BikeApiResponse {
    date_stolen?: number| null;
    description?: string | null;
    frame_colors?: Array<string>| null;
    frame_model?:string| null;
    id?: number| null;
    is_stock_img?: boolean| null;
    large_img?: string| null;
    location_found?: string| null;
    manufacturer_name?: string| null ;
    external_id?: number | string | null;
    registry_name?: string | null;
    registry_url?: string | null;
    serial?:string | null;
    status?:string | null ;
    stolen?: boolean| true;
    stolen_coordinates?: Array<number>|null;
    stolen_location?: string| null;
    thumb?: string | null ;
    title?: string|null;
    url?: string| null;
    year?: number| null;
};

interface CardProps {
    bikeData:BikeApiResponse;
};

export{
    BikeApiParams,
    BikeApiResponse,
    CardProps
}
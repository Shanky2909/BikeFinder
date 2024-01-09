import React, {useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './style.css';

const GlobalHeader = (props: { count: number, handleSearch:(value: string) => void}) => {
    const [searchString,setSearchString] = useState<string>('');

    //Getting input search text
    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setSearchString(e.target.value);
    }
  return (
    <div className='header'>
      <div className='heading'><p>Bike Finder</p></div>
      <div className='search-input'>
        <input className='input-search' type='search' placeholder='Seach Here!' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleInputChange(e)}/>
        <button onClick={()=>props.handleSearch(searchString)}><SearchIcon /></button>
      </div>
      <div className='text-content'><p>Total Count: {props.count}</p></div>
    </div>
  );
};

export default GlobalHeader;

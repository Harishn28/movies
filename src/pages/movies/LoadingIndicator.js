import React from 'react';
import MovieCardLoading from '../../components/moviecard/MovieCardLoading';

const LoadingIndicator = () => {
    const views = [];
    for(let i=0; i<20; i+=1){
        views.push(<MovieCardLoading key={i}/>)
    }
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection:'row',
            flexWrap: 'wrap',
            alignSelf:'center',
            justifyContent:'center',
          }}>
{views}
          </div>
    );
}

export default LoadingIndicator;
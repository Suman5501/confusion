import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'City Palace, Jaipur',
        description:'Opulent 18th-century palace of Maharaja Sawai Jai Singh II, now a museum & royal residence',
        imageUrl:'https://lh3.googleusercontent.com/proxy/5xydGNBtrS1rvEPUri8nBlk3nMo64PCE0qkWu21_RMH2m2l_xiinhNiXXsFNjYtACCrtYInPO-egUPioBYDGJeTia1rcQGfGO7qQidTmw601emVons4t3DIufbg3RK3XcbWClKY6V8Z-thdmBgHxmMptMB3pnJc=w408-h405-k-no',
        address:'Tulsi Marg, Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002',
        location:{
            lat:26.8856183,
            lng:75.7205179
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'City Palace, Jaipur',
        description:'Opulent 18th-century palace of Maharaja Sawai Jai Singh II, now a museum & royal residence',
        imageUrl:'https://lh3.googleusercontent.com/proxy/5xydGNBtrS1rvEPUri8nBlk3nMo64PCE0qkWu21_RMH2m2l_xiinhNiXXsFNjYtACCrtYInPO-egUPioBYDGJeTia1rcQGfGO7qQidTmw601emVons4t3DIufbg3RK3XcbWClKY6V8Z-thdmBgHxmMptMB3pnJc=w408-h405-k-no',
        address:'Tulsi Marg, Gangori Bazaar, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002',
        location:{
            lat:26.8856183,
            lng:75.7205179
        },
        creator:'u2'
    }
]
const UserPlaces = props =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place =>place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;
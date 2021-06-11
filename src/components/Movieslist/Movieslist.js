import React from 'react'
import { Moviecard } from '../Moviecard/Moviecard'

export const Movieslist = ({ moviesData, textSearch, rateSearching }) => {
    return (
        <div style={{ display: 'flex', motionDistance: '30px', flexWrap: 'wrap', marginLeft: '80px' }}>
            {
                moviesData.filter((el) => el.name.toLowerCase().includes(textSearch.toLowerCase().trim()) && el.rating >= rateSearching).map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                ))
            }
        </div>
    )
}

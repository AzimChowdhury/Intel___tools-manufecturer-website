import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';

function Review() {

    const { data, isLoading } = useQuery('review', () => fetch('https://intel-server.onrender.com/review').then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='lg:mx-28 mx-4'>
            <h1 className='text-3xl text-center m-12'>Reviews</h1>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1   justify-items-center'>
                {
                    data?.map(d =>
                        <div class="card  bg-base-100 " style={{ width: "310px", boxShadow: '10px 10px 10px 10px #d4d4d4' }}>
                            <div class="card-body">
                                <h2 class="card-title">{d.name}</h2>
                                <p>Ratings: {d.rating}/5</p>
                                <p>{d.comment}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Review;

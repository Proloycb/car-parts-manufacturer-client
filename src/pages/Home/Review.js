import React from 'react';
import Rate from '../../hooks/Rate';

const Review = ({ review }) => {
    const { rating, image, name, description } = review
    return (
        <div className="card bg-base-100 shadow-xl md:mr-4" data-aos="zoom-in-up" data-aos-duration="3000">
            <div className="card-body">
                <Rate rate={rating} />
                <p>{description}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full mr-3">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
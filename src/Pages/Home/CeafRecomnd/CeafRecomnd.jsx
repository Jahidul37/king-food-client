import React from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
import usehook from '../../../hooks/useMenu';

const CeafRecomnd = () => {

    return (
        <section>
            <SectionTitles
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitles>

            <div className='my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CeafRecomnd;
import React from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
import "./MenuBg.css"
import images from "./../../../assets/home/featured.jpg"
// import { Parallax, Background } from 'react-parallax';

const MenuBg = () => {
    return (
        <section>

            <div className='images bg-fixed'>
                <div className=' pt-10'>
                    <SectionTitles
                        subHeading={"Check It Out"}
                        heading={"From Our Menu"}
                    ></SectionTitles>
                </div>

                <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-24 p-10 items-center z-10 '>
                    <div>
                        <img className=' w-[400px] h-[300px]' src={images} alt="" />
                    </div>
                    <div className=' text-white text-justify'>
                        <p>March 20, 2023</p>
                        <h4>WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error expedita tenetur, esse ipsum, aperiam aliquam porro,
                            delectus obcaecati adipisci ipsam dolorem omnis quod animi modi. Magnam mollitia velit ullam!</p>

                        <button className=' mt-10 btn btn-outline border-0 border-b-4'>Read More</button>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default MenuBg;
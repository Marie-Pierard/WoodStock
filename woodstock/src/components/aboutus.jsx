import React from 'react';
import img from './assets/img/img1.png';
import imgtable from './assets/img/img2.png';



const aboutus = () => {
    return (
        <div class="divabout">
            <div class="divaboutus">
                
                    <img src={img} alt="chair" class="imgchair" height="300px" width="300px"/>
                
                <div class="aboutus">    
                    <h2>About us</h2>
                    <p>Look, just because I don't be givin' no man a foot massage don't make it right for Masellus to throw Antwone into a glass motherfuckin'house, fuckin'up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                        <button>Learn more</button>
                </div>
            </div>
            <div class="divshop">
                <div class="shop">
                    <h2>Shop</h2>
                    <p>Look, just because I don't be givin' no man a foot massage don't make it right for Masellus to throw Antwone into a glass motherfuckin'house, fuckin'up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
                        <button>Go Shopping</button>
                </div>
                
                    <img src={imgtable} alt="table" class="imgtable" height="350px" width="250px"/>
                
            </div>
        </div>
    );
}

export default aboutus;
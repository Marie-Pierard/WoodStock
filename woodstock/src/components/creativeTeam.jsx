import React from 'react';
import img from './assets/img/img3.png';

const creativeTeam = () => {
    return (
        <div class="teamsection">
            <img src={img} alt="meeting room" class="meetingroom"/>
            <h2 class="meetingRoomSection">CREATIVE TEAM</h2>
            <h3>WOOD</h3>
            <div class="contentteam">
                <p class="titletextteam">GOOD MINDSET</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem pariatur sint laboriosam corporis neque rerum! Assumenda quas fugit voluptatibus dolore natus repellat ea tenetur nesciunt rerum, ipsam veniam soluta doloremque.
                    </p>
                <button>Meet the team</button>
            </div>
        </div>
    )
}


export default creativeTeam;
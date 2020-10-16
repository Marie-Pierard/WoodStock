import React from 'react';

const contactus = () => {
    return(
        <div className="contactsection">
            <h2>Contact us</h2>
                <form action="">
                    <input type="text" name="firstname" id="firstname" placeholder="FIRST NAME"/>
                        <input type="text" name="lastname" id="lastname" placeholder="LAST NAME"/>
                            <input type="email" name="email" id="email" placeholder="MAIL ADDRESS"/>
                        <textarea  name="textfield" id="textfield" row="16" cols="30">MESSAGE</textarea>
                 </form>
        </div>
    )
};

export default contactus;
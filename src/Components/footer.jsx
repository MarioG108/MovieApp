import React from 'react'

function Footer() {
    var date = new Date();

    return (
        <div id='footer'>
            <div className="bg-dark mt-3 mb-0" id="Contact">
                <div className="col-12 text-center">
                    <span className="text-light bg-dark">CopyRight &copy; Team B {date.getFullYear()}</span>
                </div>
            </div>
        </div>
    )

}

export default Footer;
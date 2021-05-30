import React from 'react'

function Footer() {
    var date = new Date();

    return (
            <div className="bg-dark mt-3 mb-0" id='footer'>
                <div className="col-12 text-center">
                    <span className="text-light bg-dark">CopyRight &copy; Team B {date.getFullYear()}</span>
                </div>
            </div>
    )

}

export default Footer;
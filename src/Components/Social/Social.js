import React from 'react';
import './social.scss'

const Social = () => {
    return (
        <>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <nav className="social" >
                <ul>
                    <li><a href="http://linkedin.com/in/bijay-poudel-229033171/" target="_blank">LinkedIn <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/bijayrpoudel" target="_blank">Twitter <i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://github.com/Bijaypoudel/" target="_blank">Github <i class="fa fa-github"></i></a></li>
                    <li><a href="http://instagram.com/bj_poodle/" target="_blank">Instagram <i class="fa fa-instagram"></i></a></li>
                </ul>
            </nav>
       </>
    )
}

export default Social;

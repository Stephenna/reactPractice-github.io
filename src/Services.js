import React, { Component } from 'react';
import './Services.css'
class Services extends Component {
    render() {
        return(
            <div className="services">
                <h3>Services</h3>
                <h2>What we offer</h2>
                <div className="row">
                   <div>
                        <span>
                        <i class="fab fa-html5"></i>
                        </span>
                        <h4>HTML</h4>
                        <p>blah</p>
                   </div>
                   <div>
                        <span>
                          <i class="fab fa-css3"></i>
                        </span>
                        <h4>CSS</h4>
                        <p>blah</p>
                   </div>
                   <div>
                        <span>
                          <i className="fab fa-js"></i>
                        </span>
                        <h4>JavaScript</h4>
                        <p>Blah</p>
                   </div>
                   <div>
                        <span>
                        <i class="fab fa-react"></i>
                        </span>
                        <h4>React.js</h4>
                        <p>What I used to build this </p>
                   </div>
                </div>
            </div>
        );
    }
}

export default Services;
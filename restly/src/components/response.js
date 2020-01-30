import React from 'react';
import PropTypes from 'prop-types'; 



const Response = ({ response }) => (
<div id="json">
    <div class="react-json-view" style="font-family: monospace; cursor: default; background-color: rgba(0, 0, 0, 0); position: relative">
        <div class="pretty-json-container">
            <div class="object-content">
                <div class="object-key-val">
                    <span>
                        <span style="display:inline-block; cursor: pointer;">
                            <div class="icon-container" style="display: inline-block; width: 17px;">
                                <span class="collapsed-icon">
                                    <svg viewBox="0 0 15 15" fill="currentColor" style="vertical-align: top; color: rbg(14, 161, 152); height: 1em; width: 1em; padding-left: 2px; -- darkreader-inline-fill: currentColor; -- darkreader-inline-color">
                                        <path d="M0 14l6-6-6-6z"></path>
                                    </svg>
                                </span>
                            </div>
                            <span style="display: inline-block; color: rgb(0, 43, 54); letter-spacing: 0.5px; vertical-align: top; opacity: 0.85; --darkreader-inline-color:#15191b;" data-darkreader-inline-color=""><span class="object-key"><span style="vertical-align: top;">"</span><span>Headers</span><span style="vertical-align: top;">"</span></span><span style="display: inline-block; margin: 0px 5px; color: rgb(0, 43, 54); vertical-align: top; --darkreader-inline-color:#15191b;" data-darkreader-inline-color="">:</span></span>
                            <span class="object-key"><span style="vertical-align: top;">"</span><span>Headers</span><span style="vertical-align: top;">"</span></span>
                            <span style="vertical-align: top;">"</span>
                            <span>Headers</span>
                            <span style="vertical-align: top;">"</span>
                        </span>
                        <span style="display: inline-block; margin: 0px 5px; color: rgb(0, 43, 54); vertical-align: top; --darkreader-inline-color:#15191b;" data-darkreader-inline-color="">:</span>
                    </span>
                    <span style="display: inline-block; cursor: pointer; font-weight: bold; color: rgb(0, 43, 54); --darkreader-inline-color:#15191b;">[</span>
                </div>
            </div>
        </div>
    </div>
</div>

Response.propTypes = {
    response: PropTypes.shape({
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        frequency: PropTypes.number.isRequired
    }).isRequired
    };
    
    export default Response;
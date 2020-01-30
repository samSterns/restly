import React from 'react';
import PropTypes from 'prop-types'; 

const Form = ({ form }) => (
    <div id="root">
        <header>
            <h1>RESTy</h1>
        </header>
        <main>
            <aside>
                <h2>History</h2>
                <ul id="history"></ul>
            </aside>
            <section class="deck">
                <form>
                    <section>
                        <input type="text" class="wide" name="url" placeholder="URL" value></input>
                        <div>
                            <label>
                                <input type="radio" name="method" value="get"></input>
                                <span>GET</span>
                            </label>
                            <label>
                                <input type="radio" name="method" value="post"></input>
                                <span>POST</span>
                            </label>
                            <label>
                                <input type="radio" name="method" value="put"></input>
                                <span>PUT</span>
                            </label>
                            <label>
                                <input type="radio" name="method" value="patch"></input>
                                <span>PATCH</span>
                            </label>
                            <label>
                                <input type="radio" name="method" value="delete"></input>
                                <span>Delete</span>
                            </label>
                            <label>
                                <button type="submit">Go!</button>
                            </label>
                        </div>
                    </section>
                    <section class="deck col-2">
                        <div id="body"> 
                          <textarea placeholder="Raw JSON Body" name="requestBody"></textarea>
                        </div>
                        <div id="headers">
                            <button>Headers</button>
                            <div class="visible-false">
                                <h2>Basic Authorization</h2>
                                <input name="authusernname" placeHolder="Username" value></input>
                                <input name="authpassword" type="authpassword" placeholder="password" value></input>
                            </div>
                            <div class="visible-false">
                                <h2>Bearer Token</h2>
                                <input type="text" class="wide" name="authtoken" placeholder="Bearer Token" value></input>
                            </div>
                        </div>
                    </section>
                </form>
            </section>
        </main>
    </div>
)

Form.propTypes = {
    form: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        frequency: PropTypes.number.isRequired
    }).isRequired
    };
    
    export default Form;
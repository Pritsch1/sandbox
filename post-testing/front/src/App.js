//import './App.css';
import { useState } from 'react';

function App() {
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("not validated!");
        } else {
            console.log("validated!");

            const data = { message: message };
            const xhr = new XMLHttpRequest();
            console.log(xhr.status);
            xhr.open('POST', 'http://localhost:3001/sendForm', true);
            xhr.setRequestHeader("content-type", "application/json");

            /*
            readonly UNSENT: 0;
            readonly OPENED: 1;
            readonly HEADERS_RECEIVED: 2;
            readonly LOADING: 3;
            readonly DONE: 4;
            */

            /*xhr.onreadystatechange = () => {
                if (1 === 1) {
                    console.log("First If Ran");
                }
                if (xhr.readyState !== 4) {
                    console.log("Second If Ran")
                }
            }*/


            xhr.onreadystatechange = () => {
                // In local files, status is 0 upon success in Mozilla Firefox
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    const status = xhr.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        // The request has been completed successfully
                        console.log(xhr.responseText);
                    } else {
                        console.log("Oh no! There has been an error with the request!");
                    }
                }
            };
            if (xhr.responseText) { console.log("Server Can't be reached"); }
            console.log(xhr.status);
            xhr.send(JSON.stringify(data));
            console.log(xhr.status);
        }
        
        setValidated(true);
        event.preventDefault();
        console.log("END");
    };

    return (
        <div>
            <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="input1">First name</label>
                    <input required type="text" id="input1" onChange={(e) => setMessage(e.target.value)} />
                </div>

                <button type="submit">Submit form</button>

            </form>
        </div>
    );
}

export default App;

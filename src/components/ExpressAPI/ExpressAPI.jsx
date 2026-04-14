import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExpressAPI() {
    const [posts, setPosts] = useState([]);
    const url = 'http://localhost:3000/api/posts';

    useEffect(() => {

        axios.get(url)
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
    return (
        <>
            <div className="container p-5 text-center">
                <h1>Fetching Data from API</h1>
                <button type="button" className="btn btn-primary" id="liveToastBtn">HIT API</button>
                <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div id="liveToast" className="toast d-flex flex-column" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto"><h2>API Fetching</h2></strong>
                            <small>11 mins ago</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            <table  >
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Character</th>
                                </tr>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.name}</td>
                                        <td>{post.character}</td>
                                    </tr>
                                ))}
                            </table>
                            {/* <table className='table table-dark table-striped' cellPadding={10} border={1}>
                                <tr className='table table-dark table-striped'>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Character</th>
                                </tr>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.name}</td>
                                        <td>{post.character}</td>
                                    </tr>
                                ))}
                            </table> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

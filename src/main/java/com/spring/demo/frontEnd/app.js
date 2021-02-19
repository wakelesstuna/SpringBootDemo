
const getbtn = document.getElementById('get-btn');
const sendbtn = document.getElementById('send-btn');
const input = document.getElementById('input');

/*const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://reqres.in/api/users');
    xhr.send();

    get https://reqres.in/api/users
    send https://reqres.in/api/register

    localhost:8080/api/v1/person
};*/

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);

        xhr.responseType = 'json';

        if (data){
            xhr.setRequestHeader('Content-Type', 'application/json')

        }

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;

}

const getData = () => {
    sendHttpRequest('GET','localhost:8080/api/v1/person').then(responseData => {
       console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'localhost:8080/api/v1/person', {
        name: 'Oscar Forss'
    }).then(responseData => {
        console.log(responseData)
    })
};

getbtn.addEventListener('click', getData);
sendbtn.addEventListener('click', sendData);
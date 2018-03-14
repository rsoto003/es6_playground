

function addHeaderToDom(text){
    const header = document.createElement('h1');

    header.innerText = text;

    document.getElementById('root').appendChild(header);
}

export default addHeaderToDom;
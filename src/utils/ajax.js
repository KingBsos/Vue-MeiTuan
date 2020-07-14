function ajax(url, type = 'GET', data = null) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200) resolve(xhr);
        }
        xhr.open(type, url);
        xhr.send(data);
    })
}

export default ajax;
const searchBtn = document.querySelector('.search--button');

function showData(data) {
    const clientIP = document.querySelector('.result__ip');
    const clientLocation = document.querySelector('.result__location');
    const clientTimezone = document.querySelector('.result__timezone');
    const clientISP = document.querySelector('.result__ISP');

    // Add data dynamically to page
    clientIP.textContent = data.ip;
    clientLocation.textContent = `${data.location.region}, ${data.location.country}`;
    clientTimezone.textContent = `${data.location.timezone}`;
    clientISP.textContent = data.isp;
}


const getData = async () => {
    let apiKey = 'at_F0chdUYl713F5LtXPnDXu5gGYTKzg';
    try {
        const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`
        const res = await fetch(url)
        const data = await res.json()
        showData(data)
        console.log(data)
    } catch(error) {
        console.error(error)
    }

}




searchBtn.addEventListener('click', getData)
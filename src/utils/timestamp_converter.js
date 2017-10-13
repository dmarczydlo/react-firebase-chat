const converter = (timestamp) => {

    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const years = date.getFullYear();
    const months = ('0' + date.getMonth()).slice(-2);
    const days = ('0' + date.getDay()).slice(-2);


// Will display time in 10:30:23 format
    return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
};

export default converter;
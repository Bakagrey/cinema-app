const dateFormat = (date) => {
    let newDate = new Date(date);
    newDate = newDate.toLocaleString("en",
    {
        day: 'numeric', 
        month: 'long'
    });
    return newDate;
}

export default dateFormat;
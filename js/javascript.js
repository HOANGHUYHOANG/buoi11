let value;

document.getElementById("btn").addEventListener("click", function() {

    //16/08/2000
    let value = prompt('Ngaythannam');
    //lay'ngay'
    let date = value.slice(0, value.indexOf("/", 0));
    //thang'
    let secondSlash = value.indexOf("/", date.length + 1);

    let month = value.slice(date.length + 1, secondSlash);

    //nam
    let year = value.slice(secondSlash + 1);
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = month;
    document.getElementById("year").innerText = year;

})
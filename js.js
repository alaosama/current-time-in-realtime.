let hour = document.getElementById("hour")
    let minute = document.getElementById("minute")
    let second = document.getElementById("second")

    setInterval(()=>{
        let currentTime = new Date();

            // Update HTML elements with the current hour, minutes, and seconds
        hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        minute.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    },1000)
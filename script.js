

function selectdrone(name){
    console.log(document.getElementById("atlasbattery"));
    document.getElementById("selecteddrone").textContent = "Selected Drone :" + name
    if (name == "Atlas"){
        console.log(document.getElementById("atlasbattery"));
        document.getElementById("dashboardBattery").textContent = "Battery - 70%";
        document.getElementById("altitude").textContent = "Altitude: 24 m";
        document.getElementById("gps").textContent = "GPS: 28.6139° N, 77.2090° E";
        document.getElementById("speed").textContent = "Ground Speed: 3.2 m/s";
        document.getElementById("flighttime").textContent = "Flight Time: 04:56";
        document.getElementById("connectionstatus").textContent = "Connection Status : Connected";
        document.getElementById("batteryfill").style.width = "70%";
        document.getElementById("batteryfill").style.backgroundColor = "#f48c06";
    }
    else if (name == "Float"){
            document.getElementById("dashboardBattery").textContent = " Battery - 84%";
            document.getElementById("altitude").textContent = "Altitude: 18 m";
            document.getElementById("gps").textContent = "GPS: 43.6767° N, 67.6767° E";
            document.getElementById("speed").textContent = " Ground Speed: 6.7 m/s";
            document.getElementById("flighttime").textContent = "Flight Time: 06:07";
            document.getElementById("connectionstatus").textContent = "Connection Status : Connected";
            document.getElementById("batteryfill").style.width = "84%";
            document.getElementById("batteryfill").style.backgroundColor = "#2d6a4f";
        }


}





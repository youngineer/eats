function initGeolocation()
{
    if( navigator.geolocation )
    {
        navigator.geolocation.getCurrentPosition( success, fail );
    }
else
{
    alert("Sorry, your browser does not support geolocation services.");
}
}

function success(position)
{
    document.getElementById('long').value = position.coords.longitude;
    document.getElementById('lat').value = position.coords.latitude
}
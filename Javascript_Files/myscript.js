// JavaScript Document



    // The watch id references the current `watchHeading`
    var watchID = null;
    
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        startWatch();
		alert("The device iis ready");
    }
     
    // Start watching the compass
    //
    function startWatch() {

        // Update compass every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }

    // Stop watching the compass
    //
    function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
		alert(heading.magneticHeading);
    }

    // onError: Failed to get the heading
    //
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }


   



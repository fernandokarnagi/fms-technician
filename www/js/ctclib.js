var i = 0;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomNumber(minNum,maxNum){      
    var numLow = minNum;
    var numHigh = maxNum;
    if ((!isNaN(numLow)) && (!isNaN(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
       var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;       
       var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
		 return numRand;
    } else {
        return "Please try again....";
    }       
    return false;    
}; 

function sendMqttTracker(sensordata, callBack) {
	var wsbroker = sensordata.host;  //mqtt websocket enabled brokers
    var wsport = sensordata.port; // port for above
    var clientId = sensordata.clientid;
    var client = new Paho.MQTT.Client(wsbroker, wsport, clientId);
    
	// set callback handlers
	client.onConnectionLost = onConnectionLost;
	client.onMessageArrived = onMessageArrived;

	var options = {
            timeout: 30,
            useSSL: false,
            cleanSession: true,
            onSuccess: function(message) {
            	onConnect(message, client, sensordata, callBack);
            },
            userName: sensordata.user,
            password: sensordata.password,
            onFailure: function (message) {
            	alert('error : ' + message);
            }
        };

	
	// connect the client
	client.connect(options);
}

//called when the client connects
function onConnect(message, client, sensordata, callBack) {
	// Once a connection has been made, make a subscription and send a message.
	message = new Paho.MQTT.Message(sensordata.clientid + "|" + sensordata.value);
	
	message.destinationName = "CTC/Sensor/" + sensordata.type; 	
	client.send(message); 
	console.log("Sensor data has been sent");
	callBack();
		
}

//called when the client loses its connection
function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
	 console.log("onConnectionLost: "+responseObject.errorMessage);
	}
}

//called when a message arrives
function onMessageArrived(message) {
	console.log("onMessageArrived: "+message.payloadString);
}
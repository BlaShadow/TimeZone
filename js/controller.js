/** contorller **/

app.controller('indexCtrl',function($scope){

	var timeFormat = "h:mm:ss a";
	var format =  "MMM Do YYY " + timeFormat;

	$scope.title = "TimeZone";
	$scope.zone1 = "";
	$scope.zone12 = "";

	var dec = moment();

	$scope.time = dec.tz('America/Los_Angeles'); 

	$scope.zones = moment.tz.names();

	$scope.currentTime = dec.format(format);

	$scope.build = function(){
		$scope.zone1Response = dec.clone().tz($scope.zone1).format(format);
		$scope.zone12Response = dec.clone().tz($scope.zone12).format(format);

		$scope.responseTime1 = []
		$scope.responseTime2 = []

		var time = moment("2012-12-12 00:00").tz($scope.zone1);

		for(var i=0;i<6;i++){
			time = time.add(i*3,"hours")

			$scope.responseTime1.push( time.format(timeFormat) )


			var test = time.clone().tz($scope.zone12) //.format(format)

			console.log(test);

			$scope.responseTime2.push( test.format(timeFormat) )
		}
	}

	$scope.responseTime1 = [3,6,9,12,15,18];
	$scope.responseTime2 = [3,6,9,12,15,18,20];

});




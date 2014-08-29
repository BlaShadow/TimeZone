/** contorller **/

app.controller('indexCtrl',function($scope,$interval){

	var timeFormat = "h:mm:ss a";
	var format =  "MMM Do YYYY " + timeFormat;

	$scope.zone1 = "";
	$scope.zone12 = "";

	$scope.zones = moment.tz.names();

	$scope.currentTime = "";

	$interval(function(){
		$scope.currentTime = moment().format(format);
	},1000);

	$scope.build = function(){
		if( $scope.zone1 == "" || $scope.zone2 == "")return;

		$scope.zone1Response = dec.clone().tz($scope.zone1).format(format);
		$scope.zone12Response = dec.clone().tz($scope.zone12).format(format);

		$scope.responseTime1 = []
		$scope.responseTime2 = []

		var time = moment("2012-12-12 00:00").tz($scope.zone1);

		for(var i=0;i<6;i++){
			time = time.add(i*3,"hours")

			$scope.responseTime1.push( time.format(timeFormat) )
		
			$scope.responseTime2.push( time.clone().tz($scope.zone12).format(timeFormat) )
		}
	}

	$scope.responseTime1 = [3,6,9,12,15,18];
	$scope.responseTime2 = [3,6,9,12,15,18];

});




/** contorller **/

app.controller('indexCtrl',function($scope,$interval){

	var timeFormat = "h:mm:ss a";
	var format =  "MMM Do YYYY " + timeFormat;

	$scope.zone1 = "";
	$scope.zone12 = "";

	$scope.zones = moment.tz.names();

	$scope.currentTime = moment().format(format);;

	$interval(function(){
		$scope.currentTime = moment().format(format);
	},1000);

	$scope.build = function(){

		var local = moment();

		if( $scope.zone1 == "" && $scope.zone2 == "")return;

		$scope.zone1Response = local.clone().tz($scope.zone1).format(format);
		$scope.zone12Response = local.clone().tz($scope.zone12).format(format);

		$scope.responseTime1 = []
		$scope.responseTime2 = []

		var time = moment.tz("2012-12-12 00:00",$scope.zone1);

		for(var i=0;i<8;i++){

			// this not return a new object it change it self ( mutable object )
			time.add(3,"hours")

			$scope.responseTime1.push( time.format(timeFormat) )
		
			$scope.responseTime2.push( time.clone().tz($scope.zone12).format(timeFormat) )
		}
	}

	$scope.responseTime1 = [3,6,9,12,15,18];
	$scope.responseTime2 = [3,6,9,12,15,18];

});




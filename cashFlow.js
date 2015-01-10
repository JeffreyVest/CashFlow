angular.module('cashFlowApp', [])
    .controller('CashFlowController', ['$scope', function ($scope) {

        $scope.cashFlow =
            [
                {
                    DueDate: new Date(2015, 0, 9),
                    Description: 'Some Bill Data Bound',
                    Amount: 10
                },
                {
                    DueDate: new Date(2015, 0, 15),
                    Description: 'Some Bill Data Bound 2',
                    Amount: 100
                }
            ];

        // Add Running Totals
        var runningTotal = 0;
        $scope.cashFlow.forEach(function(item) {
            runningTotal += item.Amount;
            item.RunningTotal = runningTotal;
        });

    }]);

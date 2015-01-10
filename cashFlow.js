angular.module('cashFlowApp', [])
    .controller('CashFlowController', ['$scope', function ($scope) {

        var createDate = function (year, month, day) {
            return new Date(year, month - 1, day);
        };

        $scope.cashFlow =
            [
                {
                    DueDate: createDate(2015, 1, 9),
                    Description: 'Some Bill Data Bound',
                    Amount: 10
                },
                {
                    DueDate: createDate(2015, 1, 15),
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

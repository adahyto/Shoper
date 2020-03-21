function ShopController($scope) {
    $scope.items = [
        { title: 'product_name', price: '0', quantity: '1' },
        { title: 'product_name', price: '0', quantity: '1' }
    ];
    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }
        return total;
    };
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };
    $scope.add = function () {
        for (var i = 0; i < 1; i++) {
            $scope.items.push({ title: 'product_name', price: '0', quantity: '1' });
        }
    };
}

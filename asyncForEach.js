function asyncForEach(array, cb) {
    return new Promise(function(resolve, reject) {
        function next(i) {
                if (i >= array.length) {
                    resolve();
                } else {
                    cb(array[i], i, next.bind(null, ++i));
                }
            };

        setTimeout(function () {
            next(0);
        });
    });
};

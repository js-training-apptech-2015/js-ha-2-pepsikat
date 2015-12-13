function bind(fn, ctx) {
    var args = [].slice.call(arguments, 2);
    return function () {
        var funcArgs = [].slice.call(arguments),
            allArgs = funcArgs.concat(args);
        return fn.apply(ctx, allArgs);
    }
}

function rebind(fn, ctx) {
    var func;
    if (fn.fn === undefined) {
        func = func = bind(fn, ctx);
        func.fn = fn;
    } else {
        func = bind(fn.fn, ctx);
    }
    return func;
}


function add(x) {
    x = new Number(x);
    x.add = function (y) {
        return add(x + y);
    };
    return x;
}

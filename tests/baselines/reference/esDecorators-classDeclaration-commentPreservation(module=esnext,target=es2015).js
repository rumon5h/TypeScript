//// [tests/cases/conformance/esDecorators/classDeclaration/esDecorators-classDeclaration-commentPreservation.ts] ////

//// [file1.ts]
declare var dec: any;

/*1*/
@dec
/*2*/
@dec
/*3*/
class C {
    /*4*/
    @dec
    /*5*/
    @dec
    /*6*/
    method() {}

    /*7*/
    @dec
    /*8*/
    @dec
    /*9*/
    get x() { return 1; }

    /*10*/
    @dec
    /*11*/
    @dec
    /*12*/
    set x(value: number) { }

    /*13*/
    @dec
    /*14*/
    @dec
    /*15*/
    y = 1;

    /*16*/
    @dec
    /*17*/
    @dec
    /*18*/
    accessor z = 1;

    /*19*/
    @dec
    /*20*/
    @dec
    /*21*/
    static #method() {}

    /*22*/
    @dec
    /*23*/
    @dec
    /*24*/
    static get #x() { return 1; }

    /*25*/
    @dec
    /*26*/
    @dec
    /*27*/
    static set #x(value: number) { }

    /*28*/
    @dec
    /*29*/
    @dec
    /*30*/
    static #y = 1;

    /*31*/
    @dec
    /*32*/
    @dec
    /*33*/
    static accessor #z = 1;
}

//// [file2.ts]
/*34*/
@dec
/*35*/
@dec
/*36*/
export class D {
}

/*37*/
@dec
/*38*/
@dec
/*39*/
export default class E {
}

//// [file3.ts]
/*40*/
export
/*41*/
@dec
/*42*/
@dec
/*43*/
class F {
}

/*44*/
export default
/*45*/
@dec
/*46*/
@dec
/*47*/
class G {
}


//// [file1.js]
/*1*/
let C = (() => {
    var _method_get, _x_get, _x_set, _y, _z_accessor_storage, _z_get, _z_set, _z_1_accessor_storage;
    let _classDecorators = [dec, dec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _staticExtraInitializers = [];
    let _instanceExtraInitializers = [];
    let _static_private_method_decorators;
    let _static_private_method_descriptor;
    let _static_private_get_x_decorators;
    let _static_private_get_x_descriptor;
    let _static_private_set_x_decorators;
    let _static_private_set_x_descriptor;
    let _static_private_y_decorators;
    let _static_private_y_initializers = [];
    let _static_private_z_decorators;
    let _static_private_z_initializers = [];
    let _static_private_z_descriptor;
    let _method_decorators;
    let _get_x_decorators;
    let _set_x_decorators;
    let _y_decorators;
    let _y_initializers = [];
    let _z_decorators;
    let _z_initializers = [];
    var C = _classThis = class {
        constructor() {
            /*13*/
            this.y = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _y_initializers, 1));
            _z_1_accessor_storage.set(this, __runInitializers(this, _z_initializers, 1));
        }
        /*4*/
        method() { }
        /*7*/
        get x() { return 1; }
        /*10*/
        set x(value) { }
        /*16*/
        get z() { return __classPrivateFieldGet(this, _z_1_accessor_storage, "f"); }
        set z(value) { __classPrivateFieldSet(this, _z_1_accessor_storage, value, "f"); }
    };
    _z_1_accessor_storage = new WeakMap();
    _method_get = function _method_get() { return _static_private_method_descriptor.value; };
    _x_get = function _x_get() { return _static_private_get_x_descriptor.get.call(this); };
    _x_set = function _x_set(value) { return _static_private_set_x_descriptor.set.call(this, value); };
    _z_get = function _z_get() { return _static_private_z_descriptor.get.call(this); };
    _z_set = function _z_set(value) { return _static_private_z_descriptor.set.call(this, value); };
    __setFunctionName(_classThis, "C");
    (() => {
        _method_decorators = [dec, dec];
        _get_x_decorators = [dec, dec];
        _set_x_decorators = [dec, dec];
        _y_decorators = [dec, dec];
        _z_decorators = [dec, dec];
        _static_private_method_decorators = [dec, dec];
        _static_private_get_x_decorators = [dec, dec];
        _static_private_set_x_decorators = [dec, dec];
        _static_private_y_decorators = [dec, dec];
        _static_private_z_decorators = [dec, dec];
        __esDecorate(_classThis, _static_private_method_descriptor = { value: __setFunctionName(function () { }, "#method") }, _static_private_method_decorators, { kind: "method", name: "#method", static: true, private: true }, null, _staticExtraInitializers);
        __esDecorate(_classThis, _static_private_get_x_descriptor = { get: __setFunctionName(function () { return 1; }, "#x", "get") }, _static_private_get_x_decorators, { kind: "getter", name: "#x", static: true, private: true }, null, _staticExtraInitializers);
        __esDecorate(_classThis, _static_private_set_x_descriptor = { set: __setFunctionName(function (value) { }, "#x", "set") }, _static_private_set_x_decorators, { kind: "setter", name: "#x", static: true, private: true }, null, _staticExtraInitializers);
        __esDecorate(_classThis, _static_private_z_descriptor = { get: __setFunctionName(function () { return __classPrivateFieldGet(_classThis, _classThis, "f", _z_accessor_storage); }, "#z", "get"), set: __setFunctionName(function (value) { __classPrivateFieldSet(_classThis, _classThis, value, "f", _z_accessor_storage); }, "#z", "set") }, _static_private_z_decorators, { kind: "accessor", name: "#z", static: true, private: true }, _static_private_z_initializers, _staticExtraInitializers);
        __esDecorate(_classThis, null, _method_decorators, { kind: "method", name: "method", static: false, private: false }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _get_x_decorators, { kind: "getter", name: "x", static: false, private: false }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_x_decorators, { kind: "setter", name: "x", static: false, private: false }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _z_decorators, { kind: "accessor", name: "z", static: false, private: false }, _z_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _static_private_y_decorators, { kind: "field", name: "#y", static: true, private: true }, _static_private_y_initializers, _staticExtraInitializers);
        __esDecorate(null, null, _y_decorators, { kind: "field", name: "y", static: false, private: false }, _y_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        C = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _staticExtraInitializers);
    })();
    /*28*/
    _y = { value: __runInitializers(_classThis, _static_private_y_initializers, 1) };
    _z_accessor_storage = { value: __runInitializers(_classThis, _static_private_z_initializers, 1) };
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return C = _classThis;
})();
//// [file2.js]
/*34*/
/*36*/
export let D = (() => {
    let _classDecorators = [dec, dec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var D = _classThis = class {
    };
    __setFunctionName(_classThis, "D");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        D = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return D = _classThis;
})();
/*37*/
export default (() => {
    let _classDecorators_1 = [dec, dec];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var E = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "E");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        E = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return E = _classThis_1;
})();
//// [file3.js]
/*40*/
export let F = (() => {
    let _classDecorators = [dec, dec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var F = _classThis = class {
    };
    __setFunctionName(_classThis, "F");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        F = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return F = _classThis;
})();
/*44*/
export default (() => {
    let _classDecorators_1 = [dec, dec];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var G = _classThis_1 = class {
    };
    __setFunctionName(_classThis_1, "G");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        G = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return G = _classThis_1;
})();

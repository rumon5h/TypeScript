//// [esDecorators-classDeclaration-fields-nonStaticPrivateAccessor.ts]
declare let dec: any;

class C {
    @dec accessor #field1 = 0;
}


//// [esDecorators-classDeclaration-fields-nonStaticPrivateAccessor.js]
let C = (() => {
    var _C_instances, _a, _C_field1_accessor_storage, _C_field1_get, _C_field1_set;
    let _instanceExtraInitializers = [];
    let _private_field1_decorators;
    let _private_field1_initializers = [];
    let _private_field1_descriptor;
    return _a = class C {
            constructor() {
                _C_instances.add(this);
                _C_field1_accessor_storage.set(this, (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _private_field1_initializers, 0)));
            }
        },
        _C_field1_accessor_storage = new WeakMap(),
        _C_instances = new WeakSet(),
        _C_field1_get = function _C_field1_get() { return _private_field1_descriptor.get.call(this); },
        _C_field1_set = function _C_field1_set(value) { return _private_field1_descriptor.set.call(this, value); },
        (() => {
            _private_field1_decorators = [dec];
            __esDecorate(_a, _private_field1_descriptor = { get: __setFunctionName(function () { return __classPrivateFieldGet(this, _C_field1_accessor_storage, "f"); }, "#field1", "get"), set: __setFunctionName(function (value) { __classPrivateFieldSet(this, _C_field1_accessor_storage, value, "f"); }, "#field1", "set") }, _private_field1_decorators, { kind: "accessor", name: "#field1", static: false, private: true }, _private_field1_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();

(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var VOID = kotlin_kotlin.$_$.g;
  var iterator = kotlin_kotlin.$_$.j9;
  var CoroutineImpl = kotlin_kotlin.$_$.g7;
  var Unit_instance = kotlin_kotlin.$_$.z3;
  var THROW_CCE = kotlin_kotlin.$_$.ib;
  var SequenceScope = kotlin_kotlin.$_$.i9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q6;
  var initMetadataForLambda = kotlin_kotlin.$_$.f8;
  var intercepted = kotlin_kotlin.$_$.s6;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var resume = kotlin_kotlin.$_$.i7;
  var resumeWithException = kotlin_kotlin.$_$.h7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AsyncIteratorAdapter, 'AsyncIteratorAdapter', VOID, VOID, VOID, [0]);
  initMetadataForLambda(iteratorFromJsIteratorLike$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function get_POW() {
    _init_properties_BigInt_kt__agomkx();
    return POW;
  }
  var POW;
  function get_n(_this__u8e3s4) {
    _init_properties_BigInt_kt__agomkx();
    return BigInt(_this__u8e3s4);
  }
  var properties_initialized_BigInt_kt_nhzooh;
  function _init_properties_BigInt_kt__agomkx() {
    if (!properties_initialized_BigInt_kt_nhzooh) {
      properties_initialized_BigInt_kt_nhzooh = true;
      POW = Function('base', 'exponent', 'return base ** exponent');
    }
  }
  function invoke(_this__u8e3s4, p1, p2) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4(p1, p2);
  }
  function iteratorFromAsyncIterable(source) {
    // Inline function 'js.iterable.AsyncIterator.iterator' call
    var this_0 = source[Symbol.asyncIterator]();
    return iteratorFromAsyncIteratorLike(this_0);
  }
  function iteratorFromAsyncIteratorLike(source) {
    return new AsyncIteratorAdapter(source);
  }
  function AsyncIteratorAdapter(source) {
    this.ft_1 = source;
    this.gt_1 = null;
  }
  function iteratorFromJsIterable(source) {
    // Inline function 'js.iterable.JsIterator.iterator' call
    var this_0 = source[Symbol.iterator]();
    return iteratorFromJsIteratorLike(this_0);
  }
  function iteratorFromJsIteratorLike(source) {
    return iterator(iteratorFromJsIteratorLike$slambda_0(source, null));
  }
  function iteratorFromJsIteratorLike$slambda($source, resultContinuation) {
    this.pt_1 = $source;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(iteratorFromJsIteratorLike$slambda).ut = function ($this$iterator, $completion) {
    var tmp = this.vt($this$iterator, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(iteratorFromJsIteratorLike$slambda).t8 = function (p1, $completion) {
    return this.ut(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(iteratorFromJsIteratorLike$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 5;
            this.b8_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp_1 = this.pt_1.next();
            tmp_0.rt_1 = tmp_1 instanceof constructor ? tmp_1 : null;
            if (this.rt_1 == null) {
              this.b8_1 = 4;
              var tmp_2 = this;
              continue $sm;
            } else {
              this.st_1 = this.rt_1;
              this.b8_1 = 2;
              continue $sm;
            }

          case 2:
            this.tt_1 = this.st_1;
            this.b8_1 = 3;
            suspendResult = this.qt_1.he(this.tt_1.value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b8_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 5) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(iteratorFromJsIteratorLike$slambda).vt = function ($this$iterator, completion) {
    var i = new iteratorFromJsIteratorLike$slambda(this.pt_1, completion);
    i.qt_1 = $this$iterator;
    return i;
  };
  function iteratorFromJsIteratorLike$slambda_0($source, resultContinuation) {
    var i = new iteratorFromJsIteratorLike$slambda($source, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.ut($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function copy(_this__u8e3s4, enumerable, value, get, writable, set, configurable) {
    enumerable = enumerable === VOID ? VOID : enumerable;
    value = value === VOID ? VOID : value;
    get = get === VOID ? VOID : get;
    writable = writable === VOID ? VOID : writable;
    set = set === VOID ? VOID : set;
    configurable = configurable === VOID ? VOID : configurable;
    return Object.assign({}, _this__u8e3s4, {enumerable: enumerable, value: value, get: get, writable: writable, set: set, configurable: configurable});
  }
  function invoke_0(_this__u8e3s4, enumerable, value, get, writable, set, configurable) {
    enumerable = enumerable === VOID ? VOID : enumerable;
    value = value === VOID ? VOID : value;
    get = get === VOID ? VOID : get;
    writable = writable === VOID ? VOID : writable;
    set = set === VOID ? VOID : set;
    configurable = configurable === VOID ? VOID : configurable;
    return {enumerable: enumerable, value: value, get: get, writable: writable, set: set, configurable: configurable};
  }
  function awaitPromiseLike(promise, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.tm();
    // Inline function 'js.promise.internal.awaitPromiseLike.stub_for_inlining' call
    thenToContinuation(promise, cancellable);
    return cancellable.dn();
  }
  function thenToContinuation(promise, continuation) {
    var tmp = resume$ref(continuation);
    promise.then(tmp, resumeWithException$ref(continuation));
  }
  function resume$ref($boundThis) {
    var l = function (p0) {
      resume($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resume';
    return l;
  }
  function resumeWithException$ref($boundThis) {
    var l = function (p0) {
      resumeWithException($boundThis, p0);
      return Unit_instance;
    };
    l.callableName = 'resumeWithException';
    return l;
  }
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js')));

//# sourceMappingURL=kotlin-js.js.map

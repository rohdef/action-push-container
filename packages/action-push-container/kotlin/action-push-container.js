(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Exec, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_charleskorn_kaml_kaml, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.v8;
  var initMetadataForClass = kotlin_kotlin.$_$.z7;
  var VOID = kotlin_kotlin.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.e7;
  var THROW_CCE = kotlin_kotlin.$_$.gb;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o6;
  var Exception = kotlin_kotlin.$_$.ya;
  var initMetadataForLambda = kotlin_kotlin.$_$.d8;
  var emptyList = kotlin_kotlin.$_$.i5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.zb;
  var plus = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.m4;
  var joinToString = kotlin_kotlin.$_$.q5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.b8;
  var get_EmptyContinuation = kotlin_kotlin.$_$.s6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.n8;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var initMetadataForCompanion = kotlin_kotlin.$_$.a8;
  var getStringHashCode = kotlin_kotlin.$_$.x7;
  var Companion_getInstance = kotlin_com_charleskorn_kaml_kaml.$_$.a;
  var KtList = kotlin_kotlin.$_$.f4;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o3;
  var arrayOf = kotlin_kotlin.$_$.ub;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toString = kotlin_kotlin.$_$.y8;
  var hashCode = kotlin_kotlin.$_$.y7;
  var THROW_IAE = kotlin_kotlin.$_$.hb;
  var Enum = kotlin_kotlin.$_$.wa;
  var equals = kotlin_kotlin.$_$.t7;
  var initMetadataForObject = kotlin_kotlin.$_$.e8;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ActionEnvironment, 'ActionEnvironment');
  initMetadataForLambda(actionInfo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(actionInfo$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(main$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($actionInfoCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(Core$run$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$run$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Core$group$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Core_0, 'Core', VOID, VOID, VOID, [2]);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Strategy, 'Strategy', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Inputs, 'Inputs');
  initMetadataForObject(InputNames, 'InputNames');
  //endregion
  function actionInfo(_this__u8e3s4, $completion) {
    var tmp = new $actionInfoCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  }
  function ActionEnvironment(process) {
    this.k1z_1 = process;
    this.l1z_1 = 'GITHUB_ACTOR';
    this.m1z_1 = 'GITHUB_SHA';
    this.n1z_1 = 'GITHUB_REPOSITORY';
    this.o1z_1 = 'GITHUB_RUN_ID';
    this.p1z_1 = 'GITHUB_SERVER_URL';
    this.q1z_1 = this.w1z(this.k1z_1, this.l1z_1);
    this.r1z_1 = this.w1z(this.k1z_1, this.m1z_1);
    this.s1z_1 = this.w1z(this.k1z_1, this.n1z_1);
    this.t1z_1 = this.w1z(this.k1z_1, this.o1z_1);
    this.u1z_1 = this.w1z(this.k1z_1, this.p1z_1);
    this.v1z_1 = this.u1z_1 + '/' + this.s1z_1;
  }
  protoOf(ActionEnvironment).w1z = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.k1z_1.env[key];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(key + ' environment variable is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function main($completion) {
    var tmp = new Core_0();
    return tmp.y1z(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).i20 = function ($this$group, $completion) {
    var tmp = this.j20($this$group, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(actionInfo$slambda).t8 = function (p1, $completion) {
    return this.i20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 3;
            this.c8_1 = 2;
            this.b8_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c8_1 = 3;
            this.b8_1 = 4;
            continue $sm;
          case 2:
            this.c8_1 = 3;
            var tmp_0 = this.e8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.e8_1;
              var tmp0_elvis_lhs = exception.message;
              this.h20_1.k20(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.b8_1 = 4;
              continue $sm;
            } else {
              throw this.e8_1;
            }

          case 3:
            throw this.e8_1;
          case 4:
            this.c8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 3) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).j20 = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.h20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.i20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).i20 = function ($this$group, $completion) {
    var tmp = this.j20($this$group, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(actionInfo$slambda_1).t8 = function (p1, $completion) {
    return this.i20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 4;
            this.c8_1 = 3;
            this.b8_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b8_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.c8_1 = 4;
            this.b8_1 = 5;
            continue $sm;
          case 3:
            this.c8_1 = 4;
            var tmp_0 = this.e8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.e8_1;
              var tmp0_elvis_lhs = exception.message;
              this.t20_1.u20(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.b8_1 = 5;
              continue $sm;
            } else {
              throw this.e8_1;
            }

          case 4:
            throw this.e8_1;
          case 5:
            this.c8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 4) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).j20 = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.t20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.i20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).i20 = function ($this$run, $completion) {
    var tmp = this.j20($this$run, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(main$slambda).t8 = function (p1, $completion) {
    return this.i20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 3;
            this.b8_1 = 1;
            suspendResult = actionInfo(this.d21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e21_1 = new ActionEnvironment(node_process_process_dcpv5o);
            this.d21_1.u20('Starting push workflow with the following input:\n' + this.d21_1.x1z_1.toString());
            var tmp_0 = this;
            var tmp_1;
            switch (_AutoTagging___get_strategy__impl__et9b2r(this.d21_1.x1z_1.l21_1).e2_1) {
              case 0:
                tmp_1 = emptyList();
                break;
              case 1:
                tmp_1 = emptyList();
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            tmp_0.f21_1 = tmp_1;
            this.g21_1 = plus(this.f21_1, _DestinationTags___get_tags__impl__3v3frm(this.d21_1.x1z_1.m21_1));
            var tmp_2 = this;
            var tmp0 = _DestinationImageNames___get_names__impl__7h7cij(this.d21_1.x1z_1.k21_1);
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.h();
            while (_iterator__ex2g4s.i()) {
              var element = _iterator__ex2g4s.j();
              var this_0 = this.g21_1;
              var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
              var _iterator__ex2g4s_0 = this_0.h();
              while (_iterator__ex2g4s_0.i()) {
                var item = _iterator__ex2g4s_0.j();
                destination_0.e(element + ':' + item);
              }
              var list = destination_0;
              addAll(destination, list);
            }

            tmp_2.h21_1 = destination;
            this.d21_1.u20('The following images with tags will be pushed: ' + joinToString(this.h21_1, ', '));
            var _iterator__ex2g4s_1 = _DestinationHosts___get_hosts__impl__2byyiq(this.d21_1.x1z_1.j21_1).h();
            while (_iterator__ex2g4s_1.i()) {
              var element_0 = _iterator__ex2g4s_1.j();
              this.d21_1.u20('\tPusing images with tags to [' + element_0 + ']');
              var _iterator__ex2g4s_2 = this.h21_1.h();
              while (_iterator__ex2g4s_2.i()) {
                var element_1 = _iterator__ex2g4s_2.j();
                var destination_1 = element_0 + '/' + element_1;
                this.d21_1.u20('docker tag \\');
                this.d21_1.u20('\\t"' + ImageId__toString_impl_z02tf9(this.d21_1.x1z_1.i21_1) + '" \\');
                this.d21_1.u20('\\t"' + destination_1 + '" ');
                this.d21_1.u20('docker push "' + destination_1 + '" ');
              }
            }

            this.b8_1 = 2;
            var tmp_3 = Exec;
            var this_1 = ['inspect', '--format', '{{index .RepoDigests 0}}', _ImageId___get_value__impl__k780on(this.d21_1.x1z_1.i21_1)];
            suspendResult = await_0(tmp_3.getExecOutput('docker', this_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var imageDigestOutput = suspendResult;
            if (imageDigestOutput.exitCode === 0) {
              var digest = imageDigestOutput.stdout;
              this.d21_1.u20('Digest: [' + digest + ']');
              this.d21_1.o21('digest', digest);
            } else {
              this.d21_1.n21('Could not get docker image digest');
            }

            return Unit_instance;
          case 3:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 3) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).j20 = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.d21_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.i20($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1z_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 3;
            this.b8_1 = 1;
            suspendResult = this.j1z_1.p21('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b8_1 = 2;
            suspendResult = this.j1z_1.p21('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 3) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.y21_1 = $main;
    this.z21_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).b22 = function ($this$promise, $completion) {
    var tmp = this.c22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$run$lambda$slambda).t8 = function (p1, $completion) {
    return this.b22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 2;
            this.b8_1 = 1;
            suspendResult = this.y21_1(this.z21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 2) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).c22 = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.y21_1, this.z21_1, completion);
    i.a22_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.b22($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda($main, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$run$lambda$slambda_0($main, this$0, null));
    };
  }
  function Core$run$slambda($it, this$0, resultContinuation) {
    this.l22_1 = $it;
    this.m22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).b22 = function ($this$promise, $completion) {
    var tmp = this.c22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$run$slambda).t8 = function (p1, $completion) {
    return this.b22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 2;
            this.b8_1 = 1;
            suspendResult = this.l22_1(this.m22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 2) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).c22 = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.l22_1, this.m22_1, completion);
    i.n22_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.b22($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda_0($it) {
    return function () {
      return $it;
    };
  }
  function Core$getInput$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.getInput(p0);
    };
    l.callableName = 'getInput';
    return l;
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.w22_1 = $contents;
    this.x22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).b22 = function ($this$promise, $completion) {
    var tmp = this.c22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$group$lambda$slambda).t8 = function (p1, $completion) {
    return this.b22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 2;
            this.b8_1 = 1;
            suspendResult = this.w22_1(this.x22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 2) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).c22 = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.w22_1, this.x22_1, completion);
    i.y22_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.b22($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$group$lambda($contents, this$0) {
    return function () {
      var tmp = GlobalScope_instance;
      return promise(tmp, VOID, VOID, Core$group$lambda$slambda_0($contents, this$0, null));
    };
  }
  function Core_0() {
    var tmp = this;
    var tmp_0 = Companion_instance_4;
    tmp.x1z_1 = tmp_0.z22(Core$getInput$ref(Core));
  }
  protoOf(Core_0).a23 = function (main, post, $completion) {
    var tmp = actionsToolkit;
    var tmp_0 = Core$run$lambda(main, this);
    var tmp_1;
    if (post == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.github.Core.run.<anonymous>' call
      var tmp_2 = GlobalScope_instance;
      tmp_1 = promise(tmp_2, VOID, VOID, Core$run$slambda_0(post, this, null));
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'dk.rohdef.actions.github.Core.run.<anonymous>' call
      tmp_3 = Core$run$lambda_0(tmp1_safe_receiver);
    }
    return tmp.run(tmp_0, tmp_3, $completion);
  };
  protoOf(Core_0).y1z = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.a23(main, post, $completion) : $super.a23.call(this, main, post, $completion);
  };
  protoOf(Core_0).p21 = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).o21 = function (name, value) {
    return Core.setOutput(name, value);
  };
  protoOf(Core_0).n21 = function (message) {
    return Core.setFailed(message);
  };
  protoOf(Core_0).u20 = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).k20 = function (message) {
    return Core.warning(message);
  };
  function _ImageId___init__impl__dvdkrh(value) {
    return value;
  }
  function _ImageId___get_value__impl__k780on($this) {
    return $this;
  }
  function Companion() {
  }
  protoOf(Companion).b23 = function (value) {
    return _ImageId___init__impl__dvdkrh(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function ImageId__toString_impl_z02tf9($this) {
    return 'ImageId(value=' + $this + ')';
  }
  function ImageId__hashCode_impl_e9vbr0($this) {
    return getStringHashCode($this);
  }
  function _DestinationHosts___init__impl__us4jj0(hosts) {
    return hosts;
  }
  function _DestinationHosts___get_hosts__impl__2byyiq($this) {
    return $this;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).c23 = function (value) {
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().t1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.yw();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var hosts = this_0.w1o(tmp$ret$1, value);
    return _DestinationHosts___init__impl__us4jj0(hosts);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function DestinationHosts__toString_impl_pd5pt0($this) {
    return 'DestinationHosts(hosts=' + toString($this) + ')';
  }
  function DestinationHosts__hashCode_impl_3lzt05($this) {
    return hashCode($this);
  }
  function _DestinationImageNames___init__impl__tkt3vi(names) {
    return names;
  }
  function _DestinationImageNames___get_names__impl__7h7cij($this) {
    return $this;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).d23 = function (value) {
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().t1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.yw();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var names = this_0.w1o(tmp$ret$1, value);
    return _DestinationImageNames___init__impl__tkt3vi(names);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function DestinationImageNames__toString_impl_n7y8h2($this) {
    return 'DestinationImageNames(names=' + toString($this) + ')';
  }
  function DestinationImageNames__hashCode_impl_1gsbo7($this) {
    return hashCode($this);
  }
  var Strategy_TAGS_AS_RELEASE_instance;
  var Strategy_DISABLED_instance;
  function valueOf(value) {
    switch (value) {
      case 'TAGS_AS_RELEASE':
        return Strategy_TAGS_AS_RELEASE_getInstance();
      case 'DISABLED':
        return Strategy_DISABLED_getInstance();
      default:
        Strategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Strategy_entriesInitialized;
  function Strategy_initEntries() {
    if (Strategy_entriesInitialized)
      return Unit_instance;
    Strategy_entriesInitialized = true;
    Strategy_TAGS_AS_RELEASE_instance = new Strategy('TAGS_AS_RELEASE', 0);
    Strategy_DISABLED_instance = new Strategy('DISABLED', 1);
  }
  function _AutoTagging___init__impl__eihvgt(strategy) {
    return strategy;
  }
  function _AutoTagging___get_strategy__impl__et9b2r($this) {
    return $this;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).e23 = function (value) {
    var strategy = valueOf(value);
    return _AutoTagging___init__impl__eihvgt(strategy);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Strategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AutoTagging__toString_impl_i8zzqd($this) {
    return 'AutoTagging(strategy=' + $this.toString() + ')';
  }
  function AutoTagging__hashCode_impl_v0y5fw($this) {
    return $this.hashCode();
  }
  function Strategy_TAGS_AS_RELEASE_getInstance() {
    Strategy_initEntries();
    return Strategy_TAGS_AS_RELEASE_instance;
  }
  function Strategy_DISABLED_getInstance() {
    Strategy_initEntries();
    return Strategy_DISABLED_instance;
  }
  function _DestinationTags___init__impl__pi708i(tags) {
    return tags;
  }
  function _DestinationTags___get_tags__impl__3v3frm($this) {
    return $this;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).f23 = function (value) {
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().t1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.yw();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tags = this_0.w1o(tmp$ret$1, value);
    return _DestinationTags___init__impl__pi708i(tags);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function DestinationTags__toString_impl_dgmv46($this) {
    return 'DestinationTags(tags=' + toString($this) + ')';
  }
  function DestinationTags__hashCode_impl_z7srx1($this) {
    return hashCode($this);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).z22 = function (getInput) {
    return new Inputs(Companion_instance.b23(getInput(InputNames_instance.g23_1)), Companion_instance_0.c23(getInput(InputNames_instance.h23_1)), Companion_instance_1.d23(getInput(InputNames_instance.i23_1)), Companion_instance_2.e23(getInput(InputNames_instance.j23_1)), Companion_instance_3.f23(getInput(InputNames_instance.k23_1)));
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Inputs(imageId, destinationHosts, destinationImageNames, autoTagging, destinationTags) {
    this.i21_1 = imageId;
    this.j21_1 = destinationHosts;
    this.k21_1 = destinationImageNames;
    this.l21_1 = autoTagging;
    this.m21_1 = destinationTags;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(imageId=' + ImageId__toString_impl_z02tf9(this.i21_1) + ', destinationHosts=' + DestinationHosts__toString_impl_pd5pt0(this.j21_1) + ', destinationImageNames=' + DestinationImageNames__toString_impl_n7y8h2(this.k21_1) + ', autoTagging=' + AutoTagging__toString_impl_i8zzqd(this.l21_1) + ', destinationTags=' + DestinationTags__toString_impl_dgmv46(this.m21_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = ImageId__hashCode_impl_e9vbr0(this.i21_1);
    result = imul(result, 31) + DestinationHosts__hashCode_impl_3lzt05(this.j21_1) | 0;
    result = imul(result, 31) + DestinationImageNames__hashCode_impl_1gsbo7(this.k21_1) | 0;
    result = imul(result, 31) + AutoTagging__hashCode_impl_v0y5fw(this.l21_1) | 0;
    result = imul(result, 31) + DestinationTags__hashCode_impl_z7srx1(this.m21_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!(this.i21_1 === tmp0_other_with_cast.i21_1))
      return false;
    if (!equals(this.j21_1, tmp0_other_with_cast.j21_1))
      return false;
    if (!equals(this.k21_1, tmp0_other_with_cast.k21_1))
      return false;
    if (!equals(this.l21_1, tmp0_other_with_cast.l21_1))
      return false;
    if (!equals(this.m21_1, tmp0_other_with_cast.m21_1))
      return false;
    return true;
  };
  function InputNames() {
    this.g23_1 = 'imageid';
    this.h23_1 = 'destinationHosts';
    this.i23_1 = 'destinationImageNames';
    this.j23_1 = 'autoTagging';
    this.k23_1 = 'destinationTags';
  }
  var InputNames_instance;
  function InputNames_getInstance() {
    return InputNames_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  InputNames_instance = new InputNames();
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('node:process'), require('@actions/exec'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kaml.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js')));

//# sourceMappingURL=action-push-container.js.map

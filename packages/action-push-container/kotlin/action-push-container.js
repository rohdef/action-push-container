(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Exec, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_charleskorn_kaml_kaml, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var VOID = kotlin_kotlin.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.ib;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q6;
  var Exception = kotlin_kotlin.$_$.ab;
  var initMetadataForLambda = kotlin_kotlin.$_$.f8;
  var emptyList = kotlin_kotlin.$_$.j5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.bc;
  var plus = kotlin_kotlin.$_$.y5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.n4;
  var joinToString = kotlin_kotlin.$_$.s5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.d8;
  var get_EmptyContinuation = kotlin_kotlin.$_$.u6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.p8;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Enum = kotlin_kotlin.$_$.ya;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c8;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var toString = kotlin_kotlin.$_$.a9;
  var hashCode = kotlin_kotlin.$_$.a8;
  var THROW_IAE = kotlin_kotlin.$_$.jb;
  var toList = kotlin_kotlin.$_$.j6;
  var getKClass = kotlin_kotlin.$_$.f;
  var firstOrNull = kotlin_kotlin.$_$.m5;
  var toString_0 = kotlin_kotlin.$_$.ec;
  var IllegalArgumentException = kotlin_kotlin.$_$.bb;
  var equals = kotlin_kotlin.$_$.v7;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var Companion_getInstance = kotlin_com_charleskorn_kaml_kaml.$_$.b;
  var KtList = kotlin_kotlin.$_$.g4;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p3;
  var arrayOf = kotlin_kotlin.$_$.wb;
  var createKType = kotlin_kotlin.$_$.c;
  var createKTypeParameter = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var IncorrectTypeException = kotlin_com_charleskorn_kaml_kaml.$_$.a;
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
  initMetadataForClass(InputName, 'InputName', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Strategy, 'Strategy', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Inputs, 'Inputs');
  initMetadataForClass(OutputName, 'OutputName', VOID, Enum);
  //endregion
  function actionInfo(_this__u8e3s4, $completion) {
    var tmp = new $actionInfoCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  }
  function ActionEnvironment(process) {
    this.o1z_1 = process;
    this.p1z_1 = 'GITHUB_ACTOR';
    this.q1z_1 = 'GITHUB_SHA';
    this.r1z_1 = 'GITHUB_REPOSITORY';
    this.s1z_1 = 'GITHUB_RUN_ID';
    this.t1z_1 = 'GITHUB_SERVER_URL';
    this.u1z_1 = this.a20(this.o1z_1, this.p1z_1);
    this.v1z_1 = this.a20(this.o1z_1, this.q1z_1);
    this.w1z_1 = this.a20(this.o1z_1, this.r1z_1);
    this.x1z_1 = this.a20(this.o1z_1, this.s1z_1);
    this.y1z_1 = this.a20(this.o1z_1, this.t1z_1);
    this.z1z_1 = this.y1z_1 + '/' + this.w1z_1;
  }
  protoOf(ActionEnvironment).a20 = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.o1z_1.env[key];
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
    return tmp.c20(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).m20 = function ($this$group, $completion) {
    var tmp = this.n20($this$group, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(actionInfo$slambda).t8 = function (p1, $completion) {
    return this.m20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
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
              this.l20_1.o20(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
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
  protoOf(actionInfo$slambda).n20 = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.l20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.m20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).m20 = function ($this$group, $completion) {
    var tmp = this.n20($this$group, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(actionInfo$slambda_1).t8 = function (p1, $completion) {
    return this.m20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
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
              this.x20_1.y20(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
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
  protoOf(actionInfo$slambda_1).n20 = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.x20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.m20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).m20 = function ($this$run, $completion) {
    var tmp = this.n20($this$run, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(main$slambda).t8 = function (p1, $completion) {
    return this.m20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).j8 = function () {
    var suspendResult = this.d8_1;
    $sm: do
      try {
        var tmp = this.b8_1;
        switch (tmp) {
          case 0:
            this.c8_1 = 8;
            this.b8_1 = 1;
            suspendResult = actionInfo(this.h21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i21_1 = new ActionEnvironment(node_process_process_dcpv5o);
            this.h21_1.y20('Starting push workflow with the following input:\n' + this.h21_1.b20_1.toString());
            var tmp_0 = this;
            var tmp_1;
            switch (_AutoTagging___get_strategy__impl__et9b2r(this.h21_1.b20_1.f22_1).e2_1) {
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

            tmp_0.j21_1 = tmp_1;
            this.k21_1 = plus(this.j21_1, _DestinationTags___get_tags__impl__3v3frm(this.h21_1.b20_1.g22_1));
            var tmp_2 = this;
            var tmp0 = _DestinationImageNames___get_names__impl__7h7cij(this.h21_1.b20_1.e22_1);
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.h();
            while (_iterator__ex2g4s.i()) {
              var element = _iterator__ex2g4s.j();
              var this_0 = this.k21_1;
              var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
              var _iterator__ex2g4s_0 = this_0.h();
              while (_iterator__ex2g4s_0.i()) {
                var item = _iterator__ex2g4s_0.j();
                destination_0.e(element + ':' + item);
              }
              var list = destination_0;
              addAll(destination, list);
            }

            tmp_2.l21_1 = destination;
            this.h21_1.y20('The following images with tags will be pushed: ' + joinToString(this.l21_1, ', '));
            var tmp_3 = this;
            tmp_3.m21_1 = ArrayList_init_$Create$();
            var tmp_4 = this;
            tmp_4.n21_1 = _DestinationHosts___get_hosts__impl__2byyiq(this.h21_1.b20_1.d22_1);
            this.o21_1 = this.n21_1;
            this.p21_1 = this.o21_1.h();
            this.b8_1 = 2;
            continue $sm;
          case 2:
            if (!this.p21_1.i()) {
              this.b8_1 = 6;
              continue $sm;
            }

            this.q21_1 = this.p21_1.j();
            var tmp_5 = this;
            tmp_5.r21_1 = this.q21_1;
            this.s21_1 = this.r21_1;
            this.h21_1.y20('\tPusing images with tags to [' + this.s21_1 + ']');
            var tmp_6 = this;
            tmp_6.t21_1 = this.l21_1;
            this.u21_1 = this.t21_1;
            this.v21_1 = this.u21_1.h();
            this.b8_1 = 3;
            continue $sm;
          case 3:
            if (!this.v21_1.i()) {
              this.b8_1 = 5;
              continue $sm;
            }

            this.w21_1 = this.v21_1.j();
            var tmp_7 = this;
            tmp_7.x21_1 = this.w21_1;
            this.y21_1 = this.x21_1;
            this.z21_1 = this.s21_1 + '/' + this.y21_1;
            this.b8_1 = 4;
            var tmp_8 = Exec;
            var this_1 = ['tag', _ImageId___get_value__impl__k780on(this.h21_1.b20_1.c22_1), this.z21_1];
            suspendResult = await_0(tmp_8.getExecOutput('docker', this_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.a22_1 = suspendResult;
            if (!(this.a22_1.exitCode === 0)) {
              this.h21_1.h22('Could not add tag to image');
              this.h21_1.h22('    image: ' + _ImageId___get_value__impl__k780on(this.h21_1.b20_1.c22_1));
              this.h21_1.h22('    tag: ' + this.z21_1);
              this.h21_1.i22('Could not add tag [' + this.z21_1 + '] to image [' + _ImageId___get_value__impl__k780on(this.h21_1.b20_1.c22_1) + "]'");
            }

            var tmp1 = this.m21_1;
            var element_0 = this.z21_1;
            tmp1.e(element_0);
            this.b8_1 = 3;
            continue $sm;
          case 5:
            this.b8_1 = 2;
            continue $sm;
          case 6:
            var tmp_9 = this;
            tmp_9.b22_1 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_1 = this.m21_1.h();
            while (_iterator__ex2g4s_1.i()) {
              var element_1 = _iterator__ex2g4s_1.j();
              this.h21_1.y20('docker push "' + element_1 + '" ');
              this.b22_1.e(element_1);
            }

            var tmp_10 = OutputName_IMAGES_PUSHED_getInstance();
            var this_2 = this.b22_1;
            var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
            var _iterator__ex2g4s_2 = this_2.h();
            while (_iterator__ex2g4s_2.i()) {
              var item_0 = _iterator__ex2g4s_2.j();
              destination_1.e('- ' + item_0);
            }

            this.h21_1.j22(tmp_10, joinToString(destination_1, '\n'));
            this.b8_1 = 7;
            var tmp_11 = Exec;
            var this_3 = ['inspect', '--format', '{{index .RepoDigests 0}}', _ImageId___get_value__impl__k780on(this.h21_1.b20_1.c22_1)];
            suspendResult = await_0(tmp_11.getExecOutput('docker', this_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var imageDigestOutput = suspendResult;
            if (imageDigestOutput.exitCode === 0) {
              var digest = imageDigestOutput.stdout;
              this.h21_1.y20('Digest: [' + digest + ']');
              this.h21_1.j22(OutputName_DIGEST_getInstance(), digest);
            } else {
              this.h21_1.i22('Could not get docker image digest');
            }

            return Unit_instance;
          case 8:
            throw this.e8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c8_1 === 8) {
          throw e;
        } else {
          this.b8_1 = this.c8_1;
          this.e8_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).n20 = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.h21_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.m20($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1z_1 = _this__u8e3s4;
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
            suspendResult = this.n1z_1.k22('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b8_1 = 2;
            suspendResult = this.n1z_1.k22('Docker info', actionInfo$slambda_2(null), this);
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
    this.t22_1 = $main;
    this.u22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).w22 = function ($this$promise, $completion) {
    var tmp = this.x22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$run$lambda$slambda).t8 = function (p1, $completion) {
    return this.w22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.t22_1(this.u22_1, this);
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
  protoOf(Core$run$lambda$slambda).x22 = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.t22_1, this.u22_1, completion);
    i.v22_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w22($this$promise, $completion);
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
    this.g23_1 = $it;
    this.h23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).w22 = function ($this$promise, $completion) {
    var tmp = this.x22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$run$slambda).t8 = function (p1, $completion) {
    return this.w22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.g23_1(this.h23_1, this);
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
  protoOf(Core$run$slambda).x22 = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.g23_1, this.h23_1, completion);
    i.i23_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w22($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Core$run$lambda_0($it) {
    return function () {
      return $it;
    };
  }
  function Core$inputs$lambda(it) {
    return Core.getInput(it.l23_1);
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.u23_1 = $contents;
    this.v23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).w22 = function ($this$promise, $completion) {
    var tmp = this.x22($this$promise, $completion);
    tmp.d8_1 = Unit_instance;
    tmp.e8_1 = null;
    return tmp.j8();
  };
  protoOf(Core$group$lambda$slambda).t8 = function (p1, $completion) {
    return this.w22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.u23_1(this.v23_1, this);
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
  protoOf(Core$group$lambda$slambda).x22 = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.u23_1, this.v23_1, completion);
    i.w23_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w22($this$promise, $completion);
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
    tmp.b20_1 = tmp_0.x23(Core$inputs$lambda);
  }
  protoOf(Core_0).y23 = function (main, post, $completion) {
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
  protoOf(Core_0).c20 = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.y23(main, post, $completion) : $super.y23.call(this, main, post, $completion);
  };
  protoOf(Core_0).k22 = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).j22 = function (name, value) {
    return Core.setOutput(name.b24_1, value);
  };
  protoOf(Core_0).i22 = function (message) {
    return Core.setFailed(message);
  };
  protoOf(Core_0).y20 = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).o20 = function (message) {
    return Core.warning(message);
  };
  protoOf(Core_0).h22 = function (message) {
    return Core.error(message);
  };
  var InputName_IMAGE_ID_instance;
  var InputName_DESTINATION_HOSTS_instance;
  var InputName_DESTINATION_IMAGE_NAMES_instance;
  var InputName_AUTO_TAGGING_instance;
  var InputName_DESTINATION_TAGS_instance;
  var InputName_entriesInitialized;
  function InputName_initEntries() {
    if (InputName_entriesInitialized)
      return Unit_instance;
    InputName_entriesInitialized = true;
    InputName_IMAGE_ID_instance = new InputName('IMAGE_ID', 0, 'image-id');
    InputName_DESTINATION_HOSTS_instance = new InputName('DESTINATION_HOSTS', 1, 'destination-hosts');
    InputName_DESTINATION_IMAGE_NAMES_instance = new InputName('DESTINATION_IMAGE_NAMES', 2, 'destination-image-names');
    InputName_AUTO_TAGGING_instance = new InputName('AUTO_TAGGING', 3, 'auto-tagging');
    InputName_DESTINATION_TAGS_instance = new InputName('DESTINATION_TAGS', 4, 'destination-tags');
  }
  function InputName(name, ordinal, actionName) {
    Enum.call(this, name, ordinal);
    this.l23_1 = actionName;
  }
  function InputName_IMAGE_ID_getInstance() {
    InputName_initEntries();
    return InputName_IMAGE_ID_instance;
  }
  function InputName_DESTINATION_HOSTS_getInstance() {
    InputName_initEntries();
    return InputName_DESTINATION_HOSTS_instance;
  }
  function InputName_DESTINATION_IMAGE_NAMES_getInstance() {
    InputName_initEntries();
    return InputName_DESTINATION_IMAGE_NAMES_instance;
  }
  function InputName_AUTO_TAGGING_getInstance() {
    InputName_initEntries();
    return InputName_AUTO_TAGGING_instance;
  }
  function InputName_DESTINATION_TAGS_getInstance() {
    InputName_initEntries();
    return InputName_DESTINATION_TAGS_instance;
  }
  function _ImageId___init__impl__dvdkrh(value) {
    return value;
  }
  function _ImageId___get_value__impl__k780on($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.c24_1 = InputName_IMAGE_ID_getInstance();
  }
  protoOf(Companion).d24 = function (getInput) {
    return this.e24(getInput(this.c24_1));
  };
  protoOf(Companion).e24 = function (value) {
    return _ImageId___init__impl__dvdkrh(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
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
    Companion_instance_0 = this;
    this.f24_1 = InputName_DESTINATION_HOSTS_getInstance();
  }
  protoOf(Companion_0).g24 = function (getInput) {
    return this.h24(getInput(this.f24_1));
  };
  protoOf(Companion_0).h24 = function (value) {
    return _DestinationHosts___init__impl__us4jj0(parseYamlList(value, this.f24_1));
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
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
    Companion_instance_1 = this;
    this.i24_1 = InputName_DESTINATION_IMAGE_NAMES_getInstance();
  }
  protoOf(Companion_1).j24 = function (getInput) {
    return this.k24(getInput(this.i24_1));
  };
  protoOf(Companion_1).k24 = function (value) {
    return _DestinationImageNames___init__impl__tkt3vi(parseYamlList(value, this.i24_1));
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
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
  function values() {
    return [Strategy_TAGS_AS_RELEASE_getInstance(), Strategy_DISABLED_getInstance()];
  }
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
    Companion_instance_2 = this;
    this.l24_1 = InputName_AUTO_TAGGING_getInstance();
  }
  protoOf(Companion_2).m24 = function (getInput) {
    return this.n24(getInput(this.l24_1));
  };
  protoOf(Companion_2).n24 = function (value) {
    var tmp1 = this.l24_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dk.rohdef.actions.github.parseEnumInput' call
      // Inline function 'kotlin.enumValues' call
      var tmp$ret$0 = values();
      var values_0 = toList(tmp$ret$0);
      var defaultErrorContent = '\nAttempted to parse: ' + tmp1.l23_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + value + '\n--- END  INPUT ---\n\nMake that the input is an enum of the type ' + getKClass(Strategy).q9() + ' e.g.,:\n\n' + tmp1.l23_1 + ': ' + toString_0(firstOrNull(values_0)) + '\n\nValid values are: ' + joinToString(values_0, ', ') + '\n        ';
      try {
        // Inline function 'kotlin.text.uppercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.enumValueOf' call
        var name = value.toUpperCase();
        tmp$ret$4 = valueOf(name);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var exception = $p;
          asParsingError(exception, 'Could not parse to enum: ' + exception.message, defaultErrorContent);
        } else {
          if ($p instanceof Exception) {
            var exception_0 = $p;
            asParsingError(exception_0, 'Unknown error occured when parsing.', defaultErrorContent);
          } else {
            throw $p;
          }
        }
      }
    }
    return _AutoTagging___init__impl__eihvgt(tmp$ret$4);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
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
    Companion_instance_3 = this;
    this.o24_1 = InputName_DESTINATION_TAGS_getInstance();
  }
  protoOf(Companion_3).p24 = function (getInput) {
    return this.q24(getInput(this.o24_1));
  };
  protoOf(Companion_3).q24 = function (value) {
    return _DestinationTags___init__impl__pi708i(parseYamlList(value, this.o24_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
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
  protoOf(Companion_4).x23 = function (getInput) {
    return new Inputs(Companion_getInstance_0().d24(getInput), Companion_getInstance_1().g24(getInput), Companion_getInstance_2().j24(getInput), Companion_getInstance_3().m24(getInput), Companion_getInstance_4().p24(getInput));
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Inputs(imageId, destinationHosts, destinationImageNames, autoTagging, destinationTags) {
    this.c22_1 = imageId;
    this.d22_1 = destinationHosts;
    this.e22_1 = destinationImageNames;
    this.f22_1 = autoTagging;
    this.g22_1 = destinationTags;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(imageId=' + ImageId__toString_impl_z02tf9(this.c22_1) + ', destinationHosts=' + DestinationHosts__toString_impl_pd5pt0(this.d22_1) + ', destinationImageNames=' + DestinationImageNames__toString_impl_n7y8h2(this.e22_1) + ', autoTagging=' + AutoTagging__toString_impl_i8zzqd(this.f22_1) + ', destinationTags=' + DestinationTags__toString_impl_dgmv46(this.g22_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = ImageId__hashCode_impl_e9vbr0(this.c22_1);
    result = imul(result, 31) + DestinationHosts__hashCode_impl_3lzt05(this.d22_1) | 0;
    result = imul(result, 31) + DestinationImageNames__hashCode_impl_1gsbo7(this.e22_1) | 0;
    result = imul(result, 31) + AutoTagging__hashCode_impl_v0y5fw(this.f22_1) | 0;
    result = imul(result, 31) + DestinationTags__hashCode_impl_z7srx1(this.g22_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!(this.c22_1 === tmp0_other_with_cast.c22_1))
      return false;
    if (!equals(this.d22_1, tmp0_other_with_cast.d22_1))
      return false;
    if (!equals(this.e22_1, tmp0_other_with_cast.e22_1))
      return false;
    if (!equals(this.f22_1, tmp0_other_with_cast.f22_1))
      return false;
    if (!equals(this.g22_1, tmp0_other_with_cast.g22_1))
      return false;
    return true;
  };
  function asParsingError(_this__u8e3s4, message, defaultErrorContent) {
    throw IllegalArgumentException_init_$Create$_0('\n' + message + '\n\n' + defaultErrorContent + '\n        ', _this__u8e3s4);
  }
  function parseYamlList(_this__u8e3s4, inputName) {
    var defaultErrorContent = '\nAttempted to parse: ' + inputName.l23_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + _this__u8e3s4 + '\n--- END  INPUT ---\n\nMake that the input is a string containing a yaml list of strings, e.g.,:\n\n' + inputName.l23_1 + ': |\n    - foo\n    - bar\n    - baz\n        ';
    try {
      // Inline function 'kotlinx.serialization.decodeFromString' call
      var this_0 = Companion_getInstance().x1o_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.cx();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('T', arrayOf([createKType(PrimitiveClasses_getInstance().ka(), arrayOf([]), true)]), 'invariant', false), arrayOf([]), false))]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      return this_0.a1p(tmp$ret$1, _this__u8e3s4);
    } catch ($p) {
      if ($p instanceof IncorrectTypeException) {
        var exception = $p;
        asParsingError(exception, 'Got a YAML parsing error on the type.', defaultErrorContent);
      } else {
        if ($p instanceof Error) {
          var exception_0 = $p;
          asParsingError(exception_0, 'Unknown error occured when parsing.', defaultErrorContent);
        } else {
          throw $p;
        }
      }
    }
  }
  var OutputName_DIGEST_instance;
  var OutputName_IMAGES_PUSHED_instance;
  var OutputName_entriesInitialized;
  function OutputName_initEntries() {
    if (OutputName_entriesInitialized)
      return Unit_instance;
    OutputName_entriesInitialized = true;
    OutputName_DIGEST_instance = new OutputName('DIGEST', 0, 'digest');
    OutputName_IMAGES_PUSHED_instance = new OutputName('IMAGES_PUSHED', 1, 'images-pushed');
  }
  function OutputName(name, ordinal, actionName) {
    Enum.call(this, name, ordinal);
    this.b24_1 = actionName;
  }
  function OutputName_DIGEST_getInstance() {
    OutputName_initEntries();
    return OutputName_DIGEST_instance;
  }
  function OutputName_IMAGES_PUSHED_getInstance() {
    OutputName_initEntries();
    return OutputName_IMAGES_PUSHED_instance;
  }
  //region block: init
  Companion_instance_4 = new Companion_4();
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('node:process'), require('@actions/exec'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kaml.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js')));

//# sourceMappingURL=action-push-container.js.map

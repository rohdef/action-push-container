(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Exec, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_charleskorn_kaml_kaml, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var VOID = kotlin_kotlin.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.q6;
  var Exception = kotlin_kotlin.$_$.cb;
  var initMetadataForLambda = kotlin_kotlin.$_$.f8;
  var split = kotlin_kotlin.$_$.fa;
  var last = kotlin_kotlin.$_$.t5;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.z;
  var listOf = kotlin_kotlin.$_$.v5;
  var equals = kotlin_kotlin.$_$.v7;
  var listOf_0 = kotlin_kotlin.$_$.u5;
  var emptyList = kotlin_kotlin.$_$.i5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dc;
  var plus = kotlin_kotlin.$_$.y5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.m4;
  var joinToString = kotlin_kotlin.$_$.r5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.d8;
  var get_EmptyContinuation = kotlin_kotlin.$_$.u6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.p8;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Enum = kotlin_kotlin.$_$.ab;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c8;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var prependIndent = kotlin_kotlin.$_$.ba;
  var Companion_getInstance = kotlin_com_charleskorn_kaml_kaml.$_$.b;
  var KtList = kotlin_kotlin.$_$.f4;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o3;
  var arrayOf = kotlin_kotlin.$_$.yb;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var IncorrectTypeException = kotlin_com_charleskorn_kaml_kaml.$_$.a;
  var toString = kotlin_kotlin.$_$.a9;
  var hashCode = kotlin_kotlin.$_$.a8;
  var THROW_IAE = kotlin_kotlin.$_$.lb;
  var toList = kotlin_kotlin.$_$.j6;
  var firstOrNull = kotlin_kotlin.$_$.l5;
  var toString_0 = kotlin_kotlin.$_$.gc;
  var IllegalArgumentException = kotlin_kotlin.$_$.db;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
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
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function ActionEnvironment(process) {
    this.m20_1 = process;
    this.n20_1 = 'GITHUB_ACTOR';
    this.o20_1 = 'GITHUB_SHA';
    this.p20_1 = 'GITHUB_REF';
    this.q20_1 = 'GITHUB_REPOSITORY';
    this.r20_1 = 'GITHUB_RUN_ID';
    this.s20_1 = 'GITHUB_SERVER_URL';
    this.t20_1 = this.a21(this.m20_1, this.n20_1);
    this.u20_1 = this.a21(this.m20_1, this.o20_1);
    this.v20_1 = this.a21(this.m20_1, this.p20_1);
    this.w20_1 = this.a21(this.m20_1, this.q20_1);
    this.x20_1 = this.a21(this.m20_1, this.r20_1);
    this.y20_1 = this.a21(this.m20_1, this.s20_1);
    this.z20_1 = this.y20_1 + '/' + this.w20_1;
  }
  protoOf(ActionEnvironment).a21 = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.m20_1.env[key];
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
    return tmp.c21(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).m21 = function ($this$group, $completion) {
    var tmp = this.n21($this$group, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(actionInfo$slambda).z8 = function (p1, $completion) {
    return this.m21(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 3;
            this.h8_1 = 4;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.k8_1;
              var tmp0_elvis_lhs = exception.message;
              this.l21_1.o21(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.h8_1 = 4;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 3:
            throw this.k8_1;
          case 4:
            this.i8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).n21 = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.l21_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.m21($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).m21 = function ($this$group, $completion) {
    var tmp = this.n21($this$group, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(actionInfo$slambda_1).z8 = function (p1, $completion) {
    return this.m21(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h8_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 4;
            this.h8_1 = 5;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.k8_1;
              var tmp0_elvis_lhs = exception.message;
              this.x21_1.y21(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.h8_1 = 5;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 4:
            throw this.k8_1;
          case 5:
            this.i8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).n21 = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.x21_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.m21($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).m21 = function ($this$run, $completion) {
    var tmp = this.n21($this$run, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(main$slambda).z8 = function (p1, $completion) {
    return this.m21(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            this.h8_1 = 1;
            suspendResult = actionInfo(this.h22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i22_1 = new ActionEnvironment(node_process_process_dcpv5o);
            this.h22_1.y21('Starting push workflow with the following input:\n' + this.h22_1.b21_1.toString());
            var tmp_0 = this;
            var tmp_1;
            switch (_AutoTagging___get_strategy__impl__et9b2r(this.h22_1.b21_1.f23_1).g2_1) {
              case 0:
                var referenceParts = split(this.i22_1.v20_1, ['/']);
                var lastReferencePart = last(referenceParts);
                var tmp_2;
                if (equals(referenceParts.p1(0, 2), listOf(['refs', 'tags']))) {
                  tmp_2 = Regex_init_$Create$('^v').cc(lastReferencePart, '');
                } else if (lastReferencePart === 'main') {
                  tmp_2 = 'latest';
                } else {
                  tmp_2 = lastReferencePart;
                }

                var version = tmp_2;
                tmp_1 = listOf_0(version);
                break;
              case 1:
                tmp_1 = emptyList();
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            tmp_0.j22_1 = tmp_1;
            this.k22_1 = plus(this.j22_1, _DestinationTags___get_tags__impl__3v3frm(this.h22_1.b21_1.g23_1));
            var tmp_3 = this;
            var tmp0 = _DestinationImageNames___get_names__impl__7h7cij(this.h22_1.b21_1.e23_1);
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.h();
            while (_iterator__ex2g4s.i()) {
              var element = _iterator__ex2g4s.j();
              var this_0 = this.k22_1;
              var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
              var _iterator__ex2g4s_0 = this_0.h();
              while (_iterator__ex2g4s_0.i()) {
                var item = _iterator__ex2g4s_0.j();
                destination_0.e(element + ':' + item);
              }
              var list = destination_0;
              addAll(destination, list);
            }

            tmp_3.l22_1 = destination;
            this.h22_1.y21('The following images with tags will be pushed: ' + joinToString(this.l22_1, ', '));
            var tmp_4 = this;
            tmp_4.m22_1 = ArrayList_init_$Create$();
            var tmp_5 = this;
            tmp_5.n22_1 = _DestinationHosts___get_hosts__impl__2byyiq(this.h22_1.b21_1.d23_1);
            this.o22_1 = this.n22_1;
            this.p22_1 = this.o22_1.h();
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!this.p22_1.i()) {
              this.h8_1 = 6;
              continue $sm;
            }

            this.q22_1 = this.p22_1.j();
            var tmp_6 = this;
            tmp_6.r22_1 = this.q22_1;
            this.s22_1 = this.r22_1;
            this.h22_1.y21('\tPusing images with tags to [' + this.s22_1 + ']');
            var tmp_7 = this;
            tmp_7.t22_1 = this.l22_1;
            this.u22_1 = this.t22_1;
            this.v22_1 = this.u22_1.h();
            this.h8_1 = 3;
            continue $sm;
          case 3:
            if (!this.v22_1.i()) {
              this.h8_1 = 5;
              continue $sm;
            }

            this.w22_1 = this.v22_1.j();
            var tmp_8 = this;
            tmp_8.x22_1 = this.w22_1;
            this.y22_1 = this.x22_1;
            this.z22_1 = this.s22_1 + '/' + this.y22_1;
            this.h8_1 = 4;
            var tmp_9 = Exec;
            var this_1 = ['tag', _ImageId___get_value__impl__k780on(this.h22_1.b21_1.c23_1), this.z22_1];
            suspendResult = await_0(tmp_9.getExecOutput('docker', this_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.a23_1 = suspendResult;
            if (!(this.a23_1.exitCode === 0)) {
              this.h22_1.h23('Could not add tag to image');
              this.h22_1.h23('    image: ' + _ImageId___get_value__impl__k780on(this.h22_1.b21_1.c23_1));
              this.h22_1.h23('    tag: ' + this.z22_1);
              this.h22_1.i23('Could not add tag [' + this.z22_1 + '] to image [' + _ImageId___get_value__impl__k780on(this.h22_1.b21_1.c23_1) + "]'");
            }

            var tmp1 = this.m22_1;
            var element_0 = this.z22_1;
            tmp1.e(element_0);
            this.h8_1 = 3;
            continue $sm;
          case 5:
            this.h8_1 = 2;
            continue $sm;
          case 6:
            var tmp_10 = this;
            tmp_10.b23_1 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_1 = this.m22_1.h();
            while (_iterator__ex2g4s_1.i()) {
              var element_1 = _iterator__ex2g4s_1.j();
              this.h22_1.y21('docker push "' + element_1 + '" ');
              this.b23_1.e(element_1);
            }

            var tmp_11 = OutputName_IMAGES_PUSHED_getInstance();
            var this_2 = this.b23_1;
            var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
            var _iterator__ex2g4s_2 = this_2.h();
            while (_iterator__ex2g4s_2.i()) {
              var item_0 = _iterator__ex2g4s_2.j();
              destination_1.e('- ' + item_0);
            }

            this.h22_1.j23(tmp_11, joinToString(destination_1, '\n'));
            this.h8_1 = 7;
            var tmp_12 = Exec;
            var this_3 = ['inspect', '--format', '{{index .RepoDigests 0}}', _ImageId___get_value__impl__k780on(this.h22_1.b21_1.c23_1)];
            suspendResult = await_0(tmp_12.getExecOutput('docker', this_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var imageDigestOutput = suspendResult;
            if (imageDigestOutput.exitCode === 0) {
              var digest = imageDigestOutput.stdout;
              this.h22_1.y21('Digest: [' + digest + ']');
              this.h22_1.j23(OutputName_DIGEST_getInstance(), digest);
            } else {
              this.h22_1.i23('Could not get docker image digest');
            }

            return Unit_instance;
          case 8:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 8) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).n21 = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.h22_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.m21($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l20_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = this.l20_1.k23('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h8_1 = 2;
            suspendResult = this.l20_1.k23('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.t23_1 = $main;
    this.u23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).w23 = function ($this$promise, $completion) {
    var tmp = this.x23($this$promise, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(Core$run$lambda$slambda).z8 = function (p1, $completion) {
    return this.w23((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.t23_1(this.u23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).x23 = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.t23_1, this.u23_1, completion);
    i.v23_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w23($this$promise, $completion);
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
    this.g24_1 = $it;
    this.h24_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).w23 = function ($this$promise, $completion) {
    var tmp = this.x23($this$promise, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(Core$run$slambda).z8 = function (p1, $completion) {
    return this.w23((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.g24_1(this.h24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).x23 = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.g24_1, this.h24_1, completion);
    i.i24_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w23($this$promise, $completion);
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
    return Core.getInput(it.l24_1);
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.u24_1 = $contents;
    this.v24_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).w23 = function ($this$promise, $completion) {
    var tmp = this.x23($this$promise, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(Core$group$lambda$slambda).z8 = function (p1, $completion) {
    return this.w23((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.u24_1(this.v24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).x23 = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.u24_1, this.v24_1, completion);
    i.w24_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.w23($this$promise, $completion);
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
    tmp.b21_1 = tmp_0.x24(Core$inputs$lambda);
  }
  protoOf(Core_0).y24 = function (main, post, $completion) {
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
  protoOf(Core_0).c21 = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.y24(main, post, $completion) : $super.y24.call(this, main, post, $completion);
  };
  protoOf(Core_0).k23 = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).j23 = function (name, value) {
    return Core.setOutput(name.b25_1, value);
  };
  protoOf(Core_0).i23 = function (message) {
    return Core.setFailed(message);
  };
  protoOf(Core_0).y21 = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).o21 = function (message) {
    return Core.warning(message);
  };
  protoOf(Core_0).h23 = function (message) {
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
    this.l24_1 = actionName;
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
    this.c25_1 = InputName_IMAGE_ID_getInstance();
  }
  protoOf(Companion).d25 = function (getInput) {
    return this.e25(getInput(this.c25_1));
  };
  protoOf(Companion).e25 = function (value) {
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
    this.f25_1 = InputName_DESTINATION_HOSTS_getInstance();
  }
  protoOf(Companion_0).g25 = function (getInput) {
    return this.h25(getInput(this.f25_1));
  };
  protoOf(Companion_0).h25 = function (value) {
    var tmp1 = this.f25_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'dk.rohdef.actions.github.parseYamlList' call
      var codeIndent = '    ';
      var defaultErrorContent = '\nAttempted to parse: ' + tmp1.l24_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + tmp1.l24_1 + ': |\n' + prependIndent(value, codeIndent) + '\n--- END  INPUT ---\n\nMake that the input is a string containing a yaml list of strings, e.g.,:\n\n' + tmp1.l24_1 + ': |\n' + codeIndent + '- foo\n' + codeIndent + '- bar\n' + codeIndent + '- baz\n        ';
      try {
        // Inline function 'kotlinx.serialization.decodeFromString' call
        var this_0 = Companion_getInstance().v1p_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ay();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wa(), arrayOf([]), false))]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp$ret$3 = this_0.y1p(tmp$ret$1, value);
        break $l$block;
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
    return _DestinationHosts___init__impl__us4jj0(tmp$ret$3);
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
    this.i25_1 = InputName_DESTINATION_IMAGE_NAMES_getInstance();
  }
  protoOf(Companion_1).j25 = function (getInput) {
    return this.k25(getInput(this.i25_1));
  };
  protoOf(Companion_1).k25 = function (value) {
    var tmp1 = this.i25_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'dk.rohdef.actions.github.parseYamlList' call
      var codeIndent = '    ';
      var defaultErrorContent = '\nAttempted to parse: ' + tmp1.l24_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + tmp1.l24_1 + ': |\n' + prependIndent(value, codeIndent) + '\n--- END  INPUT ---\n\nMake that the input is a string containing a yaml list of strings, e.g.,:\n\n' + tmp1.l24_1 + ': |\n' + codeIndent + '- foo\n' + codeIndent + '- bar\n' + codeIndent + '- baz\n        ';
      try {
        // Inline function 'kotlinx.serialization.decodeFromString' call
        var this_0 = Companion_getInstance().v1p_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ay();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wa(), arrayOf([]), false))]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp$ret$3 = this_0.y1p(tmp$ret$1, value);
        break $l$block;
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
    return _DestinationImageNames___init__impl__tkt3vi(tmp$ret$3);
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
    this.l25_1 = InputName_AUTO_TAGGING_getInstance();
  }
  protoOf(Companion_2).m25 = function (getInput) {
    return this.n25(getInput(this.l25_1));
  };
  protoOf(Companion_2).n25 = function (value) {
    var tmp1 = this.l25_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dk.rohdef.actions.github.parseEnumInput' call
      // Inline function 'kotlin.enumValues' call
      var tmp$ret$0 = values();
      var values_0 = toList(tmp$ret$0);
      var defaultErrorContent = '\nAttempted to parse: ' + tmp1.l24_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + tmp1.l24_1 + ': ' + value + '\n--- END  INPUT ---\n\nMake that the input is an enum of the type ' + getKClass(Strategy).w9() + ' e.g.,:\n\n' + tmp1.l24_1 + ': ' + toString_0(firstOrNull(values_0)) + '\n\nValid values are: ' + joinToString(values_0, ', ') + '\n        ';
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
    this.o25_1 = InputName_DESTINATION_TAGS_getInstance();
  }
  protoOf(Companion_3).p25 = function (getInput) {
    return this.q25(getInput(this.o25_1));
  };
  protoOf(Companion_3).q25 = function (value) {
    var tmp1 = this.o25_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'dk.rohdef.actions.github.parseYamlList' call
      var codeIndent = '    ';
      var defaultErrorContent = '\nAttempted to parse: ' + tmp1.l24_1 + '\n\nThe input was:\n--- BEGIN INPUT ---\n' + tmp1.l24_1 + ': |\n' + prependIndent(value, codeIndent) + '\n--- END  INPUT ---\n\nMake that the input is a string containing a yaml list of strings, e.g.,:\n\n' + tmp1.l24_1 + ': |\n' + codeIndent + '- foo\n' + codeIndent + '- bar\n' + codeIndent + '- baz\n        ';
      try {
        // Inline function 'kotlinx.serialization.decodeFromString' call
        var this_0 = Companion_getInstance().v1p_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.ay();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().wa(), arrayOf([]), false))]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp$ret$3 = this_0.y1p(tmp$ret$1, value);
        break $l$block;
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
    return _DestinationTags___init__impl__pi708i(tmp$ret$3);
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
  protoOf(Companion_4).x24 = function (getInput) {
    return new Inputs(Companion_getInstance_0().d25(getInput), Companion_getInstance_1().g25(getInput), Companion_getInstance_2().j25(getInput), Companion_getInstance_3().m25(getInput), Companion_getInstance_4().p25(getInput));
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Inputs(imageId, destinationHosts, destinationImageNames, autoTagging, destinationTags) {
    this.c23_1 = imageId;
    this.d23_1 = destinationHosts;
    this.e23_1 = destinationImageNames;
    this.f23_1 = autoTagging;
    this.g23_1 = destinationTags;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(imageId=' + ImageId__toString_impl_z02tf9(this.c23_1) + ', destinationHosts=' + DestinationHosts__toString_impl_pd5pt0(this.d23_1) + ', destinationImageNames=' + DestinationImageNames__toString_impl_n7y8h2(this.e23_1) + ', autoTagging=' + AutoTagging__toString_impl_i8zzqd(this.f23_1) + ', destinationTags=' + DestinationTags__toString_impl_dgmv46(this.g23_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = ImageId__hashCode_impl_e9vbr0(this.c23_1);
    result = imul(result, 31) + DestinationHosts__hashCode_impl_3lzt05(this.d23_1) | 0;
    result = imul(result, 31) + DestinationImageNames__hashCode_impl_1gsbo7(this.e23_1) | 0;
    result = imul(result, 31) + AutoTagging__hashCode_impl_v0y5fw(this.f23_1) | 0;
    result = imul(result, 31) + DestinationTags__hashCode_impl_z7srx1(this.g23_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!(this.c23_1 === tmp0_other_with_cast.c23_1))
      return false;
    if (!equals(this.d23_1, tmp0_other_with_cast.d23_1))
      return false;
    if (!equals(this.e23_1, tmp0_other_with_cast.e23_1))
      return false;
    if (!equals(this.f23_1, tmp0_other_with_cast.f23_1))
      return false;
    if (!equals(this.g23_1, tmp0_other_with_cast.g23_1))
      return false;
    return true;
  };
  function asParsingError(_this__u8e3s4, message, defaultErrorContent) {
    throw IllegalArgumentException_init_$Create$_0('\n' + message + '\n\n' + defaultErrorContent + '\n        ', _this__u8e3s4);
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
    this.b25_1 = actionName;
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

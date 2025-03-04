(function (_, $module$_docker_actions_toolkit_lib_github_ycfdzl, $module$_docker_actions_toolkit_lib_docker_docker_pfs96p, node_process_process_dcpv5o, Exec, Core, actionsToolkit, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_charleskorn_kaml_kaml, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var GitHub = $module$_docker_actions_toolkit_lib_github_ycfdzl.GitHub;
  var Docker = $module$_docker_actions_toolkit_lib_docker_docker_pfs96p.Docker;
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.w8;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var VOID = kotlin_kotlin.$_$.f;
  var CoroutineImpl = kotlin_kotlin.$_$.e7;
  var THROW_CCE = kotlin_kotlin.$_$.hb;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.o6;
  var Exception = kotlin_kotlin.$_$.za;
  var initMetadataForLambda = kotlin_kotlin.$_$.e8;
  var emptyList = kotlin_kotlin.$_$.i5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ac;
  var plus = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var addAll = kotlin_kotlin.$_$.m4;
  var joinToString = kotlin_kotlin.$_$.q5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.c8;
  var get_EmptyContinuation = kotlin_kotlin.$_$.s6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.o8;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Enum = kotlin_kotlin.$_$.xa;
  var println = kotlin_kotlin.$_$.i7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b8;
  var getStringHashCode = kotlin_kotlin.$_$.y7;
  var Companion_getInstance = kotlin_com_charleskorn_kaml_kaml.$_$.a;
  var KtList = kotlin_kotlin.$_$.f4;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o3;
  var arrayOf = kotlin_kotlin.$_$.vb;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var toString = kotlin_kotlin.$_$.z8;
  var hashCode = kotlin_kotlin.$_$.z7;
  var THROW_IAE = kotlin_kotlin.$_$.ib;
  var equals = kotlin_kotlin.$_$.u7;
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
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function ActionEnvironment(process) {
    this.q1z_1 = process;
    this.r1z_1 = 'GITHUB_ACTOR';
    this.s1z_1 = 'GITHUB_SHA';
    this.t1z_1 = 'GITHUB_REPOSITORY';
    this.u1z_1 = 'GITHUB_RUN_ID';
    this.v1z_1 = 'GITHUB_SERVER_URL';
    this.w1z_1 = this.c20(this.q1z_1, this.r1z_1);
    this.x1z_1 = this.c20(this.q1z_1, this.s1z_1);
    this.y1z_1 = this.c20(this.q1z_1, this.t1z_1);
    this.z1z_1 = this.c20(this.q1z_1, this.u1z_1);
    this.a20_1 = this.c20(this.q1z_1, this.v1z_1);
    this.b20_1 = this.a20_1 + '/' + this.y1z_1;
  }
  protoOf(ActionEnvironment).c20 = function (_this__u8e3s4, key) {
    var tmp0_elvis_lhs = this.q1z_1.env[key];
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
    return tmp.e20(main$slambda_0(null), VOID, $completion);
  }
  function actionInfo$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda).o20 = function ($this$group, $completion) {
    var tmp = this.p20($this$group, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(actionInfo$slambda).a9 = function (p1, $completion) {
    return this.o20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = await_0(GitHub.printActionsRuntimeTokenACs(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j8_1 = 3;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 3;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.l8_1;
              var tmp0_elvis_lhs = exception.message;
              this.n20_1.q20(tmp0_elvis_lhs == null ? 'Could not print token ACs' : tmp0_elvis_lhs);
              this.i8_1 = 4;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            throw this.l8_1;
          case 4:
            this.j8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda).p20 = function ($this$group, completion) {
    var i = new actionInfo$slambda(completion);
    i.n20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_0(resultContinuation) {
    var i = new actionInfo$slambda(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.o20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function actionInfo$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(actionInfo$slambda_1).o20 = function ($this$group, $completion) {
    var tmp = this.p20($this$group, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(actionInfo$slambda_1).a9 = function (p1, $completion) {
    return this.o20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(actionInfo$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = await_0(Docker.printVersion(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = await_0(Docker.printInfo(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j8_1 = 4;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Exception) {
              var exception = this.l8_1;
              var tmp0_elvis_lhs = exception.message;
              this.z20_1.a21(tmp0_elvis_lhs == null ? 'Could not get docker information' : tmp0_elvis_lhs);
              this.i8_1 = 5;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            throw this.l8_1;
          case 5:
            this.j8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(actionInfo$slambda_1).p20 = function ($this$group, completion) {
    var i = new actionInfo$slambda_1(completion);
    i.z20_1 = $this$group;
    return i;
  };
  function actionInfo$slambda_2(resultContinuation) {
    var i = new actionInfo$slambda_1(resultContinuation);
    var l = function ($this$group, $completion) {
      return i.o20($this$group, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$slambda).o20 = function ($this$run, $completion) {
    var tmp = this.p20($this$run, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(main$slambda).a9 = function (p1, $completion) {
    return this.o20(p1 instanceof Core_0 ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.i8_1 = 1;
            suspendResult = actionInfo(this.j21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k21_1 = new ActionEnvironment(node_process_process_dcpv5o);
            this.j21_1.a21('Starting push workflow with the following input:\n' + this.j21_1.d20_1.toString());
            var tmp_0 = this;
            var tmp_1;
            switch (_AutoTagging___get_strategy__impl__et9b2r(this.j21_1.d20_1.h22_1).e2_1) {
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

            tmp_0.l21_1 = tmp_1;
            this.m21_1 = plus(this.l21_1, _DestinationTags___get_tags__impl__3v3frm(this.j21_1.d20_1.i22_1));
            var tmp_2 = this;
            var tmp0 = _DestinationImageNames___get_names__impl__7h7cij(this.j21_1.d20_1.g22_1);
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.h();
            while (_iterator__ex2g4s.i()) {
              var element = _iterator__ex2g4s.j();
              var this_0 = this.m21_1;
              var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
              var _iterator__ex2g4s_0 = this_0.h();
              while (_iterator__ex2g4s_0.i()) {
                var item = _iterator__ex2g4s_0.j();
                destination_0.e(element + ':' + item);
              }
              var list = destination_0;
              addAll(destination, list);
            }

            tmp_2.n21_1 = destination;
            this.j21_1.a21('The following images with tags will be pushed: ' + joinToString(this.n21_1, ', '));
            var tmp_3 = this;
            tmp_3.o21_1 = ArrayList_init_$Create$();
            var tmp_4 = this;
            tmp_4.p21_1 = _DestinationHosts___get_hosts__impl__2byyiq(this.j21_1.d20_1.f22_1);
            this.q21_1 = this.p21_1;
            this.r21_1 = this.q21_1.h();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!this.r21_1.i()) {
              this.i8_1 = 6;
              continue $sm;
            }

            this.s21_1 = this.r21_1.j();
            var tmp_5 = this;
            tmp_5.t21_1 = this.s21_1;
            this.u21_1 = this.t21_1;
            this.j21_1.a21('\tPusing images with tags to [' + this.u21_1 + ']');
            var tmp_6 = this;
            tmp_6.v21_1 = this.n21_1;
            this.w21_1 = this.v21_1;
            this.x21_1 = this.w21_1.h();
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.x21_1.i()) {
              this.i8_1 = 5;
              continue $sm;
            }

            this.y21_1 = this.x21_1.j();
            var tmp_7 = this;
            tmp_7.z21_1 = this.y21_1;
            this.a22_1 = this.z21_1;
            this.b22_1 = this.u21_1 + '/' + this.a22_1;
            this.i8_1 = 4;
            var tmp_8 = Exec;
            var this_1 = ['tag', _ImageId___get_value__impl__k780on(this.j21_1.d20_1.e22_1), this.b22_1];
            suspendResult = await_0(tmp_8.getExecOutput('docker', this_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.c22_1 = suspendResult;
            if (!(this.c22_1.exitCode === 0)) {
              this.j21_1.j22('Could not add tag to image');
              this.j21_1.j22('    image: ' + _ImageId___get_value__impl__k780on(this.j21_1.d20_1.e22_1));
              this.j21_1.j22('    tag: ' + this.b22_1);
              this.j21_1.k22('Could not add tag [' + this.b22_1 + '] to image [' + _ImageId___get_value__impl__k780on(this.j21_1.d20_1.e22_1) + "]'");
            }

            var tmp1 = this.o21_1;
            var element_0 = this.b22_1;
            tmp1.e(element_0);
            this.i8_1 = 3;
            continue $sm;
          case 5:
            this.i8_1 = 2;
            continue $sm;
          case 6:
            var tmp_9 = this;
            tmp_9.d22_1 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_1 = this.o21_1.h();
            while (_iterator__ex2g4s_1.i()) {
              var element_1 = _iterator__ex2g4s_1.j();
              this.j21_1.a21('docker push "' + element_1 + '" ');
              this.d22_1.e(element_1);
            }

            var tmp_10 = OutputName_IMAGES_PUSHED_getInstance();
            var this_2 = this.d22_1;
            var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
            var _iterator__ex2g4s_2 = this_2.h();
            while (_iterator__ex2g4s_2.i()) {
              var item_0 = _iterator__ex2g4s_2.j();
              destination_1.e('- ' + item_0);
            }

            this.j21_1.l22(tmp_10, joinToString(destination_1, '\n'));
            this.i8_1 = 7;
            var tmp_11 = Exec;
            var this_3 = ['inspect', '--format', '{{index .RepoDigests 0}}', _ImageId___get_value__impl__k780on(this.j21_1.d20_1.e22_1)];
            suspendResult = await_0(tmp_11.getExecOutput('docker', this_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var imageDigestOutput = suspendResult;
            if (imageDigestOutput.exitCode === 0) {
              var digest = imageDigestOutput.stdout;
              this.j21_1.a21('Digest: [' + digest + ']');
              this.j21_1.l22(OutputName_DIGEST_getInstance(), digest);
            } else {
              this.j21_1.k22('Could not get docker image digest');
            }

            return Unit_instance;
          case 8:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 8) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(main$slambda).p20 = function ($this$run, completion) {
    var i = new main$slambda(completion);
    i.j21_1 = $this$run;
    return i;
  };
  function main$slambda_0(resultContinuation) {
    var i = new main$slambda(resultContinuation);
    var l = function ($this$run, $completion) {
      return i.o20($this$run, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $actionInfoCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1z_1 = _this__u8e3s4;
  }
  protoOf($actionInfoCOROUTINE$0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.p1z_1.m22('GitHub Actions runtime token ACs', actionInfo$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.p1z_1.m22('Docker info', actionInfo$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Core$run$lambda$slambda($main, this$0, resultContinuation) {
    this.v22_1 = $main;
    this.w22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$lambda$slambda).y22 = function ($this$promise, $completion) {
    var tmp = this.z22($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(Core$run$lambda$slambda).a9 = function (p1, $completion) {
    return this.y22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.v22_1(this.w22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$lambda$slambda).z22 = function ($this$promise, completion) {
    var i = new Core$run$lambda$slambda(this.v22_1, this.w22_1, completion);
    i.x22_1 = $this$promise;
    return i;
  };
  function Core$run$lambda$slambda_0($main, this$0, resultContinuation) {
    var i = new Core$run$lambda$slambda($main, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.y22($this$promise, $completion);
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
    this.i23_1 = $it;
    this.j23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$run$slambda).y22 = function ($this$promise, $completion) {
    var tmp = this.z22($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(Core$run$slambda).a9 = function (p1, $completion) {
    return this.y22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$run$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.i23_1(this.j23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$run$slambda).z22 = function ($this$promise, completion) {
    var i = new Core$run$slambda(this.i23_1, this.j23_1, completion);
    i.k23_1 = $this$promise;
    return i;
  };
  function Core$run$slambda_0($it, this$0, resultContinuation) {
    var i = new Core$run$slambda($it, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.y22($this$promise, $completion);
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
    return Core.getInput(it.n23_1);
  }
  function Core$group$lambda$slambda($contents, this$0, resultContinuation) {
    this.w23_1 = $contents;
    this.x23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Core$group$lambda$slambda).y22 = function ($this$promise, $completion) {
    var tmp = this.z22($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(Core$group$lambda$slambda).a9 = function (p1, $completion) {
    return this.y22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Core$group$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.w23_1(this.x23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Core$group$lambda$slambda).z22 = function ($this$promise, completion) {
    var i = new Core$group$lambda$slambda(this.w23_1, this.x23_1, completion);
    i.y23_1 = $this$promise;
    return i;
  };
  function Core$group$lambda$slambda_0($contents, this$0, resultContinuation) {
    var i = new Core$group$lambda$slambda($contents, this$0, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.y22($this$promise, $completion);
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
    tmp.d20_1 = tmp_0.z23(Core$inputs$lambda);
  }
  protoOf(Core_0).a24 = function (main, post, $completion) {
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
  protoOf(Core_0).e20 = function (main, post, $completion, $super) {
    post = post === VOID ? null : post;
    return $super === VOID ? this.a24(main, post, $completion) : $super.a24.call(this, main, post, $completion);
  };
  protoOf(Core_0).m22 = function (name, contents, $completion) {
    var tmp = Core;
    return await_0(tmp.group(name, Core$group$lambda(contents, this)), $completion);
  };
  protoOf(Core_0).l22 = function (name, value) {
    return Core.setOutput(name.d24_1, value);
  };
  protoOf(Core_0).k22 = function (message) {
    return Core.setFailed(message);
  };
  protoOf(Core_0).a21 = function (message) {
    return Core.info(message);
  };
  protoOf(Core_0).q20 = function (message) {
    return Core.warning(message);
  };
  protoOf(Core_0).j22 = function (message) {
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
    this.n23_1 = actionName;
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
  }
  protoOf(Companion).e24 = function (value) {
    println(value);
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
  protoOf(Companion_0).f24 = function (value) {
    println(value);
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().z1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.fx();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var hosts = this_0.c1p(tmp$ret$1, value);
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
  protoOf(Companion_1).g24 = function (value) {
    println(value);
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().z1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.fx();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var names = this_0.c1p(tmp$ret$1, value);
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
  protoOf(Companion_2).h24 = function (value) {
    println(value);
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = value.toUpperCase();
    var strategy = valueOf(tmp$ret$1);
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
  protoOf(Companion_3).i24 = function (value) {
    println(value);
    // Inline function 'kotlinx.serialization.decodeFromString' call
    var this_0 = Companion_getInstance().z1o_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.fx();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().xa(), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tags = this_0.c1p(tmp$ret$1, value);
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
  protoOf(Companion_4).z23 = function (getInput) {
    return new Inputs(Companion_instance.e24(getInput(InputName_IMAGE_ID_getInstance())), Companion_instance_0.f24(getInput(InputName_DESTINATION_HOSTS_getInstance())), Companion_instance_1.g24(getInput(InputName_DESTINATION_IMAGE_NAMES_getInstance())), Companion_instance_2.h24(getInput(InputName_AUTO_TAGGING_getInstance())), Companion_instance_3.i24(getInput(InputName_DESTINATION_TAGS_getInstance())));
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Inputs(imageId, destinationHosts, destinationImageNames, autoTagging, destinationTags) {
    this.e22_1 = imageId;
    this.f22_1 = destinationHosts;
    this.g22_1 = destinationImageNames;
    this.h22_1 = autoTagging;
    this.i22_1 = destinationTags;
  }
  protoOf(Inputs).toString = function () {
    return 'Inputs(imageId=' + ImageId__toString_impl_z02tf9(this.e22_1) + ', destinationHosts=' + DestinationHosts__toString_impl_pd5pt0(this.f22_1) + ', destinationImageNames=' + DestinationImageNames__toString_impl_n7y8h2(this.g22_1) + ', autoTagging=' + AutoTagging__toString_impl_i8zzqd(this.h22_1) + ', destinationTags=' + DestinationTags__toString_impl_dgmv46(this.i22_1) + ')';
  };
  protoOf(Inputs).hashCode = function () {
    var result = ImageId__hashCode_impl_e9vbr0(this.e22_1);
    result = imul(result, 31) + DestinationHosts__hashCode_impl_3lzt05(this.f22_1) | 0;
    result = imul(result, 31) + DestinationImageNames__hashCode_impl_1gsbo7(this.g22_1) | 0;
    result = imul(result, 31) + AutoTagging__hashCode_impl_v0y5fw(this.h22_1) | 0;
    result = imul(result, 31) + DestinationTags__hashCode_impl_z7srx1(this.i22_1) | 0;
    return result;
  };
  protoOf(Inputs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inputs))
      return false;
    var tmp0_other_with_cast = other instanceof Inputs ? other : THROW_CCE();
    if (!(this.e22_1 === tmp0_other_with_cast.e22_1))
      return false;
    if (!equals(this.f22_1, tmp0_other_with_cast.f22_1))
      return false;
    if (!equals(this.g22_1, tmp0_other_with_cast.g22_1))
      return false;
    if (!equals(this.h22_1, tmp0_other_with_cast.h22_1))
      return false;
    if (!equals(this.i22_1, tmp0_other_with_cast.i22_1))
      return false;
    return true;
  };
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
    this.d24_1 = actionName;
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
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  //endregion
  mainWrapper();
  return _;
}(module.exports, require('@docker/actions-toolkit/lib/github'), require('@docker/actions-toolkit/lib/docker/docker'), require('node:process'), require('@actions/exec'), require('@actions/core'), require('@docker/actions-toolkit'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kaml.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js')));

//# sourceMappingURL=action-push-container.js.map

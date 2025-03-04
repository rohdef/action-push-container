(function (_, kotlin_kotlin, kotlin_net_thauvin_erik_urlencoder_urlencoder_lib, kotlin_com_squareup_okio_okio) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForInterface = kotlin_kotlin.$_$.e8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c8;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var equals = kotlin_kotlin.$_$.v7;
  var FunctionAdapter = kotlin_kotlin.$_$.k7;
  var isInterface = kotlin_kotlin.$_$.p8;
  var hashCode = kotlin_kotlin.$_$.a8;
  var VOID = kotlin_kotlin.$_$.f;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var Enum = kotlin_kotlin.$_$.ab;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var Char = kotlin_kotlin.$_$.xa;
  var setOf = kotlin_kotlin.$_$.b6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.r7;
  var toString = kotlin_kotlin.$_$.a9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var charSequenceGet = kotlin_kotlin.$_$.q7;
  var toString_0 = kotlin_kotlin.$_$.a2;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var to = kotlin_kotlin.$_$.hc;
  var mapOf = kotlin_kotlin.$_$.x5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var mapCapacity = kotlin_kotlin.$_$.w5;
  var coerceAtLeast = kotlin_kotlin.$_$.b9;
  var contains = kotlin_kotlin.$_$.o9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z1;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var numberToChar = kotlin_kotlin.$_$.u8;
  var UrlEncoderUtil_getInstance = kotlin_net_thauvin_erik_urlencoder_urlencoder_lib.$_$.a;
  var decodeToString = kotlin_kotlin.$_$.p9;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.gc;
  var objectCreate = kotlin_kotlin.$_$.w8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var joinToString = kotlin_kotlin.$_$.r5;
  var captureStack = kotlin_kotlin.$_$.n7;
  var take = kotlin_kotlin.$_$.f6;
  var emptyList = kotlin_kotlin.$_$.i5;
  var toList = kotlin_kotlin.$_$.i6;
  var drop = kotlin_kotlin.$_$.h5;
  var takeLast = kotlin_kotlin.$_$.ha;
  var drop_0 = kotlin_kotlin.$_$.s9;
  var take_0 = kotlin_kotlin.$_$.ia;
  var dropLast = kotlin_kotlin.$_$.r9;
  var repeat = kotlin_kotlin.$_$.ca;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var isCharSequence = kotlin_kotlin.$_$.l8;
  var trim = kotlin_kotlin.$_$.ua;
  var trimMargin = kotlin_kotlin.$_$.ta;
  var concatToString = kotlin_kotlin.$_$.m9;
  var toString_2 = kotlin_kotlin.$_$.qa;
  var trimIndent = kotlin_kotlin.$_$.sa;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.s1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.r1;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.t1;
  var RuntimeException = kotlin_kotlin.$_$.jb;
  var get_indices = kotlin_kotlin.$_$.v9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var getOrNull = kotlin_kotlin.$_$.u9;
  var isLowSurrogate = kotlin_kotlin.$_$.z9;
  var isHighSurrogate = kotlin_kotlin.$_$.y9;
  var checkBuilderCapacity = kotlin_kotlin.$_$.p4;
  var charArrayOf = kotlin_kotlin.$_$.o7;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.x1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.s7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dc;
  var plus = kotlin_kotlin.$_$.ec;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var toMutableMap = kotlin_kotlin.$_$.m6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var toMap = kotlin_kotlin.$_$.k6;
  var toCharArray = kotlin_kotlin.$_$.ka;
  var listOf = kotlin_kotlin.$_$.u5;
  var distinct = kotlin_kotlin.$_$.g5;
  var last = kotlin_kotlin.$_$.t5;
  var addAll = kotlin_kotlin.$_$.m4;
  var first = kotlin_kotlin.$_$.n5;
  var firstOrNull = kotlin_kotlin.$_$.m5;
  var ensureNotNull = kotlin_kotlin.$_$.ac;
  var isDigit = kotlin_kotlin.$_$.x9;
  var toInt = kotlin_kotlin.$_$.ma;
  var KtMap = kotlin_kotlin.$_$.h4;
  var toInt_0 = kotlin_kotlin.$_$.na;
  var IllegalArgumentException = kotlin_kotlin.$_$.db;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.c;
  var NumberFormatException = kotlin_kotlin.$_$.gb;
  var CharacterCodingException = kotlin_kotlin.$_$.l9;
  var filterNotNull = kotlin_kotlin.$_$.k5;
  var contains_0 = kotlin_kotlin.$_$.s4;
  var Long = kotlin_kotlin.$_$.fb;
  var toLong = kotlin_kotlin.$_$.z8;
  var IOException = kotlin_com_squareup_okio_okio.$_$.d;
  var buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var BufferedSource = kotlin_com_squareup_okio_okio.$_$.b;
  var asList = kotlin_kotlin.$_$.o4;
  var coerceAtMost = kotlin_kotlin.$_$.c9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(CollectionProvider, 'CollectionProvider');
  initMetadataForInterface(SpecVersionMutator, 'SpecVersionMutator');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LoadSettings, 'LoadSettings');
  initMetadataForClass(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0, 'sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0', VOID, VOID, [CollectionProvider, FunctionAdapter]);
  initMetadataForClass(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0, 'sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0', VOID, VOID, [CollectionProvider, FunctionAdapter]);
  initMetadataForClass(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1, 'sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0', VOID, VOID, [CollectionProvider, FunctionAdapter]);
  initMetadataForClass(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0, 'sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0', VOID, VOID, [SpecVersionMutator, FunctionAdapter]);
  initMetadataForClass(LoadSettingsBuilder, 'LoadSettingsBuilder');
  initMetadataForClass(CommentType, 'CommentType', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CharConstants, 'CharConstants');
  initMetadataForClass(FlowStyle, 'FlowStyle', VOID, Enum);
  initMetadataForClass(ScalarStyle, 'ScalarStyle', VOID, Enum);
  initMetadataForClass(SpecVersion, 'SpecVersion');
  initMetadataForObject(UriEncoder, 'UriEncoder');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ConstructScalar, 'ConstructScalar');
  initMetadataForClass(ConstructYamlNull, 'ConstructYamlNull', ConstructYamlNull, ConstructScalar);
  initMetadataForClass(ConstructYamlBinary, 'ConstructYamlBinary', ConstructYamlBinary, ConstructScalar);
  initMetadataForClass(ConstructYamlJsonBool, 'ConstructYamlJsonBool', ConstructYamlJsonBool, ConstructScalar);
  initMetadataForClass(ConstructYamlJsonFloat, 'ConstructYamlJsonFloat', ConstructYamlJsonFloat, ConstructScalar);
  initMetadataForClass(ConstructYamlJsonInt, 'ConstructYamlJsonInt', ConstructYamlJsonInt, ConstructScalar);
  initMetadataForClass(Event, 'Event');
  initMetadataForClass(NodeEvent, 'NodeEvent', VOID, Event);
  initMetadataForClass(AliasEvent, 'AliasEvent', VOID, NodeEvent);
  initMetadataForClass(CollectionEndEvent, 'CollectionEndEvent', VOID, Event);
  initMetadataForClass(CollectionStartEvent, 'CollectionStartEvent', VOID, NodeEvent);
  initMetadataForClass(CommentEvent, 'CommentEvent', VOID, Event);
  initMetadataForClass(DocumentEndEvent, 'DocumentEndEvent', VOID, Event);
  initMetadataForClass(DocumentStartEvent, 'DocumentStartEvent', VOID, Event);
  initMetadataForClass(ID, 'ID', VOID, Enum);
  initMetadataForClass(ImplicitTuple, 'ImplicitTuple');
  initMetadataForClass(MappingEndEvent, 'MappingEndEvent', MappingEndEvent_init_$Create$_0, CollectionEndEvent);
  initMetadataForClass(MappingStartEvent, 'MappingStartEvent', VOID, CollectionStartEvent);
  initMetadataForClass(ScalarEvent, 'ScalarEvent', VOID, NodeEvent);
  initMetadataForClass(SequenceEndEvent, 'SequenceEndEvent', SequenceEndEvent_init_$Create$_0, CollectionEndEvent);
  initMetadataForClass(SequenceStartEvent, 'SequenceStartEvent', VOID, CollectionStartEvent);
  initMetadataForClass(StreamEndEvent, 'StreamEndEvent', StreamEndEvent_init_$Create$_0, Event);
  initMetadataForClass(StreamStartEvent, 'StreamStartEvent', StreamStartEvent_init_$Create$_0, Event);
  initMetadataForClass(YamlEngineException, 'YamlEngineException', VOID, RuntimeException);
  initMetadataForClass(EmitterException, 'EmitterException', VOID, YamlEngineException);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Mark, 'Mark');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(MarkedYamlEngineException, 'MarkedYamlEngineException', VOID, YamlEngineException);
  initMetadataForClass(ParserException, 'ParserException', VOID, MarkedYamlEngineException);
  initMetadataForClass(ReaderException, 'ReaderException', VOID, YamlEngineException);
  initMetadataForClass(ScannerException, 'ScannerException', VOID, MarkedYamlEngineException);
  initMetadataForClass(YamlVersionException, 'YamlVersionException', VOID, YamlEngineException);
  initMetadataForObject(Character, 'Character');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Tag, 'Tag');
  initMetadataForClass(ParseStreamStart, 'ParseStreamStart');
  initMetadataForClass(ParseImplicitDocumentStart, 'ParseImplicitDocumentStart');
  initMetadataForClass(ParseDocumentStart, 'ParseDocumentStart');
  initMetadataForClass(ParseDocumentEnd, 'ParseDocumentEnd');
  initMetadataForClass(ParseDocumentContent, 'ParseDocumentContent');
  initMetadataForClass(ParseBlockNode, 'ParseBlockNode');
  initMetadataForClass(ParseBlockSequenceFirstEntry, 'ParseBlockSequenceFirstEntry');
  initMetadataForClass(ParseBlockSequenceEntryKey, 'ParseBlockSequenceEntryKey');
  initMetadataForClass(ParseBlockSequenceEntryValue, 'ParseBlockSequenceEntryValue');
  initMetadataForClass(ParseIndentlessSequenceEntryKey, 'ParseIndentlessSequenceEntryKey');
  initMetadataForClass(ParseIndentlessSequenceEntryValue, 'ParseIndentlessSequenceEntryValue');
  initMetadataForClass(ParseBlockMappingFirstKey, 'ParseBlockMappingFirstKey');
  initMetadataForClass(ParseBlockMappingKey, 'ParseBlockMappingKey');
  initMetadataForClass(ParseBlockMappingValue, 'ParseBlockMappingValue');
  initMetadataForClass(ParseBlockMappingValueComment, 'ParseBlockMappingValueComment');
  initMetadataForClass(ParseBlockMappingValueCommentList, 'ParseBlockMappingValueCommentList');
  initMetadataForClass(ParseFlowSequenceFirstEntry, 'ParseFlowSequenceFirstEntry');
  initMetadataForClass(ParseFlowSequenceEntry, 'ParseFlowSequenceEntry');
  initMetadataForClass(ParseFlowEndComment, 'ParseFlowEndComment');
  initMetadataForClass(ParseFlowSequenceEntryMappingKey, 'ParseFlowSequenceEntryMappingKey');
  initMetadataForClass(ParseFlowSequenceEntryMappingValue, 'ParseFlowSequenceEntryMappingValue');
  initMetadataForClass(ParseFlowSequenceEntryMappingEnd, 'ParseFlowSequenceEntryMappingEnd');
  initMetadataForClass(ParseFlowMappingFirstKey, 'ParseFlowMappingFirstKey');
  initMetadataForClass(ParseFlowMappingKey, 'ParseFlowMappingKey');
  initMetadataForClass(ParseFlowMappingValue, 'ParseFlowMappingValue');
  initMetadataForClass(ParseFlowMappingEmptyValue, 'ParseFlowMappingEmptyValue');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ParserImpl, 'ParserImpl');
  initMetadataForClass(VersionTagsTuple, 'VersionTagsTuple');
  initMetadataForClass(ImplicitResolversBuilder, 'ImplicitResolversBuilder', ImplicitResolversBuilder);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(BaseScalarResolver, 'BaseScalarResolver');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(JsonScalarResolver, 'JsonScalarResolver', JsonScalarResolver, BaseScalarResolver);
  initMetadataForClass(ResolverTuple, 'ResolverTuple');
  function checkToken(choice) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [choice];
    return this.p1k(tmp$ret$2.slice());
  }
  initMetadataForInterface(Scanner, 'Scanner');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(ScannerImpl, 'ScannerImpl', VOID, VOID, [Scanner]);
  initMetadataForClass(Clip, 'Clip');
  initMetadataForClass(Strip, 'Strip');
  initMetadataForClass(Keep, 'Keep');
  initMetadataForClass(BreakIntentHolder, 'BreakIntentHolder');
  initMetadataForClass(SimpleKey, 'SimpleKey');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(StreamReader, 'StreamReader');
  initMetadataForClass(JsonSchema, 'JsonSchema', JsonSchema);
  initMetadataForClass(Token, 'Token');
  initMetadataForClass(AliasToken, 'AliasToken', VOID, Token);
  initMetadataForClass(AnchorToken, 'AnchorToken', VOID, Token);
  initMetadataForClass(BlockEndToken, 'BlockEndToken', VOID, Token);
  initMetadataForClass(BlockEntryToken, 'BlockEntryToken', VOID, Token);
  initMetadataForClass(BlockMappingStartToken, 'BlockMappingStartToken', VOID, Token);
  initMetadataForClass(BlockSequenceStartToken, 'BlockSequenceStartToken', VOID, Token);
  initMetadataForClass(CommentToken, 'CommentToken', VOID, Token);
  initMetadataForClass(YamlDirective, 'YamlDirective');
  initMetadataForClass(TagDirective, 'TagDirective');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(DirectiveToken, 'DirectiveToken', VOID, Token);
  initMetadataForClass(DocumentEndToken, 'DocumentEndToken', VOID, Token);
  initMetadataForClass(DocumentStartToken, 'DocumentStartToken', VOID, Token);
  initMetadataForClass(FlowEntryToken, 'FlowEntryToken', VOID, Token);
  initMetadataForClass(FlowMappingEndToken, 'FlowMappingEndToken', VOID, Token);
  initMetadataForClass(FlowMappingStartToken, 'FlowMappingStartToken', VOID, Token);
  initMetadataForClass(FlowSequenceEndToken, 'FlowSequenceEndToken', VOID, Token);
  initMetadataForClass(FlowSequenceStartToken, 'FlowSequenceStartToken', VOID, Token);
  initMetadataForClass(KeyToken, 'KeyToken', VOID, Token);
  initMetadataForClass(ScalarToken, 'ScalarToken', VOID, Token);
  initMetadataForClass(StreamEndToken, 'StreamEndToken', VOID, Token);
  initMetadataForClass(StreamStartToken, 'StreamStartToken', VOID, Token);
  initMetadataForClass(TagToken, 'TagToken', VOID, Token);
  initMetadataForClass(TagTuple, 'TagTuple');
  initMetadataForClass(ID_0, 'ID', VOID, Enum);
  initMetadataForClass(ValueToken, 'ValueToken', VOID, Token);
  //endregion
  function CollectionProvider() {
  }
  function SpecVersionMutator() {
  }
  function Companion() {
  }
  protoOf(Companion).cz = function () {
    return new LoadSettingsBuilder();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function LoadSettings(label, tagConstructors, defaultList, defaultSet, defaultMap, versionFunction, bufferSize, allowDuplicateKeys, allowRecursiveKeys, maxAliasesForCollections, useMarks, customProperties, envConfig, parseComments, codePointLimit, schema) {
    this.z1b_1 = label;
    this.a1c_1 = tagConstructors;
    this.b1c_1 = defaultList;
    this.c1c_1 = defaultSet;
    this.d1c_1 = defaultMap;
    this.e1c_1 = versionFunction;
    this.f1c_1 = bufferSize;
    this.g1c_1 = allowDuplicateKeys;
    this.h1c_1 = allowRecursiveKeys;
    this.i1c_1 = maxAliasesForCollections;
    this.j1c_1 = useMarks;
    this.k1c_1 = customProperties;
    this.l1c_1 = envConfig;
    this.m1c_1 = parseComments;
    this.n1c_1 = codePointLimit;
    this.o1c_1 = schema;
  }
  function sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0(function_0) {
    this.p1c_1 = function_0;
  }
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0).b3 = function () {
    return this.p1c_1;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, CollectionProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.b3(), other.b3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0).hashCode = function () {
    return hashCode(this.b3());
  };
  function sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0(function_0) {
    this.q1c_1 = function_0;
  }
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0).b3 = function () {
    return this.q1c_1;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, CollectionProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.b3(), other.b3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0).hashCode = function () {
    return hashCode(this.b3());
  };
  function sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1(function_0) {
    this.r1c_1 = function_0;
  }
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1).b3 = function () {
    return this.r1c_1;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, CollectionProvider) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.b3(), other.b3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1).hashCode = function () {
    return hashCode(this.b3());
  };
  function sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0(function_0) {
    this.s1c_1 = function_0;
  }
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0).y1b = function (version) {
    return this.s1c_1(version);
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0).b3 = function () {
    return this.s1c_1;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpecVersionMutator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.b3(), other.b3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0).hashCode = function () {
    return hashCode(this.b3());
  };
  function LoadSettingsBuilder$defaultList$lambda(initialCapacity) {
    return ArrayList_init_$Create$(initialCapacity);
  }
  function LoadSettingsBuilder$defaultSet$lambda(initialCapacity) {
    return LinkedHashSet_init_$Create$(initialCapacity);
  }
  function LoadSettingsBuilder$defaultMap$lambda(initialCapacity) {
    return LinkedHashMap_init_$Create$(initialCapacity);
  }
  function LoadSettingsBuilder$versionFunction$lambda(version) {
    if (!(version.t1c_1 === 1))
      throw new YamlVersionException(version);
    return version;
  }
  function LoadSettingsBuilder() {
    this.v1c_1 = HashMap_init_$Create$();
    this.w1c_1 = 'reader';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x1c_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    var tmp_1 = LoadSettingsBuilder$defaultList$lambda;
    tmp_0.y1c_1 = new sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0(tmp_1);
    var tmp_2 = this;
    var tmp_3 = LoadSettingsBuilder$defaultSet$lambda;
    tmp_2.z1c_1 = new sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_0(tmp_3);
    var tmp_4 = this;
    var tmp_5 = LoadSettingsBuilder$defaultMap$lambda;
    tmp_4.a1d_1 = new sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_CollectionProvider$0_1(tmp_5);
    var tmp_6 = this;
    var tmp_7 = LoadSettingsBuilder$versionFunction$lambda;
    tmp_6.b1d_1 = new sam$it_krzeminski_snakeyaml_engine_kmp_api_LoadSettings_SpecVersionMutator$0(tmp_7);
    this.c1d_1 = 1024;
    this.d1d_1 = false;
    this.e1d_1 = false;
    this.f1d_1 = false;
    this.g1d_1 = 50;
    this.h1d_1 = true;
    this.i1d_1 = null;
    this.j1d_1 = 3145728;
    this.k1d_1 = new JsonSchema();
  }
  protoOf(LoadSettingsBuilder).l1d = function (label) {
    this.w1c_1 = label;
    return this;
  };
  protoOf(LoadSettingsBuilder).m1d = function (codePointLimit) {
    this.j1d_1 = codePointLimit;
    return this;
  };
  protoOf(LoadSettingsBuilder).n1d = function () {
    return new LoadSettings(this.w1c_1, this.x1c_1, this.y1c_1, this.z1c_1, this.a1d_1, this.b1d_1, this.c1d_1, this.d1d_1, this.e1d_1, this.g1d_1, this.h1d_1, this.v1c_1, this.i1d_1, this.f1d_1, this.j1d_1, this.k1d_1);
  };
  var CommentType_BLANK_LINE_instance;
  var CommentType_BLOCK_instance;
  var CommentType_IN_LINE_instance;
  var CommentType_entriesInitialized;
  function CommentType_initEntries() {
    if (CommentType_entriesInitialized)
      return Unit_instance;
    CommentType_entriesInitialized = true;
    CommentType_BLANK_LINE_instance = new CommentType('BLANK_LINE', 0);
    CommentType_BLOCK_instance = new CommentType('BLOCK', 1);
    CommentType_IN_LINE_instance = new CommentType('IN_LINE', 2);
  }
  function CommentType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CommentType_BLANK_LINE_getInstance() {
    CommentType_initEntries();
    return CommentType_BLANK_LINE_instance;
  }
  function CommentType_BLOCK_getInstance() {
    CommentType_initEntries();
    return CommentType_BLOCK_instance;
  }
  function CommentType_IN_LINE_getInstance() {
    CommentType_initEntries();
    return CommentType_IN_LINE_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.o1d_1 = setOf([new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(38))]);
    this.p1d_1 = Regex_init_$Create$('\\s');
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Anchor(value) {
    Companion_getInstance_0();
    this.q1d_1 = value;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.q1d_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.common.Anchor.<anonymous>' call
      var message = 'Empty anchor.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var indexedObject = this.q1d_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (Companion_getInstance_0().o1d_1.o1(new Char(element))) {
        throw new EmitterException("Invalid character '" + toString_0(element) + "' in the anchor: " + this.q1d_1);
      }
    }
    if (Companion_getInstance_0().p1d_1.xb(this.q1d_1)) {
      throw new EmitterException('Anchor may not contain spaces: ' + this.q1d_1);
    }
  }
  protoOf(Anchor).toString = function () {
    return this.q1d_1;
  };
  protoOf(Anchor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Anchor))
      return false;
    return this.q1d_1 === other.q1d_1;
  };
  protoOf(Anchor).hashCode = function () {
    return getStringHashCode(this.q1d_1);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.r1d_1 = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    this.s1d_1 = '\n';
    this.t1d_1 = '\r\n';
    this.u1d_1 = '\x00\r\n';
    this.v1d_1 = ' \x00\r\n';
    this.w1d_1 = '\t \x00\r\n';
    this.x1d_1 = '\x00 \t';
    this.y1d_1 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_-;/?:@&=+$_.!~*'()%";
    this.z1d_1 = new CharConstants('\n');
    this.a1e_1 = new CharConstants('\x00\r\n');
    this.b1e_1 = new CharConstants(' \x00\r\n');
    this.c1e_1 = new CharConstants('\t \x00\r\n');
    this.d1e_1 = new CharConstants('\x00 \t');
    this.e1e_1 = new CharConstants("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_-;/?:@&=+$_.!~*'()%,[]");
    this.f1e_1 = new CharConstants("abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_-;/?:@&=+$_.!~*'()%");
    this.g1e_1 = new CharConstants('abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
    this.h1e_1 = 128;
    this.i1e_1 = mapOf([to(new Char(_Char___init__impl__6a9atx(48)), '\x00'), to(new Char(_Char___init__impl__6a9atx(97)), '\x07'), to(new Char(_Char___init__impl__6a9atx(98)), '\b'), to(new Char(_Char___init__impl__6a9atx(116)), '\t'), to(new Char(_Char___init__impl__6a9atx(110)), '\n'), to(new Char(_Char___init__impl__6a9atx(118)), '\x0B'), to(new Char(_Char___init__impl__6a9atx(102)), '\f'), to(new Char(_Char___init__impl__6a9atx(114)), '\r'), to(new Char(_Char___init__impl__6a9atx(101)), '\x1B'), to(new Char(_Char___init__impl__6a9atx(32)), ' '), to(new Char(_Char___init__impl__6a9atx(34)), '"'), to(new Char(_Char___init__impl__6a9atx(47)), '/'), to(new Char(_Char___init__impl__6a9atx(92)), '\\'), to(new Char(_Char___init__impl__6a9atx(78)), '\x85'), to(new Char(_Char___init__impl__6a9atx(95)), '\xA0')]);
    var tmp = this;
    // Inline function 'kotlin.collections.associate' call
    var this_0 = this.i1e_1.b2();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.common.Companion.escapedReplacements.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.u1().c1_1;
      // Inline function 'kotlin.collections.component2' call
      var v = element.v1();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(v, new Char(k));
      destination.c2(pair.te_1, pair.ue_1);
    }
    tmp.j1e_1 = destination;
    this.k1e_1 = mapOf([to(new Char(_Char___init__impl__6a9atx(120)), 2), to(new Char(_Char___init__impl__6a9atx(117)), 4), to(new Char(_Char___init__impl__6a9atx(85)), 8)]);
  }
  protoOf(Companion_1).l1e = function (char) {
    var charString = toString_0(char);
    if (contains(' /"', char))
      return charString;
    var tmp = this.j1e_1.y1(charString);
    var tmp0_elvis_lhs = tmp == null ? null : tmp.c1_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      return charString;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var escaped = tmp_0;
    return '\\' + toString_0(escaped);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CharConstants(content) {
    Companion_getInstance_1();
    // Inline function 'kotlin.text.map' call
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(content));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(content)) {
      var item = charSequenceGet(content, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.common.CharConstants.<anonymous>' call
      // Inline function 'kotlin.code' call
      var tmp$ret$1 = Char__toInt_impl_vasixd(item);
      destination.e(tmp$ret$1);
    }
    var contentCodes = destination;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = booleanArray(128);
    while (tmp_0 < 128) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = contentCodes.o1(tmp_2);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.m1e_1 = tmp_1;
  }
  protoOf(CharConstants).n1e = function (c) {
    return c < 128 && this.m1e_1[c];
  };
  protoOf(CharConstants).o1e = function (c) {
    return !this.n1e(c);
  };
  protoOf(CharConstants).p1e = function (c, additional) {
    return this.n1e(c) || contains(additional, numberToChar(c));
  };
  protoOf(CharConstants).q1e = function (c, additional) {
    return !this.p1e(c, additional);
  };
  var FlowStyle_FLOW_instance;
  var FlowStyle_BLOCK_instance;
  var FlowStyle_AUTO_instance;
  var FlowStyle_entriesInitialized;
  function FlowStyle_initEntries() {
    if (FlowStyle_entriesInitialized)
      return Unit_instance;
    FlowStyle_entriesInitialized = true;
    FlowStyle_FLOW_instance = new FlowStyle('FLOW', 0);
    FlowStyle_BLOCK_instance = new FlowStyle('BLOCK', 1);
    FlowStyle_AUTO_instance = new FlowStyle('AUTO', 2);
  }
  function FlowStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FlowStyle_FLOW_getInstance() {
    FlowStyle_initEntries();
    return FlowStyle_FLOW_instance;
  }
  function FlowStyle_BLOCK_getInstance() {
    FlowStyle_initEntries();
    return FlowStyle_BLOCK_instance;
  }
  var ScalarStyle_DOUBLE_QUOTED_instance;
  var ScalarStyle_SINGLE_QUOTED_instance;
  var ScalarStyle_LITERAL_instance;
  var ScalarStyle_FOLDED_instance;
  var ScalarStyle_JSON_SCALAR_STYLE_instance;
  var ScalarStyle_PLAIN_instance;
  var ScalarStyle_entriesInitialized;
  function ScalarStyle_initEntries() {
    if (ScalarStyle_entriesInitialized)
      return Unit_instance;
    ScalarStyle_entriesInitialized = true;
    ScalarStyle_DOUBLE_QUOTED_instance = new ScalarStyle('DOUBLE_QUOTED', 0, _Char___init__impl__6a9atx(34));
    ScalarStyle_SINGLE_QUOTED_instance = new ScalarStyle('SINGLE_QUOTED', 1, _Char___init__impl__6a9atx(39));
    ScalarStyle_LITERAL_instance = new ScalarStyle('LITERAL', 2, _Char___init__impl__6a9atx(124));
    ScalarStyle_FOLDED_instance = new ScalarStyle('FOLDED', 3, _Char___init__impl__6a9atx(62));
    ScalarStyle_JSON_SCALAR_STYLE_instance = new ScalarStyle('JSON_SCALAR_STYLE', 4, _Char___init__impl__6a9atx(74));
    ScalarStyle_PLAIN_instance = new ScalarStyle('PLAIN', 5, null);
  }
  function ScalarStyle(name, ordinal, styleOpt) {
    Enum.call(this, name, ordinal);
    this.t1e_1 = styleOpt;
  }
  protoOf(ScalarStyle).toString = function () {
    var tmp0_elvis_lhs = this.t1e_1;
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      tmp = _Char___init__impl__6a9atx(58);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return toString_0(tmp);
  };
  function ScalarStyle_DOUBLE_QUOTED_getInstance() {
    ScalarStyle_initEntries();
    return ScalarStyle_DOUBLE_QUOTED_instance;
  }
  function ScalarStyle_SINGLE_QUOTED_getInstance() {
    ScalarStyle_initEntries();
    return ScalarStyle_SINGLE_QUOTED_instance;
  }
  function ScalarStyle_LITERAL_getInstance() {
    ScalarStyle_initEntries();
    return ScalarStyle_LITERAL_instance;
  }
  function ScalarStyle_FOLDED_getInstance() {
    ScalarStyle_initEntries();
    return ScalarStyle_FOLDED_instance;
  }
  function ScalarStyle_PLAIN_getInstance() {
    ScalarStyle_initEntries();
    return ScalarStyle_PLAIN_instance;
  }
  function SpecVersion(major, minor) {
    this.t1c_1 = major;
    this.u1c_1 = minor;
  }
  protoOf(SpecVersion).toString = function () {
    return 'Version{major=' + this.t1c_1 + ', minor=' + this.u1c_1 + '}';
  };
  function urlDecode($this, content) {
    return UrlEncoderUtil_getInstance().w1b(content, false);
  }
  function urlEncode($this, content) {
    return UrlEncoderUtil_getInstance().x1b(content, "-_.!~*'()@:$&,;=[]/", false);
  }
  function UriEncoder() {
    this.u1e_1 = "-_.!~*'()@:$&,;=[]/";
  }
  protoOf(UriEncoder).v1e = function (uri) {
    return urlEncode(this, uri);
  };
  protoOf(UriEncoder).w1e = function (buff) {
    var content = decodeToString(buff.w1a());
    return this.x1e(content);
  };
  protoOf(UriEncoder).x1e = function (buff) {
    return urlDecode(this, buff);
  };
  var UriEncoder_instance;
  function UriEncoder_getInstance() {
    return UriEncoder_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.y1e_1 = mapOf([to('true', true), to('false', false)]);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ConstructScalar() {
    Companion_getInstance_2();
  }
  function ConstructYamlNull() {
    ConstructScalar.call(this);
  }
  function ConstructYamlBinary() {
    ConstructScalar.call(this);
  }
  function ConstructYamlJsonBool() {
    ConstructScalar.call(this);
  }
  function ConstructYamlJsonFloat() {
    ConstructScalar.call(this);
  }
  function ConstructYamlJsonInt() {
    ConstructScalar.call(this);
  }
  function AliasEvent(anchor, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    NodeEvent.call(this, anchor, startMark, endMark);
    var tmp = this;
    var tmp_0;
    if (anchor == null) {
      throw NullPointerException_init_$Create$('Anchor is required in AliasEvent');
    } else {
      tmp_0 = anchor;
    }
    tmp.c1f_1 = tmp_0;
  }
  protoOf(AliasEvent).d1f = function () {
    return ID_Alias_getInstance();
  };
  protoOf(AliasEvent).toString = function () {
    return '=ALI *' + this.c1f_1.toString();
  };
  function CollectionEndEvent_init_$Init$(startMark, endMark, $this) {
    Event.call($this, startMark, endMark);
    CollectionEndEvent.call($this);
    return $this;
  }
  function CollectionEndEvent_init_$Init$_0($this) {
    Event.call($this);
    CollectionEndEvent.call($this);
    return $this;
  }
  function CollectionEndEvent() {
  }
  function CollectionStartEvent(anchor, tag, implicit, flowStyle, startMark, endMark) {
    NodeEvent.call(this, anchor, startMark, endMark);
    this.j1f_1 = tag;
    this.k1f_1 = implicit;
    this.l1f_1 = flowStyle;
  }
  protoOf(CollectionStartEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.CollectionStartEvent.toString.<anonymous>' call
    if (!(this.o1f_1 == null)) {
      this_0.t7(' &' + toString_1(this.o1f_1));
    }
    if (!this.k1f_1) {
      if (!(this.j1f_1 == null)) {
        this_0.t7(' <' + this.j1f_1 + '>');
      }
    }
    return this_0.toString();
  };
  function CommentEvent(commentType, value, startMark, endMark) {
    Event.call(this, startMark, endMark);
    this.r1f_1 = commentType;
    this.s1f_1 = value;
  }
  protoOf(CommentEvent).d1f = function () {
    return ID_Comment_getInstance();
  };
  protoOf(CommentEvent).toString = function () {
    return '=COM ' + this.r1f_1.toString() + ' ' + this.s1f_1;
  };
  function DocumentEndEvent(isExplicit, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    Event.call(this, startMark, endMark);
    this.v1f_1 = isExplicit;
  }
  protoOf(DocumentEndEvent).d1f = function () {
    return ID_DocumentEnd_getInstance();
  };
  protoOf(DocumentEndEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.DocumentEndEvent.toString.<anonymous>' call
    this_0.t7('-DOC');
    if (this.v1f_1) {
      this_0.t7(' ...');
    }
    return this_0.toString();
  };
  function DocumentStartEvent(explicit, specVersion, tags, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    Event.call(this, startMark, endMark);
    this.y1f_1 = explicit;
    this.z1f_1 = specVersion;
    this.a1g_1 = tags;
  }
  protoOf(DocumentStartEvent).d1f = function () {
    return ID_DocumentStart_getInstance();
  };
  protoOf(DocumentStartEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.DocumentStartEvent.toString.<anonymous>' call
    this_0.t7('+DOC');
    if (this.y1f_1) {
      this_0.t7(' ---');
    }
    return this_0.toString();
  };
  var ID_Alias_instance;
  var ID_Comment_instance;
  var ID_DocumentEnd_instance;
  var ID_DocumentStart_instance;
  var ID_MappingEnd_instance;
  var ID_MappingStart_instance;
  var ID_Scalar_instance;
  var ID_SequenceEnd_instance;
  var ID_SequenceStart_instance;
  var ID_StreamEnd_instance;
  var ID_StreamStart_instance;
  var ID_entriesInitialized;
  function ID_initEntries() {
    if (ID_entriesInitialized)
      return Unit_instance;
    ID_entriesInitialized = true;
    ID_Alias_instance = new ID('Alias', 0);
    ID_Comment_instance = new ID('Comment', 1);
    ID_DocumentEnd_instance = new ID('DocumentEnd', 2);
    ID_DocumentStart_instance = new ID('DocumentStart', 3);
    ID_MappingEnd_instance = new ID('MappingEnd', 4);
    ID_MappingStart_instance = new ID('MappingStart', 5);
    ID_Scalar_instance = new ID('Scalar', 6);
    ID_SequenceEnd_instance = new ID('SequenceEnd', 7);
    ID_SequenceStart_instance = new ID('SequenceStart', 8);
    ID_StreamEnd_instance = new ID('StreamEnd', 9);
    ID_StreamStart_instance = new ID('StreamStart', 10);
  }
  function ID(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ID_Alias_getInstance() {
    ID_initEntries();
    return ID_Alias_instance;
  }
  function ID_Comment_getInstance() {
    ID_initEntries();
    return ID_Comment_instance;
  }
  function ID_DocumentEnd_getInstance() {
    ID_initEntries();
    return ID_DocumentEnd_instance;
  }
  function ID_DocumentStart_getInstance() {
    ID_initEntries();
    return ID_DocumentStart_instance;
  }
  function ID_MappingEnd_getInstance() {
    ID_initEntries();
    return ID_MappingEnd_instance;
  }
  function ID_MappingStart_getInstance() {
    ID_initEntries();
    return ID_MappingStart_instance;
  }
  function ID_Scalar_getInstance() {
    ID_initEntries();
    return ID_Scalar_instance;
  }
  function ID_SequenceEnd_getInstance() {
    ID_initEntries();
    return ID_SequenceEnd_instance;
  }
  function ID_SequenceStart_getInstance() {
    ID_initEntries();
    return ID_SequenceStart_instance;
  }
  function ID_StreamEnd_getInstance() {
    ID_initEntries();
    return ID_StreamEnd_instance;
  }
  function ID_StreamStart_getInstance() {
    ID_initEntries();
    return ID_StreamStart_instance;
  }
  function Event(startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    this.e1f_1 = startMark;
    this.f1f_1 = endMark;
    if (!(this.e1f_1 == null) && this.f1f_1 == null || (this.e1f_1 == null && !(this.f1f_1 == null))) {
      throw NullPointerException_init_$Create$('Both marks must be either present or absent.');
    }
  }
  function ImplicitTuple(plain, nonPlain) {
    this.b1g_1 = plain;
    this.c1g_1 = nonPlain;
  }
  protoOf(ImplicitTuple).d1g = function () {
    return !this.b1g_1 && !this.c1g_1;
  };
  protoOf(ImplicitTuple).toString = function () {
    return 'implicit=[' + this.b1g_1 + ', ' + this.c1g_1 + ']';
  };
  function MappingEndEvent_init_$Init$(startMark, endMark, $this) {
    CollectionEndEvent_init_$Init$(startMark, endMark, $this);
    MappingEndEvent.call($this);
    return $this;
  }
  function MappingEndEvent_init_$Create$(startMark, endMark) {
    return MappingEndEvent_init_$Init$(startMark, endMark, objectCreate(protoOf(MappingEndEvent)));
  }
  function MappingEndEvent_init_$Init$_0($this) {
    CollectionEndEvent_init_$Init$_0($this);
    MappingEndEvent.call($this);
    return $this;
  }
  function MappingEndEvent_init_$Create$_0() {
    return MappingEndEvent_init_$Init$_0(objectCreate(protoOf(MappingEndEvent)));
  }
  protoOf(MappingEndEvent).d1f = function () {
    return ID_MappingEnd_getInstance();
  };
  protoOf(MappingEndEvent).toString = function () {
    return '-MAP';
  };
  function MappingEndEvent() {
  }
  function MappingStartEvent(anchor, tag, implicit, flowStyle, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    CollectionStartEvent.call(this, anchor, tag, implicit, flowStyle, startMark, endMark);
  }
  protoOf(MappingStartEvent).d1f = function () {
    return ID_MappingStart_getInstance();
  };
  protoOf(MappingStartEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.MappingStartEvent.toString.<anonymous>' call
    this_0.t7('+MAP');
    if (this.l1f_1.equals(FlowStyle_FLOW_getInstance())) {
      this_0.t7(' {}');
    }
    this_0.t7(protoOf(CollectionStartEvent).toString.call(this));
    return this_0.toString();
  };
  function NodeEvent(anchor, startMark, endMark) {
    Event.call(this, startMark, endMark);
    this.o1f_1 = anchor;
  }
  function ScalarEvent$escapedValue$lambda(ch) {
    return Companion_getInstance_1().l1e(numberToChar(ch));
  }
  function ScalarEvent(anchor, tag, implicit, value, scalarStyle, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    NodeEvent.call(this, anchor, startMark, endMark);
    this.p1g_1 = tag;
    this.q1g_1 = implicit;
    this.r1g_1 = value;
    this.s1g_1 = scalarStyle;
  }
  protoOf(ScalarEvent).d1f = function () {
    return ID_Scalar_getInstance();
  };
  protoOf(ScalarEvent).t1g = function () {
    return this.s1g_1.equals(ScalarStyle_PLAIN_getInstance());
  };
  protoOf(ScalarEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.ScalarEvent.toString.<anonymous>' call
    this_0.t7('=VAL');
    if (!(this.o1f_1 == null)) {
      this_0.t7(' &' + toString_1(this.o1f_1));
    }
    if (this.q1g_1.d1g()) {
      if (!(this.p1g_1 == null)) {
        this_0.t7(' <' + this.p1g_1 + '>');
      }
    }
    this_0.t7(' ');
    this_0.t7(this.s1g_1.toString());
    this_0.t7(this.u1g());
    return this_0.toString();
  };
  protoOf(ScalarEvent).u1g = function () {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = toCodePoints(this.r1g_1);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.ScalarEvent.escapedValue.<anonymous>' call
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(65535);
      if (element < Char__toInt_impl_vasixd(this_0)) {
        destination.e(element);
      }
    }
    var tmp = destination;
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, ScalarEvent$escapedValue$lambda);
  };
  function SequenceEndEvent_init_$Init$(startMark, endMark, $this) {
    CollectionEndEvent_init_$Init$(startMark, endMark, $this);
    SequenceEndEvent.call($this);
    return $this;
  }
  function SequenceEndEvent_init_$Create$(startMark, endMark) {
    return SequenceEndEvent_init_$Init$(startMark, endMark, objectCreate(protoOf(SequenceEndEvent)));
  }
  function SequenceEndEvent_init_$Init$_0($this) {
    CollectionEndEvent_init_$Init$_0($this);
    SequenceEndEvent.call($this);
    return $this;
  }
  function SequenceEndEvent_init_$Create$_0() {
    return SequenceEndEvent_init_$Init$_0(objectCreate(protoOf(SequenceEndEvent)));
  }
  protoOf(SequenceEndEvent).d1f = function () {
    return ID_SequenceEnd_getInstance();
  };
  protoOf(SequenceEndEvent).toString = function () {
    return '-SEQ';
  };
  function SequenceEndEvent() {
  }
  function SequenceStartEvent(anchor, tag, implicit, flowStyle, startMark, endMark) {
    startMark = startMark === VOID ? null : startMark;
    endMark = endMark === VOID ? null : endMark;
    CollectionStartEvent.call(this, anchor, tag, implicit, flowStyle, startMark, endMark);
  }
  protoOf(SequenceStartEvent).d1f = function () {
    return ID_SequenceStart_getInstance();
  };
  protoOf(SequenceStartEvent).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.events.SequenceStartEvent.toString.<anonymous>' call
    this_0.t7('+SEQ');
    if (this.l1f_1.equals(FlowStyle_FLOW_getInstance())) {
      this_0.t7(' []');
    }
    this_0.t7(protoOf(CollectionStartEvent).toString.call(this));
    return this_0.toString();
  };
  function StreamEndEvent_init_$Init$(startMark, endMark, $this) {
    Event.call($this, startMark, endMark);
    StreamEndEvent.call($this);
    return $this;
  }
  function StreamEndEvent_init_$Create$(startMark, endMark) {
    return StreamEndEvent_init_$Init$(startMark, endMark, objectCreate(protoOf(StreamEndEvent)));
  }
  function StreamEndEvent_init_$Init$_0($this) {
    Event.call($this);
    StreamEndEvent.call($this);
    return $this;
  }
  function StreamEndEvent_init_$Create$_0() {
    return StreamEndEvent_init_$Init$_0(objectCreate(protoOf(StreamEndEvent)));
  }
  protoOf(StreamEndEvent).d1f = function () {
    return ID_StreamEnd_getInstance();
  };
  protoOf(StreamEndEvent).toString = function () {
    return '-STR';
  };
  function StreamEndEvent() {
  }
  function StreamStartEvent_init_$Init$(startMark, endMark, $this) {
    Event.call($this, startMark, endMark);
    StreamStartEvent.call($this);
    return $this;
  }
  function StreamStartEvent_init_$Create$(startMark, endMark) {
    return StreamStartEvent_init_$Init$(startMark, endMark, objectCreate(protoOf(StreamStartEvent)));
  }
  function StreamStartEvent_init_$Init$_0($this) {
    Event.call($this);
    StreamStartEvent.call($this);
    return $this;
  }
  function StreamStartEvent_init_$Create$_0() {
    return StreamStartEvent_init_$Init$_0(objectCreate(protoOf(StreamStartEvent)));
  }
  protoOf(StreamStartEvent).d1f = function () {
    return ID_StreamStart_getInstance();
  };
  protoOf(StreamStartEvent).toString = function () {
    return '+STR';
  };
  function StreamStartEvent() {
  }
  function EmitterException(msg) {
    YamlEngineException_init_$Init$(msg, this);
    captureStack(this, EmitterException);
  }
  function isLineBreak($this, c) {
    return Companion_getInstance_1().a1e_1.n1e(c);
  }
  function Companion_3() {
    this.h1h_1 = ' ... ';
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Mark(name, index, line, column, codepoints, pointer) {
    pointer = pointer === VOID ? 0 : pointer;
    this.i1h_1 = name;
    this.j1h_1 = index;
    this.k1h_1 = line;
    this.l1h_1 = column;
    this.m1h_1 = codepoints;
    this.n1h_1 = pointer;
  }
  protoOf(Mark).o1h = function (indentSize, maxLength) {
    var halfMaxLength = maxLength / 2 | 0;
    var tmp0 = take(this.m1h_1, this.n1h_1);
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlin.collections.takeLastWhile' call
      if (tmp0.q()) {
        tmp$ret$0 = emptyList();
        break $l$block_1;
      }
      var iterator = tmp0.r(tmp0.k());
      while (iterator.c4()) {
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.exceptions.Mark.createSnippet.<anonymous>' call
        var it = iterator.e4();
        if (!!isLineBreak(this, it)) {
          iterator.j();
          var expectedSize = tmp0.k() - iterator.d4() | 0;
          if (expectedSize === 0) {
            tmp$ret$0 = emptyList();
            break $l$block_1;
          }
          // Inline function 'kotlin.apply' call
          var this_0 = ArrayList_init_$Create$(expectedSize);
          // Inline function 'kotlin.collections.takeLastWhile.<anonymous>' call
          while (iterator.i()) {
            this_0.e(iterator.j());
          }
          tmp$ret$0 = this_0;
          break $l$block_1;
        }
      }
      tmp$ret$0 = toList(tmp0);
    }
    var lineBeforePointer = joinCodepointsToString(tmp$ret$0);
    // Inline function 'kotlin.collections.takeWhile' call
    var this_1 = drop(this.m1h_1, this.n1h_1);
    var list = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = this_1.h();
    $l$loop: while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.exceptions.Mark.createSnippet.<anonymous>' call
      if (!!isLineBreak(this, item))
        break $l$loop;
      list.e(item);
    }
    var lineAfterPointer = joinCodepointsToString(list);
    var tmp;
    if (lineBeforePointer.length > halfMaxLength) {
      tmp = ' ... ' + drop_0(takeLast(lineBeforePointer, halfMaxLength), 5);
    } else {
      tmp = lineBeforePointer;
    }
    var head = tmp;
    var tmp_0;
    if (lineAfterPointer.length > halfMaxLength) {
      tmp_0 = dropLast(take_0(lineAfterPointer, halfMaxLength), 5) + ' ... ';
    } else {
      tmp_0 = lineAfterPointer;
    }
    var tail = tmp_0;
    var indent = repeat(' ', indentSize);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_2 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.exceptions.Mark.createSnippet.<anonymous>' call
    this_2.t7(indent);
    this_2.t7(head);
    this_2.t7(tail);
    // Inline function 'kotlin.text.appendLine' call
    this_2.u7(_Char___init__impl__6a9atx(10));
    this_2.t7(indent);
    this_2.t7(repeat(' ', head.length));
    this_2.t7('^');
    return this_2.toString();
  };
  protoOf(Mark).p1h = function (indentSize, maxLength, $super) {
    indentSize = indentSize === VOID ? 4 : indentSize;
    maxLength = maxLength === VOID ? 75 : maxLength;
    return $super === VOID ? this.o1h(indentSize, maxLength) : $super.o1h.call(this, indentSize, maxLength);
  };
  protoOf(Mark).toString = function () {
    var snippet = this.p1h();
    // Inline function 'kotlin.text.trim' call
    var this_0 = this.i1h_1;
    var tmp$ret$0 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    return trimMargin('\n            | in ' + tmp$ret$0 + ', line ' + (this.k1h_1 + 1 | 0) + ', column ' + (this.l1h_1 + 1 | 0) + ':\n            |' + snippet + '\n        ');
  };
  function buildReadableError($this, context, contextMark, problem, problemMark) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.exceptions.Companion.buildReadableError.<anonymous>' call
    if (!(context == null)) {
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.t7(context).u7(_Char___init__impl__6a9atx(10));
    }
    if (!(contextMark == null)) {
      var problemIsPresent = !(problem == null) && !(problemMark == null);
      var tmp;
      var tmp_0;
      var tmp_1;
      if (!problemIsPresent) {
        tmp_1 = true;
      } else {
        tmp_1 = contextMark.i1h_1 === (problemMark == null ? null : problemMark.i1h_1);
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = !(contextMark.k1h_1 === (problemMark == null ? null : problemMark.k1h_1));
      }
      if (tmp_0) {
        tmp = true;
      } else {
        tmp = !(contextMark.l1h_1 === problemMark.l1h_1);
      }
      if (tmp) {
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.s7(contextMark).u7(_Char___init__impl__6a9atx(10));
      }
    }
    if (!(problem == null)) {
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.t7(problem).u7(_Char___init__impl__6a9atx(10));
    }
    if (!(problemMark == null)) {
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      this_0.s7(problemMark).u7(_Char___init__impl__6a9atx(10));
    }
    return this_0.toString();
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function MarkedYamlEngineException(context, contextMark, problem, problemMark, cause) {
    cause = cause === VOID ? null : cause;
    YamlEngineException_init_$Init$_1(buildReadableError(Companion_instance_4, context, contextMark, problem, problemMark), cause, this);
    captureStack(this, MarkedYamlEngineException);
    this.q1h_1 = context;
    this.r1h_1 = contextMark;
    this.s1h_1 = problem;
    this.t1h_1 = problemMark;
  }
  function ParserException(problem, contextMark, context, problemMark, cause) {
    context = context === VOID ? null : context;
    problemMark = problemMark === VOID ? null : problemMark;
    cause = cause === VOID ? null : cause;
    MarkedYamlEngineException.call(this, context, contextMark, problem, problemMark, cause);
    captureStack(this, ParserException);
  }
  function ReaderException(name, position, codePoint, message) {
    YamlEngineException_init_$Init$(message, this);
    captureStack(this, ReaderException);
    this.u1h_1 = name;
    this.v1h_1 = position;
    this.w1h_1 = codePoint;
  }
  protoOf(ReaderException).toString = function () {
    var s = concatToString(Character_getInstance().c1i(this.w1h_1));
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var charHex = toString_2(this.w1h_1, 16).toUpperCase();
    return trimIndent("\n             unacceptable code point '" + s + "' (0x" + charHex + ') ' + this.message + '\n             in "' + this.u1h_1 + '", position ' + this.v1h_1 + '\n             ');
  };
  function ScannerException(problem, problemMark, context, contextMark, cause) {
    context = context === VOID ? null : context;
    contextMark = contextMark === VOID ? null : contextMark;
    cause = cause === VOID ? null : cause;
    MarkedYamlEngineException.call(this, context, contextMark, problem, problemMark, cause);
    captureStack(this, ScannerException);
  }
  function YamlEngineException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$(message, $this);
    YamlEngineException.call($this);
    return $this;
  }
  function YamlEngineException_init_$Create$(message) {
    var tmp = YamlEngineException_init_$Init$(message, objectCreate(protoOf(YamlEngineException)));
    captureStack(tmp, YamlEngineException_init_$Create$);
    return tmp;
  }
  function YamlEngineException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    YamlEngineException.call($this);
    return $this;
  }
  function YamlEngineException_init_$Create$_0(cause) {
    var tmp = YamlEngineException_init_$Init$_0(cause, objectCreate(protoOf(YamlEngineException)));
    captureStack(tmp, YamlEngineException_init_$Create$_0);
    return tmp;
  }
  function YamlEngineException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    YamlEngineException.call($this);
    return $this;
  }
  function YamlEngineException() {
    captureStack(this, YamlEngineException);
  }
  function YamlVersionException(specVersion) {
    YamlEngineException_init_$Init$(specVersion.toString(), this);
    captureStack(this, YamlVersionException);
  }
  function appendCodePoint(_this__u8e3s4, codePoint) {
    if (Character_getInstance().f1i(codePoint)) {
      _this__u8e3s4.u7(numberToChar(codePoint));
    } else {
      _this__u8e3s4.u7(Character_getInstance().d1i(codePoint));
      _this__u8e3s4.u7(Character_getInstance().e1i(codePoint));
    }
    return _this__u8e3s4;
  }
  function joinCodepointsToString(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.joinCodepointsToString.<anonymous>' call
    appendCodePoints(this_0, _this__u8e3s4);
    return this_0.toString();
  }
  function appendCodePoints(_this__u8e3s4, codePoints) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = codePoints.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.appendCodePoints.<anonymous>' call
      appendCodePoint(_this__u8e3s4, element);
    }
    return _this__u8e3s4;
  }
  function codePointAt(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (charSequenceLength(_this__u8e3s4) - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('index ' + index + ' was not in range ' + get_indices(_this__u8e3s4).toString());
    var firstChar = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(firstChar)) {
      var nextChar = getOrNull(_this__u8e3s4, index + 1 | 0);
      var tmp;
      var tmp_0 = nextChar;
      if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = isLowSurrogate(nextChar);
      }
      if (tmp === true) {
        return Character_getInstance().g1i(firstChar, nextChar);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(firstChar);
  }
  function toCodePoints(_this__u8e3s4) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    var capacity = charSequenceLength(_this__u8e3s4);
    checkBuilderCapacity(capacity);
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$(capacity);
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.toCodePoints.<anonymous>' call
    var i = 0;
    var c = 0;
    while (i < charSequenceLength(_this__u8e3s4)) {
      var cp = codePointAt(_this__u8e3s4, i);
      this_0.e(cp);
      i = i + Character_getInstance().h1i(cp) | 0;
      c = c + 1 | 0;
    }
    return this_0.a5();
  }
  function Character() {
    Character_instance = this;
    this.x1h_1 = 0;
    this.y1h_1 = 1114111;
    this.z1h_1 = 65536;
    this.a1i_1 = -56613888;
    this.b1i_1 = _Char___init__impl__6a9atx(55232);
  }
  protoOf(Character).i1i = function (codePoint) {
    return 65536 <= codePoint ? codePoint <= 1114111 : false;
  };
  protoOf(Character).h1i = function (codePoint) {
    return codePoint <= 65536 ? 1 : 2;
  };
  protoOf(Character).j1i = function (highSurrogate, lowSurrogate) {
    return isHighSurrogate(highSurrogate) && isLowSurrogate(lowSurrogate);
  };
  protoOf(Character).g1i = function (highSurrogate, lowSurrogate) {
    // Inline function 'kotlin.code' call
    var tmp = Char__toInt_impl_vasixd(highSurrogate) << 10;
    // Inline function 'kotlin.code' call
    return (tmp + Char__toInt_impl_vasixd(lowSurrogate) | 0) + -56613888 | 0;
  };
  protoOf(Character).c1i = function (codePoint) {
    var tmp;
    if (this.f1i(codePoint)) {
      // Inline function 'kotlin.charArrayOf' call
      tmp = charArrayOf([numberToChar(codePoint)]);
    } else {
      var hi = this.d1i(codePoint);
      var lo = this.e1i(codePoint);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.j1i(hi, lo)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.charArrayOf' call
      tmp = charArrayOf([hi, lo]);
    }
    return tmp;
  };
  protoOf(Character).f1i = function (codePoint) {
    return (codePoint >>> 16 | 0) === 0;
  };
  protoOf(Character).d1i = function (codePoint) {
    var tmp = codePoint >>> 10 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(55232);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  };
  protoOf(Character).e1i = function (codePoint) {
    var tmp = codePoint & 1023;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(56320);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  };
  var Character_instance;
  function Character_getInstance() {
    if (Character_instance == null)
      new Character();
    return Character_instance;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.k1i_1 = 'tag:yaml.org,2002:';
    this.l1i_1 = new Tag('tag:yaml.org,2002:set');
    this.m1i_1 = new Tag('tag:yaml.org,2002:binary');
    this.n1i_1 = new Tag('tag:yaml.org,2002:int');
    this.o1i_1 = new Tag('tag:yaml.org,2002:float');
    this.p1i_1 = new Tag('tag:yaml.org,2002:bool');
    this.q1i_1 = new Tag('tag:yaml.org,2002:null');
    this.r1i_1 = new Tag('tag:yaml.org,2002:str');
    this.s1i_1 = new Tag('tag:yaml.org,2002:seq');
    this.t1i_1 = new Tag('tag:yaml.org,2002:map');
    this.u1i_1 = new Tag('tag:yaml.org,2002:comment');
    this.v1i_1 = new Tag('!ENV_VARIABLE');
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Tag(tag) {
    Companion_getInstance_5();
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(tag) > 0)) {
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.nodes.Tag.<anonymous>' call
      var message = 'Tag must not be empty.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.trim' call
    var this_0 = isCharSequence(tag) ? tag : THROW_CCE();
    var startIndex = 0;
    var endIndex = charSequenceLength(this_0) - 1 | 0;
    var startFound = false;
    $l$loop: while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.nodes.Tag.<anonymous>' call
      var it = charSequenceGet(this_0, index);
      var match = Char__compareTo_impl_ypi4mb(it, _Char___init__impl__6a9atx(32)) <= 0;
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break $l$loop;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    var tmp$ret$3 = charSequenceSubSequence(this_0, startIndex, endIndex + 1 | 0);
    // Inline function 'kotlin.require' call
    if (!(toString(tmp$ret$3).length === tag.length)) {
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.nodes.Tag.<anonymous>' call
      var message_0 = 'Tag must not contain leading or trailing spaces.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.w1i_1 = UriEncoder_instance.v1e(tag);
  }
  protoOf(Tag).toString = function () {
    return this.w1i_1;
  };
  protoOf(Tag).equals = function (other) {
    var tmp;
    if (other instanceof Tag) {
      tmp = this.w1i_1 === other.w1i_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Tag).hashCode = function () {
    return getStringHashCode(this.w1i_1);
  };
  function ParserImpl_init_$Init$(settings, reader, $this) {
    ParserImpl.call($this, settings, new ScannerImpl(settings, reader));
    return $this;
  }
  function ParserImpl_init_$Create$(settings, reader) {
    return ParserImpl_init_$Init$(settings, reader, objectCreate(protoOf(ParserImpl)));
  }
  function produce($this) {
    if ($this.b1j_1 == null) {
      var tmp0_safe_receiver = $this.c1j_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.parser.ParserImpl.produce.<anonymous>' call
        $this.b1j_1 = tmp0_safe_receiver.e1j();
      }
    }
  }
  function produceCommentEvent($this, token) {
    return new CommentEvent(token.h1j_1, token.i1j_1, token.j1j_1, token.k1j_1);
  }
  function processDirectives($this) {
    var yamlSpecVersion = null;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tagHandles = LinkedHashMap_init_$Create$_0();
    $l$loop: while ($this.y1i_1.l1j(ID_Directive_getInstance())) {
      var tmp = $this.y1i_1.j();
      var directive = tmp instanceof DirectiveToken ? tmp : THROW_CCE();
      if (directive.o1j_1 == null)
        continue $l$loop;
      var tmp0_subject = directive.o1j_1;
      if (tmp0_subject instanceof TagDirective) {
        var _destruct__k2r9zo = directive.o1j_1;
        var handle = _destruct__k2r9zo.ve();
        var prefix = _destruct__k2r9zo.we();
        if (tagHandles.w1(handle)) {
          throw new ParserException('duplicate tag handle ' + handle, directive.j1j_1);
        }
        // Inline function 'kotlin.collections.set' call
        tagHandles.c2(handle, prefix);
      } else {
        if (tmp0_subject instanceof YamlDirective) {
          if (!(yamlSpecVersion == null)) {
            throw new ParserException('found duplicate YAML directive', directive.j1j_1);
          }
          var _destruct__k2r9zo_0 = directive.o1j_1;
          var major = _destruct__k2r9zo_0.ve();
          var minor = _destruct__k2r9zo_0.we();
          yamlSpecVersion = $this.x1i_1.e1c_1.y1b(new SpecVersion(major, minor));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var detectedTagHandles = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!tagHandles.q()) {
      detectedTagHandles.e2(tagHandles);
    }
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = Companion_getInstance_6().t1j_1.b2().h();
    while (_iterator__ex2g4s.i()) {
      var _destruct__k2r9zo_1 = _iterator__ex2g4s.j();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo_1.u1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo_1.v1();
      if (!tagHandles.w1(key)) {
        // Inline function 'kotlin.collections.set' call
        tagHandles.c2(key, value);
      }
    }
    $this.d1j_1 = tagHandles;
    return new VersionTagsTuple(yamlSpecVersion, detectedTagHandles);
  }
  function parseFlowNode($this) {
    return parseNode($this, false, false);
  }
  function parseBlockNodeOrIndentlessSequence($this) {
    return parseNode($this, true, true);
  }
  function parseNode($this, block, indentlessSequence) {
    var startMark = null;
    var endMark = null;
    var tagMark = null;
    if ($this.y1i_1.l1j(ID_Alias_getInstance_0())) {
      var tmp = $this.y1i_1.j();
      var token = tmp instanceof AliasToken ? tmp : THROW_CCE();
      $this.c1j_1 = $this.z1i_1.ee();
      return new AliasEvent(token.l1k_1, token.j1j_1, token.k1j_1);
    } else {
      var anchor;
      var tagTupleValue;
      if ($this.y1i_1.l1j(ID_Anchor_getInstance())) {
        var tmp_0 = $this.y1i_1.j();
        var token_0 = tmp_0 instanceof AnchorToken ? tmp_0 : THROW_CCE();
        startMark = token_0.j1j_1;
        endMark = token_0.k1j_1;
        anchor = token_0.z1j_1;
        if ($this.y1i_1.l1j(ID_Tag_getInstance())) {
          var tmp_1 = $this.y1i_1.j();
          var tagToken = tmp_1 instanceof TagToken ? tmp_1 : THROW_CCE();
          tagMark = tagToken.j1j_1;
          endMark = tagToken.k1j_1;
          tagTupleValue = tagToken.w1j_1;
        } else {
          tagTupleValue = null;
        }
      } else if ($this.y1i_1.l1j(ID_Tag_getInstance())) {
        var tmp_2 = $this.y1i_1.j();
        var tagToken_0 = tmp_2 instanceof TagToken ? tmp_2 : THROW_CCE();
        startMark = tagToken_0.j1j_1;
        tagMark = startMark;
        endMark = tagToken_0.k1j_1;
        tagTupleValue = tagToken_0.w1j_1;
        if ($this.y1i_1.l1j(ID_Anchor_getInstance())) {
          var tmp_3 = $this.y1i_1.j();
          var token_1 = tmp_3 instanceof AnchorToken ? tmp_3 : THROW_CCE();
          endMark = token_1.k1j_1;
          anchor = token_1.z1j_1;
        } else {
          anchor = null;
        }
      } else {
        tagTupleValue = null;
        anchor = null;
      }
      var tag;
      if (!(tagTupleValue == null)) {
        var handle = tagTupleValue.a1k_1;
        var tmp_4;
        if (!(handle == null)) {
          if (!$this.d1j_1.w1(handle)) {
            throw new ParserException('found undefined tag handle ' + handle, startMark, 'while parsing a node', tagMark);
          }
          tmp_4 = plus($this.d1j_1.y1(handle), tagTupleValue.b1k_1);
        } else {
          tmp_4 = tagTupleValue.b1k_1;
        }
        tag = tmp_4;
      } else {
        tag = null;
      }
      if (startMark == null) {
        startMark = $this.y1i_1.c1k().j1j_1;
        endMark = startMark;
      }
      var implicit = tag == null;
      var tmp_5;
      if (indentlessSequence && $this.y1i_1.l1j(ID_BlockEntry_getInstance())) {
        endMark = $this.y1i_1.c1k().k1j_1;
        $this.c1j_1 = new ParseIndentlessSequenceEntryKey($this);
        tmp_5 = new SequenceStartEvent(anchor, tag, implicit, FlowStyle_BLOCK_getInstance(), startMark, endMark);
      } else if ($this.y1i_1.l1j(ID_Scalar_getInstance_0())) {
        var tmp_6 = $this.y1i_1.j();
        var token_2 = tmp_6 instanceof ScalarToken ? tmp_6 : THROW_CCE();
        endMark = token_2.k1j_1;
        var implicitValues = token_2.h1k_1 && tag == null ? new ImplicitTuple(true, false) : tag == null ? new ImplicitTuple(false, true) : new ImplicitTuple(false, false);
        $this.c1j_1 = $this.z1i_1.ee();
        tmp_5 = new ScalarEvent(anchor, tag, implicitValues, token_2.g1k_1, token_2.i1k_1, startMark, endMark);
      } else if ($this.y1i_1.l1j(ID_FlowSequenceStart_getInstance())) {
        endMark = $this.y1i_1.c1k().k1j_1;
        $this.c1j_1 = new ParseFlowSequenceFirstEntry($this);
        tmp_5 = new SequenceStartEvent(anchor, tag, implicit, FlowStyle_FLOW_getInstance(), startMark, endMark);
      } else if ($this.y1i_1.l1j(ID_FlowMappingStart_getInstance())) {
        endMark = $this.y1i_1.c1k().k1j_1;
        $this.c1j_1 = new ParseFlowMappingFirstKey($this);
        tmp_5 = new MappingStartEvent(anchor, tag, implicit, FlowStyle_FLOW_getInstance(), startMark, endMark);
      } else if (block && $this.y1i_1.l1j(ID_BlockSequenceStart_getInstance())) {
        endMark = $this.y1i_1.c1k().j1j_1;
        $this.c1j_1 = new ParseBlockSequenceFirstEntry($this);
        tmp_5 = new SequenceStartEvent(anchor, tag, implicit, FlowStyle_BLOCK_getInstance(), startMark, endMark);
      } else if (block && $this.y1i_1.l1j(ID_BlockMappingStart_getInstance())) {
        endMark = $this.y1i_1.c1k().j1j_1;
        $this.c1j_1 = new ParseBlockMappingFirstKey($this);
        tmp_5 = new MappingStartEvent(anchor, tag, implicit, FlowStyle_BLOCK_getInstance(), startMark, endMark);
      } else if (!(anchor == null) || !(tag == null)) {
        $this.c1j_1 = $this.z1i_1.ee();
        var nonPlainImplicit = new ImplicitTuple(implicit, false);
        tmp_5 = new ScalarEvent(anchor, tag, nonPlainImplicit, '', ScalarStyle_PLAIN_getInstance(), startMark, endMark);
      } else {
        var token_3 = $this.y1i_1.c1k();
        throw new ParserException("expected the node content, but found '" + token_3.d1k().toString() + "'", startMark, 'while parsing a ' + (block ? 'block' : 'flow') + ' node', token_3.j1j_1);
      }
      return tmp_5;
    }
  }
  function processEmptyScalar($this, mark) {
    return new ScalarEvent(null, null, new ImplicitTuple(true, false), '', ScalarStyle_PLAIN_getInstance(), mark, mark);
  }
  function markPop($this) {
    return $this.a1j_1.ee();
  }
  function markPush($this, mark) {
    return $this.a1j_1.be(mark);
  }
  function ParseStreamStart($outer) {
    this.m1k_1 = $outer;
  }
  protoOf(ParseStreamStart).e1j = function () {
    var tmp = this.m1k_1.y1i_1.j();
    var token = tmp instanceof StreamStartToken ? tmp : THROW_CCE();
    var event = StreamStartEvent_init_$Create$(token.j1j_1, token.k1j_1);
    this.m1k_1.c1j_1 = new ParseImplicitDocumentStart(this.m1k_1);
    return event;
  };
  function ParseImplicitDocumentStart($outer) {
    this.n1k_1 = $outer;
  }
  protoOf(ParseImplicitDocumentStart).e1j = function () {
    if (this.n1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.n1k_1.c1j_1 = new ParseImplicitDocumentStart(this.n1k_1);
      var tmp = this.n1k_1.y1i_1.j();
      return produceCommentEvent(this.n1k_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    }
    var tmp_0;
    if (!this.n1k_1.y1i_1.p1k([ID_Directive_getInstance(), ID_DocumentStart_getInstance_0(), ID_StreamEnd_getInstance_0()])) {
      var token = this.n1k_1.y1i_1.c1k();
      var startMark = token.j1j_1;
      this.n1k_1.z1i_1.be(new ParseDocumentEnd(this.n1k_1));
      this.n1k_1.c1j_1 = new ParseBlockNode(this.n1k_1);
      tmp_0 = new DocumentStartEvent(false, null, emptyMap(), startMark, startMark);
    } else {
      tmp_0 = (new ParseDocumentStart(this.n1k_1)).e1j();
    }
    return tmp_0;
  };
  function ParseDocumentStart($outer) {
    this.o1k_1 = $outer;
  }
  protoOf(ParseDocumentStart).e1j = function () {
    if (this.o1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.o1k_1.c1j_1 = new ParseDocumentStart(this.o1k_1);
      var tmp = this.o1k_1.y1i_1.j();
      return produceCommentEvent(this.o1k_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    }
    while (this.o1k_1.y1i_1.l1j(ID_DocumentEnd_getInstance_0())) {
      this.o1k_1.y1i_1.j();
    }
    if (this.o1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.o1k_1.c1j_1 = new ParseDocumentStart(this.o1k_1);
      var tmp_0 = this.o1k_1.y1i_1.j();
      return produceCommentEvent(this.o1k_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
    }
    if (!this.o1k_1.y1i_1.l1j(ID_StreamEnd_getInstance_0())) {
      this.o1k_1.y1i_1.q1k();
      var tuple = processDirectives(this.o1k_1);
      while (this.o1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
        this.o1k_1.y1i_1.j();
      }
      var tmp_1;
      if (!this.o1k_1.y1i_1.l1j(ID_StreamEnd_getInstance_0())) {
        if (!this.o1k_1.y1i_1.l1j(ID_DocumentStart_getInstance_0())) {
          throw new ParserException("expected '<document start>', but found '" + this.o1k_1.y1i_1.c1k().d1k().toString() + "'", this.o1k_1.y1i_1.c1k().j1j_1);
        }
        var token = this.o1k_1.y1i_1.j();
        var startMark = token.j1j_1;
        var endMark = token.k1j_1;
        this.o1k_1.z1i_1.be(new ParseDocumentEnd(this.o1k_1));
        this.o1k_1.c1j_1 = new ParseDocumentContent(this.o1k_1);
        tmp_1 = new DocumentStartEvent(true, tuple.r1k_1, tuple.s1k_1, startMark, endMark);
      } else {
        throw new ParserException("expected '<document start>', but found '" + this.o1k_1.y1i_1.c1k().d1k().toString() + "'", this.o1k_1.y1i_1.c1k().j1j_1);
      }
      return tmp_1;
    }
    var tmp_2 = this.o1k_1.y1i_1.j();
    var token_0 = tmp_2 instanceof StreamEndToken ? tmp_2 : THROW_CCE();
    if (!this.o1k_1.z1i_1.q()) {
      throw YamlEngineException_init_$Create$('Unexpected end of stream. States left: ' + this.o1k_1.z1i_1.toString());
    }
    if (!this.o1k_1.a1j_1.q()) {
      throw YamlEngineException_init_$Create$('Unexpected end of stream. Marks left: ' + this.o1k_1.a1j_1.toString());
    }
    this.o1k_1.c1j_1 = null;
    return StreamEndEvent_init_$Create$(token_0.j1j_1, token_0.k1j_1);
  };
  function ParseDocumentEnd($outer) {
    this.t1k_1 = $outer;
  }
  protoOf(ParseDocumentEnd).e1j = function () {
    var token = this.t1k_1.y1i_1.c1k();
    var startMark = token.j1j_1;
    var endMark;
    var explicit;
    if (this.t1k_1.y1i_1.l1j(ID_DocumentEnd_getInstance_0())) {
      token = this.t1k_1.y1i_1.j();
      endMark = token.k1j_1;
      explicit = true;
    } else if (this.t1k_1.y1i_1.l1j(ID_Directive_getInstance())) {
      throw new ParserException("expected '<document end>' before directives, but found '" + this.t1k_1.y1i_1.c1k().d1k().toString() + "'", this.t1k_1.y1i_1.c1k().j1j_1);
    } else {
      endMark = token.j1j_1;
      explicit = false;
    }
    this.t1k_1.d1j_1.r1();
    this.t1k_1.c1j_1 = new ParseDocumentStart(this.t1k_1);
    return new DocumentEndEvent(explicit, startMark, endMark);
  };
  function ParseDocumentContent($outer) {
    this.u1k_1 = $outer;
  }
  protoOf(ParseDocumentContent).e1j = function () {
    var tmp;
    if (this.u1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.u1k_1.c1j_1 = new ParseDocumentContent(this.u1k_1);
      var tmp_0 = this.u1k_1.y1i_1.j();
      return produceCommentEvent(this.u1k_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
    } else if (this.u1k_1.y1i_1.p1k([ID_Directive_getInstance(), ID_DocumentStart_getInstance_0(), ID_DocumentEnd_getInstance_0(), ID_StreamEnd_getInstance_0()])) {
      this.u1k_1.c1j_1 = this.u1k_1.z1i_1.ee();
      var event = processEmptyScalar(this.u1k_1, this.u1k_1.y1i_1.c1k().j1j_1);
      tmp = event;
    } else {
      tmp = (new ParseBlockNode(this.u1k_1)).e1j();
    }
    return tmp;
  };
  function ParseBlockNode($outer) {
    this.v1k_1 = $outer;
  }
  protoOf(ParseBlockNode).e1j = function () {
    return parseNode(this.v1k_1, true, false);
  };
  function ParseBlockSequenceFirstEntry($outer) {
    this.w1k_1 = $outer;
  }
  protoOf(ParseBlockSequenceFirstEntry).e1j = function () {
    var token = this.w1k_1.y1i_1.j();
    markPush(this.w1k_1, token.j1j_1);
    return (new ParseBlockSequenceEntryKey(this.w1k_1)).e1j();
  };
  function ParseBlockSequenceEntryKey($outer) {
    this.x1k_1 = $outer;
  }
  protoOf(ParseBlockSequenceEntryKey).e1j = function () {
    var tmp;
    if (this.x1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.x1k_1.c1j_1 = new ParseBlockSequenceEntryKey(this.x1k_1);
      var tmp_0 = this.x1k_1.y1i_1.j();
      tmp = produceCommentEvent(this.x1k_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
    } else if (this.x1k_1.y1i_1.l1j(ID_BlockEntry_getInstance())) {
      var tmp_1 = this.x1k_1.y1i_1.j();
      var token = tmp_1 instanceof BlockEntryToken ? tmp_1 : THROW_CCE();
      tmp = (new ParseBlockSequenceEntryValue(this.x1k_1, token)).e1j();
    } else if (!this.x1k_1.y1i_1.l1j(ID_BlockEnd_getInstance())) {
      var token_0 = this.x1k_1.y1i_1.c1k();
      throw new ParserException("expected <block end>, but found '" + token_0.d1k().toString() + "'", markPop(this.x1k_1), 'while parsing a block collection', token_0.j1j_1);
    } else {
      var token_1 = this.x1k_1.y1i_1.j();
      this.x1k_1.c1j_1 = this.x1k_1.z1i_1.ee();
      markPop(this.x1k_1);
      tmp = SequenceEndEvent_init_$Create$(token_1.j1j_1, token_1.k1j_1);
    }
    return tmp;
  };
  function ParseBlockSequenceEntryValue($outer, token) {
    this.z1k_1 = $outer;
    this.y1k_1 = token;
  }
  protoOf(ParseBlockSequenceEntryValue).e1j = function () {
    if (this.z1k_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.z1k_1.c1j_1 = new ParseBlockSequenceEntryValue(this.z1k_1, this.y1k_1);
      var tmp = this.z1k_1.y1i_1.j();
      return produceCommentEvent(this.z1k_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    }
    var tmp_0;
    if (!this.z1k_1.y1i_1.p1k([ID_BlockEntry_getInstance(), ID_BlockEnd_getInstance()])) {
      this.z1k_1.z1i_1.be(new ParseBlockSequenceEntryKey(this.z1k_1));
      tmp_0 = (new ParseBlockNode(this.z1k_1)).e1j();
    } else {
      this.z1k_1.c1j_1 = new ParseBlockSequenceEntryKey(this.z1k_1);
      tmp_0 = processEmptyScalar(this.z1k_1, this.y1k_1.k1j_1);
    }
    return tmp_0;
  };
  function ParseIndentlessSequenceEntryKey($outer) {
    this.a1l_1 = $outer;
  }
  protoOf(ParseIndentlessSequenceEntryKey).e1j = function () {
    if (this.a1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.a1l_1.c1j_1 = new ParseIndentlessSequenceEntryKey(this.a1l_1);
      var tmp = this.a1l_1.y1i_1.j();
      return produceCommentEvent(this.a1l_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    }
    if (this.a1l_1.y1i_1.l1j(ID_BlockEntry_getInstance())) {
      var tmp_0 = this.a1l_1.y1i_1.j();
      var token = tmp_0 instanceof BlockEntryToken ? tmp_0 : THROW_CCE();
      return (new ParseIndentlessSequenceEntryValue(this.a1l_1, token)).e1j();
    }
    var token_0 = this.a1l_1.y1i_1.c1k();
    this.a1l_1.c1j_1 = this.a1l_1.z1i_1.ee();
    return SequenceEndEvent_init_$Create$(token_0.j1j_1, token_0.k1j_1);
  };
  function ParseIndentlessSequenceEntryValue($outer, token) {
    this.c1l_1 = $outer;
    this.b1l_1 = token;
  }
  protoOf(ParseIndentlessSequenceEntryValue).e1j = function () {
    var tmp;
    if (this.c1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.c1l_1.c1j_1 = new ParseIndentlessSequenceEntryValue(this.c1l_1, this.b1l_1);
      var tmp_0 = this.c1l_1.y1i_1.j();
      tmp = produceCommentEvent(this.c1l_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
    } else if (!this.c1l_1.y1i_1.p1k([ID_BlockEntry_getInstance(), ID_Key_getInstance(), ID_Value_getInstance(), ID_BlockEnd_getInstance()])) {
      this.c1l_1.z1i_1.be(new ParseIndentlessSequenceEntryKey(this.c1l_1));
      tmp = (new ParseBlockNode(this.c1l_1)).e1j();
    } else {
      this.c1l_1.c1j_1 = new ParseIndentlessSequenceEntryKey(this.c1l_1);
      tmp = processEmptyScalar(this.c1l_1, this.b1l_1.k1j_1);
    }
    return tmp;
  };
  function ParseBlockMappingFirstKey($outer) {
    this.d1l_1 = $outer;
  }
  protoOf(ParseBlockMappingFirstKey).e1j = function () {
    var token = this.d1l_1.y1i_1.j();
    markPush(this.d1l_1, token.j1j_1);
    return (new ParseBlockMappingKey(this.d1l_1)).e1j();
  };
  function ParseBlockMappingKey($outer) {
    this.e1l_1 = $outer;
  }
  protoOf(ParseBlockMappingKey).e1j = function () {
    var tmp;
    if (this.e1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.e1l_1.c1j_1 = new ParseBlockMappingKey(this.e1l_1);
      var tmp_0 = this.e1l_1.y1i_1.j();
      tmp = produceCommentEvent(this.e1l_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
    } else if (this.e1l_1.y1i_1.l1j(ID_Key_getInstance())) {
      var token = this.e1l_1.y1i_1.j();
      var tmp_1;
      if (!this.e1l_1.y1i_1.p1k([ID_Key_getInstance(), ID_Value_getInstance(), ID_BlockEnd_getInstance()])) {
        this.e1l_1.z1i_1.be(new ParseBlockMappingValue(this.e1l_1));
        tmp_1 = parseBlockNodeOrIndentlessSequence(this.e1l_1);
      } else {
        this.e1l_1.c1j_1 = new ParseBlockMappingValue(this.e1l_1);
        tmp_1 = processEmptyScalar(this.e1l_1, token.k1j_1);
      }
      tmp = tmp_1;
    } else if (!this.e1l_1.y1i_1.l1j(ID_BlockEnd_getInstance())) {
      var token_0 = this.e1l_1.y1i_1.c1k();
      throw new ParserException("expected <block end>, but found '" + token_0.d1k().toString() + "'", markPop(this.e1l_1), 'while parsing a block mapping', token_0.j1j_1);
    } else {
      var token_1 = this.e1l_1.y1i_1.j();
      this.e1l_1.c1j_1 = this.e1l_1.z1i_1.ee();
      markPop(this.e1l_1);
      tmp = MappingEndEvent_init_$Create$(token_1.j1j_1, token_1.k1j_1);
    }
    return tmp;
  };
  function ParseBlockMappingValue($outer) {
    this.f1l_1 = $outer;
  }
  protoOf(ParseBlockMappingValue).e1j = function () {
    if (this.f1l_1.y1i_1.l1j(ID_Value_getInstance())) {
      var token = this.f1l_1.y1i_1.j();
      var tmp;
      if (this.f1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
        var p = new ParseBlockMappingValueComment(this.f1l_1);
        this.f1l_1.c1j_1 = p;
        tmp = p.e1j();
      } else if (!this.f1l_1.y1i_1.p1k([ID_Key_getInstance(), ID_Value_getInstance(), ID_BlockEnd_getInstance()])) {
        this.f1l_1.z1i_1.be(new ParseBlockMappingKey(this.f1l_1));
        tmp = parseBlockNodeOrIndentlessSequence(this.f1l_1);
      } else {
        this.f1l_1.c1j_1 = new ParseBlockMappingKey(this.f1l_1);
        tmp = processEmptyScalar(this.f1l_1, token.k1j_1);
      }
      return tmp;
    } else if (this.f1l_1.y1i_1.l1j(ID_Scalar_getInstance_0())) {
      this.f1l_1.z1i_1.be(new ParseBlockMappingKey(this.f1l_1));
      return parseBlockNodeOrIndentlessSequence(this.f1l_1);
    }
    this.f1l_1.c1j_1 = new ParseBlockMappingKey(this.f1l_1);
    var token_0 = this.f1l_1.y1i_1.c1k();
    return processEmptyScalar(this.f1l_1, token_0.j1j_1);
  };
  function ParseBlockMappingValueComment($outer) {
    this.h1l_1 = $outer;
    this.g1l_1 = ArrayDeque_init_$Create$();
  }
  protoOf(ParseBlockMappingValueComment).e1j = function () {
    var tmp;
    if (this.h1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      var tmp_0 = this.h1l_1.y1i_1.j();
      this.g1l_1.e(tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
      tmp = this.e1j();
    } else if (!this.h1l_1.y1i_1.p1k([ID_Key_getInstance(), ID_Value_getInstance(), ID_BlockEnd_getInstance()])) {
      var tmp_1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.g1l_1.q()) {
        tmp_1 = produceCommentEvent(this.h1l_1, this.g1l_1.ce());
      } else {
        this.h1l_1.z1i_1.be(new ParseBlockMappingKey(this.h1l_1));
        tmp_1 = parseBlockNodeOrIndentlessSequence(this.h1l_1);
      }
      tmp = tmp_1;
    } else {
      this.h1l_1.c1j_1 = new ParseBlockMappingValueCommentList(this.h1l_1, this.g1l_1);
      tmp = processEmptyScalar(this.h1l_1, this.h1l_1.y1i_1.c1k().j1j_1);
    }
    return tmp;
  };
  function ParseBlockMappingValueCommentList($outer, tokens) {
    this.j1l_1 = $outer;
    this.i1l_1 = tokens;
  }
  protoOf(ParseBlockMappingValueCommentList).e1j = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.i1l_1.q()) {
      tmp = produceCommentEvent(this.j1l_1, this.i1l_1.ce());
    } else {
      tmp = (new ParseBlockMappingKey(this.j1l_1)).e1j();
    }
    return tmp;
  };
  function ParseFlowSequenceFirstEntry($outer) {
    this.k1l_1 = $outer;
  }
  protoOf(ParseFlowSequenceFirstEntry).e1j = function () {
    var token = this.k1l_1.y1i_1.j();
    markPush(this.k1l_1, token.j1j_1);
    return (new ParseFlowSequenceEntry(this.k1l_1, true)).e1j();
  };
  function ParseFlowSequenceEntry($outer, first) {
    this.m1l_1 = $outer;
    this.l1l_1 = first;
  }
  protoOf(ParseFlowSequenceEntry).e1j = function () {
    if (this.m1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.m1l_1.c1j_1 = new ParseFlowSequenceEntry(this.m1l_1, this.l1l_1);
      var tmp = this.m1l_1.y1i_1.j();
      return produceCommentEvent(this.m1l_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    }
    if (!this.m1l_1.y1i_1.l1j(ID_FlowSequenceEnd_getInstance())) {
      if (!this.l1l_1) {
        if (this.m1l_1.y1i_1.l1j(ID_FlowEntry_getInstance())) {
          this.m1l_1.y1i_1.j();
          if (this.m1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
            this.m1l_1.c1j_1 = new ParseFlowSequenceEntry(this.m1l_1, true);
            var tmp_0 = this.m1l_1.y1i_1.j();
            return produceCommentEvent(this.m1l_1, tmp_0 instanceof CommentToken ? tmp_0 : THROW_CCE());
          }
        } else {
          var token = this.m1l_1.y1i_1.c1k();
          throw new ParserException("expected ',' or ']', but got " + token.d1k().toString(), markPop(this.m1l_1), 'while parsing a flow sequence', token.j1j_1);
        }
      }
      if (this.m1l_1.y1i_1.l1j(ID_Key_getInstance())) {
        var token_0 = this.m1l_1.y1i_1.c1k();
        this.m1l_1.c1j_1 = new ParseFlowSequenceEntryMappingKey(this.m1l_1);
        return new MappingStartEvent(null, null, true, FlowStyle_FLOW_getInstance(), token_0.j1j_1, token_0.k1j_1);
      } else if (!this.m1l_1.y1i_1.l1j(ID_FlowSequenceEnd_getInstance())) {
        this.m1l_1.z1i_1.be(new ParseFlowSequenceEntry(this.m1l_1, false));
        return parseFlowNode(this.m1l_1);
      }
    }
    var token_1 = this.m1l_1.y1i_1.j();
    var tmp_1 = this.m1l_1;
    var tmp_2;
    if (!this.m1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      tmp_2 = this.m1l_1.z1i_1.ee();
    } else {
      tmp_2 = new ParseFlowEndComment(this.m1l_1);
    }
    tmp_1.c1j_1 = tmp_2;
    markPop(this.m1l_1);
    return SequenceEndEvent_init_$Create$(token_1.j1j_1, token_1.k1j_1);
  };
  function ParseFlowEndComment($outer) {
    this.n1l_1 = $outer;
  }
  protoOf(ParseFlowEndComment).e1j = function () {
    var tmp = this.n1l_1.y1i_1.j();
    var event = produceCommentEvent(this.n1l_1, tmp instanceof CommentToken ? tmp : THROW_CCE());
    if (!this.n1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      this.n1l_1.c1j_1 = this.n1l_1.z1i_1.ee();
    }
    return event;
  };
  function ParseFlowSequenceEntryMappingKey($outer) {
    this.o1l_1 = $outer;
  }
  protoOf(ParseFlowSequenceEntryMappingKey).e1j = function () {
    var token = this.o1l_1.y1i_1.j();
    var tmp;
    if (!this.o1l_1.y1i_1.p1k([ID_Value_getInstance(), ID_FlowEntry_getInstance(), ID_FlowSequenceEnd_getInstance()])) {
      this.o1l_1.z1i_1.be(new ParseFlowSequenceEntryMappingValue(this.o1l_1));
      tmp = parseFlowNode(this.o1l_1);
    } else {
      this.o1l_1.c1j_1 = new ParseFlowSequenceEntryMappingValue(this.o1l_1);
      tmp = processEmptyScalar(this.o1l_1, token.k1j_1);
    }
    return tmp;
  };
  function ParseFlowSequenceEntryMappingValue($outer) {
    this.p1l_1 = $outer;
  }
  protoOf(ParseFlowSequenceEntryMappingValue).e1j = function () {
    var tmp;
    if (this.p1l_1.y1i_1.l1j(ID_Value_getInstance())) {
      var token = this.p1l_1.y1i_1.j();
      var tmp_0;
      if (!this.p1l_1.y1i_1.p1k([ID_FlowEntry_getInstance(), ID_FlowSequenceEnd_getInstance()])) {
        this.p1l_1.z1i_1.be(new ParseFlowSequenceEntryMappingEnd(this.p1l_1));
        tmp_0 = parseFlowNode(this.p1l_1);
      } else {
        this.p1l_1.c1j_1 = new ParseFlowSequenceEntryMappingEnd(this.p1l_1);
        tmp_0 = processEmptyScalar(this.p1l_1, token.k1j_1);
      }
      tmp = tmp_0;
    } else {
      this.p1l_1.c1j_1 = new ParseFlowSequenceEntryMappingEnd(this.p1l_1);
      var token_0 = this.p1l_1.y1i_1.c1k();
      tmp = processEmptyScalar(this.p1l_1, token_0.j1j_1);
    }
    return tmp;
  };
  function ParseFlowSequenceEntryMappingEnd($outer) {
    this.q1l_1 = $outer;
  }
  protoOf(ParseFlowSequenceEntryMappingEnd).e1j = function () {
    this.q1l_1.c1j_1 = new ParseFlowSequenceEntry(this.q1l_1, false);
    var token = this.q1l_1.y1i_1.c1k();
    return MappingEndEvent_init_$Create$(token.j1j_1, token.k1j_1);
  };
  function ParseFlowMappingFirstKey($outer) {
    this.r1l_1 = $outer;
  }
  protoOf(ParseFlowMappingFirstKey).e1j = function () {
    var token = this.r1l_1.y1i_1.j();
    markPush(this.r1l_1, token.j1j_1);
    return (new ParseFlowMappingKey(this.r1l_1, true)).e1j();
  };
  function ParseFlowMappingKey($outer, first) {
    this.t1l_1 = $outer;
    this.s1l_1 = first;
  }
  protoOf(ParseFlowMappingKey).e1j = function () {
    if (!this.t1l_1.y1i_1.l1j(ID_FlowMappingEnd_getInstance())) {
      if (!this.s1l_1) {
        if (this.t1l_1.y1i_1.l1j(ID_FlowEntry_getInstance())) {
          this.t1l_1.y1i_1.j();
        } else {
          var token = this.t1l_1.y1i_1.c1k();
          throw new ParserException("expected ',' or '}', but got " + token.d1k().toString(), markPop(this.t1l_1), 'while parsing a flow mapping', token.j1j_1);
        }
      }
      if (this.t1l_1.y1i_1.l1j(ID_Key_getInstance())) {
        var token_0 = this.t1l_1.y1i_1.j();
        var tmp;
        if (!this.t1l_1.y1i_1.p1k([ID_Value_getInstance(), ID_FlowEntry_getInstance(), ID_FlowMappingEnd_getInstance()])) {
          this.t1l_1.z1i_1.be(new ParseFlowMappingValue(this.t1l_1));
          tmp = parseFlowNode(this.t1l_1);
        } else {
          this.t1l_1.c1j_1 = new ParseFlowMappingValue(this.t1l_1);
          tmp = processEmptyScalar(this.t1l_1, token_0.k1j_1);
        }
        return tmp;
      } else if (!this.t1l_1.y1i_1.l1j(ID_FlowMappingEnd_getInstance())) {
        this.t1l_1.z1i_1.be(new ParseFlowMappingEmptyValue(this.t1l_1));
        return parseFlowNode(this.t1l_1);
      }
    }
    var token_1 = this.t1l_1.y1i_1.j();
    markPop(this.t1l_1);
    var tmp_0 = this.t1l_1;
    var tmp_1;
    if (!this.t1l_1.y1i_1.l1j(ID_Comment_getInstance_0())) {
      tmp_1 = this.t1l_1.z1i_1.ee();
    } else {
      tmp_1 = new ParseFlowEndComment(this.t1l_1);
    }
    tmp_0.c1j_1 = tmp_1;
    return MappingEndEvent_init_$Create$(token_1.j1j_1, token_1.k1j_1);
  };
  function ParseFlowMappingValue($outer) {
    this.u1l_1 = $outer;
  }
  protoOf(ParseFlowMappingValue).e1j = function () {
    var tmp;
    if (this.u1l_1.y1i_1.l1j(ID_Value_getInstance())) {
      var token = this.u1l_1.y1i_1.j();
      var tmp_0;
      if (!this.u1l_1.y1i_1.p1k([ID_FlowEntry_getInstance(), ID_FlowMappingEnd_getInstance()])) {
        this.u1l_1.z1i_1.be(new ParseFlowMappingKey(this.u1l_1, false));
        tmp_0 = parseFlowNode(this.u1l_1);
      } else {
        this.u1l_1.c1j_1 = new ParseFlowMappingKey(this.u1l_1, false);
        tmp_0 = processEmptyScalar(this.u1l_1, token.k1j_1);
      }
      tmp = tmp_0;
    } else {
      this.u1l_1.c1j_1 = new ParseFlowMappingKey(this.u1l_1, false);
      var token_0 = this.u1l_1.y1i_1.c1k();
      tmp = processEmptyScalar(this.u1l_1, token_0.j1j_1);
    }
    return tmp;
  };
  function ParseFlowMappingEmptyValue($outer) {
    this.v1l_1 = $outer;
  }
  protoOf(ParseFlowMappingEmptyValue).e1j = function () {
    this.v1l_1.c1j_1 = new ParseFlowMappingKey(this.v1l_1, false);
    return processEmptyScalar(this.v1l_1, this.v1l_1.y1i_1.c1k().j1j_1);
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.t1j_1 = mapOf([to('!', '!'), to('!!', 'tag:yaml.org,2002:')]);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ParserImpl(settings, scanner) {
    Companion_getInstance_6();
    this.x1i_1 = settings;
    this.y1i_1 = scanner;
    this.z1i_1 = ArrayDeque_init_$Create$_0(100);
    this.a1j_1 = ArrayDeque_init_$Create$_0(100);
    this.b1j_1 = null;
    this.c1j_1 = new ParseStreamStart(this);
    this.d1j_1 = toMutableMap(Companion_getInstance_6().t1j_1);
  }
  protoOf(ParserImpl).w1l = function () {
    produce(this);
    var tmp0_elvis_lhs = this.b1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('No more Events found.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ParserImpl).j = function () {
    var value = this.w1l();
    this.b1j_1 = null;
    return value;
  };
  protoOf(ParserImpl).i = function () {
    produce(this);
    return !(this.b1j_1 == null);
  };
  function VersionTagsTuple(specVersion, tags) {
    this.r1k_1 = specVersion;
    this.s1k_1 = tags;
  }
  protoOf(VersionTagsTuple).toString = function () {
    return 'VersionTagsTuple<' + toString_1(this.r1k_1) + ', ' + toString(this.s1k_1) + '>';
  };
  protoOf(VersionTagsTuple).hashCode = function () {
    var result = this.r1k_1 == null ? 0 : hashCode(this.r1k_1);
    result = imul(result, 31) + hashCode(this.s1k_1) | 0;
    return result;
  };
  protoOf(VersionTagsTuple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VersionTagsTuple))
      return false;
    var tmp0_other_with_cast = other instanceof VersionTagsTuple ? other : THROW_CCE();
    if (!equals(this.r1k_1, tmp0_other_with_cast.r1k_1))
      return false;
    if (!equals(this.s1k_1, tmp0_other_with_cast.s1k_1))
      return false;
    return true;
  };
  function ImplicitResolversBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x1l_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(ImplicitResolversBuilder).y1l = function () {
    return toMap(this.x1l_1);
  };
  protoOf(ImplicitResolversBuilder).z1l = function (tag, regexp, first) {
    var tmp1_safe_receiver = first == null ? null : toCharArray(first);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.length;
      while (inductionVariable < last) {
        var item = tmp1_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.resolver.ImplicitResolversBuilder.addImplicitResolver.<anonymous>' call
        var tmp_0;
        // Inline function 'kotlin.code' call
        if (Char__toInt_impl_vasixd(item) === 0) {
          tmp_0 = null;
        } else {
          tmp_0 = item;
        }
        var tmp_1 = tmp_0;
        var tmp$ret$1 = tmp_1 == null ? null : new Char(tmp_1);
        destination.e(tmp$ret$1);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    var keys = tmp2_elvis_lhs == null ? listOf(null) : tmp2_elvis_lhs;
    var _iterator__ex2g4s = distinct(keys).h();
    while (_iterator__ex2g4s.i()) {
      var tmp_2 = _iterator__ex2g4s.j();
      var key = tmp_2 == null ? null : tmp_2.c1_1;
      var tmp2 = this.x1l_1;
      var tmp_3 = key;
      // Inline function 'kotlin.collections.getOrPut' call
      var key_0 = tmp_3 == null ? null : new Char(tmp_3);
      var value = tmp2.y1(key_0);
      var tmp_4;
      if (value == null) {
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.resolver.ImplicitResolversBuilder.addImplicitResolver.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$_0();
        tmp2.c2(key_0, answer);
        tmp_4 = answer;
      } else {
        tmp_4 = value;
      }
      var curr = tmp_4;
      curr.e(new ResolverTuple(tag, regexp));
    }
  };
  function Companion_7() {
    Companion_instance_7 = this;
    this.a1m_1 = Regex_init_$Create$('^$');
    this.b1m_1 = Regex_init_$Create$('^\\$\\{\\s*(\\w+)(?:(:?[-?])(\\w+)?)?\\s*\\}$');
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function BaseScalarResolver$_init_$lambda_ep9miw(_this__u8e3s4) {
    return Unit_instance;
  }
  function BaseScalarResolver(buildImplicitResolvers) {
    Companion_getInstance_7();
    var tmp;
    if (buildImplicitResolvers === VOID) {
      tmp = BaseScalarResolver$_init_$lambda_ep9miw;
    } else {
      tmp = buildImplicitResolvers;
    }
    buildImplicitResolvers = tmp;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new ImplicitResolversBuilder();
    buildImplicitResolvers(this_0);
    tmp_0.c1m_1 = this_0.y1l();
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.d1m_1 = Regex_init_$Create$('^(?:true|false)$');
    this.e1m_1 = Regex_init_$Create$('^(?:(-?(0|[1-9][0-9]*)(\\.[0-9]*)?([eE][-+]?[0-9]+)?)|(-?\\.inf)|(\\.nan))$');
    this.f1m_1 = Regex_init_$Create$('^-?(0|[1-9][0-9]*)$');
    this.g1m_1 = Regex_init_$Create$('^null$');
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function JsonScalarResolver$_init_$lambda_2rw3ox(_this__u8e3s4) {
    _this__u8e3s4.z1l(Companion_getInstance_5().q1i_1, Companion_getInstance_7().a1m_1, null);
    _this__u8e3s4.z1l(Companion_getInstance_5().p1i_1, Companion_getInstance_8().d1m_1, 'tf');
    _this__u8e3s4.z1l(Companion_getInstance_5().n1i_1, Companion_getInstance_8().f1m_1, '-0123456789');
    _this__u8e3s4.z1l(Companion_getInstance_5().o1i_1, Companion_getInstance_8().e1m_1, '-0123456789.');
    _this__u8e3s4.z1l(Companion_getInstance_5().q1i_1, Companion_getInstance_8().g1m_1, 'n\x00');
    _this__u8e3s4.z1l(Companion_getInstance_5().v1i_1, Companion_getInstance_7().b1m_1, '$');
    return Unit_instance;
  }
  function JsonScalarResolver() {
    Companion_getInstance_8();
    BaseScalarResolver.call(this, JsonScalarResolver$_init_$lambda_2rw3ox);
  }
  function ResolverTuple(tag, regexp) {
    this.h1m_1 = tag;
    this.i1m_1 = regexp;
  }
  protoOf(ResolverTuple).toString = function () {
    return 'Tuple tag=' + this.h1m_1.toString() + ' regexp=' + this.i1m_1.toString();
  };
  protoOf(ResolverTuple).hashCode = function () {
    var result = this.h1m_1.hashCode();
    result = imul(result, 31) + hashCode(this.i1m_1) | 0;
    return result;
  };
  protoOf(ResolverTuple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolverTuple))
      return false;
    var tmp0_other_with_cast = other instanceof ResolverTuple ? other : THROW_CCE();
    if (!this.h1m_1.equals(tmp0_other_with_cast.h1m_1))
      return false;
    if (!equals(this.i1m_1, tmp0_other_with_cast.i1m_1))
      return false;
    return true;
  };
  function Scanner() {
  }
  function addToken($this, token) {
    $this.q1m_1 = token;
    $this.l1m_1.be(token);
  }
  function addToken_0($this, index, token) {
    if (index === $this.l1m_1.xd_1) {
      $this.q1m_1 = token;
    }
    $this.l1m_1.j4(index, token);
  }
  function addAllTokens($this, tokens) {
    $this.q1m_1 = last(tokens);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = $this.l1m_1;
    addAll(this_0, tokens);
  }
  function isBlockContext($this) {
    return $this.p1m_1 === 0;
  }
  function isFlowContext($this) {
    return !isBlockContext($this);
  }
  function needMoreTokens($this) {
    if ($this.o1m_1)
      return false;
    if ($this.l1m_1.q())
      return true;
    stalePossibleSimpleKeys($this);
    return nextPossibleSimpleKey($this) === $this.r1m_1;
  }
  function fetchMoreTokens($this) {
    if ($this.k1m_1.d1n_1 > $this.j1m_1.n1c_1) {
      throw YamlEngineException_init_$Create$('The incoming YAML document exceeds the limit: ' + $this.j1m_1.n1c_1 + ' code points.');
    }
    scanToNextToken($this);
    stalePossibleSimpleKeys($this);
    unwindIndent($this, $this.k1m_1.f1n_1);
    var c = $this.k1m_1.g1n();
    if (c === 0) {
      fetchStreamEnd($this);
      return Unit_instance;
    }
    var tmp0_subject = numberToChar(c);
    if (tmp0_subject === _Char___init__impl__6a9atx(37)) {
      if (checkDirective($this)) {
        fetchDirective($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(45)) {
      if (checkDocumentStart($this)) {
        fetchDocumentStart($this);
        return Unit_instance;
      } else if (checkBlockEntry($this)) {
        fetchBlockEntry($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(46)) {
      if (checkDocumentEnd($this)) {
        fetchDocumentEnd($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(91)) {
      fetchFlowSequenceStart($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(123)) {
      fetchFlowMappingStart($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(93)) {
      fetchFlowSequenceEnd($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(125)) {
      fetchFlowMappingEnd($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(44)) {
      fetchFlowEntry($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(63)) {
      if (checkKey($this)) {
        fetchKey($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(58)) {
      if (checkValue($this)) {
        fetchValue($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
      fetchAlias($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(38)) {
      fetchAnchor($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(33)) {
      fetchTag($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(124)) {
      if (isBlockContext($this)) {
        fetchLiteral($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(62)) {
      if (isBlockContext($this)) {
        fetchFolded($this);
        return Unit_instance;
      }
    } else if (tmp0_subject === _Char___init__impl__6a9atx(39)) {
      fetchSingle($this);
      return Unit_instance;
    } else if (tmp0_subject === _Char___init__impl__6a9atx(34)) {
      fetchDouble($this);
      return Unit_instance;
    }
    if (checkPlain($this)) {
      fetchPlain($this);
      return Unit_instance;
    }
    var chRepresentation = Companion_getInstance_1().l1e(first(Character_getInstance().c1i(c)));
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(9);
    if (c === Char__toInt_impl_vasixd(this_0)) {
      chRepresentation = chRepresentation + '(TAB)';
    }
    var tmp1_problem = "found character '" + chRepresentation + "' that cannot start any token. (Do not use " + chRepresentation + ' for indentation)';
    var tmp2_problemMark = $this.k1m_1.h1n();
    throw new ScannerException(tmp1_problem, tmp2_problemMark, 'while scanning for the next token', null);
  }
  function nextPossibleSimpleKey($this) {
    var tmp0_safe_receiver = firstOrNull($this.n1m_1.a2());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i1n_1;
  }
  function stalePossibleSimpleKeys($this) {
    // Inline function 'kotlin.collections.iterator' call
    var iterator = $this.n1m_1.b2().h();
    while (iterator.i()) {
      var key = iterator.j().v1();
      if (!(key.l1n_1 === $this.k1m_1.e1n_1) || ($this.k1m_1.c1n_1 - key.k1n_1 | 0) > 1024) {
        if (key.j1n_1) {
          var tmp0_contextMark = key.n1n_1;
          var tmp1_problemMark = $this.k1m_1.h1n();
          throw new ScannerException("could not find expected ':'", tmp1_problemMark, 'while scanning a simple key', tmp0_contextMark);
        }
        iterator.s3();
      }
    }
  }
  function savePossibleSimpleKey($this) {
    var required = isBlockContext($this) && $this.s1m_1 === $this.k1m_1.f1n_1;
    if (!$this.t1m_1 && required) {
      throw YamlEngineException_init_$Create$('A simple key is required only if it is the first token in the current line');
    }
    if ($this.t1m_1) {
      removePossibleSimpleKey($this);
      var tokenNumber = $this.r1m_1 + $this.l1m_1.xd_1 | 0;
      var key = new SimpleKey(tokenNumber, required, $this.k1m_1.c1n_1, $this.k1m_1.e1n_1, $this.k1m_1.f1n_1, $this.k1m_1.h1n());
      var tmp0 = $this.n1m_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = $this.p1m_1;
      tmp0.c2(key_0, key);
    }
  }
  function removePossibleSimpleKey($this) {
    var key = $this.n1m_1.d2($this.p1m_1);
    if (!(key == null) && key.j1n_1) {
      var tmp0_contextMark = key.n1n_1;
      var tmp1_problemMark = $this.k1m_1.h1n();
      throw new ScannerException("could not find expected ':'", tmp1_problemMark, 'while scanning a simple key', tmp0_contextMark);
    }
  }
  function unwindIndent($this, col) {
    if (isFlowContext($this)) {
      return Unit_instance;
    }
    while ($this.s1m_1 > col) {
      var mark = $this.k1m_1.h1n();
      $this.s1m_1 = $this.m1m_1.ee();
      addToken($this, new BlockEndToken(mark, mark));
    }
  }
  function addIndent($this, column) {
    if ($this.s1m_1 >= column)
      return false;
    $this.m1m_1.be($this.s1m_1);
    $this.s1m_1 = column;
    return true;
  }
  function fetchStreamStart($this) {
    var mark = $this.k1m_1.h1n();
    var token = new StreamStartToken(mark, mark);
    addToken($this, token);
  }
  function fetchStreamEnd($this) {
    unwindIndent($this, -1);
    removePossibleSimpleKey($this);
    $this.t1m_1 = false;
    $this.n1m_1.r1();
    var mark = $this.k1m_1.h1n();
    var token = new StreamEndToken(mark, mark);
    addToken($this, token);
    $this.o1m_1 = true;
  }
  function fetchDirective($this) {
    unwindIndent($this, -1);
    removePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var tok = scanDirective($this);
    addAllTokens($this, tok);
  }
  function fetchDocumentStart($this) {
    return fetchDocumentIndicator($this, true);
  }
  function fetchDocumentEnd($this) {
    return fetchDocumentIndicator($this, false);
  }
  function fetchDocumentIndicator($this, isDocumentStart) {
    unwindIndent($this, -1);
    removePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.o1n(3);
    var endMark = $this.k1m_1.h1n();
    var tmp;
    if (isDocumentStart) {
      tmp = new DocumentStartToken(startMark, endMark);
    } else {
      tmp = new DocumentEndToken(startMark, endMark);
    }
    var token = tmp;
    addToken($this, token);
  }
  function fetchFlowSequenceStart($this) {
    return fetchFlowCollectionStart($this, false);
  }
  function fetchFlowMappingStart($this) {
    return fetchFlowCollectionStart($this, true);
  }
  function fetchFlowCollectionStart($this, isMappingStart) {
    savePossibleSimpleKey($this);
    $this.p1m_1 = $this.p1m_1 + 1 | 0;
    $this.t1m_1 = true;
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.o1n(1);
    var endMark = $this.k1m_1.h1n();
    var tmp;
    if (isMappingStart) {
      tmp = new FlowMappingStartToken(startMark, endMark);
    } else {
      tmp = new FlowSequenceStartToken(startMark, endMark);
    }
    var token = tmp;
    addToken($this, token);
  }
  function fetchFlowSequenceEnd($this) {
    return fetchFlowCollectionEnd($this, false);
  }
  function fetchFlowMappingEnd($this) {
    return fetchFlowCollectionEnd($this, true);
  }
  function fetchFlowCollectionEnd($this, isMappingEnd) {
    removePossibleSimpleKey($this);
    $this.p1m_1 = $this.p1m_1 - 1 | 0;
    $this.t1m_1 = false;
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    var tmp;
    if (isMappingEnd) {
      tmp = new FlowMappingEndToken(startMark, endMark);
    } else {
      tmp = new FlowSequenceEndToken(startMark, endMark);
    }
    var token = tmp;
    addToken($this, token);
  }
  function fetchFlowEntry($this) {
    $this.t1m_1 = true;
    removePossibleSimpleKey($this);
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    var token = new FlowEntryToken(startMark, endMark);
    addToken($this, token);
  }
  function fetchBlockEntry($this) {
    if (isBlockContext($this)) {
      if (!$this.t1m_1) {
        throw new ScannerException('', null, 'sequence entries are not allowed here', $this.k1m_1.h1n());
      }
      if (addIndent($this, $this.k1m_1.f1n_1)) {
        var mark = $this.k1m_1.h1n();
        addToken($this, new BlockSequenceStartToken(mark, mark));
      }
    }
    $this.t1m_1 = true;
    removePossibleSimpleKey($this);
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    var token = new BlockEntryToken(startMark, endMark);
    addToken($this, token);
  }
  function fetchKey($this) {
    if (isBlockContext($this)) {
      if (!$this.t1m_1) {
        throw new ScannerException('mapping keys are not allowed here', $this.k1m_1.h1n());
      }
      if (addIndent($this, $this.k1m_1.f1n_1)) {
        var mark = $this.k1m_1.h1n();
        addToken($this, new BlockMappingStartToken(mark, mark));
      }
    }
    $this.t1m_1 = isBlockContext($this);
    removePossibleSimpleKey($this);
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    var token = new KeyToken(startMark, endMark);
    addToken($this, token);
  }
  function fetchValue($this) {
    var key = $this.n1m_1.d2($this.p1m_1);
    if (!(key == null)) {
      addToken_0($this, key.i1n_1 - $this.r1m_1 | 0, new KeyToken(key.n1n_1, key.n1n_1));
      if (isBlockContext($this) && addIndent($this, key.m1n_1)) {
        addToken_0($this, key.i1n_1 - $this.r1m_1 | 0, new BlockMappingStartToken(key.n1n_1, key.n1n_1));
      }
      $this.t1m_1 = false;
    } else {
      if (isBlockContext($this)) {
        if (!$this.t1m_1) {
          throw new ScannerException('mapping values are not allowed here', $this.k1m_1.h1n());
        }
      }
      if (isBlockContext($this) && addIndent($this, $this.k1m_1.f1n_1)) {
        var mark = $this.k1m_1.h1n();
        addToken($this, new BlockMappingStartToken(mark, mark));
      }
      $this.t1m_1 = isBlockContext($this);
      removePossibleSimpleKey($this);
    }
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    var token = new ValueToken(startMark, endMark);
    addToken($this, token);
  }
  function fetchAlias($this) {
    savePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var tok = scanAnchor($this, false);
    addToken($this, tok);
  }
  function fetchAnchor($this) {
    savePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var tok = scanAnchor($this, true);
    addToken($this, tok);
  }
  function fetchTag($this) {
    savePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var token = scanTag($this);
    addToken($this, token);
  }
  function fetchLiteral($this) {
    return fetchBlockScalar($this, ScalarStyle_LITERAL_getInstance());
  }
  function fetchFolded($this) {
    return fetchBlockScalar($this, ScalarStyle_FOLDED_getInstance());
  }
  function fetchBlockScalar($this, style) {
    $this.t1m_1 = true;
    removePossibleSimpleKey($this);
    var tok = scanBlockScalar($this, style);
    addAllTokens($this, tok);
  }
  function fetchSingle($this) {
    return fetchFlowScalar($this, ScalarStyle_SINGLE_QUOTED_getInstance());
  }
  function fetchDouble($this) {
    return fetchFlowScalar($this, ScalarStyle_DOUBLE_QUOTED_getInstance());
  }
  function fetchFlowScalar($this, style) {
    savePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var tok = scanFlowScalar($this, ensureNotNull(style));
    addToken($this, tok);
  }
  function fetchPlain($this) {
    savePossibleSimpleKey($this);
    $this.t1m_1 = false;
    var tok = scanPlain($this);
    addToken($this, tok);
  }
  function checkDirective($this) {
    return $this.k1m_1.f1n_1 === 0;
  }
  function checkDocumentStart($this) {
    return checkDirective($this) && '---' === $this.k1m_1.q1n(3) && Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(3));
  }
  function checkDocumentEnd($this) {
    return checkDirective($this) && '...' === $this.k1m_1.q1n(3) && Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(3));
  }
  function checkBlockEntry($this) {
    return Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(1));
  }
  function checkKey($this) {
    return Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(1));
  }
  function checkValue($this) {
    return isFlowContext($this) || Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(1));
  }
  function checkPlain($this) {
    var c = $this.k1m_1.g1n();
    var notForbidden = Companion_getInstance_1().c1e_1.q1e(c, '-?:,[]{}#&*!|>\'"%@`');
    var tmp;
    if (notForbidden) {
      tmp = true;
    } else {
      var tmp_0;
      if (isBlockContext($this)) {
        tmp_0 = (Companion_getInstance_1().c1e_1.o1e($this.k1m_1.r1n(1)) && contains('-?:', numberToChar(c)));
      } else {
        tmp_0 = (Companion_getInstance_1().c1e_1.q1e($this.k1m_1.r1n(1), ',]') && contains('-?', numberToChar(c)));
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function scanToNextToken($this) {
    var found = false;
    var inlineStartColumn = -1;
    while (!found) {
      var startMark = $this.k1m_1.h1n();
      var columnBeforeComment = $this.k1m_1.f1n_1;
      var commentSeen = false;
      var ff = 0;
      $l$loop: while (true) {
        var tmp = $this.k1m_1.r1n(ff);
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(32);
        if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
          break $l$loop;
        }
        ff = ff + 1 | 0;
      }
      if (ff > 0) {
        $this.k1m_1.o1n(ff);
      }
      var tmp_0 = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(35);
      if (tmp_0 === Char__toInt_impl_vasixd(this_1)) {
        commentSeen = true;
        var type;
        var tmp_1;
        if (!(columnBeforeComment === 0)) {
          var tmp_2;
          if (!($this.q1m_1 == null)) {
            var tmp0_safe_receiver = $this.q1m_1;
            tmp_2 = equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1k(), ID_BlockEntry_getInstance());
          } else {
            tmp_2 = false;
          }
          tmp_1 = !tmp_2;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          type = CommentType_IN_LINE_getInstance();
          inlineStartColumn = $this.k1m_1.f1n_1;
        } else {
          if (inlineStartColumn === $this.k1m_1.f1n_1) {
            type = CommentType_IN_LINE_getInstance();
          } else {
            inlineStartColumn = -1;
            type = CommentType_BLOCK_getInstance();
          }
        }
        var token = scanComment($this, type);
        if ($this.j1m_1.m1c_1) {
          addToken($this, token);
        }
      }
      var breaksOpt = scanLineBreak($this);
      if (!(breaksOpt == null)) {
        if ($this.j1m_1.m1c_1 && !commentSeen) {
          if (columnBeforeComment === 0) {
            addToken($this, new CommentToken(CommentType_BLANK_LINE_getInstance(), breaksOpt, startMark, $this.k1m_1.h1n()));
          }
        }
        if (isBlockContext($this)) {
          $this.t1m_1 = true;
        }
      } else {
        found = true;
      }
    }
  }
  function scanComment($this, type) {
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var length = 0;
    while (Companion_getInstance_1().a1e_1.o1e($this.k1m_1.r1n(length))) {
      length = length + 1 | 0;
    }
    var value = $this.k1m_1.s1n(length);
    var endMark = $this.k1m_1.h1n();
    return new CommentToken(type, value, startMark, endMark);
  }
  function scanDirective($this) {
    var startMark = $this.k1m_1.h1n();
    var endMark;
    $this.k1m_1.p1n();
    var name = scanDirectiveName($this, startMark);
    var value;
    switch (name) {
      case 'YAML':
        value = scanYamlDirectiveValue($this, startMark);
        endMark = $this.k1m_1.h1n();
        break;
      case 'TAG':
        value = scanTagDirectiveValue($this, startMark);
        endMark = $this.k1m_1.h1n();
        break;
      default:
        endMark = $this.k1m_1.h1n();
        var ff = 0;
        while (Companion_getInstance_1().a1e_1.o1e($this.k1m_1.r1n(ff))) {
          ff = ff + 1 | 0;
        }

        if (ff > 0) {
          $this.k1m_1.o1n(ff);
        }

        value = null;
        break;
    }
    var commentToken = scanDirectiveIgnoredLine($this, startMark);
    var token = new DirectiveToken(value, startMark, endMark);
    return makeTokenList($this, [token, commentToken]);
  }
  function scanDirectiveName($this, startMark) {
    var length = 0;
    var c = $this.k1m_1.r1n(length);
    while (Companion_getInstance_1().g1e_1.n1e(c)) {
      length = length + 1 | 0;
      c = $this.k1m_1.r1n(length);
    }
    if (length === 0) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, 'expected alphabetic or numeric character, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    var value = $this.k1m_1.s1n(length);
    c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().b1e_1.o1e(c)) {
      var s_0 = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, 'expected alphabetic or numeric character, but found ' + s_0 + '(' + c + ')', $this.k1m_1.h1n());
    }
    return value;
  }
  function scanYamlDirectiveValue($this, startMark) {
    $l$loop: while (true) {
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        break $l$loop;
      }
      $this.k1m_1.p1n();
    }
    var major = scanYamlDirectiveNumber($this, startMark);
    var c = $this.k1m_1.g1n();
    var tmp_0 = c;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(46);
    if (!(tmp_0 === Char__toInt_impl_vasixd(this_1))) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, "expected a digit or '.', but found " + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    $this.k1m_1.p1n();
    var minor = scanYamlDirectiveNumber($this, startMark);
    c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().b1e_1.o1e(c)) {
      var s_0 = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, "expected a digit or ' ', but found " + s_0 + '(' + c + ')', $this.k1m_1.h1n());
    }
    return new YamlDirective(major, minor);
  }
  function scanYamlDirectiveNumber($this, startMark) {
    var c = $this.k1m_1.g1n();
    if (!isDigit(numberToChar(c))) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, 'expected a digit, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    var length = 0;
    while (isDigit(numberToChar($this.k1m_1.r1n(length)))) {
      length = length + 1 | 0;
    }
    var number = $this.k1m_1.s1n(length);
    if (length > 3) {
      throw new ScannerException('while scanning a YAML directive', startMark, 'found a number which cannot represent a valid version: ' + number, $this.k1m_1.h1n());
    }
    return toInt(number);
  }
  function scanTagDirectiveValue($this, startMark) {
    $l$loop: while (true) {
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        break $l$loop;
      }
      $this.k1m_1.p1n();
    }
    var handle = scanTagDirectiveHandle($this, startMark);
    $l$loop_0: while (true) {
      var tmp_0 = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(32);
      if (!(tmp_0 === Char__toInt_impl_vasixd(this_1))) {
        break $l$loop_0;
      }
      $this.k1m_1.p1n();
    }
    var prefix = scanTagDirectivePrefix($this, startMark);
    return new TagDirective(handle, prefix);
  }
  function scanTagDirectiveHandle($this, startMark) {
    var value = scanTagHandle($this, 'directive', startMark);
    var c = $this.k1m_1.g1n();
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(32);
    if (!(c === Char__toInt_impl_vasixd(this_0))) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, "expected ' ', but found " + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    return value;
  }
  function scanTagDirectivePrefix($this, startMark) {
    var value = scanTagUri($this, 'directive', Companion_getInstance_1().e1e_1, startMark);
    var c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().b1e_1.o1e(c)) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, "expected ' ', but found " + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    return value;
  }
  function scanDirectiveIgnoredLine($this, startMark) {
    $l$loop: while (true) {
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        break $l$loop;
      }
      $this.k1m_1.p1n();
    }
    var commentToken = null;
    var tmp_0 = $this.k1m_1.g1n();
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(35);
    if (tmp_0 === Char__toInt_impl_vasixd(this_1)) {
      var comment = scanComment($this, CommentType_IN_LINE_getInstance());
      if ($this.j1m_1.m1c_1) {
        commentToken = comment;
      }
    }
    var c = $this.k1m_1.g1n();
    if (scanLineBreak($this) == null && !(c === 0)) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a directive', startMark, 'expected a comment or a line break, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    return commentToken;
  }
  function scanAnchor($this, isAnchor) {
    var startMark = $this.k1m_1.h1n();
    var indicator = $this.k1m_1.g1n();
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(42);
    if (indicator === Char__toInt_impl_vasixd(this_0)) {
      tmp = 'alias';
    } else {
      tmp = 'anchor';
    }
    var name = tmp;
    $this.k1m_1.p1n();
    var length = 0;
    var c = $this.k1m_1.r1n(length);
    while (Companion_getInstance_1().c1e_1.q1e(c, ',[]{}/.*&')) {
      length = length + 1 | 0;
      c = $this.k1m_1.r1n(length);
    }
    if (length === 0) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning an ' + name, startMark, 'unexpected character found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    var value = $this.k1m_1.s1n(length);
    c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().c1e_1.q1e(c, '?:,]}%@`')) {
      var s_0 = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning an ' + name, startMark, 'unexpected character found ' + s_0 + '(' + c + ')', $this.k1m_1.h1n());
    }
    var endMark = $this.k1m_1.h1n();
    var tmp_0;
    if (isAnchor) {
      tmp_0 = new AnchorToken(new Anchor(value), startMark, endMark);
    } else {
      tmp_0 = new AliasToken(new Anchor(value), startMark, endMark);
    }
    return tmp_0;
  }
  function scanTag($this) {
    var startMark = $this.k1m_1.h1n();
    var c = $this.k1m_1.r1n(1);
    var handle;
    var suffix;
    var tmp = c;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(60);
    if (tmp === Char__toInt_impl_vasixd(this_0)) {
      $this.k1m_1.o1n(2);
      suffix = scanTagUri($this, 'tag', Companion_getInstance_1().e1e_1, startMark);
      c = $this.k1m_1.g1n();
      var tmp_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(62);
      if (!(tmp_0 === Char__toInt_impl_vasixd(this_1))) {
        var s = concatToString(Character_getInstance().c1i(c));
        throw new ScannerException('while scanning a tag', startMark, "expected '>', but found '" + s + "' (" + c + ')', $this.k1m_1.h1n());
      }
      handle = null;
      $this.k1m_1.p1n();
    } else {
      if (Companion_getInstance_1().c1e_1.n1e(c)) {
        suffix = '!';
        handle = null;
        $this.k1m_1.p1n();
      } else {
        var length = 1;
        var useHandle = false;
        $l$loop: while (Companion_getInstance_1().b1e_1.o1e(c)) {
          var tmp_1 = c;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(33);
          if (tmp_1 === Char__toInt_impl_vasixd(this_2)) {
            useHandle = true;
            break $l$loop;
          }
          length = length + 1 | 0;
          c = $this.k1m_1.r1n(length);
        }
        if (useHandle) {
          handle = scanTagHandle($this, 'tag', startMark);
        } else {
          handle = '!';
          $this.k1m_1.p1n();
        }
        suffix = scanTagUri($this, 'tag', Companion_getInstance_1().f1e_1, startMark);
      }
    }
    c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().b1e_1.o1e(c)) {
      var s_0 = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a tag', startMark, "expected ' ', but found '" + s_0 + "' (" + c + ')', $this.k1m_1.h1n());
    }
    var value = new TagTuple(handle, suffix);
    var endMark = $this.k1m_1.h1n();
    return new TagToken(value, startMark, endMark);
  }
  function scanBlockScalar($this, style) {
    var stringBuilder = StringBuilder_init_$Create$();
    var startMark = $this.k1m_1.h1n();
    $this.k1m_1.p1n();
    var chomping = scanBlockScalarIndicators($this, startMark);
    var commentToken = scanBlockScalarIgnoredLine($this, startMark);
    var minIndent = coerceAtLeast($this.s1m_1 + 1 | 0, 1);
    var breaks;
    var maxIndent;
    var blockIndent;
    var endMark;
    var chompingIncrement = chomping.t1n();
    if (chompingIncrement == null) {
      var brme = scanBlockScalarIndentation($this);
      breaks = brme.u1n_1;
      maxIndent = brme.v1n_1;
      endMark = brme.w1n_1;
      blockIndent = coerceAtLeast(minIndent, maxIndent);
    } else {
      blockIndent = (minIndent + chompingIncrement | 0) - 1 | 0;
      var brme_0 = scanBlockScalarBreaks($this, blockIndent);
      breaks = brme_0.u1n_1;
      endMark = brme_0.w1n_1;
    }
    var lineBreak = null;
    if ($this.k1m_1.f1n_1 < blockIndent && !($this.s1m_1 === $this.k1m_1.f1n_1)) {
      throw new ScannerException('while scanning a block scalar', startMark, ' the leading empty lines contain more spaces (' + blockIndent + ') than the first non-empty line.', $this.k1m_1.h1n());
    }
    $l$loop: while ($this.k1m_1.f1n_1 === blockIndent && !($this.k1m_1.g1n() === 0)) {
      stringBuilder.t7(breaks);
      var leadingNonSpace = !contains(' \t', numberToChar($this.k1m_1.g1n()));
      var length = 0;
      while (Companion_getInstance_1().a1e_1.o1e($this.k1m_1.r1n(length))) {
        length = length + 1 | 0;
      }
      stringBuilder.t7($this.k1m_1.s1n(length));
      lineBreak = scanLineBreak($this);
      var brme_1 = scanBlockScalarBreaks($this, blockIndent);
      breaks = brme_1.u1n_1;
      endMark = brme_1.w1n_1;
      if ($this.k1m_1.f1n_1 === blockIndent && !($this.k1m_1.g1n() === 0)) {
        if (style.equals(ScalarStyle_FOLDED_getInstance()) && '\n' === lineBreak && leadingNonSpace && !contains(' \t', numberToChar($this.k1m_1.g1n()))) {
          // Inline function 'kotlin.text.isEmpty' call
          var this_0 = breaks;
          if (charSequenceLength(this_0) === 0) {
            stringBuilder.u7(_Char___init__impl__6a9atx(32));
          }
        } else {
          var tmp0_elvis_lhs = lineBreak;
          stringBuilder.t7(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        }
      } else {
        break $l$loop;
      }
    }
    if (chomping.x1n()) {
      var tmp1_elvis_lhs = lineBreak;
      stringBuilder.t7(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
    }
    if (chomping.y1n()) {
      stringBuilder.t7(breaks);
    }
    var scalarToken = new ScalarToken(stringBuilder.toString(), false, startMark, endMark, style);
    return makeTokenList($this, [commentToken, scalarToken]);
  }
  function scanBlockScalarIndicators($this, startMark) {
    var indicator;
    var increment;
    var c = $this.k1m_1.g1n();
    var tmp;
    var tmp_0 = c;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(45);
    if (tmp_0 === Char__toInt_impl_vasixd(this_0)) {
      tmp = true;
    } else {
      var tmp_1 = c;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(43);
      tmp = tmp_1 === Char__toInt_impl_vasixd(this_1);
    }
    if (tmp) {
      indicator = c;
      $this.k1m_1.p1n();
      c = $this.k1m_1.g1n();
      if (isDigit(numberToChar(c))) {
        var incr = toInt(concatToString(Character_getInstance().c1i(c)));
        if (incr === 0) {
          throw new ScannerException('while scanning a block scalar', startMark, 'expected indentation indicator in the range 1-9, but found 0', $this.k1m_1.h1n());
        }
        increment = incr;
        $this.k1m_1.p1n();
      } else {
        increment = null;
      }
    } else {
      if (isDigit(numberToChar(c))) {
        var incr_0 = toInt(concatToString(Character_getInstance().c1i(c)));
        if (incr_0 === 0) {
          throw new ScannerException('while scanning a block scalar', startMark, 'expected indentation indicator in the range 1-9, but found 0', $this.k1m_1.h1n());
        }
        increment = incr_0;
        $this.k1m_1.p1n();
        c = $this.k1m_1.g1n();
        var tmp_2;
        var tmp_3 = c;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(45);
        if (tmp_3 === Char__toInt_impl_vasixd(this_2)) {
          tmp_2 = true;
        } else {
          var tmp_4 = c;
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(43);
          tmp_2 = tmp_4 === Char__toInt_impl_vasixd(this_3);
        }
        if (tmp_2) {
          indicator = c;
          $this.k1m_1.p1n();
        } else {
          indicator = null;
        }
      } else {
        increment = null;
        indicator = null;
      }
    }
    c = $this.k1m_1.g1n();
    if (Companion_getInstance_1().b1e_1.o1e(c)) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a block scalar', startMark, 'expected chomping or indentation indicators, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    var tmp0_elvis_lhs = Chomping(indicator, increment);
    var tmp_5;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Unexpected block chomping indicator: ' + indicator);
    } else {
      tmp_5 = tmp0_elvis_lhs;
    }
    return tmp_5;
  }
  function scanBlockScalarIgnoredLine($this, startMark) {
    $l$loop: while (true) {
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        break $l$loop;
      }
      $this.k1m_1.p1n();
    }
    var tmp_0;
    var tmp_1 = $this.k1m_1.g1n();
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(35);
    if (tmp_1 === Char__toInt_impl_vasixd(this_1)) {
      tmp_0 = scanComment($this, CommentType_IN_LINE_getInstance());
    } else {
      tmp_0 = null;
    }
    var commentToken = tmp_0;
    var c = $this.k1m_1.g1n();
    if (scanLineBreak($this) == null && !(c === 0)) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a block scalar', startMark, 'expected a comment or a line break, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    return commentToken;
  }
  function scanBlockScalarIndentation($this) {
    var chunks = StringBuilder_init_$Create$();
    var maxIndent = 0;
    var endMark = $this.k1m_1.h1n();
    while (Companion_getInstance_1().z1d_1.p1e($this.k1m_1.g1n(), ' \r')) {
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        var tmp0_elvis_lhs = scanLineBreak($this);
        chunks.t7(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        endMark = $this.k1m_1.h1n();
      } else {
        $this.k1m_1.p1n();
        if ($this.k1m_1.f1n_1 > maxIndent) {
          maxIndent = $this.k1m_1.f1n_1;
        }
      }
    }
    return new BreakIntentHolder(chunks.toString(), maxIndent, endMark);
  }
  function scanBlockScalarBreaks($this, indent) {
    var chunks = StringBuilder_init_$Create$();
    var endMark = $this.k1m_1.h1n();
    var col = $this.k1m_1.f1n_1;
    $l$loop: while (true) {
      var tmp;
      if (col < indent) {
        var tmp_0 = $this.k1m_1.g1n();
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(32);
        tmp = tmp_0 === Char__toInt_impl_vasixd(this_0);
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.k1m_1.p1n();
      col = col + 1 | 0;
    }
    $l$loop_0: while (true) {
      var tmp0_elvis_lhs = scanLineBreak($this);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var lineBreak = tmp_1;
      chunks.t7(lineBreak);
      endMark = $this.k1m_1.h1n();
      col = $this.k1m_1.f1n_1;
      $l$loop_1: while (true) {
        var tmp_2;
        if (col < indent) {
          var tmp_3 = $this.k1m_1.g1n();
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(32);
          tmp_2 = tmp_3 === Char__toInt_impl_vasixd(this_1);
        } else {
          tmp_2 = false;
        }
        if (!tmp_2) {
          break $l$loop_1;
        }
        $this.k1m_1.p1n();
        col = col + 1 | 0;
      }
    }
    return new BreakIntentHolder(chunks.toString(), -1, endMark);
  }
  function scanFlowScalar($this, style) {
    var doubleValue = style.equals(ScalarStyle_DOUBLE_QUOTED_getInstance());
    var startMark = $this.k1m_1.h1n();
    var quote = $this.k1m_1.g1n();
    $this.k1m_1.p1n();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.ScannerImpl.scanFlowScalar.<anonymous>' call
    scanFlowScalarNonSpaces($this, doubleValue, startMark, this_0);
    while (!($this.k1m_1.g1n() === quote)) {
      scanFlowScalarSpaces($this, startMark, this_0);
      scanFlowScalarNonSpaces($this, doubleValue, startMark, this_0);
    }
    var chunks = this_0.toString();
    $this.k1m_1.p1n();
    var endMark = $this.k1m_1.h1n();
    return new ScalarToken(chunks, false, startMark, endMark, style);
  }
  function scanFlowScalarNonSpaces($this, doubleQuoted, startMark, chunks) {
    while (true) {
      var length = 0;
      while (Companion_getInstance_1().c1e_1.q1e($this.k1m_1.r1n(length), '\'"\\')) {
        length = length + 1 | 0;
      }
      if (!(length === 0)) {
        chunks.t7($this.k1m_1.s1n(length));
      }
      var c = $this.k1m_1.g1n();
      var tmp;
      var tmp_0;
      if (!doubleQuoted) {
        var tmp_1 = c;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(39);
        tmp_0 = tmp_1 === Char__toInt_impl_vasixd(this_0);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_2 = $this.k1m_1.r1n(1);
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(39);
        tmp = tmp_2 === Char__toInt_impl_vasixd(this_1);
      } else {
        tmp = false;
      }
      if (tmp) {
        chunks.u7(_Char___init__impl__6a9atx(39));
        $this.k1m_1.o1n(2);
      } else {
        var tmp_3;
        var tmp_4;
        if (doubleQuoted) {
          var tmp_5 = c;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(39);
          tmp_4 = tmp_5 === Char__toInt_impl_vasixd(this_2);
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          tmp_3 = (!doubleQuoted && contains('"\\', numberToChar(c)));
        }
        if (tmp_3) {
          appendCodePoint(chunks, c);
          $this.k1m_1.p1n();
        } else {
          var tmp_6;
          if (doubleQuoted) {
            var tmp_7 = c;
            // Inline function 'kotlin.code' call
            var this_3 = _Char___init__impl__6a9atx(92);
            tmp_6 = tmp_7 === Char__toInt_impl_vasixd(this_3);
          } else {
            tmp_6 = false;
          }
          if (tmp_6) {
            $this.k1m_1.p1n();
            c = $this.k1m_1.g1n();
            var tmp_8;
            if (!Character_getInstance().i1i(c)) {
              var tmp4 = Companion_getInstance_1().i1e_1;
              // Inline function 'kotlin.collections.contains' call
              // Inline function 'kotlin.collections.containsKey' call
              var key = new Char(numberToChar(c));
              tmp_8 = (isInterface(tmp4, KtMap) ? tmp4 : THROW_CCE()).w1(key);
            } else {
              tmp_8 = false;
            }
            if (tmp_8) {
              chunks.t7(Companion_getInstance_1().i1e_1.y1(new Char(numberToChar(c))));
              $this.k1m_1.p1n();
            } else {
              var tmp_9;
              if (!Character_getInstance().i1i(c)) {
                var tmp6 = Companion_getInstance_1().k1e_1;
                // Inline function 'kotlin.collections.contains' call
                // Inline function 'kotlin.collections.containsKey' call
                var key_0 = new Char(numberToChar(c));
                tmp_9 = (isInterface(tmp6, KtMap) ? tmp6 : THROW_CCE()).w1(key_0);
              } else {
                tmp_9 = false;
              }
              if (tmp_9) {
                length = ensureNotNull(Companion_getInstance_1().k1e_1.y1(new Char(numberToChar(c))));
                $this.k1m_1.p1n();
                var hex = $this.k1m_1.q1n(length);
                if (Companion_getInstance_9().d1o_1.xb(hex)) {
                  throw new ScannerException('while scanning a double-quoted scalar', startMark, 'expected escape sequence of ' + length + ' hexadecimal numbers, but found: ' + hex, $this.k1m_1.h1n());
                }
                try {
                  var decimal = toInt_0(hex, 16);
                  appendCodePoint(chunks, decimal);
                  $this.k1m_1.o1n(length);
                } catch ($p) {
                  if ($p instanceof IllegalArgumentException) {
                    var e = $p;
                    throw new ScannerException('while scanning a double-quoted scalar', startMark, 'found unknown escape character ' + hex, $this.k1m_1.h1n());
                  } else {
                    throw $p;
                  }
                }
              } else {
                if (!(scanLineBreak($this) == null)) {
                  chunks.t7(scanFlowScalarBreaks($this, startMark));
                } else {
                  var s = concatToString(Character_getInstance().c1i(c));
                  throw new ScannerException('while scanning a double-quoted scalar', startMark, 'found unknown escape character ' + s + '(' + c + ')', $this.k1m_1.h1n());
                }
              }
            }
          } else {
            return Unit_instance;
          }
        }
      }
    }
  }
  function scanFlowScalarSpaces($this, startMark, chunks) {
    var length = 0;
    while (contains(' \t', numberToChar($this.k1m_1.r1n(length)))) {
      length = length + 1 | 0;
    }
    var whitespaces = $this.k1m_1.s1n(length);
    if ($this.k1m_1.g1n() === 0) {
      throw new ScannerException('found unexpected end of stream', $this.k1m_1.h1n(), 'while scanning a quoted scalar', startMark);
    }
    var lineBreakOpt = scanLineBreak($this);
    // Inline function 'kotlin.apply' call
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.ScannerImpl.scanFlowScalarSpaces.<anonymous>' call
    if (!(lineBreakOpt == null)) {
      var breaks = scanFlowScalarBreaks($this, startMark);
      if (!('\n' === lineBreakOpt)) {
        chunks.t7(lineBreakOpt);
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(breaks) === 0) {
          chunks.u7(_Char___init__impl__6a9atx(32));
        }
      }
      chunks.t7(breaks);
    } else {
      chunks.t7(whitespaces);
    }
  }
  function scanFlowScalarBreaks($this, startMark) {
    var chunks = StringBuilder_init_$Create$();
    $l$loop: while (true) {
      var prefix = $this.k1m_1.q1n(3);
      if (('---' === prefix || '...' === prefix) && Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(3))) {
        throw new ScannerException('while scanning a quoted scalar', startMark, 'found unexpected document separator', $this.k1m_1.h1n());
      }
      while (contains(' \t', numberToChar($this.k1m_1.g1n()))) {
        $this.k1m_1.p1n();
      }
      var tmp0_elvis_lhs = scanLineBreak($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var lineBreakOpt = tmp;
      chunks.t7(lineBreakOpt);
    }
    return chunks.toString();
  }
  function scanPlain($this) {
    var chunks = StringBuilder_init_$Create$();
    var startMark = $this.k1m_1.h1n();
    var endMark = startMark;
    var plainIndent = $this.s1m_1 + 1 | 0;
    var spaces = '';
    $l$loop_2: while (true) {
      var c;
      var length = 0;
      var tmp = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(35);
      if (tmp === Char__toInt_impl_vasixd(this_0)) {
        break $l$loop_2;
      }
      $l$loop_0: while (true) {
        c = $this.k1m_1.r1n(length);
        var tmp_0;
        var tmp_1;
        if (Companion_getInstance_1().c1e_1.n1e(c)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          var tmp_3 = c;
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(58);
          if (tmp_3 === Char__toInt_impl_vasixd(this_1)) {
            tmp_2 = Companion_getInstance_1().c1e_1.p1e($this.k1m_1.r1n(length + 1 | 0), isFlowContext($this) ? ',[]{}' : '');
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = (isFlowContext($this) && contains(',[]{}', numberToChar(c)));
        }
        if (tmp_0) {
          break $l$loop_0;
        }
        length = length + 1 | 0;
      }
      if (length === 0) {
        break $l$loop_2;
      }
      $this.t1m_1 = false;
      chunks.t7(spaces);
      chunks.t7($this.k1m_1.s1n(length));
      endMark = $this.k1m_1.h1n();
      spaces = scanPlainSpaces($this);
      var tmp_4;
      var tmp_5;
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = spaces;
      if (charSequenceLength(this_2) === 0) {
        tmp_5 = true;
      } else {
        var tmp_6 = $this.k1m_1.g1n();
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(35);
        tmp_5 = tmp_6 === Char__toInt_impl_vasixd(this_3);
      }
      if (tmp_5) {
        tmp_4 = true;
      } else {
        tmp_4 = (isBlockContext($this) && $this.k1m_1.f1n_1 < plainIndent);
      }
      if (tmp_4) {
        break $l$loop_2;
      }
    }
    return new ScalarToken(chunks.toString(), true, startMark, endMark);
  }
  function atEndOfPlain($this) {
    var wsLength = 0;
    var wsColumn = $this.k1m_1.f1n_1;
    $l$loop: while (true) {
      var c = $this.k1m_1.r1n(wsLength);
      if (c === 0 || !Companion_getInstance_1().c1e_1.n1e(c)) {
        break $l$loop;
      } else {
        wsLength = wsLength + 1 | 0;
        var tmp;
        var tmp_0;
        if (!Companion_getInstance_1().z1d_1.n1e(c)) {
          var tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = _Char___init__impl__6a9atx(13);
          if (!(c === Char__toInt_impl_vasixd(this_0))) {
            tmp_1 = true;
          } else {
            var tmp_2 = $this.k1m_1.r1n(wsLength + 1 | 0);
            // Inline function 'kotlin.code' call
            var this_1 = _Char___init__impl__6a9atx(10);
            tmp_1 = !(tmp_2 === Char__toInt_impl_vasixd(this_1));
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = !(c === 65279);
        } else {
          tmp = false;
        }
        if (tmp) {
          wsColumn = wsColumn + 1 | 0;
        } else {
          wsColumn = 0;
        }
      }
    }
    var tmp_3;
    var tmp_4;
    var tmp_5 = $this.k1m_1.r1n(wsLength);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(35);
    if (tmp_5 === Char__toInt_impl_vasixd(this_2)) {
      tmp_4 = true;
    } else {
      tmp_4 = $this.k1m_1.r1n(wsLength + 1 | 0) === 0;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (isBlockContext($this) && wsColumn < $this.s1m_1);
    }
    if (tmp_3) {
      return true;
    }
    if (isBlockContext($this)) {
      var extra = 1;
      $l$loop_0: while (true) {
        var c_0 = $this.k1m_1.r1n(wsLength + extra | 0);
        if (c_0 === 0 || Companion_getInstance_1().c1e_1.n1e(c_0)) {
          break $l$loop_0;
        } else {
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(58);
          if (c_0 === Char__toInt_impl_vasixd(this_3)) {
            var nextC = $this.k1m_1.r1n((wsLength + extra | 0) + 1 | 0);
            if (Companion_getInstance_1().c1e_1.n1e(nextC)) {
              return true;
            }
          }
        }
        extra = extra + 1 | 0;
      }
    }
    return false;
  }
  function scanPlainSpaces($this) {
    var length = 0;
    while (contains(' \t', numberToChar($this.k1m_1.r1n(length)))) {
      length = length + 1 | 0;
    }
    var whitespaces = $this.k1m_1.s1n(length);
    var tmp0_elvis_lhs = scanLineBreak($this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return whitespaces;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineBreak = tmp;
    $this.t1m_1 = true;
    var prefix = $this.k1m_1.q1n(3);
    if ('---' === prefix || ('...' === prefix && Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(3)))) {
      return '';
    } else if ($this.j1m_1.m1c_1 && atEndOfPlain($this)) {
      return '';
    } else {
      var breaks = StringBuilder_init_$Create$();
      $l$loop: while (true) {
        if (contains(' \t', numberToChar($this.k1m_1.g1n()))) {
          $this.k1m_1.p1n();
        } else {
          var lbOpt = scanLineBreak($this);
          if (!(lbOpt == null)) {
            breaks.t7(lbOpt);
            prefix = $this.k1m_1.q1n(3);
            if ('---' === prefix || ('...' === prefix && Companion_getInstance_1().c1e_1.n1e($this.k1m_1.r1n(3)))) {
              return '';
            }
          } else {
            break $l$loop;
          }
        }
      }
      var tmp_0;
      if (!('\n' === lineBreak)) {
        tmp_0 = lineBreak + breaks.toString();
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(breaks) === 0) {
          tmp_0 = ' ';
        } else {
          tmp_0 = breaks.toString();
        }
      }
      return tmp_0;
    }
  }
  function scanTagHandle($this, name, startMark) {
    var c = $this.k1m_1.g1n();
    var tmp = c;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(33);
    if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a ' + name, startMark, "expected '!', but found " + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    var length = 1;
    c = $this.k1m_1.r1n(length);
    var tmp_0 = c;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(32);
    if (!(tmp_0 === Char__toInt_impl_vasixd(this_1))) {
      while (Companion_getInstance_1().g1e_1.n1e(c)) {
        length = length + 1 | 0;
        c = $this.k1m_1.r1n(length);
      }
      var tmp_1 = c;
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(33);
      if (!(tmp_1 === Char__toInt_impl_vasixd(this_2))) {
        $this.k1m_1.o1n(length);
        var s_0 = concatToString(Character_getInstance().c1i(c));
        throw new ScannerException('while scanning a ' + name, startMark, "expected '!', but found " + s_0 + '(' + c + ')', $this.k1m_1.h1n());
      }
      length = length + 1 | 0;
    }
    return $this.k1m_1.s1n(length);
  }
  function scanTagUri($this, name, range, startMark) {
    var chunks = StringBuilder_init_$Create$();
    var length = 0;
    var c = $this.k1m_1.r1n(length);
    while (range.n1e(c)) {
      var tmp = c;
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(37);
      if (tmp === Char__toInt_impl_vasixd(this_0)) {
        chunks.t7($this.k1m_1.s1n(length));
        length = 0;
        chunks.t7(scanUriEscapes($this, name, startMark));
      } else {
        length = length + 1 | 0;
      }
      c = $this.k1m_1.r1n(length);
    }
    if (!(length === 0)) {
      chunks.t7($this.k1m_1.s1n(length));
    }
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(chunks) === 0) {
      var s = concatToString(Character_getInstance().c1i(c));
      throw new ScannerException('while scanning a ' + name, startMark, 'expected URI, but found ' + s + '(' + c + ')', $this.k1m_1.h1n());
    }
    return chunks.toString();
  }
  function scanUriEscapes($this, name, startMark) {
    var length = 1;
    $l$loop: while (true) {
      var tmp = $this.k1m_1.r1n(imul(length, 3));
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(37);
      if (!(tmp === Char__toInt_impl_vasixd(this_0))) {
        break $l$loop;
      }
      length = length + 1 | 0;
    }
    var beginningMark = $this.k1m_1.h1n();
    var buff = new Buffer();
    $l$loop_0: while (true) {
      var tmp_0 = $this.k1m_1.g1n();
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(37);
      if (!(tmp_0 === Char__toInt_impl_vasixd(this_1))) {
        break $l$loop_0;
      }
      $this.k1m_1.p1n();
      try {
        var code = toInt_0($this.k1m_1.q1n(2), 16);
        buff.b1b(code);
      } catch ($p) {
        if ($p instanceof NumberFormatException) {
          var nfe = $p;
          var c1 = $this.k1m_1.g1n();
          var s1 = concatToString(Character_getInstance().c1i(c1));
          var c2 = $this.k1m_1.r1n(1);
          var s2 = concatToString(Character_getInstance().c1i(c2));
          throw new ScannerException('while scanning a ' + name, startMark, 'expected URI escape sequence of 2 hexadecimal numbers, but found ' + s1 + '(' + c1 + ') and ' + s2 + '(' + c2 + ')', $this.k1m_1.h1n());
        } else {
          throw $p;
        }
      }
      $this.k1m_1.o1n(2);
    }
    buff.e1b();
    try {
      return UriEncoder_instance.w1e(buff);
    } catch ($p) {
      if ($p instanceof CharacterCodingException) {
        var e = $p;
        throw new ScannerException('while scanning a ' + name, startMark, 'expected URI in UTF-8: ' + e.message, beginningMark);
      } else {
        throw $p;
      }
    }
  }
  function scanLineBreak($this) {
    var c = $this.k1m_1.g1n();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(13);
    if (c === Char__toInt_impl_vasixd(this_0)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(10);
      tmp_0 = c === Char__toInt_impl_vasixd(this_1);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(133);
      tmp = c === Char__toInt_impl_vasixd(this_2);
    }
    if (tmp) {
      var tmp_1;
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(13);
      if (c === Char__toInt_impl_vasixd(this_3)) {
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(10);
        tmp_1 = Char__toInt_impl_vasixd(this_4) === $this.k1m_1.r1n(1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $this.k1m_1.o1n(2);
      } else {
        $this.k1m_1.p1n();
      }
      return '\n';
    }
    return null;
  }
  function makeTokenList($this, tokens) {
    var notNullTokens = filterNotNull(tokens);
    var tmp;
    if (!$this.j1m_1.m1c_1) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = notNullTokens.h();
      while (_iterator__ex2g4s.i()) {
        var element = _iterator__ex2g4s.j();
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.ScannerImpl.makeTokenList.<anonymous>' call
        if (!(element instanceof CommentToken)) {
          destination.e(element);
        }
      }
      tmp = destination;
    } else {
      tmp = notNullTokens;
    }
    return tmp;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.z1n_1 = 'while scanning a directive';
    this.a1o_1 = 'expected alphabetic or numeric character, but found ';
    this.b1o_1 = 'while scanning a block scalar';
    this.c1o_1 = 'while scanning a ';
    this.d1o_1 = Regex_init_$Create$('[^0-9A-Fa-f]');
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function ScannerImpl(settings, reader) {
    Companion_getInstance_9();
    this.j1m_1 = settings;
    this.k1m_1 = reader;
    this.l1m_1 = ArrayDeque_init_$Create$_0(100);
    this.m1m_1 = ArrayDeque_init_$Create$_0(10);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n1m_1 = LinkedHashMap_init_$Create$_0();
    this.o1m_1 = false;
    this.p1m_1 = 0;
    this.q1m_1 = null;
    this.r1m_1 = 0;
    this.s1m_1 = -1;
    this.t1m_1 = true;
    fetchStreamStart(this);
  }
  protoOf(ScannerImpl).l1j = function (choice) {
    while (needMoreTokens(this)) {
      fetchMoreTokens(this);
    }
    if (!this.l1m_1.q()) {
      return this.l1m_1.p(0).d1k().equals(choice);
    }
    return false;
  };
  protoOf(ScannerImpl).p1k = function (choices) {
    while (needMoreTokens(this)) {
      fetchMoreTokens(this);
    }
    var tmp0_safe_receiver = this.l1m_1.zd();
    var firstTokenId = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1k();
    var tmp;
    if (!(firstTokenId == null)) {
      var tmp_0;
      // Inline function 'kotlin.collections.isEmpty' call
      if (choices.length === 0) {
        tmp_0 = true;
      } else {
        tmp_0 = contains_0(choices, firstTokenId);
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ScannerImpl).c1k = function () {
    while (needMoreTokens(this)) {
      fetchMoreTokens(this);
    }
    return this.l1m_1.yd();
  };
  protoOf(ScannerImpl).i = function () {
    return this.p1k([]);
  };
  protoOf(ScannerImpl).j = function () {
    this.r1m_1 = this.r1m_1 + 1 | 0;
    var tmp0_elvis_lhs = this.l1m_1.de();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('No more Tokens found.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ScannerImpl).q1k = function () {
    return this.k1m_1.q1k();
  };
  function _Clip___init__impl__llmhrl(increment) {
    return increment;
  }
  function _Clip___get_increment__impl__6zmssn($this) {
    return $this;
  }
  function _Clip___get_addExistingFinalLineBreak__impl__v4gbjp($this) {
    return true;
  }
  function _Clip___get_retainTrailingEmptyLines__impl__5r5ek5($this) {
    return false;
  }
  function Clip__toString_impl_8zbb0x($this) {
    return 'Clip(increment=' + $this + ')';
  }
  function Clip__hashCode_impl_crulry($this) {
    return $this == null ? 0 : $this;
  }
  function Clip__equals_impl_7672fy($this, other) {
    if (!(other instanceof Clip))
      return false;
    if (!($this == (other instanceof Clip ? other.e1o_1 : THROW_CCE())))
      return false;
    return true;
  }
  function _Strip___init__impl__1l0fz5(increment) {
    return increment;
  }
  function _Strip___get_increment__impl__ultjnb($this) {
    return $this;
  }
  function _Strip___get_addExistingFinalLineBreak__impl__hh5hph($this) {
    return false;
  }
  function _Strip___get_retainTrailingEmptyLines__impl__5bav0l($this) {
    return false;
  }
  function Strip__toString_impl_e44ikp($this) {
    return 'Strip(increment=' + $this + ')';
  }
  function Strip__hashCode_impl_7n1e86($this) {
    return $this == null ? 0 : $this;
  }
  function Strip__equals_impl_vbxlyi($this, other) {
    if (!(other instanceof Strip))
      return false;
    if (!($this == (other instanceof Strip ? other.f1o_1 : THROW_CCE())))
      return false;
    return true;
  }
  function _Keep___init__impl__7pj66c(increment) {
    return increment;
  }
  function _Keep___get_increment__impl__g32ff2($this) {
    return $this;
  }
  function _Keep___get_addExistingFinalLineBreak__impl__eevoo0($this) {
    return true;
  }
  function _Keep___get_retainTrailingEmptyLines__impl__7i8cq2($this) {
    return true;
  }
  function Keep__toString_impl_5t9sg4($this) {
    return 'Keep(increment=' + $this + ')';
  }
  function Keep__hashCode_impl_rkfp8z($this) {
    return $this == null ? 0 : $this;
  }
  function Keep__equals_impl_3j9b7t($this, other) {
    if (!(other instanceof Keep))
      return false;
    if (!($this == (other instanceof Keep ? other.g1o_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Clip(increment) {
    this.e1o_1 = increment;
  }
  protoOf(Clip).t1n = function () {
    return _Clip___get_increment__impl__6zmssn(this.e1o_1);
  };
  protoOf(Clip).x1n = function () {
    return _Clip___get_addExistingFinalLineBreak__impl__v4gbjp(this.e1o_1);
  };
  protoOf(Clip).y1n = function () {
    return _Clip___get_retainTrailingEmptyLines__impl__5r5ek5(this.e1o_1);
  };
  protoOf(Clip).toString = function () {
    return Clip__toString_impl_8zbb0x(this.e1o_1);
  };
  protoOf(Clip).hashCode = function () {
    return Clip__hashCode_impl_crulry(this.e1o_1);
  };
  protoOf(Clip).equals = function (other) {
    return Clip__equals_impl_7672fy(this.e1o_1, other);
  };
  function Strip(increment) {
    this.f1o_1 = increment;
  }
  protoOf(Strip).t1n = function () {
    return _Strip___get_increment__impl__ultjnb(this.f1o_1);
  };
  protoOf(Strip).x1n = function () {
    return _Strip___get_addExistingFinalLineBreak__impl__hh5hph(this.f1o_1);
  };
  protoOf(Strip).y1n = function () {
    return _Strip___get_retainTrailingEmptyLines__impl__5bav0l(this.f1o_1);
  };
  protoOf(Strip).toString = function () {
    return Strip__toString_impl_e44ikp(this.f1o_1);
  };
  protoOf(Strip).hashCode = function () {
    return Strip__hashCode_impl_7n1e86(this.f1o_1);
  };
  protoOf(Strip).equals = function (other) {
    return Strip__equals_impl_vbxlyi(this.f1o_1, other);
  };
  function Keep(increment) {
    this.g1o_1 = increment;
  }
  protoOf(Keep).t1n = function () {
    return _Keep___get_increment__impl__g32ff2(this.g1o_1);
  };
  protoOf(Keep).x1n = function () {
    return _Keep___get_addExistingFinalLineBreak__impl__eevoo0(this.g1o_1);
  };
  protoOf(Keep).y1n = function () {
    return _Keep___get_retainTrailingEmptyLines__impl__7i8cq2(this.g1o_1);
  };
  protoOf(Keep).toString = function () {
    return Keep__toString_impl_5t9sg4(this.g1o_1);
  };
  protoOf(Keep).hashCode = function () {
    return Keep__hashCode_impl_rkfp8z(this.g1o_1);
  };
  protoOf(Keep).equals = function (other) {
    return Keep__equals_impl_3j9b7t(this.g1o_1, other);
  };
  function BreakIntentHolder(breaks, maxIndent, endMark) {
    this.u1n_1 = breaks;
    this.v1n_1 = maxIndent;
    this.w1n_1 = endMark;
  }
  function Chomping(indicatorCodePoint, increment) {
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(43);
    if (indicatorCodePoint === Char__toInt_impl_vasixd(this_0)) {
      tmp = new Keep(_Keep___init__impl__7pj66c(increment));
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(45);
      if (indicatorCodePoint === Char__toInt_impl_vasixd(this_1)) {
        tmp = new Strip(_Strip___init__impl__1l0fz5(increment));
      } else {
        if (indicatorCodePoint == null) {
          tmp = new Clip(_Clip___init__impl__llmhrl(increment));
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  }
  function SimpleKey(tokenNumber, isRequired, index, line, column, mark) {
    this.i1n_1 = tokenNumber;
    this.j1n_1 = isRequired;
    this.k1n_1 = index;
    this.l1n_1 = line;
    this.m1n_1 = column;
    this.n1n_1 = mark;
  }
  protoOf(SimpleKey).toString = function () {
    return 'SimpleKey - tokenNumber=' + this.i1n_1 + ' required=' + this.j1n_1 + ' index=' + this.k1n_1 + ' line=' + this.l1n_1 + ' column=' + this.m1n_1;
  };
  function copyOfRangeSafe(_this__u8e3s4, $this, fromIndex, toIndex) {
    var tmp = 0;
    var tmp_0 = toIndex - fromIndex | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.collections.getOrElse' call
      var index = fromIndex + tmp_2 | 0;
      var tmp_3;
      if (0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false) {
        tmp_3 = _this__u8e3s4[index];
      } else {
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.Companion.copyOfRangeSafe.<anonymous>' call
        tmp_3 = 0;
      }
      tmp_1[tmp_2] = tmp_3;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function ensureEnoughData($this, size) {
    if (!$this.b1n_1 && ($this.a1n_1 + size | 0) >= $this.z1m_1) {
      update($this);
    }
    return ($this.a1n_1 + size | 0) < $this.z1m_1;
  }
  function ensureEnoughData$default($this, size, $super) {
    size = size === VOID ? 0 : size;
    return ensureEnoughData($this, size);
  }
  function update($this) {
    try {
      var tmp0 = $this.u1m_1;
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.readUtf8WithLimit' call
      var tmp1 = $this.x1m_1;
      var tmp$ret$0;
      $l$block_4: {
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.sizeOfFullValidUtf8String' call
        var hasAll = tmp0.s1a(tmp1);
        var originalSize = hasAll ? tmp1 : tmp0.r1a().p19_1;
        if (originalSize.equals(new Long(0, 0))) {
          tmp$ret$0 = new Long(0, 0);
          break $l$block_4;
        }
        var tmp = tmp0.r1a();
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$1 = originalSize.n2(toLong(1));
        var byte = tmp.t1a(tmp$ret$1);
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.isContinuationByte' call
        var asInt = byte;
        if (!((asInt & 192) === 128)) {
          // Inline function 'kotlin.Long.minus' call
          var other = byte < 0 ? 1 : 0;
          tmp$ret$0 = originalSize.n2(toLong(other));
          break $l$block_4;
        }
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = originalSize.m2(toLong(1));
        if (!tmp0.s1a(tmp$ret$4)) {
          tmp$ret$0 = originalSize;
          break $l$block_4;
        }
        // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.isContinuationByte' call
        var asInt_0 = tmp0.r1a().t1a(originalSize);
        if (!((asInt_0 & 192) === 128)) {
          tmp$ret$0 = originalSize;
          break $l$block_4;
        }
        var size = originalSize;
        // Inline function 'kotlin.repeat' call
        var inductionVariable = 0;
        if (inductionVariable < 3)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.sizeOfFullValidUtf8String.<anonymous>' call
            // Inline function 'kotlin.Long.minus' call
            size = size.n2(toLong(1));
            if (size.equals(new Long(0, 0))) {
              tmp$ret$0 = originalSize;
              break $l$block_4;
            }
            var tmp_0 = tmp0.r1a();
            // Inline function 'kotlin.Long.minus' call
            var tmp$ret$7 = size.n2(toLong(1));
            var byte_0 = tmp_0.t1a(tmp$ret$7);
            // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.isContinuationByte' call
            var asInt_1 = byte_0;
            if (!((asInt_1 & 192) === 128)) {
              var tmp_1;
              if (byte_0 >= 0) {
                tmp_1 = originalSize;
              } else {
                // Inline function 'it.krzeminski.snakeyaml.engine.kmp.internal.utils.continuationBytesCountFor' call
                var asInt_2 = byte_0;
                if (((asInt_2 & 224) === 192 ? 1 : (asInt_2 & 240) === 224 ? 2 : (asInt_2 & 248) === 240 ? 3 : 0) < (index + 1 | 0)) {
                  tmp_1 = originalSize;
                } else {
                  // Inline function 'kotlin.Long.minus' call
                  tmp_1 = size.n2(toLong(1));
                }
              }
              tmp$ret$0 = tmp_1;
              break $l$block_4;
            }
          }
           while (inductionVariable < 3);
        tmp$ret$0 = originalSize;
      }
      var fullUtf8Size = tmp$ret$0;
      var buffer = tmp0.u1a(fullUtf8Size);
      var buffer_0 = buffer;
      var read = buffer_0.length;
      if (read > 0) {
        var cpIndex = $this.z1m_1 - $this.a1n_1 | 0;
        $this.y1m_1 = copyOfRangeSafe($this.y1m_1, Companion_instance_10, $this.a1n_1, $this.z1m_1 + read | 0);
        var nonPrintable = null;
        var i = 0;
        while (i < read) {
          var codePoint = codePointAt(buffer_0, i);
          $this.y1m_1[cpIndex] = codePoint;
          if (Companion_instance_10.h1o(codePoint)) {
            i = i + Character_getInstance().h1i(codePoint) | 0;
          } else {
            nonPrintable = codePoint;
            i = read;
          }
          cpIndex = cpIndex + 1 | 0;
        }
        $this.z1m_1 = cpIndex;
        $this.a1n_1 = 0;
        if (!(nonPrintable == null)) {
          throw new ReaderException($this.v1m_1, cpIndex - 1 | 0, nonPrintable, 'special characters are not allowed');
        }
      } else {
        $this.b1n_1 = true;
      }
    } catch ($p) {
      if ($p instanceof IOException) {
        var ioe = $p;
        throw YamlEngineException_init_$Create$_0(ioe);
      } else {
        throw $p;
      }
    }
  }
  function moveIndices($this, length) {
    $this.c1n_1 = $this.c1n_1 + length | 0;
    $this.d1n_1 = $this.d1n_1 + length | 0;
  }
  function Companion_10() {
  }
  protoOf(Companion_10).h1o = function (c) {
    return (32 <= c ? c <= 126 : false) || c === 9 || c === 10 || c === 13 || c === 133 || (160 <= c ? c <= 55295 : false) || (57344 <= c ? c <= 65533 : false) || (65536 <= c ? c <= 1114111 : false);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function StreamReader(loadSettings, stream) {
    // Inline function 'kotlin.require' call
    if (!(loadSettings.f1c_1 >= 4)) {
      // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.StreamReader.<anonymous>' call
      var message = 'buffer size must be at least 4 bytes to be able to read all Unicode codepoints';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    var tmp_0;
    if (isInterface(stream, BufferedSource)) {
      tmp_0 = stream;
    } else {
      tmp_0 = buffer(stream);
    }
    tmp.u1m_1 = tmp_0;
    this.v1m_1 = loadSettings.z1b_1;
    this.w1m_1 = loadSettings.j1c_1;
    this.x1m_1 = toLong(loadSettings.f1c_1);
    this.y1m_1 = new Int32Array(0);
    this.z1m_1 = 0;
    this.a1n_1 = 0;
    this.b1n_1 = false;
    this.c1n_1 = 0;
    this.d1n_1 = 0;
    this.e1n_1 = 0;
    this.f1n_1 = 0;
  }
  protoOf(StreamReader).h1n = function () {
    if (!this.w1m_1)
      return null;
    var tmp = this.c1n_1;
    var tmp_0 = this.e1n_1;
    var tmp_1 = this.f1n_1;
    // Inline function 'kotlin.collections.asList' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.y1m_1;
    var tmp$ret$2 = asList(tmp$ret$1);
    return new Mark(this.v1m_1, tmp, tmp_0, tmp_1, tmp$ret$2, this.a1n_1);
  };
  protoOf(StreamReader).o1n = function (length) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block: {
          // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.StreamReader.forward.<anonymous>' call
          if (!ensureEnoughData$default(this)) {
            break $l$block;
          }
          var tmp = this.y1m_1;
          var _unary__edvuaz = this.a1n_1;
          this.a1n_1 = _unary__edvuaz + 1 | 0;
          var c = tmp[_unary__edvuaz];
          moveIndices(this, 1);
          var tmp_0;
          if (Companion_getInstance_1().z1d_1.n1e(c)) {
            tmp_0 = true;
          } else {
            var tmp_1;
            var tmp_2;
            // Inline function 'kotlin.code' call
            var this_0 = _Char___init__impl__6a9atx(13);
            if (c === Char__toInt_impl_vasixd(this_0)) {
              tmp_2 = ensureEnoughData$default(this);
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              var tmp_3 = this.y1m_1[this.a1n_1];
              // Inline function 'kotlin.code' call
              var this_1 = _Char___init__impl__6a9atx(10);
              tmp_1 = !(tmp_3 === Char__toInt_impl_vasixd(this_1));
            } else {
              tmp_1 = false;
            }
            tmp_0 = tmp_1;
          }
          if (tmp_0) {
            this.e1n_1 = this.e1n_1 + 1 | 0;
            this.f1n_1 = 0;
          } else {
            if (!(c === 65279)) {
              this.f1n_1 = this.f1n_1 + 1 | 0;
            }
          }
        }
      }
       while (inductionVariable < length);
  };
  protoOf(StreamReader).p1n = function (length, $super) {
    length = length === VOID ? 1 : length;
    var tmp;
    if ($super === VOID) {
      this.o1n(length);
      tmp = Unit_instance;
    } else {
      tmp = $super.o1n.call(this, length);
    }
    return tmp;
  };
  protoOf(StreamReader).g1n = function () {
    return ensureEnoughData$default(this) ? this.y1m_1[this.a1n_1] : 0;
  };
  protoOf(StreamReader).r1n = function (index) {
    return ensureEnoughData(this, index) ? this.y1m_1[this.a1n_1 + index | 0] : 0;
  };
  protoOf(StreamReader).q1n = function (length) {
    if (length === 0)
      return '';
    var stringLength = ensureEnoughData(this, length) ? length : coerceAtMost(length, this.z1m_1 - this.a1n_1 | 0);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(stringLength);
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.scanner.StreamReader.prefix.<anonymous>' call
    var inductionVariable = this.a1n_1;
    var last = this.a1n_1 + stringLength | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        appendCodePoint(this_0, this.y1m_1[i]);
      }
       while (inductionVariable < last);
    return this_0.toString();
  };
  protoOf(StreamReader).s1n = function (length) {
    var prefix = this.q1n(length);
    this.a1n_1 = this.a1n_1 + length | 0;
    moveIndices(this, length);
    this.f1n_1 = this.f1n_1 + length | 0;
    return prefix;
  };
  protoOf(StreamReader).q1k = function () {
    this.d1n_1 = 0;
  };
  function JsonSchema(scalarResolver, schemaTagConstructors) {
    scalarResolver = scalarResolver === VOID ? new JsonScalarResolver() : scalarResolver;
    schemaTagConstructors = schemaTagConstructors === VOID ? defaultSchemaTagConstructors(scalarResolver) : schemaTagConstructors;
    this.i1o_1 = scalarResolver;
    this.j1o_1 = schemaTagConstructors;
  }
  function defaultSchemaTagConstructors(scalarResolver) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0();
    // Inline function 'it.krzeminski.snakeyaml.engine.kmp.schema.defaultSchemaTagConstructors.<anonymous>' call
    this_0.c2(Companion_getInstance_5().q1i_1, new ConstructYamlNull());
    this_0.c2(Companion_getInstance_5().p1i_1, new ConstructYamlJsonBool());
    this_0.c2(Companion_getInstance_5().n1i_1, new ConstructYamlJsonInt());
    this_0.c2(Companion_getInstance_5().o1i_1, new ConstructYamlJsonFloat());
    this_0.c2(Companion_getInstance_5().m1i_1, new ConstructYamlBinary());
    this_0.e2(targetSchemaTagConstructors(scalarResolver));
    return this_0.a5();
  }
  function AliasToken(value, startMark, endMark) {
    Token.call(this, startMark, endMark);
    this.l1k_1 = value;
  }
  protoOf(AliasToken).d1k = function () {
    return ID_Alias_getInstance_0();
  };
  function AnchorToken(value, startMark, endMark) {
    Token.call(this, startMark, endMark);
    this.z1j_1 = value;
  }
  protoOf(AnchorToken).d1k = function () {
    return ID_Anchor_getInstance();
  };
  function BlockEndToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(BlockEndToken).d1k = function () {
    return ID_BlockEnd_getInstance();
  };
  function BlockEntryToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(BlockEntryToken).d1k = function () {
    return ID_BlockEntry_getInstance();
  };
  function BlockMappingStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(BlockMappingStartToken).d1k = function () {
    return ID_BlockMappingStart_getInstance();
  };
  function BlockSequenceStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(BlockSequenceStartToken).d1k = function () {
    return ID_BlockSequenceStart_getInstance();
  };
  function CommentToken(commentType, value, startMark, endMark) {
    Token.call(this, startMark, endMark);
    this.h1j_1 = commentType;
    this.i1j_1 = value;
  }
  protoOf(CommentToken).d1k = function () {
    return ID_Comment_getInstance_0();
  };
  function YamlDirective(major, minor) {
    this.p1j_1 = major;
    this.q1j_1 = minor;
  }
  protoOf(YamlDirective).ve = function () {
    return this.p1j_1;
  };
  protoOf(YamlDirective).we = function () {
    return this.q1j_1;
  };
  protoOf(YamlDirective).toString = function () {
    return 'YamlDirective(major=' + this.p1j_1 + ', minor=' + this.q1j_1 + ')';
  };
  protoOf(YamlDirective).hashCode = function () {
    var result = this.p1j_1;
    result = imul(result, 31) + this.q1j_1 | 0;
    return result;
  };
  protoOf(YamlDirective).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlDirective))
      return false;
    var tmp0_other_with_cast = other instanceof YamlDirective ? other : THROW_CCE();
    if (!(this.p1j_1 === tmp0_other_with_cast.p1j_1))
      return false;
    if (!(this.q1j_1 === tmp0_other_with_cast.q1j_1))
      return false;
    return true;
  };
  function TagDirective(handle, prefix) {
    this.r1j_1 = handle;
    this.s1j_1 = prefix;
  }
  protoOf(TagDirective).ve = function () {
    return this.r1j_1;
  };
  protoOf(TagDirective).we = function () {
    return this.s1j_1;
  };
  protoOf(TagDirective).toString = function () {
    return 'TagDirective(handle=' + this.r1j_1 + ', prefix=' + this.s1j_1 + ')';
  };
  protoOf(TagDirective).hashCode = function () {
    var result = getStringHashCode(this.r1j_1);
    result = imul(result, 31) + getStringHashCode(this.s1j_1) | 0;
    return result;
  };
  protoOf(TagDirective).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TagDirective))
      return false;
    var tmp0_other_with_cast = other instanceof TagDirective ? other : THROW_CCE();
    if (!(this.r1j_1 === tmp0_other_with_cast.r1j_1))
      return false;
    if (!(this.s1j_1 === tmp0_other_with_cast.s1j_1))
      return false;
    return true;
  };
  function Companion_11() {
    this.s1o_1 = 'YAML';
    this.t1o_1 = 'TAG';
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function DirectiveToken(value, startMark, endMark) {
    Token.call(this, startMark, endMark);
    this.o1j_1 = value;
  }
  protoOf(DirectiveToken).d1k = function () {
    return ID_Directive_getInstance();
  };
  function DocumentEndToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(DocumentEndToken).d1k = function () {
    return ID_DocumentEnd_getInstance_0();
  };
  function DocumentStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(DocumentStartToken).d1k = function () {
    return ID_DocumentStart_getInstance_0();
  };
  function FlowEntryToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(FlowEntryToken).d1k = function () {
    return ID_FlowEntry_getInstance();
  };
  function FlowMappingEndToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(FlowMappingEndToken).d1k = function () {
    return ID_FlowMappingEnd_getInstance();
  };
  function FlowMappingStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(FlowMappingStartToken).d1k = function () {
    return ID_FlowMappingStart_getInstance();
  };
  function FlowSequenceEndToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(FlowSequenceEndToken).d1k = function () {
    return ID_FlowSequenceEnd_getInstance();
  };
  function FlowSequenceStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(FlowSequenceStartToken).d1k = function () {
    return ID_FlowSequenceStart_getInstance();
  };
  function KeyToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(KeyToken).d1k = function () {
    return ID_Key_getInstance();
  };
  function ScalarToken(value, plain, startMark, endMark, style) {
    style = style === VOID ? ScalarStyle_PLAIN_getInstance() : style;
    Token.call(this, startMark, endMark);
    this.g1k_1 = value;
    this.h1k_1 = plain;
    this.i1k_1 = style;
  }
  protoOf(ScalarToken).d1k = function () {
    return ID_Scalar_getInstance_0();
  };
  protoOf(ScalarToken).toString = function () {
    return this.d1k().toString() + ' plain=' + this.h1k_1 + ' style=' + this.i1k_1.toString() + ' value=' + this.g1k_1;
  };
  function StreamEndToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(StreamEndToken).d1k = function () {
    return ID_StreamEnd_getInstance_0();
  };
  function StreamStartToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(StreamStartToken).d1k = function () {
    return ID_StreamStart_getInstance_0();
  };
  function TagToken(value, startMark, endMark) {
    Token.call(this, startMark, endMark);
    this.w1j_1 = value;
  }
  protoOf(TagToken).d1k = function () {
    return ID_Tag_getInstance();
  };
  function TagTuple(handle, suffix) {
    this.a1k_1 = handle;
    this.b1k_1 = suffix;
  }
  var ID_Alias_instance_0;
  var ID_Anchor_instance;
  var ID_BlockEnd_instance;
  var ID_BlockEntry_instance;
  var ID_BlockMappingStart_instance;
  var ID_BlockSequenceStart_instance;
  var ID_Directive_instance;
  var ID_DocumentEnd_instance_0;
  var ID_DocumentStart_instance_0;
  var ID_FlowEntry_instance;
  var ID_FlowMappingEnd_instance;
  var ID_FlowMappingStart_instance;
  var ID_FlowSequenceEnd_instance;
  var ID_FlowSequenceStart_instance;
  var ID_Key_instance;
  var ID_Scalar_instance_0;
  var ID_StreamEnd_instance_0;
  var ID_StreamStart_instance_0;
  var ID_Tag_instance;
  var ID_Comment_instance_0;
  var ID_Value_instance;
  var ID_entriesInitialized_0;
  function ID_initEntries_0() {
    if (ID_entriesInitialized_0)
      return Unit_instance;
    ID_entriesInitialized_0 = true;
    ID_Alias_instance_0 = new ID_0('Alias', 0, '<alias>');
    ID_Anchor_instance = new ID_0('Anchor', 1, '<anchor>');
    ID_BlockEnd_instance = new ID_0('BlockEnd', 2, '<block end>');
    ID_BlockEntry_instance = new ID_0('BlockEntry', 3, '-');
    ID_BlockMappingStart_instance = new ID_0('BlockMappingStart', 4, '<block mapping start>');
    ID_BlockSequenceStart_instance = new ID_0('BlockSequenceStart', 5, '<block sequence start>');
    ID_Directive_instance = new ID_0('Directive', 6, '<directive>');
    ID_DocumentEnd_instance_0 = new ID_0('DocumentEnd', 7, '<document end>');
    ID_DocumentStart_instance_0 = new ID_0('DocumentStart', 8, '<document start>');
    ID_FlowEntry_instance = new ID_0('FlowEntry', 9, ',');
    ID_FlowMappingEnd_instance = new ID_0('FlowMappingEnd', 10, '}');
    ID_FlowMappingStart_instance = new ID_0('FlowMappingStart', 11, '{');
    ID_FlowSequenceEnd_instance = new ID_0('FlowSequenceEnd', 12, ']');
    ID_FlowSequenceStart_instance = new ID_0('FlowSequenceStart', 13, '[');
    ID_Key_instance = new ID_0('Key', 14, '?');
    ID_Scalar_instance_0 = new ID_0('Scalar', 15, '<scalar>');
    ID_StreamEnd_instance_0 = new ID_0('StreamEnd', 16, '<stream end>');
    ID_StreamStart_instance_0 = new ID_0('StreamStart', 17, '<stream start>');
    ID_Tag_instance = new ID_0('Tag', 18, '<tag>');
    ID_Comment_instance_0 = new ID_0('Comment', 19, '#');
    ID_Value_instance = new ID_0('Value', 20, ':');
  }
  function ID_0(name, ordinal, description) {
    Enum.call(this, name, ordinal);
    this.q1p_1 = description;
  }
  protoOf(ID_0).toString = function () {
    return this.q1p_1;
  };
  function ID_Alias_getInstance_0() {
    ID_initEntries_0();
    return ID_Alias_instance_0;
  }
  function ID_Anchor_getInstance() {
    ID_initEntries_0();
    return ID_Anchor_instance;
  }
  function ID_BlockEnd_getInstance() {
    ID_initEntries_0();
    return ID_BlockEnd_instance;
  }
  function ID_BlockEntry_getInstance() {
    ID_initEntries_0();
    return ID_BlockEntry_instance;
  }
  function ID_BlockMappingStart_getInstance() {
    ID_initEntries_0();
    return ID_BlockMappingStart_instance;
  }
  function ID_BlockSequenceStart_getInstance() {
    ID_initEntries_0();
    return ID_BlockSequenceStart_instance;
  }
  function ID_Directive_getInstance() {
    ID_initEntries_0();
    return ID_Directive_instance;
  }
  function ID_DocumentEnd_getInstance_0() {
    ID_initEntries_0();
    return ID_DocumentEnd_instance_0;
  }
  function ID_DocumentStart_getInstance_0() {
    ID_initEntries_0();
    return ID_DocumentStart_instance_0;
  }
  function ID_FlowEntry_getInstance() {
    ID_initEntries_0();
    return ID_FlowEntry_instance;
  }
  function ID_FlowMappingEnd_getInstance() {
    ID_initEntries_0();
    return ID_FlowMappingEnd_instance;
  }
  function ID_FlowMappingStart_getInstance() {
    ID_initEntries_0();
    return ID_FlowMappingStart_instance;
  }
  function ID_FlowSequenceEnd_getInstance() {
    ID_initEntries_0();
    return ID_FlowSequenceEnd_instance;
  }
  function ID_FlowSequenceStart_getInstance() {
    ID_initEntries_0();
    return ID_FlowSequenceStart_instance;
  }
  function ID_Key_getInstance() {
    ID_initEntries_0();
    return ID_Key_instance;
  }
  function ID_Scalar_getInstance_0() {
    ID_initEntries_0();
    return ID_Scalar_instance_0;
  }
  function ID_StreamEnd_getInstance_0() {
    ID_initEntries_0();
    return ID_StreamEnd_instance_0;
  }
  function ID_StreamStart_getInstance_0() {
    ID_initEntries_0();
    return ID_StreamStart_instance_0;
  }
  function ID_Tag_getInstance() {
    ID_initEntries_0();
    return ID_Tag_instance;
  }
  function ID_Comment_getInstance_0() {
    ID_initEntries_0();
    return ID_Comment_instance_0;
  }
  function ID_Value_getInstance() {
    ID_initEntries_0();
    return ID_Value_instance;
  }
  function Token(startMark, endMark) {
    this.j1j_1 = startMark;
    this.k1j_1 = endMark;
  }
  protoOf(Token).toString = function () {
    return this.d1k().toString();
  };
  function ValueToken(startMark, endMark) {
    Token.call(this, startMark, endMark);
  }
  protoOf(ValueToken).d1k = function () {
    return ID_Value_getInstance();
  };
  function targetSchemaTagConstructors(scalarResolver) {
    return emptyMap();
  }
  //region block: init
  Companion_instance = new Companion();
  UriEncoder_instance = new UriEncoder();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_10 = new Companion_10();
  Companion_instance_11 = new Companion_11();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ID_DocumentEnd_getInstance;
  _.$_$.b = ID_DocumentStart_getInstance;
  _.$_$.c = ID_MappingEnd_getInstance;
  _.$_$.d = ID_Scalar_getInstance;
  _.$_$.e = ID_SequenceEnd_getInstance;
  _.$_$.f = ID_StreamEnd_getInstance;
  _.$_$.g = ID_StreamStart_getInstance;
  _.$_$.h = ParserImpl_init_$Create$;
  _.$_$.i = Companion_instance;
  _.$_$.j = AliasEvent;
  _.$_$.k = MappingStartEvent;
  _.$_$.l = NodeEvent;
  _.$_$.m = ScalarEvent;
  _.$_$.n = SequenceStartEvent;
  _.$_$.o = MarkedYamlEngineException;
  _.$_$.p = StreamReader;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./urlencoder-urlencoder-lib.js'), require('./okio-parent-okio.js')));

//# sourceMappingURL=snakeyaml-engine-kmp.js.map

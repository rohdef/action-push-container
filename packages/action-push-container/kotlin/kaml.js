(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_it_krzeminski_snakeyaml_engine_kmp, kotlin_com_squareup_okio_okio) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x8;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.c8;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.a9;
  var toString_0 = kotlin_kotlin.$_$.gc;
  var getBooleanHashCode = kotlin_kotlin.$_$.x7;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.a8;
  var equals = kotlin_kotlin.$_$.v7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var Enum = kotlin_kotlin.$_$.ab;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.n7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var defineProp = kotlin_kotlin.$_$.u7;
  var sorted = kotlin_kotlin.$_$.e6;
  var joinToString = kotlin_kotlin.$_$.r5;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var Collection = kotlin_kotlin.$_$.a4;
  var isInterface = kotlin_kotlin.$_$.p8;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CLASS = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CONTEXTUAL = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MAP = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var LIST = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.ac;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var LONG = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var SHORT = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var INT = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var FLOAT = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var DOUBLE = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var CHAR = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var BYTE = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var BOOLEAN = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var STRING = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var OBJECT = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fc;
  var toList = kotlin_kotlin.$_$.i6;
  var Char = kotlin_kotlin.$_$.xa;
  var drop = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.y5;
  var startsWith = kotlin_kotlin.$_$.ga;
  var NumberFormatException = kotlin_kotlin.$_$.gb;
  var toByte = kotlin_kotlin.$_$.ja;
  var toShort = kotlin_kotlin.$_$.pa;
  var toInt = kotlin_kotlin.$_$.na;
  var toLong = kotlin_kotlin.$_$.oa;
  var toDouble = kotlin_kotlin.$_$.la;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.eb;
  var singleOrNull = kotlin_kotlin.$_$.ea;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var checkIndexOverflow = kotlin_kotlin.$_$.q4;
  var lines = kotlin_kotlin.$_$.aa;
  var trimEnd = kotlin_kotlin.$_$.ra;
  var FunctionAdapter = kotlin_kotlin.$_$.k7;
  var Comparator = kotlin_kotlin.$_$.za;
  var compareTo = kotlin_kotlin.$_$.t7;
  var sortedWith = kotlin_kotlin.$_$.d6;
  var mapCapacity = kotlin_kotlin.$_$.w5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var UInt = kotlin_kotlin.$_$.qb;
  var AliasEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.j;
  var to = kotlin_kotlin.$_$.hc;
  var NodeEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.l;
  var MappingStartEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.k;
  var SequenceStartEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.n;
  var ScalarEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var ID_SequenceEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.e;
  var ID_MappingEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.c;
  var ID_Scalar_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.d;
  var single = kotlin_kotlin.$_$.c6;
  var listOf = kotlin_kotlin.$_$.u5;
  var uintCompare = kotlin_kotlin.$_$.ic;
  var first = kotlin_kotlin.$_$.o5;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.n2;
  var plus_0 = kotlin_kotlin.$_$.z5;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var getKClass = kotlin_kotlin.$_$.e;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var OPEN_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var until = kotlin_kotlin.$_$.e9;
  var coerceAtLeast = kotlin_kotlin.$_$.b9;
  var MarkedYamlEngineException = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.o;
  var trimMargin = kotlin_kotlin.$_$.ta;
  var Companion_instance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.i;
  var StreamReader = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.p;
  var ParserImpl_init_$Create$ = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.h;
  var ID_StreamStart_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.g;
  var ID_StreamEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.f;
  var ID_DocumentStart_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.b;
  var ID_DocumentEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.a;
  var toList_0 = kotlin_kotlin.$_$.j6;
  var objectCreate = kotlin_kotlin.$_$.w8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var last = kotlin_kotlin.$_$.t5;
  var get_lastIndex = kotlin_kotlin.$_$.s5;
  var charSequenceLength = kotlin_kotlin.$_$.r7;
  var get_elementNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toSet = kotlin_kotlin.$_$.n6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.c;
  var Companion_getInstance = kotlin_com_squareup_okio_okio.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Location, 'Location');
  initMetadataForCompanion(Companion);
  initMetadataForClass(Yaml, 'Yaml', Yaml);
  initMetadataForClass(YamlConfiguration, 'YamlConfiguration', YamlConfiguration);
  initMetadataForClass(AnchorsAndAliases, 'AnchorsAndAliases');
  initMetadataForObject(Forbidden, 'Forbidden', VOID, AnchorsAndAliases);
  initMetadataForClass(PolymorphismStyle, 'PolymorphismStyle', VOID, Enum);
  initMetadataForClass(SequenceStyle, 'SequenceStyle', VOID, Enum);
  initMetadataForClass(SingleLineStringStyle, 'SingleLineStringStyle', VOID, Enum);
  initMetadataForClass(MultiLineStringStyle, 'MultiLineStringStyle', VOID, Enum);
  initMetadataForClass(AmbiguousQuoteStyle, 'AmbiguousQuoteStyle', VOID, Enum);
  initMetadataForClass(Marker, 'Marker');
  initMetadataForClass(YamlInput, 'YamlInput', VOID, AbstractDecoder);
  initMetadataForClass(YamlContextualInput, 'YamlContextualInput', VOID, YamlInput);
  initMetadataForClass(YamlException, 'YamlException', VOID, SerializationException);
  initMetadataForClass(IncorrectTypeException, 'IncorrectTypeException', VOID, YamlException);
  initMetadataForClass(MissingTypeTagException, 'MissingTypeTagException', VOID, IncorrectTypeException);
  initMetadataForClass(InvalidPropertyValueException, 'InvalidPropertyValueException', VOID, YamlException);
  initMetadataForClass(MissingRequiredPropertyException, 'MissingRequiredPropertyException', VOID, YamlException);
  initMetadataForClass(EmptyYamlDocumentException, 'EmptyYamlDocumentException', VOID, YamlException);
  initMetadataForClass(MalformedYamlException, 'MalformedYamlException', VOID, YamlException);
  initMetadataForClass(ForbiddenAnchorOrAliasException, 'ForbiddenAnchorOrAliasException', VOID, YamlException);
  initMetadataForClass(NoAnchorForExtensionException, 'NoAnchorForExtensionException', VOID, YamlException);
  initMetadataForClass(UnknownAnchorException, 'UnknownAnchorException', VOID, YamlException);
  initMetadataForClass(YamlScalarFormatException, 'YamlScalarFormatException', VOID, YamlException);
  initMetadataForClass(DuplicateKeyException, 'DuplicateKeyException', VOID, YamlException);
  initMetadataForClass(UnexpectedNullValueException, 'UnexpectedNullValueException', VOID, YamlException);
  initMetadataForClass(UnknownPropertyException, 'UnknownPropertyException', VOID, YamlException);
  initMetadataForClass(UnknownPolymorphicTypeException, 'UnknownPolymorphicTypeException', VOID, YamlException);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(YamlListInput, 'YamlListInput', VOID, YamlInput);
  initMetadataForClass(YamlMapLikeInputBase, 'YamlMapLikeInputBase', VOID, YamlInput);
  initMetadataForClass(YamlMapInput, 'YamlMapInput', VOID, YamlMapLikeInputBase);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(YamlNode, 'YamlNode', VOID, VOID, VOID, VOID, VOID, {0: YamlNodeSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(YamlNull, 'YamlNull', VOID, YamlNode, VOID, VOID, VOID, {0: YamlNullSerializer_getInstance});
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(YamlScalar, 'YamlScalar', VOID, YamlNode, VOID, VOID, VOID, {0: YamlScalarSerializer_getInstance});
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(YamlList, 'YamlList', VOID, YamlNode, VOID, VOID, VOID, {0: YamlListSerializer_getInstance});
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(YamlMap, 'YamlMap', VOID, YamlNode, VOID, VOID, VOID, {0: YamlMapSerializer_getInstance});
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(YamlTaggedNode, 'YamlTaggedNode', VOID, YamlNode, VOID, VOID, VOID, {0: YamlTaggedNodeSerializer_getInstance});
  initMetadataForClass(YamlNodeReader, 'YamlNodeReader');
  initMetadataForClass(WeightedNode, 'WeightedNode');
  initMetadataForObject(YamlNodeSerializer, 'YamlNodeSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YamlListDescriptor, 'YamlListDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(YamlListSerializer, 'YamlListSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YamlMapDescriptor, 'YamlMapDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(YamlMapSerializer, 'YamlMapSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YamlNullSerializer, 'YamlNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YamlScalarSerializer, 'YamlScalarSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(YamlTaggedNodeSerializer, 'YamlTaggedNodeSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(YamlNullInput, 'YamlNullInput', VOID, YamlInput);
  initMetadataForClass(YamlObjectInput, 'YamlObjectInput', VOID, YamlMapLikeInputBase);
  initMetadataForClass(YamlParser, 'YamlParser');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(YamlPath, 'YamlPath');
  initMetadataForClass(YamlPathSegment, 'YamlPathSegment');
  initMetadataForObject(Root, 'Root', VOID, YamlPathSegment);
  initMetadataForClass(ListEntry, 'ListEntry', VOID, YamlPathSegment);
  initMetadataForClass(MapElementKey, 'MapElementKey', VOID, YamlPathSegment);
  initMetadataForClass(MapElementValue, 'MapElementValue', VOID, YamlPathSegment);
  initMetadataForClass(AliasReference, 'AliasReference', VOID, YamlPathSegment);
  initMetadataForClass(AliasDefinition, 'AliasDefinition', VOID, YamlPathSegment);
  initMetadataForClass(Merge, 'Merge', VOID, YamlPathSegment);
  initMetadataForClass(Error_0, 'Error', VOID, YamlPathSegment);
  initMetadataForClass(CurrentField, 'CurrentField', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(YamlPolymorphicInput$getKnownTypesForOpenType$1, VOID, VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(YamlPolymorphicInput, 'YamlPolymorphicInput', VOID, YamlInput);
  initMetadataForClass(YamlScalarInput, 'YamlScalarInput', VOID, YamlInput);
  //endregion
  function Location(line, column) {
    this.t1p_1 = line;
    this.u1p_1 = column;
  }
  protoOf(Location).toString = function () {
    return 'Location(line=' + this.t1p_1 + ', column=' + this.u1p_1 + ')';
  };
  protoOf(Location).hashCode = function () {
    var result = this.t1p_1;
    result = imul(result, 31) + this.u1p_1 | 0;
    return result;
  };
  protoOf(Location).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Location))
      return false;
    var tmp0_other_with_cast = other instanceof Location ? other : THROW_CCE();
    if (!(this.t1p_1 === tmp0_other_with_cast.t1p_1))
      return false;
    if (!(this.u1p_1 === tmp0_other_with_cast.u1p_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.v1p_1 = new Yaml();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Yaml(serializersModule, configuration) {
    Companion_getInstance_0();
    serializersModule = serializersModule === VOID ? EmptySerializersModule() : serializersModule;
    configuration = configuration === VOID ? new YamlConfiguration() : configuration;
    this.w1p_1 = serializersModule;
    this.x1p_1 = configuration;
  }
  protoOf(Yaml).ay = function () {
    return this.w1p_1;
  };
  protoOf(Yaml).y1p = function (deserializer, string) {
    return this.z1p(deserializer, bufferedSource(string));
  };
  protoOf(Yaml).z1p = function (deserializer, source) {
    var rootNode = this.a1q(source);
    var input = Companion_getInstance_1().c1q(rootNode, this, this.w1p_1, this.x1p_1, deserializer.uu());
    return input.lx(deserializer);
  };
  protoOf(Yaml).a1q = function (source) {
    var parser = new YamlParser(source, this.x1p_1.v1q_1);
    var reader = new YamlNodeReader(parser, this.x1p_1.j1q_1, this.x1p_1.t1q_1.x1q());
    var node = reader.d1r();
    parser.i1r();
    return node;
  };
  function YamlConfiguration(encodeDefaults, strictMode, extensionDefinitionPrefix, polymorphismStyle, polymorphismPropertyName, encodingIndentationSize, breakScalarsAt, sequenceStyle, singleLineStringStyle, multiLineStringStyle, ambiguousQuoteStyle, sequenceBlockIndent, anchorsAndAliases, yamlNamingStrategy, codePointLimit, decodeEnumCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? true : encodeDefaults;
    strictMode = strictMode === VOID ? true : strictMode;
    extensionDefinitionPrefix = extensionDefinitionPrefix === VOID ? null : extensionDefinitionPrefix;
    polymorphismStyle = polymorphismStyle === VOID ? PolymorphismStyle_Tag_getInstance() : polymorphismStyle;
    polymorphismPropertyName = polymorphismPropertyName === VOID ? 'type' : polymorphismPropertyName;
    encodingIndentationSize = encodingIndentationSize === VOID ? 2 : encodingIndentationSize;
    breakScalarsAt = breakScalarsAt === VOID ? 80 : breakScalarsAt;
    sequenceStyle = sequenceStyle === VOID ? SequenceStyle_Block_getInstance() : sequenceStyle;
    singleLineStringStyle = singleLineStringStyle === VOID ? SingleLineStringStyle_DoubleQuoted_getInstance() : singleLineStringStyle;
    multiLineStringStyle = multiLineStringStyle === VOID ? singleLineStringStyle.l1r() : multiLineStringStyle;
    ambiguousQuoteStyle = ambiguousQuoteStyle === VOID ? AmbiguousQuoteStyle_DoubleQuoted_getInstance() : ambiguousQuoteStyle;
    sequenceBlockIndent = sequenceBlockIndent === VOID ? 0 : sequenceBlockIndent;
    anchorsAndAliases = anchorsAndAliases === VOID ? Forbidden_getInstance() : anchorsAndAliases;
    yamlNamingStrategy = yamlNamingStrategy === VOID ? null : yamlNamingStrategy;
    codePointLimit = codePointLimit === VOID ? null : codePointLimit;
    decodeEnumCaseInsensitive = decodeEnumCaseInsensitive === VOID ? false : decodeEnumCaseInsensitive;
    this.h1q_1 = encodeDefaults;
    this.i1q_1 = strictMode;
    this.j1q_1 = extensionDefinitionPrefix;
    this.k1q_1 = polymorphismStyle;
    this.l1q_1 = polymorphismPropertyName;
    this.m1q_1 = encodingIndentationSize;
    this.n1q_1 = breakScalarsAt;
    this.o1q_1 = sequenceStyle;
    this.p1q_1 = singleLineStringStyle;
    this.q1q_1 = multiLineStringStyle;
    this.r1q_1 = ambiguousQuoteStyle;
    this.s1q_1 = sequenceBlockIndent;
    this.t1q_1 = anchorsAndAliases;
    this.u1q_1 = yamlNamingStrategy;
    this.v1q_1 = codePointLimit;
    this.w1q_1 = decodeEnumCaseInsensitive;
  }
  protoOf(YamlConfiguration).toString = function () {
    return 'YamlConfiguration(encodeDefaults=' + this.h1q_1 + ', strictMode=' + this.i1q_1 + ', extensionDefinitionPrefix=' + this.j1q_1 + ', polymorphismStyle=' + this.k1q_1.toString() + ', polymorphismPropertyName=' + this.l1q_1 + ', encodingIndentationSize=' + this.m1q_1 + ', breakScalarsAt=' + this.n1q_1 + ', sequenceStyle=' + this.o1q_1.toString() + ', singleLineStringStyle=' + this.p1q_1.toString() + ', multiLineStringStyle=' + this.q1q_1.toString() + ', ambiguousQuoteStyle=' + this.r1q_1.toString() + ', sequenceBlockIndent=' + this.s1q_1 + ', anchorsAndAliases=' + toString(this.t1q_1) + ', yamlNamingStrategy=' + toString_0(this.u1q_1) + ', codePointLimit=' + this.v1q_1 + ', decodeEnumCaseInsensitive=' + this.w1q_1 + ')';
  };
  protoOf(YamlConfiguration).hashCode = function () {
    var result = getBooleanHashCode(this.h1q_1);
    result = imul(result, 31) + getBooleanHashCode(this.i1q_1) | 0;
    result = imul(result, 31) + (this.j1q_1 == null ? 0 : getStringHashCode(this.j1q_1)) | 0;
    result = imul(result, 31) + this.k1q_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.l1q_1) | 0;
    result = imul(result, 31) + this.m1q_1 | 0;
    result = imul(result, 31) + this.n1q_1 | 0;
    result = imul(result, 31) + this.o1q_1.hashCode() | 0;
    result = imul(result, 31) + this.p1q_1.hashCode() | 0;
    result = imul(result, 31) + this.q1q_1.hashCode() | 0;
    result = imul(result, 31) + this.r1q_1.hashCode() | 0;
    result = imul(result, 31) + this.s1q_1 | 0;
    result = imul(result, 31) + hashCode(this.t1q_1) | 0;
    result = imul(result, 31) + (this.u1q_1 == null ? 0 : hashCode(this.u1q_1)) | 0;
    result = imul(result, 31) + (this.v1q_1 == null ? 0 : this.v1q_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w1q_1) | 0;
    return result;
  };
  protoOf(YamlConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof YamlConfiguration ? other : THROW_CCE();
    if (!(this.h1q_1 === tmp0_other_with_cast.h1q_1))
      return false;
    if (!(this.i1q_1 === tmp0_other_with_cast.i1q_1))
      return false;
    if (!(this.j1q_1 == tmp0_other_with_cast.j1q_1))
      return false;
    if (!this.k1q_1.equals(tmp0_other_with_cast.k1q_1))
      return false;
    if (!(this.l1q_1 === tmp0_other_with_cast.l1q_1))
      return false;
    if (!(this.m1q_1 === tmp0_other_with_cast.m1q_1))
      return false;
    if (!(this.n1q_1 === tmp0_other_with_cast.n1q_1))
      return false;
    if (!this.o1q_1.equals(tmp0_other_with_cast.o1q_1))
      return false;
    if (!this.p1q_1.equals(tmp0_other_with_cast.p1q_1))
      return false;
    if (!this.q1q_1.equals(tmp0_other_with_cast.q1q_1))
      return false;
    if (!this.r1q_1.equals(tmp0_other_with_cast.r1q_1))
      return false;
    if (!(this.s1q_1 === tmp0_other_with_cast.s1q_1))
      return false;
    if (!equals(this.t1q_1, tmp0_other_with_cast.t1q_1))
      return false;
    if (!equals(this.u1q_1, tmp0_other_with_cast.u1q_1))
      return false;
    if (!(this.v1q_1 == tmp0_other_with_cast.v1q_1))
      return false;
    if (!(this.w1q_1 === tmp0_other_with_cast.w1q_1))
      return false;
    return true;
  };
  function Forbidden() {
    Forbidden_instance = this;
    AnchorsAndAliases.call(this);
    this.m1r_1 = _UInt___init__impl__l7qpdl(0);
  }
  protoOf(Forbidden).n1r = function () {
    return this.m1r_1;
  };
  protoOf(Forbidden).x1q = function () {
    return this.n1r();
  };
  protoOf(Forbidden).toString = function () {
    return 'Forbidden';
  };
  protoOf(Forbidden).hashCode = function () {
    return 1233813646;
  };
  protoOf(Forbidden).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Forbidden))
      return false;
    other instanceof Forbidden || THROW_CCE();
    return true;
  };
  var Forbidden_instance;
  function Forbidden_getInstance() {
    if (Forbidden_instance == null)
      new Forbidden();
    return Forbidden_instance;
  }
  function AnchorsAndAliases() {
  }
  var PolymorphismStyle_Tag_instance;
  var PolymorphismStyle_Property_instance;
  var PolymorphismStyle_None_instance;
  var PolymorphismStyle_entriesInitialized;
  function PolymorphismStyle_initEntries() {
    if (PolymorphismStyle_entriesInitialized)
      return Unit_instance;
    PolymorphismStyle_entriesInitialized = true;
    PolymorphismStyle_Tag_instance = new PolymorphismStyle('Tag', 0);
    PolymorphismStyle_Property_instance = new PolymorphismStyle('Property', 1);
    PolymorphismStyle_None_instance = new PolymorphismStyle('None', 2);
  }
  function PolymorphismStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var SequenceStyle_Block_instance;
  var SequenceStyle_Flow_instance;
  var SequenceStyle_entriesInitialized;
  function SequenceStyle_initEntries() {
    if (SequenceStyle_entriesInitialized)
      return Unit_instance;
    SequenceStyle_entriesInitialized = true;
    SequenceStyle_Block_instance = new SequenceStyle('Block', 0);
    SequenceStyle_Flow_instance = new SequenceStyle('Flow', 1);
  }
  function SequenceStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var SingleLineStringStyle_DoubleQuoted_instance;
  var SingleLineStringStyle_SingleQuoted_instance;
  var SingleLineStringStyle_Plain_instance;
  var SingleLineStringStyle_PlainExceptAmbiguous_instance;
  var SingleLineStringStyle_entriesInitialized;
  function SingleLineStringStyle_initEntries() {
    if (SingleLineStringStyle_entriesInitialized)
      return Unit_instance;
    SingleLineStringStyle_entriesInitialized = true;
    SingleLineStringStyle_DoubleQuoted_instance = new SingleLineStringStyle('DoubleQuoted', 0);
    SingleLineStringStyle_SingleQuoted_instance = new SingleLineStringStyle('SingleQuoted', 1);
    SingleLineStringStyle_Plain_instance = new SingleLineStringStyle('Plain', 2);
    SingleLineStringStyle_PlainExceptAmbiguous_instance = new SingleLineStringStyle('PlainExceptAmbiguous', 3);
  }
  function SingleLineStringStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SingleLineStringStyle).l1r = function () {
    var tmp;
    switch (this.g2_1) {
      case 0:
        tmp = MultiLineStringStyle_DoubleQuoted_getInstance();
        break;
      case 1:
        tmp = MultiLineStringStyle_SingleQuoted_getInstance();
        break;
      case 2:
        tmp = MultiLineStringStyle_Plain_getInstance();
        break;
      case 3:
        tmp = MultiLineStringStyle_Plain_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var MultiLineStringStyle_Literal_instance;
  var MultiLineStringStyle_Folded_instance;
  var MultiLineStringStyle_DoubleQuoted_instance;
  var MultiLineStringStyle_SingleQuoted_instance;
  var MultiLineStringStyle_Plain_instance;
  var MultiLineStringStyle_entriesInitialized;
  function MultiLineStringStyle_initEntries() {
    if (MultiLineStringStyle_entriesInitialized)
      return Unit_instance;
    MultiLineStringStyle_entriesInitialized = true;
    MultiLineStringStyle_Literal_instance = new MultiLineStringStyle('Literal', 0);
    MultiLineStringStyle_Folded_instance = new MultiLineStringStyle('Folded', 1);
    MultiLineStringStyle_DoubleQuoted_instance = new MultiLineStringStyle('DoubleQuoted', 2);
    MultiLineStringStyle_SingleQuoted_instance = new MultiLineStringStyle('SingleQuoted', 3);
    MultiLineStringStyle_Plain_instance = new MultiLineStringStyle('Plain', 4);
  }
  function MultiLineStringStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var AmbiguousQuoteStyle_DoubleQuoted_instance;
  var AmbiguousQuoteStyle_SingleQuoted_instance;
  var AmbiguousQuoteStyle_entriesInitialized;
  function AmbiguousQuoteStyle_initEntries() {
    if (AmbiguousQuoteStyle_entriesInitialized)
      return Unit_instance;
    AmbiguousQuoteStyle_entriesInitialized = true;
    AmbiguousQuoteStyle_DoubleQuoted_instance = new AmbiguousQuoteStyle('DoubleQuoted', 0);
    AmbiguousQuoteStyle_SingleQuoted_instance = new AmbiguousQuoteStyle('SingleQuoted', 1);
  }
  function AmbiguousQuoteStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PolymorphismStyle_Tag_getInstance() {
    PolymorphismStyle_initEntries();
    return PolymorphismStyle_Tag_instance;
  }
  function PolymorphismStyle_None_getInstance() {
    PolymorphismStyle_initEntries();
    return PolymorphismStyle_None_instance;
  }
  function SequenceStyle_Block_getInstance() {
    SequenceStyle_initEntries();
    return SequenceStyle_Block_instance;
  }
  function SingleLineStringStyle_DoubleQuoted_getInstance() {
    SingleLineStringStyle_initEntries();
    return SingleLineStringStyle_DoubleQuoted_instance;
  }
  function MultiLineStringStyle_DoubleQuoted_getInstance() {
    MultiLineStringStyle_initEntries();
    return MultiLineStringStyle_DoubleQuoted_instance;
  }
  function MultiLineStringStyle_SingleQuoted_getInstance() {
    MultiLineStringStyle_initEntries();
    return MultiLineStringStyle_SingleQuoted_instance;
  }
  function MultiLineStringStyle_Plain_getInstance() {
    MultiLineStringStyle_initEntries();
    return MultiLineStringStyle_Plain_instance;
  }
  function AmbiguousQuoteStyle_DoubleQuoted_getInstance() {
    AmbiguousQuoteStyle_initEntries();
    return AmbiguousQuoteStyle_DoubleQuoted_instance;
  }
  function Marker() {
  }
  protoOf(Marker).equals = function (other) {
    if (!(other instanceof Marker))
      return false;
    other instanceof Marker || THROW_CCE();
    return true;
  };
  protoOf(Marker).hashCode = function () {
    return 0;
  };
  protoOf(Marker).toString = function () {
    return '@com.charleskorn.kaml.YamlContentPolymorphicSerializer.Marker(' + ')';
  };
  function YamlContextualInput(node, yaml, context, configuration) {
    YamlInput.call(this, node, yaml, context, configuration);
  }
  protoOf(YamlContextualInput).cy = function (descriptor) {
    throw IllegalStateException_init_$Create$('Must call beginStructure() and use returned Decoder');
  };
  protoOf(YamlContextualInput).xw = function () {
    var tmp0_subject = this.d1q_1;
    var tmp;
    if (tmp0_subject instanceof YamlScalar) {
      tmp = this.d1q_1.v1r_1;
    } else {
      if (tmp0_subject instanceof YamlNull) {
        throw new UnexpectedNullValueException(this.d1q_1.t1r_1);
      } else {
        throw IllegalStateException_init_$Create$('Must call beginStructure() and use returned Decoder');
      }
    }
    return tmp;
  };
  protoOf(YamlContextualInput).mx = function (descriptor) {
    return Companion_getInstance_1().c1q(this.d1q_1, this.e1q_1, this.ay(), this.g1q_1, descriptor);
  };
  function IncorrectTypeException(message, path) {
    YamlException.call(this, message, path);
    captureStack(this, IncorrectTypeException);
  }
  function YamlException(message, path, cause) {
    cause = cause === VOID ? null : cause;
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, YamlException);
    this.x1r_1 = message;
    this.y1r_1 = path;
    this.z1r_1 = cause;
    this.a1s_1 = this.y1r_1.e1s_1;
    this.b1s_1 = this.a1s_1.t1p_1;
    this.c1s_1 = this.a1s_1.u1p_1;
  }
  protoOf(YamlException).x8 = function () {
    return this.x1r_1;
  };
  protoOf(YamlException).y8 = function () {
    return this.z1r_1;
  };
  protoOf(YamlException).toString = function () {
    return '' + getKClassFromExpression(this).w9() + ' at ' + this.y1r_1.f1s() + ' on line ' + this.b1s_1 + ', column ' + this.c1s_1 + ': ' + this.x8();
  };
  function MissingTypeTagException(path) {
    IncorrectTypeException.call(this, 'Value is missing a type tag (eg. !<type>)', path);
    captureStack(this, MissingTypeTagException);
  }
  function InvalidPropertyValueException(propertyName, reason, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Value for '" + propertyName + "' is invalid: " + reason, path, cause);
    captureStack(this, InvalidPropertyValueException);
    this.m1s_1 = propertyName;
    this.n1s_1 = reason;
  }
  function MissingRequiredPropertyException(propertyName, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Property '" + propertyName + "' is required but it is missing.", path, cause);
    captureStack(this, MissingRequiredPropertyException);
    this.u1s_1 = propertyName;
  }
  function EmptyYamlDocumentException(message, path) {
    YamlException.call(this, message, path);
    captureStack(this, EmptyYamlDocumentException);
  }
  function MalformedYamlException(message, path) {
    YamlException.call(this, message, path);
    captureStack(this, MalformedYamlException);
  }
  function ForbiddenAnchorOrAliasException(message, path) {
    YamlException.call(this, message, path);
    captureStack(this, ForbiddenAnchorOrAliasException);
  }
  function NoAnchorForExtensionException(key, extensionDefinitionPrefix, path) {
    YamlException.call(this, "The key '" + key + "' starts with the extension definition prefix '" + extensionDefinitionPrefix + "' but does not define an anchor.", path);
    captureStack(this, NoAnchorForExtensionException);
    this.b1t_1 = key;
    this.c1t_1 = extensionDefinitionPrefix;
  }
  function UnknownAnchorException(anchorName, path) {
    YamlException.call(this, "Unknown anchor '" + anchorName + "'.", path);
    captureStack(this, UnknownAnchorException);
    this.j1t_1 = anchorName;
  }
  function YamlScalarFormatException(message, path, originalValue) {
    YamlException.call(this, message, path);
    captureStack(this, YamlScalarFormatException);
    this.q1t_1 = originalValue;
  }
  function DuplicateKeyException(originalPath, duplicatePath, key) {
    YamlException.call(this, 'Duplicate key ' + key + '. It was previously given at line ' + originalPath.e1s_1.t1p_1 + ', column ' + originalPath.e1s_1.u1p_1 + '.', duplicatePath);
    captureStack(this, DuplicateKeyException);
    this.x1t_1 = originalPath;
    this.y1t_1 = duplicatePath;
    this.z1t_1 = key;
    this.a1u_1 = this.x1t_1.e1s_1;
    this.b1u_1 = this.y1t_1.e1s_1;
  }
  function UnexpectedNullValueException(path) {
    YamlException.call(this, 'Unexpected null or empty value for non-null field.', path);
    captureStack(this, UnexpectedNullValueException);
  }
  function UnknownPropertyException(propertyName, validPropertyNames, path) {
    YamlException.call(this, "Unknown property '" + propertyName + "'. Known properties are: " + joinToString(sorted(validPropertyNames), ', '), path);
    captureStack(this, UnknownPropertyException);
    this.i1u_1 = propertyName;
    this.j1u_1 = validPropertyNames;
  }
  function UnknownPolymorphicTypeException(typeName, validTypeNames, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Unknown type '" + typeName + "'. Known types are: " + joinToString(sorted(validTypeNames), ', '), path, cause);
    captureStack(this, UnknownPolymorphicTypeException);
    this.q1u_1 = typeName;
    this.r1u_1 = validTypeNames;
  }
  function createContextual($this, node, yaml, context, configuration, descriptor) {
    var tmp0_safe_receiver = getContextualDescriptor(context, descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.charleskorn.kaml.Companion.createContextual.<anonymous>' call
      tmp = Companion_getInstance_1().c1q(node, yaml, context, configuration, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new YamlContextualInput(node, yaml, context, configuration) : tmp1_elvis_lhs;
  }
  function createPolymorphicMapDeserializer($this, node, yaml, context, configuration) {
    var desiredKey = configuration.l1q_1;
    var typeName = getValue(node, $this, desiredKey);
    if (typeName instanceof YamlList)
      throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a list', typeName.z1u_1);
    else {
      if (typeName instanceof YamlMap)
        throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a map', typeName.w1u_1);
      else {
        if (typeName instanceof YamlNull)
          throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a null value', typeName.t1r_1);
        else {
          if (typeName instanceof YamlTaggedNode)
            throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a tagged value', typeName.t1u());
          else {
            if (typeName instanceof YamlScalar) {
              var remainingProperties = withoutKey(node, $this, desiredKey);
              return new YamlPolymorphicInput(typeName.v1r_1, typeName.w1r_1, remainingProperties, yaml, context, configuration);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
  }
  function getValue(_this__u8e3s4, $this, desiredKey) {
    var tmp0_elvis_lhs = _this__u8e3s4.a1v(desiredKey);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingRequiredPropertyException(desiredKey, _this__u8e3s4.w1u_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withoutKey(_this__u8e3s4, $this, key) {
    // Inline function 'kotlin.collections.filterKeys' call
    var this_0 = _this__u8e3s4.v1u_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.b2().h();
    while (_iterator__ex2g4s.i()) {
      var entry = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.Companion.withoutKey.<anonymous>' call
      if (!(entry.u1().v1r_1 === key)) {
        result.c2(entry.u1(), entry.v1());
      }
    }
    return _this__u8e3s4.b1v(result);
  }
  function _get_isContentBasedPolymorphic__goffbz(_this__u8e3s4, $this) {
    var tmp0 = _this__u8e3s4.xv();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.h();
      while (_iterator__ex2g4s.i()) {
        var element = _iterator__ex2g4s.j();
        // Inline function 'com.charleskorn.kaml.Companion.<get-isContentBasedPolymorphic>.<anonymous>' call
        if (element instanceof Marker) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = "^Field '(.*)' is required for type with serial name '.*', but it was missing$";
    tmp.b1q_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_0).c1q = function (node, yaml, context, configuration, descriptor) {
    var tmp;
    if (node instanceof YamlNull) {
      var tmp_0;
      var tmp_1;
      var tmp_2 = descriptor.uv();
      if (tmp_2 instanceof PolymorphicKind) {
        tmp_1 = !descriptor.pv();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        throw new MissingTypeTagException(node.t1r_1);
      } else {
        tmp_0 = new YamlNullInput(node, yaml, context, configuration);
      }
      tmp = tmp_0;
    } else {
      if (node instanceof YamlScalar) {
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6 = descriptor.uv();
        if (tmp_6 instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          var tmp_7 = descriptor.uv();
          tmp_5 = tmp_7 instanceof ENUM;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          tmp_4 = descriptor.vv();
        }
        if (tmp_4) {
          tmp_3 = new YamlScalarInput(node, yaml, context, configuration);
        } else {
          var tmp_8 = descriptor.uv();
          if (tmp_8 instanceof CONTEXTUAL) {
            tmp_3 = createContextual(this, node, yaml, context, configuration, descriptor);
          } else {
            var tmp_9 = descriptor.uv();
            if (tmp_9 instanceof PolymorphicKind) {
              var tmp_10;
              if (_get_isContentBasedPolymorphic__goffbz(descriptor, this)) {
                tmp_10 = createContextual(this, node, yaml, context, configuration, descriptor);
              } else {
                throw new MissingTypeTagException(node.w1r_1);
              }
              tmp_3 = tmp_10;
            } else {
              throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.uv()) + ', but got a scalar value', node.w1r_1);
            }
          }
        }
        tmp = tmp_3;
      } else {
        if (node instanceof YamlList) {
          var tmp1_subject = descriptor.uv();
          var tmp_11;
          if (tmp1_subject instanceof LIST) {
            tmp_11 = new YamlListInput(node, yaml, context, configuration);
          } else {
            if (tmp1_subject instanceof CONTEXTUAL) {
              tmp_11 = createContextual(this, node, yaml, context, configuration, descriptor);
            } else {
              if (tmp1_subject instanceof PolymorphicKind) {
                var tmp_12;
                if (_get_isContentBasedPolymorphic__goffbz(descriptor, this)) {
                  tmp_12 = createContextual(this, node, yaml, context, configuration, descriptor);
                } else {
                  throw new MissingTypeTagException(node.z1u_1);
                }
                tmp_11 = tmp_12;
              } else {
                throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.uv()) + ', but got a list', node.z1u_1);
              }
            }
          }
          tmp = tmp_11;
        } else {
          if (node instanceof YamlMap) {
            var tmp2_subject = descriptor.uv();
            var tmp_13;
            var tmp_14;
            if (tmp2_subject instanceof CLASS) {
              tmp_14 = true;
            } else {
              tmp_14 = equals(tmp2_subject, OBJECT_getInstance());
            }
            if (tmp_14) {
              tmp_13 = new YamlObjectInput(node, yaml, context, configuration);
            } else {
              if (tmp2_subject instanceof MAP) {
                tmp_13 = new YamlMapInput(node, yaml, context, configuration);
              } else {
                if (tmp2_subject instanceof CONTEXTUAL) {
                  tmp_13 = createContextual(this, node, yaml, context, configuration, descriptor);
                } else {
                  if (tmp2_subject instanceof PolymorphicKind) {
                    var tmp_15;
                    if (_get_isContentBasedPolymorphic__goffbz(descriptor, this)) {
                      tmp_15 = createContextual(this, node, yaml, context, configuration, descriptor);
                    } else {
                      var tmp_16;
                      switch (configuration.k1q_1.g2_1) {
                        case 2:
                          throw new IncorrectTypeException("Encountered a polymorphic map descriptor but PolymorphismStyle is 'None'", node.w1u_1);
                        case 0:
                          throw new MissingTypeTagException(node.w1u_1);
                        case 1:
                          tmp_16 = createPolymorphicMapDeserializer(this, node, yaml, context, configuration);
                          break;
                        default:
                          noWhenBranchMatchedException();
                          break;
                      }
                      tmp_15 = tmp_16;
                    }
                    tmp_13 = tmp_15;
                  } else {
                    throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.uv()) + ', but got a map', node.w1u_1);
                  }
                }
              }
            }
            tmp = tmp_13;
          } else {
            if (node instanceof YamlTaggedNode) {
              var tmp_17;
              var tmp_18;
              var tmp_19 = descriptor.uv();
              if (tmp_19 instanceof PolymorphicKind) {
                tmp_18 = configuration.k1q_1.equals(PolymorphismStyle_None_getInstance());
              } else {
                tmp_18 = false;
              }
              if (tmp_18) {
                throw new IncorrectTypeException("Encountered a tagged polymorphic descriptor but PolymorphismStyle is 'None'", node.t1u());
              } else {
                var tmp_20;
                var tmp_21 = descriptor.uv();
                if (tmp_21 instanceof PolymorphicKind) {
                  tmp_20 = configuration.k1q_1.equals(PolymorphismStyle_Tag_getInstance());
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_17 = new YamlPolymorphicInput(node.d1v_1, node.t1u(), node.e1v_1, yaml, context, configuration);
                } else {
                  tmp_17 = this.c1q(node.e1v_1, yaml, context, configuration, descriptor);
                }
              }
              tmp = tmp_17;
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function throwIfMissingRequiredPropertyException($this, e) {
    var tmp0_elvis_lhs = Companion_getInstance_1().b1q_1.ac(ensureNotNull(e.message));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var match = tmp;
    throw new MissingRequiredPropertyException(match.ad().p(1), $this.d1q_1.t1u(), e);
  }
  function YamlInput(node, yaml, serializersModule, configuration) {
    Companion_getInstance_1();
    AbstractDecoder.call(this);
    this.d1q_1 = node;
    this.e1q_1 = yaml;
    this.f1q_1 = serializersModule;
    this.g1q_1 = configuration;
  }
  protoOf(YamlInput).ay = function () {
    return this.f1q_1;
  };
  protoOf(YamlInput).lx = function (deserializer) {
    try {
      return protoOf(AbstractDecoder).lx.call(this, deserializer);
    } catch ($p) {
      if ($p instanceof SerializationException) {
        var e = $p;
        throwIfMissingRequiredPropertyException(this, e);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  function get_friendlyDescription(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof MAP) {
      tmp = 'a map';
    } else {
      if (_this__u8e3s4 instanceof CLASS) {
        tmp = 'an object';
      } else {
        if (_this__u8e3s4 instanceof OBJECT) {
          tmp = 'an object';
        } else {
          if (_this__u8e3s4 instanceof LIST) {
            tmp = 'a list';
          } else {
            if (_this__u8e3s4 instanceof STRING) {
              tmp = 'a string';
            } else {
              if (_this__u8e3s4 instanceof BOOLEAN) {
                tmp = 'a boolean';
              } else {
                if (_this__u8e3s4 instanceof BYTE) {
                  tmp = 'a byte';
                } else {
                  if (_this__u8e3s4 instanceof CHAR) {
                    tmp = 'a character';
                  } else {
                    if (_this__u8e3s4 instanceof DOUBLE) {
                      tmp = 'a double';
                    } else {
                      if (_this__u8e3s4 instanceof FLOAT) {
                        tmp = 'a float';
                      } else {
                        if (_this__u8e3s4 instanceof INT) {
                          tmp = 'an integer';
                        } else {
                          if (_this__u8e3s4 instanceof SHORT) {
                            tmp = 'a short';
                          } else {
                            if (_this__u8e3s4 instanceof LONG) {
                              tmp = 'a long';
                            } else {
                              if (_this__u8e3s4 instanceof ENUM) {
                                tmp = 'an enumeration value';
                              } else {
                                tmp = 'a ' + _this__u8e3s4.toString() + ' value';
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function _get_currentElementDecoder__u73r00($this) {
    var tmp = $this.l1v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentElementDecoder');
    }
  }
  function _get_haveStartedReadingElements__wj0go1($this) {
    return $this.k1v_1 > 0;
  }
  function YamlListInput(list, yaml, context, configuration) {
    YamlInput.call(this, list, yaml, context, configuration);
    this.j1v_1 = list;
    this.k1v_1 = 0;
  }
  protoOf(YamlListInput).dy = function (descriptor) {
    return this.j1v_1.y1u_1.k();
  };
  protoOf(YamlListInput).cy = function (descriptor) {
    if (this.k1v_1 === this.j1v_1.y1u_1.k()) {
      return -1;
    }
    this.l1v_1 = Companion_getInstance_1().c1q(this.j1v_1.y1u_1.p(this.k1v_1), this.e1q_1, this.ay(), this.g1q_1, descriptor.zv(0));
    var _unary__edvuaz = this.k1v_1;
    this.k1v_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(YamlListInput).yw = function () {
    if (!_get_haveStartedReadingElements__wj0go1(this)) {
      return true;
    }
    return _get_currentElementDecoder__u73r00(this).yw();
  };
  protoOf(YamlListInput).ix = function () {
    return _get_currentElementDecoder__u73r00(this).ix();
  };
  protoOf(YamlListInput).dx = function () {
    return _get_currentElementDecoder__u73r00(this).dx();
  };
  protoOf(YamlListInput).ex = function () {
    return _get_currentElementDecoder__u73r00(this).ex();
  };
  protoOf(YamlListInput).cx = function () {
    return _get_currentElementDecoder__u73r00(this).cx();
  };
  protoOf(YamlListInput).bx = function () {
    return _get_currentElementDecoder__u73r00(this).bx();
  };
  protoOf(YamlListInput).gx = function () {
    return _get_currentElementDecoder__u73r00(this).gx();
  };
  protoOf(YamlListInput).fx = function () {
    return _get_currentElementDecoder__u73r00(this).fx();
  };
  protoOf(YamlListInput).ax = function () {
    return _get_currentElementDecoder__u73r00(this).ax();
  };
  protoOf(YamlListInput).hx = function () {
    return _get_currentElementDecoder__u73r00(this).hx();
  };
  protoOf(YamlListInput).lx = function (deserializer) {
    if (!_get_haveStartedReadingElements__wj0go1(this)) {
      return protoOf(YamlInput).lx.call(this, deserializer);
    }
    return _get_currentElementDecoder__u73r00(this).lx(deserializer);
  };
  protoOf(YamlListInput).mx = function (descriptor) {
    if (_get_haveStartedReadingElements__wj0go1(this)) {
      return _get_currentElementDecoder__u73r00(this);
    }
    return protoOf(YamlInput).mx.call(this, descriptor);
  };
  function _get_currentEntry__q2u5ma($this) {
    var tmp = $this.v1v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentEntry');
    }
  }
  function YamlMapInput$beginStructure$lambda($descriptor) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.mx($descriptor);
    };
  }
  function YamlMapInput(map, yaml, context, configuration) {
    YamlMapLikeInputBase.call(this, map, yaml, context, configuration);
    this.t1v_1 = toList(map.v1u_1.b2());
    this.u1v_1 = 0;
  }
  protoOf(YamlMapInput).cy = function (descriptor) {
    if (this.u1v_1 === imul(this.t1v_1.k(), 2)) {
      return -1;
    }
    var entryIndex = this.u1v_1 / 2 | 0;
    this.v1v_1 = this.t1v_1.p(entryIndex);
    this.b1w_1 = _get_currentEntry__q2u5ma(this).u1();
    this.c1w_1 = !((this.u1v_1 % 2 | 0) === 0);
    var tmp = this;
    var tmp_0;
    switch (this.c1w_1) {
      case true:
        var tmp_1;
        try {
          tmp_1 = Companion_getInstance_1().c1q(_get_currentEntry__q2u5ma(this).v1(), this.e1q_1, this.ay(), this.g1q_1, descriptor.zv(1));
        } catch ($p) {
          var tmp_2;
          if ($p instanceof IncorrectTypeException) {
            var e = $p;
            throw new InvalidPropertyValueException(this.d1w(), e.x8(), e.y1r_1, e);
          } else {
            throw $p;
          }
        }

        tmp_0 = tmp_1;
        break;
      case false:
        tmp_0 = Companion_getInstance_1().c1q(this.e1w(), this.e1q_1, this.ay(), this.g1q_1, descriptor.zv(0));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.a1w_1 = tmp_0;
    var _unary__edvuaz = this.u1v_1;
    this.u1v_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(YamlMapInput).mx = function (descriptor) {
    if (this.g1w()) {
      return this.f1w(YamlMapInput$beginStructure$lambda(descriptor));
    }
    return protoOf(YamlMapLikeInputBase).mx.call(this, descriptor);
  };
  function YamlMapLikeInputBase$decodeNotNullMark$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.yw();
  }
  function YamlMapLikeInputBase$decodeString$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.ix();
  }
  function YamlMapLikeInputBase$decodeInt$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.dx();
  }
  function YamlMapLikeInputBase$decodeLong$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.ex();
  }
  function YamlMapLikeInputBase$decodeShort$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.cx();
  }
  function YamlMapLikeInputBase$decodeByte$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.bx();
  }
  function YamlMapLikeInputBase$decodeDouble$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.gx();
  }
  function YamlMapLikeInputBase$decodeFloat$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.fx();
  }
  function YamlMapLikeInputBase$decodeBoolean$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.ax();
  }
  function YamlMapLikeInputBase$decodeChar$lambda($this$fromCurrentValue) {
    return new Char($this$fromCurrentValue.hx());
  }
  function YamlMapLikeInputBase$decodeSerializableValue$lambda($deserializer) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.lx($deserializer);
    };
  }
  function YamlMapLikeInputBase(map, yaml, context, configuration) {
    YamlInput.call(this, map, yaml, context, configuration);
    this.c1w_1 = false;
  }
  protoOf(YamlMapLikeInputBase).h1w = function () {
    var tmp = this.a1w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentValueDecoder');
    }
  };
  protoOf(YamlMapLikeInputBase).e1w = function () {
    var tmp = this.b1w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentKey');
    }
  };
  protoOf(YamlMapLikeInputBase).yw = function () {
    if (!this.g1w()) {
      return true;
    }
    return this.f1w(YamlMapLikeInputBase$decodeNotNullMark$lambda);
  };
  protoOf(YamlMapLikeInputBase).ix = function () {
    return this.f1w(YamlMapLikeInputBase$decodeString$lambda);
  };
  protoOf(YamlMapLikeInputBase).dx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeInt$lambda);
  };
  protoOf(YamlMapLikeInputBase).ex = function () {
    return this.f1w(YamlMapLikeInputBase$decodeLong$lambda);
  };
  protoOf(YamlMapLikeInputBase).cx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeShort$lambda);
  };
  protoOf(YamlMapLikeInputBase).bx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeByte$lambda);
  };
  protoOf(YamlMapLikeInputBase).gx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeDouble$lambda);
  };
  protoOf(YamlMapLikeInputBase).fx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeFloat$lambda);
  };
  protoOf(YamlMapLikeInputBase).ax = function () {
    return this.f1w(YamlMapLikeInputBase$decodeBoolean$lambda);
  };
  protoOf(YamlMapLikeInputBase).hx = function () {
    return this.f1w(YamlMapLikeInputBase$decodeChar$lambda).c1_1;
  };
  protoOf(YamlMapLikeInputBase).lx = function (deserializer) {
    if (!this.g1w()) {
      return protoOf(YamlInput).lx.call(this, deserializer);
    }
    return this.f1w(YamlMapLikeInputBase$decodeSerializableValue$lambda(deserializer));
  };
  protoOf(YamlMapLikeInputBase).f1w = function (action) {
    try {
      return action(this.h1w());
    } catch ($p) {
      if ($p instanceof YamlException) {
        var e = $p;
        if (this.c1w_1) {
          throw new InvalidPropertyValueException(this.d1w(), e.x8(), e.y1r_1, e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
  };
  protoOf(YamlMapLikeInputBase).g1w = function () {
    return !(this.a1w_1 == null);
  };
  protoOf(YamlMapLikeInputBase).d1w = function () {
    return this.e1w().v1r_1;
  };
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function YamlNode(path) {
    this.s1u_1 = path;
  }
  protoOf(YamlNode).t1u = function () {
    return this.s1u_1;
  };
  protoOf(YamlNode).i1w = function () {
    return this.t1u().e1s_1;
  };
  protoOf(YamlNode).k1w = function (child, newParentPath) {
    return new YamlPath(plus(newParentPath.d1s_1, drop(child.t1u().d1s_1, this.t1u().d1s_1.k())));
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function YamlNull(path) {
    YamlNode.call(this, path);
    this.t1r_1 = path;
  }
  protoOf(YamlNull).t1u = function () {
    return this.t1r_1;
  };
  protoOf(YamlNull).j1w = function (newPath) {
    return new YamlNull(newPath);
  };
  protoOf(YamlNull).toString = function () {
    return 'null @ ' + this.t1r_1.toString();
  };
  protoOf(YamlNull).hashCode = function () {
    return this.t1r_1.hashCode();
  };
  protoOf(YamlNull).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlNull))
      return false;
    var tmp0_other_with_cast = other instanceof YamlNull ? other : THROW_CCE();
    if (!this.t1r_1.equals(tmp0_other_with_cast.t1r_1))
      return false;
    return true;
  };
  function convertToIntegerLikeValue($this, converter, description) {
    var tmp0_elvis_lhs = convertToIntegerLikeValueOrNull($this, converter);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + $this.v1r_1 + "' is not a valid " + description + ' value.', $this.w1r_1, $this.v1r_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function convertToIntegerLikeValueOrNull($this, converter) {
    var tmp;
    try {
      var tmp_0;
      if (startsWith($this.v1r_1, '0x')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter($this.v1r_1.substring(2), 16);
      } else if (startsWith($this.v1r_1, '-0x')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter('-' + $this.v1r_1.substring(3), 16);
      } else if (startsWith($this.v1r_1, '0o')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter($this.v1r_1.substring(2), 8);
      } else if (startsWith($this.v1r_1, '-0o')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter('-' + $this.v1r_1.substring(3), 8);
      } else {
        tmp_0 = converter($this.v1r_1, 10);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof NumberFormatException) {
        var e = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function toByte$ref() {
    var l = function (p0, p1) {
      return toByte(p0, p1);
    };
    l.callableName = 'toByte';
    return l;
  }
  function toShort$ref() {
    var l = function (p0, p1) {
      return toShort(p0, p1);
    };
    l.callableName = 'toShort';
    return l;
  }
  function toInt$ref() {
    var l = function (p0, p1) {
      return toInt(p0, p1);
    };
    l.callableName = 'toInt';
    return l;
  }
  function toLong$ref() {
    var l = function (p0, p1) {
      return toLong(p0, p1);
    };
    l.callableName = 'toLong';
    return l;
  }
  function YamlScalar(content, path) {
    YamlNode.call(this, path);
    this.v1r_1 = content;
    this.w1r_1 = path;
  }
  protoOf(YamlScalar).t1u = function () {
    return this.w1r_1;
  };
  protoOf(YamlScalar).l1w = function (other) {
    var tmp;
    if (other instanceof YamlScalar) {
      tmp = this.v1r_1 === other.v1r_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YamlScalar).m1w = function () {
    return "'" + this.v1r_1 + "'";
  };
  protoOf(YamlScalar).n1w = function () {
    return convertToIntegerLikeValue(this, toByte$ref(), 'byte');
  };
  protoOf(YamlScalar).o1w = function () {
    return convertToIntegerLikeValue(this, toShort$ref(), 'short');
  };
  protoOf(YamlScalar).z2 = function () {
    return convertToIntegerLikeValue(this, toInt$ref(), 'integer');
  };
  protoOf(YamlScalar).p1w = function () {
    return convertToIntegerLikeValue(this, toLong$ref(), 'long');
  };
  protoOf(YamlScalar).q1w = function () {
    var tmp;
    switch (this.v1r_1) {
      case '.inf':
      case '.Inf':
      case '.INF':
        tmp = Infinity;
        break;
      case '-.inf':
      case '-.Inf':
      case '-.INF':
        tmp = -Infinity;
        break;
      case '.nan':
      case '.NaN':
      case '.NAN':
        tmp = NaN;
        break;
      default:
        var tmp_0;
        try {
          // Inline function 'kotlin.text.toFloat' call
          var this_0 = this.v1r_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = toDouble(this_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof NumberFormatException) {
            var e = $p;
            throw new YamlScalarFormatException("Value '" + this.v1r_1 + "' is not a valid floating point value.", this.w1r_1, this.v1r_1);
          } else {
            if ($p instanceof IndexOutOfBoundsException) {
              var e_0 = $p;
              throw new YamlScalarFormatException("Value '" + this.v1r_1 + "' is not a valid floating point value.", this.w1r_1, this.v1r_1);
            } else {
              throw $p;
            }
          }
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(YamlScalar).a3 = function () {
    var tmp0_elvis_lhs = this.r1w();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + this.v1r_1 + "' is not a valid floating point value.", this.w1r_1, this.v1r_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).r1w = function () {
    var tmp;
    switch (this.v1r_1) {
      case '.inf':
      case '.Inf':
      case '.INF':
        tmp = Infinity;
        break;
      case '-.inf':
      case '-.Inf':
      case '-.INF':
        tmp = -Infinity;
        break;
      case '.nan':
      case '.NaN':
      case '.NAN':
        tmp = NaN;
        break;
      default:
        var tmp_0;
        try {
          tmp_0 = toDouble(this.v1r_1);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof NumberFormatException) {
            var e = $p;
            tmp_1 = null;
          } else {
            if ($p instanceof IndexOutOfBoundsException) {
              var e_0 = $p;
              tmp_1 = null;
            } else {
              throw $p;
            }
          }
          tmp_0 = tmp_1;
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(YamlScalar).s1w = function () {
    var tmp0_elvis_lhs = this.t1w();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + this.v1r_1 + "' is not a valid boolean, permitted choices are: true or false", this.w1r_1, this.v1r_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).t1w = function () {
    switch (this.v1r_1) {
      case 'true':
      case 'True':
      case 'TRUE':
        return true;
      case 'false':
      case 'False':
      case 'FALSE':
        return false;
      default:
        return null;
    }
  };
  protoOf(YamlScalar).u1w = function () {
    var tmp0_elvis_lhs = this.v1w();
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      throw new YamlScalarFormatException("Value '" + this.v1r_1 + "' is not a valid character value.", this.w1r_1, this.v1r_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).v1w = function () {
    return singleOrNull(this.v1r_1);
  };
  protoOf(YamlScalar).j1w = function (newPath) {
    return this.w1w(VOID, newPath);
  };
  protoOf(YamlScalar).toString = function () {
    return 'scalar @ ' + this.w1r_1.toString() + ' : ' + this.v1r_1;
  };
  protoOf(YamlScalar).x1w = function (content, path) {
    return new YamlScalar(content, path);
  };
  protoOf(YamlScalar).w1w = function (content, path, $super) {
    content = content === VOID ? this.v1r_1 : content;
    path = path === VOID ? this.w1r_1 : path;
    return $super === VOID ? this.x1w(content, path) : $super.x1w.call(this, content, path);
  };
  protoOf(YamlScalar).hashCode = function () {
    var result = getStringHashCode(this.v1r_1);
    result = imul(result, 31) + this.w1r_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlScalar).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlScalar))
      return false;
    var tmp0_other_with_cast = other instanceof YamlScalar ? other : THROW_CCE();
    if (!(this.v1r_1 === tmp0_other_with_cast.v1r_1))
      return false;
    if (!this.w1r_1.equals(tmp0_other_with_cast.w1r_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function YamlList(items, path) {
    YamlNode.call(this, path);
    this.y1u_1 = items;
    this.z1u_1 = path;
  }
  protoOf(YamlList).t1u = function () {
    return this.z1u_1;
  };
  protoOf(YamlList).j1w = function (newPath) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.y1u_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlList.withPath.<anonymous>' call
      var tmp$ret$0 = item.j1w(this.k1w(item, newPath));
      destination.e(tmp$ret$0);
    }
    var updatedItems = destination;
    return new YamlList(updatedItems, newPath);
  };
  protoOf(YamlList).toString = function () {
    var builder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'list @ ' + this.z1u_1.toString() + ' (size: ' + this.y1u_1.k() + ')';
    // Inline function 'kotlin.text.appendLine' call
    builder.t7(value).u7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = this.y1u_1.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'com.charleskorn.kaml.YamlList.toString.<anonymous>' call
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = '- item ' + checkIndexOverflow(_unary__edvuaz) + ':';
      // Inline function 'kotlin.text.appendLine' call
      builder.t7(value_0).u7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = lines(toString(item)).h();
      while (_iterator__ex2g4s_0.i()) {
        var element = _iterator__ex2g4s_0.j();
        // Inline function 'com.charleskorn.kaml.YamlList.toString.<anonymous>.<anonymous>' call
        builder.t7('  ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.t7(element).u7(_Char___init__impl__6a9atx(10));
      }
    }
    return toString(trimEnd(builder));
  };
  protoOf(YamlList).hashCode = function () {
    var result = hashCode(this.y1u_1);
    result = imul(result, 31) + this.z1u_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlList))
      return false;
    var tmp0_other_with_cast = other instanceof YamlList ? other : THROW_CCE();
    if (!equals(this.y1u_1, tmp0_other_with_cast.y1u_1))
      return false;
    if (!this.z1u_1.equals(tmp0_other_with_cast.z1u_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.y1w_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).cd = function (a, b) {
    return this.y1w_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.cd(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).b3 = function () {
    return this.y1w_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.b3());
  };
  function YamlMap$lambda(a, b) {
    var lineComparison = compareTo(a.i1w().t1p_1, b.i1w().t1p_1);
    var tmp;
    if (!(lineComparison === 0)) {
      tmp = lineComparison;
    } else {
      tmp = compareTo(a.i1w().u1p_1, b.i1w().u1p_1);
    }
    return tmp;
  }
  function YamlMap(entries, path) {
    YamlNode.call(this, path);
    this.v1u_1 = entries;
    this.w1u_1 = path;
    var tmp = this.v1u_1.z1();
    var tmp_0 = YamlMap$lambda;
    var keys = sortedWith(tmp, new sam$kotlin_Comparator$0(tmp_0));
    // Inline function 'kotlin.collections.mutableMapOf' call
    var encounteredKeys = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = keys.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.<anonymous>' call
      var duplicate = encounteredKeys.y1(element.v1r_1);
      if (!(duplicate == null)) {
        throw new DuplicateKeyException(duplicate.w1r_1, element.w1r_1, element.m1w());
      }
      // Inline function 'kotlin.collections.set' call
      var key = element.v1r_1;
      encounteredKeys.c2(key, element);
    }
  }
  protoOf(YamlMap).t1u = function () {
    return this.w1u_1;
  };
  protoOf(YamlMap).a1v = function (key) {
    var tmp0 = this.v1u_1.b2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.h();
      while (_iterator__ex2g4s.i()) {
        var element = _iterator__ex2g4s.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.get.<anonymous>' call
        if (element.u1().v1r_1 === key) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1();
    return (tmp == null ? true : tmp instanceof YamlNode) ? tmp : THROW_CCE();
  };
  protoOf(YamlMap).j1w = function (newPath) {
    // Inline function 'kotlin.collections.mapKeys' call
    var this_0 = this.v1u_1;
    // Inline function 'kotlin.collections.mapKeysTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.b2().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.withPath.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.u1();
      var tmp = k.j1w(this.k1w(k, newPath));
      // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
      var tmp$ret$2 = element.v1();
      destination.c2(tmp, tmp$ret$2);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.b2().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.u1();
      // Inline function 'com.charleskorn.kaml.YamlMap.withPath.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var v = element_0.v1();
      var tmp$ret$8 = v.j1w(this.k1w(v, newPath));
      destination_0.c2(tmp_0, tmp$ret$8);
    }
    var updatedEntries = destination_0;
    return new YamlMap(updatedEntries, newPath);
  };
  protoOf(YamlMap).toString = function () {
    var builder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'map @ ' + this.w1u_1.toString() + ' (size: ' + this.v1u_1.k() + ')';
    // Inline function 'kotlin.text.appendLine' call
    builder.t7(value).u7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.v1u_1.b2().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.u1();
      // Inline function 'kotlin.collections.component2' call
      var value_0 = element.v1();
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      builder.t7('- key:').u7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = lines(key.toString()).h();
      while (_iterator__ex2g4s_0.i()) {
        var element_0 = _iterator__ex2g4s_0.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>.<anonymous>' call
        builder.t7('    ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.t7(element_0).u7(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = '  value:';
      // Inline function 'kotlin.text.appendLine' call
      builder.t7(value_1).u7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = lines(toString(value_0)).h();
      while (_iterator__ex2g4s_1.i()) {
        var element_1 = _iterator__ex2g4s_1.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>.<anonymous>' call
        builder.t7('    ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.t7(element_1).u7(_Char___init__impl__6a9atx(10));
      }
    }
    return toString(trimEnd(builder));
  };
  protoOf(YamlMap).z1w = function (entries, path) {
    return new YamlMap(entries, path);
  };
  protoOf(YamlMap).b1v = function (entries, path, $super) {
    entries = entries === VOID ? this.v1u_1 : entries;
    path = path === VOID ? this.w1u_1 : path;
    return $super === VOID ? this.z1w(entries, path) : $super.z1w.call(this, entries, path);
  };
  protoOf(YamlMap).hashCode = function () {
    var result = hashCode(this.v1u_1);
    result = imul(result, 31) + this.w1u_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlMap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlMap))
      return false;
    var tmp0_other_with_cast = other instanceof YamlMap ? other : THROW_CCE();
    if (!equals(this.v1u_1, tmp0_other_with_cast.v1u_1))
      return false;
    if (!this.w1u_1.equals(tmp0_other_with_cast.w1u_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function YamlTaggedNode(tag, innerNode) {
    YamlNode.call(this, innerNode.t1u());
    this.d1v_1 = tag;
    this.e1v_1 = innerNode;
  }
  protoOf(YamlTaggedNode).j1w = function (newPath) {
    return this.a1x(VOID, this.e1v_1.j1w(newPath));
  };
  protoOf(YamlTaggedNode).toString = function () {
    return "tagged '" + this.d1v_1 + "': " + toString(this.e1v_1);
  };
  protoOf(YamlTaggedNode).b1x = function (tag, innerNode) {
    return new YamlTaggedNode(tag, innerNode);
  };
  protoOf(YamlTaggedNode).a1x = function (tag, innerNode, $super) {
    tag = tag === VOID ? this.d1v_1 : tag;
    innerNode = innerNode === VOID ? this.e1v_1 : innerNode;
    return $super === VOID ? this.b1x(tag, innerNode) : $super.b1x.call(this, tag, innerNode);
  };
  protoOf(YamlTaggedNode).hashCode = function () {
    var result = getStringHashCode(this.d1v_1);
    result = imul(result, 31) + hashCode(this.e1v_1) | 0;
    return result;
  };
  protoOf(YamlTaggedNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlTaggedNode))
      return false;
    var tmp0_other_with_cast = other instanceof YamlTaggedNode ? other : THROW_CCE();
    if (!(this.d1v_1 === tmp0_other_with_cast.d1v_1))
      return false;
    if (!equals(this.e1v_1, tmp0_other_with_cast.e1v_1))
      return false;
    return true;
  };
  function readNode($this, path) {
    return readNodeAndAnchor($this, path).te_1;
  }
  function readNodeAndAnchor($this, path) {
    var event = $this.y1q_1.c1x(path);
    var _destruct__k2r9zo = readFromEvent($this, event, path);
    var node = _destruct__k2r9zo.ve();
    var weight = _destruct__k2r9zo.f1x();
    if (event instanceof NodeEvent) {
      if (!(event instanceof AliasEvent)) {
        var tmp0_safe_receiver = event.o1f_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'com.charleskorn.kaml.YamlNodeReader.readNodeAndAnchor.<anonymous>' call
          var tmp = $this.a1r_1;
          if (equals(tmp == null ? null : new UInt(tmp), new UInt(_UInt___init__impl__l7qpdl(0)))) {
            throw new ForbiddenAnchorOrAliasException('Parsing anchors and aliases is disabled.', path);
          }
          var anchor = node.j1w(Companion_getInstance_8().h1x(tmp0_safe_receiver.q1d_1, _get_location__4pgxiu(event, $this)));
          var tmp0 = $this.b1r_1;
          // Inline function 'kotlin.collections.set' call
          var value = new WeightedNode(anchor, weight);
          tmp0.c2(tmp0_safe_receiver, value);
        }
      }
      return to(new WeightedNode(node, weight), event.o1f_1);
    }
    return to(new WeightedNode(node, _UInt___init__impl__l7qpdl(0)), null);
  }
  function readFromEvent($this, event, path) {
    var tmp;
    if (event instanceof ScalarEvent) {
      tmp = new WeightedNode(maybeToTaggedNode(readScalarOrNull($this, event, path), $this, event.p1g_1), _UInt___init__impl__l7qpdl(0));
    } else {
      if (event instanceof SequenceStartEvent) {
        // Inline function 'kotlin.let' call
        // Inline function 'com.charleskorn.kaml.YamlNodeReader.readFromEvent.<anonymous>' call
        var it = readSequence($this, path);
        tmp = it.j1x(maybeToTaggedNode(it.d1x_1, $this, event.j1f_1));
      } else {
        if (event instanceof MappingStartEvent) {
          // Inline function 'kotlin.let' call
          // Inline function 'com.charleskorn.kaml.YamlNodeReader.readFromEvent.<anonymous>' call
          var it_0 = readMapping($this, path);
          tmp = it_0.j1x(maybeToTaggedNode(it_0.d1x_1, $this, event.j1f_1));
        } else {
          if (event instanceof AliasEvent) {
            tmp = readAlias($this, event, path);
          } else {
            throw new MalformedYamlException('Unexpected ' + event.d1f().toString(), path.i1x(_get_location__4pgxiu(event, $this)));
          }
        }
      }
    }
    return tmp;
  }
  function readScalarOrNull($this, event, path) {
    if ((event.r1g_1 === 'null' || event.r1g_1 === '' || event.r1g_1 === '~') && event.t1g()) {
      return new YamlNull(path);
    } else {
      return new YamlScalar(event.r1g_1, path);
    }
  }
  function readSequence($this, path) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var items = ArrayList_init_$Create$_0();
    var sequenceWeight = _UInt___init__impl__l7qpdl(0);
    while (true) {
      var event = $this.y1q_1.k1x(path);
      if (event.d1f().g2_1 === 7) {
        $this.y1q_1.m1x(ID_SequenceEnd_getInstance(), path);
        return new WeightedNode(new YamlList(items, path), sequenceWeight);
      } else {
        var _destruct__k2r9zo = readNode($this, path.l1x(items.k(), _get_location__4pgxiu(event, $this)));
        var node = _destruct__k2r9zo.ve();
        var weight = _destruct__k2r9zo.f1x();
        // Inline function 'kotlin.UInt.plus' call
        var this_0 = sequenceWeight;
        sequenceWeight = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) + _UInt___get_data__impl__f0vqqw(weight) | 0);
        // Inline function 'kotlin.collections.plusAssign' call
        items.e(node);
      }
    }
  }
  function readMapping($this, path) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var items = LinkedHashMap_init_$Create$();
    var mapWeight = _UInt___init__impl__l7qpdl(0);
    while (true) {
      var event = $this.y1q_1.k1x(path);
      if (event.d1f().g2_1 === 4) {
        $this.y1q_1.m1x(ID_MappingEnd_getInstance(), path);
        return new WeightedNode(new YamlMap(doMerges($this, items), path), mapWeight);
      } else {
        var keyLocation = _get_location__4pgxiu($this.y1q_1.k1x(path), $this);
        var key = readMapKey($this, path);
        var keyNode = new YamlScalar(key, path.n1x(key, keyLocation));
        var valueLocation = _get_location__4pgxiu($this.y1q_1.k1x(keyNode.w1r_1), $this);
        var valuePath = isMerge($this, keyNode) ? path.p1x(valueLocation) : keyNode.w1r_1.o1x(valueLocation);
        var _destruct__k2r9zo = readNodeAndAnchor($this, valuePath);
        var weightedNode = _destruct__k2r9zo.ve();
        var anchor = _destruct__k2r9zo.we();
        var tmp0 = mapWeight;
        // Inline function 'kotlin.UInt.plus' call
        var other = weightedNode.e1x_1;
        mapWeight = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) + _UInt___get_data__impl__f0vqqw(other) | 0);
        if (path.equals(Companion_getInstance_8().g1x_1) && !($this.z1q_1 == null) && startsWith(key, $this.z1q_1)) {
          if (anchor == null) {
            throw new NoAnchorForExtensionException(key, $this.z1q_1, path.i1x(_get_location__4pgxiu(event, $this)));
          }
        } else {
          // Inline function 'kotlin.collections.plusAssign' call
          var pair = to(keyNode, weightedNode.d1x_1);
          items.c2(pair.te_1, pair.ue_1);
        }
      }
    }
  }
  function readMapKey($this, path) {
    var event = $this.y1q_1.k1x(path);
    if (event.d1f().g2_1 === 6) {
      $this.y1q_1.m1x(ID_Scalar_getInstance(), path);
      var scalarEvent = event instanceof ScalarEvent ? event : THROW_CCE();
      var isNullKey = (scalarEvent.r1g_1 === 'null' || scalarEvent.r1g_1 === '~') && scalarEvent.t1g();
      if (!(scalarEvent.p1g_1 == null) || isNullKey) {
        throw nonScalarMapKeyException($this, path, event);
      }
      return scalarEvent.r1g_1;
    } else
      throw nonScalarMapKeyException($this, path, event);
  }
  function nonScalarMapKeyException($this, path, event) {
    return new MalformedYamlException("Property name must not be a list, map, null or tagged value. (To use 'null' as a property name, enclose it in quotes.)", path.i1x(_get_location__4pgxiu(event, $this)));
  }
  function maybeToTaggedNode(_this__u8e3s4, $this, tag) {
    var tmp;
    if (tag == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.maybeToTaggedNode.<anonymous>' call
      tmp = new YamlTaggedNode(tag, _this__u8e3s4);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function doMerges($this, items) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = items.b2();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.u1();
      if (isMerge($this, key)) {
        destination.e(element);
      }
    }
    var mergeEntries = destination;
    // Inline function 'kotlin.collections.count' call
    switch (mergeEntries.k()) {
      case 0:
        return items;
      case 1:
        var mappingsToMerge = single(mergeEntries).v1();
        if (mappingsToMerge instanceof YamlList)
          return doMerges_0($this, items, mappingsToMerge.y1u_1);
        else {
          return doMerges_0($this, items, listOf(mappingsToMerge));
        }

      default:
        throw new MalformedYamlException("Cannot perform multiple '<<' merges into a map. Instead, combine all merges into a single '<<' entry.", second(mergeEntries, $this).u1().w1r_1);
    }
  }
  function isMerge($this, key) {
    var tmp;
    if (key instanceof YamlScalar) {
      tmp = key.v1r_1 === '<<';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function doMerges_0($this, original, others) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var merged = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = original.b2().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.u1();
      if (!isMerge($this, key)) {
        destination.c2(element.u1(), element.v1());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.b2().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key_0 = element_0.u1();
      // Inline function 'kotlin.collections.component2' call
      var value = element_0.v1();
      merged.c2(key_0, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = others.h();
    while (_iterator__ex2g4s_1.i()) {
      var element_1 = _iterator__ex2g4s_1.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      if (element_1 instanceof YamlNull)
        throw new MalformedYamlException('Cannot merge a null value into a map.', element_1.t1r_1);
      else {
        if (element_1 instanceof YamlScalar)
          throw new MalformedYamlException('Cannot merge a scalar value into a map.', element_1.w1r_1);
        else {
          if (element_1 instanceof YamlList)
            throw new MalformedYamlException('Cannot merge a list value into a map.', element_1.z1u_1);
          else {
            if (element_1 instanceof YamlTaggedNode)
              throw new MalformedYamlException('Cannot merge a tagged value into a map.', element_1.t1u());
            else {
              if (element_1 instanceof YamlMap) {
                // Inline function 'kotlin.collections.forEach' call
                // Inline function 'kotlin.collections.iterator' call
                var _iterator__ex2g4s_2 = element_1.v1u_1.b2().h();
                while (_iterator__ex2g4s_2.i()) {
                  var element_2 = _iterator__ex2g4s_2.j();
                  // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>.<anonymous>' call
                  // Inline function 'kotlin.collections.component1' call
                  var key_1 = element_2.u1();
                  // Inline function 'kotlin.collections.component2' call
                  var value_0 = element_2.v1();
                  var tmp2 = merged.b2();
                  var tmp$ret$13;
                  $l$block_0: {
                    // Inline function 'kotlin.collections.singleOrNull' call
                    var single = null;
                    var found = false;
                    var _iterator__ex2g4s_3 = tmp2.h();
                    while (_iterator__ex2g4s_3.i()) {
                      var element_3 = _iterator__ex2g4s_3.j();
                      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>.<anonymous>.<anonymous>' call
                      if (element_3.u1().l1w(key_1)) {
                        if (found) {
                          tmp$ret$13 = null;
                          break $l$block_0;
                        }
                        single = element_3;
                        found = true;
                      }
                    }
                    if (!found) {
                      tmp$ret$13 = null;
                      break $l$block_0;
                    }
                    tmp$ret$13 = single;
                  }
                  var existingEntry = tmp$ret$13;
                  if (existingEntry == null) {
                    merged.c2(key_1, value_0);
                  }
                }
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return merged;
  }
  function readAlias($this, event, path) {
    var tmp = $this.a1r_1;
    if (equals(tmp == null ? null : new UInt(tmp), new UInt(_UInt___init__impl__l7qpdl(0)))) {
      throw new ForbiddenAnchorOrAliasException('Parsing anchors and aliases is disabled.', path);
    }
    var anchor = event.c1f_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = $this.b1r_1.y1(anchor);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new UnknownAnchorException(anchor.q1d_1, path.i1x(_get_location__4pgxiu(event, $this)));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var _destruct__k2r9zo = tmp_0;
    var resolvedNode = _destruct__k2r9zo.ve();
    var resolvedNodeWeight = _destruct__k2r9zo.f1x();
    // Inline function 'kotlin.UInt.plus' call
    var other = _UInt___init__impl__l7qpdl(1);
    var resultWeight = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(resolvedNodeWeight) + _UInt___get_data__impl__f0vqqw(other) | 0);
    var tmp_1 = $this;
    // Inline function 'kotlin.UInt.plus' call
    var this_0 = $this.c1r_1;
    tmp_1.c1r_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) + _UInt___get_data__impl__f0vqqw(resultWeight) | 0);
    var tmp_2;
    var tmp_3 = $this.a1r_1;
    if (!((tmp_3 == null ? null : new UInt(tmp_3)) == null)) {
      var tmp6 = $this.c1r_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = $this.a1r_1;
      tmp_2 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp6), _UInt___get_data__impl__f0vqqw(other_0)) > 0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      throw new ForbiddenAnchorOrAliasException('Maximum number of aliases has been reached.', path);
    }
    return new WeightedNode(resolvedNode.j1w(path.q1x(anchor.q1d_1, _get_location__4pgxiu(event, $this)).r1x(anchor.q1d_1, resolvedNode.i1w())), resultWeight);
  }
  function second(_this__u8e3s4, $this) {
    return first(drop(_this__u8e3s4, 1));
  }
  function _get_location__4pgxiu(_this__u8e3s4, $this) {
    return new Location(ensureNotNull(_this__u8e3s4.e1f_1).k1h_1 + 1 | 0, ensureNotNull(_this__u8e3s4.e1f_1).l1h_1 + 1 | 0);
  }
  function YamlNodeReader(parser, extensionDefinitionPrefix, maxAliasCount) {
    extensionDefinitionPrefix = extensionDefinitionPrefix === VOID ? null : extensionDefinitionPrefix;
    maxAliasCount = maxAliasCount === VOID ? _UInt___init__impl__l7qpdl(0) : maxAliasCount;
    this.y1q_1 = parser;
    this.z1q_1 = extensionDefinitionPrefix;
    this.a1r_1 = maxAliasCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b1r_1 = LinkedHashMap_init_$Create$();
    this.c1r_1 = _UInt___init__impl__l7qpdl(0);
  }
  protoOf(YamlNodeReader).d1r = function () {
    return readNode(this, Companion_getInstance_8().g1x_1).d1x_1;
  };
  function WeightedNode(node, weight) {
    this.d1x_1 = node;
    this.e1x_1 = weight;
  }
  protoOf(WeightedNode).ve = function () {
    return this.d1x_1;
  };
  protoOf(WeightedNode).f1x = function () {
    return this.e1x_1;
  };
  protoOf(WeightedNode).s1x = function (node, weight) {
    return new WeightedNode(node, weight);
  };
  protoOf(WeightedNode).j1x = function (node, weight, $super) {
    node = node === VOID ? this.d1x_1 : node;
    weight = weight === VOID ? this.e1x_1 : weight;
    return $super === VOID ? this.s1x(node, weight) : $super.s1x.call(this, node, new UInt(weight));
  };
  protoOf(WeightedNode).toString = function () {
    return 'WeightedNode(node=' + toString(this.d1x_1) + ', weight=' + new UInt(this.e1x_1) + ')';
  };
  protoOf(WeightedNode).hashCode = function () {
    var result = hashCode(this.d1x_1);
    result = imul(result, 31) + UInt__hashCode_impl_z2mhuw(this.e1x_1) | 0;
    return result;
  };
  protoOf(WeightedNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeightedNode))
      return false;
    var tmp0_other_with_cast = other instanceof WeightedNode ? other : THROW_CCE();
    if (!equals(this.d1x_1, tmp0_other_with_cast.d1x_1))
      return false;
    if (!(this.e1x_1 === tmp0_other_with_cast.e1x_1))
      return false;
    return true;
  };
  function YamlNodeSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.yu_1 = plus_0($this$buildSerialDescriptor.yu_1, new Marker());
    return Unit_instance;
  }
  function YamlNodeSerializer() {
    YamlNodeSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.t1x_1 = get_nullable(buildSerialDescriptor('com.charleskorn.kaml.YamlNode', tmp_0, [], YamlNodeSerializer$descriptor$lambda));
  }
  protoOf(YamlNodeSerializer).uu = function () {
    return this.t1x_1;
  };
  protoOf(YamlNodeSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    var tmp;
    if (input instanceof YamlPolymorphicInput) {
      tmp = new YamlTaggedNode(input.y1x_1, input.d1q_1);
    } else {
      tmp = input.d1q_1;
    }
    return tmp;
  };
  var YamlNodeSerializer_instance;
  function YamlNodeSerializer_getInstance() {
    if (YamlNodeSerializer_instance == null)
      new YamlNodeSerializer();
    return YamlNodeSerializer_instance;
  }
  function YamlListDescriptor() {
    YamlListDescriptor_instance = this;
    this.d1y_1 = ListSerializer(YamlNodeSerializer_getInstance()).uu();
    this.e1y_1 = 'com.charleskorn.kaml.YamlList';
  }
  protoOf(YamlListDescriptor).tv = function () {
    return this.e1y_1;
  };
  protoOf(YamlListDescriptor).yv = function (index) {
    return this.d1y_1.yv(index);
  };
  protoOf(YamlListDescriptor).zv = function (index) {
    return this.d1y_1.zv(index);
  };
  protoOf(YamlListDescriptor).uv = function () {
    return this.d1y_1.uv();
  };
  protoOf(YamlListDescriptor).pv = function () {
    return this.d1y_1.pv();
  };
  protoOf(YamlListDescriptor).vv = function () {
    return this.d1y_1.vv();
  };
  protoOf(YamlListDescriptor).wv = function () {
    return this.d1y_1.wv();
  };
  protoOf(YamlListDescriptor).xv = function () {
    return this.d1y_1.xv();
  };
  var YamlListDescriptor_instance;
  function YamlListDescriptor_getInstance() {
    if (YamlListDescriptor_instance == null)
      new YamlListDescriptor();
    return YamlListDescriptor_instance;
  }
  function YamlListSerializer() {
    YamlListSerializer_instance = this;
    this.f1y_1 = YamlListDescriptor_getInstance();
  }
  protoOf(YamlListSerializer).uu = function () {
    return this.f1y_1;
  };
  protoOf(YamlListSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlListInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlListInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return input.j1v_1;
  };
  var YamlListSerializer_instance;
  function YamlListSerializer_getInstance() {
    if (YamlListSerializer_instance == null)
      new YamlListSerializer();
    return YamlListSerializer_instance;
  }
  function YamlMapDescriptor() {
    YamlMapDescriptor_instance = this;
    this.g1y_1 = MapSerializer(YamlScalarSerializer_getInstance(), YamlNodeSerializer_getInstance()).uu();
    this.h1y_1 = 'com.charleskorn.kaml.YamlMap';
  }
  protoOf(YamlMapDescriptor).tv = function () {
    return this.h1y_1;
  };
  protoOf(YamlMapDescriptor).yv = function (index) {
    return this.g1y_1.yv(index);
  };
  protoOf(YamlMapDescriptor).zv = function (index) {
    return this.g1y_1.zv(index);
  };
  protoOf(YamlMapDescriptor).uv = function () {
    return this.g1y_1.uv();
  };
  protoOf(YamlMapDescriptor).pv = function () {
    return this.g1y_1.pv();
  };
  protoOf(YamlMapDescriptor).vv = function () {
    return this.g1y_1.vv();
  };
  protoOf(YamlMapDescriptor).wv = function () {
    return this.g1y_1.wv();
  };
  protoOf(YamlMapDescriptor).xv = function () {
    return this.g1y_1.xv();
  };
  var YamlMapDescriptor_instance;
  function YamlMapDescriptor_getInstance() {
    if (YamlMapDescriptor_instance == null)
      new YamlMapDescriptor();
    return YamlMapDescriptor_instance;
  }
  function YamlMapSerializer() {
    YamlMapSerializer_instance = this;
    this.i1y_1 = YamlMapDescriptor_getInstance();
  }
  protoOf(YamlMapSerializer).uu = function () {
    return this.i1y_1;
  };
  protoOf(YamlMapSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlMapInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlMapInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    var tmp = input.d1q_1;
    return tmp instanceof YamlMap ? tmp : THROW_CCE();
  };
  var YamlMapSerializer_instance;
  function YamlMapSerializer_getInstance() {
    if (YamlMapSerializer_instance == null)
      new YamlMapSerializer();
    return YamlMapSerializer_instance;
  }
  function YamlNullSerializer() {
    YamlNullSerializer_instance = this;
    this.j1y_1 = buildSerialDescriptor('com.charleskorn.kaml.YamlNull', ENUM_getInstance(), []);
  }
  protoOf(YamlNullSerializer).uu = function () {
    return this.j1y_1;
  };
  protoOf(YamlNullSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlNullInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlNullInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return input.o1y_1;
  };
  var YamlNullSerializer_instance;
  function YamlNullSerializer_getInstance() {
    if (YamlNullSerializer_instance == null)
      new YamlNullSerializer();
    return YamlNullSerializer_instance;
  }
  function YamlScalarSerializer() {
    YamlScalarSerializer_instance = this;
    this.p1y_1 = PrimitiveSerialDescriptor('com.charleskorn.kaml.YamlScalar', STRING_getInstance());
  }
  protoOf(YamlScalarSerializer).uu = function () {
    return this.p1y_1;
  };
  protoOf(YamlScalarSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlScalarInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlScalarInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var result = tmp$ret$1;
    return result.u1y_1;
  };
  var YamlScalarSerializer_instance;
  function YamlScalarSerializer_getInstance() {
    if (YamlScalarSerializer_instance == null)
      new YamlScalarSerializer();
    return YamlScalarSerializer_instance;
  }
  function YamlTaggedNodeSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.ev('tag', serializer(StringCompanionObject_instance).uu());
    $this$buildSerialDescriptor.ev('node', YamlNodeSerializer_getInstance().t1x_1);
    return Unit_instance;
  }
  function YamlTaggedNodeSerializer() {
    YamlTaggedNodeSerializer_instance = this;
    var tmp = this;
    var tmp_0 = OPEN_getInstance();
    tmp.v1y_1 = buildSerialDescriptor('com.charleskorn.kaml.YamlTaggedNode', tmp_0, [], YamlTaggedNodeSerializer$descriptor$lambda);
  }
  protoOf(YamlTaggedNodeSerializer).uu = function () {
    return this.v1y_1;
  };
  protoOf(YamlTaggedNodeSerializer).vu = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlPolymorphicInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlPolymorphicInput).w9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return new YamlTaggedNode(input.y1x_1, input.a1y_1);
  };
  var YamlTaggedNodeSerializer_instance;
  function YamlTaggedNodeSerializer_getInstance() {
    if (YamlTaggedNodeSerializer_instance == null)
      new YamlTaggedNodeSerializer();
    return YamlTaggedNodeSerializer_instance;
  }
  function YamlNullInput(nullValue, yaml, context, configuration) {
    YamlInput.call(this, nullValue, yaml, context, configuration);
    this.o1y_1 = nullValue;
  }
  protoOf(YamlNullInput).yw = function () {
    return false;
  };
  protoOf(YamlNullInput).xw = function () {
    throw new UnexpectedNullValueException(this.o1y_1.t1r_1);
  };
  protoOf(YamlNullInput).dy = function (descriptor) {
    throw new UnexpectedNullValueException(this.o1y_1.t1r_1);
  };
  protoOf(YamlNullInput).mx = function (descriptor) {
    throw new UnexpectedNullValueException(this.o1y_1.t1r_1);
  };
  protoOf(YamlNullInput).cy = function (descriptor) {
    return -1;
  };
  function _get_pairedPropertyNames__11quvr($this) {
    var tmp = $this.f1z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('pairedPropertyNames');
    }
  }
  function YamlObjectInput$beginStructure$lambda($descriptor) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.mx($descriptor);
    };
  }
  function YamlObjectInput(map, yaml, context, configuration) {
    YamlMapLikeInputBase.call(this, map, yaml, context, configuration);
    this.d1z_1 = toList(map.v1u_1.b2());
    this.e1z_1 = 0;
  }
  protoOf(YamlObjectInput).cy = function (descriptor) {
    if (!!(this.f1z_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.collections.associateBy' call
      var this_0 = until(0, descriptor.wv());
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateByTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var inductionVariable = this_0.y_1;
      var last = this_0.z_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.charleskorn.kaml.YamlObjectInput.decodeElementIndex.<anonymous>' call
          var index = element;
          var elementName = descriptor.yv(index);
          var tmp0_safe_receiver = this.g1q_1.u1q_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1z(elementName);
          var tmp$ret$0 = tmp1_elvis_lhs == null ? elementName : tmp1_elvis_lhs;
          destination.c2(tmp$ret$0, element);
        }
         while (!(element === last));
      tmp.f1z_1 = destination;
    }
    $l$loop: while (true) {
      if (this.e1z_1 === this.d1z_1.k()) {
        return -1;
      }
      var currentEntry = this.d1z_1.p(this.e1z_1);
      this.b1w_1 = currentEntry.u1();
      var tmp0_elvis_lhs = _get_pairedPropertyNames__11quvr(this).y1(this.d1w());
      var fieldDescriptorIndex = tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
      if (fieldDescriptorIndex === -3) {
        if (this.g1q_1.i1q_1) {
          throw new UnknownPropertyException(this.d1w(), _get_pairedPropertyNames__11quvr(this).z1(), this.e1w().w1r_1);
        } else {
          this.e1z_1 = this.e1z_1 + 1 | 0;
          continue $l$loop;
        }
      }
      try {
        this.a1w_1 = Companion_getInstance_1().c1q(this.d1z_1.p(this.e1z_1).v1(), this.e1q_1, this.ay(), this.g1q_1, descriptor.zv(fieldDescriptorIndex));
      } catch ($p) {
        if ($p instanceof IncorrectTypeException) {
          var e = $p;
          throw new InvalidPropertyValueException(this.d1w(), e.x8(), e.y1r_1, e);
        } else {
          throw $p;
        }
      }
      this.c1w_1 = true;
      this.e1z_1 = this.e1z_1 + 1 | 0;
      return fieldDescriptorIndex;
    }
  };
  protoOf(YamlObjectInput).mx = function (descriptor) {
    if (this.g1w()) {
      return this.f1w(YamlObjectInput$beginStructure$lambda(descriptor));
    }
    return protoOf(YamlMapLikeInputBase).mx.call(this, descriptor);
  };
  function checkEvent($this, path, retrieve) {
    try {
      return retrieve();
    } catch ($p) {
      if ($p instanceof MarkedYamlEngineException) {
        var e = $p;
        throw translateYamlEngineException($this, e, path);
      } else {
        throw $p;
      }
    }
  }
  function translateYamlEngineException($this, e, path) {
    var updatedMessage = StringBuilder_init_$Create$();
    var context = e.q1h_1;
    var contextMark = e.r1h_1;
    if (!(context == null) && !(contextMark == null)) {
      var snippet = contextMark.o1h(4, 2147483647);
      updatedMessage.t7(trimMargin('\n                    |' + context + '\n                    | at line ' + (contextMark.k1h_1 + 1 | 0) + ', column ' + (contextMark.l1h_1 + 1 | 0) + ':\n                    |' + snippet + '\n                    |\n                '));
    }
    var problemMark = e.t1h_1;
    if (!(problemMark == null)) {
      var problem = translateYamlEngineExceptionMessage($this, e.s1h_1);
      var snippet_0 = problemMark.o1h(4, 2147483647);
      updatedMessage.t7(trimMargin('\n                    |' + problem + '\n                    | at line ' + (problemMark.k1h_1 + 1 | 0) + ', column ' + (problemMark.l1h_1 + 1 | 0) + ':\n                    |' + snippet_0 + '\n                '));
    }
    var tmp;
    if (!(problemMark == null)) {
      tmp = path.i1x(new Location(problemMark.k1h_1 + 1 | 0, problemMark.l1h_1 + 1 | 0));
    } else {
      tmp = path;
    }
    var updatedPath = tmp;
    return new MalformedYamlException(updatedMessage.toString(), updatedPath);
  }
  function translateYamlEngineExceptionMessage($this, message) {
    switch (message) {
      case 'mapping values are not allowed here':
      case "expected <block end>, but found '<block sequence start>'":
      case "expected <block end>, but found '<block mapping start>'":
        return message + ' (is the indentation level of this line or a line nearby incorrect?)';
      default:
        return message;
    }
  }
  function YamlParser$consumeEvent$lambda(this$0) {
    return function () {
      return this$0.h1r_1.j();
    };
  }
  function YamlParser$peekEvent$lambda(this$0) {
    return function () {
      return this$0.h1r_1.w1l();
    };
  }
  function YamlParser(reader, codePointLimit) {
    codePointLimit = codePointLimit === VOID ? null : codePointLimit;
    this.e1r_1 = 'DUMMY_FILE_NAME';
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Companion_instance.cz();
    // Inline function 'com.charleskorn.kaml.YamlParser.loadSettings.<anonymous>' call
    if (!(codePointLimit == null)) {
      this_0.m1d(codePointLimit);
    }
    this_0.l1d(this.e1r_1);
    tmp.f1r_1 = this_0.n1d();
    this.g1r_1 = new StreamReader(this.f1r_1, reader);
    this.h1r_1 = ParserImpl_init_$Create$(this.f1r_1, this.g1r_1);
    this.m1x(ID_StreamStart_getInstance(), Companion_getInstance_8().g1x_1);
    if (this.k1x(Companion_getInstance_8().g1x_1).d1f().equals(ID_StreamEnd_getInstance())) {
      throw new EmptyYamlDocumentException('The YAML document is empty.', Companion_getInstance_8().g1x_1);
    }
    this.m1x(ID_DocumentStart_getInstance(), Companion_getInstance_8().g1x_1);
  }
  protoOf(YamlParser).i1r = function () {
    this.m1x(ID_DocumentEnd_getInstance(), Companion_getInstance_8().g1x_1);
    this.m1x(ID_StreamEnd_getInstance(), Companion_getInstance_8().g1x_1);
  };
  protoOf(YamlParser).c1x = function (path) {
    return checkEvent(this, path, YamlParser$consumeEvent$lambda(this));
  };
  protoOf(YamlParser).k1x = function (path) {
    return checkEvent(this, path, YamlParser$peekEvent$lambda(this));
  };
  protoOf(YamlParser).m1x = function (type, path) {
    var event = this.c1x(path);
    if (!event.d1f().equals(type)) {
      throw new MalformedYamlException('Unexpected ' + event.d1f().toString() + ', expected ' + type.toString(), path.i1x(new Location(ensureNotNull(event.e1f_1).k1h_1, ensureNotNull(event.e1f_1).l1h_1)));
    }
  };
  function YamlPath_init_$Init$(segments, $this) {
    YamlPath.call($this, toList_0(segments));
    return $this;
  }
  function YamlPath_init_$Create$(segments) {
    return YamlPath_init_$Init$(segments, objectCreate(protoOf(YamlPath)));
  }
  function withSegment($this, segment) {
    return new YamlPath(plus_0($this.d1s_1, segment));
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.g1x_1 = YamlPath_init_$Create$([Root_getInstance()]);
  }
  protoOf(Companion_7).h1x = function (name, location) {
    return YamlPath_init_$Create$([new AliasDefinition(name, location)]);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function YamlPath(segments) {
    Companion_getInstance_8();
    this.d1s_1 = segments;
    if (this.d1s_1.q()) {
      throw IllegalArgumentException_init_$Create$('Path must contain at least one segment.');
    }
    var tmp;
    var tmp_0 = first(this.d1s_1);
    if (!(tmp_0 instanceof Root)) {
      var tmp_1 = first(this.d1s_1);
      tmp = !(tmp_1 instanceof AliasDefinition);
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('First element of path must be root segment or alias definition.');
    }
    if (drop(this.d1s_1, 1).o1(Root_getInstance())) {
      throw IllegalArgumentException_init_$Create$('Root segment can only be first element of path.');
    }
    this.e1s_1 = last(this.d1s_1).i1w();
  }
  protoOf(YamlPath).i1x = function (location) {
    return withSegment(this, new Error_0(location));
  };
  protoOf(YamlPath).l1x = function (index, location) {
    return withSegment(this, new ListEntry(index, location));
  };
  protoOf(YamlPath).n1x = function (key, location) {
    return withSegment(this, new MapElementKey(key, location));
  };
  protoOf(YamlPath).o1x = function (location) {
    return withSegment(this, new MapElementValue(location));
  };
  protoOf(YamlPath).q1x = function (name, location) {
    return withSegment(this, new AliasReference(name, location));
  };
  protoOf(YamlPath).r1x = function (name, location) {
    return withSegment(this, new AliasDefinition(name, location));
  };
  protoOf(YamlPath).p1x = function (location) {
    return withSegment(this, new Merge(location));
  };
  protoOf(YamlPath).f1s = function () {
    var builder = StringBuilder_init_$Create$();
    var nextSegmentIndex = 1;
    while (nextSegmentIndex <= get_lastIndex(this.d1s_1)) {
      var segmentIndex = nextSegmentIndex;
      nextSegmentIndex = nextSegmentIndex + 1 | 0;
      var segment = this.d1s_1.p(segmentIndex);
      if (segment instanceof ListEntry) {
        builder.u7(_Char___init__impl__6a9atx(91));
        builder.jb(segment.j1z_1);
        builder.u7(_Char___init__impl__6a9atx(93));
      } else {
        if (segment instanceof MapElementKey) {
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(builder) > 0) {
            builder.u7(_Char___init__impl__6a9atx(46));
          }
          builder.t7(segment.p1z_1);
        } else {
          if (segment instanceof AliasReference) {
            builder.t7('->&');
            builder.t7(segment.m1z_1);
          } else {
            if (segment instanceof Merge) {
              builder.t7('>>(merged');
              var tmp;
              if (nextSegmentIndex <= get_lastIndex(this.d1s_1)) {
                var tmp_0 = this.d1s_1.p(nextSegmentIndex);
                tmp = tmp_0 instanceof ListEntry;
              } else {
                tmp = false;
              }
              if (tmp) {
                builder.t7(' entry ');
                var tmp_1 = this.d1s_1.p(nextSegmentIndex);
                builder.jb((tmp_1 instanceof ListEntry ? tmp_1 : THROW_CCE()).j1z_1);
                nextSegmentIndex = nextSegmentIndex + 1 | 0;
              }
              var tmp_2;
              if (nextSegmentIndex <= get_lastIndex(this.d1s_1)) {
                var tmp_3 = this.d1s_1.p(nextSegmentIndex);
                tmp_2 = tmp_3 instanceof AliasReference;
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                builder.t7(' &');
                var tmp_4 = this.d1s_1.p(nextSegmentIndex);
                builder.t7((tmp_4 instanceof AliasReference ? tmp_4 : THROW_CCE()).m1z_1);
                nextSegmentIndex = nextSegmentIndex + 1 | 0;
              }
              builder.t7(')');
            } else {
              var tmp_5;
              var tmp_6;
              if (segment instanceof Root) {
                tmp_6 = true;
              } else {
                tmp_6 = segment instanceof Error_0;
              }
              if (tmp_6) {
                tmp_5 = true;
              } else {
                var tmp_7;
                if (segment instanceof MapElementValue) {
                  tmp_7 = true;
                } else {
                  tmp_7 = segment instanceof AliasDefinition;
                }
                tmp_5 = tmp_7;
              }
              if (!tmp_5) {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(builder) > 0) {
      return builder.toString();
    }
    return '<root>';
  };
  protoOf(YamlPath).toString = function () {
    return 'YamlPath(segments=' + toString(this.d1s_1) + ')';
  };
  protoOf(YamlPath).hashCode = function () {
    return hashCode(this.d1s_1);
  };
  protoOf(YamlPath).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlPath))
      return false;
    var tmp0_other_with_cast = other instanceof YamlPath ? other : THROW_CCE();
    if (!equals(this.d1s_1, tmp0_other_with_cast.d1s_1))
      return false;
    return true;
  };
  function Root() {
    Root_instance = this;
    YamlPathSegment.call(this, new Location(1, 1));
  }
  var Root_instance;
  function Root_getInstance() {
    if (Root_instance == null)
      new Root();
    return Root_instance;
  }
  function ListEntry(index, location) {
    YamlPathSegment.call(this, location);
    this.j1z_1 = index;
    this.k1z_1 = location;
  }
  protoOf(ListEntry).i1w = function () {
    return this.k1z_1;
  };
  protoOf(ListEntry).toString = function () {
    return 'ListEntry(index=' + this.j1z_1 + ', location=' + this.k1z_1.toString() + ')';
  };
  protoOf(ListEntry).hashCode = function () {
    var result = this.j1z_1;
    result = imul(result, 31) + this.k1z_1.hashCode() | 0;
    return result;
  };
  protoOf(ListEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListEntry))
      return false;
    var tmp0_other_with_cast = other instanceof ListEntry ? other : THROW_CCE();
    if (!(this.j1z_1 === tmp0_other_with_cast.j1z_1))
      return false;
    if (!this.k1z_1.equals(tmp0_other_with_cast.k1z_1))
      return false;
    return true;
  };
  function MapElementKey(key, location) {
    YamlPathSegment.call(this, location);
    this.p1z_1 = key;
    this.q1z_1 = location;
  }
  protoOf(MapElementKey).i1w = function () {
    return this.q1z_1;
  };
  protoOf(MapElementKey).toString = function () {
    return 'MapElementKey(key=' + this.p1z_1 + ', location=' + this.q1z_1.toString() + ')';
  };
  protoOf(MapElementKey).hashCode = function () {
    var result = getStringHashCode(this.p1z_1);
    result = imul(result, 31) + this.q1z_1.hashCode() | 0;
    return result;
  };
  protoOf(MapElementKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapElementKey))
      return false;
    var tmp0_other_with_cast = other instanceof MapElementKey ? other : THROW_CCE();
    if (!(this.p1z_1 === tmp0_other_with_cast.p1z_1))
      return false;
    if (!this.q1z_1.equals(tmp0_other_with_cast.q1z_1))
      return false;
    return true;
  };
  function MapElementValue(location) {
    YamlPathSegment.call(this, location);
    this.s1z_1 = location;
  }
  protoOf(MapElementValue).i1w = function () {
    return this.s1z_1;
  };
  protoOf(MapElementValue).toString = function () {
    return 'MapElementValue(location=' + this.s1z_1.toString() + ')';
  };
  protoOf(MapElementValue).hashCode = function () {
    return this.s1z_1.hashCode();
  };
  protoOf(MapElementValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapElementValue))
      return false;
    var tmp0_other_with_cast = other instanceof MapElementValue ? other : THROW_CCE();
    if (!this.s1z_1.equals(tmp0_other_with_cast.s1z_1))
      return false;
    return true;
  };
  function AliasReference(name, location) {
    YamlPathSegment.call(this, location);
    this.m1z_1 = name;
    this.n1z_1 = location;
  }
  protoOf(AliasReference).i1w = function () {
    return this.n1z_1;
  };
  protoOf(AliasReference).toString = function () {
    return 'AliasReference(name=' + this.m1z_1 + ', location=' + this.n1z_1.toString() + ')';
  };
  protoOf(AliasReference).hashCode = function () {
    var result = getStringHashCode(this.m1z_1);
    result = imul(result, 31) + this.n1z_1.hashCode() | 0;
    return result;
  };
  protoOf(AliasReference).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AliasReference))
      return false;
    var tmp0_other_with_cast = other instanceof AliasReference ? other : THROW_CCE();
    if (!(this.m1z_1 === tmp0_other_with_cast.m1z_1))
      return false;
    if (!this.n1z_1.equals(tmp0_other_with_cast.n1z_1))
      return false;
    return true;
  };
  function AliasDefinition(name, location) {
    YamlPathSegment.call(this, location);
    this.u1z_1 = name;
    this.v1z_1 = location;
  }
  protoOf(AliasDefinition).i1w = function () {
    return this.v1z_1;
  };
  protoOf(AliasDefinition).toString = function () {
    return 'AliasDefinition(name=' + this.u1z_1 + ', location=' + this.v1z_1.toString() + ')';
  };
  protoOf(AliasDefinition).hashCode = function () {
    var result = getStringHashCode(this.u1z_1);
    result = imul(result, 31) + this.v1z_1.hashCode() | 0;
    return result;
  };
  protoOf(AliasDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AliasDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof AliasDefinition ? other : THROW_CCE();
    if (!(this.u1z_1 === tmp0_other_with_cast.u1z_1))
      return false;
    if (!this.v1z_1.equals(tmp0_other_with_cast.v1z_1))
      return false;
    return true;
  };
  function Merge(location) {
    YamlPathSegment.call(this, location);
    this.x1z_1 = location;
  }
  protoOf(Merge).i1w = function () {
    return this.x1z_1;
  };
  protoOf(Merge).toString = function () {
    return 'Merge(location=' + this.x1z_1.toString() + ')';
  };
  protoOf(Merge).hashCode = function () {
    return this.x1z_1.hashCode();
  };
  protoOf(Merge).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Merge))
      return false;
    var tmp0_other_with_cast = other instanceof Merge ? other : THROW_CCE();
    if (!this.x1z_1.equals(tmp0_other_with_cast.x1z_1))
      return false;
    return true;
  };
  function Error_0(location) {
    YamlPathSegment.call(this, location);
    this.z1z_1 = location;
  }
  protoOf(Error_0).i1w = function () {
    return this.z1z_1;
  };
  protoOf(Error_0).toString = function () {
    return 'Error(location=' + this.z1z_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return this.z1z_1.hashCode();
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!this.z1z_1.equals(tmp0_other_with_cast.z1z_1))
      return false;
    return true;
  };
  function YamlPathSegment(location) {
    this.h1z_1 = location;
  }
  protoOf(YamlPathSegment).i1w = function () {
    return this.h1z_1;
  };
  var CurrentField_NotStarted_instance;
  var CurrentField_Type_instance;
  var CurrentField_Content_instance;
  var CurrentField_entriesInitialized;
  function CurrentField_initEntries() {
    if (CurrentField_entriesInitialized)
      return Unit_instance;
    CurrentField_entriesInitialized = true;
    CurrentField_NotStarted_instance = new CurrentField('NotStarted', 0);
    CurrentField_Type_instance = new CurrentField('Type', 1);
    CurrentField_Content_instance = new CurrentField('Content', 2);
  }
  function _get_contentDecoder__ypxfj4($this) {
    var tmp = $this.c1y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('contentDecoder');
    }
  }
  function throwIfUnknownPolymorphicTypeException($this, e, deserializer) {
    var tmp0_elvis_lhs = e.message;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var message = tmp;
    var tmp1_elvis_lhs = Companion_getInstance_9().a20_1.bc(message, 0);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var match = tmp_0;
    var unknownType = match.ad().p(1);
    var className = match.ad().p(2);
    var tmp2_subject = deserializer.uu().uv();
    var tmp_1;
    if (equals(tmp2_subject, SEALED_getInstance())) {
      tmp_1 = getKnownTypesForSealedType($this, deserializer);
    } else if (equals(tmp2_subject, OPEN_getInstance())) {
      tmp_1 = getKnownTypesForOpenType($this, className);
    } else {
      throw IllegalArgumentException_init_$Create$("Can't get known types for descriptor of kind " + deserializer.uu().uv().toString());
    }
    var knownTypes = tmp_1;
    throw new UnknownPolymorphicTypeException(unknownType, knownTypes, $this.z1x_1, e);
  }
  function getKnownTypesForSealedType($this, deserializer) {
    var typesDescriptor = deserializer.uu().zv(1);
    return toSet(get_elementNames(typesDescriptor));
  }
  function getKnownTypesForOpenType($this, className) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var knownTypes = LinkedHashSet_init_$Create$();
    var tmp = $this.ay();
    tmp.a18(new YamlPolymorphicInput$getKnownTypesForOpenType$1(className, knownTypes));
    return knownTypes;
  }
  function CurrentField(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = "^Serializer for subclass '(.*)' is not found in the polymorphic scope of '(.*)'.\\n.*";
    tmp.a20_1 = Regex_init_$Create$(this_0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function YamlPolymorphicInput$getKnownTypesForOpenType$1($className, $knownTypes) {
    this.b20_1 = $className;
    this.c20_1 = $knownTypes;
  }
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).j18 = function (kClass, provider) {
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).m18 = function (baseClass, actualClass, actualSerializer) {
    if (baseClass.w9() === this.b20_1) {
      this.c20_1.e(actualSerializer.uu().tv());
    }
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).n18 = function (baseClass, defaultSerializerProvider) {
    throw UnsupportedOperationException_init_$Create$('This method should never be called.');
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).o18 = function (baseClass, defaultDeserializerProvider) {
    throw UnsupportedOperationException_init_$Create$('This method should never be called');
  };
  function CurrentField_NotStarted_getInstance() {
    CurrentField_initEntries();
    return CurrentField_NotStarted_instance;
  }
  function CurrentField_Type_getInstance() {
    CurrentField_initEntries();
    return CurrentField_Type_instance;
  }
  function CurrentField_Content_getInstance() {
    CurrentField_initEntries();
    return CurrentField_Content_instance;
  }
  function YamlPolymorphicInput(typeName, typeNamePath, contentNode, yaml, context, configuration) {
    Companion_getInstance_9();
    YamlInput.call(this, contentNode, yaml, context, configuration);
    this.y1x_1 = typeName;
    this.z1x_1 = typeNamePath;
    this.a1y_1 = contentNode;
    this.b1y_1 = CurrentField_NotStarted_getInstance();
  }
  protoOf(YamlPolymorphicInput).cy = function (descriptor) {
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
        this.b1y_1 = CurrentField_Type_getInstance();
        tmp = 0;
        break;
      case 1:
        var tmp1_subject = this.a1y_1;
        if (tmp1_subject instanceof YamlScalar)
          this.c1y_1 = new YamlScalarInput(this.a1y_1, this.e1q_1, this.ay(), this.g1q_1);
        else {
          if (tmp1_subject instanceof YamlNull)
            this.c1y_1 = new YamlNullInput(this.a1y_1, this.e1q_1, this.ay(), this.g1q_1);
        }

        this.b1y_1 = CurrentField_Content_getInstance();
        tmp = 1;
        break;
      case 2:
        tmp = -1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).yw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNotNullMark.<anonymous>' call

        tmp = true;
        break;
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNotNullMark.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).yw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).zw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeNull';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNull.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).zw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).ax = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeBoolean';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeBoolean.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).ax();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).bx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeByte';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeByte.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).bx();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).cx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeShort';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeShort.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).cx();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).dx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeInt';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeInt.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).dx();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).ex = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeLong';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeLong.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).ex();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).fx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeFloat';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeFloat.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).fx();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).gx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeDouble';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeDouble.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).gx();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).hx = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeChar';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeChar.stub_for_inlining' call

        var tmp$ret$0 = _get_contentDecoder__ypxfj4(this).hx();
        tmp = new Char(tmp$ret$0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp.c1_1;
  };
  protoOf(YamlPolymorphicInput).ix = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeString.<anonymous>' call

        tmp = this.y1x_1;
        break;
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeString.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).ix();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).mx = function (descriptor) {
    var tmp;
    switch (this.b1y_1.g2_1) {
      case 0:
      case 1:
        tmp = protoOf(YamlInput).mx.call(this, descriptor);
        break;
      case 2:
        this.c1y_1 = Companion_getInstance_1().c1q(this.a1y_1, this.e1q_1, this.ay(), this.g1q_1, descriptor);
        return _get_contentDecoder__ypxfj4(this);
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).lx = function (deserializer) {
    try {
      return protoOf(YamlInput).lx.call(this, deserializer);
    } catch ($p) {
      if ($p instanceof SerializationException) {
        var e = $p;
        throwIfUnknownPolymorphicTypeException(this, e, deserializer);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  function YamlScalarInput(scalar, yaml, context, configuration) {
    YamlInput.call(this, scalar, yaml, context, configuration);
    this.u1y_1 = scalar;
  }
  protoOf(YamlScalarInput).ix = function () {
    return this.u1y_1.v1r_1;
  };
  protoOf(YamlScalarInput).dx = function () {
    return this.u1y_1.z2();
  };
  protoOf(YamlScalarInput).ex = function () {
    return this.u1y_1.p1w();
  };
  protoOf(YamlScalarInput).cx = function () {
    return this.u1y_1.o1w();
  };
  protoOf(YamlScalarInput).bx = function () {
    return this.u1y_1.n1w();
  };
  protoOf(YamlScalarInput).gx = function () {
    return this.u1y_1.a3();
  };
  protoOf(YamlScalarInput).fx = function () {
    return this.u1y_1.q1w();
  };
  protoOf(YamlScalarInput).ax = function () {
    return this.u1y_1.s1w();
  };
  protoOf(YamlScalarInput).hx = function () {
    return this.u1y_1.u1w();
  };
  protoOf(YamlScalarInput).cy = function (descriptor) {
    return 0;
  };
  function bufferedSource(_this__u8e3s4) {
    return (new Buffer()).z1a(Companion_getInstance().x19(_this__u8e3s4));
  }
  //region block: post-declaration
  defineProp(protoOf(YamlException), 'message', function () {
    return this.x8();
  });
  defineProp(protoOf(YamlException), 'cause', function () {
    return this.y8();
  });
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).l18 = contextual;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IncorrectTypeException;
  _.$_$.b = Companion_getInstance_0;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./snakeyaml-engine-kmp.js'), require('./okio-parent-okio.js')));

//# sourceMappingURL=kaml.js.map

(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_it_krzeminski_snakeyaml_engine_kmp, kotlin_com_squareup_okio_okio) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.v8;
  var THROW_CCE = kotlin_kotlin.$_$.gb;
  var initMetadataForClass = kotlin_kotlin.$_$.z7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.a8;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.f;
  var toString = kotlin_kotlin.$_$.y8;
  var toString_0 = kotlin_kotlin.$_$.cc;
  var getBooleanHashCode = kotlin_kotlin.$_$.v7;
  var getStringHashCode = kotlin_kotlin.$_$.x7;
  var hashCode = kotlin_kotlin.$_$.y7;
  var equals = kotlin_kotlin.$_$.t7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var initMetadataForObject = kotlin_kotlin.$_$.e8;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var Enum = kotlin_kotlin.$_$.wa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.zb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.l7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var defineProp = kotlin_kotlin.$_$.s7;
  var sorted = kotlin_kotlin.$_$.c6;
  var joinToString = kotlin_kotlin.$_$.q5;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var Collection = kotlin_kotlin.$_$.a4;
  var isInterface = kotlin_kotlin.$_$.n8;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CLASS = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CONTEXTUAL = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MAP = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var LIST = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.wb;
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
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.bc;
  var toList = kotlin_kotlin.$_$.g6;
  var Char = kotlin_kotlin.$_$.ta;
  var drop = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.w5;
  var startsWith = kotlin_kotlin.$_$.ca;
  var NumberFormatException = kotlin_kotlin.$_$.cb;
  var toByte = kotlin_kotlin.$_$.fa;
  var toShort = kotlin_kotlin.$_$.la;
  var toInt = kotlin_kotlin.$_$.ja;
  var toLong = kotlin_kotlin.$_$.ka;
  var toDouble = kotlin_kotlin.$_$.ha;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.ab;
  var singleOrNull = kotlin_kotlin.$_$.ba;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var checkIndexOverflow = kotlin_kotlin.$_$.q4;
  var lines = kotlin_kotlin.$_$.y9;
  var trimEnd = kotlin_kotlin.$_$.na;
  var FunctionAdapter = kotlin_kotlin.$_$.i7;
  var Comparator = kotlin_kotlin.$_$.va;
  var compareTo = kotlin_kotlin.$_$.r7;
  var sortedWith = kotlin_kotlin.$_$.b6;
  var mapCapacity = kotlin_kotlin.$_$.u5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var UInt = kotlin_kotlin.$_$.mb;
  var AliasEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.j;
  var to = kotlin_kotlin.$_$.dc;
  var NodeEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.l;
  var MappingStartEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.k;
  var SequenceStartEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.n;
  var ScalarEvent = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var ID_SequenceEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.e;
  var ID_MappingEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.c;
  var ID_Scalar_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.d;
  var single = kotlin_kotlin.$_$.a6;
  var listOf = kotlin_kotlin.$_$.t5;
  var uintCompare = kotlin_kotlin.$_$.ec;
  var first = kotlin_kotlin.$_$.n5;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.n2;
  var plus_0 = kotlin_kotlin.$_$.x5;
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
  var until = kotlin_kotlin.$_$.c9;
  var coerceAtLeast = kotlin_kotlin.$_$.z8;
  var MarkedYamlEngineException = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.o;
  var trimMargin = kotlin_kotlin.$_$.pa;
  var Companion_instance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.i;
  var StreamReader = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.p;
  var ParserImpl_init_$Create$ = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.h;
  var ID_StreamStart_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.g;
  var ID_StreamEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.f;
  var ID_DocumentStart_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.b;
  var ID_DocumentEnd_getInstance = kotlin_it_krzeminski_snakeyaml_engine_kmp.$_$.a;
  var toList_0 = kotlin_kotlin.$_$.h6;
  var objectCreate = kotlin_kotlin.$_$.u8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var last = kotlin_kotlin.$_$.s5;
  var get_lastIndex = kotlin_kotlin.$_$.r5;
  var charSequenceLength = kotlin_kotlin.$_$.p7;
  var get_elementNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toSet = kotlin_kotlin.$_$.l6;
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
    this.r1o_1 = line;
    this.s1o_1 = column;
  }
  protoOf(Location).toString = function () {
    return 'Location(line=' + this.r1o_1 + ', column=' + this.s1o_1 + ')';
  };
  protoOf(Location).hashCode = function () {
    var result = this.r1o_1;
    result = imul(result, 31) + this.s1o_1 | 0;
    return result;
  };
  protoOf(Location).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Location))
      return false;
    var tmp0_other_with_cast = other instanceof Location ? other : THROW_CCE();
    if (!(this.r1o_1 === tmp0_other_with_cast.r1o_1))
      return false;
    if (!(this.s1o_1 === tmp0_other_with_cast.s1o_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.t1o_1 = new Yaml();
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
    this.u1o_1 = serializersModule;
    this.v1o_1 = configuration;
  }
  protoOf(Yaml).yw = function () {
    return this.u1o_1;
  };
  protoOf(Yaml).w1o = function (deserializer, string) {
    return this.x1o(deserializer, bufferedSource(string));
  };
  protoOf(Yaml).x1o = function (deserializer, source) {
    var rootNode = this.y1o(source);
    var input = Companion_getInstance_1().a1p(rootNode, this, this.u1o_1, this.v1o_1, deserializer.st());
    return input.jw(deserializer);
  };
  protoOf(Yaml).y1o = function (source) {
    var parser = new YamlParser(source, this.v1o_1.t1p_1);
    var reader = new YamlNodeReader(parser, this.v1o_1.h1p_1, this.v1o_1.r1p_1.v1p());
    var node = reader.b1q();
    parser.g1q();
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
    multiLineStringStyle = multiLineStringStyle === VOID ? singleLineStringStyle.j1q() : multiLineStringStyle;
    ambiguousQuoteStyle = ambiguousQuoteStyle === VOID ? AmbiguousQuoteStyle_DoubleQuoted_getInstance() : ambiguousQuoteStyle;
    sequenceBlockIndent = sequenceBlockIndent === VOID ? 0 : sequenceBlockIndent;
    anchorsAndAliases = anchorsAndAliases === VOID ? Forbidden_getInstance() : anchorsAndAliases;
    yamlNamingStrategy = yamlNamingStrategy === VOID ? null : yamlNamingStrategy;
    codePointLimit = codePointLimit === VOID ? null : codePointLimit;
    decodeEnumCaseInsensitive = decodeEnumCaseInsensitive === VOID ? false : decodeEnumCaseInsensitive;
    this.f1p_1 = encodeDefaults;
    this.g1p_1 = strictMode;
    this.h1p_1 = extensionDefinitionPrefix;
    this.i1p_1 = polymorphismStyle;
    this.j1p_1 = polymorphismPropertyName;
    this.k1p_1 = encodingIndentationSize;
    this.l1p_1 = breakScalarsAt;
    this.m1p_1 = sequenceStyle;
    this.n1p_1 = singleLineStringStyle;
    this.o1p_1 = multiLineStringStyle;
    this.p1p_1 = ambiguousQuoteStyle;
    this.q1p_1 = sequenceBlockIndent;
    this.r1p_1 = anchorsAndAliases;
    this.s1p_1 = yamlNamingStrategy;
    this.t1p_1 = codePointLimit;
    this.u1p_1 = decodeEnumCaseInsensitive;
  }
  protoOf(YamlConfiguration).toString = function () {
    return 'YamlConfiguration(encodeDefaults=' + this.f1p_1 + ', strictMode=' + this.g1p_1 + ', extensionDefinitionPrefix=' + this.h1p_1 + ', polymorphismStyle=' + this.i1p_1.toString() + ', polymorphismPropertyName=' + this.j1p_1 + ', encodingIndentationSize=' + this.k1p_1 + ', breakScalarsAt=' + this.l1p_1 + ', sequenceStyle=' + this.m1p_1.toString() + ', singleLineStringStyle=' + this.n1p_1.toString() + ', multiLineStringStyle=' + this.o1p_1.toString() + ', ambiguousQuoteStyle=' + this.p1p_1.toString() + ', sequenceBlockIndent=' + this.q1p_1 + ', anchorsAndAliases=' + toString(this.r1p_1) + ', yamlNamingStrategy=' + toString_0(this.s1p_1) + ', codePointLimit=' + this.t1p_1 + ', decodeEnumCaseInsensitive=' + this.u1p_1 + ')';
  };
  protoOf(YamlConfiguration).hashCode = function () {
    var result = getBooleanHashCode(this.f1p_1);
    result = imul(result, 31) + getBooleanHashCode(this.g1p_1) | 0;
    result = imul(result, 31) + (this.h1p_1 == null ? 0 : getStringHashCode(this.h1p_1)) | 0;
    result = imul(result, 31) + this.i1p_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.j1p_1) | 0;
    result = imul(result, 31) + this.k1p_1 | 0;
    result = imul(result, 31) + this.l1p_1 | 0;
    result = imul(result, 31) + this.m1p_1.hashCode() | 0;
    result = imul(result, 31) + this.n1p_1.hashCode() | 0;
    result = imul(result, 31) + this.o1p_1.hashCode() | 0;
    result = imul(result, 31) + this.p1p_1.hashCode() | 0;
    result = imul(result, 31) + this.q1p_1 | 0;
    result = imul(result, 31) + hashCode(this.r1p_1) | 0;
    result = imul(result, 31) + (this.s1p_1 == null ? 0 : hashCode(this.s1p_1)) | 0;
    result = imul(result, 31) + (this.t1p_1 == null ? 0 : this.t1p_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.u1p_1) | 0;
    return result;
  };
  protoOf(YamlConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof YamlConfiguration ? other : THROW_CCE();
    if (!(this.f1p_1 === tmp0_other_with_cast.f1p_1))
      return false;
    if (!(this.g1p_1 === tmp0_other_with_cast.g1p_1))
      return false;
    if (!(this.h1p_1 == tmp0_other_with_cast.h1p_1))
      return false;
    if (!this.i1p_1.equals(tmp0_other_with_cast.i1p_1))
      return false;
    if (!(this.j1p_1 === tmp0_other_with_cast.j1p_1))
      return false;
    if (!(this.k1p_1 === tmp0_other_with_cast.k1p_1))
      return false;
    if (!(this.l1p_1 === tmp0_other_with_cast.l1p_1))
      return false;
    if (!this.m1p_1.equals(tmp0_other_with_cast.m1p_1))
      return false;
    if (!this.n1p_1.equals(tmp0_other_with_cast.n1p_1))
      return false;
    if (!this.o1p_1.equals(tmp0_other_with_cast.o1p_1))
      return false;
    if (!this.p1p_1.equals(tmp0_other_with_cast.p1p_1))
      return false;
    if (!(this.q1p_1 === tmp0_other_with_cast.q1p_1))
      return false;
    if (!equals(this.r1p_1, tmp0_other_with_cast.r1p_1))
      return false;
    if (!equals(this.s1p_1, tmp0_other_with_cast.s1p_1))
      return false;
    if (!(this.t1p_1 == tmp0_other_with_cast.t1p_1))
      return false;
    if (!(this.u1p_1 === tmp0_other_with_cast.u1p_1))
      return false;
    return true;
  };
  function Forbidden() {
    Forbidden_instance = this;
    AnchorsAndAliases.call(this);
    this.k1q_1 = _UInt___init__impl__l7qpdl(0);
  }
  protoOf(Forbidden).l1q = function () {
    return this.k1q_1;
  };
  protoOf(Forbidden).v1p = function () {
    return this.l1q();
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
  protoOf(SingleLineStringStyle).j1q = function () {
    var tmp;
    switch (this.e2_1) {
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
  protoOf(YamlContextualInput).ax = function (descriptor) {
    throw IllegalStateException_init_$Create$('Must call beginStructure() and use returned Decoder');
  };
  protoOf(YamlContextualInput).vv = function () {
    var tmp0_subject = this.b1p_1;
    var tmp;
    if (tmp0_subject instanceof YamlScalar) {
      tmp = this.b1p_1.t1q_1;
    } else {
      if (tmp0_subject instanceof YamlNull) {
        throw new UnexpectedNullValueException(this.b1p_1.r1q_1);
      } else {
        throw IllegalStateException_init_$Create$('Must call beginStructure() and use returned Decoder');
      }
    }
    return tmp;
  };
  protoOf(YamlContextualInput).kw = function (descriptor) {
    return Companion_getInstance_1().a1p(this.b1p_1, this.c1p_1, this.yw(), this.e1p_1, descriptor);
  };
  function MissingTypeTagException(path) {
    IncorrectTypeException.call(this, 'Value is missing a type tag (eg. !<type>)', path);
    captureStack(this, MissingTypeTagException);
  }
  function IncorrectTypeException(message, path) {
    YamlException.call(this, message, path);
    captureStack(this, IncorrectTypeException);
  }
  function InvalidPropertyValueException(propertyName, reason, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Value for '" + propertyName + "' is invalid: " + reason, path, cause);
    captureStack(this, InvalidPropertyValueException);
    this.h1r_1 = propertyName;
    this.i1r_1 = reason;
  }
  function MissingRequiredPropertyException(propertyName, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Property '" + propertyName + "' is required but it is missing.", path, cause);
    captureStack(this, MissingRequiredPropertyException);
    this.p1r_1 = propertyName;
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
    this.w1r_1 = key;
    this.x1r_1 = extensionDefinitionPrefix;
  }
  function UnknownAnchorException(anchorName, path) {
    YamlException.call(this, "Unknown anchor '" + anchorName + "'.", path);
    captureStack(this, UnknownAnchorException);
    this.e1s_1 = anchorName;
  }
  function YamlScalarFormatException(message, path, originalValue) {
    YamlException.call(this, message, path);
    captureStack(this, YamlScalarFormatException);
    this.l1s_1 = originalValue;
  }
  function DuplicateKeyException(originalPath, duplicatePath, key) {
    YamlException.call(this, 'Duplicate key ' + key + '. It was previously given at line ' + originalPath.n1s_1.r1o_1 + ', column ' + originalPath.n1s_1.s1o_1 + '.', duplicatePath);
    captureStack(this, DuplicateKeyException);
    this.u1s_1 = originalPath;
    this.v1s_1 = duplicatePath;
    this.w1s_1 = key;
    this.x1s_1 = this.u1s_1.n1s_1;
    this.y1s_1 = this.v1s_1.n1s_1;
  }
  function UnexpectedNullValueException(path) {
    YamlException.call(this, 'Unexpected null or empty value for non-null field.', path);
    captureStack(this, UnexpectedNullValueException);
  }
  function YamlException(message, path, cause) {
    cause = cause === VOID ? null : cause;
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, YamlException);
    this.v1q_1 = message;
    this.w1q_1 = path;
    this.x1q_1 = cause;
    this.y1q_1 = this.w1q_1.n1s_1;
    this.z1q_1 = this.y1q_1.r1o_1;
    this.a1r_1 = this.y1q_1.s1o_1;
  }
  protoOf(YamlException).r8 = function () {
    return this.v1q_1;
  };
  protoOf(YamlException).s8 = function () {
    return this.x1q_1;
  };
  protoOf(YamlException).toString = function () {
    return '' + getKClassFromExpression(this).q9() + ' at ' + this.w1q_1.z1s() + ' on line ' + this.z1q_1 + ', column ' + this.a1r_1 + ': ' + this.r8();
  };
  function UnknownPropertyException(propertyName, validPropertyNames, path) {
    YamlException.call(this, "Unknown property '" + propertyName + "'. Known properties are: " + joinToString(sorted(validPropertyNames), ', '), path);
    captureStack(this, UnknownPropertyException);
    this.g1t_1 = propertyName;
    this.h1t_1 = validPropertyNames;
  }
  function UnknownPolymorphicTypeException(typeName, validTypeNames, path, cause) {
    cause = cause === VOID ? null : cause;
    YamlException.call(this, "Unknown type '" + typeName + "'. Known types are: " + joinToString(sorted(validTypeNames), ', '), path, cause);
    captureStack(this, UnknownPolymorphicTypeException);
    this.o1t_1 = typeName;
    this.p1t_1 = validTypeNames;
  }
  function createContextual($this, node, yaml, context, configuration, descriptor) {
    var tmp0_safe_receiver = getContextualDescriptor(context, descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.charleskorn.kaml.Companion.createContextual.<anonymous>' call
      tmp = Companion_getInstance_1().a1p(node, yaml, context, configuration, tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new YamlContextualInput(node, yaml, context, configuration) : tmp1_elvis_lhs;
  }
  function createPolymorphicMapDeserializer($this, node, yaml, context, configuration) {
    var desiredKey = configuration.j1p_1;
    var typeName = getValue(node, $this, desiredKey);
    if (typeName instanceof YamlList)
      throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a list', typeName.x1t_1);
    else {
      if (typeName instanceof YamlMap)
        throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a map', typeName.u1t_1);
      else {
        if (typeName instanceof YamlNull)
          throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a null value', typeName.r1q_1);
        else {
          if (typeName instanceof YamlTaggedNode)
            throw new InvalidPropertyValueException(desiredKey, 'expected a string, but got a tagged value', typeName.r1t());
          else {
            if (typeName instanceof YamlScalar) {
              var remainingProperties = withoutKey(node, $this, desiredKey);
              return new YamlPolymorphicInput(typeName.t1q_1, typeName.u1q_1, remainingProperties, yaml, context, configuration);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
  }
  function getValue(_this__u8e3s4, $this, desiredKey) {
    var tmp0_elvis_lhs = _this__u8e3s4.y1t(desiredKey);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MissingRequiredPropertyException(desiredKey, _this__u8e3s4.u1t_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withoutKey(_this__u8e3s4, $this, key) {
    // Inline function 'kotlin.collections.filterKeys' call
    var this_0 = _this__u8e3s4.t1t_1;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.z1().h();
    while (_iterator__ex2g4s.i()) {
      var entry = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.Companion.withoutKey.<anonymous>' call
      if (!(entry.s1().t1q_1 === key)) {
        result.a2(entry.s1(), entry.t1());
      }
    }
    return _this__u8e3s4.z1t(result);
  }
  function _get_isContentBasedPolymorphic__goffbz(_this__u8e3s4, $this) {
    var tmp0 = _this__u8e3s4.vu();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.r();
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
    tmp.z1o_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_0).a1p = function (node, yaml, context, configuration, descriptor) {
    var tmp;
    if (node instanceof YamlNull) {
      var tmp_0;
      var tmp_1;
      var tmp_2 = descriptor.su();
      if (tmp_2 instanceof PolymorphicKind) {
        tmp_1 = !descriptor.nu();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        throw new MissingTypeTagException(node.r1q_1);
      } else {
        tmp_0 = new YamlNullInput(node, yaml, context, configuration);
      }
      tmp = tmp_0;
    } else {
      if (node instanceof YamlScalar) {
        var tmp_3;
        var tmp_4;
        var tmp_5;
        var tmp_6 = descriptor.su();
        if (tmp_6 instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          var tmp_7 = descriptor.su();
          tmp_5 = tmp_7 instanceof ENUM;
        }
        if (tmp_5) {
          tmp_4 = true;
        } else {
          tmp_4 = descriptor.tu();
        }
        if (tmp_4) {
          tmp_3 = new YamlScalarInput(node, yaml, context, configuration);
        } else {
          var tmp_8 = descriptor.su();
          if (tmp_8 instanceof CONTEXTUAL) {
            tmp_3 = createContextual(this, node, yaml, context, configuration, descriptor);
          } else {
            var tmp_9 = descriptor.su();
            if (tmp_9 instanceof PolymorphicKind) {
              var tmp_10;
              if (_get_isContentBasedPolymorphic__goffbz(descriptor, this)) {
                tmp_10 = createContextual(this, node, yaml, context, configuration, descriptor);
              } else {
                throw new MissingTypeTagException(node.u1q_1);
              }
              tmp_3 = tmp_10;
            } else {
              throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.su()) + ', but got a scalar value', node.u1q_1);
            }
          }
        }
        tmp = tmp_3;
      } else {
        if (node instanceof YamlList) {
          var tmp1_subject = descriptor.su();
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
                  throw new MissingTypeTagException(node.x1t_1);
                }
                tmp_11 = tmp_12;
              } else {
                throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.su()) + ', but got a list', node.x1t_1);
              }
            }
          }
          tmp = tmp_11;
        } else {
          if (node instanceof YamlMap) {
            var tmp2_subject = descriptor.su();
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
                      switch (configuration.i1p_1.e2_1) {
                        case 2:
                          throw new IncorrectTypeException("Encountered a polymorphic map descriptor but PolymorphismStyle is 'None'", node.u1t_1);
                        case 0:
                          throw new MissingTypeTagException(node.u1t_1);
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
                    throw new IncorrectTypeException('Expected ' + get_friendlyDescription(descriptor.su()) + ', but got a map', node.u1t_1);
                  }
                }
              }
            }
            tmp = tmp_13;
          } else {
            if (node instanceof YamlTaggedNode) {
              var tmp_17;
              var tmp_18;
              var tmp_19 = descriptor.su();
              if (tmp_19 instanceof PolymorphicKind) {
                tmp_18 = configuration.i1p_1.equals(PolymorphismStyle_None_getInstance());
              } else {
                tmp_18 = false;
              }
              if (tmp_18) {
                throw new IncorrectTypeException("Encountered a tagged polymorphic descriptor but PolymorphismStyle is 'None'", node.r1t());
              } else {
                var tmp_20;
                var tmp_21 = descriptor.su();
                if (tmp_21 instanceof PolymorphicKind) {
                  tmp_20 = configuration.i1p_1.equals(PolymorphismStyle_Tag_getInstance());
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_17 = new YamlPolymorphicInput(node.b1u_1, node.r1t(), node.c1u_1, yaml, context, configuration);
                } else {
                  tmp_17 = this.a1p(node.c1u_1, yaml, context, configuration, descriptor);
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
    var tmp0_elvis_lhs = Companion_getInstance_1().z1o_1.sb(ensureNotNull(e.message));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var match = tmp;
    throw new MissingRequiredPropertyException(match.ic().p(1), $this.b1p_1.r1t(), e);
  }
  function YamlInput(node, yaml, serializersModule, configuration) {
    Companion_getInstance_1();
    AbstractDecoder.call(this);
    this.b1p_1 = node;
    this.c1p_1 = yaml;
    this.d1p_1 = serializersModule;
    this.e1p_1 = configuration;
  }
  protoOf(YamlInput).yw = function () {
    return this.d1p_1;
  };
  protoOf(YamlInput).jw = function (deserializer) {
    try {
      return protoOf(AbstractDecoder).jw.call(this, deserializer);
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
    var tmp = $this.j1u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentElementDecoder');
    }
  }
  function _get_haveStartedReadingElements__wj0go1($this) {
    return $this.i1u_1 > 0;
  }
  function YamlListInput(list, yaml, context, configuration) {
    YamlInput.call(this, list, yaml, context, configuration);
    this.h1u_1 = list;
    this.i1u_1 = 0;
  }
  protoOf(YamlListInput).bx = function (descriptor) {
    return this.h1u_1.w1t_1.k();
  };
  protoOf(YamlListInput).ax = function (descriptor) {
    if (this.i1u_1 === this.h1u_1.w1t_1.k()) {
      return -1;
    }
    this.j1u_1 = Companion_getInstance_1().a1p(this.h1u_1.w1t_1.p(this.i1u_1), this.c1p_1, this.yw(), this.e1p_1, descriptor.xu(0));
    var _unary__edvuaz = this.i1u_1;
    this.i1u_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(YamlListInput).wv = function () {
    if (!_get_haveStartedReadingElements__wj0go1(this)) {
      return true;
    }
    return _get_currentElementDecoder__u73r00(this).wv();
  };
  protoOf(YamlListInput).gw = function () {
    return _get_currentElementDecoder__u73r00(this).gw();
  };
  protoOf(YamlListInput).bw = function () {
    return _get_currentElementDecoder__u73r00(this).bw();
  };
  protoOf(YamlListInput).cw = function () {
    return _get_currentElementDecoder__u73r00(this).cw();
  };
  protoOf(YamlListInput).aw = function () {
    return _get_currentElementDecoder__u73r00(this).aw();
  };
  protoOf(YamlListInput).zv = function () {
    return _get_currentElementDecoder__u73r00(this).zv();
  };
  protoOf(YamlListInput).ew = function () {
    return _get_currentElementDecoder__u73r00(this).ew();
  };
  protoOf(YamlListInput).dw = function () {
    return _get_currentElementDecoder__u73r00(this).dw();
  };
  protoOf(YamlListInput).yv = function () {
    return _get_currentElementDecoder__u73r00(this).yv();
  };
  protoOf(YamlListInput).fw = function () {
    return _get_currentElementDecoder__u73r00(this).fw();
  };
  protoOf(YamlListInput).jw = function (deserializer) {
    if (!_get_haveStartedReadingElements__wj0go1(this)) {
      return protoOf(YamlInput).jw.call(this, deserializer);
    }
    return _get_currentElementDecoder__u73r00(this).jw(deserializer);
  };
  protoOf(YamlListInput).kw = function (descriptor) {
    if (_get_haveStartedReadingElements__wj0go1(this)) {
      return _get_currentElementDecoder__u73r00(this);
    }
    return protoOf(YamlInput).kw.call(this, descriptor);
  };
  function _get_currentEntry__q2u5ma($this) {
    var tmp = $this.t1u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentEntry');
    }
  }
  function YamlMapInput$beginStructure$lambda($descriptor) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.kw($descriptor);
    };
  }
  function YamlMapInput(map, yaml, context, configuration) {
    YamlMapLikeInputBase.call(this, map, yaml, context, configuration);
    this.r1u_1 = toList(map.t1t_1.z1());
    this.s1u_1 = 0;
  }
  protoOf(YamlMapInput).ax = function (descriptor) {
    if (this.s1u_1 === imul(this.r1u_1.k(), 2)) {
      return -1;
    }
    var entryIndex = this.s1u_1 / 2 | 0;
    this.t1u_1 = this.r1u_1.p(entryIndex);
    this.z1u_1 = _get_currentEntry__q2u5ma(this).s1();
    this.a1v_1 = !((this.s1u_1 % 2 | 0) === 0);
    var tmp = this;
    var tmp_0;
    switch (this.a1v_1) {
      case true:
        var tmp_1;
        try {
          tmp_1 = Companion_getInstance_1().a1p(_get_currentEntry__q2u5ma(this).t1(), this.c1p_1, this.yw(), this.e1p_1, descriptor.xu(1));
        } catch ($p) {
          var tmp_2;
          if ($p instanceof IncorrectTypeException) {
            var e = $p;
            throw new InvalidPropertyValueException(this.b1v(), e.r8(), e.w1q_1, e);
          } else {
            throw $p;
          }
        }

        tmp_0 = tmp_1;
        break;
      case false:
        tmp_0 = Companion_getInstance_1().a1p(this.c1v(), this.c1p_1, this.yw(), this.e1p_1, descriptor.xu(0));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.y1u_1 = tmp_0;
    var _unary__edvuaz = this.s1u_1;
    this.s1u_1 = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(YamlMapInput).kw = function (descriptor) {
    if (this.e1v()) {
      return this.d1v(YamlMapInput$beginStructure$lambda(descriptor));
    }
    return protoOf(YamlMapLikeInputBase).kw.call(this, descriptor);
  };
  function YamlMapLikeInputBase$decodeNotNullMark$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.wv();
  }
  function YamlMapLikeInputBase$decodeString$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.gw();
  }
  function YamlMapLikeInputBase$decodeInt$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.bw();
  }
  function YamlMapLikeInputBase$decodeLong$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.cw();
  }
  function YamlMapLikeInputBase$decodeShort$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.aw();
  }
  function YamlMapLikeInputBase$decodeByte$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.zv();
  }
  function YamlMapLikeInputBase$decodeDouble$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.ew();
  }
  function YamlMapLikeInputBase$decodeFloat$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.dw();
  }
  function YamlMapLikeInputBase$decodeBoolean$lambda($this$fromCurrentValue) {
    return $this$fromCurrentValue.yv();
  }
  function YamlMapLikeInputBase$decodeChar$lambda($this$fromCurrentValue) {
    return new Char($this$fromCurrentValue.fw());
  }
  function YamlMapLikeInputBase$decodeSerializableValue$lambda($deserializer) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.jw($deserializer);
    };
  }
  function YamlMapLikeInputBase(map, yaml, context, configuration) {
    YamlInput.call(this, map, yaml, context, configuration);
    this.a1v_1 = false;
  }
  protoOf(YamlMapLikeInputBase).f1v = function () {
    var tmp = this.y1u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentValueDecoder');
    }
  };
  protoOf(YamlMapLikeInputBase).c1v = function () {
    var tmp = this.z1u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('currentKey');
    }
  };
  protoOf(YamlMapLikeInputBase).wv = function () {
    if (!this.e1v()) {
      return true;
    }
    return this.d1v(YamlMapLikeInputBase$decodeNotNullMark$lambda);
  };
  protoOf(YamlMapLikeInputBase).gw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeString$lambda);
  };
  protoOf(YamlMapLikeInputBase).bw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeInt$lambda);
  };
  protoOf(YamlMapLikeInputBase).cw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeLong$lambda);
  };
  protoOf(YamlMapLikeInputBase).aw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeShort$lambda);
  };
  protoOf(YamlMapLikeInputBase).zv = function () {
    return this.d1v(YamlMapLikeInputBase$decodeByte$lambda);
  };
  protoOf(YamlMapLikeInputBase).ew = function () {
    return this.d1v(YamlMapLikeInputBase$decodeDouble$lambda);
  };
  protoOf(YamlMapLikeInputBase).dw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeFloat$lambda);
  };
  protoOf(YamlMapLikeInputBase).yv = function () {
    return this.d1v(YamlMapLikeInputBase$decodeBoolean$lambda);
  };
  protoOf(YamlMapLikeInputBase).fw = function () {
    return this.d1v(YamlMapLikeInputBase$decodeChar$lambda).b1_1;
  };
  protoOf(YamlMapLikeInputBase).jw = function (deserializer) {
    if (!this.e1v()) {
      return protoOf(YamlInput).jw.call(this, deserializer);
    }
    return this.d1v(YamlMapLikeInputBase$decodeSerializableValue$lambda(deserializer));
  };
  protoOf(YamlMapLikeInputBase).d1v = function (action) {
    try {
      return action(this.f1v());
    } catch ($p) {
      if ($p instanceof YamlException) {
        var e = $p;
        if (this.a1v_1) {
          throw new InvalidPropertyValueException(this.b1v(), e.r8(), e.w1q_1, e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
  };
  protoOf(YamlMapLikeInputBase).e1v = function () {
    return !(this.y1u_1 == null);
  };
  protoOf(YamlMapLikeInputBase).b1v = function () {
    return this.c1v().t1q_1;
  };
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function YamlNode(path) {
    this.q1t_1 = path;
  }
  protoOf(YamlNode).r1t = function () {
    return this.q1t_1;
  };
  protoOf(YamlNode).g1v = function () {
    return this.r1t().n1s_1;
  };
  protoOf(YamlNode).i1v = function (child, newParentPath) {
    return new YamlPath(plus(newParentPath.m1s_1, drop(child.r1t().m1s_1, this.r1t().m1s_1.k())));
  };
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function YamlNull(path) {
    YamlNode.call(this, path);
    this.r1q_1 = path;
  }
  protoOf(YamlNull).r1t = function () {
    return this.r1q_1;
  };
  protoOf(YamlNull).h1v = function (newPath) {
    return new YamlNull(newPath);
  };
  protoOf(YamlNull).toString = function () {
    return 'null @ ' + this.r1q_1.toString();
  };
  protoOf(YamlNull).hashCode = function () {
    return this.r1q_1.hashCode();
  };
  protoOf(YamlNull).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlNull))
      return false;
    var tmp0_other_with_cast = other instanceof YamlNull ? other : THROW_CCE();
    if (!this.r1q_1.equals(tmp0_other_with_cast.r1q_1))
      return false;
    return true;
  };
  function convertToIntegerLikeValue($this, converter, description) {
    var tmp0_elvis_lhs = convertToIntegerLikeValueOrNull($this, converter);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + $this.t1q_1 + "' is not a valid " + description + ' value.', $this.u1q_1, $this.t1q_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function convertToIntegerLikeValueOrNull($this, converter) {
    var tmp;
    try {
      var tmp_0;
      if (startsWith($this.t1q_1, '0x')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter($this.t1q_1.substring(2), 16);
      } else if (startsWith($this.t1q_1, '-0x')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter('-' + $this.t1q_1.substring(3), 16);
      } else if (startsWith($this.t1q_1, '0o')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter($this.t1q_1.substring(2), 8);
      } else if (startsWith($this.t1q_1, '-0o')) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = converter('-' + $this.t1q_1.substring(3), 8);
      } else {
        tmp_0 = converter($this.t1q_1, 10);
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
    this.t1q_1 = content;
    this.u1q_1 = path;
  }
  protoOf(YamlScalar).r1t = function () {
    return this.u1q_1;
  };
  protoOf(YamlScalar).j1v = function (other) {
    var tmp;
    if (other instanceof YamlScalar) {
      tmp = this.t1q_1 === other.t1q_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YamlScalar).k1v = function () {
    return "'" + this.t1q_1 + "'";
  };
  protoOf(YamlScalar).l1v = function () {
    return convertToIntegerLikeValue(this, toByte$ref(), 'byte');
  };
  protoOf(YamlScalar).m1v = function () {
    return convertToIntegerLikeValue(this, toShort$ref(), 'short');
  };
  protoOf(YamlScalar).x2 = function () {
    return convertToIntegerLikeValue(this, toInt$ref(), 'integer');
  };
  protoOf(YamlScalar).n1v = function () {
    return convertToIntegerLikeValue(this, toLong$ref(), 'long');
  };
  protoOf(YamlScalar).o1v = function () {
    var tmp;
    switch (this.t1q_1) {
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
          var this_0 = this.t1q_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = toDouble(this_0);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof NumberFormatException) {
            var e = $p;
            throw new YamlScalarFormatException("Value '" + this.t1q_1 + "' is not a valid floating point value.", this.u1q_1, this.t1q_1);
          } else {
            if ($p instanceof IndexOutOfBoundsException) {
              var e_0 = $p;
              throw new YamlScalarFormatException("Value '" + this.t1q_1 + "' is not a valid floating point value.", this.u1q_1, this.t1q_1);
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
  protoOf(YamlScalar).y2 = function () {
    var tmp0_elvis_lhs = this.p1v();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + this.t1q_1 + "' is not a valid floating point value.", this.u1q_1, this.t1q_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).p1v = function () {
    var tmp;
    switch (this.t1q_1) {
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
          tmp_0 = toDouble(this.t1q_1);
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
  protoOf(YamlScalar).q1v = function () {
    var tmp0_elvis_lhs = this.r1v();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new YamlScalarFormatException("Value '" + this.t1q_1 + "' is not a valid boolean, permitted choices are: true or false", this.u1q_1, this.t1q_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).r1v = function () {
    switch (this.t1q_1) {
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
  protoOf(YamlScalar).s1v = function () {
    var tmp0_elvis_lhs = this.t1v();
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
      throw new YamlScalarFormatException("Value '" + this.t1q_1 + "' is not a valid character value.", this.u1q_1, this.t1q_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(YamlScalar).t1v = function () {
    return singleOrNull(this.t1q_1);
  };
  protoOf(YamlScalar).h1v = function (newPath) {
    return this.u1v(VOID, newPath);
  };
  protoOf(YamlScalar).toString = function () {
    return 'scalar @ ' + this.u1q_1.toString() + ' : ' + this.t1q_1;
  };
  protoOf(YamlScalar).v1v = function (content, path) {
    return new YamlScalar(content, path);
  };
  protoOf(YamlScalar).u1v = function (content, path, $super) {
    content = content === VOID ? this.t1q_1 : content;
    path = path === VOID ? this.u1q_1 : path;
    return $super === VOID ? this.v1v(content, path) : $super.v1v.call(this, content, path);
  };
  protoOf(YamlScalar).hashCode = function () {
    var result = getStringHashCode(this.t1q_1);
    result = imul(result, 31) + this.u1q_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlScalar).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlScalar))
      return false;
    var tmp0_other_with_cast = other instanceof YamlScalar ? other : THROW_CCE();
    if (!(this.t1q_1 === tmp0_other_with_cast.t1q_1))
      return false;
    if (!this.u1q_1.equals(tmp0_other_with_cast.u1q_1))
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
    this.w1t_1 = items;
    this.x1t_1 = path;
  }
  protoOf(YamlList).r1t = function () {
    return this.x1t_1;
  };
  protoOf(YamlList).h1v = function (newPath) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w1t_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlList.withPath.<anonymous>' call
      var tmp$ret$0 = item.h1v(this.i1v(item, newPath));
      destination.e(tmp$ret$0);
    }
    var updatedItems = destination;
    return new YamlList(updatedItems, newPath);
  };
  protoOf(YamlList).toString = function () {
    var builder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'list @ ' + this.x1t_1.toString() + ' (size: ' + this.w1t_1.k() + ')';
    // Inline function 'kotlin.text.appendLine' call
    builder.n7(value).o7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = this.w1t_1.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'com.charleskorn.kaml.YamlList.toString.<anonymous>' call
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = '- item ' + checkIndexOverflow(_unary__edvuaz) + ':';
      // Inline function 'kotlin.text.appendLine' call
      builder.n7(value_0).o7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = lines(toString(item)).h();
      while (_iterator__ex2g4s_0.i()) {
        var element = _iterator__ex2g4s_0.j();
        // Inline function 'com.charleskorn.kaml.YamlList.toString.<anonymous>.<anonymous>' call
        builder.n7('  ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.n7(element).o7(_Char___init__impl__6a9atx(10));
      }
    }
    return toString(trimEnd(builder));
  };
  protoOf(YamlList).hashCode = function () {
    var result = hashCode(this.w1t_1);
    result = imul(result, 31) + this.x1t_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlList))
      return false;
    var tmp0_other_with_cast = other instanceof YamlList ? other : THROW_CCE();
    if (!equals(this.w1t_1, tmp0_other_with_cast.w1t_1))
      return false;
    if (!this.x1t_1.equals(tmp0_other_with_cast.x1t_1))
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
    this.w1v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kc = function (a, b) {
    return this.w1v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).z2 = function () {
    return this.w1v_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.z2(), other.z2());
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
    return hashCode(this.z2());
  };
  function YamlMap$lambda(a, b) {
    var lineComparison = compareTo(a.g1v().r1o_1, b.g1v().r1o_1);
    var tmp;
    if (!(lineComparison === 0)) {
      tmp = lineComparison;
    } else {
      tmp = compareTo(a.g1v().s1o_1, b.g1v().s1o_1);
    }
    return tmp;
  }
  function YamlMap(entries, path) {
    YamlNode.call(this, path);
    this.t1t_1 = entries;
    this.u1t_1 = path;
    var tmp = this.t1t_1.x1();
    var tmp_0 = YamlMap$lambda;
    var keys = sortedWith(tmp, new sam$kotlin_Comparator$0(tmp_0));
    // Inline function 'kotlin.collections.mutableMapOf' call
    var encounteredKeys = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = keys.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.<anonymous>' call
      var duplicate = encounteredKeys.w1(element.t1q_1);
      if (!(duplicate == null)) {
        throw new DuplicateKeyException(duplicate.u1q_1, element.u1q_1, element.k1v());
      }
      // Inline function 'kotlin.collections.set' call
      var key = element.t1q_1;
      encounteredKeys.a2(key, element);
    }
  }
  protoOf(YamlMap).r1t = function () {
    return this.u1t_1;
  };
  protoOf(YamlMap).y1t = function (key) {
    var tmp0 = this.t1t_1.z1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.h();
      while (_iterator__ex2g4s.i()) {
        var element = _iterator__ex2g4s.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.get.<anonymous>' call
        if (element.s1().t1q_1 === key) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
    return (tmp == null ? true : tmp instanceof YamlNode) ? tmp : THROW_CCE();
  };
  protoOf(YamlMap).h1v = function (newPath) {
    // Inline function 'kotlin.collections.mapKeys' call
    var this_0 = this.t1t_1;
    // Inline function 'kotlin.collections.mapKeysTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.z1().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.withPath.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.s1();
      var tmp = k.h1v(this.i1v(k, newPath));
      // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
      var tmp$ret$2 = element.t1();
      destination.a2(tmp, tmp$ret$2);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.z1().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.s1();
      // Inline function 'com.charleskorn.kaml.YamlMap.withPath.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var v = element_0.t1();
      var tmp$ret$8 = v.h1v(this.i1v(v, newPath));
      destination_0.a2(tmp_0, tmp$ret$8);
    }
    var updatedEntries = destination_0;
    return new YamlMap(updatedEntries, newPath);
  };
  protoOf(YamlMap).toString = function () {
    var builder = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'map @ ' + this.u1t_1.toString() + ' (size: ' + this.t1t_1.k() + ')';
    // Inline function 'kotlin.text.appendLine' call
    builder.n7(value).o7(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.t1t_1.z1().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var value_0 = element.t1();
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.text.appendLine' call
      builder.n7('- key:').o7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = lines(key.toString()).h();
      while (_iterator__ex2g4s_0.i()) {
        var element_0 = _iterator__ex2g4s_0.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>.<anonymous>' call
        builder.n7('    ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.n7(element_0).o7(_Char___init__impl__6a9atx(10));
      }
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = '  value:';
      // Inline function 'kotlin.text.appendLine' call
      builder.n7(value_1).o7(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = lines(toString(value_0)).h();
      while (_iterator__ex2g4s_1.i()) {
        var element_1 = _iterator__ex2g4s_1.j();
        // Inline function 'com.charleskorn.kaml.YamlMap.toString.<anonymous>.<anonymous>' call
        builder.n7('    ');
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        builder.n7(element_1).o7(_Char___init__impl__6a9atx(10));
      }
    }
    return toString(trimEnd(builder));
  };
  protoOf(YamlMap).x1v = function (entries, path) {
    return new YamlMap(entries, path);
  };
  protoOf(YamlMap).z1t = function (entries, path, $super) {
    entries = entries === VOID ? this.t1t_1 : entries;
    path = path === VOID ? this.u1t_1 : path;
    return $super === VOID ? this.x1v(entries, path) : $super.x1v.call(this, entries, path);
  };
  protoOf(YamlMap).hashCode = function () {
    var result = hashCode(this.t1t_1);
    result = imul(result, 31) + this.u1t_1.hashCode() | 0;
    return result;
  };
  protoOf(YamlMap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlMap))
      return false;
    var tmp0_other_with_cast = other instanceof YamlMap ? other : THROW_CCE();
    if (!equals(this.t1t_1, tmp0_other_with_cast.t1t_1))
      return false;
    if (!this.u1t_1.equals(tmp0_other_with_cast.u1t_1))
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
    YamlNode.call(this, innerNode.r1t());
    this.b1u_1 = tag;
    this.c1u_1 = innerNode;
  }
  protoOf(YamlTaggedNode).h1v = function (newPath) {
    return this.y1v(VOID, this.c1u_1.h1v(newPath));
  };
  protoOf(YamlTaggedNode).toString = function () {
    return "tagged '" + this.b1u_1 + "': " + toString(this.c1u_1);
  };
  protoOf(YamlTaggedNode).z1v = function (tag, innerNode) {
    return new YamlTaggedNode(tag, innerNode);
  };
  protoOf(YamlTaggedNode).y1v = function (tag, innerNode, $super) {
    tag = tag === VOID ? this.b1u_1 : tag;
    innerNode = innerNode === VOID ? this.c1u_1 : innerNode;
    return $super === VOID ? this.z1v(tag, innerNode) : $super.z1v.call(this, tag, innerNode);
  };
  protoOf(YamlTaggedNode).hashCode = function () {
    var result = getStringHashCode(this.b1u_1);
    result = imul(result, 31) + hashCode(this.c1u_1) | 0;
    return result;
  };
  protoOf(YamlTaggedNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlTaggedNode))
      return false;
    var tmp0_other_with_cast = other instanceof YamlTaggedNode ? other : THROW_CCE();
    if (!(this.b1u_1 === tmp0_other_with_cast.b1u_1))
      return false;
    if (!equals(this.c1u_1, tmp0_other_with_cast.c1u_1))
      return false;
    return true;
  };
  function readNode($this, path) {
    return readNodeAndAnchor($this, path).yd_1;
  }
  function readNodeAndAnchor($this, path) {
    var event = $this.w1p_1.a1w(path);
    var _destruct__k2r9zo = readFromEvent($this, event, path);
    var node = _destruct__k2r9zo.ae();
    var weight = _destruct__k2r9zo.d1w();
    if (event instanceof NodeEvent) {
      if (!(event instanceof AliasEvent)) {
        var tmp0_safe_receiver = event.m1e_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'com.charleskorn.kaml.YamlNodeReader.readNodeAndAnchor.<anonymous>' call
          var tmp = $this.y1p_1;
          if (equals(tmp == null ? null : new UInt(tmp), new UInt(_UInt___init__impl__l7qpdl(0)))) {
            throw new ForbiddenAnchorOrAliasException('Parsing anchors and aliases is disabled.', path);
          }
          var anchor = node.h1v(Companion_getInstance_8().f1w(tmp0_safe_receiver.o1c_1, _get_location__4pgxiu(event, $this)));
          var tmp0 = $this.z1p_1;
          // Inline function 'kotlin.collections.set' call
          var value = new WeightedNode(anchor, weight);
          tmp0.a2(tmp0_safe_receiver, value);
        }
      }
      return to(new WeightedNode(node, weight), event.m1e_1);
    }
    return to(new WeightedNode(node, _UInt___init__impl__l7qpdl(0)), null);
  }
  function readFromEvent($this, event, path) {
    var tmp;
    if (event instanceof ScalarEvent) {
      tmp = new WeightedNode(maybeToTaggedNode(readScalarOrNull($this, event, path), $this, event.n1f_1), _UInt___init__impl__l7qpdl(0));
    } else {
      if (event instanceof SequenceStartEvent) {
        // Inline function 'kotlin.let' call
        // Inline function 'com.charleskorn.kaml.YamlNodeReader.readFromEvent.<anonymous>' call
        var it = readSequence($this, path);
        tmp = it.h1w(maybeToTaggedNode(it.b1w_1, $this, event.h1e_1));
      } else {
        if (event instanceof MappingStartEvent) {
          // Inline function 'kotlin.let' call
          // Inline function 'com.charleskorn.kaml.YamlNodeReader.readFromEvent.<anonymous>' call
          var it_0 = readMapping($this, path);
          tmp = it_0.h1w(maybeToTaggedNode(it_0.b1w_1, $this, event.h1e_1));
        } else {
          if (event instanceof AliasEvent) {
            tmp = readAlias($this, event, path);
          } else {
            throw new MalformedYamlException('Unexpected ' + event.b1e().toString(), path.g1w(_get_location__4pgxiu(event, $this)));
          }
        }
      }
    }
    return tmp;
  }
  function readScalarOrNull($this, event, path) {
    if ((event.p1f_1 === 'null' || event.p1f_1 === '' || event.p1f_1 === '~') && event.r1f()) {
      return new YamlNull(path);
    } else {
      return new YamlScalar(event.p1f_1, path);
    }
  }
  function readSequence($this, path) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var items = ArrayList_init_$Create$_0();
    var sequenceWeight = _UInt___init__impl__l7qpdl(0);
    while (true) {
      var event = $this.w1p_1.i1w(path);
      if (event.b1e().e2_1 === 7) {
        $this.w1p_1.k1w(ID_SequenceEnd_getInstance(), path);
        return new WeightedNode(new YamlList(items, path), sequenceWeight);
      } else {
        var _destruct__k2r9zo = readNode($this, path.j1w(items.k(), _get_location__4pgxiu(event, $this)));
        var node = _destruct__k2r9zo.ae();
        var weight = _destruct__k2r9zo.d1w();
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
      var event = $this.w1p_1.i1w(path);
      if (event.b1e().e2_1 === 4) {
        $this.w1p_1.k1w(ID_MappingEnd_getInstance(), path);
        return new WeightedNode(new YamlMap(doMerges($this, items), path), mapWeight);
      } else {
        var keyLocation = _get_location__4pgxiu($this.w1p_1.i1w(path), $this);
        var key = readMapKey($this, path);
        var keyNode = new YamlScalar(key, path.l1w(key, keyLocation));
        var valueLocation = _get_location__4pgxiu($this.w1p_1.i1w(keyNode.u1q_1), $this);
        var valuePath = isMerge($this, keyNode) ? path.n1w(valueLocation) : keyNode.u1q_1.m1w(valueLocation);
        var _destruct__k2r9zo = readNodeAndAnchor($this, valuePath);
        var weightedNode = _destruct__k2r9zo.ae();
        var anchor = _destruct__k2r9zo.be();
        var tmp0 = mapWeight;
        // Inline function 'kotlin.UInt.plus' call
        var other = weightedNode.c1w_1;
        mapWeight = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) + _UInt___get_data__impl__f0vqqw(other) | 0);
        if (path.equals(Companion_getInstance_8().e1w_1) && !($this.x1p_1 == null) && startsWith(key, $this.x1p_1)) {
          if (anchor == null) {
            throw new NoAnchorForExtensionException(key, $this.x1p_1, path.g1w(_get_location__4pgxiu(event, $this)));
          }
        } else {
          // Inline function 'kotlin.collections.plusAssign' call
          var pair = to(keyNode, weightedNode.b1w_1);
          items.a2(pair.yd_1, pair.zd_1);
        }
      }
    }
  }
  function readMapKey($this, path) {
    var event = $this.w1p_1.i1w(path);
    if (event.b1e().e2_1 === 6) {
      $this.w1p_1.k1w(ID_Scalar_getInstance(), path);
      var scalarEvent = event instanceof ScalarEvent ? event : THROW_CCE();
      var isNullKey = (scalarEvent.p1f_1 === 'null' || scalarEvent.p1f_1 === '~') && scalarEvent.r1f();
      if (!(scalarEvent.n1f_1 == null) || isNullKey) {
        throw nonScalarMapKeyException($this, path, event);
      }
      return scalarEvent.p1f_1;
    } else
      throw nonScalarMapKeyException($this, path, event);
  }
  function nonScalarMapKeyException($this, path, event) {
    return new MalformedYamlException("Property name must not be a list, map, null or tagged value. (To use 'null' as a property name, enclose it in quotes.)", path.g1w(_get_location__4pgxiu(event, $this)));
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
    var tmp0 = items.z1();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.s1();
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
        var mappingsToMerge = single(mergeEntries).t1();
        if (mappingsToMerge instanceof YamlList)
          return doMerges_0($this, items, mappingsToMerge.w1t_1);
        else {
          return doMerges_0($this, items, listOf(mappingsToMerge));
        }

      default:
        throw new MalformedYamlException("Cannot perform multiple '<<' merges into a map. Instead, combine all merges into a single '<<' entry.", second(mergeEntries, $this).s1().u1q_1);
    }
  }
  function isMerge($this, key) {
    var tmp;
    if (key instanceof YamlScalar) {
      tmp = key.t1q_1 === '<<';
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
    var _iterator__ex2g4s = original.z1().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.s1();
      if (!isMerge($this, key)) {
        destination.a2(element.s1(), element.t1());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.z1().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key_0 = element_0.s1();
      // Inline function 'kotlin.collections.component2' call
      var value = element_0.t1();
      merged.a2(key_0, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = others.h();
    while (_iterator__ex2g4s_1.i()) {
      var element_1 = _iterator__ex2g4s_1.j();
      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>' call
      if (element_1 instanceof YamlNull)
        throw new MalformedYamlException('Cannot merge a null value into a map.', element_1.r1q_1);
      else {
        if (element_1 instanceof YamlScalar)
          throw new MalformedYamlException('Cannot merge a scalar value into a map.', element_1.u1q_1);
        else {
          if (element_1 instanceof YamlList)
            throw new MalformedYamlException('Cannot merge a list value into a map.', element_1.x1t_1);
          else {
            if (element_1 instanceof YamlTaggedNode)
              throw new MalformedYamlException('Cannot merge a tagged value into a map.', element_1.r1t());
            else {
              if (element_1 instanceof YamlMap) {
                // Inline function 'kotlin.collections.forEach' call
                // Inline function 'kotlin.collections.iterator' call
                var _iterator__ex2g4s_2 = element_1.t1t_1.z1().h();
                while (_iterator__ex2g4s_2.i()) {
                  var element_2 = _iterator__ex2g4s_2.j();
                  // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>.<anonymous>' call
                  // Inline function 'kotlin.collections.component1' call
                  var key_1 = element_2.s1();
                  // Inline function 'kotlin.collections.component2' call
                  var value_0 = element_2.t1();
                  var tmp2 = merged.z1();
                  var tmp$ret$13;
                  $l$block_0: {
                    // Inline function 'kotlin.collections.singleOrNull' call
                    var single = null;
                    var found = false;
                    var _iterator__ex2g4s_3 = tmp2.h();
                    while (_iterator__ex2g4s_3.i()) {
                      var element_3 = _iterator__ex2g4s_3.j();
                      // Inline function 'com.charleskorn.kaml.YamlNodeReader.doMerges.<anonymous>.<anonymous>.<anonymous>' call
                      if (element_3.s1().j1v(key_1)) {
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
                    merged.a2(key_1, value_0);
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
    var tmp = $this.y1p_1;
    if (equals(tmp == null ? null : new UInt(tmp), new UInt(_UInt___init__impl__l7qpdl(0)))) {
      throw new ForbiddenAnchorOrAliasException('Parsing anchors and aliases is disabled.', path);
    }
    var anchor = event.a1e_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = $this.z1p_1.w1(anchor);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new UnknownAnchorException(anchor.o1c_1, path.g1w(_get_location__4pgxiu(event, $this)));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var _destruct__k2r9zo = tmp_0;
    var resolvedNode = _destruct__k2r9zo.ae();
    var resolvedNodeWeight = _destruct__k2r9zo.d1w();
    // Inline function 'kotlin.UInt.plus' call
    var other = _UInt___init__impl__l7qpdl(1);
    var resultWeight = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(resolvedNodeWeight) + _UInt___get_data__impl__f0vqqw(other) | 0);
    var tmp_1 = $this;
    // Inline function 'kotlin.UInt.plus' call
    var this_0 = $this.a1q_1;
    tmp_1.a1q_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) + _UInt___get_data__impl__f0vqqw(resultWeight) | 0);
    var tmp_2;
    var tmp_3 = $this.y1p_1;
    if (!((tmp_3 == null ? null : new UInt(tmp_3)) == null)) {
      var tmp6 = $this.a1q_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = $this.y1p_1;
      tmp_2 = uintCompare(_UInt___get_data__impl__f0vqqw(tmp6), _UInt___get_data__impl__f0vqqw(other_0)) > 0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      throw new ForbiddenAnchorOrAliasException('Maximum number of aliases has been reached.', path);
    }
    return new WeightedNode(resolvedNode.h1v(path.o1w(anchor.o1c_1, _get_location__4pgxiu(event, $this)).p1w(anchor.o1c_1, resolvedNode.g1v())), resultWeight);
  }
  function second(_this__u8e3s4, $this) {
    return first(drop(_this__u8e3s4, 1));
  }
  function _get_location__4pgxiu(_this__u8e3s4, $this) {
    return new Location(ensureNotNull(_this__u8e3s4.c1e_1).i1g_1 + 1 | 0, ensureNotNull(_this__u8e3s4.c1e_1).j1g_1 + 1 | 0);
  }
  function YamlNodeReader(parser, extensionDefinitionPrefix, maxAliasCount) {
    extensionDefinitionPrefix = extensionDefinitionPrefix === VOID ? null : extensionDefinitionPrefix;
    maxAliasCount = maxAliasCount === VOID ? _UInt___init__impl__l7qpdl(0) : maxAliasCount;
    this.w1p_1 = parser;
    this.x1p_1 = extensionDefinitionPrefix;
    this.y1p_1 = maxAliasCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z1p_1 = LinkedHashMap_init_$Create$();
    this.a1q_1 = _UInt___init__impl__l7qpdl(0);
  }
  protoOf(YamlNodeReader).b1q = function () {
    return readNode(this, Companion_getInstance_8().e1w_1).b1w_1;
  };
  function WeightedNode(node, weight) {
    this.b1w_1 = node;
    this.c1w_1 = weight;
  }
  protoOf(WeightedNode).ae = function () {
    return this.b1w_1;
  };
  protoOf(WeightedNode).d1w = function () {
    return this.c1w_1;
  };
  protoOf(WeightedNode).q1w = function (node, weight) {
    return new WeightedNode(node, weight);
  };
  protoOf(WeightedNode).h1w = function (node, weight, $super) {
    node = node === VOID ? this.b1w_1 : node;
    weight = weight === VOID ? this.c1w_1 : weight;
    return $super === VOID ? this.q1w(node, weight) : $super.q1w.call(this, node, new UInt(weight));
  };
  protoOf(WeightedNode).toString = function () {
    return 'WeightedNode(node=' + toString(this.b1w_1) + ', weight=' + new UInt(this.c1w_1) + ')';
  };
  protoOf(WeightedNode).hashCode = function () {
    var result = hashCode(this.b1w_1);
    result = imul(result, 31) + UInt__hashCode_impl_z2mhuw(this.c1w_1) | 0;
    return result;
  };
  protoOf(WeightedNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WeightedNode))
      return false;
    var tmp0_other_with_cast = other instanceof WeightedNode ? other : THROW_CCE();
    if (!equals(this.b1w_1, tmp0_other_with_cast.b1w_1))
      return false;
    if (!(this.c1w_1 === tmp0_other_with_cast.c1w_1))
      return false;
    return true;
  };
  function YamlNodeSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.wt_1 = plus_0($this$buildSerialDescriptor.wt_1, new Marker());
    return Unit_instance;
  }
  function YamlNodeSerializer() {
    YamlNodeSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.r1w_1 = get_nullable(buildSerialDescriptor('com.charleskorn.kaml.YamlNode', tmp_0, [], YamlNodeSerializer$descriptor$lambda));
  }
  protoOf(YamlNodeSerializer).st = function () {
    return this.r1w_1;
  };
  protoOf(YamlNodeSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    var tmp;
    if (input instanceof YamlPolymorphicInput) {
      tmp = new YamlTaggedNode(input.w1w_1, input.b1p_1);
    } else {
      tmp = input.b1p_1;
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
    this.b1x_1 = ListSerializer(YamlNodeSerializer_getInstance()).st();
    this.c1x_1 = 'com.charleskorn.kaml.YamlList';
  }
  protoOf(YamlListDescriptor).ru = function () {
    return this.c1x_1;
  };
  protoOf(YamlListDescriptor).wu = function (index) {
    return this.b1x_1.wu(index);
  };
  protoOf(YamlListDescriptor).xu = function (index) {
    return this.b1x_1.xu(index);
  };
  protoOf(YamlListDescriptor).su = function () {
    return this.b1x_1.su();
  };
  protoOf(YamlListDescriptor).nu = function () {
    return this.b1x_1.nu();
  };
  protoOf(YamlListDescriptor).tu = function () {
    return this.b1x_1.tu();
  };
  protoOf(YamlListDescriptor).uu = function () {
    return this.b1x_1.uu();
  };
  protoOf(YamlListDescriptor).vu = function () {
    return this.b1x_1.vu();
  };
  var YamlListDescriptor_instance;
  function YamlListDescriptor_getInstance() {
    if (YamlListDescriptor_instance == null)
      new YamlListDescriptor();
    return YamlListDescriptor_instance;
  }
  function YamlListSerializer() {
    YamlListSerializer_instance = this;
    this.d1x_1 = YamlListDescriptor_getInstance();
  }
  protoOf(YamlListSerializer).st = function () {
    return this.d1x_1;
  };
  protoOf(YamlListSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlListInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlListInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return input.h1u_1;
  };
  var YamlListSerializer_instance;
  function YamlListSerializer_getInstance() {
    if (YamlListSerializer_instance == null)
      new YamlListSerializer();
    return YamlListSerializer_instance;
  }
  function YamlMapDescriptor() {
    YamlMapDescriptor_instance = this;
    this.e1x_1 = MapSerializer(YamlScalarSerializer_getInstance(), YamlNodeSerializer_getInstance()).st();
    this.f1x_1 = 'com.charleskorn.kaml.YamlMap';
  }
  protoOf(YamlMapDescriptor).ru = function () {
    return this.f1x_1;
  };
  protoOf(YamlMapDescriptor).wu = function (index) {
    return this.e1x_1.wu(index);
  };
  protoOf(YamlMapDescriptor).xu = function (index) {
    return this.e1x_1.xu(index);
  };
  protoOf(YamlMapDescriptor).su = function () {
    return this.e1x_1.su();
  };
  protoOf(YamlMapDescriptor).nu = function () {
    return this.e1x_1.nu();
  };
  protoOf(YamlMapDescriptor).tu = function () {
    return this.e1x_1.tu();
  };
  protoOf(YamlMapDescriptor).uu = function () {
    return this.e1x_1.uu();
  };
  protoOf(YamlMapDescriptor).vu = function () {
    return this.e1x_1.vu();
  };
  var YamlMapDescriptor_instance;
  function YamlMapDescriptor_getInstance() {
    if (YamlMapDescriptor_instance == null)
      new YamlMapDescriptor();
    return YamlMapDescriptor_instance;
  }
  function YamlMapSerializer() {
    YamlMapSerializer_instance = this;
    this.g1x_1 = YamlMapDescriptor_getInstance();
  }
  protoOf(YamlMapSerializer).st = function () {
    return this.g1x_1;
  };
  protoOf(YamlMapSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlMapInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlMapInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    var tmp = input.b1p_1;
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
    this.h1x_1 = buildSerialDescriptor('com.charleskorn.kaml.YamlNull', ENUM_getInstance(), []);
  }
  protoOf(YamlNullSerializer).st = function () {
    return this.h1x_1;
  };
  protoOf(YamlNullSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlNullInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlNullInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return input.m1x_1;
  };
  var YamlNullSerializer_instance;
  function YamlNullSerializer_getInstance() {
    if (YamlNullSerializer_instance == null)
      new YamlNullSerializer();
    return YamlNullSerializer_instance;
  }
  function YamlScalarSerializer() {
    YamlScalarSerializer_instance = this;
    this.n1x_1 = PrimitiveSerialDescriptor('com.charleskorn.kaml.YamlScalar', STRING_getInstance());
  }
  protoOf(YamlScalarSerializer).st = function () {
    return this.n1x_1;
  };
  protoOf(YamlScalarSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlScalarInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlScalarInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var result = tmp$ret$1;
    return result.s1x_1;
  };
  var YamlScalarSerializer_instance;
  function YamlScalarSerializer_getInstance() {
    if (YamlScalarSerializer_instance == null)
      new YamlScalarSerializer();
    return YamlScalarSerializer_instance;
  }
  function YamlTaggedNodeSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.cu('tag', serializer(StringCompanionObject_instance).st());
    $this$buildSerialDescriptor.cu('node', YamlNodeSerializer_getInstance().r1w_1);
    return Unit_instance;
  }
  function YamlTaggedNodeSerializer() {
    YamlTaggedNodeSerializer_instance = this;
    var tmp = this;
    var tmp_0 = OPEN_getInstance();
    tmp.t1x_1 = buildSerialDescriptor('com.charleskorn.kaml.YamlTaggedNode', tmp_0, [], YamlTaggedNodeSerializer$descriptor$lambda);
  }
  protoOf(YamlTaggedNodeSerializer).st = function () {
    return this.t1x_1;
  };
  protoOf(YamlTaggedNodeSerializer).tt = function (decoder) {
    // Inline function 'com.charleskorn.kaml.asYamlInput' call
    var tmp0 = decoder instanceof YamlPolymorphicInput ? decoder : null;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.charleskorn.kaml.asYamlInput.<anonymous>' call
        var message = 'This serializer can be used only with Yaml format. Expected Decoder to be ' + getKClass(YamlPolymorphicInput).q9() + ', got ' + toString(getKClassFromExpression(decoder));
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var input = tmp$ret$1;
    return new YamlTaggedNode(input.w1w_1, input.y1w_1);
  };
  var YamlTaggedNodeSerializer_instance;
  function YamlTaggedNodeSerializer_getInstance() {
    if (YamlTaggedNodeSerializer_instance == null)
      new YamlTaggedNodeSerializer();
    return YamlTaggedNodeSerializer_instance;
  }
  function YamlNullInput(nullValue, yaml, context, configuration) {
    YamlInput.call(this, nullValue, yaml, context, configuration);
    this.m1x_1 = nullValue;
  }
  protoOf(YamlNullInput).wv = function () {
    return false;
  };
  protoOf(YamlNullInput).vv = function () {
    throw new UnexpectedNullValueException(this.m1x_1.r1q_1);
  };
  protoOf(YamlNullInput).bx = function (descriptor) {
    throw new UnexpectedNullValueException(this.m1x_1.r1q_1);
  };
  protoOf(YamlNullInput).kw = function (descriptor) {
    throw new UnexpectedNullValueException(this.m1x_1.r1q_1);
  };
  protoOf(YamlNullInput).ax = function (descriptor) {
    return -1;
  };
  function _get_pairedPropertyNames__11quvr($this) {
    var tmp = $this.d1y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('pairedPropertyNames');
    }
  }
  function YamlObjectInput$beginStructure$lambda($descriptor) {
    return function ($this$fromCurrentValue) {
      return $this$fromCurrentValue.kw($descriptor);
    };
  }
  function YamlObjectInput(map, yaml, context, configuration) {
    YamlMapLikeInputBase.call(this, map, yaml, context, configuration);
    this.b1y_1 = toList(map.t1t_1.z1());
    this.c1y_1 = 0;
  }
  protoOf(YamlObjectInput).ax = function (descriptor) {
    if (!!(this.d1y_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.collections.associateBy' call
      var this_0 = until(0, descriptor.uu());
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateByTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var inductionVariable = this_0.x_1;
      var last = this_0.y_1;
      if (inductionVariable <= last)
        do {
          var element = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.charleskorn.kaml.YamlObjectInput.decodeElementIndex.<anonymous>' call
          var index = element;
          var elementName = descriptor.wu(index);
          var tmp0_safe_receiver = this.e1p_1.s1p_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1y(elementName);
          var tmp$ret$0 = tmp1_elvis_lhs == null ? elementName : tmp1_elvis_lhs;
          destination.a2(tmp$ret$0, element);
        }
         while (!(element === last));
      tmp.d1y_1 = destination;
    }
    $l$loop: while (true) {
      if (this.c1y_1 === this.b1y_1.k()) {
        return -1;
      }
      var currentEntry = this.b1y_1.p(this.c1y_1);
      this.z1u_1 = currentEntry.s1();
      var tmp0_elvis_lhs = _get_pairedPropertyNames__11quvr(this).w1(this.b1v());
      var fieldDescriptorIndex = tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
      if (fieldDescriptorIndex === -3) {
        if (this.e1p_1.g1p_1) {
          throw new UnknownPropertyException(this.b1v(), _get_pairedPropertyNames__11quvr(this).x1(), this.c1v().u1q_1);
        } else {
          this.c1y_1 = this.c1y_1 + 1 | 0;
          continue $l$loop;
        }
      }
      try {
        this.y1u_1 = Companion_getInstance_1().a1p(this.b1y_1.p(this.c1y_1).t1(), this.c1p_1, this.yw(), this.e1p_1, descriptor.xu(fieldDescriptorIndex));
      } catch ($p) {
        if ($p instanceof IncorrectTypeException) {
          var e = $p;
          throw new InvalidPropertyValueException(this.b1v(), e.r8(), e.w1q_1, e);
        } else {
          throw $p;
        }
      }
      this.a1v_1 = true;
      this.c1y_1 = this.c1y_1 + 1 | 0;
      return fieldDescriptorIndex;
    }
  };
  protoOf(YamlObjectInput).kw = function (descriptor) {
    if (this.e1v()) {
      return this.d1v(YamlObjectInput$beginStructure$lambda(descriptor));
    }
    return protoOf(YamlMapLikeInputBase).kw.call(this, descriptor);
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
    var context = e.o1g_1;
    var contextMark = e.p1g_1;
    if (!(context == null) && !(contextMark == null)) {
      var snippet = contextMark.m1g(4, 2147483647);
      updatedMessage.n7(trimMargin('\n                    |' + context + '\n                    | at line ' + (contextMark.i1g_1 + 1 | 0) + ', column ' + (contextMark.j1g_1 + 1 | 0) + ':\n                    |' + snippet + '\n                    |\n                '));
    }
    var problemMark = e.r1g_1;
    if (!(problemMark == null)) {
      var problem = translateYamlEngineExceptionMessage($this, e.q1g_1);
      var snippet_0 = problemMark.m1g(4, 2147483647);
      updatedMessage.n7(trimMargin('\n                    |' + problem + '\n                    | at line ' + (problemMark.i1g_1 + 1 | 0) + ', column ' + (problemMark.j1g_1 + 1 | 0) + ':\n                    |' + snippet_0 + '\n                '));
    }
    var tmp;
    if (!(problemMark == null)) {
      tmp = path.g1w(new Location(problemMark.i1g_1 + 1 | 0, problemMark.j1g_1 + 1 | 0));
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
      return this$0.f1q_1.j();
    };
  }
  function YamlParser$peekEvent$lambda(this$0) {
    return function () {
      return this$0.f1q_1.u1k();
    };
  }
  function YamlParser(reader, codePointLimit) {
    codePointLimit = codePointLimit === VOID ? null : codePointLimit;
    this.c1q_1 = 'DUMMY_FILE_NAME';
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Companion_instance.ay();
    // Inline function 'com.charleskorn.kaml.YamlParser.loadSettings.<anonymous>' call
    if (!(codePointLimit == null)) {
      this_0.k1c(codePointLimit);
    }
    this_0.j1c(this.c1q_1);
    tmp.d1q_1 = this_0.l1c();
    this.e1q_1 = new StreamReader(this.d1q_1, reader);
    this.f1q_1 = ParserImpl_init_$Create$(this.d1q_1, this.e1q_1);
    this.k1w(ID_StreamStart_getInstance(), Companion_getInstance_8().e1w_1);
    if (this.i1w(Companion_getInstance_8().e1w_1).b1e().equals(ID_StreamEnd_getInstance())) {
      throw new EmptyYamlDocumentException('The YAML document is empty.', Companion_getInstance_8().e1w_1);
    }
    this.k1w(ID_DocumentStart_getInstance(), Companion_getInstance_8().e1w_1);
  }
  protoOf(YamlParser).g1q = function () {
    this.k1w(ID_DocumentEnd_getInstance(), Companion_getInstance_8().e1w_1);
    this.k1w(ID_StreamEnd_getInstance(), Companion_getInstance_8().e1w_1);
  };
  protoOf(YamlParser).a1w = function (path) {
    return checkEvent(this, path, YamlParser$consumeEvent$lambda(this));
  };
  protoOf(YamlParser).i1w = function (path) {
    return checkEvent(this, path, YamlParser$peekEvent$lambda(this));
  };
  protoOf(YamlParser).k1w = function (type, path) {
    var event = this.a1w(path);
    if (!event.b1e().equals(type)) {
      throw new MalformedYamlException('Unexpected ' + event.b1e().toString() + ', expected ' + type.toString(), path.g1w(new Location(ensureNotNull(event.c1e_1).i1g_1, ensureNotNull(event.c1e_1).j1g_1)));
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
    return new YamlPath(plus_0($this.m1s_1, segment));
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.e1w_1 = YamlPath_init_$Create$([Root_getInstance()]);
  }
  protoOf(Companion_7).f1w = function (name, location) {
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
    this.m1s_1 = segments;
    if (this.m1s_1.r()) {
      throw IllegalArgumentException_init_$Create$('Path must contain at least one segment.');
    }
    var tmp;
    var tmp_0 = first(this.m1s_1);
    if (!(tmp_0 instanceof Root)) {
      var tmp_1 = first(this.m1s_1);
      tmp = !(tmp_1 instanceof AliasDefinition);
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('First element of path must be root segment or alias definition.');
    }
    if (drop(this.m1s_1, 1).n1(Root_getInstance())) {
      throw IllegalArgumentException_init_$Create$('Root segment can only be first element of path.');
    }
    this.n1s_1 = last(this.m1s_1).g1v();
  }
  protoOf(YamlPath).g1w = function (location) {
    return withSegment(this, new Error_0(location));
  };
  protoOf(YamlPath).j1w = function (index, location) {
    return withSegment(this, new ListEntry(index, location));
  };
  protoOf(YamlPath).l1w = function (key, location) {
    return withSegment(this, new MapElementKey(key, location));
  };
  protoOf(YamlPath).m1w = function (location) {
    return withSegment(this, new MapElementValue(location));
  };
  protoOf(YamlPath).o1w = function (name, location) {
    return withSegment(this, new AliasReference(name, location));
  };
  protoOf(YamlPath).p1w = function (name, location) {
    return withSegment(this, new AliasDefinition(name, location));
  };
  protoOf(YamlPath).n1w = function (location) {
    return withSegment(this, new Merge(location));
  };
  protoOf(YamlPath).z1s = function () {
    var builder = StringBuilder_init_$Create$();
    var nextSegmentIndex = 1;
    while (nextSegmentIndex <= get_lastIndex(this.m1s_1)) {
      var segmentIndex = nextSegmentIndex;
      nextSegmentIndex = nextSegmentIndex + 1 | 0;
      var segment = this.m1s_1.p(segmentIndex);
      if (segment instanceof ListEntry) {
        builder.o7(_Char___init__impl__6a9atx(91));
        builder.db(segment.h1y_1);
        builder.o7(_Char___init__impl__6a9atx(93));
      } else {
        if (segment instanceof MapElementKey) {
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(builder) > 0) {
            builder.o7(_Char___init__impl__6a9atx(46));
          }
          builder.n7(segment.n1y_1);
        } else {
          if (segment instanceof AliasReference) {
            builder.n7('->&');
            builder.n7(segment.k1y_1);
          } else {
            if (segment instanceof Merge) {
              builder.n7('>>(merged');
              var tmp;
              if (nextSegmentIndex <= get_lastIndex(this.m1s_1)) {
                var tmp_0 = this.m1s_1.p(nextSegmentIndex);
                tmp = tmp_0 instanceof ListEntry;
              } else {
                tmp = false;
              }
              if (tmp) {
                builder.n7(' entry ');
                var tmp_1 = this.m1s_1.p(nextSegmentIndex);
                builder.db((tmp_1 instanceof ListEntry ? tmp_1 : THROW_CCE()).h1y_1);
                nextSegmentIndex = nextSegmentIndex + 1 | 0;
              }
              var tmp_2;
              if (nextSegmentIndex <= get_lastIndex(this.m1s_1)) {
                var tmp_3 = this.m1s_1.p(nextSegmentIndex);
                tmp_2 = tmp_3 instanceof AliasReference;
              } else {
                tmp_2 = false;
              }
              if (tmp_2) {
                builder.n7(' &');
                var tmp_4 = this.m1s_1.p(nextSegmentIndex);
                builder.n7((tmp_4 instanceof AliasReference ? tmp_4 : THROW_CCE()).k1y_1);
                nextSegmentIndex = nextSegmentIndex + 1 | 0;
              }
              builder.n7(')');
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
    return 'YamlPath(segments=' + toString(this.m1s_1) + ')';
  };
  protoOf(YamlPath).hashCode = function () {
    return hashCode(this.m1s_1);
  };
  protoOf(YamlPath).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlPath))
      return false;
    var tmp0_other_with_cast = other instanceof YamlPath ? other : THROW_CCE();
    if (!equals(this.m1s_1, tmp0_other_with_cast.m1s_1))
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
    this.h1y_1 = index;
    this.i1y_1 = location;
  }
  protoOf(ListEntry).g1v = function () {
    return this.i1y_1;
  };
  protoOf(ListEntry).toString = function () {
    return 'ListEntry(index=' + this.h1y_1 + ', location=' + this.i1y_1.toString() + ')';
  };
  protoOf(ListEntry).hashCode = function () {
    var result = this.h1y_1;
    result = imul(result, 31) + this.i1y_1.hashCode() | 0;
    return result;
  };
  protoOf(ListEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListEntry))
      return false;
    var tmp0_other_with_cast = other instanceof ListEntry ? other : THROW_CCE();
    if (!(this.h1y_1 === tmp0_other_with_cast.h1y_1))
      return false;
    if (!this.i1y_1.equals(tmp0_other_with_cast.i1y_1))
      return false;
    return true;
  };
  function MapElementKey(key, location) {
    YamlPathSegment.call(this, location);
    this.n1y_1 = key;
    this.o1y_1 = location;
  }
  protoOf(MapElementKey).g1v = function () {
    return this.o1y_1;
  };
  protoOf(MapElementKey).toString = function () {
    return 'MapElementKey(key=' + this.n1y_1 + ', location=' + this.o1y_1.toString() + ')';
  };
  protoOf(MapElementKey).hashCode = function () {
    var result = getStringHashCode(this.n1y_1);
    result = imul(result, 31) + this.o1y_1.hashCode() | 0;
    return result;
  };
  protoOf(MapElementKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapElementKey))
      return false;
    var tmp0_other_with_cast = other instanceof MapElementKey ? other : THROW_CCE();
    if (!(this.n1y_1 === tmp0_other_with_cast.n1y_1))
      return false;
    if (!this.o1y_1.equals(tmp0_other_with_cast.o1y_1))
      return false;
    return true;
  };
  function MapElementValue(location) {
    YamlPathSegment.call(this, location);
    this.q1y_1 = location;
  }
  protoOf(MapElementValue).g1v = function () {
    return this.q1y_1;
  };
  protoOf(MapElementValue).toString = function () {
    return 'MapElementValue(location=' + this.q1y_1.toString() + ')';
  };
  protoOf(MapElementValue).hashCode = function () {
    return this.q1y_1.hashCode();
  };
  protoOf(MapElementValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapElementValue))
      return false;
    var tmp0_other_with_cast = other instanceof MapElementValue ? other : THROW_CCE();
    if (!this.q1y_1.equals(tmp0_other_with_cast.q1y_1))
      return false;
    return true;
  };
  function AliasReference(name, location) {
    YamlPathSegment.call(this, location);
    this.k1y_1 = name;
    this.l1y_1 = location;
  }
  protoOf(AliasReference).g1v = function () {
    return this.l1y_1;
  };
  protoOf(AliasReference).toString = function () {
    return 'AliasReference(name=' + this.k1y_1 + ', location=' + this.l1y_1.toString() + ')';
  };
  protoOf(AliasReference).hashCode = function () {
    var result = getStringHashCode(this.k1y_1);
    result = imul(result, 31) + this.l1y_1.hashCode() | 0;
    return result;
  };
  protoOf(AliasReference).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AliasReference))
      return false;
    var tmp0_other_with_cast = other instanceof AliasReference ? other : THROW_CCE();
    if (!(this.k1y_1 === tmp0_other_with_cast.k1y_1))
      return false;
    if (!this.l1y_1.equals(tmp0_other_with_cast.l1y_1))
      return false;
    return true;
  };
  function AliasDefinition(name, location) {
    YamlPathSegment.call(this, location);
    this.s1y_1 = name;
    this.t1y_1 = location;
  }
  protoOf(AliasDefinition).g1v = function () {
    return this.t1y_1;
  };
  protoOf(AliasDefinition).toString = function () {
    return 'AliasDefinition(name=' + this.s1y_1 + ', location=' + this.t1y_1.toString() + ')';
  };
  protoOf(AliasDefinition).hashCode = function () {
    var result = getStringHashCode(this.s1y_1);
    result = imul(result, 31) + this.t1y_1.hashCode() | 0;
    return result;
  };
  protoOf(AliasDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AliasDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof AliasDefinition ? other : THROW_CCE();
    if (!(this.s1y_1 === tmp0_other_with_cast.s1y_1))
      return false;
    if (!this.t1y_1.equals(tmp0_other_with_cast.t1y_1))
      return false;
    return true;
  };
  function Merge(location) {
    YamlPathSegment.call(this, location);
    this.v1y_1 = location;
  }
  protoOf(Merge).g1v = function () {
    return this.v1y_1;
  };
  protoOf(Merge).toString = function () {
    return 'Merge(location=' + this.v1y_1.toString() + ')';
  };
  protoOf(Merge).hashCode = function () {
    return this.v1y_1.hashCode();
  };
  protoOf(Merge).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Merge))
      return false;
    var tmp0_other_with_cast = other instanceof Merge ? other : THROW_CCE();
    if (!this.v1y_1.equals(tmp0_other_with_cast.v1y_1))
      return false;
    return true;
  };
  function Error_0(location) {
    YamlPathSegment.call(this, location);
    this.x1y_1 = location;
  }
  protoOf(Error_0).g1v = function () {
    return this.x1y_1;
  };
  protoOf(Error_0).toString = function () {
    return 'Error(location=' + this.x1y_1.toString() + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return this.x1y_1.hashCode();
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!this.x1y_1.equals(tmp0_other_with_cast.x1y_1))
      return false;
    return true;
  };
  function YamlPathSegment(location) {
    this.f1y_1 = location;
  }
  protoOf(YamlPathSegment).g1v = function () {
    return this.f1y_1;
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
    var tmp = $this.a1x_1;
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
    var tmp1_elvis_lhs = Companion_getInstance_9().y1y_1.tb(message, 0);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var match = tmp_0;
    var unknownType = match.ic().p(1);
    var className = match.ic().p(2);
    var tmp2_subject = deserializer.st().su();
    var tmp_1;
    if (equals(tmp2_subject, SEALED_getInstance())) {
      tmp_1 = getKnownTypesForSealedType($this, deserializer);
    } else if (equals(tmp2_subject, OPEN_getInstance())) {
      tmp_1 = getKnownTypesForOpenType($this, className);
    } else {
      throw IllegalArgumentException_init_$Create$("Can't get known types for descriptor of kind " + deserializer.st().su().toString());
    }
    var knownTypes = tmp_1;
    throw new UnknownPolymorphicTypeException(unknownType, knownTypes, $this.x1w_1, e);
  }
  function getKnownTypesForSealedType($this, deserializer) {
    var typesDescriptor = deserializer.st().xu(1);
    return toSet(get_elementNames(typesDescriptor));
  }
  function getKnownTypesForOpenType($this, className) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var knownTypes = LinkedHashSet_init_$Create$();
    var tmp = $this.yw();
    tmp.y16(new YamlPolymorphicInput$getKnownTypesForOpenType$1(className, knownTypes));
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
    tmp.y1y_1 = Regex_init_$Create$(this_0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function YamlPolymorphicInput$getKnownTypesForOpenType$1($className, $knownTypes) {
    this.z1y_1 = $className;
    this.a1z_1 = $knownTypes;
  }
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).h17 = function (kClass, provider) {
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).k17 = function (baseClass, actualClass, actualSerializer) {
    if (baseClass.q9() === this.z1y_1) {
      this.a1z_1.e(actualSerializer.st().ru());
    }
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).l17 = function (baseClass, defaultSerializerProvider) {
    throw UnsupportedOperationException_init_$Create$('This method should never be called.');
  };
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).m17 = function (baseClass, defaultDeserializerProvider) {
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
    this.w1w_1 = typeName;
    this.x1w_1 = typeNamePath;
    this.y1w_1 = contentNode;
    this.z1w_1 = CurrentField_NotStarted_getInstance();
  }
  protoOf(YamlPolymorphicInput).ax = function (descriptor) {
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
        this.z1w_1 = CurrentField_Type_getInstance();
        tmp = 0;
        break;
      case 1:
        var tmp1_subject = this.y1w_1;
        if (tmp1_subject instanceof YamlScalar)
          this.a1x_1 = new YamlScalarInput(this.y1w_1, this.c1p_1, this.yw(), this.e1p_1);
        else {
          if (tmp1_subject instanceof YamlNull)
            this.a1x_1 = new YamlNullInput(this.y1w_1, this.c1p_1, this.yw(), this.e1p_1);
        }

        this.z1w_1 = CurrentField_Content_getInstance();
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
  protoOf(YamlPolymorphicInput).wv = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNotNullMark.<anonymous>' call

        tmp = true;
        break;
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNotNullMark.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).wv();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).xv = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeNull';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeNull.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).xv();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).yv = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeBoolean';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeBoolean.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).yv();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).zv = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeByte';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeByte.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).zv();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).aw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeShort';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeShort.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).aw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).bw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeInt';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeInt.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).bw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).cw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeLong';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeLong.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).cw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).dw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeFloat';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeFloat.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).dw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).ew = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeDouble';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeDouble.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).ew();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).fw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var functionName = 'decodeChar';
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        throw UnsupportedOperationException_init_$Create$("Can't call " + functionName + '() on type field');
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeChar.stub_for_inlining' call

        var tmp$ret$0 = _get_contentDecoder__ypxfj4(this).fw();
        tmp = new Char(tmp$ret$0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp.b1_1;
  };
  protoOf(YamlPolymorphicInput).gw = function () {
    // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.maybeCallOnContent' call
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeString.<anonymous>' call

        tmp = this.w1w_1;
        break;
      case 2:
        // Inline function 'com.charleskorn.kaml.YamlPolymorphicInput.decodeString.stub_for_inlining' call

        tmp = _get_contentDecoder__ypxfj4(this).gw();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).kw = function (descriptor) {
    var tmp;
    switch (this.z1w_1.e2_1) {
      case 0:
      case 1:
        tmp = protoOf(YamlInput).kw.call(this, descriptor);
        break;
      case 2:
        this.a1x_1 = Companion_getInstance_1().a1p(this.y1w_1, this.c1p_1, this.yw(), this.e1p_1, descriptor);
        return _get_contentDecoder__ypxfj4(this);
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(YamlPolymorphicInput).jw = function (deserializer) {
    try {
      return protoOf(YamlInput).jw.call(this, deserializer);
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
    this.s1x_1 = scalar;
  }
  protoOf(YamlScalarInput).gw = function () {
    return this.s1x_1.t1q_1;
  };
  protoOf(YamlScalarInput).bw = function () {
    return this.s1x_1.x2();
  };
  protoOf(YamlScalarInput).cw = function () {
    return this.s1x_1.n1v();
  };
  protoOf(YamlScalarInput).aw = function () {
    return this.s1x_1.m1v();
  };
  protoOf(YamlScalarInput).zv = function () {
    return this.s1x_1.l1v();
  };
  protoOf(YamlScalarInput).ew = function () {
    return this.s1x_1.y2();
  };
  protoOf(YamlScalarInput).dw = function () {
    return this.s1x_1.o1v();
  };
  protoOf(YamlScalarInput).yv = function () {
    return this.s1x_1.q1v();
  };
  protoOf(YamlScalarInput).fw = function () {
    return this.s1x_1.s1v();
  };
  protoOf(YamlScalarInput).ax = function (descriptor) {
    return 0;
  };
  function bufferedSource(_this__u8e3s4) {
    return (new Buffer()).x19(Companion_getInstance().v18(_this__u8e3s4));
  }
  //region block: post-declaration
  defineProp(protoOf(YamlException), 'message', function () {
    return this.r8();
  });
  defineProp(protoOf(YamlException), 'cause', function () {
    return this.s8();
  });
  protoOf(YamlPolymorphicInput$getKnownTypesForOpenType$1).j17 = contextual;
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
  _.$_$.a = Companion_getInstance_0;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./snakeyaml-engine-kmp.js'), require('./okio-parent-okio.js')));

//# sourceMappingURL=kaml.js.map

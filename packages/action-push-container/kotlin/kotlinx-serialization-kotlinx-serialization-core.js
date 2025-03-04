(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForInterface = kotlin_kotlin.$_$.e8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var emptyList = kotlin_kotlin.$_$.i5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.bc;
  var toString = kotlin_kotlin.$_$.a9;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var VOID = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.g9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var objectCreate = kotlin_kotlin.$_$.w8;
  var captureStack = kotlin_kotlin.$_$.n7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException = kotlin_kotlin.$_$.db;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var KClass = kotlin_kotlin.$_$.f9;
  var isInterface = kotlin_kotlin.$_$.p8;
  var Triple = kotlin_kotlin.$_$.mb;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.hb;
  var Entry = kotlin_kotlin.$_$.g4;
  var KtMap = kotlin_kotlin.$_$.h4;
  var KtMutableMap = kotlin_kotlin.$_$.j4;
  var LinkedHashMap = kotlin_kotlin.$_$.d4;
  var HashMap = kotlin_kotlin.$_$.b4;
  var KtSet = kotlin_kotlin.$_$.l4;
  var KtMutableSet = kotlin_kotlin.$_$.k4;
  var LinkedHashSet = kotlin_kotlin.$_$.e4;
  var HashSet = kotlin_kotlin.$_$.c4;
  var Collection = kotlin_kotlin.$_$.a4;
  var KtList = kotlin_kotlin.$_$.f4;
  var KtMutableList = kotlin_kotlin.$_$.i4;
  var ArrayList = kotlin_kotlin.$_$.z3;
  var copyToArray = kotlin_kotlin.$_$.f5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.e2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.d2;
  var Result = kotlin_kotlin.$_$.ib;
  var ensureNotNull = kotlin_kotlin.$_$.ac;
  var equals = kotlin_kotlin.$_$.v7;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var isBlank = kotlin_kotlin.$_$.w9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var toList = kotlin_kotlin.$_$.j6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.h6;
  var toBooleanArray = kotlin_kotlin.$_$.g6;
  var withIndex = kotlin_kotlin.$_$.o6;
  var to = kotlin_kotlin.$_$.hc;
  var toMap = kotlin_kotlin.$_$.l6;
  var lazy_0 = kotlin_kotlin.$_$.cc;
  var contentEquals = kotlin_kotlin.$_$.t4;
  var until = kotlin_kotlin.$_$.e9;
  var joinToString = kotlin_kotlin.$_$.r5;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.fb;
  var Char = kotlin_kotlin.$_$.xa;
  var Companion_getInstance = kotlin_kotlin.$_$.p3;
  var Duration = kotlin_kotlin.$_$.va;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q3;
  var hashCode = kotlin_kotlin.$_$.a8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.l;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var asList = kotlin_kotlin.$_$.o4;
  var isArray = kotlin_kotlin.$_$.h8;
  var step = kotlin_kotlin.$_$.d9;
  var getValue = kotlin_kotlin.$_$.p5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.gc;
  var KTypeParameter = kotlin_kotlin.$_$.h9;
  var contentHashCode = kotlin_kotlin.$_$.v4;
  var fillArrayVal = kotlin_kotlin.$_$.w7;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r3;
  var isCharArray = kotlin_kotlin.$_$.k8;
  var charArray = kotlin_kotlin.$_$.p7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.j3;
  var isDoubleArray = kotlin_kotlin.$_$.m8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.k3;
  var isFloatArray = kotlin_kotlin.$_$.n8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.s3;
  var isLongArray = kotlin_kotlin.$_$.q8;
  var longArray = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.w3;
  var ULongArray = kotlin_kotlin.$_$.rb;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.u2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.t2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isIntArray = kotlin_kotlin.$_$.o8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.v3;
  var UIntArray = kotlin_kotlin.$_$.pb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.o2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isShortArray = kotlin_kotlin.$_$.r8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.x3;
  var UShortArray = kotlin_kotlin.$_$.tb;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.a3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.i3;
  var isByteArray = kotlin_kotlin.$_$.j8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.u3;
  var UByteArray = kotlin_kotlin.$_$.nb;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.h2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.f2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.h3;
  var isBooleanArray = kotlin_kotlin.$_$.i8;
  var coerceAtLeast = kotlin_kotlin.$_$.b9;
  var copyOf = kotlin_kotlin.$_$.a5;
  var copyOf_0 = kotlin_kotlin.$_$.c5;
  var copyOf_1 = kotlin_kotlin.$_$.d5;
  var copyOf_2 = kotlin_kotlin.$_$.y4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.x2;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.y2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.v2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.w2;
  var copyOf_3 = kotlin_kotlin.$_$.e5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.r2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.s2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.p2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.q2;
  var copyOf_4 = kotlin_kotlin.$_$.x4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.d3;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.e3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.b3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.c3;
  var copyOf_5 = kotlin_kotlin.$_$.b5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.j2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.k2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.g2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.i2;
  var copyOf_6 = kotlin_kotlin.$_$.z4;
  var trimIndent = kotlin_kotlin.$_$.sa;
  var ULong = kotlin_kotlin.$_$.sb;
  var UInt = kotlin_kotlin.$_$.qb;
  var UShort = kotlin_kotlin.$_$.ub;
  var UByte = kotlin_kotlin.$_$.ob;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.dc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o3;
  var Unit = kotlin_kotlin.$_$.vb;
  var Uuid = kotlin_kotlin.$_$.wa;
  var mapOf = kotlin_kotlin.$_$.x5;
  var get_js = kotlin_kotlin.$_$.s8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.q5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_instance = kotlin_kotlin.$_$.t3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.zb;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(KSerializer, 'KSerializer');
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.vu(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.yx(descriptor, index, deserializer, previousValue) : $super.yx.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.j18(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ev('type', serializer_0(StringCompanionObject_instance).uu());
      $this$buildSerialDescriptor.ev('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.fv_1.w9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.yu_1 = this$0.gv_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.fv_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.fv_1 = baseClass;
    this.gv_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.hv_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).iv = function () {
    return this.fv_1;
  };
  protoOf(PolymorphicSerializer).uu = function () {
    var tmp0 = this.hv_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.v1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.fv_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.jv(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.iv());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.uu();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.h();
      while (_iterator__ex2g4s.i()) {
        var item = _iterator__ex2g4s.j();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.h();
      while (_iterator__ex2g4s_0.i()) {
        var item_0 = _iterator__ex2g4s_0.j();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.e(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.p(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.p(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.p(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.p(0), serializers.p(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.p(0), serializers.p(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.p(0), serializers.p(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.p(0), serializers.p(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.p(0), serializers.p(1), serializers.p(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.p(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.la();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.ka();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.stub_for_inlining' call
      var tmp$ret$0 = typeOrThrow(item);
      destination.e(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.q()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.lv(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.kv()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.q()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.lv(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.mv(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.p(0).ja();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().nv(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().nv(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().ov(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().ov(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.p(0).ja();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.p(0).ja();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.uu().pv()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.qv_1 = original;
    this.rv_1 = kClass;
    this.sv_1 = this.qv_1.tv() + '<' + this.rv_1.w9() + '>';
  }
  protoOf(ContextDescriptor).tv = function () {
    return this.sv_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.qv_1, another.qv_1) && another.rv_1.equals(this.rv_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.rv_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.sv_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.rv_1) + ', original: ' + toString(this.qv_1) + ')';
  };
  protoOf(ContextDescriptor).uv = function () {
    return this.qv_1.uv();
  };
  protoOf(ContextDescriptor).pv = function () {
    return this.qv_1.pv();
  };
  protoOf(ContextDescriptor).vv = function () {
    return this.qv_1.vv();
  };
  protoOf(ContextDescriptor).wv = function () {
    return this.qv_1.wv();
  };
  protoOf(ContextDescriptor).xv = function () {
    return this.qv_1.xv();
  };
  protoOf(ContextDescriptor).yv = function (index) {
    return this.qv_1.yv(index);
  };
  protoOf(ContextDescriptor).zv = function (index) {
    return this.qv_1.zv(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.lv(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.uu();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.rv_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.aw_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.ew_1 = $this_elementDescriptors;
    this.dw_1 = $this_elementDescriptors.wv();
  }
  protoOf(elementDescriptors$1).i = function () {
    return this.dw_1 > 0;
  };
  protoOf(elementDescriptors$1).j = function () {
    var tmp = this.ew_1.wv();
    var _unary__edvuaz = this.dw_1;
    this.dw_1 = _unary__edvuaz - 1 | 0;
    return this.ew_1.zv(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.fw_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.fw_1);
  };
  function elementNames$1($this_elementNames) {
    this.hw_1 = $this_elementNames;
    this.gw_1 = $this_elementNames.wv();
  }
  protoOf(elementNames$1).i = function () {
    return this.gw_1 > 0;
  };
  protoOf(elementNames$1).j = function () {
    var tmp = this.hw_1.wv();
    var _unary__edvuaz = this.gw_1;
    this.gw_1 = _unary__edvuaz - 1 | 0;
    return this.hw_1.yv(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.iw_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.iw_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.zu_1.k(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.wu_1 = serialName;
    this.xu_1 = false;
    this.yu_1 = emptyList();
    this.zu_1 = ArrayList_init_$Create$_0();
    this.av_1 = HashSet_init_$Create$();
    this.bv_1 = ArrayList_init_$Create$_0();
    this.cv_1 = ArrayList_init_$Create$_0();
    this.dv_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).jw = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.av_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.wu_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.zu_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.bv_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.cv_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.dv_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).ev = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.jw(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.jw.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.vw_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.v1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.uw_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.yv(it) + ': ' + this$0.zv(it).tv();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.kw_1 = serialName;
    this.lw_1 = kind;
    this.mw_1 = elementsCount;
    this.nw_1 = builder.yu_1;
    this.ow_1 = toHashSet(builder.zu_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.zu_1;
    tmp.pw_1 = copyToArray(this_0);
    this.qw_1 = compactArray(builder.bv_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.cv_1;
    tmp_0.rw_1 = copyToArray(this_1);
    this.sw_1 = toBooleanArray(builder.dv_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.pw_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.le_1, item.ke_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.tw_1 = toMap(destination);
    this.uw_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.vw_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).tv = function () {
    return this.kw_1;
  };
  protoOf(SerialDescriptorImpl).uv = function () {
    return this.lw_1;
  };
  protoOf(SerialDescriptorImpl).wv = function () {
    return this.mw_1;
  };
  protoOf(SerialDescriptorImpl).xv = function () {
    return this.nw_1;
  };
  protoOf(SerialDescriptorImpl).ww = function () {
    return this.ow_1;
  };
  protoOf(SerialDescriptorImpl).yv = function (index) {
    return getChecked(this.pw_1, index);
  };
  protoOf(SerialDescriptorImpl).zv = function (index) {
    return getChecked(this.qw_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tv() === other.tv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.uw_1, other.uw_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wv() === other.wv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wv();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zv(index).tv() === other.zv(index).tv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zv(index).uv(), other.zv(index).uv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.mw_1);
    var tmp_0 = this.kw_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.zu_1.k(), toList(typeParameters), sdBuilder);
  }
  function get_nullable_0(_this__u8e3s4) {
    if (_this__u8e3s4.pv())
      return _this__u8e3s4;
    return new SerialDescriptorForNullable(_this__u8e3s4);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).w9());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).xw = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).yw = function () {
    return true;
  };
  protoOf(AbstractDecoder).zw = function () {
    return null;
  };
  protoOf(AbstractDecoder).ax = function () {
    var tmp = this.xw();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bx = function () {
    var tmp = this.xw();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cx = function () {
    var tmp = this.xw();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dx = function () {
    var tmp = this.xw();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ex = function () {
    var tmp = this.xw();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fx = function () {
    var tmp = this.xw();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gx = function () {
    var tmp = this.xw();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hx = function () {
    var tmp = this.xw();
    return tmp instanceof Char ? tmp.c1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).ix = function () {
    var tmp = this.xw();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jx = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).kx = function (deserializer, previousValue) {
    return this.lx(deserializer);
  };
  protoOf(AbstractDecoder).mx = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).nx = function (descriptor) {
  };
  protoOf(AbstractDecoder).ox = function (descriptor, index) {
    return this.ax();
  };
  protoOf(AbstractDecoder).px = function (descriptor, index) {
    return this.bx();
  };
  protoOf(AbstractDecoder).qx = function (descriptor, index) {
    return this.cx();
  };
  protoOf(AbstractDecoder).rx = function (descriptor, index) {
    return this.dx();
  };
  protoOf(AbstractDecoder).sx = function (descriptor, index) {
    return this.ex();
  };
  protoOf(AbstractDecoder).tx = function (descriptor, index) {
    return this.fx();
  };
  protoOf(AbstractDecoder).ux = function (descriptor, index) {
    return this.gx();
  };
  protoOf(AbstractDecoder).vx = function (descriptor, index) {
    return this.hx();
  };
  protoOf(AbstractDecoder).wx = function (descriptor, index) {
    return this.ix();
  };
  protoOf(AbstractDecoder).xx = function (descriptor, index) {
    return this.jx(descriptor.zv(index));
  };
  protoOf(AbstractDecoder).yx = function (descriptor, index, deserializer, previousValue) {
    return this.kx(deserializer, previousValue);
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.wx($this.uu(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.zx($this.uu(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).vu = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.uu();
    var composite = decoder.mx(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.by()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.cy(this.uu());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.wx(this.uu(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.zx(this.uu(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp1 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.nx(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).jv = function (decoder, klassName) {
    return decoder.ay().ey(this.iv(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.w9() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.w9() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.fy_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).uu = function () {
    return this.fy_1;
  };
  protoOf(NothingSerializer_0).vu = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.gy_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).uu = function () {
    return this.gy_1;
  };
  protoOf(DurationSerializer).hy = function (decoder) {
    return Companion_getInstance().wh(decoder.ix());
  };
  protoOf(DurationSerializer).vu = function (decoder) {
    return new Duration(this.hy(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.iy_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).uu = function () {
    return this.iy_1;
  };
  protoOf(UuidSerializer).vu = function (decoder) {
    return Companion_getInstance_0().pi(decoder.ix());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).tv = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).tv = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).tv = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).tv = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.ly_1 = elementDescriptor;
    this.my_1 = 1;
  }
  protoOf(ListLikeDescriptor).uv = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).wv = function () {
    return this.my_1;
  };
  protoOf(ListLikeDescriptor).yv = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).zv = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.tv() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.ly_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ly_1, other.ly_1) && this.tv() === other.tv())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ly_1), 31) + getStringHashCode(this.tv()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.tv() + '(' + toString(this.ly_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ry_1 = serialName;
    this.sy_1 = keyDescriptor;
    this.ty_1 = valueDescriptor;
    this.uy_1 = 2;
  }
  protoOf(MapLikeDescriptor).tv = function () {
    return this.ry_1;
  };
  protoOf(MapLikeDescriptor).uv = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).wv = function () {
    return this.uy_1;
  };
  protoOf(MapLikeDescriptor).yv = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).zv = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.tv() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.sy_1;
        break;
      case 1:
        tmp = this.ty_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.tv() === other.tv()))
      return false;
    if (!equals(this.sy_1, other.sy_1))
      return false;
    if (!equals(this.ty_1, other.ty_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.tv());
    result = imul(31, result) + hashCode(this.sy_1) | 0;
    result = imul(31, result) + hashCode(this.ty_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.tv() + '(' + toString(this.sy_1) + ', ' + toString(this.ty_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.zy_1 = primitive.tv() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).tv = function () {
    return this.zy_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.bz_1 = new ArrayListClassDesc(element.uu());
  }
  protoOf(ArrayListSerializer).uu = function () {
    return this.bz_1;
  };
  protoOf(ArrayListSerializer).cz = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).dz = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ArrayListSerializer).ez = function (_this__u8e3s4) {
    return this.dz(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).gz = function (_this__u8e3s4) {
    return this.fz(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).iz = function (_this__u8e3s4) {
    return this.hz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jz = function (_this__u8e3s4, size) {
    return _this__u8e3s4.b5(size);
  };
  protoOf(ArrayListSerializer).kz = function (_this__u8e3s4, size) {
    return this.jz(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).lz = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.j4(index, element);
  };
  protoOf(ArrayListSerializer).mz = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.lz(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.tz_1 = new HashSetClassDesc(eSerializer.uu());
  }
  protoOf(HashSetSerializer).uu = function () {
    return this.tz_1;
  };
  protoOf(HashSetSerializer).cz = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).uz = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(HashSetSerializer).ez = function (_this__u8e3s4) {
    return this.uz(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).gz = function (_this__u8e3s4) {
    return this.vz(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).wz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).iz = function (_this__u8e3s4) {
    return this.wz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).xz = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).kz = function (_this__u8e3s4, size) {
    return this.xz(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).yz = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).mz = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.yz(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.a10_1 = new LinkedHashSetClassDesc(eSerializer.uu());
  }
  protoOf(LinkedHashSetSerializer).uu = function () {
    return this.a10_1;
  };
  protoOf(LinkedHashSetSerializer).cz = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).b10 = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(LinkedHashSetSerializer).ez = function (_this__u8e3s4) {
    return this.b10(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).c10 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).gz = function (_this__u8e3s4) {
    return this.c10(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).wz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).iz = function (_this__u8e3s4) {
    return this.wz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).d10 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).kz = function (_this__u8e3s4, size) {
    return this.d10(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).e10 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).mz = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.e10(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.h10_1 = new HashMapClassDesc(kSerializer.uu(), vSerializer.uu());
  }
  protoOf(HashMapSerializer).uu = function () {
    return this.h10_1;
  };
  protoOf(HashMapSerializer).cz = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).i10 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(HashMapSerializer).ez = function (_this__u8e3s4) {
    return this.i10(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).j10 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).gz = function (_this__u8e3s4) {
    return this.j10(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).k10 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).iz = function (_this__u8e3s4) {
    return this.k10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).l10 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).kz = function (_this__u8e3s4, size) {
    return this.l10(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.s10_1 = new LinkedHashMapClassDesc(kSerializer.uu(), vSerializer.uu());
  }
  protoOf(LinkedHashMapSerializer).uu = function () {
    return this.s10_1;
  };
  protoOf(LinkedHashMapSerializer).cz = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).t10 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(LinkedHashMapSerializer).ez = function (_this__u8e3s4) {
    return this.t10(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).u10 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).gz = function (_this__u8e3s4) {
    return this.u10(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).k10 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).iz = function (_this__u8e3s4) {
    return this.k10((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).v10 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).kz = function (_this__u8e3s4, size) {
    return this.v10(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.x10_1 = kClass;
    this.y10_1 = new ArrayClassDesc(eSerializer.uu());
  }
  protoOf(ReferenceArraySerializer).uu = function () {
    return this.y10_1;
  };
  protoOf(ReferenceArraySerializer).cz = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ReferenceArraySerializer).ez = function (_this__u8e3s4) {
    return this.z10(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).a11 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.x10_1);
  };
  protoOf(ReferenceArraySerializer).gz = function (_this__u8e3s4) {
    return this.a11(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).b11 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).iz = function (_this__u8e3s4) {
    return this.b11((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).c11 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.b5(size);
  };
  protoOf(ReferenceArraySerializer).kz = function (_this__u8e3s4, size) {
    return this.c11(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).d11 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.j4(index, element);
  };
  protoOf(ReferenceArraySerializer).mz = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.d11(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.m10_1 = keySerializer;
    this.n10_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).o10 = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.y_1;
    var last = progression.z_1;
    var step_0 = progression.a1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.p10(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).oz = function (decoder, builder, startIndex, size) {
    return this.o10(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).p10 = function (decoder, index, builder, checkIndex) {
    var key = decoder.zx(this.uu(), index, this.m10_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.cy(this.uu());
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.w1(key)) {
      var tmp_2 = this.n10_1.uu().uv();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.yx(this.uu(), vIndex, this.n10_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.zx(this.uu(), vIndex, this.n10_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.c2(key, value);
  };
  protoOf(MapLikeSerializer).pz = function (decoder, index, builder, checkIndex) {
    return this.p10(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.nz_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).oz = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.pz(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).pz = function (decoder, index, builder, checkIndex) {
    this.mz(builder, index, decoder.zx(this.uu(), index, this.nz_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.dy($this.uu());
    $this.kz(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).rz = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.iz(previous);
    var builder = tmp1_elvis_lhs == null ? this.cz() : tmp1_elvis_lhs;
    var startIndex = this.ez(builder);
    var compositeDecoder = decoder.mx(this.uu());
    if (compositeDecoder.by()) {
      this.oz(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.cy(this.uu());
        if (index === -1)
          break $l$loop;
        this.qz(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.nx(this.uu());
    return this.gz(builder);
  };
  protoOf(AbstractCollectionSerializer).vu = function (decoder) {
    return this.rz(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).qz = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.pz(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.pz.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.f11_1 = new PrimitiveArrayDescriptor(primitiveSerializer.uu());
  }
  protoOf(PrimitiveArraySerializer).uu = function () {
    return this.f11_1;
  };
  protoOf(PrimitiveArraySerializer).g11 = function (_this__u8e3s4) {
    return _this__u8e3s4.h11();
  };
  protoOf(PrimitiveArraySerializer).ez = function (_this__u8e3s4) {
    return this.g11(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i11 = function (_this__u8e3s4) {
    return _this__u8e3s4.j11();
  };
  protoOf(PrimitiveArraySerializer).gz = function (_this__u8e3s4) {
    return this.i11(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).k11 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.l11(size);
  };
  protoOf(PrimitiveArraySerializer).kz = function (_this__u8e3s4, size) {
    return this.k11(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).m11 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).mz = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.m11(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).cz = function () {
    return this.iz(this.n11());
  };
  protoOf(PrimitiveArraySerializer).vu = function (decoder) {
    return this.rz(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).p11 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.h11() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.l11(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.l11.call(this, requiredCapacity);
    }
    return tmp;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.c12_1 = true;
  }
  protoOf(InlineClassDescriptor).vv = function () {
    return this.c12_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tv() === other.tv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.c12_1 && contentEquals(this.p12(), other.p12()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wv() === other.wv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wv();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zv(index).tv() === other.zv(index).tv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zv(index).uv(), other.zv(index).uv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.q12_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).r12 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.q12_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).uu = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).vu = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.t12_1 = OBJECT_getInstance();
    this.u12_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).uv = function () {
    return this.t12_1;
  };
  protoOf(NothingSerialDescriptor).tv = function () {
    return this.u12_1;
  };
  protoOf(NothingSerialDescriptor).wv = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).yv = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zv = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.u12_1) + imul(31, this.t12_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.v12_1 = serializer;
    this.w12_1 = new SerialDescriptorForNullable(this.v12_1.uu());
  }
  protoOf(NullableSerializer).uu = function () {
    return this.w12_1;
  };
  protoOf(NullableSerializer).vu = function (decoder) {
    return decoder.yw() ? decoder.lx(this.v12_1) : decoder.zw();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.v12_1, other.v12_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.v12_1);
  };
  function SerialDescriptorForNullable(original) {
    this.aw_1 = original;
    this.bw_1 = this.aw_1.tv() + '?';
    this.cw_1 = cachedSerialNames(this.aw_1);
  }
  protoOf(SerialDescriptorForNullable).tv = function () {
    return this.bw_1;
  };
  protoOf(SerialDescriptorForNullable).ww = function () {
    return this.cw_1;
  };
  protoOf(SerialDescriptorForNullable).pv = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.aw_1, other.aw_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.aw_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.aw_1), 31);
  };
  protoOf(SerialDescriptorForNullable).uv = function () {
    return this.aw_1.uv();
  };
  protoOf(SerialDescriptorForNullable).vv = function () {
    return this.aw_1.vv();
  };
  protoOf(SerialDescriptorForNullable).wv = function () {
    return this.aw_1.wv();
  };
  protoOf(SerialDescriptorForNullable).xv = function () {
    return this.aw_1.xv();
  };
  protoOf(SerialDescriptorForNullable).yv = function (index) {
    return this.aw_1.yv(index);
  };
  protoOf(SerialDescriptorForNullable).zv = function (index) {
    return this.aw_1.zv(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.yu_1 = this$0.y12_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.x12_1 = objectInstance;
    this.y12_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z12_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).uu = function () {
    var tmp0 = this.z12_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.v1();
  };
  protoOf(ObjectSerializer).vu = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.uu();
    var composite = decoder.mx(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.by()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.cy(this.uu());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.nx(descriptor);
    return this.x12_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.uu();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ww();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.wv());
    var inductionVariable = 0;
    var last = _this__u8e3s4.wv();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.yv(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.ja();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.bg_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.bg_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.w9();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.q())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.tv());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.tv();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.uv();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.m12_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.v1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.o12_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.v1();
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.e12_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r12();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.e12_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s12();
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
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.uu();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.p12());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.yv(i) + ': ' + this$0.zv(i).tv();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.d12_1 = serialName;
    this.e12_1 = generatedSerializer;
    this.f12_1 = elementsCount;
    this.g12_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.f12_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.h12_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.f12_1;
    tmp_3.i12_1 = fillArrayVal(Array(size), null);
    this.j12_1 = null;
    this.k12_1 = booleanArray(this.f12_1);
    this.l12_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.m12_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.n12_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.o12_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).tv = function () {
    return this.d12_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wv = function () {
    return this.f12_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).uv = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).xv = function () {
    var tmp0_elvis_lhs = this.j12_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ww = function () {
    return this.l12_1.z1();
  };
  protoOf(PluginGeneratedSerialDescriptor).p12 = function () {
    var tmp0 = this.n12_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).zv = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).uu();
  };
  protoOf(PluginGeneratedSerialDescriptor).yv = function (index) {
    return getChecked(this.h12_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.tv() === other.tv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.p12(), other.p12())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.wv() === other.wv())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.wv();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.zv(index).tv() === other.zv(index).tv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.zv(index).uv(), other.zv(index).uv())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.f12_1);
    var tmp_0 = this.tv() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.p12();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).d13 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.d13((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).n11 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).e13 = function (decoder, index, builder, checkIndex) {
    builder.h13(decoder.vx(this.f11_1, index));
  };
  protoOf(CharArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.e13(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.e13(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).k13 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.k13((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).n11 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).l13 = function (decoder, index, builder, checkIndex) {
    builder.o13(decoder.ux(this.f11_1, index));
  };
  protoOf(DoubleArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.l13(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.l13(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).r13 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.r13((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).n11 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).s13 = function (decoder, index, builder, checkIndex) {
    builder.v13(decoder.tx(this.f11_1, index));
  };
  protoOf(FloatArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.s13(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.s13(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).y13 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.y13((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).n11 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).z13 = function (decoder, index, builder, checkIndex) {
    builder.c14(decoder.sx(this.f11_1, index));
  };
  protoOf(LongArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.z13(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.z13(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).f14 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.f14(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.tj_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).g14 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).n11 = function () {
    return new ULongArray(this.g14());
  };
  protoOf(ULongArraySerializer_0).h14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.xx(this.f11_1, index).ex();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.k14(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.h14(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.h14(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).n14 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.n14((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).n11 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).o14 = function (decoder, index, builder, checkIndex) {
    builder.r14(decoder.rx(this.f11_1, index));
  };
  protoOf(IntArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.o14(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.o14(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).u14 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.u14(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.jj_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).v14 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).n11 = function () {
    return new UIntArray(this.v14());
  };
  protoOf(UIntArraySerializer_0).w14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.xx(this.f11_1, index).dx();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.z14(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.w14(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.w14(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).c15 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.c15((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n11 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).d15 = function (decoder, index, builder, checkIndex) {
    builder.g15(decoder.qx(this.f11_1, index));
  };
  protoOf(ShortArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.d15(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.d15(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).j15 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.j15(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.dk_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).k15 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).n11 = function () {
    return new UShortArray(this.k15());
  };
  protoOf(UShortArraySerializer_0).l15 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.xx(this.f11_1, index).cx();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.o15(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.l15(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.l15(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).r15 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.r15((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).n11 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).s15 = function (decoder, index, builder, checkIndex) {
    builder.v15(decoder.px(this.f11_1, index));
  };
  protoOf(ByteArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.s15(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.s15(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).y15 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.y15(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.zi_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).z15 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).n11 = function () {
    return new UByteArray(this.z15());
  };
  protoOf(UByteArraySerializer_0).a16 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.xx(this.f11_1, index).bx();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.d16(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.a16(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.a16(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).g16 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).iz = function (_this__u8e3s4) {
    return this.g16((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).n11 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).h16 = function (decoder, index, builder, checkIndex) {
    builder.k16(decoder.ox(this.f11_1, index));
  };
  protoOf(BooleanArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    return this.h16(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).o11 = function (decoder, index, builder, checkIndex) {
    return this.h16(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f13_1 = bufferWithData;
    this.g13_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(CharArrayBuilder).h11 = function () {
    return this.g13_1;
  };
  protoOf(CharArrayBuilder).l11 = function (requiredCapacity) {
    if (this.f13_1.length < requiredCapacity)
      this.f13_1 = copyOf(this.f13_1, coerceAtLeast(requiredCapacity, imul(this.f13_1.length, 2)));
  };
  protoOf(CharArrayBuilder).h13 = function (c) {
    this.p11();
    var tmp = this.f13_1;
    var _unary__edvuaz = this.g13_1;
    this.g13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).j11 = function () {
    return copyOf(this.f13_1, this.g13_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m13_1 = bufferWithData;
    this.n13_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(DoubleArrayBuilder).h11 = function () {
    return this.n13_1;
  };
  protoOf(DoubleArrayBuilder).l11 = function (requiredCapacity) {
    if (this.m13_1.length < requiredCapacity)
      this.m13_1 = copyOf_0(this.m13_1, coerceAtLeast(requiredCapacity, imul(this.m13_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).o13 = function (c) {
    this.p11();
    var tmp = this.m13_1;
    var _unary__edvuaz = this.n13_1;
    this.n13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).j11 = function () {
    return copyOf_0(this.m13_1, this.n13_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t13_1 = bufferWithData;
    this.u13_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(FloatArrayBuilder).h11 = function () {
    return this.u13_1;
  };
  protoOf(FloatArrayBuilder).l11 = function (requiredCapacity) {
    if (this.t13_1.length < requiredCapacity)
      this.t13_1 = copyOf_1(this.t13_1, coerceAtLeast(requiredCapacity, imul(this.t13_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).v13 = function (c) {
    this.p11();
    var tmp = this.t13_1;
    var _unary__edvuaz = this.u13_1;
    this.u13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).j11 = function () {
    return copyOf_1(this.t13_1, this.u13_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a14_1 = bufferWithData;
    this.b14_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(LongArrayBuilder).h11 = function () {
    return this.b14_1;
  };
  protoOf(LongArrayBuilder).l11 = function (requiredCapacity) {
    if (this.a14_1.length < requiredCapacity)
      this.a14_1 = copyOf_2(this.a14_1, coerceAtLeast(requiredCapacity, imul(this.a14_1.length, 2)));
  };
  protoOf(LongArrayBuilder).c14 = function (c) {
    this.p11();
    var tmp = this.a14_1;
    var _unary__edvuaz = this.b14_1;
    this.b14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).j11 = function () {
    return copyOf_2(this.a14_1, this.b14_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i14_1 = bufferWithData;
    this.j14_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.l11(10);
  }
  protoOf(ULongArrayBuilder).h11 = function () {
    return this.j14_1;
  };
  protoOf(ULongArrayBuilder).l11 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.i14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.i14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.i14_1), 2));
      tmp.i14_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).k14 = function (c) {
    this.p11();
    var tmp = this.i14_1;
    var _unary__edvuaz = this.j14_1;
    this.j14_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).l16 = function () {
    var tmp0 = this.i14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.j14_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).j11 = function () {
    return new ULongArray(this.l16());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p14_1 = bufferWithData;
    this.q14_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(IntArrayBuilder).h11 = function () {
    return this.q14_1;
  };
  protoOf(IntArrayBuilder).l11 = function (requiredCapacity) {
    if (this.p14_1.length < requiredCapacity)
      this.p14_1 = copyOf_3(this.p14_1, coerceAtLeast(requiredCapacity, imul(this.p14_1.length, 2)));
  };
  protoOf(IntArrayBuilder).r14 = function (c) {
    this.p11();
    var tmp = this.p14_1;
    var _unary__edvuaz = this.q14_1;
    this.q14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).j11 = function () {
    return copyOf_3(this.p14_1, this.q14_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x14_1 = bufferWithData;
    this.y14_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.l11(10);
  }
  protoOf(UIntArrayBuilder).h11 = function () {
    return this.y14_1;
  };
  protoOf(UIntArrayBuilder).l11 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.x14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.x14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.x14_1), 2));
      tmp.x14_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).z14 = function (c) {
    this.p11();
    var tmp = this.x14_1;
    var _unary__edvuaz = this.y14_1;
    this.y14_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).m16 = function () {
    var tmp0 = this.x14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.y14_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).j11 = function () {
    return new UIntArray(this.m16());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e15_1 = bufferWithData;
    this.f15_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(ShortArrayBuilder).h11 = function () {
    return this.f15_1;
  };
  protoOf(ShortArrayBuilder).l11 = function (requiredCapacity) {
    if (this.e15_1.length < requiredCapacity)
      this.e15_1 = copyOf_4(this.e15_1, coerceAtLeast(requiredCapacity, imul(this.e15_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).g15 = function (c) {
    this.p11();
    var tmp = this.e15_1;
    var _unary__edvuaz = this.f15_1;
    this.f15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).j11 = function () {
    return copyOf_4(this.e15_1, this.f15_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m15_1 = bufferWithData;
    this.n15_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.l11(10);
  }
  protoOf(UShortArrayBuilder).h11 = function () {
    return this.n15_1;
  };
  protoOf(UShortArrayBuilder).l11 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.m15_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m15_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.m15_1), 2));
      tmp.m15_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).o15 = function (c) {
    this.p11();
    var tmp = this.m15_1;
    var _unary__edvuaz = this.n15_1;
    this.n15_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).n16 = function () {
    var tmp0 = this.m15_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n15_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).j11 = function () {
    return new UShortArray(this.n16());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t15_1 = bufferWithData;
    this.u15_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(ByteArrayBuilder).h11 = function () {
    return this.u15_1;
  };
  protoOf(ByteArrayBuilder).l11 = function (requiredCapacity) {
    if (this.t15_1.length < requiredCapacity)
      this.t15_1 = copyOf_5(this.t15_1, coerceAtLeast(requiredCapacity, imul(this.t15_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).v15 = function (c) {
    this.p11();
    var tmp = this.t15_1;
    var _unary__edvuaz = this.u15_1;
    this.u15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).j11 = function () {
    return copyOf_5(this.t15_1, this.u15_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b16_1 = bufferWithData;
    this.c16_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.l11(10);
  }
  protoOf(UByteArrayBuilder).h11 = function () {
    return this.c16_1;
  };
  protoOf(UByteArrayBuilder).l11 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.b16_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.b16_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.b16_1), 2));
      tmp.b16_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).d16 = function (c) {
    this.p11();
    var tmp = this.b16_1;
    var _unary__edvuaz = this.c16_1;
    this.c16_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).o16 = function () {
    var tmp0 = this.b16_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.c16_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).j11 = function () {
    return new UByteArray(this.o16());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i16_1 = bufferWithData;
    this.j16_1 = bufferWithData.length;
    this.l11(10);
  }
  protoOf(BooleanArrayBuilder).h11 = function () {
    return this.j16_1;
  };
  protoOf(BooleanArrayBuilder).l11 = function (requiredCapacity) {
    if (this.i16_1.length < requiredCapacity)
      this.i16_1 = copyOf_6(this.i16_1, coerceAtLeast(requiredCapacity, imul(this.i16_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).k16 = function (c) {
    this.p11();
    var tmp = this.i16_1;
    var _unary__edvuaz = this.j16_1;
    this.j16_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).j11 = function () {
    return copyOf_6(this.i16_1, this.j16_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().y1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.p16_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).uu = function () {
    return this.p16_1;
  };
  protoOf(StringSerializer).vu = function (decoder) {
    return decoder.ix();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.q16_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).uu = function () {
    return this.q16_1;
  };
  protoOf(CharSerializer).r16 = function (decoder) {
    return decoder.hx();
  };
  protoOf(CharSerializer).vu = function (decoder) {
    return new Char(this.r16(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.s16_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).uu = function () {
    return this.s16_1;
  };
  protoOf(DoubleSerializer).vu = function (decoder) {
    return decoder.gx();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.t16_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).uu = function () {
    return this.t16_1;
  };
  protoOf(FloatSerializer).vu = function (decoder) {
    return decoder.fx();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.u16_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).uu = function () {
    return this.u16_1;
  };
  protoOf(LongSerializer).vu = function (decoder) {
    return decoder.ex();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.v16_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).uu = function () {
    return this.v16_1;
  };
  protoOf(IntSerializer).vu = function (decoder) {
    return decoder.dx();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w16_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).uu = function () {
    return this.w16_1;
  };
  protoOf(ShortSerializer).vu = function (decoder) {
    return decoder.cx();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.x16_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).uu = function () {
    return this.x16_1;
  };
  protoOf(ByteSerializer).vu = function (decoder) {
    return decoder.bx();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.y16_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).uu = function () {
    return this.y16_1;
  };
  protoOf(BooleanSerializer).vu = function (decoder) {
    return decoder.ax();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.z16_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).uu = function () {
    return this.z16_1.uu();
  };
  protoOf(UnitSerializer).a17 = function (decoder) {
    this.z16_1.vu(decoder);
  };
  protoOf(UnitSerializer).vu = function (decoder) {
    this.a17(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.b17_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.b17_1 = serialName;
    this.c17_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).tv = function () {
    return this.b17_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).uv = function () {
    return this.c17_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).wv = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).yv = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zv = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.b17_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.b17_1 === other.b17_1 && equals(this.c17_1, other.c17_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.b17_1) + imul(31, this.c17_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().a2();
    var _iterator__ex2g4s = values.h();
    while (_iterator__ex2g4s.i()) {
      var primitive = _iterator__ex2g4s.j();
      var primitiveName = primitive.uu().tv();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).w9() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.d17_1 = key;
    this.e17_1 = value;
  }
  protoOf(MapEntry).u1 = function () {
    return this.d17_1;
  };
  protoOf(MapEntry).v1 = function () {
    return this.e17_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.d17_1) + ', value=' + toString_0(this.e17_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.d17_1 == null ? 0 : hashCode(this.d17_1);
    result = imul(result, 31) + (this.e17_1 == null ? 0 : hashCode(this.e17_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.d17_1, tmp0_other_with_cast.d17_1))
      return false;
    if (!equals(this.e17_1, tmp0_other_with_cast.e17_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ev('key', $keySerializer.uu());
      $this$buildSerialDescriptor.ev('value', $valueSerializer.uu());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.h17_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).uu = function () {
    return this.h17_1;
  };
  protoOf(MapEntrySerializer_0).i17 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.ev('first', $keySerializer.uu());
      $this$buildClassSerialDescriptor.ev('second', $valueSerializer.uu());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.n17_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).uu = function () {
    return this.n17_1;
  };
  protoOf(PairSerializer_0).i17 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.zx($this.r17_1, 0, $this.o17_1);
    var b = composite.zx($this.r17_1, 1, $this.p17_1);
    var c = composite.zx($this.r17_1, 2, $this.q17_1);
    composite.nx($this.r17_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.cy($this.r17_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.zx($this.r17_1, 0, $this.o17_1);
          break;
        case 1:
          b = composite.zx($this.r17_1, 1, $this.p17_1);
          break;
        case 2:
          c = composite.zx($this.r17_1, 2, $this.q17_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.nx($this.r17_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.ev('first', this$0.o17_1.uu());
      $this$buildClassSerialDescriptor.ev('second', this$0.p17_1.uu());
      $this$buildClassSerialDescriptor.ev('third', this$0.q17_1.uu());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.o17_1 = aSerializer;
    this.p17_1 = bSerializer;
    this.q17_1 = cSerializer;
    var tmp = this;
    tmp.r17_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).uu = function () {
    return this.r17_1;
  };
  protoOf(TripleSerializer_0).vu = function (decoder) {
    var composite = decoder.mx(this.r17_1);
    if (composite.by()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.j17_1 = keySerializer;
    this.k17_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).vu = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.uu();
    var composite = decoder.mx(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.by()) {
        var key = composite.zx(this.uu(), 0, this.j17_1);
        var value = composite.zx(this.uu(), 1, this.k17_1);
        tmp$ret$0 = this.i17(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.cy(this.uu());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.zx(this.uu(), 0, this.j17_1);
            break;
          case 1:
            value_0 = composite.zx(this.uu(), 1, this.k17_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.i17(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.nx(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.s17_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).uu = function () {
    return this.s17_1;
  };
  protoOf(ULongSerializer).t17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.jx(this.s17_1).ex();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).vu = function (decoder) {
    return new ULong(this.t17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.u17_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).uu = function () {
    return this.u17_1;
  };
  protoOf(UIntSerializer).v17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.jx(this.u17_1).dx();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).vu = function (decoder) {
    return new UInt(this.v17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.w17_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).uu = function () {
    return this.w17_1;
  };
  protoOf(UShortSerializer).x17 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.jx(this.w17_1).cx();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).vu = function (decoder) {
    return new UShort(this.x17(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.y17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).uu = function () {
    return this.y17_1;
  };
  protoOf(UByteSerializer).z17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.jx(this.y17_1).bx();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).vu = function (decoder) {
    return new UByte(this.z17(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).lv = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.mv(kClass, typeArgumentsSerializers) : $super.mv.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.b18_1 = class2ContextualFactory;
    this.c18_1 = polyBase2Serializers;
    this.d18_1 = polyBase2DefaultSerializerProvider;
    this.e18_1 = polyBase2NamedSerializers;
    this.f18_1 = polyBase2DefaultDeserializerProvider;
    this.g18_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).kv = function () {
    return this.g18_1;
  };
  protoOf(SerialModuleImpl).ey = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.e18_1.y1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).y1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.f18_1.y1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).mv = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.b18_1.y1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h18(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).a18 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.b18_1.b2().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.u1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.v1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.k18_1;
        collector.l18(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.j18(kclass, serial.i18_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.c18_1.b2().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.u1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.v1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.b2().h();
      while (_iterator__ex2g4s_1.i()) {
        var element_1 = _iterator__ex2g4s_1.j();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.u1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.v1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.m18(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.d18_1.b2().h();
    while (_iterator__ex2g4s_2.i()) {
      var element_2 = _iterator__ex2g4s_2.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.v1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.n18(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.f18_1.b2().h();
    while (_iterator__ex2g4s_3.i()) {
      var element_3 = _iterator__ex2g4s_3.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.u1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.v1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.o18(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.p18_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.p18_1.equals(tmp0_other_with_cast.p18_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.p18_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.p18_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterface(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().wa(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().za(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ua(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().fb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ta(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().eb(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().db(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().sa(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().cb(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ra(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().bb(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().qa(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ab(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().pa(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ya(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().oa(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Uuid), serializer_15(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().oa())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().oa()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().va());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.a13(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.q18_1 = $factory;
  }
  protoOf(createCache$1).nv = function (key) {
    return this.q18_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.r18_1 = $factory;
  }
  protoOf(createParametrizedCache$1).ov = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.r18_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).pv = get_isNullable;
  protoOf(SerialDescriptorImpl).vv = get_isInline;
  protoOf(AbstractDecoder).zx = decodeSerializableElement$default;
  protoOf(AbstractDecoder).lx = decodeSerializableValue;
  protoOf(AbstractDecoder).by = decodeSequentially;
  protoOf(AbstractDecoder).dy = decodeCollectionSize;
  protoOf(ListLikeDescriptor).pv = get_isNullable;
  protoOf(ListLikeDescriptor).vv = get_isInline;
  protoOf(ListLikeDescriptor).xv = get_annotations;
  protoOf(MapLikeDescriptor).pv = get_isNullable;
  protoOf(MapLikeDescriptor).vv = get_isInline;
  protoOf(MapLikeDescriptor).xv = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).pv = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).vv = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).s12 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).pv = get_isNullable;
  protoOf(NothingSerialDescriptor).vv = get_isInline;
  protoOf(NothingSerialDescriptor).xv = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).pv = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).vv = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).xv = get_annotations;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_1;
  _.$_$.b = OPEN_getInstance;
  _.$_$.c = SEALED_getInstance;
  _.$_$.d = STRING_getInstance;
  _.$_$.e = ENUM_getInstance;
  _.$_$.f = OBJECT_getInstance;
  _.$_$.g = ListSerializer;
  _.$_$.h = MapSerializer;
  _.$_$.i = serializer_0;
  _.$_$.j = PolymorphicKind;
  _.$_$.k = BOOLEAN;
  _.$_$.l = BYTE;
  _.$_$.m = CHAR;
  _.$_$.n = DOUBLE;
  _.$_$.o = FLOAT;
  _.$_$.p = INT;
  _.$_$.q = LONG;
  _.$_$.r = SHORT;
  _.$_$.s = STRING;
  _.$_$.t = PrimitiveKind;
  _.$_$.u = PrimitiveSerialDescriptor;
  _.$_$.v = SerialDescriptor;
  _.$_$.w = CONTEXTUAL;
  _.$_$.x = ENUM;
  _.$_$.y = CLASS;
  _.$_$.z = LIST;
  _.$_$.a1 = MAP;
  _.$_$.b1 = OBJECT;
  _.$_$.c1 = buildSerialDescriptor;
  _.$_$.d1 = get_elementNames;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = get_nullable_0;
  _.$_$.g1 = AbstractDecoder;
  _.$_$.h1 = EmptySerializersModule_0;
  _.$_$.i1 = contextual;
  _.$_$.j1 = SerializersModuleCollector;
  _.$_$.k1 = KSerializer;
  _.$_$.l1 = SerializationException;
  _.$_$.m1 = serializer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map

(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.w8;
  var initMetadataForInterface = kotlin_kotlin.$_$.d8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var emptyList = kotlin_kotlin.$_$.i5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.yb;
  var toString = kotlin_kotlin.$_$.z8;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var VOID = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.f9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var objectCreate = kotlin_kotlin.$_$.v8;
  var captureStack = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ab;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.hb;
  var KClass = kotlin_kotlin.$_$.e9;
  var isInterface = kotlin_kotlin.$_$.o8;
  var Triple = kotlin_kotlin.$_$.jb;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.eb;
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
  var Result = kotlin_kotlin.$_$.fb;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var equals = kotlin_kotlin.$_$.u7;
  var getStringHashCode = kotlin_kotlin.$_$.y7;
  var isBlank = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var toList = kotlin_kotlin.$_$.i6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var toHashSet = kotlin_kotlin.$_$.g6;
  var toBooleanArray = kotlin_kotlin.$_$.f6;
  var withIndex = kotlin_kotlin.$_$.n6;
  var to = kotlin_kotlin.$_$.ec;
  var toMap = kotlin_kotlin.$_$.k6;
  var lazy_0 = kotlin_kotlin.$_$.zb;
  var contentEquals = kotlin_kotlin.$_$.t4;
  var until = kotlin_kotlin.$_$.d9;
  var joinToString = kotlin_kotlin.$_$.r5;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.cb;
  var Char = kotlin_kotlin.$_$.ua;
  var Companion_getInstance = kotlin_kotlin.$_$.p3;
  var Duration = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.q3;
  var hashCode = kotlin_kotlin.$_$.z7;
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
  var isArray = kotlin_kotlin.$_$.g8;
  var step = kotlin_kotlin.$_$.c9;
  var getValue = kotlin_kotlin.$_$.p5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.dc;
  var KTypeParameter = kotlin_kotlin.$_$.g9;
  var contentHashCode = kotlin_kotlin.$_$.v4;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var booleanArray = kotlin_kotlin.$_$.l7;
  var emptyMap = kotlin_kotlin.$_$.j5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r3;
  var isCharArray = kotlin_kotlin.$_$.j8;
  var charArray = kotlin_kotlin.$_$.o7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.j3;
  var isDoubleArray = kotlin_kotlin.$_$.l8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.k3;
  var isFloatArray = kotlin_kotlin.$_$.m8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.s3;
  var isLongArray = kotlin_kotlin.$_$.p8;
  var longArray = kotlin_kotlin.$_$.s8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.w3;
  var ULongArray = kotlin_kotlin.$_$.ob;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.u2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.t2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isIntArray = kotlin_kotlin.$_$.n8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.v3;
  var UIntArray = kotlin_kotlin.$_$.mb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.o2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isShortArray = kotlin_kotlin.$_$.q8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.x3;
  var UShortArray = kotlin_kotlin.$_$.qb;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.a3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.i3;
  var isByteArray = kotlin_kotlin.$_$.i8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.u3;
  var UByteArray = kotlin_kotlin.$_$.kb;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.h2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.f2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.h3;
  var isBooleanArray = kotlin_kotlin.$_$.h8;
  var coerceAtLeast = kotlin_kotlin.$_$.a9;
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
  var trimIndent = kotlin_kotlin.$_$.pa;
  var ULong = kotlin_kotlin.$_$.pb;
  var UInt = kotlin_kotlin.$_$.nb;
  var UShort = kotlin_kotlin.$_$.rb;
  var UByte = kotlin_kotlin.$_$.lb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ac;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.o3;
  var Unit = kotlin_kotlin.$_$.sb;
  var Uuid = kotlin_kotlin.$_$.ta;
  var mapOf = kotlin_kotlin.$_$.w5;
  var get_js = kotlin_kotlin.$_$.r8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  var get_indices = kotlin_kotlin.$_$.q5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Companion_instance = kotlin_kotlin.$_$.t3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.b2;
  var createFailure = kotlin_kotlin.$_$.wb;
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
    return deserializer.tt(this);
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
    return $super === VOID ? this.ww(descriptor, index, deserializer, previousValue) : $super.ww.call(this, descriptor, index, deserializer, previousValue);
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
    return this.h17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
      $this$buildSerialDescriptor.cu('type', serializer_0(StringCompanionObject_instance).st());
      $this$buildSerialDescriptor.cu('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.du_1.q9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.wt_1 = this$0.eu_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.du_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.du_1 = baseClass;
    this.eu_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fu_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).gu = function () {
    return this.du_1;
  };
  protoOf(PolymorphicSerializer).st = function () {
    var tmp0 = this.fu_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.t1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.du_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.hu(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.gu());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.st();
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
    var isNullable = type.fa();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.ea();
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.ju(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.iu()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.ju(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.ku(rootClass, serializers) : tmp3_elvis_lhs;
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
      return $typeArguments.p(0).da();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().lu(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().lu(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().mu(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().mu(clazz, types);
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
      return $types.p(0).da();
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
      return $types.p(0).da();
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
    if (_this__u8e3s4.st().nu()) {
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
    this.ou_1 = original;
    this.pu_1 = kClass;
    this.qu_1 = this.ou_1.ru() + '<' + this.pu_1.q9() + '>';
  }
  protoOf(ContextDescriptor).ru = function () {
    return this.qu_1;
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
    return equals(this.ou_1, another.ou_1) && another.pu_1.equals(this.pu_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.pu_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.qu_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.pu_1) + ', original: ' + toString(this.ou_1) + ')';
  };
  protoOf(ContextDescriptor).su = function () {
    return this.ou_1.su();
  };
  protoOf(ContextDescriptor).nu = function () {
    return this.ou_1.nu();
  };
  protoOf(ContextDescriptor).tu = function () {
    return this.ou_1.tu();
  };
  protoOf(ContextDescriptor).uu = function () {
    return this.ou_1.uu();
  };
  protoOf(ContextDescriptor).vu = function () {
    return this.ou_1.vu();
  };
  protoOf(ContextDescriptor).wu = function (index) {
    return this.ou_1.wu(index);
  };
  protoOf(ContextDescriptor).xu = function (index) {
    return this.ou_1.xu(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.ju(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.st();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.pu_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.yu_1);
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
    this.cv_1 = $this_elementDescriptors;
    this.bv_1 = $this_elementDescriptors.uu();
  }
  protoOf(elementDescriptors$1).i = function () {
    return this.bv_1 > 0;
  };
  protoOf(elementDescriptors$1).j = function () {
    var tmp = this.cv_1.uu();
    var _unary__edvuaz = this.bv_1;
    this.bv_1 = _unary__edvuaz - 1 | 0;
    return this.cv_1.xu(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.dv_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.dv_1);
  };
  function elementNames$1($this_elementNames) {
    this.fv_1 = $this_elementNames;
    this.ev_1 = $this_elementNames.uu();
  }
  protoOf(elementNames$1).i = function () {
    return this.ev_1 > 0;
  };
  protoOf(elementNames$1).j = function () {
    var tmp = this.fv_1.uu();
    var _unary__edvuaz = this.ev_1;
    this.ev_1 = _unary__edvuaz - 1 | 0;
    return this.fv_1.wu(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.gv_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.gv_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.xt_1.k(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ut_1 = serialName;
    this.vt_1 = false;
    this.wt_1 = emptyList();
    this.xt_1 = ArrayList_init_$Create$_0();
    this.yt_1 = HashSet_init_$Create$();
    this.zt_1 = ArrayList_init_$Create$_0();
    this.au_1 = ArrayList_init_$Create$_0();
    this.bu_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).hv = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.yt_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.ut_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.xt_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.zt_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.au_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.bu_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).cu = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.hv(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.hv.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.tv_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.t1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.sv_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.wu(it) + ': ' + this$0.xu(it).ru();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.iv_1 = serialName;
    this.jv_1 = kind;
    this.kv_1 = elementsCount;
    this.lv_1 = builder.wt_1;
    this.mv_1 = toHashSet(builder.xt_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.xt_1;
    tmp.nv_1 = copyToArray(this_0);
    this.ov_1 = compactArray(builder.zt_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.au_1;
    tmp_0.pv_1 = copyToArray(this_1);
    this.qv_1 = toBooleanArray(builder.bu_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.nv_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.qd_1, item.pd_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.rv_1 = toMap(destination);
    this.sv_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.tv_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).ru = function () {
    return this.iv_1;
  };
  protoOf(SerialDescriptorImpl).su = function () {
    return this.jv_1;
  };
  protoOf(SerialDescriptorImpl).uu = function () {
    return this.kv_1;
  };
  protoOf(SerialDescriptorImpl).vu = function () {
    return this.lv_1;
  };
  protoOf(SerialDescriptorImpl).uv = function () {
    return this.mv_1;
  };
  protoOf(SerialDescriptorImpl).wu = function (index) {
    return getChecked(this.nv_1, index);
  };
  protoOf(SerialDescriptorImpl).xu = function (index) {
    return getChecked(this.ov_1, index);
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
      if (!(this.ru() === other.ru())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.sv_1, other.sv_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uu() === other.uu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xu(index).ru() === other.xu(index).ru())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xu(index).su(), other.xu(index).su())) {
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
    var tmp = until(0, this.kv_1);
    var tmp_0 = this.iv_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.xt_1.k(), toList(typeParameters), sdBuilder);
  }
  function get_nullable_0(_this__u8e3s4) {
    if (_this__u8e3s4.nu())
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
    return ensureNotNull(getKClassFromExpression(this).q9());
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
  protoOf(AbstractDecoder).vv = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).wv = function () {
    return true;
  };
  protoOf(AbstractDecoder).xv = function () {
    return null;
  };
  protoOf(AbstractDecoder).yv = function () {
    var tmp = this.vv();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).zv = function () {
    var tmp = this.vv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).aw = function () {
    var tmp = this.vv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bw = function () {
    var tmp = this.vv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cw = function () {
    var tmp = this.vv();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dw = function () {
    var tmp = this.vv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ew = function () {
    var tmp = this.vv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fw = function () {
    var tmp = this.vv();
    return tmp instanceof Char ? tmp.b1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).gw = function () {
    var tmp = this.vv();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hw = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).iw = function (deserializer, previousValue) {
    return this.jw(deserializer);
  };
  protoOf(AbstractDecoder).kw = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).lw = function (descriptor) {
  };
  protoOf(AbstractDecoder).mw = function (descriptor, index) {
    return this.yv();
  };
  protoOf(AbstractDecoder).nw = function (descriptor, index) {
    return this.zv();
  };
  protoOf(AbstractDecoder).ow = function (descriptor, index) {
    return this.aw();
  };
  protoOf(AbstractDecoder).pw = function (descriptor, index) {
    return this.bw();
  };
  protoOf(AbstractDecoder).qw = function (descriptor, index) {
    return this.cw();
  };
  protoOf(AbstractDecoder).rw = function (descriptor, index) {
    return this.dw();
  };
  protoOf(AbstractDecoder).sw = function (descriptor, index) {
    return this.ew();
  };
  protoOf(AbstractDecoder).tw = function (descriptor, index) {
    return this.fw();
  };
  protoOf(AbstractDecoder).uw = function (descriptor, index) {
    return this.gw();
  };
  protoOf(AbstractDecoder).vw = function (descriptor, index) {
    return this.hw(descriptor.xu(index));
  };
  protoOf(AbstractDecoder).ww = function (descriptor, index, deserializer, previousValue) {
    return this.iw(deserializer, previousValue);
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.uw($this.st(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.xw($this.st(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).tt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.st();
    var composite = decoder.kw(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.zw()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.ax(this.st());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.uw(this.st(), index);
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
            value = composite.xw(this.st(), index, serializer);
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
    composite.lw(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).hu = function (decoder, klassName) {
    return decoder.yw().cx(this.gu(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.q9() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.q9() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.dx_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).st = function () {
    return this.dx_1;
  };
  protoOf(NothingSerializer_0).tt = function (decoder) {
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
    this.ex_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).st = function () {
    return this.ex_1;
  };
  protoOf(DurationSerializer).fx = function (decoder) {
    return Companion_getInstance().ug(decoder.gw());
  };
  protoOf(DurationSerializer).tt = function (decoder) {
    return new Duration(this.fx(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.gx_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).st = function () {
    return this.gx_1;
  };
  protoOf(UuidSerializer).tt = function (decoder) {
    return Companion_getInstance_0().nh(decoder.gw());
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
  protoOf(ArrayListClassDesc).ru = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).ru = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).ru = function () {
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
  protoOf(ArrayClassDesc).ru = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.jx_1 = elementDescriptor;
    this.kx_1 = 1;
  }
  protoOf(ListLikeDescriptor).su = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).uu = function () {
    return this.kx_1;
  };
  protoOf(ListLikeDescriptor).wu = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).xu = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ru() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.jx_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.jx_1, other.jx_1) && this.ru() === other.ru())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.jx_1), 31) + getStringHashCode(this.ru()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ru() + '(' + toString(this.jx_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.px_1 = serialName;
    this.qx_1 = keyDescriptor;
    this.rx_1 = valueDescriptor;
    this.sx_1 = 2;
  }
  protoOf(MapLikeDescriptor).ru = function () {
    return this.px_1;
  };
  protoOf(MapLikeDescriptor).su = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).uu = function () {
    return this.sx_1;
  };
  protoOf(MapLikeDescriptor).wu = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).xu = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.ru() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.qx_1;
        break;
      case 1:
        tmp = this.rx_1;
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
    if (!(this.ru() === other.ru()))
      return false;
    if (!equals(this.qx_1, other.qx_1))
      return false;
    if (!equals(this.rx_1, other.rx_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ru());
    result = imul(31, result) + hashCode(this.qx_1) | 0;
    result = imul(31, result) + hashCode(this.rx_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ru() + '(' + toString(this.qx_1) + ', ' + toString(this.rx_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.xx_1 = primitive.ru() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).ru = function () {
    return this.xx_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.zx_1 = new ArrayListClassDesc(element.st());
  }
  protoOf(ArrayListSerializer).st = function () {
    return this.zx_1;
  };
  protoOf(ArrayListSerializer).ay = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).by = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ArrayListSerializer).cy = function (_this__u8e3s4) {
    return this.by(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).dy = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).ey = function (_this__u8e3s4) {
    return this.dy(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).gy = function (_this__u8e3s4) {
    return this.fy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hy = function (_this__u8e3s4, size) {
    return _this__u8e3s4.v4(size);
  };
  protoOf(ArrayListSerializer).iy = function (_this__u8e3s4, size) {
    return this.hy(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).jy = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d4(index, element);
  };
  protoOf(ArrayListSerializer).ky = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.jy(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ry_1 = new HashSetClassDesc(eSerializer.st());
  }
  protoOf(HashSetSerializer).st = function () {
    return this.ry_1;
  };
  protoOf(HashSetSerializer).ay = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).sy = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(HashSetSerializer).cy = function (_this__u8e3s4) {
    return this.sy(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).ty = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).ey = function (_this__u8e3s4) {
    return this.ty(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).uy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).gy = function (_this__u8e3s4) {
    return this.uy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vy = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).iy = function (_this__u8e3s4, size) {
    return this.vy(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).wy = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).ky = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.wy(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.yy_1 = new LinkedHashSetClassDesc(eSerializer.st());
  }
  protoOf(LinkedHashSetSerializer).st = function () {
    return this.yy_1;
  };
  protoOf(LinkedHashSetSerializer).ay = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).zy = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(LinkedHashSetSerializer).cy = function (_this__u8e3s4) {
    return this.zy(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).az = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).ey = function (_this__u8e3s4) {
    return this.az(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).uy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).gy = function (_this__u8e3s4) {
    return this.uy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).bz = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).iy = function (_this__u8e3s4, size) {
    return this.bz(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).cz = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).ky = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.cz(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.fz_1 = new HashMapClassDesc(kSerializer.st(), vSerializer.st());
  }
  protoOf(HashMapSerializer).st = function () {
    return this.fz_1;
  };
  protoOf(HashMapSerializer).ay = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).gz = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(HashMapSerializer).cy = function (_this__u8e3s4) {
    return this.gz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).hz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).ey = function (_this__u8e3s4) {
    return this.hz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).iz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).gy = function (_this__u8e3s4) {
    return this.iz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).jz = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).iy = function (_this__u8e3s4, size) {
    return this.jz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.qz_1 = new LinkedHashMapClassDesc(kSerializer.st(), vSerializer.st());
  }
  protoOf(LinkedHashMapSerializer).st = function () {
    return this.qz_1;
  };
  protoOf(LinkedHashMapSerializer).ay = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).rz = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(LinkedHashMapSerializer).cy = function (_this__u8e3s4) {
    return this.rz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).sz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).ey = function (_this__u8e3s4) {
    return this.sz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).iz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).gy = function (_this__u8e3s4) {
    return this.iz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).tz = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).iy = function (_this__u8e3s4, size) {
    return this.tz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.vz_1 = kClass;
    this.wz_1 = new ArrayClassDesc(eSerializer.st());
  }
  protoOf(ReferenceArraySerializer).st = function () {
    return this.wz_1;
  };
  protoOf(ReferenceArraySerializer).ay = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).xz = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ReferenceArraySerializer).cy = function (_this__u8e3s4) {
    return this.xz(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).yz = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.vz_1);
  };
  protoOf(ReferenceArraySerializer).ey = function (_this__u8e3s4) {
    return this.yz(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).zz = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).gy = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).a10 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.v4(size);
  };
  protoOf(ReferenceArraySerializer).iy = function (_this__u8e3s4, size) {
    return this.a10(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).b10 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d4(index, element);
  };
  protoOf(ReferenceArraySerializer).ky = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.b10(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.kz_1 = keySerializer;
    this.lz_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).mz = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    var step_0 = progression.z_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.nz(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).my = function (decoder, builder, startIndex, size) {
    return this.mz(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).nz = function (decoder, index, builder, checkIndex) {
    var key = decoder.xw(this.st(), index, this.kz_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.ax(this.st());
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
    if (builder.u1(key)) {
      var tmp_2 = this.lz_1.st().su();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ww(this.st(), vIndex, this.lz_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.xw(this.st(), vIndex, this.lz_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.a2(key, value);
  };
  protoOf(MapLikeSerializer).ny = function (decoder, index, builder, checkIndex) {
    return this.nz(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ly_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).my = function (decoder, builder, startIndex, size) {
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
        this.ny(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ny = function (decoder, index, builder, checkIndex) {
    this.ky(builder, index, decoder.xw(this.st(), index, this.ly_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.bx($this.st());
    $this.iy(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).py = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.gy(previous);
    var builder = tmp1_elvis_lhs == null ? this.ay() : tmp1_elvis_lhs;
    var startIndex = this.cy(builder);
    var compositeDecoder = decoder.kw(this.st());
    if (compositeDecoder.zw()) {
      this.my(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ax(this.st());
        if (index === -1)
          break $l$loop;
        this.oy(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.lw(this.st());
    return this.ey(builder);
  };
  protoOf(AbstractCollectionSerializer).tt = function (decoder) {
    return this.py(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).oy = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ny(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ny.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.d10_1 = new PrimitiveArrayDescriptor(primitiveSerializer.st());
  }
  protoOf(PrimitiveArraySerializer).st = function () {
    return this.d10_1;
  };
  protoOf(PrimitiveArraySerializer).e10 = function (_this__u8e3s4) {
    return _this__u8e3s4.f10();
  };
  protoOf(PrimitiveArraySerializer).cy = function (_this__u8e3s4) {
    return this.e10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).g10 = function (_this__u8e3s4) {
    return _this__u8e3s4.h10();
  };
  protoOf(PrimitiveArraySerializer).ey = function (_this__u8e3s4) {
    return this.g10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i10 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.j10(size);
  };
  protoOf(PrimitiveArraySerializer).iy = function (_this__u8e3s4, size) {
    return this.i10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).k10 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ky = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.k10(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ay = function () {
    return this.gy(this.l10());
  };
  protoOf(PrimitiveArraySerializer).tt = function (decoder) {
    return this.py(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).n10 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.f10() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.j10(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.j10.call(this, requiredCapacity);
    }
    return tmp;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.a11_1 = true;
  }
  protoOf(InlineClassDescriptor).tu = function () {
    return this.a11_1;
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
      if (!(this.ru() === other.ru())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.a11_1 && contentEquals(this.n11(), other.n11()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uu() === other.uu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xu(index).ru() === other.xu(index).ru())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xu(index).su(), other.xu(index).su())) {
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
    this.o11_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).p11 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.o11_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).st = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).tt = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.r11_1 = OBJECT_getInstance();
    this.s11_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).su = function () {
    return this.r11_1;
  };
  protoOf(NothingSerialDescriptor).ru = function () {
    return this.s11_1;
  };
  protoOf(NothingSerialDescriptor).uu = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).wu = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xu = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.s11_1) + imul(31, this.r11_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.t11_1 = serializer;
    this.u11_1 = new SerialDescriptorForNullable(this.t11_1.st());
  }
  protoOf(NullableSerializer).st = function () {
    return this.u11_1;
  };
  protoOf(NullableSerializer).tt = function (decoder) {
    return decoder.wv() ? decoder.jw(this.t11_1) : decoder.xv();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.t11_1, other.t11_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.t11_1);
  };
  function SerialDescriptorForNullable(original) {
    this.yu_1 = original;
    this.zu_1 = this.yu_1.ru() + '?';
    this.av_1 = cachedSerialNames(this.yu_1);
  }
  protoOf(SerialDescriptorForNullable).ru = function () {
    return this.zu_1;
  };
  protoOf(SerialDescriptorForNullable).uv = function () {
    return this.av_1;
  };
  protoOf(SerialDescriptorForNullable).nu = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.yu_1, other.yu_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.yu_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.yu_1), 31);
  };
  protoOf(SerialDescriptorForNullable).su = function () {
    return this.yu_1.su();
  };
  protoOf(SerialDescriptorForNullable).tu = function () {
    return this.yu_1.tu();
  };
  protoOf(SerialDescriptorForNullable).uu = function () {
    return this.yu_1.uu();
  };
  protoOf(SerialDescriptorForNullable).vu = function () {
    return this.yu_1.vu();
  };
  protoOf(SerialDescriptorForNullable).wu = function (index) {
    return this.yu_1.wu(index);
  };
  protoOf(SerialDescriptorForNullable).xu = function (index) {
    return this.yu_1.xu(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.wt_1 = this$0.w11_1;
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
    this.v11_1 = objectInstance;
    this.w11_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x11_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).st = function () {
    var tmp0 = this.x11_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.t1();
  };
  protoOf(ObjectSerializer).tt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.st();
    var composite = decoder.kw(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.zw()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.ax(this.st());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.lw(descriptor);
    return this.v11_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.st();
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
      return _this__u8e3s4.uv();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.uu());
    var inductionVariable = 0;
    var last = _this__u8e3s4.uu();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.wu(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.da();
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
    var tmp0 = _this__u8e3s4.jf_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.jf_1);
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
    var tmp0_elvis_lhs = _this__u8e3s4.q9();
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
    var result = getStringHashCode(_this__u8e3s4.ru());
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
      var tmp0_safe_receiver = element.ru();
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
      var tmp0_safe_receiver_0 = element_0.su();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.k11_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.t1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.m11_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.t1();
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c11_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p11();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q11();
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
          var tmp$ret$0 = item.st();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.n11());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.wu(i) + ': ' + this$0.xu(i).ru();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.b11_1 = serialName;
    this.c11_1 = generatedSerializer;
    this.d11_1 = elementsCount;
    this.e11_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.d11_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.f11_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d11_1;
    tmp_3.g11_1 = fillArrayVal(Array(size), null);
    this.h11_1 = null;
    this.i11_1 = booleanArray(this.d11_1);
    this.j11_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.k11_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.l11_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.m11_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ru = function () {
    return this.b11_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).uu = function () {
    return this.d11_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).su = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).vu = function () {
    var tmp0_elvis_lhs = this.h11_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).uv = function () {
    return this.j11_1.x1();
  };
  protoOf(PluginGeneratedSerialDescriptor).n11 = function () {
    var tmp0 = this.l11_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).xu = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).st();
  };
  protoOf(PluginGeneratedSerialDescriptor).wu = function (index) {
    return getChecked(this.f11_1, index);
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
      if (!(this.ru() === other.ru())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.n11(), other.n11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.uu() === other.uu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.uu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xu(index).ru() === other.xu(index).ru())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xu(index).su(), other.xu(index).su())) {
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
    var tmp = until(0, this.d11_1);
    var tmp_0 = this.ru() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.n11();
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
  protoOf(CharArraySerializer_0).b12 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.b12((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).l10 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).c12 = function (decoder, index, builder, checkIndex) {
    builder.f12(decoder.tw(this.d10_1, index));
  };
  protoOf(CharArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(DoubleArraySerializer_0).i12 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.i12((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).l10 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).j12 = function (decoder, index, builder, checkIndex) {
    builder.m12(decoder.sw(this.d10_1, index));
  };
  protoOf(DoubleArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.j12(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.j12(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(FloatArraySerializer_0).p12 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.p12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).l10 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).q12 = function (decoder, index, builder, checkIndex) {
    builder.t12(decoder.rw(this.d10_1, index));
  };
  protoOf(FloatArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.q12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(LongArraySerializer_0).w12 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.w12((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).l10 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).x12 = function (decoder, index, builder, checkIndex) {
    builder.a13(decoder.qw(this.d10_1, index));
  };
  protoOf(LongArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.x12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.x12(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ULongArraySerializer_0).d13 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.d13(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ri_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).e13 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).l10 = function () {
    return new ULongArray(this.e13());
  };
  protoOf(ULongArraySerializer_0).f13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.vw(this.d10_1, index).cw();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.i13(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.f13(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.f13(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(IntArraySerializer_0).l13 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.l13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).l10 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).m13 = function (decoder, index, builder, checkIndex) {
    builder.p13(decoder.pw(this.d10_1, index));
  };
  protoOf(IntArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.m13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UIntArraySerializer_0).s13 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.s13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.hi_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).t13 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).l10 = function () {
    return new UIntArray(this.t13());
  };
  protoOf(UIntArraySerializer_0).u13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.vw(this.d10_1, index).bw();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.x13(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.u13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.u13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ShortArraySerializer_0).a14 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.a14((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).l10 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).b14 = function (decoder, index, builder, checkIndex) {
    builder.e14(decoder.ow(this.d10_1, index));
  };
  protoOf(ShortArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.b14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.b14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UShortArraySerializer_0).h14 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.h14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.bj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).i14 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).l10 = function () {
    return new UShortArray(this.i14());
  };
  protoOf(UShortArraySerializer_0).j14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.vw(this.d10_1, index).aw();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.m14(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.j14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.j14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ByteArraySerializer_0).p14 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.p14((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).l10 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).q14 = function (decoder, index, builder, checkIndex) {
    builder.t14(decoder.nw(this.d10_1, index));
  };
  protoOf(ByteArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.q14(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.q14(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UByteArraySerializer_0).w14 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.w14(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.xh_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).x14 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).l10 = function () {
    return new UByteArray(this.x14());
  };
  protoOf(UByteArraySerializer_0).y14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.vw(this.d10_1, index).zv();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.b15(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.y14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.y14(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(BooleanArraySerializer_0).e15 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).gy = function (_this__u8e3s4) {
    return this.e15((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).l10 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).f15 = function (decoder, index, builder, checkIndex) {
    builder.i15(decoder.mw(this.d10_1, index));
  };
  protoOf(BooleanArraySerializer_0).ny = function (decoder, index, builder, checkIndex) {
    return this.f15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    return this.f15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d12_1 = bufferWithData;
    this.e12_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(CharArrayBuilder).f10 = function () {
    return this.e12_1;
  };
  protoOf(CharArrayBuilder).j10 = function (requiredCapacity) {
    if (this.d12_1.length < requiredCapacity)
      this.d12_1 = copyOf(this.d12_1, coerceAtLeast(requiredCapacity, imul(this.d12_1.length, 2)));
  };
  protoOf(CharArrayBuilder).f12 = function (c) {
    this.n10();
    var tmp = this.d12_1;
    var _unary__edvuaz = this.e12_1;
    this.e12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).h10 = function () {
    return copyOf(this.d12_1, this.e12_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k12_1 = bufferWithData;
    this.l12_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(DoubleArrayBuilder).f10 = function () {
    return this.l12_1;
  };
  protoOf(DoubleArrayBuilder).j10 = function (requiredCapacity) {
    if (this.k12_1.length < requiredCapacity)
      this.k12_1 = copyOf_0(this.k12_1, coerceAtLeast(requiredCapacity, imul(this.k12_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).m12 = function (c) {
    this.n10();
    var tmp = this.k12_1;
    var _unary__edvuaz = this.l12_1;
    this.l12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).h10 = function () {
    return copyOf_0(this.k12_1, this.l12_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r12_1 = bufferWithData;
    this.s12_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(FloatArrayBuilder).f10 = function () {
    return this.s12_1;
  };
  protoOf(FloatArrayBuilder).j10 = function (requiredCapacity) {
    if (this.r12_1.length < requiredCapacity)
      this.r12_1 = copyOf_1(this.r12_1, coerceAtLeast(requiredCapacity, imul(this.r12_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).t12 = function (c) {
    this.n10();
    var tmp = this.r12_1;
    var _unary__edvuaz = this.s12_1;
    this.s12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).h10 = function () {
    return copyOf_1(this.r12_1, this.s12_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y12_1 = bufferWithData;
    this.z12_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(LongArrayBuilder).f10 = function () {
    return this.z12_1;
  };
  protoOf(LongArrayBuilder).j10 = function (requiredCapacity) {
    if (this.y12_1.length < requiredCapacity)
      this.y12_1 = copyOf_2(this.y12_1, coerceAtLeast(requiredCapacity, imul(this.y12_1.length, 2)));
  };
  protoOf(LongArrayBuilder).a13 = function (c) {
    this.n10();
    var tmp = this.y12_1;
    var _unary__edvuaz = this.z12_1;
    this.z12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).h10 = function () {
    return copyOf_2(this.y12_1, this.z12_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g13_1 = bufferWithData;
    this.h13_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.j10(10);
  }
  protoOf(ULongArrayBuilder).f10 = function () {
    return this.h13_1;
  };
  protoOf(ULongArrayBuilder).j10 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.g13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.g13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.g13_1), 2));
      tmp.g13_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).i13 = function (c) {
    this.n10();
    var tmp = this.g13_1;
    var _unary__edvuaz = this.h13_1;
    this.h13_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).j15 = function () {
    var tmp0 = this.g13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.h13_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).h10 = function () {
    return new ULongArray(this.j15());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n13_1 = bufferWithData;
    this.o13_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(IntArrayBuilder).f10 = function () {
    return this.o13_1;
  };
  protoOf(IntArrayBuilder).j10 = function (requiredCapacity) {
    if (this.n13_1.length < requiredCapacity)
      this.n13_1 = copyOf_3(this.n13_1, coerceAtLeast(requiredCapacity, imul(this.n13_1.length, 2)));
  };
  protoOf(IntArrayBuilder).p13 = function (c) {
    this.n10();
    var tmp = this.n13_1;
    var _unary__edvuaz = this.o13_1;
    this.o13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).h10 = function () {
    return copyOf_3(this.n13_1, this.o13_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v13_1 = bufferWithData;
    this.w13_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.j10(10);
  }
  protoOf(UIntArrayBuilder).f10 = function () {
    return this.w13_1;
  };
  protoOf(UIntArrayBuilder).j10 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.v13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.v13_1), 2));
      tmp.v13_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).x13 = function (c) {
    this.n10();
    var tmp = this.v13_1;
    var _unary__edvuaz = this.w13_1;
    this.w13_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).k15 = function () {
    var tmp0 = this.v13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w13_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).h10 = function () {
    return new UIntArray(this.k15());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c14_1 = bufferWithData;
    this.d14_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(ShortArrayBuilder).f10 = function () {
    return this.d14_1;
  };
  protoOf(ShortArrayBuilder).j10 = function (requiredCapacity) {
    if (this.c14_1.length < requiredCapacity)
      this.c14_1 = copyOf_4(this.c14_1, coerceAtLeast(requiredCapacity, imul(this.c14_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).e14 = function (c) {
    this.n10();
    var tmp = this.c14_1;
    var _unary__edvuaz = this.d14_1;
    this.d14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).h10 = function () {
    return copyOf_4(this.c14_1, this.d14_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k14_1 = bufferWithData;
    this.l14_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.j10(10);
  }
  protoOf(UShortArrayBuilder).f10 = function () {
    return this.l14_1;
  };
  protoOf(UShortArrayBuilder).j10 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.k14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.k14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.k14_1), 2));
      tmp.k14_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).m14 = function (c) {
    this.n10();
    var tmp = this.k14_1;
    var _unary__edvuaz = this.l14_1;
    this.l14_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).l15 = function () {
    var tmp0 = this.k14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.l14_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).h10 = function () {
    return new UShortArray(this.l15());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r14_1 = bufferWithData;
    this.s14_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(ByteArrayBuilder).f10 = function () {
    return this.s14_1;
  };
  protoOf(ByteArrayBuilder).j10 = function (requiredCapacity) {
    if (this.r14_1.length < requiredCapacity)
      this.r14_1 = copyOf_5(this.r14_1, coerceAtLeast(requiredCapacity, imul(this.r14_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).t14 = function (c) {
    this.n10();
    var tmp = this.r14_1;
    var _unary__edvuaz = this.s14_1;
    this.s14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).h10 = function () {
    return copyOf_5(this.r14_1, this.s14_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z14_1 = bufferWithData;
    this.a15_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.j10(10);
  }
  protoOf(UByteArrayBuilder).f10 = function () {
    return this.a15_1;
  };
  protoOf(UByteArrayBuilder).j10 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.z14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.z14_1), 2));
      tmp.z14_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).b15 = function (c) {
    this.n10();
    var tmp = this.z14_1;
    var _unary__edvuaz = this.a15_1;
    this.a15_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).m15 = function () {
    var tmp0 = this.z14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a15_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).h10 = function () {
    return new UByteArray(this.m15());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g15_1 = bufferWithData;
    this.h15_1 = bufferWithData.length;
    this.j10(10);
  }
  protoOf(BooleanArrayBuilder).f10 = function () {
    return this.h15_1;
  };
  protoOf(BooleanArrayBuilder).j10 = function (requiredCapacity) {
    if (this.g15_1.length < requiredCapacity)
      this.g15_1 = copyOf_6(this.g15_1, coerceAtLeast(requiredCapacity, imul(this.g15_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).i15 = function (c) {
    this.n10();
    var tmp = this.g15_1;
    var _unary__edvuaz = this.h15_1;
    this.h15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).h10 = function () {
    return copyOf_6(this.g15_1, this.h15_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().w1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.n15_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).st = function () {
    return this.n15_1;
  };
  protoOf(StringSerializer).tt = function (decoder) {
    return decoder.gw();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.o15_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).st = function () {
    return this.o15_1;
  };
  protoOf(CharSerializer).p15 = function (decoder) {
    return decoder.fw();
  };
  protoOf(CharSerializer).tt = function (decoder) {
    return new Char(this.p15(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.q15_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).st = function () {
    return this.q15_1;
  };
  protoOf(DoubleSerializer).tt = function (decoder) {
    return decoder.ew();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.r15_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).st = function () {
    return this.r15_1;
  };
  protoOf(FloatSerializer).tt = function (decoder) {
    return decoder.dw();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s15_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).st = function () {
    return this.s15_1;
  };
  protoOf(LongSerializer).tt = function (decoder) {
    return decoder.cw();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.t15_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).st = function () {
    return this.t15_1;
  };
  protoOf(IntSerializer).tt = function (decoder) {
    return decoder.bw();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.u15_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).st = function () {
    return this.u15_1;
  };
  protoOf(ShortSerializer).tt = function (decoder) {
    return decoder.aw();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.v15_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).st = function () {
    return this.v15_1;
  };
  protoOf(ByteSerializer).tt = function (decoder) {
    return decoder.zv();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.w15_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).st = function () {
    return this.w15_1;
  };
  protoOf(BooleanSerializer).tt = function (decoder) {
    return decoder.yv();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.x15_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).st = function () {
    return this.x15_1.st();
  };
  protoOf(UnitSerializer).y15 = function (decoder) {
    this.x15_1.tt(decoder);
  };
  protoOf(UnitSerializer).tt = function (decoder) {
    this.y15(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.z15_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.z15_1 = serialName;
    this.a16_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).ru = function () {
    return this.z15_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).su = function () {
    return this.a16_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).uu = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).wu = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xu = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.z15_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.z15_1 === other.z15_1 && equals(this.a16_1, other.a16_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.z15_1) + imul(31, this.a16_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().y1();
    var _iterator__ex2g4s = values.h();
    while (_iterator__ex2g4s.i()) {
      var primitive = _iterator__ex2g4s.j();
      var primitiveName = primitive.st().ru();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).q9() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
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
    this.b16_1 = key;
    this.c16_1 = value;
  }
  protoOf(MapEntry).s1 = function () {
    return this.b16_1;
  };
  protoOf(MapEntry).t1 = function () {
    return this.c16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b16_1) + ', value=' + toString_0(this.c16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b16_1 == null ? 0 : hashCode(this.b16_1);
    result = imul(result, 31) + (this.c16_1 == null ? 0 : hashCode(this.c16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.b16_1, tmp0_other_with_cast.b16_1))
      return false;
    if (!equals(this.c16_1, tmp0_other_with_cast.c16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.cu('key', $keySerializer.st());
      $this$buildSerialDescriptor.cu('value', $valueSerializer.st());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).st = function () {
    return this.f16_1;
  };
  protoOf(MapEntrySerializer_0).g16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.cu('first', $keySerializer.st());
      $this$buildClassSerialDescriptor.cu('second', $valueSerializer.st());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.l16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).st = function () {
    return this.l16_1;
  };
  protoOf(PairSerializer_0).g16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.xw($this.p16_1, 0, $this.m16_1);
    var b = composite.xw($this.p16_1, 1, $this.n16_1);
    var c = composite.xw($this.p16_1, 2, $this.o16_1);
    composite.lw($this.p16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ax($this.p16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.xw($this.p16_1, 0, $this.m16_1);
          break;
        case 1:
          b = composite.xw($this.p16_1, 1, $this.n16_1);
          break;
        case 2:
          c = composite.xw($this.p16_1, 2, $this.o16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.lw($this.p16_1);
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
      $this$buildClassSerialDescriptor.cu('first', this$0.m16_1.st());
      $this$buildClassSerialDescriptor.cu('second', this$0.n16_1.st());
      $this$buildClassSerialDescriptor.cu('third', this$0.o16_1.st());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.m16_1 = aSerializer;
    this.n16_1 = bSerializer;
    this.o16_1 = cSerializer;
    var tmp = this;
    tmp.p16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).st = function () {
    return this.p16_1;
  };
  protoOf(TripleSerializer_0).tt = function (decoder) {
    var composite = decoder.kw(this.p16_1);
    if (composite.zw()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.h16_1 = keySerializer;
    this.i16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).tt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.st();
    var composite = decoder.kw(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.zw()) {
        var key = composite.xw(this.st(), 0, this.h16_1);
        var value = composite.xw(this.st(), 1, this.i16_1);
        tmp$ret$0 = this.g16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.ax(this.st());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.xw(this.st(), 0, this.h16_1);
            break;
          case 1:
            value_0 = composite.xw(this.st(), 1, this.i16_1);
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
      tmp$ret$0 = this.g16(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.lw(descriptor);
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
    this.q16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).st = function () {
    return this.q16_1;
  };
  protoOf(ULongSerializer).r16 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.hw(this.q16_1).cw();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).tt = function (decoder) {
    return new ULong(this.r16(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.s16_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).st = function () {
    return this.s16_1;
  };
  protoOf(UIntSerializer).t16 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.hw(this.s16_1).bw();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).tt = function (decoder) {
    return new UInt(this.t16(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.u16_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).st = function () {
    return this.u16_1;
  };
  protoOf(UShortSerializer).v16 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.hw(this.u16_1).aw();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).tt = function (decoder) {
    return new UShort(this.v16(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.w16_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).st = function () {
    return this.w16_1;
  };
  protoOf(UByteSerializer).x16 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.hw(this.w16_1).zv();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).tt = function (decoder) {
    return new UByte(this.x16(decoder));
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
  protoOf(SerializersModule).ju = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ku(kClass, typeArgumentsSerializers) : $super.ku.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.z16_1 = class2ContextualFactory;
    this.a17_1 = polyBase2Serializers;
    this.b17_1 = polyBase2DefaultSerializerProvider;
    this.c17_1 = polyBase2NamedSerializers;
    this.d17_1 = polyBase2DefaultDeserializerProvider;
    this.e17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).iu = function () {
    return this.e17_1;
  };
  protoOf(SerialModuleImpl).cx = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c17_1.w1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).w1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d17_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ku = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z16_1.w1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).y16 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z16_1.z1().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.t1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i17_1;
        collector.j17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.h17(kclass, serial.g17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.a17_1.z1().h();
    while (_iterator__ex2g4s_0.i()) {
      var element_0 = _iterator__ex2g4s_0.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.s1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.t1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.z1().h();
      while (_iterator__ex2g4s_1.i()) {
        var element_1 = _iterator__ex2g4s_1.j();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.s1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.t1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.k17(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.b17_1.z1().h();
    while (_iterator__ex2g4s_2.i()) {
      var element_2 = _iterator__ex2g4s_2.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.t1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.d17_1.z1().h();
    while (_iterator__ex2g4s_3.i()) {
      var element_3 = _iterator__ex2g4s_3.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.t1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.m17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
    this.n17_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.n17_1.equals(tmp0_other_with_cast.n17_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.n17_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.n17_1) + ')';
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
    return mapOf([to(PrimitiveClasses_getInstance().qa(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().ta(), CharArraySerializer()), to(PrimitiveClasses_getInstance().oa(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().za(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().na(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ya(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().xa(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().ma(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().wa(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().la(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().va(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().ka(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ua(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ja(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().sa(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ia(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Uuid), serializer_15(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ia())
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ia()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().pa());
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
          var tmp_1 = assocObject.y11(args.slice());
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
    this.o17_1 = $factory;
  }
  protoOf(createCache$1).lu = function (key) {
    return this.o17_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.p17_1 = $factory;
  }
  protoOf(createParametrizedCache$1).mu = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.p17_1(key, types);
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
  protoOf(SerialDescriptorImpl).nu = get_isNullable;
  protoOf(SerialDescriptorImpl).tu = get_isInline;
  protoOf(AbstractDecoder).xw = decodeSerializableElement$default;
  protoOf(AbstractDecoder).jw = decodeSerializableValue;
  protoOf(AbstractDecoder).zw = decodeSequentially;
  protoOf(AbstractDecoder).bx = decodeCollectionSize;
  protoOf(ListLikeDescriptor).nu = get_isNullable;
  protoOf(ListLikeDescriptor).tu = get_isInline;
  protoOf(ListLikeDescriptor).vu = get_annotations;
  protoOf(MapLikeDescriptor).nu = get_isNullable;
  protoOf(MapLikeDescriptor).tu = get_isInline;
  protoOf(MapLikeDescriptor).vu = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).nu = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).tu = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).q11 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).nu = get_isNullable;
  protoOf(NothingSerialDescriptor).tu = get_isInline;
  protoOf(NothingSerialDescriptor).vu = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).nu = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).tu = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).vu = get_annotations;
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

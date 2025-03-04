(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x8;
  var initMetadataForInterface = kotlin_kotlin.$_$.e8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var Unit_instance = kotlin_kotlin.$_$.z3;
  var emptyList = kotlin_kotlin.$_$.j5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.zb;
  var toString = kotlin_kotlin.$_$.a9;
  var initMetadataForClass = kotlin_kotlin.$_$.b8;
  var VOID = kotlin_kotlin.$_$.g;
  var KProperty1 = kotlin_kotlin.$_$.g9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.g1;
  var objectCreate = kotlin_kotlin.$_$.w8;
  var captureStack = kotlin_kotlin.$_$.n7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException = kotlin_kotlin.$_$.bb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.ib;
  var KClass = kotlin_kotlin.$_$.f9;
  var isInterface = kotlin_kotlin.$_$.p8;
  var Triple = kotlin_kotlin.$_$.kb;
  var getKClass = kotlin_kotlin.$_$.f;
  var Pair = kotlin_kotlin.$_$.fb;
  var Entry = kotlin_kotlin.$_$.h4;
  var KtMap = kotlin_kotlin.$_$.i4;
  var KtMutableMap = kotlin_kotlin.$_$.k4;
  var LinkedHashMap = kotlin_kotlin.$_$.e4;
  var HashMap = kotlin_kotlin.$_$.c4;
  var KtSet = kotlin_kotlin.$_$.m4;
  var KtMutableSet = kotlin_kotlin.$_$.l4;
  var LinkedHashSet = kotlin_kotlin.$_$.f4;
  var HashSet = kotlin_kotlin.$_$.d4;
  var Collection = kotlin_kotlin.$_$.b4;
  var KtList = kotlin_kotlin.$_$.g4;
  var KtMutableList = kotlin_kotlin.$_$.j4;
  var ArrayList = kotlin_kotlin.$_$.a4;
  var copyToArray = kotlin_kotlin.$_$.g5;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.e2;
  var Result = kotlin_kotlin.$_$.gb;
  var ensureNotNull = kotlin_kotlin.$_$.yb;
  var equals = kotlin_kotlin.$_$.v7;
  var getStringHashCode = kotlin_kotlin.$_$.z7;
  var isBlank = kotlin_kotlin.$_$.w9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toList = kotlin_kotlin.$_$.j6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var toHashSet = kotlin_kotlin.$_$.h6;
  var toBooleanArray = kotlin_kotlin.$_$.g6;
  var withIndex = kotlin_kotlin.$_$.o6;
  var to = kotlin_kotlin.$_$.fc;
  var toMap = kotlin_kotlin.$_$.l6;
  var lazy_0 = kotlin_kotlin.$_$.ac;
  var contentEquals = kotlin_kotlin.$_$.u4;
  var until = kotlin_kotlin.$_$.e9;
  var joinToString = kotlin_kotlin.$_$.s5;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.db;
  var Char = kotlin_kotlin.$_$.va;
  var Companion_getInstance = kotlin_kotlin.$_$.q3;
  var Duration = kotlin_kotlin.$_$.ta;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.r3;
  var hashCode = kotlin_kotlin.$_$.a8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var asList = kotlin_kotlin.$_$.p4;
  var isArray = kotlin_kotlin.$_$.h8;
  var step = kotlin_kotlin.$_$.d9;
  var getValue = kotlin_kotlin.$_$.q5;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.p;
  var toString_0 = kotlin_kotlin.$_$.ec;
  var KTypeParameter = kotlin_kotlin.$_$.h9;
  var contentHashCode = kotlin_kotlin.$_$.w4;
  var fillArrayVal = kotlin_kotlin.$_$.w7;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var emptyMap = kotlin_kotlin.$_$.k5;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.s3;
  var isCharArray = kotlin_kotlin.$_$.k8;
  var charArray = kotlin_kotlin.$_$.p7;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.k3;
  var isDoubleArray = kotlin_kotlin.$_$.m8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isFloatArray = kotlin_kotlin.$_$.n8;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.t3;
  var isLongArray = kotlin_kotlin.$_$.q8;
  var longArray = kotlin_kotlin.$_$.t8;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.x3;
  var ULongArray = kotlin_kotlin.$_$.pb;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.v2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.u2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isIntArray = kotlin_kotlin.$_$.o8;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w3;
  var UIntArray = kotlin_kotlin.$_$.nb;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.p2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.m2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var isShortArray = kotlin_kotlin.$_$.r8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.y3;
  var UShortArray = kotlin_kotlin.$_$.rb;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.b3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.a3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.j3;
  var isByteArray = kotlin_kotlin.$_$.j8;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v3;
  var UByteArray = kotlin_kotlin.$_$.lb;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.i2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.g2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.i3;
  var isBooleanArray = kotlin_kotlin.$_$.i8;
  var coerceAtLeast = kotlin_kotlin.$_$.b9;
  var copyOf = kotlin_kotlin.$_$.b5;
  var copyOf_0 = kotlin_kotlin.$_$.d5;
  var copyOf_1 = kotlin_kotlin.$_$.e5;
  var copyOf_2 = kotlin_kotlin.$_$.z4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.y2;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.z2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.w2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.x2;
  var copyOf_3 = kotlin_kotlin.$_$.f5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.s2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.t2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.q2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.r2;
  var copyOf_4 = kotlin_kotlin.$_$.y4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.e3;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.f3;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.c3;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.d3;
  var copyOf_5 = kotlin_kotlin.$_$.c5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.k2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.l2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.h2;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.j2;
  var copyOf_6 = kotlin_kotlin.$_$.a5;
  var trimIndent = kotlin_kotlin.$_$.qa;
  var ULong = kotlin_kotlin.$_$.qb;
  var UInt = kotlin_kotlin.$_$.ob;
  var UShort = kotlin_kotlin.$_$.sb;
  var UByte = kotlin_kotlin.$_$.mb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.bc;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p3;
  var Unit = kotlin_kotlin.$_$.tb;
  var Uuid = kotlin_kotlin.$_$.ua;
  var mapOf = kotlin_kotlin.$_$.x5;
  var get_js = kotlin_kotlin.$_$.s8;
  var findAssociatedObject = kotlin_kotlin.$_$.d;
  var get_indices = kotlin_kotlin.$_$.r5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Companion_instance = kotlin_kotlin.$_$.u3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.xb;
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
    return deserializer.xt(this);
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
    return $super === VOID ? this.ax(descriptor, index, deserializer, previousValue) : $super.ax.call(this, descriptor, index, deserializer, previousValue);
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
    return this.l17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
      $this$buildSerialDescriptor.gu('type', serializer_0(StringCompanionObject_instance).wt());
      $this$buildSerialDescriptor.gu('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.hu_1.q9() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.au_1 = this$0.iu_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.hu_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.hu_1 = baseClass;
    this.iu_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ju_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).ku = function () {
    return this.hu_1;
  };
  protoOf(PolymorphicSerializer).wt = function () {
    var tmp0 = this.ju_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.t1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.hu_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.lu(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.ku());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.wt();
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.nu(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.mu()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.nu(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.ou(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().pu(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().pu(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().qu(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().qu(clazz, types);
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
    if (_this__u8e3s4.wt().ru()) {
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
    this.su_1 = original;
    this.tu_1 = kClass;
    this.uu_1 = this.su_1.vu() + '<' + this.tu_1.q9() + '>';
  }
  protoOf(ContextDescriptor).vu = function () {
    return this.uu_1;
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
    return equals(this.su_1, another.su_1) && another.tu_1.equals(this.tu_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.tu_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.uu_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.tu_1) + ', original: ' + toString(this.su_1) + ')';
  };
  protoOf(ContextDescriptor).wu = function () {
    return this.su_1.wu();
  };
  protoOf(ContextDescriptor).ru = function () {
    return this.su_1.ru();
  };
  protoOf(ContextDescriptor).xu = function () {
    return this.su_1.xu();
  };
  protoOf(ContextDescriptor).yu = function () {
    return this.su_1.yu();
  };
  protoOf(ContextDescriptor).zu = function () {
    return this.su_1.zu();
  };
  protoOf(ContextDescriptor).av = function (index) {
    return this.su_1.av(index);
  };
  protoOf(ContextDescriptor).bv = function (index) {
    return this.su_1.bv(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.nu(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.wt();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.tu_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.cv_1);
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
    this.gv_1 = $this_elementDescriptors;
    this.fv_1 = $this_elementDescriptors.yu();
  }
  protoOf(elementDescriptors$1).i = function () {
    return this.fv_1 > 0;
  };
  protoOf(elementDescriptors$1).j = function () {
    var tmp = this.gv_1.yu();
    var _unary__edvuaz = this.fv_1;
    this.fv_1 = _unary__edvuaz - 1 | 0;
    return this.gv_1.bv(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.hv_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.hv_1);
  };
  function elementNames$1($this_elementNames) {
    this.jv_1 = $this_elementNames;
    this.iv_1 = $this_elementNames.yu();
  }
  protoOf(elementNames$1).i = function () {
    return this.iv_1 > 0;
  };
  protoOf(elementNames$1).j = function () {
    var tmp = this.jv_1.yu();
    var _unary__edvuaz = this.iv_1;
    this.iv_1 = _unary__edvuaz - 1 | 0;
    return this.jv_1.av(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.kv_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).h = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1(this.kv_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.bu_1.k(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.yt_1 = serialName;
    this.zt_1 = false;
    this.au_1 = emptyList();
    this.bu_1 = ArrayList_init_$Create$_0();
    this.cu_1 = HashSet_init_$Create$();
    this.du_1 = ArrayList_init_$Create$_0();
    this.eu_1 = ArrayList_init_$Create$_0();
    this.fu_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).lv = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.cu_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.yt_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.bu_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.du_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.eu_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.fu_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).gu = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.lv(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.lv.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.xv_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.t1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.wv_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.av(it) + ': ' + this$0.bv(it).vu();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.mv_1 = serialName;
    this.nv_1 = kind;
    this.ov_1 = elementsCount;
    this.pv_1 = builder.au_1;
    this.qv_1 = toHashSet(builder.bu_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.bu_1;
    tmp.rv_1 = copyToArray(this_0);
    this.sv_1 = compactArray(builder.du_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.eu_1;
    tmp_0.tv_1 = copyToArray(this_1);
    this.uv_1 = toBooleanArray(builder.fu_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.rv_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.h();
    while (_iterator__ex2g4s.i()) {
      var item = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.ud_1, item.td_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.vv_1 = toMap(destination);
    this.wv_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.xv_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).vu = function () {
    return this.mv_1;
  };
  protoOf(SerialDescriptorImpl).wu = function () {
    return this.nv_1;
  };
  protoOf(SerialDescriptorImpl).yu = function () {
    return this.ov_1;
  };
  protoOf(SerialDescriptorImpl).zu = function () {
    return this.pv_1;
  };
  protoOf(SerialDescriptorImpl).yv = function () {
    return this.qv_1;
  };
  protoOf(SerialDescriptorImpl).av = function (index) {
    return getChecked(this.rv_1, index);
  };
  protoOf(SerialDescriptorImpl).bv = function (index) {
    return getChecked(this.sv_1, index);
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
      if (!(this.vu() === other.vu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.wv_1, other.wv_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.yu() === other.yu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.yu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.bv(index).vu() === other.bv(index).vu())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.bv(index).wu(), other.bv(index).wu())) {
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
    var tmp = until(0, this.ov_1);
    var tmp_0 = this.mv_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.bu_1.k(), toList(typeParameters), sdBuilder);
  }
  function get_nullable_0(_this__u8e3s4) {
    if (_this__u8e3s4.ru())
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
  protoOf(AbstractDecoder).zv = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).aw = function () {
    return true;
  };
  protoOf(AbstractDecoder).bw = function () {
    return null;
  };
  protoOf(AbstractDecoder).cw = function () {
    var tmp = this.zv();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).dw = function () {
    var tmp = this.zv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ew = function () {
    var tmp = this.zv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fw = function () {
    var tmp = this.zv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gw = function () {
    var tmp = this.zv();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).hw = function () {
    var tmp = this.zv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).iw = function () {
    var tmp = this.zv();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jw = function () {
    var tmp = this.zv();
    return tmp instanceof Char ? tmp.b1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).kw = function () {
    var tmp = this.zv();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).lw = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).mw = function (deserializer, previousValue) {
    return this.nw(deserializer);
  };
  protoOf(AbstractDecoder).ow = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).pw = function (descriptor) {
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
    return this.hw();
  };
  protoOf(AbstractDecoder).ww = function (descriptor, index) {
    return this.iw();
  };
  protoOf(AbstractDecoder).xw = function (descriptor, index) {
    return this.jw();
  };
  protoOf(AbstractDecoder).yw = function (descriptor, index) {
    return this.kw();
  };
  protoOf(AbstractDecoder).zw = function (descriptor, index) {
    return this.lw(descriptor.bv(index));
  };
  protoOf(AbstractDecoder).ax = function (descriptor, index, deserializer, previousValue) {
    return this.mw(deserializer, previousValue);
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.yw($this.wt(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.bx($this.wt(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).xt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.wt();
    var composite = decoder.ow(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.dx()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.ex(this.wt());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.yw(this.wt(), index);
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
            value = composite.bx(this.wt(), index, serializer);
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
    composite.pw(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).lu = function (decoder, klassName) {
    return decoder.cx().gx(this.ku(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.q9() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.q9() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.hx_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).wt = function () {
    return this.hx_1;
  };
  protoOf(NothingSerializer_0).xt = function (decoder) {
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
    this.ix_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).wt = function () {
    return this.ix_1;
  };
  protoOf(DurationSerializer).jx = function (decoder) {
    return Companion_getInstance().yg(decoder.kw());
  };
  protoOf(DurationSerializer).xt = function (decoder) {
    return new Duration(this.jx(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.kx_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).wt = function () {
    return this.kx_1;
  };
  protoOf(UuidSerializer).xt = function (decoder) {
    return Companion_getInstance_0().rh(decoder.kw());
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
  protoOf(ArrayListClassDesc).vu = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).vu = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).vu = function () {
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
  protoOf(ArrayClassDesc).vu = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.nx_1 = elementDescriptor;
    this.ox_1 = 1;
  }
  protoOf(ListLikeDescriptor).wu = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).yu = function () {
    return this.ox_1;
  };
  protoOf(ListLikeDescriptor).av = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).bv = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.vu() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.nx_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.nx_1, other.nx_1) && this.vu() === other.vu())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.nx_1), 31) + getStringHashCode(this.vu()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.vu() + '(' + toString(this.nx_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.tx_1 = serialName;
    this.ux_1 = keyDescriptor;
    this.vx_1 = valueDescriptor;
    this.wx_1 = 2;
  }
  protoOf(MapLikeDescriptor).vu = function () {
    return this.tx_1;
  };
  protoOf(MapLikeDescriptor).wu = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).yu = function () {
    return this.wx_1;
  };
  protoOf(MapLikeDescriptor).av = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).bv = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.vu() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.ux_1;
        break;
      case 1:
        tmp = this.vx_1;
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
    if (!(this.vu() === other.vu()))
      return false;
    if (!equals(this.ux_1, other.ux_1))
      return false;
    if (!equals(this.vx_1, other.vx_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.vu());
    result = imul(31, result) + hashCode(this.ux_1) | 0;
    result = imul(31, result) + hashCode(this.vx_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.vu() + '(' + toString(this.ux_1) + ', ' + toString(this.vx_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.by_1 = primitive.vu() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).vu = function () {
    return this.by_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.dy_1 = new ArrayListClassDesc(element.wt());
  }
  protoOf(ArrayListSerializer).wt = function () {
    return this.dy_1;
  };
  protoOf(ArrayListSerializer).ey = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).fy = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ArrayListSerializer).gy = function (_this__u8e3s4) {
    return this.fy(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hy = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).iy = function (_this__u8e3s4) {
    return this.hy(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ky = function (_this__u8e3s4) {
    return this.jy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ly = function (_this__u8e3s4, size) {
    return _this__u8e3s4.v4(size);
  };
  protoOf(ArrayListSerializer).my = function (_this__u8e3s4, size) {
    return this.ly(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).ny = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d4(index, element);
  };
  protoOf(ArrayListSerializer).oy = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.ny(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.vy_1 = new HashSetClassDesc(eSerializer.wt());
  }
  protoOf(HashSetSerializer).wt = function () {
    return this.vy_1;
  };
  protoOf(HashSetSerializer).ey = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).wy = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(HashSetSerializer).gy = function (_this__u8e3s4) {
    return this.wy(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).xy = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).iy = function (_this__u8e3s4) {
    return this.xy(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).yy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).ky = function (_this__u8e3s4) {
    return this.yy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).zy = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).my = function (_this__u8e3s4, size) {
    return this.zy(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).az = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(HashSetSerializer).oy = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.az(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.cz_1 = new LinkedHashSetClassDesc(eSerializer.wt());
  }
  protoOf(LinkedHashSetSerializer).wt = function () {
    return this.cz_1;
  };
  protoOf(LinkedHashSetSerializer).ey = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).dz = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(LinkedHashSetSerializer).gy = function (_this__u8e3s4) {
    return this.dz(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).ez = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).iy = function (_this__u8e3s4) {
    return this.ez(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).yy = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).ky = function (_this__u8e3s4) {
    return this.yy((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).fz = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).my = function (_this__u8e3s4, size) {
    return this.fz(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).gz = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.e(element);
  };
  protoOf(LinkedHashSetSerializer).oy = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.gz(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.jz_1 = new HashMapClassDesc(kSerializer.wt(), vSerializer.wt());
  }
  protoOf(HashMapSerializer).wt = function () {
    return this.jz_1;
  };
  protoOf(HashMapSerializer).ey = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).kz = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(HashMapSerializer).gy = function (_this__u8e3s4) {
    return this.kz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).lz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).iy = function (_this__u8e3s4) {
    return this.lz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).mz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).ky = function (_this__u8e3s4) {
    return this.mz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).nz = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).my = function (_this__u8e3s4, size) {
    return this.nz(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.uz_1 = new LinkedHashMapClassDesc(kSerializer.wt(), vSerializer.wt());
  }
  protoOf(LinkedHashMapSerializer).wt = function () {
    return this.uz_1;
  };
  protoOf(LinkedHashMapSerializer).ey = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).vz = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(LinkedHashMapSerializer).gy = function (_this__u8e3s4) {
    return this.vz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wz = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).iy = function (_this__u8e3s4) {
    return this.wz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mz = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ky = function (_this__u8e3s4) {
    return this.mz((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xz = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).my = function (_this__u8e3s4, size) {
    return this.xz(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.zz_1 = kClass;
    this.a10_1 = new ArrayClassDesc(eSerializer.wt());
  }
  protoOf(ReferenceArraySerializer).wt = function () {
    return this.a10_1;
  };
  protoOf(ReferenceArraySerializer).ey = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).b10 = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ReferenceArraySerializer).gy = function (_this__u8e3s4) {
    return this.b10(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).c10 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.zz_1);
  };
  protoOf(ReferenceArraySerializer).iy = function (_this__u8e3s4) {
    return this.c10(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).d10 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).ky = function (_this__u8e3s4) {
    return this.d10((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).e10 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.v4(size);
  };
  protoOf(ReferenceArraySerializer).my = function (_this__u8e3s4, size) {
    return this.e10(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).f10 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.d4(index, element);
  };
  protoOf(ReferenceArraySerializer).oy = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.f10(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.oz_1 = keySerializer;
    this.pz_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).qz = function (decoder, builder, startIndex, size) {
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
        this.rz(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).qy = function (decoder, builder, startIndex, size) {
    return this.qz(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).rz = function (decoder, index, builder, checkIndex) {
    var key = decoder.bx(this.wt(), index, this.oz_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.ex(this.wt());
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
      var tmp_2 = this.pz_1.wt().wu();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ax(this.wt(), vIndex, this.pz_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.bx(this.wt(), vIndex, this.pz_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.a2(key, value);
  };
  protoOf(MapLikeSerializer).ry = function (decoder, index, builder, checkIndex) {
    return this.rz(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.py_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).qy = function (decoder, builder, startIndex, size) {
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
        this.ry(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ry = function (decoder, index, builder, checkIndex) {
    this.oy(builder, index, decoder.bx(this.wt(), index, this.py_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.fx($this.wt());
    $this.my(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).ty = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ky(previous);
    var builder = tmp1_elvis_lhs == null ? this.ey() : tmp1_elvis_lhs;
    var startIndex = this.gy(builder);
    var compositeDecoder = decoder.ow(this.wt());
    if (compositeDecoder.dx()) {
      this.qy(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ex(this.wt());
        if (index === -1)
          break $l$loop;
        this.sy(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.pw(this.wt());
    return this.iy(builder);
  };
  protoOf(AbstractCollectionSerializer).xt = function (decoder) {
    return this.ty(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).sy = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ry(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ry.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.h10_1 = new PrimitiveArrayDescriptor(primitiveSerializer.wt());
  }
  protoOf(PrimitiveArraySerializer).wt = function () {
    return this.h10_1;
  };
  protoOf(PrimitiveArraySerializer).i10 = function (_this__u8e3s4) {
    return _this__u8e3s4.j10();
  };
  protoOf(PrimitiveArraySerializer).gy = function (_this__u8e3s4) {
    return this.i10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).k10 = function (_this__u8e3s4) {
    return _this__u8e3s4.l10();
  };
  protoOf(PrimitiveArraySerializer).iy = function (_this__u8e3s4) {
    return this.k10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).m10 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.n10(size);
  };
  protoOf(PrimitiveArraySerializer).my = function (_this__u8e3s4, size) {
    return this.m10(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).o10 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).oy = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.o10(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ey = function () {
    return this.ky(this.p10());
  };
  protoOf(PrimitiveArraySerializer).xt = function (decoder) {
    return this.ty(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).r10 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.j10() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.n10(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.n10.call(this, requiredCapacity);
    }
    return tmp;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.e11_1 = true;
  }
  protoOf(InlineClassDescriptor).xu = function () {
    return this.e11_1;
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
      if (!(this.vu() === other.vu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.e11_1 && contentEquals(this.r11(), other.r11()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.yu() === other.yu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.yu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.bv(index).vu() === other.bv(index).vu())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.bv(index).wu(), other.bv(index).wu())) {
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
    this.s11_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).t11 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.s11_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).wt = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).xt = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.v11_1 = OBJECT_getInstance();
    this.w11_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).wu = function () {
    return this.v11_1;
  };
  protoOf(NothingSerialDescriptor).vu = function () {
    return this.w11_1;
  };
  protoOf(NothingSerialDescriptor).yu = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).av = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).bv = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.w11_1) + imul(31, this.v11_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.x11_1 = serializer;
    this.y11_1 = new SerialDescriptorForNullable(this.x11_1.wt());
  }
  protoOf(NullableSerializer).wt = function () {
    return this.y11_1;
  };
  protoOf(NullableSerializer).xt = function (decoder) {
    return decoder.aw() ? decoder.nw(this.x11_1) : decoder.bw();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.x11_1, other.x11_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.x11_1);
  };
  function SerialDescriptorForNullable(original) {
    this.cv_1 = original;
    this.dv_1 = this.cv_1.vu() + '?';
    this.ev_1 = cachedSerialNames(this.cv_1);
  }
  protoOf(SerialDescriptorForNullable).vu = function () {
    return this.dv_1;
  };
  protoOf(SerialDescriptorForNullable).yv = function () {
    return this.ev_1;
  };
  protoOf(SerialDescriptorForNullable).ru = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.cv_1, other.cv_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.cv_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.cv_1), 31);
  };
  protoOf(SerialDescriptorForNullable).wu = function () {
    return this.cv_1.wu();
  };
  protoOf(SerialDescriptorForNullable).xu = function () {
    return this.cv_1.xu();
  };
  protoOf(SerialDescriptorForNullable).yu = function () {
    return this.cv_1.yu();
  };
  protoOf(SerialDescriptorForNullable).zu = function () {
    return this.cv_1.zu();
  };
  protoOf(SerialDescriptorForNullable).av = function (index) {
    return this.cv_1.av(index);
  };
  protoOf(SerialDescriptorForNullable).bv = function (index) {
    return this.cv_1.bv(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.au_1 = this$0.a12_1;
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
    this.z11_1 = objectInstance;
    this.a12_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b12_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).wt = function () {
    var tmp0 = this.b12_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.t1();
  };
  protoOf(ObjectSerializer).xt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.wt();
    var composite = decoder.ow(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.dx()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.ex(this.wt());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.pw(descriptor);
    return this.z11_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.wt();
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
      return _this__u8e3s4.yv();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.yu());
    var inductionVariable = 0;
    var last = _this__u8e3s4.yu();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.av(i);
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
    var tmp0 = _this__u8e3s4.nf_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'kotlinx.serialization.internal.typeOrThrow.<anonymous>' call
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.nf_1);
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
    var result = getStringHashCode(_this__u8e3s4.vu());
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
      var tmp0_safe_receiver = element.vu();
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
      var tmp0_safe_receiver_0 = element_0.wu();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.o11_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.t1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.q11_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.t1();
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.g11_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t11();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.g11_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u11();
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
          var tmp$ret$0 = item.wt();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.r11());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.av(i) + ': ' + this$0.bv(i).vu();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.f11_1 = serialName;
    this.g11_1 = generatedSerializer;
    this.h11_1 = elementsCount;
    this.i11_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.h11_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j11_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.h11_1;
    tmp_3.k11_1 = fillArrayVal(Array(size), null);
    this.l11_1 = null;
    this.m11_1 = booleanArray(this.h11_1);
    this.n11_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.o11_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.p11_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.q11_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).vu = function () {
    return this.f11_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).yu = function () {
    return this.h11_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wu = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).zu = function () {
    var tmp0_elvis_lhs = this.l11_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).yv = function () {
    return this.n11_1.x1();
  };
  protoOf(PluginGeneratedSerialDescriptor).r11 = function () {
    var tmp0 = this.p11_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).bv = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).wt();
  };
  protoOf(PluginGeneratedSerialDescriptor).av = function (index) {
    return getChecked(this.j11_1, index);
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
      if (!(this.vu() === other.vu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.r11(), other.r11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.yu() === other.yu())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.yu();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.bv(index).vu() === other.bv(index).vu())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.bv(index).wu(), other.bv(index).wu())) {
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
    var tmp = until(0, this.h11_1);
    var tmp_0 = this.vu() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.r11();
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
  protoOf(CharArraySerializer_0).f12 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.f12((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).p10 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).g12 = function (decoder, index, builder, checkIndex) {
    builder.j12(decoder.xw(this.h10_1, index));
  };
  protoOf(CharArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.g12(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(DoubleArraySerializer_0).m12 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.m12((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).p10 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).n12 = function (decoder, index, builder, checkIndex) {
    builder.q12(decoder.ww(this.h10_1, index));
  };
  protoOf(DoubleArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.n12(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.n12(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(FloatArraySerializer_0).t12 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.t12((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).p10 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).u12 = function (decoder, index, builder, checkIndex) {
    builder.x12(decoder.vw(this.h10_1, index));
  };
  protoOf(FloatArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(LongArraySerializer_0).a13 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.a13((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).p10 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).b13 = function (decoder, index, builder, checkIndex) {
    builder.e13(decoder.uw(this.h10_1, index));
  };
  protoOf(LongArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.b13(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.b13(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ULongArraySerializer_0).h13 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.h13(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.vi_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).i13 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).p10 = function () {
    return new ULongArray(this.i13());
  };
  protoOf(ULongArraySerializer_0).j13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.zw(this.h10_1, index).gw();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.m13(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.j13(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(IntArraySerializer_0).p13 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.p13((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).p10 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).q13 = function (decoder, index, builder, checkIndex) {
    builder.t13(decoder.tw(this.h10_1, index));
  };
  protoOf(IntArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.q13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.q13(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UIntArraySerializer_0).w13 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.w13(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.li_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).x13 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).p10 = function () {
    return new UIntArray(this.x13());
  };
  protoOf(UIntArraySerializer_0).y13 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.zw(this.h10_1, index).fw();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.b14(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.y13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.y13(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ShortArraySerializer_0).e14 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.e14((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).p10 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).f14 = function (decoder, index, builder, checkIndex) {
    builder.i14(decoder.sw(this.h10_1, index));
  };
  protoOf(ShortArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.f14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.f14(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UShortArraySerializer_0).l14 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.l14(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.fj_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).m14 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).p10 = function () {
    return new UShortArray(this.m14());
  };
  protoOf(UShortArraySerializer_0).n14 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.zw(this.h10_1, index).ew();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.q14(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.n14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.n14(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ByteArraySerializer_0).t14 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.t14((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).p10 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).u14 = function (decoder, index, builder, checkIndex) {
    builder.x14(decoder.rw(this.h10_1, index));
  };
  protoOf(ByteArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.u14(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.u14(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UByteArraySerializer_0).a15 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.a15(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.bi_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).b15 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).p10 = function () {
    return new UByteArray(this.b15());
  };
  protoOf(UByteArraySerializer_0).c15 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.zw(this.h10_1, index).dw();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.f15(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.c15(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.c15(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(BooleanArraySerializer_0).i15 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).ky = function (_this__u8e3s4) {
    return this.i15((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).p10 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).j15 = function (decoder, index, builder, checkIndex) {
    builder.m15(decoder.qw(this.h10_1, index));
  };
  protoOf(BooleanArraySerializer_0).ry = function (decoder, index, builder, checkIndex) {
    return this.j15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).q10 = function (decoder, index, builder, checkIndex) {
    return this.j15(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h12_1 = bufferWithData;
    this.i12_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(CharArrayBuilder).j10 = function () {
    return this.i12_1;
  };
  protoOf(CharArrayBuilder).n10 = function (requiredCapacity) {
    if (this.h12_1.length < requiredCapacity)
      this.h12_1 = copyOf(this.h12_1, coerceAtLeast(requiredCapacity, imul(this.h12_1.length, 2)));
  };
  protoOf(CharArrayBuilder).j12 = function (c) {
    this.r10();
    var tmp = this.h12_1;
    var _unary__edvuaz = this.i12_1;
    this.i12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).l10 = function () {
    return copyOf(this.h12_1, this.i12_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o12_1 = bufferWithData;
    this.p12_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(DoubleArrayBuilder).j10 = function () {
    return this.p12_1;
  };
  protoOf(DoubleArrayBuilder).n10 = function (requiredCapacity) {
    if (this.o12_1.length < requiredCapacity)
      this.o12_1 = copyOf_0(this.o12_1, coerceAtLeast(requiredCapacity, imul(this.o12_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).q12 = function (c) {
    this.r10();
    var tmp = this.o12_1;
    var _unary__edvuaz = this.p12_1;
    this.p12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).l10 = function () {
    return copyOf_0(this.o12_1, this.p12_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v12_1 = bufferWithData;
    this.w12_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(FloatArrayBuilder).j10 = function () {
    return this.w12_1;
  };
  protoOf(FloatArrayBuilder).n10 = function (requiredCapacity) {
    if (this.v12_1.length < requiredCapacity)
      this.v12_1 = copyOf_1(this.v12_1, coerceAtLeast(requiredCapacity, imul(this.v12_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).x12 = function (c) {
    this.r10();
    var tmp = this.v12_1;
    var _unary__edvuaz = this.w12_1;
    this.w12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).l10 = function () {
    return copyOf_1(this.v12_1, this.w12_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c13_1 = bufferWithData;
    this.d13_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(LongArrayBuilder).j10 = function () {
    return this.d13_1;
  };
  protoOf(LongArrayBuilder).n10 = function (requiredCapacity) {
    if (this.c13_1.length < requiredCapacity)
      this.c13_1 = copyOf_2(this.c13_1, coerceAtLeast(requiredCapacity, imul(this.c13_1.length, 2)));
  };
  protoOf(LongArrayBuilder).e13 = function (c) {
    this.r10();
    var tmp = this.c13_1;
    var _unary__edvuaz = this.d13_1;
    this.d13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).l10 = function () {
    return copyOf_2(this.c13_1, this.d13_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k13_1 = bufferWithData;
    this.l13_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.n10(10);
  }
  protoOf(ULongArrayBuilder).j10 = function () {
    return this.l13_1;
  };
  protoOf(ULongArrayBuilder).n10 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.k13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.k13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.k13_1), 2));
      tmp.k13_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).m13 = function (c) {
    this.r10();
    var tmp = this.k13_1;
    var _unary__edvuaz = this.l13_1;
    this.l13_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).n15 = function () {
    var tmp0 = this.k13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.l13_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).l10 = function () {
    return new ULongArray(this.n15());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r13_1 = bufferWithData;
    this.s13_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(IntArrayBuilder).j10 = function () {
    return this.s13_1;
  };
  protoOf(IntArrayBuilder).n10 = function (requiredCapacity) {
    if (this.r13_1.length < requiredCapacity)
      this.r13_1 = copyOf_3(this.r13_1, coerceAtLeast(requiredCapacity, imul(this.r13_1.length, 2)));
  };
  protoOf(IntArrayBuilder).t13 = function (c) {
    this.r10();
    var tmp = this.r13_1;
    var _unary__edvuaz = this.s13_1;
    this.s13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).l10 = function () {
    return copyOf_3(this.r13_1, this.s13_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z13_1 = bufferWithData;
    this.a14_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.n10(10);
  }
  protoOf(UIntArrayBuilder).j10 = function () {
    return this.a14_1;
  };
  protoOf(UIntArrayBuilder).n10 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.z13_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z13_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.z13_1), 2));
      tmp.z13_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).b14 = function (c) {
    this.r10();
    var tmp = this.z13_1;
    var _unary__edvuaz = this.a14_1;
    this.a14_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).o15 = function () {
    var tmp0 = this.z13_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a14_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).l10 = function () {
    return new UIntArray(this.o15());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g14_1 = bufferWithData;
    this.h14_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(ShortArrayBuilder).j10 = function () {
    return this.h14_1;
  };
  protoOf(ShortArrayBuilder).n10 = function (requiredCapacity) {
    if (this.g14_1.length < requiredCapacity)
      this.g14_1 = copyOf_4(this.g14_1, coerceAtLeast(requiredCapacity, imul(this.g14_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).i14 = function (c) {
    this.r10();
    var tmp = this.g14_1;
    var _unary__edvuaz = this.h14_1;
    this.h14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).l10 = function () {
    return copyOf_4(this.g14_1, this.h14_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o14_1 = bufferWithData;
    this.p14_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.n10(10);
  }
  protoOf(UShortArrayBuilder).j10 = function () {
    return this.p14_1;
  };
  protoOf(UShortArrayBuilder).n10 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.o14_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.o14_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.o14_1), 2));
      tmp.o14_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).q14 = function (c) {
    this.r10();
    var tmp = this.o14_1;
    var _unary__edvuaz = this.p14_1;
    this.p14_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).p15 = function () {
    var tmp0 = this.o14_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.p14_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).l10 = function () {
    return new UShortArray(this.p15());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v14_1 = bufferWithData;
    this.w14_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(ByteArrayBuilder).j10 = function () {
    return this.w14_1;
  };
  protoOf(ByteArrayBuilder).n10 = function (requiredCapacity) {
    if (this.v14_1.length < requiredCapacity)
      this.v14_1 = copyOf_5(this.v14_1, coerceAtLeast(requiredCapacity, imul(this.v14_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).x14 = function (c) {
    this.r10();
    var tmp = this.v14_1;
    var _unary__edvuaz = this.w14_1;
    this.w14_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).l10 = function () {
    return copyOf_5(this.v14_1, this.w14_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d15_1 = bufferWithData;
    this.e15_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.n10(10);
  }
  protoOf(UByteArrayBuilder).j10 = function () {
    return this.e15_1;
  };
  protoOf(UByteArrayBuilder).n10 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.d15_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.d15_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.d15_1), 2));
      tmp.d15_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).f15 = function (c) {
    this.r10();
    var tmp = this.d15_1;
    var _unary__edvuaz = this.e15_1;
    this.e15_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).q15 = function () {
    var tmp0 = this.d15_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.e15_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).l10 = function () {
    return new UByteArray(this.q15());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.k15_1 = bufferWithData;
    this.l15_1 = bufferWithData.length;
    this.n10(10);
  }
  protoOf(BooleanArrayBuilder).j10 = function () {
    return this.l15_1;
  };
  protoOf(BooleanArrayBuilder).n10 = function (requiredCapacity) {
    if (this.k15_1.length < requiredCapacity)
      this.k15_1 = copyOf_6(this.k15_1, coerceAtLeast(requiredCapacity, imul(this.k15_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).m15 = function (c) {
    this.r10();
    var tmp = this.k15_1;
    var _unary__edvuaz = this.l15_1;
    this.l15_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).l10 = function () {
    return copyOf_6(this.k15_1, this.l15_1);
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
    this.r15_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).wt = function () {
    return this.r15_1;
  };
  protoOf(StringSerializer).xt = function (decoder) {
    return decoder.kw();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.s15_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).wt = function () {
    return this.s15_1;
  };
  protoOf(CharSerializer).t15 = function (decoder) {
    return decoder.jw();
  };
  protoOf(CharSerializer).xt = function (decoder) {
    return new Char(this.t15(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.u15_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).wt = function () {
    return this.u15_1;
  };
  protoOf(DoubleSerializer).xt = function (decoder) {
    return decoder.iw();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.v15_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).wt = function () {
    return this.v15_1;
  };
  protoOf(FloatSerializer).xt = function (decoder) {
    return decoder.hw();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.w15_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).wt = function () {
    return this.w15_1;
  };
  protoOf(LongSerializer).xt = function (decoder) {
    return decoder.gw();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.x15_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).wt = function () {
    return this.x15_1;
  };
  protoOf(IntSerializer).xt = function (decoder) {
    return decoder.fw();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.y15_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).wt = function () {
    return this.y15_1;
  };
  protoOf(ShortSerializer).xt = function (decoder) {
    return decoder.ew();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.z15_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).wt = function () {
    return this.z15_1;
  };
  protoOf(ByteSerializer).xt = function (decoder) {
    return decoder.dw();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a16_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).wt = function () {
    return this.a16_1;
  };
  protoOf(BooleanSerializer).xt = function (decoder) {
    return decoder.cw();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.b16_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).wt = function () {
    return this.b16_1.wt();
  };
  protoOf(UnitSerializer).c16 = function (decoder) {
    this.b16_1.xt(decoder);
  };
  protoOf(UnitSerializer).xt = function (decoder) {
    this.c16(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.d16_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.d16_1 = serialName;
    this.e16_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).vu = function () {
    return this.d16_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).wu = function () {
    return this.e16_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).yu = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).av = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).bv = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.d16_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.d16_1 === other.d16_1 && equals(this.e16_1, other.e16_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.d16_1) + imul(31, this.e16_1.hashCode()) | 0;
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
      var primitiveName = primitive.wt().vu();
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
    this.f16_1 = key;
    this.g16_1 = value;
  }
  protoOf(MapEntry).s1 = function () {
    return this.f16_1;
  };
  protoOf(MapEntry).t1 = function () {
    return this.g16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.f16_1) + ', value=' + toString_0(this.g16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.f16_1 == null ? 0 : hashCode(this.f16_1);
    result = imul(result, 31) + (this.g16_1 == null ? 0 : hashCode(this.g16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.f16_1, tmp0_other_with_cast.f16_1))
      return false;
    if (!equals(this.g16_1, tmp0_other_with_cast.g16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.gu('key', $keySerializer.wt());
      $this$buildSerialDescriptor.gu('value', $valueSerializer.wt());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.j16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).wt = function () {
    return this.j16_1;
  };
  protoOf(MapEntrySerializer_0).k16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.gu('first', $keySerializer.wt());
      $this$buildClassSerialDescriptor.gu('second', $valueSerializer.wt());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.p16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).wt = function () {
    return this.p16_1;
  };
  protoOf(PairSerializer_0).k16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.bx($this.t16_1, 0, $this.q16_1);
    var b = composite.bx($this.t16_1, 1, $this.r16_1);
    var c = composite.bx($this.t16_1, 2, $this.s16_1);
    composite.pw($this.t16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ex($this.t16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.bx($this.t16_1, 0, $this.q16_1);
          break;
        case 1:
          b = composite.bx($this.t16_1, 1, $this.r16_1);
          break;
        case 2:
          c = composite.bx($this.t16_1, 2, $this.s16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.pw($this.t16_1);
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
      $this$buildClassSerialDescriptor.gu('first', this$0.q16_1.wt());
      $this$buildClassSerialDescriptor.gu('second', this$0.r16_1.wt());
      $this$buildClassSerialDescriptor.gu('third', this$0.s16_1.wt());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.q16_1 = aSerializer;
    this.r16_1 = bSerializer;
    this.s16_1 = cSerializer;
    var tmp = this;
    tmp.t16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).wt = function () {
    return this.t16_1;
  };
  protoOf(TripleSerializer_0).xt = function (decoder) {
    var composite = decoder.ow(this.t16_1);
    if (composite.dx()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.l16_1 = keySerializer;
    this.m16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).xt = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.wt();
    var composite = decoder.ow(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.dx()) {
        var key = composite.bx(this.wt(), 0, this.l16_1);
        var value = composite.bx(this.wt(), 1, this.m16_1);
        tmp$ret$0 = this.k16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.ex(this.wt());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.bx(this.wt(), 0, this.l16_1);
            break;
          case 1:
            value_0 = composite.bx(this.wt(), 1, this.m16_1);
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
      tmp$ret$0 = this.k16(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.pw(descriptor);
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
    this.u16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).wt = function () {
    return this.u16_1;
  };
  protoOf(ULongSerializer).v16 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.lw(this.u16_1).gw();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).xt = function (decoder) {
    return new ULong(this.v16(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.w16_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).wt = function () {
    return this.w16_1;
  };
  protoOf(UIntSerializer).x16 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.lw(this.w16_1).fw();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).xt = function (decoder) {
    return new UInt(this.x16(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.y16_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).wt = function () {
    return this.y16_1;
  };
  protoOf(UShortSerializer).z16 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.lw(this.y16_1).ew();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).xt = function (decoder) {
    return new UShort(this.z16(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.a17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).wt = function () {
    return this.a17_1;
  };
  protoOf(UByteSerializer).b17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.lw(this.a17_1).dw();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).xt = function (decoder) {
    return new UByte(this.b17(decoder));
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
  protoOf(SerializersModule).nu = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ou(kClass, typeArgumentsSerializers) : $super.ou.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.d17_1 = class2ContextualFactory;
    this.e17_1 = polyBase2Serializers;
    this.f17_1 = polyBase2DefaultSerializerProvider;
    this.g17_1 = polyBase2NamedSerializers;
    this.h17_1 = polyBase2DefaultDeserializerProvider;
    this.i17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).mu = function () {
    return this.i17_1;
  };
  protoOf(SerialModuleImpl).gx = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.g17_1.w1(baseClass);
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
    var tmp_1 = this.h17_1.w1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ou = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.d17_1.w1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).c17 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.d17_1.z1().h();
    while (_iterator__ex2g4s.i()) {
      var element = _iterator__ex2g4s.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.s1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.t1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.m17_1;
        collector.n17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.l17(kclass, serial.k17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.e17_1.z1().h();
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
        collector.o17(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.f17_1.z1().h();
    while (_iterator__ex2g4s_2.i()) {
      var element_2 = _iterator__ex2g4s_2.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.t1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.p17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.h17_1.z1().h();
    while (_iterator__ex2g4s_3.i()) {
      var element_3 = _iterator__ex2g4s_3.j();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.s1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.t1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.q17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
    this.r17_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.r17_1.equals(tmp0_other_with_cast.r17_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.r17_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.r17_1) + ')';
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
    return mapOf([to(PrimitiveClasses_getInstance().ua(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().xa(), CharArraySerializer()), to(PrimitiveClasses_getInstance().sa(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().db(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ra(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().cb(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().bb(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().qa(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ab(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().pa(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().za(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().oa(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ya(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().na(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().wa(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ma(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Uuid), serializer_15(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ma())
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ma()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().ta());
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
          var tmp_1 = assocObject.c12(args.slice());
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
    this.s17_1 = $factory;
  }
  protoOf(createCache$1).pu = function (key) {
    return this.s17_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.t17_1 = $factory;
  }
  protoOf(createParametrizedCache$1).qu = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.t17_1(key, types);
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
  protoOf(SerialDescriptorImpl).ru = get_isNullable;
  protoOf(SerialDescriptorImpl).xu = get_isInline;
  protoOf(AbstractDecoder).bx = decodeSerializableElement$default;
  protoOf(AbstractDecoder).nw = decodeSerializableValue;
  protoOf(AbstractDecoder).dx = decodeSequentially;
  protoOf(AbstractDecoder).fx = decodeCollectionSize;
  protoOf(ListLikeDescriptor).ru = get_isNullable;
  protoOf(ListLikeDescriptor).xu = get_isInline;
  protoOf(ListLikeDescriptor).zu = get_annotations;
  protoOf(MapLikeDescriptor).ru = get_isNullable;
  protoOf(MapLikeDescriptor).xu = get_isInline;
  protoOf(MapLikeDescriptor).zu = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ru = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).xu = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).u11 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).ru = get_isNullable;
  protoOf(NothingSerialDescriptor).xu = get_isInline;
  protoOf(NothingSerialDescriptor).zu = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).ru = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).xu = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).zu = get_annotations;
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

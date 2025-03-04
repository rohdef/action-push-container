(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.w8;
  var objectCreate = kotlin_kotlin.$_$.v8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.b8;
  var ensureNotNull = kotlin_kotlin.$_$.yb;
  var toString = kotlin_kotlin.$_$.z8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var arrayCopy = kotlin_kotlin.$_$.n4;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var initMetadataForClass = kotlin_kotlin.$_$.a8;
  var Long = kotlin_kotlin.$_$.db;
  var charSequenceGet = kotlin_kotlin.$_$.p7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.x1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z1;
  var toByte = kotlin_kotlin.$_$.x8;
  var copyOf = kotlin_kotlin.$_$.b5;
  var VOID = kotlin_kotlin.$_$.f;
  var charArray = kotlin_kotlin.$_$.o7;
  var numberToChar = kotlin_kotlin.$_$.t8;
  var concatToString = kotlin_kotlin.$_$.m9;
  var charArrayOf = kotlin_kotlin.$_$.n7;
  var concatToString_0 = kotlin_kotlin.$_$.l9;
  var contentHashCode = kotlin_kotlin.$_$.u4;
  var THROW_CCE = kotlin_kotlin.$_$.ib;
  var copyOfRange = kotlin_kotlin.$_$.w4;
  var replace = kotlin_kotlin.$_$.ca;
  var Comparable = kotlin_kotlin.$_$.wa;
  var toLong = kotlin_kotlin.$_$.y8;
  var numberToLong = kotlin_kotlin.$_$.u8;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.c1;
  var fillArrayVal = kotlin_kotlin.$_$.v7;
  var isArray = kotlin_kotlin.$_$.g8;
  var initMetadataForInterface = kotlin_kotlin.$_$.d8;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.cb;
  var IndexOutOfBoundsException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.m7;
  var Exception = kotlin_kotlin.$_$.ab;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.e1;
  var initMetadataForObject = kotlin_kotlin.$_$.f8;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment', Segment_init_$Create$);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForClass(SegmentedByteString, 'SegmentedByteString', VOID, ByteString);
  initMetadataForClass(UnsafeCursor, 'UnsafeCursor', UnsafeCursor);
  initMetadataForInterface(BufferedSource, 'BufferedSource');
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [BufferedSource]);
  initMetadataForClass(ArrayIndexOutOfBoundsException, 'ArrayIndexOutOfBoundsException', VOID, IndexOutOfBoundsException);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForClass(RealBufferedSource, 'RealBufferedSource', VOID, VOID, [BufferedSource]);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function buffer(_this__u8e3s4) {
    return new RealBufferedSource(_this__u8e3s4);
  }
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.q17_1 = new Int8Array(8192);
    $this.u17_1 = true;
    $this.t17_1 = false;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
    Segment.call($this);
    $this.q17_1 = data;
    $this.r17_1 = pos;
    $this.s17_1 = limit;
    $this.t17_1 = shared;
    $this.u17_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shared, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.x17_1 = 8192;
    this.y17_1 = 1024;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).z17 = function () {
    this.t17_1 = true;
    return Segment_init_$Create$_0(this.q17_1, this.r17_1, this.s17_1, true, false);
  };
  protoOf(Segment).a18 = function () {
    var result = !(this.v17_1 === this) ? this.v17_1 : null;
    ensureNotNull(this.w17_1).v17_1 = this.v17_1;
    ensureNotNull(this.v17_1).w17_1 = this.w17_1;
    this.v17_1 = null;
    this.w17_1 = null;
    return result;
  };
  protoOf(Segment).b18 = function (segment) {
    segment.w17_1 = this;
    segment.v17_1 = this.v17_1;
    ensureNotNull(this.v17_1).w17_1 = segment;
    this.v17_1 = segment;
    return segment;
  };
  protoOf(Segment).c18 = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.s17_1 - this.r17_1 | 0))) {
      // Inline function 'okio.Segment.split.<anonymous>' call
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.z17();
    } else {
      prefix = SegmentPool_instance.f18();
      var tmp1 = this.q17_1;
      var tmp2 = prefix.q17_1;
      var tmp3 = this.r17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.r17_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
    }
    prefix.s17_1 = prefix.r17_1 + byteCount | 0;
    this.r17_1 = this.r17_1 + byteCount | 0;
    ensureNotNull(this.w17_1).b18(prefix);
    return prefix;
  };
  protoOf(Segment).g18 = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.w17_1 === this)) {
      // Inline function 'okio.Segment.compact.<anonymous>' call
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.w17_1).u17_1)
      return Unit_instance;
    var byteCount = this.s17_1 - this.r17_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.w17_1).s17_1 | 0) + (ensureNotNull(this.w17_1).t17_1 ? 0 : ensureNotNull(this.w17_1).r17_1) | 0;
    if (byteCount > availableByteCount)
      return Unit_instance;
    this.h18(ensureNotNull(this.w17_1), byteCount);
    this.a18();
    SegmentPool_instance.i18(this);
  };
  protoOf(Segment).h18 = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.u17_1) {
      // Inline function 'okio.Segment.writeTo.<anonymous>' call
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.s17_1 + byteCount | 0) > 8192) {
      if (sink.t17_1)
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.s17_1 + byteCount | 0) - sink.r17_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp1 = sink.q17_1;
      var tmp2 = sink.q17_1;
      var tmp3 = sink.r17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.s17_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
      sink.s17_1 = sink.s17_1 - sink.r17_1 | 0;
      sink.r17_1 = 0;
    }
    var tmp6 = this.q17_1;
    var tmp7 = sink.q17_1;
    var tmp8 = sink.s17_1;
    var tmp9 = this.r17_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.r17_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp6;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp7, tmp8, tmp9, endIndex_0);
    sink.s17_1 = sink.s17_1 + byteCount | 0;
    this.r17_1 = this.r17_1 + byteCount | 0;
  };
  function Segment() {
    this.r17_1 = 0;
    this.s17_1 = 0;
    this.t17_1 = false;
    this.u17_1 = false;
    this.v17_1 = null;
    this.w17_1 = null;
  }
  var DEFAULT__new_UnsafeCursor;
  function get_DEFAULT__ByteString_size() {
    _init_properties_Util_kt__laey5a();
    return DEFAULT__ByteString_size;
  }
  var DEFAULT__ByteString_size;
  function resolveDefaultParameter(_this__u8e3s4, position) {
    _init_properties_Util_kt__laey5a();
    if (position === get_DEFAULT__ByteString_size())
      return _this__u8e3s4.k();
    return position;
  }
  function arrayRangeEquals(a, aOffset, b, bOffset, byteCount) {
    _init_properties_Util_kt__laey5a();
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(a[i + aOffset | 0] === b[i + bOffset | 0]))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties_Util_kt__laey5a();
    if (offset.v2(byteCount).w(new Long(0, 0)) < 0 || offset.w(size) > 0 || size.l2(offset).w(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('size=' + size.toString() + ' offset=' + offset.toString() + ' byteCount=' + byteCount.toString());
    }
  }
  var properties_initialized_Util_kt_13atj0;
  function _init_properties_Util_kt__laey5a() {
    if (!properties_initialized_Util_kt_13atj0) {
      properties_initialized_Util_kt_13atj0 = true;
      DEFAULT__new_UnsafeCursor = new UnsafeCursor();
      DEFAULT__ByteString_size = -1234567890;
    }
  }
  function commonAsUtf8ToByteArray(_this__u8e3s4) {
    var bytes = new Int8Array(imul(4, _this__u8e3s4.length));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b0 = charSequenceGet(_this__u8e3s4, index);
        if (Char__compareTo_impl_ypi4mb(b0, _Char___init__impl__6a9atx(128)) >= 0) {
          var size = index;
          // Inline function 'okio.processUtf8Bytes' call
          var endIndex = _this__u8e3s4.length;
          var index_0 = index;
          while (index_0 < endIndex) {
            var c = charSequenceGet(_this__u8e3s4, index_0);
            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
              // Inline function 'kotlin.code' call
              var tmp$ret$0 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_0 = toByte(tmp$ret$0);
              var _unary__edvuaz = size;
              size = _unary__edvuaz + 1 | 0;
              bytes[_unary__edvuaz] = c_0;
              index_0 = index_0 + 1 | 0;
              while (index_0 < endIndex && Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index_0), _Char___init__impl__6a9atx(128)) < 0) {
                var _unary__edvuaz_0 = index_0;
                index_0 = _unary__edvuaz_0 + 1 | 0;
                // Inline function 'kotlin.code' call
                var this_0 = charSequenceGet(_this__u8e3s4, _unary__edvuaz_0);
                var tmp$ret$1 = Char__toInt_impl_vasixd(this_0);
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var c_1 = toByte(tmp$ret$1);
                var _unary__edvuaz_1 = size;
                size = _unary__edvuaz_1 + 1 | 0;
                bytes[_unary__edvuaz_1] = c_1;
              }
            } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
              // Inline function 'kotlin.code' call
              var tmp$ret$2 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_2 = toByte(tmp$ret$2 >> 6 | 192);
              var _unary__edvuaz_2 = size;
              size = _unary__edvuaz_2 + 1 | 0;
              bytes[_unary__edvuaz_2] = c_2;
              // Inline function 'kotlin.code' call
              var tmp$ret$3 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_3 = toByte(tmp$ret$3 & 63 | 128);
              var _unary__edvuaz_3 = size;
              size = _unary__edvuaz_3 + 1 | 0;
              bytes[_unary__edvuaz_3] = c_3;
              index_0 = index_0 + 1 | 0;
            } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
              // Inline function 'kotlin.code' call
              var tmp$ret$4 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_4 = toByte(tmp$ret$4 >> 12 | 224);
              var _unary__edvuaz_4 = size;
              size = _unary__edvuaz_4 + 1 | 0;
              bytes[_unary__edvuaz_4] = c_4;
              // Inline function 'kotlin.code' call
              var tmp$ret$5 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_5 = toByte(tmp$ret$5 >> 6 & 63 | 128);
              var _unary__edvuaz_5 = size;
              size = _unary__edvuaz_5 + 1 | 0;
              bytes[_unary__edvuaz_5] = c_5;
              // Inline function 'kotlin.code' call
              var tmp$ret$6 = Char__toInt_impl_vasixd(c);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              var c_6 = toByte(tmp$ret$6 & 63 | 128);
              var _unary__edvuaz_6 = size;
              size = _unary__edvuaz_6 + 1 | 0;
              bytes[_unary__edvuaz_6] = c_6;
              index_0 = index_0 + 1 | 0;
            } else {
              var tmp;
              if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 || endIndex <= (index_0 + 1 | 0)) {
                tmp = true;
              } else {
                var containsArg = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
              }
              if (tmp) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var _unary__edvuaz_7 = size;
                size = _unary__edvuaz_7 + 1 | 0;
                bytes[_unary__edvuaz_7] = 63;
                index_0 = index_0 + 1 | 0;
              } else {
                // Inline function 'kotlin.code' call
                var tmp_0 = Char__toInt_impl_vasixd(c) << 10;
                // Inline function 'kotlin.code' call
                var this_1 = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                var codePoint = (tmp_0 + Char__toInt_impl_vasixd(this_1) | 0) + -56613888 | 0;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var c_7 = toByte(codePoint >> 18 | 240);
                var _unary__edvuaz_8 = size;
                size = _unary__edvuaz_8 + 1 | 0;
                bytes[_unary__edvuaz_8] = c_7;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var c_8 = toByte(codePoint >> 12 & 63 | 128);
                var _unary__edvuaz_9 = size;
                size = _unary__edvuaz_9 + 1 | 0;
                bytes[_unary__edvuaz_9] = c_8;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var c_9 = toByte(codePoint >> 6 & 63 | 128);
                var _unary__edvuaz_10 = size;
                size = _unary__edvuaz_10 + 1 | 0;
                bytes[_unary__edvuaz_10] = c_9;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var c_10 = toByte(codePoint & 63 | 128);
                var _unary__edvuaz_11 = size;
                size = _unary__edvuaz_11 + 1 | 0;
                bytes[_unary__edvuaz_11] = c_10;
                index_0 = index_0 + 2 | 0;
              }
            }
          }
          return copyOf(bytes, size);
        }
        // Inline function 'kotlin.code' call
        var tmp$ret$9 = Char__toInt_impl_vasixd(b0);
        bytes[index] = toByte(tmp$ret$9);
      }
       while (inductionVariable < last);
    return copyOf(bytes, _this__u8e3s4.length);
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw new ArrayIndexOutOfBoundsException('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'okio.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
        var c = numberToChar(b0);
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = c;
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
          var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = c_0;
        }
      } else {
        // Inline function 'okio.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp3 = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            if (endIndex <= (tmp3 + 1 | 0)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var c_1 = numberToChar(65533);
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = c_1;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp3];
            var b1 = _this__u8e3s4[tmp3 + 1 | 0];
            // Inline function 'okio.isUtf8Continuation' call
            // Inline function 'okio.and' call
            if (!((b1 & 192) === 128)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var c_2 = numberToChar(65533);
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = c_2;
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var c_3 = numberToChar(65533);
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = c_3;
            } else {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var c_4 = numberToChar(codePoint);
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = c_4;
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          // Inline function 'okio.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp12 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              if (endIndex <= (tmp12 + 2 | 0)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_5 = numberToChar(65533);
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = c_5;
                var tmp_1;
                if (endIndex <= (tmp12 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'okio.isUtf8Continuation' call
                  // Inline function 'okio.and' call
                  tmp_1 = !((_this__u8e3s4[tmp12 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp12];
              var b1_0 = _this__u8e3s4[tmp12 + 1 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b1_0 & 192) === 128)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_6 = numberToChar(65533);
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = c_6;
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp12 + 2 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b2 & 192) === 128)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_7 = numberToChar(65533);
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = c_7;
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_8 = numberToChar(65533);
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = c_8;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_9 = numberToChar(65533);
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = c_9;
              } else {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var c_10 = numberToChar(codePoint_0);
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = c_10;
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            // Inline function 'okio.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp23 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                if (endIndex <= (tmp23 + 3 | 0)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = c_11;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = c_12;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_13 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = c_13;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp23 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'okio.isUtf8Continuation' call
                    // Inline function 'okio.and' call
                    tmp_3 = !((_this__u8e3s4[tmp23 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp23 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'okio.isUtf8Continuation' call
                      // Inline function 'okio.and' call
                      tmp_4 = !((_this__u8e3s4[tmp23 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp23];
                var b1_1 = _this__u8e3s4[tmp23 + 1 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b1_1 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = c_14;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = c_15;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_16 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = c_16;
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp23 + 2 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b2_0 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = c_17;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = c_18;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_19 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = c_19;
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp23 + 3 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b3 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = c_20;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = c_21;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_22 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = c_22;
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = c_23;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = c_24;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_25 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = c_25;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = c_26;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = c_27;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_28 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = c_28;
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = c_29;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = c_30;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_31 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = c_31;
                  }
                } else {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = c_32;
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = c_33;
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var c_34 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = c_34;
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var c_35 = _Char___init__impl__6a9atx(65533);
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = c_35;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_HEX_DIGIT_CHARS() {
    _init_properties_ByteString_kt__sqjq7b();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function commonWrite(_this__u8e3s4, buffer, offset, byteCount) {
    _init_properties_ByteString_kt__sqjq7b();
    buffer.o18(_this__u8e3s4.j18_1, offset, byteCount);
  }
  function codePointIndexToCharIndex(s, codePointCount) {
    _init_properties_ByteString_kt__sqjq7b();
    var charCount = 0;
    var j = 0;
    // Inline function 'okio.processUtf8CodePoints' call
    var endIndex = s.length;
    var index = 0;
    while (index < endIndex) {
      var b0 = s[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
        var _unary__edvuaz = j;
        j = _unary__edvuaz + 1 | 0;
        if (_unary__edvuaz === codePointCount) {
          return charCount;
        }
        var tmp;
        var tmp_0;
        var tmp_1;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(10);
        if (!(b0 === Char__toInt_impl_vasixd(this_0))) {
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(13);
          tmp_1 = !(b0 === Char__toInt_impl_vasixd(this_1));
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          // Inline function 'okio.isIsoControl' call
          tmp_0 = (0 <= b0 ? b0 <= 31 : false) || (127 <= b0 ? b0 <= 159 : false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = true;
        } else {
          tmp = b0 === 65533;
        }
        if (tmp) {
          return -1;
        }
        charCount = charCount + (b0 < 65536 ? 1 : 2) | 0;
        index = index + 1 | 0;
        while (index < endIndex && s[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
          var c = s[_unary__edvuaz_0];
          var _unary__edvuaz_1 = j;
          j = _unary__edvuaz_1 + 1 | 0;
          if (_unary__edvuaz_1 === codePointCount) {
            return charCount;
          }
          var tmp_2;
          var tmp_3;
          var tmp_4;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(10);
          if (!(c === Char__toInt_impl_vasixd(this_2))) {
            // Inline function 'kotlin.code' call
            var this_3 = _Char___init__impl__6a9atx(13);
            tmp_4 = !(c === Char__toInt_impl_vasixd(this_3));
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            // Inline function 'okio.isIsoControl' call
            tmp_3 = (0 <= c ? c <= 31 : false) || (127 <= c ? c <= 159 : false);
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp_2 = true;
          } else {
            tmp_2 = c === 65533;
          }
          if (tmp_2) {
            return -1;
          }
          charCount = charCount + (c < 65536 ? 1 : 2) | 0;
        }
      } else {
        // Inline function 'okio.shr' call
        if (b0 >> 5 === -2) {
          var tmp_5 = index;
          var tmp3 = index;
          var tmp$ret$10;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            if (endIndex <= (tmp3 + 1 | 0)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var _unary__edvuaz_2 = j;
              j = _unary__edvuaz_2 + 1 | 0;
              if (_unary__edvuaz_2 === codePointCount) {
                return charCount;
              }
              var tmp_6;
              var tmp_7;
              var tmp_8;
              // Inline function 'kotlin.code' call
              var this_4 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_4))) {
                // Inline function 'kotlin.code' call
                var this_5 = _Char___init__impl__6a9atx(13);
                tmp_8 = !(65533 === Char__toInt_impl_vasixd(this_5));
              } else {
                tmp_8 = false;
              }
              if (tmp_8) {
                // Inline function 'okio.isIsoControl' call
                tmp_7 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp_6 = true;
              } else {
                tmp_6 = 65533 === 65533;
              }
              if (tmp_6) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var b0_0 = s[tmp3];
            var b1 = s[tmp3 + 1 | 0];
            // Inline function 'okio.isUtf8Continuation' call
            // Inline function 'okio.and' call
            if (!((b1 & 192) === 128)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var _unary__edvuaz_3 = j;
              j = _unary__edvuaz_3 + 1 | 0;
              if (_unary__edvuaz_3 === codePointCount) {
                return charCount;
              }
              var tmp_9;
              var tmp_10;
              var tmp_11;
              // Inline function 'kotlin.code' call
              var this_6 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_6))) {
                // Inline function 'kotlin.code' call
                var this_7 = _Char___init__impl__6a9atx(13);
                tmp_11 = !(65533 === Char__toInt_impl_vasixd(this_7));
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                // Inline function 'okio.isIsoControl' call
                tmp_10 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_10 = false;
              }
              if (tmp_10) {
                tmp_9 = true;
              } else {
                tmp_9 = 65533 === 65533;
              }
              if (tmp_9) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var _unary__edvuaz_4 = j;
              j = _unary__edvuaz_4 + 1 | 0;
              if (_unary__edvuaz_4 === codePointCount) {
                return charCount;
              }
              var tmp_12;
              var tmp_13;
              var tmp_14;
              // Inline function 'kotlin.code' call
              var this_8 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_8))) {
                // Inline function 'kotlin.code' call
                var this_9 = _Char___init__impl__6a9atx(13);
                tmp_14 = !(65533 === Char__toInt_impl_vasixd(this_9));
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                // Inline function 'okio.isIsoControl' call
                tmp_13 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp_12 = true;
              } else {
                tmp_12 = 65533 === 65533;
              }
              if (tmp_12) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
            } else {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var _unary__edvuaz_5 = j;
              j = _unary__edvuaz_5 + 1 | 0;
              if (_unary__edvuaz_5 === codePointCount) {
                return charCount;
              }
              var tmp_15;
              var tmp_16;
              var tmp_17;
              // Inline function 'kotlin.code' call
              var this_10 = _Char___init__impl__6a9atx(10);
              if (!(codePoint === Char__toInt_impl_vasixd(this_10))) {
                // Inline function 'kotlin.code' call
                var this_11 = _Char___init__impl__6a9atx(13);
                tmp_17 = !(codePoint === Char__toInt_impl_vasixd(this_11));
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                // Inline function 'okio.isIsoControl' call
                tmp_16 = (0 <= codePoint ? codePoint <= 31 : false) || (127 <= codePoint ? codePoint <= 159 : false);
              } else {
                tmp_16 = false;
              }
              if (tmp_16) {
                tmp_15 = true;
              } else {
                tmp_15 = codePoint === 65533;
              }
              if (tmp_15) {
                return -1;
              }
              charCount = charCount + (codePoint < 65536 ? 1 : 2) | 0;
            }
            tmp$ret$10 = 2;
          }
          index = tmp_5 + tmp$ret$10 | 0;
        } else {
          // Inline function 'okio.shr' call
          if (b0 >> 4 === -2) {
            var tmp_18 = index;
            var tmp12 = index;
            var tmp$ret$28;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              if (endIndex <= (tmp12 + 2 | 0)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_6 = j;
                j = _unary__edvuaz_6 + 1 | 0;
                if (_unary__edvuaz_6 === codePointCount) {
                  return charCount;
                }
                var tmp_19;
                var tmp_20;
                var tmp_21;
                // Inline function 'kotlin.code' call
                var this_12 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_12))) {
                  // Inline function 'kotlin.code' call
                  var this_13 = _Char___init__impl__6a9atx(13);
                  tmp_21 = !(65533 === Char__toInt_impl_vasixd(this_13));
                } else {
                  tmp_21 = false;
                }
                if (tmp_21) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_20 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_19 = true;
                } else {
                  tmp_19 = 65533 === 65533;
                }
                if (tmp_19) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                var tmp_22;
                if (endIndex <= (tmp12 + 1 | 0)) {
                  tmp_22 = true;
                } else {
                  // Inline function 'okio.isUtf8Continuation' call
                  // Inline function 'okio.and' call
                  tmp_22 = !((s[tmp12 + 1 | 0] & 192) === 128);
                }
                if (tmp_22) {
                  tmp$ret$28 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$28 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = s[tmp12];
              var b1_0 = s[tmp12 + 1 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b1_0 & 192) === 128)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_7 = j;
                j = _unary__edvuaz_7 + 1 | 0;
                if (_unary__edvuaz_7 === codePointCount) {
                  return charCount;
                }
                var tmp_23;
                var tmp_24;
                var tmp_25;
                // Inline function 'kotlin.code' call
                var this_14 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_14))) {
                  // Inline function 'kotlin.code' call
                  var this_15 = _Char___init__impl__6a9atx(13);
                  tmp_25 = !(65533 === Char__toInt_impl_vasixd(this_15));
                } else {
                  tmp_25 = false;
                }
                if (tmp_25) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_24 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_24 = false;
                }
                if (tmp_24) {
                  tmp_23 = true;
                } else {
                  tmp_23 = 65533 === 65533;
                }
                if (tmp_23) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 1;
                break $l$block_4;
              }
              var b2 = s[tmp12 + 2 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b2 & 192) === 128)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_8 = j;
                j = _unary__edvuaz_8 + 1 | 0;
                if (_unary__edvuaz_8 === codePointCount) {
                  return charCount;
                }
                var tmp_26;
                var tmp_27;
                var tmp_28;
                // Inline function 'kotlin.code' call
                var this_16 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_16))) {
                  // Inline function 'kotlin.code' call
                  var this_17 = _Char___init__impl__6a9atx(13);
                  tmp_28 = !(65533 === Char__toInt_impl_vasixd(this_17));
                } else {
                  tmp_28 = false;
                }
                if (tmp_28) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_27 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_27 = false;
                }
                if (tmp_27) {
                  tmp_26 = true;
                } else {
                  tmp_26 = 65533 === 65533;
                }
                if (tmp_26) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_9 = j;
                j = _unary__edvuaz_9 + 1 | 0;
                if (_unary__edvuaz_9 === codePointCount) {
                  return charCount;
                }
                var tmp_29;
                var tmp_30;
                var tmp_31;
                // Inline function 'kotlin.code' call
                var this_18 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_18))) {
                  // Inline function 'kotlin.code' call
                  var this_19 = _Char___init__impl__6a9atx(13);
                  tmp_31 = !(65533 === Char__toInt_impl_vasixd(this_19));
                } else {
                  tmp_31 = false;
                }
                if (tmp_31) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_30 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_30 = false;
                }
                if (tmp_30) {
                  tmp_29 = true;
                } else {
                  tmp_29 = 65533 === 65533;
                }
                if (tmp_29) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_10 = j;
                j = _unary__edvuaz_10 + 1 | 0;
                if (_unary__edvuaz_10 === codePointCount) {
                  return charCount;
                }
                var tmp_32;
                var tmp_33;
                var tmp_34;
                // Inline function 'kotlin.code' call
                var this_20 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_20))) {
                  // Inline function 'kotlin.code' call
                  var this_21 = _Char___init__impl__6a9atx(13);
                  tmp_34 = !(65533 === Char__toInt_impl_vasixd(this_21));
                } else {
                  tmp_34 = false;
                }
                if (tmp_34) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_33 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_33 = false;
                }
                if (tmp_33) {
                  tmp_32 = true;
                } else {
                  tmp_32 = 65533 === 65533;
                }
                if (tmp_32) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              } else {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var _unary__edvuaz_11 = j;
                j = _unary__edvuaz_11 + 1 | 0;
                if (_unary__edvuaz_11 === codePointCount) {
                  return charCount;
                }
                var tmp_35;
                var tmp_36;
                var tmp_37;
                // Inline function 'kotlin.code' call
                var this_22 = _Char___init__impl__6a9atx(10);
                if (!(codePoint_0 === Char__toInt_impl_vasixd(this_22))) {
                  // Inline function 'kotlin.code' call
                  var this_23 = _Char___init__impl__6a9atx(13);
                  tmp_37 = !(codePoint_0 === Char__toInt_impl_vasixd(this_23));
                } else {
                  tmp_37 = false;
                }
                if (tmp_37) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_36 = (0 <= codePoint_0 ? codePoint_0 <= 31 : false) || (127 <= codePoint_0 ? codePoint_0 <= 159 : false);
                } else {
                  tmp_36 = false;
                }
                if (tmp_36) {
                  tmp_35 = true;
                } else {
                  tmp_35 = codePoint_0 === 65533;
                }
                if (tmp_35) {
                  return -1;
                }
                charCount = charCount + (codePoint_0 < 65536 ? 1 : 2) | 0;
              }
              tmp$ret$28 = 3;
            }
            index = tmp_18 + tmp$ret$28 | 0;
          } else {
            // Inline function 'okio.shr' call
            if (b0 >> 3 === -2) {
              var tmp_38 = index;
              var tmp23 = index;
              var tmp$ret$54;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                if (endIndex <= (tmp23 + 3 | 0)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_12 = j;
                  j = _unary__edvuaz_12 + 1 | 0;
                  if (_unary__edvuaz_12 === codePointCount) {
                    return charCount;
                  }
                  var tmp_39;
                  var tmp_40;
                  var tmp_41;
                  // Inline function 'kotlin.code' call
                  var this_24 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_24))) {
                    // Inline function 'kotlin.code' call
                    var this_25 = _Char___init__impl__6a9atx(13);
                    tmp_41 = !(65533 === Char__toInt_impl_vasixd(this_25));
                  } else {
                    tmp_41 = false;
                  }
                  if (tmp_41) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_40 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_40 = false;
                  }
                  if (tmp_40) {
                    tmp_39 = true;
                  } else {
                    tmp_39 = 65533 === 65533;
                  }
                  if (tmp_39) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  var tmp_42;
                  if (endIndex <= (tmp23 + 1 | 0)) {
                    tmp_42 = true;
                  } else {
                    // Inline function 'okio.isUtf8Continuation' call
                    // Inline function 'okio.and' call
                    tmp_42 = !((s[tmp23 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_42) {
                    tmp$ret$54 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_43;
                    if (endIndex <= (tmp23 + 2 | 0)) {
                      tmp_43 = true;
                    } else {
                      // Inline function 'okio.isUtf8Continuation' call
                      // Inline function 'okio.and' call
                      tmp_43 = !((s[tmp23 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_43) {
                      tmp$ret$54 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$54 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = s[tmp23];
                var b1_1 = s[tmp23 + 1 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b1_1 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_13 = j;
                  j = _unary__edvuaz_13 + 1 | 0;
                  if (_unary__edvuaz_13 === codePointCount) {
                    return charCount;
                  }
                  var tmp_44;
                  var tmp_45;
                  var tmp_46;
                  // Inline function 'kotlin.code' call
                  var this_26 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_26))) {
                    // Inline function 'kotlin.code' call
                    var this_27 = _Char___init__impl__6a9atx(13);
                    tmp_46 = !(65533 === Char__toInt_impl_vasixd(this_27));
                  } else {
                    tmp_46 = false;
                  }
                  if (tmp_46) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_45 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_45 = false;
                  }
                  if (tmp_45) {
                    tmp_44 = true;
                  } else {
                    tmp_44 = 65533 === 65533;
                  }
                  if (tmp_44) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 1;
                  break $l$block_10;
                }
                var b2_0 = s[tmp23 + 2 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b2_0 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_14 = j;
                  j = _unary__edvuaz_14 + 1 | 0;
                  if (_unary__edvuaz_14 === codePointCount) {
                    return charCount;
                  }
                  var tmp_47;
                  var tmp_48;
                  var tmp_49;
                  // Inline function 'kotlin.code' call
                  var this_28 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_28))) {
                    // Inline function 'kotlin.code' call
                    var this_29 = _Char___init__impl__6a9atx(13);
                    tmp_49 = !(65533 === Char__toInt_impl_vasixd(this_29));
                  } else {
                    tmp_49 = false;
                  }
                  if (tmp_49) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_48 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_48 = false;
                  }
                  if (tmp_48) {
                    tmp_47 = true;
                  } else {
                    tmp_47 = 65533 === 65533;
                  }
                  if (tmp_47) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 2;
                  break $l$block_10;
                }
                var b3 = s[tmp23 + 3 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b3 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_15 = j;
                  j = _unary__edvuaz_15 + 1 | 0;
                  if (_unary__edvuaz_15 === codePointCount) {
                    return charCount;
                  }
                  var tmp_50;
                  var tmp_51;
                  var tmp_52;
                  // Inline function 'kotlin.code' call
                  var this_30 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_30))) {
                    // Inline function 'kotlin.code' call
                    var this_31 = _Char___init__impl__6a9atx(13);
                    tmp_52 = !(65533 === Char__toInt_impl_vasixd(this_31));
                  } else {
                    tmp_52 = false;
                  }
                  if (tmp_52) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_51 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_51 = false;
                  }
                  if (tmp_51) {
                    tmp_50 = true;
                  } else {
                    tmp_50 = 65533 === 65533;
                  }
                  if (tmp_50) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_16 = j;
                  j = _unary__edvuaz_16 + 1 | 0;
                  if (_unary__edvuaz_16 === codePointCount) {
                    return charCount;
                  }
                  var tmp_53;
                  var tmp_54;
                  var tmp_55;
                  // Inline function 'kotlin.code' call
                  var this_32 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_32))) {
                    // Inline function 'kotlin.code' call
                    var this_33 = _Char___init__impl__6a9atx(13);
                    tmp_55 = !(65533 === Char__toInt_impl_vasixd(this_33));
                  } else {
                    tmp_55 = false;
                  }
                  if (tmp_55) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_54 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_54 = false;
                  }
                  if (tmp_54) {
                    tmp_53 = true;
                  } else {
                    tmp_53 = 65533 === 65533;
                  }
                  if (tmp_53) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_17 = j;
                  j = _unary__edvuaz_17 + 1 | 0;
                  if (_unary__edvuaz_17 === codePointCount) {
                    return charCount;
                  }
                  var tmp_56;
                  var tmp_57;
                  var tmp_58;
                  // Inline function 'kotlin.code' call
                  var this_34 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_34))) {
                    // Inline function 'kotlin.code' call
                    var this_35 = _Char___init__impl__6a9atx(13);
                    tmp_58 = !(65533 === Char__toInt_impl_vasixd(this_35));
                  } else {
                    tmp_58 = false;
                  }
                  if (tmp_58) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_57 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_57 = false;
                  }
                  if (tmp_57) {
                    tmp_56 = true;
                  } else {
                    tmp_56 = 65533 === 65533;
                  }
                  if (tmp_56) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_18 = j;
                  j = _unary__edvuaz_18 + 1 | 0;
                  if (_unary__edvuaz_18 === codePointCount) {
                    return charCount;
                  }
                  var tmp_59;
                  var tmp_60;
                  var tmp_61;
                  // Inline function 'kotlin.code' call
                  var this_36 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_36))) {
                    // Inline function 'kotlin.code' call
                    var this_37 = _Char___init__impl__6a9atx(13);
                    tmp_61 = !(65533 === Char__toInt_impl_vasixd(this_37));
                  } else {
                    tmp_61 = false;
                  }
                  if (tmp_61) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_60 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_60 = false;
                  }
                  if (tmp_60) {
                    tmp_59 = true;
                  } else {
                    tmp_59 = 65533 === 65533;
                  }
                  if (tmp_59) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var _unary__edvuaz_19 = j;
                  j = _unary__edvuaz_19 + 1 | 0;
                  if (_unary__edvuaz_19 === codePointCount) {
                    return charCount;
                  }
                  var tmp_62;
                  var tmp_63;
                  var tmp_64;
                  // Inline function 'kotlin.code' call
                  var this_38 = _Char___init__impl__6a9atx(10);
                  if (!(codePoint_1 === Char__toInt_impl_vasixd(this_38))) {
                    // Inline function 'kotlin.code' call
                    var this_39 = _Char___init__impl__6a9atx(13);
                    tmp_64 = !(codePoint_1 === Char__toInt_impl_vasixd(this_39));
                  } else {
                    tmp_64 = false;
                  }
                  if (tmp_64) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_63 = (0 <= codePoint_1 ? codePoint_1 <= 31 : false) || (127 <= codePoint_1 ? codePoint_1 <= 159 : false);
                  } else {
                    tmp_63 = false;
                  }
                  if (tmp_63) {
                    tmp_62 = true;
                  } else {
                    tmp_62 = codePoint_1 === 65533;
                  }
                  if (tmp_62) {
                    return -1;
                  }
                  charCount = charCount + (codePoint_1 < 65536 ? 1 : 2) | 0;
                }
                tmp$ret$54 = 4;
              }
              index = tmp_38 + tmp$ret$54 | 0;
            } else {
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var _unary__edvuaz_20 = j;
              j = _unary__edvuaz_20 + 1 | 0;
              if (_unary__edvuaz_20 === codePointCount) {
                return charCount;
              }
              var tmp_65;
              var tmp_66;
              var tmp_67;
              // Inline function 'kotlin.code' call
              var this_40 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_40))) {
                // Inline function 'kotlin.code' call
                var this_41 = _Char___init__impl__6a9atx(13);
                tmp_67 = !(65533 === Char__toInt_impl_vasixd(this_41));
              } else {
                tmp_67 = false;
              }
              if (tmp_67) {
                // Inline function 'okio.isIsoControl' call
                tmp_66 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                tmp_65 = true;
              } else {
                tmp_65 = 65533 === 65533;
              }
              if (tmp_65) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return charCount;
  }
  function access$codePointIndexToCharIndex$tByteStringKt(s, codePointCount) {
    return codePointIndexToCharIndex(s, codePointCount);
  }
  var properties_initialized_ByteString_kt_8ybv8b;
  function _init_properties_ByteString_kt__sqjq7b() {
    if (!properties_initialized_ByteString_kt_8ybv8b) {
      properties_initialized_ByteString_kt_8ybv8b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function segment(_this__u8e3s4, pos) {
    var i = binarySearch(_this__u8e3s4.t18_1, pos + 1 | 0, 0, _this__u8e3s4.s18_1.length);
    return i >= 0 ? i : ~i;
  }
  function binarySearch(_this__u8e3s4, value, fromIndex, toIndex) {
    var left = fromIndex;
    var right = toIndex - 1 | 0;
    while (left <= right) {
      var mid = (left + right | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value)
        left = mid + 1 | 0;
      else if (midVal > value)
        right = mid - 1 | 0;
      else
        return mid;
    }
    return (-left | 0) - 1 | 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp$ret$0 = new Int8Array([]);
    tmp.u18_1 = new ByteString(tmp$ret$0);
  }
  protoOf(Companion_0).v18 = function (_this__u8e3s4) {
    // Inline function 'okio.internal.commonEncodeUtf8' call
    var byteString = new ByteString(asUtf8ToByteArray(_this__u8e3s4));
    byteString.w18(_this__u8e3s4);
    return byteString;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteString(data) {
    Companion_getInstance_0();
    this.j18_1 = data;
    this.k18_1 = 0;
    this.l18_1 = null;
  }
  protoOf(ByteString).x18 = function (value) {
  };
  protoOf(ByteString).w18 = function (value) {
  };
  protoOf(ByteString).y18 = function () {
    // Inline function 'okio.internal.commonUtf8' call
    var result = this.l18_1;
    if (result == null) {
      result = toUtf8String(this.z18());
      this.w18(result);
    }
    return result;
  };
  protoOf(ByteString).a19 = function () {
    // Inline function 'okio.internal.commonHex' call
    var result = charArray(imul(this.j18_1.length, 2));
    var c = 0;
    var indexedObject = this.j18_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = c;
      c = _unary__edvuaz + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'okio.shr' call
      result[_unary__edvuaz] = tmp[b >> 4 & 15];
      var _unary__edvuaz_0 = c;
      c = _unary__edvuaz_0 + 1 | 0;
      var tmp_0 = get_HEX_DIGIT_CHARS();
      // Inline function 'okio.and' call
      result[_unary__edvuaz_0] = tmp_0[b & 15];
    }
    return concatToString_0(result);
  };
  protoOf(ByteString).b19 = function (pos) {
    if (pos >= this.k() || pos < 0)
      throw new ArrayIndexOutOfBoundsException('size=' + this.k() + ' pos=' + pos);
    // Inline function 'okio.internal.commonGetByte' call
    return this.j18_1[pos];
  };
  protoOf(ByteString).p = function (index) {
    return this.b19(index);
  };
  protoOf(ByteString).k = function () {
    return this.c19();
  };
  protoOf(ByteString).c19 = function () {
    // Inline function 'okio.internal.commonGetSize' call
    return this.j18_1.length;
  };
  protoOf(ByteString).z18 = function () {
    // Inline function 'okio.internal.commonInternalArray' call
    return this.j18_1;
  };
  protoOf(ByteString).d19 = function (buffer, offset, byteCount) {
    return commonWrite(this, buffer, offset, byteCount);
  };
  protoOf(ByteString).e19 = function (offset, other, otherOffset, byteCount) {
    // Inline function 'okio.internal.commonRangeEquals' call
    return offset >= 0 && offset <= (this.j18_1.length - byteCount | 0) && otherOffset >= 0 && otherOffset <= (other.length - byteCount | 0) && arrayRangeEquals(this.j18_1, offset, other, otherOffset, byteCount);
  };
  protoOf(ByteString).equals = function (other) {
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = (other.k() === this.j18_1.length && other.e19(0, this.j18_1, 0, this.j18_1.length));
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ByteString).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.k18_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      var this_0 = contentHashCode(this.j18_1);
      // Inline function 'okio.internal.commonHashCode.<anonymous>' call
      this.x18(this_0);
      tmp$ret$0 = this_0;
    }
    return tmp$ret$0;
  };
  protoOf(ByteString).f19 = function (other) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonCompareTo' call
      var sizeA = this.k();
      var sizeB = other.k();
      var i = 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var size = Math.min(sizeA, sizeB);
      $l$loop: while (i < size) {
        // Inline function 'okio.and' call
        var byteA = this.p(i) & 255;
        // Inline function 'okio.and' call
        var byteB = other.p(i) & 255;
        if (byteA === byteB) {
          i = i + 1 | 0;
          continue $l$loop;
        }
        tmp$ret$3 = byteA < byteB ? -1 : 1;
        break $l$block_0;
      }
      if (sizeA === sizeB) {
        tmp$ret$3 = 0;
        break $l$block_0;
      }
      tmp$ret$3 = sizeA < sizeB ? -1 : 1;
    }
    return tmp$ret$3;
  };
  protoOf(ByteString).d = function (other) {
    return this.f19(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonToString' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (this.j18_1.length === 0) {
        tmp$ret$1 = '[size=0]';
        break $l$block_1;
      }
      var i = access$codePointIndexToCharIndex$tByteStringKt(this.j18_1, 64);
      if (i === -1) {
        var tmp;
        if (this.j18_1.length <= 64) {
          tmp = '[hex=' + this.a19() + ']';
        } else {
          var tmp_0 = this.j18_1.length;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'okio.internal.commonSubstring' call
            var endIndex = resolveDefaultParameter(this, 64);
            // Inline function 'kotlin.require' call
            if (!(0 >= 0)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message = 'beginIndex < 0';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            // Inline function 'kotlin.require' call
            if (!(endIndex <= this.j18_1.length)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message_0 = 'endIndex > length(' + this.j18_1.length + ')';
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            }
            var subLen = endIndex - 0 | 0;
            // Inline function 'kotlin.require' call
            if (!(subLen >= 0)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message_1 = 'endIndex < beginIndex';
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
            if (0 === 0 && endIndex === this.j18_1.length) {
              tmp$ret$5 = this;
              break $l$block_0;
            }
            tmp$ret$5 = new ByteString(copyOfRange(this.j18_1, 0, endIndex));
          }
          tmp = '[size=' + tmp_0 + ' hex=' + tmp$ret$5.a19() + '\u2026]';
        }
        tmp$ret$1 = tmp;
        break $l$block_1;
      }
      var text = this.y18();
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = text.substring(0, i);
      var safeText = replace(replace(replace(tmp$ret$7, '\\', '\\\\'), '\n', '\\n'), '\r', '\\r');
      var tmp_1;
      if (i < text.length) {
        tmp_1 = '[size=' + this.j18_1.length + ' text=' + safeText + '\u2026]';
      } else {
        tmp_1 = '[text=' + safeText + ']';
      }
      tmp$ret$1 = tmp_1;
    }
    return tmp$ret$1;
  };
  function toByteString($this) {
    return new ByteString($this.g19());
  }
  function SegmentedByteString(segments, directory) {
    ByteString.call(this, Companion_getInstance_0().u18_1.j18_1);
    this.s18_1 = segments;
    this.t18_1 = directory;
  }
  protoOf(SegmentedByteString).a19 = function () {
    return toByteString(this).a19();
  };
  protoOf(SegmentedByteString).b19 = function (pos) {
    // Inline function 'okio.internal.commonInternalGet' call
    checkOffsetAndCount(toLong(this.t18_1[this.s18_1.length - 1 | 0]), toLong(pos), new Long(1, 0));
    var segment_0 = segment(this, pos);
    var segmentOffset = segment_0 === 0 ? 0 : this.t18_1[segment_0 - 1 | 0];
    var segmentPos = this.t18_1[segment_0 + this.s18_1.length | 0];
    return this.s18_1[segment_0][(pos - segmentOffset | 0) + segmentPos | 0];
  };
  protoOf(SegmentedByteString).c19 = function () {
    // Inline function 'okio.internal.commonGetSize' call
    return this.t18_1[this.s18_1.length - 1 | 0];
  };
  protoOf(SegmentedByteString).g19 = function () {
    // Inline function 'okio.internal.commonToByteArray' call
    var result = new Int8Array(this.k());
    var resultPos = 0;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = this.s18_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = this.t18_1[segmentCount + s | 0];
      var nextSegmentOffset = this.t18_1[s];
      var tmp1 = this.s18_1[s];
      // Inline function 'okio.internal.commonToByteArray.<anonymous>' call
      var byteCount = nextSegmentOffset - pos | 0;
      var tmp2 = resultPos;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = segmentPos + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, result, tmp2, segmentPos, endIndex);
      resultPos = resultPos + byteCount | 0;
      pos = nextSegmentOffset;
      s = s + 1 | 0;
    }
    return result;
  };
  protoOf(SegmentedByteString).d19 = function (buffer, offset, byteCount) {
    // Inline function 'okio.internal.forEachSegment' call
    var endIndex = offset + byteCount | 0;
    var s = segment(this, offset);
    var pos = offset;
    while (pos < endIndex) {
      var segmentOffset = s === 0 ? 0 : this.t18_1[s - 1 | 0];
      var segmentSize = this.t18_1[s] - segmentOffset | 0;
      var segmentPos = this.t18_1[this.s18_1.length + s | 0];
      // Inline function 'kotlin.comparisons.minOf' call
      var b = segmentOffset + segmentSize | 0;
      var byteCount_0 = Math.min(endIndex, b) - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var data = this.s18_1[s];
      var segment_0 = Segment_init_$Create$_0(data, offset_0, offset_0 + byteCount_0 | 0, true, false);
      if (buffer.m18_1 == null) {
        segment_0.w17_1 = segment_0;
        segment_0.v17_1 = segment_0.w17_1;
        buffer.m18_1 = segment_0.v17_1;
      } else {
        ensureNotNull(ensureNotNull(buffer.m18_1).w17_1).b18(segment_0);
      }
      pos = pos + byteCount_0 | 0;
      s = s + 1 | 0;
    }
    var tmp = buffer;
    // Inline function 'kotlin.Long.plus' call
    tmp.n18_1 = buffer.n18_1.k2(toLong(byteCount));
    return Unit_instance;
  };
  protoOf(SegmentedByteString).h19 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 || offset > (this.k() - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var endIndex = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < endIndex) {
        var segmentOffset = s === 0 ? 0 : this.t18_1[s - 1 | 0];
        var segmentSize = this.t18_1[s] - segmentOffset | 0;
        var segmentPos = this.t18_1[this.s18_1.length + s | 0];
        // Inline function 'kotlin.comparisons.minOf' call
        var b = segmentOffset + segmentSize | 0;
        var byteCount_0 = Math.min(endIndex, b) - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var data = this.s18_1[s];
        if (!other.e19(otherOffset_0, data, offset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        s = s + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).e19 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 || offset > (this.k() - byteCount | 0) || otherOffset < 0 || otherOffset > (other.length - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var endIndex = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < endIndex) {
        var segmentOffset = s === 0 ? 0 : this.t18_1[s - 1 | 0];
        var segmentSize = this.t18_1[s] - segmentOffset | 0;
        var segmentPos = this.t18_1[this.s18_1.length + s | 0];
        // Inline function 'kotlin.comparisons.minOf' call
        var b = segmentOffset + segmentSize | 0;
        var byteCount_0 = Math.min(endIndex, b) - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var data = this.s18_1[s];
        if (!arrayRangeEquals(data, offset_0, other, otherOffset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        s = s + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).z18 = function () {
    return this.g19();
  };
  protoOf(SegmentedByteString).equals = function (other) {
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = (other.k() === this.k() && this.h19(0, other, 0, this.k()));
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(SegmentedByteString).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.k18_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      result = 1;
      // Inline function 'okio.internal.forEachSegment' call
      var segmentCount = this.s18_1.length;
      var s = 0;
      var pos = 0;
      while (s < segmentCount) {
        var segmentPos = this.t18_1[segmentCount + s | 0];
        var nextSegmentOffset = this.t18_1[s];
        var tmp1 = this.s18_1[s];
        // Inline function 'okio.internal.commonHashCode.<anonymous>' call
        var i = segmentPos;
        var limit = segmentPos + (nextSegmentOffset - pos | 0) | 0;
        while (i < limit) {
          result = imul(31, result) + tmp1[i] | 0;
          i = i + 1 | 0;
        }
        pos = nextSegmentOffset;
        s = s + 1 | 0;
      }
      this.x18(result);
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).toString = function () {
    return toByteString(this).toString();
  };
  function UnsafeCursor() {
    this.i19_1 = null;
    this.j19_1 = false;
    this.k19_1 = null;
    this.l19_1 = new Long(-1, -1);
    this.m19_1 = null;
    this.n19_1 = -1;
    this.o19_1 = -1;
  }
  function Buffer() {
    this.m18_1 = null;
    this.n18_1 = new Long(0, 0);
  }
  protoOf(Buffer).p19 = function () {
    return this;
  };
  protoOf(Buffer).q19 = function (byteCount) {
    return this.n18_1.w(byteCount) >= 0;
  };
  protoOf(Buffer).r19 = function (pos) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'okio.internal.commonGet' call
      checkOffsetAndCount(this.n18_1, pos, new Long(1, 0));
      // Inline function 'okio.internal.seek' call
      var tmp0_elvis_lhs = this.m18_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var offset = new Long(-1, -1);
        tmp$ret$0 = ensureNotNull(null).q17_1[numberToLong(null.r17_1).k2(pos).l2(offset).x2()];
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      if (this.n18_1.l2(pos).w(pos) < 0) {
        var offset_0 = this.n18_1;
        while (offset_0.w(pos) > 0) {
          s = ensureNotNull(s.w17_1);
          offset_0 = offset_0.l2(toLong(s.s17_1 - s.r17_1 | 0));
        }
        var tmp4 = s;
        var offset_1 = offset_0;
        tmp$ret$0 = ensureNotNull(tmp4).q17_1[numberToLong(tmp4.r17_1).k2(pos).l2(offset_1).x2()];
        break $l$block_1;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          var tmp0 = offset_2;
          // Inline function 'kotlin.Long.plus' call
          var other = s.s17_1 - s.r17_1 | 0;
          var nextOffset = tmp0.k2(toLong(other));
          if (nextOffset.w(pos) > 0)
            break $l$loop;
          s = ensureNotNull(s.v17_1);
          offset_2 = nextOffset;
        }
        var tmp6 = s;
        var offset_3 = offset_2;
        tmp$ret$0 = ensureNotNull(tmp6).q17_1[numberToLong(tmp6.r17_1).k2(pos).l2(offset_3).x2()];
        break $l$block_1;
      }
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).s19 = function (byteCount) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8' call
      // Inline function 'kotlin.require' call
      if (!(byteCount.w(new Long(0, 0)) >= 0 && byteCount.w(new Long(2147483647, 0)) <= 0)) {
        // Inline function 'okio.internal.commonReadUtf8.<anonymous>' call
        var message = 'byteCount: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.n18_1.w(byteCount) < 0)
        throw EOFException_init_$Create$();
      if (byteCount.equals(new Long(0, 0))) {
        tmp$ret$1 = '';
        break $l$block_0;
      }
      var s = ensureNotNull(this.m18_1);
      if (numberToLong(s.r17_1).k2(byteCount).w(toLong(s.s17_1)) > 0) {
        tmp$ret$1 = commonToUtf8String(this.t19(byteCount));
        break $l$block_0;
      }
      var result = commonToUtf8String(s.q17_1, s.r17_1, s.r17_1 + byteCount.x2() | 0);
      s.r17_1 = s.r17_1 + byteCount.x2() | 0;
      this.n18_1 = this.n18_1.l2(byteCount);
      if (s.r17_1 === s.s17_1) {
        this.m18_1 = s.a18();
        SegmentPool_instance.i18(s);
      }
      tmp$ret$1 = result;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).u19 = function () {
    // Inline function 'okio.internal.commonReadByteArray' call
    return this.t19(this.n18_1);
  };
  protoOf(Buffer).t19 = function (byteCount) {
    // Inline function 'okio.internal.commonReadByteArray' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.w(new Long(0, 0)) >= 0 && byteCount.w(new Long(2147483647, 0)) <= 0)) {
      // Inline function 'okio.internal.commonReadByteArray.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.n18_1.w(byteCount) < 0)
      throw EOFException_init_$Create$();
    var result = new Int8Array(byteCount.x2());
    this.v19(result);
    return result;
  };
  protoOf(Buffer).v19 = function (sink) {
    var offset = 0;
    while (offset < sink.length) {
      var read = this.w19(sink, offset, sink.length - offset | 0);
      if (read === -1)
        throw EOFException_init_$Create$();
      offset = offset + read | 0;
    }
    return Unit_instance;
  };
  protoOf(Buffer).w19 = function (sink, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
      var tmp0_elvis_lhs = this.m18_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = -1;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = s.s17_1 - s.r17_1 | 0;
      var toCopy = Math.min(byteCount, b);
      var tmp2 = s.q17_1;
      var tmp5 = s.r17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = s.r17_1 + toCopy | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, sink, offset, tmp5, endIndex);
      s.r17_1 = s.r17_1 + toCopy | 0;
      this.n18_1 = this.n18_1.l2(toLong(toCopy));
      if (s.r17_1 === s.s17_1) {
        this.m18_1 = s.a18();
        SegmentPool_instance.i18(s);
      }
      tmp$ret$0 = toCopy;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).x19 = function (byteString) {
    // Inline function 'okio.internal.commonWrite' call
    var byteCount = byteString.k();
    byteString.d19(this, 0, byteCount);
    return this;
  };
  protoOf(Buffer).y19 = function (minimumCapacity) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonWritableSegment' call
      // Inline function 'kotlin.require' call
      if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
        // Inline function 'okio.internal.commonWritableSegment.<anonymous>' call
        var message = 'unexpected capacity';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.m18_1 == null) {
        var result = SegmentPool_instance.f18();
        this.m18_1 = result;
        result.w17_1 = result;
        result.v17_1 = result;
        tmp$ret$1 = result;
        break $l$block;
      }
      var tail = ensureNotNull(this.m18_1).w17_1;
      if ((ensureNotNull(tail).s17_1 + minimumCapacity | 0) > 8192 || !tail.u17_1) {
        tail = tail.b18(SegmentPool_instance.f18());
      }
      tmp$ret$1 = tail;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).o18 = function (source, offset, byteCount) {
    // Inline function 'okio.internal.commonWrite' call
    var offset_0 = offset;
    checkOffsetAndCount(toLong(source.length), toLong(offset_0), toLong(byteCount));
    var limit = offset_0 + byteCount | 0;
    while (offset_0 < limit) {
      var tail = this.y19(1);
      var tmp0 = limit - offset_0 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = 8192 - tail.s17_1 | 0;
      var toCopy = Math.min(tmp0, b);
      var tmp3 = tail.q17_1;
      var tmp4 = tail.s17_1;
      var tmp5 = offset_0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = offset_0 + toCopy | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = source;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp3, tmp4, tmp5, endIndex);
      offset_0 = offset_0 + toCopy | 0;
      tail.s17_1 = tail.s17_1 + toCopy | 0;
    }
    this.n18_1 = this.n18_1.k2(toLong(byteCount));
    return this;
  };
  protoOf(Buffer).z19 = function (b) {
    // Inline function 'okio.internal.commonWriteByte' call
    var tail = this.y19(1);
    var _unary__edvuaz = tail.s17_1;
    tail.s17_1 = _unary__edvuaz + 1 | 0;
    tail.q17_1[_unary__edvuaz] = toByte(b);
    this.n18_1 = this.n18_1.k2(new Long(1, 0));
    return this;
  };
  protoOf(Buffer).a1a = function (source, byteCount) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonWrite' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      if (!!(source === this)) {
        // Inline function 'okio.internal.commonWrite.<anonymous>' call
        var message = 'source == this';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      checkOffsetAndCount(source.n18_1, new Long(0, 0), byteCount_0);
      while (byteCount_0.w(new Long(0, 0)) > 0) {
        if (byteCount_0.w(toLong(ensureNotNull(source.m18_1).s17_1 - ensureNotNull(source.m18_1).r17_1 | 0)) < 0) {
          var tail = !(this.m18_1 == null) ? ensureNotNull(this.m18_1).w17_1 : null;
          var tmp;
          if (!(tail == null) && tail.u17_1) {
            var tmp1 = byteCount_0;
            // Inline function 'kotlin.Long.plus' call
            var other = tail.s17_1;
            var tmp3 = tmp1.k2(toLong(other));
            // Inline function 'kotlin.Long.minus' call
            var other_0 = tail.t17_1 ? 0 : tail.r17_1;
            tmp = tmp3.l2(toLong(other_0)).w(new Long(8192, 0)) <= 0;
          } else {
            tmp = false;
          }
          if (tmp) {
            ensureNotNull(source.m18_1).h18(tail, byteCount_0.x2());
            source.n18_1 = source.n18_1.l2(byteCount_0);
            this.n18_1 = this.n18_1.k2(byteCount_0);
            tmp$ret$3 = Unit_instance;
            break $l$block;
          } else {
            source.m18_1 = ensureNotNull(source.m18_1).c18(byteCount_0.x2());
          }
        }
        var segmentToMove = source.m18_1;
        var movedByteCount = toLong(ensureNotNull(segmentToMove).s17_1 - segmentToMove.r17_1 | 0);
        source.m18_1 = segmentToMove.a18();
        if (this.m18_1 == null) {
          this.m18_1 = segmentToMove;
          segmentToMove.w17_1 = segmentToMove;
          segmentToMove.v17_1 = segmentToMove.w17_1;
        } else {
          var tail_0 = ensureNotNull(this.m18_1).w17_1;
          tail_0 = ensureNotNull(tail_0).b18(segmentToMove);
          tail_0.g18();
        }
        source.n18_1 = source.n18_1.l2(movedByteCount);
        this.n18_1 = this.n18_1.k2(movedByteCount);
        byteCount_0 = byteCount_0.l2(movedByteCount);
      }
    }
    return tmp$ret$3;
  };
  protoOf(Buffer).b1a = function (sink, byteCount) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      if (!(byteCount_0.w(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount_0.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.n18_1.equals(new Long(0, 0))) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block;
      }
      if (byteCount_0.w(this.n18_1) > 0)
        byteCount_0 = this.n18_1;
      sink.a1a(this, byteCount_0);
      tmp$ret$1 = byteCount_0;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).c1a = function () {
    return Unit_instance;
  };
  protoOf(Buffer).equals = function (other) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'okio.internal.commonEquals' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (!(other instanceof Buffer)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (!this.n18_1.equals(other.n18_1)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (this.n18_1.equals(new Long(0, 0))) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      var sa = ensureNotNull(this.m18_1);
      var sb = ensureNotNull(other.m18_1);
      var posA = sa.r17_1;
      var posB = sb.r17_1;
      var pos = new Long(0, 0);
      var count;
      while (pos.w(this.n18_1) < 0) {
        var tmp0 = sa.s17_1 - posA | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = sb.s17_1 - posB | 0;
        var tmp$ret$1 = Math.min(tmp0, b);
        count = toLong(tmp$ret$1);
        var inductionVariable = new Long(0, 0);
        if (inductionVariable.w(count) < 0)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable.k2(new Long(1, 0));
            var tmp = sa.q17_1;
            var _unary__edvuaz = posA;
            posA = _unary__edvuaz + 1 | 0;
            var tmp_0 = tmp[_unary__edvuaz];
            var tmp_1 = sb.q17_1;
            var _unary__edvuaz_0 = posB;
            posB = _unary__edvuaz_0 + 1 | 0;
            if (!(tmp_0 === tmp_1[_unary__edvuaz_0])) {
              tmp$ret$0 = false;
              break $l$block_3;
            }
          }
           while (inductionVariable.w(count) < 0);
        if (posA === sa.s17_1) {
          sa = ensureNotNull(sa.v17_1);
          posA = sa.r17_1;
        }
        if (posB === sb.s17_1) {
          sb = ensureNotNull(sb.v17_1);
          posB = sb.r17_1;
        }
        pos = pos.k2(count);
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var tmp0_elvis_lhs = this.m18_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = 0;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var result = 1;
      do {
        var pos = s.r17_1;
        var limit = s.s17_1;
        while (pos < limit) {
          result = imul(31, result) + s.q17_1[pos] | 0;
          pos = pos + 1 | 0;
        }
        s = ensureNotNull(s.v17_1);
      }
       while (!(s === this.m18_1));
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).toString = function () {
    return this.d1a().toString();
  };
  protoOf(Buffer).d1a = function () {
    // Inline function 'okio.internal.commonSnapshot' call
    // Inline function 'kotlin.check' call
    if (!(this.n18_1.w(new Long(2147483647, 0)) <= 0)) {
      // Inline function 'okio.internal.commonSnapshot.<anonymous>' call
      var message = 'size > Int.MAX_VALUE: ' + this.n18_1.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.e1a(this.n18_1.x2());
  };
  protoOf(Buffer).e1a = function (byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSnapshot' call
      if (byteCount === 0) {
        tmp$ret$0 = Companion_getInstance_0().u18_1;
        break $l$block;
      }
      checkOffsetAndCount(this.n18_1, new Long(0, 0), toLong(byteCount));
      var offset = 0;
      var segmentCount = 0;
      var s = this.m18_1;
      while (offset < byteCount) {
        if (ensureNotNull(s).s17_1 === s.r17_1) {
          throw AssertionError_init_$Create$('s.limit == s.pos');
        }
        offset = offset + (s.s17_1 - s.r17_1 | 0) | 0;
        segmentCount = segmentCount + 1 | 0;
        s = s.v17_1;
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = segmentCount;
      var segments = fillArrayVal(Array(size), null);
      var directory = new Int32Array(imul(segmentCount, 2));
      offset = 0;
      segmentCount = 0;
      s = this.m18_1;
      while (offset < byteCount) {
        segments[segmentCount] = ensureNotNull(s).q17_1;
        offset = offset + (s.s17_1 - s.r17_1 | 0) | 0;
        var tmp = segmentCount;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = offset;
        directory[tmp] = Math.min(a, byteCount);
        directory[segmentCount + segments.length | 0] = s.r17_1;
        s.t17_1 = true;
        segmentCount = segmentCount + 1 | 0;
        s = s.v17_1;
      }
      tmp$ret$0 = new SegmentedByteString(isArray(segments) ? segments : THROW_CCE(), directory);
    }
    return tmp$ret$0;
  };
  function BufferedSource() {
  }
  function asUtf8ToByteArray(_this__u8e3s4) {
    return commonAsUtf8ToByteArray(_this__u8e3s4);
  }
  function ArrayIndexOutOfBoundsException(message) {
    IndexOutOfBoundsException_init_$Init$(message, this);
    captureStack(this, ArrayIndexOutOfBoundsException);
  }
  function EOFException_init_$Init$($this) {
    EOFException.call($this, null);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException_init_$Init$_0($this) {
    IOException.call($this, null, null);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$_0(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, IOException);
  }
  function toUtf8String(_this__u8e3s4) {
    return commonToUtf8String(_this__u8e3s4);
  }
  function RealBufferedSource(source) {
    this.f1a_1 = source;
    this.g1a_1 = false;
    this.h1a_1 = new Buffer();
  }
  protoOf(RealBufferedSource).p19 = function () {
    return this.h1a_1;
  };
  protoOf(RealBufferedSource).b1a = function (sink, byteCount) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonRead' call
      // Inline function 'kotlin.require' call
      if (!(byteCount.w(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      if (!!this.g1a_1) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message_0 = 'closed';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (this.h1a_1.n18_1.equals(new Long(0, 0))) {
        if (byteCount.equals(new Long(0, 0))) {
          tmp$ret$2 = new Long(0, 0);
          break $l$block_0;
        }
        var read = this.f1a_1.b1a(this.h1a_1, new Long(8192, 0));
        if (read.equals(new Long(-1, -1))) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_0;
        }
      }
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.h1a_1.n18_1;
      var toRead = byteCount.w(b) <= 0 ? byteCount : b;
      tmp$ret$2 = this.h1a_1.b1a(sink, toRead);
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).i1a = function (byteCount) {
    var tmp;
    if (!this.q19(byteCount)) {
      throw EOFException_init_$Create$();
    }
    return tmp;
  };
  protoOf(RealBufferedSource).q19 = function (byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRequest' call
      // Inline function 'kotlin.require' call
      if (!(byteCount.w(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      if (!!this.g1a_1) {
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        var message_0 = 'closed';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      while (this.h1a_1.n18_1.w(byteCount) < 0) {
        if (this.f1a_1.b1a(this.h1a_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).s19 = function (byteCount) {
    // Inline function 'okio.internal.commonReadUtf8' call
    this.i1a(byteCount);
    return this.h1a_1.s19(byteCount);
  };
  protoOf(RealBufferedSource).toString = function () {
    // Inline function 'okio.internal.commonToString' call
    return 'buffer(' + toString(this.f1a_1) + ')';
  };
  function SegmentPool() {
    this.d18_1 = 0;
    this.e18_1 = 0;
  }
  protoOf(SegmentPool).f18 = function () {
    return Segment_init_$Create$();
  };
  protoOf(SegmentPool).i18 = function (segment) {
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_0;
  _.$_$.b = BufferedSource;
  _.$_$.c = Buffer;
  _.$_$.d = IOException;
  _.$_$.e = buffer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=okio-parent-okio.js.map

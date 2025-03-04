(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.x8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.z1;
  var numberToChar = kotlin_kotlin.$_$.u8;
  var initMetadataForObject = kotlin_kotlin.$_$.g8;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.x1;
  var Unit_instance = kotlin_kotlin.$_$.y3;
  var get_indices = kotlin_kotlin.$_$.v9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.r7;
  var charSequenceGet = kotlin_kotlin.$_$.q7;
  var getOrNull = kotlin_kotlin.$_$.u9;
  var isLowSurrogate = kotlin_kotlin.$_$.z9;
  var Char = kotlin_kotlin.$_$.xa;
  var isHighSurrogate = kotlin_kotlin.$_$.y9;
  var toCharArray = kotlin_kotlin.$_$.ka;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.y1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.a1;
  var decodeToString = kotlin_kotlin.$_$.q9;
  var toString = kotlin_kotlin.$_$.a2;
  var toString_0 = kotlin_kotlin.$_$.a9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var toInt = kotlin_kotlin.$_$.na;
  var toByte = kotlin_kotlin.$_$.y8;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var NumberFormatException = kotlin_kotlin.$_$.gb;
  var charArrayOf = kotlin_kotlin.$_$.o7;
  var concatToString = kotlin_kotlin.$_$.m9;
  var encodeToByteArray = kotlin_kotlin.$_$.t9;
  var contains = kotlin_kotlin.$_$.o9;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Character, 'Character');
  initMetadataForObject(UrlEncoderUtil, 'UrlEncoderUtil');
  //endregion
  function Character() {
    Character_instance = this;
    this.l1b_1 = 1114111;
    this.m1b_1 = 65536;
    this.n1b_1 = -56613888;
    this.o1b_1 = _Char___init__impl__6a9atx(55232);
  }
  protoOf(Character).p1b = function (codePoint) {
    return 65536 <= codePoint ? codePoint <= 1114111 : false;
  };
  protoOf(Character).q1b = function (highSurrogate, lowSurrogate) {
    // Inline function 'kotlin.code' call
    var tmp = Char__toInt_impl_vasixd(highSurrogate) << 10;
    // Inline function 'kotlin.code' call
    return (tmp + Char__toInt_impl_vasixd(lowSurrogate) | 0) + -56613888 | 0;
  };
  protoOf(Character).r1b = function (codePoint) {
    return (codePoint >>> 16 | 0) === 0;
  };
  protoOf(Character).s1b = function (codePoint) {
    var tmp = codePoint >>> 10 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(55232);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  };
  protoOf(Character).t1b = function (codePoint) {
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
  function isUnreserved(_this__u8e3s4, $this) {
    var tmp;
    if (Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(122)) <= 0) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
      tmp = $this.v1b_1[tmp$ret$0];
    } else {
      tmp = false;
    }
    return tmp;
  }
  function appendEncodedDigit(_this__u8e3s4, $this, digit) {
    _this__u8e3s4.u7($this.u1b_1[digit & 15]);
  }
  function appendEncodedByte(_this__u8e3s4, $this, ch) {
    _this__u8e3s4.t7('%');
    appendEncodedDigit(_this__u8e3s4, $this, ch >> 4);
    appendEncodedDigit(_this__u8e3s4, $this, ch);
  }
  function codePointAt(_this__u8e3s4, $this, index) {
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
        return Character_getInstance().q1b(firstChar, nextChar);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(firstChar);
  }
  function UrlEncoderUtil() {
    UrlEncoderUtil_instance = this;
    this.u1b_1 = toCharArray('0123456789ABCDEF');
    var tmp = this;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(122);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    // Inline function 'kotlin.apply' call
    var this_1 = booleanArray(tmp$ret$0 + 1 | 0);
    // Inline function 'net.thauvin.erik.urlencoder.UrlEncoderUtil.unreservedChars.<anonymous>' call
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(45);
    this_1[Char__toInt_impl_vasixd(this_2)] = true;
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(46);
    this_1[Char__toInt_impl_vasixd(this_3)] = true;
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(95);
    this_1[Char__toInt_impl_vasixd(this_4)] = true;
    var inductionVariable = _Char___init__impl__6a9atx(48);
    if (inductionVariable <= _Char___init__impl__6a9atx(57))
      do {
        var c = inductionVariable;
        inductionVariable = Char__plus_impl_qi7pgj(inductionVariable, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c)] = true;
      }
       while (inductionVariable <= _Char___init__impl__6a9atx(57));
    var inductionVariable_0 = _Char___init__impl__6a9atx(65);
    if (inductionVariable_0 <= _Char___init__impl__6a9atx(90))
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = Char__plus_impl_qi7pgj(inductionVariable_0, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c_0)] = true;
      }
       while (inductionVariable_0 <= _Char___init__impl__6a9atx(90));
    var inductionVariable_1 = _Char___init__impl__6a9atx(97);
    if (inductionVariable_1 <= _Char___init__impl__6a9atx(122))
      do {
        var c_1 = inductionVariable_1;
        inductionVariable_1 = Char__plus_impl_qi7pgj(inductionVariable_1, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c_1)] = true;
      }
       while (inductionVariable_1 <= _Char___init__impl__6a9atx(122));
    tmp.v1b_1 = this_1;
  }
  protoOf(UrlEncoderUtil).w1b = function (source, plusToSpace) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(source) === 0) {
      return source;
    }
    var length = source.length;
    var out = StringBuilder_init_$Create$(length);
    var bytesBuffer = null;
    var bytesPos = 0;
    var i = 0;
    var started = false;
    while (i < length) {
      var ch = charSequenceGet(source, i);
      if (ch === _Char___init__impl__6a9atx(37)) {
        if (!started) {
          out.gb(source, 0, i);
          started = true;
        }
        if (bytesBuffer == null) {
          bytesBuffer = new Int8Array((length - i | 0) / 3 | 0);
        }
        i = i + 1 | 0;
        // Inline function 'kotlin.require' call
        if (!(length >= (i + 2 | 0))) {
          // Inline function 'net.thauvin.erik.urlencoder.UrlEncoderUtil.decode.<anonymous>' call
          var message = 'Incomplete trailing escape (' + toString(ch) + ') pattern';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        try {
          var tmp3 = i;
          // Inline function 'kotlin.text.substring' call
          var endIndex = i + 2 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = source.substring(tmp3, endIndex);
          var v = toInt(tmp$ret$3, 16);
          // Inline function 'kotlin.require' call
          if (!(0 <= v ? v <= 255 : false)) {
            // Inline function 'net.thauvin.erik.urlencoder.UrlEncoderUtil.decode.<anonymous>' call
            var message_0 = 'Illegal escape value';
            throw IllegalArgumentException_init_$Create$(toString_0(message_0));
          }
          var tmp = bytesBuffer;
          var tmp1 = bytesPos;
          bytesPos = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(v);
          i = i + 2 | 0;
        } catch ($p) {
          if ($p instanceof NumberFormatException) {
            var e = $p;
            throw IllegalArgumentException_init_$Create$_0('Illegal characters in escape sequence: ' + e.toString() + '.message', e);
          } else {
            throw $p;
          }
        }
      } else {
        if (!(bytesBuffer == null)) {
          out.t7(decodeToString(bytesBuffer, 0, bytesPos));
          started = true;
          bytesBuffer = null;
          bytesPos = 0;
        }
        if (plusToSpace && ch === _Char___init__impl__6a9atx(43)) {
          if (!started) {
            out.gb(source, 0, i);
            started = true;
          }
          out.t7(' ');
        } else if (started) {
          out.u7(ch);
        }
        i = i + 1 | 0;
      }
    }
    if (!(bytesBuffer == null)) {
      out.t7(decodeToString(bytesBuffer, 0, bytesPos));
    }
    return !started ? source : out.toString();
  };
  protoOf(UrlEncoderUtil).x1b = function (source, allow, spaceToPlus) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(source) === 0) {
      return source;
    }
    var out = null;
    var i = 0;
    while (i < source.length) {
      var ch = charSequenceGet(source, i);
      if (isUnreserved(ch, this) || contains(allow, ch)) {
        var tmp0_safe_receiver = out;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver.u7(ch);
        i = i + 1 | 0;
      } else {
        if (out == null) {
          out = StringBuilder_init_$Create$(source.length);
          out.gb(source, 0, i);
        }
        var cp = codePointAt(source, this, i);
        if (cp < 128) {
          if (spaceToPlus && ch === _Char___init__impl__6a9atx(32)) {
            out.u7(_Char___init__impl__6a9atx(43));
          } else {
            appendEncodedByte(out, this, cp);
          }
          i = i + 1 | 0;
        } else if (Character_getInstance().r1b(cp)) {
          var indexedObject = encodeToByteArray(toString(ch));
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var b = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            appendEncodedByte(out, this, b);
          }
          i = i + 1 | 0;
        } else if (Character_getInstance().p1b(cp)) {
          var high = Character_getInstance().s1b(cp);
          var low = Character_getInstance().t1b(cp);
          // Inline function 'kotlin.charArrayOf' call
          var tmp$ret$1 = charArrayOf([high, low]);
          var indexedObject_0 = encodeToByteArray(concatToString(tmp$ret$1));
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var b_0 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            appendEncodedByte(out, this, b_0);
          }
          i = i + 2 | 0;
        }
      }
    }
    var tmp6_safe_receiver = out;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.toString();
    return tmp7_elvis_lhs == null ? source : tmp7_elvis_lhs;
  };
  var UrlEncoderUtil_instance;
  function UrlEncoderUtil_getInstance() {
    if (UrlEncoderUtil_instance == null)
      new UrlEncoderUtil();
    return UrlEncoderUtil_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UrlEncoderUtil_getInstance;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=urlencoder-urlencoder-lib.js.map

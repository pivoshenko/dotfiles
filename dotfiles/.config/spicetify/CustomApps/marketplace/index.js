var marketplace = (() => {
  var T,
    _ = Object.create,
    j = Object.defineProperty,
    D = Object.defineProperties,
    M = Object.getOwnPropertyDescriptor,
    $ = Object.getOwnPropertyDescriptors,
    F = Object.getOwnPropertyNames,
    B = Object.getOwnPropertySymbols,
    U = Object.getPrototypeOf,
    G = Object.prototype.hasOwnProperty,
    K = Object.prototype.propertyIsEnumerable,
    z = (e, t, r) => (t in e ? j(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    s = (e, t) => {
      for (var r in (t = t || {})) G.call(t, r) && z(e, r, t[r]);
      if (B) for (var r of B(t)) K.call(t, r) && z(e, r, t[r]);
      return e;
    },
    J = (e, t) => D(e, $(t)),
    b = ((e) =>
      "undefined" != typeof require
        ? require
        : "undefined" != typeof Proxy
        ? new Proxy(e, { get: (e, t) => ("undefined" != typeof require ? require : e)[t] })
        : e)(function (e) {
      if ("react" === e) return Spicetify.React;
      if ("react-dom" === e) return Spicetify.ReactDOM;
      if ("undefined" != typeof require) return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + e + '" is not supported');
    }),
    e = (e, t) =>
      function () {
        return t || (0, e[F(e)[0]])((t = { exports: {} }).exports, t), t.exports;
      },
    W = (t, r, n, a) => {
      if ((r && "object" == typeof r) || "function" == typeof r)
        for (let e of F(r))
          G.call(t, e) || e === n || j(t, e, { get: () => r[e], enumerable: !(a = M(r, e)) || a.enumerable });
      return t;
    },
    t = (e, t, r) => (
      (r = null != e ? _(U(e)) : {}), W(!t && e && e.__esModule ? r : j(r, "default", { value: e, enumerable: !0 }), e)
    ),
    X = e({
      "node_modules/void-elements/index.js"(e, t) {
        t.exports = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        };
      },
    }),
    Y = e({
      "node_modules/semver/internal/constants.js"(e, t) {
        var r = Number.MAX_SAFE_INTEGER || 9007199254740991;
        t.exports = {
          SEMVER_SPEC_VERSION: "2.0.0",
          MAX_LENGTH: 256,
          MAX_SAFE_INTEGER: r,
          MAX_SAFE_COMPONENT_LENGTH: 16,
        };
      },
    }),
    Q = e({
      "node_modules/semver/internal/debug.js"(e, t) {
        var r =
          "object" == typeof process &&
          process.env &&
          process.env.NODE_DEBUG &&
          /\bsemver\b/i.test(process.env.NODE_DEBUG)
            ? (...e) => console.error("SEMVER", ...e)
            : () => {};
        t.exports = r;
      },
    }),
    Z = e({
      "node_modules/semver/internal/re.js"(e, t) {
        var r = Y()["MAX_SAFE_COMPONENT_LENGTH"],
          a = Q(),
          o = ((e = t.exports = {}).re = []),
          i = (e.src = []),
          s = (e.t = {}),
          l = 0,
          t = (e, t, r) => {
            var n = l++;
            a(e, n, t), (s[e] = n), (i[n] = t), (o[n] = new RegExp(t, r ? "g" : void 0));
          };
        t("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
          t("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
          t("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
          t("MAINVERSION", `(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`),
          t(
            "MAINVERSIONLOOSE",
            `(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`
          ),
          t("PRERELEASEIDENTIFIER", `(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`),
          t("PRERELEASEIDENTIFIERLOOSE", `(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`),
          t("PRERELEASE", `(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`),
          t("PRERELEASELOOSE", `(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`),
          t("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
          t("BUILD", `(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`),
          t("FULLPLAIN", `v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`),
          t("FULL", `^${i[s.FULLPLAIN]}$`),
          t("LOOSEPLAIN", `[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`),
          t("LOOSE", `^${i[s.LOOSEPLAIN]}$`),
          t("GTLT", "((?:<|>)?=?)"),
          t("XRANGEIDENTIFIERLOOSE", i[s.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
          t("XRANGEIDENTIFIER", i[s.NUMERICIDENTIFIER] + "|x|X|\\*"),
          t(
            "XRANGEPLAIN",
            `[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${
              i[s.PRERELEASE]
            })?${i[s.BUILD]}?)?)?`
          ),
          t(
            "XRANGEPLAINLOOSE",
            `[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
              i[s.XRANGEIDENTIFIERLOOSE]
            })(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`
          ),
          t("XRANGE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`),
          t("XRANGELOOSE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`),
          t("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),
          t("COERCERTL", i[s.COERCE], !0),
          t("LONETILDE", "(?:~>?)"),
          t("TILDETRIM", `(\\s*)${i[s.LONETILDE]}\\s+`, !0),
          (e.tildeTrimReplace = "$1~"),
          t("TILDE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`),
          t("TILDELOOSE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`),
          t("LONECARET", "(?:\\^)"),
          t("CARETTRIM", `(\\s*)${i[s.LONECARET]}\\s+`, !0),
          (e.caretTrimReplace = "$1^"),
          t("CARET", `^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`),
          t("CARETLOOSE", `^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`),
          t("COMPARATORLOOSE", `^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`),
          t("COMPARATOR", `^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`),
          t("COMPARATORTRIM", `(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`, !0),
          (e.comparatorTrimReplace = "$1$2$3"),
          t("HYPHENRANGE", `^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`),
          t("HYPHENRANGELOOSE", `^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`),
          t("STAR", "(<|>)?=?\\s*\\*"),
          t("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
          t("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      },
    }),
    ee = e({
      "node_modules/semver/internal/parse-options.js"(e, t) {
        var r = ["includePrerelease", "loose", "rtl"];
        t.exports = (t) =>
          t
            ? "object" != typeof t
              ? { loose: !0 }
              : r.filter((e) => t[e]).reduce((e, t) => ((e[t] = !0), e), {})
            : {};
      },
    }),
    te = e({
      "node_modules/semver/internal/identifiers.js"(e, t) {
        var a = /^[0-9]+$/,
          r = (e, t) => {
            var r = a.test(e),
              n = a.test(t);
            return r && n && ((e = +e), (t = +t)), e === t ? 0 : (r && !n) || ((!n || r) && e < t) ? -1 : 1;
          };
        t.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
      },
    }),
    H = e({
      "node_modules/semver/classes/semver.js"(e, t) {
        var a = Q(),
          { MAX_LENGTH: n, MAX_SAFE_INTEGER: o } = Y(),
          { re: i, t: s } = Z(),
          l = ee(),
          c = te()["compareIdentifiers"],
          u = class {
            constructor(e, t) {
              if (((t = l(t)), e instanceof u)) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version;
              } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
              if (e.length > n) throw new TypeError(`version is longer than ${n} characters`);
              a("SemVer", e, t),
                (this.options = t),
                (this.loose = !!t.loose),
                (this.includePrerelease = !!t.includePrerelease);
              const r = e.trim().match(t.loose ? i[s.LOOSE] : i[s.FULL]);
              if (!r) throw new TypeError("Invalid Version: " + e);
              if (
                ((this.raw = e),
                (this.major = +r[1]),
                (this.minor = +r[2]),
                (this.patch = +r[3]),
                this.major > o || this.major < 0)
              )
                throw new TypeError("Invalid major version");
              if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
              if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
              r[4]
                ? (this.prerelease = r[4].split(".").map((e) => {
                    if (/^[0-9]+$/.test(e)) {
                      var t = +e;
                      if (0 <= t && t < o) return t;
                    }
                    return e;
                  }))
                : (this.prerelease = []),
                (this.build = r[5] ? r[5].split(".") : []),
                this.format();
            }
            format() {
              return (
                (this.version = `${this.major}.${this.minor}.` + this.patch),
                this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
                this.version
              );
            }
            toString() {
              return this.version;
            }
            compare(e) {
              if ((a("SemVer.compare", this.version, this.options, e), !(e instanceof u))) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new u(e, this.options);
              }
              return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
            }
            compareMain(e) {
              return (
                e instanceof u || (e = new u(e, this.options)),
                c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
              );
            }
            comparePre(e) {
              if ((e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length))
                return -1;
              if (!this.prerelease.length && e.prerelease.length) return 1;
              if (!this.prerelease.length && !e.prerelease.length) return 0;
              let t = 0;
              do {
                var r = this.prerelease[t],
                  n = e.prerelease[t];
                if ((a("prerelease compare", t, r, n), void 0 === r && void 0 === n)) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                if (r !== n) return c(r, n);
              } while (++t);
            }
            compareBuild(e) {
              e instanceof u || (e = new u(e, this.options));
              let t = 0;
              do {
                var r = this.build[t],
                  n = e.build[t];
                if ((a("prerelease compare", t, r, n), void 0 === r && void 0 === n)) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                if (r !== n) return c(r, n);
              } while (++t);
            }
            inc(e, t) {
              switch (e) {
                case "premajor":
                  (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t);
                  break;
                case "preminor":
                  (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t);
                  break;
                case "prepatch":
                  (this.prerelease.length = 0), this.inc("patch", t), this.inc("pre", t);
                  break;
                case "prerelease":
                  0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                  break;
                case "major":
                  (0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length) || this.major++,
                    (this.minor = 0),
                    (this.patch = 0),
                    (this.prerelease = []);
                  break;
                case "minor":
                  (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
                    (this.patch = 0),
                    (this.prerelease = []);
                  break;
                case "patch":
                  0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                  break;
                case "pre":
                  if (0 === this.prerelease.length) this.prerelease = [0];
                  else {
                    let e = this.prerelease.length;
                    for (; 0 <= --e; ) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, (e = -2));
                    -1 === e && this.prerelease.push(0);
                  }
                  t && (0 !== c(this.prerelease[0], t) || isNaN(this.prerelease[1])) && (this.prerelease = [t, 0]);
                  break;
                default:
                  throw new Error("invalid increment argument: " + e);
              }
              return this.format(), (this.raw = this.version), this;
            }
          };
        t.exports = u;
      },
    }),
    re = e({
      "node_modules/semver/functions/parse.js"(e, t) {
        var n = Y()["MAX_LENGTH"],
          { re: a, t: o } = Z(),
          i = H(),
          s = ee();
        t.exports = (e, t) => {
          if (((t = s(t)), e instanceof i)) return e;
          if ("string" != typeof e) return null;
          if (e.length > n) return null;
          const r = t.loose ? a[o.LOOSE] : a[o.FULL];
          if (!r.test(e)) return null;
          try {
            return new i(e, t);
          } catch (e) {
            return null;
          }
        };
      },
    }),
    ne = e({
      "node_modules/semver/functions/valid.js"(e, t) {
        var r = re();
        t.exports = (e, t) => {
          e = r(e, t);
          return e ? e.version : null;
        };
      },
    }),
    ae = e({
      "node_modules/semver/functions/clean.js"(e, t) {
        var r = re();
        t.exports = (e, t) => {
          e = r(e.trim().replace(/^[=v]+/, ""), t);
          return e ? e.version : null;
        };
      },
    }),
    oe = e({
      "node_modules/semver/functions/inc.js"(e, t) {
        var a = H();
        t.exports = (e, t, r, n) => {
          "string" == typeof r && ((n = r), (r = void 0));
          try {
            return new a(e instanceof a ? e.version : e, r).inc(t, n).version;
          } catch (e) {
            return null;
          }
        };
      },
    }),
    V = e({
      "node_modules/semver/functions/compare.js"(e, t) {
        var n = H();
        t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
      },
    }),
    ie = e({
      "node_modules/semver/functions/eq.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => 0 === n(e, t, r);
      },
    }),
    se = e({
      "node_modules/semver/functions/diff.js"(e, t) {
        var i = re(),
          s = ie();
        t.exports = (e, t) => {
          if (s(e, t)) return null;
          var r = i(e),
            n = i(t),
            e = r.prerelease.length || n.prerelease.length,
            a = e ? "pre" : "",
            t = e ? "prerelease" : "";
          for (const o in r) if (("major" === o || "minor" === o || "patch" === o) && r[o] !== n[o]) return a + o;
          return t;
        };
      },
    }),
    le = e({
      "node_modules/semver/functions/major.js"(e, t) {
        var r = H();
        t.exports = (e, t) => new r(e, t).major;
      },
    }),
    ce = e({
      "node_modules/semver/functions/minor.js"(e, t) {
        var r = H();
        t.exports = (e, t) => new r(e, t).minor;
      },
    }),
    ue = e({
      "node_modules/semver/functions/patch.js"(e, t) {
        var r = H();
        t.exports = (e, t) => new r(e, t).patch;
      },
    }),
    pe = e({
      "node_modules/semver/functions/prerelease.js"(e, t) {
        var r = re();
        t.exports = (e, t) => {
          e = r(e, t);
          return e && e.prerelease.length ? e.prerelease : null;
        };
      },
    }),
    de = e({
      "node_modules/semver/functions/rcompare.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => n(t, e, r);
      },
    }),
    he = e({
      "node_modules/semver/functions/compare-loose.js"(e, t) {
        var r = V();
        t.exports = (e, t) => r(e, t, !0);
      },
    }),
    fe = e({
      "node_modules/semver/functions/compare-build.js"(e, t) {
        var a = H();
        t.exports = (e, t, r) => {
          const n = new a(e, r);
          e = new a(t, r);
          return n.compare(e) || n.compareBuild(e);
        };
      },
    }),
    me = e({
      "node_modules/semver/functions/sort.js"(e, t) {
        var n = fe();
        t.exports = (e, r) => e.sort((e, t) => n(e, t, r));
      },
    }),
    ge = e({
      "node_modules/semver/functions/rsort.js"(e, t) {
        var n = fe();
        t.exports = (e, r) => e.sort((e, t) => n(t, e, r));
      },
    }),
    ve = e({
      "node_modules/semver/functions/gt.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => 0 < n(e, t, r);
      },
    }),
    be = e({
      "node_modules/semver/functions/lt.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => n(e, t, r) < 0;
      },
    }),
    ye = e({
      "node_modules/semver/functions/neq.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => 0 !== n(e, t, r);
      },
    }),
    Ee = e({
      "node_modules/semver/functions/gte.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => 0 <= n(e, t, r);
      },
    }),
    we = e({
      "node_modules/semver/functions/lte.js"(e, t) {
        var n = V();
        t.exports = (e, t, r) => n(e, t, r) <= 0;
      },
    }),
    Se = e({
      "node_modules/semver/functions/cmp.js"(e, t) {
        var a = ie(),
          o = ye(),
          i = ve(),
          s = Ee(),
          l = be(),
          c = we();
        t.exports = (e, t, r, n) => {
          switch (t) {
            case "===":
              return (e = "object" == typeof e ? e.version : e) === (r = "object" == typeof r ? r.version : r);
            case "!==":
              return (e = "object" == typeof e ? e.version : e) !== (r = "object" == typeof r ? r.version : r);
            case "":
            case "=":
            case "==":
              return a(e, r, n);
            case "!=":
              return o(e, r, n);
            case ">":
              return i(e, r, n);
            case ">=":
              return s(e, r, n);
            case "<":
              return l(e, r, n);
            case "<=":
              return c(e, r, n);
            default:
              throw new TypeError("Invalid operator: " + t);
          }
        };
      },
    }),
    ke = e({
      "node_modules/semver/functions/coerce.js"(e, t) {
        var a = H(),
          o = re(),
          { re: i, t: s } = Z();
        t.exports = (e, t) => {
          if (e instanceof a) return e;
          if ("string" != typeof (e = "number" == typeof e ? String(e) : e)) return null;
          let r = null;
          if ((t = t || {}).rtl) {
            for (var n; (n = i[s.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
              (r && n.index + n[0].length === r.index + r[0].length) || (r = n),
                (i[s.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
            i[s.COERCERTL].lastIndex = -1;
          } else r = e.match(i[s.COERCE]);
          return null === r ? null : o(`${r[2]}.${r[3] || "0"}.` + (r[4] || "0"), t);
        };
      },
    }),
    Oe = e({
      "node_modules/yallist/iterator.js"(e, t) {
        "use strict";
        t.exports = function (e) {
          e.prototype[Symbol.iterator] = function* () {
            for (let e = this.head; e; e = e.next) yield e.value;
          };
        };
      },
    }),
    Ne = e({
      "node_modules/yallist/yallist.js"(e, t) {
        "use strict";
        function o(e) {
          var t = this;
          if (
            (((t = t instanceof o ? t : new o()).tail = null),
            (t.head = null),
            (t.length = 0),
            e && "function" == typeof e.forEach)
          )
            e.forEach(function (e) {
              t.push(e);
            });
          else if (0 < arguments.length) for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
          return t;
        }
        function i(e, t, r, n) {
          if (!(this instanceof i)) return new i(e, t, r, n);
          (this.list = n),
            (this.value = e),
            t ? ((t.next = this).prev = t) : (this.prev = null),
            r ? ((r.prev = this).next = r) : (this.next = null);
        }
        ((t.exports = o).Node = i),
          ((o.create = o).prototype.removeNode = function (e) {
            if (e.list !== this) throw new Error("removing node which does not belong to this list");
            var t = e.next,
              r = e.prev;
            return (
              t && (t.prev = r),
              r && (r.next = t),
              e === this.head && (this.head = t),
              e === this.tail && (this.tail = r),
              e.list.length--,
              (e.next = null),
              (e.prev = null),
              (e.list = null),
              t
            );
          }),
          (o.prototype.unshiftNode = function (e) {
            var t;
            e !== this.head &&
              (e.list && e.list.removeNode(e),
              (t = this.head),
              (e.list = this),
              (e.next = t) && (t.prev = e),
              (this.head = e),
              this.tail || (this.tail = e),
              this.length++);
          }),
          (o.prototype.pushNode = function (e) {
            var t;
            e !== this.tail &&
              (e.list && e.list.removeNode(e),
              (t = this.tail),
              (e.list = this),
              (e.prev = t) && (t.next = e),
              (this.tail = e),
              this.head || (this.head = e),
              this.length++);
          }),
          (o.prototype.push = function () {
            for (var e = 0, t = arguments.length; e < t; e++) {
              n = r = void 0;
              var r = this,
                n = arguments[e];
              (r.tail = new i(n, r.tail, null, r)), r.head || (r.head = r.tail), r.length++;
            }
            return this.length;
          }),
          (o.prototype.unshift = function () {
            for (var e = 0, t = arguments.length; e < t; e++) {
              n = r = void 0;
              var r = this,
                n = arguments[e];
              (r.head = new i(n, null, r.head, r)), r.tail || (r.tail = r.head), r.length++;
            }
            return this.length;
          }),
          (o.prototype.pop = function () {
            var e;
            if (this.tail)
              return (
                (e = this.tail.value),
                (this.tail = this.tail.prev),
                this.tail ? (this.tail.next = null) : (this.head = null),
                this.length--,
                e
              );
          }),
          (o.prototype.shift = function () {
            var e;
            if (this.head)
              return (
                (e = this.head.value),
                (this.head = this.head.next),
                this.head ? (this.head.prev = null) : (this.tail = null),
                this.length--,
                e
              );
          }),
          (o.prototype.forEach = function (e, t) {
            t = t || this;
            for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), (r = r.next);
          }),
          (o.prototype.forEachReverse = function (e, t) {
            t = t || this;
            for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), (r = r.prev);
          }),
          (o.prototype.get = function (e) {
            for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
            if (t === e && null !== r) return r.value;
          }),
          (o.prototype.getReverse = function (e) {
            for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
            if (t === e && null !== r) return r.value;
          }),
          (o.prototype.map = function (e, t) {
            t = t || this;
            for (var r = new o(), n = this.head; null !== n; ) r.push(e.call(t, n.value, this)), (n = n.next);
            return r;
          }),
          (o.prototype.mapReverse = function (e, t) {
            t = t || this;
            for (var r = new o(), n = this.tail; null !== n; ) r.push(e.call(t, n.value, this)), (n = n.prev);
            return r;
          }),
          (o.prototype.reduce = function (e, t) {
            var r,
              n = this.head;
            if (1 < arguments.length) r = t;
            else {
              if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
              (n = this.head.next), (r = this.head.value);
            }
            for (var a = 0; null !== n; a++) (r = e(r, n.value, a)), (n = n.next);
            return r;
          }),
          (o.prototype.reduceReverse = function (e, t) {
            var r,
              n = this.tail;
            if (1 < arguments.length) r = t;
            else {
              if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
              (n = this.tail.prev), (r = this.tail.value);
            }
            for (var a = this.length - 1; null !== n; a--) (r = e(r, n.value, a)), (n = n.prev);
            return r;
          }),
          (o.prototype.toArray = function () {
            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) (e[t] = r.value), (r = r.next);
            return e;
          }),
          (o.prototype.toArrayReverse = function () {
            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) (e[t] = r.value), (r = r.prev);
            return e;
          }),
          (o.prototype.slice = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new o();
            if (!(t < e || t < 0)) {
              e < 0 && (e = 0), t > this.length && (t = this.length);
              for (var n = 0, a = this.head; null !== a && n < e; n++) a = a.next;
              for (; null !== a && n < t; n++, a = a.next) r.push(a.value);
            }
            return r;
          }),
          (o.prototype.sliceReverse = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new o();
            if (!(t < e || t < 0)) {
              e < 0 && (e = 0), t > this.length && (t = this.length);
              for (var n = this.length, a = this.tail; null !== a && t < n; n--) a = a.prev;
              for (; null !== a && e < n; n--, a = a.prev) r.push(a.value);
            }
            return r;
          }),
          (o.prototype.splice = function (e, t, ...r) {
            (e = e > this.length ? this.length - 1 : e) < 0 && (e = this.length + e);
            for (var n = 0, a = this.head; null !== a && n < e; n++) a = a.next;
            for (var o = [], n = 0; a && n < t; n++) o.push(a.value), (a = this.removeNode(a));
            (a = null === a ? this.tail : a) !== this.head && a !== this.tail && (a = a.prev);
            for (n = 0; n < r.length; n++)
              a = (function (e, t, r) {
                r = t === e.head ? new i(r, null, t, e) : new i(r, t, t.next, e);
                null === r.next && (e.tail = r);
                null === r.prev && (e.head = r);
                return e.length++, r;
              })(this, a, r[n]);
            return o;
          }),
          (o.prototype.reverse = function () {
            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
              var n = r.prev;
              (r.prev = r.next), (r.next = n);
            }
            return (this.head = t), (this.tail = e), this;
          });
        try {
          Oe()(o);
        } catch (e) {}
      },
    }),
    Ce = e({
      "node_modules/lru-cache/index.js"(e, t) {
        "use strict";
        var r = Ne(),
          i = Symbol("max"),
          s = Symbol("length"),
          l = Symbol("lengthCalculator"),
          o = Symbol("allowStale"),
          c = Symbol("maxAge"),
          u = Symbol("dispose"),
          p = Symbol("noDisposeOnSet"),
          d = Symbol("lruList"),
          h = Symbol("cache"),
          a = Symbol("updateAgeOnGet"),
          n = () => 1,
          f = (e, t, r) => {
            const n = e[h].get(t);
            if (n) {
              t = n.value;
              if (m(e, t)) {
                if ((v(e, n), !e[o])) return;
              } else r && (e[a] && (n.value.now = Date.now()), e[d].unshiftNode(n));
              return t.value;
            }
          },
          m = (e, t) => {
            var r;
            return (
              !(!t || (!t.maxAge && !e[c])) && ((r = Date.now() - t.now), t.maxAge ? r > t.maxAge : e[c] && r > e[c])
            );
          },
          g = (t) => {
            if (t[s] > t[i])
              for (let e = t[d].tail; t[s] > t[i] && null !== e; ) {
                var r = e.prev;
                v(t, e), (e = r);
              }
          },
          v = (e, t) => {
            var r;
            t &&
              ((r = t.value), e[u] && e[u](r.key, r.value), (e[s] -= r.length), e[h].delete(r.key), e[d].removeNode(t));
          },
          b = class {
            constructor(e, t, r, n, a) {
              (this.key = e), (this.value = t), (this.length = r), (this.now = n), (this.maxAge = a || 0);
            }
          },
          y = (e, t, r, n) => {
            let a = r.value;
            m(e, a) && (v(e, r), e[o] || (a = void 0)), a && t.call(n, a.value, a.key, e);
          };
        t.exports = class {
          constructor(e) {
            if ((e = (e = "number" == typeof e ? { max: e } : e) || {}).max && ("number" != typeof e.max || e.max < 0))
              throw new TypeError("max must be a non-negative number");
            this[i] = e.max || 1 / 0;
            var t = e.length || n;
            if (
              ((this[l] = "function" != typeof t ? n : t),
              (this[o] = e.stale || !1),
              e.maxAge && "number" != typeof e.maxAge)
            )
              throw new TypeError("maxAge must be a number");
            (this[c] = e.maxAge || 0),
              (this[u] = e.dispose),
              (this[p] = e.noDisposeOnSet || !1),
              (this[a] = e.updateAgeOnGet || !1),
              this.reset();
          }
          set max(e) {
            if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
            (this[i] = e || 1 / 0), g(this);
          }
          get max() {
            return this[i];
          }
          set allowStale(e) {
            this[o] = !!e;
          }
          get allowStale() {
            return this[o];
          }
          set maxAge(e) {
            if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
            (this[c] = e), g(this);
          }
          get maxAge() {
            return this[c];
          }
          set lengthCalculator(e) {
            (e = "function" != typeof e ? n : e) !== this[l] &&
              ((this[l] = e),
              (this[s] = 0),
              this[d].forEach((e) => {
                (e.length = this[l](e.value, e.key)), (this[s] += e.length);
              })),
              g(this);
          }
          get lengthCalculator() {
            return this[l];
          }
          get length() {
            return this[s];
          }
          get itemCount() {
            return this[d].length;
          }
          rforEach(t, r) {
            r = r || this;
            for (let e = this[d].tail; null !== e; ) {
              var n = e.prev;
              y(this, t, e, r), (e = n);
            }
          }
          forEach(t, r) {
            r = r || this;
            for (let e = this[d].head; null !== e; ) {
              var n = e.next;
              y(this, t, e, r), (e = n);
            }
          }
          keys() {
            return this[d].toArray().map((e) => e.key);
          }
          values() {
            return this[d].toArray().map((e) => e.value);
          }
          reset() {
            this[u] && this[d] && this[d].length && this[d].forEach((e) => this[u](e.key, e.value)),
              (this[h] = new Map()),
              (this[d] = new r()),
              (this[s] = 0);
          }
          dump() {
            return this[d]
              .map((e) => !m(this, e) && { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) })
              .toArray()
              .filter((e) => e);
          }
          dumpLru() {
            return this[d];
          }
          set(e, t, r) {
            if ((r = r || this[c]) && "number" != typeof r) throw new TypeError("maxAge must be a number");
            var n = r ? Date.now() : 0,
              a = this[l](t, e);
            if (this[h].has(e)) {
              if (a > this[i]) return v(this, this[h].get(e)), !1;
              const o = this[h].get(e).value;
              this[u] && !this[p] && this[u](e, o.value),
                (o.now = n),
                (o.maxAge = r),
                (o.value = t),
                (this[s] += a - o.length),
                (o.length = a),
                this.get(e);
            } else {
              if ((a = new b(e, t, a, n, r)).length > this[i]) return this[u] && this[u](e, t), !1;
              (this[s] += a.length), this[d].unshift(a), this[h].set(e, this[d].head);
            }
            return g(this), !0;
          }
          has(e) {
            return !!this[h].has(e) && ((e = this[h].get(e).value), !m(this, e));
          }
          get(e) {
            return f(this, e, !0);
          }
          peek(e) {
            return f(this, e, !1);
          }
          pop() {
            var e = this[d].tail;
            return e ? (v(this, e), e.value) : null;
          }
          del(e) {
            v(this, this[h].get(e));
          }
          load(t) {
            this.reset();
            var r = Date.now();
            for (let e = t.length - 1; 0 <= e; e--) {
              var n = t[e],
                a = n.e || 0;
              0 === a ? this.set(n.k, n.v) : 0 < (a = a - r) && this.set(n.k, n.v, a);
            }
          }
          prune() {
            this[h].forEach((e, t) => f(this, t, !1));
          }
        };
      },
    }),
    q = e({
      "node_modules/semver/classes/range.js"(e, t) {
        var n = class {
          constructor(e, t) {
            if (((t = a(t)), e instanceof n))
              return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
            if (e instanceof l) return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
            if (
              ((this.options = t),
              (this.loose = !!t.loose),
              (this.includePrerelease = !!t.includePrerelease),
              (this.raw = e),
              (this.set = e
                .split("||")
                .map((e) => this.parseRange(e.trim()))
                .filter((e) => e.length)),
              !this.set.length)
            )
              throw new TypeError("Invalid SemVer Range: " + e);
            if (1 < this.set.length) {
              t = this.set[0];
              if (((this.set = this.set.filter((e) => !m(e[0]))), 0 === this.set.length)) this.set = [t];
              else if (1 < this.set.length)
                for (const r of this.set)
                  if (1 === r.length && o(r[0])) {
                    this.set = [r];
                    break;
                  }
            }
            this.format();
          }
          format() {
            return (
              (this.range = this.set
                .map((e) => e.join(" ").trim())
                .join("||")
                .trim()),
              this.range
            );
          }
          toString() {
            return this.range;
          }
          parseRange(e) {
            e = e.trim();
            var t = `parseRange:${Object.keys(this.options).join(",")}:` + e,
              r = s.get(t);
            if (r) return r;
            var r = this.options.loose,
              n = r ? d[h.HYPHENRANGELOOSE] : d[h.HYPHENRANGE];
            (e = e.replace(n, C(this.options.includePrerelease))),
              p("hyphen replace", e),
              (e = e.replace(d[h.COMPARATORTRIM], c)),
              p("comparator trim", e);
            let a = (e = (e = (e = e.replace(d[h.TILDETRIM], u)).replace(d[h.CARETTRIM], f)).split(/\s+/).join(" "))
              .split(" ")
              .map((e) => g(e, this.options))
              .join(" ")
              .split(/\s+/)
              .map((e) => N(e, this.options));
            r && (a = a.filter((e) => (p("loose invalid filter", e, this.options), !!e.match(d[h.COMPARATORLOOSE])))),
              p("range list", a);
            const o = new Map();
            for (const i of a.map((e) => new l(e, this.options))) {
              if (m(i)) return [i];
              o.set(i.value, i);
            }
            1 < o.size && o.has("") && o.delete("");
            n = [...o.values()];
            return s.set(t, n), n;
          }
          intersects(e, r) {
            if (e instanceof n)
              return this.set.some(
                (t) => i(t, r) && e.set.some((e) => i(e, r) && t.every((t) => e.every((e) => t.intersects(e, r))))
              );
            throw new TypeError("a Range is required");
          }
          test(t) {
            if (t) {
              if ("string" == typeof t)
                try {
                  t = new r(t, this.options);
                } catch (e) {
                  return !1;
                }
              for (let e = 0; e < this.set.length; e++) if (I(this.set[e], t, this.options)) return !0;
            }
            return !1;
          }
        };
        t.exports = n;
        var s = new (Ce())({ max: 1e3 }),
          a = ee(),
          l = Ie(),
          p = Q(),
          r = H(),
          { re: d, t: h, comparatorTrimReplace: c, tildeTrimReplace: u, caretTrimReplace: f } = Z(),
          m = (e) => "<0.0.0-0" === e.value,
          o = (e) => "" === e.value,
          i = (e, t) => {
            let r = !0;
            const n = e.slice();
            let a = n.pop();
            for (; r && n.length; ) (r = n.every((e) => a.intersects(e, t))), (a = n.pop());
            return r;
          },
          g = (e, t) => (
            p("comp", e, t),
            (e = E(e, t)),
            p("caret", e),
            (e = b(e, t)),
            p("tildes", e),
            (e = S(e, t)),
            p("xrange", e),
            (e = O(e, t)),
            p("stars", e),
            e
          ),
          v = (e) => !e || "x" === e.toLowerCase() || "*" === e,
          b = (e, t) =>
            e
              .trim()
              .split(/\s+/)
              .map((e) => y(e, t))
              .join(" "),
          y = (i, e) => {
            e = e.loose ? d[h.TILDELOOSE] : d[h.TILDE];
            return i.replace(e, (e, t, r, n, a) => {
              p("tilde", i, e, t, r, n, a);
              let o;
              return (
                (o = v(t)
                  ? ""
                  : v(r)
                  ? `>=${t}.0.0 <${+t + 1}.0.0-0`
                  : v(n)
                  ? `>=${t}.${r}.0 <${t}.${+r + 1}.0-0`
                  : a
                  ? (p("replaceTilde pr", a), `>=${t}.${r}.${n}-${a} <${t}.${+r + 1}.0-0`)
                  : `>=${t}.${r}.${n} <${t}.${+r + 1}.0-0`),
                p("tilde return", o),
                o
              );
            });
          },
          E = (e, t) =>
            e
              .trim()
              .split(/\s+/)
              .map((e) => w(e, t))
              .join(" "),
          w = (i, e) => {
            p("caret", i, e);
            var t = e.loose ? d[h.CARETLOOSE] : d[h.CARET];
            const s = e.includePrerelease ? "-0" : "";
            return i.replace(t, (e, t, r, n, a) => {
              p("caret", i, e, t, r, n, a);
              let o;
              return (
                (o = v(t)
                  ? ""
                  : v(r)
                  ? `>=${t}.0.0${s} <${+t + 1}.0.0-0`
                  : v(n)
                  ? "0" === t
                    ? `>=${t}.${r}.0${s} <${t}.${+r + 1}.0-0`
                    : `>=${t}.${r}.0${s} <${+t + 1}.0.0-0`
                  : a
                  ? (p("replaceCaret pr", a),
                    "0" === t
                      ? "0" === r
                        ? `>=${t}.${r}.${n}-${a} <${t}.${r}.${+n + 1}-0`
                        : `>=${t}.${r}.${n}-${a} <${t}.${+r + 1}.0-0`
                      : `>=${t}.${r}.${n}-${a} <${+t + 1}.0.0-0`)
                  : (p("no pr"),
                    "0" === t
                      ? "0" === r
                        ? `>=${t}.${r}.${n}${s} <${t}.${r}.${+n + 1}-0`
                        : `>=${t}.${r}.${n}${s} <${t}.${+r + 1}.0-0`
                      : `>=${t}.${r}.${n} <${+t + 1}.0.0-0`)),
                p("caret return", o),
                o
              );
            });
          },
          S = (e, t) => (
            p("replaceXRanges", e, t),
            e
              .split(/\s+/)
              .map((e) => k(e, t))
              .join(" ")
          ),
          k = (c, u) => {
            c = c.trim();
            var e = u.loose ? d[h.XRANGELOOSE] : d[h.XRANGE];
            return c.replace(e, (e, t, r, n, a, o) => {
              p("xRange", c, e, t, r, n, a, o);
              var i = v(r),
                s = i || v(n),
                l = s || v(a);
              return (
                "=" === t && l && (t = ""),
                (o = u.includePrerelease ? "-0" : ""),
                i
                  ? (e = ">" === t || "<" === t ? "<0.0.0-0" : "*")
                  : t && l
                  ? (s && (n = 0),
                    (a = 0),
                    ">" === t
                      ? ((t = ">="), (a = s ? ((r = +r + 1), (n = 0)) : ((n = +n + 1), 0)))
                      : "<=" === t && ((t = "<"), s ? (r = +r + 1) : (n = +n + 1)),
                    (e = t + r + `.${n}.` + a + (o = "<" === t ? "-0" : o)))
                  : s
                  ? (e = `>=${r}.0.0${o} <${+r + 1}.0.0-0`)
                  : l && (e = `>=${r}.${n}.0${o} <${r}.${+n + 1}.0-0`),
                p("xRange return", e),
                e
              );
            });
          },
          O = (e, t) => (p("replaceStars", e, t), e.trim().replace(d[h.STAR], "")),
          N = (e, t) => (p("replaceGTE0", e, t), e.trim().replace(d[t.includePrerelease ? h.GTE0PRE : h.GTE0], "")),
          C = (h) => (e, t, r, n, a, o, i, s, l, c, u, p, d) =>
            (
              (t = v(r)
                ? ""
                : v(n)
                ? `>=${r}.0.0` + (h ? "-0" : "")
                : v(a)
                ? `>=${r}.${n}.0` + (h ? "-0" : "")
                : o
                ? ">=" + t
                : ">=" + t + (h ? "-0" : "")) +
              " " +
              (s = v(l)
                ? ""
                : v(c)
                ? `<${+l + 1}.0.0-0`
                : v(u)
                ? `<${l}.${+c + 1}.0-0`
                : p
                ? `<=${l}.${c}.${u}-` + p
                : h
                ? `<${l}.${c}.${+u + 1}-0`
                : "<=" + s)
            ).trim(),
          I = (t, r, e) => {
            for (let e = 0; e < t.length; e++) if (!t[e].test(r)) return !1;
            if (!r.prerelease.length || e.includePrerelease) return !0;
            for (let e = 0; e < t.length; e++)
              if ((p(t[e].semver), t[e].semver !== l.ANY && 0 < t[e].semver.prerelease.length)) {
                var n = t[e].semver;
                if (n.major === r.major && n.minor === r.minor && n.patch === r.patch) return !0;
              }
            return !1;
          };
      },
    }),
    Ie = e({
      "node_modules/semver/classes/comparator.js"(e, t) {
        var r = Symbol("SemVer ANY"),
          s = class {
            static get ANY() {
              return r;
            }
            constructor(e, t) {
              if (((t = n(t)), e instanceof s)) {
                if (e.loose === !!t.loose) return e;
                e = e.value;
              }
              i("comparator", e, t),
                (this.options = t),
                (this.loose = !!t.loose),
                this.parse(e),
                this.semver === r ? (this.value = "") : (this.value = this.operator + this.semver.version),
                i("comp", this);
            }
            parse(e) {
              var t = this.options.loose ? a[o.COMPARATORLOOSE] : a[o.COMPARATOR],
                t = e.match(t);
              if (!t) throw new TypeError("Invalid comparator: " + e);
              (this.operator = void 0 !== t[1] ? t[1] : ""),
                "=" === this.operator && (this.operator = ""),
                t[2] ? (this.semver = new c(t[2], this.options.loose)) : (this.semver = r);
            }
            toString() {
              return this.value;
            }
            test(e) {
              if ((i("Comparator.test", e, this.options.loose), this.semver === r || e === r)) return !0;
              if ("string" == typeof e)
                try {
                  e = new c(e, this.options);
                } catch (e) {
                  return !1;
                }
              return l(e, this.operator, this.semver, this.options);
            }
            intersects(e, t) {
              var r, n, a, o, i;
              if (e instanceof s)
                return (
                  (t && "object" == typeof t) || (t = { loose: !!t, includePrerelease: !1 }),
                  "" === this.operator
                    ? "" === this.value || new u(e.value, t).test(this.value)
                    : "" === e.operator
                    ? "" === e.value || new u(this.value, t).test(e.semver)
                    : ((r = !(
                        (">=" !== this.operator && ">" !== this.operator) ||
                        (">=" !== e.operator && ">" !== e.operator)
                      )),
                      (n = !(
                        ("<=" !== this.operator && "<" !== this.operator) ||
                        ("<=" !== e.operator && "<" !== e.operator)
                      )),
                      (a = this.semver.version === e.semver.version),
                      (o = !(
                        (">=" !== this.operator && "<=" !== this.operator) ||
                        (">=" !== e.operator && "<=" !== e.operator)
                      )),
                      (i =
                        l(this.semver, "<", e.semver, t) &&
                        (">=" === this.operator || ">" === this.operator) &&
                        ("<=" === e.operator || "<" === e.operator)),
                      (t =
                        l(this.semver, ">", e.semver, t) &&
                        ("<=" === this.operator || "<" === this.operator) &&
                        (">=" === e.operator || ">" === e.operator)),
                      r || n || (a && o) || i || t)
                );
              throw new TypeError("a Comparator is required");
            }
          },
          n = ((t.exports = s), ee()),
          { re: a, t: o } = Z(),
          l = Se(),
          i = Q(),
          c = H(),
          u = q();
      },
    }),
    xe = e({
      "node_modules/semver/functions/satisfies.js"(e, t) {
        var n = q();
        t.exports = (e, t, r) => {
          try {
            t = new n(t, r);
          } catch (e) {
            return !1;
          }
          return t.test(e);
        };
      },
    }),
    Le = e({
      "node_modules/semver/ranges/to-comparators.js"(e, t) {
        var r = q();
        t.exports = (e, t) =>
          new r(e, t).set.map((e) =>
            e
              .map((e) => e.value)
              .join(" ")
              .trim()
              .split(" ")
          );
      },
    }),
    Re = e({
      "node_modules/semver/ranges/max-satisfying.js"(e, t) {
        var i = H(),
          s = q();
        t.exports = (e, t, r) => {
          let n = null,
            a = null,
            o = null;
          try {
            o = new s(t, r);
          } catch (e) {
            return null;
          }
          return (
            e.forEach((e) => {
              !o.test(e) || (n && -1 !== a.compare(e)) || ((n = e), (a = new i(n, r)));
            }),
            n
          );
        };
      },
    }),
    Pe = e({
      "node_modules/semver/ranges/min-satisfying.js"(e, t) {
        var i = H(),
          s = q();
        t.exports = (e, t, r) => {
          let n = null,
            a = null,
            o = null;
          try {
            o = new s(t, r);
          } catch (e) {
            return null;
          }
          return (
            e.forEach((e) => {
              !o.test(e) || (n && 1 !== a.compare(e)) || ((n = e), (a = new i(n, r)));
            }),
            n
          );
        };
      },
    }),
    Ae = e({
      "node_modules/semver/ranges/min-version.js"(e, t) {
        var o = H(),
          r = q(),
          i = ve();
        t.exports = (t, e) => {
          t = new r(t, e);
          let n = new o("0.0.0");
          if (t.test(n)) return n;
          if (((n = new o("0.0.0-0")), t.test(n))) return n;
          n = null;
          for (let e = 0; e < t.set.length; ++e) {
            const a = t.set[e];
            let r = null;
            a.forEach((e) => {
              const t = new o(e.semver.version);
              switch (e.operator) {
                case ">":
                  0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), (t.raw = t.format());
                case "":
                case ">=":
                  (r && !i(t, r)) || (r = t);
                  break;
                case "<":
                case "<=":
                  break;
                default:
                  throw new Error("Unexpected operation: " + e.operator);
              }
            }),
              !r || (n && !i(n, r)) || (n = r);
          }
          return n && t.test(n) ? n : null;
        };
      },
    }),
    Te = e({
      "node_modules/semver/ranges/valid.js"(e, t) {
        var r = q();
        t.exports = (e, t) => {
          try {
            return new r(e, t).range || "*";
          } catch (e) {
            return null;
          }
        };
      },
    }),
    _e = e({
      "node_modules/semver/ranges/outside.js"(e, t) {
        var r = H(),
          d = Ie(),
          h = d["ANY"],
          f = q(),
          m = xe(),
          g = ve(),
          v = be(),
          b = we(),
          y = Ee();
        t.exports = (n, a, e, o) => {
          (n = new r(n, o)), (a = new f(a, o));
          let i, s, l, c, u;
          switch (e) {
            case ">":
              (i = g), (s = b), (l = v), (c = ">"), (u = ">=");
              break;
            case "<":
              (i = v), (s = y), (l = g), (c = "<"), (u = "<=");
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (m(n, a, o)) return !1;
          for (let e = 0; e < a.set.length; ++e) {
            const p = a.set[e];
            let t = null,
              r = null;
            if (
              (p.forEach((e) => {
                e.semver === h && (e = new d(">=0.0.0")),
                  (t = t || e),
                  (r = r || e),
                  i(e.semver, t.semver, o) ? (t = e) : l(e.semver, r.semver, o) && (r = e);
              }),
              t.operator === c || t.operator === u)
            )
              return !1;
            if ((!r.operator || r.operator === c) && s(n, r.semver)) return !1;
            if (r.operator === u && l(n, r.semver)) return !1;
          }
          return !0;
        };
      },
    }),
    je = e({
      "node_modules/semver/ranges/gtr.js"(e, t) {
        var n = _e();
        t.exports = (e, t, r) => n(e, t, ">", r);
      },
    }),
    De = e({
      "node_modules/semver/ranges/ltr.js"(e, t) {
        var n = _e();
        t.exports = (e, t, r) => n(e, t, "<", r);
      },
    }),
    Me = e({
      "node_modules/semver/ranges/intersects.js"(e, t) {
        var n = q();
        t.exports = (e, t, r) => ((e = new n(e, r)), (t = new n(t, r)), e.intersects(t));
      },
    }),
    $e = e({
      "node_modules/semver/ranges/simplify.js"(e, t) {
        var h = xe(),
          f = V();
        t.exports = (e, t, r) => {
          const n = [];
          let a = null,
            o = null;
          var i,
            s,
            l = e.sort((e, t) => f(e, t, r));
          for (const d of l) {
            var c = h(d, t, r);
            a = c ? ((o = d), a || d) : (o && n.push([a, o]), (o = null));
          }
          a && n.push([a, null]);
          const u = [];
          for ([i, s] of n)
            i === s
              ? u.push(i)
              : s || i !== l[0]
              ? s
                ? i === l[0]
                  ? u.push("<=" + s)
                  : u.push(i + " - " + s)
                : u.push(">=" + i)
              : u.push("*");
          var e = u.join(" || "),
            p = "string" == typeof t.raw ? t.raw : String(t);
          return e.length < p.length ? e : t;
        };
      },
    }),
    Fe = e({
      "node_modules/semver/ranges/subset.js"(e, t) {
        var s = q(),
          v = Ie(),
          b = v["ANY"],
          y = xe(),
          E = V(),
          w = (e, t, r) => {
            return !e ||
              (!(0 < (r = E(e.semver, t.semver, r))) && (r < 0 || (">" === t.operator && ">=" === e.operator)))
              ? t
              : e;
          },
          S = (e, t, r) => {
            return !e ||
              (!((r = E(e.semver, t.semver, r)) < 0) && (0 < r || ("<" === t.operator && "<=" === e.operator)))
              ? t
              : e;
          };
        t.exports = (t, r, n = {}) => {
          if (t !== r) {
            (t = new s(t, n)), (r = new s(r, n));
            let e = !1;
            e: for (const o of t.set) {
              for (const i of r.set) {
                var a = ((s, l, c) => {
                  if (s !== l) {
                    if (1 === s.length && s[0].semver === b) {
                      if (1 === l.length && l[0].semver === b) return !0;
                      s = c.includePrerelease ? [new v(">=0.0.0-0")] : [new v(">=0.0.0")];
                    }
                    if (1 === l.length && l[0].semver === b) {
                      if (c.includePrerelease) return !0;
                      l = [new v(">=0.0.0")];
                    }
                    const d = new Set();
                    let e, t;
                    for (const h of s)
                      ">" === h.operator || ">=" === h.operator
                        ? (e = w(e, h, c))
                        : "<" === h.operator || "<=" === h.operator
                        ? (t = S(t, h, c))
                        : d.add(h.semver);
                    if (1 < d.size) return null;
                    let r;
                    if (e && t) {
                      if (0 < (r = E(e.semver, t.semver, c))) return null;
                      if (0 === r && (">=" !== e.operator || "<=" !== t.operator)) return null;
                    }
                    for (const f of d) {
                      if (e && !y(f, String(e), c)) return null;
                      if (t && !y(f, String(t), c)) return null;
                      for (const m of l) if (!y(f, String(m), c)) return !1;
                      return !0;
                    }
                    var u, p;
                    let n,
                      a,
                      o = !(!t || c.includePrerelease || !t.semver.prerelease.length) && t.semver,
                      i = !(!e || c.includePrerelease || !e.semver.prerelease.length) && e.semver;
                    o && 1 === o.prerelease.length && "<" === t.operator && 0 === o.prerelease[0] && (o = !1);
                    for (const g of l) {
                      if (
                        ((a = a || ">" === g.operator || ">=" === g.operator),
                        (n = n || "<" === g.operator || "<=" === g.operator),
                        e)
                      )
                        if (
                          (i &&
                            g.semver.prerelease &&
                            g.semver.prerelease.length &&
                            g.semver.major === i.major &&
                            g.semver.minor === i.minor &&
                            g.semver.patch === i.patch &&
                            (i = !1),
                          ">" === g.operator || ">=" === g.operator)
                        ) {
                          if ((u = w(e, g, c)) === g && u !== e) return !1;
                        } else if (">=" === e.operator && !y(e.semver, String(g), c)) return !1;
                      if (t)
                        if (
                          (o &&
                            g.semver.prerelease &&
                            g.semver.prerelease.length &&
                            g.semver.major === o.major &&
                            g.semver.minor === o.minor &&
                            g.semver.patch === o.patch &&
                            (o = !1),
                          "<" === g.operator || "<=" === g.operator)
                        ) {
                          if ((p = S(t, g, c)) === g && p !== t) return !1;
                        } else if ("<=" === t.operator && !y(t.semver, String(g), c)) return !1;
                      if (!g.operator && (t || e) && 0 !== r) return !1;
                    }
                    if (e && n && !t && 0 !== r) return !1;
                    if (t && a && !e && 0 !== r) return !1;
                    if (i || o) return !1;
                  }
                  return true;
                })(o, i, n);
                if (((e = e || null !== a), a)) continue e;
              }
              if (e) return !1;
            }
          }
          return !0;
        };
      },
    }),
    Be = e({
      "node_modules/semver/index.js"(D, e) {
        var t = Z(),
          r = Y(),
          n = H(),
          a = te(),
          o = re(),
          i = ne(),
          s = ae(),
          l = oe(),
          c = se(),
          u = le(),
          p = ce(),
          d = ue(),
          h = pe(),
          f = V(),
          m = de(),
          g = he(),
          v = fe(),
          b = me(),
          y = ge(),
          E = ve(),
          w = be(),
          S = ie(),
          k = ye(),
          O = Ee(),
          N = we(),
          C = Se(),
          I = ke(),
          x = Ie(),
          L = q(),
          R = xe(),
          P = Le(),
          A = Re(),
          T = Pe(),
          _ = Ae(),
          j = Te(),
          M = _e(),
          $ = je(),
          F = De(),
          B = Me(),
          U = $e(),
          G = Fe();
        e.exports = {
          parse: o,
          valid: i,
          clean: s,
          inc: l,
          diff: c,
          major: u,
          minor: p,
          patch: d,
          prerelease: h,
          compare: f,
          rcompare: m,
          compareLoose: g,
          compareBuild: v,
          sort: b,
          rsort: y,
          gt: E,
          lt: w,
          eq: S,
          neq: k,
          gte: O,
          lte: N,
          cmp: C,
          coerce: I,
          Comparator: x,
          Range: L,
          satisfies: R,
          toComparators: P,
          maxSatisfying: A,
          minSatisfying: T,
          minVersion: _,
          validRange: j,
          outside: M,
          gtr: $,
          ltr: F,
          intersects: B,
          simplifyRange: U,
          subset: G,
          SemVer: n,
          re: t.re,
          src: t.src,
          tokens: t.t,
          SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
          compareIdentifiers: a.compareIdentifiers,
          rcompareIdentifiers: a.rcompareIdentifiers,
        };
      },
    }),
    r = e({
      "node_modules/chroma-js/chroma.js"(e, t) {
        var r;
        (r = function () {
          "use strict";
          for (
            var e = function (e, t, r) {
                return void 0 === r && (r = 1), e < (t = void 0 === t ? 0 : t) ? t : r < e ? r : e;
              },
              D = e,
              M = {},
              t = 0,
              $ = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"];
            t < $.length;
            t += 1
          ) {
            var F = $[t];
            M["[object " + F + "]"] = F.toLowerCase();
          }
          function r(e) {
            return M[Object.prototype.toString.call(e)] || "object";
          }
          function B() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if ("object" === X(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
            var r = !1;
            if (!(o = J(e))) {
              (r = !0),
                s.sorted ||
                  ((s.autodetect = s.autodetect.sort(function (e, t) {
                    return t.p - e.p;
                  })),
                  (s.sorted = !0));
              for (var n = 0, a = s.autodetect; n < a.length; n += 1) {
                var o,
                  i = a[n];
                if ((o = i.test.apply(i, e))) break;
              }
            }
            if (!s.format[o]) throw new Error("unknown format: " + e);
            (r = s.format[o].apply(null, r ? e : e.slice(0, -1))),
              (this._rgb = W(r)),
              3 === this._rgb.length && this._rgb.push(1);
          }
          function n() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return new (Function.prototype.bind.apply(n.Color, [null].concat(e)))();
          }
          function U() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = Z(e, "cmyk"))[0],
              n = e[1],
              a = e[2],
              o = e[3],
              i = 4 < e.length ? e[4] : 1;
            return 1 === o
              ? [0, 0, 0, i]
              : [
                  1 <= r ? 0 : 255 * (1 - r) * (1 - o),
                  1 <= n ? 0 : 255 * (1 - n) * (1 - o),
                  1 <= a ? 0 : 255 * (1 - a) * (1 - o),
                  i,
                ];
          }
          function a(e) {
            return Math.round(100 * e) / 100;
          }
          function G() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              a = (e = ie(e, "rgba"))[0],
              o = e[1],
              i = e[2],
              s = ((a /= 255), (o /= 255), (i /= 255), Math.min(a, o, i)),
              l = Math.max(a, o, i),
              c = (l + s) / 2;
            return (
              l === s ? ((r = 0), (n = Number.NaN)) : (r = c < 0.5 ? (l - s) / (l + s) : (l - s) / (2 - l - s)),
              a == l
                ? (n = (o - i) / (l - s))
                : o == l
                ? (n = 2 + (i - a) / (l - s))
                : i == l && (n = 4 + (a - o) / (l - s)),
              (n *= 60) < 0 && (n += 360),
              3 < e.length && void 0 !== e[3] ? [n, r, c, e[3]] : [n, r, c]
            );
          }
          function H() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = se(e, "rgba"),
              n = le(e) || "rgb";
            return "hsl" == n.substr(0, 3)
              ? ce(ue(r), n)
              : ((r[0] = pe(r[0])),
                (r[1] = pe(r[1])),
                (r[2] = pe(r[2])),
                ("rgba" === n || (3 < r.length && r[3] < 1)) && ((r[3] = 3 < r.length ? r[3] : 1), (n = "rgba")),
                n + "(" + r.slice(0, "rgb" === n ? 3 : 4).join(",") + ")");
          }
          function V() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              a,
              o = (e = de(e, "hsl"))[0],
              i = e[1],
              s = e[2];
            if (0 === i) r = n = a = 255 * s;
            else {
              var l = [0, 0, 0],
                c = [0, 0, 0],
                u = s < 0.5 ? s * (1 + i) : s + i - s * i,
                p = 2 * s - u,
                i = o / 360;
              (l[0] = i + 1 / 3), (l[1] = i), (l[2] = i - 1 / 3);
              for (var d = 0; d < 3; d++)
                l[d] < 0 && (l[d] += 1),
                  1 < l[d] && --l[d],
                  6 * l[d] < 1
                    ? (c[d] = p + 6 * (u - p) * l[d])
                    : 2 * l[d] < 1
                    ? (c[d] = u)
                    : 3 * l[d] < 2
                    ? (c[d] = p + (u - p) * (2 / 3 - l[d]) * 6)
                    : (c[d] = p);
              (r = (s = [he(255 * c[0]), he(255 * c[1]), he(255 * c[2])])[0]), (n = s[1]), (a = s[2]);
            }
            return 3 < e.length ? [r, n, a, e[3]] : [r, n, a, 1];
          }
          function q(e) {
            var t, r;
            if (((e = e.toLowerCase().trim()), me.format.named))
              try {
                return me.format.named(e);
              } catch (e) {}
            if ((t = e.match(ge))) {
              for (var n = t.slice(1, 4), a = 0; a < 3; a++) n[a] = +n[a];
              return (n[3] = 1), n;
            }
            if ((t = e.match(ve))) {
              for (var o = t.slice(1, 5), i = 0; i < 4; i++) o[i] = +o[i];
              return o;
            }
            if ((t = e.match(be))) {
              for (var s = t.slice(1, 4), l = 0; l < 3; l++) s[l] = Se(2.55 * s[l]);
              return (s[3] = 1), s;
            }
            if ((t = e.match(ye))) {
              for (var c = t.slice(1, 5), u = 0; u < 3; u++) c[u] = Se(2.55 * c[u]);
              return (c[3] = +c[3]), c;
            }
            return (t = e.match(Ee))
              ? (((r = t.slice(1, 4))[1] *= 0.01), (r[2] *= 0.01), ((r = fe(r))[3] = 1), r)
              : (t = e.match(we))
              ? (((r = t.slice(1, 4))[1] *= 0.01), (r[2] *= 0.01), ((e = fe(r))[3] = +t[4]), e)
              : void 0;
          }
          var K = r,
            z = r,
            o = Math.PI,
            e = {
              clip_rgb: function (e) {
                (e._clipped = !1), (e._unclipped = e.slice(0));
                for (var t = 0; t <= 3; t++)
                  t < 3
                    ? ((e[t] < 0 || 255 < e[t]) && (e._clipped = !0), (e[t] = D(e[t], 0, 255)))
                    : 3 === t && (e[t] = D(e[t], 0, 1));
                return e;
              },
              limit: e,
              type: r,
              unpack: function (t, e) {
                return (
                  void 0 === e && (e = null),
                  3 <= t.length
                    ? Array.prototype.slice.call(t)
                    : "object" == K(t[0]) && e
                    ? e
                        .split("")
                        .filter(function (e) {
                          return void 0 !== t[0][e];
                        })
                        .map(function (e) {
                          return t[0][e];
                        })
                    : t[0]
                );
              },
              last: function (e) {
                var t;
                return !(e.length < 2) && ((t = e.length - 1), "string" == z(e[t])) ? e[t].toLowerCase() : null;
              },
              PI: o,
              TWOPI: 2 * o,
              PITHIRD: o / 3,
              DEG2RAD: o / 180,
              RAD2DEG: 180 / o,
            },
            o = { format: {}, autodetect: [] },
            J = e.last,
            W = e.clip_rgb,
            X = e.type,
            s = o,
            i =
              ((B.prototype.toString = function () {
                return "function" == X(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]";
              }),
              B),
            l = ((n.Color = i), (n.version = "2.4.2"), n),
            Y = e.unpack,
            Q = Math.max,
            Z = e.unpack,
            c = l,
            ee = i,
            u = o,
            te = e.unpack,
            re = e.type,
            ne = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = Y(e, "rgb"),
                n = r[0],
                a = r[1],
                r = r[2],
                o = 1 - Q((n /= 255), Q((a /= 255), (r /= 255))),
                i = o < 1 ? 1 / (1 - o) : 0;
              return [(1 - n - o) * i, (1 - a - o) * i, (1 - r - o) * i, o];
            },
            ae =
              ((ee.prototype.cmyk = function () {
                return ne(this._rgb);
              }),
              (c.cmyk = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(ee, [null].concat(e, ["cmyk"])))();
              }),
              (u.format.cmyk = U),
              u.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = te(e, "cmyk")), "array" === re(e) && 4 === e.length)) return "cmyk";
                },
              }),
              e.unpack),
            oe = e.last,
            ie = e.unpack,
            se = e.unpack,
            le = e.last,
            ce = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = ae(e, "hsla"),
                n = oe(e) || "lsa";
              return (
                (r[0] = a(r[0] || 0)),
                (r[1] = a(100 * r[1]) + "%"),
                (r[2] = a(100 * r[2]) + "%"),
                "hsla" === n || (3 < r.length && r[3] < 1)
                  ? ((r[3] = 3 < r.length ? r[3] : 1), (n = "hsla"))
                  : (r.length = 3),
                n + "(" + r.join(",") + ")"
              );
            },
            ue = G,
            pe = Math.round,
            de = e.unpack,
            he = Math.round,
            fe = V,
            me = o,
            ge = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            ve = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            be = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            ye =
              /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            Ee = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            we =
              /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            Se = Math.round;
          q.test = function (e) {
            return ge.test(e) || ve.test(e) || be.test(e) || ye.test(e) || Ee.test(e) || we.test(e);
          };
          function ke() {
            for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
            var n,
              a,
              o,
              i = (t = Ke(t, "hcg"))[0],
              s = t[1],
              l = t[2],
              c = ((l *= 255), 255 * s);
            if (0 === s) n = a = o = l;
            else {
              360 < (i = 360 === i ? 0 : i) && (i -= 360), i < 0 && (i += 360);
              var u = ze((i /= 60)),
                i = i - u,
                p = l * (1 - s),
                d = p + c * (1 - i),
                h = p + c * i,
                f = p + c;
              switch (u) {
                case 0:
                  (n = (e = [f, h, p])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 1:
                  (n = (e = [d, f, p])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 2:
                  (n = (e = [p, f, h])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 3:
                  (n = (e = [p, d, f])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 4:
                  (n = (e = [h, p, f])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 5:
                  (n = (e = [f, p, d])[0]), (a = e[1]), (o = e[2]);
              }
            }
            return [n, a, o, 3 < t.length ? t[3] : 1];
          }
          function Oe() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (o = Qe(e, "rgba"))[0],
              n = o[1],
              a = o[2],
              o = o[3],
              i = Ze(e) || "auto",
              s =
                (void 0 === o && (o = 1),
                "auto" === i && (i = o < 1 ? "rgba" : "rgb"),
                (s = "000000" + ((p(r) << 16) | (p(n) << 8) | p(a)).toString(16)).substr(s.length - 6)),
              l = (l = "0" + p(255 * o).toString(16)).substr(l.length - 2);
            switch (i.toLowerCase()) {
              case "rgba":
                return "#" + s + l;
              case "argb":
                return "#" + l + s;
              default:
                return "#" + s;
            }
          }
          function Ne(e) {
            var t;
            if (e.match(et))
              return (
                3 === (e = 4 !== e.length && 7 !== e.length ? e : e.substr(1)).length &&
                  (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                [(t = parseInt(e, 16)) >> 16, (t >> 8) & 255, 255 & t, 1]
              );
            if (e.match(tt))
              return (
                4 === (e = 5 !== e.length && 9 !== e.length ? e : e.substr(1)).length &&
                  (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
                [
                  ((t = parseInt(e, 16)) >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  Math.round(((255 & t) / 255) * 100) / 100,
                ]
              );
            throw new Error("unknown hex color: " + e);
          }
          function Ce() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r,
              n,
              a,
              o = (e = ut(e, "hsi"))[0],
              i = e[1],
              s = e[2];
            return (
              isNaN(o) && (o = 0),
              isNaN(i) && (i = 0),
              360 < o && (o -= 360),
              o < 0 && (o += 360),
              (o /= 360) < 1 / 3
                ? (n = 1 - ((a = (1 - i) / 3) + (r = (1 + (i * h(d * o)) / h(dt - d * o)) / 3)))
                : o < 2 / 3
                ? (a = 1 - ((r = (1 - i) / 3) + (n = (1 + (i * h(d * (o -= 1 / 3))) / h(dt - d * o)) / 3)))
                : (r = 1 - ((n = (1 - i) / 3) + (a = (1 + (i * h(d * (o -= 2 / 3))) / h(dt - d * o)) / 3))),
              [255 * (r = pt(s * r * 3)), 255 * (n = pt(s * n * 3)), 255 * (a = pt(s * a * 3)), 3 < e.length ? e[3] : 1]
            );
          }
          function Ie() {
            for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
            var n,
              a,
              o,
              i = (t = Ot(t, "hsv"))[0],
              s = t[1],
              l = t[2];
            if (((l *= 255), 0 === s)) n = a = o = l;
            else {
              360 < (i = 360 === i ? 0 : i) && (i -= 360), i < 0 && (i += 360);
              var c = Nt((i /= 60)),
                i = i - c,
                u = l * (1 - s),
                p = l * (1 - s * i),
                d = l * (1 - s * (1 - i));
              switch (c) {
                case 0:
                  (n = (e = [l, d, u])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 1:
                  (n = (e = [p, l, u])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 2:
                  (n = (e = [u, l, d])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 3:
                  (n = (e = [u, p, l])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 4:
                  (n = (e = [d, u, l])[0]), (a = e[1]), (o = e[2]);
                  break;
                case 5:
                  (n = (e = [l, u, p])[0]), (a = e[1]), (o = e[2]);
              }
            }
            return [n, a, o, 3 < t.length ? t[3] : 1];
          }
          function xe() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (a = Rt(e, "rgb"))[0],
              n = a[1],
              a = a[2];
            return (
              (n = n),
              (a = a),
              (r = At((r = r))),
              (n = At(n)),
              (a = At(a)),
              [
                (a =
                  116 *
                    (n = (r = [
                      Tt((0.4124564 * r + 0.3575761 * n + 0.1804375 * a) / f.Xn),
                      Tt((0.2126729 * r + 0.7151522 * n + 0.072175 * a) / f.Yn),
                      Tt((0.0193339 * r + 0.119192 * n + 0.9503041 * a) / f.Zn),
                    ])[1]) -
                  16) < 0
                  ? 0
                  : a,
                500 * (r[0] - n),
                200 * (n - r[2]),
              ]
            );
          }
          function Le(e) {
            return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * jt(e, 1 / 2.4) - 0.055);
          }
          function Re(e) {
            return e > m.t1 ? e * e * e : m.t2 * (e - m.t0);
          }
          function Pe() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = _t(e, "lab"))[0],
              n = e[1],
              a = e[2],
              r = (r + 16) / 116,
              n = isNaN(n) ? r : r + n / 500,
              a = isNaN(a) ? r : r - a / 200;
            return (
              (r = m.Yn * Re(r)),
              (n = m.Xn * Re(n)),
              (a = m.Zn * Re(a)),
              [
                Le(3.2404542 * n - 1.5371385 * r - 0.4985314 * a),
                Le(-0.969266 * n + 1.8760108 * r + 0.041556 * a),
                Le(0.0556434 * n - 0.2040259 * r + 1.0572252 * a),
                3 < e.length ? e[3] : 1,
              ]
            );
          }
          function Ae() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (a = Bt(e, "lab"))[0],
              n = a[1],
              a = a[2],
              o = Gt(n * n + a * a),
              a = (Ht(a, n) * Ut + 360) % 360;
            return [r, o, (a = 0 === Vt(1e4 * o) ? Number.NaN : a)];
          }
          function Te() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (a = Jt(e, "lch"))[0],
              n = a[1],
              a = a[2];
            return isNaN(a) && (a = 0), [r, Yt((a *= Wt)) * n, Xt(a) * n];
          }
          function _e() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = Qt(e, "lch"))[0],
              n = e[1],
              a = e[2],
              n = (r = Zt(r, n, a))[0],
              a = r[1],
              r = r[2];
            return [(n = er(n, a, r))[0], n[1], n[2], 3 < e.length ? e[3] : 1];
          }
          function je() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = tr(e, "hcl").reverse();
            return rr.apply(void 0, r);
          }
          function De(e) {
            if ("number" == pr(e) && 0 <= e && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
            throw new Error("unknown num color: " + e);
          }
          function Me(e) {
            var t,
              r,
              n =
                (e = e / 100) < 66
                  ? ((t = 255),
                    (r =
                      e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = e - 2) + 104.49216199393888 * E(r)),
                    e < 20 ? 0 : 0.8274096064007395 * (n = e - 10) - 254.76935184120902 + 115.67994401066147 * E(n))
                  : ((t = 351.97690566805693 + 0.114206453784165 * (t = e - 55) - 40.25366309332127 * E(t)),
                    (r = 325.4494125711974 + 0.07943456536662342 * (r = e - 50) - 28.0852963507957 * E(r)),
                    255);
            return [t, r, n, 1];
          }
          function $e() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (a = kr(e, "rgb"))[0],
              n = a[1],
              a = a[2],
              r = [Ir(r / 255), Ir(n / 255), Ir(a / 255)],
              o = Or(0.4122214708 * (n = r[0]) + 0.5363325363 * (a = r[1]) + 0.0514459929 * (r = r[2])),
              i = Or(0.2119034982 * n + 0.6806995451 * a + 0.1073969566 * r),
              n = Or(0.0883024619 * n + 0.2817188376 * a + 0.6299787005 * r);
            return [
              0.2104542553 * o + 0.793617785 * i - 0.0040720468 * n,
              1.9779984951 * o - 2.428592205 * i + 0.4505937099 * n,
              0.0259040371 * o + 0.7827717662 * i - 0.808675766 * n,
            ];
          }
          var c = l,
            Fe = i,
            u = o,
            Be = e.type,
            Ue = H,
            Ge = q,
            He =
              ((Fe.prototype.css = function (e) {
                return Ue(this._rgb, e);
              }),
              (c.css = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(Fe, [null].concat(e, ["css"])))();
              }),
              (u.format.css = Ge),
              u.autodetect.push({
                p: 5,
                test: function (e) {
                  for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                  if (!t.length && "string" === Be(e) && Ge.test(e)) return "css";
                },
              }),
              i),
            c = l,
            u = o,
            Ve = e.unpack,
            qe =
              ((u.format.gl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = Ve(e, "rgba");
                return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
              }),
              (c.gl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(He, [null].concat(e, ["gl"])))();
              }),
              (He.prototype.gl = function () {
                var e = this._rgb;
                return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
              }),
              e.unpack),
            Ke = e.unpack,
            ze = Math.floor,
            Je = e.unpack,
            We = e.type,
            u = l,
            Xe = i,
            c = o,
            Ye = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r,
                n = qe(e, "rgb"),
                a = n[0],
                o = n[1],
                n = n[2],
                i = Math.min(a, o, n),
                s = Math.max(a, o, n),
                l = s - i;
              return (
                0 == l
                  ? (r = Number.NaN)
                  : (a === s && (r = (o - n) / l),
                    o === s && (r = 2 + (n - a) / l),
                    n === s && (r = 4 + (a - o) / l),
                    (r *= 60) < 0 && (r += 360)),
                [r, (100 * l) / 255, (i / (255 - l)) * 100]
              );
            },
            Qe =
              ((Xe.prototype.hcg = function () {
                return Ye(this._rgb);
              }),
              (u.hcg = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(Xe, [null].concat(e, ["hcg"])))();
              }),
              (c.format.hcg = ke),
              c.autodetect.push({
                p: 1,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = Je(e, "hcg")), "array" === We(e) && 3 === e.length)) return "hcg";
                },
              }),
              e.unpack),
            Ze = e.last,
            p = Math.round,
            et = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            u = l,
            rt = i,
            nt = e.type,
            c = o,
            at = Oe,
            ot =
              ((rt.prototype.hex = function (e) {
                return at(this._rgb, e);
              }),
              (u.hex = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(rt, [null].concat(e, ["hex"])))();
              }),
              (c.format.hex = Ne),
              c.autodetect.push({
                p: 4,
                test: function (e) {
                  for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                  if (!t.length && "string" === nt(e) && 0 <= [3, 4, 5, 6, 7, 8, 9].indexOf(e.length)) return "hex";
                },
              }),
              e.unpack),
            it = e.TWOPI,
            st = Math.min,
            lt = Math.sqrt,
            ct = Math.acos,
            ut = e.unpack,
            pt = e.limit,
            d = e.TWOPI,
            dt = e.PITHIRD,
            h = Math.cos,
            ht = e.unpack,
            ft = e.type,
            u = l,
            mt = i,
            c = o,
            gt = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r,
                n = ot(e, "rgb"),
                a = n[0],
                o = n[1],
                n = n[2],
                i = st((a /= 255), (o /= 255), (n /= 255)),
                s = (a + o + n) / 3,
                i = 0 < s ? 1 - i / s : 0;
              return (
                0 == i
                  ? (r = NaN)
                  : ((r = (a - o + (a - n)) / 2),
                    (r /= lt((a - o) * (a - o) + (a - n) * (o - n))),
                    (r = ct(r)),
                    o < n && (r = it - r),
                    (r /= it)),
                [360 * r, i, s]
              );
            },
            vt =
              ((mt.prototype.hsi = function () {
                return gt(this._rgb);
              }),
              (u.hsi = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(mt, [null].concat(e, ["hsi"])))();
              }),
              (c.format.hsi = Ce),
              c.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = ht(e, "hsi")), "array" === ft(e) && 3 === e.length)) return "hsi";
                },
              }),
              e.unpack),
            bt = e.type,
            u = l,
            yt = i,
            c = o,
            Et = G,
            wt =
              ((yt.prototype.hsl = function () {
                return Et(this._rgb);
              }),
              (u.hsl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(yt, [null].concat(e, ["hsl"])))();
              }),
              (c.format.hsl = V),
              c.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = vt(e, "hsl")), "array" === bt(e) && 3 === e.length)) return "hsl";
                },
              }),
              e.unpack),
            St = Math.min,
            kt = Math.max,
            Ot = e.unpack,
            Nt = Math.floor,
            Ct = e.unpack,
            It = e.type,
            u = l,
            xt = i,
            c = o,
            Lt = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r,
                n,
                a = (e = wt(e, "rgb"))[0],
                o = e[1],
                i = e[2],
                s = St(a, o, i),
                l = kt(a, o, i),
                s = l - s;
              return (
                0 === l
                  ? ((r = Number.NaN), (n = 0))
                  : ((n = s / l),
                    a === l && (r = (o - i) / s),
                    o === l && (r = 2 + (i - a) / s),
                    i === l && (r = 4 + (a - o) / s),
                    (r *= 60) < 0 && (r += 360)),
                [r, n, l / 255]
              );
            },
            u =
              ((xt.prototype.hsv = function () {
                return Lt(this._rgb);
              }),
              (u.hsv = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(xt, [null].concat(e, ["hsv"])))();
              }),
              (c.format.hsv = Ie),
              c.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = Ct(e, "hsv")), "array" === It(e) && 3 === e.length)) return "hsv";
                },
              }),
              {
                Kn: 18,
                Xn: 0.95047,
                Yn: 1,
                Zn: 1.08883,
                t0: 0.137931034,
                t1: 0.206896552,
                t2: 0.12841855,
                t3: 0.008856452,
              }),
            f = u,
            Rt = e.unpack,
            Pt = Math.pow,
            At = function (e) {
              return (e /= 255) <= 0.04045 ? e / 12.92 : Pt((e + 0.055) / 1.055, 2.4);
            },
            Tt = function (e) {
              return e > f.t3 ? Pt(e, 1 / 3) : e / f.t2 + f.t0;
            },
            m = u,
            _t = e.unpack,
            jt = Math.pow,
            Dt = e.unpack,
            Mt = e.type,
            c = l,
            $t = i,
            g = o,
            Ft = xe,
            Bt =
              (($t.prototype.lab = function () {
                return Ft(this._rgb);
              }),
              (c.lab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply($t, [null].concat(e, ["lab"])))();
              }),
              (g.format.lab = Pe),
              g.autodetect.push({
                p: 2,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = Dt(e, "lab")), "array" === Mt(e) && 3 === e.length)) return "lab";
                },
              }),
              e.unpack),
            Ut = e.RAD2DEG,
            Gt = Math.sqrt,
            Ht = Math.atan2,
            Vt = Math.round,
            qt = e.unpack,
            Kt = xe,
            zt = Ae,
            Jt = e.unpack,
            Wt = e.DEG2RAD,
            Xt = Math.sin,
            Yt = Math.cos,
            Qt = e.unpack,
            Zt = Te,
            er = Pe,
            tr = e.unpack,
            rr = _e,
            nr = e.unpack,
            ar = e.type,
            c = l,
            v = i,
            or = o,
            ir = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = qt(e, "rgb"),
                n = r[0],
                a = r[1],
                r = r[2],
                n = Kt(n, a, r),
                a = n[0],
                r = n[1],
                n = n[2];
              return zt(a, r, n);
            },
            g =
              ((v.prototype.lch = function () {
                return ir(this._rgb);
              }),
              (v.prototype.hcl = function () {
                return ir(this._rgb).reverse();
              }),
              (c.lch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(v, [null].concat(e, ["lch"])))();
              }),
              (c.hcl = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(v, [null].concat(e, ["hcl"])))();
              }),
              (or.format.lch = _e),
              (or.format.hcl = je),
              ["lch", "hcl"].forEach(function (r) {
                return or.autodetect.push({
                  p: 2,
                  test: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    if (((e = nr(e, r)), "array" === ar(e) && 3 === e.length)) return r;
                  },
                });
              }),
              {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32",
              }),
            c = i,
            b = o,
            sr = e.type,
            y = g,
            lr = Ne,
            cr = Oe,
            ur =
              ((c.prototype.name = function () {
                for (var e = cr(this._rgb, "rgb"), t = 0, r = Object.keys(y); t < r.length; t += 1) {
                  var n = r[t];
                  if (y[n] === e) return n.toLowerCase();
                }
                return e;
              }),
              (b.format.named = function (e) {
                if (((e = e.toLowerCase()), y[e])) return lr(y[e]);
                throw new Error("unknown color name: " + e);
              }),
              b.autodetect.push({
                p: 5,
                test: function (e) {
                  for (var t = [], r = arguments.length - 1; 0 < r--; ) t[r] = arguments[r + 1];
                  if (!t.length && "string" === sr(e) && y[e.toLowerCase()]) return "named";
                },
              }),
              e.unpack),
            pr = e.type,
            c = l,
            dr = i,
            b = o,
            hr = e.type,
            fr = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = ur(e, "rgb");
              return (r[0] << 16) + (r[1] << 8) + r[2];
            },
            c =
              ((dr.prototype.num = function () {
                return fr(this._rgb);
              }),
              (c.num = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(dr, [null].concat(e, ["num"])))();
              }),
              (b.format.num = De),
              b.autodetect.push({
                p: 5,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (1 === e.length && "number" === hr(e[0]) && 0 <= e[0] && e[0] <= 16777215) return "num";
                },
              }),
              l),
            mr = i,
            b = o,
            gr = e.unpack,
            vr = e.type,
            br = Math.round,
            E =
              ((mr.prototype.rgb = function (e) {
                return !1 === (e = void 0 === e ? !0 : e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(br);
              }),
              (mr.prototype.rgba = function (r) {
                return (
                  void 0 === r && (r = !0),
                  this._rgb.slice(0, 4).map(function (e, t) {
                    return !(t < 3) || !1 === r ? e : br(e);
                  })
                );
              }),
              (c.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(mr, [null].concat(e, ["rgb"])))();
              }),
              (b.format.rgb = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var r = gr(e, "rgba");
                return void 0 === r[3] && (r[3] = 1), r;
              }),
              b.autodetect.push({
                p: 3,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (
                    ((e = gr(e, "rgba")),
                    "array" === vr(e) &&
                      (3 === e.length || (4 === e.length && "number" == vr(e[3]) && 0 <= e[3] && e[3] <= 1)))
                  )
                    return "rgb";
                },
              }),
              Math.log),
            yr = Me,
            Er = e.unpack,
            wr = Math.round,
            c = l,
            w = i,
            b = o,
            Sr = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              for (var r = Er(e, "rgb"), n = r[0], a = r[2], o = 1e3, i = 4e4; 0.4 < i - o; ) {
                var s,
                  l = yr((s = 0.5 * (i + o)));
                l[2] / l[0] >= a / n ? (i = s) : (o = s);
              }
              return wr(s);
            },
            kr =
              ((w.prototype.temp =
                w.prototype.kelvin =
                w.prototype.temperature =
                  function () {
                    return Sr(this._rgb);
                  }),
              (c.temp =
                c.kelvin =
                c.temperature =
                  function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    return new (Function.prototype.bind.apply(w, [null].concat(e, ["temp"])))();
                  }),
              (b.format.temp = b.format.kelvin = b.format.temperature = Me),
              e.unpack),
            Or = Math.cbrt,
            Nr = Math.pow,
            Cr = Math.sign;
          function Ir(e) {
            var t = Math.abs(e);
            return t < 0.04045 ? e / 12.92 : (Cr(e) || 1) * Nr((t + 0.055) / 1.055, 2.4);
          }
          function xr() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = Lr(e, "lab"))[0],
              n = e[1],
              a = e[2],
              o = S(r + 0.3963377774 * n + 0.2158037573 * a, 3),
              i = S(r - 0.1055613458 * n - 0.0638541728 * a, 3),
              r = S(r - 0.0894841775 * n - 1.291485548 * a, 3);
            return [
              255 * Pr(4.0767416621 * o - 3.3077115913 * i + 0.2309699292 * r),
              255 * Pr(-1.2684380046 * o + 2.6097574011 * i - 0.3413193965 * r),
              255 * Pr(-0.0041960863 * o - 0.7034186147 * i + 1.707614701 * r),
              3 < e.length ? e[3] : 1,
            ];
          }
          var Lr = e.unpack,
            S = Math.pow,
            Rr = Math.sign;
          function Pr(e) {
            var t = Math.abs(e);
            return 0.0031308 < t ? (Rr(e) || 1) * (1.055 * S(t, 1 / 2.4) - 0.055) : 12.92 * e;
          }
          function Ar() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var r = (e = Br(e, "lch"))[0],
              n = e[1],
              a = e[2],
              n = (r = Ur(r, n, a))[0],
              a = r[1],
              r = r[2];
            return [(n = Gr(n, a, r))[0], n[1], n[2], 3 < e.length ? e[3] : 1];
          }
          var Tr = e.unpack,
            _r = e.type,
            c = l,
            jr = i,
            b = o,
            Dr = $e,
            Mr =
              ((jr.prototype.oklab = function () {
                return Dr(this._rgb);
              }),
              (c.oklab = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(jr, [null].concat(e, ["oklab"])))();
              }),
              (b.format.oklab = xr),
              b.autodetect.push({
                p: 3,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = Tr(e, "oklab")), "array" === _r(e) && 3 === e.length)) return "oklab";
                },
              }),
              e.unpack),
            $r = $e,
            Fr = Ae,
            Br = e.unpack,
            Ur = Te,
            Gr = xr,
            Hr = e.unpack,
            Vr = e.type,
            c = l,
            qr = i,
            b = o,
            Kr = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              var r = Mr(e, "rgb"),
                n = r[0],
                a = r[1],
                r = r[2],
                n = $r(n, a, r),
                a = n[0],
                r = n[1],
                n = n[2];
              return Fr(a, r, n);
            },
            zr =
              ((qr.prototype.oklch = function () {
                return Kr(this._rgb);
              }),
              (c.oklch = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                return new (Function.prototype.bind.apply(qr, [null].concat(e, ["oklch"])))();
              }),
              (b.format.oklch = Ar),
              b.autodetect.push({
                p: 3,
                test: function () {
                  for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                  if (((e = Hr(e, "oklch")), "array" === Vr(e) && 3 === e.length)) return "oklch";
                },
              }),
              i),
            Jr = e.type;
          zr.prototype.alpha = function (e, t) {
            return (
              void 0 === t && (t = !1),
              void 0 !== e && "number" === Jr(e)
                ? t
                  ? ((this._rgb[3] = e), this)
                  : new zr([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
                : this._rgb[3]
            );
          };
          i.prototype.clipped = function () {
            return this._rgb._clipped || !1;
          };
          var k = i,
            Wr = u;
          (k.prototype.darken = function (e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return (t[0] -= Wr.Kn * e), new k(t, "lab").alpha(this.alpha(), !0);
          }),
            (k.prototype.brighten = function (e) {
              return this.darken(-(e = void 0 === e ? 1 : e));
            }),
            (k.prototype.darker = k.prototype.darken),
            (k.prototype.brighter = k.prototype.brighten);
          function Xr(e, t, r) {
            void 0 === r && (r = 0.5);
            for (var n = [], a = arguments.length - 3; 0 < a--; ) n[a] = arguments[a + 3];
            var o = n[0] || "lrgb";
            if ((C[o] || n.length || (o = Object.keys(C)[0]), C[o]))
              return (
                "object" !== an(e) && (e = new nn(e)),
                "object" !== an(t) && (t = new nn(t)),
                C[o](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()))
              );
            throw new Error("interpolation mode " + o + " is not defined");
          }
          function O(e, t, r, n) {
            var a, o, i, s, l, c, u, p, d, h;
            return (
              "hsl" === n
                ? ((h = e.hsl()), (a = t.hsl()))
                : "hsv" === n
                ? ((h = e.hsv()), (a = t.hsv()))
                : "hcg" === n
                ? ((h = e.hcg()), (a = t.hcg()))
                : "hsi" === n
                ? ((h = e.hsi()), (a = t.hsi()))
                : "lch" === n || "hcl" === n
                ? ((n = "hcl"), (h = e.hcl()), (a = t.hcl()))
                : "oklch" === n && ((h = e.oklch().reverse()), (a = t.oklch().reverse())),
              ("h" !== n.substr(0, 1) && "oklch" !== n) ||
                ((o = (e = h)[0]), (s = e[1]), (c = e[2]), (i = (t = a)[0]), (l = t[1]), (u = t[2])),
              isNaN(o) || isNaN(i)
                ? isNaN(o)
                  ? isNaN(i)
                    ? (d = Number.NaN)
                    : ((d = i), (1 != c && 0 != c) || "hsv" == n || (p = l))
                  : ((d = o), (1 != u && 0 != u) || "hsv" == n || (p = s))
                : (d = o + r * (o < i && 180 < i - o ? i - (o + 360) : i < o && 180 < o - i ? i + 360 - o : i - o)),
              void 0 === p && (p = s + r * (l - s)),
              (h = c + r * (u - c)),
              new gn("oklch" === n ? [h, p, d] : [d, p, h], n)
            );
          }
          function Yr(e, t, r) {
            return vn(e, t, r, "lch");
          }
          function Qr(c) {
            function r(e) {
              if (
                ((e = e || ["#fff", "#000"]) &&
                  "string" === L(e) &&
                  x.brewer &&
                  x.brewer[e.toLowerCase()] &&
                  (e = x.brewer[e.toLowerCase()]),
                "array" === L(e))
              ) {
                e = (e = 1 === e.length ? [e[0], e[0]] : e).slice(0);
                for (var t = 0; t < e.length; t++) e[t] = x(e[t]);
                for (var r = (l.length = 0); r < e.length; r++) l.push(r / (e.length - 1));
              }
              n(), (m = e);
            }
            function u(e, t) {
              var r, n;
              if ((null == t && (t = !1), isNaN(e) || null === e)) return s;
              if (
                ((n = t ? e : f && 2 < f.length ? w(e) / (f.length - 2) : v !== g ? (e - g) / (v - g) : 1),
                (n = k(n)),
                t || (n = S(n)),
                1 !== E && (n = Tn(n, E)),
                (n = h[0] + n * (1 - h[0] - h[1])),
                (n = Math.min(1, Math.max(0, n))),
                (e = Math.floor(1e4 * n)),
                y && b[e])
              )
                r = b[e];
              else {
                if ("array" === L(m))
                  for (var a = 0; a < l.length; a++) {
                    var o = l[a];
                    if (n <= o) {
                      r = m[a];
                      break;
                    }
                    if (o <= n && a === l.length - 1) {
                      r = m[a];
                      break;
                    }
                    if (o < n && n < l[a + 1]) {
                      (n = (n - o) / (l[a + 1] - o)), (r = x.interpolate(m[a], m[a + 1], n, i));
                      break;
                    }
                  }
                else "function" === L(m) && (r = m(n));
                y && (b[e] = r);
              }
              return r;
            }
            function n() {
              b = {};
            }
            function p(e) {
              return (e = x(u(e))), a && e[a] ? e[a]() : e;
            }
            var i = "rgb",
              s = x("#ccc"),
              t = 0,
              d = [0, 1],
              l = [],
              h = [0, 0],
              f = !1,
              m = [],
              a = !1,
              g = 0,
              v = 1,
              b = {},
              y = !0,
              E = 1,
              w = function (e) {
                if (null == f) return 0;
                for (var t = f.length - 1, r = 0; r < t && e >= f[r]; ) r++;
                return r - 1;
              },
              S = function (e) {
                return e;
              },
              k = function (e) {
                return e;
              };
            return (
              r(c),
              (p.classes = function (e) {
                var t;
                return null != e
                  ? ("array" === L(e)
                      ? (d = [(f = e)[0], e[e.length - 1]])
                      : ((t = x.analyze(d)), (f = 0 === e ? [t.min, t.max] : x.limits(t, "e", e))),
                    p)
                  : f;
              }),
              (p.domain = function (r) {
                if (!arguments.length) return d;
                (g = r[0]), (v = r[r.length - 1]), (l = []);
                var e = m.length;
                if (r.length === e && g !== v)
                  for (var t = 0, n = Array.from(r); t < n.length; t += 1) {
                    var a = n[t];
                    l.push((a - g) / (v - g));
                  }
                else {
                  for (var o, i, s = 0; s < e; s++) l.push(s / (e - 1));
                  2 < r.length &&
                    ((o = r.map(function (e, t) {
                      return t / (r.length - 1);
                    })),
                    (i = r.map(function (e) {
                      return (e - g) / (v - g);
                    })).every(function (e, t) {
                      return o[t] === e;
                    }) ||
                      (k = function (e) {
                        if (e <= 0 || 1 <= e) return e;
                        for (var t = 0; e >= i[t + 1]; ) t++;
                        var r = (e - i[t]) / (i[t + 1] - i[t]);
                        return o[t] + r * (o[t + 1] - o[t]);
                      }));
                }
                return (d = [g, v]), p;
              }),
              (p.mode = function (e) {
                return arguments.length ? ((i = e), n(), p) : i;
              }),
              (p.range = function (e, t) {
                return r(e), p;
              }),
              (p.out = function (e) {
                return (a = e), p;
              }),
              (p.spread = function (e) {
                return arguments.length ? ((t = e), p) : t;
              }),
              (p.correctLightness = function (e) {
                return (
                  n(),
                  (S = (e = null == e ? !0 : e)
                    ? function (e) {
                        for (
                          var t = u(0, !0).lab()[0],
                            r = u(1, !0).lab()[0],
                            n = r < t,
                            a = u(e, !0).lab()[0],
                            o = t + (r - t) * e,
                            i = a - o,
                            s = 0,
                            l = 1,
                            c = 20;
                          0.01 < Math.abs(i) && 0 < c--;

                        )
                          n && (i *= -1),
                            (e += i < 0 ? 0.5 * (l - (s = e)) : 0.5 * (s - (l = e))),
                            (a = u(e, !0).lab()[0]),
                            (i = a - o);
                        return e;
                      }
                    : function (e) {
                        return e;
                      }),
                  p
                );
              }),
              (p.padding = function (e) {
                return null != e ? ("number" === L(e) && (e = [e, e]), (h = e), p) : h;
              }),
              (p.colors = function (t, r) {
                arguments.length < 2 && (r = "hex");
                var e = [];
                if (0 === arguments.length) e = m.slice(0);
                else if (1 === t) e = [p(0.5)];
                else if (1 < t)
                  var n = d[0],
                    a = d[1] - n,
                    e = (function (e, t, r) {
                      for (
                        var n = [], a = e < t, o = r ? (a ? t + 1 : t - 1) : t, i = e;
                        a ? i < o : o < i;
                        a ? i++ : i--
                      )
                        n.push(i);
                      return n;
                    })(0, t, !1).map(function (e) {
                      return p(n + (e / (t - 1)) * a);
                    });
                else {
                  c = [];
                  var o = [];
                  if (f && 2 < f.length)
                    for (var i = 1, s = f.length, l = 1 <= s; l ? i < s : s < i; l ? i++ : i--)
                      o.push(0.5 * (f[i - 1] + f[i]));
                  else o = d;
                  e = o.map(p);
                }
                return (e = x[r]
                  ? e.map(function (e) {
                      return e[r]();
                    })
                  : e);
              }),
              (p.cache = function (e) {
                return null != e ? ((y = e), p) : y;
              }),
              (p.gamma = function (e) {
                return null != e ? ((E = e), p) : E;
              }),
              (p.nodata = function (e) {
                return null != e ? ((s = x(e)), p) : s;
              }),
              p
            );
          }
          i.prototype.get = function (e) {
            var e = e.split("."),
              t = e[0],
              e = e[1],
              r = this[t]();
            if (e) {
              var n = t.indexOf(e) - ("ok" === t.substr(0, 2) ? 2 : 0);
              if (-1 < n) return r[n];
              throw new Error("unknown channel " + e + " in mode " + t);
            }
            return r;
          };
          var N = i,
            Zr = e.type,
            en = Math.pow,
            tn =
              ((N.prototype.luminance = function (a) {
                var o, i, s, e;
                return void 0 !== a && "number" === Zr(a)
                  ? 0 === a
                    ? new N([0, 0, 0, this._rgb[3]], "rgb")
                    : 1 === a
                    ? new N([255, 255, 255, this._rgb[3]], "rgb")
                    : ((e = this.luminance()),
                      (o = "rgb"),
                      (i = 20),
                      (s = function (e, t) {
                        var r = e.interpolate(t, 0.5, o),
                          n = r.luminance();
                        return Math.abs(a - n) < 1e-7 || !i-- ? r : a < n ? s(e, r) : s(r, t);
                      }),
                      (e = (a < e ? s(new N([0, 0, 0]), this) : s(this, new N([255, 255, 255]))).rgb()),
                      new N(e.concat([this._rgb[3]])))
                  : tn.apply(void 0, this._rgb.slice(0, 3));
              }),
              function (e, t, r) {
                return 0.2126 * (e = rn(e)) + 0.7152 * (t = rn(t)) + 0.0722 * (r = rn(r));
              }),
            rn = function (e) {
              return (e /= 255) <= 0.03928 ? e / 12.92 : en((e + 0.055) / 1.055, 2.4);
            },
            o = {},
            nn = i,
            an = e.type,
            C = o,
            c = i,
            on = Xr,
            sn =
              ((c.prototype.mix = c.prototype.interpolate =
                function (e, t) {
                  void 0 === t && (t = 0.5);
                  for (var r = [], n = arguments.length - 2; 0 < n--; ) r[n] = arguments[n + 2];
                  return on.apply(void 0, [this, e, t].concat(r));
                }),
              i),
            ln =
              ((sn.prototype.premultiply = function (e) {
                var t = this._rgb,
                  r = t[3];
                return (e = void 0 === e ? !1 : e)
                  ? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this)
                  : new sn([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
              }),
              i),
            cn = u,
            un =
              ((ln.prototype.saturate = function (e) {
                void 0 === e && (e = 1);
                var t = this.lch();
                return (t[1] += cn.Kn * e), t[1] < 0 && (t[1] = 0), new ln(t, "lch").alpha(this.alpha(), !0);
              }),
              (ln.prototype.desaturate = function (e) {
                return this.saturate(-(e = void 0 === e ? 1 : e));
              }),
              i),
            pn = e.type,
            dn =
              ((un.prototype.set = function (e, t, r) {
                void 0 === r && (r = !1);
                var e = e.split("."),
                  n = e[0],
                  e = e[1],
                  a = this[n]();
                if (e) {
                  var o = n.indexOf(e) - ("ok" === n.substr(0, 2) ? 2 : 0);
                  if (-1 < o) {
                    if ("string" == pn(t))
                      switch (t.charAt(0)) {
                        case "+":
                        case "-":
                          a[o] += +t;
                          break;
                        case "*":
                          a[o] *= +t.substr(1);
                          break;
                        case "/":
                          a[o] /= +t.substr(1);
                          break;
                        default:
                          a[o] = +t;
                      }
                    else {
                      if ("number" !== pn(t)) throw new Error("unsupported value for Color.set");
                      a[o] = t;
                    }
                    var i = new un(a, n);
                    return r ? ((this._rgb = i._rgb), this) : i;
                  }
                  throw new Error("unknown channel " + e + " in mode " + n);
                }
                return a;
              }),
              i),
            hn =
              ((o.rgb = function (e, t, r) {
                (e = e._rgb), (t = t._rgb);
                return new dn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "rgb");
              }),
              i),
            fn = Math.sqrt,
            I = Math.pow,
            mn =
              ((o.lrgb = function (e, t, r) {
                var e = e._rgb,
                  n = e[0],
                  a = e[1],
                  e = e[2],
                  t = t._rgb,
                  o = t[0],
                  i = t[1],
                  t = t[2];
                return new hn(
                  fn(I(n, 2) * (1 - r) + I(o, 2) * r),
                  fn(I(a, 2) * (1 - r) + I(i, 2) * r),
                  fn(I(e, 2) * (1 - r) + I(t, 2) * r),
                  "rgb"
                );
              }),
              i),
            gn =
              ((o.lab = function (e, t, r) {
                (e = e.lab()), (t = t.lab());
                return new mn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "lab");
              }),
              i),
            vn = O,
            bn = ((o.lch = Yr), (o.hcl = Yr), i),
            yn =
              ((o.num = function (e, t, r) {
                (e = e.num()), (t = t.num());
                return new bn(e + r * (t - e), "num");
              }),
              O),
            En =
              ((o.hcg = function (e, t, r) {
                return yn(e, t, r, "hcg");
              }),
              O),
            wn =
              ((o.hsi = function (e, t, r) {
                return En(e, t, r, "hsi");
              }),
              O),
            Sn =
              ((o.hsl = function (e, t, r) {
                return wn(e, t, r, "hsl");
              }),
              O),
            kn =
              ((o.hsv = function (e, t, r) {
                return Sn(e, t, r, "hsv");
              }),
              i),
            On =
              ((o.oklab = function (e, t, r) {
                (e = e.oklab()), (t = t.oklab());
                return new kn(e[0] + r * (t[0] - e[0]), e[1] + r * (t[1] - e[1]), e[2] + r * (t[2] - e[2]), "oklab");
              }),
              O),
            Nn =
              ((o.oklch = function (e, t, r) {
                return On(e, t, r, "oklch");
              }),
              i),
            Cn = e.clip_rgb,
            In = Math.pow,
            xn = Math.sqrt,
            Ln = Math.PI,
            Rn = Math.cos,
            Pn = Math.sin,
            An = Math.atan2,
            x = l,
            L = e.type,
            Tn = Math.pow;
          for (
            var R = i,
              _n = Qr,
              jn = function (e) {
                for (var t = [1, 1], r = 1; r < e; r++) {
                  for (var n = [1], a = 1; a <= t.length; a++) n[a] = (t[a] || 0) + t[a - 1];
                  t = n;
                }
                return t;
              },
              Dn = l,
              P = function (e, t, r) {
                if (P[r]) return P[r](e, t);
                throw new Error("unknown blend mode " + r);
              },
              b = function (r) {
                return function (e, t) {
                  (t = Dn(t).rgb()), (e = Dn(e).rgb());
                  return Dn.rgb(r(t, e));
                };
              },
              c = function (n) {
                return function (e, t) {
                  var r = [];
                  return (r[0] = n(e[0], t[0])), (r[1] = n(e[1], t[1])), (r[2] = n(e[2], t[2])), r;
                };
              },
              u =
                ((P.normal = b(
                  c(function (e) {
                    return e;
                  })
                )),
                (P.multiply = b(
                  c(function (e, t) {
                    return (e * t) / 255;
                  })
                )),
                (P.screen = b(
                  c(function (e, t) {
                    return 255 * (1 - (1 - e / 255) * (1 - t / 255));
                  })
                )),
                (P.overlay = b(
                  c(function (e, t) {
                    return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
                  })
                )),
                (P.darken = b(
                  c(function (e, t) {
                    return t < e ? t : e;
                  })
                )),
                (P.lighten = b(
                  c(function (e, t) {
                    return t < e ? e : t;
                  })
                )),
                (P.dodge = b(
                  c(function (e, t) {
                    return 255 === e || 255 < (e = ((t / 255) * 255) / (1 - e / 255)) ? 255 : e;
                  })
                )),
                (P.burn = b(
                  c(function (e, t) {
                    return 255 * (1 - (1 - t / 255) / (e / 255));
                  })
                )),
                P),
              Mn = e.type,
              $n = e.clip_rgb,
              Fn = e.TWOPI,
              Bn = Math.pow,
              Un = Math.sin,
              Gn = Math.cos,
              Hn = l,
              Vn = i,
              qn = Math.floor,
              Kn = Math.random,
              zn = r,
              Jn = Math.log,
              Wn = Math.pow,
              Xn = Math.floor,
              Yn = Math.abs,
              Qn = function (e, t) {
                void 0 === t && (t = null);
                var r = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 };
                return (
                  (e = "object" === zn(e) ? Object.values(e) : e).forEach(function (e) {
                    null == (e = t && "object" === zn(e) ? e[t] : e) ||
                      isNaN(e) ||
                      (r.values.push(e),
                      (r.sum += e),
                      e < r.min && (r.min = e),
                      e > r.max && (r.max = e),
                      (r.count += 1));
                  }),
                  (r.domain = [r.min, r.max]),
                  (r.limits = function (e, t) {
                    return Zn(r, e, t);
                  }),
                  r
                );
              },
              Zn = function (e, t, r) {
                void 0 === t && (t = "equal"), void 0 === r && (r = 7);
                var n = (e = "array" == zn(e) ? Qn(e) : e).min,
                  a = e.max,
                  o = e.values.sort(function (e, t) {
                    return e - t;
                  });
                if (1 === r) return [n, a];
                var i = [];
                if (("c" === t.substr(0, 1) && (i.push(n), i.push(a)), "e" === t.substr(0, 1))) {
                  i.push(n);
                  for (var s = 1; s < r; s++) i.push(n + (s / r) * (a - n));
                  i.push(a);
                } else if ("l" === t.substr(0, 1)) {
                  if (n <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                  var l = Math.LOG10E * Jn(n),
                    D = Math.LOG10E * Jn(a);
                  i.push(n);
                  for (var c = 1; c < r; c++) i.push(Wn(10, l + (c / r) * (D - l)));
                  i.push(a);
                } else if ("q" === t.substr(0, 1)) {
                  i.push(n);
                  for (var u = 1; u < r; u++) {
                    var p = ((o.length - 1) * u) / r,
                      d = Xn(p);
                    d === p ? i.push(o[d]) : i.push(o[d] * (1 - (p = p - d)) + o[d + 1] * p);
                  }
                  i.push(a);
                } else if ("k" === t.substr(0, 1)) {
                  var h,
                    f = o.length,
                    m = new Array(f),
                    g = new Array(r),
                    v = !0,
                    M = 0,
                    b = null;
                  (b = []).push(n);
                  for (var y = 1; y < r; y++) b.push(n + (y / r) * (a - n));
                  for (b.push(a); v; ) {
                    for (var E = 0; E < r; E++) g[E] = 0;
                    for (var w = 0; w < f; w++)
                      for (var $ = o[w], F = Number.MAX_VALUE, S = void 0, k = 0; k < r; k++) {
                        var B = Yn(b[k] - $);
                        B < F && ((F = B), (S = k)), g[S]++, (m[w] = S);
                      }
                    for (var O = new Array(r), N = 0; N < r; N++) O[N] = null;
                    for (var C = 0; C < f; C++) null === O[(h = m[C])] ? (O[h] = o[C]) : (O[h] += o[C]);
                    for (var I = 0; I < r; I++) O[I] *= 1 / g[I];
                    for (var v = !1, x = 0; x < r; x++)
                      if (O[x] !== b[x]) {
                        v = !0;
                        break;
                      }
                    (b = O), 200 < ++M && (v = !1);
                  }
                  for (var L = {}, R = 0; R < r; R++) L[R] = [];
                  for (var P = 0; P < f; P++) L[(h = m[P])].push(o[P]);
                  for (var A = [], T = 0; T < r; T++) A.push(L[T][0]), A.push(L[T][L[T].length - 1]);
                  (A = A.sort(function (e, t) {
                    return e - t;
                  })),
                    i.push(A[0]);
                  for (var _ = 1; _ < A.length; _ += 2) {
                    var j = A[_];
                    isNaN(j) || -1 !== i.indexOf(j) || i.push(j);
                  }
                }
                return i;
              },
              o = Qn,
              b = Zn,
              ea = i,
              ta = i,
              A = Math.sqrt,
              T = Math.pow,
              ra = Math.min,
              na = Math.max,
              aa = Math.atan2,
              oa = Math.abs,
              _ = Math.cos,
              ia = Math.sin,
              sa = Math.exp,
              la = Math.PI,
              ca = i,
              ua = i,
              pa = l,
              da = Qr,
              c = {
                cool: function () {
                  return da([pa.hsl(180, 1, 0.9), pa.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                  return da(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                },
              },
              j = {
                OrRd: [
                  "#fff7ec",
                  "#fee8c8",
                  "#fdd49e",
                  "#fdbb84",
                  "#fc8d59",
                  "#ef6548",
                  "#d7301f",
                  "#b30000",
                  "#7f0000",
                ],
                PuBu: [
                  "#fff7fb",
                  "#ece7f2",
                  "#d0d1e6",
                  "#a6bddb",
                  "#74a9cf",
                  "#3690c0",
                  "#0570b0",
                  "#045a8d",
                  "#023858",
                ],
                BuPu: [
                  "#f7fcfd",
                  "#e0ecf4",
                  "#bfd3e6",
                  "#9ebcda",
                  "#8c96c6",
                  "#8c6bb1",
                  "#88419d",
                  "#810f7c",
                  "#4d004b",
                ],
                Oranges: [
                  "#fff5eb",
                  "#fee6ce",
                  "#fdd0a2",
                  "#fdae6b",
                  "#fd8d3c",
                  "#f16913",
                  "#d94801",
                  "#a63603",
                  "#7f2704",
                ],
                BuGn: [
                  "#f7fcfd",
                  "#e5f5f9",
                  "#ccece6",
                  "#99d8c9",
                  "#66c2a4",
                  "#41ae76",
                  "#238b45",
                  "#006d2c",
                  "#00441b",
                ],
                YlOrBr: [
                  "#ffffe5",
                  "#fff7bc",
                  "#fee391",
                  "#fec44f",
                  "#fe9929",
                  "#ec7014",
                  "#cc4c02",
                  "#993404",
                  "#662506",
                ],
                YlGn: [
                  "#ffffe5",
                  "#f7fcb9",
                  "#d9f0a3",
                  "#addd8e",
                  "#78c679",
                  "#41ab5d",
                  "#238443",
                  "#006837",
                  "#004529",
                ],
                Reds: [
                  "#fff5f0",
                  "#fee0d2",
                  "#fcbba1",
                  "#fc9272",
                  "#fb6a4a",
                  "#ef3b2c",
                  "#cb181d",
                  "#a50f15",
                  "#67000d",
                ],
                RdPu: [
                  "#fff7f3",
                  "#fde0dd",
                  "#fcc5c0",
                  "#fa9fb5",
                  "#f768a1",
                  "#dd3497",
                  "#ae017e",
                  "#7a0177",
                  "#49006a",
                ],
                Greens: [
                  "#f7fcf5",
                  "#e5f5e0",
                  "#c7e9c0",
                  "#a1d99b",
                  "#74c476",
                  "#41ab5d",
                  "#238b45",
                  "#006d2c",
                  "#00441b",
                ],
                YlGnBu: [
                  "#ffffd9",
                  "#edf8b1",
                  "#c7e9b4",
                  "#7fcdbb",
                  "#41b6c4",
                  "#1d91c0",
                  "#225ea8",
                  "#253494",
                  "#081d58",
                ],
                Purples: [
                  "#fcfbfd",
                  "#efedf5",
                  "#dadaeb",
                  "#bcbddc",
                  "#9e9ac8",
                  "#807dba",
                  "#6a51a3",
                  "#54278f",
                  "#3f007d",
                ],
                GnBu: [
                  "#f7fcf0",
                  "#e0f3db",
                  "#ccebc5",
                  "#a8ddb5",
                  "#7bccc4",
                  "#4eb3d3",
                  "#2b8cbe",
                  "#0868ac",
                  "#084081",
                ],
                Greys: [
                  "#ffffff",
                  "#f0f0f0",
                  "#d9d9d9",
                  "#bdbdbd",
                  "#969696",
                  "#737373",
                  "#525252",
                  "#252525",
                  "#000000",
                ],
                YlOrRd: [
                  "#ffffcc",
                  "#ffeda0",
                  "#fed976",
                  "#feb24c",
                  "#fd8d3c",
                  "#fc4e2a",
                  "#e31a1c",
                  "#bd0026",
                  "#800026",
                ],
                PuRd: [
                  "#f7f4f9",
                  "#e7e1ef",
                  "#d4b9da",
                  "#c994c7",
                  "#df65b0",
                  "#e7298a",
                  "#ce1256",
                  "#980043",
                  "#67001f",
                ],
                Blues: [
                  "#f7fbff",
                  "#deebf7",
                  "#c6dbef",
                  "#9ecae1",
                  "#6baed6",
                  "#4292c6",
                  "#2171b5",
                  "#08519c",
                  "#08306b",
                ],
                PuBuGn: [
                  "#fff7fb",
                  "#ece2f0",
                  "#d0d1e6",
                  "#a6bddb",
                  "#67a9cf",
                  "#3690c0",
                  "#02818a",
                  "#016c59",
                  "#014636",
                ],
                Viridis: [
                  "#440154",
                  "#482777",
                  "#3f4a8a",
                  "#31678e",
                  "#26838f",
                  "#1f9d8a",
                  "#6cce5a",
                  "#b6de2b",
                  "#fee825",
                ],
                Spectral: [
                  "#9e0142",
                  "#d53e4f",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#e6f598",
                  "#abdda4",
                  "#66c2a5",
                  "#3288bd",
                  "#5e4fa2",
                ],
                RdYlGn: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#d9ef8b",
                  "#a6d96a",
                  "#66bd63",
                  "#1a9850",
                  "#006837",
                ],
                RdBu: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#f7f7f7",
                  "#d1e5f0",
                  "#92c5de",
                  "#4393c3",
                  "#2166ac",
                  "#053061",
                ],
                PiYG: [
                  "#8e0152",
                  "#c51b7d",
                  "#de77ae",
                  "#f1b6da",
                  "#fde0ef",
                  "#f7f7f7",
                  "#e6f5d0",
                  "#b8e186",
                  "#7fbc41",
                  "#4d9221",
                  "#276419",
                ],
                PRGn: [
                  "#40004b",
                  "#762a83",
                  "#9970ab",
                  "#c2a5cf",
                  "#e7d4e8",
                  "#f7f7f7",
                  "#d9f0d3",
                  "#a6dba0",
                  "#5aae61",
                  "#1b7837",
                  "#00441b",
                ],
                RdYlBu: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee090",
                  "#ffffbf",
                  "#e0f3f8",
                  "#abd9e9",
                  "#74add1",
                  "#4575b4",
                  "#313695",
                ],
                BrBG: [
                  "#543005",
                  "#8c510a",
                  "#bf812d",
                  "#dfc27d",
                  "#f6e8c3",
                  "#f5f5f5",
                  "#c7eae5",
                  "#80cdc1",
                  "#35978f",
                  "#01665e",
                  "#003c30",
                ],
                RdGy: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#ffffff",
                  "#e0e0e0",
                  "#bababa",
                  "#878787",
                  "#4d4d4d",
                  "#1a1a1a",
                ],
                PuOr: [
                  "#7f3b08",
                  "#b35806",
                  "#e08214",
                  "#fdb863",
                  "#fee0b6",
                  "#f7f7f7",
                  "#d8daeb",
                  "#b2abd2",
                  "#8073ac",
                  "#542788",
                  "#2d004b",
                ],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: [
                  "#e41a1c",
                  "#377eb8",
                  "#4daf4a",
                  "#984ea3",
                  "#ff7f00",
                  "#ffff33",
                  "#a65628",
                  "#f781bf",
                  "#999999",
                ],
                Set3: [
                  "#8dd3c7",
                  "#ffffb3",
                  "#bebada",
                  "#fb8072",
                  "#80b1d3",
                  "#fdb462",
                  "#b3de69",
                  "#fccde5",
                  "#d9d9d9",
                  "#bc80bd",
                  "#ccebc5",
                  "#ffed6f",
                ],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: [
                  "#a6cee3",
                  "#1f78b4",
                  "#b2df8a",
                  "#33a02c",
                  "#fb9a99",
                  "#e31a1c",
                  "#fdbf6f",
                  "#ff7f00",
                  "#cab2d6",
                  "#6a3d9a",
                  "#ffff99",
                  "#b15928",
                ],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: [
                  "#fbb4ae",
                  "#b3cde3",
                  "#ccebc5",
                  "#decbe4",
                  "#fed9a6",
                  "#ffffcc",
                  "#e5d8bd",
                  "#fddaec",
                  "#f2f2f2",
                ],
              },
              ha = 0,
              fa = Object.keys(j);
            ha < fa.length;
            ha += 1
          ) {
            var ma = fa[ha];
            j[ma.toLowerCase()] = j[ma];
          }
          (e = j), (i = l);
          return (
            (i.average = function (e, o, i) {
              void 0 === o && (o = "lrgb"), void 0 === i && (i = null);
              var t = e.length,
                r =
                  t /
                  (i =
                    i ||
                    Array.from(new Array(t)).map(function () {
                      return 1;
                    })).reduce(function (e, t) {
                    return e + t;
                  });
              if (
                (i.forEach(function (e, t) {
                  i[t] *= r;
                }),
                (e = e.map(function (e) {
                  return new Nn(e);
                })),
                "lrgb" === o)
              ) {
                for (var n = e, a = i, s = n.length, l = [0, 0, 0, 0], c = 0; c < n.length; c++) {
                  var u = n[c];
                  var p = a[c] / s;
                  u = u._rgb;
                  l[0] += In(u[0], 2) * p;
                  l[1] += In(u[1], 2) * p;
                  l[2] += In(u[2], 2) * p;
                  l[3] += u[3] * p;
                }
                if (((l[0] = xn(l[0])), (l[1] = xn(l[1])), (l[2] = xn(l[2])), l[3] > 0.9999999)) l[3] = 1;
                return new Nn(Cn(l));
              }
              for (var d, h = e.shift(), f = h.get(o), m = [], g = 0, v = 0, b = 0; b < f.length; b++)
                (f[b] = (f[b] || 0) * i[0]),
                  m.push(isNaN(f[b]) ? 0 : i[0]),
                  "h" !== o.charAt(b) ||
                    isNaN(f[b]) ||
                    ((d = (f[b] / 180) * Ln), (g += Rn(d) * i[0]), (v += Pn(d) * i[0]));
              var y = h.alpha() * i[0];
              e.forEach(function (e, t) {
                var r = e.get(o);
                y += e.alpha() * i[t + 1];
                for (var n, a = 0; a < f.length; a++)
                  isNaN(r[a]) ||
                    ((m[a] += i[t + 1]),
                    "h" === o.charAt(a)
                      ? ((n = (r[a] / 180) * Ln), (g += Rn(n) * i[t + 1]), (v += Pn(n) * i[t + 1]))
                      : (f[a] += r[a] * i[t + 1]));
              });
              for (var E = 0; E < f.length; E++)
                if ("h" === o.charAt(E)) {
                  for (var w = (An(v / m[E], g / m[E]) / Ln) * 180; w < 0; ) w += 360;
                  for (; 360 <= w; ) w -= 360;
                  f[E] = w;
                } else f[E] = f[E] / m[E];
              return (y /= t), new Nn(f, o).alpha(0.99999 < y ? 1 : y, !0);
            }),
            (i.bezier = function (e) {
              var t = (function (e) {
                if (
                  2 ===
                  (e = e.map(function (e) {
                    return new R(e);
                  })).length
                )
                  (i = e.map(function (e) {
                    return e.lab();
                  })),
                    (r = i[0]),
                    (n = i[1]),
                    (i = function (t) {
                      var e = [0, 1, 2].map(function (e) {
                        return r[e] + t * (n[e] - r[e]);
                      });
                      return new R(e, "lab");
                    });
                else if (3 === e.length)
                  (t = e.map(function (e) {
                    return e.lab();
                  })),
                    (r = t[0]),
                    (n = t[1]),
                    (a = t[2]),
                    (i = function (t) {
                      var e = [0, 1, 2].map(function (e) {
                        return (1 - t) * (1 - t) * r[e] + 2 * (1 - t) * t * n[e] + t * t * a[e];
                      });
                      return new R(e, "lab");
                    });
                else if (4 === e.length)
                  var t,
                    r = (t = e.map(function (e) {
                      return e.lab();
                    }))[0],
                    n = t[1],
                    a = t[2],
                    o = t[3],
                    i = function (t) {
                      var e = [0, 1, 2].map(function (e) {
                        return (
                          (1 - t) * (1 - t) * (1 - t) * r[e] +
                          3 * (1 - t) * (1 - t) * t * n[e] +
                          3 * (1 - t) * t * t * a[e] +
                          t * t * t * o[e]
                        );
                      });
                      return new R(e, "lab");
                    };
                else {
                  if (!(5 <= e.length)) throw new RangeError("No point in running bezier with only one color.");
                  var s = e.map(function (e) {
                      return e.lab();
                    }),
                    l = e.length - 1,
                    c = jn(l);
                  i = function (a) {
                    var o = 1 - a,
                      e = [0, 1, 2].map(function (n) {
                        return s.reduce(function (e, t, r) {
                          return e + c[r] * Math.pow(o, l - r) * Math.pow(a, r) * t[n];
                        }, 0);
                      });
                    return new R(e, "lab");
                  };
                }
                return i;
              })(e);
              return (
                (t.scale = function () {
                  return _n(t);
                }),
                t
              );
            }),
            (i.blend = u),
            (i.cubehelix = function (a, o, i, s, l) {
              void 0 === a && (a = 300), void 0 === o && (o = -1.5), void 0 === i && (i = 1), void 0 === s && (s = 1);
              function t(e) {
                var t = Fn * ((a + 120) / 360 + o * e),
                  r = Bn(l[0] + c * e, s),
                  e = ((0 !== u ? i[0] + e * u : i) * r * (1 - r)) / 2,
                  n = Gn(t),
                  t = Un(t);
                return Hn(
                  $n([
                    255 * (r + e * (-0.14861 * n + 1.78277 * t)),
                    255 * (r + e * (-0.29227 * n - 0.90649 * t)),
                    255 * (r + 1.97294 * n * e),
                    1,
                  ])
                );
              }
              var c,
                u = 0;
              "array" === Mn((l = void 0 === l ? [0, 1] : l)) ? (c = l[1] - l[0]) : ((c = 0), (l = [l, l]));
              return (
                (t.start = function (e) {
                  return null == e ? a : ((a = e), t);
                }),
                (t.rotations = function (e) {
                  return null == e ? o : ((o = e), t);
                }),
                (t.gamma = function (e) {
                  return null == e ? s : ((s = e), t);
                }),
                (t.hue = function (e) {
                  return null == e ? i : ("array" === Mn((i = e)) ? 0 === (u = i[1] - i[0]) && (i = i[1]) : (u = 0), t);
                }),
                (t.lightness = function (e) {
                  return null == e ? l : ((c = "array" === Mn(e) ? (l = e)[1] - e[0] : ((l = [e, e]), 0)), t);
                }),
                (t.scale = function () {
                  return Hn.scale(t);
                }),
                t.hue(i),
                t
              );
            }),
            (i.mix = i.interpolate = Xr),
            (i.random = function () {
              for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(qn(16 * Kn()));
              return new Vn(e, "hex");
            }),
            (i.scale = Qr),
            (i.analyze = o),
            (i.contrast = function (e, t) {
              (e = new ea(e)), (t = new ea(t));
              (e = e.luminance()), (t = t.luminance());
              return t < e ? (e + 0.05) / (t + 0.05) : (t + 0.05) / (e + 0.05);
            }),
            (i.deltaE = function (e, t, r, n, a) {
              void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === a && (a = 1);
              function o(e) {
                return (360 * e) / (2 * la);
              }
              function i(e) {
                return (2 * la * e) / 360;
              }
              (e = new ta(e)), (t = new ta(t));
              var e = Array.from(e.lab()),
                s = e[0],
                l = e[1],
                e = e[2],
                t = Array.from(t.lab()),
                c = t[0],
                u = t[1],
                t = t[2],
                p = (s + c) / 2,
                d = (A(T(l, 2) + T(e, 2)) + A(T(u, 2) + T(t, 2))) / 2,
                d = 0.5 * (1 - A(T(d, 7) / (T(d, 7) + T(25, 7)))),
                l = l * (1 + d),
                u = u * (1 + d),
                d = A(T(l, 2) + T(e, 2)),
                h = A(T(u, 2) + T(t, 2)),
                f = (d + h) / 2,
                e = o(aa(e, l)),
                l = o(aa(t, u)),
                t = 0 <= e ? e : e + 360,
                u = 0 <= l ? l : l + 360,
                e = 180 < oa(t - u) ? (t + u + 360) / 2 : (t + u) / 2,
                l = 1 - 0.17 * _(i(e - 30)) + 0.24 * _(i(2 * e)) + 0.32 * _(i(3 * e + 6)) - 0.2 * _(i(4 * e - 63)),
                m = oa((m = u - t)) <= 180 ? m : u <= t ? m + 360 : m - 360,
                u = ((m = 2 * A(d * h) * ia(i(m) / 2)), c - s),
                t = h - d,
                c = 1 + (0.015 * T(p - 50, 2)) / A(20 + T(p - 50, 2)),
                s = 1 + 0.045 * f,
                h = 1 + 0.015 * f * l,
                d = 30 * sa(-T((e - 275) / 25, 2)),
                p = -(2 * A(T(f, 7) / (T(f, 7) + T(25, 7)))) * ia(2 * i(d)),
                l = A(T(u / (r * c), 2) + T(t / (n * s), 2) + T(m / (a * h), 2) + (t / (n * s)) * p * (m / (a * h)));
              return na(0, ra(100, l));
            }),
            (i.distance = function (e, t, r) {
              void 0 === r && (r = "lab"), (e = new ca(e)), (t = new ca(t));
              var n,
                a = e.get(r),
                o = t.get(r),
                i = 0;
              for (n in a) {
                var s = (a[n] || 0) - (o[n] || 0);
                i += s * s;
              }
              return Math.sqrt(i);
            }),
            (i.limits = b),
            (i.valid = function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              try {
                return new (Function.prototype.bind.apply(ua, [null].concat(e)))(), !0;
              } catch (e) {
                return !1;
              }
            }),
            (i.scales = c),
            (i.colors = g),
            (i.brewer = e),
            i
          );
        }),
          "object" == typeof (e = e) && void 0 !== t
            ? (t.exports = r())
            : "function" == typeof define && define.amd
            ? define(r)
            : ((e = "undefined" != typeof globalThis ? globalThis : e || self).chroma = r());
      },
    }),
    Ue = e({
      "node_modules/react-simple-code-editor/lib/index.js"(e) {
        "use strict";
        var n,
          t,
          r =
            (e && e.__extends) ||
            ((n = function (e, t) {
              return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
              function r() {
                this.constructor = e;
              }
              n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
            }),
          S =
            (e && e.__assign) ||
            function () {
              return (S =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }).apply(this, arguments);
            },
          a =
            (e && e.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r);
                  var a = Object.getOwnPropertyDescriptor(t, r);
                  (a && ("get" in a ? t.__esModule : !a.writable && !a.configurable)) ||
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }),
                    Object.defineProperty(e, n, a);
                }
              : function (e, t, r, n) {
                  e[(n = void 0 === n ? r : n)] = t[r];
                }),
          o =
            (e && e.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (e && e.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
              return o(t, e), t;
            },
          k =
            (e && e.__rest) ||
            function (e, t) {
              var r = {};
              for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
              if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
                  t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
              return r;
            },
          O = (Object.defineProperty(e, "__esModule", { value: !0 }), i(b("react"))),
          g = "undefined" != typeof window && "navigator" in window && /Win/i.test(navigator.platform),
          v =
            "undefined" != typeof window && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
          N = "npm__react-simple-code-editor__textarea",
          C = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n."
            .concat(
              N,
              ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  ."
            )
            .concat(N, " {\n    color: transparent !important;\n  }\n\n  .")
            .concat(
              N,
              "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"
            ),
          i =
            ((t = O.Component),
            r(s, t),
            (s.prototype.componentDidMount = function () {
              this._recordCurrentState();
            }),
            Object.defineProperty(s.prototype, "session", {
              get: function () {
                return { history: this._history };
              },
              set: function (e) {
                this._history = e.history;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (s.prototype.render = function () {
              var t = this,
                e = this.props,
                r = e.value,
                n = e.style,
                a = e.padding,
                o = e.highlight,
                i = e.textareaId,
                s = e.textareaClassName,
                l = e.autoFocus,
                c = e.disabled,
                u = e.form,
                p = e.maxLength,
                d = e.minLength,
                h = e.name,
                f = e.placeholder,
                m = e.readOnly,
                g = e.required,
                v = e.onClick,
                b = e.onFocus,
                y = e.onBlur,
                E = e.onKeyUp,
                w = (e.onKeyDown, e.onValueChange, e.tabSize, e.insertSpaces, e.ignoreTabKey, e.preClassName),
                e = k(e, [
                  "value",
                  "style",
                  "padding",
                  "highlight",
                  "textareaId",
                  "textareaClassName",
                  "autoFocus",
                  "disabled",
                  "form",
                  "maxLength",
                  "minLength",
                  "name",
                  "placeholder",
                  "readOnly",
                  "required",
                  "onClick",
                  "onFocus",
                  "onBlur",
                  "onKeyUp",
                  "onKeyDown",
                  "onValueChange",
                  "tabSize",
                  "insertSpaces",
                  "ignoreTabKey",
                  "preClassName",
                ]),
                a = {
                  paddingTop: "object" == typeof a ? a.top : a,
                  paddingRight: "object" == typeof a ? a.right : a,
                  paddingBottom: "object" == typeof a ? a.bottom : a,
                  paddingLeft: "object" == typeof a ? a.left : a,
                },
                o = o(r);
              return O.createElement(
                "div",
                S({}, e, { style: S(S({}, I.container), n) }),
                O.createElement(
                  "pre",
                  S(
                    { className: w, "aria-hidden": "true", style: S(S(S({}, I.editor), I.highlight), a) },
                    "string" == typeof o ? { dangerouslySetInnerHTML: { __html: o + "<br />" } } : { children: o }
                  )
                ),
                O.createElement("textarea", {
                  ref: function (e) {
                    return (t._input = e);
                  },
                  style: S(S(S({}, I.editor), I.textarea), a),
                  className: N + (s ? " ".concat(s) : ""),
                  id: i,
                  value: r,
                  onChange: this._handleChange,
                  onKeyDown: this._handleKeyDown,
                  onClick: v,
                  onKeyUp: E,
                  onFocus: b,
                  onBlur: y,
                  disabled: c,
                  form: u,
                  maxLength: p,
                  minLength: d,
                  name: h,
                  placeholder: f,
                  readOnly: m,
                  required: g,
                  autoFocus: l,
                  autoCapitalize: "off",
                  autoComplete: "off",
                  autoCorrect: "off",
                  spellCheck: !1,
                  "data-gramm": !1,
                }),
                O.createElement("style", { dangerouslySetInnerHTML: { __html: C } })
              );
            }),
            (s.defaultProps = { tabSize: 2, insertSpaces: !0, ignoreTabKey: !1, padding: 0 }),
            s);
        function s() {
          var m = (null !== t && t.apply(this, arguments)) || this;
          return (
            (m.state = { capture: !0 }),
            (m._recordCurrentState = function () {
              var e,
                t,
                r = m._input;
              r &&
                ((e = r.value),
                (t = r.selectionStart),
                (r = r.selectionEnd),
                m._recordChange({ value: e, selectionStart: t, selectionEnd: r }));
            }),
            (m._getLines = function (e, t) {
              return e.substring(0, t).split("\n");
            }),
            (m._recordChange = function (e, t) {
              void 0 === t && (t = !1);
              var r = m._history,
                n = r.stack,
                r = r.offset,
                r =
                  (n.length &&
                    -1 < r &&
                    ((m._history.stack = n.slice(0, r + 1)),
                    100 < (r = m._history.stack.length) &&
                      ((m._history.stack = n.slice((n = r - 100), r)),
                      (m._history.offset = Math.max(m._history.offset - n, 0)))),
                  Date.now());
              if (t) {
                var n = m._history.stack[m._history.offset];
                if (n && r - n.timestamp < 3e3) {
                  var t = /[^a-z0-9]([a-z0-9]+)$/i,
                    n = null == (n = m._getLines(n.value, n.selectionStart).pop()) ? void 0 : n.match(t),
                    a = null == (a = m._getLines(e.value, e.selectionStart).pop()) ? void 0 : a.match(t);
                  if (null != n && n[1] && null != (t = null == a ? void 0 : a[1]) && t.startsWith(n[1]))
                    return void (m._history.stack[m._history.offset] = S(S({}, e), { timestamp: r }));
                }
              }
              m._history.stack.push(S(S({}, e), { timestamp: r })), m._history.offset++;
            }),
            (m._updateInput = function (e) {
              var t = m._input;
              t &&
                ((t.value = e.value),
                (t.selectionStart = e.selectionStart),
                (t.selectionEnd = e.selectionEnd),
                m.props.onValueChange(e.value));
            }),
            (m._applyEdits = function (e) {
              var t = m._input,
                r = m._history.stack[m._history.offset];
              r &&
                t &&
                (m._history.stack[m._history.offset] = S(S({}, r), {
                  selectionStart: t.selectionStart,
                  selectionEnd: t.selectionEnd,
                })),
                m._recordChange(e),
                m._updateInput(e);
            }),
            (m._undoEdit = function () {
              var e = m._history,
                t = e.stack,
                e = e.offset,
                t = t[e - 1];
              t && (m._updateInput(t), (m._history.offset = Math.max(e - 1, 0)));
            }),
            (m._redoEdit = function () {
              var e = m._history,
                t = e.stack,
                e = e.offset,
                r = t[e + 1];
              r && (m._updateInput(r), (m._history.offset = Math.min(e + 1, t.length - 1)));
            }),
            (m._handleKeyDown = function (e) {
              var t,
                r,
                n,
                a,
                o,
                i,
                s,
                l,
                c,
                u,
                p = m.props,
                d = p.tabSize,
                h = p.insertSpaces,
                f = p.ignoreTabKey,
                p = p.onKeyDown;
              (p && (p(e), e.defaultPrevented)) ||
                (27 === e.keyCode && e.currentTarget.blur(),
                (t = (p = e.currentTarget).value),
                (r = p.selectionStart),
                (p = p.selectionEnd),
                (n = (h ? " " : "\t").repeat(d)),
                9 === e.keyCode && !f && m.state.capture
                  ? (e.preventDefault(),
                    e.shiftKey
                      ? ((a = (l = m._getLines(t, r)).length - 1),
                        (o = m._getLines(t, p).length - 1),
                        (h = t
                          .split("\n")
                          .map(function (e, t) {
                            return a <= t && t <= o && e.startsWith(n) ? e.substring(n.length) : e;
                          })
                          .join("\n")),
                        t !== h &&
                          ((u = l[a]),
                          m._applyEdits({
                            value: h,
                            selectionStart: null != u && u.startsWith(n) ? r - n.length : r,
                            selectionEnd: p - (t.length - h.length),
                          })))
                      : r !== p
                      ? ((i = (l = m._getLines(t, r)).length - 1),
                        (s = m._getLines(t, p).length - 1),
                        (u = l[i]),
                        m._applyEdits({
                          value: t
                            .split("\n")
                            .map(function (e, t) {
                              return i <= t && t <= s ? n + e : e;
                            })
                            .join("\n"),
                          selectionStart: u && /\S/.test(u) ? r + n.length : r,
                          selectionEnd: p + n.length * (s - i + 1),
                        }))
                      : ((c = r + n.length),
                        m._applyEdits({
                          value: t.substring(0, r) + n + t.substring(p),
                          selectionStart: c,
                          selectionEnd: c,
                        })))
                  : 8 === e.keyCode
                  ? ((d = r !== p),
                    t.substring(0, r).endsWith(n) &&
                      !d &&
                      (e.preventDefault(),
                      (c = r - n.length),
                      m._applyEdits({
                        value: t.substring(0, r - n.length) + t.substring(p),
                        selectionStart: c,
                        selectionEnd: c,
                      })))
                  : 13 === e.keyCode
                  ? r === p &&
                    null != (h = null == (f = m._getLines(t, r).pop()) ? void 0 : f.match(/^\s+/)) &&
                    h[0] &&
                    (e.preventDefault(),
                    (c = r + (l = "\n" + h[0]).length),
                    m._applyEdits({
                      value: t.substring(0, r) + l + t.substring(p),
                      selectionStart: c,
                      selectionEnd: c,
                    }))
                  : 57 === e.keyCode || 219 === e.keyCode || 222 === e.keyCode || 192 === e.keyCode
                  ? ((u = void 0),
                    57 === e.keyCode && e.shiftKey
                      ? (u = ["(", ")"])
                      : 219 === e.keyCode
                      ? (u = e.shiftKey ? ["{", "}"] : ["[", "]"])
                      : 222 === e.keyCode
                      ? (u = e.shiftKey ? ['"', '"'] : ["'", "'"])
                      : 192 !== e.keyCode || e.shiftKey || (u = ["`", "`"]),
                    r !== p &&
                      u &&
                      (e.preventDefault(),
                      m._applyEdits({
                        value: t.substring(0, r) + u[0] + t.substring(r, p) + u[1] + t.substring(p),
                        selectionStart: r,
                        selectionEnd: p + 2,
                      })))
                  : (v ? e.metaKey && 90 === e.keyCode : e.ctrlKey && 90 === e.keyCode) && !e.shiftKey && !e.altKey
                  ? (e.preventDefault(), m._undoEdit())
                  : (v
                      ? e.metaKey && 90 === e.keyCode && e.shiftKey
                      : g
                      ? e.ctrlKey && 89 === e.keyCode
                      : e.ctrlKey && 90 === e.keyCode && e.shiftKey) && !e.altKey
                  ? (e.preventDefault(), m._redoEdit())
                  : 77 !== e.keyCode ||
                    !e.ctrlKey ||
                    (v && !e.shiftKey) ||
                    (e.preventDefault(),
                    m.setState(function (e) {
                      return { capture: !e.capture };
                    })));
            }),
            (m._handleChange = function (e) {
              var e = e.currentTarget,
                t = e.value,
                r = e.selectionStart,
                e = e.selectionEnd;
              m._recordChange({ value: t, selectionStart: r, selectionEnd: e }, !0), m.props.onValueChange(t);
            }),
            (m._history = { stack: [], offset: -1 }),
            (m._input = null),
            m
          );
        }
        e.default = i;
        var I = {
          container: {
            position: "relative",
            textAlign: "left",
            boxSizing: "border-box",
            padding: 0,
            overflow: "hidden",
          },
          textarea: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            resize: "none",
            color: "inherit",
            overflow: "hidden",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            WebkitTextFillColor: "transparent",
          },
          highlight: { position: "relative", pointerEvents: "none" },
          editor: {
            margin: 0,
            border: 0,
            background: "none",
            boxSizing: "inherit",
            display: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontStyle: "inherit",
            fontVariantLigatures: "inherit",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            lineHeight: "inherit",
            tabSize: "inherit",
            textIndent: "inherit",
            textRendering: "inherit",
            textTransform: "inherit",
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          },
        };
      },
    }),
    Ge = e({
      "node_modules/prismjs/components/prism-core.js"(e, t) {
        var l,
          r,
          n,
          a,
          R,
          o =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
              ? self
              : {},
          o =
            ((r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i),
            (n = 0),
            (a = {}),
            (R = {
              manual: (l = o).Prism && l.Prism.manual,
              disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
              util: {
                encode: function e(t) {
                  return t instanceof P
                    ? new P(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
                },
                clone: function r(e, n) {
                  var a, t;
                  switch (((n = n || {}), R.util.type(e))) {
                    case "Object":
                      if (((t = R.util.objId(e)), n[t])) return n[t];
                      for (var o in ((a = {}), (n[t] = a), e)) e.hasOwnProperty(o) && (a[o] = r(e[o], n));
                      return a;
                    case "Array":
                      return ((t = R.util.objId(e)), n[t])
                        ? n[t]
                        : ((a = []),
                          (n[t] = a),
                          e.forEach(function (e, t) {
                            a[t] = r(e, n);
                          }),
                          a);
                    default:
                      return e;
                  }
                },
                getLanguage: function (e) {
                  for (; e; ) {
                    var t = r.exec(e.className);
                    if (t) return t[1].toLowerCase();
                    e = e.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (e, t) {
                  (e.className = e.className.replace(RegExp(r, "gi"), "")), e.classList.add("language-" + t);
                },
                currentScript: function () {
                  if ("undefined" == typeof document) return null;
                  if ("currentScript" in document) return document.currentScript;
                  try {
                    throw new Error();
                  } catch (e) {
                    var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                    if (t) {
                      var r,
                        n = document.getElementsByTagName("script");
                      for (r in n) if (n[r].src == t) return n[r];
                    }
                    return null;
                  }
                },
                isActive: function (e, t, r) {
                  for (var n = "no-" + t; e; ) {
                    var a = e.classList;
                    if (a.contains(t)) return !0;
                    if (a.contains(n)) return !1;
                    e = e.parentElement;
                  }
                  return !!r;
                },
              },
              languages: {
                plain: a,
                plaintext: a,
                text: a,
                txt: a,
                extend: function (e, t) {
                  var r,
                    n = R.util.clone(R.languages[e]);
                  for (r in t) n[r] = t[r];
                  return n;
                },
                insertBefore: function (r, e, t, n) {
                  var a,
                    o = (n = n || R.languages)[r],
                    i = {};
                  for (a in o)
                    if (o.hasOwnProperty(a)) {
                      if (a == e) for (var s in t) t.hasOwnProperty(s) && (i[s] = t[s]);
                      t.hasOwnProperty(a) || (i[a] = o[a]);
                    }
                  var l = n[r];
                  return (
                    (n[r] = i),
                    R.languages.DFS(R.languages, function (e, t) {
                      t === l && e != r && (this[e] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, r, n, a) {
                  a = a || {};
                  var o,
                    i,
                    s,
                    l = R.util.objId;
                  for (o in t)
                    t.hasOwnProperty(o) &&
                      (r.call(t, o, t[o], n || o),
                      (i = t[o]),
                      "Object" !== (s = R.util.type(i)) || a[l(i)]
                        ? "Array" !== s || a[l(i)] || ((a[l(i)] = !0), e(i, r, o, a))
                        : ((a[l(i)] = !0), e(i, r, null, a)));
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                R.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, r) {
                var n = {
                  callback: r,
                  container: e,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                R.hooks.run("before-highlightall", n),
                  (n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector))),
                  R.hooks.run("before-all-elements-highlight", n);
                for (var a, o = 0; (a = n.elements[o++]); ) R.highlightElement(a, !0 === t, n.callback);
              },
              highlightElement: function (e, t, r) {
                var n = R.util.getLanguage(e),
                  a = R.languages[n],
                  o = (R.util.setLanguage(e, n), e.parentElement);
                o && "pre" === o.nodeName.toLowerCase() && R.util.setLanguage(o, n);
                var i = { element: e, language: n, grammar: a, code: e.textContent };
                function s(e) {
                  (i.highlightedCode = e),
                    R.hooks.run("before-insert", i),
                    (i.element.innerHTML = i.highlightedCode),
                    R.hooks.run("after-highlight", i),
                    R.hooks.run("complete", i),
                    r && r.call(i.element);
                }
                R.hooks.run("before-sanity-check", i),
                  (o = i.element.parentElement) &&
                    "pre" === o.nodeName.toLowerCase() &&
                    !o.hasAttribute("tabindex") &&
                    o.setAttribute("tabindex", "0"),
                  i.code
                    ? (R.hooks.run("before-highlight", i),
                      i.grammar
                        ? t && l.Worker
                          ? (((n = new Worker(R.filename)).onmessage = function (e) {
                              s(e.data);
                            }),
                            n.postMessage(JSON.stringify({ language: i.language, code: i.code, immediateClose: !0 })))
                          : s(R.highlight(i.code, i.grammar, i.language))
                        : s(R.util.encode(i.code)))
                    : (R.hooks.run("complete", i), r && r.call(i.element));
              },
              highlight: function (e, t, r) {
                e = { code: e, grammar: t, language: r };
                if ((R.hooks.run("before-tokenize", e), e.grammar))
                  return (
                    (e.tokens = R.tokenize(e.code, e.grammar)),
                    R.hooks.run("after-tokenize", e),
                    P.stringify(R.util.encode(e.tokens), e.language)
                  );
                throw new Error('The language "' + e.language + '" has no grammar.');
              },
              tokenize: function (e, t) {
                var r = t.rest;
                if (r) {
                  for (var n in r) t[n] = r[n];
                  delete t.rest;
                }
                for (
                  var a = new c(),
                    o =
                      (T(a, a.head, e),
                      !(function e(t, r, n, a, o, i) {
                        for (var s in n)
                          if (n.hasOwnProperty(s) && n[s]) {
                            var l = n[s];
                            l = Array.isArray(l) ? l : [l];
                            for (var c = 0; c < l.length; ++c) {
                              if (i && i.cause == s + "," + c) return;
                              for (
                                var u,
                                  p = l[c],
                                  d = p.inside,
                                  h = !!p.lookbehind,
                                  f = !!p.greedy,
                                  m = p.alias,
                                  g =
                                    (f &&
                                      !p.pattern.global &&
                                      ((u = p.pattern.toString().match(/[imsuy]*$/)[0]),
                                      (p.pattern = RegExp(p.pattern.source, u + "g"))),
                                    p.pattern || p),
                                  v = a.next,
                                  b = o;
                                v !== r.tail && !(i && b >= i.reach);
                                b += v.value.length, v = v.next
                              ) {
                                var y = v.value;
                                if (r.length > t.length) return;
                                if (!(y instanceof P)) {
                                  var E,
                                    w = 1;
                                  if (f) {
                                    if (!(E = A(g, b, t, h)) || E.index >= t.length) break;
                                    var S = E.index,
                                      k = E.index + E[0].length,
                                      O = b;
                                    for (O += v.value.length; O <= S; ) (v = v.next), (O += v.value.length);
                                    if (((O -= v.value.length), (b = O), v.value instanceof P)) continue;
                                    for (var N = v; N !== r.tail && (O < k || "string" == typeof N.value); N = N.next)
                                      w++, (O += N.value.length);
                                    w--, (y = t.slice(b, O)), (E.index -= b);
                                  } else if (!(E = A(g, 0, y, h))) continue;
                                  var S = E.index,
                                    C = E[0],
                                    I = y.slice(0, S),
                                    x = y.slice(S + C.length),
                                    y = b + y.length,
                                    L = (i && y > i.reach && (i.reach = y), v.prev),
                                    I =
                                      (I && ((L = T(r, L, I)), (b += I.length)),
                                      _(r, L, w),
                                      new P(s, d ? R.tokenize(C, d) : C, m, C));
                                  (v = T(r, L, I)),
                                    x && T(r, v, x),
                                    1 < w &&
                                      ((C = { cause: s + "," + c, reach: y }),
                                      e(t, r, n, v.prev, b, C),
                                      i && C.reach > i.reach && (i.reach = C.reach));
                                }
                              }
                            }
                          }
                      })(e, a, t, a.head, 0),
                      a),
                    i = [],
                    s = o.head.next;
                  s !== o.tail;

                )
                  i.push(s.value), (s = s.next);
                return i;
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var r = R.hooks.all;
                  (r[e] = r[e] || []), r[e].push(t);
                },
                run: function (e, t) {
                  var r = R.hooks.all[e];
                  if (r && r.length) for (var n, a = 0; (n = r[a++]); ) n(t);
                },
              },
              Token: P,
            }),
            (l.Prism = R),
            (P.stringify = function t(e, r) {
              if ("string" == typeof e) return e;
              var n;
              if (Array.isArray(e))
                return (
                  (n = ""),
                  e.forEach(function (e) {
                    n += t(e, r);
                  }),
                  n
                );
              var a,
                o = {
                  type: e.type,
                  content: t(e.content, r),
                  tag: "span",
                  classes: ["token", e.type],
                  attributes: {},
                  language: r,
                },
                e = e.alias,
                i =
                  (e && (Array.isArray(e) ? Array.prototype.push.apply(o.classes, e) : o.classes.push(e)),
                  R.hooks.run("wrap", o),
                  "");
              for (a in o.attributes) i += " " + a + '="' + (o.attributes[a] || "").replace(/"/g, "&quot;") + '"';
              return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + i + ">" + o.content + "</" + o.tag + ">";
            }),
            l.document
              ? ((a = R.util.currentScript()) &&
                  ((R.filename = a.src), a.hasAttribute("data-manual") && (R.manual = !0)),
                R.manual ||
                  ("loading" === (o = document.readyState) || ("interactive" === o && a && a.defer)
                    ? document.addEventListener("DOMContentLoaded", i)
                    : window.requestAnimationFrame
                    ? window.requestAnimationFrame(i)
                    : window.setTimeout(i, 16)))
              : l.addEventListener &&
                !R.disableWorkerMessageHandler &&
                l.addEventListener(
                  "message",
                  function (e) {
                    var e = JSON.parse(e.data),
                      t = e.language,
                      r = e.code,
                      e = e.immediateClose;
                    l.postMessage(R.highlight(r, R.languages[t], t)), e && l.close();
                  },
                  !1
                ),
            R);
        function P(e, t, r, n) {
          (this.type = e), (this.content = t), (this.alias = r), (this.length = 0 | (n || "").length);
        }
        function A(e, t, r, n) {
          e.lastIndex = t;
          t = e.exec(r);
          return t && n && t[1] && ((e = t[1].length), (t.index += e), (t[0] = t[0].slice(e))), t;
        }
        function c() {
          var e = { value: null, prev: null, next: null },
            t = { value: null, prev: e, next: null };
          (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
        }
        function T(e, t, r) {
          var n = t.next,
            r = { value: r, prev: t, next: n };
          return (t.next = r), (n.prev = r), e.length++, r;
        }
        function _(e, t, r) {
          for (var n = t.next, a = 0; a < r && n !== e.tail; a++) n = n.next;
          ((t.next = n).prev = t), (e.length -= a);
        }
        function i() {
          R.manual || R.highlightAll();
        }
        void 0 !== t && t.exports && (t.exports = o), "undefined" != typeof global && (global.Prism = o);
      },
    }),
    He = e({
      "node_modules/classnames/index.js"(e, t) {
        !(function () {
          "use strict";
          var i = {}.hasOwnProperty;
          function s() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var n,
                  a = typeof r;
                if ("string" == a || "number" == a) e.push(r);
                else if (Array.isArray(r)) !r.length || ((n = s.apply(null, r)) && e.push(n));
                else if ("object" == a)
                  if (r.toString === Object.prototype.toString) for (var o in r) i.call(r, o) && r[o] && e.push(o);
                  else e.push(r.toString());
              }
            }
            return e.join(" ");
          }
          void 0 !== t && t.exports
            ? (t.exports = s.default = s)
            : "function" == typeof define && "object" == typeof define.amd && define.amd
            ? define("classnames", [], function () {
                return s;
              })
            : (window.classNames = s);
        })();
      },
    }),
    Ve = e({
      "node_modules/react-dropdown/dist/index.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var p = (function (e) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" !== s(e) && "function" != typeof e)) return { default: e };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r,
              n = {},
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (r in e) {
              var o;
              Object.prototype.hasOwnProperty.call(e, r) &&
                ((o = a ? Object.getOwnPropertyDescriptor(e, r) : null) && (o.get || o.set)
                  ? Object.defineProperty(n, r, o)
                  : (n[r] = e[r]));
            }
            (n.default = e), t && t.set(e, n);
            return n;
          })(b("react")),
          d = (t = He()) && t.__esModule ? t : { default: t };
        function i() {
          var e;
          return "function" != typeof WeakMap
            ? null
            : ((i = function () {
                return e;
              }),
              (e = new WeakMap()));
        }
        function s(e) {
          return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function l() {
          return (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r,
                  n = arguments[t];
                for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function c(t, e) {
          var r,
            n = Object.keys(t);
          return (
            Object.getOwnPropertySymbols &&
              ((r = Object.getOwnPropertySymbols(t)),
              e &&
                (r = r.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
              n.push.apply(n, r)),
            n
          );
        }
        function h(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        function a(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function o(e) {
          return (o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function u(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function f(e, t) {
          return (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var m = "Select...",
          t = (function (e) {
            var t,
              r = n;
            if ("function" != typeof e && null !== e)
              throw new TypeError("Super expression must either be null or a function");
            function n(e) {
              var t, r;
              if (this instanceof n)
                return (
                  (t = this),
                  ((t = !(r = o(n).call(this, e)) || ("object" !== s(r) && "function" != typeof r) ? u(t) : r).state = {
                    selected: t.parseValue(e.value, e.options) || {
                      label: void 0 === e.placeholder ? m : e.placeholder,
                      value: "",
                    },
                    isOpen: !1,
                  }),
                  (t.dropdownRef = (0, p.createRef)()),
                  (t.mounted = !0),
                  (t.handleDocumentClick = t.handleDocumentClick.bind(u(t))),
                  (t.fireChangeEvent = t.fireChangeEvent.bind(u(t))),
                  t
                );
              throw new TypeError("Cannot call a class as a function");
            }
            return (
              (r.prototype = Object.create(e && e.prototype, {
                constructor: { value: r, writable: !0, configurable: !0 },
              })),
              e && f(r, e),
              (r = n),
              (e = [
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.value !== e.value &&
                      (this.props.value
                        ? (e = this.parseValue(this.props.value, this.props.options)) !== this.state.selected &&
                          this.setState({ selected: e })
                        : this.setState({
                            selected: {
                              label: void 0 === this.props.placeholder ? m : this.props.placeholder,
                              value: "",
                            },
                          }));
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    document.addEventListener("click", this.handleDocumentClick, !1),
                      document.addEventListener("touchend", this.handleDocumentClick, !1);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    (this.mounted = !1),
                      document.removeEventListener("click", this.handleDocumentClick, !1),
                      document.removeEventListener("touchend", this.handleDocumentClick, !1);
                  },
                },
                {
                  key: "handleMouseDown",
                  value: function (e) {
                    this.props.onFocus &&
                      "function" == typeof this.props.onFocus &&
                      this.props.onFocus(this.state.isOpen),
                      ("mousedown" === e.type && 0 !== e.button) ||
                        (e.stopPropagation(),
                        e.preventDefault(),
                        this.props.disabled || this.setState({ isOpen: !this.state.isOpen }));
                  },
                },
                {
                  key: "parseValue",
                  value: function (t, e) {
                    var r;
                    if ("string" == typeof t)
                      for (var n, a = 0, o = e.length; a < o; a++)
                        "group" === e[a].type
                          ? (n = e[a].items.filter(function (e) {
                              return e.value === t;
                            })).length && (r = n[0])
                          : void 0 !== e[a].value && e[a].value === t && (r = e[a]);
                    return r || t;
                  },
                },
                {
                  key: "setValue",
                  value: function (e, t) {
                    e = { selected: { value: e, label: t }, isOpen: !1 };
                    this.fireChangeEvent(e), this.setState(e);
                  },
                },
                {
                  key: "fireChangeEvent",
                  value: function (e) {
                    e.selected !== this.state.selected && this.props.onChange && this.props.onChange(e.selected);
                  },
                },
                {
                  key: "renderOption",
                  value: function (r) {
                    var e = r.value,
                      t = (void 0 === e && (e = r.label || r), r.label || r.value || r),
                      n = e === this.state.selected.value || e === this.state.selected;
                    h((a = {}), "".concat(this.props.baseClassName, "-option"), !0),
                      h(a, r.className, !!r.className),
                      h(a, "is-selected", n);
                    var a = (0, d.default)(a),
                      o = Object.keys(r.data || {}).reduce(function (e, t) {
                        return (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2
                              ? c(r, !0).forEach(function (e) {
                                  h(t, e, r[e]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                              : c(r).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                });
                          }
                          return t;
                        })({}, e, h({}, "data-".concat(t), r.data[t]));
                      }, {});
                    return p.default.createElement(
                      "div",
                      l(
                        {
                          key: e,
                          className: a,
                          onMouseDown: this.setValue.bind(this, e, t),
                          onClick: this.setValue.bind(this, e, t),
                          role: "option",
                          "aria-selected": n ? "true" : "false",
                        },
                        o
                      ),
                      t
                    );
                  },
                },
                {
                  key: "buildMenu",
                  value: function () {
                    var n = this,
                      e = this.props,
                      t = e.options,
                      a = e.baseClassName,
                      e = t.map(function (e) {
                        var t, r;
                        return "group" === e.type
                          ? ((t = p.default.createElement("div", { className: "".concat(a, "-title") }, e.name)),
                            (r = e.items.map(function (e) {
                              return n.renderOption(e);
                            })),
                            p.default.createElement(
                              "div",
                              { className: "".concat(a, "-group"), key: e.name, role: "listbox", tabIndex: "-1" },
                              t,
                              r
                            ))
                          : n.renderOption(e);
                      });
                    return e.length
                      ? e
                      : p.default.createElement("div", { className: "".concat(a, "-noresults") }, "No options found");
                  },
                },
                {
                  key: "handleDocumentClick",
                  value: function (e) {
                    !this.mounted ||
                      this.dropdownRef.current.contains(e.target) ||
                      (this.state.isOpen && this.setState({ isOpen: !1 }));
                  },
                },
                {
                  key: "isValueSelected",
                  value: function () {
                    return "string" == typeof this.state.selected || "" !== this.state.selected.value;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.baseClassName,
                      r = e.controlClassName,
                      n = e.placeholderClassName,
                      a = e.menuClassName,
                      o = e.arrowClassName,
                      i = e.arrowClosed,
                      s = e.arrowOpen,
                      e = e.className,
                      l = this.props.disabled ? "Dropdown-disabled" : "",
                      c = "string" == typeof this.state.selected ? this.state.selected : this.state.selected.label,
                      e = (0, d.default)(
                        (h((u = {}), "".concat(t, "-root"), !0), h(u, e, !!e), h(u, "is-open", this.state.isOpen), u)
                      ),
                      r = (0, d.default)((h((u = {}), "".concat(t, "-control"), !0), h(u, r, !!r), h(u, l, !!l), u)),
                      u = (0, d.default)(
                        (h((l = {}), "".concat(t, "-placeholder"), !0),
                        h(l, n, !!n),
                        h(l, "is-selected", this.isValueSelected()),
                        l)
                      ),
                      l = (0, d.default)((h((n = {}), "".concat(t, "-menu"), !0), h(n, a, !!a), n)),
                      n = (0, d.default)((h((a = {}), "".concat(t, "-arrow"), !0), h(a, o, !!o), a)),
                      o = p.default.createElement("div", { className: u }, c),
                      a = this.state.isOpen
                        ? p.default.createElement("div", { className: l, "aria-expanded": "true" }, this.buildMenu())
                        : null;
                    return p.default.createElement(
                      "div",
                      { ref: this.dropdownRef, className: e },
                      p.default.createElement(
                        "div",
                        {
                          className: r,
                          onMouseDown: this.handleMouseDown.bind(this),
                          onTouchEnd: this.handleMouseDown.bind(this),
                          "aria-haspopup": "listbox",
                        },
                        o,
                        p.default.createElement(
                          "div",
                          { className: "".concat(t, "-arrow-wrapper") },
                          s && i ? (this.state.isOpen ? s : i) : p.default.createElement("span", { className: n })
                        )
                      ),
                      a
                    );
                  },
                },
              ]) && a(r.prototype, e),
              t && a(r, t),
              n
            );
          })(p.Component);
        (t.defaultProps = { baseClassName: "Dropdown" }), (e.default = t);
      },
    }),
    qe = e({
      "node_modules/spcr-whats-new/node_modules/semver/internal/debug.js"(e, t) {
        var r =
          "object" == typeof process &&
          process.env &&
          process.env.NODE_DEBUG &&
          /\bsemver\b/i.test(process.env.NODE_DEBUG)
            ? (...e) => console.error("SEMVER", ...e)
            : () => {};
        t.exports = r;
      },
    }),
    Ke = e({
      "node_modules/spcr-whats-new/node_modules/semver/internal/constants.js"(e, t) {
        var r = Number.MAX_SAFE_INTEGER || 9007199254740991;
        t.exports = {
          SEMVER_SPEC_VERSION: "2.0.0",
          MAX_LENGTH: 256,
          MAX_SAFE_INTEGER: r,
          MAX_SAFE_COMPONENT_LENGTH: 16,
        };
      },
    }),
    ze = e({
      "node_modules/spcr-whats-new/node_modules/semver/internal/re.js"(e, t) {
        var r = Ke()["MAX_SAFE_COMPONENT_LENGTH"],
          a = qe(),
          o = ((e = t.exports = {}).re = []),
          i = (e.src = []),
          s = (e.t = {}),
          l = 0,
          t = (e, t, r) => {
            var n = l++;
            a(e, n, t), (s[e] = n), (i[n] = t), (o[n] = new RegExp(t, r ? "g" : void 0));
          };
        t("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
          t("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
          t("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
          t("MAINVERSION", `(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`),
          t(
            "MAINVERSIONLOOSE",
            `(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`
          ),
          t("PRERELEASEIDENTIFIER", `(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`),
          t("PRERELEASEIDENTIFIERLOOSE", `(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`),
          t("PRERELEASE", `(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`),
          t("PRERELEASELOOSE", `(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`),
          t("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
          t("BUILD", `(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`),
          t("FULLPLAIN", `v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`),
          t("FULL", `^${i[s.FULLPLAIN]}$`),
          t("LOOSEPLAIN", `[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`),
          t("LOOSE", `^${i[s.LOOSEPLAIN]}$`),
          t("GTLT", "((?:<|>)?=?)"),
          t("XRANGEIDENTIFIERLOOSE", i[s.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
          t("XRANGEIDENTIFIER", i[s.NUMERICIDENTIFIER] + "|x|X|\\*"),
          t(
            "XRANGEPLAIN",
            `[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${
              i[s.PRERELEASE]
            })?${i[s.BUILD]}?)?)?`
          ),
          t(
            "XRANGEPLAINLOOSE",
            `[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
              i[s.XRANGEIDENTIFIERLOOSE]
            })(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`
          ),
          t("XRANGE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`),
          t("XRANGELOOSE", `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`),
          t("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`),
          t("COERCERTL", i[s.COERCE], !0),
          t("LONETILDE", "(?:~>?)"),
          t("TILDETRIM", `(\\s*)${i[s.LONETILDE]}\\s+`, !0),
          (e.tildeTrimReplace = "$1~"),
          t("TILDE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`),
          t("TILDELOOSE", `^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`),
          t("LONECARET", "(?:\\^)"),
          t("CARETTRIM", `(\\s*)${i[s.LONECARET]}\\s+`, !0),
          (e.caretTrimReplace = "$1^"),
          t("CARET", `^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`),
          t("CARETLOOSE", `^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`),
          t("COMPARATORLOOSE", `^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`),
          t("COMPARATOR", `^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`),
          t("COMPARATORTRIM", `(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`, !0),
          (e.comparatorTrimReplace = "$1$2$3"),
          t("HYPHENRANGE", `^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`),
          t("HYPHENRANGELOOSE", `^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`),
          t("STAR", "(<|>)?=?\\s*\\*"),
          t("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
          t("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      },
    }),
    Je = e({
      "node_modules/spcr-whats-new/node_modules/semver/internal/parse-options.js"(e, t) {
        var r = ["includePrerelease", "loose", "rtl"];
        t.exports = (t) =>
          t
            ? "object" != typeof t
              ? { loose: !0 }
              : r.filter((e) => t[e]).reduce((e, t) => ((e[t] = !0), e), {})
            : {};
      },
    }),
    We = e({
      "node_modules/spcr-whats-new/node_modules/semver/internal/identifiers.js"(e, t) {
        var a = /^[0-9]+$/,
          r = (e, t) => {
            var r = a.test(e),
              n = a.test(t);
            return r && n && ((e = +e), (t = +t)), e === t ? 0 : (r && !n) || ((!n || r) && e < t) ? -1 : 1;
          };
        t.exports = { compareIdentifiers: r, rcompareIdentifiers: (e, t) => r(t, e) };
      },
    }),
    Xe = e({
      "node_modules/spcr-whats-new/node_modules/semver/classes/semver.js"(e, t) {
        var a = qe(),
          { MAX_LENGTH: n, MAX_SAFE_INTEGER: o } = Ke(),
          { re: i, t: s } = ze(),
          l = Je(),
          c = We()["compareIdentifiers"],
          u = class {
            constructor(e, t) {
              if (((t = l(t)), e instanceof u)) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version;
              } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
              if (e.length > n) throw new TypeError(`version is longer than ${n} characters`);
              a("SemVer", e, t),
                (this.options = t),
                (this.loose = !!t.loose),
                (this.includePrerelease = !!t.includePrerelease);
              const r = e.trim().match(t.loose ? i[s.LOOSE] : i[s.FULL]);
              if (!r) throw new TypeError("Invalid Version: " + e);
              if (
                ((this.raw = e),
                (this.major = +r[1]),
                (this.minor = +r[2]),
                (this.patch = +r[3]),
                this.major > o || this.major < 0)
              )
                throw new TypeError("Invalid major version");
              if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
              if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
              r[4]
                ? (this.prerelease = r[4].split(".").map((e) => {
                    if (/^[0-9]+$/.test(e)) {
                      var t = +e;
                      if (0 <= t && t < o) return t;
                    }
                    return e;
                  }))
                : (this.prerelease = []),
                (this.build = r[5] ? r[5].split(".") : []),
                this.format();
            }
            format() {
              return (
                (this.version = `${this.major}.${this.minor}.` + this.patch),
                this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
                this.version
              );
            }
            toString() {
              return this.version;
            }
            compare(e) {
              if ((a("SemVer.compare", this.version, this.options, e), !(e instanceof u))) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new u(e, this.options);
              }
              return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
            }
            compareMain(e) {
              return (
                e instanceof u || (e = new u(e, this.options)),
                c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
              );
            }
            comparePre(e) {
              if ((e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length))
                return -1;
              if (!this.prerelease.length && e.prerelease.length) return 1;
              if (!this.prerelease.length && !e.prerelease.length) return 0;
              let t = 0;
              do {
                var r = this.prerelease[t],
                  n = e.prerelease[t];
                if ((a("prerelease compare", t, r, n), void 0 === r && void 0 === n)) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                if (r !== n) return c(r, n);
              } while (++t);
            }
            compareBuild(e) {
              e instanceof u || (e = new u(e, this.options));
              let t = 0;
              do {
                var r = this.build[t],
                  n = e.build[t];
                if ((a("prerelease compare", t, r, n), void 0 === r && void 0 === n)) return 0;
                if (void 0 === n) return 1;
                if (void 0 === r) return -1;
                if (r !== n) return c(r, n);
              } while (++t);
            }
            inc(e, t) {
              switch (e) {
                case "premajor":
                  (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc("pre", t);
                  break;
                case "preminor":
                  (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc("pre", t);
                  break;
                case "prepatch":
                  (this.prerelease.length = 0), this.inc("patch", t), this.inc("pre", t);
                  break;
                case "prerelease":
                  0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                  break;
                case "major":
                  (0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length) || this.major++,
                    (this.minor = 0),
                    (this.patch = 0),
                    (this.prerelease = []);
                  break;
                case "minor":
                  (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
                    (this.patch = 0),
                    (this.prerelease = []);
                  break;
                case "patch":
                  0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                  break;
                case "pre":
                  if (0 === this.prerelease.length) this.prerelease = [0];
                  else {
                    let e = this.prerelease.length;
                    for (; 0 <= --e; ) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, (e = -2));
                    -1 === e && this.prerelease.push(0);
                  }
                  t && (0 !== c(this.prerelease[0], t) || isNaN(this.prerelease[1])) && (this.prerelease = [t, 0]);
                  break;
                default:
                  throw new Error("invalid increment argument: " + e);
              }
              return this.format(), (this.raw = this.version), this;
            }
          };
        t.exports = u;
      },
    }),
    Ye = e({
      "node_modules/spcr-whats-new/node_modules/semver/functions/compare.js"(e, t) {
        var n = Xe();
        t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
      },
    }),
    e = e({
      "node_modules/spcr-whats-new/node_modules/semver/functions/gt.js"(e, t) {
        var n = Ye();
        t.exports = (e, t, r) => 0 < n(e, t, r);
      },
    }),
    Qe = {},
    Ze = Qe,
    et = {
      default: () =>
        function () {
          return ro.default.createElement(to, null);
        },
    };
  for (T in et) j(Ze, T, { get: et[T], enumerable: !0 });
  var tt = t(b("react"));
  function R(e) {
    return (R =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function rt(e) {
    e = (function (e, t) {
      if ("object" !== R(e) || null === e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 === r) return ("string" === t ? String : Number)(e);
      if ("object" !== R((r = r.call(e, t || "default")))) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(e, "string");
    return "symbol" === R(e) ? e : String(e);
  }
  function nt(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, rt(n.key), n);
    }
  }
  function n(e, t, r) {
    t && nt(e.prototype, t), r && nt(e, r), Object.defineProperty(e, "prototype", { writable: !1 });
  }
  function l(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function at(e, t) {
    return (at = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function ot(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && at(e, t);
  }
  function it(e, t) {
    if (t && ("object" === R(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    return l(e);
  }
  function a(e) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function o(e, t, r) {
    (t = rt(t)) in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r);
  }
  function st(e) {
    if (Array.isArray(e)) return e;
  }
  function lt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function ct(e, t) {
    var r;
    if (e)
      return "string" == typeof e
        ? lt(e, t)
        : "Map" ===
            (r =
              "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor
                ? e.constructor.name
                : r) || "Set" === r
        ? Array.from(e)
        : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? lt(e, t)
        : void 0;
  }
  function ut() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  function pt(e) {
    return (
      st(e) ||
      (function (e) {
        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
          return Array.from(e);
      })(e) ||
      ct(e) ||
      ut()
    );
  }
  function dt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function ht(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? dt(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : dt(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  var ft = {
    type: "logger",
    log: function (e) {
      this.output("log", e);
    },
    warn: function (e) {
      this.output("warn", e);
    },
    error: function (e) {
      this.output("error", e);
    },
    output: function (e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
  function mt(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    i(this, mt), this.init(e, t);
  }
  n(mt, [
    {
      key: "init",
      value: function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        (this.prefix = t.prefix || "i18next:"), (this.logger = e || ft), (this.options = t), (this.debug = t.debug);
      },
    },
    {
      key: "setDebug",
      value: function (e) {
        this.debug = e;
      },
    },
    {
      key: "log",
      value: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return this.forward(t, "log", "", !0);
      },
    },
    {
      key: "warn",
      value: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return this.forward(t, "warn", "", !0);
      },
    },
    {
      key: "error",
      value: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return this.forward(t, "error", "");
      },
    },
    {
      key: "deprecate",
      value: function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
      },
    },
    {
      key: "forward",
      value: function (e, t, r, n) {
        return n && !this.debug
          ? null
          : ("string" == typeof e[0] && (e[0] = "".concat(r).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
      },
    },
    {
      key: "create",
      value: function (e) {
        return new mt(this.logger, ht(ht({}, { prefix: "".concat(this.prefix, ":").concat(e, ":") }), this.options));
      },
    },
    {
      key: "clone",
      value: function (e) {
        return ((e = e || this.options).prefix = e.prefix || this.prefix), new mt(this.logger, e);
      },
    },
  ]);
  var c = new mt(),
    u =
      (n(gt, [
        {
          key: "on",
          value: function (e, t) {
            var r = this;
            return (
              e.split(" ").forEach(function (e) {
                (r.observers[e] = r.observers[e] || []), r.observers[e].push(t);
              }),
              this
            );
          },
        },
        {
          key: "off",
          value: function (e, t) {
            this.observers[e] &&
              (t
                ? (this.observers[e] = this.observers[e].filter(function (e) {
                    return e !== t;
                  }))
                : delete this.observers[e]);
          },
        },
        {
          key: "emit",
          value: function (t) {
            for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
            this.observers[t] &&
              [].concat(this.observers[t]).forEach(function (e) {
                e.apply(void 0, r);
              }),
              this.observers["*"] &&
                [].concat(this.observers["*"]).forEach(function (e) {
                  e.apply(e, [t].concat(r));
                });
          },
        },
      ]),
      gt);
  function gt() {
    i(this, gt), (this.observers = {});
  }
  function vt() {
    var r,
      n,
      e = new Promise(function (e, t) {
        (r = e), (n = t);
      });
    return (e.resolve = r), (e.reject = n), e;
  }
  function bt(e) {
    return null == e ? "" : "" + e;
  }
  function yt(e, t, r) {
    function n(e) {
      return e && -1 < e.indexOf("###") ? e.replace(/###/g, ".") : e;
    }
    function a() {
      return !e || "string" == typeof e;
    }
    for (var o = "string" != typeof t ? [].concat(t) : t.split("."); 1 < o.length; ) {
      if (a()) return {};
      var i = n(o.shift());
      !e[i] && r && (e[i] = new r()), (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {});
    }
    return a() ? {} : { obj: e, k: n(o.shift()) };
  }
  function Et(e, t, r) {
    e = yt(e, t, Object);
    e.obj[e.k] = r;
  }
  function wt(e, t) {
    (e = yt(e, t)), (t = e.obj), (e = e.k);
    if (t) return t[e];
  }
  function St(e, t, r) {
    e = wt(e, r);
    return void 0 !== e ? e : wt(t, r);
  }
  function kt(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var Ot = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
  function Nt(e) {
    return "string" == typeof e
      ? e.replace(/[&<>"'\/]/g, function (e) {
          return Ot[e];
        })
      : e;
  }
  var Ct =
      "undefined" != typeof window &&
      window.navigator &&
      void 0 === window.navigator.userAgentData &&
      window.navigator.userAgent &&
      -1 < window.navigator.userAgent.indexOf("MSIE"),
    It = [" ", ",", "?", "!", ";"];
  function xt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function Lt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? xt(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : xt(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function Rt(r) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = a(r);
      return it(this, n ? ((e = a(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  ot(Tt, u),
    (Pt = Rt(Tt)),
    n(Tt, [
      {
        key: "addNamespaces",
        value: function (e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        },
      },
      {
        key: "removeNamespaces",
        value: function (e) {
          e = this.options.ns.indexOf(e);
          -1 < e && this.options.ns.splice(e, 1);
        },
      },
      {
        key: "getResource",
        value: function (e, t, r) {
          var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
            a = (void 0 !== n.keySeparator ? n : this.options).keySeparator,
            n = (void 0 !== n.ignoreJSONStructure ? n : this.options).ignoreJSONStructure,
            o = [e, t],
            o =
              (r && "string" != typeof r && (o = o.concat(r)),
              r && "string" == typeof r && (o = o.concat(a ? r.split(a) : r)),
              -1 < e.indexOf(".") && (o = e.split(".")),
              wt(this.data, o));
          return o || !n || "string" != typeof r
            ? o
            : (function e(t, r, n) {
                var a = 2 < arguments.length && void 0 !== n ? n : ".";
                if (t) {
                  if (t[r]) return t[r];
                  for (var o = r.split(a), i = t, s = 0; s < o.length; ++s) {
                    if (!i) return;
                    if ("string" == typeof i[o[s]] && s + 1 < o.length) return;
                    if (void 0 === i[o[s]]) {
                      for (var l = 2, c = o.slice(s, s + l).join(a), u = i[c]; void 0 === u && o.length > s + l; )
                        l++, (u = i[(c = o.slice(s, s + l).join(a))]);
                      if (void 0 === u) return;
                      if (null === u) return null;
                      if (r.endsWith(c)) {
                        if ("string" == typeof u) return u;
                        if (c && "string" == typeof u[c]) return u[c];
                      }
                      var p = o.slice(s + l).join(a);
                      return p ? e(u, p, a) : void 0;
                    }
                    i = i[o[s]];
                  }
                  return i;
                }
              })(this.data && this.data[e] && this.data[e][t], r, a);
        },
      },
      {
        key: "addResource",
        value: function (e, t, r, n) {
          var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
            o = this.options.keySeparator,
            i = (void 0 === o && (o = "."), [e, t]);
          r && (i = i.concat(o ? r.split(o) : r)),
            -1 < e.indexOf(".") && ((n = t), (t = (i = e.split("."))[1])),
            this.addNamespaces(t),
            Et(this.data, i, n),
            a.silent || this.emit("added", e, t, r, n);
        },
      },
      {
        key: "addResources",
        value: function (e, t, r) {
          var n,
            a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
          for (n in r)
            ("string" != typeof r[n] && "[object Array]" !== Object.prototype.toString.apply(r[n])) ||
              this.addResource(e, t, n, r[n], { silent: !0 });
          a.silent || this.emit("added", e, t, r);
        },
      },
      {
        key: "addResourceBundle",
        value: function (e, t, r, n, a) {
          var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
            i = [e, t],
            s =
              (-1 < e.indexOf(".") && ((n = r), (r = t), (t = (i = e.split("."))[1])),
              this.addNamespaces(t),
              wt(this.data, i) || {});
          n
            ? (function e(t, r, n) {
                for (var a in r)
                  "__proto__" !== a &&
                    "constructor" !== a &&
                    (a in t
                      ? "string" == typeof t[a] ||
                        t[a] instanceof String ||
                        "string" == typeof r[a] ||
                        r[a] instanceof String
                        ? n && (t[a] = r[a])
                        : e(t[a], r[a], n)
                      : (t[a] = r[a]));
              })(s, r, a)
            : (s = Lt(Lt({}, s), r)),
            Et(this.data, i, s),
            o.silent || this.emit("added", e, t, r);
        },
      },
      {
        key: "removeResourceBundle",
        value: function (e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
        },
      },
      {
        key: "hasResourceBundle",
        value: function (e, t) {
          return void 0 !== this.getResource(e, t);
        },
      },
      {
        key: "getResourceBundle",
        value: function (e, t) {
          return (
            (t = t || this.options.defaultNS),
            "v1" === this.options.compatibilityAPI ? Lt(Lt({}, {}), this.getResource(e, t)) : this.getResource(e, t)
          );
        },
      },
      {
        key: "getDataByLanguage",
        value: function (e) {
          return this.data[e];
        },
      },
      {
        key: "hasLanguageSomeTranslations",
        value: function (e) {
          var t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(function (e) {
            return t[e] && 0 < Object.keys(t[e]).length;
          });
        },
      },
      {
        key: "toJSON",
        value: function () {
          return this.data;
        },
      },
    ]);
  var Pt,
    At = Tt;
  function Tt(e) {
    var t,
      r =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : { ns: ["translation"], defaultNS: "translation" };
    return (
      i(this, Tt),
      (t = Pt.call(this)),
      Ct && u.call(l(t)),
      (t.data = e || {}),
      (t.options = r),
      void 0 === t.options.keySeparator && (t.options.keySeparator = "."),
      void 0 === t.options.ignoreJSONStructure && (t.options.ignoreJSONStructure = !0),
      t
    );
  }
  var _t = {
    processors: {},
    addPostProcessor: function (e) {
      this.processors[e.name] = e;
    },
    handle: function (e, t, r, n, a) {
      var o = this;
      return (
        e.forEach(function (e) {
          o.processors[e] && (t = o.processors[e].process(t, r, n, a));
        }),
        t
      );
    },
  };
  function jt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function P(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? jt(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : jt(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function Dt(r) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = a(r);
      return it(this, n ? ((e = a(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  var Mt,
    $t = {},
    Ft =
      (ot(Bt, u),
      (Mt = Dt(Bt)),
      n(
        Bt,
        [
          {
            key: "changeLanguage",
            value: function (e) {
              e && (this.language = e);
            },
          },
          {
            key: "exists",
            value: function (e) {
              var t;
              return (
                null != e &&
                (t = this.resolve(
                  e,
                  1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }
                )) &&
                void 0 !== t.res
              );
            },
          },
          {
            key: "extractFromKey",
            value: function (e, t) {
              var r,
                n,
                a,
                o = (void 0 !== t.nsSeparator ? t : this.options).nsSeparator,
                i = (void 0 === o && (o = ":"), (void 0 !== t.keySeparator ? t : this.options).keySeparator),
                s = t.ns || this.options.defaultNS || [],
                l = o && -1 < e.indexOf(o),
                c = !(
                  this.options.userDefinedKeySeparator ||
                  t.keySeparator ||
                  this.options.userDefinedNsSeparator ||
                  t.nsSeparator ||
                  ((t = e),
                  (r = (r = o) || ""),
                  (n = (n = i) || ""),
                  0 ===
                    (c = It.filter(function (e) {
                      return r.indexOf(e) < 0 && n.indexOf(e) < 0;
                    })).length ||
                    ((a = !(c = new RegExp(
                      "(".concat(
                        c
                          .map(function (e) {
                            return "?" === e ? "\\?" : e;
                          })
                          .join("|"),
                        ")"
                      )
                    )).test(t)) ||
                      (0 < (u = t.indexOf(n)) && !c.test(t.substring(0, u)) && (a = !0)),
                    a))
                );
              if (l && !c) {
                t = e.match(this.interpolator.nestingRegexp);
                if (t && 0 < t.length) return { key: e, namespaces: s };
                var u = e.split(o);
                (o !== i || (o === i && -1 < this.options.ns.indexOf(u[0]))) && (s = u.shift()), (e = u.join(i));
              }
              return { key: e, namespaces: (s = "string" == typeof s ? [s] : s) };
            },
          },
          {
            key: "translate",
            value: function (e, n, t) {
              var a = this;
              if (
                ((n =
                  (n =
                    "object" !== R(n) && this.options.overloadTranslationOptionHandler
                      ? this.options.overloadTranslationOptionHandler(arguments)
                      : n) || {}),
                null == e)
              )
                return "";
              Array.isArray(e) || (e = [String(e)]);
              var r = (void 0 !== n.returnDetails ? n : this.options).returnDetails,
                o = (void 0 !== n.keySeparator ? n : this.options).keySeparator,
                i = this.extractFromKey(e[e.length - 1], n),
                s = i.key,
                l = i.namespaces,
                c = l[l.length - 1],
                i = n.lng || this.language,
                u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (i && "cimode" === i.toLowerCase())
                return u
                  ? ((u = n.nsSeparator || this.options.nsSeparator),
                    r ? ((p.res = "".concat(c).concat(u).concat(s)), p) : "".concat(c).concat(u).concat(s))
                  : r
                  ? ((p.res = s), p)
                  : s;
              var p = this.resolve(e, n),
                d = p && p.res,
                u = (p && p.usedKey) || s,
                h = (p && p.exactUsedKey) || s,
                f = Object.prototype.toString.apply(d),
                m = (void 0 !== n.joinArrays ? n : this.options).joinArrays,
                g = !this.i18nFormat || this.i18nFormat.handleAsObject;
              if (
                g &&
                d &&
                "string" != typeof d &&
                "boolean" != typeof d &&
                "number" != typeof d &&
                ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(f) < 0 &&
                ("string" != typeof m || "[object Array]" !== f)
              ) {
                if (!n.returnObjects && !this.options.returnObjects)
                  return (
                    this.options.returnedObjectHandler ||
                      this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                    (y = this.options.returnedObjectHandler
                      ? this.options.returnedObjectHandler(u, d, P(P({}, n), {}, { ns: l }))
                      : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.")),
                    r ? ((p.res = y), p) : y
                  );
                if (o) {
                  var v,
                    b,
                    y = "[object Array]" === f,
                    E = y ? [] : {},
                    w = y ? h : u;
                  for (v in d)
                    Object.prototype.hasOwnProperty.call(d, v) &&
                      ((b = "".concat(w).concat(o).concat(v)),
                      (E[v] = this.translate(b, P(P({}, n), { joinArrays: !1, ns: l }))),
                      E[v] === b && (E[v] = d[v]));
                  d = E;
                }
              } else if (g && "string" == typeof m && "[object Array]" === f)
                d = (d = d.join(m)) && this.extendTranslation(d, e, n, t);
              else {
                var y = !1,
                  h = !1,
                  u = void 0 !== n.count && "string" != typeof n.count,
                  S = Bt.hasDefaultValue(n),
                  g = u ? this.pluralResolver.getSuffix(i, n.count, n) : "",
                  k = n["defaultValue".concat(g)] || n.defaultValue;
                !this.isValidLookup(d) && S && ((y = !0), (d = k)), this.isValidLookup(d) || ((h = !0), (d = s));
                var O =
                    (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && h ? void 0 : d,
                  N = S && k !== d && this.options.updateMissing;
                if (h || y || N) {
                  this.logger.log(N ? "updateKey" : "missingKey", i, c, s, N ? k : d),
                    !o ||
                      ((f = this.resolve(s, P(P({}, n), {}, { keySeparator: !1 }))) &&
                        f.res &&
                        this.logger.warn(
                          "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                        ));
                  var C = [],
                    I = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                  if ("fallback" === this.options.saveMissingTo && I && I[0])
                    for (var x = 0; x < I.length; x++) C.push(I[x]);
                  else
                    "all" === this.options.saveMissingTo
                      ? (C = this.languageUtils.toResolveHierarchy(n.lng || this.language))
                      : C.push(n.lng || this.language);
                  function L(e, t, r) {
                    r = S && r !== d ? r : O;
                    a.options.missingKeyHandler
                      ? a.options.missingKeyHandler(e, c, t, r, N, n)
                      : a.backendConnector &&
                        a.backendConnector.saveMissing &&
                        a.backendConnector.saveMissing(e, c, t, r, N, n),
                      a.emit("missingKey", e, c, t, d);
                  }
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && u
                      ? C.forEach(function (t) {
                          a.pluralResolver.getSuffixes(t, n).forEach(function (e) {
                            L([t], s + e, n["defaultValue".concat(e)] || k);
                          });
                        })
                      : L(C, s, k));
                }
                (d = this.extendTranslation(d, e, n, p, t)),
                  h && d === s && this.options.appendNamespaceToMissingKey && (d = "".concat(c, ":").concat(s)),
                  (h || y) &&
                    this.options.parseMissingKeyHandler &&
                    (d =
                      "v1" !== this.options.compatibilityAPI
                        ? this.options.parseMissingKeyHandler(
                            this.options.appendNamespaceToMissingKey ? "".concat(c, ":").concat(s) : s,
                            y ? d : void 0
                          )
                        : this.options.parseMissingKeyHandler(d));
              }
              return r ? ((p.res = d), p) : d;
            },
          },
          {
            key: "extendTranslation",
            value: function (e, n, a, t, o) {
              var r,
                i = this,
                s =
                  (this.i18nFormat && this.i18nFormat.parse
                    ? (e = this.i18nFormat.parse(
                        e,
                        P(P({}, this.options.interpolation.defaultVariables), a),
                        t.usedLng,
                        t.usedNS,
                        t.usedKey,
                        { resolved: t }
                      ))
                    : a.skipInterpolation ||
                      (a.interpolation &&
                        this.interpolator.init(
                          P(P({}, a), { interpolation: P(P({}, this.options.interpolation), a.interpolation) })
                        ),
                      (s =
                        "string" == typeof e &&
                        (a && a.interpolation && void 0 !== a.interpolation.skipOnVariables ? a : this.options)
                          .interpolation.skipOnVariables) &&
                        (l = (l = e.match(this.interpolator.nestingRegexp)) && l.length),
                      (r = a.replace && "string" != typeof a.replace ? a.replace : a),
                      this.options.interpolation.defaultVariables &&
                        (r = P(P({}, this.options.interpolation.defaultVariables), r)),
                      (e = this.interpolator.interpolate(e, r, a.lng || this.language, a)),
                      s && l < ((r = e.match(this.interpolator.nestingRegexp)) && r.length) && (a.nest = !1),
                      !1 !== a.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            return o && o[0] === t[0] && !a.context
                              ? (i.logger.warn(
                                  "It seems you are nesting recursively key: ".concat(t[0], " in key: ").concat(n[0])
                                ),
                                null)
                              : i.translate.apply(i, t.concat([n]));
                          },
                          a
                        )),
                      a.interpolation && this.interpolator.reset()),
                  a.postProcess || this.options.postProcess),
                l = "string" == typeof s ? [s] : s;
              return (e =
                null != e && l && l.length && !1 !== a.applyPostProcessor
                  ? _t.handle(
                      l,
                      e,
                      n,
                      this.options && this.options.postProcessPassResolved ? P({ i18nResolved: t }, a) : a,
                      this
                    )
                  : e);
            },
          },
          {
            key: "resolve",
            value: function (e) {
              var p,
                r,
                d,
                h,
                n,
                f = this,
                m = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
              return (
                (e = "string" == typeof e ? [e] : e).forEach(function (e) {
                  var s, l, c, u, t;
                  f.isValidLookup(p) ||
                    ((e = f.extractFromKey(e, m)),
                    (s = e.key),
                    (r = s),
                    (e = e.namespaces),
                    f.options.fallbackNS && (e = e.concat(f.options.fallbackNS)),
                    (l = void 0 !== m.count && "string" != typeof m.count),
                    (c = l && !m.ordinal && 0 === m.count && f.pluralResolver.shouldUseIntlApi()),
                    (u =
                      void 0 !== m.context &&
                      ("string" == typeof m.context || "number" == typeof m.context) &&
                      "" !== m.context),
                    (t = m.lngs || f.languageUtils.toResolveHierarchy(m.lng || f.language, m.fallbackLng)),
                    e.forEach(function (i) {
                      f.isValidLookup(p) ||
                        ((n = i),
                        !$t["".concat(t[0], "-").concat(i)] &&
                          f.utils &&
                          f.utils.hasLoadedNamespace &&
                          !f.utils.hasLoadedNamespace(n) &&
                          (($t["".concat(t[0], "-").concat(i)] = !0),
                          f.logger.warn(
                            'key "'
                              .concat(r, '" for languages "')
                              .concat(t.join(", "), `" won't get resolved as namespace "`)
                              .concat(n, '" was not yet loaded'),
                            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                          )),
                        t.forEach(function (e) {
                          if (!f.isValidLookup(p)) {
                            h = e;
                            var t,
                              r,
                              n,
                              a,
                              o = [s];
                            for (
                              f.i18nFormat && f.i18nFormat.addLookupKeys
                                ? f.i18nFormat.addLookupKeys(o, s, e, i, m)
                                : (l && (t = f.pluralResolver.getSuffix(e, m.count, m)),
                                  (r = "".concat(f.options.pluralSeparator, "zero")),
                                  l && (o.push(s + t), c && o.push(s + r)),
                                  u &&
                                    ((n = "".concat(s).concat(f.options.contextSeparator).concat(m.context)),
                                    o.push(n),
                                    l && (o.push(n + t), c && o.push(n + r))));
                              (a = o.pop());

                            )
                              f.isValidLookup(p) || ((d = a), (p = f.getResource(e, i, a, m)));
                          }
                        }));
                    }));
                }),
                { res: p, usedKey: r, exactUsedKey: d, usedLng: h, usedNS: n }
              );
            },
          },
          {
            key: "isValidLookup",
            value: function (e) {
              return !(
                void 0 === e ||
                (!this.options.returnNull && null === e) ||
                (!this.options.returnEmptyString && "" === e)
              );
            },
          },
          {
            key: "getResource",
            value: function (e, t, r) {
              var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
              return (
                this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat : this.resourceStore
              ).getResource(e, t, r, n);
            },
          },
        ],
        [
          {
            key: "hasDefaultValue",
            value: function (e) {
              var t,
                r = "defaultValue";
              for (t in e)
                if (Object.prototype.hasOwnProperty.call(e, t) && r === t.substring(0, r.length) && void 0 !== e[t])
                  return !0;
              return !1;
            },
          },
        ]
      ),
      Bt);
  function Bt(e) {
    var t,
      r,
      n,
      a,
      o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    return (
      i(this, Bt),
      (t = Mt.call(this)),
      Ct && u.call(l(t)),
      (r = [
        "resourceStore",
        "languageUtils",
        "pluralResolver",
        "interpolator",
        "backendConnector",
        "i18nFormat",
        "utils",
      ]),
      (n = e),
      (a = l(t)),
      r.forEach(function (e) {
        n[e] && (a[e] = n[e]);
      }),
      (t.options = o),
      void 0 === t.options.keySeparator && (t.options.keySeparator = "."),
      (t.logger = c.create("translator")),
      t
    );
  }
  function Ut(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  n(Ht, [
    {
      key: "getScriptPartFromCode",
      value: function (e) {
        return !e ||
          e.indexOf("-") < 0 ||
          2 === (e = e.split("-")).length ||
          (e.pop(), "x" === e[e.length - 1].toLowerCase())
          ? null
          : this.formatLanguageCode(e.join("-"));
      },
    },
    {
      key: "getLanguagePartFromCode",
      value: function (e) {
        return !e || e.indexOf("-") < 0 ? e : ((e = e.split("-")), this.formatLanguageCode(e[0]));
      },
    },
    {
      key: "formatLanguageCode",
      value: function (e) {
        var t, r;
        return "string" == typeof e && -1 < e.indexOf("-")
          ? ((t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]),
            (r = e.split("-")),
            this.options.lowerCaseLng
              ? (r = r.map(function (e) {
                  return e.toLowerCase();
                }))
              : 2 === r.length
              ? ((r[0] = r[0].toLowerCase()),
                (r[1] = r[1].toUpperCase()),
                -1 < t.indexOf(r[1].toLowerCase()) && (r[1] = Ut(r[1].toLowerCase())))
              : 3 === r.length &&
                ((r[0] = r[0].toLowerCase()),
                2 === r[1].length && (r[1] = r[1].toUpperCase()),
                "sgn" !== r[0] && 2 === r[2].length && (r[2] = r[2].toUpperCase()),
                -1 < t.indexOf(r[1].toLowerCase()) && (r[1] = Ut(r[1].toLowerCase())),
                -1 < t.indexOf(r[2].toLowerCase()) && (r[2] = Ut(r[2].toLowerCase()))),
            r.join("-"))
          : this.options.cleanCode || this.options.lowerCaseLng
          ? e.toLowerCase()
          : e;
      },
    },
    {
      key: "isSupportedCode",
      value: function (e) {
        return (
          ("languageOnly" !== this.options.load && !this.options.nonExplicitSupportedLngs) ||
            (e = this.getLanguagePartFromCode(e)),
          !this.supportedLngs || !this.supportedLngs.length || -1 < this.supportedLngs.indexOf(e)
        );
      },
    },
    {
      key: "getBestMatchFromCodes",
      value: function (e) {
        var r,
          n = this;
        return e
          ? (e.forEach(function (e) {
              r || ((e = n.formatLanguageCode(e)), (n.options.supportedLngs && !n.isSupportedCode(e)) || (r = e));
            }),
            !r &&
              this.options.supportedLngs &&
              e.forEach(function (e) {
                var t;
                if (!r)
                  return (
                    (t = n.getLanguagePartFromCode(e)),
                    n.isSupportedCode(t)
                      ? (r = t)
                      : void (r = n.options.supportedLngs.find(function (e) {
                          if (0 === e.indexOf(t)) return e;
                        }))
                  );
              }),
            (r = r || this.getFallbackCodes(this.options.fallbackLng)[0]))
          : null;
      },
    },
    {
      key: "getFallbackCodes",
      value: function (e, t) {
        return e
          ? ("string" == typeof (e = "function" == typeof e ? e(t) : e) && (e = [e]),
            "[object Array]" === Object.prototype.toString.apply(e)
              ? e
              : t
              ? e[t] ||
                e[this.getScriptPartFromCode(t)] ||
                e[this.formatLanguageCode(t)] ||
                e[this.getLanguagePartFromCode(t)] ||
                e.default ||
                []
              : e.default || [])
          : [];
      },
    },
    {
      key: "toResolveHierarchy",
      value: function (e, t) {
        function r(e) {
          e &&
            (n.isSupportedCode(e)
              ? a.push(e)
              : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
        }
        var n = this,
          t = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
          a = [];
        return (
          "string" == typeof e && -1 < e.indexOf("-")
            ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)),
              "languageOnly" !== this.options.load &&
                "currentOnly" !== this.options.load &&
                r(this.getScriptPartFromCode(e)),
              "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e)))
            : "string" == typeof e && r(this.formatLanguageCode(e)),
          t.forEach(function (e) {
            a.indexOf(e) < 0 && r(n.formatLanguageCode(e));
          }),
          a
        );
      },
    },
  ]);
  var Gt = Ht;
  function Ht(e) {
    i(this, Ht),
      (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = c.create("languageUtils"));
  }
  var Vt = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    qt = {
      1: function (e) {
        return Number(1 < e);
      },
      2: function (e) {
        return Number(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2
        );
      },
      5: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5);
      },
      6: function (e) {
        return Number(1 == e ? 0 : 2 <= e && e <= 4 ? 1 : 2);
      },
      7: function (e) {
        return Number(1 == e ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2);
      },
      8: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
      },
      9: function (e) {
        return Number(2 <= e);
      },
      10: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11: function (e) {
        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : 2 < e && e < 20 ? 2 : 3);
      },
      12: function (e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return Number(0 !== e);
      },
      14: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
      },
      15: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2);
      },
      16: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
      },
      17: function (e) {
        return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
      },
      18: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
      },
      19: function (e) {
        return Number(1 == e ? 0 : 0 == e || (1 < e % 100 && e % 100 < 11) ? 1 : 10 < e % 100 && e % 100 < 20 ? 2 : 3);
      },
      20: function (e) {
        return Number(1 == e ? 0 : 0 == e || (0 < e % 100 && e % 100 < 20) ? 1 : 2);
      },
      21: function (e) {
        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
      },
      22: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || 10 < e) && e % 10 == 0 ? 2 : 3);
      },
    },
    Kt = ["v1", "v2", "v3"],
    zt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
  n(Wt, [
    {
      key: "addRule",
      value: function (e, t) {
        this.rules[e] = t;
      },
    },
    {
      key: "getRule",
      value: function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.shouldUseIntlApi())
          try {
            return new Intl.PluralRules(e, { type: t.ordinal ? "ordinal" : "cardinal" });
          } catch (e) {
            return;
          }
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
      },
    },
    {
      key: "needsPlural",
      value: function (e) {
        var t = this.getRule(e, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
        return this.shouldUseIntlApi()
          ? t && 1 < t.resolvedOptions().pluralCategories.length
          : t && 1 < t.numbers.length;
      },
    },
    {
      key: "getPluralFormsOfKey",
      value: function (e, t) {
        return this.getSuffixes(e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).map(function (
          e
        ) {
          return "".concat(t).concat(e);
        });
      },
    },
    {
      key: "getSuffixes",
      value: function (t) {
        var r = this,
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          e = this.getRule(t, n);
        return e
          ? this.shouldUseIntlApi()
            ? e
                .resolvedOptions()
                .pluralCategories.sort(function (e, t) {
                  return zt[e] - zt[t];
                })
                .map(function (e) {
                  return "".concat(r.options.prepend).concat(e);
                })
            : e.numbers.map(function (e) {
                return r.getSuffix(t, e, n);
              })
          : [];
      },
    },
    {
      key: "getSuffix",
      value: function (e, t) {
        var r = this.getRule(e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
        return r
          ? this.shouldUseIntlApi()
            ? "".concat(this.options.prepend).concat(r.select(t))
            : this.getSuffixRetroCompatible(r, t)
          : (this.logger.warn("no plural rule found for: ".concat(e)), "");
      },
    },
    {
      key: "getSuffixRetroCompatible",
      value: function (e, t) {
        function r() {
          return n.options.prepend && a.toString() ? n.options.prepend + a.toString() : a.toString();
        }
        var n = this,
          t = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
          a = e.numbers[t];
        this.options.simplifyPluralSuffix &&
          2 === e.numbers.length &&
          1 === e.numbers[0] &&
          (2 === a ? (a = "plural") : 1 === a && (a = ""));
        return "v1" === this.options.compatibilityJSON
          ? 1 === a
            ? ""
            : "number" == typeof a
            ? "_plural_".concat(a.toString())
            : r()
          : "v2" === this.options.compatibilityJSON ||
            (this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0])
          ? r()
          : this.options.prepend && t.toString()
          ? this.options.prepend + t.toString()
          : t.toString();
      },
    },
    {
      key: "shouldUseIntlApi",
      value: function () {
        return !Kt.includes(this.options.compatibilityJSON);
      },
    },
  ]);
  var Jt = Wt;
  function Wt(e) {
    var r,
      t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    i(this, Wt),
      (this.languageUtils = e),
      (this.options = t),
      (this.logger = c.create("pluralResolver")),
      (this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON) ||
        ("undefined" != typeof Intl && Intl.PluralRules) ||
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules =
        ((r = {}),
        Vt.forEach(function (t) {
          t.lngs.forEach(function (e) {
            r[e] = { numbers: t.nr, plurals: qt[t.fc] };
          });
        }),
        r));
  }
  function Xt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function m(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Xt(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Xt(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  n(Qt, [
    {
      key: "init",
      value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = (e.interpolation || (e.interpolation = { escapeValue: !0 }), e.interpolation);
        (this.escape = void 0 !== e.escape ? e.escape : Nt),
          (this.escapeValue = void 0 === e.escapeValue || e.escapeValue),
          (this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
          (this.prefix = e.prefix ? kt(e.prefix) : e.prefixEscaped || "{{"),
          (this.suffix = e.suffix ? kt(e.suffix) : e.suffixEscaped || "}}"),
          (this.formatSeparator = e.formatSeparator || e.formatSeparator || ","),
          (this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-"),
          (this.unescapeSuffix = (!this.unescapePrefix && e.unescapeSuffix) || ""),
          (this.nestingPrefix = e.nestingPrefix ? kt(e.nestingPrefix) : e.nestingPrefixEscaped || kt("$t(")),
          (this.nestingSuffix = e.nestingSuffix ? kt(e.nestingSuffix) : e.nestingSuffixEscaped || kt(")")),
          (this.nestingOptionsSeparator = e.nestingOptionsSeparator || e.nestingOptionsSeparator || ","),
          (this.maxReplaces = e.maxReplaces || 1e3),
          (this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat),
          this.resetRegExp();
      },
    },
    {
      key: "reset",
      value: function () {
        this.options && this.init(this.options);
      },
    },
    {
      key: "resetRegExp",
      value: function () {
        var e = "".concat(this.prefix, "(.+?)").concat(this.suffix),
          e =
            ((this.regexp = new RegExp(e, "g")),
            ""
              .concat(this.prefix)
              .concat(this.unescapePrefix, "(.+?)")
              .concat(this.unescapeSuffix)
              .concat(this.suffix)),
          e =
            ((this.regexpUnescape = new RegExp(e, "g")),
            "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix));
        this.nestingRegexp = new RegExp(e, "g");
      },
    },
    {
      key: "interpolate",
      value: function (a, o, i, s) {
        var l,
          c,
          u,
          p = this,
          d = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
        function t(e) {
          return e.replace(/\$/g, "$$$$");
        }
        this.resetRegExp();
        var h = (s && s.missingInterpolationHandler) || this.options.missingInterpolationHandler,
          f = (s && s.interpolation && void 0 !== s.interpolation.skipOnVariables ? s : this.options).interpolation
            .skipOnVariables;
        return (
          [
            { regex: this.regexpUnescape, safeValue: t },
            {
              regex: this.regexp,
              safeValue: function (e) {
                return p.escapeValue ? t(p.escape(e)) : t(e);
              },
            },
          ].forEach(function (e) {
            for (u = 0; (l = e.regex.exec(a)); ) {
              var t = l[1].trim();
              if (
                (n = void 0) ===
                (c =
                  (r = t).indexOf(p.formatSeparator) < 0
                    ? ((n = St(o, d, r)),
                      p.alwaysFormat ? p.format(n, void 0, i, m(m(m({}, s), o), {}, { interpolationkey: r })) : n)
                    : ((r = (n = r.split(p.formatSeparator)).shift().trim()),
                      (n = n.join(p.formatSeparator).trim()),
                      p.format(St(o, d, r), n, i, m(m(m({}, s), o), {}, { interpolationkey: r }))))
              )
                if ("function" == typeof h) {
                  n = h(a, l, s);
                  c = "string" == typeof n ? n : "";
                } else {
                  if (!s || !s.hasOwnProperty(t)) {
                    if (f) {
                      c = l[0];
                      continue;
                    }
                    p.logger.warn("missed to pass in variable ".concat(t, " for interpolating ").concat(a));
                  }
                  c = "";
                }
              else "string" == typeof c || p.useRawValueToEscape || (c = bt(c));
              r = e.safeValue(c);
              if (
                ((a = a.replace(l[0], r)),
                f ? ((e.regex.lastIndex += c.length), (e.regex.lastIndex -= l[0].length)) : (e.regex.lastIndex = 0),
                ++u >= p.maxReplaces)
              )
                break;
            }
            var r, n;
          }),
          a
        );
      },
    },
    {
      key: "nest",
      value: function (e, t) {
        var r,
          n = this,
          a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        function o(t, e) {
          var r = this.nestingOptionsSeparator;
          if (!(t.indexOf(r) < 0)) {
            var n = t.split(new RegExp("".concat(r, "[ ]*{"))),
              a = "{".concat(n[1]),
              n = ((t = n[0]), (a = this.interpolate(a, i)).match(/'/g)),
              o = a.match(/"/g);
            ((n && n.length % 2 == 0 && !o) || o.length % 2 != 0) && (a = a.replace(/'/g, '"'));
            try {
              (i = JSON.parse(a)), e && (i = m(m({}, e), i));
            } catch (e) {
              return (
                this.logger.warn("failed parsing options string in nesting for key ".concat(t), e),
                "".concat(t).concat(r).concat(a)
              );
            }
            delete i.defaultValue;
          }
          return t;
        }
        for (; (r = this.nestingRegexp.exec(e)); ) {
          var i,
            s,
            l = [],
            c =
              (((i = (i = m({}, a)).replace && "string" != typeof i.replace ? i.replace : i).applyPostProcessor = !1),
              delete i.defaultValue,
              !1);
          if (
            (-1 === r[0].indexOf(this.formatSeparator) ||
              /{.*}/.test(r[1]) ||
              ((s = r[1].split(this.formatSeparator).map(function (e) {
                return e.trim();
              })),
              (r[1] = s.shift()),
              (l = s),
              (c = !0)),
            (s = t(o.call(this, r[1].trim(), i), i)) && r[0] === e && "string" != typeof s)
          )
            return s;
          (s = "string" != typeof s ? bt(s) : s) ||
            (this.logger.warn("missed to resolve ".concat(r[1], " for nesting ").concat(e)), (s = "")),
            c &&
              (s = l.reduce(function (e, t) {
                return n.format(e, t, a.lng, m(m({}, a), {}, { interpolationkey: r[1].trim() }));
              }, s.trim())),
            (e = e.replace(r[0], s)),
            (this.regexp.lastIndex = 0);
        }
        return e;
      },
    },
  ]);
  var Yt = Qt;
  function Qt() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, Qt),
      (this.logger = c.create("interpolator")),
      (this.options = e),
      (this.format =
        (e.interpolation && e.interpolation.format) ||
        function (e) {
          return e;
        }),
      this.init(e);
  }
  function Zt(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function p(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Zt(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Zt(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function er(o) {
    var i = {};
    return function (e, t, r) {
      var n = t + JSON.stringify(r),
        a = i[n];
      return a || ((a = o(t, r)), (i[n] = a)), a(e);
    };
  }
  n(rr, [
    {
      key: "init",
      value: function (e) {
        var t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }).interpolation;
        this.formatSeparator = t.formatSeparator || t.formatSeparator || ",";
      },
    },
    {
      key: "add",
      value: function (e, t) {
        this.formats[e.toLowerCase().trim()] = t;
      },
    },
    {
      key: "addCached",
      value: function (e, t) {
        this.formats[e.toLowerCase().trim()] = er(t);
      },
    },
    {
      key: "format",
      value: function (e, t, s, l) {
        var c = this;
        return t.split(this.formatSeparator).reduce(function (e, t) {
          (n = (t = t).toLowerCase().trim()),
            (r = {}),
            -1 < t.indexOf("(") &&
              ((n = (t = t.split("("))[0].toLowerCase().trim()),
              (t = t[1].substring(0, t[1].length - 1)),
              "currency" === n && t.indexOf(":") < 0
                ? r.currency || (r.currency = t.trim())
                : "relativetime" === n && t.indexOf(":") < 0
                ? r.range || (r.range = t.trim())
                : t.split(";").forEach(function (e) {
                    var t;
                    e &&
                      ((t = (e = pt(e.split(":")))[0]),
                      (e = e
                        .slice(1)
                        .join(":")
                        .trim()
                        .replace(/^'+|'+$/g, "")),
                      r[t.trim()] || (r[t.trim()] = e),
                      "false" === e && (r[t.trim()] = !1),
                      "true" === e && (r[t.trim()] = !0),
                      isNaN(e) || (r[t.trim()] = parseInt(e, 10)));
                  }));
          var r,
            t = { formatName: n, formatOptions: r },
            n = t.formatName,
            t = t.formatOptions;
          if (c.formats[n]) {
            var a = e;
            try {
              var o = (l && l.formatParams && l.formatParams[l.interpolationkey]) || {},
                i = o.locale || o.lng || l.locale || l.lng || s,
                a = c.formats[n](e, i, p(p(p({}, t), l), o));
            } catch (e) {
              c.logger.warn(e);
            }
            return a;
          }
          return c.logger.warn("there was no format function for ".concat(n)), e;
        }, e);
      },
    },
  ]);
  var tr = rr;
  function rr() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, rr),
      (this.logger = c.create("formatter")),
      (this.options = e),
      (this.formats = {
        number: er(function (e, t) {
          var r = new Intl.NumberFormat(e, t);
          return function (e) {
            return r.format(e);
          };
        }),
        currency: er(function (e, t) {
          var r = new Intl.NumberFormat(e, p(p({}, t), {}, { style: "currency" }));
          return function (e) {
            return r.format(e);
          };
        }),
        datetime: er(function (e, t) {
          var r = new Intl.DateTimeFormat(e, p({}, t));
          return function (e) {
            return r.format(e);
          };
        }),
        relativetime: er(function (e, t) {
          var r = new Intl.RelativeTimeFormat(e, p({}, t));
          return function (e) {
            return r.format(e, t.range || "day");
          };
        }),
        list: er(function (e, t) {
          var r = new Intl.ListFormat(e, p({}, t));
          return function (e) {
            return r.format(e);
          };
        }),
      }),
      this.init(e);
  }
  function nr(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function ar(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? nr(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : nr(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function or(r) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = a(r);
      return it(this, n ? ((e = a(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  ot(lr, u),
    (ir = or(lr)),
    n(lr, [
      {
        key: "queueLoad",
        value: function (e, t, a, r) {
          var o = this,
            i = {},
            s = {},
            l = {},
            c = {};
          return (
            e.forEach(function (r) {
              var n = !0;
              t.forEach(function (e) {
                var t = "".concat(r, "|").concat(e);
                !a.reload && o.store.hasResourceBundle(r, e)
                  ? (o.state[t] = 2)
                  : o.state[t] < 0 ||
                    (1 === o.state[t]
                      ? void 0 === s[t] && (s[t] = !0)
                      : ((o.state[t] = 1),
                        (n = !1),
                        void 0 === s[t] && (s[t] = !0),
                        void 0 === i[t] && (i[t] = !0),
                        void 0 === c[e] && (c[e] = !0)));
              }),
                n || (l[r] = !0);
            }),
            (Object.keys(i).length || Object.keys(s).length) &&
              this.queue.push({ pending: s, pendingCount: Object.keys(s).length, loaded: {}, errors: [], callback: r }),
            {
              toLoad: Object.keys(i),
              pending: Object.keys(s),
              toLoadLanguages: Object.keys(l),
              toLoadNamespaces: Object.keys(c),
            }
          );
        },
      },
      {
        key: "loaded",
        value: function (o, i, e) {
          var t = o.split("|"),
            s = t[0],
            l = t[1],
            c =
              (i && this.emit("failedLoading", s, l, i),
              e && this.store.addResourceBundle(s, l, e),
              (this.state[o] = i ? -1 : 2),
              {});
          this.queue.forEach(function (r) {
            var e, t, n, a;
            (e = r.loaded),
              (t = l),
              (n = (e = yt(e, (n = [s]), Object)).obj),
              (e = e.k),
              (n[e] = n[e] || []),
              a && (n[e] = n[e].concat(t)),
              a || n[e].push(t),
              (a = o),
              void 0 !== (n = r).pending[a] && (delete n.pending[a], n.pendingCount--),
              i && r.errors.push(i),
              0 !== r.pendingCount ||
                r.done ||
                (Object.keys(r.loaded).forEach(function (t) {
                  c[t] || (c[t] = {});
                  var e = r.loaded[t];
                  e.length &&
                    e.forEach(function (e) {
                      void 0 === c[t][e] && (c[t][e] = !0);
                    });
                }),
                (r.done = !0),
                r.errors.length ? r.callback(r.errors) : r.callback());
          }),
            this.emit("loaded", c),
            (this.queue = this.queue.filter(function (e) {
              return !e.done;
            }));
        },
      },
      {
        key: "read",
        value: function (n, a, o) {
          var i = this,
            s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
            l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
            c = 5 < arguments.length ? arguments[5] : void 0;
          if (!n.length) return c(null, {});
          if (this.readingCalls >= this.maxParallelReads)
            this.waitingReads.push({ lng: n, ns: a, fcName: o, tried: s, wait: l, callback: c });
          else {
            this.readingCalls++;
            function t(e, t) {
              var r;
              i.readingCalls--,
                0 < i.waitingReads.length &&
                  ((r = i.waitingReads.shift()), i.read(r.lng, r.ns, r.fcName, r.tried, r.wait, r.callback)),
                e && t && s < i.maxRetries
                  ? setTimeout(function () {
                      i.read.call(i, n, a, o, s + 1, 2 * l, c);
                    }, l)
                  : c(e, t);
            }
            var e = this.backend[o].bind(this.backend);
            if (2 !== e.length) return e(n, a, t);
            try {
              var r = e(n, a);
              r && "function" == typeof r.then
                ? r
                    .then(function (e) {
                      return t(null, e);
                    })
                    .catch(t)
                : t(null, r);
            } catch (e) {
              t(e);
            }
          }
        },
      },
      {
        key: "prepareLoading",
        value: function (e, t) {
          var r = this,
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            a = 3 < arguments.length ? arguments[3] : void 0;
          if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
          "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e));
          n = this.queueLoad(e, (t = "string" == typeof t ? [t] : t), n, a);
          if (!n.toLoad.length) return n.pending.length || a(), null;
          n.toLoad.forEach(function (e) {
            r.loadOne(e);
          });
        },
      },
      {
        key: "load",
        value: function (e, t, r) {
          this.prepareLoading(e, t, {}, r);
        },
      },
      {
        key: "reload",
        value: function (e, t, r) {
          this.prepareLoading(e, t, { reload: !0 }, r);
        },
      },
      {
        key: "loadOne",
        value: function (r) {
          var n = this,
            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            e = r.split("|"),
            o = e[0],
            i = e[1];
          this.read(o, i, "read", void 0, void 0, function (e, t) {
            e && n.logger.warn("".concat(a, "loading namespace ").concat(i, " for language ").concat(o, " failed"), e),
              !e && t && n.logger.log("".concat(a, "loaded namespace ").concat(i, " for language ").concat(o), t),
              n.loaded(r, e, t);
          });
        },
      },
      {
        key: "saveMissing",
        value: function (e, t, r, n, a) {
          var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {},
            i = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : function () {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          )
            this.logger.warn(
              'did not save key "'.concat(r, '" as the namespace "').concat(t, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
          else if (null != r && "" !== r) {
            if (this.backend && this.backend.create) {
              var o = ar(ar({}, o), {}, { isUpdate: a }),
                s = this.backend.create.bind(this.backend);
              if (s.length < 6)
                try {
                  var l = 5 === s.length ? s(e, t, r, n, o) : s(e, t, r, n);
                  l && "function" == typeof l.then
                    ? l
                        .then(function (e) {
                          return i(null, e);
                        })
                        .catch(i)
                    : i(null, l);
                } catch (e) {
                  i(e);
                }
              else s(e, t, r, n, i, o);
            }
            e && e[0] && this.store.addResource(e[0], t, r, n);
          }
        },
      },
    ]);
  var ir,
    sr = lr;
  function lr(e, t, r) {
    var n,
      a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
    return (
      i(this, lr),
      (n = ir.call(this)),
      Ct && u.call(l(n)),
      (n.backend = e),
      (n.store = t),
      (n.services = r),
      (n.languageUtils = r.languageUtils),
      (n.options = a),
      (n.logger = c.create("backendConnector")),
      (n.waitingReads = []),
      (n.maxParallelReads = a.maxParallelReads || 10),
      (n.readingCalls = 0),
      (n.maxRetries = 0 <= a.maxRetries ? a.maxRetries : 5),
      (n.retryTimeout = 1 <= a.retryTimeout ? a.retryTimeout : 350),
      (n.state = {}),
      (n.queue = []),
      n.backend && n.backend.init && n.backend.init(r, a.backend, a),
      n
    );
  }
  function cr() {
    return {
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !0,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function (e) {
        var t,
          r = {};
        return (
          "object" === R(e[1]) && (r = e[1]),
          "string" == typeof e[1] && (r.defaultValue = e[1]),
          "string" == typeof e[2] && (r.tDescription = e[2]),
          ("object" !== R(e[2]) && "object" !== R(e[3])) ||
            ((t = e[3] || e[2]),
            Object.keys(t).forEach(function (e) {
              r[e] = t[e];
            })),
          r
        );
      },
      interpolation: {
        escapeValue: !0,
        format: function (e, t, r, n) {
          return e;
        },
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0,
      },
    };
  }
  function ur(e) {
    return (
      "string" == typeof e.ns && (e.ns = [e.ns]),
      "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
      "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf("cimode") < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      e
    );
  }
  function pr(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function d(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? pr(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : pr(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function dr(r) {
    var n = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = a(r);
      return it(this, n ? ((e = a(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  function hr() {}
  ot(gr, u),
    (fr = dr(gr)),
    n(gr, [
      {
        key: "init",
        value: function () {
          var e,
            t,
            a = this,
            r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            n = 1 < arguments.length ? arguments[1] : void 0,
            o =
              ("function" == typeof r && ((n = r), (r = {})),
              !r.defaultNS &&
                !1 !== r.defaultNS &&
                r.ns &&
                ("string" == typeof r.ns
                  ? (r.defaultNS = r.ns)
                  : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0])),
              cr());
          function i(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          (this.options = d(d(d({}, o), this.options), ur(r))),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = d(d({}, o.interpolation), this.options.interpolation)),
            void 0 !== r.keySeparator && (this.options.userDefinedKeySeparator = r.keySeparator),
            void 0 !== r.nsSeparator && (this.options.userDefinedNsSeparator = r.nsSeparator),
            this.options.isClone ||
              (this.modules.logger ? c.init(i(this.modules.logger), this.options) : c.init(null, this.options),
              this.modules.formatter ? (e = this.modules.formatter) : "undefined" != typeof Intl && (e = tr),
              (r = new Gt(this.options)),
              (this.store = new At(this.options.resources, this.options)),
              ((t = this.services).logger = c),
              (t.resourceStore = this.store),
              (t.languageUtils = r),
              (t.pluralResolver = new Jt(r, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              !e ||
                (this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format) ||
                ((t.formatter = i(e)),
                t.formatter.init(t, this.options),
                (this.options.interpolation.format = t.formatter.format.bind(t.formatter))),
              (t.interpolator = new Yt(this.options)),
              (t.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
              (t.backendConnector = new sr(i(this.modules.backend), t.resourceStore, t, this.options)),
              t.backendConnector.on("*", function (e) {
                for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++)
                  r[n - 1] = arguments[n];
                a.emit.apply(a, [e].concat(r));
              }),
              this.modules.languageDetector &&
                ((t.languageDetector = i(this.modules.languageDetector)),
                t.languageDetector.init && t.languageDetector.init(t, this.options.detection, this.options)),
              this.modules.i18nFormat &&
                ((t.i18nFormat = i(this.modules.i18nFormat)), t.i18nFormat.init && t.i18nFormat.init(this)),
              (this.translator = new Ft(this.services, this.options)),
              this.translator.on("*", function (e) {
                for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++)
                  r[n - 1] = arguments[n];
                a.emit.apply(a, [e].concat(r));
              }),
              this.modules.external.forEach(function (e) {
                e.init && e.init(a);
              })),
            (this.format = this.options.interpolation.format),
            (n = n || hr),
            !this.options.fallbackLng ||
              this.services.languageDetector ||
              this.options.lng ||
              (0 < (r = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)).length &&
                "dev" !== r[0] &&
                (this.options.lng = r[0])),
            this.services.languageDetector ||
              this.options.lng ||
              this.logger.warn("init: no languageDetector is used and no lng is defined");
          ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function (t) {
            a[t] = function () {
              var e;
              return (e = a.store)[t].apply(e, arguments);
            };
          });
          function s() {
            function e(e, t) {
              a.isInitialized &&
                !a.initializedStoreOnce &&
                a.logger.warn("init: i18next is already initialized. You should call init just once!"),
                (a.isInitialized = !0),
                a.options.isClone || a.logger.log("initialized", a.options),
                a.emit("initialized", a.options),
                l.resolve(t),
                n(e, t);
            }
            if (a.languages && "v1" !== a.options.compatibilityAPI && !a.isInitialized) return e(null, a.t.bind(a));
            a.changeLanguage(a.options.lng, e);
          }
          ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(function (t) {
            a[t] = function () {
              var e;
              return (e = a.store)[t].apply(e, arguments), a;
            };
          });
          var l = vt();
          return this.options.resources || !this.options.initImmediate ? s() : setTimeout(s, 0), l;
        },
      },
      {
        key: "loadResources",
        value: function (e) {
          var t = this,
            r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : hr,
            n = "string" == typeof e ? e : this.language;
          if (("function" == typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages)) {
            if (n && "cimode" === n.toLowerCase()) return r();
            function a(e) {
              e &&
                t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                  o.indexOf(e) < 0 && o.push(e);
                });
            }
            var o = [];
            n ? a(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(a),
              this.options.preload && this.options.preload.forEach(a),
              this.services.backendConnector.load(o, this.options.ns, function (e) {
                e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language), r(e);
              });
          } else r(null);
        },
      },
      {
        key: "reloadResources",
        value: function (e, t, r) {
          var n = vt();
          return (
            (e = e || this.languages),
            (t = t || this.options.ns),
            (r = r || hr),
            this.services.backendConnector.reload(e, t, function (e) {
              n.resolve(), r(e);
            }),
            n
          );
        },
      },
      {
        key: "use",
        value: function (e) {
          if (!e)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (e.type)
            return (
              "backend" === e.type && (this.modules.backend = e),
              ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
              "languageDetector" === e.type && (this.modules.languageDetector = e),
              "i18nFormat" === e.type && (this.modules.i18nFormat = e),
              "postProcessor" === e.type && _t.addPostProcessor(e),
              "formatter" === e.type && (this.modules.formatter = e),
              "3rdParty" === e.type && this.modules.external.push(e),
              this
            );
          throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        },
      },
      {
        key: "setResolvedLanguage",
        value: function (e) {
          if (e && this.languages && !(-1 < ["cimode", "dev"].indexOf(e)))
            for (var t = 0; t < this.languages.length; t++) {
              var r = this.languages[t];
              if (!(-1 < ["cimode", "dev"].indexOf(r)) && this.store.hasLanguageSomeTranslations(r)) {
                this.resolvedLanguage = r;
                break;
              }
            }
        },
      },
      {
        key: "changeLanguage",
        value: function (r, n) {
          function e(e) {
            var t =
              "string" == typeof (e = r || e || !a.services.languageDetector ? e : [])
                ? e
                : a.services.languageUtils.getBestMatchFromCodes(e);
            t &&
              (a.language || i(t),
              a.translator.language || a.translator.changeLanguage(t),
              a.services.languageDetector &&
                a.services.languageDetector.cacheUserLanguage &&
                a.services.languageDetector.cacheUserLanguage(t)),
              a.loadResources(t, function (e) {
                s(e, t);
              });
          }
          var a = this,
            o = ((this.isLanguageChangingTo = r), vt()),
            i =
              (this.emit("languageChanging", r),
              function (e) {
                (a.language = e),
                  (a.languages = a.services.languageUtils.toResolveHierarchy(e)),
                  (a.resolvedLanguage = void 0),
                  a.setResolvedLanguage(e);
              }),
            s = function (e, t) {
              t
                ? (i(t),
                  a.translator.changeLanguage(t),
                  (a.isLanguageChangingTo = void 0),
                  a.emit("languageChanged", t),
                  a.logger.log("languageChanged", t))
                : (a.isLanguageChangingTo = void 0),
                o.resolve(function () {
                  return a.t.apply(a, arguments);
                }),
                n &&
                  n(e, function () {
                    return a.t.apply(a, arguments);
                  });
            };
          return (
            r || !this.services.languageDetector || this.services.languageDetector.async
              ? !r && this.services.languageDetector && this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(e)
                  : this.services.languageDetector.detect(e)
                : e(r)
              : e(this.services.languageDetector.detect()),
            o
          );
        },
      },
      {
        key: "getFixedT",
        value: function (e, t, l) {
          function c(e, t) {
            var r;
            if ("object" !== R(t)) {
              for (var n = arguments.length, a = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++)
                a[o - 2] = arguments[o];
              r = u.options.overloadTranslationOptionHandler([e, t].concat(a));
            } else r = d({}, t);
            (r.lng = r.lng || c.lng),
              (r.lngs = r.lngs || c.lngs),
              (r.ns = r.ns || c.ns),
              (r.keyPrefix = r.keyPrefix || l || c.keyPrefix);
            var i = u.options.keySeparator || ".",
              s =
                r.keyPrefix && Array.isArray(e)
                  ? e.map(function (e) {
                      return "".concat(r.keyPrefix).concat(i).concat(e);
                    })
                  : r.keyPrefix
                  ? "".concat(r.keyPrefix).concat(i).concat(e)
                  : e;
            return u.t(s, r);
          }
          var u = this;
          return "string" == typeof e ? (c.lng = e) : (c.lngs = e), (c.ns = t), (c.keyPrefix = l), c;
        },
      },
      {
        key: "t",
        value: function () {
          var e;
          return this.translator && (e = this.translator).translate.apply(e, arguments);
        },
      },
      {
        key: "exists",
        value: function () {
          var e;
          return this.translator && (e = this.translator).exists.apply(e, arguments);
        },
      },
      {
        key: "setDefaultNamespace",
        value: function (e) {
          this.options.defaultNS = e;
        },
      },
      {
        key: "hasLoadedNamespace",
        value: function (e) {
          var r = this,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
          if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
          var n = this.resolvedLanguage || this.languages[0],
            a = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          function i(e, t) {
            return -1 === (e = r.services.backendConnector.state["".concat(e, "|").concat(t)]) || 2 === e;
          }
          if (t.precheck) {
            t = t.precheck(this, i);
            if (void 0 !== t) return t;
          }
          return (
            !!this.hasResourceBundle(n, e) ||
            !(
              this.services.backendConnector.backend &&
              (!this.options.resources || this.options.partialBundledLanguages)
            ) ||
            !(!i(n, e) || (a && !i(o, e)))
          );
        },
      },
      {
        key: "loadNamespaces",
        value: function (e, t) {
          var r = this,
            n = vt();
          return this.options.ns
            ? ((e = "string" == typeof e ? [e] : e).forEach(function (e) {
                r.options.ns.indexOf(e) < 0 && r.options.ns.push(e);
              }),
              this.loadResources(function (e) {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        },
      },
      {
        key: "loadLanguages",
        value: function (e, t) {
          var r = vt(),
            n = this.options.preload || [],
            e = (e = "string" == typeof e ? [e] : e).filter(function (e) {
              return n.indexOf(e) < 0;
            });
          return e.length
            ? ((this.options.preload = n.concat(e)),
              this.loadResources(function (e) {
                r.resolve(), t && t(e);
              }),
              r)
            : (t && t(), Promise.resolve());
        },
      },
      {
        key: "dir",
        value: function (e) {
          var t;
          return !(e =
            e ||
            this.resolvedLanguage ||
            (this.languages && 0 < this.languages.length ? this.languages[0] : this.language)) ||
            ((t = (this.services && this.services.languageUtils) || new Gt(cr())),
            -1 <
              [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(t.getLanguagePartFromCode(e)) || 1 < e.toLowerCase().indexOf("-arab"))
            ? "rtl"
            : "ltr";
        },
      },
      {
        key: "cloneInstance",
        value: function () {
          var t = this,
            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : hr,
            n = d(d(d({}, this.options), e), { isClone: !0 }),
            a = new gr(n);
          (void 0 === e.debug && void 0 === e.prefix) || (a.logger = a.logger.clone(e));
          return (
            ["store", "services", "language"].forEach(function (e) {
              a[e] = t[e];
            }),
            (a.services = d({}, this.services)),
            (a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
            (a.translator = new Ft(a.services, a.options)),
            a.translator.on("*", function (e) {
              for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
              a.emit.apply(a, [e].concat(r));
            }),
            a.init(n, r),
            (a.translator.options = a.options),
            (a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }),
            a
          );
        },
      },
      {
        key: "toJSON",
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]);
  var fr,
    mr = gr;
  function gr() {
    var e,
      t,
      r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      n = 1 < arguments.length ? arguments[1] : void 0;
    if (
      (i(this, gr),
      (e = fr.call(this)),
      Ct && u.call(l(e)),
      (e.options = ur(r)),
      (e.services = {}),
      (e.logger = c),
      (e.modules = { external: [] }),
      (t = l(e)),
      Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function (e) {
        "function" == typeof t[e] && (t[e] = t[e].bind(t));
      }),
      n && !e.isInitialized && !r.isClone)
    ) {
      if (!e.options.initImmediate) return e.init(r, n), it(e, l(e));
      setTimeout(function () {
        e.init(r, n);
      }, 0);
    }
    return e;
  }
  o(mr, "createInstance", function () {
    return new mr(
      0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      1 < arguments.length ? arguments[1] : void 0
    );
  });
  var h = mr.createInstance(),
    g =
      ((h.createInstance = mr.createInstance),
      h.createInstance,
      h.dir,
      h.init,
      h.loadResources,
      h.reloadResources,
      h.use,
      h.changeLanguage,
      h.getFixedT,
      h.t);
  h.exists, h.setDefaultNamespace, h.hasLoadedNamespace, h.loadNamespaces, h.loadLanguages;
  function vr(e, t) {
    if (null == e) return {};
    var r,
      n = (function (e, t) {
        if (null == e) return {};
        for (var r, n = {}, a = Object.keys(e), o = 0; o < a.length; o++)
          (r = a[o]), 0 <= t.indexOf(r) || (n[r] = e[r]);
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++)
        (r = a[o]), 0 <= t.indexOf(r) || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
    return n;
  }
  b("react"), b("react"), t(X());
  var br = {};
  function yr() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    ("string" == typeof t[0] && br[t[0]]) ||
      ("string" == typeof t[0] && (br[t[0]] = new Date()),
      function () {
        if (console && console.warn) {
          for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
          "string" == typeof r[0] && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r);
        }
      }.apply(void 0, t));
  }
  function Er(t, e, r) {
    t.loadNamespaces(e, function () {
      t.isInitialized
        ? r()
        : t.on("initialized", function e() {
            setTimeout(function () {
              t.off("initialized", e);
            }, 0),
              r();
          });
    });
  }
  function wr(r, e, t) {
    var n = 2 < arguments.length && void 0 !== t ? t : {};
    return e.languages && e.languages.length
      ? void 0 !== e.options.ignoreJSONStructure
        ? e.hasLoadedNamespace(r, {
            precheck: function (e, t) {
              if (
                n.bindI18n &&
                -1 < n.bindI18n.indexOf("languageChanging") &&
                e.services.backendConnector.backend &&
                e.isLanguageChangingTo &&
                !t(e.isLanguageChangingTo, r)
              )
                return !1;
            },
          })
        : (function (e, r, t) {
            var n,
              a = 2 < arguments.length && void 0 !== t ? t : {},
              o = r.languages[0],
              i = !!r.options && r.options.fallbackLng,
              s = r.languages[r.languages.length - 1];
            return (
              "cimode" === o.toLowerCase() ||
              ((n = function (e, t) {
                e = r.services.backendConnector.state["".concat(e, "|").concat(t)];
                return -1 === e || 2 === e;
              }),
              !(
                a.bindI18n &&
                -1 < a.bindI18n.indexOf("languageChanging") &&
                r.services.backendConnector.backend &&
                r.isLanguageChangingTo &&
                !n(r.isLanguageChangingTo, e)
              ) &&
                (!!r.hasResourceBundle(o, e) ||
                  !(
                    r.services.backendConnector.backend &&
                    (!r.options.resources || r.options.partialBundledLanguages)
                  ) ||
                  !(!n(o, e) || (i && !n(s, e)))))
            );
          })(r, e, n)
      : (yr("i18n.languages were undefined or empty", e.languages), !0);
  }
  function Sr(e) {
    return Or[e];
  }
  var kr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    Or = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "©",
      "&#169;": "©",
      "&reg;": "®",
      "&#174;": "®",
      "&hellip;": "…",
      "&#8230;": "…",
      "&#x2F;": "/",
      "&#47;": "/",
    };
  function Nr(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function Cr(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Nr(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Nr(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  var Ir,
    xr = {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: !0,
      transWrapTextNodes: "",
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
      useSuspense: !0,
      unescape: function (e) {
        return e.replace(kr, Sr);
      },
    };
  var X = {
      type: "3rdParty",
      init: function (e) {
        !(function (e) {
          var t = 0 < arguments.length && void 0 !== e ? e : {};
          xr = Cr(Cr({}, xr), t);
        })(e.options.react),
          (Ir = e);
      },
    },
    Lr = (0, b("react").createContext)(),
    Rr =
      (n(Pr, [
        {
          key: "addUsedNamespaces",
          value: function (e) {
            var t = this;
            e.forEach(function (e) {
              t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
            });
          },
        },
        {
          key: "getUsedNamespaces",
          value: function () {
            return Object.keys(this.usedNamespaces);
          },
        },
      ]),
      Pr);
  function Pr() {
    i(this, Pr), (this.usedNamespaces = {});
  }
  function Ar(e, t) {
    return (
      st(e) ||
      (function (e, t) {
        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (null != r) {
          var n,
            a,
            o,
            i,
            s = [],
            l = !0,
            c = !1;
          try {
            if (((o = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              l = !1;
            } else for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = !0);
          } catch (e) {
            (c = !0), (a = e);
          } finally {
            try {
              if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
            } finally {
              if (c) throw a;
            }
          }
          return s;
        }
      })(e, t) ||
      ct(e, t) ||
      ut()
    );
  }
  var Tr = b("react");
  function _r(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function jr(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? _r(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : _r(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  var Dr = function (e, t) {
    var r = (0, Tr.useRef)();
    return (
      (0, Tr.useEffect)(
        function () {
          r.current = t ? r.current : e;
        },
        [e, t]
      ),
      r.current
    );
  };
  function Mr(e, t) {
    var r = 1 < arguments.length && void 0 !== t ? t : {},
      n = r.i18n,
      a = (0, Tr.useContext)(Lr) || {},
      o = a.i18n,
      a = a.defaultNS,
      i = n || o || Ir;
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new Rr()), !i))
      return (
        yr("You will need to pass in an i18next instance by using initReactI18next"),
        ((o = [
          (n = function (e) {
            return Array.isArray(e) ? e[e.length - 1] : e;
          }),
          {},
          !1,
        ]).t = n),
        (o.i18n = {}),
        (o.ready = !1),
        o
      );
    i.options.react &&
      void 0 !== i.options.react.wait &&
      yr("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    var s = jr(jr(jr({}, xr), i.options.react), r),
      l = s.useSuspense,
      c = s.keyPrefix,
      u = "string" == typeof (u = e || a || (i.options && i.options.defaultNS)) ? [u] : u || ["translation"],
      p =
        (i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(u),
        (i.isInitialized || i.initializedStoreOnce) &&
          u.every(function (e) {
            return wr(e, i, s);
          }));
    function d() {
      return i.getFixedT(null, "fallback" === s.nsMode ? u : u[0], c);
    }
    var n = Ar((0, Tr.useState)(d), 2),
      o = n[0],
      h = n[1],
      f = u.join(),
      m = Dr(f),
      g = (0, Tr.useRef)(!0),
      v =
        ((0, Tr.useEffect)(
          function () {
            var e = s.bindI18n,
              t = s.bindI18nStore;
            function r() {
              g.current && h(d);
            }
            return (
              (g.current = !0),
              p ||
                l ||
                Er(i, u, function () {
                  g.current && h(d);
                }),
              p && m && m !== f && g.current && h(d),
              e && i && i.on(e, r),
              t && i && i.store.on(t, r),
              function () {
                (g.current = !1),
                  e &&
                    i &&
                    e.split(" ").forEach(function (e) {
                      return i.off(e, r);
                    }),
                  t &&
                    i &&
                    t.split(" ").forEach(function (e) {
                      return i.store.off(e, r);
                    });
              }
            );
          },
          [i, f]
        ),
        (0, Tr.useRef)(!0)),
      r =
        ((0, Tr.useEffect)(
          function () {
            g.current && !v.current && h(d), (v.current = !1);
          },
          [i, c]
        ),
        [o, i, p]);
    if (((r.t = o), (r.i18n = i), (r.ready = p) || (!p && !l))) return r;
    throw new Promise(function (e) {
      Er(i, u, function () {
        e();
      });
    });
  }
  var $r = b("react"),
    Fr = ["forwardedRef"];
  function Br(t, e) {
    var r,
      n = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((r = Object.getOwnPropertySymbols(t)),
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        n.push.apply(n, r)),
      n
    );
  }
  function Ur(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Br(Object(r), !0).forEach(function (e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : Br(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function Gr(i, e) {
    var s = 1 < arguments.length && void 0 !== e ? e : {};
    return function (o) {
      function r(e) {
        var t = e.forwardedRef,
          e = vr(e, Fr),
          r = Ar(Mr(i, Ur(Ur({}, e), {}, { keyPrefix: s.keyPrefix })), 3),
          n = r[0],
          a = r[1],
          r = r[2],
          e = Ur(Ur({}, e), {}, { t: n, i18n: a, tReady: r });
        return s.withRef && t ? (e.ref = t) : !s.withRef && t && (e.forwardedRef = t), (0, $r.createElement)(o, e);
      }
      var e;
      (r.displayName = "withI18nextTranslation(".concat(
        (e = o).displayName || e.name || ("string" == typeof e && 0 < e.length ? e : "Unknown"),
        ")"
      )),
        (r.WrappedComponent = o);
      return s.withRef
        ? (0, $r.forwardRef)(function (e, t) {
            return (0, $r.createElement)(r, Object.assign({}, e, { forwardedRef: t }));
          })
        : r;
    };
  }
  b("react"), b("react"), b("react");
  function Hr(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  var Vr = [],
    qr = Vr.forEach,
    Kr = Vr.slice;
  function zr() {
    if (null === en)
      try {
        en = "undefined" !== window && null !== window.localStorage;
        var e = "i18next.translate.boo";
        window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
      } catch (e) {
        en = !1;
      }
    return en;
  }
  function Jr() {
    if (null === rn)
      try {
        rn = "undefined" !== window && null !== window.sessionStorage;
        var e = "i18next.translate.boo";
        window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
      } catch (e) {
        rn = !1;
      }
    return rn;
  }
  var Wr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    Xr = function (e, t, r, n) {
      var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
      r && ((a.expires = new Date()), a.expires.setTime(a.expires.getTime() + 60 * r * 1e3)),
        n && (a.domain = n),
        (document.cookie = (function (e, t, r) {
          var r = r || {},
            t = ((r.path = r.path || "/"), encodeURIComponent(t)),
            n = "".concat(e, "=").concat(t);
          if (0 < r.maxAge) {
            e = +r.maxAge;
            if (Number.isNaN(e)) throw new Error("maxAge should be a Number");
            n += "; Max-Age=".concat(Math.floor(e));
          }
          if (r.domain) {
            if (!Wr.test(r.domain)) throw new TypeError("option domain is invalid");
            n += "; Domain=".concat(r.domain);
          }
          if (r.path) {
            if (!Wr.test(r.path)) throw new TypeError("option path is invalid");
            n += "; Path=".concat(r.path);
          }
          if (r.expires) {
            if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
            n += "; Expires=".concat(r.expires.toUTCString());
          }
          if ((r.httpOnly && (n += "; HttpOnly"), r.secure && (n += "; Secure"), r.sameSite))
            switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
              case !0:
                n += "; SameSite=Strict";
                break;
              case "lax":
                n += "; SameSite=Lax";
                break;
              case "strict":
                n += "; SameSite=Strict";
                break;
              case "none":
                n += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          return n;
        })(e, encodeURIComponent(t), a));
    },
    Yr = function (e) {
      for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
        for (var a = r[n]; " " === a.charAt(0); ) a = a.substring(1, a.length);
        if (0 === a.indexOf(t)) return a.substring(t.length, a.length);
      }
      return null;
    },
    Qr = {
      name: "cookie",
      lookup: function (e) {
        var t;
        return (t = e.lookupCookie && "undefined" != typeof document && (e = Yr(e.lookupCookie)) ? e : t);
      },
      cacheUserLanguage: function (e, t) {
        t.lookupCookie &&
          "undefined" != typeof document &&
          Xr(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
      },
    },
    Zr = {
      name: "querystring",
      lookup: function (e) {
        var t;
        if ("undefined" != typeof window)
          for (
            var r = window.location.search,
              n = (r =
                !window.location.search && window.location.hash && -1 < window.location.hash.indexOf("?")
                  ? window.location.hash.substring(window.location.hash.indexOf("?"))
                  : r)
                .substring(1)
                .split("&"),
              a = 0;
            a < n.length;
            a++
          ) {
            var o = n[a].indexOf("=");
            0 < o && n[a].substring(0, o) === e.lookupQuerystring && (t = n[a].substring(o + 1));
          }
        return t;
      },
    },
    en = null,
    tn = {
      name: "localStorage",
      lookup: function (e) {
        var t;
        return e.lookupLocalStorage && zr() && (e = window.localStorage.getItem(e.lookupLocalStorage)) && (t = e), t;
      },
      cacheUserLanguage: function (e, t) {
        t.lookupLocalStorage && zr() && window.localStorage.setItem(t.lookupLocalStorage, e);
      },
    },
    rn = null,
    nn = {
      name: "sessionStorage",
      lookup: function (e) {
        var t;
        return (
          e.lookupSessionStorage && Jr() && (e = window.sessionStorage.getItem(e.lookupSessionStorage)) && (t = e), t
        );
      },
      cacheUserLanguage: function (e, t) {
        t.lookupSessionStorage && Jr() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
      },
    },
    an = {
      name: "navigator",
      lookup: function (e) {
        var t = [];
        if ("undefined" != typeof navigator) {
          if (navigator.languages) for (var r = 0; r < navigator.languages.length; r++) t.push(navigator.languages[r]);
          navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
        }
        return 0 < t.length ? t : void 0;
      },
    },
    on = {
      name: "htmlTag",
      lookup: function (e) {
        var t,
          e = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
        return (t = e && "function" == typeof e.getAttribute ? e.getAttribute("lang") : t);
      },
    },
    sn = {
      name: "path",
      lookup: function (e) {
        var t;
        if ("undefined" != typeof window) {
          var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (r instanceof Array)
            if ("number" == typeof e.lookupFromPathIndex) {
              if ("string" != typeof r[e.lookupFromPathIndex]) return;
              t = r[e.lookupFromPathIndex].replace("/", "");
            } else t = r[0].replace("/", "");
        }
        return t;
      },
    },
    ln = {
      name: "subdomain",
      lookup: function (e) {
        var e = "number" == typeof e.lookupFromSubdomainIndex ? e.lookupFromSubdomainIndex + 1 : 1,
          t =
            "undefined" != typeof window &&
            window.location &&
            window.location.hostname &&
            window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
        if (t) return t[e];
      },
    };
  var Vr = (function () {
      function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          r = this,
          n = a;
        if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
        (this.type = "languageDetector"), (this.detectors = {}), this.init(e, t);
      }
      var e, t, r;
      return (
        (e = a),
        (t = [
          {
            key: "init",
            value: function (e) {
              var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
              (this.services = e),
                (this.options = (function (r) {
                  return (
                    qr.call(Kr.call(arguments, 1), function (e) {
                      if (e) for (var t in e) void 0 === r[t] && (r[t] = e[t]);
                    }),
                    r
                  );
                })(t, this.options || {}, {
                  order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                  lookupQuerystring: "lng",
                  lookupCookie: "i18next",
                  lookupLocalStorage: "i18nextLng",
                  lookupSessionStorage: "i18nextLng",
                  caches: ["localStorage"],
                  excludeCacheFor: ["cimode"],
                })),
                this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                (this.i18nOptions = r),
                this.addDetector(Qr),
                this.addDetector(Zr),
                this.addDetector(tn),
                this.addDetector(nn),
                this.addDetector(an),
                this.addDetector(on),
                this.addDetector(sn),
                this.addDetector(ln);
            },
          },
          {
            key: "addDetector",
            value: function (e) {
              this.detectors[e.name] = e;
            },
          },
          {
            key: "detect",
            value: function (e) {
              var t = this,
                r = ((e = e || this.options.order), []);
              return (
                e.forEach(function (e) {
                  t.detectors[e] &&
                    (e = (e = t.detectors[e].lookup(t.options)) && "string" == typeof e ? [e] : e) &&
                    (r = r.concat(e));
                }),
                this.services.languageUtils.getBestMatchFromCodes ? r : 0 < r.length ? r[0] : null
              );
            },
          },
          {
            key: "cacheUserLanguage",
            value: function (t, e) {
              var r = this;
              !(e = e || this.options.caches) ||
                (this.options.excludeCacheFor && -1 < this.options.excludeCacheFor.indexOf(t)) ||
                e.forEach(function (e) {
                  r.detectors[e] && r.detectors[e].cacheUserLanguage(t, r.options);
                });
            },
          },
        ]) && Hr(e.prototype, t),
        r && Hr(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        a
      );
    })(),
    f = ((Vr.type = "languageDetector"), t(b("react"))),
    cn = t(Be()),
    un = (t(r()), "0.8.5"),
    pn = "marketplace:installed-extensions",
    v = "marketplace:installed-snippets",
    dn = "marketplace:installed-themes",
    hn = "marketplace:active-tab",
    fn = "marketplace:tabs",
    mn = "marketplace:sort-by",
    gn = "marketplace:theme-installed",
    vn = "marketplace:albumArtBasedColors",
    bn = [
      { name: "Extensions", enabled: !0 },
      { name: "Themes", enabled: !0 },
      { name: "Snippets", enabled: !0 },
      { name: "Apps", enabled: !0 },
      { name: "Installed", enabled: !0 },
    ],
    y = 100,
    yn = "/marketplace",
    En = "https://api.github.com/repos/spicetify/spicetify-marketplace/releases/tags/v0.8.5",
    E = (t, e) => {
      t = localStorage.getItem(t);
      if (!t) return e;
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    },
    wn = (e) => {
      const n = { section: /^\s*\[\s*([^\]]*)\s*\]\s*$/, param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/, comment: /^\s*;.*$/ },
        a = {},
        t = e.split(/[\r\n]+/);
      let o = null;
      return (
        t.forEach(function (e) {
          if (!n.comment.test(e))
            if (n.param.test(e)) {
              const r = e.match(n.param);
              o
                ? (a[o][null == r ? void 0 : r[1]] = null == r ? void 0 : r[2].split(";")[0].trim())
                : r && (a[r[1]] = r[2].split(";")[0].trim());
            } else {
              var t;
              n.section.test(e)
                ? (t = e.match(n.section)) && ((a[t[1]] = {}), (o = t[1]))
                : 0 == e.length && o && (o = null);
            }
        }),
        a
      );
    },
    Sn = (e) => {
      const t = document.querySelector("style.marketplaceSnippets"),
        r = (t && t.remove(), document.createElement("style"));
      e = e.reduce(
        (e, t) =>
          (e =
            (e += `/* ${t.title} - ${t.description} */
`) +
            t.code +
            `
`),
        ""
      );
      (r.innerHTML = e), r.classList.add("marketplaceSnippets"), document.body.appendChild(r);
    },
    kn = (e, t) => {
      let r = [];
      return (
        e && 0 < e.length
          ? (r = e.map((e) => ({ name: e.name, url: Pn(e.url) })))
          : r.push({ name: t, url: "https://github.com/" + t }),
        r
      );
    },
    On = (e) => (e ? Object.keys(e).map((e) => ({ key: e, value: e })) : []),
    Nn = () => {
      console.debug("Resetting Marketplace"),
        Object.keys(localStorage).forEach((e) => {
          e.startsWith("marketplace:") && (localStorage.removeItem(e), console.debug("Removed " + e));
        }),
        console.debug("Marketplace has been reset"),
        location.reload();
    },
    Cn = (r) => {
      const e = document.querySelector("style.marketplaceCSS.marketplaceScheme");
      if ((e && e.remove(), r)) {
        const n = document.createElement("style");
        n.classList.add("marketplaceCSS"), n.classList.add("marketplaceScheme");
        let t = ":root {";
        const a = Object.keys(r);
        a.forEach((e) => {
          t =
            (t += `--spice-${e}: #${r[e]};`) +
            `--spice-rgb-${e}: ${((e) => {
              if (3 === e.length)
                e = e
                  .split("")
                  .map((e) => e + e)
                  .join("");
              else {
                if (6 != e.length) throw "Only 3- or 6-digit hex colours are allowed.";
                if (e.match(/[^0-9a-f]/i)) throw "Only hex colours are allowed.";
              }
              e = e.match(/.{1,2}/g);
              if (e && 3 === e.length) return [parseInt(e[0], 16), parseInt(e[1], 16), parseInt(e[2], 16)];
              throw "Could not parse hex colour.";
            })(r[e])};`;
        }),
          (t += "}"),
          (n.innerHTML = t),
          document.body.appendChild(n);
      }
    },
    In = (e) => {
      try {
        const t = document.querySelector("link[href='user.css']"),
          r = (t && t.remove(), document.querySelector("style.marketplaceCSS.marketplaceUserCSS"));
        if ((r && r.remove(), e)) {
          const n = document.createElement("style");
          n.classList.add("marketplaceCSS"),
            n.classList.add("marketplaceUserCSS"),
            (n.innerHTML = e),
            document.body.appendChild(n);
        } else {
          const a = document.createElement("link");
          a.setAttribute("rel", "stylesheet"),
            a.setAttribute("href", "user.css"),
            a.classList.add("userCSS"),
            document.body.appendChild(a);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    xn = async (e) => {
      if (!e.cssURL) throw new Error("No CSS URL provided");
      const t = ((e) => {
        const t = new URL(e);
        return t.host, t.host === "raw.githubusercontent.com";
      })(e.cssURL)
        ? `https://cdn.jsdelivr.net/gh/${e.user}/${e.repo}@${e.branch}/` + e.manifest.usercss
        : e.cssURL;
      var r,
        n = t.replace("/user.css", "/assets/");
      console.debug("Parsing CSS: ", t);
      let a = await fetch(t + "?time=" + Date.now()).then((e) => e.text());
      for (const o of a.matchAll(new RegExp(`url\\(['|"](?<path>.+?)['|"]\\)`, "gm")) || []) {
        const i = null == (r = null == o ? void 0 : o.groups) ? void 0 : r.path;
        !i || i.startsWith("http") || i.startsWith("data") || ((r = n + i.replace(/\.\//g, "")), (a = a.replace(i, r)));
      }
      return a;
    };
  async function Ln(e, t, r) {
    try {
      var n = { text: e, context: t + "/" + r, mode: "gfm" };
      const a = await fetch("https://api.github.com/markdown", { method: "POST", body: JSON.stringify(n) });
      if (a.ok) return await a.text();
      throw Spicetify.showNotification(`Error parsing markdown (HTTP ${a.status})`, !0);
    } catch (e) {
      return null;
    }
  }
  function Rn(e) {
    var t,
      r = "snippet" === e.type ? "snippet:" : `${e.item.user}/${e.item.repo}/`;
    let n;
    switch (e.type) {
      case "snippet":
        n = e.item.title.replaceAll(" ", "-");
        break;
      case "theme":
        n = (null == (t = e.item.manifest) ? void 0 : t.usercss) || "";
        break;
      case "extension":
        n = (null == (t = e.item.manifest) ? void 0 : t.main) || "";
        break;
      case "app":
        n = (null == (t = null == (t = e.item.manifest) ? void 0 : t.name) ? void 0 : t.replaceAll(" ", "-")) || "";
    }
    return "marketplace:installed:" + r + n;
  }
  var Pn = (e) => {
      const t = decodeURI(e).trim().toLowerCase();
      return t.startsWith("javascript:") || t.startsWith("data:") || t.startsWith("vbscript:") ? "about:blank" : e;
    },
    An = t(b("react")),
    w = t(b("react")),
    Tn = t(Ue()),
    _n = t(Ge()),
    jn =
      ((Be = Prism),
      (r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
      (Be.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp(
            "@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + r.source + ")*?" + /(?:;|(?=\s*\{))/.source
          ),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector",
            },
            keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
          },
        },
        url: {
          pattern: RegExp("\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: { pattern: RegExp("^" + r.source + "$"), alias: "url" },
          },
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r.source + ")*(?=\\s*\\{)"),
          lookbehind: !0,
        },
        string: { pattern: r, greedy: !0 },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0,
        },
        important: /!important\b/i,
        function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
        punctuation: /[(){};:,]/,
      }),
      (Be.languages.css.atrule.inside.rest = Be.languages.css),
      (r = Be.languages.markup) && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css")),
      t(b("react"))),
    Dn = "button-module__button___hf2qg_marketplace",
    Mn = "button-module__circle___EZ88P_marketplace",
    S = (e) => {
      var t = e.type || "round";
      const r = [Dn];
      return (
        "circle" === t && r.push(Mn),
        e.classes && r.push(...e.classes),
        jn.default.createElement(
          "button",
          { className: r.join(" "), onClick: e.onClick, "aria-label": e.label || "", disabled: e.disabled },
          e.children
        )
      );
    },
    $n = (o) => {
      var e,
        t = "marketplace-customCSS-preview";
      const [i, r] = w.default.useState(
          ("ADD_SNIPPET" !== o.type && (null == (e = o.content) ? void 0 : e.item.code)) || ""
        ),
        [n, a] = w.default.useState(
          ("ADD_SNIPPET" !== o.type && (null == (e = o.content) ? void 0 : e.item.title)) || ""
        ),
        [s, l] = w.default.useState(
          ("ADD_SNIPPET" !== o.type && (null == (e = o.content) ? void 0 : e.item.description)) || ""
        ),
        [c, u] = w.default.useState(
          ("ADD_SNIPPET" !== o.type && (null == (e = o.content) ? void 0 : e.item.imageURL)) || ""
        ),
        p = () => n.replace(/\n/g, "").replaceAll(" ", "-");
      const d = "marketplace:installed:snippet:" + p(),
        [h, f] = w.default.useState(!!E(d));
      let m;
      return w.default.createElement(
        "div",
        { id: "marketplace-add-snippet-container" },
        w.default.createElement(
          "div",
          { className: "marketplace-customCSS-input-container" },
          w.default.createElement("label", { htmlFor: "marketplace-custom-css" }, g("snippets.customCSS")),
          w.default.createElement(
            "div",
            { className: "marketplace-code-editor-wrapper marketplace-code-editor" },
            w.default.createElement(Tn.default, {
              value: i,
              onValueChange: (e) => r(e),
              highlight: (e) => (0, _n.highlight)(e, _n.languages.css),
              textareaId: "marketplace-custom-css",
              textareaClassName: "snippet-code-editor",
              readOnly: "VIEW_SNIPPET" === o.type,
              placeholder: g("snippets.customCSSPlaceholder"),
              style: {},
            })
          )
        ),
        w.default.createElement(
          "div",
          { className: "marketplace-customCSS-input-container" },
          w.default.createElement("label", { htmlFor: "marketplace-customCSS-name-submit" }, g("snippets.snippetName")),
          w.default.createElement("input", {
            id: "marketplace-customCSS-name-submit",
            className: "marketplace-code-editor",
            value: n,
            onChange: (e) => {
              "VIEW_SNIPPET" !== o.type && a(e.target.value);
            },
            placeholder: g("snippets.snippetNamePlaceholder"),
          })
        ),
        w.default.createElement(
          "div",
          { className: "marketplace-customCSS-input-container" },
          w.default.createElement(
            "label",
            { htmlFor: "marketplace-customCSS-description-submit" },
            g("snippets.snippetDesc")
          ),
          w.default.createElement("input", {
            id: "marketplace-customCSS-description-submit",
            className: "marketplace-code-editor",
            value: s,
            onChange: (e) => {
              "VIEW_SNIPPET" !== o.type && l(e.target.value);
            },
            placeholder: g("snippets.snippetDescPlaceholder"),
          })
        ),
        w.default.createElement(
          "div",
          { className: "marketplace-customCSS-input-container" },
          w.default.createElement(
            "label",
            { htmlFor: t },
            g("snippets.snippetPreview"),
            " ",
            "VIEW_SNIPPET" !== o.type && `(${g("snippets.optional")})`
          ),
          c &&
            w.default.createElement(
              "label",
              { htmlFor: t, style: { textAlign: "center" } },
              w.default.createElement("img", {
                className: "marketplace-customCSS-image-preview",
                src: c,
                alt: "Preview",
              })
            )
        ),
        "VIEW_SNIPPET" !== o.type &&
          w.default.createElement(
            w.default.Fragment,
            null,
            w.default.createElement(
              S,
              {
                onClick: () => {
                  m.click();
                },
              },
              c.length ? g("snippets.changeImage") : g("snippets.addImage"),
              w.default.createElement("input", {
                id: t,
                type: "file",
                style: { display: "none" },
                ref: (e) => (m = e),
                onChange: async (e) => {
                  var t, r, n;
                  if (null != (t = e.target.files) && t[0])
                    try {
                      n = null == (r = e.target.files) ? void 0 : r[0];
                      var a = await new Promise((e, t) => {
                        const r = new FileReader();
                        r.readAsDataURL(n),
                          (r.onload = () => {
                            e(r.result);
                          }),
                          (r.onerror = (e) => {
                            t(e);
                          });
                      });
                      a && u(a);
                    } catch (e) {
                      console.error(e);
                    }
                },
              })
            ),
            w.default.createElement(
              S,
              {
                onClick: () => {
                  var e = p(),
                    t = s.trim();
                  if (h && "EDIT_SNIPPET" !== o.type) Spicetify.showNotification("That name is already taken!", !0);
                  else {
                    if ((console.debug("Installing snippet: " + e), o.content && o.content.item.title !== e)) {
                      console.debug("Deleting outdated snippet: " + o.content.item.title),
                        localStorage.removeItem("marketplace:installed:snippet:" + o.content.item.title);
                      const a = E(v, []);
                      var r = a.filter((e) => {
                        return (
                          e !== "marketplace:installed:snippet:" + (null == (e = o.content) ? void 0 : e.item.title)
                        );
                      });
                      localStorage.setItem(v, JSON.stringify(r));
                    }
                    localStorage.setItem(
                      d,
                      JSON.stringify({ title: e, code: i, description: t, imageURL: c, custom: !0 })
                    );
                    const n = E(v, []);
                    -1 === n.indexOf(d) && (n.push(d), localStorage.setItem(v, JSON.stringify(n)));
                    r = n.map((e) => E(e));
                    Sn(r), Spicetify.PopupModal.hide(), "EDIT_SNIPPET" === o.type && location.reload();
                  }
                },
                disabled: !p() || !i.replace(/\n/g, "\\n"),
              },
              g("snippets.saveCSS")
            )
          ),
        "VIEW_SNIPPET" === o.type &&
          w.default.createElement(
            S,
            {
              onClick: () => {
                o.callback && o.callback(), f(!h);
              },
            },
            h ? g("remove") : g("install")
          )
      );
    },
    Fn = t(b("react")),
    Bn = () =>
      Fn.default.createElement(
        "div",
        { id: "marketplace-reload-container" },
        Fn.default.createElement("p", null, g("reloadModal.description")),
        Fn.default.createElement(
          "div",
          { className: "marketplace-reload-modal__button-container" },
          Fn.default.createElement(
            S,
            {
              onClick: () => {
                Spicetify.PopupModal.hide(), location.reload();
              },
            },
            g("reloadModal.reloadNow")
          ),
          Fn.default.createElement(
            S,
            {
              onClick: () => {
                Spicetify.PopupModal.hide();
              },
            },
            g("reloadModal.reloadLater")
          )
        )
      ),
    k = t(b("react")),
    O = t(b("react")),
    Un = t(b("react")),
    Gn = "toggle-module__toggle-wrapper___ocE5z_marketplace",
    Hn = "toggle-module__disabled___OYAYf_marketplace",
    Vn = "toggle-module__toggle-input___ceLM4_marketplace",
    qn = "toggle-module__toggle-indicator-wrapper___6Lcp0_marketplace",
    Kn = "toggle-module__toggle-indicator___nCxwE_marketplace",
    zn = (e) => {
      var t = "toggle:" + e.storageKey;
      const r = [Gn];
      return (
        !1 === e.clickable && r.push(Hn),
        Un.default.createElement(
          "label",
          { className: r.join(" ") },
          Un.default.createElement("input", {
            className: Vn,
            type: "checkbox",
            checked: e.enabled,
            "data-storage-key": e.storageKey,
            id: t,
            title: "Toggle for " + e.storageKey,
            onChange: e.onChange,
          }),
          Un.default.createElement("span", { className: qn }, Un.default.createElement("span", { className: Kn }))
        )
      );
    },
    Jn = t(b("react")),
    Wn = t(Ve()),
    Xn = (t) => {
      var e = t.sortBoxOptions.map((e) => ({ value: e.key, label: e.value })),
        r = t.sortBoxOptions.find(t.sortBySelectedFn);
      return Jn.default.createElement(
        "div",
        { className: "marketplace-sortBox" },
        Jn.default.createElement(
          "div",
          { className: "marketplace-sortBox-header" },
          Jn.default.createElement("div", { className: "marketplace-sortBox-header-title" }),
          Jn.default.createElement(Wn.default, {
            placeholder: "Select an option",
            options: e,
            value: null == r ? void 0 : r.key,
            onChange: (e) => {
              t.onChange(e.value);
            },
          })
        )
      );
    },
    Yn = t(b("react")),
    Qn = () =>
      Yn.default.createElement(
        "svg",
        {
          role: "img",
          height: "16",
          width: "16",
          className: "Svg-sc-ytk21e-0 uPxdw nW1RKQOkzcJcX6aDCZB4",
          viewBox: "0 0 16 16",
        },
        Yn.default.createElement("path", {
          d: "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",
        }),
        Yn.default.createElement("path", {
          d: "M7.25 12.026v-1.5h1.5v1.5h-1.5zm.884-7.096A1.125 1.125 0 007.06 6.39l-1.431.448a2.625 2.625 0 115.13-.784c0 .54-.156 1.015-.503 1.488-.3.408-.7.652-.973.818l-.112.068c-.185.116-.26.203-.302.283-.046.087-.097.245-.097.57h-1.5c0-.47.072-.898.274-1.277.206-.385.507-.645.827-.846l.147-.092c.285-.177.413-.257.526-.41.169-.23.213-.397.213-.602 0-.622-.503-1.125-1.125-1.125z",
        })
      ),
    Zn = window.Spicetify,
    ea = (r) => {
      var e = r.type,
        t = "dropdown" === e ? "dropdown:" + r.storageKey : "toggle:" + r.storageKey,
        n = !!r.modalConfig.visual[r.storageKey];
      return (
        (void 0 !== r.description && null !== r.description) || (r.description = ""),
        "dropdown" === e && r.options
          ? O.default.createElement(
              "div",
              { className: "setting-row" },
              O.default.createElement("label", { htmlFor: t, className: "col description" }, r.name),
              O.default.createElement(
                "div",
                { className: "col action" },
                O.default.createElement(Xn, {
                  sortBoxOptions: r.options.map((e) => ({ key: e, value: e })),
                  onChange: (e) => {
                    var t = r.storageKey;
                    (r.modalConfig.visual[t] = e),
                      localStorage.setItem("marketplace:" + t, String(e)),
                      r.updateConfig(r.modalConfig);
                  },
                  sortBySelectedFn: (e) => e.key == r.modalConfig.visual[r.storageKey],
                }),
                O.default.createElement(
                  Zn.ReactComponent.TooltipWrapper,
                  {
                    label: O.default.createElement(
                      O.default.Fragment,
                      null,
                      r.description
                        .split("\n")
                        .map((e) =>
                          O.default.createElement(O.default.Fragment, null, e, O.default.createElement("br", null))
                        )
                    ),
                    renderInline: !0,
                    showDelay: 10,
                    placement: "top",
                    labelClassName: "marketplace-settings-tooltip",
                    disabled: !1,
                  },
                  O.default.createElement(
                    "div",
                    { className: "marketplace-tooltip-icon" },
                    O.default.createElement(Qn, null)
                  )
                )
              )
            )
          : O.default.createElement(
              "div",
              { className: "setting-row" },
              O.default.createElement("label", { htmlFor: t, className: "col description" }, r.name),
              O.default.createElement(
                "div",
                { className: "col action" },
                O.default.createElement(zn, {
                  name: r.name,
                  storageKey: r.storageKey,
                  enabled: n,
                  onChange: (e) => {
                    var t = e.target.checked,
                      e = e.target.dataset.storageKey;
                    (r.modalConfig.visual[e] = t),
                      console.debug(`toggling ${e} to ` + t),
                      localStorage.setItem("marketplace:" + e, String(t)),
                      r.updateConfig(r.modalConfig);
                  },
                })
              )
            )
      );
    },
    ta = t(b("react")),
    ra = (n) => {
      var e = "toggle:" + n.name;
      const t = n.modalConfig.tabs.reduce((e, t, r) => (t.name === n.name ? r : e), -1);
      var r = n.modalConfig.tabs[t]["enabled"];
      function a(e, t) {
        var t = e + t,
          r = n.modalConfig.tabs[t];
        (n.modalConfig.tabs[t] = n.modalConfig.tabs[e]),
          (n.modalConfig.tabs[e] = r),
          localStorage.setItem(fn, JSON.stringify(n.modalConfig.tabs)),
          n.updateConfig(n.modalConfig);
      }
      return ta.default.createElement(
        "div",
        { className: "setting-row" },
        ta.default.createElement("label", { htmlFor: e, className: "col description" }, g("tabs." + n.name)),
        ta.default.createElement(
          "div",
          { className: "col action" },
          ta.default.createElement(
            "button",
            { title: "Move up", className: "arrow-btn", disabled: 0 === t, onClick: () => a(t, -1) },
            ta.default.createElement("svg", {
              height: "16",
              width: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              dangerouslySetInnerHTML: { __html: String(Spicetify.SVGIcons["chart-up"]) },
            })
          ),
          ta.default.createElement(
            "button",
            {
              title: "Move down",
              className: "arrow-btn",
              disabled: t === n.modalConfig.tabs.length - 1,
              onClick: () => a(t, 1),
            },
            ta.default.createElement("svg", {
              height: "16",
              width: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              dangerouslySetInnerHTML: { __html: String(Spicetify.SVGIcons["chart-down"]) },
            })
          ),
          ta.default.createElement(zn, {
            name: n.name,
            storageKey: "tab:" + n.name,
            clickable: "Extensions" !== n.name,
            enabled: r,
            onChange: (e) => {
              (n.modalConfig.tabs[t].enabled = e.target.checked),
                localStorage.setItem(fn, JSON.stringify(n.modalConfig.tabs)),
                n.updateConfig(n.modalConfig);
            },
          })
        )
      );
    },
    na = async () => {
      const e = new MutationObserver(async () => {
        var t;
        document.querySelector(".GenericModal[aria-label='Settings']") ||
          ((t = 100), await new Promise((e) => setTimeout(e, t)), ha("BACKUP"), e.disconnect());
      });
      e.observe(document.body, { childList: !0, subtree: !0 }), Spicetify.PopupModal.hide();
    },
    aa = ({ CONFIG: e, updateAppConfig: t }) => {
      const [r, n] = k.default.useState(s({}, e)),
        a = (e) => {
          t(s({}, e)), n(s({}, e));
        },
        o = document.querySelector("body > generic-modal button.main-trackCreditsModal-closeBtn"),
        i = document.querySelector("body > generic-modal > div");
      o &&
        i &&
        ((o.onclick = () => location.reload()),
        o.setAttribute("style", "cursor: pointer;"),
        (i.onclick = (e) => {
          e.target === i && location.reload();
        }));
      e = E(vn)
        ? k.default.createElement(
            k.default.Fragment,
            null,
            k.default.createElement(ea, {
              name: g("settings.albumArtBasedColorsMode"),
              storageKey: "albumArtBasedColorsMode",
              modalConfig: r,
              updateConfig: a,
              type: "dropdown",
              options: ["monochromeDark", "monochromeLight", "analogicComplement", "analogic", "triad", "quad"],
              description: g("settings.almbumArtColorsModeToolTip"),
            }),
            k.default.createElement(ea, {
              name: g("settings.albumArtBasedColorsVibrancy"),
              storageKey: "albumArtBasedColorsVibrancy",
              modalConfig: r,
              updateConfig: a,
              type: "dropdown",
              options: ["desaturated", "lightVibrant", "prominent", "vibrant"],
              description: g("settings.albumArtBasedColorsVibrancyToolTip"),
            })
          )
        : null;
      return k.default.createElement(
        "div",
        { id: "marketplace-config-container" },
        k.default.createElement("h2", null, g("settings.optionsHeading")),
        k.default.createElement(ea, {
          name: g("settings.starCountLabel"),
          storageKey: "stars",
          modalConfig: r,
          updateConfig: a,
        }),
        k.default.createElement(ea, {
          name: g("settings.tagsLabel"),
          storageKey: "tags",
          modalConfig: r,
          updateConfig: a,
        }),
        k.default.createElement(ea, {
          name: g("settings.devToolsLabel"),
          storageKey: "themeDevTools",
          modalConfig: r,
          updateConfig: a,
        }),
        k.default.createElement(ea, {
          name: g("settings.hideInstalledLabel"),
          storageKey: "hideInstalled",
          modalConfig: r,
          updateConfig: a,
        }),
        k.default.createElement(ea, {
          name: g("settings.colourShiftLabel"),
          storageKey: "colorShift",
          modalConfig: r,
          updateConfig: a,
        }),
        k.default.createElement(ea, {
          name: g("settings.albumArtBasedColors"),
          storageKey: "albumArtBasedColors",
          modalConfig: r,
          updateConfig: a,
        }),
        e,
        k.default.createElement("h2", null, g("settings.tabsHeading")),
        k.default.createElement(
          "div",
          { className: "tabs-container" },
          r.tabs.map(({ name: e }, t) =>
            k.default.createElement(ra, { key: t, name: e, modalConfig: r, updateConfig: a })
          )
        ),
        k.default.createElement("h2", null, g("settings.resetHeading")),
        k.default.createElement(
          "div",
          { className: "setting-row" },
          k.default.createElement("label", { className: "col description" }, g("settings.resetDescription")),
          k.default.createElement(
            "div",
            { className: "col action" },
            k.default.createElement(S, { onClick: Nn }, g("settings.resetBtn"))
          )
        ),
        k.default.createElement("h2", null, g("settings.backupHeading")),
        k.default.createElement(
          "div",
          { className: "setting-row" },
          k.default.createElement("label", { className: "col description" }, g("settings.backupLabel")),
          k.default.createElement(
            "div",
            { className: "col action" },
            k.default.createElement(S, { onClick: na }, g("settings.backupBtn"))
          )
        )
      );
    },
    N = t(b("react")),
    oa = t(Ue()),
    ia = t(Ge()),
    sa =
      ((Prism.languages.ini = {
        comment: { pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m, lookbehind: !0 },
        section: {
          pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
          lookbehind: !0,
          inside: {
            "section-name": {
              pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
              lookbehind: !0,
              alias: "selector",
            },
            punctuation: /\[|\]/,
          },
        },
        key: {
          pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
          lookbehind: !0,
          alias: "attr-name",
        },
        value: {
          pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
          lookbehind: !0,
          alias: "attr-value",
          inside: { "inner-value": { pattern: /^("|').+(?=\1$)/, lookbehind: !0 } },
        },
        punctuation: /=/,
      }),
      localStorage.getItem(gn)),
    la = sa ? E(sa) : null,
    ca = () => {
      const [r, t] = N.default.useState(
        la
          ? ((e) => {
              let t = "";
              for (const r in e)
                if (Object.prototype.hasOwnProperty.call(e, r))
                  if ("object" == typeof e[r]) {
                    t += `[${r}]
`;
                    for (const n in e[r])
                      Object.prototype.hasOwnProperty.call(e[r], n) &&
                        (t += `${n}=${e[r][n]}
`);
                  } else
                    t += `${r}=${e[r]}
`;
              return t;
            })(la.schemes)
          : g("devTools.noThemeInstalled")
      );
      return N.default.createElement(
        "div",
        { id: "marketplace-theme-dev-tools-container", className: "marketplace-theme-dev-tools-container" },
        N.default.createElement(
          "div",
          { className: "devtools-column" },
          N.default.createElement(
            "label",
            { htmlFor: "color-ini-editor" },
            N.default.createElement("h2", { className: "devtools-heading" }, g("devTools.colorIniEditor"))
          ),
          N.default.createElement(
            "div",
            { className: "marketplace-code-editor-wrapper marketplace-code-editor" },
            N.default.createElement(oa.default, {
              value: r,
              onValueChange: (e) => t(e),
              highlight: (e) => (0, ia.highlight)(e, ia.languages.ini),
              textareaId: "color-ini-editor",
              textareaClassName: "color-ini-editor",
              readOnly: !la,
              placeholder: g("devTools.colorIniEditorPlaceholder"),
              style: { fontFamily: "monospace", resize: "none" },
            })
          ),
          N.default.createElement(
            S,
            {
              onClick: () => {
                var e = r;
                {
                  var t;
                  sa
                    ? ((t = wn(e)), (la.schemes = t), localStorage.setItem(sa, JSON.stringify(la)))
                    : Spicetify.showNotification(g("devTools.noThemeManifest"), !0);
                }
              },
            },
            g("save")
          )
        ),
        N.default.createElement(
          "div",
          { className: "devtools-column" },
          N.default.createElement("h2", { className: "devtools-heading" }, g("devTools.invalidCSS")),
          N.default.createElement(
            "div",
            { className: "marketplace-code-editor-wrapper marketplace-code-editor" },
            (function () {
              var e = document.querySelector("body > style.marketplaceCSS.marketplaceUserCSS");
              const t = null == e ? void 0 : e.innerHTML;
              if (((e = new RegExp(".-?[_a-zA-Z]+[_a-zA-Z0-9-]*\\s*{", "g")), !t))
                return ["Error: Class name list not found; please create an issue"];
              const r = [];
              for (const a of t.matchAll(e)) {
                const o = a[0].replace(/{/g, "").trim();
                var n = o.split(" ");
                let t;
                for (let e = 0; e < n.length; e++) {
                  try {
                    t = document.querySelector("" + n[e]);
                  } catch (e) {
                    t = document.getElementsByClassName("" + o);
                  }
                  t || r.push(o);
                }
              }
              return r;
            })().map((e, t) => N.default.createElement("div", { key: t, className: "invalid-css-text" }, e))
          )
        )
      );
    },
    C = t(b("react")),
    ua = t(Ue()),
    pa = t(Ge()),
    da =
      ((Prism.languages.json = {
        property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
        string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
        comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:false|true)\b/,
        null: { pattern: /\bnull\b/, alias: "keyword" },
      }),
      (Prism.languages.webmanifest = Prism.languages.json),
      () => {
        const [e, t] = C.default.useState("");
        const n = (t) => {
          if (t) {
            let e;
            try {
              e = JSON.parse(t);
            } catch (e) {
              return void Spicetify.showNotification(g("backupModal.invalidJSON"));
            }
            var r;
            (r = e),
              console.debug("Importing Marketplace"),
              Nn(),
              Object.keys(r).forEach((e) => {
                localStorage.setItem(e, r[e]), console.debug("Imported " + e);
              }),
              location.reload();
          } else Spicetify.showNotification(g("backupModal.noDataPasted"));
        };
        return C.default.createElement(
          "div",
          { id: "marketplace-backup-container" },
          C.default.createElement(
            "div",
            { className: "marketplace-backup-input-container" },
            C.default.createElement("label", { htmlFor: "marketplace-backup" }, g("backupModal.inputLabel")),
            C.default.createElement(
              "div",
              { className: "marketplace-code-editor-wrapper marketplace-code-editor" },
              C.default.createElement(ua.default, {
                value: e,
                onValueChange: (e) => t(e),
                highlight: (e) => (0, pa.highlight)(e, pa.languages.css),
                textareaId: "marketplace-import-text",
                textareaClassName: "import-textarea",
                readOnly: !1,
                className: "marketplace-code-editor-textarea",
                placeholder: g("backupModal.inputPlaceholder"),
                style: {},
              })
            )
          ),
          C.default.createElement(
            C.default.Fragment,
            null,
            C.default.createElement(
              S,
              {
                classes: ["marketplace-backup-button"],
                onClick: () => {
                  var e = (() => {
                    const t = {};
                    return (
                      Object.keys(localStorage).forEach((e) => {
                        e.startsWith("marketplace:") && (t[e] = localStorage.getItem(e));
                      }),
                      t
                    );
                  })();
                  Spicetify.Platform.ClipboardAPI.copy(JSON.stringify(e)),
                    Spicetify.showNotification(g("backupModal.settingsCopied")),
                    Spicetify.PopupModal.hide();
                },
              },
              g("backupModal.exportBtn")
            ),
            C.default.createElement(
              S,
              {
                classes: ["marketplace-backup-button"],
                onClick: () => {
                  n(e);
                },
              },
              g("backupModal.importBtn")
            ),
            C.default.createElement(
              S,
              {
                classes: ["marketplace-backup-button"],
                onClick: async () => {
                  const e = await window.showOpenFilePicker(),
                    t = await e[0].getFile();
                  var r = await t.text();
                  n(r);
                },
              },
              g("backupModal.fileImportBtn")
            )
          )
        );
      }),
    ha = (e, t, r, n, a) => {
      (e = ((e, t, r, n, a) => {
        switch (e) {
          case "ADD_SNIPPET":
            return { title: g("snippets.addTitle"), content: An.default.createElement($n, { type: e }), isLarge: !0 };
          case "EDIT_SNIPPET":
            return {
              title: g("snippets.editTitle"),
              content: An.default.createElement($n, { type: e, content: n }),
              isLarge: !0,
            };
          case "VIEW_SNIPPET":
            return {
              title: g("snippets.viewTitle"),
              content: An.default.createElement($n, { type: e, content: n, callback: a }),
              isLarge: !0,
            };
          case "RELOAD":
            return { title: g("reloadModal.title"), content: An.default.createElement(Bn, null), isLarge: !1 };
          case "SETTINGS":
            return {
              title: g("settings.title"),
              content: An.default.createElement(aa, { CONFIG: t, updateAppConfig: r }),
              isLarge: !0,
            };
          case "THEME_DEV_TOOLS":
            return { title: g("devTools.title"), content: An.default.createElement(ca, null), isLarge: !0 };
          case "BACKUP":
            return { title: g("backupModal.title"), content: An.default.createElement(da, null), isLarge: !0 };
          default:
            return { title: "", content: An.default.createElement("div", null), isLarge: !1 };
        }
      })(e, t, r, n, a)),
        Spicetify.PopupModal.display(e);
    },
    fa = [
      {
        title: "Fix 'Liked' Icon",
        description: "Fix the colours of the Liked icon in sidebar",
        code: ".main-likedSongsButton-likedSongsIcon {\n  color: var(--spice-sidebar);\n  background: var(--spice-text);\n}",
        preview: "resources/assets/snippets/fix-liked-icon.png",
      },
      {
        title: "Hide Upgrade Button",
        description: "Makes the upgrade button hidden",
        code: ".main-topBar-UpgradeButton {\n  display: none !important;\n}",
        preview: "resources/assets/snippets/hide-upgrade-button.png",
      },
      {
        title: "Auto-hide Friends",
        description: "Collapse the friends activity sidebar on small screens",
        code: "[aria-label='Friend Activity'] {\n  transition: width 0.3s;\n}\n@media screen and (max-width: 1200px) {\n  [aria-label='Friend Activity'] {\n    width: 0;\n  }\n  [aria-label='Friend Activity'] .LayoutResizer__resize-bar {\n    display: none;\n  }\n}",
        preview: "resources/assets/snippets/auto-hide-friends.png",
      },
      {
        title: "Smooth Reveal Playlist Gradient",
        description: "Reveals the playlist gradient header gradient with a fade in effect",
        code: ".main-entityHeader-overlay,\n.main-actionBarBackground-background,\n.main-entityHeader-overlay,\n.main-entityHeader-backgroundColor {\n  -webkit-transition: 3s;\n}",
        preview: "resources/assets/snippets/smooth-playlist-reveal-gradient.png",
      },
      {
        title: "Remove connect bar",
        description: "Remove connect bar that causes progress bar displacement when listening on different devices",
        code: ".main-connectBar-connectBar {\n  display: none !important;}",
        preview: "resources/assets/snippets/remove-connect-bar.png",
      },
      {
        title: "Fix main view width",
        description: "Makes main view fill up all available space",
        code: ".contentSpacing {\n  max-width: 100% !important;\n}",
        preview: "resources/assets/snippets/fix-main-view-width.png",
      },
      {
        title: "Left aligned heart icons",
        description: "Moves the heart icon to the left side of the track title in track views",
        code: ".main-trackList-rowSectionStart {\n  margin-left: 38px !important;\n}\n.main-addButton-button.main-trackList-rowHeartButton,\n.main-addButton-button.main-trackList-rowHeartButton {\n  position: absolute !important;\n  left: 48px !important;\n}",
        preview: "resources/assets/snippets/left-aligned-heart-icons.png",
      },
      {
        title: "Hover Panels",
        description: "Have your playlist, right sidebar, and controls bar be hoverable.",
        code: ".Root__nav-bar {\n  position: absolute;\n  width: 40px;\n  opacity: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\nnav.Root__nav-bar:hover {\n  position: inherit;\n  width: 225px;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.LayoutResizer__resize-bar {\n  cursor: none;\n}\n.Root__top-bar {\n  opacity: 0;\n  transition: visibility 5s, opacity 1s linear;\n}\n.Root__top-bar:hover {\n  transition-delay: 0.5s;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.main-topBar-container {\n  -webkit-padding-end: 32px;\n  padding: 16px 85px;\n  padding-inline-end: 32px;\n  max-width: none;\n}\naside.Root__right-sidebar:hover {\n  position: inherit;\n  width: var(--panel-width);\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n  left: 0;\n}\naside.Root__right-sidebar {\n  position: absolute;\n  width: 65px;\n  opacity: 0;\n  bottom: 0;\n  left: -30px;\n  top: 0;\n  z-index: 1;\n}",
        preview: "resources/assets/snippets/hover-panels.png",
      },
      {
        title: "Fix progress bar displacement",
        description: "Fixes the progress bar displacement for a few themes. Better version of @CharlieS1103 Snippet",
        code: ".main-connectBar-connectBar {\n  overflow: visible !important;\n  position: absolute !important;\n  display: flex !important;\n  align-items: unset !important;\n  left: 80% !important;\n  height: 20px !important;\n  bottom: 1% !important;\n  padding: 2px !important;\n  background-color: transparent !important;\n  color: var(--spice-text) !important;\n}\n.control-button::after {\n  display: none !important;\n}",
        preview: "resources/assets/snippets/fix-progress-bar.png",
      },
      {
        title: "Fix playlist hover effect",
        description: "Fixes the hover effect on the playlist titles in some themes",
        code: ".main-rootlist-rootlistItemOverlay {\n  display: none;\n}",
        preview: "resources/assets/snippets/fix-playlist-hover.png",
      },
      {
        title: "Disable Homepage Recommendation",
        description: "Disable Homepage Recommendation charts",
        code: "section[data-testid='home-page'] .main-shelf-shelf:not([aria-label='Recently played'], [aria-label='Your playlists']) {\n\tdisplay: none !important;\n}",
        preview: "resources/assets/snippets/disable-recommendation.png",
      },
      {
        title: "Circular Album Art",
        description: "Makes the now playing album art be circular (like a vinyl)",
        code: ".cover-art .cover-art-image {\n    border-radius: 100% !important;\n}",
        preview: "resources/assets/snippets/circular-album-art.png",
      },
      {
        title: "Always show forward button",
        description:
          "The navigate forward button hides itself when the window width is smaller. This snipppet makes it so that it is always shown.",
        code: ".main-topBar-historyButtons .main-topBar-forward {\n    display: inline-flex !important;\n}",
        preview: "resources/assets/snippets/always-show-forward.png",
      },
      {
        title: "Right Side Cover Art",
        description: "Cover art on right side with animation",
        code: ".main-nowPlayingWidget-nowPlaying > .ellipsis-one-line,\n.main-trackInfo-container {\n margin-left: 74px;\n}\n.main-coverSlotExpanded-container {\n position: fixed;\n top: calc(100% - 305px);\n left: calc(100% - 220px);\n width: 200px;\n height: 200px;\n visibility: hidden;\n transform-origin: center;\n animation: 1s coverExpandedIn;\n animation-fill-mode: forwards;\n}\n.Q4cc5RktWgz2H8_vDrIS {\n display: none;\n}\n.main-coverSlotCollapsed-container {\n position: fixed;\n top: -12px;\n left: 0px;\n width: 56px;\n height: 56px;\n visibility: visible;\n z-index: 1;\n}\n.cover-art .cover-art-image,\n.main-coverSlotCollapsed-container {\n transform-origin: center;\n transition-timing-function: ease-in;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.3s, left 0.5s,\n box-shadow 0.5s;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true'] {\n left: calc(100vw - 164px);\n top: -240px;\n width: 200px;\n height: 200px;\n visibility: hidden;\n animation: 1s coverExpandedOut;\n}\n.main-coverSlotCollapsed-container[aria-hidden='false'] {\n transition-timing-function: ease-out !important;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.5s 0.1s, left 0.3s,\n box-shadow 0.5s !important;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true']\n .cover-art\n .cover-art-image,\n.main-nowPlayingWidget-coverExpanded\n .main-coverSlotCollapsed-container\n .cover-art\n .cover-art-image {\n width: 200px;\n height: 200px;\n}\n.main-nowPlayingBar-left {\n z-index: 2;\n}\n.main-nowPlayingBar-center {\n z-index: 1;\n}\n.cover-art.shadow {\n box-shadow: 0 0 10px rgba(var(--spice-rgb-shadow), 1) !important;\n}\n@keyframes coverExpandedIn {\n 99% {\n visibility: hidden;\n }\n 100% {\n visibility: visible;\n }\n}\n@keyframes coverExpandedOut {\n 99% {\n visibility: visible;\n }\n 100% {\n visibility: hidden;\n }\n}",
        preview: "resources/assets/snippets/right-cover-art.png",
      },
      {
        title: "Better lyrics style",
        description: "Spotify lyrics are focused and beautified",
        code: ".lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-highlight { filter: blur(1.5px); padding: 15px; font-size: 110%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-active { filter: none; padding: 20px; font-size: 130%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric { filter: blur(1.5px); padding: 15px; font-size: 110%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-unsynced { filter: none; padding: 10px; font-size: 100%; }",
        preview: "resources/assets/snippets/better-lyrics-style.png",
      },
      {
        title: "Fix now playing icon color",
        description: "Fixes the now playing icon color",
        code: `.main-trackList-playingIcon { -webkit-mask-image: url("data:image/svg+xml,%3Csvg id='playing-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 24'%3E%3Cdefs%3E%3Cstyle%3E %23playing-icon %7B fill: %2320BC54; %7D @keyframes play %7B 0%25 %7Btransform: scaleY(1);%7D 3.3%25 %7Btransform: scaleY(0.9583);%7D 6.6%25 %7Btransform: scaleY(0.9166);%7D 9.9%25 %7Btransform: scaleY(0.8333);%7D 13.3%25 %7Btransform: scaleY(0.7083);%7D 16.6%25 %7Btransform: scaleY(0.5416);%7D 19.9%25 %7Btransform: scaleY(0.4166);%7D 23.3%25 %7Btransform: scaleY(0.25);%7D 26.6%25 %7Btransform: scaleY(0.1666);%7D 29.9%25 %7Btransform: scaleY(0.125);%7D 33.3%25 %7Btransform: scaleY(0.125);%7D 36.6%25 %7Btransform: scaleY(0.1666);%7D 39.9%25 %7Btransform: scaleY(0.1666);%7D 43.3%25 %7Btransform: scaleY(0.2083);%7D 46.6%25 %7Btransform: scaleY(0.2916);%7D 49.9%25 %7Btransform: scaleY(0.375);%7D 53.3%25 %7Btransform: scaleY(0.5);%7D 56.6%25 %7Btransform: scaleY(0.5833);%7D 59.9%25 %7Btransform: scaleY(0.625);%7D 63.3%25 %7Btransform: scaleY(0.6666);%7D 66.6%25 %7Btransform: scaleY(0.6666);%7D 69.9%25 %7Btransform: scaleY(0.6666);%7D 73.3%25 %7Btransform: scaleY(0.6666);%7D 76.6%25 %7Btransform: scaleY(0.7083);%7D 79.9%25 %7Btransform: scaleY(0.75);%7D 83.3%25 %7Btransform: scaleY(0.8333);%7D 86.6%25 %7Btransform: scaleY(0.875);%7D 89.9%25 %7Btransform: scaleY(0.9166);%7D 93.3%25 %7Btransform: scaleY(0.9583);%7D 96.6%25 %7Btransform: scaleY(1);%7D %7D %23bar1 %7B transform-origin: bottom; animation: play 0.9s -0.51s infinite; %7D %23bar2 %7B transform-origin: bottom; animation: play 0.9s infinite; %7D %23bar3 %7B transform-origin: bottom; animation: play 0.9s -0.15s infinite; %7D %23bar4 %7B transform-origin: bottom; animation: play 0.9s -0.75s infinite; %7D %3C/style%3E%3C/defs%3E%3Ctitle%3Eplaying-icon%3C/title%3E%3Crect id='bar1' class='cls-1' width='4' height='24'/%3E%3Crect id='bar2' class='cls-1' x='6' width='4' height='24'/%3E%3Crect id='bar3' class='cls-1' x='12' width='4' height='24'/%3E%3Crect id='bar4' class='cls-1' x='18' width='4' height='24'/%3E%3C/svg%3E"); background: var(--spice-button); content-visibility: hidden; -webkit-mask-repeat: no-repeat; }`,
        preview: "resources/assets/snippets/fix-now-playing-icon.png",
      },
      {
        title: "Hide playing gif",
        description: "Hides the gif that shows the music playing",
        code: ".main-trackList-playingIcon{display: none}",
        preview: "resources/assets/snippets/hide-playing-gif.png",
      },
      {
        title: "Pointers",
        description: "Clickable elements are now a pointer",
        code: "button, .show-followButton-button, .main-dropDown-dropDown, .x-toggle-wrapper, .main-playlistEditDetailsModal-closeBtn, .main-trackList-rowPlayPauseButton, .main-rootlist-rootlistItemLink:link, .main-rootlist-rootlistItemLink:visited, .x-sortBox-sortDropdown, .main-contextMenu-menuItemButton, .main-trackList-column, .main-moreButton-button, .x-downloadButton-button, .main-playButton-PlayButton, .main-coverSlotExpandedCollapseButton-chevron, .main-coverSlotCollapsed-chevron, .control-button:focus, .control-button:hover, .main-repeatButton-button, .main-skipForwardButton-button, .main-playPauseButton-button, .main-skipBackButton-button, .main-shuffleButton-button, .main-addButton-button, .progress-bar__slider, .playback-bar, .main-editImageButton-image, .X1lXSiVj0pzhQCUo_72A { cursor: pointer !important; }",
        preview: "resources/assets/snippets/pointer.png",
      },
      {
        title: "Remove Top gradient",
        description: "Removes gradient from home page and playlist page",
        code: ".main-entityHeader-backgroundColor { display: none !important; } .main-actionBarBackground-background { display: none !important; } .main-home-homeHeader { display: none !important; }",
        preview: "resources/assets/snippets/remove-gradient.png",
      },
      {
        title: "Fix Liked Button",
        description: "Fixes Liked Button colors",
        code: '#_R_G *:not([fill="none"]) { fill: var(--spice-button) !important; } #_R_G *:not([stroke="none"]) { stroke: var(--spice-button); } .main-addButton-button[aria-checked="false"] { color: rgba(var(--spice-rgb-selected-row), 0.7); } .control-button-heart[aria-checked="true"], .main-addButton-button, .main-addButton-active:focus, .main-addButton-active:hover { color: var(--spice-button); }',
        preview: "resources/assets/snippets/fix-liked-button.png",
      },
      {
        title: "Hide Sidebar ScrollBar",
        description: "Hides Sidebar ScrollBar near playlist section",
        code: ".os-scrollbar:nth-child(6) .os-scrollbar-handle { visibility: hidden; }",
        preview: "resources/assets/snippets/hide-sidebar-scrollbar.png",
      },
      {
        title: "Modern ScrollBar",
        description: "Thin rounded modern scrollbar",
        code: ".os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle { border-radius: 4px; width: 6px; background-color: var(--spice-button-disabled); } .os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track { width: 6px; }",
        preview: "resources/assets/snippets/modern-scrollbar.png",
      },
      {
        title: "Remove liked and Episodes icon",
        description: "Removes the liked and episodes icon from the sidebar",
        code: '.main-collectionLinkButton-collectionLinkButton[href="/collection/tracks"], .main-collectionLinkButton-collectionLinkButton[href="/collection/episodes"] {display: none;}',
        preview: "resources/assets/snippets/remove-ep-likes.png",
      },
      {
        title: "Rotating Cover Art",
        description: "Adds circular mask to cover art and rotation",
        code: "@keyframes rotating { from { transform: rotate(0deg); } to { transform: rotate(360deg); }} .cover-art { animation: rotating 2s linear infinite; clip-path: circle(50% at 50% 50%);}",
        preview: "resources/assets/snippets/rotating-coverart.png",
      },
      {
        title: "Hide liked songs card",
        description: "Hides the sometimes unfitting liked Songs card in the Your Libary tab",
        code: ".collection-collectionEntityHeroCard-likedSongs{ display: none; }",
        preview: "resources/assets/snippets/hide-likedSongs-card.png",
      },
      {
        title: "Fix playlist and folder position",
        description:
          "Replaces the playlists section in the left side bar to align with all the other category icons for the new UI. Screenshot includes 'Playlist icons' snippet",
        code: ".main-rootlist-rootlistItem { height: 40px; } .playlist-item__img.folder, .playlist-item__img { margin-right: 16px!important; } .main-rootlist-textWrapper { font-weight: 700!important; }",
        preview: "resources/assets/snippets/fix-playlist-and-folder-position.png",
      },
      {
        title: "Remove recently played from homepage",
        description: "Removes the recently played shelf from the home page",
        code: "section.main-shelf-shelf[aria-label='Recently played'] { visibility: hidden; position: absolute; }",
        preview: "resources/assets/snippets/remove-recently-played.png",
      },
      {
        title: "Make custom app icons thicker",
        description: "Gives icons from the sticky list a thicker border",
        code: "#spicetify-sticky-list>li:nth-child(1n+1)>a>div.icon.collection-icon>svg { stroke: currentcolor; stroke-width: 11px; } .collection-icon { color: unset; }",
        preview: "resources/assets/snippets/thicker-sticky-list-icons.png",
      },
    ];
  async function ma(e, t = 1, r = [], n) {
    let a = n
      ? `https://api.github.com/search/repositories?q=${encodeURIComponent(n + "+topic:" + e)}&per_page=100`
      : `https://api.github.com/search/repositories?q=${encodeURIComponent("topic:" + e)}&per_page=100`;
    t && (a += "&page=" + t);
    const o = await fetch(a)
      .then((e) => e.json())
      .catch(() => []);
    if (o.items)
      return J(s({}, o), { page_count: o.items.length, items: o.items.filter((e) => !r.includes(e.html_url)) });
    Spicetify.showNotification("Too Many Requests, Cool Down.", !0);
  }
  async function ga(e, t, r) {
    var n = window.sessionStorage.getItem(e + "-" + t);
    const a = window.sessionStorage.getItem("noManifests");
    if (n) return JSON.parse(n);
    const o = `https://raw.githubusercontent.com/${e}/${t}/${r}/manifest.json`;
    return null != a && a.includes(o)
      ? null
      : ((n = await fetch(o)
          .then((e) => e.json())
          .catch(() => {
            var n = [o],
              a = "noManifests";
            n &&
              n.forEach((e) => {
                a = a || n.user + "-" + n.repo;
                var t = window.sessionStorage.getItem(a);
                const r = t ? JSON.parse(t) : [];
                r.push(e), window.sessionStorage.setItem(a, JSON.stringify(r));
              });
          })) && window.sessionStorage.setItem(e + "-" + t, JSON.stringify(n)),
        n);
  }
  async function va(t, n, a, o = !1) {
    try {
      let e;
      var r = t.match(new RegExp("https:\\/\\/api\\.github\\.com\\/repos\\/(?<user>.+)\\/(?<repo>.+)\\/contents"));
      if (!r || !r.groups) return null;
      const { user: i, repo: s } = r.groups;
      return (
        (e = await ga(i, s, n)),
        (e = Array.isArray(e) ? e : [e]).reduce((e, t) => {
          var r = t.branch || n,
            r = {
              manifest: t,
              title: t.name,
              subtitle: t.description,
              authors: kn(t.authors, i),
              user: i,
              repo: s,
              branch: r,
              imageURL:
                t.preview && t.preview.startsWith("http")
                  ? t.preview
                  : `https://raw.githubusercontent.com/${i}/${s}/${r}/` + t.preview,
              extensionURL: t.main.startsWith("http")
                ? t.main
                : `https://raw.githubusercontent.com/${i}/${s}/${r}/` + t.main,
              readmeURL:
                t.readme && t.readme.startsWith("http")
                  ? t.readme
                  : `https://raw.githubusercontent.com/${i}/${s}/${r}/` + t.readme,
              stars: a,
              tags: t.tags,
            };
          return (
            t &&
              t.name &&
              t.description &&
              t.main &&
              ((o && localStorage.getItem(`marketplace:installed:${i}/${s}/` + t.main)) || e.push(r)),
            e
          );
        }, [])
      );
    } catch (e) {
      return null;
    }
  }
  async function ba(t, n, a) {
    try {
      let e;
      var r = t.match(new RegExp("https:\\/\\/api\\.github\\.com\\/repos\\/(?<user>.+)\\/(?<repo>.+)\\/contents"));
      if (!r || !r.groups) return null;
      const { user: o, repo: i } = r.groups;
      return (
        (e = await ga(o, i, n)),
        (e = Array.isArray(e) ? e : [e]).reduce((e, t) => {
          var r = t.branch || n,
            r = {
              manifest: t,
              title: t.name,
              subtitle: t.description,
              authors: kn(t.authors, o),
              user: o,
              repo: i,
              branch: r,
              imageURL:
                t.preview && t.preview.startsWith("http")
                  ? t.preview
                  : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.preview,
              readmeURL:
                t.readme && t.readme.startsWith("http")
                  ? t.readme
                  : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.readme,
              stars: a,
              tags: t.tags,
              cssURL: t.usercss.startsWith("http")
                ? t.usercss
                : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.usercss,
              schemesURL: t.schemes
                ? t.schemes.startsWith("http")
                  ? t.schemes
                  : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.schemes
                : null,
              include: t.include,
            };
          return null != t && t.name && null != t && t.usercss && null != t && t.description && e.push(r), e;
        }, [])
      );
    } catch (e) {
      return null;
    }
  }
  async function ya(t, n, a) {
    try {
      let e;
      var r = t.match(new RegExp("https:\\/\\/api\\.github\\.com\\/repos\\/(?<user>.+)\\/(?<repo>.+)\\/contents"));
      if (!r || !r.groups) return null;
      const { user: o, repo: i } = r.groups;
      return (
        (e = await ga(o, i, n)),
        (e = Array.isArray(e) ? e : [e]).reduce((e, t) => {
          var r = t.branch || n,
            r = {
              manifest: t,
              title: t.name,
              subtitle: t.description,
              authors: kn(t.authors, o),
              user: o,
              repo: i,
              branch: r,
              imageURL:
                t.preview && t.preview.startsWith("http")
                  ? t.preview
                  : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.preview,
              readmeURL:
                t.readme && t.readme.startsWith("http")
                  ? t.readme
                  : `https://raw.githubusercontent.com/${o}/${i}/${r}/` + t.readme,
              stars: a,
              tags: t.tags,
            };
          return t && t.name && t.description && e.push(r), e;
        }, [])
      );
    } catch (e) {
      return null;
    }
  }
  var Ea = async () => {
      return (
        await fetch("https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/blacklist.json")
          .then((e) => e.json())
          .catch(() => ({}))
      ).repos;
    },
    wa = async () => {
      return fa.reduce((e, t) => {
        const r = s({}, t);
        return (
          r.preview &&
            ((r.imageURL = r.preview.startsWith("http")
              ? r.preview
              : "https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/" + r.preview),
            delete r.preview),
          e.push(r),
          e
        );
      }, []);
    },
    Sa = t(b("react")),
    ka = class extends Sa.default.Component {
      render() {
        return Sa.default.createElement(
          "div",
          { onClick: this.props.onClick },
          Sa.default.createElement("p", { style: { fontSize: 100, lineHeight: "65px" } }, "»"),
          Sa.default.createElement("span", { style: { fontSize: 20 } }, "Load more")
        );
      }
    },
    Oa = t(b("react")),
    Na = () =>
      Oa.default.createElement(
        "svg",
        { width: "100px", height: "100px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
        Oa.default.createElement(
          "circle",
          { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          Oa.default.createElement("animate", {
            attributeName: "r",
            repeatCount: "indefinite",
            dur: "1s",
            values: "0;40",
            keyTimes: "0;1",
            keySplines: "0 0.2 0.8 1",
            calcMode: "spline",
            begin: "0s",
          }),
          Oa.default.createElement("animate", {
            attributeName: "opacity",
            repeatCount: "indefinite",
            dur: "1s",
            values: "1;0",
            keyTimes: "0;1",
            keySplines: "0.2 0 0.8 1",
            calcMode: "spline",
            begin: "0s",
          })
        ),
        Oa.default.createElement(
          "circle",
          { cx: "50", cy: "50", r: "0", fill: "none", stroke: "currentColor", strokeWidth: "2" },
          Oa.default.createElement("animate", {
            attributeName: "r",
            repeatCount: "indefinite",
            dur: "1s",
            values: "0;40",
            keyTimes: "0;1",
            keySplines: "0 0.2 0.8 1",
            calcMode: "spline",
            begin: "-0.5s",
          }),
          Oa.default.createElement("animate", {
            attributeName: "opacity",
            repeatCount: "indefinite",
            dur: "1s",
            values: "1;0",
            keyTimes: "0;1",
            keySplines: "0.2 0 0.8 1",
            calcMode: "spline",
            begin: "-0.5s",
          })
        )
      ),
    Ca = t(b("react")),
    Ia = () =>
      Ca.default.createElement(
        "svg",
        {
          role: "img",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
        },
        Ca.default.createElement("path", {
          d: "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z",
          fill: "currentColor",
        })
      ),
    xa = t(b("react")),
    La = () =>
      xa.default.createElement(
        "svg",
        {
          className: "devtools-icon",
          version: "1.1",
          viewBox: "1 1 22 22",
          xmlSpace: "preserve",
          xmlns: "http://www.w3.org/2000/svg",
        },
        xa.default.createElement("g", { className: "devtools-icon-internal", id: "grid_system" }),
        xa.default.createElement(
          "g",
          { id: "_icons" },
          xa.default.createElement("path", {
            d: "M18,12v-0.9l0.7-5.7C18.8,4.5,18.6,3.7,18,3c-0.6-0.6-1.4-1-2.2-1H8.3C7.4,2,6.6,2.4,6,3C5.4,3.7,5.2,4.5,5.3,5.4L6,11.1   V12c0,1.6,1.3,2.9,2.8,3l-0.4,2.9c-0.1,1,0.2,2.1,0.8,2.9S11,22,12,22s2-0.5,2.7-1.2s1-1.8,0.8-2.9L15.2,15   C16.7,14.9,18,13.6,18,12z M7.5,4.3C7.7,4.1,8,4,8.3,4H13v2c0,0.6,0.4,1,1,1s1-0.4,1-1V4h0.7c0.3,0,0.6,0.1,0.8,0.3   c0.2,0.2,0.3,0.5,0.2,0.8L16.1,10H7.9L7.3,5.1C7.2,4.8,7.3,4.6,7.5,4.3z M13.2,19.4c-0.6,0.7-1.8,0.7-2.4,0   c-0.3-0.4-0.4-0.8-0.4-1.3l0.5-3.2h2.3l0.5,3.2C13.7,18.6,13.5,19.1,13.2,19.4z M15,13h-1h-4H9c-0.6,0-1-0.4-1-1h8   C16,12.6,15.6,13,15,13z",
          })
        )
      ),
    I = t(b("react")),
    Ra = t(Ve()),
    Be = class extends I.default.Component {
      constructor(e) {
        super(e);
      }
      render() {
        const e = this.props["t"];
        return this.props.item.enabled
          ? I.default.createElement(
              "li",
              {
                className: "marketplace-tabBar-headerItem",
                "data-tab": this.props.item.value,
                onClick: (e) => {
                  e.preventDefault(), this.props.switchTo(this.props.item);
                },
              },
              I.default.createElement(
                "a",
                {
                  "aria-current": "page",
                  className:
                    "marketplace-tabBar-headerItemLink " + (this.props.item.active ? "marketplace-tabBar-active" : ""),
                  draggable: "false",
                  href: "",
                },
                I.default.createElement(
                  "span",
                  { className: "main-type-mestoBold" },
                  e("tabs." + this.props.item.value)
                )
              )
            )
          : null;
      }
    },
    Pa = Gr()(Be),
    Aa = I.default.memo(function ({ items: e, switchTo: t }) {
      return I.default.createElement(
        "li",
        { className: "marketplace-tabBar-headerItem" },
        I.default.createElement(Ra.default, {
          className: "main-type-mestoBold",
          options: e,
          value: "More",
          placeholder: "More",
          onChange: t,
        })
      );
    }),
    Ta = (e) => {
      const t = document.querySelector(".Root__main-view .os-resize-observer-host");
      if (!t) return null;
      const [r, n] = (0, I.useState)(t.clientWidth),
        a = () => n(t.clientWidth);
      return (
        (0, I.useEffect)(() => {
          const e = new ResizeObserver(a);
          return (
            e.observe(t),
            () => {
              e.disconnect();
            }
          );
        }, [a]),
        (0, I.useEffect)(() => {
          {
            var e = document.querySelector(".marketplace-tabBar");
            const t = document.querySelector(".main-topBar-topbarContentWrapper");
            e && t && "/marketplace" == Spicetify.Platform.History.location.pathname && t.appendChild(e),
              Spicetify.Platform.History.listen(({ pathname: e }) => {
                "/marketplace" != e && null != (e = document.querySelector(".marketplace-tabBar")) && e.remove();
              });
          }
        }),
        I.default.createElement(_a, {
          windowSize: r,
          links: e.links,
          activeLink: e.activeLink,
          switchCallback: e.switchCallback,
        })
      );
    },
    _a = I.default.memo(function ({ links: e, activeLink: r, switchCallback: t, windowSize: n = 1 / 0 }) {
      const a = I.default.useRef(null),
        [o, i] = (0, I.useState)([]),
        [s, l] = (0, I.useState)(0),
        [c, u] = (0, I.useState)([]),
        p = e.map(({ name: e, enabled: t }) => {
          return { label: e, value: e, active: e === r, enabled: t };
        });
      return (
        (0, I.useEffect)(() => {
          a.current && l(a.current.clientWidth);
        }, [n]),
        (0, I.useEffect)(() => {
          if (a.current) {
            const t = Array.from(a.current.children);
            var e = t.map((e) => e.clientWidth);
            i(e);
          }
        }, [e]),
        (0, I.useEffect)(() => {
          if (a.current)
            if (o.reduce((e, t) => e + t, 0) <= s) u([]);
            else {
              var e = Math.max(...o);
              const n = [];
              let r = e;
              o.forEach((e, t) => {
                s >= r + e ? (r += e) : n.push(t);
              }),
                u(n);
            }
        }, [s, o]),
        I.default.createElement(
          "nav",
          { className: "marketplace-tabBar marketplace-tabBar-nav" },
          I.default.createElement(
            "ul",
            { className: "marketplace-tabBar-header", ref: a },
            p
              .filter((e, t) => !c.includes(t))
              .map((e) => I.default.createElement(Pa, { key: e.value, item: e, switchTo: t })),
            c.length || 0 === o.length
              ? I.default.createElement(Aa, { items: c.map((e) => p[e]).filter((e) => e), switchTo: t })
              : null
          )
        )
      );
    }),
    x = t(b("react")),
    ja = t(b("react")),
    Da = () =>
      ja.default.createElement(
        "svg",
        {
          role: "img",
          width: "16",
          height: "16",
          viewBox: "0 0 448 512",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
        },
        ja.default.createElement("path", {
          d: "M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z",
          fill: "currentColor",
        })
      ),
    Ma = t(b("react")),
    $a = () =>
      Ma.default.createElement(
        "svg",
        {
          role: "img",
          width: "16",
          height: "16",
          viewBox: "0 0 512 512",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
        },
        Ma.default.createElement("path", {
          d: "M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z",
          fill: "currentColor",
        })
      ),
    Fa = t(b("react")),
    Ba = () =>
      Fa.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" },
        Fa.default.createElement("path", {
          d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
          fill: "currentColor",
        })
      ),
    Ua = t(b("react")),
    Ga = (e) => {
      return Ua.default.createElement(
        "div",
        { className: "marketplace-card__authors" },
        e.authors.map((e, t) =>
          Ua.default.createElement(
            "a",
            {
              title: e.name,
              className: "marketplace-card__author",
              href: e.url,
              draggable: "false",
              dir: "auto",
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (e) => e.stopPropagation(),
              key: t,
            },
            e.name
          )
        )
      );
    },
    Ha = t(b("react")),
    Va = (n) => {
      const [e, t] = Ha.default.useState(!1),
        a = { [g("grid.externalJS")]: "external JS", [g("grid.dark")]: "dark", [g("grid.light")]: "light" };
      var r = (e) => {
          const t = e.filter((e, t, r) => r.indexOf(e) === t);
          return t.reduce((e, t) => {
            var r = a[t] || t;
            return (
              (!n.showTags && t !== g("grid.externalJS")) ||
                e.push(
                  Ha.default.createElement(
                    "li",
                    { className: "marketplace-card__tag", draggable: !1, "data-tag": r },
                    t
                  )
                ),
              e
            );
          }, []);
        },
        o = n.tags.slice(0, 4),
        i = n.tags.slice(4);
      return Ha.default.createElement(
        "div",
        { className: "marketplace-card__tags-container" },
        Ha.default.createElement("ul", { className: "marketplace-card__tags" }, r(o), i.length && e ? r(i) : null),
        i.length && !e
          ? Ha.default.createElement(
              "button",
              {
                className: "marketplace-card__tags-more-btn",
                onClick: (e) => {
                  e.stopPropagation(), t(!0);
                },
              },
              "..."
            )
          : null
      );
    },
    L = window.Spicetify,
    qa = class extends x.default.Component {
      constructor(e) {
        super(e),
          (this.key = null),
          (this.type = qa),
          (this.menuType = L.ReactComponent.Menu),
          (this.localStorageKey = Rn(e)),
          Object.assign(this, e),
          (this.tags = e.item.tags || []),
          e.item.include && this.tags.push(g("grid.externalJS")),
          (this.state = {
            installed: null !== localStorage.getItem(this.localStorageKey),
            stars: this.props.item.stars || 0,
            tagsExpanded: !1,
            externalUrl:
              this.props.item.user && this.props.item.repo
                ? `https://github.com/${this.props.item.user}/` + this.props.item.repo
                : "",
            lastUpdated: this.props.item.user && this.props.item.repo ? this.props.item.lastUpdated : void 0,
          });
      }
      isInstalled() {
        return null !== localStorage.getItem(this.localStorageKey);
      }
      async componentDidMount() {
        if ("Installed" === this.props.CONFIG.activeTab && "snippet" !== this.props.type) {
          var e = `https://api.github.com/repos/${this.props.item.user}/` + this.props.item.repo,
            { stargazers_count: e, pushed_at: t } = await fetch(e).then((e) => e.json());
          const r = { stars: 0, lastUpdated: void 0 };
          this.state.stars !== e &&
            this.props.CONFIG.visual.stars &&
            ((r.stars = e), console.debug("Stars updated to: " + e)),
            this.state.lastUpdated !== t && ((r.lastUpdated = t), console.debug("New update pushed at: " + t));
        }
      }
      buttonClicked() {
        var e, t;
        "extension" === this.props.type
          ? (this.isInstalled()
              ? (console.debug("Extension already installed, removing"), this.removeExtension())
              : this.installExtension(),
            ha("RELOAD"))
          : "theme" === this.props.type
          ? ((t = (t = localStorage.getItem("marketplace:theme-installed")) ? E(t, {}) : {}),
            this.isInstalled()
              ? (console.debug("Theme already installed, removing"), this.removeTheme(this.localStorageKey))
              : (this.removeTheme(), this.installTheme()),
            ((null != (e = this.props.item.manifest) && e.include) || t.include) && ha("RELOAD"))
          : "app" === this.props.type
          ? window.open(this.state.externalUrl, "_blank")
          : "snippet" === this.props.type
          ? this.isInstalled()
            ? (console.debug("Snippet already installed, removing"), this.removeSnippet())
            : this.installSnippet()
          : console.error("Unknown card type");
      }
      installExtension() {
        if ((console.debug("Installing extension " + this.localStorageKey), this.props.item)) {
          var {
            manifest: e,
            title: t,
            subtitle: r,
            authors: n,
            user: a,
            repo: o,
            branch: i,
            imageURL: s,
            extensionURL: l,
            readmeURL: c,
            lastUpdated: u,
          } = this.props.item;
          localStorage.setItem(
            this.localStorageKey,
            JSON.stringify({
              manifest: e,
              type: this.props.type,
              title: t,
              subtitle: r,
              authors: n,
              user: a,
              repo: o,
              branch: i,
              imageURL: s,
              extensionURL: l,
              readmeURL: c,
              stars: this.state.stars,
              lastUpdated: u,
            })
          );
          const p = E(pn, []);
          -1 === p.indexOf(this.localStorageKey) &&
            (p.push(this.localStorageKey), localStorage.setItem(pn, JSON.stringify(p))),
            console.debug("Installed"),
            this.setState({ installed: !0 });
        } else L.showNotification("There was an error installing extension", !0);
      }
      removeExtension() {
        if (localStorage.getItem(this.localStorageKey)) {
          console.debug("Removing extension " + this.localStorageKey), localStorage.removeItem(this.localStorageKey);
          const t = E(pn, []);
          var e = t.filter((e) => e !== this.localStorageKey);
          localStorage.setItem(pn, JSON.stringify(e)), console.debug("Removed"), this.setState({ installed: !1 });
        }
      }
      async installTheme() {
        var t = this.props["item"];
        if (t) {
          console.debug("Installing theme " + this.localStorageKey);
          let e = {};
          if (t.schemesURL) {
            const b = await fetch(t.schemesURL);
            var r = await b.text();
            e = wn(r);
          }
          var r = Object.keys(e)[0],
            r = (console.debug(e, r), r || null),
            {
              manifest: n,
              title: a,
              subtitle: o,
              authors: i,
              user: s,
              repo: l,
              branch: c,
              imageURL: u,
              extensionURL: p,
              readmeURL: d,
              cssURL: h,
              schemesURL: f,
              include: m,
              lastUpdated: g,
            } = t;
          localStorage.setItem(
            this.localStorageKey,
            JSON.stringify({
              manifest: n,
              type: this.props.type,
              title: a,
              subtitle: o,
              authors: i,
              user: s,
              repo: l,
              branch: c,
              imageURL: u,
              extensionURL: p,
              readmeURL: d,
              stars: this.state.stars,
              tags: this.tags,
              cssURL: h,
              schemesURL: f,
              include: m,
              schemes: e,
              activeScheme: r,
              lastUpdated: g,
            })
          );
          const v = E(dn, []);
          -1 === v.indexOf(this.localStorageKey) &&
            (v.push(this.localStorageKey),
            localStorage.setItem(dn, JSON.stringify(v)),
            localStorage.setItem(gn, this.localStorageKey)),
            console.debug("Installed"),
            t.include ||
              (this.fetchAndInjectUserCSS(this.localStorageKey),
              this.props.updateActiveTheme(this.localStorageKey),
              this.props.updateColourSchemes(e, r),
              (a = null == (n = this.props.item.manifest) ? void 0 : n.name) && (L.Config.current_theme = a),
              r && (L.Config.color_scheme = r)),
            this.setState({ installed: !0 });
        } else L.showNotification("There was an error installing theme", !0);
      }
      removeTheme(t) {
        var e = (t = t || localStorage.getItem(gn)) && localStorage.getItem(t);
        if (t && e) {
          console.debug("Removing theme " + t), localStorage.removeItem(t), localStorage.removeItem(gn);
          const r = E(dn, []);
          e = r.filter((e) => e !== t);
          localStorage.setItem(dn, JSON.stringify(e)),
            console.debug("Removed"),
            this.fetchAndInjectUserCSS(null),
            this.props.updateActiveTheme(null),
            this.props.updateColourSchemes(null, null),
            (L.Config.current_theme = L.Config.local_theme),
            (L.Config.color_scheme = L.Config.local_color_scheme),
            this.setState({ installed: !1 });
        }
      }
      installSnippet() {
        console.debug("Installing snippet " + this.localStorageKey),
          localStorage.setItem(
            this.localStorageKey,
            JSON.stringify({
              code: this.props.item.code,
              title: this.props.item.title,
              description: this.props.item.description,
              imageURL: this.props.item.imageURL,
            })
          );
        const e = E(v, []);
        -1 === e.indexOf(this.localStorageKey) &&
          (e.push(this.localStorageKey), localStorage.setItem(v, JSON.stringify(e)));
        var t = e.map((e) => E(e));
        Sn(t), this.setState({ installed: !0 });
      }
      removeSnippet() {
        localStorage.removeItem(this.localStorageKey);
        const e = E(v, []),
          t = e.filter((e) => e !== this.localStorageKey);
        localStorage.setItem(v, JSON.stringify(t));
        var r = t.map((e) => E(e));
        Sn(r), this.setState({ installed: !1 });
      }
      async fetchAndInjectUserCSS(e) {
        try {
          var t = e ? await xn(this.props.item) : void 0;
          In(t);
        } catch (e) {
          console.warn(e);
        }
      }
      openReadme() {
        var e;
        null != (e = this.props.item) &&
        e.manifest &&
        null != (e = null == (e = this.props.item) ? void 0 : e.manifest) &&
        e.readme
          ? L.Platform.History.push({
              pathname: yn + "/readme",
              state: {
                data: {
                  title: this.props.item.title,
                  user: this.props.item.user,
                  repo: this.props.item.repo,
                  branch: this.props.item.branch,
                  readmeURL: this.props.item.readmeURL,
                  type: this.props.type,
                  install: this.buttonClicked.bind(this),
                  isInstalled: this.isInstalled.bind(this),
                },
              },
            })
          : L.showNotification("No page was found", !0);
      }
      render() {
        var e,
          t = this.isInstalled();
        if ("Installed" === this.props.CONFIG.activeTab && !t) return console.debug("Card item not installed"), null;
        const r = ["main-card-card", "marketplace-card--" + this.props.type],
          n = (t && r.push("marketplace-card--installed"), []);
        return (
          "snippet" !== this.props.type && this.props.visual.stars && n.push("★ " + this.state.stars),
          x.default.createElement(
            "div",
            {
              className: r.join(" "),
              onClick: () => {
                if ("snippet" === this.props.type) {
                  var e = this.props.item.title.replace(/\n/g, "");
                  if (null != (e = E("marketplace:installed:snippet:" + e)) && e.custom)
                    return ha("EDIT_SNIPPET", void 0, void 0, this.props);
                  ha("VIEW_SNIPPET", void 0, void 0, this.props, this.buttonClicked.bind(this));
                } else this.openReadme();
              },
            },
            x.default.createElement(
              "div",
              { className: "main-card-draggable", draggable: "true" },
              x.default.createElement(
                "div",
                { className: "main-card-imageContainer" },
                x.default.createElement(
                  "div",
                  { className: "main-cardImage-imageWrapper" },
                  x.default.createElement(
                    "div",
                    null,
                    x.default.createElement("img", {
                      alt: "",
                      "aria-hidden": "false",
                      draggable: "false",
                      loading: "lazy",
                      src: this.props.item.imageURL,
                      className: "main-image-image main-cardImage-image",
                      onError: (e) => {
                        e.currentTarget.setAttribute(
                          "src",
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII"
                        ),
                          null != (e = e.currentTarget.closest(".main-cardImage-imageWrapper")) &&
                            e.classList.add("main-cardImage-imageWrapper--error");
                      },
                    })
                  )
                )
              ),
              x.default.createElement(
                "div",
                { className: "main-card-cardMetadata" },
                x.default.createElement(
                  "a",
                  {
                    draggable: "false",
                    title:
                      "snippet" === this.props.type
                        ? this.props.item.title
                        : null == (e = this.props.item.manifest)
                        ? void 0
                        : e.name,
                    className: "main-cardHeader-link",
                    dir: "auto",
                    href:
                      "snippet" !== this.props.type
                        ? this.state.externalUrl
                        : "https://github.com/spicetify/spicetify-marketplace/blob/main/packages/marketplace/src/resources/snippets.ts",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: (e) => e.stopPropagation(),
                  },
                  x.default.createElement(
                    "div",
                    { className: "main-cardHeader-text main-type-balladBold" },
                    this.props.item.title
                  )
                ),
                x.default.createElement(
                  "div",
                  { className: "main-cardSubHeader-root main-type-mestoBold marketplace-cardSubHeader" },
                  this.props.item.authors && x.default.createElement(Ga, { authors: this.props.item.authors }),
                  x.default.createElement("span", null, n.join(" ‒ "))
                ),
                x.default.createElement(
                  "p",
                  { className: "marketplace-card-desc" },
                  "snippet" === this.props.type
                    ? this.props.item.description
                    : null == (e = this.props.item.manifest)
                    ? void 0
                    : e.description
                ),
                this.props.item.lastUpdated &&
                  x.default.createElement(
                    "p",
                    { className: "marketplace-card-desc" },
                    g("grid.lastUpdated", {
                      val: new Date(this.props.item.lastUpdated),
                      formatParams: { val: { year: "numeric", month: "long", day: "numeric" } },
                    })
                  ),
                this.tags.length
                  ? x.default.createElement(
                      "div",
                      { className: "marketplace-card__bottom-meta main-type-mestoBold" },
                      x.default.createElement(Va, { tags: this.tags, showTags: this.props.CONFIG.visual.tags })
                    )
                  : null,
                t &&
                  x.default.createElement(
                    "div",
                    { className: "marketplace-card__bottom-meta main-type-mestoBold" },
                    "✓ ",
                    g("grid.installed")
                  ),
                x.default.createElement(
                  L.ReactComponent.TooltipWrapper,
                  { label: "app" === this.props.type ? g("github") : g(t ? "remove" : "install"), renderInline: !0 },
                  x.default.createElement(
                    "div",
                    { className: "main-card-PlayButtonContainer" },
                    x.default.createElement(
                      S,
                      {
                        classes: ["marketplace-installButton"],
                        type: "circle",
                        label: "app" === this.props.type ? g("github") : g(t ? "remove" : "install"),
                        onClick: (e) => {
                          e.stopPropagation(), this.buttonClicked();
                        },
                      },
                      "app" === this.props.type
                        ? x.default.createElement(Ba, null)
                        : t
                        ? x.default.createElement(Da, null)
                        : x.default.createElement($a, null)
                    )
                  )
                )
              )
            )
          )
        );
      }
    },
    Ka = Gr()(qa),
    za = t(b("react")),
    Ja = t(e()),
    Wa = t(b("react-dom"));
  var Xa = async function (t, r, e) {
      for (; !Spicetify?.PopupModal || !Spicetify?.LocalStorage; ) await new Promise((e) => setTimeout(e, 100));
      var n,
        t = `spcr-whats-new_${t}-version`,
        a = Spicetify.LocalStorage.get(t) ?? "";
      try {
        (0, Ja.default)(r, a) &&
          (Spicetify.LocalStorage.set(t, r),
          (n = {
            ...e,
            content: (function (e) {
              const t = document.createElement("div"),
                r = (t.setAttribute("id", "whats-new-content-wrapper"), document.createElement("style"));
              return (
                (r.textContent = `
      #whats-new-content-wrapper ul, #whats-new-content-wrapper ol {
         list-style: inherit;
         margin-left: 1em;
      }
   `),
                Wa.default.render(e, t),
                t.appendChild(r),
                t
              );
            })(e.content),
          }),
          Spicetify.PopupModal.display(n));
      } catch (e) {
        Spicetify.LocalStorage.set(t, r);
      }
    },
    Ya = async () => {
      var e = await fetch(En)
        .then((e) => e.json())
        .then((e) => {
          e = e.message ? null : e.body;
          return e && Ln(e, "spicetify", "spicetify-marketplace");
        })
        .catch((e) => (console.error(e), null));
      e &&
        Xa("marketplace", un, {
          title: "✨ Marketplace v0.8.5",
          content: za.default.createElement("div", { dangerouslySetInnerHTML: { __html: e } }),
          isLarge: !0,
        });
    },
    Qa = window.Spicetify,
    r = class extends f.default.Component {
      constructor(e) {
        super(e),
          (this.endOfList = !1),
          (this.lastScroll = 0),
          (this.requestQueue = []),
          (this.requestPage = 0),
          (this.cardList = []),
          Object.assign(this, e),
          (this.updateAppConfig = e.updateAppConfig.bind(this)),
          (this.sortConfig = { by: E(mn, "top") }),
          (this.state = {
            version: un,
            newUpdate: !1,
            searchValue: "",
            cards: [],
            tabs: e.CONFIG.tabs,
            rest: !0,
            endOfList: !1,
            schemes: e.CONFIG.theme.schemes,
            activeScheme: e.CONFIG.theme.activeScheme,
            activeThemeKey: e.CONFIG.theme.activeThemeKey,
          });
      }
      getInstalledTheme() {
        var e = localStorage.getItem(gn);
        return (e = e && localStorage.getItem(e)) ? JSON.parse(e) : null;
      }
      newRequest(e, t) {
        this.cardList = [];
        var r = [];
        this.requestQueue.unshift(r), this.loadAmount(r, e, t);
      }
      appendCard(e, t) {
        e = f.default.createElement(Ka, {
          item: e,
          key: this.props.CONFIG.activeTab + ":" + e.title,
          CONFIG: this.CONFIG,
          visual: this.props.CONFIG.visual,
          type: t,
          activeThemeKey: this.state.activeThemeKey,
          updateColourSchemes: this.updateColourSchemes.bind(this),
          updateActiveTheme: this.setActiveTheme.bind(this),
        });
        this.cardList.push(e), this.setState({ cards: this.cardList });
      }
      updateSort(e) {
        e && ((this.sortConfig.by = e), localStorage.setItem(mn, e)),
          (this.requestPage = 0),
          (this.cardList = []),
          this.setState({ cards: [], rest: !1, endOfList: !1 }),
          (this.endOfList = !1),
          this.newRequest(y);
      }
      updateTabs() {
        this.setState({ tabs: [...this.props.CONFIG.tabs] });
      }
      updatePostsVisual() {
        (this.cardList = this.cardList.map((e, t) =>
          f.default.createElement(Ka, J(s({}, e.props), { key: t.toString(), CONFIG: this.CONFIG }))
        )),
          this.setState({ cards: [...this.cardList] });
      }
      switchTo(e) {
        (this.CONFIG.activeTab = e.value),
          localStorage.setItem(hn, e.value),
          (this.cardList = []),
          (this.requestPage = 0),
          this.setState({ cards: [], rest: !1, endOfList: !1 }),
          (this.endOfList = !1),
          this.newRequest(y);
      }
      async loadPage(t, e) {
        switch (this.CONFIG.activeTab) {
          case "Extensions":
            var r = await ma("spicetify-extensions", this.requestPage, this.BLACKLIST, e);
            for (const i of r.items) {
              const s = await va(
                i.contents_url,
                i.default_branch,
                i.stargazers_count,
                this.CONFIG.visual.hideInstalled
              );
              if (1 < this.requestQueue.length && t !== this.requestQueue[0]) return -1;
              s &&
                s.length &&
                s.forEach((e) => {
                  Object.assign(e, { lastUpdated: i.pushed_at }), this.appendCard(e, "extension");
                });
            }
            var n = -1 < this.requestPage && this.requestPage ? this.requestPage : 1,
              a = y * (n - 1) + r.page_count,
              o = r.total_count - a;
            if ((console.debug(`Parsed ${a}/${r.total_count} extensions`), 0 < o)) return n + 1;
            console.debug("No more extension results");
            break;
          case "Installed": {
            const l = { theme: E(dn, []), extension: E(pn, []), snippet: E(v, []) };
            for (const c in l)
              l[c].length &&
                l[c].forEach(async (e) => {
                  e = E(e);
                  if (1 < this.requestQueue.length && t !== this.requestQueue[0]) return -1;
                  this.appendCard(e, c);
                });
            break;
          }
          case "Themes":
            a = await ma("spicetify-themes", this.requestPage, this.BLACKLIST, e);
            for (const u of a.items) {
              const p = await ba(u.contents_url, u.default_branch, u.stargazers_count);
              if (1 < this.requestQueue.length && t !== this.requestQueue[0]) return -1;
              p &&
                p.length &&
                p.forEach((e) => {
                  Object.assign(e, { lastUpdated: u.pushed_at }), this.appendCard(e, "theme");
                });
            }
            (r = -1 < this.requestPage && this.requestPage ? this.requestPage : 1),
              (o = y * (r - 1) + a.page_count),
              (n = a.total_count - o);
            if ((console.debug(`Parsed ${o}/${a.total_count} themes`), 0 < n)) return r + 1;
            console.debug("No more theme results");
            break;
          case "Apps":
            o = await ma("spicetify-apps", this.requestPage, this.BLACKLIST, e);
            for (const d of o.items) {
              const h = await ya(d.contents_url, d.default_branch, d.stargazers_count);
              if (1 < this.requestQueue.length && t !== this.requestQueue[0]) return -1;
              h &&
                h.length &&
                h.forEach((e) => {
                  Object.assign(e, { lastUpdated: d.pushed_at }), this.appendCard(e, "app");
                });
            }
            (a = -1 < this.requestPage && this.requestPage ? this.requestPage : 1),
              (n = y * (a - 1) + o.page_count),
              (r = o.total_count - n);
            if ((console.debug(`Parsed ${n}/${o.total_count} apps`), 0 < r)) return a + 1;
            console.debug("No more app results");
            break;
          case "Snippets": {
            const f = await wa();
            if (1 < this.requestQueue.length && t !== this.requestQueue[0]) return -1;
            f && f.length && f.forEach((e) => this.appendCard(e, "snippet"));
          }
        }
        return this.setState({ rest: !0, endOfList: !0 }), (this.endOfList = !0), 0;
      }
      async loadAmount(t, e = y, r) {
        for (
          this.setState({ rest: !1 }), e += this.cardList.length, this.requestPage = await this.loadPage(t, r);
          this.requestPage && -1 !== this.requestPage && this.cardList.length < e && !this.state.endOfList;

        )
          this.requestPage = await this.loadPage(t, r);
        -1 === this.requestPage
          ? (this.requestQueue = this.requestQueue.filter((e) => e !== t))
          : (this.requestQueue.shift(), this.setState({ rest: !0 }));
      }
      loadMore() {
        this.state.rest && !this.endOfList && this.loadAmount(this.requestQueue[0], y);
      }
      updateColourSchemes(e, t) {
        console.debug("updateColourSchemes", e, t),
          (this.CONFIG.theme.schemes = e),
          (this.CONFIG.theme.activeScheme = t) && (Qa.Config.color_scheme = t),
          e && t && e[t] ? Cn(this.CONFIG.theme.schemes[t]) : Cn(null);
        var r = E(gn);
        const n = E(r);
        n
          ? ((n.activeScheme = t), console.debug(n), localStorage.setItem(r, JSON.stringify(n)))
          : console.debug("No installed theme data"),
          this.setState({ schemes: e, activeScheme: t });
      }
      async componentDidMount() {
        fetch("https://api.github.com/repos/spicetify/spicetify-marketplace/releases")
          .then((e) => e.json())
          .then(
            (e) => {
              this.setState({ version: e[0].name });
              try {
                this.setState({ newUpdate: cn.default.gt(this.state.version, un) });
              } catch (e) {
                console.error(e);
              }
            },
            (e) => {
              console.error("Failed to check for updates", e);
            }
          ),
          Ya(),
          (this.gridUpdateTabs = this.updateTabs.bind(this)),
          (this.gridUpdatePostsVisual = this.updatePostsVisual.bind(this));
        const e = document.querySelector(".os-viewport");
        (this.checkScroll = this.isScrolledBottom.bind(this)),
          e && (e.addEventListener("scroll", this.checkScroll), this.cardList.length)
            ? 0 < this.lastScroll && e.scrollTo(0, this.lastScroll)
            : ((this.BLACKLIST = await Ea()), this.newRequest(y));
      }
      componentWillUnmount() {
        this.gridUpdateTabs = this.gridUpdatePostsVisual = null;
        const e = document.querySelector(".os-viewport");
        e && ((this.lastScroll = e.scrollTop), e.removeEventListener("scroll", this.checkScroll));
      }
      isScrolledBottom(e) {
        e = e.target;
        e.scrollTop + e.clientHeight >= e.scrollHeight && this.loadMore();
      }
      setActiveTheme(e) {
        (this.CONFIG.theme.activeThemeKey = e), this.setState({ activeThemeKey: e });
      }
      getActiveScheme() {
        return this.state.activeScheme;
      }
      handleSearch(e) {
        "Enter" === e.key
          ? (this.setState({ endOfList: !1 }),
            this.newRequest(y, this.state.searchValue.trim().toLowerCase()),
            (this.searchRequested = !0))
          : ("Backspace" !== e.key && "Delete" !== e.key) ||
            !this.searchRequested ||
            "" !== this.state.searchValue.trim() ||
            (this.setState({ endOfList: !1 }),
            this.newRequest(y, this.state.searchValue.trim().toLowerCase()),
            (this.searchRequested = !1));
      }
      render() {
        const r = this.props["t"];
        return f.default.createElement(
          "section",
          { className: "contentSpacing" },
          f.default.createElement(
            "div",
            { className: "marketplace-header" },
            f.default.createElement(
              "div",
              { className: "marketplace-header__left" },
              f.default.createElement("h1", null, this.props.title),
              this.state.newUpdate
                ? f.default.createElement(
                    "button",
                    {
                      type: "button",
                      title: r("grid.newUpdate"),
                      className: "marketplace-header-icon-button",
                      id: "marketplace-update",
                      onClick: () => (window.location.href = "https://github.com/spicetify/spicetify-marketplace"),
                    },
                    f.default.createElement($a, null),
                    " ",
                    this.state.version
                  )
                : null
            ),
            f.default.createElement(
              "div",
              { className: "marketplace-header__right" },
              this.CONFIG.visual.themeDevTools
                ? f.default.createElement(
                    Qa.ReactComponent.TooltipWrapper,
                    { label: r("devTools.title"), renderInline: !0, placement: "bottom" },
                    f.default.createElement(
                      "button",
                      {
                        type: "button",
                        "aria-label": r("devTools.title"),
                        className: "marketplace-header-icon-button",
                        onClick: () => ha("THEME_DEV_TOOLS"),
                      },
                      f.default.createElement(La, null)
                    )
                  )
                : null,
              this.state.activeScheme
                ? f.default.createElement(Xn, {
                    onChange: (e) => this.updateColourSchemes(this.state.schemes, e),
                    sortBoxOptions: On(this.state.schemes),
                    sortBySelectedFn: (e) => e.key === this.getActiveScheme(),
                  })
                : null,
              f.default.createElement(
                "div",
                { className: "searchbar--bar__wrapper" },
                f.default.createElement("input", {
                  className: "searchbar-bar",
                  type: "text",
                  placeholder: `${r("grid.search")} ${r("tabs." + this.CONFIG.activeTab)}...`,
                  value: this.state.searchValue,
                  onChange: (e) => {
                    this.setState({ searchValue: e.target.value });
                  },
                  onKeyDown: this.handleSearch.bind(this),
                })
              ),
              f.default.createElement(
                Qa.ReactComponent.TooltipWrapper,
                { label: r("settings.title"), renderInline: !0, placement: "bottom" },
                f.default.createElement(
                  "button",
                  {
                    type: "button",
                    "aria-label": r("settings.title"),
                    className: "marketplace-header-icon-button",
                    id: "marketplace-settings-button",
                    onClick: () => ha("SETTINGS", this.CONFIG, this.updateAppConfig),
                  },
                  f.default.createElement(Ia, null)
                )
              )
            )
          ),
          [
            { handle: "extension", name: "Extensions" },
            { handle: "theme", name: "Themes" },
            { handle: "snippet", name: "Snippets" },
            { handle: "app", name: "Apps" },
          ].map((t) => {
            var e = this.cardList
              .filter((e) => e.props.type === t.handle)
              .filter((e) => {
                const t = this.state["searchValue"],
                  { title: r, user: n } = e.props.item;
                if (
                  "" === t.trim() ||
                  r.toLowerCase().includes(t.trim().toLowerCase()) ||
                  (null != n && n.toLowerCase().includes(t.trim().toLowerCase()))
                )
                  return e;
              })
              .map((e) => f.default.cloneElement(e, { activeThemeKey: this.state.activeThemeKey, key: Rn(e.props) }));
            return e.length
              ? f.default.createElement(
                  f.default.Fragment,
                  null,
                  f.default.createElement("h2", { className: "marketplace-card-type-heading" }, r("tabs." + t.name)),
                  f.default.createElement(
                    "div",
                    {
                      className: "marketplace-grid main-gridContainer-gridContainer main-gridContainer-fixedWidth",
                      "data-tab": this.CONFIG.activeTab,
                      "data-card-type": r("tabs." + t.name),
                    },
                    e
                  )
                )
              : null;
          }),
          "Snippets" === this.CONFIG.activeTab
            ? f.default.createElement(
                S,
                { classes: ["marketplace-add-snippet-btn"], onClick: () => ha("ADD_SNIPPET") },
                "+ ",
                r("grid.addCSS")
              )
            : null,
          f.default.createElement(
            "footer",
            { className: "marketplace-footer" },
            !this.state.endOfList &&
              (this.state.rest
                ? f.default.createElement(ka, { onClick: this.loadMore.bind(this) })
                : f.default.createElement(Na, null))
          ),
          f.default.createElement(Ta, {
            switchCallback: this.switchTo.bind(this),
            links: this.CONFIG.tabs,
            activeLink: this.CONFIG.activeTab,
          })
        );
      }
    },
    Za = Gr()(r),
    A = t(b("react")),
    Ue = class extends A.default.Component {
      constructor() {
        super(...arguments),
          (this.state = {
            isInstalled: this.props.data.isInstalled(),
            html: `<p>${this.props.t("readmePage.loading")}</p>`,
          }),
          (this.getReadmeHTML = async () =>
            fetch(this.props.data.readmeURL)
              .then((e) => {
                if (e.ok) return e.text();
                throw Spicetify.showNotification(`${this.props.t("readmePage.errorLoading")} (HTTP ${e.status})`, !0);
              })
              .then((e) => Ln(e, this.props.data.user, this.props.data.repo))
              .then((e) => (e || Spicetify.Platform.History.goBack(), e))
              .catch((e) => (console.error(e), Spicetify.Platform.History.goBack(), null)));
      }
      componentDidMount() {
        this.getReadmeHTML().then((e) => {
          null != e && this.setState({ html: e });
        });
      }
      componentDidUpdate() {
        var e;
        const t = null == (e = document.querySelector("#marketplace-readme")) ? void 0 : e.closest("main");
        if (t) {
          const r = setInterval(() => {
            (t.style.overflowY = "visible"),
              (t.style.overflowY = "auto"),
              (document.querySelector(".os-scrollbar-vertical.os-scrollbar-unusable") && t) || clearInterval(r);
          }, 1e3);
        }
        document.querySelectorAll("#marketplace-readme img").forEach((e) => {
          e.addEventListener(
            "error",
            (e) => {
              const t = e.target;
              (e = t.getAttribute("src")),
                (e =
                  `https://raw.githubusercontent.com/${this.props.data.user}/${this.props.data.repo}/${this.props.data.branch}/` +
                  e);
              t.setAttribute("src", e);
            },
            { once: !0 }
          );
        });
      }
      buttonContent() {
        return "app" === this.props.data.type
          ? { icon: A.default.createElement(Ba, null), text: this.props.t("github") }
          : this.state.isInstalled
          ? { icon: A.default.createElement(Da, null), text: this.props.t("remove") }
          : { icon: A.default.createElement($a, null), text: this.props.t("install") };
      }
      render() {
        return A.default.createElement(
          "section",
          { className: "contentSpacing" },
          A.default.createElement(
            "div",
            { className: "marketplace-header" },
            A.default.createElement(
              "div",
              { className: "marketplace-header__left" },
              A.default.createElement("h1", null, this.props.title)
            ),
            A.default.createElement(
              "div",
              { className: "marketplace-header__right" },
              A.default.createElement(
                S,
                {
                  classes: ["marketplace-header__button"],
                  onClick: (e) => {
                    e.preventDefault(),
                      this.props.data.install(),
                      this.setState({ isInstalled: !this.state.isInstalled });
                  },
                  label: this.buttonContent().text,
                },
                this.buttonContent().icon,
                " ",
                this.buttonContent().text
              )
            )
          ),
          "<p>Loading...</p>" === this.state.html
            ? A.default.createElement("footer", { className: "marketplace-footer" }, A.default.createElement(Na, null))
            : A.default.createElement("div", {
                id: "marketplace-readme",
                className: "marketplace-readme__container",
                dangerouslySetInnerHTML: { __html: this.state.html },
              })
        );
      }
    },
    eo = Gr()(Ue),
    Ge =
      (h
        .use(X)
        .use(Vr)
        .init({
          resources: {
            en: {
              translation: {
                settings: {
                  title: "Settings",
                  optionsHeading: "Options",
                  starCountLabel: "Stars count",
                  tagsLabel: "Tags",
                  devToolsLabel: "Theme developer tools",
                  hideInstalledLabel: "Hide installed when browsing",
                  colourShiftLabel: "Shift colours every minute",
                  albumArtBasedColors: "Change colours based on album art",
                  albumArtBasedColorsMode: "Colour scheme (ColorApi) mode",
                  albumArtBasedColorsVibrancy: "Colour grabbed from album art",
                  albumArtBasedColorsVibrancyToolTip:
                    "Desaturated: The colour that is the most prominent but with much less brightness \n Light Vibrant: The most Vibrant colour but with the brightness amped up a tad \n Prominent: The colour that pops the most in the album art \n Vibrant: The most vibrant colour in the album art",
                  almbumArtColorsModeToolTip:
                    "Monochrome Dark: A colour scheme based directly on the main colour selected, using different shades of the main colour and mixing in greys to create a colour scheme, this is the inverse of Monochrome Light. \n Monochrome Light: A colour scheme based directly on the main colour selected, using different shades of the main colour and mixing in greys to create a colour scheme. The background of monochrome light would be the foreground or text colour on Monochrome Dark and vice versa. \n Analogic: A colour scheme based on the main colour selected, using the colours adjacent to the main colour on the colour wheel. \n Analogic Complementary: A colour scheme based on the main colour selected, using the colours adjacent to the main colour on the colour wheel and the complementary colour. \n Triad: A colour scheme based on the main colour selected, using the colours on the colour wheel that are equidistant from the main colour. \n Quad: A colour scheme based on the main colour selected, using the colours on the colour wheel that are 90 degrees from the main colour.",
                  tabsHeading: "Tabs",
                  resetHeading: "Reset",
                  resetBtn: "$t(settings.resetHeading)",
                  resetDescription: "Uninstall all extensions and themes, and reset preferences",
                  backupHeading: "Back up/Restore",
                  backupLabel:
                    "Back up or restore all Marketplace data. This does not include settings for anything installed via Marketplace.",
                  backupBtn: "Open",
                },
                tabs: {
                  Extensions: "Extensions",
                  Themes: "Themes",
                  Snippets: "Snippets",
                  Apps: "Apps",
                  Installed: "Installed",
                },
                snippets: {
                  addTitle: "Add Snippet",
                  editTitle: "Edit Snippet",
                  viewTitle: "View Snippet",
                  customCSS: "Custom CSS",
                  customCSSPlaceholder:
                    "Input your own custom CSS here! You can find them in the installed tab for management.",
                  snippetName: "Snippet Name",
                  snippetNamePlaceholder: "Enter a name for your custom snippet",
                  snippetDesc: "Snippet Description",
                  snippetDescPlaceholder: "Enter a description for your custom snippet",
                  snippetPreview: "Snippet Preview",
                  optional: "Optional",
                  addImage: "Add image",
                  changeImage: "Change image",
                  saveCSS: "Save CSS",
                },
                reloadModal: {
                  title: "Reload",
                  description: "A page reload is required to complete this operation.",
                  reloadNow: "Reload now",
                  reloadLater: "Reload later",
                },
                backupModal: {
                  title: "$t(settings.backupHeading)",
                  settingsCopied: "Settings copied to clipboard",
                  noDataPasted: "No data pasted",
                  invalidJSON: "Invalid JSON",
                  inputLabel: "Marketplace Settings",
                  inputPlaceholder: "Copy/paste your settings here",
                  exportBtn: "Export",
                  importBtn: "Import",
                  fileImportBtn: "Import from file",
                },
                devTools: {
                  title: "Theme Dev Tools",
                  noThemeInstalled: "Error: No marketplace theme installed",
                  noThemeManifest: "Error: No theme manifest found",
                  colorIniEditor: "Color.ini Editor",
                  colorIniEditorPlaceholder: "[your-colour-scheme-name]",
                  invalidCSS: "Invalid CSS",
                },
                grid: {
                  spicetifyMarketplace: "Spicetify Marketplace",
                  newUpdate: "New update",
                  addCSS: "Add CSS",
                  search: "Search",
                  installed: "Installed",
                  lastUpdated: "Last updated {{val, datetime}}",
                  externalJS: "external JS",
                  dark: "dark",
                  light: "light",
                },
                readmePage: {
                  title: "$t(grid.spicetifyMarketplace) - Readme",
                  loading: "Loading...",
                  errorLoading: "Error loading README",
                },
                github: "GitHub",
                install: "Install",
                remove: "Remove",
                save: "Save",
                colour_one: "colour",
                colour_other: "colours",
                favourite: "favourite",
              },
            },
            "en-US": {
              translation: {
                settings: {
                  colourShiftLabel: "Shift colors every minute",
                  albumArtBasedColors: "Change colors based on album art",
                  albumArtBasedColorsMode: "Color scheme (ColorApi) mode",
                  albumArtBasedColorsVibrancy: "Color grabbed from album art",
                  albumArtBasedColorsVibrancyToolTip:
                    "Desaturated: The color that is the most prominent but with much less brightness \n Light Vibrant: The most Vibrant color but with the brightness amped up a tad \n Prominent: The color that pops the most in the album art \n Vibrant: The most vibrant color in the album art",
                  almbumArtColorsModeToolTip:
                    "Monochrome Dark: A color scheme based directly on the main color selected, using different shades of the main color and mixing in greys to create a color scheme, this is the inverse of Monochrome Light. \n Monochrome Light: A color scheme based directly on the main color selected, using different shades of the main color and mixing in greys to create a color scheme. The background of monochrome light would be the foreground or text color on Monochrome Dark and vice versa. \n Analogic: A color scheme based on the main color selected, using the colors adjacent to the main color on the color wheel. \n Analogic Complementary: A color scheme based on the main color selected, using the colors adjacent to the main color on the color wheel and the complementary color. \n Triad: A color scheme based on the main color selected, using the colors on the color wheel that are equidistant from the main color. \n Quad: A color scheme based on the main color selected, using the colors on the color wheel that are 90 degrees from the main color.",
                },
                devTools: { colorIniEditorPlaceholder: "[your-color-scheme-name]" },
                colour_one: "color",
                colour_other: "colors",
                favourite: "favorite",
              },
            },
            es: {
              translation: {
                settings: {
                  title: "Ajustes",
                  optionsHeading: "Opciones",
                  starCountLabel: "Numero de estrellas",
                  tagsLabel: "Etiquetas",
                  devToolsLabel: "Herramientas para desarrolladores de temas",
                  hideInstalledLabel: "Esconder instalado cuando buscando",
                  colourShiftLabel: "Cambiar colores cada minuto",
                  tabsHeading: "Pestañas",
                  resetHeading: "Reestablecer",
                  resetBtn: "$t(settings.resetHeading)",
                  resetDescription: "Borrar todas estensiones and temas, y borrar preferencias",
                  backupHeading: "Haz una copia/Reestablecer desde una copia",
                  backupLabel:
                    "Haz una copia o reestablece todos los datos de Marketplace desde una copia. Esto no incluye ajustes para las cosas instaladas con Marketplace.",
                  backupBtn: "Abrir",
                },
                tabs: {
                  Extensions: "Extensiónes",
                  Themes: "Temas",
                  Snippets: "Codigos",
                  Apps: "Aplicaciones",
                  Installed: "Instalados",
                },
                snippets: {
                  addTitle: "Añadir Codigo",
                  editTitle: "Editar Codigo",
                  viewTitle: "Ver Codigo",
                  customCSS: "Custom CSS",
                  customCSSPlaceholder:
                    "¡Crea tu propio CSS aqui! Puedes encontrarlos en la pestaña de instalados para administrarlos.",
                  snippetName: "Nombre del codigo",
                  snippetNamePlaceholder: "Asignale un nombre para tu codigo personalizado",
                  snippetDesc: "Descripcion del codigo",
                  snippetDescPlaceholder: "Crea una description para tu codigo personalizado",
                  snippetPreview: "Codigo",
                  optional: "Opcional",
                  addImage: "Añadir imagen",
                  changeImage: "Cambiar imagen",
                  saveCSS: "Guardar CSS",
                },
                reloadModal: {
                  title: "Recargar",
                  description: "Una recarga de ventada es necesaria para completar esta operación.",
                  reloadNow: "Recargar ahora",
                  reloadLater: "Recargar después",
                },
                backupModal: {
                  title: "$t(settings.backupHeading)",
                  settingsCopied: "Ajustes copiados al portapapeles",
                  noDataPasted: "No data pegado",
                  invalidJSON: "JSON invalido",
                  inputLabel: "Ajustes de Marketplace",
                  inputPlaceholder: "Copia/pega tus ajustes aqui",
                  exportBtn: "Exportar",
                  importBtn: "Importar",
                  fileImportBtn: "Importar desde un archivo",
                },
                devTools: {
                  title: "Herramientas de desarrollador de temas",
                  noThemeInstalled: "Error: No tema de marketplace instalado",
                  noThemeManifest: "Error: No manifiesto de tema encontrado",
                  colorIniEditor: "Editor de Color.ini",
                  colorIniEditorPlaceholder: "[nombre-de-esquema-de-color]",
                  invalidCSS: "CSS invalido",
                },
                grid: {
                  spicetifyMarketplace: "Marketplace de Spicetify",
                  newUpdate: "Nueva actualización",
                  addCSS: "Añadir CSS",
                  search: "Buscar",
                  installed: "Instalado",
                  lastUpdated: "Ultima actualización {{val, datetime}}",
                  externalJS: "JS external",
                  dark: "oscuro",
                  light: "claro",
                },
                readmePage: {
                  title: "$t(grid.spicetifyMarketplace) - Readme",
                  loading: "Cargando...",
                  errorLoading: "Error cargando README",
                },
                github: "GitHub",
                install: "Instalar",
                remove: "Borrar",
                save: "Guardar",
                colour_one: "color",
                colour_other: "colores",
                favourite: "favorito",
              },
            },
            fr: {
              translation: {
                settings: {
                  title: "Réglages",
                  optionsHeading: "Options",
                  starCountLabel: "Nombres d’étoiles",
                  tagsLabel: "Tags",
                  devToolsLabel: "Outils pour les développeurs de thèmes",
                  hideInstalledLabel: "Masquer ceux étant installés lors de la navigation",
                  colourShiftLabel: "Changer de couleure chaque minutes",
                  tabsHeading: "Onglets",
                  resetHeading: "Réinitialiser",
                  resetBtn: "$t(settings.resetHeading)",
                  resetDescription:
                    "Désinstaller toutes les extensions et tous les thèmes, ainsi que l’ensemble des réglages",
                  backupHeading: "Sauvegarde/Restauration",
                  backupLabel:
                    "Sauvegarder ou restaurer toutes les données du Marché. Celà n'inclue pas les réglages pour quoi que ce soit installé depuis le Marché.",
                  backupBtn: "Ouvrir",
                },
                tabs: {
                  Extensions: "Extensions",
                  Themes: "Thèmes",
                  Snippets: "Bribes",
                  Apps: "Applications",
                  Installed: "Installé(s)",
                },
                snippets: {
                  addTitle: "Ajouter Bribe",
                  editTitle: "Éditer Bribe",
                  viewTitle: "Voir Bribe",
                  customCSS: "CSS personnalisé",
                  customCSSPlaceholder:
                    "Insérez votre propre CSS personnalisé ici! Vous pouvez les retrouver dans l’onglet Installé pour les gérrer.",
                  snippetName: "Nom de la bribe",
                  snippetNamePlaceholder: "Entrer un nom pour votre bribe personnalisée",
                  snippetDesc: "Description de la bribe",
                  snippetDescPlaceholder: "Entrez une description pour votre bribe personnalisée",
                  snippetPreview: "Prévisualiser la bribe",
                  optional: "Optionnel",
                  addImage: "Ajouter une image",
                  changeImage: "Changer l’image",
                  saveCSS: "Enregistrer le CSS",
                },
                reloadModal: {
                  title: "Recharger",
                  description: "Un rechargement de la page est requis pour finaliser cette opération.",
                  reloadNow: "Recharger maintenant",
                  reloadLater: "Recharger plus tard",
                },
                backupModal: {
                  title: "Sauvegarder/Restaurer",
                  settingsCopied: "Réglages copiés dans le presse-papier",
                  noDataPasted: "Aucune donnée collée",
                  invalidJSON: "JSON invalide",
                  inputLabel: "Réglages du Marché",
                  inputPlaceholder: "Copier/coller vos réglages ici",
                  exportBtn: "Exporter",
                  importBtn: "Importer",
                  fileImportBtn: "Importer depuis un fichier",
                },
                devTools: {
                  title: "Outils de développeurs de thèmes",
                  noThemeInstalled: "Erreur: Aucun thème du marché n’est installé",
                  noThemeManifest: "Erreur: Aucun manifeste de thème trouvé",
                  colorIniEditor: "Éditeur Color.ini",
                  colorIniEditorPlaceholder: "[nom-de-votre-schéma-de-couleur]",
                  invalidCSS: "CSS invalide",
                },
                grid: {
                  spicetifyMarketplace: "Marché Spicetify",
                  newUpdate: "Nouvelle mise à jour",
                  addCSS: "Ajouter CSS",
                  search: "Rechercher",
                  installed: "Installé",
                  lastUpdated: "Dernière mise à jour {{val, datetime}}",
                  externalJS: "JS externe",
                  dark: "sombre",
                  light: "clair",
                },
                readmePage: {
                  title: "$t(grid.spicetifyMarketplace) - Readme",
                  loading: "Chargement…",
                  errorLoading: "Erreur lors du chargement du README",
                },
                github: "GitHub",
                install: "Installer",
                remove: "Supprimer",
                save: "Enregistrer",
                colour_one: "couleure",
                colour_other: "couleures",
                favourite: "favoris",
              },
            },
            "zh-TW": {
              translation: {
                settings: {
                  title: "設定",
                  optionsHeading: "選項",
                  starCountLabel: "收藏數",
                  tagsLabel: "標籤",
                  devToolsLabel: "主題開發者工具",
                  hideInstalledLabel: "瀏覽時隱藏已安裝項目",
                  colourShiftLabel: "每分鐘進行色調偏移",
                  tabsHeading: "分頁",
                  resetHeading: "重設",
                  resetBtn: "$t(settings.resetHeading)",
                  resetDescription: "解除安裝所有擴充套件和主題， 並重設偏好設定",
                  backupHeading: "備份與還原",
                  backupLabel: "備份或還原所有 Marketplace 中的資料（不包含從 Marketplace 安裝的擴充元件的設定）。",
                  backupBtn: "開啟",
                },
                tabs: {
                  Extensions: "擴充套件",
                  Themes: "主題",
                  Snippets: "微調片段",
                  Apps: "功能模組",
                  Installed: "已安裝項目",
                },
                snippets: {
                  addTitle: "加入微調片段",
                  editTitle: "編輯微調片段",
                  viewTitle: "檢視微調片段",
                  customCSS: "自訂 CSS",
                  customCSSPlaceholder:
                    "這裡可以輸入您的自訂 CSS！您可以在「已安裝項目」分頁中看到這些片段，進而進行管理。",
                  snippetName: "微調片段名稱",
                  snippetNamePlaceholder: "輸入自訂微調片段的名稱",
                  snippetDesc: "微調片段描述",
                  snippetDescPlaceholder: "輸入自訂微調片段的描述",
                  snippetPreview: "微調片段預覽圖",
                  optional: "非必須",
                  addImage: "加入影像",
                  changeImage: "更改影像",
                  saveCSS: "儲存 CSS",
                },
                reloadModal: {
                  title: "重新載入",
                  description: "需要重新載入頁面，才能完成這個操作。",
                  reloadNow: "立即重新載入",
                  reloadLater: "稍後重新載入",
                },
                backupModal: {
                  title: "$t(settings.backupHeading)",
                  settingsCopied: "已將設定複製至剪貼簿",
                  noDataPasted: "沒有貼上資料",
                  invalidJSON: "JSON 無效",
                  inputLabel: "Marketplace 設定",
                  inputPlaceholder: "在此複製或貼上設定",
                  exportBtn: "匯出",
                  importBtn: "匯入",
                  fileImportBtn: "從檔案匯入",
                },
                devTools: {
                  title: "主題開發者工具",
                  noThemeInstalled: "錯誤：沒有安裝 Marketplace 主題",
                  noThemeManifest: "錯誤：找不到主題資訊清單",
                  colorIniEditor: "Color.ini 編輯器",
                  colorIniEditorPlaceholder: "[您的色彩配置名稱]",
                  invalidCSS: "CSS 無效",
                },
                grid: {
                  spicetifyMarketplace: "Spicetify Marketplace",
                  newUpdate: "有更新",
                  addCSS: "加入 CSS",
                  search: "搜尋",
                  installed: "已經安裝",
                  lastUpdated: "上次更新於 {{val, datetime}}",
                  externalJS: "有外部 JS",
                  dark: "暗色",
                  light: "亮色",
                },
                readmePage: {
                  title: "$t(grid.spicetifyMarketplace) – 說明",
                  loading: "正在載入……",
                  errorLoading: "載入 README 時發生錯誤",
                },
                github: "GitHub",
                install: "安裝",
                remove: "移除",
                save: "儲存",
                colour_one: "色彩",
                colour_other: "色彩",
                favourite: "收藏",
              },
            },
            "zh-CN": {
              translation: {
                settings: {
                  title: "设置",
                  optionsHeading: "选项",
                  starCountLabel: "收藏数",
                  tagsLabel: "标签",
                  devToolsLabel: "主題开发者工具",
                  hideInstalledLabel: "浏览时隐藏已安装项目",
                  colourShiftLabel: "每分钟进行色调偏移",
                  tabsHeading: "分页",
                  resetHeading: "重置",
                  resetBtn: "$t(settings.resetHeading)",
                  resetDescription: "卸载所有扩展插件和主题，并重置设置",
                },
                tabs: {
                  Extensions: "扩展插件",
                  Themes: "主题",
                  Snippets: "微调片段",
                  Apps: "功能模组",
                  Installed: "已安裝项目",
                },
                snippets: {
                  addTitle: "加入微调片段",
                  editTitle: "编辑微调片段",
                  viewTitle: "检视微调片段",
                  customCSS: "自定义 CSS",
                  customCSSPlaceholder:
                    "这里可以输入您的自定义 CSS！您可以在「已安裝项目」标签页中看到这些片段，进而进行管理。",
                  snippetName: "微调片段名称",
                  snippetNamePlaceholder: "输入自定义微调片段的名称",
                  snippetDesc: "微调片段描述",
                  snippetDescPlaceholder: "输入自定义微调片段的描述",
                  snippetPreview: "微调片段预览图",
                  optional: "非必要",
                  addImage: "加入影像",
                  changeImage: "更改影像",
                  saveCSS: "保存 CSS",
                },
                reloadModal: {
                  title: "重新加载",
                  description: "需要重新加载页面，才能完成这个操作。",
                  reloadNow: "立即重新加载",
                  reloadLater: "稍后重新加载",
                },
                devTools: {
                  title: "主題开发者工具",
                  noThemeInstalled: "错误：未安装商场主题",
                  noThemeManifest: "错误：找不到主题内容清单",
                  colorIniEditor: "Color.ini 编辑器",
                  colorIniEditorPlaceholder: "[您的色彩配置名称]",
                  invalidCSS: "CSS 无效",
                },
                grid: {
                  spicetifyMarketplace: "Spicetify 商场",
                  newUpdate: "有更新",
                  addCSS: "加入 CSS",
                  search: "搜索",
                  installed: "已安装",
                  lastUpdated: "上次更新于 {{val, datetime}}",
                  externalJS: "有外部 JS",
                  dark: "暗色模式",
                  light: "亮色模式",
                },
                readmePage: {
                  title: "$t(grid.spicetifyMarketplace) – 说明",
                  loading: "正在加载……",
                  errorLoading: "加载 README 时发生错误",
                },
                github: "GitHub",
                install: "安裝",
                remove: "移除",
                save: "保存",
                colour_one: "色彩",
                colour_other: "色彩",
                favourite: "收藏",
              },
            },
          },
          detection: { order: ["navigator", "htmlTag"] },
          fallbackLng: "en",
          interpolation: { escapeValue: !1 },
        }),
      class extends tt.default.Component {
        constructor(e) {
          super(e),
            (this.state = { count: 0, CONFIG: {} }),
            (this.updateConfig = (e) => {
              (this.CONFIG = s({}, e)),
                console.debug("updated config", this.CONFIG),
                this.setState({ CONFIG: s({}, e) });
            });
          e = E(fn, null);
          let t = [];
          try {
            if (((t = JSON.parse(e)), !Array.isArray(t))) throw new Error("Could not parse marketplace tabs key");
            if (0 === t.length) throw new Error("Empty marketplace tabs key");
            if (0 < t.filter((e) => !e).length) throw new Error("Falsey marketplace tabs key");
          } catch (e) {
            (t = bn), localStorage.setItem(fn, JSON.stringify(t));
          }
          let r = {},
            n = null;
          try {
            var a = E(gn, null);
            if (a) {
              var o = E(a, null);
              if (!o) throw new Error("No installed theme data");
              (r = o.schemes), (n = o.activeScheme);
            } else console.debug("No theme set as installed");
          } catch (e) {
            console.error(e);
          }
          (this.CONFIG = {
            visual: {
              stars: JSON.parse(E("marketplace:stars", !0)),
              tags: JSON.parse(E("marketplace:tags", !0)),
              hideInstalled: JSON.parse(E("marketplace:hideInstalled", !1)),
              colorShift: JSON.parse(E("marketplace:colorShift", !1)),
              themeDevTools: JSON.parse(E("marketplace:themeDevTools", !1)),
              albumArtBasedColors: JSON.parse(E("marketplace:albumArtBasedColors", !1)),
              albumArtBasedColorsMode: E("marketplace:albumArtBasedColorsMode") || "monochrome-light",
              albumArtBasedColorsVibrancy: E("marketplace:albumArtBasedColorsVibrancy") || "PROMINENT",
              type: JSON.parse(E("marketplace:type", !1)),
              followers: JSON.parse(E("marketplace:followers", !1)),
            },
            tabs: t,
            activeTab: E(hn, t[0]),
            theme: { activeThemeKey: E(gn, null), schemes: r, activeScheme: n },
          }),
            (this.CONFIG.activeTab && this.CONFIG.tabs.filter((e) => e.name === this.CONFIG.activeTab).length) ||
              (this.CONFIG.activeTab = this.CONFIG.tabs[0].name);
        }
        render() {
          var e = Spicetify.Platform.History["location"];
          return e.pathname === yn + "/readme" && e.state.data
            ? tt.default.createElement(eo, { title: g("readmePage.title"), data: e.state.data })
            : tt.default.createElement(Za, {
                title: g("grid.spicetifyMarketplace"),
                CONFIG: this.CONFIG,
                updateAppConfig: this.updateConfig,
              });
        }
      }),
    to = Gr()(Ge),
    ro = t(b("react"));
  return (Ve = Qe), W(j({}, "__esModule", { value: !0 }), Ve);
})();
const render = () => marketplace.default();
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        const a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        const f = new Error(`Cannot find module '${o}'`);
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      const l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        e => {
          const n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (let o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        ((global, factory) => {
          if (typeof define === "function" && define.amd) {
            define(["module", "exports"], factory);
          } else if (typeof exports !== "undefined") {
            factory(module, exports);
          } else {
            const mod = {
              exports: {},
            };
            factory(mod, mod.exports);
            global.Book = mod.exports;
          }
        })(this, (module, exports) => {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          const _createClass = (() => {
            function defineProperties(target, props) {
              props.forEach(descriptor => {
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              });
            }

            return (Constructor, protoProps, staticProps) => {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          const Book = (() => {
            function Book(title) {
              _classCallCheck(this, Book);

              this.title = title;
            }

            _createClass(Book, [
              {
                key: "printTitle",
                value: function printTitle() {
                  console.log(this.title);
                },
              },
            ]);

            return Book;
          })();

          exports.default = Book;
          module.exports = exports["default"];
        });
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        ((global, factory) => {
          if (typeof define === "function" && define.amd) {
            define(["exports"], factory);
          } else if (typeof exports !== "undefined") {
            factory(exports);
          } else {
            const mod = {
              exports: {},
            };
            factory(mod.exports);
            global.CalcArea = mod.exports;
          }
        })(this, exports => {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });
          const circleArea = (exports.circleArea = function circleArea(r) {
            return 3.14 * r ** 2;
          });

          const squareArea = (exports.squareArea = function squareArea(s) {
            return s * s;
          });

          // export { circleArea, squareArea }; // {1}
          exports.circle = circleArea;
          exports.square = squareArea;
        });
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        ((global, factory) => {
          if (typeof define === "function" && define.amd) {
            define(["./17-CalcArea", "./17-Book"], factory);
          } else if (typeof exports !== "undefined") {
            factory(require("./17-CalcArea"), require("./17-Book"));
          } else {
            const mod = {
              exports: {},
            };
            factory(global.CalcArea, global.Book);
            global.ES2015ES6Modules = mod.exports;
          }
        })(this, (_CalcArea, _Book) => {
          "use strict";

          const area = _interopRequireWildcard(_CalcArea);

          const _Book2 = _interopRequireDefault(_Book);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj,
                };
          }

          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              const newObj = {};

              if (obj != null) {
                for (const key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key))
                    newObj[key] = obj[key];
                }
              }

              newObj.default = obj;
              return newObj;
            }
          }

          // @ts-check
          // import { circleArea, squareArea } from './17-CalcArea'; // {2}
          // import { circleArea as circle } from './17-CalcArea';

          // console.log(circleArea(2));
          // console.log(squareArea(2));

          /* Different way of importing the module  */
          console.log(area.circle(2)); // we need the .js to run this code in the browser

          console.log(area.square(2));

          const myBook = new _Book2.default("some title");
          myBook.printTitle();
        });
      },
      { "./17-Book": 1, "./17-CalcArea": 2 },
    ],
  },
  {},
  [3]
);

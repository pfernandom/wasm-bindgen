(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/request_animation_frame.js":
/*!****************************************!*\
  !*** ./pkg/request_animation_frame.js ***!
  \****************************************/
/*! exports provided: run, __widl_f_body_Document, __widl_f_set_text_content_Node, __widl_instanceof_Window, __widl_f_request_animation_frame_Window, __widl_f_document_Window, __wbg_newnoargs_4b1bc9d06177648d, __wbg_call_b1011dd6b074a84c, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_debug_string, __wbindgen_cb_drop, __wbindgen_rethrow, __wbindgen_closure_wrapper104, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_body_Document\", function() { return __widl_f_body_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_set_text_content_Node\", function() { return __widl_f_set_text_content_Node; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_request_animation_frame_Window\", function() { return __widl_f_request_animation_frame_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4b1bc9d06177648d\", function() { return __wbg_newnoargs_4b1bc9d06177648d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_b1011dd6b074a84c\", function() { return __wbg_call_b1011dd6b074a84c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper104\", function() { return __wbindgen_closure_wrapper104; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request_animation_frame_bg */ \"./pkg/request_animation_frame_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_body_Document(arg0) {\n    try {\n\n        const val = getObject(arg0).body;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __widl_f_set_text_content_Node(arg0, arg1, arg2) {\n    let varg1 = arg1 == 0 ? undefined : getStringFromWasm(arg1, arg2);\n    try {\n        getObject(arg0).textContent = varg1;\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __widl_f_request_animation_frame_Window(arg0, arg1, exnptr) {\n    try {\n        return getObject(arg0).requestAnimationFrame(getObject(arg1));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __widl_f_document_Window(arg0) {\n    try {\n\n        const val = getObject(arg0).document;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_newnoargs_4b1bc9d06177648d(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new Function(varg0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_call_b1011dd6b074a84c(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nfunction __wbindgen_debug_string(i, len_ptr) {\n    const toString = Object.prototype.toString;\n    const debug_str = val => {\n        // primitive types\n        const type = typeof val;\n        if (type == 'number' || type == 'boolean' || val == null) {\n            return  `${val}`;\n        }\n        if (type == 'string') {\n            return `\"${val}\"`;\n        }\n        if (type == 'symbol') {\n            const description = val.description;\n            if (description == null) {\n                return 'Symbol';\n            } else {\n                return `Symbol(${description})`;\n            }\n        }\n        if (type == 'function') {\n            const name = val.name;\n            if (typeof name == 'string' && name.length > 0) {\n                return `Function(${name})`;\n            } else {\n                return 'Function';\n            }\n        }\n        // objects\n        if (Array.isArray(val)) {\n            const length = val.length;\n            let debug = '[';\n            if (length > 0) {\n                debug += debug_str(val[0]);\n            }\n            for(let i = 1; i < length; i++) {\n                debug += ', ' + debug_str(val[i]);\n            }\n            debug += ']';\n            return debug;\n        }\n        // Test for built-in\n        const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n        let className;\n        if (builtInMatches.length > 1) {\n            className = builtInMatches[1];\n        } else {\n            // Failed to match the standard '[object ClassName]'\n            return toString.call(val);\n        }\n        if (className == 'Object') {\n            // we're a user defined class or Object\n            // JSON.stringify avoids problems with cycles, and is generally much\n            // easier than looping through ownProperties of `val`.\n            try {\n                return 'Object(' + JSON.stringify(val) + ')';\n            } catch (_) {\n                return 'Object';\n            }\n        }\n        // errors\n        if (val instanceof Error) {\n        return `${val.name}: ${val.message}\n        ${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n};\nconst val = getObject(i);\nconst debug = debug_str(val);\nconst ptr = passStringToWasm(debug);\ngetUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\nreturn ptr;\n}\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = getObject(i).original;\n    dropObject(i);\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_closure_wrapper104(a, b, _ignored) {\n    const f = _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(2);\n    const d = _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_function_table\"].get(3);\n    const cb = function() {\n        this.cnt++;\n        let a = this.a;\n        this.a = 0;\n        try {\n            return f(a, b);\n\n        } finally {\n            this.a = a;\n            if (this.cnt-- == 1) d(this.a, b);\n\n        }\n\n    };\n    cb.a = a;\n    cb.cnt = 1;\n    let real = cb.bind(cb);\n    real.original = cb;\n    return addHeapObject(real);\n}\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _request_animation_frame_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/request_animation_frame.js?");

/***/ }),

/***/ "./pkg/request_animation_frame_bg.wasm":
/*!*********************************************!*\
  !*** ./pkg/request_animation_frame_bg.wasm ***!
  \*********************************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc, __wbindgen_start, __wbg_function_table */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./request_animation_frame */ \"./pkg/request_animation_frame.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/request_animation_frame_bg.wasm?");

/***/ })

}]);
efined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {"version":3,"sources":["jquery.slim.js"],"names":["global","factory","module","exports","document","w","Error","window","this","noGlobal","arr","getProto","Object","getPrototypeOf","slice","concat","push","indexOf","class2type","toString","hasOwn","hasOwnProperty","fnToString","ObjectFunctionString","call","support","DOMEval","code","doc","script","createElement","text","head","appendChild","parentNode","removeChild","version","jQuery","selector","context","fn","init","rtrim","rmsPrefix","rdashAlpha","fcamelCase","all","letter","toUpperCase","prototype","jquery","constructor","length","toArray","get","num","pushStack","elems","ret","merge","prevObject","each","callback","map","elem","i","apply","arguments","first","eq","last","len","j","end","sort","splice","extend","options","name","src","copy","copyIsArray","clone","target","deep","isFunction","isPlainObject","Array","isArray","undefined","expando","Math","random","replace","isReady","error","msg","noop","obj","type","isWindow","isNumeric","isNaN","parseFloat","proto","Ctor","isEmptyObject","globalEval","camelCase","string","isArrayLike","trim","makeArray","results","inArray","second","grep","invert","callbackInverse","matches","callbackExpect","arg","value","guid","proxy","tmp","args","now","Date","Symbol","iterator","split","toLowerCase","Sizzle","Expr","getText","isXML","tokenize","compile","select","outermostContext","sortInput","hasDuplicate","setDocument","docElem","documentIsHTML","rbuggyQSA","rbuggyMatches","contains","preferredDoc","dirruns","done","classCache","createCache","tokenCache","compilerCache","sortOrder","a","b","pop","push_native","list","booleans","whitespace","identifier","attributes","pseudos","rwhitespace","RegExp","rcomma","rcombinators","rattributeQuotes","rpseudo","ridentifier","matchExpr","ID","CLASS","TAG","ATTR","PSEUDO","CHILD","bool","needsContext","rinputs","rheader","rnative","rquickExpr","rsibling","runescape","funescape","_","escaped","escapedWhitespace","high","String","fromCharCode","rcssescape","fcssescape","ch","asCodePoint","charCodeAt","unloadHandler","disabledAncestor","addCombinator","disabled","dir","next","childNodes","nodeType","e","els","seed","m","nid","match","groups","newSelector","newContext","ownerDocument","exec","getElementById","id","getElementsByTagName","getElementsByClassName","qsa","test","nodeName","getAttribute","setAttribute","toSelector","join","testContext","querySelectorAll","qsaError","removeAttribute","keys","cache","key","cacheLength","shift","markFunction","assert","el","addHandle","attrs","handler","attrHandle","siblingCheck","cur","diff","sourceIndex","nextSibling","createInputPseudo","createButtonPseudo","createDisabledPseudo","isDisabled","createPositionalPseudo","argument","matchIndexes","documentElement","node","hasCompare","subWindow","defaultView","top","addEventListener","attachEvent","className","createComment","getById","getElementsByName","filter","attrId","find","getAttributeNode","tag","innerHTML","input","matchesSelector","webkitMatchesSelector","mozMatchesSelector","oMatchesSelector","msMatchesSelector","disconnectedMatch","compareDocumentPosition","adown","bup","compare","sortDetached","aup","ap","bp","unshift","expr","elements","attr","val","specified","escape","sel","uniqueSort","duplicates","detectDuplicates","sortStable","textContent","firstChild","nodeValue","selectors","createPseudo","relative",">"," ","+","~","preFilter","excess","unquoted","nodeNameSelector","pattern","operator","check","result","what","simple","forward","ofType","xml","uniqueCache","outerCache","nodeIndex","start","parent","useCache","lastChild","uniqueID","pseudo","setFilters","idx","matched","not","matcher","unmatched","has","innerText","lang","elemLang","hash","location","root","focus","activeElement","hasFocus","href","tabIndex","enabled","checked","selected","selectedIndex","empty","header","button","even","odd","lt","gt","radio","checkbox","file","password","image","submit","reset","filters","parseOnly","tokens","soFar","preFilters","cached","combinator","base","skip","checkNonElements","doneName","oldCache","newCache","elementMatcher","matchers","multipleContexts","contexts","condense","newUnmatched","mapped","setMatcher","postFilter","postFinder","postSelector","temp","preMap","postMap","preexisting","matcherIn","matcherOut","matcherFromTokens","checkContext","leadingRelative","implicitRelative","matchContext","matchAnyContext","matcherFromGroupMatchers","elementMatchers","setMatchers","bySet","byElement","superMatcher","outermost","matchedCount","setMatched","contextBackup","dirrunsUnique","token","compiled","defaultValue","unique","isXMLDoc","escapeSelector","until","truncate","is","siblings","n","rneedsContext","rsingleTag","risSimple","winnow","qualifier","self","rootjQuery","parseHTML","ready","rparentsprev","guaranteedUnique","children","contents","prev","targets","l","closest","index","prevAll","add","addBack","sibling","parents","parentsUntil","nextAll","nextUntil","prevUntil","contentDocument","content","reverse","rnothtmlwhite","createOptions","object","flag","Callbacks","firing","memory","fired","locked","queue","firingIndex","fire","once","stopOnFalse","remove","disable","lock","fireWith","Identity","v","Thrower","ex","adoptValue","resolve","reject","noValue","method","promise","fail","then","Deferred","func","tuples","state","always","deferred","catch","pipe","fns","newDefer","tuple","returned","progress","notify","onFulfilled","onRejected","onProgress","maxDepth","depth","special","that","mightThrow","TypeError","notifyWith","resolveWith","process","exceptionHook","stackTrace","rejectWith","getStackHook","setTimeout","stateString","when","singleValue","remaining","resolveContexts","resolveValues","master","updateFunc","rerrorNames","stack","console","warn","message","readyException","readyList","readyWait","wait","completed","removeEventListener","readyState","doScroll","access","chainable","emptyGet","raw","bulk","acceptData","owner","Data","uid","defineProperty","configurable","set","data","prop","hasData","dataPriv","dataUser","rbrace","rmultiDash","getData","JSON","parse","dataAttr","removeData","_data","_removeData","dequeue","startLength","hooks","_queueHooks","stop","setter","clearQueue","count","defer","pnum","source","rcssNum","cssExpand","isHiddenWithinTree","style","display","css","swap","old","adjustCSS","valueParts","tween","adjusted","scale","maxIterations","currentValue","initial","unit","cssNumber","initialInUnit","defaultDisplayMap","getDefaultDisplay","body","showHide","show","values","hide","toggle","rcheckableType","rtagName","rscriptType","wrapMap","option","thead","col","tr","td","_default","optgroup","tbody","tfoot","colgroup","caption","th","getAll","setGlobalEval","refElements","rhtml","buildFragment","scripts","selection","ignored","wrap","fragment","createDocumentFragment","nodes","htmlPrefilter","createTextNode","div","checkClone","cloneNode","noCloneChecked","rkeyEvent","rmouseEvent","rtypenamespace","returnTrue","returnFalse","safeActiveElement","err","on","types","one","origFn","event","off","handleObjIn","eventHandle","events","t","handleObj","handlers","namespaces","origType","elemData","handle","triggered","dispatch","delegateType","bindType","namespace","delegateCount","setup","mappedTypes","origCount","teardown","removeEvent","nativeEvent","fix","handlerQueue","delegateTarget","preDispatch","isPropagationStopped","currentTarget","isImmediatePropagationStopped","rnamespace","preventDefault","stopPropagation","postDispatch","matchedHandlers","matchedSelectors","addProp","hook","Event","enumerable","originalEvent","writable","load","noBubble","trigger","blur","click","beforeunload","returnValue","props","isDefaultPrevented","defaultPrevented","relatedTarget","timeStamp","isSimulated","stopImmediatePropagation","altKey","bubbles","cancelable","changedTouches","ctrlKey","detail","eventPhase","metaKey","pageX","pageY","shiftKey","view","char","charCode","keyCode","buttons","clientX","clientY","offsetX","offsetY","pointerId","pointerType","screenX","screenY","targetTouches","toElement","touches","which","mouseenter","mouseleave","pointerenter","pointerleave","orig","related","rxhtmlTag","rnoInnerhtml","rchecked","rscriptTypeMasked","rcleanScript","manipulationTarget","disableScript","restoreScript","cloneCopyEvent","dest","pdataOld","pdataCur","udataOld","udataCur","fixInput","domManip","collection","hasScripts","iNoClone","html","_evalUrl","keepData","cleanData","dataAndEvents","deepDataAndEvents","srcElements","destElements","inPage","detach","append","prepend","insertBefore","before","after","replaceWith","replaceChild","appendTo","prependTo","insertAfter","replaceAll","original","insert","rmargin","rnumnonpx","getStyles","opener","getComputedStyle","computeStyleTests","cssText","container","divStyle","pixelPositionVal","reliableMarginLeftVal","marginLeft","boxSizingReliableVal","width","marginRight","pixelMarginRightVal","backgroundClip","clearCloneStyle","pixelPosition","boxSizingReliable","pixelMarginRight","reliableMarginLeft","curCSS","computed","minWidth","maxWidth","getPropertyValue","addGetHookIf","conditionFn","hookFn","rdisplayswap","rcustomProp","cssShow","position","visibility","cssNormalTransform","letterSpacing","fontWeight","cssPrefixes","emptyStyle","vendorPropName","capName","finalPropName","cssProps","setPositiveNumber","subtract","max","augmentWidthOrHeight","extra","isBorderBox","styles","getWidthOrHeight","valueIsBorderBox","cssHooks","opacity","animationIterationCount","columnCount","fillOpacity","flexGrow","flexShrink","lineHeight","order","orphans","widows","zIndex","zoom","float","origName","isCustomProp","setProperty","isFinite","getClientRects","getBoundingClientRect","left","margin","padding","border","prefix","suffix","expand","e
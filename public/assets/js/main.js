(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;


    // packages/systems/ix2/shared-constants/index.ts
    var shared_constants_exports = {};
    __export(shared_constants_exports, {
        ActionAppliesTo: () => ActionAppliesTo,
        ActionTypeConsts: () => ActionTypeConsts,
        EventAppliesTo: () => EventAppliesTo,
        EventBasedOn: () => EventBasedOn,
        EventContinuousMouseAxes: () => EventContinuousMouseAxes,
        EventLimitAffectedElements: () => EventLimitAffectedElements,
        EventTypeConsts: () => EventTypeConsts,
        IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
        IX2EngineConstants: () => IX2EngineConstants_exports,
        InteractionTypeConsts: () => InteractionTypeConsts,
        QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
        QuickEffectIds: () => QuickEffectIds,
        ReducedMotionTypes: () => ReducedMotionTypes
    });
    var init_shared_constants = __esm({
        "packages/systems/ix2/shared-constants/index.ts"() {
            "use strict";
            init_trigger_events();
            init_animation_actions();
            init_trigger_interactions();
            init_reduced_motion();
            init_IX2EngineActionTypes();
            init_IX2EngineConstants();
            init_animation_actions();
            init_trigger_events();
        }
    });


    // packages/systems/ix2/shared-constants/trigger-events.ts
    var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
    var init_trigger_events = __esm({
        "packages/systems/ix2/shared-constants/trigger-events.ts"() {
            "use strict";
            EventTypeConsts = {
                NAVBAR_OPEN: "NAVBAR_OPEN",
                NAVBAR_CLOSE: "NAVBAR_CLOSE",
                TAB_ACTIVE: "TAB_ACTIVE",
                TAB_INACTIVE: "TAB_INACTIVE",
                SLIDER_ACTIVE: "SLIDER_ACTIVE",
                SLIDER_INACTIVE: "SLIDER_INACTIVE",
                DROPDOWN_OPEN: "DROPDOWN_OPEN",
                DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                MOUSE_CLICK: "MOUSE_CLICK",
                MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                MOUSE_DOWN: "MOUSE_DOWN",
                MOUSE_UP: "MOUSE_UP",
                MOUSE_OVER: "MOUSE_OVER",
                MOUSE_OUT: "MOUSE_OUT",
                MOUSE_MOVE: "MOUSE_MOVE",
                MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                PAGE_START: "PAGE_START",
                PAGE_FINISH: "PAGE_FINISH",
                PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                PAGE_SCROLL: "PAGE_SCROLL"
            };
            EventAppliesTo = {
                ELEMENT: "ELEMENT",
                CLASS: "CLASS",
                PAGE: "PAGE"
            };
            EventBasedOn = {
                ELEMENT: "ELEMENT",
                VIEWPORT: "VIEWPORT"
            };
            EventContinuousMouseAxes = {
                X_AXIS: "X_AXIS",
                Y_AXIS: "Y_AXIS"
            };
            EventLimitAffectedElements = {
                CHILDREN: "CHILDREN",
                SIBLINGS: "SIBLINGS",
                IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
            };
            QuickEffectIds = {
                FADE_EFFECT: "FADE_EFFECT",
                SLIDE_EFFECT: "SLIDE_EFFECT",
                GROW_EFFECT: "GROW_EFFECT",
                SHRINK_EFFECT: "SHRINK_EFFECT",
                SPIN_EFFECT: "SPIN_EFFECT",
                FLY_EFFECT: "FLY_EFFECT",
                POP_EFFECT: "POP_EFFECT",
                FLIP_EFFECT: "FLIP_EFFECT",
                JIGGLE_EFFECT: "JIGGLE_EFFECT",
                PULSE_EFFECT: "PULSE_EFFECT",
                DROP_EFFECT: "DROP_EFFECT",
                BLINK_EFFECT: "BLINK_EFFECT",
                BOUNCE_EFFECT: "BOUNCE_EFFECT",
                FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                JELLO_EFFECT: "JELLO_EFFECT",
                GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
            };
            QuickEffectDirectionConsts = {
                LEFT: "LEFT",
                RIGHT: "RIGHT",
                BOTTOM: "BOTTOM",
                TOP: "TOP",
                BOTTOM_LEFT: "BOTTOM_LEFT",
                BOTTOM_RIGHT: "BOTTOM_RIGHT",
                TOP_RIGHT: "TOP_RIGHT",
                TOP_LEFT: "TOP_LEFT",
                CLOCKWISE: "CLOCKWISE",
                COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
            };
        }
    });

    // packages/systems/ix2/shared-constants/trigger-interactions.ts
    var InteractionTypeConsts;
    var init_trigger_interactions = __esm({
        "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
            "use strict";
            InteractionTypeConsts = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            };
        }
    });

    var init_IX2VanillaEngine = __esm({
        "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
            "use strict";
            import_find2 = __toESM(require_find());
            import_get2 = __toESM(require_get());
            import_size = __toESM(require_size());
            import_omitBy = __toESM(require_omitBy());
            import_isEmpty = __toESM(require_isEmpty());
            import_mapValues = __toESM(require_mapValues());
            import_forEach = __toESM(require_forEach());
            import_throttle = __toESM(require_throttle());
            init_shared_constants();
            import_shared6 = __toESM(require_shared2());
            init_IX2EngineActions();
            init_IX2BrowserApi();
            init_IX2VanillaEvents();
            QuickEffectsIdList = Object.keys(QuickEffectIds);
            isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
            ({
                COLON_DELIMITER: COLON_DELIMITER4,
                BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
                HTML_ELEMENT: HTML_ELEMENT4,
                RENDER_GENERAL: RENDER_GENERAL4,
                W_MOD_IX: W_MOD_IX2
            } = IX2EngineConstants_exports);
            ({
                getAffectedElements: getAffectedElements2,
                getElementId: getElementId2,
                getDestinationValues: getDestinationValues2,
                observeStore: observeStore2,
                getInstanceId: getInstanceId2,
                renderHTMLElement: renderHTMLElement2,
                clearAllStyles: clearAllStyles2,
                getMaxDurationItemIndex: getMaxDurationItemIndex2,
                getComputedStyle: getComputedStyle3,
                getInstanceOrigin: getInstanceOrigin2,
                reduceListToGroup: reduceListToGroup2,
                shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
                getNamespacedParameterId: getNamespacedParameterId3,
                shouldAllowMediaQuery: shouldAllowMediaQuery2,
                cleanupHTMLElement: cleanupHTMLElement2,
                clearObjectCache: clearObjectCache2,
                stringifyTarget: stringifyTarget2,
                mediaQueriesEqual: mediaQueriesEqual2,
                shallowEqual: shallowEqual2
            } = import_shared6.IX2VanillaUtils);
            ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
            ua = navigator.userAgent;
            IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
            THROTTLED_EVENT_WAIT = 12;
            WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
            mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
            forEachEventTarget = (eventTargets, eventCallback) => {
                (0, import_forEach.default)(eventTargets, (elements, eventId) => {
                    elements.forEach((element, index) => {
                        const eventStateKey = eventId + COLON_DELIMITER4 + index;
                        eventCallback(element, eventId, eventStateKey);
                    });
                });
            };
            getAffectedForEvent = (event) => {
                const config = { target: event.target, targets: event.targets };
                return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
            };
        }
    });

    // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
    var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
    var init_IX2VanillaEvents = __esm({
        "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
            "use strict";
            import_flow = __toESM(require_flow());
            import_get = __toESM(require_get());
            import_clamp = __toESM(require_clamp());
            init_shared_constants();
            init_IX2VanillaEngine();
            init_IX2EngineActions();
            import_shared5 = __toESM(require_shared2());
            ({
                MOUSE_CLICK,
                MOUSE_SECOND_CLICK,
                MOUSE_DOWN,
                MOUSE_UP,
                MOUSE_OVER,
                MOUSE_OUT,
                DROPDOWN_CLOSE,
                DROPDOWN_OPEN,
                SLIDER_ACTIVE,
                SLIDER_INACTIVE,
                TAB_ACTIVE,
                TAB_INACTIVE,
                NAVBAR_CLOSE,
                NAVBAR_OPEN,
                MOUSE_MOVE,
                PAGE_SCROLL_DOWN,
                SCROLL_INTO_VIEW,
                SCROLL_OUT_OF_VIEW,
                PAGE_SCROLL_UP,
                SCROLLING_IN_VIEW,
                PAGE_FINISH,
                ECOMMERCE_CART_CLOSE,
                ECOMMERCE_CART_OPEN,
                PAGE_START,
                PAGE_SCROLL
            } = EventTypeConsts);
            COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
            COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
            ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
            ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
            composableFilter = (predicate) => (options) => {
                if (typeof options === "object" && predicate(options)) {
                    return true;
                }
                return options;
            };
            isElement = composableFilter(({ element, nativeEvent }) => {
                return element === nativeEvent.target;
            });
            containsElement = composableFilter(({ element, nativeEvent }) => {
                return element.contains(nativeEvent.target);
            });
            isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
            getAutoStopEvent = (store, autoStopEventId) => {
                if (autoStopEventId) {
                    const { ixData: ixData2 } = store.getState();
                    const { events } = ixData2;
                    const eventToStop = events[autoStopEventId];
                    if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
                        return eventToStop;
                    }
                }
                return null;
            };
            hasAutoStopEvent = ({ store, event }) => {
                const { action: eventAction } = event;
                const { autoStopEventId } = eventAction.config;
                return Boolean(getAutoStopEvent(store, autoStopEventId));
            };
            actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
                const { action: eventAction, id: eventId } = event;
                const { actionListId, autoStopEventId } = eventAction.config;
                const eventToStop = getAutoStopEvent(store, autoStopEventId);
                if (eventToStop) {
                    stopActionGroup({
                        store,
                        eventId: autoStopEventId,
                        eventTarget: element,
                        eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
                        actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
                    });
                }
                stopActionGroup({
                    store,
                    eventId,
                    eventTarget: element,
                    eventStateKey,
                    actionListId
                });
                startActionGroup({
                    store,
                    eventId,
                    eventTarget: element,
                    eventStateKey,
                    actionListId
                });
                return state;
            };
            withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
            baseActionGroupOptions = {
                handler: withFilter(isOrContainsElement, actionGroupCreator)
            };
            baseActivityActionGroupOptions = {
                ...baseActionGroupOptions,
                types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
            };
            SCROLL_EVENT_TYPES = [
                { target: window, types: "resize orientationchange", throttle: true },
                {
                    target: document,
                    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                    throttle: true
                }
            ];
            MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
            baseScrollActionGroupOptions = {
                types: SCROLL_EVENT_TYPES
            };
            AUTO_STOP_DISABLED_EVENTS = {
                PAGE_START,
                PAGE_FINISH
            };
            getDocumentState = (() => {
                const supportOffset = window.pageXOffset !== void 0;
                const isCSS1Compat = document.compatMode === "CSS1Compat";
                const rootElement = isCSS1Compat ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
                    scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
                    // required to remove elasticity in Safari scrolling.
                    stiffScrollTop: (0, import_clamp.default)(
                        supportOffset ? window.pageYOffset : rootElement.scrollTop,
                        0,
                        rootElement.scrollHeight - window.innerHeight
                    ),
                    scrollWidth: rootElement.scrollWidth,
                    scrollHeight: rootElement.scrollHeight,
                    clientWidth: rootElement.clientWidth,
                    clientHeight: rootElement.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                });
            })();
            areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
            isElementHovered = ({ element, nativeEvent }) => {
                const { type, target, relatedTarget } = nativeEvent;
                const containsTarget = element.contains(target);
                if (type === "mouseover" && containsTarget) {
                    return true;
                }
                const containsRelated = element.contains(relatedTarget);
                if (type === "mouseout" && containsTarget && containsRelated) {
                    return true;
                }
                return false;
            };
            isElementVisible = (options) => {
                const {
                    element,
                    event: { config }
                } = options;
                const { clientWidth, clientHeight } = getDocumentState();
                const scrollOffsetValue = config.scrollOffsetValue;
                const scrollOffsetUnit = config.scrollOffsetUnit;
                const isPX = scrollOffsetUnit === "PX";
                const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
                return areBoxesIntersecting(element.getBoundingClientRect(), {
                    left: 0,
                    top: offsetPadding,
                    right: clientWidth,
                    bottom: clientHeight - offsetPadding
                });
            };
            whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
                (handler) => (options, oldState) => {
                    const { type } = options.nativeEvent;
                    const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
                    const newState = {
                        ...oldState,
                        isActive
                    };
                    if (!oldState || newState.isActive !== oldState.isActive) {
                        return handler(options, newState) || newState;
                    }
                    return newState;
                };
            whenElementHoverChange = (handler) => (options, oldState) => {
                const newState = {
                    elementHovered: isElementHovered(options)
                };
                if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
                    return handler(options, newState) || newState;
                }
                return newState;
            };
            whenElementVisibiltyChange = (handler) => (options, oldState) => {
                const newState = {
                    ...oldState,
                    elementVisible: isElementVisible(options)
                };
                if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
                    return handler(options, newState) || newState;
                }
                return newState;
            };
            whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
                (handler) => (options, oldState = {}) => {
                    const {
                        stiffScrollTop: scrollTop,
                        scrollHeight,
                        innerHeight
                    } = getDocumentState();
                    const {
                        event: { config, eventTypeId }
                    } = options;
                    const { scrollOffsetValue, scrollOffsetUnit } = config;
                    const isPX = scrollOffsetUnit === "PX";
                    const scrollHeightBounds = scrollHeight - innerHeight;
                    const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
                    if (oldState && oldState.percentTop === percentTop) {
                        return oldState;
                    }
                    const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
                    let scrollingDown;
                    let scrollDirectionChanged;
                    let anchorTop = 0;
                    if (oldState) {
                        scrollingDown = percentTop > oldState.percentTop;
                        scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
                        anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
                    }
                    const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
                    const newState = {
                        ...oldState,
                        percentTop,
                        inBounds,
                        anchorTop,
                        scrollingDown
                    };
                    if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
                        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
                        return handler(options, newState) || newState;
                    }
                    return newState;
                };
            pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
            whenPageLoadFinish = (handler) => (options, oldState) => {
                const newState = {
                    finished: document.readyState === "complete"
                };
                if (newState.finished && !(oldState && oldState.finshed)) {
                    handler(options);
                }
                return newState;
            };
            whenPageLoadStart = (handler) => (options, oldState) => {
                const newState = {
                    started: true
                };
                if (!oldState) {
                    handler(options);
                }
                return newState;
            };
            whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
                const newState = {
                    clickCount: oldState.clickCount % 2 + 1
                };
                if (newState.clickCount !== oldState.clickCount) {
                    return handler(options, newState) || newState;
                }
                return newState;
            };
            getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
                ...baseActivityActionGroupOptions,
                handler: withFilter(
                    allowNestedChildrenEvents ? isOrContainsElement : isElement,
                    // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
                    whenComponentActiveChange((options, state) => {
                        return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
                    })
                )
            });
            getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
                ...baseActivityActionGroupOptions,
                handler: withFilter(
                    allowNestedChildrenEvents ? isOrContainsElement : isElement,
                    // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
                    whenComponentActiveChange((options, state) => {
                        return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
                    })
                )
            });
            scrollIntoOutOfViewOptions = {
                ...baseScrollActionGroupOptions,
                handler: whenElementVisibiltyChange((options, state) => {
                    const { elementVisible } = state;
                    const { event, store } = options;
                    const { ixData: ixData2 } = store.getState();
                    const { events } = ixData2;
                    if (!events[event.action.config.autoStopEventId] && state.triggered) {
                        return state;
                    }
                    if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
                        actionGroupCreator(options);
                        return {
                            ...state,
                            triggered: true
                        };
                    } else {
                        return state;
                    }
                })
            };
            MOUSE_OUT_ROUND_THRESHOLD = 0.05;
            IX2VanillaEvents_default = {
                [SLIDER_ACTIVE]: getComponentActiveOptions(),
                [SLIDER_INACTIVE]: getComponentInactiveOptions(),
                [DROPDOWN_OPEN]: getComponentActiveOptions(),
                [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
                // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
                // events where the target is the navbar element, and ignore children that dispatch activitiy events.
                [NAVBAR_OPEN]: getComponentActiveOptions(false),
                [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
                [TAB_ACTIVE]: getComponentActiveOptions(),
                [TAB_INACTIVE]: getComponentInactiveOptions(),
                [ECOMMERCE_CART_OPEN]: {
                    types: "ecommerce-cart-open",
                    handler: withFilter(isOrContainsElement, actionGroupCreator)
                },
                [ECOMMERCE_CART_CLOSE]: {
                    types: "ecommerce-cart-close",
                    handler: withFilter(isOrContainsElement, actionGroupCreator)
                },
                [MOUSE_CLICK]: {
                    types: "click",
                    handler: withFilter(
                        isOrContainsElement,
                        whenClickCountChange((options, { clickCount }) => {
                            if (hasAutoStopEvent(options)) {
                                clickCount === 1 && actionGroupCreator(options);
                            } else {
                                actionGroupCreator(options);
                            }
                        })
                    )
                },
                [MOUSE_SECOND_CLICK]: {
                    types: "click",
                    handler: withFilter(
                        isOrContainsElement,
                        whenClickCountChange((options, { clickCount }) => {
                            if (clickCount === 2) {
                                actionGroupCreator(options);
                            }
                        })
                    )
                },
                [MOUSE_DOWN]: {
                    ...baseActionGroupOptions,
                    types: "mousedown"
                },
                [MOUSE_UP]: {
                    ...baseActionGroupOptions,
                    types: "mouseup"
                },
                [MOUSE_OVER]: {
                    types: MOUSE_OVER_OUT_TYPES,
                    handler: withFilter(
                        isOrContainsElement,
                        whenElementHoverChange((options, state) => {
                            if (state.elementHovered) {
                                actionGroupCreator(options);
                            }
                        })
                    )
                },
                [MOUSE_OUT]: {
                    types: MOUSE_OVER_OUT_TYPES,
                    handler: withFilter(
                        isOrContainsElement,
                        whenElementHoverChange((options, state) => {
                            if (!state.elementHovered) {
                                actionGroupCreator(options);
                            }
                        })
                    )
                },
                [MOUSE_MOVE]: {
                    types: "mousemove mouseout scroll",
                    handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
                        const {
                            basedOn,
                            selectedAxis,
                            continuousParameterGroupId,
                            reverse,
                            restingState = 0
                        } = eventConfig;
                        const {
                            clientX = state.clientX,
                            clientY = state.clientY,
                            pageX = state.pageX,
                            pageY = state.pageY
                        } = nativeEvent;
                        const isXAxis = selectedAxis === "X_AXIS";
                        const isMouseOut = nativeEvent.type === "mouseout";
                        let value = restingState / 100;
                        let namespacedParameterId = continuousParameterGroupId;
                        let elementHovered = false;
                        switch (basedOn) {
                            case EventBasedOn.VIEWPORT: {
                                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                                break;
                            }
                            case EventBasedOn.PAGE: {
                                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                                break;
                            }
                            case EventBasedOn.ELEMENT:
                            default: {
                                namespacedParameterId = getNamespacedParameterId2(
                                    eventStateKey,
                                    continuousParameterGroupId
                                );
                                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                                if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                                    break;
                                }
                                const rect = element.getBoundingClientRect();
                                const { left, top, width, height } = rect;
                                if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                                    break;
                                }
                                elementHovered = true;
                                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                                break;
                            }
                        }
                        if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
                            value = Math.round(value);
                        }
                        if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            elementHovered !== state.elementHovered) {
                            value = reverse ? 1 - value : value;
                            store.dispatch(parameterChanged(namespacedParameterId, value));
                        }
                        return {
                            elementHovered,
                            clientX,
                            clientY,
                            pageX,
                            pageY
                        };
                    }
                },
                [PAGE_SCROLL]: {
                    types: SCROLL_EVENT_TYPES,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    handler: ({ store, eventConfig }) => {
                        const { continuousParameterGroupId, reverse } = eventConfig;
                        const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
                        let value = scrollTop / (scrollHeight - clientHeight);
                        value = reverse ? 1 - value : value;
                        store.dispatch(parameterChanged(continuousParameterGroupId, value));
                    }
                },
                [SCROLLING_IN_VIEW]: {
                    types: SCROLL_EVENT_TYPES,
                    handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
                        const {
                            scrollLeft,
                            scrollTop,
                            scrollWidth,
                            scrollHeight,
                            clientHeight: visibleHeight
                        } = getDocumentState();
                        const {
                            basedOn,
                            selectedAxis,
                            continuousParameterGroupId,
                            startsEntering,
                            startsExiting,
                            addEndOffset,
                            addStartOffset,
                            addOffsetValue = 0,
                            endOffsetValue = 0
                        } = eventConfig;
                        const isXAxis = selectedAxis === "X_AXIS";
                        if (basedOn === EventBasedOn.VIEWPORT) {
                            const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
                            if (value !== state.scrollPercent) {
                                store.dispatch(parameterChanged(continuousParameterGroupId, value));
                            }
                            return {
                                scrollPercent: value
                            };
                        } else {
                            const namespacedParameterId = getNamespacedParameterId2(
                                eventStateKey,
                                continuousParameterGroupId
                            );
                            const elementRect = element.getBoundingClientRect();
                            let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
                            let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
                            offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
                            offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
                            const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
                            const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
                            const offsetHeight = offsetElementBottom - offsetElementTop;
                            const fixedScrollHeight = Math.min(
                                visibleHeight + offsetHeight,
                                scrollHeight
                            );
                            const fixedScrollTop = Math.min(
                                Math.max(0, visibleHeight - offsetElementTop),
                                fixedScrollHeight
                            );
                            const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
                            if (fixedScrollPerc !== state.scrollPercent) {
                                store.dispatch(
                                    parameterChanged(namespacedParameterId, fixedScrollPerc)
                                );
                            }
                            return {
                                scrollPercent: fixedScrollPerc
                            };
                        }
                    }
                },
                [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
                [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
                [PAGE_SCROLL_DOWN]: {
                    ...baseScrollActionGroupOptions,
                    // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
                    handler: whenScrollDirectionChange((options, state) => {
                        if (state.scrollingDown) {
                            actionGroupCreator(options);
                        }
                    })
                },
                [PAGE_SCROLL_UP]: {
                    ...baseScrollActionGroupOptions,
                    // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
                    handler: whenScrollDirectionChange((options, state) => {
                        if (!state.scrollingDown) {
                            actionGroupCreator(options);
                        }
                    })
                },
                [PAGE_FINISH]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
                },
                [PAGE_START]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
                }
            };
        }
    });

    var require_webflow_navbar = __commonJS({
        "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
            "use strict";
            var Webflow = require_webflow_lib();
            var IXEvents = require_webflow_ix2_events();
            var KEY_CODES = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            Webflow.define("navbar", module.exports = function ($, _) {
                var api = {};
                var tram = $.tram;
                var $win = $(window);
                var $doc = $(document);
                var debounce = _.debounce;
                var $body;
                var $navbars;
                var designer;
                var inEditor;
                var inApp = Webflow.env();
                var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
                var namespace = ".w-nav";
                var navbarOpenedButton = "w--open";
                var navbarOpenedDropdown = "w--nav-dropdown-open";
                var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
                var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
                var navbarOpenedLink = "w--nav-link-open";
                var ix = IXEvents.triggers;
                var menuSibling = $();
                api.ready = api.design = api.preview = init;
                api.destroy = function () {
                    menuSibling = $();
                    removeListeners();
                    if ($navbars && $navbars.length) {
                        $navbars.each(teardown);
                    }
                };
                function init() {
                    designer = inApp && Webflow.env("design");
                    inEditor = Webflow.env("editor");
                    $body = $(document.body);
                    $navbars = $doc.find(namespace);
                    if (!$navbars.length) {
                        return;
                    }
                    $navbars.each(build);
                    removeListeners();
                    addListeners();
                }
                function removeListeners() {
                    Webflow.resize.off(resizeAll);
                }
                function addListeners() {
                    Webflow.resize.on(resizeAll);
                }
                function resizeAll() {
                    $navbars.each(resize);
                }
                function build(i, el) {
                    var $el = $(el);
                    var data = $.data(el, namespace);
                    if (!data) {
                        data = $.data(el, namespace, {
                            open: false,
                            el: $el,
                            config: {},
                            selectedIdx: -1
                        });
                    }
                    data.menu = $el.find(".w-nav-menu");
                    data.links = data.menu.find(".w-nav-link");
                    data.dropdowns = data.menu.find(".w-dropdown");
                    data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
                    data.dropdownList = data.menu.find(".w-dropdown-list");
                    data.button = $el.find(".w-nav-button");
                    data.container = $el.find(".w-container");
                    data.overlayContainerId = "w-nav-overlay-" + i;
                    data.outside = outside(data);
                    var navBrandLink = $el.find(".w-nav-brand");
                    if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
                        navBrandLink.attr("aria-label", "home");
                    }
                    data.button.attr("style", "-webkit-user-select: text;");
                    if (data.button.attr("aria-label") == null) {
                        data.button.attr("aria-label", "menu");
                    }
                    data.button.attr("role", "button");
                    data.button.attr("tabindex", "0");
                    data.button.attr("aria-controls", data.overlayContainerId);
                    data.button.attr("aria-haspopup", "menu");
                    data.button.attr("aria-expanded", "false");
                    data.el.off(namespace);
                    data.button.off(namespace);
                    data.menu.off(namespace);
                    configure(data);
                    if (designer) {
                        removeOverlay(data);
                        data.el.on("setting" + namespace, handler(data));
                    } else {
                        addOverlay(data);
                        data.button.on("click" + namespace, toggle(data));
                        data.menu.on("click" + namespace, "a", navigate(data));
                        data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
                        data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
                    }
                    resize(i, el);
                }
                function teardown(i, el) {
                    var data = $.data(el, namespace);
                    if (data) {
                        removeOverlay(data);
                        $.removeData(el, namespace);
                    }
                }
                function removeOverlay(data) {
                    if (!data.overlay) {
                        return;
                    }
                    close(data, true);
                    data.overlay.remove();
                    data.overlay = null;
                }
                function addOverlay(data) {
                    if (data.overlay) {
                        return;
                    }
                    data.overlay = $(overlay).appendTo(data.el);
                    data.overlay.attr("id", data.overlayContainerId);
                    data.parent = data.menu.parent();
                    close(data, true);
                }
                function configure(data) {
                    var config = {};
                    var old = data.config || {};
                    var animation = config.animation = data.el.attr("data-animation") || "default";
                    config.animOver = /^over/.test(animation);
                    config.animDirect = /left$/.test(animation) ? -1 : 1;
                    if (old.animation !== animation) {
                        data.open && _.defer(reopen, data);
                    }
                    config.easing = data.el.attr("data-easing") || "ease";
                    config.easing2 = data.el.attr("data-easing2") || "ease";
                    var duration = data.el.attr("data-duration");
                    config.duration = duration != null ? Number(duration) : 400;
                    config.docHeight = data.el.attr("data-doc-height");
                    data.config = config;
                }
                function handler(data) {
                    return function (evt, options) {
                        options = options || {};
                        var winWidth = $win.width();
                        configure(data);
                        options.open === true && open(data, true);
                        options.open === false && close(data, true);
                        data.open && _.defer(function () {
                            if (winWidth !== $win.width()) {
                                reopen(data);
                            }
                        });
                    };
                }
                function makeToggleButtonKeyboardHandler(data) {
                    return function (evt) {
                        switch (evt.keyCode) {
                            case KEY_CODES.SPACE:
                            case KEY_CODES.ENTER: {
                                toggle(data)();
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                            case KEY_CODES.ESCAPE: {
                                close(data);
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                            case KEY_CODES.ARROW_RIGHT:
                            case KEY_CODES.ARROW_DOWN:
                            case KEY_CODES.HOME:
                            case KEY_CODES.END: {
                                if (!data.open) {
                                    evt.preventDefault();
                                    return evt.stopPropagation();
                                }
                                if (evt.keyCode === KEY_CODES.END) {
                                    data.selectedIdx = data.links.length - 1;
                                } else {
                                    data.selectedIdx = 0;
                                }
                                focusSelectedLink(data);
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                        }
                    };
                }
                function makeLinksKeyboardHandler(data) {
                    return function (evt) {
                        if (!data.open) {
                            return;
                        }
                        data.selectedIdx = data.links.index(document.activeElement);
                        switch (evt.keyCode) {
                            case KEY_CODES.HOME:
                            case KEY_CODES.END: {
                                if (evt.keyCode === KEY_CODES.END) {
                                    data.selectedIdx = data.links.length - 1;
                                } else {
                                    data.selectedIdx = 0;
                                }
                                focusSelectedLink(data);
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                            case KEY_CODES.ESCAPE: {
                                close(data);
                                data.button.focus();
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                            case KEY_CODES.ARROW_LEFT:
                            case KEY_CODES.ARROW_UP: {
                                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                                focusSelectedLink(data);
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                            case KEY_CODES.ARROW_RIGHT:
                            case KEY_CODES.ARROW_DOWN: {
                                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                                focusSelectedLink(data);
                                evt.preventDefault();
                                return evt.stopPropagation();
                            }
                        }
                    };
                }
                function focusSelectedLink(data) {
                    if (data.links[data.selectedIdx]) {
                        var selectedElement = data.links[data.selectedIdx];
                        selectedElement.focus();
                        navigate(selectedElement);
                    }
                }
                function reopen(data) {
                    if (!data.open) {
                        return;
                    }
                    close(data, true);
                    open(data, true);
                }
                function toggle(data) {
                    return debounce(function () {
                        data.open ? close(data) : open(data);
                    });
                }
                function navigate(data) {
                    return function (evt) {
                        var link = $(this);
                        var href = link.attr("href");
                        if (!Webflow.validClick(evt.currentTarget)) {
                            evt.preventDefault();
                            return;
                        }
                        if (href && href.indexOf("#") === 0 && data.open) {
                            close(data);
                        }
                    };
                }
                function outside(data) {
                    if (data.outside) {
                        $doc.off("click" + namespace, data.outside);
                    }
                    return function (evt) {
                        var $target = $(evt.target);
                        if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
                            return;
                        }
                        outsideDebounced(data, $target);
                    };
                }
                var outsideDebounced = debounce(function (data, $target) {
                    if (!data.open) {
                        return;
                    }
                    var menu = $target.closest(".w-nav-menu");
                    if (!data.menu.is(menu)) {
                        close(data);
                    }
                });
                function resize(i, el) {
                    var data = $.data(el, namespace);
                    var collapsed = data.collapsed = data.button.css("display") !== "none";
                    if (data.open && !collapsed && !designer) {
                        close(data, true);
                    }
                    if (data.container.length) {
                        var updateEachMax = updateMax(data);
                        data.links.each(updateEachMax);
                        data.dropdowns.each(updateEachMax);
                    }
                    if (data.open) {
                        setOverlayHeight(data);
                    }
                }
                var maxWidth = "max-width";
                function updateMax(data) {
                    var containMax = data.container.css(maxWidth);
                    if (containMax === "none") {
                        containMax = "";
                    }
                    return function (i, link) {
                        link = $(link);
                        link.css(maxWidth, "");
                        if (link.css(maxWidth) === "none") {
                            link.css(maxWidth, containMax);
                        }
                    };
                }
                function addMenuOpen(i, el) {
                    el.setAttribute("data-nav-menu-open", "");
                }
                function removeMenuOpen(i, el) {
                    el.removeAttribute("data-nav-menu-open");
                }
                function open(data, immediate) {
                    if (data.open) {
                        return;
                    }
                    data.open = true;
                    data.menu.each(addMenuOpen);
                    data.links.addClass(navbarOpenedLink);
                    data.dropdowns.addClass(navbarOpenedDropdown);
                    data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
                    data.dropdownList.addClass(navbarOpenedDropdownList);
                    data.button.addClass(navbarOpenedButton);
                    var config = data.config;
                    var animation = config.animation;
                    if (animation === "none" || !tram.support.transform || config.duration <= 0) {
                        immediate = true;
                    }
                    var bodyHeight = setOverlayHeight(data);
                    var menuHeight = data.menu.outerHeight(true);
                    var menuWidth = data.menu.outerWidth(true);
                    var navHeight = data.el.height();
                    var navbarEl = data.el[0];
                    resize(0, navbarEl);
                    ix.intro(0, navbarEl);
                    Webflow.redraw.up();
                    if (!designer) {
                        $doc.on("click" + namespace, data.outside);
                    }
                    if (immediate) {
                        complete();
                        return;
                    }
                    var transConfig = "transform " + config.duration + "ms " + config.easing;
                    if (data.overlay) {
                        menuSibling = data.menu.prev();
                        data.overlay.show().append(data.menu);
                    }
                    if (config.animOver) {
                        tram(data.menu).add(transConfig).set({
                            x: config.animDirect * menuWidth,
                            height: bodyHeight
                        }).start({
                            x: 0
                        }).then(complete);
                        data.overlay && data.overlay.width(menuWidth);
                        return;
                    }
                    var offsetY = navHeight + menuHeight;
                    tram(data.menu).add(transConfig).set({
                        y: -offsetY
                    }).start({
                        y: 0
                    }).then(complete);
                    function complete() {
                        data.button.attr("aria-expanded", "true");
                    }
                }
                function setOverlayHeight(data) {
                    var config = data.config;
                    var bodyHeight = config.docHeight ? $doc.height() : $body.height();
                    if (config.animOver) {
                        data.menu.height(bodyHeight);
                    } else if (data.el.css("position") !== "fixed") {
                        bodyHeight -= data.el.outerHeight(true);
                    }
                    data.overlay && data.overlay.height(bodyHeight);
                    return bodyHeight;
                }
                function close(data, immediate) {
                    if (!data.open) {
                        return;
                    }
                    data.open = false;
                    data.button.removeClass(navbarOpenedButton);
                    var config = data.config;
                    if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
                        immediate = true;
                    }
                    ix.outro(0, data.el[0]);
                    $doc.off("click" + namespace, data.outside);
                    if (immediate) {
                        tram(data.menu).stop();
                        complete();
                        return;
                    }
                    var transConfig = "transform " + config.duration + "ms " + config.easing2;
                    var menuHeight = data.menu.outerHeight(true);
                    var menuWidth = data.menu.outerWidth(true);
                    var navHeight = data.el.height();
                    if (config.animOver) {
                        tram(data.menu).add(transConfig).start({
                            x: menuWidth * config.animDirect
                        }).then(complete);
                        return;
                    }
                    var offsetY = navHeight + menuHeight;
                    tram(data.menu).add(transConfig).start({
                        y: -offsetY
                    }).then(complete);
                    function complete() {
                        data.menu.height("");
                        tram(data.menu).set({
                            x: 0,
                            y: 0
                        });
                        data.menu.each(removeMenuOpen);
                        data.links.removeClass(navbarOpenedLink);
                        data.dropdowns.removeClass(navbarOpenedDropdown);
                        data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
                        data.dropdownList.removeClass(navbarOpenedDropdownList);
                        if (data.overlay && data.overlay.children().length) {
                            menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                            data.overlay.attr("style", "").hide();
                        }
                        data.el.triggerHandler("w-close");
                        data.button.attr("aria-expanded", "false");
                    }
                }
                return api;
            });
        }
    });


    require_webflow_brand();
    require_webflow_edit();
    require_webflow_focus_visible();
    require_webflow_focus();
    require_webflow_ix2_events();
    require_webflow_ix2();
    require_webflow_links();
    require_webflow_scroll();
    require_webflow_touch();
    require_webflow_forms();
    require_webflow_navbar();
    require_webflow_slider();

    require_webflow_navbar();
})();
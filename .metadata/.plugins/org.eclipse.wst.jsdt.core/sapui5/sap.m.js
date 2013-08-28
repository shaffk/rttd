
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.m --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.toString = function() { return ""; };
/**
 * 
 * Returns invalid date value of UI5 according to TimeZone
 * You can use this value to check return value of date parser method
 * @return {Date} JS Date Object ( e.g for Germany new Date(-360000) )
 * @public
 * @since 1.10
 * 
 * @memberOf sap.m
 */
sap.m.getInvalidDate = function() { return null; };

/**
 * 
 * Finds default locale settings once and returns always the same.
 * We should not need to create new instance to get same locale settings
 * This method keep the locale instance in the scope and returns the same after first run
 * @return {Object} sap.ui.core.Locale instane
 * @public
 * @since 1.10
 * 
 * @memberOf sap.m
 */
sap.m.getLocale = function() { return null; };

/**
 * 
 * Finds default locale data once and returns always the same
 * @return {Object} sap.ui.core.LocaleData instance
 * @public
 * @since 1.10
 * 
 * @memberOf sap.m
 */
sap.m.getLocaleData = function() { return null; };

/**
 * 
 * Checks if the given parameter is a valid JsDate Object
 * @param value Any variable to test.
 * @return {Boolean}
 * @public
 * @since 1.10
 * 
 * @memberOf sap.m
 */
sap.m.isDate = function(value) { return null; };


// ---- sap.m.ActionListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ActionListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ActionListItem should be used to fire actions when tapped.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.ActionListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.ActionListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ActionListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>text</code>.
 * Text of the action list item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.ActionListItem.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ActionListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionListItem.prototype.setText = function(sText) { return new sap.m.ActionListItem(); };


// ---- sap.m.ActionSheet --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ActionSheet.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Bottom)</li>
 * <li>{@link #getShowCancelButton showCancelButton} : boolean (default: true)</li>
 * <li>{@link #getCancelButtonText cancelButtonText} : string</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.m.Button[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ActionSheet#event:cancelButtonTap cancelButtonTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ActionSheet#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ActionSheet#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ActionSheet#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ActionSheet#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ActionSheet#event:cancelButtonPress cancelButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ActionSheet is a special kind of control which contains one or more sap.m.Button(s) and the ActionSheet will be closed when one of the buttons is tapped. It looks similar as a sap.m.Dialog in iPhone and Android while as a sap.m.Popover in iPad.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.9.1
 * 
 */
sap.m.ActionSheet = function(sId,mSettings) {};
/**
 * 
 * This event will be fired after the ActionSheet is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.afterClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired after the ActionSheet is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.afterOpen = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the ActionSheet is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.beforeClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the ActionSheet is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.beforeOpen = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when the cancelButton is clicked. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by clicking outside. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.cancelButtonPress = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when the cancelButton is tapped. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by tapping outside. (This event is deprecated, use the press event instead) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ActionSheet.prototype.cancelButtonTap = function(oControlEvent) { return null; };

/**
 * 
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 * @param {sap.m.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.addButton = function(oButton) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the ActionSheet is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachAfterClose = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the ActionSheet is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachAfterOpen = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the ActionSheet is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachBeforeClose = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the ActionSheet is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachBeforeOpen = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'cancelButtonPress' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the cancelButton is clicked. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by clicking outside. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachCancelButtonPress = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'cancelButtonTap' event of this <code>sap.m.ActionSheet</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ActionSheet</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the cancelButton is tapped. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by tapping outside. (This event is deprecated, use the press event instead) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ActionSheet</code>.<br/> itself.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.attachCancelButtonTap = function(oData,fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Calling this method will make the ActionSheet disappear from the screen.
 * @type void
 * @public
 */
sap.m.ActionSheet.prototype.close = function() { return null; };

/**
 * 
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.destroyButtons = function() { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachAfterClose = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachAfterOpen = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachBeforeClose = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachBeforeOpen = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'cancelButtonPress' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachCancelButtonPress = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'cancelButtonTap' event of this <code>sap.m.ActionSheet</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.detachCancelButtonTap = function(fnFunction,oListener) { return new sap.m.ActionSheet(); };

/**
 * 
 * Creates a new subclass of class sap.m.ActionSheet with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ActionSheet.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterClose to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireAfterClose = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Fire event afterOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireAfterOpen = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Fire event beforeClose to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireBeforeClose = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Fire event beforeOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireBeforeOpen = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Fire event cancelButtonPress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireCancelButtonPress = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Fire event cancelButtonTap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ActionSheet.prototype.fireCancelButtonTap = function(mArguments) { return new sap.m.ActionSheet(); };

/**
 * 
 * Getter for aggregation <code>buttons</code>.<br/>
 * These buttons are added to the content area in ActionSheet control. When button is tapped, the ActionSheet is closed before the tap event listener is called.
 * @return {sap.m.Button[]}
 * @public
 * 
 */
sap.m.ActionSheet.prototype.getButtons = function() { return new Array(); };

/**
 * 
 * Getter for property <code>cancelButtonText</code>.
 * This is the text displayed in the cancelButton. Default value is "Cancel", and it's translated according to the current locale setting. This property will be ignored when running either in iPad or showCancelButton is set to false.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>cancelButtonText</code>
 * @public
 * 
 */
sap.m.ActionSheet.prototype.getCancelButtonText = function() { return ""; };

/**
 * 
 * Getter for property <code>placement</code>.
 * The ActionSheet behaves as a sap.m.Popover in iPad and this property is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. The default value is sap.m.PlacementType.Bottom.
 * </p><p>
 * Default value is <code>Bottom</code>
 * @return {sap.m.PlacementType} the value of property <code>placement</code>
 * @public
 * 
 */
sap.m.ActionSheet.prototype.getPlacement = function() { return new sap.m.PlacementType(); };

/**
 * 
 * Getter for property <code>showCancelButton</code>.
 * If this is set to true, there will be a cancel button shown below the action buttons. There won't be any cancel button shown in iPad regardless of this property. The default value is set to true.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showCancelButton</code>
 * @public
 * 
 */
sap.m.ActionSheet.prototype.getShowCancelButton = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title will be show in the header area in iPhone and every Android devices. This property will be ignored in iPad.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.ActionSheet.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.m.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.ActionSheet.prototype.indexOfButton = function(oButton) { return 0; };

/**
 * 
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.m.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.insertButton = function(oButton,iIndex) { return new sap.m.ActionSheet(); };

/**
 * 
 * The method checks if the ActionSheet is open. It returns true when the ActionSheet is currently open (this includes opening and closing animations), otherwise it returns false.
 * @type boolean
 * @public
 */
sap.m.ActionSheet.prototype.isOpen = function() { return false; };

/**
 * 
 * Calling this method will make the ActionSheet visible on the screen.
 * @param {object} 
 *         oControl
 *         The ActionSheet behaves as a sap.m.Popover in iPad and the control parameter is the object to which the popover will be placed. It can be not only a UI5 control, but also an existing dom reference. The side of the placement depends on the placement property set in the popover. In other platforms, ActionSheet behaves as a standard dialog and this parameter is ignored because dialog is aligned to the screen.
 * @type void
 * @public
 */
sap.m.ActionSheet.prototype.openBy = function(oControl) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Button[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.ActionSheet.prototype.removeAllButtons = function() { return new Array(); };

/**
 * 
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.m.Button} vButton the button to remove or its index or id
 * @return {sap.m.Button} the removed button or null
 * @public
 * 
 */
sap.m.ActionSheet.prototype.removeButton = function(vButton) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>cancelButtonText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCancelButtonText  new value for property <code>cancelButtonText</code>
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.setCancelButtonText = function(sCancelButtonText) { return new sap.m.ActionSheet(); };

/**
 * 
 * Setter for property <code>placement</code>.
 * </p><p>
 * Default value is <code>Bottom</code> 
 * @param {sap.m.PlacementType} oPlacement  new value for property <code>placement</code>
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.setPlacement = function(oPlacement) { return new sap.m.ActionSheet(); };

/**
 * 
 * Setter for property <code>showCancelButton</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowCancelButton  new value for property <code>showCancelButton</code>
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.setShowCancelButton = function(bShowCancelButton) { return new sap.m.ActionSheet(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ActionSheet} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ActionSheet.prototype.setTitle = function(sTitle) { return new sap.m.ActionSheet(); };


// ---- sap.m.App --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new App.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHomeIcon homeIcon} : any</li>
 * <li>{@link #getBackgroundColor backgroundColor} : string</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundRepeat backgroundRepeat} : boolean (default: false)</li>
 * <li>{@link #getBackgroundOpacity backgroundOpacity} : float (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.App#event:orientationChange orientationChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.NavContainer#constructor sap.m.NavContainer}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * App is the root element of a UI5 mobile application. It inherits from NavContainer and thus provides its navigation capabilities.
 * It also adds certain header tags to the HTML page which are considered useful for mobile apps.
 * @extends sap.m.NavContainer
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.App = function(sId,mSettings) {};
/**
 * 
 * Fired when the orientation (portrait/landscape) of the device is changed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.landscape Whether the device is in landscape orientation.
 * @public
 */
sap.m.App.prototype.orientationChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'orientationChange' event of this <code>sap.m.App</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.App</code>.<br/> itself. 
 * </p><p>
 * Fired when the orientation (portrait/landscape) of the device is changed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.App</code>.<br/> itself.
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.App.prototype.attachOrientationChange = function(oData,fnFunction,oListener) { return new sap.m.App(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'orientationChange' event of this <code>sap.m.App</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.App.prototype.detachOrientationChange = function(fnFunction,oListener) { return new sap.m.App(); };

/**
 * 
 * Creates a new subclass of class sap.m.App with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.App.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event orientationChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'landscape' of type <code>boolean</code> Whether the device is in landscape orientation.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.App.prototype.fireOrientationChange = function(mArguments) { return new sap.m.App(); };

/**
 * 
 * Getter for property <code>backgroundColor</code>.
 * Background color of the App. If set, this color will override the default background defined by the theme. So this should only be set when really required.
 * Any configured background image will be placed above this colored background. But any theme adaptation in the Theme Designer will override this setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>backgroundColor</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.getBackgroundColor = function() { return ""; };

/**
 * 
 * Getter for property <code>backgroundImage</code>.
 * Background image of the App. If set, this image will override the default background defined by the theme. So this should only be set when really required.
 * This background image will be placed above any color set for the background. But any theme adaptation in the Theme Designer will override this image setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.getBackgroundImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>backgroundOpacity</code>.
 * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque).
 * This can be used to make the application content better readable by making the background image partly transparent.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>backgroundOpacity</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.getBackgroundOpacity = function() { return 0.0; };

/**
 * 
 * Getter for property <code>backgroundRepeat</code>.
 * Whether the background image (if configured) should be proportionally stretched to cover the whole App (false) or whether it should be tiled (true).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>backgroundRepeat</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.getBackgroundRepeat = function() { return false; };

/**
 * 
 * Getter for property <code>homeIcon</code>.
 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
 * </p><p>
 * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
 * </p><p>
 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
 * </p><p>
 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
 * </p><p>
 * One example is:
 * </p><p>
 * app.setHomeIcon({
 * 'phone':'phone-icon.png',
 * 'phone@2':'phone-retina.png',
 * 'tablet':'tablet-icon.png',
 * 'tablet@2':'tablet-retina.png',
 * 'icon':'desktop.ico'
 * });
 * </p><p>
 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
 * </p><p>
 * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>homeIcon</code>
 * @public
 * 
 */
sap.m.App.prototype.getHomeIcon = function() { return null; };

/**
 * 
 * Setter for property <code>backgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.m.App(); };

/**
 * 
 * Setter for property <code>backgroundImage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.setBackgroundImage = function(sBackgroundImage) { return new sap.m.App(); };

/**
 * 
 * Setter for property <code>backgroundOpacity</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fBackgroundOpacity  new value for property <code>backgroundOpacity</code>
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.setBackgroundOpacity = function(fBackgroundOpacity) { return new sap.m.App(); };

/**
 * 
 * Setter for property <code>backgroundRepeat</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bBackgroundRepeat  new value for property <code>backgroundRepeat</code>
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.App.prototype.setBackgroundRepeat = function(bBackgroundRepeat) { return new sap.m.App(); };

/**
 * 
 * Setter for property <code>homeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.App} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.App.prototype.setHomeIcon = function(oHomeIcon) { return new sap.m.App(); };


// ---- sap.m.BackgroundDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.BackgroundDesign.toString = function() { return ""; };

// ---- sap.m.BackgroundHelper --------------------------------------------------------------------------

/**
 * 
 * Adds CSS classes and styles to the given RenderManager, depending on the given configuration for background color and background image.
 * To be called by control renderers supporting the global themable background image within their root tag, before they call writeClasses() and writeStyles().
 * @param {sap.ui.core.RenderManager} rm the RenderManager
 * @param {String} [sBgColor] a configured custom background color for the control, if any
 * @param {sap.ui.core.URI} [sBgImgUrl] the configured custom background image for the control, if any
 * @returns
 * @protected
 * 
 * @memberOf sap.m.BackgroundHelper
 */
sap.m.BackgroundHelper.addBackgroundColorStyles = function(rm,sBgColor,sBgImgUrl) { return null; };

/**
 * 
 * Renders an HTML tag into the given RenderManager which carries the background image which is either configured and given or coming from the current theme.
 * Should be called right after the opening root tag has been completed, so this is the first child element inside the control.
 * @param rm the RenderManager
 * @param {sap.ui.core.Control} oControl the control within which the tag will be rendered; its ID will be used to generate the element ID
 * @param {String}  sCssClass a css class to add to the element
 * @param {sap.ui.core.URI}  [sBgImgUrl] the image of a configured background image; if this is not given, the theme background will be used and also the other settings are ignored.
 * @param {boolean} [bRepeat] whether the background image should be repeated/tiled (or stretched)
 * @param {float}   [fOpacity] the background image opacity, if any
 * @returns
 * @protected
 * 
 * @memberOf sap.m.BackgroundHelper
 */
sap.m.BackgroundHelper.renderBackgroundImageTag = function(rm,oControl,sCssClass,sBgImgUrl,bRepeat,fOpacity) { return null; };


// ---- sap.m.Bar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Bar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getEnableFlexBox enableFlexBox} : boolean (default: false)</li>
 * <li>{@link #getTranslucent translucent} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentLeft contentLeft} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentMiddle contentMiddle} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentRight contentRight} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A bar that is usually used on top of pages
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Bar = function(sId,mSettings) {};
/**
 * 
 * Adds some contentLeft <code>oContentLeft</code> 
 * to the aggregation named <code>contentLeft</code>.
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.addContentLeft = function(oContentLeft) { return new sap.m.Bar(); };

/**
 * 
 * Adds some contentMiddle <code>oContentMiddle</code> 
 * to the aggregation named <code>contentMiddle</code>.
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.addContentMiddle = function(oContentMiddle) { return new sap.m.Bar(); };

/**
 * 
 * Adds some contentRight <code>oContentRight</code> 
 * to the aggregation named <code>contentRight</code>.
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.addContentRight = function(oContentRight) { return new sap.m.Bar(); };

/**
 * 
 * Destroys all the contentLeft in the aggregation 
 * named <code>contentLeft</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.destroyContentLeft = function() { return new sap.m.Bar(); };

/**
 * 
 * Destroys all the contentMiddle in the aggregation 
 * named <code>contentMiddle</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.destroyContentMiddle = function() { return new sap.m.Bar(); };

/**
 * 
 * Destroys all the contentRight in the aggregation 
 * named <code>contentRight</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.destroyContentRight = function() { return new sap.m.Bar(); };

/**
 * 
 * Creates a new subclass of class sap.m.Bar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Bar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>contentLeft</code>.<br/>
 * this is the left content area, usually containing button or App Icon
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Bar.prototype.getContentLeft = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>contentMiddle</code>.<br/>
 * This is the middle content area. Controls such as label, segmented buttons, Select should be placed here. Content that are placed here will always be centrally positioned
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Bar.prototype.getContentMiddle = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>contentRight</code>.<br/>
 * this is the right content area. Controls such as Action buttons or Search field could be placed here.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Bar.prototype.getContentRight = function() { return new Array(); };

/**
 * 
 * Getter for property <code>enableFlexBox</code>.
 * If this flag is set to true, ContentMiddle will be rendered as a HBox and layoutData can be used to allocate available space
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>enableFlexBox</code>
 * @public
 * 
 */
sap.m.Bar.prototype.getEnableFlexBox = function() { return false; };

/**
 * 
 * Getter for property <code>translucent</code>.
 * A boolean value indicating whether the bar is partially translucent.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>translucent</code>
 * @public
 * @since 1.12
 * 
 */
sap.m.Bar.prototype.getTranslucent = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentLeft</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Bar.prototype.indexOfContentLeft = function(oContentLeft) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentMiddle</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Bar.prototype.indexOfContentMiddle = function(oContentMiddle) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentRight</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Bar.prototype.indexOfContentRight = function(oContentRight) { return 0; };

/**
 * 
 * Inserts a contentLeft into the aggregation named <code>contentLeft</code>.
 * @param {sap.ui.core.Control}
 *          oContentLeft the contentLeft to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentLeft should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentLeft is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentLeft is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.insertContentLeft = function(oContentLeft,iIndex) { return new sap.m.Bar(); };

/**
 * 
 * Inserts a contentMiddle into the aggregation named <code>contentMiddle</code>.
 * @param {sap.ui.core.Control}
 *          oContentMiddle the contentMiddle to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentMiddle should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentMiddle is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentMiddle is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.insertContentMiddle = function(oContentMiddle,iIndex) { return new sap.m.Bar(); };

/**
 * 
 * Inserts a contentRight into the aggregation named <code>contentRight</code>.
 * @param {sap.ui.core.Control}
 *          oContentRight the contentRight to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentRight should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentRight is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentRight is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.insertContentRight = function(oContentRight,iIndex) { return new sap.m.Bar(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>contentLeft</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Bar.prototype.removeAllContentLeft = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>contentMiddle</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Bar.prototype.removeAllContentMiddle = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>contentRight</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Bar.prototype.removeAllContentRight = function() { return new Array(); };

/**
 * 
 * Removes an contentLeft from the aggregation named <code>contentLeft</code>.
 * @param {int | string | sap.ui.core.Control} vContentLeft the contentLeft to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentLeft or null
 * @public
 * 
 */
sap.m.Bar.prototype.removeContentLeft = function(vContentLeft) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an contentMiddle from the aggregation named <code>contentMiddle</code>.
 * @param {int | string | sap.ui.core.Control} vContentMiddle the contentMiddle to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentMiddle or null
 * @public
 * 
 */
sap.m.Bar.prototype.removeContentMiddle = function(vContentMiddle) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an contentRight from the aggregation named <code>contentRight</code>.
 * @param {int | string | sap.ui.core.Control} vContentRight the contentRight to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentRight or null
 * @public
 * 
 */
sap.m.Bar.prototype.removeContentRight = function(vContentRight) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>enableFlexBox</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bEnableFlexBox  new value for property <code>enableFlexBox</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Bar.prototype.setEnableFlexBox = function(bEnableFlexBox) { return new sap.m.Bar(); };

/**
 * 
 * Setter for property <code>translucent</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bTranslucent  new value for property <code>translucent</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.Bar.prototype.setTranslucent = function(bTranslucent) { return new sap.m.Bar(); };


// ---- sap.m.BusyDialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BusyDialog.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getCustomIcon customIcon} : sap.ui.core.URI</li>
 * <li>{@link #getCustomIconRotationSpeed customIconRotationSpeed} : int (default: 1000)</li>
 * <li>{@link #getCustomIconDensityAware customIconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getCustomIconWidth customIconWidth} : sap.ui.core.CSSSize (default: "30px")</li>
 * <li>{@link #getCustomIconHeight customIconHeight} : sap.ui.core.CSSSize (default: "44px")</li>
 * <li>{@link #getCancelButtonText cancelButtonText} : string</li>
 * <li>{@link #getShowCancelButton showCancelButton} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.BusyDialog#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Busy Dialog is used to indicate that the system is busy with some task and the user has to wait. During this time the UI is blocked.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.BusyDialog = function(sId,mSettings) {};
/**
 * 
 * This event will be fired when the busy dialog is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.BusyDialog.prototype.close = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.m.BusyDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.BusyDialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when the busy dialog is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.BusyDialog</code>.<br/> itself.
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.attachClose = function(oData,fnFunction,oListener) { return new sap.m.BusyDialog(); };

/**
 * 
 * Closes the dialog
 * @public
 */
sap.m.BusyDialog.prototype.close = function() { return null; };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.m.BusyDialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.detachClose = function(fnFunction,oListener) { return new sap.m.BusyDialog(); };

/**
 * 
 * Creates a new subclass of class sap.m.BusyDialog with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.BusyDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event close to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.BusyDialog.prototype.fireClose = function(mArguments) { return new sap.m.BusyDialog(); };

/**
 * 
 * Getter for property <code>cancelButtonText</code>.
 * The text of the cancel button. The default text is "Cancel" (translated to the respective language).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>cancelButtonText</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCancelButtonText = function() { return ""; };

/**
 * 
 * Getter for property <code>customIcon</code>.
 * Icon that is displayed in the dialog header. This icon is invisible in iOS platform and it's density aware that you can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>customIcon</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCustomIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>customIconDensityAware</code>.
 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
 * </p><p>
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>customIconDensityAware</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCustomIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>customIconHeight</code>.
 * Height of the provided icon. By default 44px are used.
 * </p><p>
 * Default value is <code>"44px"</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconHeight</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCustomIconHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>customIconRotationSpeed</code>.
 * Defines the rotation speed of the given image. If a gif is used, the speed has to be set to 0. The unit is in ms.
 * </p><p>
 * Default value is <code>1000</code>
 * @return {int} the value of property <code>customIconRotationSpeed</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCustomIconRotationSpeed = function() { return 0; };

/**
 * 
 * Getter for property <code>customIconWidth</code>.
 * Width of the provided icon. By default 44px are used.
 * </p><p>
 * Default value is <code>"30px"</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconWidth</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getCustomIconWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>showCancelButton</code>.
 * A cancel button will be rendered inside the busy dialog if this property is set to true.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showCancelButton</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getShowCancelButton = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Optional text shown inside the popup.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * Sets a title to the busy dialog. Default is no title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.BusyDialog.prototype.getTitle = function() { return ""; };

/**
 * 
 * Opens the dialog
 * @public
 */
sap.m.BusyDialog.prototype.open = function() { return null; };

/**
 * 
 * Setter for property <code>cancelButtonText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCancelButtonText  new value for property <code>cancelButtonText</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCancelButtonText = function(sCancelButtonText) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>customIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sCustomIcon  new value for property <code>customIcon</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCustomIcon = function(sCustomIcon) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>customIconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bCustomIconDensityAware  new value for property <code>customIconDensityAware</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCustomIconDensityAware = function(bCustomIconDensityAware) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>customIconHeight</code>.
 * </p><p>
 * Default value is <code>"44px"</code> 
 * @param {sap.ui.core.CSSSize} sCustomIconHeight  new value for property <code>customIconHeight</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCustomIconHeight = function(sCustomIconHeight) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>customIconRotationSpeed</code>.
 * </p><p>
 * Default value is <code>1000</code> 
 * @param {int} iCustomIconRotationSpeed  new value for property <code>customIconRotationSpeed</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCustomIconRotationSpeed = function(iCustomIconRotationSpeed) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>customIconWidth</code>.
 * </p><p>
 * Default value is <code>"30px"</code> 
 * @param {sap.ui.core.CSSSize} sCustomIconWidth  new value for property <code>customIconWidth</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setCustomIconWidth = function(sCustomIconWidth) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>showCancelButton</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowCancelButton  new value for property <code>showCancelButton</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setShowCancelButton = function(bShowCancelButton) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setText = function(sText) { return new sap.m.BusyDialog(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.BusyDialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyDialog.prototype.setTitle = function(sTitle) { return new sap.m.BusyDialog(); };


// ---- sap.m.BusyIndicator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new BusyIndicator.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getCustomIcon customIcon} : sap.ui.core.URI</li>
 * <li>{@link #getCustomIconRotationSpeed customIconRotationSpeed} : int (default: 1000)</li>
 * <li>{@link #getCustomIconDensityAware customIconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getCustomIconWidth customIconWidth} : sap.ui.core.CSSSize (default: "44px")</li>
 * <li>{@link #getCustomIconHeight customIconHeight} : sap.ui.core.CSSSize (default: "44px")</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDesign design} : string (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Control to indicate that the system is busy with some task and the user has to wait. When no image or gif is provided, the control renders the platforms native indicator using css.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.BusyIndicator = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.BusyIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.BusyIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>customIcon</code>.
 * Icon url if an icon is used as the busy indicator.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>customIcon</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getCustomIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>customIconDensityAware</code>.
 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
 * </p><p>
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>customIconDensityAware</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getCustomIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>customIconHeight</code>.
 * Height of the provided icon. By default 44px are used.
 * </p><p>
 * Default value is <code>"44px"</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconHeight</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getCustomIconHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>customIconRotationSpeed</code>.
 * Defines the rotation speed of the given image. If a .gif is used, the speed has to be set to 0. The unit is in ms.
 * </p><p>
 * Default value is <code>1000</code>
 * @return {int} the value of property <code>customIconRotationSpeed</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getCustomIconRotationSpeed = function() { return 0; };

/**
 * 
 * Getter for property <code>customIconWidth</code>.
 * Width of the provided icon. By default 44px are used.
 * </p><p>
 * Default value is <code>"44px"</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconWidth</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getCustomIconWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>design</code>.
 * The design defines how the BusyIndicator should look like. There are 3 possiblities:
 * auto: automatically sets the design according to the context
 * dark: dark theme, useful within a light context
 * light: light theme, useful within a dark context
 * </p><p>
 * Default value is <code>auto</code>
 * @return {string} the value of property <code>design</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getDesign = function() { return ""; };

/**
 * 
 * Getter for property <code>size</code>.
 * Defines the size of the busy indicator.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the busy indicator (optional)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible control is not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>customIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sCustomIcon  new value for property <code>customIcon</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setCustomIcon = function(sCustomIcon) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>customIconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bCustomIconDensityAware  new value for property <code>customIconDensityAware</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setCustomIconDensityAware = function(bCustomIconDensityAware) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>customIconHeight</code>.
 * </p><p>
 * Default value is <code>"44px"</code> 
 * @param {sap.ui.core.CSSSize} sCustomIconHeight  new value for property <code>customIconHeight</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setCustomIconHeight = function(sCustomIconHeight) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>customIconRotationSpeed</code>.
 * </p><p>
 * Default value is <code>1000</code> 
 * @param {int} iCustomIconRotationSpeed  new value for property <code>customIconRotationSpeed</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setCustomIconRotationSpeed = function(iCustomIconRotationSpeed) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>customIconWidth</code>.
 * </p><p>
 * Default value is <code>"44px"</code> 
 * @param {sap.ui.core.CSSSize} sCustomIconWidth  new value for property <code>customIconWidth</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setCustomIconWidth = function(sCustomIconWidth) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>design</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {string} sDesign  new value for property <code>design</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setDesign = function(sDesign) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>size</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setSize = function(sSize) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setText = function(sText) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.BusyIndicator.prototype.setTextDirection = function(oTextDirection) { return new sap.m.BusyIndicator(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code>
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * </p><p>
 * The MessageBar.API.js "setVisible" function is enhanced in order to
 * toggle the "visibility:hidden;" attribute over the control.
 */
sap.m.BusyIndicator.prototype.setVisible = function(bVisible) { return new sap.m.BusyIndicator(); };


// ---- sap.m.Button --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Button.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.m.ButtonType (default: sap.m.ButtonType.Default)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Button#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Button#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Enables users to trigger actions. For the button UI, you can define some text or an icon, or both.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Button = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user clicks on the control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Button.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the user taps the control. (This event is deprecated, use the press event instead) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Button.prototype.tap = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Button</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Button</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user clicks on the control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Button</code>.<br/> itself.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.Button(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.Button</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Button</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user taps the control. (This event is deprecated, use the press event instead) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Button</code>.<br/> itself.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.m.Button(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Button</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.Button(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.Button</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.detachTap = function(fnFunction,oListener) { return new sap.m.Button(); };

/**
 * 
 * Creates a new subclass of class sap.m.Button with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Button.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Button.prototype.firePress = function(mArguments) { return new sap.m.Button(); };

/**
 * 
 * Fire event tap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Button.prototype.fireTap = function(mArguments) { return new sap.m.Button(); };

/**
 * 
 * Getter for property <code>activeIcon</code>.
 * The source property when this icon is tapped. Graphical element is changed to the new source as long as the icon is tapped.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * 
 */
sap.m.Button.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.Button.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the button. This can be an image or an icon from the icon font.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.Button.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.Button.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * 
 */
sap.m.Button.prototype.getIconFirst = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Button text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.Button.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of a button (e.g. default, accept, reject, back, icon, etc.)
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.m.ButtonType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.Button.prototype.getType = function() { return new sap.m.ButtonType(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible buttons are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Button.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the button.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Button.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>activeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setActiveIcon = function(sActiveIcon) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setEnabled = function(bEnabled) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setIcon = function(sIcon) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>iconFirst</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconFirst  new value for property <code>iconFirst</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setIconFirst = function(bIconFirst) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setText = function(sText) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.m.ButtonType} oType  new value for property <code>type</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setType = function(oType) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setVisible = function(bVisible) { return new sap.m.Button(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Button.prototype.setWidth = function(sWidth) { return new sap.m.Button(); };


// ---- sap.m.ButtonType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ButtonType.toString = function() { return ""; };

// ---- sap.m.Carousel --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Carousel.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getLoop loop} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getShowPageIndicator showPageIndicator} : boolean (default: true)</li>
 * <li>{@link #getPageIndicatorPlacement pageIndicatorPlacement} : sap.m.PlacementType (default: sap.m.PlacementType.Bottom)</li>
 * <li>{@link #getShowBusyIndicator showBusyIndicator} : boolean (default: true)</li>
 * <li>{@link #getBusyIndicatorSize busyIndicatorSize} : sap.ui.core.CSSSize (default: '6em')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPages pages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getActivePage activePage} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Carousel#event:loadPage loadPage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Carousel#event:unloadPage unloadPage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Carousel#event:pageChanged pageChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Carousel control can be used to navigate through a list of sap.m controls just like flipping through the pages of a book by swiping right or left. An indicator shows the current position within the control list.
 * </p><p>
 * This carousel implementation always renders three controls: the one which is currently active, the one to the right and the one to the left. After a swipe, these pages are exchanged accordingly, the next control in the list is loaded, the control which is out of scope is released.
 * </p><p>
 * Similar to the NavContainer control, the carousel triggers events on it pages, when flipping through them. These events are:
 * - 'BeforeFirstShow': triggered, when a page is rendered for the first time wthin the carousel
 * - 'BeforeShow': triggered whenever a page is rendered (analogous to 'loadPage event)
 * - 'AfterHide': triggered when the page is discarded from the carousel's 'viewport' (analogous to 'unloadPage event)
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Carousel = function(sId,mSettings) {};
/**
 * 
 * Carousel requires a new page to be loaded. This event may be used to fill the content of that page 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pageId Id of the page which is will be loaded
 * @public
 */
sap.m.Carousel.prototype.loadPage = function(oControlEvent) { return null; };

/**
 * 
 * This event is thrown after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.oldActivePageId Id of the page which was active before the page change.
 * @param {string} oControlEvent.getParameters.newActivePageId Id of the page which is active after the page change.
 * @public
 */
sap.m.Carousel.prototype.pageChanged = function(oControlEvent) { return null; };

/**
 * 
 * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pageId Id of the page which is will be unloaded
 * @public
 */
sap.m.Carousel.prototype.unloadPage = function(oControlEvent) { return null; };

/**
 * 
 * API method to add a control to the list of pages which is 
 * displayed in the carousel.
 * @param oPage page which is added to the list of pages to be 
 * 		displayed in the carousel
 * @public
 */
sap.m.Carousel.prototype.addPage = function(oPage) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'loadPage' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 * </p><p>
 * Carousel requires a new page to be loaded. This event may be used to fill the content of that page 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.attachLoadPage = function(oData,fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'pageChanged' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 * </p><p>
 * This event is thrown after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.attachPageChanged = function(oData,fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'unloadPage' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 * </p><p>
 * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.attachUnloadPage = function(oData,fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * API method to remove and destroy all pages which are displayed in the carousel.
 * These pages can not be re-used afterwards.
 * @param oPage page which shall be removed from the list of pages to be 
 * 		displayed in the carousel
 * @return sap.m.Carousel the Carousel instance for method chaining 
 * @public
 */
sap.m.Carousel.prototype.destroyPages = function(oPage) { return null; };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'loadPage' event of this <code>sap.m.Carousel</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.detachLoadPage = function(fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'pageChanged' event of this <code>sap.m.Carousel</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.detachPageChanged = function(fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'unloadPage' event of this <code>sap.m.Carousel</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.detachUnloadPage = function(fnFunction,oListener) { return new sap.m.Carousel(); };

/**
 * 
 * Creates a new subclass of class sap.m.Carousel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Carousel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event loadPage to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'pageId' of type <code>string</code> Id of the page which is will be loaded</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Carousel.prototype.fireLoadPage = function(mArguments) { return new sap.m.Carousel(); };

/**
 * 
 * Fire event pageChanged to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'oldActivePageId' of type <code>string</code> Id of the page which was active before the page change.</li>
 * <li>'newActivePageId' of type <code>string</code> Id of the page which is active after the page change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Carousel.prototype.firePageChanged = function(mArguments) { return new sap.m.Carousel(); };

/**
 * 
 * Fire event unloadPage to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'pageId' of type <code>string</code> Id of the page which is will be unloaded</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Carousel.prototype.fireUnloadPage = function(mArguments) { return new sap.m.Carousel(); };

/**
 * 
 * Provides getter and setter for the currently displayed page. For the setter, argument may be the control itself, which must be member of the carousel's page list, or the control's id.
 * The getter will return the control id
 * @return {string} Id of the element which is the current target of the <code>activePage</code> association, or null
 * @public
 * 
 */
sap.m.Carousel.prototype.getActivePage = function() { return ""; };

/**
 * 
 * Getter for property <code>busyIndicatorSize</code>.
 * Size of the busy indicators which can be displayed in the carousel, when loading pages after swipe.
 * </p><p>
 * Default value is <code>6em</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>busyIndicatorSize</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getBusyIndicatorSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the carousel. Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>loop</code>.
 * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>loop</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getLoop = function() { return false; };

/**
 * 
 * Getter for property <code>pageIndicatorPlacement</code>.
 * This is the information about where the carousel's page indicator shall be displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
 * </p><p>
 * Default value is <code>Bottom</code>
 * @return {sap.m.PlacementType} the value of property <code>pageIndicatorPlacement</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getPageIndicatorPlacement = function() { return new sap.m.PlacementType(); };

/**
 * 
 * Getter for aggregation <code>pages</code>.<br/>
 * The content entities between which this Carousel navigates.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Carousel.prototype.getPages = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showBusyIndicator</code>.
 * Show or hide a busy indicator in the carousel when loading pages after swipe. These busy indicators are part of the can be swiped as well: they do not block the carousel.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showBusyIndicator</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getShowBusyIndicator = function() { return false; };

/**
 * 
 * Getter for property <code>showPageIndicator</code>.
 * Show or hide carousel's page indicator.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showPageIndicator</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getShowPageIndicator = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Hide carousel. Actually, it is not even rendered anymore if it is not 'visible'
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the carousel. Note that when a percentage is given, for the width to work as expected, the width of the surrounding container must be defined.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Carousel.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>pages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPage the page whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Carousel.prototype.indexOfPage = function(oPage) { return 0; };

/**
 * 
 * API method to insert a control at a certain position to the list of
 * pages which is displayed in the carousel.
 * @param oPage page which is added to the list of pages to be 
 * 		displayed in the carousel
 * @param iIndex position at which oPage shall be added
 * @public
 */
sap.m.Carousel.prototype.insertPage = function(oPage,iIndex) { return null; };

/**
 * 
 * API method to show the previous page in the page list.
 * @public
 */
sap.m.Carousel.prototype.next = function() { return null; };

/**
 * 
 * API method to show the next page in the page list.
 * @public
 */
sap.m.Carousel.prototype.previous = function() { return null; };

/**
 * 
 * API method to remove all pages which are displayed in the carousel.
 * These pages can be re-used afterwards though, as opposed to 
 * 'destroyPages'.
 * @param oPage page which shall be removed from the list of pages to be 
 * 		displayed in the carousel
 * @return an array of the removed pages (might be empty)
 * @public
 */
sap.m.Carousel.prototype.removeAllPages = function(oPage) { return null; };

/**
 * 
 * API method to remove all pages which are displayed in the carousel.
 * These pages can be re-used afterwards though, as opposed to 
 * 'destroyPages'.
 * @param oPage page which shall be removed from the list of pages to be 
 * 		displayed in the carousel
 * @return sap.m.Carousel the Carousel instance for method chaining 
 * @public
 */
sap.m.Carousel.prototype.removePage = function(oPage) { return null; };

/**
 * 
 * API method to set whether the carousel's busy indicator's.
 * @param sBusyIndicatorSize thet new size. Should be a CSS size, for example '1em' or '24px'.
 * @public
 */
sap.m.Carousel.prototype.setBusyIndicatorSize = function(sBusyIndicatorSize) { return null; };

/**
 * 
 * API method to set the carousel's height
 * @param oHeight the new height as CSSSize
 * @public
 */
sap.m.Carousel.prototype.setHeight = function(oHeight) { return null; };

/**
 * 
 * API method to set whether the carousel should loop, i.e
 * show the first page after the last page is reached and vice 
 * versa.
 * @param bLoop the new loop property
 * @public
 */
sap.m.Carousel.prototype.setLoop = function(bLoop) { return null; };

/**
 * 
 * API method to place the page inidicator. 
 * @param oPlacement either sap.m.PlacementType.Top or sap.m.PlacementType.Bottom
 * @public
 */
sap.m.Carousel.prototype.setPageIndicatorPlacement = function(oPlacement) { return null; };

/**
 * 
 * API method to set whether the carousel should display the busy indicators
 * @param bShowBusyIndicator the new loop property
 * @public
 */
sap.m.Carousel.prototype.setShowBusyIndicator = function(bShowBusyIndicator) { return null; };

/**
 * 
 * API method to set whether the carousel should display the page indicator
 * @param bShowPageIndicator the new show property
 * @public
 */
sap.m.Carousel.prototype.setShowPageIndicator = function(bShowPageIndicator) { return null; };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Carousel.prototype.setVisible = function(bVisible) { return new sap.m.Carousel(); };

/**
 * 
 * API method to set the carousel's width
 * @param oWidth the new width as CSSSize
 * @public
 */
sap.m.Carousel.prototype.setWidth = function(oWidth) { return null; };


// ---- sap.m.CheckBox --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CheckBox.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getActiveHandling activeHandling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.CheckBox#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * CheckBox control
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.CheckBox = function(sId,mSettings) {};
/**
 * 
 * Event is triggered when the control status is changed by the user by selecting or deselecting the checkbox. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.selected Checks whether the CheckBox is flagged or not flagged.
 * @public
 */
sap.m.CheckBox.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.CheckBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.CheckBox</code>.<br/> itself. 
 * </p><p>
 * Event is triggered when the control status is changed by the user by selecting or deselecting the checkbox. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.CheckBox</code>.<br/> itself.
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.m.CheckBox(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.CheckBox</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.detachSelect = function(fnFunction,oListener) { return new sap.m.CheckBox(); };

/**
 * 
 * Creates a new subclass of class sap.m.CheckBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.CheckBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'selected' of type <code>boolean</code> Checks whether the CheckBox is flagged or not flagged.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.CheckBox.prototype.fireSelect = function(mArguments) { return new sap.m.CheckBox(); };

/**
 * 
 * Getter for property <code>activeHandling</code>.
 * this is a flag to switch on activeHandling, when it is switched off, there will not be visual changes on active state. Default value is 'true'
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>activeHandling</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getActiveHandling = function() { return false; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Using this property, the control could be disabled, if required.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>selected</code>.
 * Contains the state of the control whether it is flagged with a check mark, or not
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the check box
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible control is not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of Label
 * </p><p>
 * Default value is <code>''</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.CheckBox.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>activeHandling</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bActiveHandling  new value for property <code>activeHandling</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setActiveHandling = function(bActiveHandling) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setEnabled = function(bEnabled) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setName = function(sName) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setSelected = function(bSelected) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setText = function(sText) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setTextDirection = function(oTextDirection) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setVisible = function(bVisible) { return new sap.m.CheckBox(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.CheckBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CheckBox.prototype.setWidth = function(sWidth) { return new sap.m.CheckBox(); };


// ---- sap.m.Column --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Column.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getVAlign vAlign} : sap.ui.core.VerticalAlign (default: sap.ui.core.VerticalAlign.Middle)</li>
 * <li>{@link #getStyleClass styleClass} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMinScreenWidth minScreenWidth} : string</li>
 * <li>{@link #getDemandPopin demandPopin} : boolean (default: false)</li>
 * <li>{@link #getPopinHAlign popinHAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getPopinDisplay popinDisplay} : sap.m.PopinDisplay (default: sap.m.PopinDisplay.Block)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeader header} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The column allows to define column specific properties that will be applied when rendering the List.
 * @extends sap.ui.core.Element
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.Column = function(sId,mSettings) {};
/**
 * 
 * Apply alignment of the Column to Text or Label
 * Also set width to 100% to support wrapping
 * @protected
 * @param {sap.ui.core.Control} oControl List control
 * @param {String} [sAlign] TextAlign enumeration
 * @return {sap.ui.core.Control} oControl
 */
sap.m.Column.prototype.applyAlignTo = function(oControl,sAlign) { return new sap.ui.core.Control(); };

/**
 * 
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.destroyFooter = function() { return new sap.m.Column(); };

/**
 * 
 * Destroys the header in the aggregation 
 * named <code>header</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.destroyHeader = function() { return new sap.m.Column(); };

/**
 * 
 * Creates a new subclass of class sap.m.Column with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Column.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Returns CSS alignment according to column hAlign setting or given parameter
 * for Begin/End values checks the locale settings
 * @param {String} [sAlign] TextAlign enumeration
 * @return {String} left|center|right
 * @protected
 */
sap.m.Column.prototype.getCssAlign = function(sAlign) { return null; };

/**
 * 
 * Getter for property <code>demandPopin</code>.
 * According to your minScreenWidth settings, the column can be hidden in different screen sizes.
 * Setting this property to true, shows this column as pop-in instead of hiding it.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>demandPopin</code>
 * @public
 * 
 */
sap.m.Column.prototype.getDemandPopin = function() { return false; };

/**
 * 
 * Getter for aggregation <code>footer</code>.<br/>
 * Control to be displayed in the column footer.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.Column.prototype.getFooter = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * </p><p>
 * NOTE: Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the control.
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.m.Column.prototype.getHAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * 
 * Getter for aggregation <code>header</code>.<br/>
 * Control to be displayed in the column header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.Column.prototype.getHeader = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>minScreenWidth</code>.
 * By default column is always shown. If you set this property, control checks the minimum width of the screen to show or hide this column.
 * As you can give specific CSS sizes(e.g: "480px" or "40em"), you can also use sap.m.ScreenSize enumeration(e.g: "Phone", "Tablet", "Desktop", "Small", "Medium", "Large", ....).
 * </p><p>
 * sap.m.Column.MediaQuery1->Range1 = 199
 * </p><p>
 * This property can be used for responsive design. e.g: "40em"(or "640px" or "Tablet") setting shows this column in iPad(and Desktop) but hides in iPhone.
 * Please also see "demandPopin" property
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>minScreenWidth</code>
 * @public
 * 
 */
sap.m.Column.prototype.getMinScreenWidth = function() { return ""; };

/**
 * 
 * Getter for property <code>popinDisplay</code>.
 * Defines the display options of pop-in.
 * Possible values are
 * 1 - "Block"(Header is displayed in first line and value field in next line.)
 * 2 - "Inline" (Value field is displayed next to the header in same line.)
 * </p><p>
 * Default value is <code>sap.m.PopinDisplay.Block</code>
 * @return {sap.m.PopinDisplay} the value of property <code>popinDisplay</code>
 * @public
 * @since 1.13.2
 * 
 */
sap.m.Column.prototype.getPopinDisplay = function() { return new sap.m.PopinDisplay(); };

/**
 * 
 * Getter for property <code>popinHAlign</code>.
 * Horizontal alignment of the pop-in content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * </p><p>
 * NOTE: Controls with a text align do not inherit the horizontal alignment.
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>popinHAlign</code>
 * @public
 * @deprecated Since version 1.13.2. 
 * Use popinDisplay property instead.
 * 
 */
sap.m.Column.prototype.getPopinHAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * 
 * Returns styleClass property and extra responsive class
 * @param {Boolean} [bResponsive] Whether responsive class is needed or not
 * @return {String}
 * @protected
 */
sap.m.Column.prototype.getStyleClass = function(bResponsive) { return null; };

/**
 * 
 * Getter for property <code>vAlign</code>.
 * Vertical alignment of the cells in column. Possible values are "Top", "Middle", "Bottom"
 * This property does not affect the vertical alignment of header and footer.
 * </p><p>
 * Default value is <code>sap.ui.core.VerticalAlign.Middle</code>
 * @return {sap.ui.core.VerticalAlign} the value of property <code>vAlign</code>
 * @public
 * 
 */
sap.m.Column.prototype.getVAlign = function() { return new sap.ui.core.VerticalAlign(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Specifies whether or not the column is visible. Invisible columns are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Column.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of the column.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Column.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks if box-sizing border-box works for columns
 * Most of the browser does not respect this CSS property, even buggy
 * https://bugs.webkit.org/show_bug.cgi?id=18565
 * @public
 * @static
 */
sap.m.Column.hasBorderBoxSupport = function() { return null; };

/**
 * 
 * Checks the column will be hidden
 * @protected
 */
sap.m.Column.prototype.isHidden = function() { return null; };

/**
 * 
 * Returns visible probability of the column
 * @param {Boolean} [bReturnCache] Whether return cache or new result
 * @return {Boolean}
 * @protected
 */
sap.m.Column.prototype.isNeverVisible = function(bReturnCache) { return null; };

/**
 * 
 * Checks the column will be shown as pop-in
 * @protected
 */
sap.m.Column.prototype.isPopin = function() { return null; };

/**
 * 
 * This method is called after all cells in column is rendered 
 * @param {jQuery} $table Table jQuery reference
 * @protected
 */
sap.m.Column.prototype.onColumnRendered = function($table) { return null; };

/**
 * 
 * Display or hide the column from given table
 * @param {Object} oTableDomRef Table dom reference
 * @param {String} [sDisplay] given display value
 * @protected
 */
sap.m.Column.prototype.setDisplay = function(oTableDomRef,sDisplay) { return null; };

/**
 * 
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setFooter = function(oFooter) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>hAlign</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 * @param {sap.ui.core.TextAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setHAlign = function(oHAlign) { return new sap.m.Column(); };

/**
 * 
 * Setter for the aggregated <code>header</code>.
 * @param oHeader {sap.ui.core.Control}
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setHeader = function(oHeader) { return new sap.m.Column(); };

/**
 * 
 * Sets the column index
 * @param {Int} nIndex Whether responsive class is needed or not
 * @protected
 */
sap.m.Column.prototype.setIndex = function(nIndex) { return null; };

/**
 * 
 * Setter for property <code>popinDisplay</code>.
 * </p><p>
 * Default value is <code>sap.m.PopinDisplay.Block</code> 
 * @param {sap.m.PopinDisplay} oPopinDisplay  new value for property <code>popinDisplay</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * 
 */
sap.m.Column.prototype.setPopinDisplay = function(oPopinDisplay) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>popinHAlign</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 * @param {sap.ui.core.TextAlign} oPopinHAlign  new value for property <code>popinHAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.13.2. 
 * Use popinDisplay property instead.
 * 
 */
sap.m.Column.prototype.setPopinHAlign = function(oPopinHAlign) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>styleClass</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sStyleClass  new value for property <code>styleClass</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setStyleClass = function(sStyleClass) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>vAlign</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.VerticalAlign.Middle</code> 
 * @param {sap.ui.core.VerticalAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setVAlign = function(oVAlign) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setVisible = function(bVisible) { return new sap.m.Column(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Column.prototype.setWidth = function(sWidth) { return new sap.m.Column(); };


// ---- sap.m.ColumnListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ColumnListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ColumnListItem can be used to create columns inside the List like Table.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ColumnListItem = function(sId,mSettings) {};
/**
 * 
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.addCell = function(oCell) { return new sap.m.ColumnListItem(); };

/**
 * 
 * Binder for aggregation <code>cells</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.bindCells = function(sPath,oTemplate,oSorter,aFilters) { return new sap.m.ColumnListItem(); };

/**
 * 
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.destroyCells = function() { return new sap.m.ColumnListItem(); };

/**
 * 
 * Creates a new subclass of class sap.m.ColumnListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ColumnListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>cells</code>.<br/>
 * Every item inside the cells aggregation defines one column of the row.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.getCells = function() { return new Array(); };

/**
 * 
 * Handles event delegation for pop-ins
 * @static
 * @protected
 * @param {object} oEvent jQuery event object
 * @param {string} sEventName event name to map
 * @param {object} oContainerDomRef max parent element to search in DOM to find pop-in
 */
sap.m.ColumnListItem.handleEvents = function(oEvent,sEventName,oContainerDomRef) { return null; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.indexOfCell = function(oCell) { return 0; };

/**
 * 
 * Inserts a cell into the aggregation named <code>cells</code>.
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.insertCell = function(oCell,iIndex) { return new sap.m.ColumnListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.removeAllCells = function() { return new Array(); };

/**
 * 
 * Removes an cell from the aggregation named <code>cells</code>.
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.removeCell = function(vCell) { return new sap.ui.core.Control(); };

/**
 * 
 * Remove pop-in from DOM via ListItem
 * This method can be called from list if remove aggregation is implemented
 * @static
 * @protected
 * @param {sap.m.ColumnListItem} sap.m.ColumnListItem Control
 */
sap.m.ColumnListItem.removePopin = function() { return null; };

/**
 * 
 * Toggle class name of the pop-in via ListItem
 * @static
 * @protected
 * @param {sap.m.ColumnListItem} oLI sap.m.ColumnListItem Control
 * @param {string} sClassName CSS class name(s) to be toggled.
 * @param {boolean} bSwitch Determine whether the class should be added or removed.
 */
sap.m.ColumnListItem.toggleClass = function(oLI,sClassName,bSwitch) { return null; };

/**
 * 
 * Unbinder for aggregation <code>cells</code>.
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ColumnListItem.prototype.unbindCells = function() { return new sap.m.ColumnListItem(); };


// ---- sap.m.CustomListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CustomListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * sap.m.CustomListItem Control
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.CustomListItem = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.CustomListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomListItem.prototype.addContent = function(oContent) { return new sap.m.CustomListItem(); };

/**
 * 
 * Binder for aggregation <code>content</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.CustomListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomListItem.prototype.bindContent = function(sPath,oTemplate,oSorter,aFilters) { return new sap.m.CustomListItem(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.CustomListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomListItem.prototype.destroyContent = function() { return new sap.m.CustomListItem(); };

/**
 * 
 * Creates a new subclass of class sap.m.CustomListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.CustomListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of this list item
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.CustomListItem.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.CustomListItem.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.CustomListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomListItem.prototype.insertContent = function(oContent,iIndex) { return new sap.m.CustomListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.CustomListItem.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.CustomListItem.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Unbinder for aggregation <code>content</code>.
 * @return {sap.m.CustomListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomListItem.prototype.unbindContent = function() { return new sap.m.CustomListItem(); };


// ---- sap.m.CustomTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new CustomTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Tile#constructor sap.m.Tile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Use the Custom Tile to show a application specific content in the tile.
 * The tile width is 8.5em and height is 10em
 * @extends sap.m.Tile
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.CustomTile = function(sId,mSettings) {};
/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.CustomTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomTile.prototype.destroyContent = function() { return new sap.m.CustomTile(); };

/**
 * 
 * Creates a new subclass of class sap.m.CustomTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.CustomTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Defines the Content of the CustomTile
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.CustomTile.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param oContent {sap.ui.core.Control}
 * @return {sap.m.CustomTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.CustomTile.prototype.setContent = function(oContent) { return new sap.m.CustomTile(); };


// ---- sap.m.DateTimeInput --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DateTimeInput.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.m.DateTimeInputType (default: sap.m.DateTimeInputType.Date)</li>
 * <li>{@link #getDisplayFormat displayFormat} : string</li>
 * <li>{@link #getValueFormat valueFormat} : string</li>
 * <li>{@link #getDateValue dateValue} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.DateTimeInput#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Allows end users to interact with date and/or time and select from a date and/or time pad.
 * @extends sap.m.InputBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.9.1
 * 
 */
sap.m.DateTimeInput = function(sId,mSettings) {};
/**
 * 
 * This event gets fired when the selection has finished and the value has changed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new string value of the control in given valueFormat(or locale format).
 * @param {object} oControlEvent.getParameters.newDateValue The new value of control as JavaScript Date Object or null if value is empty.
 * @public
 */
sap.m.DateTimeInput.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.DateTimeInput</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.DateTimeInput</code>.<br/> itself. 
 * </p><p>
 * This event gets fired when the selection has finished and the value has changed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.DateTimeInput</code>.<br/> itself.
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.DateTimeInput</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Creates a new subclass of class sap.m.DateTimeInput with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.DateTimeInput.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new string value of the control in given valueFormat(or locale format).</li>
 * <li>'newDateValue' of type <code>object</code> The new value of control as JavaScript Date Object or null if value is empty.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.DateTimeInput.prototype.fireChange = function(mArguments) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Return assigned dateValue property or converts value to JS Date Object. 
 * Returns null for empty values
 * @public
 * @return {Object}
 */
sap.m.DateTimeInput.prototype.getDateValue = function() { return null; };

/**
 * 
 * Getter for property <code>displayFormat</code>.
 * Displays date value in this given format in text field. Default value is taken from locale settings.
 * If you use data-binding on value property with type sap.ui.model.type.Date then you can ignore this property or latter wins.
 * If user browser supports native picker then this property is overwritten by browser with locale settings.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>displayFormat</code>
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.getDisplayFormat = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of DateTimeInput (e.g. Date, Time, DateTime)
 * </p><p>
 * Default value is <code>Date</code>
 * @return {sap.m.DateTimeInputType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.getType = function() { return new sap.m.DateTimeInputType(); };

/**
 * 
 * Getter for property <code>valueFormat</code>.
 * Given value property should match with valueFormat to parse date. Default value is taken from locale settings.
 * You can set and get value in this format.
 * If you use data-binding on value property with type sap.ui.model.type.Date you can ignore this property or latter wins.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>valueFormat</code>
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.getValueFormat = function() { return ""; };

/**
 * 
 * Setter for property <code>dateValue</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oDateValue  new value for property <code>dateValue</code>
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.setDateValue = function(oDateValue) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Setter for property <code>displayFormat</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDisplayFormat  new value for property <code>displayFormat</code>
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.setDisplayFormat = function(sDisplayFormat) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Date</code> 
 * @param {sap.m.DateTimeInputType} oType  new value for property <code>type</code>
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.setType = function(oType) { return new sap.m.DateTimeInput(); };

/**
 * 
 * This function can be used  to assign new value and this is relevant with valueFormat property(see valueFormat) but independent from what is going to display on the field(see displayFormat).
 * Another way to assign new value is using dateValue property in JsView(see dateValue).
 * If you use both at the same time, latter wins.
 * </p><p>
 * Also "Now" literal can be assigned as a parameter to show the current date and/or time.
 * @public
 * @param {string} sValue
 * @return {sap.m.DateTimeInput}
 */
sap.m.DateTimeInput.prototype.setValue = function(sValue) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Setter for property <code>valueFormat</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValueFormat  new value for property <code>valueFormat</code>
 * @return {sap.m.DateTimeInput} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DateTimeInput.prototype.setValueFormat = function(sValueFormat) { return new sap.m.DateTimeInput(); };

/**
 * 
 * Defines the width of the input. Default value is 100%
 * @public
 * @param {string} sWidth
 */
sap.m.DateTimeInput.prototype.setWidth = function(sWidth) { return null; };


// ---- sap.m.DateTimeInputType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.DateTimeInputType.toString = function() { return ""; };

// ---- sap.m.Dialog --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Dialog.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getType type} : sap.m.DialogType (default: sap.m.DialogType.Standard)</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getStretchOnPhone stretchOnPhone} : boolean (default: false)</li>
 * <li>{@link #getStretch stretch} : boolean (default: false)</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentHeight contentHeight} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getSubHeader subHeader} : sap.m.Bar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLeftButton leftButton} : string | sap.m.Button</li>
 * <li>{@link #getRightButton rightButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Dialog#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Dialog control is used to interrupt the current processing of an application to prompt the user for information or a response.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Dialog = function(sId,mSettings) {};
/**
 * 
 * This event will be fired after the dialog is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
sap.m.Dialog.prototype.afterClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired after the dialog is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Dialog.prototype.afterOpen = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the dialog is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
sap.m.Dialog.prototype.beforeClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the dialog is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Dialog.prototype.beforeOpen = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.addContent = function(oContent) { return new sap.m.Dialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the dialog is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.attachAfterClose = function(oData,fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the dialog is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.attachAfterOpen = function(oData,fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the dialog is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.attachBeforeClose = function(oData,fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the dialog is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.attachBeforeOpen = function(oData,fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Close the dialog.
 * @type void
 * @public
 */
sap.m.Dialog.prototype.close = function() { return null; };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.destroyContent = function() { return new sap.m.Dialog(); };

/**
 * 
 * Destroys the subHeader in the aggregation 
 * named <code>subHeader</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.m.Dialog.prototype.destroySubHeader = function() { return new sap.m.Dialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.detachAfterClose = function(fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.detachAfterOpen = function(fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.detachBeforeClose = function(fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.detachBeforeOpen = function(fnFunction,oListener) { return new sap.m.Dialog(); };

/**
 * 
 * Creates a new subclass of class sap.m.Dialog with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Dialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterClose to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Dialog.prototype.fireAfterClose = function(mArguments) { return new sap.m.Dialog(); };

/**
 * 
 * Fire event afterOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Dialog.prototype.fireAfterOpen = function(mArguments) { return new sap.m.Dialog(); };

/**
 * 
 * Fire event beforeClose to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Dialog.prototype.fireBeforeClose = function(mArguments) { return new sap.m.Dialog(); };

/**
 * 
 * Fire event beforeOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Dialog.prototype.fireBeforeOpen = function(mArguments) { return new sap.m.Dialog(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content inside the dialog.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Dialog.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>contentHeight</code>.
 * Preferred height of content in Dialog. If the preferred height is bigger than the available space on screen, it will be overwritten by the maximum available height on screen in order to make sure that dialog isn't cut off.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>contentHeight</code>
 * @public
 * @since 1.12.1
 * 
 */
sap.m.Dialog.prototype.getContentHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>contentWidth</code>.
 * Preferred width of content in Dialog. This property affects the width of dialog on phone in landscape mode, tablet or desktop, because the dialog has a fixed width when runs on phone in portrait mode. If the preferred width is less than the minimum width of dilaog or more than the available width of the screen, it will be overwritten by the min or max value. The current mininum value of dialog width on tablet is 400px.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @since 1.12.1
 * 
 */
sap.m.Dialog.prototype.getContentWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon that is displayed in the dialog header. This icon is invisible in iOS platform and it's density aware that you can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.Dialog.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @return {string} Id of the element which is the current target of the <code>leftButton</code> association, or null
 * @public
 * 
 */
sap.m.Dialog.prototype.getLeftButton = function() { return ""; };

/**
 * 
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @return {string} Id of the element which is the current target of the <code>rightButton</code> association, or null
 * @public
 * 
 */
sap.m.Dialog.prototype.getRightButton = function() { return ""; };

/**
 * 
 * Getter for property <code>state</code>.
 * State affects the icon and the title color. If other than None is set, a predefined icon will be added to the dialog. Setting icon property will overwrite the predefined icon. The default value is None which doesn't add any icon to the Dialog control. This property is by now only supported by blue crystal theme.
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Dialog.prototype.getState = function() { return new sap.ui.core.ValueState(); };

/**
 * 
 * Getter for property <code>stretch</code>.
 * When this property is set to true, the dialog is stretched to a full screen display. This property is only applicable to standard dialog and message type dialog ignores this property.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>stretch</code>
 * @public
 * @since 1.13.1
 * 
 */
sap.m.Dialog.prototype.getStretch = function() { return false; };

/**
 * 
 * Getter for property <code>stretchOnPhone</code>.
 * When it's set to true, the dialog will be full screen when it runs on a phone.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>stretchOnPhone</code>
 * @public
 * @since 1.11.2
 * @deprecated Since version 1.13.1. 
 * Please use the new stretch property instead. This enables a stretched dialog even on tablet and desktop. If you want to achieve the same effect as stretchOnPhone, please set the stretch with jQuery.device.is.phone, then dialog is only stretched when runs on phone.
 * 
 */
sap.m.Dialog.prototype.getStretchOnPhone = function() { return false; };

/**
 * 
 * Getter for aggregation <code>subHeader</code>.<br/>
 * When subHeader is assigned to Dialog, it's rendered directly after the main header in Dialog. SubHeader is out of the content area and won't be scrolled when content's size is bigger than the content area's size.
 * @return {sap.m.Bar}
 * @public
 * @since 1.12.2
 * 
 */
sap.m.Dialog.prototype.getSubHeader = function() { return new sap.m.Bar(); };

/**
 * 
 * Getter for property <code>title</code>.
 * Title text appears in the dialog header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.Dialog.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * The type of the dialog. In theme sap_mvi, it only affects the look and feel in iOS platform, type message is with button at the bottom inside of in the header. In theme sap_bluecrystal, the type message will limit the dialog's width within 480px when runs on tablet and desktop.
 * </p><p>
 * Default value is <code>Standard</code>
 * @return {sap.m.DialogType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.Dialog.prototype.getType = function() { return new sap.m.DialogType(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Dialog.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.insertContent = function(oContent,iIndex) { return new sap.m.Dialog(); };

/**
 * 
 * The method checks if the Dialog is open. It returns true when the Dialog is currently open (this includes opening and closing animations), otherwise it returns false.
 * @type boolean
 * @public
 * @since 1.9.1
 */
sap.m.Dialog.prototype.isOpen = function() { return false; };

/**
 * 
 * Open the dialog.
 * @type void
 * @public
 */
sap.m.Dialog.prototype.open = function() { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Dialog.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.Dialog.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>contentHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sContentHeight  new value for property <code>contentHeight</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.1
 * 
 */
sap.m.Dialog.prototype.setContentHeight = function(sContentHeight) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>contentWidth</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.1
 * 
 */
sap.m.Dialog.prototype.setContentWidth = function(sContentWidth) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.setIcon = function(sIcon) { return new sap.m.Dialog(); };

/**
 * 
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @param {string | sap.m.Button} vLeftButton 
 *    Id of an element which becomes the new target of this <code>leftButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.setLeftButton = function(vLeftButton) { return new sap.m.Dialog(); };

/**
 * 
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @param {string | sap.m.Button} vRightButton 
 *    Id of an element which becomes the new target of this <code>rightButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.setRightButton = function(vRightButton) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Dialog.prototype.setState = function(oState) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>stretch</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bStretch  new value for property <code>stretch</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * 
 */
sap.m.Dialog.prototype.setStretch = function(bStretch) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>stretchOnPhone</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bStretchOnPhone  new value for property <code>stretchOnPhone</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @deprecated Since version 1.13.1. 
 * Please use the new stretch property instead. This enables a stretched dialog even on tablet and desktop. If you want to achieve the same effect as stretchOnPhone, please set the stretch with jQuery.device.is.phone, then dialog is only stretched when runs on phone.
 * 
 */
sap.m.Dialog.prototype.setStretchOnPhone = function(bStretchOnPhone) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for the aggregated <code>subHeader</code>.
 * @param oSubHeader {sap.m.Bar}
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.m.Dialog.prototype.setSubHeader = function(oSubHeader) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.setTitle = function(sTitle) { return new sap.m.Dialog(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Standard</code> 
 * @param {sap.m.DialogType} oType  new value for property <code>type</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Dialog.prototype.setType = function(oType) { return new sap.m.Dialog(); };


// ---- sap.m.DialogType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.DialogType.toString = function() { return ""; };

// ---- sap.m.DisplayListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new DisplayListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getValue value} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The display list item consists of a label and a value.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.DisplayListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.DisplayListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.DisplayListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>label</code>.
 * List item label
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.m.DisplayListItem.prototype.getLabel = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * List item value
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.m.DisplayListItem.prototype.getValue = function() { return ""; };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.m.DisplayListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DisplayListItem.prototype.setLabel = function(sLabel) { return new sap.m.DisplayListItem(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.DisplayListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.DisplayListItem.prototype.setValue = function(sValue) { return new sap.m.DisplayListItem(); };


// ---- sap.m.FeedListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FeedListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getSenderActive senderActive} : boolean (default: true)</li>
 * <li>{@link #getIconActive iconActive} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.FeedListItem#event:senderPress senderPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.FeedListItem#event:iconPress iconPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The control provides a set of properties for text, sender information, time stamp
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.FeedListItem = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the icon is pressed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the feed item's icon to be used for positioning.
 * @public
 */
sap.m.FeedListItem.prototype.iconPress = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when name of the sender is pressed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the feed item's sender string to be used for positioning.
 * @public
 */
sap.m.FeedListItem.prototype.senderPress = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'iconPress' event of this <code>sap.m.FeedListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FeedListItem</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the icon is pressed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.FeedListItem</code>.<br/> itself.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.attachIconPress = function(oData,fnFunction,oListener) { return new sap.m.FeedListItem(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'senderPress' event of this <code>sap.m.FeedListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FeedListItem</code>.<br/> itself. 
 * </p><p>
 * Event is fired when name of the sender is pressed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.FeedListItem</code>.<br/> itself.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.attachSenderPress = function(oData,fnFunction,oListener) { return new sap.m.FeedListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'iconPress' event of this <code>sap.m.FeedListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.detachIconPress = function(fnFunction,oListener) { return new sap.m.FeedListItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'senderPress' event of this <code>sap.m.FeedListItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.detachSenderPress = function(fnFunction,oListener) { return new sap.m.FeedListItem(); };

/**
 * 
 * Creates a new subclass of class sap.m.FeedListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.FeedListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event iconPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the feed item's icon to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.FeedListItem.prototype.fireIconPress = function(mArguments) { return new sap.m.FeedListItem(); };

/**
 * 
 * Fire event senderPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the feed item's sender string to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.FeedListItem.prototype.fireSenderPress = function(mArguments) { return new sap.m.FeedListItem(); };

/**
 * 
 * Getter for property <code>activeIcon</code>.
 * Icon displayed when the list item is active.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the FeedListItem. This can be an image or an icon from the icon font.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconActive</code>.
 * If true, icon is an link, which will fire 'iconPress' events. If false, icon is normal image
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconActive</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getIconActive = function() { return false; };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>info</code>.
 * The Info text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>info</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getInfo = function() { return ""; };

/**
 * 
 * Getter for property <code>sender</code>.
 * Sender of the chunk
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>sender</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getSender = function() { return ""; };

/**
 * 
 * Getter for property <code>senderActive</code>.
 * If true, sender string is an link, which will fire 'senderPress' events. If false, sender is normal text.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>senderActive</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getSenderActive = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * The FeedListItem text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>timestamp</code>.
 * This chunks timestamp
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * 
 */
sap.m.FeedListItem.prototype.getTimestamp = function() { return ""; };

/**
 * 
 * Setter for property <code>activeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setActiveIcon = function(sActiveIcon) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setIcon = function(sIcon) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>iconActive</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconActive  new value for property <code>iconActive</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setIconActive = function(bIconActive) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>info</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setInfo = function(sInfo) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>sender</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setSender = function(sSender) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>senderActive</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bSenderActive  new value for property <code>senderActive</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setSenderActive = function(bSenderActive) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setText = function(sText) { return new sap.m.FeedListItem(); };

/**
 * 
 * Setter for property <code>timestamp</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FeedListItem.prototype.setTimestamp = function(sTimestamp) { return new sap.m.FeedListItem(); };


// ---- sap.m.FlexAlignItems --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.FlexAlignItems.toString = function() { return ""; };

// ---- sap.m.FlexAlignSelf --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.FlexAlignSelf.toString = function() { return ""; };

// ---- sap.m.FlexBox --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FlexBox.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getDisplayInline displayInline} : boolean (default: false)</li>
 * <li>{@link #getDirection direction} : sap.m.FlexDirection (default: sap.m.FlexDirection.Row)</li>
 * <li>{@link #getFitContainer fitContainer} : boolean (default: false)</li>
 * <li>{@link #getRenderType renderType} : sap.m.FlexRendertype (default: sap.m.FlexRendertype.Div)</li>
 * <li>{@link #getJustifyContent justifyContent} : sap.m.FlexJustifyContent (default: sap.m.FlexJustifyContent.Start)</li>
 * <li>{@link #getAlignItems alignItems} : sap.m.FlexAlignItems (default: sap.m.FlexAlignItems.Stretch)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The FlexBox control builds the container for a flexible box layout.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.FlexBox = function(sId,mSettings) {};
/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.addItem = function(oItem) { return new sap.m.FlexBox(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.destroyItems = function() { return new sap.m.FlexBox(); };

/**
 * 
 * Creates a new subclass of class sap.m.FlexBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.FlexBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>alignItems</code>.
 * Determines the layout behavior of items along the cross-axis. "Baseline" is not supported in Internet Explorer <10.
 * </p><p>
 * Default value is <code>Stretch</code>
 * @return {sap.m.FlexAlignItems} the value of property <code>alignItems</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getAlignItems = function() { return new sap.m.FlexAlignItems(); };

/**
 * 
 * Getter for property <code>direction</code>.
 * Determines the direction of the layout of child elements
 * </p><p>
 * Default value is <code>Row</code>
 * @return {sap.m.FlexDirection} the value of property <code>direction</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getDirection = function() { return new sap.m.FlexDirection(); };

/**
 * 
 * Getter for property <code>displayInline</code>.
 * Determines whether the flexbox is in block or inline mode
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>displayInline</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getDisplayInline = function() { return false; };

/**
 * 
 * Getter for property <code>fitContainer</code>.
 * Determines whether the flexbox will be sized to completely fill its container. If the FlexBox is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>fitContainer</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getFitContainer = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the FlexBox. Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.9.1
 * 
 */
sap.m.FlexBox.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Flex items within the FlexBox layout
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.FlexBox.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>justifyContent</code>.
 * Determines the layout behavior along the main axis. "SpaceAround" is currently not supported in most non-Webkit browsers.
 * </p><p>
 * Default value is <code>Start</code>
 * @return {sap.m.FlexJustifyContent} the value of property <code>justifyContent</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getJustifyContent = function() { return new sap.m.FlexJustifyContent(); };

/**
 * 
 * Getter for property <code>renderType</code>.
 * Determines whether the layout is rendered as a series of divs or as an unordered list (ul)
 * </p><p>
 * Default value is <code>Div</code>
 * @return {sap.m.FlexRendertype} the value of property <code>renderType</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getRenderType = function() { return new sap.m.FlexRendertype(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Is the control visible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.FlexBox.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the FlexBox. Note that when a percentage is given, for the width to work as expected, the width of the surrounding container must be defined.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @since 1.9.1
 * 
 */
sap.m.FlexBox.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.FlexBox.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Control}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.insertItem = function(oItem,iIndex) { return new sap.m.FlexBox(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.FlexBox.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Control} vItem the item to remove or its index or id
 * @return {sap.ui.core.Control} the removed item or null
 * @public
 * 
 */
sap.m.FlexBox.prototype.removeItem = function(vItem) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>alignItems</code>.
 * </p><p>
 * Default value is <code>Stretch</code> 
 * @param {sap.m.FlexAlignItems} oAlignItems  new value for property <code>alignItems</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setAlignItems = function(oAlignItems) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>direction</code>.
 * </p><p>
 * Default value is <code>Row</code> 
 * @param {sap.m.FlexDirection} oDirection  new value for property <code>direction</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setDirection = function(oDirection) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>displayInline</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bDisplayInline  new value for property <code>displayInline</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setDisplayInline = function(bDisplayInline) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>fitContainer</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFitContainer  new value for property <code>fitContainer</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setFitContainer = function(bFitContainer) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * 
 */
sap.m.FlexBox.prototype.setHeight = function(sHeight) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>justifyContent</code>.
 * </p><p>
 * Default value is <code>Start</code> 
 * @param {sap.m.FlexJustifyContent} oJustifyContent  new value for property <code>justifyContent</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setJustifyContent = function(oJustifyContent) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>renderType</code>.
 * </p><p>
 * Default value is <code>Div</code> 
 * @param {sap.m.FlexRendertype} oRenderType  new value for property <code>renderType</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setRenderType = function(oRenderType) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexBox.prototype.setVisible = function(bVisible) { return new sap.m.FlexBox(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.FlexBox} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * 
 */
sap.m.FlexBox.prototype.setWidth = function(sWidth) { return new sap.m.FlexBox(); };


// ---- sap.m.FlexDirection --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.FlexDirection.toString = function() { return ""; };

// ---- sap.m.FlexItemData --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new FlexItemData.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAlignSelf alignSelf} : sap.m.FlexAlignSelf (default: sap.m.FlexAlignSelf.Auto)</li>
 * <li>{@link #getOrder order} : int (default: 0)</li>
 * <li>{@link #getGrowFactor growFactor} : float (default: 0)</li>
 * <li>{@link #getStyleClass styleClass} : string (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Holds layout data for a FlexBox
 * @extends sap.ui.core.LayoutData
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.FlexItemData = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.FlexItemData with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.FlexItemData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>alignSelf</code>.
 * Determines cross-axis alignment of individual element (not currently supported in Internet Explorer)
 * </p><p>
 * Default value is <code>Auto</code>
 * @return {sap.m.FlexAlignSelf} the value of property <code>alignSelf</code>
 * @public
 * 
 */
sap.m.FlexItemData.prototype.getAlignSelf = function() { return new sap.m.FlexAlignSelf(); };

/**
 * 
 * Getter for property <code>growFactor</code>.
 * Determines the flexibility of the flex item when allocatable space is remaining.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>growFactor</code>
 * @public
 * 
 */
sap.m.FlexItemData.prototype.getGrowFactor = function() { return 0.0; };

/**
 * 
 * Getter for property <code>order</code>.
 * Determines the display order of flex items independent of their source code order.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>order</code>
 * @public
 * 
 */
sap.m.FlexItemData.prototype.getOrder = function() { return 0; };

/**
 * 
 * Getter for property <code>styleClass</code>.
 * The style class will be applied to the flex item and can be used for CSS selectors
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>styleClass</code>
 * @public
 * @deprecated Since version 1.11.2. 
 * Generic addStyleClass method is available on the control
 * 
 */
sap.m.FlexItemData.prototype.getStyleClass = function() { return ""; };

/**
 * 
 * Setter for property <code>alignSelf</code>.
 * </p><p>
 * Default value is <code>Auto</code> 
 * @param {sap.m.FlexAlignSelf} oAlignSelf  new value for property <code>alignSelf</code>
 * @return {sap.m.FlexItemData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexItemData.prototype.setAlignSelf = function(oAlignSelf) { return new sap.m.FlexItemData(); };

/**
 * 
 * Setter for property <code>growFactor</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fGrowFactor  new value for property <code>growFactor</code>
 * @return {sap.m.FlexItemData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexItemData.prototype.setGrowFactor = function(fGrowFactor) { return new sap.m.FlexItemData(); };

/**
 * 
 * Setter for property <code>order</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iOrder  new value for property <code>order</code>
 * @return {sap.m.FlexItemData} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.FlexItemData.prototype.setOrder = function(iOrder) { return new sap.m.FlexItemData(); };

/**
 * 
 * Setter for property <code>styleClass</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sStyleClass  new value for property <code>styleClass</code>
 * @return {sap.m.FlexItemData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.11.2. 
 * Generic addStyleClass method is available on the control
 * 
 */
sap.m.FlexItemData.prototype.setStyleClass = function(sStyleClass) { return new sap.m.FlexItemData(); };


// ---- sap.m.FlexJustifyContent --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.FlexJustifyContent.toString = function() { return ""; };

// ---- sap.m.FlexRendertype --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.FlexRendertype.toString = function() { return ""; };

// ---- sap.m.GroupHeaderListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GroupHeaderListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getCount count} : string</li>
 * <li>{@link #getUpperCase upperCase} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The group header list item is used to display the title of a group and act as separator between groups in Lists.
 * </p><p>
 * There are several API parts inherited from ListItemBase which do not apply here:
 * The properties "type", "unread", "selected" and "counter" are currently ignored.
 * Tap events will not be fired.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.GroupHeaderListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.GroupHeaderListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.GroupHeaderListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>count</code>.
 * A text to be displayed in the group header in brackets next to the group title. Usually the count of items in the group, but it could also be an amount which represents the sum of all amounts in the group.
 * Will not be displayed if not set.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>count</code>
 * @public
 * 
 */
sap.m.GroupHeaderListItem.prototype.getCount = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the group header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.GroupHeaderListItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>upperCase</code>.
 * Title will be put to capital letters by default, otherwise set this property to 'false'
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>upperCase</code>
 * @public
 * @since 1.13.2
 * 
 */
sap.m.GroupHeaderListItem.prototype.getUpperCase = function() { return false; };

/**
 * 
 * Setter for property <code>count</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCount  new value for property <code>count</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.GroupHeaderListItem.prototype.setCount = function(sCount) { return new sap.m.GroupHeaderListItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.GroupHeaderListItem.prototype.setTitle = function(sTitle) { return new sap.m.GroupHeaderListItem(); };

/**
 * 
 * Setter for property <code>upperCase</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bUpperCase  new value for property <code>upperCase</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * 
 */
sap.m.GroupHeaderListItem.prototype.setUpperCase = function(bUpperCase) { return new sap.m.GroupHeaderListItem(); };


// ---- sap.m.GrowingList --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new GrowingList.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getThreshold threshold} : int (default: 20)</li>
 * <li>{@link #getTriggerText triggerText} : string</li>
 * <li>{@link #getScrollToLoad scrollToLoad} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * sap.m.GrowingList control is the container for all list items and inherits from sap.m.List control. Everything like the selection, deletion, unread states and inset style are also maintained here. In addition the control provides a loading mechanism to request data from the model and append the list items to the list. The request is started manually by tapping on the trigger at the end of the list.
 * @extends sap.m.List
 * @version 1.14.0
 * @constructor   
 * @public
 * @experimental Since version 1.8. 
 * API is not yet finished and might change completely
 * 
 */
sap.m.GrowingList = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.GrowingList with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.GrowingList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>scrollToLoad</code>.
 * If you set this property to true then user needs to scroll end to trigger loading a new page. Default value is false which means user needs to scroll end and then click button to load new page.
 * </p><p>
 * NOTE: This property can be set true, if you only have one instance of GrowingList inside the scroll container(e.g Page).
 * In
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>scrollToLoad</code>
 * @public
 * @since 1.11
 * 
 */
sap.m.GrowingList.prototype.getScrollToLoad = function() { return false; };

/**
 * 
 * Getter for property <code>threshold</code>.
 * Number of list items requested from the server and added to the list.
 * </p><p>
 * Default value is <code>20</code>
 * @return {int} the value of property <code>threshold</code>
 * @public
 * 
 */
sap.m.GrowingList.prototype.getThreshold = function() { return 0; };

/**
 * 
 * Getter for property <code>triggerText</code>.
 * Text which is displayed on the trigger at the end of the list. The default is a translated text ("Load more data") coming from the messagebundle properties.
 * This property can be used only if scrollToLoad property is set false.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>triggerText</code>
 * @public
 * 
 */
sap.m.GrowingList.prototype.getTriggerText = function() { return ""; };

/**
 * 
 * Setter for property <code>threshold</code>.
 * </p><p>
 * Default value is <code>20</code> 
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.GrowingList.prototype.setThreshold = function(iThreshold) { return new sap.m.GrowingList(); };

/**
 * 
 * Setter for property <code>triggerText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTriggerText  new value for property <code>triggerText</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.GrowingList.prototype.setTriggerText = function(sTriggerText) { return new sap.m.GrowingList(); };


// ---- sap.m.HBox --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new HBox.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.FlexBox#constructor sap.m.FlexBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The HBox control builds the container for a horizontal flexible box layout. HBox is a convenience control as it is just a specialized FlexBox control.
 * @extends sap.m.FlexBox
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.HBox = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.HBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.HBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.m.IconTab --------------------------------------------------------------------------


// ---- sap.m.IconTabBar --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new IconTabBar.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getShowSelection showSelection} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.IconTab[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.IconTabBar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A tab bar with large icons
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.IconTabBar = function(sId,mSettings) {};
/**
 * 
 * This event will be fired before an item is selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.IconTabFilter} oControlEvent.getParameters.item The selected item.
 * @param {string} oControlEvent.getParameters.key The key of the selected item.
 * @public
 */
sap.m.IconTabBar.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.m.IconTab}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.addItem = function(oItem) { return new sap.m.IconTabBar(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.IconTabBar</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before an item is selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.IconTabBar</code>.<br/> itself.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.m.IconTabBar(); };

/**
 * 
 * Destroys the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.destroyContent = function() { return new sap.m.IconTabBar(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.destroyItems = function() { return new sap.m.IconTabBar(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.detachSelect = function(fnFunction,oListener) { return new sap.m.IconTabBar(); };

/**
 * 
 * Creates a new subclass of class sap.m.IconTabBar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.IconTabBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.m.IconTabFilter</code> The selected item.</li>
 * <li>'key' of type <code>string</code> The key of the selected item.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.IconTabBar.prototype.fireSelect = function(mArguments) { return new sap.m.IconTabBar(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content displayed below the IconTabBar
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.IconTabBar.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.IconTabBar.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * The items displayed in the IconTabBar
 * @return {sap.m.IconTab[]}
 * @public
 * 
 */
sap.m.IconTabBar.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>showSelection</code>.
 * Defines whether the current selection should be visualized
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showSelection</code>
 * @public
 * 
 */
sap.m.IconTabBar.prototype.getShowSelection = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.IconTab}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.IconTabBar.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.m.IconTab}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.insertItem = function(oItem,iIndex) { return new sap.m.IconTabBar(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.IconTab[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.IconTabBar.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.m.IconTab} vItem the item to remove or its index or id
 * @return {sap.m.IconTab} the removed item or null
 * @public
 * 
 */
sap.m.IconTabBar.prototype.removeItem = function(vItem) { return new sap.m.IconTab(); };

/**
 * 
 * Setter for the aggregated <code>content</code>.
 * @param oContent {sap.ui.core.Control}
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.setContent = function(oContent) { return new sap.m.IconTabBar(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.IconTabBar(); };

/**
 * 
 * Setter for property <code>showSelection</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowSelection  new value for property <code>showSelection</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabBar.prototype.setShowSelection = function(bShowSelection) { return new sap.m.IconTabBar(); };


// ---- sap.m.IconTabFilter --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new IconTabFilter.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getCount count} : string (default: '')</li>
 * <li>{@link #getShowAll showAll} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconColor iconColor} : sap.ui.core.IconColor (default: sap.ui.core.IconColor.Default)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The filter item class
 * @extends sap.ui.core.Item
 * @implements sap.m.IconTab
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.IconTabFilter = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.IconTabFilter with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.IconTabFilter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>count</code>.
 * The number of available items if this filter is applied
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>count</code>
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.getCount = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon to display for this item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconColor</code>.
 * If an icon font is used, the color can be chosen from the semantic icon colors.
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.ui.core.IconColor} the value of property <code>iconColor</code>
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.getIconColor = function() { return new sap.ui.core.IconColor(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>showAll</code>.
 * Enables special visualiation for disabled filter (show all items)
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showAll</code>
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.getShowAll = function() { return false; };

/**
 * 
 * Setter for property <code>count</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCount  new value for property <code>count</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.setCount = function(sCount) { return new sap.m.IconTabFilter(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.setIcon = function(sIcon) { return new sap.m.IconTabFilter(); };

/**
 * 
 * Setter for property <code>iconColor</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.ui.core.IconColor} oIconColor  new value for property <code>iconColor</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.setIconColor = function(oIconColor) { return new sap.m.IconTabFilter(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.IconTabFilter(); };

/**
 * 
 * Setter for property <code>showAll</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowAll  new value for property <code>showAll</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabFilter.prototype.setShowAll = function(bShowAll) { return new sap.m.IconTabFilter(); };


// ---- sap.m.IconTabSeparator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new IconTabSeparator.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A tab separator item class
 * @extends sap.ui.core.Element
 * @implements sap.m.IconTab
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.IconTabSeparator = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.IconTabSeparator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.IconTabSeparator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon to display for this separator. If no icon is given, a separator line will be used instead.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.IconTabSeparator.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.IconTabSeparator.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.IconTabSeparator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabSeparator.prototype.setIcon = function(sIcon) { return new sap.m.IconTabSeparator(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.IconTabSeparator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.IconTabSeparator.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.IconTabSeparator(); };


// ---- sap.m.Image --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Image.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDecorative decorative} : boolean (default: true)</li>
 * <li>{@link #getAlt alt} : string</li>
 * <li>{@link #getUseMap useMap} : string</li>
 * <li>{@link #getDensityAware densityAware} : boolean (default: true)</li>
 * <li>{@link #getActiveSrc activeSrc} : sap.ui.core.URI (default: "")</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Image#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Image#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A wrapper around the IMG tag. The image can be loaded from a remote or local server.
 * </p><p>
 * Density related image will be loaded if image with density awareness name in format [imageName]@[densityValue].[extension] is provided. The valid desity values are 1, 1.5, 2. If the original devicePixelRatio isn't one of the three valid numbers, it's rounded up to the nearest one.
 * </p><p>
 * There are various size setting options available, and the images can be combined with actions.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Image = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user clicks on the control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Image.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the user clicks on the control. (This event is deprecated, use the press event instead) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Image.prototype.tap = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Image</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Image</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user clicks on the control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Image</code>.<br/> itself.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.Image(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.Image</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Image</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user clicks on the control. (This event is deprecated, use the press event instead) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Image</code>.<br/> itself.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.m.Image(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Image</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.Image(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.Image</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.detachTap = function(fnFunction,oListener) { return new sap.m.Image(); };

/**
 * 
 * Creates a new subclass of class sap.m.Image with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Image.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Image.prototype.firePress = function(mArguments) { return new sap.m.Image(); };

/**
 * 
 * Fire event tap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Image.prototype.fireTap = function(mArguments) { return new sap.m.Image(); };

/**
 * 
 * Getter for property <code>activeSrc</code>.
 * The source property when this image is tapped.
 * </p><p>
 * Default value is <code>""</code>
 * @return {sap.ui.core.URI} the value of property <code>activeSrc</code>
 * @public
 * 
 */
sap.m.Image.prototype.getActiveSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>alt</code>.
 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
 * If the image is set to decorative this property is ignored.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>alt</code>
 * @public
 * 
 */
sap.m.Image.prototype.getAlt = function() { return ""; };

/**
 * 
 * Getter for property <code>decorative</code>.
 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
 * </p><p>
 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
 * A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>decorative</code>
 * @public
 * 
 */
sap.m.Image.prototype.getDecorative = function() { return false; };

/**
 * 
 * Getter for property <code>densityAware</code>.
 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
 * </p><p>
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>densityAware</code>
 * @public
 * 
 */
sap.m.Image.prototype.getDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.Image.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>src</code>.
 * Relative or absolute path to URL where the image file is stored. The path will be adapted to the density aware format according to the density of the device following the convention that [imageName]@[densityValue].[extension]
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>src</code>
 * @public
 * 
 */
sap.m.Image.prototype.getSrc = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>useMap</code>.
 * The name of the image map that defines the clickable areas
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>useMap</code>
 * @public
 * 
 */
sap.m.Image.prototype.getUseMap = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible images are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Image.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the original ratio between width/height is maintained.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Image.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * This overrides the default setter of the activeSrc property in order to avoid the rerendering.
 * @public
 */
sap.m.Image.prototype.setActiveSrc = function(sActiveSrc) { return null; };

/**
 * 
 * Setter for property <code>alt</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sAlt  new value for property <code>alt</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setAlt = function(sAlt) { return new sap.m.Image(); };

/**
 * 
 * Setter for property <code>decorative</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDecorative  new value for property <code>decorative</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setDecorative = function(bDecorative) { return new sap.m.Image(); };

/**
 * 
 * Setter for property <code>densityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bDensityAware  new value for property <code>densityAware</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setDensityAware = function(bDensityAware) { return new sap.m.Image(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setHeight = function(sHeight) { return new sap.m.Image(); };

/**
 * 
 * This overrides the default setter of the iconDensityAware property in order to avoid the rerendering.
 * @public *
 */
sap.m.Image.prototype.setIconDensityAware = function(bIconDensityAware) { return null; };

/**
 * 
 * This overrides the default setter of the src property and update the dom node.
 * @public
 */
sap.m.Image.prototype.setSrc = function(sSrc) { return null; };

/**
 * 
 * Setter for property <code>useMap</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sUseMap  new value for property <code>useMap</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setUseMap = function(sUseMap) { return new sap.m.Image(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setVisible = function(bVisible) { return new sap.m.Image(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Image} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Image.prototype.setWidth = function(sWidth) { return new sap.m.Image(); };


// ---- sap.m.ImageHelper --------------------------------------------------------------------------

/**
 * 
 * Creates or updates an image control.
 * @param {string} sImgId id of the image to be dealt with.
 * @param {sap.m.Image} oImageControl the image to update. If undefined, a new image will be created.
 * @param {sap.ui.core.Control} oImageControl's parentControl.
 * @param {Map} mProperties map object that contains key value pairs if image propeties. The 'src' property
 * MUST be contained. Also the map's keys must be names of image properties
 * @param {Array} aCssClasses array of css classes which will be added if the image needs to be created.
 * @returns the new or updated image control
 * @protected
 * 
 * @memberOf sap.m.ImageHelper
 */
sap.m.ImageHelper.getImageControl = function(sImgId,oImageControl,oImageControl's,mProperties,aCssClasses) { return null; };


// ---- sap.m.Input --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Input.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.m.InputType (default: sap.m.InputType.Text)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getShowValueStateMessage showValueStateMessage} : boolean (default: true)</li>
 * <li>{@link #getDateFormat dateFormat} : string (default: 'YYYY-MM-dd')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Input#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Enables users to input data.
 * @extends sap.m.InputBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Input = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue the new value of the input
 * @public
 */
sap.m.Input.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.m.Input(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Input</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.m.Input(); };

/**
 * 
 * Creates a new subclass of class sap.m.Input with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Input.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event liveChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> the new value of the input</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Input.prototype.fireLiveChange = function(mArguments) { return new sap.m.Input(); };

/**
 * 
 * Getter for property <code>dateFormat</code>.
 * Only used if type=date and no datepicker is available.
 * The data is displayed and the user input is parsed according to this format.
 * NOTE: The value property is always of the form RFC 3339 (YYYY-MM-dd).
 * </p><p>
 * Default value is <code>YYYY-MM-dd</code>
 * @return {string} the value of property <code>dateFormat</code>
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * 
 */
sap.m.Input.prototype.getDateFormat = function() { return ""; };

/**
 * 
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.m.Input.prototype.getMaxLength = function() { return 0; };

/**
 * 
 * Getter for property <code>showValueStateMessage</code>.
 * Whether the value state message should be shown.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValueStateMessage</code>
 * @public
 * 
 */
sap.m.Input.prototype.getShowValueStateMessage = function() { return false; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of input (e.g. Text, Number, Email, Phone)
 * </p><p>
 * Default value is <code>Text</code>
 * @return {sap.m.InputType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.Input.prototype.getType = function() { return new sap.m.InputType(); };

/**
 * 
 * Getter for property <code>valueStateText</code>.
 * The text which is shown in the value state message popup. If not specfied a default text is shown.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>valueStateText</code>
 * @public
 * 
 */
sap.m.Input.prototype.getValueStateText = function() { return ""; };

/**
 * 
 * Setter for property <code>dateFormat</code>.
 * </p><p>
 * Default value is <code>YYYY-MM-dd</code> 
 * @param {string} sDateFormat  new value for property <code>dateFormat</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * 
 */
sap.m.Input.prototype.setDateFormat = function(sDateFormat) { return new sap.m.Input(); };

/**
 * 
 * Setter for property <code>maxLength</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.setMaxLength = function(iMaxLength) { return new sap.m.Input(); };

/**
 * 
 * Setter for property <code>showValueStateMessage</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowValueStateMessage  new value for property <code>showValueStateMessage</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.setShowValueStateMessage = function(bShowValueStateMessage) { return new sap.m.Input(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Text</code> 
 * @param {sap.m.InputType} oType  new value for property <code>type</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.setType = function(oType) { return new sap.m.Input(); };

/**
 * 
 * Setter for property <code>valueStateText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValueStateText  new value for property <code>valueStateText</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Input.prototype.setValueStateText = function(sValueStateText) { return new sap.m.Input(); };

/**
 * 
 * Defines the width of the input. Default value is 100%
 * @public
 * @param sWidth
 */
sap.m.Input.prototype.setWidth = function(sWidth) { return null; };


// ---- sap.m.InputBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new InputBase.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.InputBase#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Base control for Input fields.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12.0
 * 
 */
sap.m.InputBase = function(sId,mSettings) {};
/**
 * 
 * This event gets fired when the input operation has finished and the value has changed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue The new value of the input
 * @public
 */
sap.m.InputBase.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.InputBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.InputBase</code>.<br/> itself. 
 * </p><p>
 * This event gets fired when the input operation has finished and the value has changed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.InputBase</code>.<br/> itself.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.InputBase(); };

/**
 * 
 * Binder for property <code>value</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.bindValue = function(sPath,fnFormatter,sMode) { return new sap.m.InputBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.InputBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.InputBase(); };

/**
 * 
 * Creates a new subclass of class sap.m.InputBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.InputBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new value of the input</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.InputBase.prototype.fireChange = function(mArguments) { return new sap.m.InputBase(); };

/**
 * 
 * Getter for property <code>editable</code>.
 * Controls if a user can change the value.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @since 1.12.0
 * 
 */
sap.m.InputBase.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true).
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>placeholder</code>.
 * text shown when no value available
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getPlaceholder = function() { return ""; };

/**
 * 
 * Getter for property <code>value</code>.
 * Input Value
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible inputs are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the input.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.InputBase.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>editable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * 
 */
sap.m.InputBase.prototype.setEditable = function(bEditable) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setEnabled = function(bEnabled) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setName = function(sName) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>placeholder</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setPlaceholder = function(sPlaceholder) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setValue = function(sValue) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>valueState</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setValueState = function(oValueState) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setVisible = function(bVisible) { return new sap.m.InputBase(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.setWidth = function(sWidth) { return new sap.m.InputBase(); };

/**
 * 
 * Unbinder for property <code>value</code>.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputBase.prototype.unbindValue = function() { return new sap.m.InputBase(); };


// ---- sap.m.InputListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new InputListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * List item should be used for a label and an input field.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.InputListItem = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.addContent = function(oContent) { return new sap.m.InputListItem(); };

/**
 * 
 * Binder for aggregation <code>content</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.bindContent = function(sPath,oTemplate,oSorter,aFilters) { return new sap.m.InputListItem(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.destroyContent = function() { return new sap.m.InputListItem(); };

/**
 * 
 * Creates a new subclass of class sap.m.InputListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.InputListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Content controls can be added
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.InputListItem.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>label</code>.
 * Label of the list item
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>label</code>
 * @public
 * 
 */
sap.m.InputListItem.prototype.getLabel = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.InputListItem.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.insertContent = function(oContent,iIndex) { return new sap.m.InputListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.InputListItem.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.InputListItem.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>label</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.setLabel = function(sLabel) { return new sap.m.InputListItem(); };

/**
 * 
 * Unbinder for aggregation <code>content</code>.
 * @return {sap.m.InputListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.InputListItem.prototype.unbindContent = function() { return new sap.m.InputListItem(); };


// ---- sap.m.InputType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.InputType.toString = function() { return ""; };

// ---- sap.m.InstanceManager --------------------------------------------------------------------------

/**
 * 
 * Adds a control to predefined dialog category in instance manager.
 * @param {sap.ui.core.Control} oDialog Dialog to be added to instance manager. Dialog which doesn't inherit from sap.m.Dialog can also be added as long as it has a close method.
 * @returns {sap.m.InstanceManager} Enable method chaining.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.addDialogInstance = function(oDialog) { return new sap.m.InstanceManager(); };

/**
 * 
 * Adds an instance to the given category.
 * @param {string} sCategoryId The category's id.
 * @param {object} oInstance The instance that will be added to the given category.
 * @returns {sap.m.InstanceManager} Enable method chaining.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.addInstance = function(sCategoryId,oInstance) { return new sap.m.InstanceManager(); };

/**
 * 
 * Adds a control to predefined popover category in instance manager.
 * @param {sap.ui.core.Control} oPopover Popover to be added to instance manager. Custom popover which doesn't inherit from sap.m.Popover can also be added as long as it has a close method.
 * @returns {sap.m.InstanceManager} Enable method chaining.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.addPopoverInstance = function(oPopover) { return new sap.m.InstanceManager(); };

/**
 * 
 * Closes all of the open dialogs.
 * @public
 * @returns {sap.m.InstanceManager} Enable method chaining.
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.closeAllDialogs = function() { return new sap.m.InstanceManager(); };

/**
 * 
 * Closes all open popovers.
 * @public
 * @returns {sap.m.InstanceManager} Enable method chaining.
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.closeAllPopovers = function() { return new sap.m.InstanceManager(); };

/**
 * 
 * Returns an array of managed instances in the given category.
 * @param {string} sCategoryId The category's id.
 * @returns {object} Managed instances in the given category.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.getInstancesByCategoryId = function(sCategoryId) { return new Object(); };

/**
 * 
 * Gets all of the open dialogs. If there's no dialog open, it returns an empty array.
 * @return {sap.ui.core.Control[]} The open dialogs.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.getOpenDialogs = function() { return new Array(); };

/**
 * 
 * Gets all of the open popovers. If there's no popover open, it returns an empty array.
 * @return {sap.ui.core.Control[]} The open popovers.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.getOpenPopovers = function() { return new Array(); };

/**
 * 
 * Returns true if there's dialog(s) managed in predefined dialog category, otherwise it returns false.
 * @returns {boolean} Whether there's dialog(s) open.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.hasOpenDialog = function() { return false; };

/**
 * 
 * Returns true if there's popover(s) managed in predefined popover category, otherwise it returns false.
 * @returns {boolean} Whether there's popover(s) open.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.hasOpenPopover = function() { return false; };

/**
 * 
 * Returns if there's no managed instance in the given category.
 * @param {string} sCategoryId The category's id.
 * @returns {boolean} Whether the category is empty.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.isCategoryEmpty = function(sCategoryId) { return false; };

/**
 * 
 * Check if the given dialog instance is managed under the dialog category.
 * For dialog instances, managed means the dialog is open.
 * </p><p>
 * This function is specially provided for customized controls which doesn't have the possibility to check whether it's open.
 * If the given dialog is an instance of sap.m.Dialog, sap.m.ActionSheet, the isOpen() method on the instance is 
 * preferred to be called than this function.
 * @param {sap.ui.core.Control} oDialog The dialog that is checked for the openness.
 * @returns Whether the given dialog is open.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.isDialogOpen = function(oDialog) { return null; };

/**
 * 
 * Checks if an instance is managed under the given category.
 * @param {string} sCategoryId The category that the instance is supposed to be in.
 * @param {object} oInstance The instance that needs to be checked.
 * @returns {boolean} Whether the instance is managed in the given category.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.isInstanceManaged = function(sCategoryId,oInstance) { return false; };

/**
 * 
 * Check if the given popover instance is managed under the popover category.
 * For popover instances, managed means the popover is open.
 * </p><p>
 * This function is specially provided for customized controls which doesn't have the possibility to check whether it's open. 
 * If the given popover is an instance of sap.m.Popover, sap.m.ActionSheet, the isOpen() method on the instance is 
 * preferred to be called than this function.
 * @param {sap.ui.core.Control} oPopover The popover that is checked for the openness.
 * @returns Whether the given popover is open.
 * @public
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.isPopoverOpen = function(oPopover) { return null; };

/**
 * 
 * Removes control from predefined dialog category in instance manager.
 * @param {sap.ui.core.Control} Dialog to be removed from instance manager.
 * @returns The removed popover or null. If the popover isn't managed, this method returns null instead of the removed popover.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.removeDialogInstance = function(Dialog) { return null; };

/**
 * 
 * Removes a managed instance from the given category.
 * @param {string} sCategoryId The category's id.
 * @param {object} oInstance The instance that will be removed from the given category.
 * @returns The removed instance or null. If the instance isn't managed, this method returns null instead of the instance object.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.removeInstance = function(sCategoryId,oInstance) { return null; };

/**
 * 
 * Removes control from predefined popover category in instance manager.
 * @param {sap.ui.core.Control} Popover to be removed from instance manager.
 * @returns The removed popover or null. If the popover isn't managed, this method returns null instead of the removed popover.
 * @protected
 * 
 * @memberOf sap.m.InstanceManager
 */
sap.m.InstanceManager.removePopoverInstance = function(Popover) { return null; };


// ---- sap.m.Label --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Label.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDesign design} : sap.m.LabelDesign (default: sap.m.LabelDesign.Standard)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getRequired required} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLabelFor labelFor} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Label control is used in a UI5 mobile application to provide label text for other controls. Design such as bold, and text alignment can be specified.
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.Label
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Label = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.Label with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Label.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>design</code>.
 * set design of a label to either Standard or Bold
 * </p><p>
 * Default value is <code>sap.m.LabelDesign.Standard</code>
 * @return {sap.m.LabelDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.m.Label.prototype.getDesign = function() { return new sap.m.LabelDesign(); };

/**
 * 
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 * @return {string} Id of the element which is the current target of the <code>labelFor</code> association, or null
 * @public
 * 
 */
sap.m.Label.prototype.getLabelFor = function() { return ""; };

/**
 * 
 * Getter for property <code>required</code>.
 * Indicates that user input is required in the input this label labels.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>required</code>
 * @public
 * 
 */
sap.m.Label.prototype.getRequired = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Label Text to be displayed
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.Label.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textAlign</code>.
 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.m.Label.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.m.Label.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible labels are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Label.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of Label
 * </p><p>
 * Default value is <code>''</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Label.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>design</code>.
 * </p><p>
 * Default value is <code>sap.m.LabelDesign.Standard</code> 
 * @param {sap.m.LabelDesign} oDesign  new value for property <code>design</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setDesign = function(oDesign) { return new sap.m.Label(); };

/**
 * 
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 * @param {string | sap.ui.core.Control} vLabelFor 
 *    Id of an element which becomes the new target of this <code>labelFor</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setLabelFor = function(vLabelFor) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>required</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bRequired  new value for property <code>required</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setRequired = function(bRequired) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setText = function(sText) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>textAlign</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setTextAlign = function(oTextAlign) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setTextDirection = function(oTextDirection) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setVisible = function(bVisible) { return new sap.m.Label(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Label} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Label.prototype.setWidth = function(sWidth) { return new sap.m.Label(); };


// ---- sap.m.LabelDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.LabelDesign.toString = function() { return ""; };

// ---- sap.m.Link --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Link.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getTarget target} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Link#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A hyperlink control which can be used to trigger actions or to navigate to other applications or web pages.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.Link = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user triggers the link control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Link.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Link</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Link</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user triggers the link control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Link</code>.<br/> itself.
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.Link(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Link</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.Link(); };

/**
 * 
 * Creates a new subclass of class sap.m.Link with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Link.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.m.Link.prototype.firePress = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Whether the link can be triggered by the user.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.Link.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>href</code>.
 * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "press" event should be registered.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * 
 */
sap.m.Link.prototype.getHref = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>target</code>.
 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>target</code>
 * @public
 * 
 */
sap.m.Link.prototype.getTarget = function() { return ""; };

/**
 * 
 * Getter for property <code>text</code>.
 * Link text to be displayed.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.Link.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible links are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Link.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text defines the size.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Link.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setEnabled = function(bEnabled) { return new sap.m.Link(); };

/**
 * 
 * Setter for property <code>href</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sHref  new value for property <code>href</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setHref = function(sHref) { return new sap.m.Link(); };

/**
 * 
 * Setter for property <code>target</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTarget  new value for property <code>target</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setTarget = function(sTarget) { return new sap.m.Link(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setText = function(sText) { return new sap.m.Link(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setVisible = function(bVisible) { return new sap.m.Link(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Link.prototype.setWidth = function(sWidth) { return new sap.m.Link(); };


// ---- sap.m.List --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new List.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getInset inset} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHeaderText headerText} : string</li>
 * <li>{@link #getFooterText footerText} : string</li>
 * <li>{@link #getMode mode} : sap.m.ListMode (default: sap.m.ListMode.None)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getIncludeItemInSelection includeItemInSelection} : boolean (default: false)</li>
 * <li>{@link #getShowUnread showUnread} : boolean (default: false)</li>
 * <li>{@link #getNoDataText noDataText} : string</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: true)</li>
 * <li>{@link #getSwipeDirection swipeDirection} : sap.m.SwipeDirection (default: sap.m.SwipeDirection.Both)</li>
 * <li>{@link #getModeAnimationOn modeAnimationOn} : boolean (default: true)</li>
 * <li>{@link #getShowSeparators showSeparators} : sap.m.ListSeparators (default: sap.m.ListSeparators.All)</li>
 * <li>{@link #getHeaderDesign headerDesign} : sap.m.ListHeaderDesign (default: sap.m.ListHeaderDesign.Standard)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: sap.m.BackgroundDesign.Solid)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.ListItemBase[]</li>
 * <li>{@link #getSwipeContent swipeContent} : sap.ui.core.Control</li>
 * <li>{@link #getColumns columns} : sap.m.Column[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.List#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.List#event:delete delete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.List#event:swipe swipe} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * sap.m.List Control is the container for all list items. Selection, deletion, unread states and inset style are also maintained here.
 * </p><p>
 * Note: The List including all contained items is completely re-rendered when the data of a bound model is changed. Due to the limited hardware resources of mobile devices this can lead to longer delays for lists with many items. As such the usage of a list is not recommended for these use cases.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.List = function(sId,mSettings) {};
/**
 * 
 * Event is fired when selection is changed by user interaction. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.ListItemBase} oControlEvent.getParameters.listItem The listitem which fired the select.
 * @public
 */
sap.m.List.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when user swipe to bring in a control and before swipeContent is shown on the right hand side of list item. So, you can easily change swipeContent according to swiped list item. Call the preventDefault method of the event object to disable swipe. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.ListItemBase} oControlEvent.getParameters.listItem The listitem which fired the swipe.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.swipeContent Given swipeContent control to show on the right hand side of a list item.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.srcControl Holds which control caused the swipe event in List Item.
 * @public
 */
sap.m.List.prototype.swipe = function(oControlEvent) { return null; };

/**
 * 
 * This method is called from Column when Column visibility is changed via CSS media query
 * @param bColVisible {boolean} whether column is now visible or not 
 * @protected 
 */
sap.m.List.prototype._setTableHeaderVisibility = function(bColVisible) { return null; };

/**
 * 
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 * @param {sap.m.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.addColumn = function(oColumn) { return new sap.m.List(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.m.ListItemBase}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.addItem = function(oItem) { return new sap.m.List(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'delete' event of this <code>sap.m.List</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.List</code>.<br/> itself. 
 * </p><p>
 * Event is fired when delete icon is pressed by user. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.List</code>.<br/> itself.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.attachDelete = function(oData,fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.List</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.List</code>.<br/> itself. 
 * </p><p>
 * Event is fired when selection is changed by user interaction. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.List</code>.<br/> itself.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'swipe' event of this <code>sap.m.List</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.List</code>.<br/> itself. 
 * </p><p>
 * This event is fired when user swipe to bring in a control and before swipeContent is shown on the right hand side of list item. So, you can easily change swipeContent according to swiped list item. Call the preventDefault method of the event object to disable swipe. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.List</code>.<br/> itself.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.attachSwipe = function(oData,fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Binder for aggregation <code>items</code>.
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.bindItems = function(sPath,oTemplate,oSorter,aFilters) { return new sap.m.List(); };

/**
 * 
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.destroyColumns = function() { return new sap.m.List(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.destroyItems = function() { return new sap.m.List(); };

/**
 * 
 * Destroys the swipeContent in the aggregation 
 * named <code>swipeContent</code>.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.destroySwipeContent = function() { return new sap.m.List(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'delete' event of this <code>sap.m.List</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.detachDelete = function(fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.List</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.detachSelect = function(fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'swipe' event of this <code>sap.m.List</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.detachSwipe = function(fnFunction,oListener) { return new sap.m.List(); };

/**
 * 
 * Creates a new subclass of class sap.m.List with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.List.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event delete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'listItem' of type <code>sap.m.ListItemBase</code> The listitem which fired the delete.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.List.prototype.fireDelete = function(mArguments) { return new sap.m.List(); };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'listItem' of type <code>sap.m.ListItemBase</code> The listitem which fired the select.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.List.prototype.fireSelect = function(mArguments) { return new sap.m.List(); };

/**
 * 
 * Fire event swipe to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'listItem' of type <code>sap.m.ListItemBase</code> The listitem which fired the swipe.</li>
 * <li>'swipeContent' of type <code>sap.ui.core.Control</code> Given swipeContent control to show on the right hand side of a list item.</li>
 * <li>'srcControl' of type <code>sap.ui.core.Control</code> Holds which control caused the swipe event in List Item.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.m.List.prototype.fireSwipe = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>backgroundDesign</code>.
 * This property is used to set the background color of the list. Depending on the theme you can change the state of the background from "Solid" over "Translucent" to "Transparent".
 * </p><p>
 * Default value is <code>Solid</code>
 * @return {sap.m.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @since 1.14
 * 
 */
sap.m.List.prototype.getBackgroundDesign = function() { return new sap.m.BackgroundDesign(); };

/**
 * 
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the List aggregation can be used to build a List with columns and headers. If you need a tabular list(a Table) then you can use "ColumnListItem" as "items" aggregation.
 * @return {sap.m.Column[]}
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.getColumns = function() { return new Array(); };

/**
 * 
 * Getter for property <code>footerText</code>.
 * Footer Text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>footerText</code>
 * @public
 * 
 */
sap.m.List.prototype.getFooterText = function() { return ""; };

/**
 * 
 * Getter for property <code>headerDesign</code>.
 * List header style
 * </p><p>
 * Default value is <code>Standard</code>
 * @return {sap.m.ListHeaderDesign} the value of property <code>headerDesign</code>
 * @public
 * 
 */
sap.m.List.prototype.getHeaderDesign = function() { return new sap.m.ListHeaderDesign(); };

/**
 * 
 * Getter for property <code>headerText</code>.
 * Header Text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>headerText</code>
 * @public
 * 
 */
sap.m.List.prototype.getHeaderText = function() { return ""; };

/**
 * 
 * Getter for property <code>includeItemInSelection</code>.
 * This property decides if the list item interacts with the selection. If it is 'true', a tap on the item will set the selection control in front of the list item.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>includeItemInSelection</code>
 * @public
 * 
 */
sap.m.List.prototype.getIncludeItemInSelection = function() { return false; };

/**
 * 
 * Getter for property <code>inset</code>.
 * Inset style false/true
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>inset</code>
 * @public
 * 
 */
sap.m.List.prototype.getInset = function() { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * The items of this list
 * @return {sap.m.ListItemBase[]}
 * @public
 * 
 */
sap.m.List.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>mode</code>.
 * Mode of a list (e.g. None, SingleSelect, MultiSelect, Delete, etc.)
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.m.ListMode} the value of property <code>mode</code>
 * @public
 * 
 */
sap.m.List.prototype.getMode = function() { return new sap.m.ListMode(); };

/**
 * 
 * Getter for property <code>modeAnimationOn</code>.
 * Defines if animations will be shown when activating or deactivating selection modes.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>modeAnimationOn</code>
 * @public
 * 
 */
sap.m.List.prototype.getModeAnimationOn = function() { return false; };

/**
 * 
 * Getter for property <code>noDataText</code>.
 * This is the text shown, when the list has no data
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>noDataText</code>
 * @public
 * 
 */
sap.m.List.prototype.getNoDataText = function() { return ""; };

/**
 * 
 * Getter for property <code>showNoData</code>.
 * Enables an information text, when no list items are in the list.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * 
 */
sap.m.List.prototype.getShowNoData = function() { return false; };

/**
 * 
 * Getter for property <code>showSeparators</code>.
 * Defines which separator style will be used.
 * </p><p>
 * Default value is <code>All</code>
 * @return {sap.m.ListSeparators} the value of property <code>showSeparators</code>
 * @public
 * 
 */
sap.m.List.prototype.getShowSeparators = function() { return new sap.m.ListSeparators(); };

/**
 * 
 * Getter for property <code>showUnread</code>.
 * Activates the unread feature for all list items.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showUnread</code>
 * @public
 * 
 */
sap.m.List.prototype.getShowUnread = function() { return false; };

/**
 * 
 * Getter for aggregation <code>swipeContent</code>.<br/>
 * User can swipe to bring in this control on the right hand side of a list item.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.List.prototype.getSwipeContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>swipeDirection</code>.
 * Direction of swipe(e.g LeftToRight, RightToLeft, Both) to bring in a control on the right hand side of the list item.
 * </p><p>
 * Default value is <code>Both</code>
 * @return {sap.m.SwipeDirection} the value of property <code>swipeDirection</code>
 * @public
 * 
 */
sap.m.List.prototype.getSwipeDirection = function() { return new sap.m.SwipeDirection(); };

/**
 * 
 * Returns swiped list item. When no item is swiped, "null" is returned.
 * @type sap.m.ListItemBase
 * @public
 */
sap.m.List.prototype.getSwipedItem = function() { return new sap.m.ListItemBase(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible lists are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.List.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Sets the width of the list
 * </p><p>
 * Default value is <code>'100%'</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.List.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.m.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.m.ListItemBase</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.ListItemBase}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.List.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a column into the aggregation named <code>columns</code>.
 * @param {sap.m.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.insertColumn = function(oColumn,iIndex) { return new sap.m.List(); };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.m.ListItemBase}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.insertItem = function(oItem,iIndex) { return new sap.m.List(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Column[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.removeAllColumns = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ListItemBase[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.List.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an column from the aggregation named <code>columns</code>.
 * @param {int | string | sap.m.Column} vColumn the column to remove or its index or id
 * @return {sap.m.Column} the removed column or null
 * @public
 * @since 1.12
 * 
 */
sap.m.List.prototype.removeColumn = function(vColumn) { return new sap.m.Column(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.m.ListItemBase} vItem the item to remove or its index or id
 * @return {sap.m.ListItemBase} the removed item or null
 * @public
 * 
 */
sap.m.List.prototype.removeItem = function(vItem) { return new sap.m.ListItemBase(); };

/**
 * 
 * Setter for property <code>backgroundDesign</code>.
 * </p><p>
 * Default value is <code>Solid</code> 
 * @param {sap.m.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @since 1.14
 * 
 */
sap.m.List.prototype.setBackgroundDesign = function(oBackgroundDesign) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>footerText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sFooterText  new value for property <code>footerText</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setFooterText = function(sFooterText) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>headerDesign</code>.
 * </p><p>
 * Default value is <code>Standard</code> 
 * @param {sap.m.ListHeaderDesign} oHeaderDesign  new value for property <code>headerDesign</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setHeaderDesign = function(oHeaderDesign) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>headerText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeaderText  new value for property <code>headerText</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setHeaderText = function(sHeaderText) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>includeItemInSelection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bIncludeItemInSelection  new value for property <code>includeItemInSelection</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setIncludeItemInSelection = function(bIncludeItemInSelection) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>inset</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bInset  new value for property <code>inset</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setInset = function(bInset) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>mode</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.m.ListMode} oMode  new value for property <code>mode</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setMode = function(oMode) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>modeAnimationOn</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bModeAnimationOn  new value for property <code>modeAnimationOn</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setModeAnimationOn = function(bModeAnimationOn) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>noDataText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNoDataText  new value for property <code>noDataText</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setNoDataText = function(sNoDataText) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>showNoData</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowNoData  new value for property <code>showNoData</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setShowNoData = function(bShowNoData) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>showSeparators</code>.
 * </p><p>
 * Default value is <code>All</code> 
 * @param {sap.m.ListSeparators} oShowSeparators  new value for property <code>showSeparators</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setShowSeparators = function(oShowSeparators) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>showUnread</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowUnread  new value for property <code>showUnread</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setShowUnread = function(bShowUnread) { return new sap.m.List(); };

/**
 * 
 * Setter for the aggregated <code>swipeContent</code>.
 * @param oSwipeContent {sap.ui.core.Control}
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setSwipeContent = function(oSwipeContent) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>swipeDirection</code>.
 * </p><p>
 * Default value is <code>Both</code> 
 * @param {sap.m.SwipeDirection} oSwipeDirection  new value for property <code>swipeDirection</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setSwipeDirection = function(oSwipeDirection) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setVisible = function(bVisible) { return new sap.m.List(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>'100%'</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.setWidth = function(sWidth) { return new sap.m.List(); };

/**
 * 
 * After swipeContent is shown, user can interact with this control(e.g Tap). After interaction is done, you can/should use this method to hide swipeContent from screen.
 * NOTE: If user try to tap inside of the list but outside of the swipeContent then control hides automatically.
 * @param {any} 
 *         oCallback
 *         This callback function is called with two parameters(swipedListItem and swipedContent) after swipe-out animation is finished.
 * @type sap.m.List
 * @public
 */
sap.m.List.prototype.swipeOut = function(oCallback) { return new sap.m.List(); };

/**
 * 
 * Unbinder for aggregation <code>items</code>.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.List.prototype.unbindItems = function() { return new sap.m.List(); };


// ---- sap.m.ListHeaderDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ListHeaderDesign.toString = function() { return ""; };

// ---- sap.m.ListItemBase --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ListItemBase.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : sap.m.ListType (default: sap.m.ListType.Inactive)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getUnread unread} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getCounter counter} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ListItemBase#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailTap detailTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailPress detailPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ListItemBase contains the core features of all specific list items.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.ListItemBase = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user clicks on the detail button of the control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ListItemBase.prototype.detailPress = function(oControlEvent) { return null; };

/**
 * 
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ListItemBase.prototype.detailTap = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the user clicks on the control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ListItemBase.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * tap event (This event is deprecated, use the press event instead) 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.ListItemBase.prototype.tap = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user clicks on the detail button of the control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.attachDetailPress = function(oData,fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 * </p><p>
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.attachDetailTap = function(oData,fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user clicks on the control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 * </p><p>
 * tap event (This event is deprecated, use the press event instead) 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.attachTap = function(oData,fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.detachDetailPress = function(fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.detachDetailTap = function(fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.detachTap = function(fnFunction,oListener) { return new sap.m.ListItemBase(); };

/**
 * 
 * Creates a new subclass of class sap.m.ListItemBase with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ListItemBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event detailPress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ListItemBase.prototype.fireDetailPress = function(mArguments) { return new sap.m.ListItemBase(); };

/**
 * 
 * Fire event detailTap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ListItemBase.prototype.fireDetailTap = function(mArguments) { return new sap.m.ListItemBase(); };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ListItemBase.prototype.firePress = function(mArguments) { return new sap.m.ListItemBase(); };

/**
 * 
 * Fire event tap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ListItemBase.prototype.fireTap = function(mArguments) { return new sap.m.ListItemBase(); };

/**
 * 
 * Getter for property <code>counter</code>.
 * Property sets a counter bubble with the integer given.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>counter</code>
 * @public
 * 
 */
sap.m.ListItemBase.prototype.getCounter = function() { return 0; };

/**
 * 
 * Getter for property <code>selected</code>.
 * This property defines the select state of the list item when using single/Multi-Selection
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.m.ListItemBase.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of the list item, defines the behaviour
 * </p><p>
 * Default value is <code>Inactive</code>
 * @return {sap.m.ListType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.ListItemBase.prototype.getType = function() { return new sap.m.ListType(); };

/**
 * 
 * Getter for property <code>unread</code>.
 * If the unread indicator is set on the list, this boolean defines if it will be shown on this list item. Default is false.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>unread</code>
 * @public
 * 
 */
sap.m.ListItemBase.prototype.getUnread = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible list items are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ListItemBase.prototype.getVisible = function() { return false; };

/**
 * 
 * returns the state of the item selection as a boolean
 * @type boolean
 * @public
 * @deprecated Since version 7.20.0. 
 * API Change makes this method unnecessary
 */
sap.m.ListItemBase.prototype.isSelected = function() { return false; };

/**
 * 
 * Setter for property <code>counter</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iCounter  new value for property <code>counter</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.setCounter = function(iCounter) { return new sap.m.ListItemBase(); };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.setSelected = function(bSelected) { return new sap.m.ListItemBase(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Inactive</code> 
 * @param {sap.m.ListType} oType  new value for property <code>type</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.setType = function(oType) { return new sap.m.ListItemBase(); };

/**
 * 
 * Setter for property <code>unread</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bUnread  new value for property <code>unread</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.setUnread = function(bUnread) { return new sap.m.ListItemBase(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ListItemBase.prototype.setVisible = function(bVisible) { return new sap.m.ListItemBase(); };


// ---- sap.m.ListMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ListMode.toString = function() { return ""; };

// ---- sap.m.ListSeparators --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ListSeparators.toString = function() { return ""; };

// ---- sap.m.ListType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ListType.toString = function() { return ""; };

// ---- sap.m.MessageBox --------------------------------------------------------------------------

/**
 * 
 * Displays an alert dialog with the given message and an OK button (no icons).
 * If a callback is given, it is called after the alert dialog has been closed
 * by the user via the OK button. The callback is called with the following signature:
 * </p><p>
 * <pre>
 *   function (oAction)
 * </pre>
 * </p><p>
 * where <code>oAction</code> can be either sap.m.MessageBox.Action.OK when the alert dialog is closed by tapping on the OK button 
 * 	or null when the alert dialog is closed by calling <code>sap.m.InstanceManager.closeAllDialogs()</code>.
 * </p><p>
 * The alert dialog opened by this method is processed asynchronously.
 * Applications have to use the <code>fnCallback</code> to continue work after the
 * user closed the alert dialog.
 * @param {string} sMessage Message to be displayed in the alert dialog
 * @param {function} [fnCallback] callback function to be called when the user closes the dialog
 * @param {string} [sTitle='Alert'] Title to be displayed in the alert dialog
 * @param {string} [sDialogId] ID to be used for the alert dialog. Intended for test scenarios, not recommended for productive apps
 * @public
 * @memberOf sap.m.MessageBox
 */
sap.m.MessageBox.alert = function(sMessage,fnCallback,sTitle,sDialogId) { return null; };

/**
 * 
 * Displays a confirmation dialog with the given message, no icon (will be provided later)
 * an OK button, and a Cancel button. If a callback is given, it is called after the
 * alert box has been closed by the user via one of the buttons.
 * The callback is called with the following signature
 * </p><p>
 * <pre>
 *   function(oAction)
 * </pre>
 * </p><p>
 * where oAction is set by one of the following three values:
 * 1. sap.m.MessageBox.Action.OK: OK (confirmed) button is tapped.
 * 2. sap.m.MessageBox.Action.Cancel: Cancel (unconfirmed) button is tapped.
 * 3. null: Confirm dialog is closed by Calling <code>sap.m.InstanceManager.closeAllDialogs()</code>
 * </p><p>
 * The confirmation dialog opened by this method is processed asynchronously.
 * Applications have to use the <code>fnCallback</code> to continue work after the
 * user closed the confirmation dialog
 * @param {string} sMessage Message to display in the confirmation dialog
 * @param {function} [fnCallback] Callback to be called when the user closes the dialog
 * @param {string} [sTitle='Confirmation'] Title to display in the confirmation dialog
 * @param {string} [sDialogId] ID to be used for the confirmation dialog. Intended for test scenarios, not recommended for productive apps
 * @public
 * @memberOf sap.m.MessageBox
 */
sap.m.MessageBox.confirm = function(sMessage,fnCallback,sTitle,sDialogId) { return null; };

/**
 * 
 * Creates and displays a sap.m.Dialog with type sap.m.DialogType.Message with the given text and buttons, and optionally other parts.
 * After the user has tapped a button, the <code>callback</code> function is invoked when given.
 * </p><p>
 * The only mandatory parameter is <code>sMessage</code>.
 * </p><p>
 * The created dialog is executed asynchronously. When it has been created and registered for rendering,
 * this function returns without waiting for a user reaction.
 * </p><p>
 * When applications have to react on the users choice, they have to provide a callback function and
 * postpone any reaction on the user choice until that callback is triggered.
 * </p><p>
 * The signature of the callback is
 * </p><p>
 *   function (oAction);
 * </p><p>
 * where <code>oAction</code> is the button that the user has tapped. For example, when the user has pressed the close button,
 * a sap.m.MessageBox.Action.Close is returned.
 * @param {string} sMessage The message to be displayed.
 * @param {sap.m.MessageBox.Icon} [oIcon=None] The icon to be displayed.
 * @param {string} [sTitle=''] The title of the message box.
 * @param {sap.m.MessageBox.Action|sap.m.MessageBox.Action[]|string|string[]} [vActions] Either a single action, or an array of two actions.
 *      If no action(s) are given, the single action MessageBox.Action.OK is taken as a default for the parameter. If more than two actions are given,
 *      only the first two actions are taken. Custom action string(s) can be provided, and then the translation of custom action string(s) needs to be done by the application.
 * @param {function} [fnCallback] Function to be called when the user has tapped a button or has closed the message box.
 * @param {string} [sDialogId] ID to be used for the dialog. Intended for test scenarios, not recommended for productive apps
 * @public
 * @memberOf sap.m.MessageBox
 */
sap.m.MessageBox.show = function(sMessage,oIcon,sTitle,vActions,fnCallback,sDialogId) { return null; };


// ---- sap.m.MessageBox.Action --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.MessageBox.Action.toString = function() { return ""; };

// ---- sap.m.MessageBox.Icon --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.MessageBox.Icon.toString = function() { return ""; };

// ---- sap.m.MessageToast --------------------------------------------------------------------------

/**
 * 
 * Creates and displays a simple message toast notification message with the given text, and optionally other options.
 * </p><p>
 * The only mandatory parameter is <code>sMessage</code>.
 * @param {string} sMessage The message to be displayed.
 * @param {object} [mOptions] Optionally other options.
 * @param {int} [mOptions.duration=3000] Time in milliseconds before the close animation starts. Needs to be a finite positive nonzero integer.
 * @param {sap.ui.core/CSSSize} [mOptions.width="15em"] The width of the message toast, this value can be provided in %, em, px and all possible CSS measures.
 * @param {sap.ui.core.Popup.Dock} [mOptions.my="center bottom"] Specifies which point of the message toast should be aligned.
 * @param {sap.ui.core.Popup.Dock} [mOptions.at="center bottom"] Specifies the point of the reference element to which the message toast should be aligned.
 * @param {string|sap.ui.core.Control|Element|jQuery} [mOptions.of=window] Specifies the reference element to which the message toast should be aligned, by default is aligned to the browser visual viewport.
 * @param {string} [mOptions.offset="0 0"] The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the message toast 10 pixels to the right).
 * @param {string} [mOptions.collision="fit fit"] Specifies how the position of the message toast should be adjusted in case it overflows the screen in some direction. Possible values “fit”, “flip”, “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none".
 * @param {function} [mOptions.onClose=null] Function to be called when the message toast closes.
 * @param {boolean} [mOptions.autoClose=true] Specify whether the message toast should close as soon as the end user touches the screen.
 * @param {string} [mOptions.animationTimingFunction="ease"] Describes how the close animation will progress. Possible values "ease", "linear", "ease-in", "ease-out", "ease-in-out". This feature is not supported in android and ie9 browsers.
 * @param {int} [mOptions.animationDuration=1000] Time in milliseconds that the close animation takes to complete. Needs to be a finite positive integer. For not animation set to 0. This feature is not supported in android and ie9 browsers.
 * @type void
 * @public
 * 
 * @memberOf sap.m.MessageToast
 */
sap.m.MessageToast.show = function(sMessage,mOptions) { return null; };


// ---- sap.m.NavContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new NavContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDefaultTransitionName defaultTransitionName} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPages pages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialPage initialPage} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.NavContainer#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.NavContainer#event:afterNavigate afterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The NavContainer control handles hierarchic navigation between Pages or other fullscreen controls.
 * </p><p>
 * All children of this control will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.NavContainer = function(sId,mSettings) {};
/**
 * 
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @event
 * @since 1.7.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.NavContainer.prototype.afterNavigate = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @event
 * @since 1.7.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.NavContainer.prototype.navigate = function(oControlEvent) { return null; };

/**
 * 
 * Adds a custom transition to the NavContainer type (not to a particular instance!). The transition is identified by a "name". Make sure to only use names that will not collide with transitions which may be added to the NavContainer later. A suggestion is to use the prefix "c_" or "_" for your custom transitions to ensure this.
 * </p><p>
 * "to" and "back" are the transition functions for the forward and backward navigation.
 * Both will be called with the following parameters:
 * - oFromPage: the Control which is currently being displayed by the NavContainer
 * - oToPage: the Control which should be displayed by the NavContainer after the transition
 * - fCallback: a function which MUST be called when the transition has completed
 * - oTransitionParameters: a data object that can be given by application code when triggering the transition by calling to() or back(); this object could give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration
 * </p><p>
 * The contract for "to" and "back" is that they may do an animation of their choice, but it should not take "too long". At the beginning of the transition the target page "oToPage" does have the CSS class "sapMNavItemHidden" which initially hides the target page (visibility:hidden). The transition can do any preparation (e.g. move that page out of the screen or make it transparent) and then should remove this CSS class.
 * After the animation the target page "oToPage" should cover the entire screen and the source page "oFromPage" should not be visible anymore. This page should then have the CSS class "sapMNavItemHidden".
 * For adding/removing this or other CSS classes, the transition can use the addStyleClass/removeStyleClass method:
 * oFromPage.addStyleClass("sapMNavItemHidden");
 * When the transition is complete, it MUST call the given fCallback method to inform the NavContainer that navigation has finished!
 * </p><p>
 * Hint: if the target page of your transition stays black on iPhone, try wrapping the animation start into a
 * setTimeout(..., 0)
 * block (delayed, but without waiting).
 * </p><p>
 * This method can be called on any NavContainer instance or statically on the sap.m.NavContainer type. However, the transition will always be registered for the type (and ALL instances), not for the single instance on which this method was invoked.
 * </p><p>
 * Returns the sap.m.NavContainer type if called statically, or "this" (to allow method chaining) if called on a particular NavContainer instance.
 * @param {string} 
 *         sName
 *         The name of the transition. This name can be used by the application to choose this transition when navigating "to()" or "back()": the "transitionName" parameter of "NavContainer.to()" corresponds to this name, the back() navigation will automatically use the same transition.
 * </p><p>
 * Make sure to only use names that will not collide with transitions which may be added to the NavContainer later. A suggestion is to use the prefix "c_" or "_" for your custom transitions to ensure this.
 * @param {object} 
 *         oTo
 *         The function which will be called by the NavContainer when the application navigates "to()", using this animation's name. The NavContainer instance is the "this" context within the animation function.
 * </p><p>
 * See the documentation of NavContainer.addCustomTransitions for more details about this function.
 * @param {object} 
 *         oBack
 *         The function which will be called by the NavContainer when the application navigates "back()" from a page where it had navigated to using this animation's name. The NavContainer instance is the "this" context within the animation function.
 * </p><p>
 * See the documentation of NavContainer.addCustomTransitions for more details about this function.
 * @type sap.m.NavContainer
 * @public
 */
sap.m.NavContainer.prototype.addCustomTransition = function(sName,oTo,oBack) { return new sap.m.NavContainer(); };

/**
 * 
 * Adds some page <code>oPage</code> 
 * to the aggregation named <code>pages</code>.
 * @param {sap.ui.core.Control}
 *            oPage the page to add; if empty, nothing is inserted
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.addPage = function(oPage) { return new sap.m.NavContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterNavigate' event of this <code>sap.m.NavContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.NavContainer</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.NavContainer</code>.<br/> itself.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.attachAfterNavigate = function(oData,fnFunction,oListener) { return new sap.m.NavContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.m.NavContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.NavContainer</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.NavContainer</code>.<br/> itself.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.m.NavContainer(); };

/**
 * 
 * Navigates back one level. If already on the initial page and there is no place to go back, nothing happens.
 * </p><p>
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
 * @param {object} 
 *         oBackData
 * @since 1.7.1 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 * @since 1.7.1 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.NavContainer
 * @public
 */
sap.m.NavContainer.prototype.back = function(oBackData,oTransitionParameters) { return new sap.m.NavContainer(); };

/**
 * 
 * Navigates back to the nearest previous page in the NavContainer history with the given ID. If there is no such page among the previous pages, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * </p><p>
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
 * @param {string} 
 *         sPageId
 *         The ID of the screen to which back navigation should happen. The nearest page with this ID among the previous pages in the history stack will be used.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the "backToPage" navigation. The event on the target page will contain this data object as "backData" property.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.NavContainer
 * @public
 * @since 1.7.2
 */
sap.m.NavContainer.prototype.backToPage = function(sPageId,oBackData,oTransitionParameters) { return new sap.m.NavContainer(); };

/**
 * 
 * Navigates back to the initial/top level (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * </p><p>
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the "backToTop" navigation. The event on the target page will contain this data object as "backData" property.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.NavContainer
 * @public
 * @since 1.7.1
 */
sap.m.NavContainer.prototype.backToTop = function(oBackData,oTransitionParameters) { return new sap.m.NavContainer(); };

/**
 * 
 * Destroys all the pages in the aggregation 
 * named <code>pages</code>.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.destroyPages = function() { return new sap.m.NavContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterNavigate' event of this <code>sap.m.NavContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.detachAfterNavigate = function(fnFunction,oListener) { return new sap.m.NavContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.m.NavContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.m.NavContainer(); };

/**
 * 
 * Creates a new subclass of class sap.m.NavContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.NavContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @protected
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.fireAfterNavigate = function(mArguments) { return new sap.m.NavContainer(); };

/**
 * 
 * Fire event navigate to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.fireNavigate = function(mArguments) { return false; };

/**
 * 
 * Returns the currently displayed page-level control. Note: it is not necessarily an instance of sap.m.Page, but it could also be a sap.ui.core.View, sap.m.Carousel, or whatever is aggregated.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.NavContainer.prototype.getCurrentPage = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>defaultTransitionName</code>.
 * The type of the transition/animation to apply when "to()" is called without defining a transition type to use. The default is "slide" on iOS and Android; on Windows Phone the default is "door". Other options are: "fade", "flip" and "show" - and the names of any registered custom transitions.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>defaultTransitionName</code>
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.getDefaultTransitionName = function() { return ""; };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
 * </p><p>
 * Default value is <code>'100%'</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.NavContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * This association can be used to define which page is displayed initially. If the given page does not exist or no page is given, the first page which has been added is considered as initial page.
 * This value should be set initially and not set/modified while the application is running.
 * </p><p>
 * This could be used not only for the initial display, but also if the user wants to navigate "up to top", so this page serves as a sort of "home/root page".
 * @return {string} Id of the element which is the current target of the <code>initialPage</code> association, or null
 * @public
 * 
 */
sap.m.NavContainer.prototype.getInitialPage = function() { return ""; };

/**
 * 
 * Returns the control with the given ID from the "pages" aggregation (if available).
 * @param {string} 
 *         sId
 *         The ID of the aggregated control to find.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.NavContainer.prototype.getPage = function(sId) { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>pages</code>.<br/>
 * The content entities between which this NavContainer navigates. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * </p><p>
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.NavContainer.prototype.getPages = function() { return new Array(); };

/**
 * 
 * Returns the previous page (the page from which the user drilled down to the current page with "to()").
 * Note: this is not the page which the user has seen before, but the page which is the target of the next "back()" navigation.
 * If there is no previous page, "undefined" is returned.
 * @type sap.ui.core.Control
 * @public
 * @since 1.7.1
 */
sap.m.NavContainer.prototype.getPreviousPage = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Whether the NavContainer is visible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.NavContainer.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
 * </p><p>
 * Default value is <code>'100%'</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.NavContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>pages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPage the page whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.NavContainer.prototype.indexOfPage = function(oPage) { return 0; };

/**
 * 
 * Inserts a page into the aggregation named <code>pages</code>.
 * @param {sap.ui.core.Control}
 *          oPage the page to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the page should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the page is inserted at 
 *             the last position        
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.insertPage = function(oPage,iIndex) { return new sap.m.NavContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>pages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.NavContainer.prototype.removeAllPages = function() { return new Array(); };

/**
 * 
 * Removes an page from the aggregation named <code>pages</code>.
 * @param {int | string | sap.ui.core.Control} vPage the page to remove or its index or id
 * @return {sap.ui.core.Control} the removed page or null
 * @public
 * 
 */
sap.m.NavContainer.prototype.removePage = function(vPage) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>defaultTransitionName</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDefaultTransitionName  new value for property <code>defaultTransitionName</code>
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * 
 */
sap.m.NavContainer.prototype.setDefaultTransitionName = function(sDefaultTransitionName) { return new sap.m.NavContainer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>'100%'</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.setHeight = function(sHeight) { return new sap.m.NavContainer(); };

/**
 * 
 * This association can be used to define which page is displayed initially. If the given page does not exist or no page is given, the first page which has been added is considered as initial page.
 * This value should be set initially and not set/modified while the application is running.
 * </p><p>
 * This could be used not only for the initial display, but also if the user wants to navigate "up to top", so this page serves as a sort of "home/root page".
 * @param {string | sap.ui.core.Control} vInitialPage 
 *    Id of an element which becomes the new target of this <code>initialPage</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.setInitialPage = function(vInitialPage) { return new sap.m.NavContainer(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.setVisible = function(bVisible) { return new sap.m.NavContainer(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>'100%'</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.NavContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.NavContainer.prototype.setWidth = function(sWidth) { return new sap.m.NavContainer(); };

/**
 * 
 * Navigates to the next page (with drill-down semantic) with the given (or default) animation. This creates a new history item inside the NavContainer and allows going back.
 * </p><p>
 * Available transitions currently include "slide" (default), "fade", "flip", and "show". None of these is currently making use of any given transitionParameters.
 * </p><p>
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given data object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property.
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * </p><p>
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 * @since 1.7.1 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * </p><p>
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 * @since 1.7.1 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * </p><p>
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.m.NavContainer
 * @public
 */
sap.m.NavContainer.prototype.to = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.m.NavContainer(); };


// ---- sap.m.NavContainerChild --------------------------------------------------------------------------

/**
 * 
 * This event is fired every time when the NavContainer has made this child control invisible. In case of animated transitions this 
 * event is fired after the transition finishes. This control is now no longer being displayed and not animated anymore.
 * @event
 * @param {sap.ui.core.Control} oEvent.srcControl the NavContainer firing the event
 * @public
 */
sap.m.NavContainerChild.AfterHide = function() { return null; };

/**
 * 
 * This event is fired every time when the NavContainer has made this child control visible. In case of animated transitions this 
 * event is fired after the transition finishes. This control is now being displayed and not animated anymore.
 * @event
 * @param {sap.ui.core.Control} oEvent.srcControl the NavContainer firing the event
 * @param {object} oEvent.data the data object which has been passed with the "to" navigation, or an empty object
 * @param {object} oEvent.backData the data object which has been passed with the back navigation, or an empty object
 * @public
 */
sap.m.NavContainerChild.AfterShow = function() { return null; };

/**
 * 
 * This event is fired before the NavContainer shows this child control for the first time.
 * @event
 * @param {sap.ui.core.Control} oEvent.srcControl the NavContainer firing the event
 * @param {object} oEvent.data the data object which has been passed with the "to" navigation, or an empty object
 * @param {object} oEvent.backData the data object which has been passed with the back navigation, or an empty object
 * @public
 */
sap.m.NavContainerChild.BeforeFirstShow = function() { return null; };

/**
 * 
 * This event is fired every time before the NavContainer hides this child control. In case of animated transitions this 
 * event is fired before the transition starts.
 * @event
 * @param {sap.ui.core.Control} oEvent.srcControl the NavContainer firing the event
 * @public
 */
sap.m.NavContainerChild.BeforeHide = function() { return null; };

/**
 * 
 * This event is fired every time before the NavContainer shows this child control. In case of animated transitions this 
 * event is fired before the transition starts.
 * @event
 * @param {sap.ui.core.Control} oEvent.srcControl the NavContainer firing the event
 * @param {object} oEvent.data the data object which has been passed with the "to" navigation, or an empty object
 * @param {object} oEvent.backData the data object which has been passed with the back navigation, or an empty object
 * @public
 */
sap.m.NavContainerChild.BeforeShow = function() { return null; };


// ---- sap.m.ObjectAttribute --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectAttribute.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getActive active} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ObjectAttribute#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This object holds value and fire action event if the text is active and clicked
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ObjectAttribute = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the text is active and the user taps or clicks on it 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object attributes' text to be used for positioning.
 * @public
 */
sap.m.ObjectAttribute.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.ObjectAttribute</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectAttribute</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the text is active and the user taps or clicks on it 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectAttribute</code>.<br/> itself.
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.ObjectAttribute</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Creates a new subclass of class sap.m.ObjectAttribute with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectAttribute.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object attributes' text to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ObjectAttribute.prototype.firePress = function(mArguments) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Getter for property <code>active</code>.
 * Indicates that the text is clickable
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>active</code>
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.getActive = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * The text of the attribute
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible object attribute is not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>active</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.setActive = function(bActive) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.setText = function(sText) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectAttribute.prototype.setVisible = function(bVisible) { return new sap.m.ObjectAttribute(); };


// ---- sap.m.ObjectHeader --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectHeader.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getIntro intro} : string</li>
 * <li>{@link #getIntroActive introActive} : boolean</li>
 * <li>{@link #getTitleActive titleActive} : boolean</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconActive iconActive} : boolean</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.m.ObjectAttribute[]</li>
 * <li>{@link #getFirstStatus firstStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getSecondStatus secondStatus} : sap.m.ObjectStatus</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ObjectHeader#event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:introPress introPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:iconPress iconPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * ObjectHeader contol is used to display brief information about object similar to the StandardListItem
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ObjectHeader = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the title icon is active and the user tap/click on it 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' icon to be used for positioning.
 * @public
 */
sap.m.ObjectHeader.prototype.iconPress = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the title is active and the user tap/click on it 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' intro to be used for positioning.
 * @public
 */
sap.m.ObjectHeader.prototype.introPress = function(oControlEvent) { return null; };

/**
 * 
 * Event is fired when the title is active and the user tap/click on it 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object header' title to be used for positioning.
 * @public
 */
sap.m.ObjectHeader.prototype.titlePress = function(oControlEvent) { return null; };

/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.addAttribute = function(oAttribute) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the title icon is active and the user tap/click on it 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.attachIconPress = function(oData,fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the title is active and the user tap/click on it 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.attachIntroPress = function(oData,fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the title is active and the user tap/click on it 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.attachTitlePress = function(oData,fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.destroyAttributes = function() { return new sap.m.ObjectHeader(); };

/**
 * 
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.destroyFirstStatus = function() { return new sap.m.ObjectHeader(); };

/**
 * 
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.destroySecondStatus = function() { return new sap.m.ObjectHeader(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.detachIconPress = function(fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.detachIntroPress = function(fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.detachTitlePress = function(fnFunction,oListener) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Creates a new subclass of class sap.m.ObjectHeader with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectHeader.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event iconPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' icon to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ObjectHeader.prototype.fireIconPress = function(mArguments) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Fire event introPress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' intro to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ObjectHeader.prototype.fireIntroPress = function(mArguments) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Fire event titlePress to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object header' title to be used for positioning.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.ObjectHeader.prototype.fireTitlePress = function(mArguments) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * The list of Object Attributes
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status shown on the right side of the attributes above the second status.
 * If it is not set the first attibute will expand to take the entire row.
 * @return {sap.m.ObjectStatus}
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getFirstStatus = function() { return new sap.m.ObjectStatus(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * Object header icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconActive</code>.
 * Indicates that the iconis clickable
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>iconActive</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getIconActive = function() { return false; };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>intro</code>.
 * Introductory text for the object header.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>intro</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getIntro = function() { return ""; };

/**
 * 
 * Getter for property <code>introActive</code>.
 * Indicates that the intro is clickable
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>introActive</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getIntroActive = function() { return false; };

/**
 * 
 * Getter for property <code>number</code>.
 * Number field
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>number</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getNumber = function() { return ""; };

/**
 * 
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getNumberUnit = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status shown on the right side of the attributes below the first status.
 * If it is not set the second attibute will expand to take the entire row.
 * @return {sap.m.ObjectStatus}
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getSecondStatus = function() { return new sap.m.ObjectStatus(); };

/**
 * 
 * Getter for property <code>title</code>.
 * title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>titleActive</code>.
 * Indicates that the title is clickable
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>titleActive</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getTitleActive = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible object headers are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.getVisible = function() { return false; };

/**
 * 
 * Checks for the provided <code>sap.m.ObjectAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.m.ObjectAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.removeAttribute = function(vAttribute) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Setter for the aggregated <code>firstStatus</code>.
 * @param oFirstStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setFirstStatus = function(oFirstStatus) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setIcon = function(sIcon) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>iconActive</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bIconActive  new value for property <code>iconActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setIconActive = function(bIconActive) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>intro</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setIntro = function(sIntro) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>introActive</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bIntroActive  new value for property <code>introActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setIntroActive = function(bIntroActive) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>number</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setNumber = function(sNumber) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>numberUnit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setNumberUnit = function(sNumberUnit) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for the aggregated <code>secondStatus</code>.
 * @param oSecondStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setSecondStatus = function(oSecondStatus) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setTitle = function(sTitle) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>titleActive</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bTitleActive  new value for property <code>titleActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setTitleActive = function(bTitleActive) { return new sap.m.ObjectHeader(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectHeader.prototype.setVisible = function(bVisible) { return new sap.m.ObjectHeader(); };


// ---- sap.m.ObjectIdentifier --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectIdentifier.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getBadgeNotes badgeNotes} : boolean</li>
 * <li>{@link #getBadgePeople badgePeople} : boolean</li>
 * <li>{@link #getBadgeAttachments badgeAttachments} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Control that displays properties that identify an object.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ObjectIdentifier = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.ObjectIdentifier with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectIdentifier.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>badgeAttachments</code>.
 * Indicates whether or not the attachments icon is displayed.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>badgeAttachments</code>
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.getBadgeAttachments = function() { return false; };

/**
 * 
 * Getter for property <code>badgeNotes</code>.
 * Indicates whether or not the notes icon is displayed.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>badgeNotes</code>
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.getBadgeNotes = function() { return false; };

/**
 * 
 * Getter for property <code>badgePeople</code>.
 * Indicates whether or not the address book icon is displayed.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>badgePeople</code>
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.getBadgePeople = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * The object text.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The object title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>badgeAttachments</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bBadgeAttachments  new value for property <code>badgeAttachments</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.setBadgeAttachments = function(bBadgeAttachments) { return new sap.m.ObjectIdentifier(); };

/**
 * 
 * Setter for property <code>badgeNotes</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bBadgeNotes  new value for property <code>badgeNotes</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.setBadgeNotes = function(bBadgeNotes) { return new sap.m.ObjectIdentifier(); };

/**
 * 
 * Setter for property <code>badgePeople</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bBadgePeople  new value for property <code>badgePeople</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.setBadgePeople = function(bBadgePeople) { return new sap.m.ObjectIdentifier(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.setText = function(sText) { return new sap.m.ObjectIdentifier(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectIdentifier.prototype.setTitle = function(sTitle) { return new sap.m.ObjectIdentifier(); };


// ---- sap.m.ObjectListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getIntro intro} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.m.ObjectAttribute[]</li>
 * <li>{@link #getFirstStatus firstStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getSecondStatus secondStatus} : sap.m.ObjectStatus</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The extended list item control
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ObjectListItem = function(sId,mSettings) {};
/**
 * 
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.addAttribute = function(oAttribute) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.destroyAttributes = function() { return new sap.m.ObjectListItem(); };

/**
 * 
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.destroyFirstStatus = function() { return new sap.m.ObjectListItem(); };

/**
 * 
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.destroySecondStatus = function() { return new sap.m.ObjectListItem(); };

/**
 * 
 * Creates a new subclass of class sap.m.ObjectListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>activeIcon</code>.
 * Icon displayed when the list item is active.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>attributes</code>.<br/>
 * List of attributes displayed below the title to the left of the status fields.
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getAttributes = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status text field shown on the right side of the attributes.
 * @return {sap.m.ObjectStatus}
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getFirstStatus = function() { return new sap.m.ObjectStatus(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * List item icon displayed to the left of the title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>intro</code>.
 * Introductory text for the list item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>intro</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getIntro = function() { return ""; };

/**
 * 
 * Getter for property <code>number</code>.
 * Number field
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>number</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getNumber = function() { return ""; };

/**
 * 
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getNumberUnit = function() { return ""; };

/**
 * 
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status text field shown on the right side of the attributes.
 * @return {sap.m.ObjectStatus}
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getSecondStatus = function() { return new sap.m.ObjectStatus(); };

/**
 * 
 * Getter for property <code>title</code>.
 * title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.m.ObjectAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.indexOfAttribute = function(oAttribute) { return 0; };

/**
 * 
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 * @param {sap.m.ObjectAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.insertAttribute = function(oAttribute,iIndex) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.removeAllAttributes = function() { return new Array(); };

/**
 * 
 * Removes an attribute from the aggregation named <code>attributes</code>.
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.removeAttribute = function(vAttribute) { return new sap.m.ObjectAttribute(); };

/**
 * 
 * Setter for property <code>activeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setActiveIcon = function(sActiveIcon) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for the aggregated <code>firstStatus</code>.
 * @param oFirstStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setFirstStatus = function(oFirstStatus) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setIcon = function(sIcon) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>intro</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setIntro = function(sIntro) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>number</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setNumber = function(sNumber) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>numberUnit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setNumberUnit = function(sNumberUnit) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for the aggregated <code>secondStatus</code>.
 * @param oSecondStatus {sap.m.ObjectStatus}
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setSecondStatus = function(oSecondStatus) { return new sap.m.ObjectListItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectListItem.prototype.setTitle = function(sTitle) { return new sap.m.ObjectListItem(); };


// ---- sap.m.ObjectNumber --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectNumber.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Control displays number and number unit properties in the table cell.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.ObjectNumber = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.ObjectNumber with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectNumber.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>emphasized</code>.
 * Whether the ObjectNumber should appear emphasized
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.getEmphasized = function() { return false; };

/**
 * 
 * Getter for property <code>number</code>.
 * Number field
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>number</code>
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.getNumber = function() { return ""; };

/**
 * 
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.getNumberUnit = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible object number is not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>emphasized</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.setEmphasized = function(bEmphasized) { return new sap.m.ObjectNumber(); };

/**
 * 
 * Setter for property <code>number</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.setNumber = function(sNumber) { return new sap.m.ObjectNumber(); };

/**
 * 
 * Setter for property <code>numberUnit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.setNumberUnit = function(sNumberUnit) { return new sap.m.ObjectNumber(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectNumber.prototype.setVisible = function(bVisible) { return new sap.m.ObjectNumber(); };


// ---- sap.m.ObjectStatus --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ObjectStatus.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Status information that may be either text with a value state, or an icon.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.ObjectStatus = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.ObjectStatus with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ObjectStatus.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>icon</code>.
 * Icon URI. This may be either an icon font or image path.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>state</code>.
 * Text value state.
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.getState = function() { return new sap.ui.core.ValueState(); };

/**
 * 
 * Getter for property <code>text</code>.
 * Text value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.getText = function() { return ""; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.setIcon = function(sIcon) { return new sap.m.ObjectStatus(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.ObjectStatus(); };

/**
 * 
 * Setter for property <code>state</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.setState = function(oState) { return new sap.m.ObjectStatus(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ObjectStatus.prototype.setText = function(sText) { return new sap.m.ObjectStatus(); };


// ---- sap.m.Page --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Page.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getShowNavButton showNavButton} : boolean (default: false)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getNavButtonText navButtonText} : string</li>
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.PageBackgroundDesign (default: sap.m.PageBackgroundDesign.Standard)</li>
 * <li>{@link #getNavButtonType navButtonType} : sap.m.ButtonType (default: sap.m.ButtonType.Back)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getCustomHeader customHeader} : sap.m.Bar</li>
 * <li>{@link #getFooter footer} : sap.m.Bar</li>
 * <li>{@link #getSubHeader subHeader} : sap.m.Bar</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Page#event:navButtonTap navButtonTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Page#event:navButtonPress navButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A page is a basic container for a mobile application screen. Usually one page is displayed at a time (in landscape mode or on tablets depending on the layout two pages might be displayed side-by-side).
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Page = function(sId,mSettings) {};
/**
 * 
 * this event is fired when Nav Button is pressed 
 * @event
 * @since 1.12.2
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Page.prototype.navButtonPress = function(oControlEvent) { return null; };

/**
 * 
 * this event is fired when Nav Button is tapped 
 * @event
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Page.prototype.navButtonTap = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.addContent = function(oContent) { return new sap.m.Page(); };

/**
 * 
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.addHeaderContent = function(oHeaderContent) { return new sap.m.Page(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'navButtonPress' event of this <code>sap.m.Page</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Page</code>.<br/> itself. 
 * </p><p>
 * this event is fired when Nav Button is pressed 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Page</code>.<br/> itself.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.m.Page.prototype.attachNavButtonPress = function(oData,fnFunction,oListener) { return new sap.m.Page(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'navButtonTap' event of this <code>sap.m.Page</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Page</code>.<br/> itself. 
 * </p><p>
 * this event is fired when Nav Button is tapped 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Page</code>.<br/> itself.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * 
 */
sap.m.Page.prototype.attachNavButtonTap = function(oData,fnFunction,oListener) { return new sap.m.Page(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.destroyContent = function() { return new sap.m.Page(); };

/**
 * 
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.destroyCustomHeader = function() { return new sap.m.Page(); };

/**
 * 
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.destroyFooter = function() { return new sap.m.Page(); };

/**
 * 
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.destroyHeaderContent = function() { return new sap.m.Page(); };

/**
 * 
 * Destroys the subHeader in the aggregation 
 * named <code>subHeader</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.destroySubHeader = function() { return new sap.m.Page(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'navButtonPress' event of this <code>sap.m.Page</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * 
 */
sap.m.Page.prototype.detachNavButtonPress = function(fnFunction,oListener) { return new sap.m.Page(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'navButtonTap' event of this <code>sap.m.Page</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * 
 */
sap.m.Page.prototype.detachNavButtonTap = function(fnFunction,oListener) { return new sap.m.Page(); };

/**
 * 
 * Creates a new subclass of class sap.m.Page with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Page.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event navButtonPress to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @protected
 * @since 1.12.2
 * 
 */
sap.m.Page.prototype.fireNavButtonPress = function(mArguments) { return new sap.m.Page(); };

/**
 * 
 * Fire event navButtonTap to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * 
 */
sap.m.Page.prototype.fireNavButtonTap = function(mArguments) { return new sap.m.Page(); };

/**
 * 
 * Getter for property <code>backgroundDesign</code>.
 * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
 * </p><p>
 * Default value is <code>Standard</code>
 * @return {sap.m.PageBackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * 
 */
sap.m.Page.prototype.getBackgroundDesign = function() { return new sap.m.PageBackgroundDesign(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of this page
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Page.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>customHeader</code>.<br/>
 * The (optional) custom header of this page.
 * Use this aggregation only when a custom header is constructed where the default header consisting of title text + nav button is not sufficient.
 * If this aggregation is set, the simple properties "title", "showNavButton", "NavButtonText" and "icon" are not used.
 * @return {sap.m.Bar}
 * @public
 * 
 */
sap.m.Page.prototype.getCustomHeader = function() { return new sap.m.Bar(); };

/**
 * 
 * Getter for property <code>enableScrolling</code>.
 * Whether the Page takes special measures to make page content scrollable and keep headers fixed.
 * If set to false, there will be no scrolling at all; for performance reasons this is highly recommended when scrolling is not needed.
 * </p><p>
 * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
 * </p><p>
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * 
 */
sap.m.Page.prototype.getEnableScrolling = function() { return false; };

/**
 * 
 * Getter for aggregation <code>footer</code>.<br/>
 * The (optional) footer of this page. It is always located at the bottom of the page
 * @return {sap.m.Bar}
 * @public
 * 
 */
sap.m.Page.prototype.getFooter = function() { return new sap.m.Bar(); };

/**
 * 
 * Getter for aggregation <code>headerContent</code>.<br/>
 * Controls to added to the right side of the page header. Usually an application would use Button controls and limit the number to one when the application needs to run on smartphones. There is no automatic overflow handling when the space is insufficient.
 * When a customHeader is used, this aggregation will be ignored.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Page.prototype.getHeaderContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * the icon that is rendered in the page header bar in non-iOS platforms. This property is theme-dependent and might not have any effect in a certain theme.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.Page.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>navButtonText</code>.
 * The text of the nav button when running in iOS (if shown) in case it deviates from the default, which is "Back". This property is theme-dependent and might not have any effect in a certain theme.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>navButtonText</code>
 * @public
 * 
 */
sap.m.Page.prototype.getNavButtonText = function() { return ""; };

/**
 * 
 * Getter for property <code>navButtonType</code>.
 * This property is used to set the appearance of the NavButton. By default when showNavButton is set to true, a back button will be shown in iOS and an up button in other platforms. In case you want to show a normal button in the left header, you can set the value to "Default".
 * </p><p>
 * Default value is <code>Back</code>
 * @return {sap.m.ButtonType} the value of property <code>navButtonType</code>
 * @public
 * @since 1.12
 * 
 */
sap.m.Page.prototype.getNavButtonType = function() { return new sap.m.ButtonType(); };

/**
 * 
 * Getter for property <code>showFooter</code>.
 * Whether this page shall have a footer
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showFooter</code>
 * @public
 * @since 1.13.1
 * 
 */
sap.m.Page.prototype.getShowFooter = function() { return false; };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * Whether this page shall have a header.
 * If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.m.Page.prototype.getShowHeader = function() { return false; };

/**
 * 
 * Getter for property <code>showNavButton</code>.
 * A nav button will be rendered on the left area of header bar if this property is set to true.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showNavButton</code>
 * @public
 * 
 */
sap.m.Page.prototype.getShowNavButton = function() { return false; };

/**
 * 
 * Getter for aggregation <code>subHeader</code>.<br/>
 * a subHeader will be rendered directly under the header
 * @return {sap.m.Bar}
 * @public
 * 
 */
sap.m.Page.prototype.getSubHeader = function() { return new sap.m.Bar(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title text appearing in the page header bar.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.Page.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Page.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Page.prototype.indexOfHeaderContent = function(oHeaderContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.insertContent = function(oContent,iIndex) { return new sap.m.Page(); };

/**
 * 
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 * @param {sap.ui.core.Control}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.insertHeaderContent = function(oHeaderContent,iIndex) { return new sap.m.Page(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Page.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Page.prototype.removeAllHeaderContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.Page.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 * @param {int | string | sap.ui.core.Control} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerContent or null
 * @public
 * 
 */
sap.m.Page.prototype.removeHeaderContent = function(vHeaderContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Scrolls to the given position. Only available if enableScrolling is set to "true".
 * @param {int} 
 *         iY
 *         The vertical pixel position to scroll to. Scrolling down happens with positive values.
 * @param {int} 
 *         iTime
 *         The duration of animated scrolling. To scroll immediately without animation, give 0 as value. 0 is also the default value, when this optional parameter is omitted.
 * @type sap.m.Page
 * @public
 */
sap.m.Page.prototype.scrollTo = function(iY,iTime) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>backgroundDesign</code>.
 * </p><p>
 * Default value is <code>Standard</code> 
 * @param {sap.m.PageBackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setBackgroundDesign = function(oBackgroundDesign) { return new sap.m.Page(); };

/**
 * 
 * Setter for the aggregated <code>customHeader</code>.
 * @param oCustomHeader {sap.m.Bar}
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setCustomHeader = function(oCustomHeader) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>enableScrolling</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableScrolling  new value for property <code>enableScrolling</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setEnableScrolling = function(bEnableScrolling) { return new sap.m.Page(); };

/**
 * 
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.m.Bar}
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setFooter = function(oFooter) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setIcon = function(sIcon) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>navButtonText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNavButtonText  new value for property <code>navButtonText</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setNavButtonText = function(sNavButtonText) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>navButtonType</code>.
 * </p><p>
 * Default value is <code>Back</code> 
 * @param {sap.m.ButtonType} oNavButtonType  new value for property <code>navButtonType</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.Page.prototype.setNavButtonType = function(oNavButtonType) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>showFooter</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowFooter  new value for property <code>showFooter</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * 
 */
sap.m.Page.prototype.setShowFooter = function(bShowFooter) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setShowHeader = function(bShowHeader) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>showNavButton</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowNavButton  new value for property <code>showNavButton</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setShowNavButton = function(bShowNavButton) { return new sap.m.Page(); };

/**
 * 
 * Setter for the aggregated <code>subHeader</code>.
 * @param oSubHeader {sap.m.Bar}
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setSubHeader = function(oSubHeader) { return new sap.m.Page(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Page.prototype.setTitle = function(sTitle) { return new sap.m.Page(); };


// ---- sap.m.PageBackgroundDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.PageBackgroundDesign.toString = function() { return ""; };

// ---- sap.m.PlacementType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.PlacementType.toString = function() { return ""; };

// ---- sap.m.PopinDisplay --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.PopinDisplay.toString = function() { return ""; };

// ---- sap.m.Popover --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Popover.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Right)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getOffsetX offsetX} : int (default: 0)</li>
 * <li>{@link #getOffsetY offsetY} : int (default: 0)</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentHeight contentHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getCustomHeader customHeader} : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLeftButton leftButton} : string | sap.m.Button</li>
 * <li>{@link #getRightButton rightButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Popover#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Popover#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Popover is to present information temporarily but in a way that does not take over the entire screen. The popover content is layered on top of your existing content and it remains visible until the user taps outside of the popover when modal is set to false or you explicitly dismiss it when modal is set to true. The switching between modal and non-modal can also be done when the popover is already opened.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Popover = function(sId,mSettings) {};
/**
 * 
 * This event will be fired after the popover is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
sap.m.Popover.prototype.afterClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired after the popover is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
sap.m.Popover.prototype.afterOpen = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the popover is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
sap.m.Popover.prototype.beforeClose = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired before the popover is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy This refers to the control which opens the popover.
 * @public
 */
sap.m.Popover.prototype.beforeOpen = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.addContent = function(oContent) { return new sap.m.Popover(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the popover is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.attachAfterClose = function(oData,fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 * </p><p>
 * This event will be fired after the popover is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.attachAfterOpen = function(oData,fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the popover is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.attachBeforeClose = function(oData,fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.Popover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Popover</code>.<br/> itself. 
 * </p><p>
 * This event will be fired before the popover is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Popover</code>.<br/> itself.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.attachBeforeOpen = function(oData,fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Closes the popover when it's already opened.
 * @public
 */
sap.m.Popover.prototype.close = function() { return null; };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.destroyContent = function() { return new sap.m.Popover(); };

/**
 * 
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.destroyCustomHeader = function() { return new sap.m.Popover(); };

/**
 * 
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.destroyFooter = function() { return new sap.m.Popover(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.Popover</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.detachAfterClose = function(fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.Popover</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.detachAfterOpen = function(fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.Popover</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.detachBeforeClose = function(fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.Popover</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.detachBeforeOpen = function(fnFunction,oListener) { return new sap.m.Popover(); };

/**
 * 
 * Creates a new subclass of class sap.m.Popover with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Popover.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterClose to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Popover.prototype.fireAfterClose = function(mArguments) { return new sap.m.Popover(); };

/**
 * 
 * Fire event afterOpen to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Popover.prototype.fireAfterOpen = function(mArguments) { return new sap.m.Popover(); };

/**
 * 
 * Fire event beforeClose to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Popover.prototype.fireBeforeClose = function(mArguments) { return new sap.m.Popover(); };

/**
 * 
 * Fire event beforeOpen to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> This refers to the control which opens the popover.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Popover.prototype.fireBeforeOpen = function(mArguments) { return new sap.m.Popover(); };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content inside the popover.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.Popover.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>contentHeight</code>.
 * Set the height of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>contentHeight</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.m.Popover.prototype.getContentHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>contentWidth</code>.
 * Set the width of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @since 1.9.0
 * 
 */
sap.m.Popover.prototype.getContentWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>customHeader</code>.<br/>
 * Any control that needed to be displayed in the header area. When this is set, the showHeader property is ignored, and only this customHeader is shown on the top of popover.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.Popover.prototype.getCustomHeader = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>enableScrolling</code>.
 * This property indicates if user can scroll vertically inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work propertly.
 * </p><p>
 * Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getEnableScrolling = function() { return false; };

/**
 * 
 * Getter for aggregation <code>footer</code>.<br/>
 * This is optional footer which is shown on the bottom of the popover.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.Popover.prototype.getFooter = function() { return new sap.ui.core.Control(); };

/**
 * 
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @return {string} Id of the element which is the current target of the <code>leftButton</code> association, or null
 * @public
 * 
 */
sap.m.Popover.prototype.getLeftButton = function() { return ""; };

/**
 * 
 * Getter for property <code>modal</code>.
 * If the popover will not be closed when tapping outside the popover. It also blocks any interaction with the background. The default value is false.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getModal = function() { return false; };

/**
 * 
 * Getter for property <code>offsetX</code>.
 * The offset for the popover placement in the x axis. It's with unit pixel.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>offsetX</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getOffsetX = function() { return 0; };

/**
 * 
 * Getter for property <code>offsetY</code>.
 * The offset for the popover placement in the y axis. It's with unit pixel.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>offsetY</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getOffsetY = function() { return 0; };

/**
 * 
 * Getter for property <code>placement</code>.
 * This is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. The default value is sap.m.PlacementType.Right. Setting this property while popover is open won't cause any rerendering of the popover, but it will take effect when it's opened again.
 * </p><p>
 * Default value is <code>Right</code>
 * @return {sap.m.PlacementType} the value of property <code>placement</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getPlacement = function() { return new sap.m.PlacementType(); };

/**
 * 
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored.
 * @return {string} Id of the element which is the current target of the <code>rightButton</code> association, or null
 * @public
 * 
 */
sap.m.Popover.prototype.getRightButton = function() { return ""; };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * If a header should be shown at the top of the popover.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getShowHeader = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * Title text appears in the header. This property will be ignored when showHeader is set to false.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.Popover.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Popover.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.insertContent = function(oContent,iIndex) { return new sap.m.Popover(); };

/**
 * 
 * The method checks if the Popover is open. It returns true when the Popover is currently open (this includes opening and closing animations), otherwise it returns false.
 * @type boolean
 * @public
 * @since 1.9.1
 */
sap.m.Popover.prototype.isOpen = function() { return false; };

/**
 * 
 * Opens the popover and set the popover position according to the {placement} property
 * around the {oControl} parameter.
 * @param {object} oControl The control to which the popover is aligned based on the {placement} property
 * @public
 */
sap.m.Popover.prototype.openBy = function(oControl,bSkipInstanceManager) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Popover.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.Popover.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>contentHeight</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sContentHeight  new value for property <code>contentHeight</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.m.Popover.prototype.setContentHeight = function(sContentHeight) { return new sap.m.Popover(); };

/**
 * 
 * Setter for property <code>contentWidth</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * 
 */
sap.m.Popover.prototype.setContentWidth = function(sContentWidth) { return new sap.m.Popover(); };

/**
 * 
 * Setter for the aggregated <code>customHeader</code>.
 * @param oCustomHeader {sap.ui.core.Control}
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setCustomHeader = function(oCustomHeader) { return new sap.m.Popover(); };

/**
 * 
 * Setter for property <code>enableScrolling</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableScrolling  new value for property <code>enableScrolling</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setEnableScrolling = function(bEnableScrolling) { return new sap.m.Popover(); };

/**
 * 
 * Setter for the aggregated <code>footer</code>.
 * @param oFooter {sap.ui.core.Control}
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setFooter = function(oFooter) { return new sap.m.Popover(); };

/**
 * 
 * The setter of the cancelButton. If you want to show a cancel button in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setLeftButton = function(oButton) { return null; };

/**
 * 
 * Setter for property <code>offsetX</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iOffsetX  new value for property <code>offsetX</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setOffsetX = function(iOffsetX) { return new sap.m.Popover(); };

/**
 * 
 * Setter for property <code>offsetY</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iOffsetY  new value for property <code>offsetY</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setOffsetY = function(iOffsetY) { return new sap.m.Popover(); };

/**
 * 
 * Set the placement of the popover.
 * @public
 */
sap.m.Popover.prototype.setPlacement = function(sPlacement) { return null; };

/**
 * 
 * The setter of the doneButton. If you want to show a done button in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setRightButton = function(oButton) { return null; };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.Popover} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Popover.prototype.setShowHeader = function(bShowHeader) { return new sap.m.Popover(); };

/**
 * 
 * The setter of the title property. If you want to show a header in the popover, don't forget to
 * set the {showHeader} to true.
 * @public
 */
sap.m.Popover.prototype.setTitle = function(sTitle) { return null; };


// ---- sap.m.ProgressIndicator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ProgressIndicator.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getBarColor barColor} : sap.ui.core.BarColor (default: sap.ui.core.BarColor.NEUTRAL)</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: '0%')</li>
 * <li>{@link #getPercentValue percentValue} : float (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Shows the progress of a process in a graphical way. To indicate the progress, the inside of the ProgressIndicator is filled with a color.
 * Additionally, a user defined string can be displayed on the ProgressIndicator.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.1
 * 
 */
sap.m.ProgressIndicator = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.ProgressIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ProgressIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>barColor</code>.
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 * </p><p>
 * Default value is <code>NEUTRAL</code>
 * @return {sap.ui.core.BarColor} the value of property <code>barColor</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getBarColor = function() { return new sap.ui.core.BarColor(); };

/**
 * 
 * Getter for property <code>displayValue</code>.
 * The text value to be displayed in the bar.
 * </p><p>
 * Default value is <code>0%</code>
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getDisplayValue = function() { return ""; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>percentValue</code>.
 * The numerical value for the displayed length of the progress bar.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>percentValue</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getPercentValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>showValue</code>.
 * Specifies whether the current value shall be rendered inside the bar.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showValue</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getShowValue = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the control.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>barColor</code>.
 * </p><p>
 * Default value is <code>NEUTRAL</code> 
 * @param {sap.ui.core.BarColor} oBarColor  new value for property <code>barColor</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setBarColor = function(oBarColor) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>displayValue</code>.
 * </p><p>
 * Default value is <code>0%</code> 
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setEnabled = function(bEnabled) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>percentValue</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fPercentValue  new value for property <code>percentValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setPercentValue = function(fPercentValue) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>showValue</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowValue  new value for property <code>showValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setShowValue = function(bShowValue) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setVisible = function(bVisible) { return new sap.m.ProgressIndicator(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ProgressIndicator.prototype.setWidth = function(sWidth) { return new sap.m.ProgressIndicator(); };


// ---- sap.m.PullToRefresh --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new PullToRefresh.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getShowIcon showIcon} : boolean (default: false)</li>
 * <li>{@link #getCustomIcon customIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.PullToRefresh#event:refresh refresh} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * PullToRefresh control. Put it as the first control in contents of a scroll container or a scrollable page. Do not place it into a page with disabled scrolling.
 * On touch devices it gets hidden by default and when the user pulls down the page far enough, it gets visible and triggers the "refresh" event.
 * In non-touch browsers where scrollbars are used for scrolling, it is always visible and triggers the "refresh" event when clicked.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.9.2
 * 
 */
sap.m.PullToRefresh = function(sId,mSettings) {};
/**
 * 
 * Event indicates that the user has requested new data 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.PullToRefresh.prototype.refresh = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'refresh' event of this <code>sap.m.PullToRefresh</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.PullToRefresh</code>.<br/> itself. 
 * </p><p>
 * Event indicates that the user has requested new data 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.PullToRefresh</code>.<br/> itself.
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.attachRefresh = function(oData,fnFunction,oListener) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'refresh' event of this <code>sap.m.PullToRefresh</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.detachRefresh = function(fnFunction,oListener) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Creates a new subclass of class sap.m.PullToRefresh with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.PullToRefresh.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event refresh to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.PullToRefresh.prototype.fireRefresh = function(mArguments) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Getter for property <code>customIcon</code>.
 * Provide a URI to a custom icon image to replace the SAP logo. Large images are scaled down to max 50px height.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>customIcon</code>
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.getCustomIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>description</code>.
 * Optional description. May be used to inform a user, for example, when the list has been updated last time.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>showIcon</code>.
 * Set to true to display an icon/logo. Icon must be set either in the customIcon property or in the CSS theme for the PullToRefresh control.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showIcon</code>
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.getShowIcon = function() { return false; };

/**
 * 
 * Hides the control and resets it to the normal state. In non-touch environments the control is not hidden.
 * @type void
 * @public
 */
sap.m.PullToRefresh.prototype.hide = function() { return null; };

/**
 * 
 * Setter for property <code>customIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sCustomIcon  new value for property <code>customIcon</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.setCustomIcon = function(sCustomIcon) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.setDescription = function(sDescription) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.PullToRefresh(); };

/**
 * 
 * Setter for property <code>showIcon</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowIcon  new value for property <code>showIcon</code>
 * @return {sap.m.PullToRefresh} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.PullToRefresh.prototype.setShowIcon = function(bShowIcon) { return new sap.m.PullToRefresh(); };


// ---- sap.m.RadioButton --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new RadioButton.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getGroupName groupName} : string (default: 'sapMRbDefaultGroup')</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getActiveHandling activeHandling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.RadioButton#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Generally, you would create at least two radio button controls which should have the same GroupName;
 * by this, you provide a limited choice for the user. Triggers an Event when User makes a change.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.RadioButton = function(sId,mSettings) {};
/**
 * 
 * Event is triggered when the user makes a change on the radio button (selecting or unselecting it). 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.selected Checks whether the RadioButton is active or not.
 * @public
 */
sap.m.RadioButton.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.RadioButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.RadioButton</code>.<br/> itself. 
 * </p><p>
 * Event is triggered when the user makes a change on the radio button (selecting or unselecting it). 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.RadioButton</code>.<br/> itself.
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.m.RadioButton(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.RadioButton</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.detachSelect = function(fnFunction,oListener) { return new sap.m.RadioButton(); };

/**
 * 
 * Creates a new subclass of class sap.m.RadioButton with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.RadioButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'selected' of type <code>boolean</code> Checks whether the RadioButton is active or not.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.RadioButton.prototype.fireSelect = function(mArguments) { return new sap.m.RadioButton(); };

/**
 * 
 * Getter for property <code>activeHandling</code>.
 * this is a flag to switch on activeHandling, when it is switch
 * ed off, there will not be visual changes on active state. Default value is 'true'
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>activeHandling</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getActiveHandling = function() { return false; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Disabled controls are displayed in another color.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>groupName</code>.
 * Name of the radio button group the current radio button belongs to. You can define a new name for the group.
 * If no new name is specified, this radio button belongs to the sapMRbDefaultGroup per default. Default behavior of a radio button in a group is that when one of the radio buttons in a group is selected, all others are unselected.
 * </p><p>
 * Default value is <code>'sapMRbDefaultGroup'</code>
 * @return {string} the value of property <code>groupName</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getGroupName = function() { return ""; };

/**
 * 
 * Getter for property <code>selected</code>.
 * Specifies the select state of the radio button
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the RadioButton
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible radio buttons are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Width of Label
 * </p><p>
 * Default value is <code>''</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.RadioButton.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>activeHandling</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bActiveHandling  new value for property <code>activeHandling</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setActiveHandling = function(bActiveHandling) { return new sap.m.RadioButton(); };

/**
 * 
 * Method to set a RadioButton's state to active or inactive.
 * @param {boolean} 
 *         bActive
 *         boolean to set the active state to true or false
 * @type void
 * @public
 */
sap.m.RadioButton.prototype.setActiveState = function(bActive) { return null; };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setEnabled = function(bEnabled) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>groupName</code>.
 * </p><p>
 * Default value is <code>'sapMRbDefaultGroup'</code> 
 * @param {string} sGroupName  new value for property <code>groupName</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setGroupName = function(sGroupName) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setSelected = function(bSelected) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setText = function(sText) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setTextDirection = function(oTextDirection) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setVisible = function(bVisible) { return new sap.m.RadioButton(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.RadioButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RadioButton.prototype.setWidth = function(sWidth) { return new sap.m.RadioButton(); };


// ---- sap.m.RatingIndicator --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new RatingIndicator.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 5)</li>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getIconSize iconSize} : sap.ui.core.CSSSize (default: '2rem')</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getIconUnselected iconUnselected} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getVisualMode visualMode} : sap.m.RatingIndicatorVisualMode (default: sap.m.RatingIndicatorVisualMode.Half)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.RatingIndicator#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.RatingIndicator#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Is used to rate content. The amount of rating symbols can be specified, as well as the URIs to the
 * image icons which shall be used as rating symbols. When the user performs a rating, an event is fired.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.14
 * 
 */
sap.m.RatingIndicator = function(sId,mSettings) {};
/**
 * 
 * The event is fired when the user has done a rating. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.value The rated value
 * @public
 */
sap.m.RatingIndicator.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * This event is triggered during the dragging period, each time the rating value changes. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {float} oControlEvent.getParameters.value The current value of the rating after a live change event.
 * @public
 */
sap.m.RatingIndicator.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.addAriaDescribedBy = function(vAriaDescribedBy) { return new sap.m.RatingIndicator(); };

/**
 * 
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.RatingIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.RatingIndicator</code>.<br/> itself. 
 * </p><p>
 * The event is fired when the user has done a rating. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.RatingIndicator</code>.<br/> itself.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.RatingIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.RatingIndicator</code>.<br/> itself. 
 * </p><p>
 * This event is triggered during the dragging period, each time the rating value changes. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.RatingIndicator</code>.<br/> itself.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Binder for property <code>value</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.bindValue = function(sPath,fnFormatter,sMode) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.RatingIndicator</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.RatingIndicator</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Creates a new subclass of class sap.m.RatingIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.RatingIndicator.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>int</code> The rated value</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.RatingIndicator.prototype.fireChange = function(mArguments) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Fire event liveChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the rating after a live change event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.RatingIndicator.prototype.fireLiveChange = function(mArguments) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * @return {string[]}
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getAriaDescribedBy = function() { return new Array(); };

/**
 * 
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * @return {string[]}
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Value "true" is required to let the user rate with this control. It is recommended to set this parameter to "false" for the "Small" size which is meant for indicating a value only
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>iconHovered</code>.
 * The URI to the icon font icon or image that will be displayed for hovered rating symbols. A star icon will be used if the property is not set
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getIconHovered = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSelected</code>.
 * The URI to the icon font icon or image that will be displayed for selected rating symbols. A star icon will be used if the property is not set
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSize</code>.
 * The Size of the image or icon to be displayed in unit. Please be sure that the size is corresponding to a full pixel value as some browsers don't support subpixel calculations.
 * </p><p>
 * Default value is <code>2rem</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>iconSize</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getIconSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>iconUnselected</code>.
 * The URI to the icon font icon or image that will be displayed for all unselected rating symbols. A star icon will be used if the property is not set
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconUnselected</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getIconUnselected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>maxValue</code>.
 * The number of displayed rating symbols
 * </p><p>
 * Default value is <code>5</code>
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getMaxValue = function() { return 0; };

/**
 * 
 * Getter for property <code>value</code>.
 * The indicated value of the rating
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>visible</code>.
 * If set to invisible, the control is not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>visualMode</code>.
 * Defines how float values are visualized: Full, Half (see enumeration RatingIndicatorVisualMode)
 * </p><p>
 * Default value is <code>Half</code>
 * @return {sap.m.RatingIndicatorVisualMode} the value of property <code>visualMode</code>
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.getVisualMode = function() { return new sap.m.RatingIndicatorVisualMode(); };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.removeAllAriaDescribedBy = function() { return new Array(); };

/**
 * 
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * 
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.removeAriaDescribedBy = function(vAriaDescribedBy) { return ""; };

/**
 * 
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return ""; };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.setEnabled = function(bEnabled) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Sets the hovered icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconHovered = function(fValue) { return null; };

/**
 * 
 * Sets the selected icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconSelected = function(fValue) { return null; };

/**
 * 
 * Setter for property <code>iconSize</code>.
 * </p><p>
 * Default value is <code>2rem</code> 
 * @param {sap.ui.core.CSSSize} sIconSize  new value for property <code>iconSize</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.setIconSize = function(sIconSize) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Sets the unselected icon without rerendering the control
 * @param {sap.ui.core/URI} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setIconUnselected = function(fValue) { return null; };

/**
 * 
 * Setter for property <code>maxValue</code>.
 * </p><p>
 * Default value is <code>5</code> 
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.setMaxValue = function(iMaxValue) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Sets the rating value. The method is automatically checking whether the value is in the valid range of 0-{maxValue} and if it is a valid number
 * @param {float} fValue the rating value to be set
 * @returns {this} an instance of the rating control for chaining
 * @overwrite
 * @public
 */
sap.m.RatingIndicator.prototype.setValue = function(fValue) { return null; };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.setVisible = function(bVisible) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Setter for property <code>visualMode</code>.
 * </p><p>
 * Default value is <code>Half</code> 
 * @param {sap.m.RatingIndicatorVisualMode} oVisualMode  new value for property <code>visualMode</code>
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.setVisualMode = function(oVisualMode) { return new sap.m.RatingIndicator(); };

/**
 * 
 * Unbinder for property <code>value</code>.
 * @return {sap.m.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.RatingIndicator.prototype.unbindValue = function() { return new sap.m.RatingIndicator(); };


// ---- sap.m.RatingIndicatorVisualMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.RatingIndicatorVisualMode.toString = function() { return ""; };

// ---- sap.m.ScreenSize --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.ScreenSize.toString = function() { return ""; };

// ---- sap.m.ScrollContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ScrollContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHorizontal horizontal} : boolean (default: true)</li>
 * <li>{@link #getVertical vertical} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ScrollContainer is a control that can display arbitrary content within a limited screen area and provides touch scrolling to make all content accessible.
 * </p><p>
 * Note that it is not recommended to have nested scrolling areas that scroll into the same direction (e.g. a ScrollContainer that scrolls vertically inside a Page control with scrolling enabled). This is currently not considered a valid use-case of a good UI and the behavior will feel wrong.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.ScrollContainer = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.addContent = function(oContent) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.destroyContent = function() { return new sap.m.ScrollContainer(); };

/**
 * 
 * Creates a new subclass of class sap.m.ScrollContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.ScrollContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the ScrollContainer.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the ScrollContainer.
 * By default the height equals the content height. If only horizontal scrolling is used, do not set the height or make sure the height is always larger than the height of the content.
 * </p><p>
 * Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>horizontal</code>.
 * Whether horizontal scrolling should be possible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>horizontal</code>
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getHorizontal = function() { return false; };

/**
 * 
 * Getter for property <code>vertical</code>.
 * Whether vertical scrolling should be possible.
 * </p><p>
 * Note that this is off by default because typically a Page is used as fullscreen element which can handle vertical scrolling. If this is not the case and vertical scrolling is required, this flag needs to be set to "true".
 * Important: it is not supported to have nested controls that both enable scrolling into the same dimension.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>vertical</code>
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getVertical = function() { return false; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible scroll containers are not rendered
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the ScrollContainer.
 * If not set, it consumes the complete available width, behaving like normal HTML block elements. If only vertical scrolling is enabled, make sure the content always fits or wraps.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Inserts a content into the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.insertContent = function(oContent,iIndex) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Scrolls to the given position.
 * When called while the control is not rendered (yet), the scrolling position is still applied, but there is no animation.
 * @param {int} 
 *         iX
 *         The horizontal pixel position to scroll to.
 * Scrolling to the right happens with positive values.
 * If only vertical scrolling is enabled, give 0 as value.
 * @param {int} 
 *         iY
 *         The vertical pixel position to scroll to.
 * Scrolling down happens with positive values.
 * If only horizontal scrolling is enabled, give 0 as value.
 * @param {int} 
 *         iTime
 *         The duration of animated scrolling.
 * To scroll immediately without animation, give 0 as value. 0 is also the default value, when this optional parameter is omitted.
 * @type sap.m.ScrollContainer
 * @public
 */
sap.m.ScrollContainer.prototype.scrollTo = function(iX,iY,iTime) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.setHeight = function(sHeight) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Setter for property <code>horizontal</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bHorizontal  new value for property <code>horizontal</code>
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.setHorizontal = function(bHorizontal) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Setter for property <code>vertical</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bVertical  new value for property <code>vertical</code>
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.setVertical = function(bVertical) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.setVisible = function(bVisible) { return new sap.m.ScrollContainer(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.ScrollContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.ScrollContainer.prototype.setWidth = function(sWidth) { return new sap.m.ScrollContainer(); };


// ---- sap.m.SearchField --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SearchField.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getShowMagnifier showMagnifier} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SearchField#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SearchField#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Enables users to input a search string.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.SearchField = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 * @event
 * @since 1.9.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.newValue Current search string.
 * @public
 */
sap.m.SearchField.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Event which is fired when the user triggers a search. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.query The search query string.
 * @public
 */
sap.m.SearchField.prototype.search = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * 
 */
sap.m.SearchField.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.m.SearchField(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 * </p><p>
 * Event which is fired when the user triggers a search. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.m.SearchField(); };

/**
 * 
 * Binder for property <code>value</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.bindValue = function(sPath,fnFormatter,sMode) { return new sap.m.SearchField(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * 
 */
sap.m.SearchField.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.m.SearchField(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.m.SearchField</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.detachSearch = function(fnFunction,oListener) { return new sap.m.SearchField(); };

/**
 * 
 * Creates a new subclass of class sap.m.SearchField with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.SearchField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event liveChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> Current search string.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @since 1.9.1
 * 
 */
sap.m.SearchField.prototype.fireLiveChange = function(mArguments) { return new sap.m.SearchField(); };

/**
 * 
 * Fire event search to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query string.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SearchField.prototype.fireSearch = function(mArguments) { return new sap.m.SearchField(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true).
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getMaxLength = function() { return 0; };

/**
 * 
 * Getter for property <code>placeholder</code>.
 * Text shown when no value available.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getPlaceholder = function() { return ""; };

/**
 * 
 * Getter for property <code>showMagnifier</code>.
 * Set to false to hide the magnifier icon.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showMagnifier</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getShowMagnifier = function() { return false; };

/**
 * 
 * Getter for property <code>value</code>.
 * Input Value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getValue = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible inputs are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the input.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.SearchField.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setEnabled = function(bEnabled) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>maxLength</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setMaxLength = function(iMaxLength) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>placeholder</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setPlaceholder = function(sPlaceholder) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>showMagnifier</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowMagnifier  new value for property <code>showMagnifier</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setShowMagnifier = function(bShowMagnifier) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setValue = function(sValue) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setVisible = function(bVisible) { return new sap.m.SearchField(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.setWidth = function(sWidth) { return new sap.m.SearchField(); };

/**
 * 
 * Unbinder for property <code>value</code>.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SearchField.prototype.unbindValue = function() { return new sap.m.SearchField(); };


// ---- sap.m.SegmentedButton --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SegmentedButton.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.m.Button[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SegmentedButton#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A SegmentedButton Control is a horizontal control made of multiple buttons which can display a title or an image. It automatically resizes the buttons to fit proportionally within the control. When no width is set, the control uses the available width.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.SegmentedButton = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user selects a button, which returns the id and button object 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has just been selected
 * @param {string} oControlEvent.getParameters.id Id of the button which has just been selected
 * @public
 */
sap.m.SegmentedButton.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 * @param {sap.m.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.addButton = function(oButton) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.SegmentedButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SegmentedButton</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user selects a button, which returns the id and button object 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SegmentedButton</code>.<br/> itself.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Convenient method to add a button with a text as title or an uri for an icon. 
 * Only one is allowed.
 * @param {sap.ui.core/string}
 *         sText defines the title text of the newly created button
 * @param {sap.ui.core/URI}
 *        sURI defines the icon uri of the button
 * @param {boolean}
 *        [bEnabled] sets the enabled status of the button
 * @return
 * @type {sap.m.Button}
 * @public
 */
sap.m.SegmentedButton.prototype.createButton = function(sText,sURI,bEnabled) { return null; };

/**
 * 
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.destroyButtons = function() { return new sap.m.SegmentedButton(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.SegmentedButton</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.detachSelect = function(fnFunction,oListener) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Creates a new subclass of class sap.m.SegmentedButton with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.SegmentedButton.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'button' of type <code>sap.m.Button</code> Reference to the button that has just been selected</li>
 * <li>'id' of type <code>string</code> Id of the button which has just been selected</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SegmentedButton.prototype.fireSelect = function(mArguments) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Getter for aggregation <code>buttons</code>.<br/>
 * Buttons of the SegmentedButton control
 * @return {sap.m.Button[]}
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.getButtons = function() { return new Array(); };

/**
 * 
 * Pointer to the selected button of a SegmentedButton control.
 * @return {string} Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.getSelectedButton = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * boolean property to make the control visible or invisible
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Set the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
 * </p><p>
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.m.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.m.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.indexOfButton = function(oButton) { return 0; };

/**
 * 
 * Inserts a button into the aggregation named <code>buttons</code>.
 * @param {sap.m.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.insertButton = function(oButton,iIndex) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Button[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.removeAllButtons = function() { return new Array(); };

/**
 * 
 * Removes an button from the aggregation named <code>buttons</code>.
 * @param {int | string | sap.m.Button} vButton the button to remove or its index or id
 * @return {sap.m.Button} the removed button or null
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.removeButton = function(vButton) { return new sap.m.Button(); };

/**
 * 
 * Pointer to the selected button of a SegmentedButton control.
 * @param {string | sap.m.Button} vSelectedButton 
 *    Id of an element which becomes the new target of this <code>selectedButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.setSelectedButton = function(vSelectedButton) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.setVisible = function(bVisible) { return new sap.m.SegmentedButton(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SegmentedButton.prototype.setWidth = function(sWidth) { return new sap.m.SegmentedButton(); };


// ---- sap.m.Select --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Select.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Select#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The select control is built on a native html select element; it provides a list of predefined items that allows end users to choose options.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Select = function(sId,mSettings) {};
/**
 * 
 * This event will be triggered when the user changes the selected item. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The selected item.
 * @public
 */
sap.m.Select.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.addItem = function(oItem) { return new sap.m.Select(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Select</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Select</code>.<br/> itself. 
 * </p><p>
 * This event will be triggered when the user changes the selected item. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Select</code>.<br/> itself.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.Select(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.destroyItems = function() { return new sap.m.Select(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Select</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.Select(); };

/**
 * 
 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Select.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The selected item.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Select.prototype.fireChange = function(mArguments) { return new sap.m.Select(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Determines whether the user can change the selected value.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.Select.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Items of the Item control.
 * @return {sap.ui.core.Item[]}
 * @public
 * 
 */
sap.m.Select.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>maxWidth</code>.
 * Defines the maximum width of the select control. This value can be provided in %, em, px… and all possible CSS measures.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * 
 */
sap.m.Select.prototype.getMaxWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code (e.g. for HTML forms that send data to the server via submit).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.m.Select.prototype.getName = function() { return ""; };

/**
 * 
 * The selected item.
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * 
 */
sap.m.Select.prototype.getSelectedItem = function() { return ""; };

/**
 * 
 * Getter for property <code>selectedItemId</code>.
 * Id of the selected item.
 * </p><p>
 * If the id has no corresponding aggregated item, no changes will apply.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * @since 1.12
 * 
 */
sap.m.Select.prototype.getSelectedItemId = function() { return ""; };

/**
 * 
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * </p><p>
 * If the key has no corresponding aggregated item, no changes will apply.
 * If duplicate keys exists the first item matching the key is used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.11
 * 
 */
sap.m.Select.prototype.getSelectedKey = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The text to be displayed as tooltip and as title of the Select popup on iPad. This overrides the value of the "tooltip" property. If only the "tooltop" property is set, the Select popup on iPad will not have a title.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.Select.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Determines whether the control is visible or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Select.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the select control. This value can be provided in %, em, px… and all possible CSS measures.
 * </p><p>
 * Default value is <code>auto</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Select.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.Select.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.insertItem = function(oItem,iIndex) { return new sap.m.Select(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.Select.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * 
 */
sap.m.Select.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setEnabled = function(bEnabled) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>maxWidth</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setMaxWidth = function(sMaxWidth) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setName = function(sName) { return new sap.m.Select(); };

/**
 * 
 * Setter for association <code>selectedItem</code>.
 * @param {string | sap.ui.core.Item | null} vSelectedItem new value for association <code>selectedItem</code>
 *    Id of an sap.ui.core.Item which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an sap.ui.core.Item instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setSelectedItem = function(vSelectedItem) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>selectedItemId</code>.
 * </p><p>
 * Default value is an empty string <code>""</code> or <code>undefined</code>
 * @param {string | sap.ui.core.Item | undefined} sSelectedItemId new value for property <code>selectedItemId</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * 
 */
sap.m.Select.prototype.setSelectedItemId = function(sSelectedItemId) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>selectedKey</code>.
 * </p><p>
 * Default value is an empty string <code>""</code> or <code>undefined</code>
 * @param {string} sSelectedKey new value for property <code>selectedKey</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * 
 */
sap.m.Select.prototype.setSelectedKey = function(sSelectedKey) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setTitle = function(sTitle) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setVisible = function(bVisible) { return new sap.m.Select(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>auto</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Select.prototype.setWidth = function(sWidth) { return new sap.m.Select(); };


// ---- sap.m.Shell --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Shell.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getShowLogout showLogout} : boolean (default: true)</li>
 * <li>{@link #getHeaderRightText headerRightText} : string</li>
 * <li>{@link #getAppWidthLimited appWidthLimited} : boolean (default: true)</li>
 * <li>{@link #getBackgroundColor backgroundColor} : string</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundRepeat backgroundRepeat} : boolean (default: false)</li>
 * <li>{@link #getBackgroundOpacity backgroundOpacity} : float (default: 1)</li>
 * <li>{@link #getHomeIcon homeIcon} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getApp app} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Shell#event:logout logout} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Shell control can be used as root element of applications, it can contain an App or SplitApp control.
 * The Shell provides some overarching functionality for the overall application and takes care of visual adaptation, like a frame around the App, on desktop browser platforms.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * @experimental Since version 1.12. 
 * This control is still under discussion so this can be changed in future.
 * 
 */
sap.m.Shell = function(sId,mSettings) {};
/**
 * 
 * Fired when the user presses the logout button/link. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Shell.prototype.logout = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'logout' event of this <code>sap.m.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Shell</code>.<br/> itself. 
 * </p><p>
 * Fired when the user presses the logout button/link. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Shell</code>.<br/> itself.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.attachLogout = function(oData,fnFunction,oListener) { return new sap.m.Shell(); };

/**
 * 
 * Destroys the app in the aggregation 
 * named <code>app</code>.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.destroyApp = function() { return new sap.m.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'logout' event of this <code>sap.m.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.detachLogout = function(fnFunction,oListener) { return new sap.m.Shell(); };

/**
 * 
 * Creates a new subclass of class sap.m.Shell with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event logout to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Shell.prototype.fireLogout = function(mArguments) { return new sap.m.Shell(); };

/**
 * 
 * Getter for aggregation <code>app</code>.<br/>
 * A Shell contains an App or a SplitApp (they may be wrapped in a View). Other control types are not allowed.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.m.Shell.prototype.getApp = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>appWidthLimited</code>.
 * Whether the width of the content (the aggregated app) should be limited or extend to the full screen width.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>appWidthLimited</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getAppWidthLimited = function() { return false; };

/**
 * 
 * Getter for property <code>backgroundColor</code>.
 * Background color of the Shell. If set, this color will override the default background defined by the theme. So this should only be set when really required.
 * Any configured background image will be placed above this colored background.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>backgroundColor</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.getBackgroundColor = function() { return ""; };

/**
 * 
 * Getter for property <code>backgroundImage</code>.
 * Background image of the Shell. If set, this image will override the default background defined by the theme. So this should only be set when really required.
 * This background image will be placed above any color set for the background.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.getBackgroundImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>backgroundOpacity</code>.
 * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque).
 * This can be used to improve readability of the shell content by making the background image partly transparent.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>backgroundOpacity</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.getBackgroundOpacity = function() { return 0.0; };

/**
 * 
 * Getter for property <code>backgroundRepeat</code>.
 * Whether the background image (if configured) should be proportionally stretched to cover the whole Shell (false, default) or whether it should be tiled (true).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>backgroundRepeat</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.getBackgroundRepeat = function() { return false; };

/**
 * 
 * Getter for property <code>headerRightText</code>.
 * A text, like the name of the logged-in user, which should be displayed on the right side of the header (if there is enough space to display the header at all).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>headerRightText</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getHeaderRightText = function() { return ""; };

/**
 * 
 * Getter for property <code>homeIcon</code>.
 * Sets the icon used for the mobile device home screen and the icon to be used for bookmarks by desktop browsers.
 * </p><p>
 * This property should be only set once and as early as possible. Subsequent calls replace the previous icon settings and may lead to different behavior depending on the browser.
 * </p><p>
 * Different image sizes for device home screen need to be given as PNG images, an ICO file needs to be given as desktop browser bookmark icon (other file formats may not work in all browsers).
 * The "precomposed" flag defines whether there is already a glow effect contained in the home screen images (or whether iOS should add such an effect). The given structure could look like this:
 * {
 * 'phone':'phone-icon_57x57.png',
 * 'phone@2':'phone-retina_114x114.png',
 * 'tablet':'tablet-icon_72x72.png',
 * 'tablet@2':'tablet-retina_144x144.png',
 * 'precomposed':true,
 * 'favicon':'favicon.ico'
 * }
 * </p><p>
 * See jQuery.sap.setIcons() for full documentation.
 * </p><p>
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>homeIcon</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getHomeIcon = function() { return new Object(); };

/**
 * 
 * Getter for property <code>logo</code>.
 * A logo to be displayed when the screen is sufficiently large.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getLogo = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>showLogout</code>.
 * Whether the Logout button should be displayed.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showLogout</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getShowLogout = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * The application title which may or may not be displayed outside the actual application, depending on the available screen size.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.Shell.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for the aggregated <code>app</code>.
 * @param oApp {sap.ui.core.Control}
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setApp = function(oApp) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>appWidthLimited</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bAppWidthLimited  new value for property <code>appWidthLimited</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setAppWidthLimited = function(bAppWidthLimited) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>backgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>backgroundImage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.setBackgroundImage = function(sBackgroundImage) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>backgroundOpacity</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fBackgroundOpacity  new value for property <code>backgroundOpacity</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.setBackgroundOpacity = function(fBackgroundOpacity) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>backgroundRepeat</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bBackgroundRepeat  new value for property <code>backgroundRepeat</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.Shell.prototype.setBackgroundRepeat = function(bBackgroundRepeat) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>headerRightText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sHeaderRightText  new value for property <code>headerRightText</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setHeaderRightText = function(sHeaderRightText) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>homeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setHomeIcon = function(oHomeIcon) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>logo</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setLogo = function(sLogo) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>showLogout</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowLogout  new value for property <code>showLogout</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setShowLogout = function(bShowLogout) { return new sap.m.Shell(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Shell.prototype.setTitle = function(sTitle) { return new sap.m.Shell(); };


// ---- sap.m.Slider --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Slider.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getStep step} : float (default: 1)</li>
 * <li>{@link #getProgress progress} : boolean (default: true)</li>
 * <li>{@link #getValue value} : float (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Slider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Slider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A slider is a user interface control that enables the user to adjust values in a specified numerical range.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Slider = function(sId,mSettings) {};
/**
 * 
 * This event is triggered after the end user finishes interacting, if there is any change. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {float} oControlEvent.getParameters.value The current value of the slider after a change.
 * @public
 */
sap.m.Slider.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * This event is triggered during the dragging period, each time the slider value changes. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {float} oControlEvent.getParameters.value The current value of the slider after a live change.
 * @public
 */
sap.m.Slider.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 * </p><p>
 * This event is triggered after the end user finishes interacting, if there is any change. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.Slider(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 * </p><p>
 * This event is triggered during the dragging period, each time the slider value changes. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.m.Slider(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Slider</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.Slider(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.m.Slider(); };

/**
 * 
 * Creates a new subclass of class sap.m.Slider with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Slider.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Slider.prototype.fireChange = function(mArguments) { return new sap.m.Slider(); };

/**
 * 
 * Fire event liveChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a live change.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Slider.prototype.fireLiveChange = function(mArguments) { return new sap.m.Slider(); };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the slider.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>max</code>.
 * The maximum value of the slider.
 * </p><p>
 * Default value is <code>100</code>
 * @return {float} the value of property <code>max</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getMax = function() { return 0.0; };

/**
 * 
 * Getter for property <code>min</code>.
 * The minimum value of the slider.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>min</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getMin = function() { return 0.0; };

/**
 * 
 * Getter for property <code>name</code>.
 * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>progress</code>.
 * Show a progress bar for the slider.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>progress</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getProgress = function() { return false; };

/**
 * 
 * Getter for property <code>step</code>.
 * Define the size of every one step the slider takes between min and max.
 * </p><p>
 * The step needs to be a positive integer; if a negative number is provider, the default value will take place.
 * </p><p>
 * If the width of the slider converted to pixels is less than the range (max – min), the value will be rounded to multiples of the step size.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>step</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getStep = function() { return 0.0; };

/**
 * 
 * Getter for property <code>value</code>.
 * Define the value of the slider. If this value is lower than the minimum permited, the minimum will be override the value, or if the value is higher than maximun, the maximum will be override the value.
 * </p><p>
 * Default value is <code>0</code>
 * @return {float} the value of property <code>value</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getValue = function() { return 0.0; };

/**
 * 
 * Getter for property <code>visible</code>.
 * Defines the visibility for the slider.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Defines the width of the slider element, this value can be provided in %, em, px… and all possible CSS measures.
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Slider.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setEnabled = function(bEnabled) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>max</code>.
 * </p><p>
 * Default value is <code>100</code> 
 * @param {float} fMax  new value for property <code>max</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setMax = function(fMax) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>min</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fMin  new value for property <code>min</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setMin = function(fMin) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setName = function(sName) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>progress</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bProgress  new value for property <code>progress</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setProgress = function(bProgress) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>step</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fStep  new value for property <code>step</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setStep = function(fStep) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>value</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setValue = function(fValue) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setVisible = function(bVisible) { return new sap.m.Slider(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Slider.prototype.setWidth = function(sWidth) { return new sap.m.Slider(); };

/**
 * 
 * Changes the slider’s value by the value given in the step attribute, multiplied by n.
 * </p><p>
 * The default value for n is 1.
 * @param {int} 
 *         iN
 *         The number of steps the slider goes down.
 * @type void
 * @public
 */
sap.m.Slider.prototype.stepDown = function(iN) { return null; };

/**
 * 
 * Changes the slider’s value by the value given in the step attribute, multiplied by n.
 * </p><p>
 * The default value for n is 1.
 * @param {int} 
 *         iN
 *         The number of steps the slider goes up.
 * @type void
 * @public
 */
sap.m.Slider.prototype.stepUp = function(iN) { return null; };


// ---- sap.m.SplitApp --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new SplitApp.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getHomeIcon homeIcon} : any</li>
 * <li>{@link #getDefaultTransitionNameDetail defaultTransitionNameDetail} : string (default: "slide")</li>
 * <li>{@link #getDefaultTransitionNameMaster defaultTransitionNameMaster} : string (default: "slide")</li>
 * <li>{@link #getMode mode} : sap.m.SplitAppMode (default: sap.m.SplitAppMode.ShowHideMode)</li>
 * <li>{@link #getMasterButtonText masterButtonText} : string</li>
 * <li>{@link #getBackgroundColor backgroundColor} : string</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundRepeat backgroundRepeat} : boolean (default: false)</li>
 * <li>{@link #getBackgroundOpacity backgroundOpacity} : float (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMasterPages masterPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getDetailPages detailPages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialDetail initialDetail} : string | sap.ui.core.Control</li>
 * <li>{@link #getInitialMaster initialMaster} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SplitApp#event:orientationChange orientationChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:masterNavigate masterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterNavigate afterMasterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:masterButton masterButton} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:beforeMasterOpen beforeMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterOpen afterMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:beforeMasterClose beforeMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterMasterClose afterMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:detailNavigate detailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitApp#event:afterDetailNavigate afterDetailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * SplitApp is another root element of a UI5 mobile application besides App control. It maintains two NavContainers if runs in tablet and one NavContainer in phone. The display of master NavContainer depends on the portrait/landscape of the device and the mode of SplitApp.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.SplitApp = function(sId,mSettings) {};
/**
 * 
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.SplitApp.prototype.afterDetailNavigate = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when the master area is fully closed after the animation when there is. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.SplitApp.prototype.afterMasterClose = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.SplitApp.prototype.afterMasterNavigate = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired when the master area is fully opened after animation if there is. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.SplitApp.prototype.afterMasterOpen = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired before the master area is closed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.SplitApp.prototype.beforeMasterClose = function(oControlEvent) { return null; };

/**
 * 
 * This event is fired before the master area is opened. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.SplitApp.prototype.beforeMasterOpen = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.SplitApp.prototype.detailNavigate = function(oControlEvent) { return null; };

/**
 * 
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitApp control does not handle the placement of the master button automatically. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.SplitApp.prototype.masterButton = function(oControlEvent) { return null; };

/**
 * 
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
sap.m.SplitApp.prototype.masterNavigate = function(oControlEvent) { return null; };

/**
 * 
 * This event will be fired when orientation (portrait/landscape) is changed. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.landscape Returns true if the device is in landscape.
 * @public
 */
sap.m.SplitApp.prototype.orientationChange = function(oControlEvent) { return null; };

/**
 * 
 * Adds some detailPage <code>oDetailPage</code> 
 * to the aggregation named <code>detailPages</code>.
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.addDetailPage = function(oDetailPage) { return new sap.m.SplitApp(); };

/**
 * 
 * Adds some masterPage <code>oMasterPage</code> 
 * to the aggregation named <code>masterPages</code>.
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.addMasterPage = function(oMasterPage) { return new sap.m.SplitApp(); };

/**
 * 
 * Add a content entity either to master area or detail area depending on the master parameter.
 * </p><p>
 * This method is provided mainly for providing API consistency between sap.m.SplitApp and sap.m.App. So that the same code line can be reused.
 * @param {sap.ui.core.Control} 
 *         oPage
 *         The content entities between which this SplitApp navigates in either master area or detail area depending on the master parameter. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * @param {boolean} 
 *         bMaster
 *         States if the page should be added to the master area. If it's set to false, the page is added to detail area.
 * @type sap.m.SplitApp
 * @public
 * @since 1.11.1
 */
sap.m.SplitApp.prototype.addPage = function(oPage,bMaster) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterDetailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachAfterDetailNavigate = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the master area is fully closed after the animation when there is. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachAfterMasterClose = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterMasterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachAfterMasterNavigate = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'afterMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the master area is fully opened after animation if there is. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachAfterMasterOpen = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * This event is fired before the master area is closed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachBeforeMasterClose = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * This event is fired before the master area is opened. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachBeforeMasterOpen = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'detailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachDetailNavigate = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'masterButton' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitApp control does not handle the placement of the master button automatically. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachMasterButton = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'masterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachMasterNavigate = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 * </p><p>
 * This event will be fired when orientation (portrait/landscape) is changed. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.attachOrientationChange = function(oData,fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * navigate back within DetailView
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.backDetail = function(oBackData,oTransitionParameter) { return new sap.m.SplitApp(); };

/**
 * 
 * navigate back within MasterView
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.backMaster = function(oBackData,oTransitionParameter) { return new sap.m.SplitApp(); };

/**
 * 
 * Navigates back to the nearest previous page in the SplitApp history with the given ID. If there is no such page among the previous pages, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * </p><p>
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the SplitApp, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.m.SplitApp
 * @public
 * @since 1.10.0
 */
sap.m.SplitApp.prototype.backToPage = function(sPageId,oBackData,oTransitionParameters) { return new sap.m.SplitApp(); };

/**
 * 
 * Navigates back to the initial/top level of Detail (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.SplitApp.prototype.backToTopDetail = function(oBackData,oTransitionParameter) { return new sap.ui.core.Control(); };

/**
 * 
 * Navigates back to the initial/top level of Master (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * </p><p>
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * </p><p>
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.SplitApp.prototype.backToTopMaster = function(oBackData,oTransitionParameter) { return new sap.ui.core.Control(); };

/**
 * 
 * Destroys all the detailPages in the aggregation 
 * named <code>detailPages</code>.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.destroyDetailPages = function() { return new sap.m.SplitApp(); };

/**
 * 
 * Destroys all the masterPages in the aggregation 
 * named <code>masterPages</code>.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.destroyMasterPages = function() { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterDetailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachAfterDetailNavigate = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachAfterMasterClose = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterMasterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachAfterMasterNavigate = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'afterMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachAfterMasterOpen = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterClose' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachBeforeMasterClose = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterOpen' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachBeforeMasterOpen = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'detailNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachDetailNavigate = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'masterButton' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachMasterButton = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'masterNavigate' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachMasterNavigate = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.detachOrientationChange = function(fnFunction,oListener) { return new sap.m.SplitApp(); };

/**
 * 
 * Creates a new subclass of class sap.m.SplitApp with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.SplitApp.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event afterDetailNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireAfterDetailNavigate = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event afterMasterClose to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireAfterMasterClose = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event afterMasterNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireAfterMasterNavigate = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event afterMasterOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireAfterMasterOpen = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event beforeMasterClose to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireBeforeMasterClose = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event beforeMasterOpen to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireBeforeMasterOpen = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event detailNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireDetailNavigate = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event masterButton to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireMasterButton = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event masterNavigate to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireMasterNavigate = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Fire event orientationChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'landscape' of type <code>boolean</code> Returns true if the device is in landscape.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.SplitApp.prototype.fireOrientationChange = function(mArguments) { return new sap.m.SplitApp(); };

/**
 * 
 * Getter for property <code>backgroundColor</code>.
 * Background color of the SplitApp. If set, this color will override the default background defined by the theme. So this should only be set when really required.
 * Any configured background image will be placed above this colored background. But any theme adaptation in the Theme Designer will override this setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete SplitApp or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>backgroundColor</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.getBackgroundColor = function() { return ""; };

/**
 * 
 * Getter for property <code>backgroundImage</code>.
 * Background image of the SplitApp. If set, this image will override the default background defined by the theme. So this should only be set when really required.
 * This background image will be placed above any color set for the background. But any theme adaptation in the Theme Designer will override this image setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete SplitApp or whether it should be tiled.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.getBackgroundImage = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>backgroundOpacity</code>.
 * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque).
 * This can be used to make the application content better readable by making the background image partly transparent.
 * </p><p>
 * Default value is <code>1</code>
 * @return {float} the value of property <code>backgroundOpacity</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.getBackgroundOpacity = function() { return 0.0; };

/**
 * 
 * Getter for property <code>backgroundRepeat</code>.
 * Whether the background image (if configured) should be proportionally stretched to cover the whole SplitApp (false) or whether it should be tiled (true).
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>backgroundRepeat</code>
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.getBackgroundRepeat = function() { return false; };

/**
 * 
 * Returns the current shown detail page.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.SplitApp.prototype.getCurrentDetailPage = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Returns the current shown master page.
 * @type sap.ui.core.Control
 * @public
 */
sap.m.SplitApp.prototype.getCurrentMasterPage = function() { return new sap.ui.core.Control(); };

/**
 * 
 * Returns the current shown page either in master area or in detail area. When the parameter is set to true, the current page in master area is returned. Otherwise the current page in detail area is returned.
 * </p><p>
 * This method is provided mainly for providing API consistency between sap.m.SplitApp and sap.m.App. So that the same code line can be reused.
 * @param {boolean} 
 *         bMaster
 *         States if this function returns the current page in master area. If it's set to false, the current page in detail area will be returned.
 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */
sap.m.SplitApp.prototype.getCurrentPage = function(bMaster) { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for property <code>defaultTransitionNameDetail</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 * </p><p>
 * Default value is <code>"slide"</code>
 * @return {string} the value of property <code>defaultTransitionNameDetail</code>
 * @public
 * 
 */
sap.m.SplitApp.prototype.getDefaultTransitionNameDetail = function() { return ""; };

/**
 * 
 * Getter for property <code>defaultTransitionNameMaster</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 * </p><p>
 * Default value is <code>"slide"</code>
 * @return {string} the value of property <code>defaultTransitionNameMaster</code>
 * @public
 * 
 */
sap.m.SplitApp.prototype.getDefaultTransitionNameMaster = function() { return ""; };

/**
 * 
 * Returns the page with the given id in detail area. If there's no page that has the given id, null is returned.
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.
 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */
sap.m.SplitApp.prototype.getDetailPage = function(sId) { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>detailPages</code>.<br/>
 * The content entities between which this SplitApp navigates in detail area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * </p><p>
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.SplitApp.prototype.getDetailPages = function() { return new Array(); };

/**
 * 
 * Getter for property <code>homeIcon</code>.
 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
 * </p><p>
 * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
 * </p><p>
 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
 * </p><p>
 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
 * </p><p>
 * One example is:
 * </p><p>
 * app.setHomeIcon({
 * 'phone':'phone-icon.png',
 * 'phone@2':'phone-retina.png',
 * 'tablet':'tablet-icon.png',
 * 'tablet@2':'tablet-retina.png',
 * 'icon':'desktop.ico'
 * });
 * </p><p>
 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
 * </p><p>
 * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {any} the value of property <code>homeIcon</code>
 * @public
 * 
 */
sap.m.SplitApp.prototype.getHomeIcon = function() { return null; };

/**
 * 
 * Sets the initial detail page, which is shown on application launch.
 * @return {string} Id of the element which is the current target of the <code>initialDetail</code> association, or null
 * @public
 * 
 */
sap.m.SplitApp.prototype.getInitialDetail = function() { return ""; };

/**
 * 
 * Sets the initial master page, which is shown on application launch.
 * @return {string} Id of the element which is the current target of the <code>initialMaster</code> association, or null
 * @public
 * 
 */
sap.m.SplitApp.prototype.getInitialMaster = function() { return ""; };

/**
 * 
 * Getter for property <code>masterButtonText</code>.
 * This is the text shown in master button which has a default value "Navigation". This text is only shown in iOS platform and the icon from the current page in detail area is shown in the master button in the other platfroms.
 * </p><p>
 * The master button is shown/hidden depending on the orientation of device and also whether the master area is open or not. SplitApp manages the show/hide of master button by itself only when the page added to detail area are sap.m.Page with built-in header or sap.m.Page with built-in header which is wrapped by one or several sap.ui.core.mvc.View. Otherwise the show/hide of master button needs to be managed by the application.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>masterButtonText</code>
 * @public
 * 
 */
sap.m.SplitApp.prototype.getMasterButtonText = function() { return ""; };

/**
 * 
 * Returns the page with the given id in master area. If there's no page that has the given id, null is returned.
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.
 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */
sap.m.SplitApp.prototype.getMasterPage = function(sId) { return new sap.ui.core.Control(); };

/**
 * 
 * Getter for aggregation <code>masterPages</code>.<br/>
 * The content entities between which this SplitApp navigates in master area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * </p><p>
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.SplitApp.prototype.getMasterPages = function() { return new Array(); };

/**
 * 
 * Getter for property <code>mode</code>.
 * This mode defines whether the master page will always be shown (in portrait and in landscape)[StretchCompressMode], or if it should be hidden when in protrait mode [ShowHideMode]. Default is ShowHideMode
 * </p><p>
 * Default value is <code>ShowHideMode</code>
 * @return {sap.m.SplitAppMode} the value of property <code>mode</code>
 * @public
 * 
 */
sap.m.SplitApp.prototype.getMode = function() { return new sap.m.SplitAppMode(); };

/**
 * 
 * Returns the page with the given id from either master area or detail area depending on the master parameter. If there's no page that has the given id, null is returned.
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.
 * @param {boolean} 
 *         bMaster
 *         If the page with given id should be fetched from the master area. If it's set to false, the page will be fetched from detail area.
 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */
sap.m.SplitApp.prototype.getPage = function(sId,bMaster) { return new sap.ui.core.Control(); };

/**
 * 
 * When in ShowHideMode and the device is in portrait mode, this function can be used to hide the master page.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.hideMaster = function() { return new sap.m.SplitApp(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>detailPages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.SplitApp.prototype.indexOfDetailPage = function(oDetailPage) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>masterPages</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.SplitApp.prototype.indexOfMasterPage = function(oMasterPage) { return 0; };

/**
 * 
 * Inserts a detailPage into the aggregation named <code>detailPages</code>.
 * @param {sap.ui.core.Control}
 *          oDetailPage the detailPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the detailPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the detailPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the detailPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.insertDetailPage = function(oDetailPage,iIndex) { return new sap.m.SplitApp(); };

/**
 * 
 * Inserts a masterPage into the aggregation named <code>masterPages</code>.
 * @param {sap.ui.core.Control}
 *          oMasterPage the masterPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the masterPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the masterPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the masterPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.insertMasterPage = function(oMasterPage,iIndex) { return new sap.m.SplitApp(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>detailPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.SplitApp.prototype.removeAllDetailPages = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>masterPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.SplitApp.prototype.removeAllMasterPages = function() { return new Array(); };

/**
 * 
 * Removes an detailPage from the aggregation named <code>detailPages</code>.
 * @param {int | string | sap.ui.core.Control} vDetailPage the detailPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed detailPage or null
 * @public
 * 
 */
sap.m.SplitApp.prototype.removeDetailPage = function(vDetailPage) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an masterPage from the aggregation named <code>masterPages</code>.
 * @param {int | string | sap.ui.core.Control} vMasterPage the masterPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed masterPage or null
 * @public
 * 
 */
sap.m.SplitApp.prototype.removeMasterPage = function(vMasterPage) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>backgroundColor</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.setBackgroundColor = function(sBackgroundColor) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>backgroundImage</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.setBackgroundImage = function(sBackgroundImage) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>backgroundOpacity</code>.
 * </p><p>
 * Default value is <code>1</code> 
 * @param {float} fBackgroundOpacity  new value for property <code>backgroundOpacity</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.setBackgroundOpacity = function(fBackgroundOpacity) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>backgroundRepeat</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bBackgroundRepeat  new value for property <code>backgroundRepeat</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * 
 */
sap.m.SplitApp.prototype.setBackgroundRepeat = function(bBackgroundRepeat) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>defaultTransitionNameDetail</code>.
 * </p><p>
 * Default value is <code>"slide"</code> 
 * @param {string} sDefaultTransitionNameDetail  new value for property <code>defaultTransitionNameDetail</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setDefaultTransitionNameDetail = function(sDefaultTransitionNameDetail) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>defaultTransitionNameMaster</code>.
 * </p><p>
 * Default value is <code>"slide"</code> 
 * @param {string} sDefaultTransitionNameMaster  new value for property <code>defaultTransitionNameMaster</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setDefaultTransitionNameMaster = function(sDefaultTransitionNameMaster) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>homeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {any} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setHomeIcon = function(oHomeIcon) { return new sap.m.SplitApp(); };

/**
 * 
 * Sets the initial detail page, which is shown on application launch.
 * @param {string | sap.ui.core.Control} vInitialDetail 
 *    Id of an element which becomes the new target of this <code>initialDetail</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setInitialDetail = function(vInitialDetail) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>masterButtonText</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sMasterButtonText  new value for property <code>masterButtonText</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setMasterButtonText = function(sMasterButtonText) { return new sap.m.SplitApp(); };

/**
 * 
 * Setter for property <code>mode</code>.
 * </p><p>
 * Default value is <code>ShowHideMode</code> 
 * @param {sap.m.SplitAppMode} oMode  new value for property <code>mode</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.SplitApp.prototype.setMode = function(oMode) { return new sap.m.SplitApp(); };

/**
 * 
 * When in ShowHideMode and the device is in portrait mode, this function can be used to make the master page visible.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.showMaster = function() { return new sap.m.SplitApp(); };

/**
 * 
 * navigate to given detail page
 * @param {string} 
 *         sPageId
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * </p><p>
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * </p><p>
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * </p><p>
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.toDetail = function(sPageId,sTransitionName,oData,oTransitionParameter) { return new sap.m.SplitApp(); };

/**
 * 
 * navigate to given master page
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * </p><p>
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 * @since 1.7.1 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * </p><p>
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * </p><p>
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 * @since 1.7.1 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * </p><p>
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * </p><p>
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.
 * @type sap.m.SplitApp
 * @public
 */
sap.m.SplitApp.prototype.toMaster = function(sPageId,sTransitionName,oData,oTransitionParameters) { return new sap.m.SplitApp(); };


// ---- sap.m.SplitAppMode --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.SplitAppMode.toString = function() { return ""; };

// ---- sap.m.StandardListItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new StandardListItem.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getDescription description} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconInset iconInset} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The StandardListItem is a list item providing image, titel and description.
 * @extends sap.m.ListItemBase
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.StandardListItem = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.StandardListItem with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.StandardListItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>activeIcon</code>.
 * List item active icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>description</code>.
 * Description
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * List item icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>iconInset</code>.
 * If false image will not be shown as embedded icon. Instead it will take the full height of the listitem.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconInset</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getIconInset = function() { return false; };

/**
 * 
 * Getter for property <code>info</code>.
 * Info text shown on the right side of the description.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>info</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getInfo = function() { return ""; };

/**
 * 
 * Getter for property <code>infoState</code>.
 * Info state defines the color of the info text. E.g. Error, Warning, Success...
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.ui.core.ValueState} the value of property <code>infoState</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getInfoState = function() { return new sap.ui.core.ValueState(); };

/**
 * 
 * Getter for property <code>title</code>.
 * List item text
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.StandardListItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>activeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setActiveIcon = function(sActiveIcon) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setDescription = function(sDescription) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setIcon = function(sIcon) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>iconInset</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconInset  new value for property <code>iconInset</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setIconInset = function(bIconInset) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>info</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setInfo = function(sInfo) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>infoState</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.ui.core.ValueState} oInfoState  new value for property <code>infoState</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setInfoState = function(oInfoState) { return new sap.m.StandardListItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.StandardListItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardListItem.prototype.setTitle = function(sTitle) { return new sap.m.StandardListItem(); };


// ---- sap.m.StandardTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new StandardTile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getType type} : sap.m.StandardTileType (default: sap.m.StandardTileType.None)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.Tile#constructor sap.m.Tile}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The StandardTile
 * @extends sap.m.Tile
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.StandardTile = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.StandardTile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.StandardTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>activeIcon</code>.
 * Tile active icon
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getActiveIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * </p><p>
 * If bandwidth is the key for the application, set this value to false.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getIconDensityAware = function() { return false; };

/**
 * 
 * Getter for property <code>info</code>.
 * Tile description
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>info</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getInfo = function() { return ""; };

/**
 * 
 * Getter for property <code>infoState</code>.
 * Info state defines the color of the info text. E.g. Error, Warning, Success...
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.ui.core.ValueState} the value of property <code>infoState</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getInfoState = function() { return new sap.ui.core.ValueState(); };

/**
 * 
 * Getter for property <code>number</code>.
 * Number field
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>number</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getNumber = function() { return ""; };

/**
 * 
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getNumberUnit = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * Tile title
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getTitle = function() { return ""; };

/**
 * 
 * Getter for property <code>type</code>.
 * Tile type.
 * </p><p>
 * Default value is <code>None</code>
 * @return {sap.m.StandardTileType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.StandardTile.prototype.getType = function() { return new sap.m.StandardTileType(); };

/**
 * 
 * Setter for property <code>activeIcon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setActiveIcon = function(sActiveIcon) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setIcon = function(sIcon) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>iconDensityAware</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setIconDensityAware = function(bIconDensityAware) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>info</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setInfo = function(sInfo) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>infoState</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.ui.core.ValueState} oInfoState  new value for property <code>infoState</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setInfoState = function(oInfoState) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>number</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setNumber = function(sNumber) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>numberUnit</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setNumberUnit = function(sNumberUnit) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setTitle = function(sTitle) { return new sap.m.StandardTile(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>None</code> 
 * @param {sap.m.StandardTileType} oType  new value for property <code>type</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.StandardTile.prototype.setType = function(oType) { return new sap.m.StandardTile(); };


// ---- sap.m.StandardTileType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.StandardTileType.toString = function() { return ""; };

// ---- sap.m.Support --------------------------------------------------------------------------

/**
 * 
 * Disables support.
 * @return {object} sap.m.Support
 * @protected
 * 
 * @memberOf sap.m.Support
 */
sap.m.Support.off = function() { return new Object(); };

/**
 * 
 * Enables support.
 * @return {object} sap.m.Support
 * @protected
 * 
 * @memberOf sap.m.Support
 */
sap.m.Support.on = function() { return new Object(); };


// ---- sap.m.SwipeDirection --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.SwipeDirection.toString = function() { return ""; };

// ---- sap.m.Switch --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Switch.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getState state} : boolean (default: false)</li>
 * <li>{@link #getCustomTextOn customTextOn} : string</li>
 * <li>{@link #getCustomTextOff customTextOff} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getType type} : sap.m.SwitchType (default: sap.m.SwitchType.Default)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Switch#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A switch is a user interface control on mobile devices that is used for change between binary states. The user can also drag the button handle or tap to change the state.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Switch = function(sId,mSettings) {};
/**
 * 
 * Triggered when a switch changes the state. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.state The new state of the switch.
 * @public
 */
sap.m.Switch.prototype.change = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Switch</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Switch</code>.<br/> itself. 
 * </p><p>
 * Triggered when a switch changes the state. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Switch</code>.<br/> itself.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.m.Switch(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Switch</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.detachChange = function(fnFunction,oListener) { return new sap.m.Switch(); };

/**
 * 
 * Creates a new subclass of class sap.m.Switch with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Switch.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event change to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'state' of type <code>boolean</code> The new state of the switch.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Switch.prototype.fireChange = function(mArguments) { return new sap.m.Switch(); };

/**
 * 
 * Getter for property <code>customTextOff</code>.
 * Custom text for the "OFF" state.
 * </p><p>
 * "OFF" translated to the current language is the default value.
 * Beware that the given text will be cut off after three characters.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>customTextOff</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getCustomTextOff = function() { return ""; };

/**
 * 
 * Getter for property <code>customTextOn</code>.
 * Custom text for the "ON" state.
 * </p><p>
 * "ON" translated to the current language is the default value.
 * Beware that the given text will be cut off after three characters.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>customTextOn</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getCustomTextOn = function() { return ""; };

/**
 * 
 * Getter for property <code>enabled</code>.
 * Whether the switch is enabled.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getEnabled = function() { return false; };

/**
 * 
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getName = function() { return ""; };

/**
 * 
 * Getter for property <code>state</code>.
 * A boolean value indicating whether the switch is on or off.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>state</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getState = function() { return false; };

/**
 * 
 * Getter for property <code>type</code>.
 * Type of a Switch. Possibles values "Default", "AcceptReject".
 * </p><p>
 * Default value is <code>Default</code>
 * @return {sap.m.SwitchType} the value of property <code>type</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getType = function() { return new sap.m.SwitchType(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Invisible switches are not rendered.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Switch.prototype.getVisible = function() { return false; };

/**
 * 
 * Setter for property <code>customTextOff</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCustomTextOff  new value for property <code>customTextOff</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setCustomTextOff = function(sCustomTextOff) { return new sap.m.Switch(); };

/**
 * 
 * Setter for property <code>customTextOn</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sCustomTextOn  new value for property <code>customTextOn</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setCustomTextOn = function(sCustomTextOn) { return new sap.m.Switch(); };

/**
 * 
 * Setter for property <code>enabled</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setEnabled = function(bEnabled) { return new sap.m.Switch(); };

/**
 * 
 * Setter for property <code>name</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setName = function(sName) { return new sap.m.Switch(); };

/**
 * 
 * Change the switch state between on and off.
 * @param {boolean} bState
 * @public
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 */
sap.m.Switch.prototype.setState = function(bState,bTriggerEvent) { return new sap.m.Switch(); };

/**
 * 
 * Setter for property <code>type</code>.
 * </p><p>
 * Default value is <code>Default</code> 
 * @param {sap.m.SwitchType} oType  new value for property <code>type</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setType = function(oType) { return new sap.m.Switch(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Switch.prototype.setVisible = function(bVisible) { return new sap.m.Switch(); };


// ---- sap.m.SwitchType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.m.SwitchType.toString = function() { return ""; };

// ---- sap.m.Text --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Text.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLines maxLines} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Text control is used to display some continuous text.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.Text = function(sId,mSettings) {};
/**
 * 
 * Ellipsis(…) text to indicate more text for browser which does not support native line clamp
 * Can be overwritten with 3dots(...) if fonts do not support this UTF-8 character.
 * NOTE: Changing this does not affect native ellipsis support
 * @since 1.13.2
 * @protected
 */
sap.m.Text.prototype.ellipsis = null

/**
 * 
 * Defines whether browser supports native line clamp or not
 * @since 1.13.2
 * @protected
 * @static
 */
sap.m.Text.hasNativeLineClamp = null

/**
 * 
 * Binder for property <code>text</code>.
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.bindText = function(sPath,fnFormatter,sMode) { return new sap.m.Text(); };

/**
 * 
 * Creates a new subclass of class sap.m.Text with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Text.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>maxLines</code>.
 * Limits the number of lines for wrapping texts.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {int} the value of property <code>maxLines</code>
 * @public
 * @since 1.13.2
 * 
 */
sap.m.Text.prototype.getMaxLines = function() { return 0; };

/**
 * 
 * Getter for property <code>text</code>.
 * Text to be displayed.
 * </p><p>
 * Default value is <code>''</code>
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.m.Text.prototype.getText = function() { return ""; };

/**
 * 
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 * </p><p>
 * Default value is <code>Begin</code>
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.m.Text.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * 
 * Getter for property <code>textDirection</code>.
 * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
 * </p><p>
 * Default value is <code>Inherit</code>
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.m.Text.prototype.getTextDirection = function() { return new sap.ui.core.TextDirection(); };

/**
 * 
 * Getter for property <code>visible</code>.
 * Set this property to false to make text invisible.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.m.Text.prototype.getVisible = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * By default the Text control uses the full width available. Set this property to restrict the width to a custom value.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.Text.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>wrapping</code>.
 * Set this property to false to disable the automatic text wrapping.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.m.Text.prototype.getWrapping = function() { return false; };

/**
 * 
 * Setter for property <code>maxLines</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {int} iMaxLines  new value for property <code>maxLines</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * 
 */
sap.m.Text.prototype.setMaxLines = function(iMaxLines) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>text</code>.
 * </p><p>
 * Default value is <code>''</code> 
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setText = function(sText) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>textAlign</code>.
 * </p><p>
 * Default value is <code>Begin</code> 
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setTextAlign = function(oTextAlign) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>textDirection</code>.
 * </p><p>
 * Default value is <code>Inherit</code> 
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setTextDirection = function(oTextDirection) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>visible</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setVisible = function(bVisible) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setWidth = function(sWidth) { return new sap.m.Text(); };

/**
 * 
 * Setter for property <code>wrapping</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.setWrapping = function(bWrapping) { return new sap.m.Text(); };

/**
 * 
 * Unbinder for property <code>text</code>.
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Text.prototype.unbindText = function() { return new sap.m.Text(); };


// ---- sap.m.TextArea --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TextArea.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getRows rows} : int (default: 2)</li>
 * <li>{@link #getCols cols} : int (default: 20)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getWrapping wrapping} : sap.ui.core.Wrapping</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.TextArea#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Enable users to input multi-line text.
 * @extends sap.m.InputBase
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.9.0
 * 
 */
sap.m.TextArea = function(sId,mSettings) {};
/**
 * 
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.value The new value of the textarea.
 * @public
 */
sap.m.TextArea.prototype.liveChange = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.TextArea</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TextArea</code>.<br/> itself. 
 * </p><p>
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TextArea</code>.<br/> itself.
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.attachLiveChange = function(oData,fnFunction,oListener) { return new sap.m.TextArea(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.TextArea</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.detachLiveChange = function(fnFunction,oListener) { return new sap.m.TextArea(); };

/**
 * 
 * Creates a new subclass of class sap.m.TextArea with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.TextArea.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event liveChange to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>string</code> The new value of the textarea.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.TextArea.prototype.fireLiveChange = function(mArguments) { return new sap.m.TextArea(); };

/**
 * 
 * Getter for property <code>cols</code>.
 * Specifies the width of the textarea (in average character width).
 * </p><p>
 * Default value is <code>20</code>
 * @return {int} the value of property <code>cols</code>
 * @public
 * 
 */
sap.m.TextArea.prototype.getCols = function() { return 0; };

/**
 * 
 * Getter for property <code>height</code>.
 * Defines the height of the textarea with CSS. This property can overwrite the rows property.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.TextArea.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters that user can input. If your value property's length bigger than maxLength then value is not truncated and user can see whole value property but cannot write anymore.
 * </p><p>
 * Default value is <code>0</code>
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.m.TextArea.prototype.getMaxLength = function() { return 0; };

/**
 * 
 * Getter for property <code>rows</code>.
 * Specifies the height of the text area (in lines).
 * </p><p>
 * Default value is <code>2</code>
 * @return {int} the value of property <code>rows</code>
 * @public
 * 
 */
sap.m.TextArea.prototype.getRows = function() { return 0; };

/**
 * 
 * Getter for property <code>wrapping</code>.
 * The wrap attribute specifies how the text in a text area is to be wrapped when submitted in a form. Possible values are: Soft, Hard, Off.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.Wrapping} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.m.TextArea.prototype.getWrapping = function() { return new sap.ui.core.Wrapping(); };

/**
 * 
 * Setter for property <code>cols</code>.
 * </p><p>
 * Default value is <code>20</code> 
 * @param {int} iCols  new value for property <code>cols</code>
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.setCols = function(iCols) { return new sap.m.TextArea(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.setHeight = function(sHeight) { return new sap.m.TextArea(); };

/**
 * 
 * Setter for property <code>maxLength</code>.
 * </p><p>
 * Default value is <code>0</code> 
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.setMaxLength = function(iMaxLength) { return new sap.m.TextArea(); };

/**
 * 
 * Setter for property <code>rows</code>.
 * </p><p>
 * Default value is <code>2</code> 
 * @param {int} iRows  new value for property <code>rows</code>
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.setRows = function(iRows) { return new sap.m.TextArea(); };

/**
 * 
 * Setter for property <code>wrapping</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.Wrapping} oWrapping  new value for property <code>wrapping</code>
 * @return {sap.m.TextArea} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TextArea.prototype.setWrapping = function(oWrapping) { return new sap.m.TextArea(); };


// ---- sap.m.Tile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new Tile.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getRemovable removable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Tile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A tile to be displayed in the tile container. Use this
 * tile as the base class for
 * specialized tile implementations.
 * Use the renderers _addOuterClass methods to add a style class to the main
 * surface of the Tile. In this class set the background color, gradients
 * or background images.
 * Instead of implementing the default render method in the renderer implement
 * your content HTML in the _renderContent method of the specialized
 * tile.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.Tile = function(sId,mSettings) {};
/**
 * 
 * Tap event is raised if the user tap or click to the
 * control. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.Tile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Tile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Tile</code>.<br/> itself. 
 * </p><p>
 * Tap event is raised if the user tap or click to the
 * control. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Tile</code>.<br/> itself.
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Tile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.m.Tile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Tile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Tile.prototype.detachPress = function(fnFunction,oListener) { return new sap.m.Tile(); };

/**
 * 
 * Creates a new subclass of class sap.m.Tile with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.Tile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.Tile.prototype.firePress = function(mArguments) { return new sap.m.Tile(); };

/**
 * 
 * Getter for property <code>removable</code>.
 * Determines whether the tile is movable within the surrounding tile container. The remove event is fired by the tile contianer.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * 
 */
sap.m.Tile.prototype.getRemovable = function() { return false; };

/**
 * 
 * Setter for property <code>removable</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bRemovable  new value for property <code>removable</code>
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.Tile.prototype.setRemovable = function(bRemovable) { return new sap.m.Tile(); };


// ---- sap.m.TileContainer --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new TileContainer.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getAllowAdd allowAdd} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.TileContainer#event:tileMove tileMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileDelete tileDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileAdd tileAdd} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A container that arranges same-size tiles nicely on carousel pages
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.12
 * 
 */
sap.m.TileContainer = function(sId,mSettings) {};
/**
 * 
 * Fired if a Tile is added 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.m.TileContainer.prototype.tileAdd = function(oControlEvent) { return null; };

/**
 * 
 * Fired if a tile is deleted during edit mode. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile
 * @public
 */
sap.m.TileContainer.prototype.tileDelete = function(oControlEvent) { return null; };

/**
 * 
 * Fired if a tile was moved 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile that has been moved
 * @param {int} oControlEvent.getParameters.newIndex The new index of the tile in the tiles aggregation
 * @public
 */
sap.m.TileContainer.prototype.tileMove = function(oControlEvent) { return null; };

/**
 * 
 * Adds a tile to the end of the tiles collection
 * @param {sap.m.Tile} oTile The tile to add
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.addTile = function(oTile) { return new sap.m.TileContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 * </p><p>
 * Fired if a Tile is added 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.attachTileAdd = function(oData,fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 * </p><p>
 * Fired if a tile is deleted during edit mode. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.attachTileDelete = function(oData,fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 * </p><p>
 * Fired if a tile was moved 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.attachTileMove = function(oData,fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Deletes a tile
 * @param {sap.m.Tile} oTile The tile to move
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.deleteTile = function(oTile) { return new sap.m.TileContainer(); };

/**
 * 
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.destroyTiles = function() { return new sap.m.TileContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.detachTileAdd = function(fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.detachTileDelete = function(fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.detachTileMove = function(fnFunction,oListener) { return new sap.m.TileContainer(); };

/**
 * 
 * Creates a new subclass of class sap.m.TileContainer with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.TileContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event tileAdd to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.TileContainer.prototype.fireTileAdd = function(mArguments) { return new sap.m.TileContainer(); };

/**
 * 
 * Fire event tileDelete to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile
 * </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.TileContainer.prototype.fireTileDelete = function(mArguments) { return new sap.m.TileContainer(); };

/**
 * 
 * Fire event tileMove to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile that has been moved</li>
 * <li>'newIndex' of type <code>int</code> The new index of the tile in the tiles aggregation</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.m.TileContainer.prototype.fireTileMove = function(mArguments) { return new sap.m.TileContainer(); };

/**
 * 
 * Getter for property <code>allowAdd</code>.
 * Determines whether the user is allowed to add tiles in edit mode (editable = true)
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>allowAdd</code>
 * @public
 * 
 */
sap.m.TileContainer.prototype.getAllowAdd = function() { return false; };

/**
 * 
 * Getter for property <code>editable</code>.
 * Whether the tile container is editable and you can move or delete or add tiles.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.m.TileContainer.prototype.getEditable = function() { return false; };

/**
 * 
 * Getter for property <code>height</code>.
 * The height of the container in pixel
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.m.TileContainer.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Returns the index of the first tile that is visible in the current page
 * @returns {sap.m.TileContainer} The index of the first tile that is visible in the current page.
 * @public
 */
sap.m.TileContainer.prototype.getPageFirstTileIndex = function() { return new sap.m.TileContainer(); };

/**
 * 
 * Getter for aggregation <code>tiles</code>.<br/>
 * The tiles to be displayed by the tile container
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.m.TileContainer.prototype.getTiles = function() { return new Array(); };

/**
 * 
 * Getter for property <code>width</code>.
 * The width of the container in pixel
 * </p><p>
 * Default value is <code>100%</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.m.TileContainer.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.m.TileContainer.prototype.indexOfTile = function(oTile) { return 0; };

/**
 * 
 * Inserts a tile to the given index
 * @param {sap.m.Tile} oTile The tile to insert
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.insertTile = function(oTile,iIndex) { return new sap.m.TileContainer(); };

/**
 * 
 * Moves a given tile to the given index
 * @param {sap.m.Tile} oTile The tile to move
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.moveTile = function(oTile,iIndex) { return new sap.m.TileContainer(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.m.TileContainer.prototype.removeAllTiles = function() { return new Array(); };

/**
 * 
 * Removes an tile from the aggregation named <code>tiles</code>.
 * @param {int | string | sap.ui.core.Control} vTile the tile to remove or its index or id
 * @return {sap.ui.core.Control} the removed tile or null
 * @public
 * 
 */
sap.m.TileContainer.prototype.removeTile = function(vTile) { return new sap.ui.core.Control(); };

/**
 * 
 * Scrolls to the page where the given tile or tile index is included. 
 * Optionally this can be done animated or not. With IE9 the scroll is never animated.
 * @param {sap.m.Tile|int} vTile The tile or tile index to be scrolled into view
 * @param {boolean} bAnimated Whether the scroll should be animated.
 * @public
 */
sap.m.TileContainer.prototype.scrollIntoView = function(vTile,bAnimated) { return null; };

/**
 * 
 * Scrolls one page to the left
 * @public
 */
sap.m.TileContainer.prototype.scrollLeft = function() { return null; };

/**
 * 
 * Scrolls one page to the right
 * @public
 */
sap.m.TileContainer.prototype.scrollRight = function() { return null; };

/**
 * 
 * Setter for property <code>allowAdd</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bAllowAdd  new value for property <code>allowAdd</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.setAllowAdd = function(bAllowAdd) { return new sap.m.TileContainer(); };

/**
 * 
 * Sets the editable property to the tile container that allows to move icons
 * This is currently also set with a long tap
 * @param {boolean} Whether the container is in edit mode or not.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.setEditable = function(Whether) { return new sap.m.TileContainer(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.setHeight = function(sHeight) { return new sap.m.TileContainer(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>100%</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.m.TileContainer.prototype.setWidth = function(sWidth) { return new sap.m.TileContainer(); };


// ---- sap.m.touch --------------------------------------------------------------------------

/**
 * 
 * Given a list of touches, count the number of touches related with the given element.
 * @param {TouchList} oTouchList The list of touch objects to search.
 * @param {jQuery|Element|string} vElement A jQuery element or an element reference or an element id.
 * @return {number} The number of touches related with the given element.
 * @public
 * 
 * @memberOf sap.m.touch
 */
sap.m.touch.countContained = function(oTouchList,vElement) { return 0.0; };

/**
 * 
 * Given a list of touch objects, find the touch that matches the given one.
 * @param {TouchList} oTouchList The list of touch objects to search.
 * @param {Touch|number} oTouch A touch object to find or a Touch.identifier that uniquely identifies the current finger in the touch session.
 * @return {object|undefined} The touch matching if any.
 * @public
 * 
 * @memberOf sap.m.touch
 */
sap.m.touch.find = function(oTouchList,oTouch) { return new Object(); };


// ---- sap.m.URLHelper --------------------------------------------------------------------------

/**
 * 
 * Adds an event registration for redirect
 * @param {Function} fnFunction The function to call, when the event occurs.
 * @param {Object} [oListener] The object, that wants to be notified, when the event occurs
 * @return {Object} sap.m.URLHelper instance
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.attachRedirect = function(fnFunction,oListener) { return null; };

/**
 * 
 * Detach already registered redirect event
 * @param {Function} fnFunction The function to call, when the event occurs.
 * @param {Object} [oListener] The object, that wants to be notified, when the event occurs
 * @return {Object} sap.m.URLHelper instance
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.detachRedirect = function(fnFunction,oListener) { return null; };

/**
 * 
 * Builds Email URI from given parameter.
 * Trims spaces from email addresses
 * @param {String} [sEmail] Destination email address.
 * @param {String} [sSubject] Subject of the email address.
 * @param {String} [sBody] Default message text.
 * @param {String} [sCC] Carbon Copy email address.
 * @param {String} [sBCC] Blind carbon copy email address.
 * @return {String} Email URI scheme.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.normalizeEmail = function(sEmail,sSubject,sBody,sCC,sBCC) { return null; };

/**
 * 
 * Sanitize the given telephone number and returns SMS URI scheme
 * @param {String} [sTel] telephone number.
 * @return {String} SMS URI scheme.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.normalizeSms = function(sTel) { return null; };

/**
 * 
 * Sanitize the given telephone number and returns telephone URI scheme
 * @param {String} [sTel] telephone number.
 * @return {String} telephone URI scheme.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.normalizeTel = function(sTel) { return null; };

/**
 * 
 * Redirects to given URL
 * This method fires "redirect" event before open the URL
 * @param {String} sURL Uniform resource locator.
 * @param {Boolean} [bNewWindow] Opens URL in a new browser window
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.redirect = function(sURL,bNewWindow) { return null; };

/**
 * 
 * Trigger email application to send email
 * Trims spaces from email addresses
 * @param {String} [sEmail] Destination email address.
 * @param {String} [sSubject] Subject of the email address.
 * @param {String} [sBody] Default message text.
 * @param {String} [sCC] Carbon Copy email address.
 * @param {String} [sBCC] Blind carbon copy email address.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.triggerEmail = function(sEmail,sSubject,sBody,sCC,sBCC) { return null; };

/**
 * 
 * Trigger SMS application to send SMS to given telephone number
 * @param {String} [sTel] telephone number.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.triggerSms = function(sTel) { return null; };

/**
 * 
 * Trigger telephone to call given telephone number
 * @param {String} [sTel] telephone number.
 * @public
 * 
 * @memberOf sap.m.URLHelper
 */
sap.m.URLHelper.triggerTel = function(sTel) { return null; };


// ---- sap.m.VBox --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VBox.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.m.FlexBox#constructor sap.m.FlexBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The VBox control builds the container for a vertical flexible box layout. VBox is a convenience control as it is just a specialized FlexBox control.
 * @extends sap.m.FlexBox
 * @version 1.14.0
 * @constructor   
 * @public
 * 
 */
sap.m.VBox = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.m.VBox with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.m.VBox.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.m --------------------------------------------------------------------------

/**
 * 
 * Search given control's parents and try to find iScroll
 * @param {sap.ui.core.Control} oControl
 * @return {iScroll|undefined} iScroll reference or undefined if cannot find
 * @public
 * @since 1.11
 * @memberOf sap.m
 */
sap.m.getIScroll = null;

/**
 * 
 * Search given control's parents and try to find ScrollDelegate
 * @param {sap.ui.core.Control} oControl
 * @return {Object|undefined} ScrollDelegate or undefined if cannot find
 * @public
 * @since 1.11
 * @memberOf sap.m
 */
sap.m.getScrollDelegate = null;


// ---- sap.m.BackgroundDesign --------------------------------------------------------------------------

/**
 * 
 * A solid background color dependent on the theme. 
 * @public
 * @memberOf sap.m.BackgroundDesign
 */
sap.m.BackgroundDesign.Solid = null;

/**
 * 
 * A translucent background depending on the opacity value of the theme. 
 * @public
 * @memberOf sap.m.BackgroundDesign
 */
sap.m.BackgroundDesign.Translucent = null;

/**
 * 
 * Transparent background. 
 * @public
 * @memberOf sap.m.BackgroundDesign
 */
sap.m.BackgroundDesign.Transparent = null;


// ---- sap.m.ButtonType --------------------------------------------------------------------------

/**
 * 
 * accept type (blue button) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Accept = null;

/**
 * 
 * back type (back navigation button for header) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Back = null;

/**
 * 
 * default type (no special styling) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Default = null;

/**
 * 
 * emphasized type 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Emphasized = null;

/**
 * 
 * reject style (red button) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Reject = null;

/**
 * 
 * transparent type 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Transparent = null;

/**
 * 
 * Unstyled type (no styling) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Unstyled = null;

/**
 * 
 * up type (up navigation button for header) 
 * @public
 * @memberOf sap.m.ButtonType
 */
sap.m.ButtonType.Up = null;


// ---- sap.m.DateTimeInputType --------------------------------------------------------------------------

/**
 * 
 * An input control for specifying a date value. The user can select a month, day of the month, and year. 
 * @public
 * @memberOf sap.m.DateTimeInputType
 */
sap.m.DateTimeInputType.Date = null;

/**
 * 
 * An input control for specifying a date and time value. The user can select a month, day of the month, year, and time of day. 
 * @public
 * @memberOf sap.m.DateTimeInputType
 */
sap.m.DateTimeInputType.DateTime = null;

/**
 * 
 * An input control for specifying a time value. The user can select the hour, minute, and optionally AM or PM. 
 * @public
 * @memberOf sap.m.DateTimeInputType
 */
sap.m.DateTimeInputType.Time = null;


// ---- sap.m.DialogType --------------------------------------------------------------------------

/**
 * 
 * Dialog with type Message looks the same as the Stardard Dialog in Android. And it puts the left, right buttons to the bottom of the Dialog in iOS. 
 * @public
 * @memberOf sap.m.DialogType
 */
sap.m.DialogType.Message = null;

/**
 * 
 * This is the default value for Dialog type. Stardard dialog in iOS has a header on the top and the left, right buttons are put inside the header. In android, the left, right buttons are put to the bottom of the Dialog. 
 * @public
 * @memberOf sap.m.DialogType
 */
sap.m.DialogType.Standard = null;


// ---- sap.m.FlexAlignItems --------------------------------------------------------------------------

/**
 * 
 * If the box items' inline axes are the same as the cross axis, this value is identical to ?start?. Otherwise, it participates in baseline alignment: all participating box items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.Baseline = null;

/**
 * 
 * The box items' margin boxes are centered in the cross axis within the line. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.Center = null;

/**
 * 
 * The cross-start margin edges of the box items are placed flush with the cross-end edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.End = null;

/**
 * 
 * Inherits the value from its parent. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.Inherit = null;

/**
 * 
 * The cross-start margin edges of the box items are placed flush with the cross-start edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.Start = null;

/**
 * 
 * Make the cross size of the items' margin boxes as close to the same size as the line as possible. 
 * @public
 * @memberOf sap.m.FlexAlignItems
 */
sap.m.FlexAlignItems.Stretch = null;


// ---- sap.m.FlexAlignSelf --------------------------------------------------------------------------

/**
 * 
 * Takes up the value of alignItems from the parent FlexBox 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Auto = null;

/**
 * 
 * If the box item's inline axis is the same as the cross axis, this value is identical to ?start?. Otherwise, it participates in baseline alignment: all participating box items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Baseline = null;

/**
 * 
 * The box item's margin box is centered in the cross axis within the line. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Center = null;

/**
 * 
 * The cross-start margin edges of the box item is placed flush with the cross-end edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.End = null;

/**
 * 
 * Inherits the value from its parent. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Inherit = null;

/**
 * 
 * The cross-start margin edges of the box item is placed flush with the cross-start edge of the line. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Start = null;

/**
 * 
 * Make the cross size of the item's margin box as close to the same size as the line as possible. 
 * @public
 * @memberOf sap.m.FlexAlignSelf
 */
sap.m.FlexAlignSelf.Stretch = null;


// ---- sap.m.FlexDirection --------------------------------------------------------------------------

/**
 * 
 * Elements are layed out along the direction of the block axis (usually top to bottom). 
 * @public
 * @memberOf sap.m.FlexDirection
 */
sap.m.FlexDirection.Column = null;

/**
 * 
 * Elements are layed out along the reverse direction of the block axis (usually bottom to top). 
 * @public
 * @memberOf sap.m.FlexDirection
 */
sap.m.FlexDirection.ColumnReverse = null;

/**
 * 
 * Inherits the value from its parent. 
 * @public
 * @memberOf sap.m.FlexDirection
 */
sap.m.FlexDirection.Inherit = null;

/**
 * 
 * Elements are layed out along the direction of the inline axis (text direction). 
 * @public
 * @memberOf sap.m.FlexDirection
 */
sap.m.FlexDirection.Row = null;

/**
 * 
 * Elements are layed out along the reverse direction of the inline axis (against the text direction). 
 * @public
 * @memberOf sap.m.FlexDirection
 */
sap.m.FlexDirection.RowReverse = null;


// ---- sap.m.FlexJustifyContent --------------------------------------------------------------------------

/**
 * 
 * Box items are packed toward the center of the line. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.Center = null;

/**
 * 
 * Box items are packed toward the end of the line. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.End = null;

/**
 * 
 * Inherits the value from its parent. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.Inherit = null;

/**
 * 
 * Box items are evenly distributed in the line, with half-size spaces on either end. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.SpaceAround = null;

/**
 * 
 * Box items are evenly distributed in the line. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.SpaceBetween = null;

/**
 * 
 * Box items are packed toward the start of the line. 
 * @public
 * @memberOf sap.m.FlexJustifyContent
 */
sap.m.FlexJustifyContent.Start = null;


// ---- sap.m.FlexRendertype --------------------------------------------------------------------------

/**
 * 
 * DIV elements are used for rendering 
 * @public
 * @memberOf sap.m.FlexRendertype
 */
sap.m.FlexRendertype.Div = null;

/**
 * 
 * Unordered lists are used for rendering. 
 * @public
 * @memberOf sap.m.FlexRendertype
 */
sap.m.FlexRendertype.List = null;


// ---- sap.m.InputType --------------------------------------------------------------------------

/**
 * 
 * An input control for specifying a date value. The user can select a month, day of the month, and year. 
 * @public
 * @deprecated Since version 1.9.1. 
 * Please use sap.m.DateTimeInput control with type "Date" to create date input.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Date = null;

/**
 * 
 * An input control for specifying a date and time value. The user can select a month, day of the month, year, and time of day. 
 * @public
 * @deprecated Since version 1.9.1. 
 * Please use dedicated sap.m.DateTimeInput control with type "DateTime" to create date-time input.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Datetime = null;

/**
 * 
 * An input control for specifying a date and time value where the format depends on the locale. 
 * @public
 * @deprecated Since version 1.9.1. 
 * Please use dedicated sap.m.DateTimeInput control with type "DateTime" to create date-time input.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.DatetimeLocale = null;

/**
 * 
 * A text field for specifying an email address. Brings up a keyboard optimized for email address entry. 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Email = null;

/**
 * 
 * An input control for selecting a month. 
 * @public
 * @deprecated Since version 1.9.1. 
 * There is no cross-platform support. Please do not use this Input type.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Month = null;

/**
 * 
 * A text field for specifying a number. Brings up a number pad keyboard. Specifying an input type of \d* or [0-9]* is equivalent to using this type. 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Number = null;

/**
 * 
 * Password input where the user entry cannot be seen. 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Password = null;

/**
 * 
 * A text field for specifying a phone number. Brings up a phone pad keyboard. 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Tel = null;

/**
 * 
 * default (text) 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Text = null;

/**
 * 
 * An input control for specifying a time value. The user can select the hour, minute, and optionally AM or PM. 
 * @public
 * @deprecated Since version 1.9.1. 
 * Please use dedicated sap.m.DateTimeInput control with type "Time" to create time input.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Time = null;

/**
 * 
 * A text field for specifying a URL. Brings up a keyboard optimized for URL entry. 
 * @public
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Url = null;

/**
 * 
 * An input control for selecting a week. 
 * @public
 * @deprecated Since version 1.9.1. 
 * There is no cross-platform support. Please do not use this Input type.
 * @memberOf sap.m.InputType
 */
sap.m.InputType.Week = null;


// ---- sap.m.LabelDesign --------------------------------------------------------------------------

/**
 * 
 * Displays the label in bold. 
 * @public
 * @memberOf sap.m.LabelDesign
 */
sap.m.LabelDesign.Bold = null;

/**
 * 
 * Displays the label in normal mode. 
 * @public
 * @memberOf sap.m.LabelDesign
 */
sap.m.LabelDesign.Standard = null;


// ---- sap.m.ListHeaderDesign --------------------------------------------------------------------------

/**
 * 
 * Plain header style 
 * @public
 * @memberOf sap.m.ListHeaderDesign
 */
sap.m.ListHeaderDesign.Plain = null;

/**
 * 
 * Standard header style 
 * @public
 * @memberOf sap.m.ListHeaderDesign
 */
sap.m.ListHeaderDesign.Standard = null;


// ---- sap.m.ListMode --------------------------------------------------------------------------

/**
 * 
 * delete mode (only one list item can be deleted) 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.Delete = null;

/**
 * 
 * multi selection mode (whole list item including checkbox will be selected) 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.MultiSelect = null;

/**
 * 
 * default mode (no selection) 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.None = null;

/**
 * 
 * right positioned single selection mode (only one list item can be selected) 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.SingleSelect = null;

/**
 * 
 * left positioned single selection mode (only one list item can be selected) 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.SingleSelectLeft = null;

/**
 * 
 * Single selection master mode (only one list item can be selected), selected item is highlighted but no radiobutton is visible. 
 * @public
 * @memberOf sap.m.ListMode
 */
sap.m.ListMode.SingleSelectMaster = null;


// ---- sap.m.ListSeparators --------------------------------------------------------------------------

/**
 * 
 * Separators around all items. 
 * @public
 * @memberOf sap.m.ListSeparators
 */
sap.m.ListSeparators.All = null;

/**
 * 
 * Separators only between the items. 
 * @public
 * @memberOf sap.m.ListSeparators
 */
sap.m.ListSeparators.Inner = null;

/**
 * 
 * No Separators are used. 
 * @public
 * @memberOf sap.m.ListSeparators
 */
sap.m.ListSeparators.None = null;


// ---- sap.m.ListType --------------------------------------------------------------------------

/**
 * 
 * Active 
 * @public
 * @memberOf sap.m.ListType
 */
sap.m.ListType.Active = null;

/**
 * 
 * Detail 
 * @public
 * @memberOf sap.m.ListType
 */
sap.m.ListType.Detail = null;

/**
 * 
 * DetailAndActive 
 * @public
 * @memberOf sap.m.ListType
 */
sap.m.ListType.DetailAndActive = null;

/**
 * 
 * Inactive 
 * @public
 * @memberOf sap.m.ListType
 */
sap.m.ListType.Inactive = null;

/**
 * 
 * Navigation 
 * @public
 * @memberOf sap.m.ListType
 */
sap.m.ListType.Navigation = null;


// ---- sap.m.MessageBox.Action --------------------------------------------------------------------------

/**
 * 
 * Adds an "Abort" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.ABORT = null;

/**
 * 
 * Adds a "Cancel" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.CANCEL = null;

/**
 * 
 * Adds a "Close" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.CLOSE = null;

/**
 * 
 * Adds a "Delete" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.DELETE = null;

/**
 * 
 * Adds an "Ignore" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.IGNORE = null;

/**
 * 
 * Adds a "No" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.NO = null;

/**
 * 
 * Adds an "Ok" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.OK = null;

/**
 * 
 * Adds a "Retry" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.RETRY = null;

/**
 * 
 * Adds a "Yes" button to the message box.
 * @public
 * @memberOf sap.m.MessageBox.Action
 */
sap.m.MessageBox.Action.YES = null;


// ---- sap.m.MessageBox.Icon --------------------------------------------------------------------------

/**
 * 
 * Shows the error icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.ERROR = null;

/**
 * 
 * Shows the information icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.INFORMATION = null;

/**
 * 
 * Shows no icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.NONE = null;

/**
 * 
 * Shows the question icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.QUESTION = null;

/**
 * 
 * Shows the success icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.SUCCESS = null;

/**
 * 
 * Shows the warning icon in the message box.
 * @public
 * @memberOf sap.m.MessageBox.Icon
 */
sap.m.MessageBox.Icon.WARNING = null;


// ---- sap.m.PageBackgroundDesign --------------------------------------------------------------------------

/**
 * 
 * Page background color when a List is set as the Page content. 
 * @public
 * @memberOf sap.m.PageBackgroundDesign
 */
sap.m.PageBackgroundDesign.List = null;

/**
 * 
 * A solid background color dependent on the theme. 
 * @public
 * @memberOf sap.m.PageBackgroundDesign
 */
sap.m.PageBackgroundDesign.Solid = null;

/**
 * 
 * Standard Page background color. 
 * @public
 * @memberOf sap.m.PageBackgroundDesign
 */
sap.m.PageBackgroundDesign.Standard = null;

/**
 * 
 * Transparent background for the page. 
 * @public
 * @memberOf sap.m.PageBackgroundDesign
 */
sap.m.PageBackgroundDesign.Transparent = null;


// ---- sap.m.PlacementType --------------------------------------------------------------------------

/**
 * 
 * Popover will be placed at the bottom of the reference control. 
 * @public
 * @memberOf sap.m.PlacementType
 */
sap.m.PlacementType.Bottom = null;

/**
 * 
 * Popover will be placed at the left side of the reference control. 
 * @public
 * @memberOf sap.m.PlacementType
 */
sap.m.PlacementType.Left = null;

/**
 * 
 * Popover will be placed at the right side of the reference control. 
 * @public
 * @memberOf sap.m.PlacementType
 */
sap.m.PlacementType.Right = null;

/**
 * 
 * Popover will be placed at the top of the reference control. 
 * @public
 * @memberOf sap.m.PlacementType
 */
sap.m.PlacementType.Top = null;


// ---- sap.m.PopinDisplay --------------------------------------------------------------------------

/**
 * 
 * Inside the table popin, header is displayed in first line and value field is displayed in next line. 
 * @public
 * @memberOf sap.m.PopinDisplay
 */
sap.m.PopinDisplay.Block = null;

/**
 * 
 * Inside the table popin, value field is displayed next to the header in the same line. Note: If there is no enough space for the value field then goes to next line. 
 * @public
 * @memberOf sap.m.PopinDisplay
 */
sap.m.PopinDisplay.Inline = null;


// ---- sap.m.RatingIndicatorVisualMode --------------------------------------------------------------------------

/**
 * 
 * Values are rounded to the nearest integer value (e.g. 1.7 -> 2). 
 * @public
 * @memberOf sap.m.RatingIndicatorVisualMode
 */
sap.m.RatingIndicatorVisualMode.Full = null;

/**
 * 
 * Values are rounded to the nearest half value (e.g. 1.7 -> 1.5). 
 * @public
 * @memberOf sap.m.RatingIndicatorVisualMode
 */
sap.m.RatingIndicatorVisualMode.Half = null;


// ---- sap.m.ScreenSize --------------------------------------------------------------------------

/**
 * 
 * 1024px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Desktop = null;

/**
 * 
 * 768px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Large = null;

/**
 * 
 * 560px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Medium = null;

/**
 * 
 * 240px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Phone = null;

/**
 * 
 * 480px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Small = null;

/**
 * 
 * 600px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.Tablet = null;

/**
 * 
 * 960px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.XLarge = null;

/**
 * 
 * 320px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.XSmall = null;

/**
 * 
 * 1120px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.XXLarge = null;

/**
 * 
 * 240px wide 
 * @public
 * @memberOf sap.m.ScreenSize
 */
sap.m.ScreenSize.XXSmall = null;


// ---- sap.m.SplitAppMode --------------------------------------------------------------------------

/**
 * 
 * Master will be shown inside a Popover when in portrait mode 
 * @public
 * @memberOf sap.m.SplitAppMode
 */
sap.m.SplitAppMode.PopoverMode = null;

/**
 * 
 * Master will automatically be hidden in portrait mode. 
 * @public
 * @memberOf sap.m.SplitAppMode
 */
sap.m.SplitAppMode.ShowHideMode = null;

/**
 * 
 * Master will always be shown but in a compressed version when in portrait mode. 
 * @public
 * @memberOf sap.m.SplitAppMode
 */
sap.m.SplitAppMode.StretchCompressMode = null;


// ---- sap.m.StandardTileType --------------------------------------------------------------------------

/**
 * 
 * Tile representing that something needs to be created 
 * @public
 * @memberOf sap.m.StandardTileType
 */
sap.m.StandardTileType.Create = null;

/**
 * 
 * Monitor tile 
 * @public
 * @memberOf sap.m.StandardTileType
 */
sap.m.StandardTileType.Monitor = null;

/**
 * 
 * Default type 
 * @public
 * @memberOf sap.m.StandardTileType
 */
sap.m.StandardTileType.None = null;


// ---- sap.m.SwipeDirection --------------------------------------------------------------------------

/**
 * 
 * Both directions (left to right or right to left) 
 * @public
 * @memberOf sap.m.SwipeDirection
 */
sap.m.SwipeDirection.Both = null;

/**
 * 
 * Swipe from left to right 
 * @public
 * @memberOf sap.m.SwipeDirection
 */
sap.m.SwipeDirection.LeftToRight = null;

/**
 * 
 * Swipe from right to left. 
 * @public
 * @memberOf sap.m.SwipeDirection
 */
sap.m.SwipeDirection.RightToLeft = null;


// ---- sap.m.SwitchType --------------------------------------------------------------------------

/**
 * 
 * Switch with accept and reject icons 
 * @public
 * @memberOf sap.m.SwitchType
 */
sap.m.SwitchType.AcceptReject = null;

/**
 * 
 * Will show "ON" and "OFF" translated to the current language or the custom text if provided 
 * @public
 * @memberOf sap.m.SwitchType
 */
sap.m.SwitchType.Default = null;


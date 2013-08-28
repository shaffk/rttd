
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.unified --------------------------------------------------------------------------


// ---- sap.ui.unified.BasicShellItem --------------------------------------------------------------------------


// ---- sap.ui.unified.IndexLayout --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new IndexLayout.
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
 * <li>{@link #getItemWidth itemWidth} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getItemHeight itemHeight} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getPopinHeight popinHeight} : sap.ui.core.CSSSize (default: '300px')</li>
 * <li>{@link #getEnableScaling enableScaling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getPopinContent popinContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getPopinItem popinItem} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Layout which renders content items with equal width and height. The items are arranged in rows.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.IndexLayout = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.addContent = function(oContent) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Adds some popinContent <code>oPopinContent</code> 
 * to the aggregation named <code>popinContent</code>.
 * @param {sap.ui.core.Control}
 *            oPopinContent the popinContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.addPopinContent = function(oPopinContent) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.destroyContent = function() { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Destroys all the popinContent in the aggregation 
 * named <code>popinContent</code>.
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.destroyPopinContent = function() { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.IndexLayout with name <code>sClassName</code> 
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
sap.ui.unified.IndexLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content items
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>enableScaling</code>.
 * Whether the given item width/height should be scaled according to the screen size.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>enableScaling</code>
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getEnableScaling = function() { return false; };

/**
 * 
 * Getter for property <code>itemHeight</code>.
 * The height of a content item. Only px values are allowed.
 * </p><p>
 * Default value is <code>200px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>itemHeight</code>
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getItemHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>itemWidth</code>.
 * The width of a content item. Only px values are allowed.
 * </p><p>
 * Default value is <code>200px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>itemWidth</code>
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getItemWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for aggregation <code>popinContent</code>.<br/>
 * The content of the popin
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getPopinContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>popinHeight</code>.
 * The height of the popin item. Only px values are allowed.
 * </p><p>
 * Default value is <code>300px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>popinHeight</code>
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getPopinHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * The item in the content aggregation to which the popin should belong to. If not set no popin is shown.
 * @return {string} Id of the element which is the current target of the <code>popinItem</code> association, or null
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.getPopinItem = function() { return ""; };

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
sap.ui.unified.IndexLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>popinContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPopinContent the popinContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.indexOfPopinContent = function(oPopinContent) { return 0; };

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
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Inserts a popinContent into the aggregation named <code>popinContent</code>.
 * @param {sap.ui.core.Control}
 *          oPopinContent the popinContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the popinContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the popinContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the popinContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.insertPopinContent = function(oPopinContent,iIndex) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>popinContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.removeAllPopinContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an popinContent from the aggregation named <code>popinContent</code>.
 * @param {int | string | sap.ui.core.Control} vPopinContent the popinContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed popinContent or null
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.removePopinContent = function(vPopinContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>enableScaling</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bEnableScaling  new value for property <code>enableScaling</code>
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.setEnableScaling = function(bEnableScaling) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Setter for property <code>itemHeight</code>.
 * </p><p>
 * Default value is <code>200px</code> 
 * @param {sap.ui.core.CSSSize} sItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.setItemHeight = function(sItemHeight) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Setter for property <code>itemWidth</code>.
 * </p><p>
 * Default value is <code>200px</code> 
 * @param {sap.ui.core.CSSSize} sItemWidth  new value for property <code>itemWidth</code>
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.setItemWidth = function(sItemWidth) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * Setter for property <code>popinHeight</code>.
 * </p><p>
 * Default value is <code>300px</code> 
 * @param {sap.ui.core.CSSSize} sPopinHeight  new value for property <code>popinHeight</code>
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.setPopinHeight = function(sPopinHeight) { return new sap.ui.unified.IndexLayout(); };

/**
 * 
 * The item in the content aggregation to which the popin should belong to. If not set no popin is shown.
 * @param {string | sap.ui.core.Control} vPopinItem 
 *    Id of an element which becomes the new target of this <code>popinItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.unified.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexLayout.prototype.setPopinItem = function(vPopinItem) { return new sap.ui.unified.IndexLayout(); };


// ---- sap.ui.unified.IndexTile --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new IndexTile.
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
 * <li>{@link #getSelected selected} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.IndexTile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * A basic Tile control used in the ShellIndex for second level items.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.IndexTile = function(sId,mSettings) {};
/**
 * 
 * Fired when a tile is clicked or touched. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.IndexTile.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.IndexTile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.IndexTile</code>.<br/> itself. 
 * </p><p>
 * Fired when a tile is clicked or touched. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.IndexTile</code>.<br/> itself.
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.IndexTile</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.IndexTile with name <code>sClassName</code> 
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
sap.ui.unified.IndexTile.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.IndexTile.prototype.firePress = function(mArguments) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Getter for property <code>description</code>.
 * A description of the tile.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The URI to an Icon for example "sap-icon://washing-machine"
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>selected</code>.
 * Whether the tile is selected. Sets a CSS class.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.getSelected = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the tile, shown under the icon.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.setDescription = function(sDescription) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.setIcon = function(sIcon) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Setter for property <code>selected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.setSelected = function(bSelected) { return new sap.ui.unified.IndexTile(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.unified.IndexTile} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.IndexTile.prototype.setTitle = function(sTitle) { return new sap.ui.unified.IndexTile(); };


// ---- sap.ui.unified.Shell --------------------------------------------------------------------------

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
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getFullHeightContent fullHeightContent} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getNavContent navContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getItems items} : sap.ui.unified.BasicShellItem[]</li>
 * <li>{@link #getHeadItems headItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedHeadItem selectedHeadItem} : string | sap.ui.unified.ShellHeadContentItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.Shell#event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Shell
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.Shell = function(sId,mSettings) {};
/**
 * 
 * Event which is fired when a navigation item is selected by the user. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the item.
 * @param {string} oControlEvent.getParameters.item The selected item
 * @public
 */
sap.ui.unified.Shell.prototype.itemSelect = function(oControlEvent) { return null; };

/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addContent = function(oContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some headItem <code>oHeadItem</code> 
 * to the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addHeadItem = function(oHeadItem) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.unified.BasicShellItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addItem = function(oItem) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some navContent <code>oNavContent</code> 
 * to the aggregation named <code>navContent</code>.
 * @param {sap.ui.core.Control}
 *            oNavContent the navContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addNavContent = function(oNavContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Adds some paneContent <code>oPaneContent</code> 
 * to the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.addPaneContent = function(oPaneContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.unified.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.Shell</code>.<br/> itself. 
 * </p><p>
 * Event which is fired when a navigation item is selected by the user. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.Shell</code>.<br/> itself.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the headItems in the aggregation 
 * named <code>headItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyHeadItems = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyItems = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the navContent in the aggregation 
 * named <code>navContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyNavContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys all the paneContent in the aggregation 
 * named <code>paneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroyPaneContent = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Destroys the search in the aggregation 
 * named <code>search</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.destroySearch = function() { return new sap.ui.unified.Shell(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.unified.Shell</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.Shell with name <code>sClassName</code> 
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
sap.ui.unified.Shell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event itemSelect to attached listeners.
 * </p><p>
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The id of the item.</li>
 * <li>'item' of type <code>string</code> The selected item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * 
 */
sap.ui.unified.Shell.prototype.fireItemSelect = function(mArguments) { return false; };

/**
 * 
 * Getter for property <code>applyContentPadding</code>.
 * Whether the content area of the shell should have a theme-dependent padding or not.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getApplyContentPadding = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>fullHeightContent</code>.
 * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space.
 * However, if content is larger, scrollbars will appear at the content area and not on window level.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>fullHeightContent</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getFullHeightContent = function() { return false; };

/**
 * 
 * Getter for aggregation <code>headItems</code>.<br/>
 * The index items shown in the Shell header.
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getHeadItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * The application icon.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * The navigation items - either categories or normal items.
 * @return {sap.ui.unified.BasicShellItem[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>navContent</code>.<br/>
 * The content to appear in the left navigation pane area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getNavContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the right side pane area.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getPaneContent = function() { return new Array(); };

/**
 * 
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change completely in future!): The search control which should be displayed in the shell header.
 * @return {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSearch = function() { return new sap.ui.core.Control(); };

/**
 * 
 * The ID of the head item (only ShellHeadContentItem) that is currently selected.
 * @return {string} Id of the element which is the current target of the <code>selectedHeadItem</code> association, or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.getSelectedHeadItem = function() { return ""; };

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
sap.ui.unified.Shell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headItems</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfHeadItem = function(oHeadItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.BasicShellItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.BasicShellItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>navContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oNavContent the navContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfNavContent = function(oNavContent) { return 0; };

/**
 * 
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.indexOfPaneContent = function(oPaneContent) { return 0; };

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
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a headItem into the aggregation named <code>headItems</code>.
 * @param {sap.ui.unified.ShellHeadItem}
 *          oHeadItem the headItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headItem is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertHeadItem = function(oHeadItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.BasicShellItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a navContent into the aggregation named <code>navContent</code>.
 * @param {sap.ui.core.Control}
 *          oNavContent the navContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the navContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the navContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the navContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertNavContent = function(oNavContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 * @param {sap.ui.core.Control}
 *          oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.insertPaneContent = function(oPaneContent,iIndex) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>headItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllHeadItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.BasicShellItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>navContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllNavContent = function() { return new Array(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeAllPaneContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an headItem from the aggregation named <code>headItems</code>.
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadItem the headItem to remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headItem or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeHeadItem = function(vHeadItem) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.BasicShellItem} vItem the item to remove or its index or id
 * @return {sap.ui.unified.BasicShellItem} the removed item or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeItem = function(vItem) { return new sap.ui.unified.BasicShellItem(); };

/**
 * 
 * Removes an navContent from the aggregation named <code>navContent</code>.
 * @param {int | string | sap.ui.core.Control} vNavContent the navContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed navContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removeNavContent = function(vNavContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.removePaneContent = function(vPaneContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>applyContentPadding</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setApplyContentPadding = function(bApplyContentPadding) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>fullHeightContent</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFullHeightContent  new value for property <code>fullHeightContent</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setFullHeightContent = function(bFullHeightContent) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setIcon = function(sIcon) { return new sap.ui.unified.Shell(); };

/**
 * 
 * Setter for the aggregated <code>search</code>.
 * @param oSearch {sap.ui.core.Control}
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSearch = function(oSearch) { return new sap.ui.unified.Shell(); };

/**
 * 
 * The ID of the head item (only ShellHeadContentItem) that is currently selected.
 * @param {string | sap.ui.unified.ShellHeadContentItem} vSelectedHeadItem 
 *    Id of an element which becomes the new target of this <code>selectedHeadItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.Shell.prototype.setSelectedHeadItem = function(vSelectedHeadItem) { return new sap.ui.unified.Shell(); };


// ---- sap.ui.unified.ShellActionPopup --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellActionPopup.
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
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActions actions} : sap.ui.unified.ShellItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellActionPopup#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The ShellActionPopup used for Header Actions
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.1
 * @experimental Since version 1.13.1. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellActionPopup = function(sId,mSettings) {};
/**
 * 
 * Event which is fired when a action item is selected by the user. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The id of the action item.
 * @param {string} oControlEvent.getParameters.item The selected action item
 * @public
 */
sap.ui.unified.ShellActionPopup.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 * @param {sap.ui.unified.ShellItem}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.addAction = function(oAction) { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.ShellActionPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellActionPopup</code>.<br/> itself. 
 * </p><p>
 * Event which is fired when a action item is selected by the user. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellActionPopup</code>.<br/> itself.
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.destroyActions = function() { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.ShellActionPopup</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellActionPopup with name <code>sClassName</code> 
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
sap.ui.unified.ShellActionPopup.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The id of the action item.</li>
 * <li>'item' of type <code>string</code> The selected action item</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Getter for aggregation <code>actions</code>.<br/>
 * The action items.
 * @return {sap.ui.unified.ShellItem[]}
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.getActions = function() { return new Array(); };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the popup.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellItem</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellItem}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.indexOfAction = function(oAction) { return 0; };

/**
 * 
 * Inserts a action into the aggregation named <code>actions</code>.
 * @param {sap.ui.unified.ShellItem}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.insertAction = function(oAction,iIndex) { return new sap.ui.unified.ShellActionPopup(); };

/**
 * 
 * Removes an action from the aggregation named <code>actions</code>.
 * @param {int | string | sap.ui.unified.ShellItem} vAction the action to remove or its index or id
 * @return {sap.ui.unified.ShellItem} the removed action or null
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.removeAction = function(vAction) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.removeAllActions = function() { return new Array(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.unified.ShellActionPopup} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellActionPopup.prototype.setTitle = function(sTitle) { return new sap.ui.unified.ShellActionPopup(); };


// ---- sap.ui.unified.ShellHeadContentItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellHeadContentItem.
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
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: false)</li>
 * <li>{@link #getFullHeightContent fullHeightContent} : boolean (default: false)</li>
 * <li>{@link #getApplyIndexBackground applyIndexBackground} : boolean (default: true)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellHeadItem#constructor sap.ui.unified.ShellHeadItem}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Header Content item of the Shell.
 * @extends sap.ui.unified.ShellHeadItem
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.unified.ShellHeadContentItem = function(sId,mSettings) {};
/**
 * 
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.addContent = function(oContent) { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.destroyContent = function() { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellHeadContentItem with name <code>sClassName</code> 
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
sap.ui.unified.ShellHeadContentItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>applyContentPadding</code>.
 * Whether the content area which belongs to this item should have a theme-dependent padding or not.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.getApplyContentPadding = function() { return false; };

/**
 * 
 * Getter for property <code>applyIndexBackground</code>.
 * Whether the content area which belongs to this item should have a theme-dependent index page or a standard application background.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>applyIndexBackground</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.getApplyIndexBackground = function() { return false; };

/**
 * 
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the corresponding content page of this item.
 * @return {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.getContent = function() { return new Array(); };

/**
 * 
 * Getter for property <code>fullHeightContent</code>.
 * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space.
 * However, if content is larger, scrollbars will appear at the content area and not on window level.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>fullHeightContent</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.getFullHeightContent = function() { return false; };

/**
 * 
 * Getter for property <code>showHeader</code>.
 * Whether a header should be shown in the content area which belongs to this item.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.getShowHeader = function() { return false; };

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
sap.ui.unified.ShellHeadContentItem.prototype.indexOfContent = function(oContent) { return 0; };

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
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.removeAllContent = function() { return new Array(); };

/**
 * 
 * Removes an content from the aggregation named <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * 
 * Setter for property <code>applyContentPadding</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.setApplyContentPadding = function(bApplyContentPadding) { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Setter for property <code>applyIndexBackground</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bApplyIndexBackground  new value for property <code>applyIndexBackground</code>
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.setApplyIndexBackground = function(bApplyIndexBackground) { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Setter for property <code>fullHeightContent</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bFullHeightContent  new value for property <code>fullHeightContent</code>
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.setFullHeightContent = function(bFullHeightContent) { return new sap.ui.unified.ShellHeadContentItem(); };

/**
 * 
 * Setter for property <code>showHeader</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ui.unified.ShellHeadContentItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadContentItem.prototype.setShowHeader = function(bShowHeader) { return new sap.ui.unified.ShellHeadContentItem(); };


// ---- sap.ui.unified.ShellHeadItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellHeadItem.
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
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellHeadItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Header Action item of the Shell.
 * @extends sap.ui.core.Element
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellHeadItem = function(sId,mSettings) {};
/**
 * 
 * Event is fired when the user presses the item. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellHeadItem.prototype.press = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself. 
 * </p><p>
 * Event is fired when the user presses the item. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name <code>sClassName</code> 
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
sap.ui.unified.ShellHeadItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event press to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.firePress = function(mArguments) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>iconSelected</code>.
 * The icon of the selected item, either defined in the sap.ui.core.IconPool or an URI to a custom image. If not given the normal icon is used.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getIconSelected = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for property <code>startsSection</code>.
 * If set to true, a divider is displayed before the item.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>startsSection</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getStartsSection = function() { return false; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Setter for property <code>iconSelected</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setIconSelected = function(sIconSelected) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Setter for property <code>startsSection</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bStartsSection  new value for property <code>startsSection</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setStartsSection = function(bStartsSection) { return new sap.ui.unified.ShellHeadItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellHeadItem.prototype.setTitle = function(sTitle) { return new sap.ui.unified.ShellHeadItem(); };


// ---- sap.ui.unified.ShellIndex --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellIndex.
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
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellItemHandler#constructor sap.ui.unified.ShellItemHandler}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A Shell Navigation that is usually shown in the content area.
 * @extends sap.ui.unified.ShellItemHandler
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellIndex = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellIndex with name <code>sClassName</code> 
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
sap.ui.unified.ShellIndex.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.unified.ShellIndexNavigation --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellIndexNavigation.
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
 * <li>{@link #getShowNavigationBar showNavigationBar} : boolean (default: true)</li>
 * <li>{@link #getShowPagingButtons showPagingButtons} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellIndexNavigation#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellItemHandler#constructor sap.ui.unified.ShellItemHandler}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * This is an internal control for the ShellIndex and should not be used as stand alone.
 * Shows a text-only navigation bar with a pointer bar over the active item and buttons
 * right and left of the page in order to switch between items.
 * @extends sap.ui.unified.ShellItemHandler
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellIndexNavigation = function(sId,mSettings) {};
/**
 * 
 * Fires when an item in the IndexNavigation has been selected. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellIndexNavigation.prototype.select = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.unified.ShellIndexNavigation</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellIndexNavigation</code>.<br/> itself. 
 * </p><p>
 * Fires when an item in the IndexNavigation has been selected. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellIndexNavigation</code>.<br/> itself.
 * @return {sap.ui.unified.ShellIndexNavigation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellIndexNavigation(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.unified.ShellIndexNavigation</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellIndexNavigation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.unified.ShellIndexNavigation(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellIndexNavigation with name <code>sClassName</code> 
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
sap.ui.unified.ShellIndexNavigation.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event select to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellIndexNavigation} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.fireSelect = function(mArguments) { return new sap.ui.unified.ShellIndexNavigation(); };

/**
 * 
 * Returns the item that is currently selected in the navigation. If no item has been selected
 * by the user, the first item is returned.
 * @returns {BasicShellItem}
 * @public
 */
sap.ui.unified.ShellIndexNavigation.prototype.getCurrentItem = function() { return null; };

/**
 * 
 * Getter for property <code>showNavigationBar</code>.
 * Whether or not the text based navigation bar is shown.
 * </p><p>
 * Default value is <code>true</code>
 * @return {boolean} the value of property <code>showNavigationBar</code>
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.getShowNavigationBar = function() { return false; };

/**
 * 
 * Getter for property <code>showPagingButtons</code>.
 * Whether or not the page switch buttons are shown.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>showPagingButtons</code>
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.getShowPagingButtons = function() { return false; };

/**
 * 
 * Move the pointer over the item with the given Id and set it as the current item.
 * @param sItemId
 * @returns {sap.ui.unified.ShellIndexNavigation}
 * @public
 */
sap.ui.unified.ShellIndexNavigation.prototype.select = function(sItemId,animate) { return new sap.ui.unified.ShellIndexNavigation(); };

/**
 * 
 * Setter for property <code>showNavigationBar</code>.
 * </p><p>
 * Default value is <code>true</code> 
 * @param {boolean} bShowNavigationBar  new value for property <code>showNavigationBar</code>
 * @return {sap.ui.unified.ShellIndexNavigation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.setShowNavigationBar = function(bShowNavigationBar) { return new sap.ui.unified.ShellIndexNavigation(); };

/**
 * 
 * Setter for property <code>showPagingButtons</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bShowPagingButtons  new value for property <code>showPagingButtons</code>
 * @return {sap.ui.unified.ShellIndexNavigation} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellIndexNavigation.prototype.setShowPagingButtons = function(bShowPagingButtons) { return new sap.ui.unified.ShellIndexNavigation(); };


// ---- sap.ui.unified.ShellItem --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellItem.
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
 * <li>{@link #getKey key} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.ShellItem[]</li></ul>
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
 * Item for the Shell.
 * @extends sap.ui.core.Element
 * @implements sap.ui.unified.BasicShellItem
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * 
 */
sap.ui.unified.ShellItem = function(sId,mSettings) {};
/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.addItem = function(oItem) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.destroyItems = function() { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellItem with name <code>sClassName</code> 
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
sap.ui.unified.ShellItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>description</code>.
 * The description of the item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon of the item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Sub items of the item.
 * @return {sap.ui.unified.ShellItem[]}
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>key</code>.
 * The key of the item. Can be used as input for subsequent actions.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the item.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.ShellItem} vItem the item to remove or its index or id
 * @return {sap.ui.unified.ShellItem} the removed item or null
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.removeItem = function(vItem) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.setDescription = function(sDescription) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.setKey = function(sKey) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.unified.ShellItem} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItem.prototype.setTitle = function(sTitle) { return new sap.ui.unified.ShellItem(); };


// ---- sap.ui.unified.ShellItemBrowser --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellItemBrowser.
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
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellItemHandler#constructor sap.ui.unified.ShellItemHandler}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * This is an internal control for the ShellIndex and should not be used as stand alone.
 * Shows a tree like structure in the form of lists that are placed next to each other.
 * @extends sap.ui.unified.ShellItemHandler
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellItemBrowser = function(sId,mSettings) {};
/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellItemBrowser with name <code>sClassName</code> 
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
sap.ui.unified.ShellItemBrowser.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };


// ---- sap.ui.unified.ShellItemCategory --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellItemCategory.
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
 * <li>{@link #getKey key} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.ShellItem[]</li></ul>
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
 * Item Category for the Shell.
 * @extends sap.ui.core.Element
 * @implements sap.ui.unified.BasicShellItem
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellItemCategory = function(sId,mSettings) {};
/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.addItem = function(oItem) { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.destroyItems = function() { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellItemCategory with name <code>sClassName</code> 
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
sap.ui.unified.ShellItemCategory.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Getter for property <code>description</code>.
 * The description of the category.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>description</code>
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.getDescription = function() { return ""; };

/**
 * 
 * Getter for property <code>icon</code>.
 * The icon of the category.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.getIcon = function() { return new sap.ui.core.URI(); };

/**
 * 
 * Getter for aggregation <code>items</code>.<br/>
 * Sub items of the category.
 * @return {sap.ui.unified.ShellItem[]}
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.getItems = function() { return new Array(); };

/**
 * 
 * Getter for property <code>key</code>.
 * The key of the category. Can be used as input for subsequent actions.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>key</code>
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.getKey = function() { return ""; };

/**
 * 
 * Getter for property <code>title</code>.
 * The title of the category.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.getTitle = function() { return ""; };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.ShellItem} vItem the item to remove or its index or id
 * @return {sap.ui.unified.ShellItem} the removed item or null
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.removeItem = function(vItem) { return new sap.ui.unified.ShellItem(); };

/**
 * 
 * Setter for property <code>description</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sDescription  new value for property <code>description</code>
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.setDescription = function(sDescription) { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Setter for property <code>icon</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.setIcon = function(sIcon) { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Setter for property <code>key</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.setKey = function(sKey) { return new sap.ui.unified.ShellItemCategory(); };

/**
 * 
 * Setter for property <code>title</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.unified.ShellItemCategory} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemCategory.prototype.setTitle = function(sTitle) { return new sap.ui.unified.ShellItemCategory(); };


// ---- sap.ui.unified.ShellItemHandler --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellItemHandler.
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
 * <li>{@link #getItemProvider itemProvider} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.unified.ShellItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellItemHandler#event:itemsChanged itemsChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.unified.ShellItemHandler#event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * </p><p>
 * This is an abstract control and not meant to be used on its own.
 * ShellItemHandlers can keep ShellItems or a pointer to an ItemProvider which in turn holds
 * ShellItems. When calling the getItems-method either the items stored in the items-
 * Aggredation are returned or, if an ItemProvider is set, the getItems-method of said
 * provider is called.
 * @extends sap.ui.core.Control
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellItemHandler = function(sId,mSettings) {};
/**
 * 
 * </p><p>
 * Fires whenever the items that are returned by the getItems()-method (either the content
 * of the items aggregation or the content of the ItemProvider's item aggregation) change.
 * Controls can attach to this event in order to know when they have to update.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellItemHandler.prototype.itemsChanged = function(oControlEvent) { return null; };

/**
 * 
 * Fires when an item has been activated (touched/pressed). 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellItemHandler.prototype.itemSelect = function(oControlEvent) { return null; };

/**
 * 
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.addItem = function(oItem) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemsChanged' event of this <code>sap.ui.unified.ShellItemHandler</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellItemHandler</code>.<br/> itself. 
 * </p><p>
 * </p><p>
 * Fires whenever the items that are returned by the getItems()-method (either the content
 * of the items aggregation or the content of the ItemProvider's item aggregation) change.
 * Controls can attach to this event in order to know when they have to update.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellItemHandler</code>.<br/> itself.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.attachItemsChanged = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.unified.ShellItemHandler</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellItemHandler</code>.<br/> itself. 
 * </p><p>
 * Fires when an item has been activated (touched/pressed). 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellItemHandler</code>.<br/> itself.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.destroyItems = function() { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemsChanged' event of this <code>sap.ui.unified.ShellItemHandler</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.detachItemsChanged = function(fnFunction,oListener) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.unified.ShellItemHandler</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellItemHandler with name <code>sClassName</code> 
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
sap.ui.unified.ShellItemHandler.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event itemsChanged to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.fireItemsChanged = function(mArguments) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Fire event itemSelect to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.fireItemSelect = function(mArguments) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * Getter for property <code>itemProvider</code>.
 * </p><p>
 * The source of the items that will be shown in the navigation. When this property is
 * set, the content of the item-aggregation will be ignored and the itemProviders
 * item-aggregation will be used instead.
 * </p><p>
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>itemProvider</code>
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.getItemProvider = function() { return new Object(); };

/**
 * 
 * Checks for the provided <code>sap.ui.unified.ShellItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.unified.ShellItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * 
 * Inserts a item into the aggregation named <code>items</code>.
 * @param {sap.ui.unified.ShellItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ShellItemHandler} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.unified.ShellItemHandler(); };

/**
 * 
 * The ItemHandler is notified of an ItemSelection, it either notifies its own ItemHandler or
 * fires an itemSelect-Event. If the itemSelect-event uses the preventDefault-mechanism, the
 * ItemHandler does _not_ fire the internal itemSelected-event, meaning that the selection process
 * was not successful (for example if the item should not be marked as selected).
 * @public
 */
sap.ui.unified.ShellItemHandler.prototype.notifyOnItemSelect = function(oItem) { return null; };

/**
 * 
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellItem[]} an array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.removeAllItems = function() { return new Array(); };

/**
 * 
 * Removes an item from the aggregation named <code>items</code>.
 * @param {int | string | sap.ui.unified.ShellItem} vItem the item to remove or its index or id
 * @return {sap.ui.unified.ShellItem} the removed item or null
 * @public
 * 
 */
sap.ui.unified.ShellItemHandler.prototype.removeItem = function(vItem) { return new sap.ui.unified.ShellItem(); };


// ---- sap.ui.unified.ShellNavigationTree --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new ShellNavigationTree.
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
 * <ul>
 * <li>{@link sap.ui.unified.ShellNavigationTree#event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * </p><p>
 * </p><p>
 * In addition, all settings applicable to the base type {@link sap.ui.unified.ShellItemHandler#constructor sap.ui.unified.ShellItemHandler}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A tree structure depicting the ShellItems and their children
 * @extends sap.ui.unified.ShellItemHandler
 * @version 1.14.0
 * @constructor   
 * @public
 * @since 1.13.0
 * @experimental Since version 1.13.0. 
 * API is not yet finished and might change completely
 * 
 */
sap.ui.unified.ShellNavigationTree = function(sId,mSettings) {};
/**
 * 
 * Fires whenever an item in the tree has been clicked/touched by the user. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 */
sap.ui.unified.ShellNavigationTree.prototype.itemSelect = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.unified.ShellNavigationTree</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellNavigationTree</code>.<br/> itself. 
 * </p><p>
 * Fires whenever an item in the tree has been clicked/touched by the user. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellNavigationTree</code>.<br/> itself.
 * @return {sap.ui.unified.ShellNavigationTree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellNavigationTree.prototype.attachItemSelect = function(oData,fnFunction,oListener) { return new sap.ui.unified.ShellNavigationTree(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.unified.ShellNavigationTree</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellNavigationTree} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.unified.ShellNavigationTree.prototype.detachItemSelect = function(fnFunction,oListener) { return new sap.ui.unified.ShellNavigationTree(); };

/**
 * 
 * Creates a new subclass of class sap.ui.unified.ShellNavigationTree with name <code>sClassName</code> 
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
sap.ui.unified.ShellNavigationTree.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event itemSelect to attached listeners.
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellNavigationTree} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.unified.ShellNavigationTree.prototype.fireItemSelect = function(mArguments) { return new sap.ui.unified.ShellNavigationTree(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ==========================================================================
// Drag.RedBoxView
// ==========================================================================

require('core');

Drag.RED_BOX_DRAG_TYPE = 'red-box-drag-type' ;

/** @class

  A draggable view.

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Drag.RedBoxView = SC.View.extend( SC.DragSource,SC.DragDataSource,
/** @scope Drag.RedBoxView.prototype */ {
  
  classNames: 'red',
  
  thth: function() {
    console.log('layout did change');
  }.observes('layout'),

  // begin a drag session when the mouse is pressed down on a red view
  mouseDown: function(evt) {
    var dv = this.constructor.create({
      layout: this.get('layout'),
      parentView: this
    });
    
    dv.set('layer', this.get('layer').cloneNode(true));
    
    // initiate the drag
    SC.Drag.start({
      event: evt,
      source: this,
      dragView: dv,
      ghost: YES,
      slideBack: YES,
      dataSource: this
    }) ;
    
    return YES ;
  },
  
  dragSourceOperationMaskFor: function(dropTarget, drag) {
    // console.log('dragSourceOperationMaskFor called on %@'.fmt(this)) ;
    return SC.DRAG_ANY ;
  },
  
  dragDataTypes: [Drag.RED_BOX_DRAG_TYPE],
  
  dragDataForType: function(dataType, drag) {
    console.log('dragDataForType called on %@'.fmt(this)) ;
    return null;
  }

}) ;

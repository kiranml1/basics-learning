// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls */

SampleControls.containerPage = SC.Page.create({
  
  enableTopRightThumb: YES,
  dividerThickness: 7,
  
  // mainPane: SC.MainPane.design({
  mainView: SC.View.design({
    
    classNames: ['container-tab'],
    
    childViews: [
      SC.ContainerView.design({
        nowShowingBinding: 'SampleControls.containerController.nowShowing',
        layout: { left: 200, top: 20, bottom: 20, right: 20 }
      }),
      
      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 20, height: 24 },
        title: "Show Split View",
        action: "showContainer1",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 54, height: 24 },
        title: "Show Container2",
        action: "showContainer2",
        target: "SampleControls.containerController"
      }),

      SC.ButtonView.design({
        layout: { left: 20, width: 140, top: 88, height: 24 },
        title: "Show Container3",
        action: "showContainer3",
        target: "SampleControls.containerController"
      }),
      
      SC.CheckboxView.design({
        layout: { left: 20, width: 200, top: 125, height: 21 },
        title: "Enable top left thumb",
        valueBinding: '.page.enableTopRightThumb'
      }),
      
      SC.SliderView.design({
        layout: { left: 20, width: 140, top: 154, height: 21 },
        valueBinding: '.page.dividerThickness',
        minimum: 0, maximum: 40, step: 1
      }),
      
      SC.LabelView.design({
        layout: { left: 164, width: 30, top: 144, height: 21 },
        valueBinding: '.page.dividerThickness'
      })
    ]
  }),

  container1: SC.SplitView.design({
    layout: { left: 0, top: 0, right: 0, bottom: 0 },
    // layoutDirection: SC.LAYOUT_HORIZONTAL,
    layoutDirection: SC.LAYOUT_VERTICAL,
    defaultThickness: 0.5, // a number between 0 and 1.0
    
    topLeftMinThickness: 100,
    topLeftMaxThickness: 300,
    // bottomRightMinThickness: 0,
    // bottomRightMaxThickness: 0, // denotes "unlimited"
    
    // autoresizeBehavior: SC.RESIZE_BOTH,
    autoresizeBehavior: SC.RESIZE_TOP_LEFT,
    // autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
    
    dividerThicknessBinding: '.page.dividerThickness',
    
    topLeftView: SC.View.design({
      layout: {},
      classNames: 'red'.w(),
      childViews: [
        SC.ThumbView.design({
          classNames: 'blue'.w(),
          isEnabledBinding: '.page.enableTopRightThumb',
          layout: { bottom: 15, left: 15, width: 35, height: 20 }
        }),
        SC.LabelView.design({
          value: "Top/Left",
          layout: { left: 40, centerY: 0, right: 40, height: 20 },
          tagName: 'h1'
        })
      ]
    }),
    
    dividerView: SC.SplitDividerView.design({
      layout: {}
    }),
    
    bottomRightView: SC.View.design({
      layout: {},
      classNames: 'blue'.w(),
      childViews: [
        SC.ThumbView.design({
          classNames: 'red'.w(),
          layout: { top: 15, right: 15, width: 35, height: 20 }
        }),
        SC.LabelView.design({
          value: "Bottom/Left",
          layout: { top: 15, left: 40, width: 80, height: 20 },
          tagName: 'h1'
        }),
        SC.SplitView.design({
          layout: { left: 0, top: 70, right: 0, bottom: 0 },
          layoutDirection: SC.LAYOUT_HORIZONTAL,
          // layoutDirection: SC.LAYOUT_VERTICAL,
          defaultThickness: 0.5, // a number between 0 and 1.0
        
          // topLeftMinThickness: 0,
          // topLeftMaxThickness: 0, // denotes "unlimited"
          // bottomRightMinThickness: 0,
          // bottomRightMaxThickness: 0, // denotes "unlimited"
        
          // autoresizeBehavior: SC.RESIZE_BOTH,
          autoresizeBehavior: SC.RESIZE_TOP_LEFT,
          // autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
        
          dividerThickness: 7,
        
          topLeftView: SC.View.design({
            layout: {},
            classNames: 'green'.w(),
            childViews: [
              SC.ThumbView.design({
                classNames: 'gray'.w(),
                layout: { bottom: 15, right: 15, width: 35, height: 20 }
              }),
              SC.LabelView.design({
                value: "Top/Left",
                layout: { left: 40, centerY: 0, right: 40, height: 20 },
                tagName: 'h1'
              })
            ]
          }),
          
          dividerView: SC.SplitDividerView.design({
            layout: {}
          }),
          
          bottomRightView: SC.View.design({
            layout: {},
            classNames: 'gray'.w(),
            childViews: [
              SC.ThumbView.design({
                classNames: 'green'.w(),
                layout: { top: 15, left: 15, width: 35, height: 20 }
              }),
              SC.LabelView.design({
                value: "Bottom/Right",
                layout: { left: 40, centerY: 0, right: 40, height: 20 },
                tagName: 'h1'
              })
            ]
          })
        })
      ]
    })
  }),
  
  container2: SC.LabelView.design({
    value: "Container2",
    layout: { left: 40, centerY: 0, right: 40, height: 40 },
    tagName: 'h1'
  }),

  container3: SC.LabelView.design({
    value: "Container3",
    layout: { left: 40, centerY: 0, right: 40, height: 40 },
    tagName: 'h1'
  })
  
});
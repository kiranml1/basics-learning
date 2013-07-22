// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.ImageView.
*/
Showcase.imageViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular (Fill)',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'No Scaling',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Best Fit Scaling',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.BEST_FIT,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.BEST_FIT,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Best Fit Scaling Down Only',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.BEST_FIT_DOWN_ONLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Fill Proportionally',
        example: "SC.View.extend({  childViews: ['smallerImage', 'largerImage'],  smallerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -120, centerY: 0 },  scale: SC.FILL_PROPORTIONALLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  largerImage: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 120, centerY: 0 },  scale: SC.FILL_PROPORTIONALLY,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-startup-landscape.jpg?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Top Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_TOP_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_TOP,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_TOP_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Middle Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      }),
      Showcase.ViewsItemContent.create({
        title: 'Bottom Alignments',
        example: "SC.View.extend({  childViews: ['left', 'middle', 'right'],  left: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: -230, centerY: 0 },  align: SC.ALIGN_BOTTOM_LEFT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  middle: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 0, centerY: 0 },  align: SC.ALIGN_BOTTOM,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  }),  right: SC.ImageView.extend({  classNames: ['my-image-view'],  layout: { width: 220, height: 220, centerX: 230, centerY: 0 },  align: SC.ALIGN_BOTTOM_RIGHT,  scale: SC.SCALE_NONE,  value: '/static/sproutcore/showcase/en/current/source/resources/images/sproutcore-logo.png?1372933691'  })  })"
      })
    ],
    exampleHeight: 256
  })
});

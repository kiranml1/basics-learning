// ==========================================================================
// Project:   Showcase
// Copyright: @2012 Tyler Keating
// ==========================================================================
/*globals Showcase */
sc_require('system/views_item_content.js');
sc_require('views/views_list_view.js');


/**
  This pre-configured view demonstrates SC.StaticContentView.
*/
Showcase.staticContentViews = SC.ScrollView.design({
  contentView: Showcase.ViewsListView.design({
    content: [
      Showcase.ViewsItemContent.create({
        title: 'Regular',
        example: "SC.StaticContentView.extend({  classNames: ['my-static-content-view'],  content: \"<header><div class=\'note\'>This is an example of static content.</div><h1><img src='/static/sproutcore/showcase/en/current/source/resources/images/logo.png?1372933691'></h1></header><section class='body'><p>SproutCore is the most complete JavaScript Application Development framework.  Some of the many features include:</p><ul><li>Key-Value Observing and Binding</li><li>MVC + Statecharts + Data Store</li><li>A large suite of pre-configured Views and Controls</li><li>Build tools for optimization and auto-spriting</li></ul></section>\",  tagName: 'section' })"
      })
    ],
    exampleHeight: 360
  })
});

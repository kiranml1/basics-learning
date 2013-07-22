// ==========================================================================
// Project:   Reorder.TeamRecord Fixtures
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Reorder */

sc_require('models/team_record_model');

Reorder.TeamRecord.FIXTURES = [

  {
    guid: 1,
    ranking: 1,
    name: 'LA Lakers',
    reason: 'KB24. Enough said.'
  },

  {
    guid: 2,
    ranking: 2,
    name: 'Boston Celtics',
    reason: "Aren't these guys getting a bit old?"
  },

  {
    guid: 3,
    ranking: 3,
    name: 'Miami Heat',
    reason: 'The three headed monster has moved to South Beach.'
  },

  {
    guid: 4,
    ranking: 4,
    name: 'OKC Thunder',
    reason: 'The Durantula is hungry.'
  },

  {
    guid: 5,
    ranking: 5,
    name: 'Dallas Mavericks',
    reason: "Mark Cuban's cheering must be worth some points."
  }

];
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('reorder');
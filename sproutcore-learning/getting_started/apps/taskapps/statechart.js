Taskapps.statechart = SC.Statechart.create({
	trace: YES,
	rootState : SC.State.design({
		initialSubstate : "READY_STATE",
		READY_STATE: SC.State.plugin('Taskapps.READY_STATE'),
		SHOWING_APP: SC.State.plugin('Taskapps.SHOWING_APP')
	})
});
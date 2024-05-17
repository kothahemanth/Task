sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/hemanth/satinfotech/branch/test/integration/FirstJourney',
		'com/hemanth/satinfotech/branch/test/integration/pages/BranchList',
		'com/hemanth/satinfotech/branch/test/integration/pages/BranchObjectPage'
    ],
    function(JourneyRunner, opaJourney, BranchList, BranchObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/hemanth/satinfotech/branch') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBranchList: BranchList,
					onTheBranchObjectPage: BranchObjectPage
                }
            },
            opaJourney.run
        );
    }
);
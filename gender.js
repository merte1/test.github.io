define(['pipAPI', 'https://merte1.github.io/IAT-TR.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Kariyer', //Will appear in the data.
			title : {
				media : {word : 'Kariyer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'Kariyer'},
				{word: 'Kurum'},
				{word: 'Maaş'},
				{word: 'Ofis'},
				{word: 'Profesyonel'},
				{word: 'Yönetim'},
				{word: 'İşletme'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Aile', //Will appear in the data.
			title : {
				media : {word : 'Aile'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'Düğün'},
				{word: 'Evlilik'},
				{word: 'Ebeveyn'},
				{word: 'Akraba'},
				{word: 'Aile'},
				{word: 'Ev'}, 
				{word: 'Çocuk'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Erkek',
			title : {
				media : {word : 'Erkek'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Berat'},
				{word: 'Kemal'},
				{word: 'Cengiz'},
				{word: 'Ramiz'},
				{word: 'Eren'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Kadın',
			title : {
				media : {word : 'Kadın'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Kübra'},
				{word: 'Merve'},
				{word: 'Esra'},
				{word: 'Didem'},
				{word: 'Burcu'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

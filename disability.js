define(['pipAPI', 'https://merte1.github.io/IAT-TR.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'Aşk', 'Neşe', 'Arkadaş', 'Haz', 
            'Hayran olmak', 'Neşeli', 'Dostluk', 'Neşeli', 
            'Gülümseyen','Değer Vermek', 'Harika', 'Memnun', 
            'Sevinçli', 'Muhteşem', 'Çekici', 'Zevk', 
            'Heyecan', 'Güleç', 'Cazibeli','Nefis', 
            'Efsanevi', 'Şanlı', 'Sevimli', 'Güzel', 
            'Harika', 'Mutlu', 'Latif', 'Olağanüstü', 
            'Övmek', 'Hoşlanmak', 'Fevkalade', 'Zafer']);
  var negWords = API.shuffle([
            'Suistimal', 'Keder', 'Zehir', 'Üzgünlük', 
            'Acı', 'Aşağılamak', 'Başarısızlık', 'Edepsiz', 
            'Sinirli', 'Tiksinmek', 'Korkunç', 'Olumsuz', 
            'Çirkin', 'Kirli', 'Çirkin', 'Fena', 
            'Rezalet','Sinir Bozucu', 'Felaket', 'Ürkünç',  
            'Tahkir', 'Berbat', 'İğrenç', 'Nefret', 
            'Aşağılama', 'Bencil', 'Acıklı', 'Tedirgin', 
            'Kin', 'Kırıcı', 'Bıktırıcı', 'İğrenç']);
	return iatExtension({
		category1 : {
			name : 'Engelli Birey', //Will appear in the data.
			title : {
				media : {word : 'Engelli Birey'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   {image: 'disabled1.jpg'},
                {image: 'disabled2.jpg'},
                {image: 'disabled3.jpg'},
				{image: 'disabled4.jpg'}  
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Engelsiz Birey', //Will appear in the data.
			title : {
				media : {word : 'Engelsiz Birey'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		     {image: 'abled1.jpg'},
                {image: 'abled2.jpg'},
                {image: 'abled3.jpg'},
				{image: 'abled4.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
	attribute1 :
		{
			name : 'Kötü',
			title : {
				media : {word : 'Kötü'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'İyi',
			title : {
				media : {word : 'İyi'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

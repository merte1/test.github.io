var uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

define(['pipAPI', window.koc.sourceBase + '/IAT-TRR.js' + '?r=' + uniqueId()], function (APIConstructor, iatExtension) {
	var API = new APIConstructor();
	var posWords = API.shuffle([
		'Güzel',
		'Arkadaş',
		'Arkadaşlık',
		'Mükemmel',
		'Muhteşem',
		'Olağanüstü',
		'Mutlu',
		'Şanlı'
	]);
	var negWords = API.shuffle([
		'Tiksinme',
		'Aşağılama',
		'Nefret',
		'Korkunç',
		'Öfkeli',
		'Rezalet',
		'Felaket',
		'Trajik'
	]);
	return iatExtension({
		category1: {
			name: 'Yaşlı Birey', //Will appear in the data.
			displayInResultAs: 'Yaşlılık',
			title: {
				media: { word: 'Yaşlı Birey' }, //Name of the category presented in the task.
				css: { color: '#31940F', 'font-size': '1.8em' }, //Style of the category title.
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ image: 'om1.jpg' },
				{ image: 'om2.jpg' },
				{ image: 'om3.jpg' },
				{ image: 'of1.jpg' },
				{ image: 'of2.jpg' },
				{ image: 'of3.jpg' }
			],
			//Stimulus css (style)
			stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
		},
		category2: {
			name: 'Genç Birey', //Will appear in the data.
			displayInResultAs: 'Gençlik',
			title: {
				media: { word: 'Genç Birey' }, //Name of the category presented in the task.
				css: { color: '#31940F', 'font-size': '1.8em' }, //Style of the category title.
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ image: 'ym1.jpg' },
				{ image: 'ym2.jpg' },
				{ image: 'ym3.jpg' },
				{ image: 'yf1.jpg' },
				{ image: 'yf2.jpg' },
				{ image: 'yf3.jpg' }
			],
			//Stimulus css
			stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
		},
		attribute1:
		{
			name: 'Kötü',
			displayInResultAs: 'Kötüyü',
			title: {
				media: { word: 'Kötü' },
				css: { color: '#0000FF', 'font-size': '1.8em' },
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ word: negWords[0] },
				{ word: negWords[1] },
				{ word: negWords[2] },
				{ word: negWords[3] },
				{ word: negWords[4] },
				{ word: negWords[5] },
				{ word: negWords[6] },
				{ word: negWords[7] }
			],
			//Stimulus css
			stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
		},
		attribute2:
		{
			name: 'İyi',
			displayInResultAs: 'İyiyi',
			title: {
				media: { word: 'İyi' },
				css: { color: '#0000FF', 'font-size': '1.8em' },
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ word: posWords[0] },
				{ word: posWords[1] },
				{ word: posWords[2] },
				{ word: posWords[3] },
				{ word: posWords[4] },
				{ word: posWords[5] },
				{ word: posWords[6] },
				{ word: posWords[7] }
			],
			//Stimulus css
			stimulusCss: { color: '#0000FF', 'font-size': '2.3em' }
		},
		base_url: {//Where are your images at?
			image: 'https://baranan.github.io/minno-tasks/images/'
		},
		results: {
			strong_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren güçlü düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 30'unun  Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren güçlü düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.
			
			Tasarladığımız online eğitim sayesinde ön yargılarımızı sorgulayabileceğimize ve bu konuyla ilgili farkındalığımızı geliştirebileceğimize inanıyoruz.`,
			moderate_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren orta düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 30'unun  Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren orta düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.
			
			Tasarladığımız online eğitim sayesinde ön yargılarımızı sorgulayabileceğimize ve bu konuyla ilgili farkındalığımızı geliştirebileceğimize inanıyoruz.`,
			slight_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 17'sinin Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`,
			equal: `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 15'inin Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip olmadığı görüldü.`,
			strong_Att1WithCatB_Att2WithCatA:  `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 15'inin Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olmadığı görüldü.`,
			moderate_Att1WithCatB_Att2WithCatA:  `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 15'inin Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olmadığı görüldü.`,
			slight_Att1WithCatB_Att2WithCatA:  `Cevaplamış olduğun bu teste göre Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 15'inin Yaşlı Kişiler ile olumsuzu ve Genç Kişiler ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olmadığı görüldü.`
		}
	});
});



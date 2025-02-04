var uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

define(['pipAPI', window.koc.sourceBase + '/IAT-TRR.js' + '?r=' + uniqueId()], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'Zafer',
            'Efsanevi',
            'Hayranlık',
            'Kutlamak',
            'Neşeli',
            'Zevk',
            'Keyif',
            'Memnun'
		]);
  var negWords = API.shuffle([
            'Negatif',
            'Korkunç',
            'Felaket',
            'Pis',
            'İğrenç',
            'Rezalet',
            'Küçümsemek',
            'Kırıcı'
		]);
	return iatExtension({
		category1: {
			name: 'Fiziksel Engelli Birey', //Will appear in the data.
			displayInResultAs: 'Fiziksel Engellilik',
			title: {
				media: { word: 'Fiziksel Engelli Birey' }, //Name of the category presented in the task.
				css: { color: '#31940F', 'font-size': '1.8em' }, //Style of the category title.
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ image: 'disabled1.jpg' },
				{ image: 'disabled2.jpg' },
				{ image: 'disabled3.jpg' },
				{ image: 'disabled4.jpg' }
			],
			//Stimulus css (style)
			stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
		},
		category2: {
			name: 'Fiziksel Engelsiz Birey', //Will appear in the data.
			displayInResultAs: 'Fiziksel Engelsizlik',
			title: {
				media: { word: 'Fiziksel Engelsiz Birey' }, //Name of the category presented in the task.
				css: { color: '#31940F', 'font-size': '1.8em' }, //Style of the category title.
				height: 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia: [ //Stimuli content as PIP's media objects
				{ image: 'abled1.jpg' },
				{ image: 'abled2.jpg' },
				{ image: 'abled3.jpg' },
				{ image: 'abled4.jpg' }
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
		results:{
			strong_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren güçlü düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 37'sinin Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren güçlü düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.

			Tasarladığımız online eğitim sayesinde ön yargılarımızı sorgulayabileceğimize ve bu konuyla ilgili farkındalığımızı geliştirebileceğimize inanıyoruz.`,
			moderate_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren orta düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 27'sinin Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren orta düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.

			Tasarladığımız online eğitim sayesinde ön yargılarımızı sorgulayabileceğimize ve bu konuyla ilgili farkındalığımızı geliştirebileceğimize inanıyoruz.`,
			slight_Att1WithCatA_Att2WithCatB: `Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahipsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 14'ünün  Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`,
			equal: `Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 14'ünün  Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`,
			strong_Att1WithCatB_Att2WithCatA:`Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 14'ünün  Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`,
			moderate_Att1WithCatB_Att2WithCatA: `Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 14'ünün  Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`,
			slight_Att1WithCatB_Att2WithCatA:`Cevaplamış olduğun bu teste göre Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren bilinçsiz ön yargıya sahip değilsin. Harvard Örtük Çağrışım Testi’ni tamamlayanların % 14'ünün  Fiziksel Engellilik ile olumsuzu ve Fiziksel Engelsizlik ile olumluyu ilişkilendiren az düzeyde bilinçsiz ön yargıya sahip olduğu görüldü.`
		}
	});
});

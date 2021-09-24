//this file is used to create and store the data
//holds all the data for the countries
var countryData = [];

//the class to hold all the necessary data
class MedalData {
	constructor(countryName, sRank, sGold, sSilver, sBronze, wRank, wGold, wSilver, wBronze) {
		this.countryName = countryName
		this.sRank = sRank;
		this.sGold = sGold;
		this.sSilver = sSilver;
		this.sBronze = sBronze;
		this.wRank = wRank;
		this.wGold = wGold;
		this.wSilver = wSilver;
		this.wBronze = wBronze;
		
		this.sTotal = sGold + sSilver + sBronze;
		this.wTotal = wGold + wSilver + wBronze;
		this.tGold = sGold + wGold;
		this.tSilver = sSilver + wSilver;
		this.tBronze = sBronze + wBronze;
		this.overallRank = sRank + wRank;
		this.tMedals = this.sTotal + this.wTotal;
	}
}

//Takes all the excel data and puts it into JS objects
$(document).ready(function() {
	var Afghanistan = new MedalData("Afghanistan", 14, 0, 0, 2, 0, 0, 0, 0);
	var Algeria = new MedalData("Algeria", 13, 5, 4, 8, 3, 0, 0, 0);
	var Argentina = new MedalData("Argentina", 24, 21, 25, 28, 19, 0, 0, 0);
	var Armenia = new MedalData("Armenia", 6, 2, 6, 6, 7, 0, 0, 0);
	var Australasia = new MedalData("Australasia", 2, 3, 4, 5, 0, 0, 0, 0);
	var Australia = new MedalData("Australia", 26, 147, 163, 187, 19, 5, 5, 5);
	var Austria = new MedalData("Austria", 27, 18, 33, 36, 23, 64, 81, 87);
	var Azerbaijan = new MedalData("Azerbaijan", 6, 7, 11, 24, 6, 0, 0, 0);
	var Bahamas = new MedalData("Bahamas", 16, 6, 2, 6, 0, 0, 0, 0);
	var Bahrain = new MedalData("Bahrain", 9, 2, 1, 0, 0, 0, 0, 0);
	var Barbados = new MedalData("Barbados", 12, 0, 0, 1, 0, 0, 0, 0);
	var Belarus = new MedalData("Belarus", 6, 12, 27, 39, 7, 8, 5, 5);
	var Belgium = new MedalData("Belgium", 26, 40, 53, 55, 21, 1, 2, 3);
	var Bermuda = new MedalData("Bermuda", 18, 0, 0, 1, 8, 0, 0, 0);
	var Bohemia = new MedalData("Bohemia", 3, 0, 1, 3, 0, 0, 0, 0);
	var Botswana = new MedalData("Botswana", 10, 0, 1, 0, 0, 0, 0, 0);
	var Brazil = new MedalData("Brazil", 22, 30, 36, 63, 8, 0, 0, 0);
	var BritishWestIndies = new MedalData("British West Indies", 1, 0, 0, 2, 0, 0, 0, 0);
	var Bulgaria = new MedalData("Bulgaria", 20, 51, 87, 80, 20, 1, 2, 3);
	var Burundi = new MedalData("Burundi", 6, 1, 1, 0, 0, 0, 0, 0);
	var Cameroon = new MedalData("Cameroon", 14, 3, 1, 2, 1, 0, 0, 0);
	var Canada = new MedalData("Canada", 26, 64, 102, 136, 23, 73, 64, 62);
	var Chile = new MedalData("Chile", 23, 2, 7, 4, 17, 0, 0, 0);
	var China = new MedalData("China", 10, 224, 167, 155, 11, 13, 28, 21);
	var Colombia = new MedalData("Colombia", 19, 5, 9, 14, 2, 0, 0, 0);
	var CostaRica = new MedalData("Costa Rica", 15, 1, 1, 2, 6, 0, 0, 0);
	var IvoryCoast = new MedalData("Ivory Coast", 13, 1, 1, 1, 0, 0, 0, 0);
	var Croatia = new MedalData("Croatia", 7, 11, 10, 12, 8, 4, 6, 1);
	var Cuba = new MedalData("Cuba", 20, 78, 68, 80, 0, 0, 0, 0);
	var Cyprus = new MedalData("Cyprus", 10, 0, 1, 0, 11, 0, 0, 0);
	var CzechRepublic = new MedalData("Czech Republic", 6, 15, 17, 24, 7, 9, 11, 11);
	var Czechoslovakia = new MedalData("Czechoslovakia", 16, 49, 49, 45, 16, 2, 8, 15);
	var Denmark = new MedalData("Denmark", 27, 45, 74, 75, 14, 0, 1, 0);
	var Djibouti = new MedalData("Djibouti", 8, 0, 0, 1, 0, 0, 0, 0);
	var DominicanRepublic = new MedalData("Dominican Republic", 14, 3, 2, 2, 0, 0, 0, 0);
	var Ecuador = new MedalData("Ecuador", 14, 1, 1, 0, 1, 0, 0, 0);
	var Egypt = new MedalData("Egypt", 22, 7, 10, 15, 1, 0, 0, 0);
	var Eritrea = new MedalData("Eritrea", 5, 0, 0, 1, 1, 0, 0, 0);
	var Estonia = new MedalData("Estonia", 12, 9, 9, 16, 10, 4, 2, 1);
	var Ethiopia = new MedalData("Ethiopia", 13, 22, 11, 21, 2, 0, 0, 0);
	var Fiji = new MedalData("Fiji", 14, 1, 0, 0, 3, 0, 0, 0);
	var Finland = new MedalData("Finland", 25, 101, 85, 117, 23, 43, 63, 61);
	var France = new MedalData("France", 28, 212, 241, 263, 23, 36, 35, 53);
	var Gabon = new MedalData("Gabon", 10, 0, 1, 0, 0, 0, 0, 0);
	var Georgia = new MedalData("Georgia", 6, 8, 7, 17, 7, 0, 0, 0);
	var Germany = new MedalData("Germany", 16, 191, 194, 230, 12, 92, 88, 60);
	var UnitedTeamOfGermany = new MedalData("United Team of Germany", 3, 28, 54, 36, 3, 8, 6, 5);
	var EastGermany = new MedalData("East Germany", 5, 153, 129, 127, 6, 39, 36, 35);
	var WestGermany = new MedalData("West Germany", 5, 56, 67, 81, 6, 11, 15, 13);
	var Ghana = new MedalData("Ghana", 14, 0, 1, 3, 2, 0, 0, 0);
	var GreatBritain = new MedalData("Great Britain", 28, 263, 295, 293, 23, 11, 4, 17);
	var Greece = new MedalData("Greece", 28, 33, 43, 40, 19, 0, 0, 0);
	var Grenada = new MedalData("Grenada", 9, 1, 1, 0, 0, 0, 0, 0);
	var Guatemala = new MedalData("Guatemala", 14, 0, 1, 0, 1, 0, 0, 0);
	var Guyana = new MedalData("Guyana", 17, 0, 0, 1, 0, 0, 0, 0);
	var Haiti = new MedalData("Haiti", 15, 0, 1, 1, 0, 0, 0, 0);
	var HongKong = new MedalData("Hong Kong", 16, 1, 1, 1, 5, 0, 0, 0);
	var Hungary = new MedalData("Hungary", 26, 175, 147, 169, 23, 1, 2, 4);
	var Iceland = new MedalData("Iceland", 20, 0, 2, 2, 18, 0, 0, 0);
	var India = new MedalData("India", 24, 9, 7, 12, 10, 0, 0, 0);
	var Indonesia = new MedalData("Indonesia", 15, 7, 13, 12, 0, 0, 0, 0);
	var Iran = new MedalData("Iran", 16, 21, 21, 27, 11, 0, 0, 0);
	var Iraq = new MedalData("Iraq", 14, 0, 0, 1, 0, 0, 0, 0);
	var Ireland = new MedalData("Ireland", 21, 9, 10, 12, 7, 0, 0, 0);
	var Israel = new MedalData("Israel", 16, 1, 1, 7, 7, 0, 0, 0);
	var Italy = new MedalData("Italy", 27, 206, 178, 193, 23, 40, 36, 48);
	var Jamaica = new MedalData("Jamaica", 17, 22, 35, 21, 8, 0, 0, 0);
	var Japan = new MedalData("Japan", 22, 142, 136, 161, 21, 14, 22, 22);
	var Jordan = new MedalData("Jordan", 10, 1, 0, 0, 0, 0, 0, 0);
	var Kazakhstan = new MedalData("Kazakhstan", 6, 15, 21, 28, 7, 1, 3, 4);
	var Kenya = new MedalData("Kenya", 14, 31, 38, 34, 4, 0, 0, 0);
	var Kosovo = new MedalData("Kosovo", 1, 1, 0, 0, 1, 0, 0, 0);
	var NorthKorea = new MedalData("North Korea", 10, 16, 16, 22, 9, 0, 1, 1);
	var SouthKorea = new MedalData("South Korea", 17, 90, 87, 90, 18, 31, 25, 14);
	var Kuwait = new MedalData("Kuwait", 12, 0, 0, 2, 0, 0, 0, 0);
	var Kyrgyzstan = new MedalData("Kyrgyzstan", 6, 0, 1, 3, 7, 0, 0, 0);
	var Latvia = new MedalData("Latvia", 11, 3, 11, 5, 11, 1, 3, 5);
	var Lebanon = new MedalData("Lebanon", 17, 0, 2, 2, 17, 0, 0, 0);
	var Liechtenstein = new MedalData("Liechtenstein", 17, 0, 0, 0, 19, 2, 2, 6);
	var Lithuania = new MedalData("Lithuania", 9, 6, 6, 13, 9, 0, 0, 0);
	var Luxembourg = new MedalData("Luxembourg", 23, 1, 1, 0, 9, 0, 2, 0);
	var Malaysia = new MedalData("Malaysia", 13, 0, 7, 4, 1, 0, 0, 0);
	var Mauritius = new MedalData("Mauritius", 9, 0, 0, 1, 0, 0, 0, 0);
	var Mexico = new MedalData("Mexico", 23, 13, 24, 32, 9, 0, 0, 0);
	var Moldova = new MedalData("Moldova", 6, 0, 2, 3, 7, 0, 0, 0);
	var Mongolia = new MedalData("Mongolia", 13, 2, 10, 14, 14, 0, 0, 0);
	var Montenegro = new MedalData("Montenegro", 3, 0, 1, 0, 3, 0, 0, 0);
	var Morocco = new MedalData("Morocco", 14, 6, 5, 12, 7, 0, 0, 0);
	var Mozambique = new MedalData("Mozambique", 10, 1, 0, 1, 0, 0, 0, 0);
	var Namibia = new MedalData("Namibia", 7, 0, 4, 0, 0, 0, 0, 0);
	var Netherlands = new MedalData("Netherlands", 26, 85, 92, 108, 21, 45, 44, 41);
	var NetherlandsAntilles = new MedalData("Netherlands Antilles", 13, 0, 1, 0, 2, 0, 0, 0);
	var NewZealand = new MedalData("New Zealand", 23, 46, 27, 44, 16, 0, 1, 2);
	var Niger = new MedalData("Niger", 12, 0, 1, 1, 0, 0, 0, 0);
	var Nigeria = new MedalData("Nigeria", 16, 3, 10, 12, 1, 0, 0, 0);
	var NorthMacedonia = new MedalData("North Macedonia", 6, 0, 0, 1, 1, 6, 0, 0, 0);
	var Norway = new MedalData("Norway", 25, 56, 49, 47, 23, 132, 125, 111);
	var Pakistan = new MedalData("Pakistan", 17, 3, 3, 4, 3, 0, 0, 0);
	var Panama = new MedalData("Panama", 17, 1, 0, 2, 0, 0, 0, 0);
	var Paraguay = new MedalData("Paraguay", 12, 0, 1, 0, 1, 0, 0, 0);
	var Peru = new MedalData("Peru", 18, 1, 3, 0, 2, 0, 0, 0);
	var Philippines = new MedalData("Philippines", 21, 0, 3, 7, 5, 0, 0, 0);
	var Poland = new MedalData("Poland", 21, 68, 84, 132, 23, 7, 7, 8);
	var Portugal = new MedalData("Portugal", 24, 4, 8, 12, 8, 0, 0, 0);
	var PuertoRico = new MedalData("Puerto Rico", 18, 1, 2, 6, 7, 0, 0, 0);
	var Qatar = new MedalData("Qatar", 9, 0, 1, 4, 0, 0, 0, 0);
	var Romania = new MedalData("Romania", 21, 89, 94, 121, 21, 0, 0, 1);
	var Russia = new MedalData("Russia", 6, 149, 125, 152, 6, 47, 39, 35);
	var RussianEmpire = new MedalData("Russian Empire", 3, 1, 4, 3, 0, 0, 0, 0);
	var SovietUnion = new MedalData("Soviet Union", 9, 395, 319, 296, 9, 78, 57, 59);
	var UnifiedTeam = new MedalData("Unified Team", 1, 45, 38, 29, 1, 9, 6, 8);
	var OlympicAthletesFromRussia = new MedalData("Olympic Athletes from Russia", 0, 0, 0, 0, 1, 2, 6, 9);
	var SaudiArabia = new MedalData("Saudi Arabia", 11, 0, 1, 2, 0, 0, 0, 0);
	var Samoa = new MedalData("Samoa", 9, 0, 1, 0, 0, 0, 0, 0);
	var Senegal = new MedalData("Senegal", 14, 0, 1, 0, 5, 0, 0, 0);
	var Serbia = new MedalData("Serbia", 4, 3, 6, 6, 3, 0, 0, 0);
	var SerbiaAndMontenegro = new MedalData("Serbia and Montenegro", 1, 0, 2, 0, 1, 0, 0, 0);
	var Singapore = new MedalData("Singapore", 16, 1, 2, 2, 1, 0, 0, 0);
	var Slovakia = new MedalData("Slovakia", 6, 9, 12, 7, 7, 3, 4, 1);
	var Slovenia = new MedalData("Slovenia", 7, 5, 8, 10, 8, 2, 5, 10);
	var SouthAfrica = new MedalData("South Africa", 19, 26, 31, 29, 7, 0, 0, 0);
	var Spain = new MedalData("Spain", 23, 45, 64, 41, 20, 1, 0, 3);
	var SriLanka = new MedalData("Sri Lanka", 17, 0, 2, 0, 0, 0, 0, 0);
	var Sudan = new MedalData("Sudan", 12, 0, 1, 0, 0, 0, 0, 0);
	var Suriname = new MedalData("Suriname", 12, 1, 0, 1, 0, 0, 0, 0);
	var Sweden = new MedalData("Sweden", 27, 145, 170, 179, 23, 57, 46, 55);
	var Switzerland = new MedalData("Switzerland", 28, 50, 75, 67, 23, 56, 45, 52);
	var Syria = new MedalData("Syria", 13, 1, 1, 1, 0, 0, 0, 0);
	var ChineseTaipei = new MedalData("Chinese Taipei", 14, 5, 7, 12, 12, 0, 0, 0);
	var Tajikistan = new MedalData("Tajikistan", 6, 1, 1, 2, 4, 0, 0, 0);
	var Tanzania = new MedalData("Tanzania", 13, 0, 2, 0, 0, 0, 0, 0);
	var Thailand = new MedalData("Thailand", 16, 9, 8, 16, 4, 0, 0, 0);
	var Togo = new MedalData("Togo", 10, 0, 0, 1, 2, 0, 0, 0);
	var Tonga = new MedalData("Tonga", 9, 0, 1, 0, 2, 0, 0, 0);
	var TrinidadAndTobago = new MedalData("Trinidad and Tobago", 17, 3, 5, 11, 3, 0, 0, 0);
	var Tunisia = new MedalData("Tunisia", 14, 4, 2, 7, 0, 0, 0, 0);
	var Turkey = new MedalData("Turkey", 22, 39, 24, 28, 17, 0, 0, 0);
	var Uganda = new MedalData("Uganda", 15, 2, 3, 2, 0, 0, 0, 0);
	var Ukraine = new MedalData("Ukraine", 6, 34, 30, 56, 7, 3, 1, 4);
	var UnitedArabEmirates = new MedalData("United Arab Emirates", 9, 1, 0, 1, 0, 0, 0, 0);
	var UnitedStates = new MedalData("United States", 27, 1022, 795, 706, 23, 105, 112, 88);
	var Uruguay = new MedalData("Uruguay", 21, 2, 2, 6, 1, 0, 0, 0);
	var Uzbekistan = new MedalData("Uzbekistan", 6, 7, 6, 18, 7, 1, 0, 0);
	var Venezuela = new MedalData("Venezuela", 18, 2, 4, 9, 4, 0, 0, 0);
	var Vietnam = new MedalData("Vietnam", 15, 1, 3, 1, 0, 0, 0, 0);
	var VirginIslands = new MedalData("Virgin Islands", 12, 0, 1, 0, 7, 0, 0, 0);
	var Yugoslavia = new MedalData("Yugoslavia", 18, 28, 31, 31, 16, 0, 3, 1);
	var Zambia = new MedalData("Zambia", 13, 0, 1, 1, 0, 0, 0, 0);
	var Zimbabwe = new MedalData("Zimbabwe", 13, 3, 4, 1, 1, 0, 0, 0);
	var IndependentOlympicAthletes = new MedalData("Independent Olympic Athletes", 3, 1, 0, 1, 0, 0, 0, 0);
	var IndependentOlympicParticipants = new MedalData("Independent Olympic Participants", 1, 0, 1, 2, 0, 0, 0, 0);
	var MixedTeam = new MedalData("Mixed team", 3, 8, 5, 4, 0, 0, 0, 0);
	
	//adds to a global variable for the main file to access
	countryData.push(Afghanistan);
	countryData.push(Algeria);
	countryData.push(Argentina);
	countryData.push(Armenia);
	countryData.push(Australasia);
	countryData.push(Australia);
	countryData.push(Austria);
	countryData.push(Azerbaijan);
	countryData.push(Bahamas);
	countryData.push(Bahrain);
	countryData.push(Barbados);
	countryData.push(Belarus);
	countryData.push(Belgium);
	countryData.push(Bermuda);
	countryData.push(Bohemia);
	countryData.push(Botswana);
	countryData.push(Brazil);
	countryData.push(BritishWestIndies);
	countryData.push(Bulgaria);
	countryData.push(Burundi);
	countryData.push(Cameroon);
	countryData.push(Canada);
	countryData.push(Chile);
	countryData.push(China);
	countryData.push(Colombia);
	countryData.push(CostaRica);
	countryData.push(IvoryCoast);
	countryData.push(Croatia);
	countryData.push(Cuba);
	countryData.push(Cyprus);
	countryData.push(CzechRepublic);
	countryData.push(Czechoslovakia);
	countryData.push(Denmark);
	countryData.push(Djibouti);
	countryData.push(DominicanRepublic);
	countryData.push(Ecuador);
	countryData.push(Egypt);
	countryData.push(Eritrea);
	countryData.push(Estonia);
	countryData.push(Ethiopia);
	countryData.push(Fiji);
	countryData.push(Finland);
	countryData.push(France);
	countryData.push(Gabon);
	countryData.push(Georgia);
	countryData.push(Germany);
	countryData.push(UnitedTeamOfGermany);
	countryData.push(EastGermany);
	countryData.push(WestGermany);
	countryData.push(Ghana);
	countryData.push(GreatBritain);
	countryData.push(Greece);
	countryData.push(Grenada);
	countryData.push(Guatemala);
	countryData.push(Guyana);
	countryData.push(Haiti);
	countryData.push(HongKong);
	countryData.push(Hungary);
	countryData.push(Iceland);
	countryData.push(India);
	countryData.push(Indonesia);
	countryData.push(Iran);
	countryData.push(Iraq);
	countryData.push(Ireland);
	countryData.push(Israel);
	countryData.push(Italy);
	countryData.push(Jamaica);
	countryData.push(Japan);
	countryData.push(Jordan);
	countryData.push(Kazakhstan);
	countryData.push(Kenya);
	countryData.push(Kosovo);
	countryData.push(NorthKorea);
	countryData.push(SouthKorea);
	countryData.push(Kuwait);
	countryData.push(Kyrgyzstan);
	countryData.push(Latvia);
	countryData.push(Lebanon);
	countryData.push(Liechtenstein);
	countryData.push(Lithuania);
	countryData.push(Luxembourg);
	countryData.push(Malaysia);
	countryData.push(Mauritius);
	countryData.push(Mexico);
	countryData.push(Moldova);
	countryData.push(Mongolia);
	countryData.push(Montenegro);
	countryData.push(Morocco);
	countryData.push(Mozambique);
	countryData.push(Namibia);
	countryData.push(Netherlands);
	countryData.push(NetherlandsAntilles);
	countryData.push(NewZealand);
	countryData.push(Niger);
	countryData.push(Nigeria);
	countryData.push(NorthMacedonia);
	countryData.push(Norway);
	countryData.push(Pakistan);
	countryData.push(Panama);
	countryData.push(Paraguay);
	countryData.push(Peru);
	countryData.push(Philippines);
	countryData.push(Poland);
	countryData.push(Portugal);
	countryData.push(PuertoRico);
	countryData.push(Qatar);
	countryData.push(Romania);
	countryData.push(Russia);
	countryData.push(RussianEmpire);
	countryData.push(SovietUnion);
	countryData.push(UnifiedTeam);
	countryData.push(OlympicAthletesFromRussia);
	countryData.push(SaudiArabia);
	countryData.push(Samoa);
	countryData.push(Senegal);
	countryData.push(Serbia);
	countryData.push(SerbiaAndMontenegro);
	countryData.push(Singapore);
	countryData.push(Slovakia);
	countryData.push(Slovenia);
	countryData.push(SouthAfrica);
	countryData.push(Spain);
	countryData.push(SriLanka);
	countryData.push(Sudan);
	countryData.push(Suriname);
	countryData.push(Sweden);
	countryData.push(Switzerland);
	countryData.push(Syria);
	countryData.push(ChineseTaipei);
	countryData.push(Tajikistan);
	countryData.push(Tanzania);
	countryData.push(Thailand);
	countryData.push(Togo);
	countryData.push(Tonga);
	countryData.push(TrinidadAndTobago);
	countryData.push(Tunisia);
	countryData.push(Turkey);
	countryData.push(Uganda);
	countryData.push(Ukraine);
	countryData.push(UnitedArabEmirates);
	countryData.push(UnitedStates);
	countryData.push(Uruguay);
	countryData.push(Uzbekistan);
	countryData.push(Venezuela);
	countryData.push(Vietnam);
	countryData.push(VirginIslands);
	countryData.push(Yugoslavia);
	countryData.push(Zambia);
	countryData.push(Zimbabwe);
	countryData.push(IndependentOlympicAthletes);
	countryData.push(IndependentOlympicParticipants);
	countryData.push(MixedTeam);
});

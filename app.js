const LEAGUES = [
  {name:'英格兰 · 英超', short:'英超', country:'英格兰', clubs:[['曼彻斯特蓝月','MCB','#63aee8',94],['伦敦枪手','LGA','#d52b32',91],['默西塞德红军','MER','#c82032',92],['北伦敦雄狮','NLI','#e8e8e8',86],['伦敦蓝狮','LBL','#2457a6',84],['纽卡斯尔联','NEW','#1e2528',82]]},
  {name:'西班牙 · 西甲', short:'西甲', country:'西班牙', clubs:[['马德里白衣','MDW','#e7e7df',95],['加泰罗尼亚红蓝','CRB','#993248',94],['马德里竞技','MAT','#d33b43',89],['巴斯克竞技','BAS','#d64949',83],['塞维利亚红白','SRW','#efefeb',81],['皇家社会','RSO','#4a82c4',82]]},
  {name:'德国 · 德甲', short:'德甲', country:'德国', clubs:[['慕尼黑之星','MUN','#d72e3b',95],['多特蒙德蜂群','DOR','#f1da29',87],['莱茵药厂','RHA','#d63a3d',88],['莱比锡公牛','LEI','#e9e9e4',84],['法兰克福雄鹰','FRA','#282b2c',81],['斯图加特','STU','#e9e9e6',80]]},
  {name:'意大利 · 意甲', short:'意甲', country:'意大利', clubs:[['米兰蓝黑','MIN','#2363a0',89],['都灵斑马','TUR','#e5e5df',88],['米兰红黑','MRN','#c83a42',87],['那不勒斯海湾','NAP','#4d9bd2',86],['罗马之狼','ROM','#9b263b',83],['亚特兰大女神','ATA','#3172aa',82]]},
  {name:'法国 · 法甲', short:'法甲', country:'法国', clubs:[['巴黎之光','PDL','#273c74',92],['马赛航海','MAR','#5caadb',82],['摩纳哥王冠','MON','#d9424a',83],['里昂雄狮','LYO','#32518c',78],['里尔獒犬','LIL','#bd3240',79],['尼斯之鹰','NIC','#232728',77]]},
  {name:'葡萄牙 · 葡超', short:'葡超', country:'葡萄牙', clubs:[['里斯本雄鹰','BEN','#d9363e',84],['波尔图巨龙','POR','#3778b8',84],['里斯本竞技','SCP','#3b9955',83],['布拉加兵工厂','BRA','#cf3b42',76]]},
  {name:'荷兰 · 荷甲', short:'荷甲', country:'荷兰', clubs:[['阿姆斯特丹之子','AMS','#e64343',83],['埃因霍温飞利浦','EIN','#d63b40',82],['鹿特丹港湾','ROT','#222b28',78],['阿尔克马尔','ALK','#c73b40',75]]},
  {name:'比利时 · 比甲', short:'比甲', country:'比利时', clubs:[['布鲁日蓝黑','BRU','#265ba2',76],['安德莱赫特紫衣','AND','#6d4e97',74],['圣吉罗斯联','SGU','#e1c938',73],['亨克竞技','GNK','#3273b5',72]]},
  {name:'苏格兰 · 苏超', short:'苏超', country:'苏格兰', clubs:[['格拉斯哥绿白','GLG','#359b57',78],['格拉斯哥蓝军','GLB','#315ea0',77],['爱丁堡之心','HEA','#8f2e40',68],['阿伯丁','ABE','#cb383e',67]]},
  {name:'奥地利 · 奥甲', short:'奥甲', country:'奥地利', clubs:[['萨尔茨堡红牛','SAL','#d6434c',77],['维也纳绿白','VIE','#329256',69],['格拉茨风暴','GRA','#232927',72],['奥地利维也纳','AUV','#654e92',68]]}
];
// 2026/27 real-club database. Strength values are simulation ratings, not official rankings.
LEAGUES.splice(0,LEAGUES.length,
  {name:'英格兰 · 英格兰足球超级联赛',short:'英超',country:'英格兰',clubs:[
    ['Arsenal','ARS','#d71920',92],['Aston Villa','AVL','#7a2145',84],['AFC Bournemouth','BOU','#c9272c',78],['Brentford','BRE','#d71920',78],['Brighton & Hove Albion','BHA','#2475c7',81],['Chelsea','CHE','#17479e',88],['Coventry City','COV','#62a8df',73],['Crystal Palace','CRY','#294a9b',80],['Everton','EVE','#1b4b9b',78],['Fulham','FUL','#eeeeee',79],['Hull City','HUL','#e99224',72],['Ipswich Town','IPS','#2051a0',73],['Leeds United','LEE','#e9e7dd',77],['Liverpool','LIV','#c62032',93],['Manchester City','MCI','#65a9dc',94],['Manchester United','MUN','#d82b32',87],['Newcastle United','NEW','#222629',86],['Nottingham Forest','NFO','#d22b32',82],['Sunderland','SUN','#d72d37',75],['Tottenham Hotspur','TOT','#e7e8e5',85]]},
  {name:'西班牙 · LALIGA EA SPORTS',short:'西甲',country:'西班牙',clubs:[
    ['Athletic Club','ATH','#d52d39',84],['Atlético de Madrid','ATM','#cf2f3b',90],['CA Osasuna','OSA','#b92f3d',78],['RC Celta','CEL','#70a9d5',79],['Deportivo Alavés','ALA','#376aa5',76],['Elche CF','ELC','#e5e6df',74],['FC Barcelona','BAR','#8d3153',95],['Getafe CF','GET','#315da4',77],['Levante UD','LEV','#8f3955',73],['Málaga CF','MGA','#4d8ec8',73],['Racing de Santander','RAC','#2f8c61',74],['Rayo Vallecano','RAY','#eeeeea',79],['RC Deportivo','DEP','#3f72ad',74],['RCD Espanyol','ESP','#4a8bcb',76],['Real Betis','BET','#309260',83],['Real Madrid','RMA','#eeeeea',96],['Real Sociedad','RSO','#4385c1',82],['Sevilla FC','SEV','#eeeeea',80],['Valencia CF','VAL','#eeeeea',79],['Villarreal CF','VIL','#e5d436',84]]},
  {name:'德国 · Bundesliga',short:'德甲',country:'德国',clubs:[
    ['Bayern Munich','FCB','#d62f3d',95],['Borussia Dortmund','BVB','#ead42d',89],['RB Leipzig','RBL','#e7e8e4',85],['VfB Stuttgart','VFB','#e4e4df',84],['TSG Hoffenheim','TSG','#3374b4',79],['Bayer Leverkusen','B04','#d2333c',90],['SC Freiburg','SCF','#d33b40',81],['Eintracht Frankfurt','SGE','#272c2a',84],['FC Augsburg','FCA','#b62e36',76],['Mainz 05','M05','#d33942',78],['Union Berlin','FCU','#cf303a',77],['Borussia Mönchengladbach','BMG','#e8e8e3',79],['Hamburger SV','HSV','#3668a4',78],['1. FC Köln','KOE','#eeeeea',77],['Werder Bremen','SVW','#2d9760',79],['Schalke 04','S04','#3075b7',76],['SV Elversberg','ELV','#dfcc3e',72],['SC Paderborn','SCP','#2359a1',73]]},
  {name:'意大利 · Serie A Enilive',short:'意甲',country:'意大利',clubs:[
    ['Atalanta','ATA','#2771aa',86],['Bologna','BOL','#92323d',82],['Cagliari','CAG','#253e78',75],['Como 1907','COM','#3975ae',81],['Fiorentina','FIO','#67498e',81],['Frosinone','FRO','#e5c831',72],['Genoa','GEN','#85343d',77],['Inter','INT','#2462a0',91],['Juventus','JUV','#eeeeea',88],['Lazio','LAZ','#72a9d4',83],['Lecce','LEC','#d7bd2e',74],['AC Milan','MIL','#c9323d',88],['Monza','MNZ','#d6313b',73],['Napoli','NAP','#3e98cc',89],['Parma','PAR','#e6cc37',76],['AS Roma','ROM','#8f2d3d',86],['Sassuolo','SAS','#348b57',77],['Torino','TOR','#7e303a',78],['Udinese','UDI','#eeeeea',77],['Venezia','VEN','#ce7a31',73]]},
  {name:'法国 · Ligue 1 McDonald’s',short:'法甲',country:'法国',clubs:[
    ['Angers SCO','ANG','#eeeeea',74],['AJ Auxerre','AUX','#4b80bc',75],['Stade Brestois 29','BRE','#d23740',79],['Le Havre AC','HAC','#6fa4ca',73],['RC Lens','RCL','#d5bd31',84],['LOSC Lille','LIL','#c62f3b',83],['FC Lorient','LOR','#ef782e',75],['Olympique Lyonnais','LYO','#e8e8e5',82],['Le Mans FC','LMF','#d74e34',72],['Olympique de Marseille','OM','#58a7d5',86],['AS Monaco','ASM','#e8e8e3',85],['OGC Nice','NIC','#242827',81],['Paris FC','PFC','#315691',76],['Paris Saint-Germain','PSG','#273c75',95],['Stade Rennais','REN','#c9303c',82],['RC Strasbourg Alsace','RCS','#4a92cb',80],['Toulouse FC','TFC','#6d4d94',78],['ESTAC Troyes','EST','#4785bd',72]]},
  {name:'葡萄牙 · Liga Portugal Betclic',short:'葡超',country:'葡萄牙',clubs:[
    ['SL Benfica','BEN','#d82d38',87],['Sporting CP','SCP','#369356',88],['FC Porto','FCP','#3976b7',86],['SC Braga','BRA','#d0343d',81],['Vitória SC','VSC','#e6e6e1',77],['FC Famalicão','FAM','#31558d',75],['Santa Clara','SAN','#d23b40',73],['Estoril Praia','EST','#e2cf36',72],['Casa Pia','CAS','#202523',71],['Moreirense','MOR','#408c56',72],['Rio Ave','RIO','#4e9d68',72],['FC Arouca','ARO','#d7bd35',71],['Gil Vicente','GIL','#cf3840',72],['CD Nacional','NAC','#222825',70],['Estrela Amadora','ESA','#5c8262',70],['AVS','AVS','#c13b44',69],['CD Tondela','TON','#d6c332',69],['FC Alverca','ALV','#b9333c',68]]},
  {name:'荷兰 · Eredivisie',short:'荷甲',country:'荷兰',clubs:[
    ['Ajax','AJA','#df3a40',85],['PSV Eindhoven','PSV','#d3363d',86],['Feyenoord','FEY','#d6393e',84],['AZ Alkmaar','AZA','#ca343b',80],['FC Twente','TWE','#d53a3f',79],['FC Utrecht','UTR','#d73c42',78],['NEC Nijmegen','NEC','#c73c3b',75],['SC Heerenveen','HEE','#5b99cc',74],['FC Groningen','GRO','#e5e6df',73],['Sparta Rotterdam','SPA','#d84b4d',73],['PEC Zwolle','PEC','#3f71b0',71],['Fortuna Sittard','FOR','#d5c638',71],['Heracles Almelo','HER','#222726',70],['Go Ahead Eagles','GAE','#d33e42',74],['Excelsior','EXC','#c93039',69],['FC Volendam','VOL','#e98532',68],['Telstar','TEL','#eeeeea',67],['Willem II','WIL','#d43b42',69]]},
  {name:'比利时 · Jupiler Pro League',short:'比甲',country:'比利时',clubs:[
    ['Club Brugge','CLU','#285da1',82],['RSC Anderlecht','AND','#644a91',80],['Union Saint-Gilloise','USG','#dbc737',82],['KRC Genk','GNK','#3976b4',79],['KAA Gent','GNT','#4f82b8',77],['Royal Antwerp','ANT','#d13841',78],['Standard Liège','STA','#d23b43',74],['KV Mechelen','MEC','#d5b931',73],['Charleroi','CHA','#202725',73],['KVC Westerlo','WES','#e0ce34',71],['OH Leuven','OHL','#e7e7e3',71],['Sint-Truiden','STV','#e0ca34',71],['Cercle Brugge','CER','#3f945a',72],['FCV Dender','DEN','#3565a1',68],['Zulte Waregem','ZUL','#d43a41',69],['RAAL La Louvière','RAA','#4c8b64',68]]},
  {name:'苏格兰 · Scottish Premiership',short:'苏超',country:'苏格兰',clubs:[
    ['Celtic','CEL','#369554',82],['Rangers','RAN','#315fa2',80],['Aberdeen','ABE','#cb373e',74],['Heart of Midlothian','HEA','#892e3e',73],['Hibernian','HIB','#369057',72],['Dundee United','DUN','#e7772d',69],['Motherwell','MOT','#8c4a35',69],['St Mirren','STM','#eeeeea',68],['Kilmarnock','KIL','#3665a3',68],['Falkirk','FAL','#315c98',67],['Dundee FC','DFC','#263a63',67],['Livingston','LIV','#dfc736',66]]},
  {name:'奥地利 · Austrian Bundesliga',short:'奥甲',country:'奥地利',clubs:[
    ['Red Bull Salzburg','RBS','#eeeeea',80],['Sturm Graz','STG','#222725',78],['Rapid Wien','RAP','#368f54',74],['Austria Wien','AUS','#684d92',74],['Wolfsberger AC','WAC','#28312d',71],['LASK','LAS','#eeeeea',72],['TSV Hartberg','HAR','#3679b7',68],['Blau-Weiß Linz','BWL','#3376b5',68],['SCR Altach','ALT','#e5cf36',67],['Grazer AK','GAK','#d33b41',68],['SV Ried','RIE','#378b52',67],['WSG Tirol','WSG','#3f9258',66]]}
);
const COUNTRIES=['中国','英格兰','西班牙','德国','意大利','法国','葡萄牙','荷兰','比利时','巴西','阿根廷','日本','韩国','美国','挪威','克罗地亚','塞尔维亚','瑞典','丹麦','瑞士'];
const POSITIONS=[['ST','中锋'],['LW','左边锋'],['RW','右边锋'],['CAM','前腰'],['CM','中前卫'],['CDM','后腰'],['LB','左后卫'],['CB','中后卫'],['RB','右后卫'],['GK','门将']];
const MONTHS=['八月','九月','十月','十一月','十二月','一月','二月','三月','四月','五月','六月','七月'];
const AWARDS=[
  {name:'金球奖',icon:'◈',mark:'B',desc:'全球范围个人奖项，依次参考个人表现、球队成绩与荣誉，以及球员风度和公平竞赛。',rule:'全球联赛均可参评 · 顶级表现与重大冠军更有利',source:'金球奖官方规则',sourceUrl:'https://ballondor.com/the-ballon-dor'},
  {name:'欧洲金童奖',icon:'✦',mark:'G',desc:'授予效力欧洲顶级联赛、表现最出色的年轻球员。',rule:'21 岁以下 · 仅欧洲顶级联赛球员',source:'Golden Boy 官方说明',sourceUrl:'https://www.goldenboyaward.com/'},
  {name:'欧洲金靴奖',icon:'♞',mark:'S',desc:'授予欧洲顶级联赛赛季射手表现最出色的球员。',rule:'非门将 · 仅欧洲顶级联赛球员参与',source:'UEFA 计分说明',sourceUrl:'https://www.uefa.com/uefachampionsleague/news/0252-0cda34062034-e692869a9b96-1000--lionel-messi-europe-s-top-scorer/'},
  {name:'雅辛奖 · 金手套',icon:'♜',mark:'Y',desc:'全球范围年度最佳门将荣誉，综合零封、扑救、稳定性与球队成绩。',rule:'全球联赛门将均可参评',source:'金球奖官方排名说明',sourceUrl:'https://ballondor.com/all-rankings'},
  {name:'联赛冠军',icon:'♛',mark:'C',type:'league',desc:'赛季结束时随俱乐部登上积分榜首位。奖杯使用游戏数据库中对应联赛的联网标识。',rule:'所有位置 · 球队最终排名第 1'},
  {name:'国家队冠军',icon:'⚑',mark:'N',type:'national',desc:'随国家队赢得世界杯或所属大洲最高级别国家队赛事，冠军标识会进入荣誉橱窗。',rule:'入选国家队并随队夺冠'}
];
const commonsTrophy=(file,width=420)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
const LEAGUE_TROPHY_IMAGES={
  '英超':commonsTrophy('Premier league trophy icon (adjusted).png'),
  '西甲':commonsTrophy('Liga trophy (adjusted).png'),
  '德甲':commonsTrophy('Meisterschale.png'),
  '意甲':commonsTrophy('Coppa Campioni d’Italia.jpg'),
  '法甲':commonsTrophy('Ligue 1 Trophy 2024.png'),
  '葡超':commonsTrophy('Primeira Liga Trophy.svg'),
  '荷甲':commonsTrophy('Trofeo Eredivisie.svg'),
  '比甲':commonsTrophy('Icone du nouveau trophée du championnat de Belgique.svg'),
  '苏超':commonsTrophy('Spltrophy.png'),
  '奥甲':commonsTrophy('Österreichischer Meisterteller 1.JPG'),
  '沙特联':commonsTrophy('Saudi Professional League Cup.png'),
  '美职联':commonsTrophy('MLS Cup.svg'),
  '中超':commonsTrophy('中超火神杯.png'),
  'J1联赛':'https://www.jleague.jp/img/news/2022/12/24237.jpg?_=1671522154',
  'K联赛1':commonsTrophy('K League Classic Trophy.png'),
  '英冠':commonsTrophy('Maresca Championship trophy Leicester (cropped).jpg'),
  '西乙':commonsTrophy('Trofeo de Segunda División - Deportivo da Coruña.jpg'),
  '德乙':commonsTrophy('Zweite Bundesliga Schale.png'),
  '意乙':commonsTrophy('Coppa Ali della Vittoria.png'),
  '法乙':commonsTrophy('Ligue 2 trophy.png')
};
const leagueTrophyImage=short=>LEAGUE_TROPHY_IMAGES[short]||AWARD_IMAGES?.DEFAULT||'';
const NATIONAL_TROPHY_IMAGES={
  'FIFA 世界杯':commonsTrophy('FIFA World Cup Trophy (FIFAAH-305568).jpg'),
  '世界杯':commonsTrophy('FIFA World Cup Trophy (FIFAAH-305568).jpg'),
  '欧洲杯':commonsTrophy('UEFA Euro 2020 Trophy (cropped).jpg'),
  '非洲杯':commonsTrophy('African Cup of Nations (ACN).svg'),
  '亚洲杯':commonsTrophy('Asian cup trophy 2019-.png'),
  '美洲杯':commonsTrophy('Copa america trofeo.jpg'),
  '中北美及加勒比海金杯':commonsTrophy('CONCACAF - Gold Cup.svg')
};
const NATIONAL_TROPHY_GALLERY=[
  ['FIFA 世界杯','世界杯'],['欧洲杯','欧洲杯'],['亚洲杯','亚洲杯'],['美洲杯','美洲杯'],['非洲杯','非洲杯'],['中北美及加勒比海金杯','金杯']
];
const nationalTrophyImage=name=>{
  const key=Object.keys(NATIONAL_TROPHY_IMAGES).find(k=>String(name).includes(k));
  return key?NATIONAL_TROPHY_IMAGES[key]:'';
};
const SAVE_KEY='career12-save-v1';
const SAVE_LIBRARY_KEY='career12-save-library-v1';
const SAVE_LIMIT=10;
const TEAM_LOGOS={
  '曼彻斯特蓝月':50,'伦敦枪手':42,'默西塞德红军':40,'北伦敦雄狮':47,'伦敦蓝狮':49,'纽卡斯尔联':34,
  '马德里白衣':541,'加泰罗尼亚红蓝':529,'马德里竞技':530,'巴斯克竞技':531,'塞维利亚红白':536,'皇家社会':548,
  '慕尼黑之星':157,'多特蒙德蜂群':165,'莱茵药厂':168,'莱比锡公牛':173,'法兰克福雄鹰':169,'斯图加特':172,
  '米兰蓝黑':505,'都灵斑马':496,'米兰红黑':489,'那不勒斯海湾':492,'罗马之狼':497,'亚特兰大女神':499,
  '巴黎之光':85,'马赛航海':81,'摩纳哥王冠':91,'里昂雄狮':80,'里尔獒犬':79,'尼斯之鹰':84,
  '里斯本雄鹰':211,'波尔图巨龙':212,'里斯本竞技':228,'布拉加兵工厂':217,
  '阿姆斯特丹之子':194,'埃因霍温飞利浦':197,'鹿特丹港湾':209,'阿尔克马尔':201,
  '布鲁日蓝黑':569,'安德莱赫特紫衣':554,'圣吉罗斯联':1393,'亨克竞技':742,
  '格拉斯哥绿白':247,'格拉斯哥蓝军':257,'爱丁堡之心':62,'阿伯丁':180,
  '萨尔茨堡红牛':571,'维也纳绿白':781,'格拉茨风暴':637,'奥地利维也纳':601
};
Object.assign(TEAM_LOGOS,{
  'Arsenal':42,'Aston Villa':66,'AFC Bournemouth':35,'Brentford':55,'Brighton & Hove Albion':51,'Chelsea':49,'Crystal Palace':52,'Everton':45,'Fulham':36,'Hull City':64,'Ipswich Town':57,'Leeds United':63,'Liverpool':40,'Manchester City':50,'Manchester United':33,'Newcastle United':34,'Nottingham Forest':65,'Sunderland':746,'Tottenham Hotspur':47,
  'Athletic Club':531,'Atlético de Madrid':530,'CA Osasuna':727,'RC Celta':538,'Deportivo Alavés':542,'Elche CF':797,'FC Barcelona':529,'Getafe CF':546,'Levante UD':539,'Málaga CF':535,'Racing de Santander':466,'Rayo Vallecano':728,'RC Deportivo':544,'RCD Espanyol':540,'Real Betis':543,'Real Madrid':541,'Real Sociedad':548,'Sevilla FC':536,'Valencia CF':532,'Villarreal CF':533,
  'Bayern Munich':157,'Borussia Dortmund':165,'RB Leipzig':173,'VfB Stuttgart':172,'TSG Hoffenheim':167,'Bayer Leverkusen':168,'SC Freiburg':160,'Eintracht Frankfurt':169,'FC Augsburg':170,'Mainz 05':164,'Union Berlin':182,'Borussia Mönchengladbach':163,'Hamburger SV':175,'1. FC Köln':192,'Werder Bremen':162,'Schalke 04':174,'SC Paderborn':185,
  'Atalanta':499,'Bologna':500,'Cagliari':490,'Como 1907':895,'Fiorentina':502,'Frosinone':512,'Genoa':495,'Inter':505,'Juventus':496,'Lazio':487,'Lecce':867,'AC Milan':489,'Monza':1579,'Napoli':492,'Parma':523,'AS Roma':497,'Sassuolo':488,'Torino':503,'Udinese':494,'Venezia':517,
  'Angers SCO':77,'AJ Auxerre':108,'Stade Brestois 29':106,'Le Havre AC':111,'RC Lens':116,'LOSC Lille':79,'FC Lorient':97,'Olympique Lyonnais':80,'Olympique de Marseille':81,'AS Monaco':91,'OGC Nice':84,'Paris FC':114,'Paris Saint-Germain':85,'Stade Rennais':94,'RC Strasbourg Alsace':95,'Toulouse FC':96,'ESTAC Troyes':110,
  'SL Benfica':211,'Sporting CP':228,'FC Porto':212,'SC Braga':217,'Vitória SC':224,'FC Famalicão':242,'Santa Clara':227,'Estoril Praia':230,'Casa Pia':4716,'Moreirense':215,'Rio Ave':226,'FC Arouca':240,'Gil Vicente':762,'CD Nacional':225,'Estrela Amadora':15130,'AVS':21120,'CD Tondela':218,
  'Ajax':194,'PSV Eindhoven':197,'Feyenoord':209,'AZ Alkmaar':201,'FC Twente':415,'FC Utrecht':207,'NEC Nijmegen':413,'SC Heerenveen':210,'FC Groningen':202,'Sparta Rotterdam':426,'PEC Zwolle':193,'Fortuna Sittard':205,'Heracles Almelo':206,'Go Ahead Eagles':410,'Excelsior':196,'FC Volendam':416,'Willem II':208,
  'Club Brugge':569,'RSC Anderlecht':554,'Union Saint-Gilloise':1393,'KRC Genk':742,'KAA Gent':631,'Royal Antwerp':740,'Standard Liège':733,'KV Mechelen':2668,'Charleroi':736,'KVC Westerlo':261,'OH Leuven':260,'Sint-Truiden':735,'Cercle Brugge':741,
  'Celtic':247,'Rangers':257,'Aberdeen':180,'Heart of Midlothian':62,'Hibernian':249,'Dundee United':246,'Motherwell':251,'St Mirren':248,'Kilmarnock':252,'Dundee FC':254,'Livingston':258,
  'Red Bull Salzburg':571,'Sturm Graz':637,'Rapid Wien':781,'Austria Wien':601,'Wolfsberger AC':656,'LASK':652,'TSV Hartberg':1024,'Blau-Weiß Linz':2877,'SCR Altach':608,'Grazer AK':666,'SV Ried':611,'WSG Tirol':581
});
const COUNTRY_CODES={'中国':'cn','英格兰':'gb-eng','西班牙':'es','德国':'de','意大利':'it','法国':'fr','葡萄牙':'pt','荷兰':'nl','比利时':'be','巴西':'br','阿根廷':'ar','日本':'jp','韩国':'kr','美国':'us','挪威':'no','克罗地亚':'hr','塞尔维亚':'rs','瑞典':'se','丹麦':'dk','瑞士':'ch'};
const GAME_STATE_VERSION=12;
const LEGACY_CLUB_NAMES=Object.freeze({
  '曼彻斯特蓝月':'Manchester City','伦敦枪手':'Arsenal','默西塞德红军':'Liverpool','北伦敦雄狮':'Tottenham Hotspur','伦敦蓝狮':'Chelsea','纽卡斯尔联':'Newcastle United',
  '马德里白衣':'Real Madrid','加泰罗尼亚红蓝':'FC Barcelona','马德里竞技':'Atlético de Madrid','巴斯克竞技':'Athletic Club','塞维利亚红白':'Sevilla FC','皇家社会':'Real Sociedad',
  '慕尼黑之星':'Bayern Munich','多特蒙德蜂群':'Borussia Dortmund','莱茵药厂':'Bayer Leverkusen','莱比锡公牛':'RB Leipzig','法兰克福雄鹰':'Eintracht Frankfurt','斯图加特':'VfB Stuttgart',
  '米兰蓝黑':'Inter','都灵斑马':'Juventus','米兰红黑':'AC Milan','那不勒斯海湾':'Napoli','罗马之狼':'AS Roma','亚特兰大女神':'Atalanta',
  '巴黎之光':'Paris Saint-Germain','马赛航海':'Olympique de Marseille','摩纳哥王冠':'AS Monaco','里昂雄狮':'Olympique Lyonnais','里尔獒犬':'LOSC Lille','尼斯之鹰':'OGC Nice',
  '里斯本雄鹰':'SL Benfica','波尔图巨龙':'FC Porto','里斯本竞技':'Sporting CP','布拉加兵工厂':'SC Braga','阿姆斯特丹之子':'Ajax','埃因霍温飞利浦':'PSV Eindhoven',
  '鹿特丹港湾':'Feyenoord','阿尔克马尔':'AZ Alkmaar','布鲁日蓝黑':'Club Brugge','安德莱赫特紫衣':'RSC Anderlecht','圣吉罗斯联':'Union Saint-Gilloise','亨克竞技':'KRC Genk',
  '格拉斯哥绿白':'Celtic','格拉斯哥蓝军':'Rangers','爱丁堡之心':'Heart of Midlothian','阿伯丁':'Aberdeen','萨尔茨堡红牛':'Red Bull Salzburg','维也纳绿白':'Rapid Wien',
  '格拉茨风暴':'Sturm Graz','奥地利维也纳':'Austria Wien'
});
let foot='右脚', state=null, activeLeague=0, modalLocked=false, audioContext=null;

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const leagueForClub=name=>LEAGUES.find(l=>l.clubs.some(c=>c[0]===name));
const clubByName=name=>LEAGUES.flatMap(l=>l.clubs).find(c=>c[0]===name);
const money=n=>{if(n<1)return'€0m';const millions=n/100,digits=millions<10?2:millions<100?1:0;return`€${millions.toFixed(digits)}m`};
const currentSeason=()=>`${state.year}/${String(state.year+1).slice(-2)}`;
const seasonStats=()=>{const season=state.seasons[state.seasons.length-1];ensureSeasonBreakdown(season);return season};
function playSfx(kind='tap'){
  if(!state?.sound)return;
  try{
    audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();if(audioContext.state==='suspended')audioContext.resume();
    const presets={tap:[360,.035,.025],goal:[620,.13,.08],miss:[170,.12,.06],injury:[210,.18,.07],transfer:[480,.16,.08],trophy:[740,.24,.09]},[frequency,duration,volume]=presets[kind]||presets.tap,osc=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;
    osc.type=kind==='injury'||kind==='miss'?'sawtooth':'sine';osc.frequency.setValueAtTime(frequency,now);if(kind==='goal'||kind==='trophy')osc.frequency.exponentialRampToValueAtTime(frequency*1.45,now+duration);
    gain.gain.setValueAtTime(volume,now);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);osc.connect(gain);gain.connect(audioContext.destination);osc.start(now);osc.stop(now+duration);
  }catch{}
}

function init(){
  $('#country').innerHTML=COUNTRIES.map(c=>`<option>${c}</option>`).join('');
  $('#position').innerHTML=POSITIONS.map(p=>`<option value="${p[0]}">${p[0]} · ${p[1]}</option>`).join('');
  renderPlayStyles();$('#position').onchange=renderPlayStyles;
  $$('.segmented button').forEach(b=>b.onclick=()=>{$$('.segmented button').forEach(x=>x.classList.remove('active'));b.classList.add('active');foot=b.dataset.foot});
  $('#player-form').onsubmit=createPlayer;
  $('#advance-btn').onclick=advanceTwoMonths;
  $('#advance-span').onchange=updateAdvanceUI;
  $('#mobile-advance-btn').onclick=advanceTwoMonths;
  $('#mobile-restart-btn').onclick=resetGame;
  $('#mobile-contract-btn').onclick=openContractManager;
  $('#mobile-decision-btn').onclick=openDecisionCenter;
  $('#transfer-request-btn').onclick=openTransferRequest;
  $('#contract-negotiate-btn').onclick=openContractNegotiation;
  $('#creator-saves-btn').onclick=openSaveManager;
  $('#save-manager-btn').onclick=openSaveManager;
  $$('[data-mobile-span]').forEach(button=>button.onclick=()=>{
    $('#advance-span').value=button.dataset.mobileSpan;
    updateAdvanceUI();
  });
  $('#mobile-more-btn').onclick=()=>{
    const page=$('#overview-page'),expanded=page.classList.toggle('mobile-expanded');
    $('#mobile-more-btn').textContent=expanded?'收起详细信息':'展开完整生涯信息';
    $('#mobile-more-btn').setAttribute('aria-expanded',String(expanded));
  };
  $('#reset-btn').onclick=resetGame;
  $('#modal-close').onclick=closeModal;
  $('#modal').onclick=e=>{if(e.target===$('#modal')&&!modalLocked)closeModal()};
  $('#sound-btn').onclick=()=>{state.sound=!state.sound;$('#sound-btn').textContent=state.sound?'♪':'×';save();if(state.sound)playSfx('tap');toast(state.sound?'提示音已开启':'提示音已关闭')};
  $$('#nav button').forEach(b=>b.onclick=()=>showPage(b.dataset.page));
  if(!document.body.dataset.sfxBound){document.body.dataset.sfxBound='1';document.addEventListener('click',event=>{if(event.target.closest('button')&&event.target.id!=='sound-btn')playSfx('tap')},{passive:true})}
  updateSaveManagerBadges();
  renderAwards(); renderLeagueTabs();
  const saved=localStorage.getItem(SAVE_KEY);
  if(saved){
    try{
      state=JSON.parse(saved);migrateState();showGame();renderAll();restorePendingDecision();
    }catch(error){
      console.error('自动存档读取失败，已切换到安全启动模式。',error);
      try{localStorage.setItem(`${SAVE_KEY}-recovery-${Date.now()}`,saved)}catch{}
      localStorage.removeItem(SAVE_KEY);state=null;
      $('#game').classList.add('hidden');$('#creator').classList.remove('hidden');
      updateSaveManagerBadges();
      setTimeout(()=>toast('旧存档无法读取，已返回新生涯页面；原数据已尝试保留为恢复副本'),60);
    }
  }
}

function legacyV1_migrateState(){
  const clubMap={'曼彻斯特蓝月':'Manchester City','伦敦枪手':'Arsenal','默西塞德红军':'Liverpool','北伦敦雄狮':'Tottenham Hotspur','伦敦蓝狮':'Chelsea','纽卡斯尔联':'Newcastle United','马德里白衣':'Real Madrid','加泰罗尼亚红蓝':'FC Barcelona','马德里竞技':'Atlético de Madrid','巴斯克竞技':'Athletic Club','塞维利亚红白':'Sevilla FC','皇家社会':'Real Sociedad','慕尼黑之星':'Bayern Munich','多特蒙德蜂群':'Borussia Dortmund','莱茵药厂':'Bayer Leverkusen','莱比锡公牛':'RB Leipzig','法兰克福雄鹰':'Eintracht Frankfurt','斯图加特':'VfB Stuttgart','米兰蓝黑':'Inter','都灵斑马':'Juventus','米兰红黑':'AC Milan','那不勒斯海湾':'Napoli','罗马之狼':'AS Roma','亚特兰大女神':'Atalanta','巴黎之光':'Paris Saint-Germain','马赛航海':'Olympique de Marseille','摩纳哥王冠':'AS Monaco','里昂雄狮':'Olympique Lyonnais','里尔獒犬':'LOSC Lille','尼斯之鹰':'OGC Nice','里斯本雄鹰':'SL Benfica','波尔图巨龙':'FC Porto','里斯本竞技':'Sporting CP','布拉加兵工厂':'SC Braga','阿姆斯特丹之子':'Ajax','埃因霍温飞利浦':'PSV Eindhoven','鹿特丹港湾':'Feyenoord','阿尔克马尔':'AZ Alkmaar','布鲁日蓝黑':'Club Brugge','安德莱赫特紫衣':'RSC Anderlecht','圣吉罗斯联':'Union Saint-Gilloise','亨克竞技':'KRC Genk','格拉斯哥绿白':'Celtic','格拉斯哥蓝军':'Rangers','爱丁堡之心':'Heart of Midlothian','阿伯丁':'Aberdeen','萨尔茨堡红牛':'Red Bull Salzburg','维也纳绿白':'Rapid Wien','格拉茨风暴':'Sturm Graz','奥地利维也纳':'Austria Wien'};
  if(clubMap[state.club])state.club=clubMap[state.club];
  (state.seasons||[]).forEach(s=>{if(clubMap[s.club])s.club=clubMap[s.club]});
  const c=clubByName(state.club);if(c){state.clubCode=c[1];state.clubColor=c[2];state.clubStrength=c[3]}
  state.profile=state.profile||{personality:'自律',development:'技术',background:'普通家庭',agentStyle:'稳健',careerGoal:'成为世界最佳'};
  state.eventHistory=state.eventHistory||{};state.flags=state.flags||{};state.relationships=state.relationships||{coach:50,teammates:50,fans:35,agent:50};state.matchReports=state.matchReports||[];state.continentalHistory=state.continentalHistory||[];if(state.age>=16&&!state.continentalCurrent)state.continentalCurrent=createContinentalCampaign();state.version=3;
}

function legacyV1_createPlayer(e){
  e.preventDefault();
  const pos=$('#position').value, country=$('#country').value;
  const academy=startingAcademy(country);
  const potential=rand(84,95), overall=rand(42,49);
  const profile={personality:$('#personality').value,development:$('#development').value,background:$('#background').value,agentStyle:$('#agentStyle').value,careerGoal:$('#careerGoal').value};
  state={name:$('#name').value.trim()||'无名新星',country,pos,number:+$('#number').value,foot,age:12,year:2026,month:0,club:academy[0],clubCode:academy[1],clubColor:academy[2],clubStrength:academy[3],overall,potential:potential+(profile.background==='体育家庭'?1:0),fitness:profile.background==='体育家庭'?100:96,morale:72,trust:profile.background==='足球世家'?53:48,value:0,wage:0,contractEnd:2030,injured:0,sound:true,retired:false,profile,eventHistory:{},flags:{},relationships:{coach:50,teammates:profile.personality==='外向'?60:50,fans:35,agent:50},version:2,
    seasons:[newSeason(2026,academy[0])],events:[],trophies:[],feed:[],matchReports:[],continentalHistory:[],continentalCurrent:null};
  addEvent('签约青训营',`${state.name} 加入 ${state.club} 青训学院，梦想从这里启程。`,'✦');
  addFeed('欢迎来到青训营',`教练递给你 ${state.number} 号训练服。你的成长路线是「${profile.development}」，首要目标是「${profile.careerGoal}」。`,'12');
  showGame();renderAll();save();
}
function startingAcademy(country){
  let league=LEAGUES.find(l=>l.country===country&&l.tier!==2);
  if(!league) league=country==='中国'?LEAGUES.find(l=>l.short==='中超'):pick(LEAGUES.filter(l=>l.tier!==2).slice(5));
  const candidates=league.clubs.filter(c=>c[3]<90);
  return pick(candidates.length?candidates:league.clubs);
}
function emptyStatLine(){return{apps:0,starts:0,goals:0,assists:0,cleanSheets:0,minutes:0,rating:0}}
function emptyTeamRecord(){return{played:0,wins:0,draws:0,losses:0,gf:0,ga:0,points:0}}
const CUP_COMPETITIONS={
  '英超':['FA Cup','FAC'],'英冠':['FA Cup','FAC'],'西甲':['Copa del Rey','CDR'],'西乙':['Copa del Rey','CDR'],
  '德甲':['DFB-Pokal','DFB'],'德乙':['DFB-Pokal','DFB'],'意甲':['Coppa Italia','CIT'],'意乙':['Coppa Italia','CIT'],
  '法甲':['Coupe de France','CDF'],'法乙':['Coupe de France','CDF'],'葡超':['Taça de Portugal','TDP'],'荷甲':['KNVB Cup','KNV'],
  '比甲':['Belgian Cup','BEC'],'苏超':['Scottish Cup','SCO'],'奥甲':['Austrian Cup','AUC'],'沙特联':['King’s Cup','KSC'],
  '美职联':['U.S. Open Cup','USC'],'中超':['中国足协杯','CFA'],'J1联赛':['Emperor’s Cup','EMP'],'K联赛1':['Korea Cup','KOR']
};
const CUP_STAGES=[['32强',2],['16强',4],['四分之一决赛',6],['半决赛',8],['决赛',10]];
const SEASON_OBJECTIVES={
  safe:{id:'safe',name:'稳健 · 站稳阵容',description:'获得 15 次正式比赛出场。',reward:'提升教练认可与赛季稳定性',failure:'未完成时士气与信任承受小幅压力'},
  ambitious:{id:'ambitious',name:'进取 · 制造决定性表现',description:'非门将贡献 15 个进球或助攻；门将完成 10 场零封。',reward:'获得专项成长与市场关注',failure:'未完成时个人状态受到小幅影响'},
  challenge:{id:'challenge',name:'挑战 · 核心与洲际资格',description:'成为球队核心，并帮助球队取得下赛季洲际赛事资格。',reward:'获得合同地位与身价层面的高回报',failure:'高难目标失败会影响士气与教练关系'}
};
function domesticCupForClub(club){
  const league=leagueForClub(club),info=CUP_COMPETITIONS[league?.short];return info?{name:info[0],code:info[1],leagueShort:league.short}:null;
}
function createDomesticCupState(club){
  const info=domesticCupForClub(club);return info?{club,name:info.name,code:info.code,leagueShort:info.leagueShort,stageIndex:0,stage:CUP_STAGES[0][0],matches:[],eliminated:false,wonTitle:false,leftClubMidSeason:false}:null;
}
function defaultContractTerms(wage=0,rolePromise='轮换'){
  const base=Math.max(600,wage||600);return{rolePromise,appearanceBonus:Math.round(base*.12/100)*100,goalBonus:Math.round(base*.22/100)*100,cleanSheetBonus:Math.round(base*.18/100)*100,continentalBonus:Math.round(base*8/1000)*1000,releaseClause:0,loanAllowed:true,relegationPayCut:.82,autoExtensionApps:24};
}
function ensureContractTerms(){
  if(!state)return null;state.contract={...defaultContractTerms(state.wage,state.trust>=75?'核心':state.trust>=55?'轮换':'替补'),...(state.contract||{})};state.contract.rolePromise=state.contract.rolePromise||'轮换';state.contract.signedSeason=state.contract.signedSeason||currentSeason();state.contract.signedMonth=Number(state.contract.signedMonth)||0;state.contract.appsBaseline=Number(state.contract.appsBaseline)||0;state.contract.startsBaseline=Number(state.contract.startsBaseline)||0;return state.contract;
}
function salaryAmount(value){return`€${(Math.max(0,value)/1000000).toFixed(value>=100000?2:3)}m`}
function contractRoleBoost(){const role=ensureContractTerms()?.rolePromise;return role==='核心'?.08:role==='主力'?.055:role==='轮换'?.025:0}
function contractOfferTerms(wage,clubStrength,preferredRole){
  const role=preferredRole||(state.overall>=clubStrength-8?'核心':state.overall>=clubStrength-14?'主力':'轮换'),terms=defaultContractTerms(wage,role);
  terms.appearanceBonus=Math.round(wage*(role==='核心'?.16:.12)/100)*100;
  terms.goalBonus=Math.round(wage*(state.pos==='GK'?.08:.26)/100)*100;
  terms.cleanSheetBonus=Math.round(wage*(state.pos==='GK'?.28:.12)/100)*100;
  terms.continentalBonus=Math.round(wage*(role==='核心'?12:8)/1000)*1000;
  terms.releaseClause=Math.max(1000,Math.round((state.value||500)*(role==='核心'?1.65:1.35)/100)*100);
  terms.autoExtensionApps=role==='核心'?28:role==='主力'?22:16;return terms;
}
function createSeasonStint(club,fromMonth=0){return{club,fromMonth,toMonth:null,apps:0,starts:0,goals:0,assists:0,cleanSheets:0,minutes:0,rating:0,stats:{league:emptyStatLine(),cup:emptyStatLine(),continental:emptyStatLine(),total:emptyStatLine()}}}
function ensureStintBreakdown(stint){
  if(!stint)return stint;
  const legacy={apps:Number(stint.apps)||0,starts:Number(stint.starts)||0,goals:Number(stint.goals)||0,assists:Number(stint.assists)||0,cleanSheets:Number(stint.cleanSheets)||0,minutes:Number(stint.minutes)||0,rating:stint.rating||0};
  if(!stint.stats||typeof stint.stats!=='object')stint.stats={league:{...legacy},cup:emptyStatLine(),continental:emptyStatLine(),total:{...legacy}};
  ['league','cup','continental','total'].forEach(key=>{stint.stats[key]={...emptyStatLine(),...(stint.stats[key]||{})}});
  return stint;
}
function syncStintFlatStats(stint){
  ensureStintBreakdown(stint);const total=stint.stats.total;
  ['apps','starts','goals','assists','cleanSheets','minutes','rating'].forEach(key=>stint[key]=total[key]);
  return stint;
}
function newSeason(year,club){const teamLeagueRecord=emptyTeamRecord();return {season:`${year}/${String(year+1).slice(-2)}`,club,finalClub:club,apps:0,starts:0,goals:0,assists:0,cleanSheets:0,rating:0,minutes:0,bonusEarnings:0,objective:null,objectiveChecks:[],shortChallenge:null,shortChallengeHistory:[],cup:createDomesticCupState(club),done:false,stats:{league:emptyStatLine(),cup:emptyStatLine(),continental:emptyStatLine(),total:emptyStatLine()},stints:[createSeasonStint(club,0)],teamLeagueRecord,teamLeagueRecords:{[club]:teamLeagueRecord},leagueSchedules:{},teamForm:{}}}
function ensureSeasonBreakdown(s){
  if(!s)return s;
  const legacy={apps:Number(s.apps)||0,starts:Number(s.starts)||0,goals:Number(s.goals)||0,assists:Number(s.assists)||0,cleanSheets:Number(s.cleanSheets)||0,minutes:Number(s.minutes)||0,rating:s.rating||0};
  if(!s.stats||typeof s.stats!=='object')s.stats={league:{...legacy},cup:emptyStatLine(),continental:emptyStatLine(),total:{...legacy}};
  ['league','cup','continental','total'].forEach(key=>{s.stats[key]={...emptyStatLine(),...(s.stats[key]||{})}});
  if(!Array.isArray(s.stints)||!s.stints.length){const stint=createSeasonStint(s.club||state?.club,0);Object.assign(stint,legacy,{toMonth:s.done?11:null});stint.stats.league={...stint.stats.league,...legacy};stint.stats.total={...stint.stats.total,...legacy};s.stints=[stint]}
  s.stints.forEach(ensureStintBreakdown);
  s.teamLeagueRecord={...emptyTeamRecord(),...(s.teamLeagueRecord||{})};
  if(!s.teamLeagueRecords||typeof s.teamLeagueRecords!=='object')s.teamLeagueRecords={[s.finalClub||s.club||state?.club]:s.teamLeagueRecord};
  if(!s.leagueSchedules||typeof s.leagueSchedules!=='object')s.leagueSchedules={};
  if(!s.teamForm||typeof s.teamForm!=='object')s.teamForm={};
  if(!('bonusEarnings'in s))s.bonusEarnings=0;
  if(!('objective'in s))s.objective=null;
  if(!Array.isArray(s.objectiveChecks))s.objectiveChecks=[];
  if(!('shortChallenge'in s))s.shortChallenge=null;
  if(!Array.isArray(s.shortChallengeHistory))s.shortChallengeHistory=[];
  if(!('cup'in s))s.cup=createDomesticCupState(s.finalClub||s.club||state?.club);
  if(s.cup){
    const fallback=createDomesticCupState(s.cup.club||s.finalClub||s.club||state?.club);
    Object.entries(fallback).forEach(([key,value])=>{if(!(key in s.cup))s.cup[key]=value});
    s.cup.matches=Array.isArray(s.cup.matches)?s.cup.matches:[];
    s.cup.stageIndex=clamp(Number(s.cup.stageIndex)||0,0,CUP_STAGES.length);
  }
  s.finalClub=s.finalClub||s.stints[s.stints.length-1]?.club||s.club;
  return s;
}
function currentTeamLeagueRecord(s=seasonStats(),club=state.club){
  ensureSeasonBreakdown(s);if(!s.teamLeagueRecords[club])s.teamLeagueRecords[club]=emptyTeamRecord();s.teamLeagueRecord=s.teamLeagueRecords[club];return s.teamLeagueRecord;
}
function currentSeasonStint(s=seasonStats()){
  ensureSeasonBreakdown(s);let stint=s.stints[s.stints.length-1];
  if(!stint||stint.club!==state.club||stint.toMonth!==null){stint=createSeasonStint(state.club,state.month);s.stints.push(stint)}
  return ensureStintBreakdown(stint);
}
function addAppearanceToLine(line,{start,minutes,goals,assists,cleanSheet,rating}){
  const oldApps=Number(line.apps)||0,oldRating=Number(line.rating)||0;line.apps=oldApps+1;if(start)line.starts=(Number(line.starts)||0)+1;line.minutes=(Number(line.minutes)||0)+minutes;line.goals=(Number(line.goals)||0)+goals;line.assists=(Number(line.assists)||0)+assists;if(cleanSheet)line.cleanSheets=(Number(line.cleanSheets)||0)+1;line.rating=((oldRating*oldApps+rating)/(oldApps+1)).toFixed(2);
}
function addStatLines(lines){
  const out=emptyStatLine(),ratings=[];
  lines.forEach(line=>{if(!line)return;out.apps+=Number(line.apps)||0;out.starts+=Number(line.starts)||0;out.goals+=Number(line.goals)||0;out.assists+=Number(line.assists)||0;out.cleanSheets+=Number(line.cleanSheets)||0;out.minutes+=Number(line.minutes)||0;if(Number(line.apps)&&Number(line.rating))ratings.push([Number(line.apps),Number(line.rating)])});
  const ratingApps=ratings.reduce((n,[apps])=>n+apps,0);out.rating=ratingApps?(ratings.reduce((n,[apps,rating])=>n+apps*rating,0)/ratingApps).toFixed(2):0;return out;
}
function leagueStatGroups(s){
  ensureSeasonBreakdown(s);const groups={};
  s.stints.forEach(stint=>{ensureStintBreakdown(stint);const league=leagueForClub(stint.club),key=league?.short||'未知联赛';groups[key]=groups[key]||{league,clubNames:[],lines:[]};groups[key].clubNames.push(stint.club);groups[key].lines.push(stint.stats.league)});
  return Object.fromEntries(Object.entries(groups).map(([key,group])=>[key,{...group,stats:addStatLines(group.lines)}]));
}
const CONTINENTAL_ACCESS={
  '英超':{ucl:4,directUcl:4,uel:5,uecl:6},'西甲':{ucl:4,directUcl:4,uel:5,uecl:6},'德甲':{ucl:4,directUcl:4,uel:5,uecl:6},'意甲':{ucl:4,directUcl:4,uel:5,uecl:6},'法甲':{ucl:4,directUcl:3,uel:5,uecl:6},
  '葡超':{ucl:2,directUcl:1,uel:3,uecl:4},'荷甲':{ucl:2,directUcl:1,uel:3,uecl:4},'比甲':{ucl:2,directUcl:1,uel:3,uecl:4},'苏超':{ucl:1,directUcl:0,uel:2,uecl:3},'奥甲':{ucl:1,directUcl:0,uel:2,uecl:3},
  '沙特联':{acle:3,acl2:5,acgl:6},'J1联赛':{acle:3,acl2:5,acgl:6},'K联赛1':{acle:3,acl2:4,acgl:5},'中超':{acle:2,acl2:3},
  '美职联':{ccc:4}
};
const CONTINENTAL_META={
  UCL:{competition:'UEFA Champions League',accent:'#75a9ff',target:8,format:'league'},
  UEL:{competition:'UEFA Europa League',accent:'#f19a39',target:8,format:'league'},
  UECL:{competition:'UEFA Conference League',accent:'#64d7a3',target:6,format:'league'},
  ACLE:{competition:'AFC Champions League Elite',accent:'#f1be48',target:8,format:'league'},
  ACL2:{competition:'AFC Champions League Two',accent:'#e6a94c',target:6,format:'league'},
  ACGL:{competition:'AFC Challenge League',accent:'#cf8b45',target:6,format:'league'},
  CCC:{competition:'CONCACAF Champions Cup',accent:'#62c7e5',target:0,format:'knockout'}
};
const UEFA_ASSOCIATION_LEVEL={'英格兰':97,'西班牙':94,'意大利':92,'德国':91,'法国':87,'葡萄牙':82,'荷兰':81,'比利时':75,'奥地利':71,'苏格兰':70};
function ensureUefaPerformanceSpots(s){
  if(!s)return[];if(Array.isArray(s.uefaPerformanceSpots))return s.uefaPerformanceSpots;
  const ranking=Object.entries(UEFA_ASSOCIATION_LEVEL).map(([country,base])=>({country,score:base+rand(-9,9)})).sort((a,b)=>b.score-a.score);
  s.uefaPerformanceSpots=ranking.slice(0,2).map(item=>item.country);return s.uefaPerformanceSpots;
}
function continentalQualificationPlaces(league){
  if(!league||league.tier===2)return 0;const rule=CONTINENTAL_ACCESS[league.short];if(!rule)return 0;
  return rule.ucl||rule.acle||rule.ccc||0;
}
function continentalQualificationCutoff(league){
  const rule=league&&CONTINENTAL_ACCESS[league.short];return rule?Math.max(...Object.entries(rule).filter(([key])=>key!=='directUcl').map(([,value])=>Number(value)||0)):0;
}
function seasonCupWon(s,club){
  return !!(s?.cup?.wonTitle&&s.cup.club===club);
}
function qualificationResult(code,route,entryStage='联赛阶段'){
  const meta=CONTINENTAL_META[code];return meta?{code,route,entryStage,...meta}:null;
}
function calculateContinentalQualification(s){
  if(!s)return null;const club=s.finalClub||s.club||state.club,league=LEAGUES.find(item=>item.short===s.leagueShort)||leagueForClub(club),rank=Number(s.leagueRank)||99,rule=CONTINENTAL_ACCESS[league?.short],cupWon=seasonCupWon(s,club);
  if(!league||league.tier===2||!rule)return null;
  const previousCampaign=state.continentalCurrent?.club===club&&state.continentalCurrent.wonTitle?state.continentalCurrent:null;
  if(previousCampaign?.code==='UCL'||previousCampaign?.code==='UEL')return qualificationResult('UCL',`${previousCampaign.competition} 卫冕冠军席位`);
  if(previousCampaign?.code==='UECL')return qualificationResult('UEL','UEFA Conference League 冠军席位');
  if(league.short==='美职联'){
    if(s.mlsCupChampion)return qualificationResult('CCC','MLS Cup 冠军直入16强','16强');
    if(rank===1)return qualificationResult('CCC','MLS Supporters’ Shield 冠军席位','第一轮');
    if(rank<=rule.ccc)return qualificationResult('CCC',`MLS 常规赛综合排名第 ${rank} 的递补席位`,'第一轮');
    if(cupWon)return qualificationResult('CCC','U.S. Open Cup 冠军席位','第一轮');
    return null;
  }
  if(rule.acle){
    if(rank<=rule.acle)return qualificationResult('ACLE',`${league.short} 第 ${rank} 名 · ACL Elite 名额`);
    if(cupWon||rank<=rule.acl2)return qualificationResult('ACL2',cupWon?`${s.cup.name} 冠军席位`:`${league.short} 第 ${rank} 名 · ACL Two 名额`);
    if(rule.acgl&&rank<=rule.acgl)return qualificationResult('ACGL',`${league.short} 第 ${rank} 名 · AFC Challenge League 名额`);
    return null;
  }
  const performanceSpot=(s.uefaPerformanceSpots||[]).includes(league.country),uclLimit=rule.ucl+(performanceSpot?1:0),uelLimit=rule.uel+(performanceSpot?1:0),ueclLimit=rule.uecl+(performanceSpot?1:0);
  if(rank<=uclLimit){
    if(performanceSpot&&rank===uclLimit)return qualificationResult('UCL',`${league.country} 获得 UEFA 赛季协会表现席位 · ${league.short} 第 ${rank} 名`);
    return qualificationResult('UCL',rank<=(rule.directUcl||0)?`${league.short} 第 ${rank} 名 · UEFA Champions League 联赛阶段名额`:`${league.short} 第 ${rank} 名 · UEFA Champions League 资格赛席位（结果模拟折算）`);
  }
  if(cupWon)return qualificationResult('UEL',`${s.cup.name} 冠军席位`);
  if(rank<=uelLimit)return qualificationResult('UEL',`${league.short} 第 ${rank} 名 · UEFA Europa League 名额`);
  if(rank<=ueclLimit)return qualificationResult('UECL',`${league.short} 第 ${rank} 名 · UEFA Conference League 名额`);
  return null;
}
function seasonObjectiveProgress(s=seasonStats(),final=false){
  ensureSeasonBreakdown(s);const objective=s.objective,definition=objective&&SEASON_OBJECTIVES[objective.id];if(!definition)return null;
  if(objective.id==='safe'){const current=Number(s.stats.total.apps)||0,target=15;return{definition,current,target,percent:clamp(current/target*100,0,100),label:`${current} / ${target} 次出场`,complete:current>=target}}
  if(objective.id==='ambitious'){
    const current=state.pos==='GK'?(Number(s.stats.total.cleanSheets)||0):(Number(s.stats.total.goals)||0)+(Number(s.stats.total.assists)||0),target=state.pos==='GK'?10:15,label=state.pos==='GK'?`${current} / ${target} 场零封`:`${current} / ${target} 个进球或助攻`;
    return{definition,current,target,percent:clamp(current/target*100,0,100),label,complete:current>=target};
  }
  const roleDone=state.trust>=75&&(Number(s.stats.total.starts)||0)>=20,qualified=final&&!!(s.continentalQualification||calculateContinentalQualification(s)),roleProgress=Math.min(1,((Number(s.stats.total.starts)||0)/20+state.trust/75)/2),percent=final?(roleDone&&qualified?100:Math.min(95,roleProgress*80+(qualified?20:0))):Math.min(90,roleProgress*90);
  return{definition,current:percent,target:100,percent,label:`${Number(s.stats.total.starts)||0}/20 次首发 · 信任 ${state.trust} · ${final?(qualified?'已获洲际资格':'未获洲际资格'):'资格赛季末结算'}`,complete:roleDone&&qualified};
}
function chooseSeasonObjective(id){
  const s=seasonStats(),definition=SEASON_OBJECTIVES[id];if(!definition)return;const remaining=Number(state.flags.pendingAdvanceMonths)||0;s.objective={id,chosenAtMonth:state.month,completed:false,settled:false};clearPendingDecision();addFeed('赛季目标已确定',`${definition.name}：${definition.description}`,'◎');closeModal();if(remaining){delete state.flags.pendingAdvanceMonths;renderAll();advanceCareer(remaining)}else renderAll();
}
function settleSeasonObjective(s){
  const progress=seasonObjectiveProgress(s,true);if(!progress||s.objective.settled)return;s.objective.settled=true;s.objective.completed=progress.complete;s.objective.finalProgress=progress.label;
  if(progress.complete){
    if(s.objective.id==='safe'){state.trust=clamp(state.trust+7,0,100);state.morale=clamp(state.morale+5,0,100)}
    else if(s.objective.id==='ambitious'){const pool=developmentPool(),changes={};for(let i=0;i<3;i++){const key=pick(pool);changes[key]=(changes[key]||0)+1}changeAttributes(changes);state.morale=clamp(state.morale+7,0,100);state.flags.pendingValueMultiplier=(state.flags.pendingValueMultiplier||1)*1.04}
    else{state.trust=clamp(state.trust+8,0,100);state.morale=clamp(state.morale+10,0,100);state.wage=Math.round((state.wage||0)*1.08);state.flags.pendingValueMultiplier=(state.flags.pendingValueMultiplier||1)*1.08}
    addFeed('赛季目标完成',`${progress.definition.name} 已完成。${progress.definition.reward}。`,'★');addEvent('完成赛季目标',`${s.season}：${progress.definition.name}。最终进度：${progress.label}。`,'★');
  }else{
    if(s.objective.id==='safe'){state.trust=clamp(state.trust-3,0,100);state.morale=clamp(state.morale-5,0,100)}
    else if(s.objective.id==='ambitious')state.morale=clamp(state.morale-4,0,100);
    else{state.trust=clamp(state.trust-5,0,100);state.morale=clamp(state.morale-7,0,100)}
    addFeed('赛季目标未完成',`${progress.definition.name} 未能达成。${progress.definition.failure}。`,'×');
  }
}
function renderSeasonObjective(){
  const panel=$('#season-objective-panel'),content=$('#objective-content'),status=$('#objective-status');if(!panel||!state)return;const progress=seasonObjectiveProgress();
  if(!progress){status.textContent='待选择';content.innerHTML='<div class="objective-copy"><div><strong>为这个赛季确定一条路线</strong><p>目标会持续追踪，并在赛季结束时结算奖励与后果。</p></div></div><button id="choose-objective-btn" class="primary">选择赛季目标</button>';const button=$('#choose-objective-btn');if(button)button.onclick=()=>showSeasonObjectiveDecision(true);return}
  status.textContent=progress.complete?'已达成':'进行中';content.innerHTML=`<div class="objective-copy"><div><strong>${progress.definition.name}</strong><p>${progress.definition.description}</p></div><span class="objective-progress">${Math.round(progress.percent)}%</span></div><div class="objective-track"><i style="width:${progress.percent}%"></i></div><div class="objective-foot"><span>${progress.label}</span><b>${progress.complete?'目标已经达成':'赛季结束时结算'}</b></div>`;
}
function showGame(){$('#creator').classList.add('hidden');$('#game').classList.remove('hidden')}
function showPage(name){
  const target=$(`#${name}-page`);
  if(!target)return;
  $$('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===name));
  $$('.page').forEach(p=>p.classList.remove('active'));target.classList.add('active');
  const titles={overview:'生涯主页',career:'生涯履历',leagues:'联赛数据库',awards:'荣誉殿堂'};$('#page-title').textContent=titles[name]||'十二号新星';
  if(name==='career')renderCareer(); if(name==='leagues')renderClubs(); if(name==='awards')renderAwards();
  const resetPageScroll=()=>{target.scrollTop=0;document.documentElement.scrollTop=0;document.body.scrollTop=0;window.scrollTo(0,0)};
  resetPageScroll();requestAnimationFrame(resetPageScroll);setTimeout(resetPageScroll,0);
}
function renderAll(){
  const c=clubByName(state.club)||[state.club,state.clubCode,state.clubColor,state.clubStrength], s=seasonStats(), league=leagueForClub(state.club);
  $('#season-kicker').textContent=`${currentSeason()} 赛季 · ${state.age} 岁`;
  $('#calendar').textContent=`${MONTHS[state.month]} · 第 ${state.month+1} 月`;
  $('#player-name').textContent=state.name;$('#club-line').textContent=`${state.club} · ${state.age<16?'青训学院':'一线队'}`;
  const flag=COUNTRY_CODES[state.country]?`<img class="flag" src="https://flagcdn.com/24x18/${COUNTRY_CODES[state.country]}.png" alt="${state.country}国旗" onerror="this.remove()">`:'';
  $('#player-meta').innerHTML=[`${flag}${state.country}`,`${state.pos} · ${POSITIONS.find(p=>p[0]===state.pos)[1]}`,`${state.number} 号`,state.foot,state.profile?.playStyle||'全能型',`${state.profile?.personality||'自律'} · ${state.profile?.development||'技术'}路线`].map(x=>`<span>${x}</span>`).join('');
  $('#overall').textContent=state.overall;$('#potential-text').textContent='能力值 / 100';
  setCrest($('#club-crest'),c);setCrest($('#mini-crest'),c);
  const isGK=state.pos==='GK';
  const stats=isGK?[['出场',s.apps],['首发',s.starts],['零封',s.cleanSheets],['场均评分',s.rating||'—']]:[['出场',s.apps],['进球',s.goals],['助攻',s.assists],['场均评分',s.rating||'—']];
  $('#stat-grid').innerHTML=stats.map(x=>`<div class="stat"><span>${x[0]}</span><b>${x[1]}</b></div>`).join('');
  setMeter('fitness',state.fitness);setMeter('morale',state.morale);setMeter('trust',state.trust);
  const squadRole=state.injured>0?`${state.injuryDetail?.name||'伤病'} · ${state.injured} 月`:state.age<16?'青训球员':state.trust>=75?'核心球员':state.trust>=55?'轮换球员':'替补球员';
  $('#role-badge').textContent=squadRole;
  $('#contract-status').textContent=state.age<16?'青训合同':'职业合同';
  $('#contract-club').textContent=state.club;$('#contract-league').textContent=league?.name||'地区青训联赛';
  $('#wage').textContent=state.wage?weeklySalaryText(state.wage):'青训津贴';$('#value').textContent=money(state.value);$('#contract-end').textContent=state.contractEnd;
  if($('#contract-role'))$('#contract-role').textContent=squadRole;if($('#contract-bonus'))$('#contract-bonus').textContent=salaryAmount(s.bonusEarnings||0);
  $('#profile-route').textContent=`${state.profile?.playStyle||'全能型'} · ${state.profile?.personality||'自律'} · ${state.profile?.development||'技术'}路线 · ${state.profile?.agentStyle||'稳健'}经纪`;
  $('#profile-goal').textContent=`目标：${state.profile?.careerGoal||'成为世界最佳'}`;
  renderTransferRequestControl();
  $('#advance-btn').disabled=state.retired;
  renderContractTerms();renderAttributes();renderInjuryStatus();renderSeasonObjective();renderShortChallenge();renderDomesticCup();renderAwardShowcase();renderSeasonSummary();renderFeed();renderMatchReports();renderEurope();renderNational();renderSelectionInsights();renderCareer();renderAwards();renderMobileSnapshot();updateAdvanceUI();save();
}
function renderMobileSnapshot(){
  const s=seasonStats(),isGK=state.pos==='GK',output=isGK?`${s.cleanSheets} 零封`:`${s.goals} 球 · ${s.assists} 助`;
  const status=state.retired?'生涯已结束':state.injured>0?`${state.injuryDetail?.name||'伤病'} · 还需 ${state.injured} 月`:`${state.club} · ${MONTHS[state.month]}`;
  $('#mobile-status-text').textContent=status;
  $('#mobile-form').textContent=state.injured>0?'伤停':state.flags.frozenOut?'被降低顺位':state.flags.transferRequested?'申请转会中':state.fitness>=78?'状态出色':state.fitness>=55?'状态正常':'需要恢复';
  const restartButton=$('#mobile-restart-btn'),advanceButton=$('#mobile-advance-btn'),spanPicker=$('.mobile-span-picker');
  restartButton.hidden=!state.retired;
  advanceButton.hidden=state.retired;
  spanPicker.hidden=state.retired;
  $('#mobile-snapshot').innerHTML=[
    ['出场',s.apps],
    [isGK?'赛季表现':'进球 / 助攻',output],
    ['能力 / 体能',`${state.overall} / ${state.fitness}`]
  ].map(([label,value])=>`<div><span>${label}</span><b>${value}</b></div>`).join('');
  const terms=ensureContractTerms();$('#mobile-contract-summary').textContent=state.age<16?`${state.club} · 青训合同`: `${state.club} · ${terms.rolePromise}承诺 · ${weeklySalaryText(state.wage||0)}`;
  const challenge=shortChallengeProgress(),selection=projectedClubSelection(),decisionSummary=$('#mobile-decision-summary');
  if(decisionSummary)decisionSummary.textContent=challenge?`${challenge.challenge.title} ${challenge.played}/5 · ${state.pos} 第 ${selection.playerRank} 顺位`:`${state.pos} 第 ${selection.playerRank} 顺位 · 下一挑战准备中`;
}
function openContractManager(){
  const league=leagueForClub(state.club),role=state.injured>0?'伤停名单':state.trust>=75?'核心球员':state.trust>=55?'轮换球员':'替补球员',terms=ensureContractTerms(),body=state.age<16?`你目前效力 ${state.club} 青训学院。16 岁签署职业合同后，才可正式提交职业转会申请。`:`效力俱乐部：${state.club}\n所属联赛：${league?.short||'地区联赛'}\n合同期限：至 ${state.contractEnd}\n固定周薪：${weeklySalaryText(state.wage||0)}\n当前竞技角色：${role}\n合同承诺角色：${terms.rolePromise}`;
  const extra=state.age<16?'':`<div class="contract-offer-grid"><span>出场奖金<b>${salaryAmount(terms.appearanceBonus)}</b></span><span>${state.pos==='GK'?'零封':'进球'}奖金<b>${salaryAmount(state.pos==='GK'?terms.cleanSheetBonus:terms.goalBonus)}</b></span><span>洲际资格奖金<b>${salaryAmount(terms.continentalBonus)}</b></span><span>解约金<b>${terms.releaseClause?money(terms.releaseClause):'未设置'}</b></span><span>主力承诺<b>${terms.rolePromise}</b></span><span>自动续约<b>${terms.autoExtensionApps} 场触发</b></span></div>`;
  const actions=state.age>=16&&!state.retired?[[`与经纪人谈判合同`,()=>{closeModal();openContractNegotiation()},true,'比较固定周薪、奖金、角色承诺和解约条款'],[state.flags.transferRequested?'查看转会申请进度':'提交转会申请',()=>{closeModal();openTransferRequest()},false,'转会申请可能影响教练关系与比赛顺位'],['暂不处理',closeModal,false]]:[];
  showModal({icon:'§',kicker:'CONTRACT · 球员合同',title:state.age<16?'青训合同':'职业合同与条款',body,extra,actions});
}
function renderContractTerms(){
  const el=$('#contract-terms'),button=$('#contract-negotiate-btn');if(!el||!state)return;const terms=ensureContractTerms();
  if(state.age<16){el.innerHTML='<span>16 岁签署职业合同后解锁奖金、角色承诺与解约条款</span>';if(button)button.disabled=true;return}
  el.innerHTML=[`${terms.rolePromise}承诺`,`出场奖 ${salaryAmount(terms.appearanceBonus)}`,`${state.pos==='GK'?'零封':'进球'}奖 ${salaryAmount(state.pos==='GK'?terms.cleanSheetBonus:terms.goalBonus)}`,terms.releaseClause?`解约金 ${money(terms.releaseClause)}`:'无解约金',terms.loanAllowed?'允许租借':'不接受租借',`降级周薪 ${Math.round(terms.relegationPayCut*100)}%`].map(text=>`<span>${text}</span>`).join('');
  if(button){button.disabled=state.retired||state.flags.lastNegotiationSeason===currentSeason();button.textContent=state.flags.lastNegotiationSeason===currentSeason()?'本赛季已完成合同谈判':'与经纪人商谈新合同'}
}
function contractNegotiationPackages(){
  const current=Math.max(600,state.wage||600),value=Math.max(1000,state.value||1000);
  return[
    {id:'role',name:'核心地位方案',years:3,wage:Math.round(current*1.08/100)*100,terms:{...defaultContractTerms(current*1.08,'核心'),rolePromise:'核心',appearanceBonus:Math.round(current*.15/100)*100,goalBonus:Math.round(current*.2/100)*100,cleanSheetBonus:Math.round(current*.2/100)*100,continentalBonus:Math.round(current*10/1000)*1000,releaseClause:Math.round(value*1.7/100)*100,loanAllowed:false,relegationPayCut:.82,autoExtensionApps:28},hint:'固定周薪涨幅较小 · 核心出场承诺 · 队内竞争压力最高'},
    {id:'bonus',name:'高奖金表现方案',years:3,wage:Math.round(current*1.14/100)*100,terms:{...defaultContractTerms(current*1.14,'主力'),rolePromise:'主力',appearanceBonus:Math.round(current*.11/100)*100,goalBonus:Math.round(current*.36/100)*100,cleanSheetBonus:Math.round(current*.32/100)*100,continentalBonus:Math.round(current*15/1000)*1000,releaseClause:Math.round(value*1.5/100)*100,loanAllowed:true,relegationPayCut:.78,autoExtensionApps:24},hint:'固定周薪和表现奖金较高 · 主力承诺 · 降级保护较弱'},
    {id:'stability',name:'长期稳定方案',years:5,wage:Math.round(current*1.04/100)*100,terms:{...defaultContractTerms(current*1.04,'轮换'),rolePromise:'轮换',appearanceBonus:Math.round(current*.18/100)*100,goalBonus:Math.round(current*.18/100)*100,cleanSheetBonus:Math.round(current*.2/100)*100,continentalBonus:Math.round(current*8/1000)*1000,releaseClause:Math.round(value*1.22/100)*100,loanAllowed:true,relegationPayCut:.9,autoExtensionApps:18},hint:'长期合同 · 较低解约金 · 允许租借 · 降级后保留更多周薪'}
  ];
}
function acceptContractPackage(pack){
  const stats=seasonStats().stats.total;state.wage=pack.wage;state.contract={...pack.terms,signedSeason:currentSeason(),signedMonth:state.month,appsBaseline:Number(stats.apps)||0,startsBaseline:Number(stats.starts)||0};state.contractEnd=state.year+pack.years;state.flags.lastNegotiationSeason=currentSeason();delete state.flags.promiseBroken;state.relationships.agent=clamp((state.relationships.agent||50)+4,0,100);addEvent('签署新合同',`${state.name} 与 ${state.club} 签下 ${pack.years} 年的“${pack.name}”，周薪 ${weeklySalaryText(pack.wage)}，角色承诺为${pack.terms.rolePromise}。`,'§');addFeed('合同谈判完成',`${pack.name} 生效：奖金、解约金、角色承诺和续约条件已经写入合同。`,'§');closeModal();renderAll();showInfo('新合同正式生效',`${pack.hint}。本赛季比赛会立即按照新角色承诺和奖金条款执行。`,'§');
}
function openContractNegotiation(){
  if(state.age<16||state.retired)return;if(state.flags.lastNegotiationSeason===currentSeason()){showInfo('本赛季已经完成谈判','俱乐部不会在同一赛季重复改写整份合同。你可以在下赛季继续谈判。','§');return}
  const packages=contractNegotiationPackages(),extra=`<div class="contract-offer-grid"><span>当前固定周薪<b>${weeklySalaryText(state.wage||0)}</b></span><span>当前角色承诺<b>${ensureContractTerms().rolePromise}</b></span><span>当前合约期限<b>至 ${state.contractEnd}</b></span><span>本季已获奖金<b>${salaryAmount(seasonStats().bonusEarnings||0)}</b></span></div>`;
  showModal({icon:'§',kicker:'AGENT MEETING · 合同谈判',title:'三份合同方案，各有不同价值',body:'固定周薪不是唯一判断标准。角色承诺会影响出场顺位，奖金随真实比赛结算，解约金、租借许可、降级条款和自动续约也会改变未来选择。',extra,actions:[...packages.map((pack,index)=>[pack.name,()=>acceptContractPackage(pack),index===0,`${weeklySalaryText(pack.wage)} · ${pack.years} 年 · ${pack.hint}`]),['暂不续约',closeModal,false,'保留当前合同与本赛季谈判机会']]});
}
function logoUrl(name){return TEAM_LOGOS[name]?`https://media.api-sports.io/football/teams/${TEAM_LOGOS[name]}.png`:''}
function crestContent(c){const url=logoUrl(c[0]);return url?`<span>${c[1]}</span><img src="${url}" alt="${c[0]}徽标" onerror="this.remove()">`:`<span>${c[1]}</span>`}
function setCrest(el,c){el.innerHTML=crestContent(c);el.style.setProperty('--club',c[2])}
function setMeter(id,v){$(`#${id}-bar`).style.width=`${v}%`;$(`#${id}-value`).textContent=v}
function legacyV1_renderFeed(){
  $('#feed').innerHTML=state.feed.slice(0,5).map(f=>`<div class="feed-item"><div class="feed-icon">${f.icon}</div><div><strong>${f.title}</strong><p>${f.text}</p><time>${f.date}</time></div></div>`).join('')||'<div class="empty-state">故事还没有开始</div>';
}
function legacyV1_renderMatchReports(){
  const reports=(state.matchReports||[]).slice(0,5);$('#report-count').textContent=`近 ${reports.length} 场`;
  $('#match-reports').innerHTML=reports.length?reports.map(r=>{const club=r.club||state.club,isGK=(r.position||state.pos)==='GK';return `<div class="match-report ${r.highlight?'highlight':''}"><div class="match-score">${r.teamGoals}–${r.oppGoals}<small>${r.result} · ${r.competition}</small></div><div class="match-detail"><strong>${r.home?`${club} vs ${r.opponent}`:`${r.opponent} vs ${club}`}</strong><p>${r.appeared?`${r.start?'首发':'替补'} · ${r.minutes} 分钟 · ${isGK?(r.cleanSheet?'零封':'门将出场'):`${r.goals} 球 ${r.assists} 助攻`}`:'进入名单 · 未获出场'}</p></div><div class="match-rating">${r.rating?`<b>${r.rating.toFixed(1)}</b><small>${r.highlight?'单场高光':'赛后评分'}</small>`:'<b>—</b><small>未出场</small>'}</div></div>`}).join(''):'<div class="empty-state">推进时间后，这里会记录你的单场表现。</div>';
}
function renderEurope(){
  const c=state.continentalCurrent;if(!c){const league=leagueForClub(state.club),name=league?.tier===2?'二级联赛球队不能取得洲际赛事资格。':regionForLeague(league)==='AFC'?'洲际资格按上赛季联赛排名、国内杯赛冠军和 AFC 协会席位结算。':'洲际资格按上赛季联赛排名、国内杯赛冠军及赛事卫冕席位结算，不再按俱乐部实力直接发放。';$('#europe-status').textContent='未获资格';$('#europe-content').innerHTML=`<div class="empty-state">${name}</div>`;return}
  $('#europe-status').textContent=c.eliminated?'已出局':c.wonTitle?'冠军':'进行中';const avg=c.ratingCount?(c.ratingSum/c.ratingCount).toFixed(2):'—';
  $('#europe-content').innerHTML=`<div class="europe-identity"><div class="europe-mark" style="border-color:${c.accent};color:${c.accent}">${c.code}</div><div><strong>${c.competition}</strong><small>${c.club||state.club} · ${c.season} · ${c.stage}</small><small>${c.qualificationRoute||'洲际赛事资格'}</small></div></div><div class="europe-stats"><div><span>出场</span><b>${c.played}</b></div><div><span>${c.format==='knockout'?'胜场':'积分'}</span><b>${c.format==='knockout'?c.won:c.points}</b></div><div><span>${state.pos==='GK'?'零封':'进球/助攻'}</span><b>${state.pos==='GK'?c.cleanSheets:`${c.goals}/${c.assists}`}</b></div><div><span>评分</span><b>${avg}</b></div></div>`;
}
function addFeed(title,text,icon='•'){state.feed.unshift({title,text,icon,date:`${currentSeason()} · ${MONTHS[state.month%12]}`});state.feed=state.feed.slice(0,30)}
function addEvent(title,text,icon='•'){state.events.unshift({title,text,icon,date:`${state.year}年 · ${state.age}岁`})}

function legacyV1_advanceTwoMonths(){
  if(state.retired)return;
  let finishedSeason=null;
  for(let step=0;step<2&&!state.retired;step++){
    if(state.injured>0){
      state.injured--;state.fitness=clamp(state.fitness+rand(14,24),0,100);state.morale=clamp(state.morale+rand(-3,4),0,100);
      if(!state.injured&&state.flags.rushedReturn){state.flags.rushedReturnMonths=3;delete state.flags.rushedReturn}
      addFeed('康复训练',state.injured?`恢复进展顺利，预计还需 ${state.injured} 个月。`:'医疗组确认你已经恢复完整合练。','+');
    }else simulateMonth();
    simulateContinentalMonth();
    state.month++;
    if(state.month>=12){finishedSeason={...seasonStats()};endSeason(true)}
  }
  if(state.retired)return;
  renderAll();
  if(finishedSeason){showInfo('两个月与赛季总结',`${finishedSeason.season} 赛季结束：${finishedSeason.apps} 次出场，${state.pos==='GK'?`${finishedSeason.cleanSheets} 场零封`:`${finishedSeason.goals} 球 ${finishedSeason.assists} 助攻`}。新赛季已经开始。`,'✓')}
  else maybeRandomEvent();
}

function legacyV1_simulateMonth(){
  const youth=state.age<16,league=leagueForClub(state.club),targetMatches=league?.short==='美职联'?34:league?.short==='苏超'?38:Math.max(1,((league?.clubs.length||20)-1)*2),record=currentTeamLeagueRecord(),remaining=Math.max(0,targetMatches-record.played),scheduledByMonth=state.month>=10?targetMatches:Math.round(targetMatches*(state.month+1)/10),fixtures=youth?rand(2,4):Math.min(remaining,Math.max(0,scheduledByMonth-record.played));let apps=0,goals=0,assists=0,clean=0;const monthReports=[];
  for(let i=0;i<fixtures;i++){
    const report=simulateFixture(youth?'青年联赛':leagueForClub(state.club)?.short||'国内联赛',pickDomesticOpponent(),false);
    monthReports.push(report);if(report.appeared){apps++;goals+=report.goals;assists+=report.assists;clean+=report.cleanSheet?1:0}
  }
  const perf=goals*4+assists*3+clean*2+apps;state.trust=clamp(state.trust+rand(-2,3)+Math.floor(perf/5),10,100);state.fitness=clamp(state.fitness-rand(6,14)+rand(2,7),20,100);state.morale=clamp(state.morale+rand(-4,5)+(goals+assists+clean>1?3:0),10,100);
  const profile=state.profile||{},growthBoost=(profile.personality==='自律'?.08:0)+(profile.development==='战术'?.035:0)+(profile.background==='足球世家'?.02:0);const growth=Math.random()<clamp((state.potential-state.overall)/80+growthBoost,.12,.68)?1:0;if(growth){state.overall++;addFeed('能力提升',`${profile.development||'日常'}训练得到回报，综合能力提升至 ${state.overall}。`,'↑')}
  const summary=state.pos==='GK'?`${apps} 次出场，完成 ${clean} 场零封。`:`${apps} 次出场，贡献 ${goals} 球 ${assists} 助攻。`;addFeed(`${MONTHS[state.month]}战报`,summary,goals+assists+clean?'★':'›');
  const standout=monthReports.filter(r=>r.appeared).sort((a,b)=>(b.rating||0)-(a.rating||0))[0];if(standout&&standout.rating>=8)addFeed('单场高光',`${standout.competition}对阵 ${standout.opponent}，你在 ${standout.minutes} 分钟内${state.pos==='GK'?`完成零封，获评 ${standout.rating}`:`贡献 ${standout.goals} 球 ${standout.assists} 助攻，获评 ${standout.rating}`}。`,'★');
  updateValue();
}

function pickDomesticOpponent(){
  const league=leagueForClub(state.club),pool=(league?.clubs||[]).filter(c=>c[0]!==state.club);return pool.length?pick(pool):['地区青年队','YTH','#63766a',state.clubStrength-3];
}

function legacyV1_simulateFixture(competition,opponent,isContinental){
  const s=seasonStats(),youth=state.age<16,chance=clamp((state.trust+state.overall-state.clubStrength*.45)/100+(youth?.32:.2)-(isContinental?.06:0),.16,.94);
  const appeared=state.injured<=0&&Math.random()<chance,start=appeared&&Math.random()<(state.trust/110+.18),minutes=appeared?(start?rand(68,95):rand(8,35)):0;
  const teamEdge=(state.clubStrength-opponent[3])/18,home=Math.random()<.5;let teamGoals=rand(0,2)+(Math.random()<clamp(.36+teamEdge*.12,.1,.72)?1:0),oppGoals=rand(0,2)+(Math.random()<clamp(.35-teamEdge*.12,.1,.7)?1:0);
  let goals=0,assists=0,cleanSheet=false,rating=null;
  if(appeared){
    if(state.pos==='GK'){
      cleanSheet=oppGoals===0;rating=clamp(5.8+Math.random()*1.45+(cleanSheet?.65:0)+(teamGoals>oppGoals?.2:0)-(oppGoals>=3?.45:0),4.5,9.5);
    }else{
      const attack=['ST','LW','RW','CAM'].includes(state.pos),mid=['CM','CDM'].includes(state.pos),gRate=(attack?.18:mid?.065:.025)+(state.overall-45)/360,aRate=(attack?.14:mid?.12:.055)+(state.overall-45)/440;
      if(Math.random()<gRate)goals++;if(goals&&Math.random()<.1)goals++;if(Math.random()<aRate)assists++;teamGoals=Math.max(teamGoals,goals,assists);
      rating=clamp(5.65+Math.random()*1.35+goals*.8+assists*.55+(teamGoals>oppGoals?.2:teamGoals<oppGoals?-.18:0),4.5,10);
    }
    const oldApps=s.apps,oldRating=+s.rating||0;s.apps++;if(start)s.starts++;s.minutes+=minutes;s.goals+=goals;s.assists+=assists;if(cleanSheet)s.cleanSheets++;s.rating=((oldRating*oldApps+rating)/(oldApps+1)).toFixed(2);
  }
  rating=rating?+rating.toFixed(1):null;const result=teamGoals>oppGoals?'胜':teamGoals<oppGoals?'负':'平';const report={season:currentSeason(),date:MONTHS[state.month],competition,club:state.club,position:state.pos,opponent:opponent[0],home,teamGoals,oppGoals,result,appeared,start,minutes,goals,assists,cleanSheet,rating,highlight:appeared&&(rating>=8||goals+assists>=2||cleanSheet&&rating>=7.5)};
  state.matchReports.unshift(report);state.matchReports=state.matchReports.slice(0,80);return report;
}

function legacyV1_createContinentalCampaign(){
  if(state.age<16||state.clubStrength<76)return null;let competition,code,accent,target;
  if(state.clubStrength>=88){competition='UEFA Champions League';code='UCL';accent='#75a9ff';target=8}
  else if(state.clubStrength>=82){competition='UEFA Europa League';code='UEL';accent='#f19a39';target=8}
  else{competition='UEFA Conference League';code='UECL';accent='#64d7a3';target=6}
  return {season:currentSeason(),competition,code,accent,target,stage:'联赛阶段',played:0,won:0,drawn:0,lost:0,points:0,goals:0,assists:0,cleanSheets:0,ratingSum:0,ratingCount:0,leagueMatches:0,eliminated:false,wonTitle:false};
}

function legacyV1_pickEuropeanOpponent(campaign){
  const min=campaign.code==='UCL'?81:campaign.code==='UEL'?74:68,ownCountry=leagueForClub(state.club)?.country;
  let pool=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c,country:l.country}))).filter(x=>x.club[0]!==state.club&&x.club[3]>=min&&x.country!==ownCountry);if(!pool.length)pool=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c}))).filter(x=>x.club[0]!==state.club);return pick(pool).club;
}

function legacyV1_simulateContinentalMonth(){
  const c=state.continentalCurrent;if(!c||c.eliminated||c.wonTitle||state.age<16)return;
  const schedule=c.target===8?{1:2,2:2,3:1,4:1,5:2}:{1:1,2:1,3:1,4:1,5:2};
  if(c.stage==='联赛阶段'&&schedule[state.month]){
    for(let i=0;i<schedule[state.month];i++)recordContinentalReport(c,simulateFixture(c.code,pickEuropeanOpponent(c),true));
    if(c.leagueMatches>=c.target){const direct=c.points>=(c.code==='UECL'?13:16),alive=c.points>=(c.code==='UECL'?8:10);if(direct)c.stage='16强';else if(alive)c.stage='淘汰赛附加赛';else eliminateFromEurope(c,'联赛阶段')}
    return;
  }
  if(c.stage==='淘汰赛附加赛'&&state.month===6){playEuropeanRound(c,'淘汰赛附加赛','16强',2);return}
  if(c.stage==='16强'&&state.month===7){playEuropeanRound(c,'16强','四分之一决赛',2);return}
  if(c.stage==='四分之一决赛'&&state.month===8){playEuropeanRound(c,'四分之一决赛','半决赛',2);return}
  if(c.stage==='半决赛'&&state.month===9){playEuropeanRound(c,'半决赛','决赛',2);return}
  if(c.stage==='决赛'&&state.month===10){playEuropeanRound(c,'决赛','冠军',1)}
}

function recordContinentalReport(c,r){
  r.continentalLeagueStage=true;c.played++;c.leagueMatches++;if(r.result==='胜'){c.won++;c.points+=3}else if(r.result==='平'){c.drawn++;c.points++}else c.lost++;if(r.appeared){c.goals+=r.goals;c.assists+=r.assists;if(r.cleanSheet)c.cleanSheets++;c.ratingSum+=r.rating;c.ratingCount++}state.fitness=clamp(state.fitness-rand(1,4),15,100);
}

function legacyV1_playEuropeanRound(c,stage,nextStage,legs){
  const opponent=pickEuropeanOpponent(c);let aggregateFor=0,aggregateAgainst=0;for(let i=0;i<legs;i++){const r=simulateFixture(`${c.code} · ${stage}`,opponent,true);c.played++;if(r.result==='胜')c.won++;else if(r.result==='平')c.drawn++;else c.lost++;aggregateFor+=r.teamGoals;aggregateAgainst+=r.oppGoals;if(r.appeared){c.goals+=r.goals;c.assists+=r.assists;if(r.cleanSheet)c.cleanSheets++;c.ratingSum+=r.rating;c.ratingCount++}}
  const won=aggregateFor>aggregateAgainst||(aggregateFor===aggregateAgainst&&Math.random()<clamp(.5+(state.clubStrength-opponent[3])*.018,.25,.75));
  if(!won){eliminateFromEurope(c,stage);return}
  if(nextStage==='冠军'){c.stage='冠军';c.wonTitle=true;const trophy=`${c.competition} 冠军`;state.trophies.unshift({name:trophy,season:currentSeason()});addFeed('加冕欧洲冠军',`${state.club} 在决赛中击败 ${opponent[0]}，捧起 ${c.competition} 奖杯。`,'♜');addEvent('赢得洲际冠军',`${currentSeason()} 赛季随 ${state.club} 赢得 ${c.competition}。`,'♜')}
  else{c.stage=nextStage;addFeed('欧战晋级',`${state.club} 淘汰 ${opponent[0]}，晋级${nextStage}。`,'◆')}
}

function eliminateFromEurope(c,stage){c.eliminated=true;c.stage=`止步${stage}`;addFeed('洲际征程结束',`${c.club||state.club} 的 ${c.competition} 征程止步${stage}。`,'×')}
const CAREER_EVENT_DECK=[
  {id:'school_balance',category:'youth',title:'期末考试撞上客场比赛',icon:'▤',maxAge:15,once:true,body:'学校的期末考试与青训队的重要客场比赛安排在同一天。俱乐部允许你请假，但家人希望你不要放弃学业。',choices:[
    {label:'先参加考试',outcome:'你完成考试后才赶往球队。长期规划更加稳健，但错过比赛让队内顺位略有下降。',effects:{trust:-4,morale:7,fitness:5,potential:1,flag:'balancedEducation'}},
    {label:'随队参加比赛',outcome:'你错过考试并在比赛中全力以赴。短期竞争力提高，但学业与家庭压力随之而来。',effects:{trust:9,morale:4,fitness:-10,potential:-1,flag:'footballFirst'}}]},
  {id:'growth_spurt',category:'health',title:'青春期快速生长',icon:'↟',minAge:13,maxAge:16,once:true,body:'队医发现你在半年内明显长高。力量和协调性暂时失衡，这是青少年球员常见的生长阶段。',choices:[
    {label:'接受个性化减负',outcome:'你减少比赛负荷，长期身体上限提高，但短期失去部分竞争位置。',effects:{fitness:18,potential:2,trust:-6,morale:-2,flag:'growthManaged'}},
    {label:'维持完整赛程',outcome:'你坚持竞争位置，赢得教练与球迷关注，但疲劳和未来伤病风险增加。',effects:{trust:10,fitness:-18,morale:8,valuePct:1.05,flag:'growthRisk'}}]},
  {id:'academy_review',category:'coach',title:'青训年度评估',icon:'◎',maxAge:15,cooldown:30,maxRepeat:2,body:'青训主管认为你的天赋足够，但无球跑动和训练专注度仍有提升空间。他要求你提交下一阶段计划。',choices:[
    {label:'补强战术理解',outcome:'你开始复盘比赛录像，教练注意到你的跑位更加成熟。',effects:{trust:8,overall:1,fitness:-3}},
    {label:'专攻个人技术',outcome:'你的持球亮点更多了，但教练仍希望你更好地融入整体。',effects:{potential:1,morale:5,trust:1}}]},
  {id:'release_warning',category:'coach',title:'青训名额缩减',icon:'!',minAge:14,maxAge:15,once:true,condition:s=>s.trust<62,body:'俱乐部准备缩减下一年龄段的注册人数。教练坦言，你目前处在续留名单的边缘。接下来几个月将决定未来。',choices:[
    {label:'制定严格加练计划',outcome:'你用更自律的训练回应压力，最终争取到继续留队的机会。',effects:{trust:12,fitness:-14,morale:-2,flag:'survivedAcademyCut'}},
    {label:'主动联系其他学院',outcome:'你为自己准备后路，压力下降，但当前教练对你的专注度有所怀疑。',effects:{morale:8,trust:-6,valuePct:1.08,flag:'academyOptions'}}]},
  {id:'agent_first',category:'agent',title:'第一位经纪人找上门',icon:'✎',minAge:14,maxAge:17,once:true,body:'一位持证经纪人通过家人联系你，愿意免费代理到首份职业合同签署。他承诺带来试训机会，但要求独家合作。',choices:[
    {label:'签署独家代理',outcome:'经纪团队带来市场曝光与谈判资源，但你让出了一部分生涯决定权。',effects:{valuePct:1.15,morale:4,trust:-3,relation:{agent:15},flag:'hasAgent'}},
    {label:'暂由家人处理',outcome:'你保留主动权并获得俱乐部信任，但市场资源和转会渠道更有限。',effects:{trust:8,morale:5,valuePct:.95,potential:1,relation:{agent:-5},flag:'familyRepresentation'}}]},
  {id:'first_team_mentor',category:'team',title:'老将愿意指导你',icon:'◆',minAge:16,once:true,body:'一位经验丰富的一线队球员主动提出，每周与你进行一次录像复盘，并提醒你职业更衣室里的规则。',choices:[
    {label:'虚心接受指导',outcome:'你更快适应一线队并赢得认可，但个人风格需要服从既有体系。',effects:{overall:1,trust:7,morale:-3,relation:{teammates:12},flag:'seniorMentor'}},
    {label:'坚持自己的方式',outcome:'你承担短期信任代价，换取更高的个人成长上限与明确风格。',effects:{potential:2,morale:8,trust:-6,relation:{teammates:-3},flag:'independentPath'}}]},
  {id:'position_conversion',category:'coach',title:'教练提出位置改造',icon:'↔',minAge:15,once:true,condition:s=>s.pos!=='GK',body:s=>`教练认为你的特点也适合其他位置，建议从 ${s.pos} 开始进行多位置训练。这可能增加出场机会，也会暂时影响熟练度。`,choices:[
    {label:'接受位置改造',outcome:'你接受建议，成为战术体系里的多面手。',effects:{trust:10,overall:-1,flag:'versatile'},custom:s=>{const map={ST:'RW',LW:'CAM',RW:'CAM',CAM:'CM',CM:'CDM',CDM:'CB',LB:'CB',RB:'CB',CB:'CDM'};s.pos=map[s.pos]||s.pos}},
    {label:'坚持原有位置',outcome:'你清晰表达了自己的规划，位置稳定，但竞争压力不会减少。',effects:{morale:5,trust:-3,flag:'positionSpecialist'}}]},
  {id:'bench_competition',category:'team',title:'同位置新援加盟',icon:'⇅',minAge:16,cooldown:42,maxRepeat:2,body:'俱乐部签下了一名与你位置相同的球员。媒体认为你们将直接竞争首发位置，更衣室里也开始出现比较。',choices:[
    {label:'主动欢迎并共同训练',outcome:'良性竞争提升了训练质量，新队友也愿意与你分享经验。',effects:{overall:1,trust:4,relation:{teammates:8}}},
    {label:'把竞争留在球场',outcome:'你的专注度更高，但两人的关系保持冷淡。',effects:{trust:6,morale:-3,fitness:-7,relation:{teammates:-4}}}]},
  {id:'manager_change',category:'coach',title:'俱乐部宣布换帅',icon:'⌁',minAge:16,cooldown:60,maxRepeat:2,body:'球队连续战绩不佳后解雇主教练。新任教练偏好更高强度的压迫体系，所有人的队内顺位都将重新评估。',choices:[
    {label:'提前研究新体系',outcome:'你在首次训练中表现得准备充分，迅速进入新教练视野。',effects:{trust:9,fitness:-6,relation:{coach:8}}},
    {label:'按自己的节奏适应',outcome:'你避免过度反应，但新教练暂时把机会给了更熟悉体系的队友。',effects:{trust:-7,fitness:5,morale:-2}}]},
  {id:'contract_clause',category:'contract',title:'职业合同续约谈判',icon:'§',minAge:17,cooldown:48,maxRepeat:2,condition:s=>s.year+1>=s.contractEnd,body:'俱乐部提出一份长期续约合同。固定薪资不错，但经纪人建议加入合理的解约条款，保留未来选择。',choices:[
    {label:'接受长期保障',outcome:'你选择稳定的长期合同，俱乐部将你视作未来计划的重要部分。',effects:{wagePct:1.45,trust:8,morale:6,flag:'longTermDeal'},custom:s=>s.contractEnd=s.year+5},
    {label:'坚持加入解约条款',outcome:'合同年限较短，但未来转会谈判会更加主动。',effects:{wagePct:1.22,trust:-3,valuePct:1.12,flag:'releaseClause'},custom:s=>s.contractEnd=s.year+3}]},
  {id:'media_misquote',category:'media',title:'采访内容被断章取义',icon:'”',minAge:16,cooldown:36,maxRepeat:2,body:'赛后采访中，你关于“希望获得更多出场时间”的回答被剪成了质疑教练的标题，新闻迅速传播。',choices:[
    {label:'公开澄清并沟通',outcome:'误解得到控制，但持续回应媒体消耗了精力，也让事件继续占据头条。',effects:{trust:6,morale:-5,fitness:-3,relation:{fans:4,coach:7}}},
    {label:'保持沉默等待降温',outcome:'你保持专注并减少舆论消耗，但教练对真实想法仍有所保留。',effects:{trust:-5,morale:7,fitness:4,relation:{fans:2}}}]},
  {id:'social_abuse',category:'media',title:'社交媒体出现集中批评',icon:'@',minAge:16,cooldown:40,maxRepeat:2,condition:s=>s.morale<75,body:'连续几场表现平淡后，部分账号开始集中批评你。俱乐部心理团队建议限制社交媒体使用。',choices:[
    {label:'暂时退出社交媒体',outcome:'你把注意力重新放回训练和生活，精神状态逐渐恢复。',effects:{morale:12,trust:3,relation:{fans:-2}}},
    {label:'用表现回应质疑',outcome:'你增加训练强度，希望尽快在球场上作答。',effects:{trust:6,fitness:-13,morale:-2,flag:'proveCriticsWrong'}}]},
  {id:'fixture_congestion',category:'health',title:'三周七赛的密集赛程',icon:'≋',minAge:17,cooldown:24,maxRepeat:3,body:'国内联赛、杯赛和欧战挤在一起，医疗组警告多名球员已经进入疲劳区。教练询问你是否愿意轮休。',choices:[
    {label:'接受一场轮休',outcome:'身体指标回到安全区，但你会错过一次重要的表现机会。',effects:{fitness:20,trust:-2,morale:2}},
    {label:'请求继续首发',outcome:'你的竞争态度打动教练，但伤病风险与疲劳同时上升。',effects:{trust:8,fitness:-22,morale:3,flag:'overloaded'}}]},
  {id:'nutrition',category:'health',title:'体测数据出现异常',icon:'+',minAge:16,cooldown:44,maxRepeat:2,body:'季度体测显示你的恢复速度下降。营养师认为饮食结构和睡眠时间需要调整，并给出一套严格方案。',choices:[
    {label:'严格执行营养计划',outcome:'几个星期后，身体恢复和比赛专注度都明显改善。',effects:{fitness:18,overall:1,morale:-2}},
    {label:'只做适度调整',outcome:'生活更轻松，但体能改善有限。',effects:{fitness:7,morale:5}}]},
  {id:'doping_control',category:'professional',title:'赛后反兴奋剂抽检',icon:'◌',minAge:16,cooldown:60,maxRepeat:2,body:'赛后你被随机选中接受反兴奋剂检查。队医提醒，你最近使用的感冒药需要主动申报治疗用途。',choices:[
    {label:'立即提交完整用药记录',outcome:'检查顺利完成。俱乐部肯定了你的职业规范意识。',effects:{trust:5,relation:{coach:4},flag:'cleanDopingRecord'}},
    {label:'交由俱乐部统一处理',outcome:'最终没有问题，但补充文件让你经历了几天不必要的焦虑。',effects:{morale:-5,trust:1}}]},
  {id:'sponsor_offer',category:'commercial',title:'球鞋品牌发来个人合约',icon:'◇',minAge:17,once:true,condition:s=>s.overall>=68,body:'一家球鞋品牌希望与你签署三年合作。报价可观，但合同要求频繁参与拍摄和商业活动。',choices:[
    {label:'签下品牌合约',outcome:'你的公众影响力和商业收入快速上升，休息时间则变得更少。',effects:{valuePct:1.18,morale:5,fitness:-8,relation:{fans:8},flag:'bootDeal'}},
    {label:'暂缓商业合作',outcome:'你把精力留给比赛，教练组很认可这种优先顺序。',effects:{trust:7,morale:1,flag:'footballOverBrand'}}]},
  {id:'charity_request',category:'community',title:'俱乐部邀请你参加公益活动',icon:'♡',minAge:16,cooldown:48,maxRepeat:2,body:'俱乐部基金会邀请你探访当地儿童医院。活动安排在唯一的休息日下午，不属于强制行程。',choices:[
    {label:'参加探访活动',outcome:'孩子们的热情让你重新感受到足球的意义，社区也开始记住你。',effects:{morale:10,fitness:-3,relation:{fans:12,teammates:3}}},
    {label:'保留恢复时间',outcome:'你完成了充分休息，但错过了一次与当地社区建立联系的机会。',effects:{fitness:12,relation:{fans:-3}}}]},
  {id:'international_call',category:'national',title:'国家队青年梯队征召',icon:'⚑',maxAge:22,once:true,condition:s=>s.overall>=62,body:s=>`${s.country}青年国家队发来正式征召。集训与俱乐部的关键备战周重合，俱乐部无权阻止，但希望你谨慎评估负荷。`,choices:[
    {label:'接受国家队征召',outcome:'你第一次穿上国家队训练服，获得宝贵的国际比赛经验。',effects:{overall:1,morale:12,fitness:-14,relation:{fans:8},flag:'youthInternational'}},
    {label:'因身体状态婉拒',outcome:'你留在俱乐部完成恢复，教练认可你的坦诚，但内心难免遗憾。',effects:{fitness:18,trust:5,morale:-6}}]},
  {id:'language_adaptation',category:'transfer',title:'新环境中的语言障碍',icon:'A',minAge:16,once:false,cooldown:60,maxRepeat:2,condition:s=>s.flags.needsAdaptation,body:'转会后，战术会议和更衣室玩笑都让你感到吃力。俱乐部愿意安排密集语言课程，但会占用部分私人时间。',choices:[
    {label:'参加密集语言课程',outcome:'几个月后，你能更准确地理解战术，也更快融入更衣室。',effects:{trust:7,morale:4,relation:{teammates:12},clearFlag:'needsAdaptation'}},
    {label:'依靠队友和翻译',outcome:'日常沟通勉强维持，但你在场上的信息交换仍受到影响。',effects:{trust:-5,morale:-3,relation:{teammates:2}}}]},
  {id:'transfer_leak',category:'agent',title:'转会谈判意外泄露',icon:'↗',minAge:17,cooldown:48,maxRepeat:2,condition:s=>s.profile.agentStyle==='进取'||s.flags.releaseClause,body:'媒体准确报道了经纪人与另一家俱乐部的接触。当前俱乐部要求你说明立场，球迷也在等待回应。',choices:[
    {label:'公开承诺专注当前球队',outcome:'你暂时平息风波，教练继续信任你，但经纪人认为你削弱了谈判筹码。',effects:{trust:9,relation:{fans:8,agent:-6}}},
    {label:'表示未来保持开放',outcome:'潜在买家更有兴趣，当前球队和部分球迷则感到不满。',effects:{valuePct:1.12,trust:-9,relation:{fans:-10,agent:8},flag:'openToTransfer'}}]},
  {id:'penalty_duty',category:'match',title:'关键点球主罚权',icon:'●',minAge:17,once:true,condition:s=>s.pos!=='GK'&&s.trust>=65,body:'球队原本的第一点球手被换下，比赛最后时刻获得点球。队长把球交给你，也有人主动示意愿意主罚。',choices:[
    {label:'接过足球主罚',outcome:'你顶住压力将球罚进。这一刻显著提升了你在队内的地位。',effects:{trust:10,morale:12,relation:{fans:10},flag:'scoredPressurePenalty'}},
    {label:'交给更有经验的队友',outcome:'球队最终得分，队友认可你的团队考虑，但媒体质疑你缺少领袖气质。',effects:{trust:2,morale:-2,relation:{teammates:6,fans:-4}}}]},
  {id:'goalkeeper_error',category:'match',title:'门将失误后的舆论压力',icon:'□',minAge:16,cooldown:32,maxRepeat:2,condition:s=>s.pos==='GK',body:'你在关键比赛中的出球失误直接造成失球。教练公开表示会保护你，但下一场是否首发仍未确定。',choices:[
    {label:'主动要求继续首发',outcome:'你希望尽快用比赛修复信心，教练认可这份勇气。',effects:{trust:6,morale:3,fitness:-5}},
    {label:'接受一场轮休调整',outcome:'门将教练帮你重新梳理技术动作，状态逐步稳定。',effects:{overall:1,morale:8,trust:-2}}]},
  {id:'captaincy',category:'team',title:'队长袖标的讨论',icon:'C',minAge:23,once:true,condition:s=>s.trust>=82&&s.relationships.teammates>=62,body:'现任队长即将离队，教练组把你列入继任候选。成为队长意味着更大影响力，也意味着承担媒体和更衣室责任。',choices:[
    {label:'主动承担队长责任',outcome:'你成为球队领袖，教练、队友和球迷对你的期待全面提高。',effects:{trust:8,morale:6,relation:{teammates:10,fans:10},flag:'captain'}},
    {label:'建议更资深队友担任',outcome:'你的坦诚获得尊重，可以继续专注个人表现。',effects:{trust:3,fitness:4,relation:{teammates:6}}}]},
  {id:'family_pressure',category:'personal',title:'家人希望你更换经纪团队',icon:'⌂',minAge:18,once:true,condition:s=>s.relationships.agent<65,body:'家人认为现有经纪团队更关注佣金和曝光，而不是你的出场时间。他们建议结束合作并重新评估职业规划。',choices:[
    {label:'听取家人建议换团队',outcome:'新团队重新以比赛时间为核心规划未来，短期商业资源有所下降。',effects:{trust:3,valuePct:.94,relation:{agent:15},flag:'changedAgency'}},
    {label:'继续信任当前经纪人',outcome:'合作关系保持稳定，但家庭内部仍存在担忧。',effects:{morale:-4,relation:{agent:8},flag:'keptAgency'}}]},
  {id:'data_training',category:'coach',title:'数据团队给出专项报告',icon:'▥',minAge:16,cooldown:36,maxRepeat:2,body:'俱乐部分析师发现，你在比赛最后十五分钟的决策质量明显下降，并提供了睡眠、跑动和触球位置的详细报告。',choices:[
    {label:'完全采纳训练建议',outcome:'你调整训练结构，比赛末段的稳定性明显改善。',effects:{overall:1,fitness:9,trust:5,transitionMonths:-1}},
    {label:'只参考比赛录像',outcome:'你更相信场上感觉，保持了原有节奏。',effects:{morale:4,trust:-2}}]},
  {id:'minor_illness',category:'health',title:'赛前出现流感症状',icon:'✚',minAge:13,cooldown:30,maxRepeat:2,body:'比赛前一天，你出现低烧和咽痛。队医确认不是严重疾病，但继续参赛可能延长恢复时间。',choices:[
    {label:'主动退出比赛名单',outcome:'你充分休息后很快恢复，医疗组认可你的透明沟通。',effects:{fitness:14,trust:1,morale:-2}},
    {label:'服用合规药物坚持参赛',outcome:'你完成比赛，但身体消耗远超平时。',effects:{trust:5,fitness:-18,morale:2}}]}
];

function legacyV1_maybeRandomEvent(){
  const profile=state.profile||{};const roll=Math.random();
  const injuryRisk=(profile.personality==='自律'?.045:.06)+(state.flags.overloaded?.03:0)+(state.flags.rushedReturnMonths?.055:0)+(state.fitness<45?.035:0)-(profile.development==='身体'?.012:0);
  if(state.flags.rushedReturnMonths){state.flags.rushedReturnMonths--;if(!state.flags.rushedReturnMonths)delete state.flags.rushedReturnMonths}
  if(roll<injuryRisk){state.flags.overloaded=false;delete state.flags.rushedReturnMonths;triggerInjury();return}
  const transferChance=profile.agentStyle==='进取'?.075:profile.agentStyle==='忠诚'?.025:.045;
  if(state.age>=16&&roll<injuryRisk+transferChance){transferOffer();return}
  if(roll<injuryRisk+transferChance+.58){triggerCareerEvent();}
}

function describeEffects(e={}){
  const out=[],delta=(label,value)=>{if(value)out.push(`${label}${value>0?'+':''}${value}`)};delta('教练信任',e.trust);delta('体能',e.fitness);delta('士气',e.morale);delta('当前能力',e.overall);delta('成长上限',e.potential);
  if(e.valuePct&&e.valuePct!==1)out.push(`身价${e.valuePct>1?'+':''}${Math.round((e.valuePct-1)*100)}%`);if(e.wagePct&&e.wagePct!==1)out.push(`薪资${e.wagePct>1?'+':''}${Math.round((e.wagePct-1)*100)}%`);
  const relNames={coach:'教练关系',teammates:'队友关系',fans:'球迷关系',agent:'经纪人关系'};if(e.relation)Object.entries(e.relation).forEach(([k,v])=>delta(relNames[k]||k,v));return out.join(' · ')||'影响长期路线与后续事件';
}

const RIVALRY_CODES=new Set([
  'ARS|TOT','LIV|MUN','MCI|MUN','BAR|RMA','ATM|RMA','BVB|FCB','INT|MIL','INT|JUV','OM|PSG','CEL|RAN',
  'BEN|SCP','AJA|FEY','FCP|SLB','HIL|NSS','GAM|URA','BEO|SHA','BJG|SHA','SIP|SHA'
]);
function recentClubReports(limit=10){
  return (state.matchReports||[]).filter(report=>report.club===state.club&&report.season===currentSeason()).slice(0,limit);
}
function isRecentDerby(report){
  if(!report)return false;const pair=[report.clubCode||state.clubCode,report.opponentCode].filter(Boolean).sort().join('|');return RIVALRY_CODES.has(pair);
}
function careerEventContext(event){
  const reports=recentClubReports(),latest=reports[0],appeared=reports.filter(report=>report.appeared),lastMonth=(state.month+11)%12,monthReports=reports.filter(report=>report.monthIndex===lastMonth),form=seasonStats()?.teamForm?.[state.club]||[];
  let weight=1,prefix='';
  if(event.category==='match'&&!appeared.length)return{weight:0,prefix:''};
  if(event.id==='derby_provocation'){const derby=reports.find(isRecentDerby);if(!derby)return{weight:0,prefix:''};weight=3.2;prefix=`刚刚结束的德比中，${state.club} 对阵 ${derby.opponent}，比分为 ${derby.teamGoals}:${derby.oppGoals}。`}
  else if(event.id==='referee_apology'){const report=appeared.find(item=>item.result!=='胜'&&(Number(item.rating)||0)<6.9);if(!report)return{weight:0,prefix:''};weight=2.8;prefix=`${report.competition} 对阵 ${report.opponent} 的关键判罚引发争议，赛后裁判组进行了复核。`}
  else if(event.id==='goalkeeper_error'){const report=state.pos==='GK'&&appeared.find(item=>item.oppGoals>=2&&(Number(item.rating)||0)<6.6);if(!report)return{weight:0,prefix:''};weight=3;prefix=`你在对阵 ${report.opponent} 的比赛中丢了 ${report.oppGoals} 球，赛后评分只有 ${report.rating}。`}
  else if(event.id==='penalty_duty'){const report=state.pos!=='GK'&&appeared.find(item=>Math.abs(item.teamGoals-item.oppGoals)<=1);if(!report)return{weight:0,prefix:''};weight=2.1;prefix=`近期对阵 ${report.opponent} 的胶着比赛让教练组重新审视队内点球顺位。`}
  else if(event.id==='captain_penalty_choice'){const report=state.pos!=='GK'&&appeared.find(item=>['cup','continental'].includes(item.statBucket)&&item.teamGoals===item.oppGoals);if(!report)return{weight:0,prefix:''};weight=3;prefix=`球队刚在 ${report.competition} 陷入必须通过点球决胜的局面。`}
  else if(event.id==='pitch_surface_choice'||event.id==='travel_delay'){const report=reports.find(item=>item.home===false);if(!report)return{weight:0,prefix:''};weight=2.2;prefix=`球队刚刚为客场对阵 ${report.opponent} 安排行程，比赛与恢复计划被迫压缩。`}
  else if(event.id==='fixture_congestion'){if(monthReports.length<4&&reports.slice(0,5).filter(item=>item.monthIndex===lastMonth).length<4)return{weight:0,prefix:''};weight=3.4;prefix=`过去一个月球队已经完成 ${Math.max(monthReports.length,4)} 场正式比赛，训练与恢复时间明显不足。`}
  else if(event.id==='manager_change'){if(form.length<4)return{weight:.15,prefix:''};if(form.slice(-5).reduce((sum,value)=>sum+value,0)>=6&&state.trust>=45)return{weight:.25,prefix:''};weight=2.5;prefix='球队近五场拿分效率持续低迷，管理层开始评估主教练的未来。'}
  else if(event.id==='coach_public_criticism'){const report=appeared.find(item=>(Number(item.rating)||0)<6.5);if(!report&&state.trust>=52)return{weight:0,prefix:''};weight=2.4;prefix=report?`你在对阵 ${report.opponent} 时评分 ${report.rating}，几次处理没有执行赛前部署。`:'你近期的训练投入与教练要求出现偏差。'}
  else if(event.id==='coach_tactical_conflict'){if((state.relationships?.coach||50)>=68&&state.trust>=62)return{weight:.25,prefix:''};weight=2;prefix='连续几场比赛后，你与教练对自己的跑位职责产生了不同理解。'}
  else if(event.id==='teammate_pass_conflict'){if(!latest?.appeared||(state.relationships?.teammates||50)>=78)return{weight:.35,prefix:''};weight=2.1;prefix=`对阵 ${latest.opponent} 的一次关键进攻中，你和队友选择了完全不同的处理方式。`}
  else if(event.id==='data_training'||event.id==='analyst_disagreement'){const report=appeared.find(item=>(Number(item.rating)||0)<7.1);if(!report)return{weight:.45,prefix:''};weight=1.8;prefix=`分析团队复盘了你对阵 ${report.opponent} 的 ${report.minutes} 分钟表现。`}
  else if(event.id==='minor_illness'||event.id==='sleep_monitor'||event.id==='boot_blister'){weight=state.fitness<62?2.2:.65}
  else if(event.category==='media'){const high=appeared.some(item=>(Number(item.rating)||0)>=8);weight=high||state.overall>=76?1.8:.55;if(high)prefix='最近的单场高光让媒体关注突然增加。'}
  else if(event.category==='coach'){weight=state.trust<55?1.55:1}
  else if(event.category==='team'){weight=(state.relationships?.teammates||50)<55?1.5:1}
  return{weight,prefix};
}

function triggerCareerEvent(forcedId=''){
  state.eventHistory=state.eventHistory||{};state.flags=state.flags||{};state.relationships=state.relationships||{coach:50,teammates:50,fans:35,agent:50};
  const now=state.year*12+state.month;
  const eligible=CAREER_EVENT_DECK.filter(e=>{
    const h=state.eventHistory[e.id];if(state.age<(e.minAge||12)||state.age>(e.maxAge||99))return false;if(e.condition&&!e.condition(state))return false;
    if(h&&e.once)return false;if(h&&h.count>=(e.maxRepeat||3))return false;if(h&&now-h.last<(e.cooldown||36))return false;if(e.category===state.flags.lastEventCategory)return false;return careerEventContext(e).weight>0;
  });
  if(!eligible.length)return false;
  const profileValues=Object.values(state.profile||{}),weighted=eligible.map(event=>{const context=careerEventContext(event);let weight=context.weight*(event.tags?.some(tag=>profileValues.includes(tag))?1.7:1);const history=state.eventHistory[event.id];if(history)weight*=Math.max(.35,1-history.count*.22);return{event,weight}});
  const event=(forcedId&&eligible.find(e=>e.id===forcedId))||weightedPick(weighted).event;
  showCareerDecision(event,true);
  return true;
}

function resolveCareerEvent(event,choice){
  const now=state.year*12+state.month,h=state.eventHistory[event.id]||{count:0};state.eventHistory[event.id]={last:now,count:h.count+1};state.flags.lastEventCategory=event.category;
  if(event.id==='manager_change')replaceClubCoach();
  const oldPosition=state.pos;applyEventEffects(choice.effects||{});if(choice.custom)choice.custom(state);
  if(state.pos!==oldPosition){const styles=PLAY_STYLES[state.pos]||['全能型'];if(!styles.includes(state.profile.playStyle))state.profile.playStyle=styles[0];ensureDetailedAttributes();recalculateOverall();ensureSquadCompetition();state.flags.positionTransitionMonths=rand(2,6);addFeed('位置改造进入适应期',`${oldPosition} → ${state.pos}，预计需要 ${state.flags.positionTransitionMonths} 个月完成位置熟练度适应。`,'↔')}
  else recalculateOverall();
  state.trust=clamp(state.trust,0,100);state.fitness=clamp(state.fitness,0,100);state.morale=clamp(state.morale,0,100);state.overall=clamp(state.overall,35,state.potential);
  addFeed(event.title,choice.outcome,event.icon);addEvent(event.title,choice.outcome,event.icon);renderAll();showInfo('选择产生了影响',choice.outcome,event.icon);
}

function legacyV1_applyEventEffects(e){
  if(e.trust)state.trust+=e.trust;if(e.fitness)state.fitness+=e.fitness;if(e.morale)state.morale+=e.morale;if(e.overall)state.overall+=e.overall;if(e.potential)state.potential+=e.potential;
  if(e.valuePct)state.value=Math.round(state.value*e.valuePct);if(e.wagePct)state.wage=Math.max(1,Math.round(state.wage*e.wagePct));if(e.flag)state.flags[e.flag]=true;if(e.clearFlag)delete state.flags[e.clearFlag];
  if(e.relation)Object.entries(e.relation).forEach(([k,v])=>state.relationships[k]=clamp((state.relationships[k]||50)+v,0,100));
}
function legacyV1_triggerInjury(){
  let pool=state.pos==='GK'?[['手指韧带扭伤',1],['肩关节撞伤',2],['腹股沟拉伤',2]]:[['踝关节外侧韧带扭伤',1],['腿后肌群拉伤',2],['内收肌损伤',2],['膝关节内侧韧带损伤',rand(3,4)]];
  if(state.age<=16)pool.push(['生长期膝前疼痛',2]);if(state.fitness<48||state.flags.overloaded)pool.push(['疲劳性肌肉损伤',rand(2,3)],['腿后肌群二次拉伤',3]);
  const [name,months]=pick(pool);const baseLoss=rand(20,38);state.morale=clamp(state.morale-8,0,100);addEvent('遭遇伤病',`${name}让你暂时离开赛场，初步预计休战 ${months} 个月。`,'✚');
  showModal({icon:'✚',kicker:'医疗组诊断',title:name,body:`影像检查完成。医疗组预计完整康复需要 ${months} 个月，并提供了两套回归计划。提前复出可以缩短时间，但会增加复发风险。`,locked:true,actions:[
    ['遵循完整康复方案',()=>{state.injured=months;state.fitness=clamp(state.fitness-baseLoss,10,100);delete state.flags.rushedReturn;addFeed('伤病报告',`${name}，你选择遵循医疗组建议，预计缺席 ${months} 个月。`,'✚');renderAll();showInfo('康复计划已确定','你将按阶段完成消肿、力量、跑动和合练测试，只有全部指标达标才会复出。','+')} ,false,`缺席 ${months} 个月 · 复发风险低 · 队内顺位可能下降`],
    ['选择加速复出计划',()=>{state.injured=Math.max(1,months-1);state.fitness=clamp(state.fitness-baseLoss-8,8,100);state.trust=clamp(state.trust+3,0,100);state.flags.rushedReturn=true;addFeed('加速复出',`${name}，预计缺席 ${state.injured} 个月，但未来三个月复发风险上升。`,'!');renderAll();showInfo('高风险回归计划','你选择缩短康复周期。教练欣赏你的决心，医疗组则明确记录了复发风险。','!')},false,`少缺席 1 个月 · 教练信任 +3 · 三个月复发风险上升`]
  ]});
}
function choiceEvent(){
  const options=[{title:'队长的邀请',body:'队长邀请你参加额外的战术分析课。今晚也是好友的生日聚会，你只能选择一个。',actions:[['参加战术课',()=>{state.trust+=7;state.fitness-=3;resultModal('专注成长','你的投入被教练组看在眼里。教练信任 +7。')}],['参加聚会',()=>{state.morale+=8;state.trust-=2;resultModal('放松一下','你度过了轻松的一晚。士气 +8，教练信任 -2。')}]]},{title:'经纪人来电',body:'一位知名经纪人愿意代理你，但要求你更积极地经营媒体形象。',actions:[['签约合作',()=>{state.value=Math.round(state.value*1.12);state.morale+=3;resultModal('新的合作','曝光度带来更高商业价值，身价提升 12%。')}],['保持低调',()=>{state.trust+=4;resultModal('专注球场','教练欣赏你的态度。教练信任 +4。')}]]},{title:'带伤出战？',body:'你感到肌肉不适，但球队正迎来关键比赛。医疗组把决定权交给了你。',actions:[['坚持出战',()=>{if(Math.random()<.45)triggerInjury();else{state.trust+=8;state.fitness-=18;resultModal('拼尽全力','你熬过了比赛，赢得更衣室尊重。')}}],['选择休息',()=>{state.fitness+=12;state.trust-=2;resultModal('理性决定','身体得到恢复，虽然教练稍有失望。')}]]}];
  const e=pick(options);showModal({icon:'?',kicker:'关键选择',title:e.title,body:e.body,locked:true,actions:e.actions});
}
function resultModal(title,body){state.trust=clamp(state.trust,0,100);state.fitness=clamp(state.fitness,0,100);state.morale=clamp(state.morale,0,100);addFeed(title,body,'◆');showInfo(title,body,'◆');renderAll()}
function legacyV1_transferOffer(){
  const currentStrength=state.clubStrength;let choices=LEAGUES.flatMap(l=>l.clubs).filter(c=>c[0]!==state.club&&c[3]<=currentStrength+10&&c[3]>=currentStrength-5);if(!choices.length)return;const offer=pick(choices),league=leagueForClub(offer[0]);const wage=Math.max(800,Math.round((state.overall**2)*(offer[3]/70)/10)*10);const value=Math.max(state.value,Math.round(state.overall**2*(state.age<20?1.3:1)));
  showModal({icon:'↗',kicker:'转会报价',title:`${offer[0]} 向你发出邀请`,body:`${league.name} 的球探已经考察你数月。这是一次改变生涯轨迹的机会，但新球队的竞争也会更加激烈。`,extra:`<div class="offer-box"><div class="crest" style="--club:${offer[2]}">${crestContent(offer)}</div><div><strong>${offer[0]}</strong><small>${league.name} · 周薪 ${weeklySalaryText(wage)} · 预计身价 ${money(value)}</small></div></div>`,locked:true,actions:[['接受报价',()=>completeTransfer(offer,wage,value),false,`薪资提升 · 新联赛机会 · 教练信任重新计算`],['留在球队',()=>{state.morale+=2;state.trust+=4;addFeed('拒绝转会',`你选择继续留在 ${state.club}，专注于眼前的目标。`,'↩');closeModal();renderAll()},false,'士气 +2 · 教练信任 +4 · 保留现有队内地位']]});
}
function legacyV1_completeTransfer(offer,wage,value){const old=state.club,oldLeague=leagueForClub(old),newLeague=leagueForClub(offer[0]);state.club=offer[0];state.clubCode=offer[1];state.clubColor=offer[2];state.clubStrength=offer[3];state.wage=wage;state.value=value;state.trust=clamp(42+(state.overall-offer[3]/1.25),28,65);state.contractEnd=state.year+rand(3,5);if(oldLeague&&newLeague&&oldLeague.country!==newLeague.country)state.flags.needsAdaptation=true;seasonStats().club=offer[0];addFeed('转会完成',`${state.name} 从 ${old} 转会加盟 ${offer[0]}。`,'↗');addEvent('完成转会',`离开 ${old}，正式加盟 ${offer[0]}。`,'↗');closeModal();renderAll();toast('转会已完成')}
function legacyV1_endSeason(silent=false){
  const s=seasonStats();s.done=true;const oldAge=state.age;evaluateAwards(s);if(state.continentalCurrent)state.continentalHistory.push({...state.continentalCurrent});state.year++;state.age++;state.month=0;
  if(oldAge===15){state.wage=rand(900,2200);state.value=rand(180,420);state.contractEnd=state.year+4;state.trust=45;addEvent('签下职业合同',`年满 16 岁，与 ${state.club} 签下第一份职业合同。`,'✎');addFeed('升入一线队',`俱乐部正式宣布：${state.name} 将进入一线队名单。`,'↑')}
  if(state.age>=35&&Math.random()<.22+(state.age-35)*.18){retire();return}
  state.seasons.push(newSeason(state.year,state.club));state.continentalCurrent=createContinentalCampaign();state.fitness=94;state.morale=clamp(state.morale+5,0,100);state.trust=clamp(state.trust-5,20,100);updateValue();addFeed('新赛季开始',`${currentSeason()} 赛季拉开帷幕。新的故事正在等待。`,'◉');renderAll();if(!silent)showInfo('赛季总结',`${s.season} 赛季结束：${s.apps} 次出场，${state.pos==='GK'?`${s.cleanSheets} 场零封`:`${s.goals} 球 ${s.assists} 助攻`}，综合能力 ${state.overall}。`,'✓');
}
function legacyV1_evaluateAwards(s){
  const won=[];const output=state.pos==='GK'?s.cleanSheets*3+s.apps+s.rating*2:s.goals*4+s.assists*2+s.apps*.3+s.rating*2;
  if(state.age<=21&&output>55&&state.overall>=70)won.push('欧洲金童奖');
  if(state.pos==='GK'&&s.cleanSheets>=12&&state.overall>=78)won.push('雅辛奖 · 金手套');
  if(state.pos!=='GK'&&s.goals>=24)won.push('欧洲金靴奖');
  if(state.overall>=88&&output>105)won.push('金球奖');
  won.forEach(name=>{state.trophies.unshift({name,season:s.season});addEvent(`赢得${name}`,`${s.season} 赛季的卓越表现为你带来这项个人荣誉。`,'♜');addFeed(`荣膺${name}`,`颁奖礼上，${state.name} 举起了属于自己的奖杯。`,'♜')});
}
function retire(){state.retired=true;addEvent('宣布退役',`${state.age} 岁的 ${state.name} 正式结束职业球员生涯。`,'◉');addFeed('传奇谢幕',`从 12 岁到 ${state.age} 岁，你的故事已经写进足球历史。`,'◉');renderAll();showInfo('终场哨响',`${state.age} 岁的你决定挂靴。所有进球、扑救、转会与荣誉，都成为独一无二的足球人生。`,'12')}
function legacyV1_updateValue(){if(state.age<16){state.value=0;return}const ageFactor=state.age<24?1.25:state.age<30?1:Math.max(.25,1-(state.age-29)*.1);state.value=Math.round((state.overall**3/750)*ageFactor*(state.morale/85)*(state.clubStrength/80));state.wage=Math.max(state.wage,Math.round(state.overall**2*state.clubStrength/8200)*100)}

function legacyV1_renderCareer(){if(!state)return;const totals=state.seasons.reduce((a,s)=>{a.apps+=s.apps;a.goals+=s.goals;a.assists+=s.assists;a.clean+=s.cleanSheets;return a},{apps:0,goals:0,assists:0,clean:0});$('#career-total').textContent=`总计 ${totals.apps} 场 · ${state.pos==='GK'?totals.clean+' 零封':totals.goals+' 球'}`;$('#season-table').innerHTML=`<div class="season-head"><span>俱乐部</span><span>赛季</span><span>出场</span><span>${state.pos==='GK'?'零封':'进球'}</span><span>助攻</span><span>评分</span></div>`+state.seasons.slice().reverse().map(s=>{const c=clubByName(s.club)||['','','#63766a'];return `<div class="season-row"><span class="team-cell"><i class="mini-dot" style="--club:${c[2]}"></i>${s.club}</span><span>${s.season}</span><b>${s.apps}</b><b>${state.pos==='GK'?s.cleanSheets:s.goals}</b><span>${s.assists}</span><span>${s.rating||'—'}</span></div>`}).join('');$('#timeline').innerHTML=state.events.map(e=>`<div class="timeline-item"><time>${e.date}</time><h4>${e.icon} ${e.title}</h4><p>${e.text}</p></div>`).join('')}
function legacyV1_renderLeagueTabs(){$('#league-tabs').innerHTML=LEAGUES.map((l,i)=>`<button data-league="${i}" class="${i===activeLeague?'active':''}">${l.short}</button>`).join('');$$('#league-tabs button').forEach(b=>b.onclick=()=>{activeLeague=+b.dataset.league;renderLeagueTabs();renderClubs()})}
function legacyV1_renderClubs(){const l=LEAGUES[activeLeague];$('#club-database').innerHTML=l.clubs.map(c=>`<div class="club-card"><div class="crest" style="--club:${c[2]}">${crestContent(c)}</div><div><strong>${c[0]}</strong><small>${l.name} · 实力 ${c[3]}</small><div class="stars">${'★'.repeat(Math.round((c[3]-55)/9))}${'☆'.repeat(5-Math.round((c[3]-55)/9))}</div></div></div>`).join('')}
function legacyV1_renderAwards(){
  $('#award-cards').innerHTML=AWARDS.map(a=>`<div class="award-card" data-mark="${a.mark}"><div class="trophy-symbol">${a.icon}</div><h3>${a.name}</h3><p>${a.desc}</p><span class="eligibility">${a.rule}</span></div>`).join('');if(!state)return;$('#trophy-count').textContent=`${state.trophies.length} 座奖杯`;$('#trophy-list').innerHTML=state.trophies.length?state.trophies.map(t=>`<div class="trophy-item"><strong>${t.name}</strong><span>${t.season}</span></div>`).join(''):'<div class="empty-state">奖杯柜还空着。继续前进，你会来到这里。</div>'
}
function showModal({icon,kicker,title,body,extra='',actions=[],locked=false}){modalLocked=locked;const modal=$('#modal');modal.classList.toggle('choice-sheet',locked&&actions.length>=2);modal.classList.toggle('dense-choice-sheet',locked&&actions.length>=3);$('#modal-icon').textContent=icon;$('#modal-kicker').textContent=kicker;$('#modal-title').textContent=title;$('#modal-body').textContent=body;$('#modal-extra').innerHTML=extra;$('#modal-close').style.display=locked?'none':'grid';$('#modal-actions').innerHTML='';actions.forEach(([label,fn,primary,detail],i)=>{const b=document.createElement('button');b.type='button';b.innerHTML=`<span>${label}</span>${detail?`<small class="choice-detail">${detail}</small>`:''}`;b.className=primary?'primary':'';b.onclick=()=>{modalLocked=false;fn()};$('#modal-actions').appendChild(b)});if(!actions.length){const b=document.createElement('button');b.type='button';b.textContent='继续';b.className='primary';b.onclick=closeModal;$('#modal-actions').appendChild(b)}document.body.classList.add('modal-open');modal.classList.remove('hidden');requestAnimationFrame(()=>{$('#modal-scroll').scrollTop=0;$('#modal-actions').scrollTop=0;const first=$('#modal-actions button');if(first)first.focus({preventScroll:true})})}
function showInfo(title,body,icon='!'){showModal({icon,kicker:'生涯事件',title,body})}
function closeModal(){if(modalLocked)return;$('#modal').classList.add('hidden');document.body.classList.remove('modal-open')}
function setPendingDecision(decision){if(!state)return;state.pendingDecision={...decision,createdAt:state.year*12+state.month};save()}
function clearPendingDecision(){if(!state?.pendingDecision)return;delete state.pendingDecision;save()}
function serializeTransferOffers(offers){return offers.map(offer=>({clubName:offer.club[0],wage:offer.wage,fee:offer.fee,rank:offer.rank,terms:offer.terms,dealType:offer.dealType||'永久转会'}))}
function restoreTransferOffers(payload=[]){return payload.map(item=>{const club=clubByName(item.clubName),league=club&&leagueForClub(item.clubName);return club&&league?{club,league,wage:Number(item.wage)||0,fee:Number(item.fee)||0,rank:Number(item.rank)||worldRank(item.clubName),terms:{...contractOfferTerms(Number(item.wage)||0,club[3]),...(item.terms||{})},dealType:item.dealType||'永久转会'}:null}).filter(Boolean)}
function qualitativeChoiceHint(choice){
  const effects=choice.effects||{},hints=[],negative=(effects.fitness||0)<0||(effects.trust||0)<-5||effects.flags?.frozenOut,positiveGrowth=(effects.overall||0)>0||(effects.potential||0)>0||String(choice.label).includes('训练');
  if(negative)hints.push((effects.fitness||0)<=-6?'高风险 · 可能增加疲劳或伤病风险':'存在短期风险');
  else hints.push('风险较低');
  if(positiveGrowth)hints.push('偏向长期成长');
  if((effects.trust||0)!==0||effects.relation?.coach)hints.push((effects.trust||0)+(effects.relation?.coach||0)>=0?'可能改善教练关系':'可能影响教练关系');
  if(effects.relation?.teammates)hints.push(effects.relation.teammates>0?'偏向团队关系':'可能影响队友关系');
  const personality=state.profile?.personality,label=String(choice.label);
  const aligned=(personality==='自律'&&/训练|接受|恢复|课程/.test(label))||(personality==='好胜'&&/挑战|坚持|射门|争取/.test(label))||(personality==='沉稳'&&/沟通|等待|完整|控制/.test(label))||(personality==='外向'&&/队友|公开|社区|沟通/.test(label));
  if(aligned)hints.push(`更符合“${personality}”性格`);return[...new Set(hints)].slice(0,3).join(' · ');
}
function showCareerDecision(event,persist=true){
  if(persist)setPendingDecision({type:'career',eventId:event.id});
  const baseBody=typeof event.body==='function'?event.body(state):event.body,context=careerEventContext(event),body=context.prefix?`${context.prefix}\n\n${baseBody}`:baseBody;
  showModal({icon:event.icon,kicker:`职业生涯事件 · ${event.category.toUpperCase()}`,title:event.title,body,locked:true,actions:event.choices.map(choice=>[choice.label,()=>{clearPendingDecision();resolveCareerEvent(event,choice)},false,qualitativeChoiceHint(choice)])});
}
function showInjuryDecision(injury,months,persist=true){
  if(persist)setPendingDecision({type:'injury',injuryName:injury.name,months});
  const loss=lossForPosition(injury.loss);
  showModal({icon:'✚',kicker:'医疗组诊断',title:injury.name,body:`${injury.desc} 预计完整康复需要 ${months} 个月。当前影响：${lossText(loss)}。`,locked:true,actions:[
    ['遵循完整康复方案',()=>{clearPendingDecision();startInjury(injury,months,false)},false,`缺席 ${months} 个月 · 恢复较完整 · 复发风险低`],
    ['选择加速复出计划',()=>{clearPendingDecision();startInjury(injury,months,true)},false,`少缺席 1 个月 · 额外掉属性 · 复发和长期损失上升`]
  ]});
}
function showTransferDecision(offers,persist=true){
  if(!offers.length)return false;if(persist)setPendingDecision({type:'transfer',offers:serializeTransferOffers(offers)});
  const restriction=state.age<18?'未成年球员阶段仅生成同国俱乐部报价。':'报价由能力、位置数据、年龄与发展空间、赛季表现和俱乐部参考排名共同生成。';
  const extra=`<div class="offer-list">${offers.map(o=>`<div class="offer-box"><div class="crest" style="--club:${o.club[2]}">${crestContent(o.club)}</div><div><strong>${o.club[0]}</strong><small>${o.league.name} · ${o.dealType||'永久转会'} · 周薪 ${weeklySalaryText(o.wage)} · ${o.terms?.rolePromise||'轮换'}承诺 · 转会报价 ${money(o.fee)}</small></div><div class="offer-rank">#${o.rank}<small>参考排名</small></div></div>`).join('')}</div>`;
  const actions=offers.map((o,i)=>[`加盟 ${o.club[0]}`,()=>{clearPendingDecision();completeTransfer(o)},i===0,`${o.terms?.rolePromise||'轮换'}承诺 · 出场奖 ${salaryAmount(o.terms?.appearanceBonus||0)} · 解约金 ${o.terms?.releaseClause?money(o.terms.releaseClause):'无'}`]);actions.push(['全部拒绝',()=>{clearPendingDecision();state.morale=clamp(state.morale+2,0,100);state.trust=clamp(state.trust+4,0,100);addFeed('决定留队',`你拒绝 ${offers.length} 份报价，继续效力 ${state.club}。`,'↩');closeModal();renderAll()},false,'保留现有合同、身价和队内地位']);
  showModal({icon:'↗',kicker:'转会窗口 · 多队报价',title:`${offers.length} 家俱乐部正式求购`,body:restriction,extra,locked:true,actions});return true;
}
function showSeasonObjectiveDecision(persist=true){
  if(seasonStats().objective)return false;if(persist)setPendingDecision({type:'seasonObjective'});
  showModal({icon:'◎',kicker:`${currentSeason()} · SEASON OBJECTIVE`,title:'为新赛季选择一条明确路线',body:'目标会在每场比赛后更新进度，并在赛季结束时结算。不同路线的收益方向不同，失败也会产生相应后果。',locked:true,actions:Object.values(SEASON_OBJECTIVES).map((objective,index)=>[objective.name,()=>chooseSeasonObjective(objective.id),index===0,`目标：${objective.description}\n收益：${objective.reward}\n风险：${objective.failure}`])});return true;
}
function restorePendingDecision(){
  const pending=state?.pendingDecision;if(!pending)return false;
  if(pending.type==='career'){const event=CAREER_EVENT_DECK.find(item=>item.id===pending.eventId);if(event){showCareerDecision(event,false);return true}}
  if(pending.type==='injury'){const injury=INJURIES.find(item=>item.name===pending.injuryName);if(injury){showInjuryDecision(injury,Math.max(1,Number(pending.months)||1),false);return true}}
  if(pending.type==='transfer'){const offers=restoreTransferOffers(pending.offers);if(offers.length){showTransferDecision(offers,false);return true}}
  if(pending.type==='seasonObjective'&&!seasonStats().objective){showSeasonObjectiveDecision(false);return true}
  if(pending.type==='match'){const report=(state.matchReports||[]).find(item=>item.matchId===pending.matchId);if(report){showKeyMatchDecision(report,pending.scenarioId,false,pending.phase||'final');return true}}
  if(pending.type==='objectiveCheck'){showObjectiveCheckpoint(Math.max(1,Number(pending.quarter)||1),false);return true}
  clearPendingDecision();return false;
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function save(){
  if(!state)return;
  try{localStorage.setItem(SAVE_KEY,JSON.stringify(state))}
  catch{toast('自动存档失败：浏览器存储空间不足')}
}
function cloneSaveState(value){return JSON.parse(JSON.stringify(value))}
function getSaveLibrary(){
  try{
    const library=JSON.parse(localStorage.getItem(SAVE_LIBRARY_KEY)||'[]');
    return Array.isArray(library)?library.filter(slot=>slot&&slot.id&&slot.snapshot).slice(0,SAVE_LIMIT):[];
  }catch{return[]}
}
function writeSaveLibrary(library){
  try{
    localStorage.setItem(SAVE_LIBRARY_KEY,JSON.stringify(library.slice(0,SAVE_LIMIT)));
    updateSaveManagerBadges();
    return true;
  }catch{
    toast('浏览器存储空间不足，请删除旧存档后重试');
    return false;
  }
}
function updateSaveManagerBadges(){
  const count=getSaveLibrary().length,top=$('#save-manager-btn'),creator=$('#creator-save-count');
  if(top)top.innerHTML=`▣ 存档 <b>${count}/${SAVE_LIMIT}</b>`;
  if(creator)creator.textContent=`${count} / ${SAVE_LIMIT}`;
}
function saveDateLabel(value){
  try{return new Date(value).toLocaleString('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false})}
  catch{return'时间未知'}
}
function escapeSaveText(value){
  return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function saveSlotMarkup(slot,index){
  if(!slot)return`<article class="save-slot empty"><div class="save-slot-index">${String(index+1).padStart(2,'0')}</div><div><strong>空存档位</strong><p>可保存一段新的球员生涯</p></div></article>`;
  const s=slot.snapshot||{},season=s.year?`${s.year}/${String(s.year+1).slice(-2)}`:'未知赛季',safeId=escapeSaveText(slot.id);
  return`<article class="save-slot">
    <div class="save-slot-index">${String(index+1).padStart(2,'0')}</div>
    <div class="save-slot-copy">
      <div class="save-slot-title"><strong>${escapeSaveText(s.name||'无名球员')}</strong><span>${escapeSaveText(s.pos||'—')} · ${Number(s.age)||15} 岁</span></div>
      <p>${escapeSaveText(s.club||'尚未签约')} · ${season} · 总评 ${Number(s.overall)||0}</p>
      <small>${saveDateLabel(slot.updatedAt)} · ${(s.trophies||[]).length} 项荣誉</small>
      <div class="save-slot-actions">
        <button type="button" data-save-load="${safeId}">读取</button>
        ${state?`<button type="button" data-save-overwrite="${safeId}">覆盖</button>`:''}
        <button type="button" class="danger" data-save-delete="${safeId}">删除</button>
      </div>
    </div>
  </article>`;
}
function openSaveManager(){
  const library=getSaveLibrary(),slots=Array.from({length:SAVE_LIMIT},(_,index)=>library[index]||null);
  const canCreate=Boolean(state)&&library.length<SAVE_LIMIT;
  const body=library.length>=SAVE_LIMIT?'10 个存档位已经全部使用。可先删除旧存档，或用当前生涯覆盖任意存档。':'手动存档独立于自动存档，可随时读取此前的球员生涯。';
  const actions=canCreate?[
    ['保存当前生涯',()=>createManualSave(),true,`新建存档 · 还可保存 ${SAVE_LIMIT-library.length} 个`],
    ['关闭',closeModal,false,'继续当前生涯']
  ]:[['关闭',closeModal,true,state?'可使用存档卡片上的覆盖按钮':'选择一个已有存档读取']];
  showModal({icon:'▣',kicker:`存档管理 · ${library.length}/${SAVE_LIMIT}`,title:'我的生涯存档',body,extra:`<div class="save-library-grid">${slots.map(saveSlotMarkup).join('')}</div>`,actions});
  $$('[data-save-load]').forEach(button=>button.onclick=()=>loadManualSave(button.dataset.saveLoad));
  $$('[data-save-overwrite]').forEach(button=>button.onclick=()=>overwriteManualSave(button.dataset.saveOverwrite));
  $$('[data-save-delete]').forEach(button=>button.onclick=()=>deleteManualSave(button.dataset.saveDelete));
}
function createManualSave(){
  if(!state)return;
  const library=getSaveLibrary();
  if(library.length>=SAVE_LIMIT){toast('存档已达 10 个上限');openSaveManager();return}
  save();
  library.unshift({id:`save-${Date.now()}-${rand(1000,9999)}`,updatedAt:Date.now(),snapshot:cloneSaveState(state)});
  if(writeSaveLibrary(library)){toast('当前生涯已保存');openSaveManager()}
}
function overwriteManualSave(id){
  if(!state)return;
  const library=getSaveLibrary(),slot=library.find(item=>item.id===id);
  if(!slot)return;
  if(!confirm(`确定用 ${state.name} 的当前进度覆盖“${slot.snapshot?.name||'旧存档'}”吗？`))return;
  save();slot.updatedAt=Date.now();slot.snapshot=cloneSaveState(state);
  if(writeSaveLibrary(library)){toast('存档已覆盖');openSaveManager()}
}
function loadManualSave(id){
  const slot=getSaveLibrary().find(item=>item.id===id);
  if(!slot)return;
  if(state&&!confirm(`读取 ${slot.snapshot?.name||'该球员'} 的存档吗？当前未手动保存的进度将被替换。`))return;
  state=cloneSaveState(slot.snapshot);
  migrateState();
  save();
  showGame();
  showPage('overview');
  renderAll();
  modalLocked=false;
  closeModal();
  restorePendingDecision();
  toast(`已读取 ${state.name} 的生涯`);
}
function deleteManualSave(id){
  const library=getSaveLibrary(),slot=library.find(item=>item.id===id);
  if(!slot||!confirm(`确定删除 ${slot.snapshot?.name||'该球员'} 的存档吗？此操作无法撤销。`))return;
  if(writeSaveLibrary(library.filter(item=>item.id!==id))){toast('存档已删除');openSaveManager()}
}
function resetGame(){if(!confirm('确定结束当前生涯并创建新球员吗？当前自动进度将被清除，手动存档会保留。'))return;localStorage.removeItem(SAVE_KEY);location.reload()}

/* Version 4: position attributes, realistic development/injuries, multi-club market and award showcase. */
const PLAY_STYLES={
  ST:['抢点射手','速度突击手','支点中锋','全能前锋'],
  LW:['内切得分手','传统边锋','边路组织者','速度突击手'],RW:['内切得分手','传统边锋','边路组织者','速度突击手'],
  CAM:['古典前腰','影子前锋','高压核心','自由组织者'],CM:['控球组织者','全能中场','节拍器','B2B中场'],
  CDM:['抢球机器','拖后组织者','防守屏障','全能中场'],
  LB:['进攻边卫','防守边卫','内收边卫'],RB:['进攻边卫','防守边卫','内收边卫'],
  CB:['出球中卫','制空中卫','盯人中卫','清道夫'],GK:['门线门将','清道夫门将','出球门将']
};
const OUTFIELD_KEYS=['pace','acceleration','shooting','finishing','passing','vision','dribbling','ballControl','defending','positioning','physical','stamina'];
const GK_KEYS=['reflexes','handling','kicking','positioning','oneOnOnes','physical','aerialReach','command','throwing','pace'];
const ATTRIBUTE_LABELS={
  pace:'速度',acceleration:'爆发',shooting:'射术',finishing:'终结',passing:'传球',vision:'视野',
  dribbling:'盘带',ballControl:'控球',defending:'防守',positioning:'站位',physical:'身体',stamina:'耐力',
  reflexes:'反应',handling:'手型',kicking:'长传',oneOnOnes:'一对一',aerialReach:'制空',command:'指挥',throwing:'手抛球'
};
const POSITION_WEIGHTS={
  ST:{pace:.10,acceleration:.10,shooting:.12,finishing:.22,passing:.06,vision:.04,dribbling:.08,ballControl:.10,defending:.01,positioning:.08,physical:.06,stamina:.03},
  LW:{pace:.13,acceleration:.13,shooting:.08,finishing:.10,passing:.08,vision:.07,dribbling:.13,ballControl:.10,defending:.02,positioning:.05,physical:.04,stamina:.07},
  RW:{pace:.13,acceleration:.13,shooting:.08,finishing:.10,passing:.08,vision:.07,dribbling:.13,ballControl:.10,defending:.02,positioning:.05,physical:.04,stamina:.07},
  CAM:{pace:.06,acceleration:.07,shooting:.08,finishing:.06,passing:.15,vision:.18,dribbling:.12,ballControl:.12,defending:.02,positioning:.06,physical:.03,stamina:.05},
  CM:{pace:.04,acceleration:.04,shooting:.05,finishing:.03,passing:.18,vision:.16,dribbling:.08,ballControl:.10,defending:.09,positioning:.08,physical:.06,stamina:.09},
  CDM:{pace:.03,acceleration:.03,shooting:.02,finishing:.01,passing:.13,vision:.10,dribbling:.04,ballControl:.07,defending:.20,positioning:.15,physical:.12,stamina:.10},
  LB:{pace:.10,acceleration:.10,shooting:.02,finishing:.01,passing:.10,vision:.05,dribbling:.07,ballControl:.05,defending:.18,positioning:.10,physical:.10,stamina:.12},
  RB:{pace:.10,acceleration:.10,shooting:.02,finishing:.01,passing:.10,vision:.05,dribbling:.07,ballControl:.05,defending:.18,positioning:.10,physical:.10,stamina:.12},
  CB:{pace:.04,acceleration:.04,shooting:.01,finishing:.01,passing:.07,vision:.04,dribbling:.02,ballControl:.03,defending:.25,positioning:.20,physical:.19,stamina:.10},
  GK:{reflexes:.20,handling:.16,kicking:.08,positioning:.15,oneOnOnes:.13,physical:.05,aerialReach:.10,command:.06,throwing:.03,pace:.04}
};
const STYLE_KEYS={
  '抢点射手':['finishing','positioning'],'速度突击手':['pace','acceleration','dribbling'],'支点中锋':['physical','ballControl','vision'],'全能前锋':['shooting','finishing','ballControl'],
  '内切得分手':['finishing','dribbling','ballControl'],'传统边锋':['pace','acceleration','passing'],'边路组织者':['passing','vision','ballControl'],'古典前腰':['passing','vision','ballControl'],
  '影子前锋':['finishing','positioning','acceleration'],'高压核心':['stamina','defending','physical'],'自由组织者':['vision','dribbling','ballControl'],'控球组织者':['passing','vision','ballControl'],
  '全能中场':['passing','stamina','physical'],'节拍器':['passing','vision','positioning'],'B2B中场':['stamina','physical','acceleration'],'抢球机器':['defending','stamina','physical'],
  '拖后组织者':['passing','vision','defending'],'防守屏障':['defending','positioning','physical'],'进攻边卫':['pace','stamina','passing'],'防守边卫':['defending','positioning','physical'],
  '内收边卫':['passing','ballControl','positioning'],'出球中卫':['passing','vision','defending'],'制空中卫':['positioning','physical','defending'],'盯人中卫':['defending','positioning','pace'],
  '清道夫':['pace','positioning','defending'],'门线门将':['reflexes','handling'],'清道夫门将':['oneOnOnes','pace','kicking'],'出球门将':['kicking','throwing','command']
};
const STYLE_DESCRIPTIONS={
  '抢点射手':'禁区跑位与射门更强','速度突击手':'反击、盘带与冲刺更强','支点中锋':'争顶和做球更强','全能前锋':'终结与串联均衡',
  '内切得分手':'内切射门概率提高','传统边锋':'传中与助攻概率提高','边路组织者':'关键传球更频繁','古典前腰':'创造机会和控球更强',
  '影子前锋':'后插上得分更多','高压核心':'反抢会提高评分','自由组织者':'关键传球与盘带更强','控球组织者':'传球成功率更稳定',
  '全能中场':'攻防贡献更加均衡','节拍器':'传球与比赛控制更强','B2B中场':'跑动、对抗和后插上更强','抢球机器':'抢断和拦截更突出',
  '拖后组织者':'后场出球与拦截并重','防守屏障':'站位和保护防线更强','进攻边卫':'助攻和推进能力提高','防守边卫':'抢断与对抗更稳定',
  '内收边卫':'中场支援与传球更强','出球中卫':'传球会显著影响评分','制空中卫':'争顶与定位球威胁更强','盯人中卫':'抢断和单防更强',
  '清道夫':'补位和回追更强','门线门将':'扑救带来的评分更高','清道夫门将':'一对一和出击更强','出球门将':'传球成功率与组织加分'
};
const AWARD_IMAGES={
  '金球奖':commonsTrophy('Balón de oro.png'),
  '欧洲金靴奖':commonsTrophy('Bota de Oro.jpg'),
  '欧洲金童奖':commonsTrophy("Ballon d'Or simple.svg"),
  '雅辛奖 · 金手套':commonsTrophy('Golden Glove.png'),
  'DEFAULT':commonsTrophy('Coppa Campioni.svg')
};
const DOMESTIC_CUP_TROPHY_IMAGES={
  'FA Cup':commonsTrophy('The FA Cup Trophy.jpg'),
  'Copa del Rey':commonsTrophy('Paulo Futre holding the Copa del Rey trophy.jpg'),
  'DFB-Pokal':commonsTrophy('DFB Pokal Trophy.png'),
  'Coppa Italia':commonsTrophy('The Coppa Italia trophy.jpg'),
  'Coupe de France':commonsTrophy('Finale Coupe de France 1931 Trophée.jpg'),
  'Taça de Portugal':commonsTrophy('Taça de Portugal Trophy.svg'),
  'KNVB Cup':commonsTrophy('KNVB Trophy.png'),
  'Belgian Cup':commonsTrophy('Icone du trophée de la Coupe de Belgique.svg'),
  'Scottish Cup':commonsTrophy('Scottish cup.jpg'),
  'Austrian Cup':commonsTrophy('ÖFB-Cups.png'),
  'King’s Cup':commonsTrophy("King's Cup (Saudi Arabia), 2023.jpg"),
  'U.S. Open Cup':commonsTrophy('Dewar trophy 1914.jpg'),
  '中国足协杯':commonsTrophy('2023 CFA Cup Opening ceremony in Guangxi Sports Center (1).jpg'),
  'Emperor’s Cup':commonsTrophy('Emperors cup.JPG'),
  'Korea Cup':commonsTrophy('Korean FA Cup Trophy.png')
};
const CONTINENTAL_TROPHY_IMAGES={
  'UEFA Champions League':commonsTrophy('UEFA Champions League trophy, Old Trafford, 1992.jpg'),
  'UEFA Europa League':commonsTrophy('2011 UEFA Europa League trophy at Museu FC Porto.jpg'),
  'UEFA Conference League':commonsTrophy('UEFA Europa Conference League Trophy.jpg'),
  'AFC Champions League Elite':commonsTrophy('AFC Champions League Trophy.png'),
  'AFC Champions League Two':commonsTrophy('AFC Champions League Trophy.png'),
  'AFC Challenge League':commonsTrophy('AFC Presidents Cup trophy.JPG'),
  'CONCACAF Champions Cup':commonsTrophy('Concacaf Liga Campeones.jpg')
};
const SPECIAL_TROPHY_IMAGES={
  'MLS Cup':commonsTrophy('MLS Cup.svg'),
  'MLS Supporters’ Shield':commonsTrophy("Icon Major League Soccer Supporters' Shield.svg")
};
const UEFA_REFERENCE_RANK={'Bayern Munich':1,'Real Madrid':2,'Paris Saint-Germain':3,'Liverpool':4,'Inter':5,'Manchester City':6,'Bayer Leverkusen':7,'Borussia Dortmund':8,'FC Barcelona':9,'Arsenal':10,'Atlético de Madrid':11,'AS Roma':12,'Atalanta':13,'Benfica':14,'Chelsea':15,'Juventus':16,'AC Milan':17,'PSV Eindhoven':18,'Feyenoord':19,'Napoli':20};

function attributeKeys(){return state?.pos==='GK'?GK_KEYS:OUTFIELD_KEYS}
function renderPlayStyles(){
  const el=$('#playStyle');if(!el)return;const pos=$('#position')?.value||'ST',old=el.value,styles=PLAY_STYLES[pos]||['全能型'];
  el.innerHTML=styles.map(s=>`<option value="${s}">${s} · ${STYLE_DESCRIPTIONS[s]||'均衡发展'}</option>`).join('');if(styles.includes(old))el.value=old;
}
function legacyV4_initialAttributes(pos,base,style){
  const keys=pos==='GK'?GK_KEYS:OUTFIELD_KEYS,out={};keys.forEach(k=>out[k]=clamp(base+rand(-4,4),30,60));
  (STYLE_KEYS[style]||[]).forEach(k=>{if(k in out)out[k]=clamp(out[k]+3,30,100)});return out;
}
function calculateOverall(attrs=state.attributes,pos=state.pos){
  const weights=POSITION_WEIGHTS[pos]||POSITION_WEIGHTS.CM;return Math.round(Object.entries(weights).reduce((n,[k,w])=>n+(attrs[k]||40)*w,0));
}
function ensureDetailedAttributes(){
  if(!state?.attributes)return;
  const a=state.attributes,seed=(key,fallback)=>{if(!Number.isFinite(a[key]))a[key]=clamp(Math.round(fallback),20,100)};
  if(state.pos==='GK'){
    seed('reflexes',state.overall||50);seed('handling',a.reflexes);seed('kicking',a.handling);seed('positioning',(a.reflexes+a.handling)/2);
    seed('oneOnOnes',(a.reflexes+a.positioning)/2);seed('physical',a.handling);seed('aerialReach',(a.handling+a.physical)/2);
    seed('command',(a.positioning+a.handling)/2);seed('throwing',(a.kicking+a.handling)/2);seed('pace',(a.oneOnOnes+a.physical)/2);
  }else{
    seed('pace',state.overall||50);seed('acceleration',a.pace);seed('shooting',state.overall||50);seed('finishing',a.shooting);
    seed('passing',state.overall||50);seed('vision',a.passing);seed('dribbling',state.overall||50);seed('ballControl',a.dribbling);
    seed('defending',state.overall||50);seed('positioning',(a.defending+a.passing)/2);seed('physical',state.overall||50);seed('stamina',a.physical);
  }
}
function recalculateOverall(){
  state.potential=clamp(Math.round(state.potential||90),40,100);
  state.overall=clamp(calculateOverall(),30,Math.min(100,state.potential));return state.overall;
}
function changeAttributes(changes){
  Object.entries(changes||{}).forEach(([k,v])=>{if(k in state.attributes)state.attributes[k]=clamp(Math.round(state.attributes[k]+v),20,100)});recalculateOverall();
}
function legacyV4_createPlayer(e){
  e.preventDefault();const pos=$('#position').value,country=$('#country').value,academy=startingAcademy(country),playStyle=$('#playStyle').value;
  const potential=clamp(rand(84,95)+($('#background').value==='体育家庭'?1:0),40,100),base=rand(42,48);
  const profile={personality:$('#personality').value,development:$('#development').value,background:$('#background').value,agentStyle:$('#agentStyle').value,careerGoal:$('#careerGoal').value,playStyle};
  state={name:$('#name').value.trim()||'无名新星',country,pos,number:+$('#number').value,foot,age:12,year:2026,month:0,club:academy[0],clubCode:academy[1],clubColor:academy[2],clubStrength:academy[3],overall:base,potential,attributes:initialAttributes(pos,base,playStyle),fitness:profile.background==='体育家庭'?100:96,morale:72,trust:profile.background==='足球世家'?53:48,value:0,wage:0,contractEnd:2030,injured:0,injuryDetail:null,sound:true,retired:false,profile,eventHistory:{},flags:{},relationships:{coach:50,teammates:profile.personality==='外向'?60:50,fans:35,agent:50},version:4,seasons:[newSeason(2026,academy[0])],events:[],trophies:[],feed:[],matchReports:[],continentalHistory:[],continentalCurrent:null};
  recalculateOverall();addEvent('签约青训营',`${state.name} 加入 ${state.club} 青训学院，以「${playStyle}」作为自己的比赛风格。`,'✦');
  addFeed('欢迎来到青训营',`教练递给你 ${state.number} 号训练服。位置能力将按 ${state.pos} 权重计算，所有属性上限均为 100。`,'12');showGame();renderAll();save();
}
function legacyV4_migrateState(){
  const clubMap={'曼彻斯特蓝月':'Manchester City','伦敦枪手':'Arsenal','默西塞德红军':'Liverpool','北伦敦雄狮':'Tottenham Hotspur','伦敦蓝狮':'Chelsea','纽卡斯尔联':'Newcastle United','马德里白衣':'Real Madrid','加泰罗尼亚红蓝':'FC Barcelona','马德里竞技':'Atlético de Madrid','巴斯克竞技':'Athletic Club','塞维利亚红白':'Sevilla FC','皇家社会':'Real Sociedad','慕尼黑之星':'Bayern Munich','多特蒙德蜂群':'Borussia Dortmund','莱茵药厂':'Bayer Leverkusen','莱比锡公牛':'RB Leipzig','法兰克福雄鹰':'Eintracht Frankfurt','斯图加特':'VfB Stuttgart','米兰蓝黑':'Inter','都灵斑马':'Juventus','米兰红黑':'AC Milan','那不勒斯海湾':'Napoli','罗马之狼':'AS Roma','亚特兰大女神':'Atalanta','巴黎之光':'Paris Saint-Germain','马赛航海':'Olympique de Marseille','摩纳哥王冠':'AS Monaco','里昂雄狮':'Olympique Lyonnais','里尔獒犬':'LOSC Lille','尼斯之鹰':'OGC Nice','里斯本雄鹰':'SL Benfica','波尔图巨龙':'FC Porto','里斯本竞技':'Sporting CP','布拉加兵工厂':'SC Braga','阿姆斯特丹之子':'Ajax','埃因霍温飞利浦':'PSV Eindhoven','鹿特丹港湾':'Feyenoord','阿尔克马尔':'AZ Alkmaar','布鲁日蓝黑':'Club Brugge','安德莱赫特紫衣':'RSC Anderlecht','圣吉罗斯联':'Union Saint-Gilloise','亨克竞技':'KRC Genk','格拉斯哥绿白':'Celtic','格拉斯哥蓝军':'Rangers','爱丁堡之心':'Heart of Midlothian','阿伯丁':'Aberdeen','萨尔茨堡红牛':'Red Bull Salzburg','维也纳绿白':'Rapid Wien','格拉茨风暴':'Sturm Graz','奥地利维也纳':'Austria Wien'};
  if(clubMap[state.club])state.club=clubMap[state.club];(state.seasons||[]).forEach(s=>{if(clubMap[s.club])s.club=clubMap[s.club]});
  const c=clubByName(state.club);if(c){state.clubCode=c[1];state.clubColor=c[2];state.clubStrength=c[3]}
  state.profile=state.profile||{personality:'自律',development:'技术',background:'普通家庭',agentStyle:'稳健',careerGoal:'成为世界最佳'};
  state.profile.playStyle=state.profile.playStyle||(PLAY_STYLES[state.pos]||['全能型'])[0];
  state.attributes=state.attributes||initialAttributes(state.pos,state.overall||45,state.profile.playStyle);
  state.eventHistory=state.eventHistory||{};state.flags=state.flags||{};state.relationships=state.relationships||{coach:50,teammates:50,fans:35,agent:50};
  state.matchReports=state.matchReports||[];state.continentalHistory=state.continentalHistory||[];state.trophies=state.trophies||[];
  state.trophies.forEach(t=>{t.reason=t.reason||`${t.season} 赛季凭借稳定而出色的表现获得这项荣誉。`;t.image=t.image||awardImage(t.name)});
  if(state.injured&&!state.injuryDetail)state.injuryDetail={name:'旧伤恢复期',description:'旧版本存档中的伤病，完成剩余康复期后即可复出。',effect:'体能与比赛状态受限',restore:{}};
  if(state.age>=16&&!state.continentalCurrent)state.continentalCurrent=createContinentalCampaign();state.version=4;recalculateOverall();updateValue();
}
function renderAttributes(){
  if(!state.attributes)return;const keys=attributeKeys(),important=new Set(STYLE_KEYS[state.profile?.playStyle]||[]);
  $('#style-effect').textContent=`${state.profile?.playStyle||'全能型'}：${STYLE_DESCRIPTIONS[state.profile?.playStyle]||'均衡影响比赛'}`;
  $('#attribute-grid').innerHTML=keys.map(k=>`<div class="attribute-item ${important.has(k)?'key':''}"><span>${ATTRIBUTE_LABELS[k]}</span><b>${state.attributes[k]}</b></div>`).join('');
}
function renderInjuryStatus(){
  const el=$('#injury-status');if(!state.injured){el.classList.add('hidden');el.innerHTML='';return}const d=state.injuryDetail||{};
  el.classList.remove('hidden');el.innerHTML=`<strong>医疗报告：${d.name||'伤病恢复'} · 剩余 ${state.injured} 个月</strong><span>${d.description||'正在接受康复治疗。'}${d.effect?`<br>能力影响：${d.effect}`:''}</span>`;
}
function legacyV4_awardImage(name){return AWARD_IMAGES[name]||AWARD_IMAGES.DEFAULT}
function legacyV4_renderAwardShowcaseA(){
  const el=$('#award-showcase'),t=state.trophies?.[0];if(!t){el.classList.add('hidden');el.innerHTML='';return}
  el.classList.remove('hidden');el.innerHTML=`<img src="${t.image||awardImage(t.name)}" alt="${t.name}奖项图片" onerror="this.style.display='none'"><div class="award-showcase-copy"><p class="eyebrow">LATEST HONOUR · 得奖说明</p><h3>${t.name}</h3><p>${t.reason||'凭借赛季中的杰出表现获得。'}</p><small>${t.season} · 图片来源 Wikimedia Commons</small></div>`;
}

function developmentPool(){
  const keys=attributeKeys(),pool=[...keys],focus=state.profile?.development,styleKeys=STYLE_KEYS[state.profile?.playStyle]||[];
  const focusMap=state.pos==='GK'
    ?{技术:['handling','kicking','throwing'],速度:['reflexes','pace','oneOnOnes'],身体:['physical','aerialReach','handling'],战术:['positioning','command','oneOnOnes']}
    :{技术:['passing','vision','dribbling','ballControl','shooting','finishing'],速度:['pace','acceleration','dribbling'],身体:['physical','stamina','defending'],战术:['vision','positioning','passing','defending']};
  [...(focusMap[focus]||[]),...styleKeys,...styleKeys].forEach(k=>{if(keys.includes(k))pool.push(k)});return pool;
}
function legacyV4_applyMonthlyDevelopment(){
  const old=state.overall,age=state.age;
  if(age>30){
    const chance=clamp(.08+(age-30)*.035,.08,.48);if(Math.random()>=chance)return;
    let pool=state.pos==='GK'?['physical','physical','reflexes','positioning','oneOnOnes']:['pace','pace','physical','physical','dribbling','shooting','defending'];
    const changes={};for(let i=0;i<(Math.random()<.24?2:1);i++){const k=pick(pool);changes[k]=(changes[k]||0)-1}changeAttributes(changes);
    if(state.overall<old)addFeed('年龄曲线下滑',`${age} 岁后恢复与爆发力开始随机下降，综合能力由 ${old} 降至 ${state.overall}。`,'↓');return;
  }
  const base=age<=15?.58:age<=20?.48:age<=24?.30:age<=29?.12:0;
  const bonus=(state.profile?.personality==='自律'?.04:0)+(state.morale>82?.025:0)-(state.fitness<45?.08:0);
  if(Math.random()>=base+bonus||state.overall>=state.potential)return;
  const pool=developmentPool(),changes={},count=age<=20?(Math.random()<.42?3:2):(Math.random()<.45?2:1);
  for(let i=0;i<count;i++){const k=pick(pool);if(state.attributes[k]<100)changes[k]=(changes[k]||0)+1}changeAttributes(changes);
  if(state.overall>old)addFeed('能力提升',`${state.profile?.playStyle||'位置'}专项训练得到回报，综合能力由 ${old} 提升至 ${state.overall}。`,'↑');
}
function styleMatchMods(){
  const s=state.profile?.playStyle||'',m={goal:1,assist:1,key:0,dribble:0,tackle:0,save:0,pass:0,aerial:0};
  if(['抢点射手','内切得分手','影子前锋'].includes(s))m.goal+=.22;
  if(['传统边锋','边路组织者','古典前腰','自由组织者','进攻边卫'].includes(s)){m.assist+=.2;m.key++}
  if(['速度突击手','内切得分手','自由组织者'].includes(s))m.dribble+=2;
  if(['抢球机器','防守屏障','盯人中卫','防守边卫'].includes(s))m.tackle+=2;
  if(['支点中锋','制空中卫'].includes(s))m.aerial+=2;
  if(['控球组织者','节拍器','拖后组织者','出球中卫','内收边卫','出球门将'].includes(s))m.pass+=5;
  if(s==='门线门将')m.save+=1;if(s==='清道夫门将')m.pass+=2;return m;
}
function legacyV4_simulateMonth(){
  const youth=state.age<16,fixtures=youth?rand(2,4):rand(3,5);let apps=0,goals=0,assists=0,clean=0;const monthReports=[];
  for(let i=0;i<fixtures;i++){const r=simulateFixture(youth?'青年联赛':leagueForClub(state.club)?.short||'国内联赛',pickDomesticOpponent(),false);monthReports.push(r);if(r.appeared){apps++;goals+=r.goals;assists+=r.assists;clean+=r.cleanSheet?1:0}}
  const perf=goals*4+assists*3+clean*2+apps;state.trust=clamp(state.trust+rand(-2,2)+Math.floor(perf/6),10,100);state.fitness=clamp(state.fitness-rand(6,14)+rand(2,7),20,100);state.morale=clamp(state.morale+rand(-4,5)+(goals+assists+clean>1?3:0),10,100);
  applyMonthlyDevelopment();const summary=state.pos==='GK'?`${apps} 次出场，完成 ${clean} 场零封。`:`${apps} 次出场，贡献 ${goals} 球 ${assists} 助攻。`;addFeed(`${MONTHS[state.month]}战报`,summary,goals+assists+clean?'★':'›');
  const standout=monthReports.filter(r=>r.appeared).sort((a,b)=>(b.rating||0)-(a.rating||0))[0];if(standout&&standout.rating>=8)addFeed('单场高光',`${standout.competition}对阵 ${standout.opponent}：${reportPerformanceText(standout)}，获评 ${standout.rating}。`,'★');updateValue();
}
function nextMatchId(){state.flags.matchSequence=(Number(state.flags.matchSequence)||0)+1;return`${state.year}-${state.month}-${state.flags.matchSequence}`}
function calculateMatchContractBonus(report){
  if(state.age<16||!report?.appeared)return 0;const terms=ensureContractTerms();return terms.appearanceBonus+(Number(report.goals)||0)*terms.goalBonus+(report.cleanSheet?terms.cleanSheetBonus:0);
}
function refreshContractBonus(report){
  const amount=calculateMatchContractBonus(report),previous=Number(report.contractBonus)||0,delta=amount-previous;if(!delta)return;
  const s=seasonStats();s.bonusEarnings=(Number(s.bonusEarnings)||0)+delta;state.careerBonusEarnings=(Number(state.careerBonusEarnings)||0)+delta;report.contractBonus=amount;
}
function accrueContractBonuses(report){
  refreshContractBonus(report);
}
function poissonGoals(lambda){
  const limit=Math.exp(-lambda);let product=1,count=0;do{count++;product*=Math.random()}while(product>limit&&count<10);return count-1;
}
function teamStrengthValue(team){return Number(team?.strength??team?.[3])||70}
function teamNameValue(team){return team?.name||team?.[0]||'未知球队'}
function teamFormModifier(formStore,name){
  const values=(formStore?.[name]||[]).slice(-5);if(!values.length)return 0;const average=values.reduce((sum,value)=>sum+value,0)/values.length;return clamp((average-1.35)*2.2,-3.2,3.2);
}
function pushTeamForm(formStore,name,points){
  if(!formStore||!name)return;formStore[name]=[...(formStore[name]||[]),points].slice(-6);
}
function simulateClubScore(homeTeam,awayTeam,{formStore=null}={}){
  const homeName=teamNameValue(homeTeam),awayName=teamNameValue(awayTeam),homeBase=teamStrengthValue(homeTeam),awayBase=teamStrengthValue(awayTeam),homeForm=teamFormModifier(formStore,homeName),awayForm=teamFormModifier(formStore,awayName);
  let homeRating=homeBase+2.7+homeForm,awayRating=awayBase+awayForm;const rawEdge=homeRating-awayRating,clearUnderdog=Math.abs(rawEdge)>=7;
  const shock=clearUnderdog&&Math.random()<clamp(.045+Math.abs(rawEdge)*.0025,.045,.12);
  if(shock){if(rawEdge>0)awayRating+=rand(7,12);else homeRating+=rand(7,12)}
  const edge=homeRating-awayRating,homeGoals=poissonGoals(clamp(1.36+edge*.035,.28,3.15)),awayGoals=poissonGoals(clamp(1.04-edge*.031,.22,2.85));
  const homeWon=homeGoals>awayGoals,awayWon=awayGoals>homeGoals,upset=(homeWon&&homeBase+4<awayBase)||(awayWon&&awayBase+4<homeBase);
  return{homeGoals,awayGoals,upset,shock,rawEdge,homeRating,awayRating};
}
function simulateFixture(competition,opponent,isContinental=false,statBucketOverride=null){
  const s=seasonStats(),a=state.attributes,m=styleMatchMods(),youth=state.age<16,bucket=statBucketOverride||(isContinental?'continental':'league');
  const form=recentFormScore(),squadBenchmark=youth?50:state.clubStrength-20,qualityGap=state.overall-squadBenchmark,endurance=a.stamina??a.physical??50;
  const requestPenalty=state.flags?.frozenOut?.24:state.flags?.transferRequested?.07:0,transitionPenalty=positionTransitionPenalty(),roleBoost=youth?0:contractRoleBoost();
  const chance=clamp((youth?.62:.46)+qualityGap*.035+(state.trust-50)*.006+(form-6.5)*.09+(endurance-50)*.0015+roleBoost-(isContinental?.07:0)-requestPenalty-transitionPenalty,.02,.98);
  const appeared=state.injured<=0&&!state.flags?.playerUnavailableThisMonth&&Math.random()<chance,startChance=clamp(.34+qualityGap*.04+(state.trust-50)*.007+(form-6.5)*.12+roleBoost*.75-(isContinental?.04:0)-transitionPenalty*1.25,.03,.94),start=appeared&&Math.random()<startChance,minutes=appeared?(start?rand(68,95):rand(8,35)):0;
  const home=Math.random()<.5,playerTeam=clubByName(state.club)||[state.club,state.clubCode,state.clubColor,state.clubStrength],score=home?simulateClubScore(playerTeam,opponent,{formStore:s.teamForm}):simulateClubScore(opponent,playerTeam,{formStore:s.teamForm});let teamGoals=home?score.homeGoals:score.awayGoals,oppGoals=home?score.awayGoals:score.homeGoals;
  let goals=0,assists=0,cleanSheet=false,rating=null,shots=0,keyPasses=0,tackles=0,interceptions=0,saves=0,passAccuracy=0,dribbles=0,aerials=0;
  if(appeared){
    const full=minutes/90;
    if(state.pos==='GK'){
      const saveSkill=a.reflexes*.42+a.oneOnOnes*.28+a.aerialReach*.18+a.positioning*.12,distribution=a.kicking*.45+a.throwing*.30+a.command*.25;
      saves=Math.max(1,Math.round((rand(2,6)+(saveSkill-50)/18+m.save)*full));aerials=Math.max(0,Math.round((rand(0,3)+(a.aerialReach-45)/20)*full));
      passAccuracy=clamp(Math.round(57+(distribution-45)*.34+m.pass+rand(-5,6)),45,96);cleanSheet=oppGoals===0;
      rating=5.62+saves*.15+aerials*.035+(cleanSheet?.72:0)+(passAccuracy-65)*.008-(oppGoals*.13)+(a.command-50)*.003+(state.profile.playStyle==='门线门将'?saves*.025:0);
    }else{
      const finishingSkill=a.finishing*.58+a.shooting*.27+a.positioning*.15,creation=a.vision*.55+a.passing*.30+a.ballControl*.15,carry=a.dribbling*.45+a.ballControl*.32+a.acceleration*.23,defence=a.defending*.58+a.positioning*.28+a.physical*.14;
      shots=Math.max(0,Math.round((rand(0,2)+(a.shooting+a.positioning-90)/46+(['ST','LW','RW'].includes(state.pos)?1:0))*full));
      keyPasses=Math.max(0,Math.round((rand(0,2)+(creation-45)/22+m.key)*full));tackles=Math.max(0,Math.round((rand(0,3)+(defence-45)/18+m.tackle)*full));
      interceptions=Math.max(0,Math.round((rand(0,2)+(a.defending+a.positioning-90)/42)*full));dribbles=Math.max(0,Math.round((rand(0,3)+(carry-45)/18+m.dribble)*full));aerials=Math.max(0,Math.round((rand(0,2)+(a.physical+a.positioning-90)/42+m.aerial)*full));
      passAccuracy=clamp(Math.round(66+(a.passing*.58+a.ballControl*.26+a.vision*.16-45)*.32+m.pass+rand(-5,6)),48,97);
      const posGoal={ST:.19,LW:.14,RW:.14,CAM:.11,CM:.055,CDM:.025,LB:.018,RB:.018,CB:.025}[state.pos]||.05;
      const posAssist={ST:.10,LW:.14,RW:.14,CAM:.17,CM:.12,CDM:.07,LB:.10,RB:.10,CB:.025}[state.pos]||.06;
      if(Math.random()<clamp((posGoal+(finishingSkill-45)/285)*m.goal,.01,.60))goals++;if(goals&&Math.random()<clamp(.045+(a.finishing-50)/650,.03,.13))goals++;
      if(Math.random()<clamp((posAssist+(creation-45)/330)*m.assist,.01,.50))assists++;teamGoals=Math.max(teamGoals,goals,assists);
      if(state.pos==='ST')rating=5.7+goals*.92+assists*.48+shots*.055+aerials*.035;
      else if(['LW','RW','CAM'].includes(state.pos))rating=5.72+goals*.78+assists*.62+keyPasses*.07+dribbles*.045;
      else if(state.pos==='CM')rating=5.72+goals*.55+assists*.55+keyPasses*.075+tackles*.04+(passAccuracy-70)*.012;
      else if(state.pos==='CDM')rating=5.72+assists*.4+tackles*.075+interceptions*.09+(passAccuracy-70)*.01+(oppGoals===0?.18:0);
      else rating=5.7+goals*.52+assists*.48+tackles*.07+interceptions*.09+aerials*.05+(oppGoals===0?.34:0)-(oppGoals>=3?.28:0);
    }
    const transitionMistake=transitionPenalty>0&&Math.random()<transitionPenalty*.8;
    if(transitionMistake&&['GK','CB','LB','RB','CDM'].includes(state.pos))oppGoals++;
    if(transitionMistake)passAccuracy=Math.max(35,passAccuracy-rand(3,8));
    const finalCleanSheet=state.pos==='GK'&&oppGoals===0;if(state.pos==='GK'&&cleanSheet&&!finalCleanSheet)rating-=.72;cleanSheet=finalCleanSheet;
    rating=clamp(rating+Math.random()*.75+(teamGoals>oppGoals?.18:teamGoals<oppGoals?-.12:0)+(endurance-50)*full*.002-transitionPenalty*2.2-(transitionMistake?.32:0),4.5,10);
    const appearance={start,minutes,goals,assists,cleanSheet,rating},oldApps=s.apps,oldRating=+s.rating||0;s.apps++;if(start)s.starts++;s.minutes+=minutes;s.goals+=goals;s.assists+=assists;if(cleanSheet)s.cleanSheets++;s.rating=((oldRating*oldApps+rating)/(oldApps+1)).toFixed(2);
    ensureSeasonBreakdown(s);const stint=currentSeasonStint(s);addAppearanceToLine(s.stats[bucket],appearance);addAppearanceToLine(s.stats.total,appearance);addAppearanceToLine(stint.stats[bucket],appearance);addAppearanceToLine(stint.stats.total,appearance);syncStintFlatStats(stint);
  }
  rating=rating?+rating.toFixed(1):null;const result=teamGoals>oppGoals?'胜':teamGoals<oppGoals?'负':'平';
  if(bucket==='league'&&!youth){const record=currentTeamLeagueRecord(s);record.played++;record.gf+=teamGoals;record.ga+=oppGoals;if(result==='胜'){record.wins++;record.points+=3}else if(result==='平'){record.draws++;record.points++}else record.losses++}
  pushTeamForm(s.teamForm,state.club,result==='胜'?3:result==='平'?1:0);pushTeamForm(s.teamForm,opponent[0],result==='负'?3:result==='平'?1:0);
  const strengthGap=state.clubStrength-opponent[3],upset=(result==='胜'&&strengthGap<=-5)||(result==='负'&&strengthGap>=5);
  const report={matchId:nextMatchId(),season:currentSeason(),date:MONTHS[state.month],monthIndex:state.month,competition,statBucket:bucket,club:state.club,clubCode:state.clubCode,clubColor:state.clubColor,position:state.pos,opponent:opponent[0],opponentCode:opponent[1],opponentColor:opponent[2],appearanceChance:+chance.toFixed(2),home,teamGoals,oppGoals,result,appeared,start,minutes,goals,assists,cleanSheet,rating,shots,keyPasses,tackles,interceptions,saves,passAccuracy,dribbles,aerials,upset,upsetShock:score.shock,highlight:upset||appeared&&(rating>=8||goals+assists>=2||cleanSheet&&rating>=7.5)};
  accrueContractBonuses(report);state.matchReports.unshift(report);state.matchReports=state.matchReports.slice(0,80);return report;
}
function reportPerformanceText(r){
  if(!r.appeared)return'进入名单但未出场';let text;
  if((r.position||state.pos)==='GK')text=`${r.saves||0} 次扑救 · ${r.cleanSheet?'零封 · ':''}传球成功率 ${r.passAccuracy||0}%`;
  else if(['ST','LW','RW','CAM'].includes(r.position||state.pos))text=`${r.goals} 球 ${r.assists} 助攻 · ${r.shots||0} 射门 · ${r.keyPasses||0} 次关键传球`;
  else if(['CM','CDM'].includes(r.position||state.pos))text=`${r.assists} 助攻 · ${r.keyPasses||0} 次关键传球 · ${r.tackles||0} 次抢断 · 传球 ${r.passAccuracy||0}%`;
  else text=`${r.tackles||0} 次抢断 · ${r.interceptions||0} 次拦截 · ${r.aerials||0} 次争顶${r.cleanSheet?' · 零封':''}`;
  return`${text}${r.shootout?` · ${r.shootout}`:''}${r.decisionSummary?` · ${r.decisionSummary}`:''}`;
}
function renderMatchReports(){
  const reports=(state.matchReports||[]).slice(0,3);$('#report-count').textContent=`近 ${reports.length} 场`;
  $('#match-reports').innerHTML=reports.length?reports.map(r=>{const club=r.club||state.club,clubData=clubByName(club)||[club,r.clubCode||state.clubCode,r.clubColor||state.clubColor,70],opponentData=clubByName(r.opponent)||[r.opponent,r.opponentCode||'OPP',r.opponentColor||'#52675b',70],homeTeam=r.home?matchTeamHtml(clubData,r.international&&club===state.country):matchTeamHtml(opponentData,r.international&&r.opponent===state.country),awayTeam=r.home?matchTeamHtml(opponentData,r.international&&r.opponent===state.country):matchTeamHtml(clubData,r.international&&club===state.country);return `<div class="match-report ${r.highlight?'highlight':''}"><div class="match-fixture"><div class="match-team">${homeTeam}</div><div class="match-score">${r.home?r.teamGoals:r.oppGoals}–${r.home?r.oppGoals:r.teamGoals}<small>${r.result}${r.upset?' · 爆冷':''} · ${r.competition}</small></div><div class="match-team away">${awayTeam}</div></div><div class="match-detail"><p>${r.appeared?`${r.start?'首发':'替补'} · ${r.minutes} 分钟 · ${reportPerformanceText(r)}`:`进入名单 · 未获出场（预计出场概率 ${Math.round((r.appearanceChance||0)*100)}%）`}</p></div><div class="match-rating">${r.rating?`<b>${r.rating.toFixed(1)}</b><small>${r.highlight?'单场高光':'位置化评分'}</small>`:'<b>—</b><small>未出场</small>'}</div></div>`}).join(''):'<div class="empty-state">推进时间后，这里会显示最近三场的位置化表现。</div>';
}

const INJURIES=[
  {name:'轻度肌肉疲劳',months:[1,1],weight:18,desc:'连续高负荷导致肌纤维疲劳，无结构性撕裂。',loss:{stamina:2,physical:1,pace:1},permanent:0},
  {name:'踝关节外侧韧带扭伤',months:[1,2],weight:15,desc:'变向时踝关节内翻，影响启动与支撑。',loss:{acceleration:2,pace:1,ballControl:1,physical:1},permanent:0},
  {name:'腘绳肌二级拉伤',months:[2,3],weight:13,desc:'大腿后侧肌纤维部分撕裂，冲刺能力明显受限。',loss:{acceleration:3,pace:2,stamina:1,physical:1},permanent:1},
  {name:'内收肌损伤',months:[1,2],weight:11,desc:'腹股沟区域拉伤，横向移动和射门发力受限。',loss:{physical:2,shooting:1,finishing:1},permanent:0},
  {name:'膝内侧副韧带损伤',months:[3,4],weight:8,desc:'膝关节受到外翻应力，需要固定和力量重建。',loss:{acceleration:2,defending:2,positioning:1,physical:2},permanent:1},
  {name:'第五跖骨骨折',months:[3,4],weight:5,desc:'足部应力集中造成骨折，必须等待影像学愈合。',loss:{pace:2,acceleration:2,ballControl:2,physical:1},permanent:1},
  {name:'脑震荡',months:[1,1],weight:6,desc:'头部碰撞后出现短暂神经症状，必须通过分级复赛流程。',loss:{positioning:2,vision:2,passing:1,reflexes:2,command:1},permanent:0},
  {name:'前十字韧带撕裂',months:[7,9],weight:2,desc:'膝关节稳定结构严重受损，需要手术和长期康复。',loss:{pace:3,acceleration:4,stamina:2,physical:3,dribbling:2,defending:1,positioning:1},permanent:3,potential:1},
  {name:'跟腱断裂',months:[6,8],weight:1,desc:'跟腱连续性中断，爆发力与蹬地能力受到长期影响。',loss:{pace:4,acceleration:5,physical:4,stamina:2},permanent:4,potential:2},
  {name:'生长期膝前疼痛',months:[1,2],weight:10,maxAge:16,desc:'快速生长阶段牵拉胫骨结节，需要控制跑跳负荷。',loss:{stamina:2,physical:2,acceleration:1},permanent:0},
  {name:'手指骨折',months:[2,2],weight:13,pos:'GK',desc:'扑救近距离射门时手指受力过伸，影响接球稳定。',loss:{handling:4,reflexes:1},permanent:1},
  {name:'肩关节脱位',months:[3,4],weight:6,pos:'GK',desc:'侧扑落地导致肩关节脱位，影响伸展扑救和手抛球。',loss:{handling:3,aerialReach:3,throwing:2,physical:2,oneOnOnes:1},permanent:1}
];
function legacyV4_eligibleInjuries(){
  return INJURIES.filter(i=>(!i.pos||i.pos===state.pos)&&(!i.maxAge||state.age<=i.maxAge)&&Object.keys(i.loss).some(k=>k in state.attributes));
}
function weightedPick(items){
  const total=items.reduce((n,x)=>n+x.weight,0),r=Math.random()*total;let p=0;for(const x of items){p+=x.weight;if(r<=p)return x}return items[0];
}
function lossForPosition(loss){const out={};Object.entries(loss).forEach(([k,v])=>{if(k in state.attributes)out[k]=v});return out}
function lossText(loss){return Object.entries(loss).map(([k,v])=>`${ATTRIBUTE_LABELS[k]} -${v}`).join('、')}
function legacyV4_startInjury(injury,months,accelerated){
  const loss=lossForPosition(injury.loss),extra=accelerated?1:0,applied={};Object.entries(loss).forEach(([k,v])=>applied[k]=v+extra);
  const permanent=Math.max(0,injury.permanent+(accelerated&&injury.months[1]>=3?1:0)),restore={};
  Object.entries(applied).forEach(([k,v])=>restore[k]=Math.max(0,v-Math.min(permanent,v)));
  const negative={};Object.entries(applied).forEach(([k,v])=>negative[k]=-v);changeAttributes(negative);
  state.potential=clamp(state.potential-(injury.potential||0)-(accelerated&&injury.potential?1:0),40,100);recalculateOverall();
  if(injury.months[1]>=6)state.seriousInjuries=(state.seriousInjuries||0)+1;
  state.injured=Math.max(1,months-(accelerated?1:0));state.fitness=clamp(state.fitness-rand(accelerated?28:18,accelerated?42:32),8,100);state.morale=clamp(state.morale-8,0,100);
  state.injuryDetail={name:injury.name,description:injury.desc,effect:`${lossText(applied)}${permanent?`；其中最多 ${permanent} 点可能成为长期损失`:''}`,restore,plan:accelerated?'加速复出':'完整康复'};
  if(accelerated){state.trust=clamp(state.trust+3,0,100);state.flags.rushedReturn=true}
  addFeed('伤病报告',`${injury.name}，选择${state.injuryDetail.plan}，预计缺席 ${state.injured} 个月。${state.injuryDetail.effect}`,'✚');renderAll();
  showInfo('康复计划已确定',accelerated?'你缩短了恢复期，但属性恢复更少，未来三个月复发风险更高。':'你将完成完整康复测试；暂时损失会在复出时恢复，严重伤病仍可能留下长期影响。',accelerated?'!':'+');
}
function triggerInjury(){
  const injury=weightedPick(eligibleInjuries()),months=rand(injury.months[0],injury.months[1]);
  addEvent('遭遇伤病',`${injury.name}：${injury.desc} 初步预计休战 ${months} 个月。`,'✚');
  showInjuryDecision(injury,months,true);playSfx('injury');
  return true;
}
function finishRecovery(){
  const d=state.injuryDetail;if(d?.restore)changeAttributes(d.restore);if(state.flags.rushedReturn){state.flags.rushedReturnMonths=3;delete state.flags.rushedReturn}
  addFeed('通过复出测试',`${d?.name||'伤病'}康复完成。${d?.restore&&Object.keys(d.restore).length?'可恢复的能力已经回升，长期损失保留。':'医疗组确认可以完整合练。'}`,'+');state.injuryDetail=null;
}
function legacyV4_advanceTwoMonths(){
  if(state.retired)return;let finishedSeason=null;state.flags.transferWindowOpen=false;
  for(let step=0;step<2&&!state.retired;step++){
    if([0,5,10,11].includes(state.month))state.flags.transferWindowOpen=true;
    if(state.injured>0){state.injured--;state.fitness=clamp(state.fitness+rand(12,21),0,100);state.morale=clamp(state.morale+rand(-3,4),0,100);if(!state.injured)finishRecovery();else addFeed('康复训练',`${state.injuryDetail?.name||'伤病'}恢复中，预计还需 ${state.injured} 个月。`,'+')}
    else simulateMonth();
    simulateContinentalMonth();state.month++;if(state.month>=12){finishedSeason={...seasonStats()};endSeason(true)}
  }
  if(state.retired)return;renderAll();if(finishedSeason)showInfo('两个月与赛季总结',`${finishedSeason.season} 赛季结束：${finishedSeason.apps} 次出场，${state.pos==='GK'?`${finishedSeason.cleanSheets} 场零封`:`${finishedSeason.goals} 球 ${finishedSeason.assists} 助攻`}。新赛季已经开始。`,'✓');else maybeRandomEvent();
}
function legacyV4_maybeRandomEvent(){
  const profile=state.profile||{},roll=Math.random();
  const injuryRisk=(profile.personality==='自律'?.042:.058)+(state.flags.overloaded?.035:0)+(state.flags.rushedReturnMonths?.065:0)+(state.fitness<45?.04:0)-(profile.development==='身体'?.01:0);
  if(state.flags.rushedReturnMonths){state.flags.rushedReturnMonths--;if(!state.flags.rushedReturnMonths)delete state.flags.rushedReturnMonths}
  if(roll<injuryRisk){state.flags.overloaded=false;delete state.flags.rushedReturnMonths;triggerInjury();return}
  const transferChance=profile.agentStyle==='进取'?.16:profile.agentStyle==='忠诚'?.055:.10;
  if(state.flags.transferWindowOpen&&state.age>=16&&roll<injuryRisk+transferChance){state.flags.transferWindowOpen=false;transferOffer();return}
  state.flags.transferWindowOpen=false;if(roll<injuryRisk+transferChance+.58)triggerCareerEvent();
}

function seasonPerformanceScore(){
  const s=seasonStats(),rating=+s.rating||6.4;if(!s.apps)return 0;
  if(state.pos==='GK')return clamp((rating-6.3)*2+s.cleanSheets/8+Math.min(s.apps,30)/30,0,7);
  const positionFactor=state.pos==='ST'?1:['LW','RW','CAM'].includes(state.pos)?.82:['CM','CDM'].includes(state.pos)?.55:.35;
  return clamp((rating-6.3)*2+(s.goals*positionFactor+s.assists*.7)/10+Math.min(s.apps,30)/35,0,8);
}
function worldRank(name){
  if(UEFA_REFERENCE_RANK[name])return UEFA_REFERENCE_RANK[name];
  const sorted=LEAGUES.flatMap(l=>l.clubs).slice().sort((a,b)=>b[3]-a[3]||a[0].localeCompare(b[0]));return sorted.findIndex(c=>c[0]===name)+1;
}
function legacyV4_transferOffers(){
  const currentCountry=leagueForClub(state.club)?.country,perf=seasonPerformanceScore(),youthUpside=state.age<=22?Math.min(5,(state.potential-state.overall)*.18):0,marketLevel=state.overall+perf+youthUpside;
  let clubs=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c,league:l}))).filter(x=>x.club[0]!==state.club);
  if(state.age<18)clubs=clubs.filter(x=>x.league.country===currentCountry);
  clubs=clubs.filter(x=>{const strength=x.club[3],required=strength-(strength>=90?10:strength>=82?13:16),floor=state.age>=33?marketLevel-20:marketLevel-13;return marketLevel>=required&&strength>=Math.max(66,floor)&&strength<=marketLevel+22});
  if(!clubs.length)clubs=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c,league:l}))).filter(x=>x.club[0]!==state.club&&(!currentCountry||state.age>=18||x.league.country===currentCountry)).sort((a,b)=>Math.abs(a.club[3]-(marketLevel+8))-Math.abs(b.club[3]-(marketLevel+8))).slice(0,6);
  clubs.sort((a,b)=>(Math.abs(a.club[3]-(marketLevel+9))+Math.random()*7)-(Math.abs(b.club[3]-(marketLevel+9))+Math.random()*7));
  return clubs.slice(0,Math.min(clubs.length,rand(2,4))).map(x=>{
    const club=x.club,contractYears=Math.max(1,state.contractEnd-state.year),fee=Math.round(state.value*(.9+Math.random()*.22)*(1+Math.min(4,contractYears)*.025));
    const wage=Math.min(750000,Math.max(600,Math.round(Math.exp((state.overall-55)/6.5)*800*(club[3]/82)*(1+perf*.035)/100)*100));
    return {club,league:x.league,wage,fee,rank:worldRank(club[0])};
  }).sort((a,b)=>a.rank-b.rank);
}
function legacyV4_transferOffer(){
  if(state.age<16){addFeed('转会规则限制','未满 16 岁，俱乐部不会为你安排职业转会。','×');return}
  const offers=transferOffers();if(!offers.length)return;
  const restriction=state.age<18?'根据未成年球员规则，本次仅出现同国俱乐部报价。':'报价由球员能力、位置数据、年龄与发展空间和俱乐部参考排名共同生成。';
  const extra=`<div class="offer-list">${offers.map(o=>`<div class="offer-box"><div class="crest" style="--club:${o.club[2]}">${crestContent(o.club)}</div><div><strong>${o.club[0]}</strong><small>${o.league.name} · 周薪 ${weeklySalaryText(o.wage)} · 报价 ${money(o.fee)}</small></div><div class="offer-rank">#${o.rank}<small>参考排名</small></div></div>`).join('')}</div>`;
  const actions=offers.map((o,i)=>[`加盟 ${o.club[0]}`,()=>completeTransfer(o),i===0,`报价 ${money(o.fee)} · 周薪 ${weeklySalaryText(o.wage)} · 队内竞争重新计算`]);
  actions.push(['全部拒绝',()=>{state.morale=clamp(state.morale+2,0,100);state.trust=clamp(state.trust+4,0,100);addFeed('留队决定',`你拒绝 ${offers.length} 份报价，继续留在 ${state.club}。`,'↩');closeModal();renderAll()},false,'士气 +2 · 教练信任 +4 · 保留当前队内地位']);
  showModal({icon:'↗',kicker:'转会窗 · 多队竞价',title:`${offers.length} 家俱乐部正式求购`,body:restriction,extra,locked:true,actions});
}
function legacyV4_completeTransfer(offer){
  const c=offer.club,old=state.club,oldLeague=leagueForClub(old);state.club=c[0];state.clubCode=c[1];state.clubColor=c[2];state.clubStrength=c[3];state.wage=offer.wage;state.value=Math.max(state.value,Math.round(offer.fee*.93));
  state.trust=clamp(48+(state.overall-(c[3]-12))*2,25,72);state.contractEnd=state.year+rand(3,5);if(oldLeague&&offer.league.country!==oldLeague.country)state.flags.needsAdaptation=true;
  seasonStats().club=c[0];addFeed('转会完成',`${state.name} 以约 ${money(offer.fee)} 的报价从 ${old} 转会加盟 ${c[0]}。`,'↗');addEvent('完成转会',`离开 ${old}，加盟参考排名第 ${offer.rank} 的 ${c[0]}。`,'↗');closeModal();renderAll();toast('转会已完成');
}
function realisticMarketValue(){
  if(state.age<16)return 0;const s=seasonStats(),perf=seasonPerformanceScore();
  const baseMillions=.45*Math.exp((state.overall-55)/7);
  let ageFactor=state.age<=16?.55:state.age<=18?.88:state.age<=21?1.25:state.age<=24?1.36:state.age<=27?1.18:state.age<=29?1:state.age===30?.84:Math.max(.16,.78-(state.age-30)*.10);
  const potentialFactor=state.age<=23?clamp(1+(state.potential-state.overall)*.025,1,1.55):1;
  const clubFactor=clamp(.64+(state.clubStrength-66)*.022,.62,1.32),contractYears=Math.max(0,state.contractEnd-state.year);
  const contractFactor=contractYears<=0?.55:contractYears===1?.72:contractYears===2?.9:contractYears===3?1:contractYears===4?1.08:1.14;
  const posFactor={GK:.82,CB:.9,LB:.88,RB:.88,CDM:.94,CM:1,CAM:1.08,LW:1.1,RW:1.1,ST:1.12}[state.pos]||1;
  const performanceFactor=clamp(.78+perf*.075+(s.apps>=24?.08:0),.72,1.5),injuryFactor=state.injured?.74:Math.max(.78,1-(state.seriousInjuries||0)*.045);
  let raw=baseMillions*ageFactor*potentialFactor*clubFactor*contractFactor*posFactor*performanceFactor*injuryFactor*100;
  raw=clamp(raw,5,35000);const step=raw<100?5:raw<1000?10:raw<5000?50:100;return Math.round(raw/step)*step;
}
function updateValue(){
  state.value=realisticMarketValue();if(state.age<16)return;
  const perf=seasonPerformanceScore(),suggested=Math.min(750000,Math.max(600,Math.round(Math.exp((state.overall-55)/6.5)*800*(state.clubStrength/82)*(1+perf*.035)/100)*100));
  state.wage=Math.max(state.wage||0,suggested);
}
function legacyV4_applyEventEffects(e){
  if(e.trust)state.trust+=e.trust;if(e.fitness)state.fitness+=e.fitness;if(e.morale)state.morale+=e.morale;
  if(e.overall){const changes={};attributeKeys().forEach(k=>changes[k]=e.overall);changeAttributes(changes)}
  if(e.potential)state.potential=clamp(state.potential+e.potential,40,100);
  if(e.valuePct)state.value=Math.round(state.value*e.valuePct);if(e.wagePct)state.wage=Math.max(1,Math.round(state.wage*e.wagePct));if(e.flag)state.flags[e.flag]=true;if(e.clearFlag)delete state.flags[e.clearFlag];
  if(e.relation)Object.entries(e.relation).forEach(([k,v])=>state.relationships[k]=clamp((state.relationships[k]||50)+v,0,100));recalculateOverall();
}
function awardReason(name,s){
  if(name==='金球奖')return`${s.season} 赛季以 ${s.apps} 次出场、${s.goals} 球 ${s.assists} 助攻和 ${s.rating} 的场均评分，在顶级舞台展现世界级影响力。`;
  if(name==='欧洲金靴奖')return`${s.season} 赛季攻入 ${s.goals} 球，成为欧洲联赛最具效率的得分手之一。`;
  if(name==='欧洲金童奖')return`${state.age} 岁便达到 ${state.overall} 的综合能力，并在 ${s.apps} 场比赛中交出 ${s.goals} 球 ${s.assists} 助攻。`;
  return`${s.season} 赛季完成 ${s.cleanSheets} 场零封，场均评分 ${s.rating}，扑救与稳定性获得认可。`;
}
function legacyV4_evaluateAwards(s){
  const won=[],output=state.pos==='GK'?s.cleanSheets*3+s.apps+(+s.rating||0)*2:s.goals*4+s.assists*2+s.apps*.3+(+s.rating||0)*2;
  if(state.age<=21&&output>55&&state.overall>=70)won.push('欧洲金童奖');
  if(state.pos==='GK'&&s.cleanSheets>=12&&state.overall>=78)won.push('雅辛奖 · 金手套');
  if(state.pos!=='GK'&&s.goals>=24)won.push('欧洲金靴奖');
  if(state.overall>=88&&output>105)won.push('金球奖');
  won.forEach(name=>{const reason=awardReason(name,s);state.trophies.unshift({name,season:s.season,reason,image:awardImage(name),personal:true});addEvent(`赢得${name}`,reason,'♜');addFeed(`荣膺${name}`,`${state.name} 在颁奖礼上举起奖杯；得奖说明已加入生涯主页。`,'♜')});
}
function legacyV4_renderAwardShowcaseB(){
  const el=$('#award-showcase'),t=state.trophies?.find(x=>x.personal);if(!t){el.classList.add('hidden');el.innerHTML='';return}
  el.classList.remove('hidden');el.innerHTML=`<img src="${t.image||awardImage(t.name)}" alt="${t.name}奖项图片" onerror="this.style.display='none'"><div class="award-showcase-copy"><p class="eyebrow">LATEST PERSONAL HONOUR · 得奖说明</p><h3>${t.name}</h3><p>${t.reason}</p><small>${t.season} · 图片来源 Wikimedia Commons</small></div>`;
}
function renderAwards(){
  $('#award-cards').innerHTML=AWARDS.map(a=>{
    let visual=`<div class="personal-award-visual"><i>${a.icon}</i><img src="${awardImage(a.name)}" alt="${a.name}奖杯图片" loading="lazy" onerror="this.remove()"></div>`,source='<em class="league-image-source">现实奖杯影像 · Wikimedia Commons</em>';
    if(a.type==='league'){
      const league=state?leagueForClub(state.club):LEAGUES[0];
      visual=`<div class="league-trophy-gallery compact-trophy-gallery"><span class="league-trophy-icon" title="${league.name}冠军奖杯"><i>🏆</i><img src="${leagueTrophyImage(league.short)}" alt="${league.short}联赛冠军奖杯图标" loading="lazy" onerror="this.remove()"><small>${league.short}</small></span></div>`;
      source='<em class="league-image-source">赢得联赛后显示对应现实奖杯影像</em>';
    }else if(a.type==='national'){
      const competition=state?.national?.continentalCup||nationalProfile(state?.country||'中国').continentalCup;
      visual=`<div class="league-trophy-gallery national-trophy-gallery compact-trophy-gallery"><span class="league-trophy-icon" title="${competition}冠军标识"><i>🏆</i><img src="${nationalTrophyImage(competition)}" alt="${competition}冠军图标" loading="lazy" onerror="this.remove()"><small>${competition}</small></span></div>`;
      source='<em class="league-image-source">国家队夺冠后显示对应现实奖杯影像</em>';
    }
    const ruleSource=a.sourceUrl?`<a class="award-rule-source" href="${a.sourceUrl}" target="_blank" rel="noopener">${a.source} ↗</a>`:'';
    return`<div class="award-card ${a.type?'league-award-card':''}" data-mark="${a.mark}">${visual}${source}<h3>${a.name}</h3><p>${a.desc}</p><span class="eligibility">${a.rule}</span>${ruleSource}</div>`;
  }).join('');if(!state)return;
  const trophies=Array.isArray(state.trophies)?state.trophies:[];
  $('#trophy-count').textContent=`${trophies.length} 座奖杯`;$('#trophy-list').innerHTML=trophies.length?trophies.map(t=>`<div class="trophy-item"><span class="trophy-item-image ${t.type==='league'||String(t.name).includes('联赛冠军')?'league':t.national?'national':''}"><i>🏆</i><img src="${t.image||awardImage(t.name)}" alt="${t.name}奖杯图标" loading="lazy" onerror="this.remove()"></span><div><strong>${t.name}</strong><small>${t.reason||'随队或个人获得的重要荣誉。'}</small></div><span>${t.season}</span></div>`).join(''):'<div class="empty-state">奖杯柜还空着。继续前进，你会来到这里。</div>';
}
function legacyV4_renderClubs(){
  const l=LEAGUES[activeLeague];$('#club-database').innerHTML=l.clubs.map(c=>`<div class="club-card"><div class="crest" style="--club:${c[2]}">${crestContent(c)}</div><div><strong>${c[0]}</strong><small>${l.name} · 实力 ${c[3]} · 参考排名 #${worldRank(c[0])}</small><div class="stars">${'★'.repeat(Math.max(1,Math.round((c[3]-55)/9)))}${'☆'.repeat(Math.max(0,5-Math.round((c[3]-55)/9)))}</div></div></div>`).join('');
}

/* Version 5: 15-year-old start, global leagues, selectable time scale and season settlement. */
const EXTRA_LEAGUES=[
  {name:'沙特阿拉伯 · Roshn Saudi League',short:'沙特联',country:'沙特阿拉伯',region:'AFC',clubs:[
    ['Al Hilal','HIL','#2365a7',87],['Al Nassr','NAS','#e3c936',86],['Al Ittihad','ITT','#222826',85],['Al Ahli Saudi','AHL','#36945d',84],['Al Qadsiah','QAD','#c93442',82],['Al Shabab','SHA','#eeeeea',80],['Al Ettifaq','ETT','#35905a',79],['Al Taawoun','TAA','#e3c83d',78],['NEOM SC','NEO','#243f63',78],['Al Fateh','FAT','#3270aa',76],['Al Fayha','FAY','#e47c2e',75],['Al Riyadh','RIY','#c9303b',74],['Damac','DAM','#d43b42',73],['Al Khaleej','KHA','#e5cf39',73],['Al Kholood','KHO','#2f7a59',72],['Al Hazem','HAZ','#e4cd38',71],['Al Okhdood','OKH','#d13a43',70],['Al Najma','NAJ','#202724',69]]},
  {name:'美国 / 加拿大 · Major League Soccer',short:'美职联',country:'美国',region:'CONCACAF',clubs:[
    ['Inter Miami CF','MIA','#e9a7b8',82],['Los Angeles FC','LAF','#222725',82],['Columbus Crew','CLB','#e2ca32',81],['FC Cincinnati','CIN','#244b91',80],['Seattle Sounders FC','SEA','#3c8f59',80],['Philadelphia Union','PHI','#243d65',79],['Orlando City SC','ORL','#65468d',79],['New York City FC','NYC','#63a7d6',79],['LA Galaxy','LAG','#e6e6df',78],['San Diego FC','SDG','#24487e',78],['Minnesota United FC','MIN','#7ba7c4',77],['Nashville SC','NSH','#daca37',77],['New York Red Bulls','RBN','#d63b44',77],['Portland Timbers','POR','#426b48',76],['Real Salt Lake','RSL','#9b3041',76],['Atlanta United FC','ATL','#9d2f3b',76],['Austin FC','ATX','#368f52',75],['Charlotte FC','CLT','#65a5d1',75],['Colorado Rapids','COL','#8c3241',75],['Houston Dynamo FC','HOU','#e27d32',75],['CF Montréal','MTL','#315d9b',74],['New England Revolution','NER','#263e72',74],['St. Louis CITY SC','STL','#d74369',74],['Toronto FC','TOR','#d1363f',73],['D.C. United','DCU','#222625',73],['FC Dallas','DAL','#c93641',73],['Chicago Fire FC','CHI','#c6313d',72],['San Jose Earthquakes','SJE','#315d9b',72],['Sporting Kansas City','SKC','#5f98c4',72],['Vancouver Whitecaps FC','VAN','#e8e8e3',78]]},
  {name:'中国 · 中国足球超级联赛',short:'中超',country:'中国',region:'AFC',clubs:[
    ['上海海港','SIP','#d53a41',76],['上海申花','SHS','#315ea2',76],['成都蓉城','CDR','#d63a42',75],['北京国安','BJA','#3e9957',74],['山东泰山','SDT','#e37b2f',74],['浙江俱乐部','ZHE','#3f8a55',72],['天津津门虎','TJT','#4e97c8',72],['河南俱乐部','HEN','#d33b43',70],['云南玉昆','YNY','#d13c42',69],['青岛西海岸','QDX','#d9c438',68],['深圳新鹏城','SZX','#55a1ce',68],['武汉三镇','WHT','#6095b9',68],['青岛海牛','QDH','#3667a3',67],['梅州客家','MZK','#cf3b43',67],['辽宁铁人','LNT','#cf3a42',68],['重庆铜梁龙','CQT','#d33b41',67]]}
];
EXTRA_LEAGUES.forEach(l=>{if(!LEAGUES.some(x=>x.short===l.short))LEAGUES.push(l)});
if(!COUNTRIES.includes('沙特阿拉伯'))COUNTRIES.push('沙特阿拉伯');COUNTRY_CODES['沙特阿拉伯']='sa';

/* Version 8: official 2026/27 Asian leagues and the five major European second tiers. */
const PROMOTION_LEAGUES=[
  {name:'日本 · Meiji Yasuda J1 League',short:'J1联赛',country:'日本',region:'AFC',tier:1,clubs:[
    ['Kashima Antlers','KAS','#c93442',80],['Mito Hollyhock','MIT','#3974b4',68],['Urawa Reds','URA','#d3313d',79],['JEF United Chiba','JEF','#e4c936',69],['Kashiwa Reysol','KAS','#e5ce36',73],['FC Tokyo','FCT','#274f96',75],['Tokyo Verdy','VER','#328c55',72],['FC Machida Zelvia','MAC','#315a99',76],['Kawasaki Frontale','KAW','#65a8d5',78],['Yokohama F. Marinos','YFM','#3978b8',78],['Shimizu S-Pulse','SHI','#ee792e',73],['Nagoya Grampus','NAG','#d53a42',76],['Kyoto Sanga','KYO','#684d92',72],['Gamba Osaka','GAM','#315d9d',76],['Cerezo Osaka','CER','#e68ca8',75],['Vissel Kobe','VIS','#8f3040',81],['Fagiano Okayama','FAG','#79354a',70],['Sanfrecce Hiroshima','SAN','#644994',79],['Avispa Fukuoka','AVI','#243f72',72],['V-Varen Nagasaki','VVA','#ee792e',70]
  ]},
  {name:'韩国 · K League 1',short:'K联赛1',country:'韩国',region:'AFC',tier:1,clubs:[
    ['Gangwon FC','GAN','#e47c2f',72],['Gwangju FC','GWA','#e4c833',72],['Gimcheon Sangmu','GIM','#d53a43',72],['Daejeon Hana Citizen','DAE','#348d57',74],['Bucheon FC 1995','BUC','#c93642',68],['FC Seoul','SEO','#d2343d',77],['FC Anyang','ANY','#684c94',69],['Ulsan HD','ULS','#315b99',80],['Incheon United','INC','#315d9d',73],['Jeonbuk Hyundai Motors','JEO','#32945a',81],['Jeju SK','JEJ','#e8752d',72],['Pohang Steelers','POH','#c8323e',78]
  ]},
  {name:'英格兰 · Sky Bet Championship',short:'英冠',country:'英格兰',region:'UEFA',tier:2,parentShort:'英超',clubs:[
    ['Wolverhampton Wanderers','WOL','#e5a62f',79],['West Ham United','WHU','#7c2944',80],['Burnley','BUR','#7b2745',77],['Blackburn Rovers','BLA','#3977b6',73],['Bolton Wanderers','BOL','#eeeeea',71],['Preston North End','PNE','#eeeeea',71],['Bristol City','BRC','#d53742',72],['Millwall','MIL','#284f91',74],['Charlton Athletic','CHA','#d43a43',70],['Derby County','DER','#eeeeea',72],['Middlesbrough','MID','#d43842',75],['Lincoln City','LIN','#d53742',69],['Norwich City','NOR','#d7c735',74],['West Bromwich Albion','WBA','#315b98',74],['Portsmouth','POR','#315f9f',71],['Queens Park Rangers','QPR','#3978b8',71],['Stoke City','STO','#d43a43',72],['Swansea City','SWA','#eeeeea',72],['Sheffield United','SHU','#d53742',76],['Southampton','SOU','#d63843',77],['Birmingham City','BIR','#315ea0',73],['Wrexham','WRE','#d43842',72],['Watford','WAT','#e1c83a',73],['Luton Town','LUT','#e5792f',71]
  ]},
  {name:'西班牙 · LALIGA HYPERMOTION',short:'西乙',country:'西班牙',region:'UEFA',tier:2,parentShort:'西甲',clubs:[
    ['AD Ceuta FC','CEU','#eeeeea',67],['Albacete BP','ALB','#eeeeea',69],['Burgos CF','BUR','#202725',69],['Cádiz CF','CAD','#e0c936',72],['CD Castellón','CAS','#202725',69],['CD Eldense','ELD','#315f9e',67],['CD Leganés','LEG','#315c99',72],['CD Tenerife','TEN','#315d9b',69],['CE Sabadell','SAB','#3977b6',67],['Celta Fortuna','CLF','#62a7d5',68],['Córdoba CF','COR','#eeeeea',69],['FC Andorra','AND','#315d9c',68],['Girona FC','GIR','#d53a43',76],['Granada CF','GRA','#d63b43',72],['Real Sociedad B','RSB','#397bb9',69],['RCD Mallorca','MLL','#d63a42',75],['Real Oviedo','OVI','#315c9b',73],['Real Sporting','SPG','#d43b43',71],['Real Valladolid','VAD','#694d95',72],['SD Eibar','EIB','#345f9f',72],['UD Almería','ALM','#d53b42',74],['UD Las Palmas','LPA','#e0c736',73]
  ]},
  {name:'德国 · 2. Bundesliga',short:'德乙',country:'德国',region:'UEFA',tier:2,parentShort:'德甲',clubs:[
    ['VfL Wolfsburg','WOB','#34925a',80],['1. FC Heidenheim','FCH','#d43b43',75],['FC St. Pauli','STP','#5f4436',76],['Hannover 96','H96','#348c56',74],['SV Darmstadt 98','SVD','#315b9a',72],['1. FC Kaiserslautern','FCK','#d43a43',73],['Hertha BSC','BSC','#3977b7',75],['1. FC Nürnberg','FCN','#8e303f',72],['VfL Bochum','BOC','#315f9f',75],['Karlsruher SC','KSC','#315d9b',71],['SG Dynamo Dresden','SGD','#e1ca35',70],['Holstein Kiel','KSV','#315b99',72],['Arminia Bielefeld','DSC','#315d9d',71],['1. FC Magdeburg','FCM','#315e9e',70],['Eintracht Braunschweig','EBS','#e1c836',69],['Greuther Fürth','SGF','#359057',69],['VfL Osnabrück','OSN','#684c91',67],['Energie Cottbus','FCE','#d63b43',68]
  ]},
  {name:'意大利 · Serie BKT',short:'意乙',country:'意大利',region:'UEFA',tier:2,parentShort:'意甲',clubs:[
    ['Arezzo','ARE','#8d3040',67],['Ascoli','ASC','#eeeeea',69],['Avellino','AVE','#33905a',69],['Benevento','BEN','#e1ca37',70],['Carrarese','CAR','#6aa7d3',68],['Catanzaro','CAT','#d53a43',71],['Cesena','CES','#202725',70],['Cremonese','CRE','#d43a43',73],['Empoli','EMP','#315c9b',74],['Hellas Verona','VER','#315d9b',75],['Juve Stabia','JST','#e0c936',70],['L.R. Vicenza','VIC','#d43a43',69],['Mantova','MAN','#d43b43',68],['Modena','MOD','#e2c936',70],['Padova','PAD','#eeeeea',69],['Palermo','PAL','#e69ab0',74],['Pisa','PIS','#315d9c',74],['Sampdoria','SAM','#3979b8',73],['Südtirol','SUD','#eeeeea',68],['Virtus Entella','ENT','#315e9e',68]
  ]},
  {name:'法国 · Ligue 2 BKT',short:'法乙',country:'法国',region:'UEFA',tier:2,parentShort:'法甲',clubs:[
    ['Amiens SC','AMI','#202725',69],['FC Annecy','ANN','#d43a43',68],['SC Bastia','BAS','#315d9b',71],['US Boulogne','BOU','#d53a43',67],['Clermont Foot 63','CLE','#8d3042',71],['USL Dunkerque','DUN','#315f9e',69],['Grenoble Foot 38','GRE','#315b99',69],['EA Guingamp','GUI','#d53a43',72],['Stade Lavallois','LAV','#e3c936',69],['Montpellier HSC','MHS','#e8792e',74],['AS Nancy-Lorraine','NAN','#d43a43',69],['Pau FC','PAU','#e0c936',68],['Red Star FC','RED','#33905a',69],['Stade de Reims','REI','#d53b43',75],['Rodez AF','ROD','#d53a43',68],['AS Saint-Étienne','ASS','#349159',75],['FC Metz','MET','#8f3042',74],['FC Nantes','NAN','#e0c836',74]
  ]}
];
PROMOTION_LEAGUES.forEach(l=>{if(!LEAGUES.some(x=>x.short===l.short))LEAGUES.push(l)});
LEAGUES.forEach(l=>{l.tier=l.tier||1;l.initialClubCount=l.initialClubCount||l.clubs.length});
const LEAGUE_BASE_CLUBS=Object.fromEntries(LEAGUES.map(l=>[l.short,l.clubs.map(c=>[...c])]));

const EXTRA_INJURIES=[
  {name:'比目鱼肌拉伤',months:[2,3],weight:10,desc:'小腿深层肌肉在反复加速中受损，跑动耐力和蹬地受限。',loss:{pace:2,physical:3},permanent:1},
  {name:'股四头肌拉伤',months:[2,3],weight:9,desc:'大腿前侧肌纤维损伤，影响射门发力和冲刺。',loss:{shooting:2,pace:2,physical:2},permanent:1},
  {name:'髋屈肌拉伤',months:[1,2],weight:8,desc:'髋部屈曲肌群过载，抬腿、变向和长传动作疼痛。',loss:{pace:1,passing:1,physical:2},permanent:0},
  {name:'耻骨联合炎',months:[3,5],weight:5,desc:'腹股沟长期负荷累积形成慢性疼痛，需要系统减量。',loss:{physical:3,shooting:2,passing:1},permanent:1},
  {name:'高位踝关节扭伤',months:[2,4],weight:6,desc:'下胫腓联合韧带损伤，比普通踝扭伤恢复更慢。',loss:{pace:3,dribbling:2,physical:2},permanent:1},
  {name:'半月板撕裂',months:[3,5],weight:4,desc:'膝关节旋转时半月板受损，转身与急停能力下降。',loss:{pace:2,dribbling:3,defending:1,physical:2},permanent:2},
  {name:'膝关节软骨损伤',months:[4,7],weight:2,desc:'关节软骨受到撞击和磨损，长期负荷管理非常重要。',loss:{pace:3,physical:4,defending:2},permanent:3,potential:1},
  {name:'髌腱炎',months:[2,4],weight:7,desc:'反复起跳和加速导致髌腱过载，爆发与对抗受到影响。',loss:{pace:2,physical:3},permanent:1},
  {name:'跟腱腱病',months:[2,4],weight:6,desc:'跟腱出现慢性负荷反应，必须减少高速跑和跳跃。',loss:{pace:3,physical:2},permanent:1},
  {name:'足底筋膜损伤',months:[1,3],weight:6,desc:'足底组织在持续跑动后疼痛，影响支撑和第一步启动。',loss:{pace:2,physical:1},permanent:0},
  {name:'草地趾',months:[1,2],weight:7,desc:'大脚趾关节过伸，射门支撑和变向时疼痛明显。',loss:{pace:1,shooting:2,dribbling:1},permanent:0},
  {name:'腰椎应力反应',months:[3,5],weight:3,maxAge:22,desc:'年轻球员腰椎在重复伸展负荷下出现骨应力反应。',loss:{physical:4,pace:1,passing:1},permanent:1,potential:1},
  {name:'腰背肌痉挛',months:[1,2],weight:7,desc:'腰背肌肉突然痉挛，转体和对抗动作受到限制。',loss:{physical:2,passing:1},permanent:0},
  {name:'肋骨骨裂',months:[2,3],weight:3,desc:'争顶碰撞造成肋骨骨裂，呼吸和身体对抗疼痛。',loss:{physical:3,defending:1},permanent:0},
  {name:'鼻骨骨折',months:[1,2],weight:4,desc:'高空球碰撞造成鼻骨骨折，短期可佩戴面具复出。',loss:{physical:1,defending:1,positioning:1},permanent:0},
  {name:'肩袖肌腱损伤',months:[2,4],weight:5,pos:'GK',desc:'反复侧扑造成肩袖肌腱损伤，伸手扑救和长距离手抛受限。',loss:{handling:3,physical:2,kicking:1},permanent:1},
  {name:'拇指尺侧副韧带损伤',months:[2,3],weight:7,pos:'GK',desc:'接球时拇指外翻导致韧带损伤，抓球稳定性下降。',loss:{handling:4,reflexes:1},permanent:1},
  {name:'腕舟骨骨折',months:[3,4],weight:3,pos:'GK',desc:'扑救落地时手腕受力，骨折愈合需要较长固定期。',loss:{handling:4,reflexes:2,physical:1},permanent:1}
];
EXTRA_INJURIES.forEach(i=>{if(!INJURIES.some(x=>x.name===i.name))INJURIES.push(i)});

const penaltyEvent=CAREER_EVENT_DECK.find(e=>e.id==='penalty_duty');
if(penaltyEvent)penaltyEvent.choices=[
  {label:'稳健推射右下角',outcome:'你选择成功率更高的低平球。结果将由射门能力、惯用脚与压力共同决定。',effects:{morale:2},custom:s=>resolvePenalty(s,.76,'右下角')},
  {label:'冒险使用勺子点球',outcome:'你尝试高风险的勺子点球；成功会成为经典，失败也会招致更大质疑。',effects:{morale:3},custom:s=>resolvePenalty(s,.58,'勺子')},
  {label:'交给状态更好的队友',outcome:'你把球交给本场状态更好的队友，保留团队稳定，也放弃了成为英雄的机会。',effects:{trust:2,relation:{teammates:7,fans:-2}}}
];
CAREER_EVENT_DECK.push(
  {id:'derby_provocation',category:'match',title:'德比战前的挑衅',icon:'⚡',minAge:17,cooldown:48,maxRepeat:2,body:'对方球员在采访中点名质疑你的能力。媒体希望你立即回应，教练则要求球队保持冷静。',choices:[
    {label:'公开强硬回应',outcome:'你把压力转化成关注度，球迷很兴奋，但比赛中的情绪控制更困难。',effects:{morale:8,relation:{fans:9},fitness:-5}},
    {label:'只在球场回应',outcome:'你拒绝口水战并额外研究对手，战术准备更加充分。',effects:{trust:7,fitness:-4,relation:{coach:5}}},
    {label:'用幽默化解',outcome:'轻松回应缓和了气氛，也让更衣室关系更加团结。',effects:{morale:5,relation:{teammates:7,fans:3}}}]},
  {id:'specialist_coach',category:'coach',title:'私人专项教练提案',icon:'◇',minAge:16,cooldown:48,maxRepeat:2,body:'经纪团队推荐一位私人专项教练，但俱乐部担心训练计划冲突。你需要决定训练控制权。',choices:[
    {label:'聘请私人教练',outcome:'专项能力提升更快，但额外负荷和俱乐部协调成本增加。',effects:{overall:1,fitness:-12,trust:-3,transitionMonths:-2}},
    {label:'完全采用俱乐部方案',outcome:'训练节奏稳定，教练信任提高，但个人偏科改善较慢。',effects:{trust:8,fitness:6}},
    {label:'让双方共同制定计划',outcome:'沟通耗时，却得到兼顾个性和负荷的折中方案。',effects:{potential:1,fitness:3,relation:{coach:4,agent:4}}}]},
  {id:'captain_penalty_choice',category:'match',title:'点球大战第五罚',icon:'◎',minAge:18,cooldown:60,maxRepeat:2,condition:s=>s.pos!=='GK',body:'杯赛进入点球大战，教练询问你愿意承担第几轮。越靠后压力越大，但可能直接决定比赛。',choices:[
    {label:'主动承担第五罚',outcome:'你接受最高压力的位置；命中率取决于射门、沉稳和体能。',effects:{trust:4},custom:s=>resolvePenalty(s,.66,'第五罚',{countsAsOfficialGoal:false})},
    {label:'选择第三罚稳定局势',outcome:'你承担中段主罚，用更稳定的节奏帮助球队。',effects:{trust:3,morale:2},custom:s=>resolvePenalty(s,.78,'第三罚',{countsAsOfficialGoal:false})},
    {label:'专注比赛不主罚',outcome:'你诚实说明当日脚感不佳，避免盲目逞强，但会失去部分关注。',effects:{morale:3,relation:{teammates:4,fans:-3}}}]},
  {id:'transfer_role_promise',category:'transfer',title:'新球队提出战术承诺',icon:'↗',minAge:18,cooldown:54,maxRepeat:2,condition:s=>s.overall>=72,body:'潜在买家提出三种不同规划：立即主力、位置改造，或先轮换适应。每种路线都有相等但方向不同的优势。',choices:[
    {label:'要求立即主力',outcome:'出场承诺更强，但必须承担更高表现压力。',effects:{trust:7,morale:-3,fitness:-7}},
    {label:'接受位置改造',outcome:'战术适应性提高，但原位置熟练度短期波动。',effects:{potential:1,trust:4,overall:-1}},
    {label:'先轮换适应环境',outcome:'身体和心理适应更加平稳，曝光和数据增长较慢。',effects:{fitness:10,morale:6,trust:-2}}]}
);

function applyOfficialPenaltyToStats(report,scored){
  const season=seasonStats(),bucket=report.statBucket||'league',stint=currentSeasonStint(season);ensureSeasonBreakdown(season);ensureStintBreakdown(stint);
  if(report._newPenaltyAppearance){
    const appearance={start:true,minutes:90,goals:scored?1:0,assists:0,cleanSheet:false,rating:report.rating};const oldApps=season.apps,oldRating=+season.rating||0;season.apps++;season.starts++;season.minutes+=90;if(scored)season.goals++;season.rating=((oldRating*oldApps+report.rating)/(oldApps+1)).toFixed(2);addAppearanceToLine(season.stats[bucket],appearance);addAppearanceToLine(season.stats.total,appearance);addAppearanceToLine(stint.stats[bucket],appearance);addAppearanceToLine(stint.stats.total,appearance);syncStintFlatStats(stint);return;
  }
  if(scored){season.goals++;season.stats[bucket].goals++;season.stats.total.goals++;stint.stats[bucket].goals++;stint.stats.total.goals++;syncStintFlatStats(stint)}
}
function bindPenaltyToMatch(scored,label){
  let report=(state.matchReports||[]).find(item=>item.season===currentSeason()&&item.club===state.club&&item.appeared&&!item.international&&(item.statBucket||'league')==='league'&&!item.penaltyEventResolved);
  if(!report){
    const opponent=pickDomesticOpponent(),teamGoals=scored?1:0,oppGoals=rand(0,2);report={season:currentSeason(),date:MONTHS[state.month],competition:'国内杯赛 · 关键点球',statBucket:'cup',club:state.club,clubCode:state.clubCode,clubColor:state.clubColor,position:state.pos,opponent:opponent[0],opponentCode:opponent[1],opponentColor:opponent[2],appearanceChance:1,home:true,teamGoals,oppGoals,result:teamGoals>oppGoals?'胜':teamGoals<oppGoals?'负':'平',appeared:true,start:true,minutes:90,goals:scored?1:0,assists:0,cleanSheet:false,rating:scored?7.5:6.1,shots:1,keyPasses:0,tackles:0,interceptions:0,saves:0,passAccuracy:80,dribbles:0,aerials:0,highlight:scored,penaltyEventResolved:true,penaltyLabel:label,_newPenaltyAppearance:true};state.matchReports.unshift(report);state.matchReports=state.matchReports.slice(0,80);
  }else{
    const oldResult=report.result;report.penaltyEventResolved=true;report.penaltyLabel=label;if(scored){report.goals=(report.goals||0)+1;report.teamGoals=(report.teamGoals||0)+1;report.rating=clamp((report.rating||6.5)+.45,4.5,10);report.highlight=true}else report.rating=clamp((report.rating||6.5)-.18,4.5,10);report.result=report.teamGoals>report.oppGoals?'胜':report.teamGoals<report.oppGoals?'负':'平';
    if(scored&&(report.statBucket||'league')==='league'){const record=currentTeamLeagueRecord(seasonStats(),report.club);record.gf++;if(oldResult!==report.result){if(oldResult==='胜'){record.wins--;record.points-=3}else if(oldResult==='平'){record.draws--;record.points--}else record.losses--;if(report.result==='胜'){record.wins++;record.points+=3}else if(report.result==='平'){record.draws++;record.points++}else record.losses++}}
  }
  applyOfficialPenaltyToStats(report,scored);delete report._newPenaltyAppearance;return report;
}
function resolvePenalty(s,base,label,{countsAsOfficialGoal=true}={}){
  const shooting=s.pos==='GK'?(s.attributes?.kicking||50):((s.attributes?.finishing||50)*.65+(s.attributes?.shooting||50)*.35),mental=(s.profile?.personality==='沉稳'?8:s.profile?.personality==='好胜'?3:0),chance=clamp(base+(shooting-65)*.004+mental*.006+(s.fitness-70)*.0015,.38,.92),scored=Math.random()<chance;
  if(countsAsOfficialGoal)bindPenaltyToMatch(scored,label);
  if(scored){s.trust=clamp(s.trust+8,0,100);s.morale=clamp(s.morale+8,0,100);addFeed('点球命中',`${label}主罚成功。${countsAsOfficialGoal?'进球已经绑定到具体比赛报告与对应赛事数据。':'点球大战进球不计入正式比赛进球。'}`,'★');playSfx('goal')}
  else{s.trust=clamp(s.trust-4,0,100);s.morale=clamp(s.morale-9,0,100);addFeed('点球罚失',`${label}主罚未能得分。${countsAsOfficialGoal?'结果已经写入对应比赛报告。':'点球大战不改变正式进球数据。'}`,'×');playSfx('miss')}
}
function adjustLineForMatchDecision(line,oldRating,newRating,goals=0,assists=0,cleanDelta=0){
  if(!line)return;line.goals=(Number(line.goals)||0)+goals;line.assists=(Number(line.assists)||0)+assists;line.cleanSheets=Math.max(0,(Number(line.cleanSheets)||0)+cleanDelta);
  const apps=Number(line.apps)||0;if(apps&&Number(oldRating)&&Number(newRating))line.rating=(((Number(line.rating)||0)*apps-Number(oldRating)+Number(newRating))/apps).toFixed(2);
}
function reconcileLeagueRecordAfterDecision(report,oldResult,oldTeamGoals,oldOppGoals){
  if((report.statBucket||'league')!=='league')return;const s=seasonStats(),record=currentTeamLeagueRecord(s,report.club);record.gf+=report.teamGoals-oldTeamGoals;record.ga+=report.oppGoals-oldOppGoals;
  if(oldResult===report.result)return;if(oldResult==='胜'){record.wins--;record.points-=3}else if(oldResult==='平'){record.draws--;record.points--}else record.losses--;
  if(report.result==='胜'){record.wins++;record.points+=3}else if(report.result==='平'){record.draws++;record.points++}else record.losses++;
}
function shiftCampaignResult(c,oldResult,newResult,withPoints=false){
  if(oldResult===newResult)return;
  if(oldResult==='胜'){c.won=Math.max(0,c.won-1);if(withPoints)c.points=Math.max(0,c.points-3)}
  else if(oldResult==='平'){c.drawn=Math.max(0,c.drawn-1);if(withPoints)c.points=Math.max(0,c.points-1)}
  else c.lost=Math.max(0,c.lost-1);
  if(newResult==='胜'){c.won++;if(withPoints)c.points+=3}
  else if(newResult==='平'){c.drawn++;if(withPoints)c.points++}
  else c.lost++;
}
function setContinentalRoundOutcome(c,round,won){
  c.eliminated=!won;c.wonTitle=false;
  const trophyName=`${c.competition} 冠军`;
  if(won&&round.nextStage==='冠军'){
    c.stage='冠军';c.wonTitle=true;
    if(!state.trophies.some(t=>t.name===trophyName&&t.season===currentSeason()&&t.club===c.club)){
      const reason=`${currentSeason()} 随 ${c.club} 赢得 ${c.competition}；关键比赛选择改变了淘汰赛结果。`;
      state.trophies.unshift({name:trophyName,season:currentSeason(),reason,image:awardImage(trophyName),team:true,club:c.club,type:'continental'});
    }
  }else{
    state.trophies=state.trophies.filter(t=>!(t.name===trophyName&&t.season===currentSeason()&&t.club===c.club));
    c.stage=won?round.nextStage:`止步${round.stage}`;
  }
}
function reconcileContinentalAfterDecision(report,oldResult,oldTeamGoals,oldOppGoals,oldRating,oldGoals,oldAssists,wasClean){
  if((report.statBucket||'league')!=='continental')return;const c=state.continentalCurrent;if(!c||c.club!==report.club)return;
  shiftCampaignResult(c,oldResult,report.result,!!report.continentalLeagueStage);
  if(report.appeared){c.goals+=(Number(report.goals)||0)-oldGoals;c.assists+=(Number(report.assists)||0)-oldAssists;c.cleanSheets+=(report.cleanSheet?1:0)-(wasClean?1:0);c.ratingSum+=Number(report.rating)-oldRating}
  if(report.continentalLeagueStage&&c.leagueMatches>=c.target){
    const direct=c.points>=(c.target===6?11:16),alive=c.points>=(c.target===6?7:10);c.eliminated=!alive;c.wonTitle=false;c.stage=direct?'16强':alive?'淘汰赛附加赛':'止步联赛阶段';
  }
  const round=report.continentalRound;if(!round)return;
  const aggregateFor=round.aggregateFor+report.teamGoals-oldTeamGoals,aggregateAgainst=round.aggregateAgainst+report.oppGoals-oldOppGoals,newWon=aggregateFor>aggregateAgainst||(aggregateFor===aggregateAgainst&&(round.aggregateFor===round.aggregateAgainst?round.tieBreakWon:Math.random()<.5));
  if(newWon!==round.oldWon){setContinentalRoundOutcome(c,round,newWon);addFeed('关键回合改写洲际赛果',`${report.club} ${newWon?'凭借你的处理晋级':'因最后阶段失手出局'}，淘汰赛总比分被改写为 ${aggregateFor}:${aggregateAgainst}。`,newWon?'◆':'×')}
}
function setDomesticCupOutcome(cup,match,advanced){
  const index=Math.max(0,CUP_STAGES.findIndex(([stage])=>stage===match.stage)),trophyName=`${cup.name} 冠军`;match.advanced=advanced;cup.wonTitle=false;
  if(advanced&&match.stage==='决赛'){
    cup.eliminated=false;cup.wonTitle=true;cup.stage='冠军';
    if(!state.trophies.some(t=>t.name===trophyName&&t.season===seasonStats().season&&t.club===cup.club)){
      const reason=`${seasonStats().season} 赛季随 ${cup.club} 赢得 ${cup.name}；关键比赛选择改变了决赛结果。`;
      state.trophies.unshift({name:trophyName,season:seasonStats().season,reason,image:awardImage(trophyName),team:true,club:cup.club,type:'cup'});
    }
  }else{
    state.trophies=state.trophies.filter(t=>!(t.name===trophyName&&t.season===seasonStats().season&&t.club===cup.club));
    cup.eliminated=!advanced;cup.stage=advanced?(CUP_STAGES[index+1]?.[0]||'冠军'):`止步${match.stage}`;cup.stageIndex=advanced?Math.min(index+1,CUP_STAGES.length-1):index;
  }
}
function reconcileDomesticCupAfterDecision(report){
  if((report.statBucket||'league')!=='cup'||!report.cupKnockout)return;const cup=seasonStats().cup,match=cup?.matches?.find(item=>item.matchId===report.matchId);if(!cup||!match)return;
  let advanced;if(report.teamGoals===report.oppGoals){if(!match.shootout)match.shootout=Math.random()<.5?'点球大战晋级':'点球大战出局';advanced=match.shootout.includes('晋级')}else{match.shootout='';advanced=report.teamGoals>report.oppGoals}
  report.shootout=match.shootout;if(advanced!==match.advanced){setDomesticCupOutcome(cup,match,advanced);addFeed('关键回合改写杯赛赛果',`${cup.club} ${advanced?'晋级':'出局'}，${cup.name}${match.stage}的结果被你的选择直接改变。`,advanced?'◆':'×')}
}
function applyMatchDecisionStats(report,{goals=0,assists=0,ratingDelta=0,opponentGoal=0,teamGoal=0,summary}){
  const s=seasonStats(),bucket=report.statBucket||'league',stint=s.stints.slice().reverse().find(item=>item.club===report.club)||currentSeasonStint(s),oldRating=Number(report.rating)||6.5,oldResult=report.result,oldTeamGoals=report.teamGoals,oldOppGoals=report.oppGoals,oldGoals=Number(report.goals)||0,oldAssists=Number(report.assists)||0,wasClean=!!report.cleanSheet;
  report.goals=(Number(report.goals)||0)+goals;report.assists=(Number(report.assists)||0)+assists;report.teamGoals+=teamGoal;report.oppGoals+=opponentGoal;report.rating=+clamp(oldRating+ratingDelta,4.5,10).toFixed(1);report.result=report.teamGoals>report.oppGoals?'胜':report.teamGoals<report.oppGoals?'负':'平';report.cleanSheet=report.appeared&&report.oppGoals===0;report.highlight=report.highlight||report.rating>=8||goals+assists>0;report.matchDecisionResolved=true;report.decisionSummary=summary;
  const cleanDelta=(report.cleanSheet?1:0)-(wasClean?1:0);s.goals+=goals;s.assists+=assists;s.cleanSheets=Math.max(0,s.cleanSheets+cleanDelta);adjustLineForMatchDecision(s.stats[bucket],oldRating,report.rating,goals,assists,cleanDelta);adjustLineForMatchDecision(s.stats.total,oldRating,report.rating,goals,assists,cleanDelta);adjustLineForMatchDecision(stint.stats[bucket],oldRating,report.rating,goals,assists,cleanDelta);adjustLineForMatchDecision(stint.stats.total,oldRating,report.rating,goals,assists,cleanDelta);s.rating=s.stats.total.rating;syncStintFlatStats(stint);reconcileLeagueRecordAfterDecision(report,oldResult,oldTeamGoals,oldOppGoals);reconcileContinentalAfterDecision(report,oldResult,oldTeamGoals,oldOppGoals,oldRating,oldGoals,oldAssists,wasClean);reconcileDomesticCupAfterDecision(report);
  refreshContractBonus(report);
}
function keyMatchScenarioId(report){
  if(state.pos==='GK')return'gk';if(['CB','LB','RB','CDM'].includes(state.pos))return'defence';if(['CM'].includes(state.pos))return'midfield';return'attack';
}
function keyMatchChoices(scenarioId){
  if(scenarioId==='gk')return[
    {id:'charge',label:'果断出击封堵',hint:'高风险 · 成功时显著提升单场评价 · 失败可能丢球'},
    {id:'line',label:'留在门线等待射门',hint:'中等风险 · 更依赖反应与一对一能力'},
    {id:'sweep',label:'提前指挥后卫保护近角',hint:'低风险 · 偏向团队防守与稳定结果'}];
  if(scenarioId==='defence')return[
    {id:'step',label:'主动上抢并发动反击',hint:'高风险 · 成功时增加防守高光 · 失败可能丢球'},
    {id:'cover',label:'回收站位封住传球线路',hint:'低风险 · 偏向位置感与球队结果'},
    {id:'foul',label:'在危险区域外战术犯规',hint:'中等风险 · 降低直接威胁 · 可能影响个人评价'}];
  if(scenarioId==='midfield')return[
    {id:'through',label:'冒险送出身后直塞',hint:'中高风险 · 成功时获得助攻并改变比分'},
    {id:'longshot',label:'利用空当远射',hint:'高风险 · 成功时获得进球与高光'},
    {id:'control',label:'回传并重新组织进攻',hint:'低风险 · 保持控球与比赛稳定性'}];
  return[
    {id:'shoot',label:'内切后直接射门',hint:'高风险 · 成功时获得进球和个人高光'},
    {id:'cross',label:'横传中路寻找队友',hint:'中等风险 · 成功时获得助攻并同样改变比分'},
    {id:'hold',label:'控球等待后排支援',hint:'低风险 · 放弃即时数据，换取稳定评价'}];
}
function keyMatchImportance(report){
  if(report.cupStage==='决赛'||report.continentalRound?.stage==='决赛')return 7;
  if(report.continentalRound?.stage==='半决赛')return 6;
  if(report.cupStage==='半决赛'||report.continentalRound?.stage==='四分之一决赛')return 5;
  if(report.statBucket==='continental')return 3;if(report.statBucket==='cup')return 2;return 1;
}
function majorMatchReason(report){
  if(report.cupStage==='决赛'||report.continentalRound?.stage==='决赛')return`${report.competition}决赛`;
  if(report.continentalRound?.stage)return`${report.competition}${report.continentalRound.stage}`;
  if(report.cupStage)return`${report.competition}${report.cupStage}`;
  return`${report.competition}关键战`;
}
function keyMatchBaseChance(scenarioId,choiceId){
  const a=state.attributes||{},skill=(...keys)=>keys.reduce((sum,key)=>sum+(Number(a[key])||50),0)/keys.length;
  if(choiceId==='shoot'||choiceId==='longshot')return clamp(.24+(skill('finishing','shooting')-55)*.007,.22,.7);
  if(choiceId==='cross'||choiceId==='through')return clamp(.34+(skill('vision','passing','ballControl')-55)*.006,.3,.76);
  if(['step','cover','foul','charge','line','sweep'].includes(choiceId)){const aggressive=['step','charge'].includes(choiceId),safe=['cover','sweep'].includes(choiceId),keys=scenarioId==='gk'?['reflexes','oneOnOnes','positioning']:['defending','positioning','physical'];return clamp((aggressive?.42:safe?.68:.56)+(skill(...keys)-55)*.005,.35,.86)}
  return .9;
}
function keyMatchPreparationChoices(scenarioId){
  const attack=scenarioId==='attack'||scenarioId==='midfield';
  return[
    {id:'target',label:attack?'针对对手身后空间训练':'针对对手主要进攻线路演练',hint:'战术针对性强 · 提高冒险处理的成功率',bonuses:attack?{shoot:.07,longshot:.07,cross:.12,through:.12}:{step:.1,charge:.1,foul:.05,line:.05}},
    {id:'control',label:attack?'加强控球与二点球训练':'加强阵型距离与协防训练',hint:'偏向稳定 · 提高传球、站位和低风险方案',bonuses:attack?{cross:.08,through:.08,hold:.13,control:.13}:{cover:.12,sweep:.12,line:.09,foul:.07}},
    {id:'rest',label:'降低负荷并保存比赛体能',hint:'恢复体能 · 所有末段选择获得小幅加成',bonuses:{shoot:.04,longshot:.04,cross:.04,through:.04,hold:.05,control:.05,step:.04,cover:.04,foul:.04,charge:.04,line:.04,sweep:.04}}
  ];
}
function resolveKeyMatchPreparation(report,scenarioId,choice){
  const flow=report.matchDecisionFlow=report.matchDecisionFlow||{major:true};if(flow.prepId)return showKeyMatchDecision(report,scenarioId,true,'half');
  flow.prepId=choice.id;flow.prepLabel=choice.label;flow.prepBonuses=choice.bonuses||{};if(choice.id==='rest')state.fitness=clamp(state.fitness+5,0,100);else state.fitness=clamp(state.fitness-3,0,100);
  flow.halfScore=flow.halfScore||`${Math.max(0,report.teamGoals-rand(0,1))}:${Math.max(0,report.oppGoals-rand(0,1))}`;
  addFeed('重大比赛赛前准备',`${majorMatchReason(report)}：${choice.label}。这会改变比赛末段可选方案的成功率。`,'▥');showKeyMatchDecision(report,scenarioId,true,'half');
}
function keyMatchHalftimeChoices(){
  return[
    {id:'press',label:'提高压迫强度主动争胜',hint:'高风险 · 提高主动处理成功率 · 消耗更多体能',bonuses:{shoot:.1,longshot:.1,through:.08,step:.1,charge:.1},fitness:-7,risk:.1},
    {id:'shape',label:'保持阵型等待最佳机会',hint:'低风险 · 提高稳健方案与防守处理成功率',bonuses:{cross:.05,hold:.11,control:.11,cover:.12,sweep:.12,line:.1},fitness:-2,rating:.05},
    {id:'switch',label:'根据场面切换进攻方向',hint:'中等风险 · 给所有方案提供均衡加成',bonuses:{shoot:.055,longshot:.055,cross:.065,through:.065,hold:.045,control:.045,step:.055,cover:.055,foul:.055,charge:.055,line:.055,sweep:.055},fitness:-4,rating:.03}
  ];
}
function resolveKeyMatchHalftime(report,scenarioId,choice){
  const flow=report.matchDecisionFlow=report.matchDecisionFlow||{major:true};if(flow.halfId)return showKeyMatchDecision(report,scenarioId,true,'final');
  flow.halfId=choice.id;flow.halfLabel=choice.label;flow.halfBonuses=choice.bonuses||{};flow.risk=choice.risk||0;flow.ratingBonus=choice.rating||0;state.fitness=clamp(state.fitness+(choice.fitness||0),0,100);
  addFeed('重大比赛中场调整',`${majorMatchReason(report)}半场 ${flow.halfScore||'胶着'}：${choice.label}。`,'↔');showKeyMatchDecision(report,scenarioId,true,'final');
}
function keyMatchAdjustedChance(report,scenarioId,choiceId){
  const flow=report.matchDecisionFlow||{},bonus=(Number(flow.prepBonuses?.[choiceId])||0)+(Number(flow.halfBonuses?.[choiceId])||0)+(Number(state.resources?.tacticalInsight)>0?.02:0);return clamp(keyMatchBaseChance(scenarioId,choiceId)+bonus,.2,.94);
}
function resolveKeyMatchDecision(report,scenarioId,choiceId){
  const flow=report.matchDecisionFlow||{},chance=keyMatchAdjustedChance(report,scenarioId,choiceId);let outcome={ratingDelta:.1,summary:'你稳住了这次关键回合。'},success=true;
  if(choiceId==='shoot'||choiceId==='longshot'){success=Math.random()<chance;outcome=success?{goals:1,teamGoal:1,ratingDelta:.75,summary:'关键选择：射门得分，直接改写比分。'}:{ratingDelta:-.15,opponentGoal:Math.random()<.13+(flow.risk||0)?1:0,summary:'关键选择：射门未进，球队承担了反击风险。'}}
  else if(choiceId==='cross'||choiceId==='through'){success=Math.random()<chance;outcome=success?{assists:1,teamGoal:1,ratingDelta:.62,summary:'关键选择：传球转化为助攻，球队取得进球。'}:{ratingDelta:-.05,opponentGoal:Math.random()<(flow.risk||0)*.45?1:0,summary:'关键选择：传球思路正确，但未能形成进球。'}}
  else if(['step','cover','foul','charge','line','sweep'].includes(choiceId)){const aggressive=['step','charge'].includes(choiceId),safe=['cover','sweep'].includes(choiceId);success=Math.random()<chance;outcome=success?{ratingDelta:aggressive?.55:safe?.32:.18,summary:`关键选择：${aggressive?'主动处理':'稳健站位'}化解了最后阶段的威胁。`}:{opponentGoal:1,ratingDelta:aggressive?-.62:-.35,summary:'关键选择：防守处理失败，对手在最后阶段取得进球。'}}
  else outcome={ratingDelta:.14,summary:'关键选择：你控制节奏，帮助球队平稳度过关键阶段。'};
  outcome.ratingDelta=(Number(outcome.ratingDelta)||0)+(Number(flow.ratingBonus)||0);
  if(flow.major)outcome.summary=`赛前“${flow.prepLabel}”、中场“${flow.halfLabel}”之后，${outcome.summary}`;
  applyMatchDecisionStats(report,outcome);clearPendingDecision();state.trust=clamp(state.trust+(success?2:-1),0,100);state.morale=clamp(state.morale+(success?3:-3),0,100);addFeed('关键比赛选择',`${report.competition} 对阵 ${report.opponent}：${outcome.summary}`,'◆');closeModal();renderAll();showInfo(success?'你的决定改变了比赛':'决定产生了代价',`${outcome.summary} 最终比分 ${report.teamGoals}:${report.oppGoals}，赛后评分 ${report.rating}。`,success?'★':'!');
}
function showKeyMatchDecision(report,scenarioId=keyMatchScenarioId(report),persist=true,phase='final'){
  if(!report||report.matchDecisionResolved)return false;
  const major=keyMatchImportance(report)>=5||report.matchDecisionFlow?.major;if(major&&phase==='final'&&!report.matchDecisionFlow?.prepId)phase='pre';if(major&&phase==='half'&&report.matchDecisionFlow?.halfId)phase='final';
  if(persist)setPendingDecision({type:'match',matchId:report.matchId,scenarioId,phase});
  if(phase==='pre'){
    const opponentStrength=clubByName(report.opponent)?.[3]||state.clubStrength,style=opponentStrength>=state.clubStrength?'整体实力更强，前场逼抢积极':'阵型紧凑，反击和定位球存在威胁';
    showModal({icon:'PRE',kicker:`${majorMatchReason(report)} · 赛前准备`,title:`下一场：${report.club} 对阵 ${report.opponent}`,body:`球探报告：${style}。赛前选择不会直接保证胜利，但会改变中场与末段决策的条件。`,locked:true,actions:keyMatchPreparationChoices(scenarioId).map((choice,index)=>[choice.label,()=>resolveKeyMatchPreparation(report,scenarioId,choice),index===0,choice.hint])});return true;
  }
  if(phase==='half'){
    const flow=report.matchDecisionFlow||{},score=flow.halfScore||`${report.teamGoals}:${report.oppGoals}`;
    showModal({icon:'45',kicker:`${majorMatchReason(report)} · 中场调整`,title:`半场比分 ${score}`,body:`赛前执行了“${flow.prepLabel||'常规准备'}”。体能 ${state.fitness}，比赛仍在胶着阶段；中场方案会与赛前准备共同影响最后阶段。`,locked:true,actions:keyMatchHalftimeChoices().map((choice,index)=>[choice.label,()=>resolveKeyMatchHalftime(report,scenarioId,choice),index===1,choice.hint])});return true;
  }
  const choices=keyMatchChoices(scenarioId),score=`${report.teamGoals}:${report.oppGoals}`,situation=scenarioId==='attack'||scenarioId==='midfield'?'你在进攻三区获得一次决定比赛的处理球机会。':'对手制造了最后一次高威胁进攻。',flow=report.matchDecisionFlow||{};
  showModal({icon:'84',kicker:`${report.competition} · KEY MOMENT`,title:`第 84 分钟，比分 ${score}`,body:`${report.club} 对阵 ${report.opponent}。${situation}${flow.major?` 赛前“${flow.prepLabel}”和中场“${flow.halfLabel}”正在影响此刻。`:''}`,locked:true,actions:choices.map((choice,index)=>{const base=keyMatchBaseChance(scenarioId,choice.id),adjusted=keyMatchAdjustedChance(report,scenarioId,choice.id),changed=Math.round((adjusted-base)*100);return[choice.label,()=>resolveKeyMatchDecision(report,scenarioId,choice.id),index===0,`${choice.hint}${changed>0?` · 赛前与中场准备 +${changed}%`:''}`]})});return true;
}
function maybeKeyMatchDecision(reports=[]){
  if(state.age<16)return false;const now=state.year*12+state.month,last=state.flags.lastKeyDecisionMonth??-99;
  const eligible=reports.filter(report=>report?.appeared&&!report.international&&!report.matchDecisionResolved&&(Math.abs(report.teamGoals-report.oppGoals)<=1||keyMatchImportance(report)>=5));if(!eligible.length)return false;
  eligible.sort((a,b)=>keyMatchImportance(b)-keyMatchImportance(a));const report=eligible[0],level=keyMatchImportance(report),major=level>=5;if(now-last<2&&!major)return false;const chance=level>=7?1:level===6?.92:level===5?.78:report.statBucket==='continental'?.5:report.statBucket==='cup'?.44:.24;if(Math.random()>=chance)return false;
  state.flags.lastKeyDecisionMonth=now;return showKeyMatchDecision(report,keyMatchScenarioId(report),true,major?'pre':'final');
}
function initialAttributes(pos,base,style){
  const keys=pos==='GK'?GK_KEYS:OUTFIELD_KEYS,out={};keys.forEach(k=>out[k]=clamp(base+rand(-3,3),32,65));
  const styleKeys=(STYLE_KEYS[style]||[]).filter(k=>k in out);styleKeys.forEach(k=>out[k]=clamp(out[k]+2,30,100));
  const strength=pick(keys),weakness=pick(keys.filter(k=>k!==strength));out[strength]=clamp(out[strength]+2,30,100);out[weakness]=clamp(out[weakness]-2,30,100);
  let guard=30;while(guard--){const calculated=Math.round(Object.entries(POSITION_WEIGHTS[pos]).reduce((n,[k,w])=>n+out[k]*w,0)),diff=base-calculated;if(!diff)break;const k=pick(keys);out[k]=clamp(out[k]+Math.sign(diff),30,100)}return out;
}
function createPlayer(e){
  e.preventDefault();const pos=$('#position').value,country=$('#country').value,academy=startingAcademy(country),playStyle=$('#playStyle').value,base=rand(48,54);
  const profile={personality:$('#personality').value,development:$('#development').value,background:$('#background').value,agentStyle:$('#agentStyle').value,careerGoal:$('#careerGoal').value,playStyle};
  state={name:$('#name').value.trim()||'无名新星',country,pos,number:+$('#number').value,foot,age:15,year:2026,month:0,club:academy[0],clubCode:academy[1],clubColor:academy[2],clubStrength:academy[3],overall:base,potential:clamp(rand(82,96)+(profile.background==='体育家庭'?1:0),40,100),attributes:initialAttributes(pos,base,playStyle),fitness:profile.background==='体育家庭'?100:96,morale:72,trust:profile.background==='足球世家'?53:48,value:0,wage:0,contractEnd:2030,contract:defaultContractTerms(0,'青训'),careerBonusEarnings:0,injured:0,injuryDetail:null,sound:true,retired:false,profile,eventHistory:{},injuryHistory:{},flags:{seasonEventCount:0,lastInteractiveEventMonth:-99,matchSequence:0},relationships:{coach:50,teammates:profile.personality==='外向'?60:50,fans:35,agent:50},resources:{challengeCredits:0,tacticalInsight:0},clubCharacters:{},characterHistory:[],leagueMovements:[],version:GAME_STATE_VERSION,seasons:[newSeason(2026,academy[0])],events:[],trophies:[],feed:[],matchReports:[],continentalHistory:[],continentalCurrent:null};
  recalculateOverall();addEvent('开启15岁生涯',`${state.name} 加入 ${state.club}，以「${playStyle}」风格争取职业合同。`,'✦');addFeed('新的起点',`15 岁的你穿上 ${state.number} 号训练服。先为首个赛季确定目标，所有比赛都会推动目标进度。`,'15');showGame();renderAll();save();showSeasonObjectiveDecision(true);
}
function migratedClubName(name){return LEGACY_CLUB_NAMES[name]||name}
function remapClubKeyedObject(value){
  if(!value||typeof value!=='object'||Array.isArray(value))return value;const out={};Object.entries(value).forEach(([key,item])=>out[migratedClubName(key)]=item);return out;
}
function migrateLegacyClubData(){
  state.club=migratedClubName(state.club);
  (state.seasons||[]).forEach(s=>{s.club=migratedClubName(s.club);s.finalClub=migratedClubName(s.finalClub||s.club);if(s.cup?.club)s.cup.club=migratedClubName(s.cup.club);(s.stints||[]).forEach(stint=>stint.club=migratedClubName(stint.club));s.teamLeagueRecords=remapClubKeyedObject(s.teamLeagueRecords);s.leagueSchedules=remapClubKeyedObject(s.leagueSchedules);(s.leagueTable||[]).forEach(row=>row.name=migratedClubName(row.name))});
  (state.matchReports||[]).forEach(report=>{report.club=migratedClubName(report.club);report.opponent=migratedClubName(report.opponent)});
  (state.continentalHistory||[]).forEach(c=>{if(c.club)c.club=migratedClubName(c.club)});
  if(state.continentalCurrent?.club)state.continentalCurrent.club=migratedClubName(state.continentalCurrent.club);
  (state.leagueMovements||[]).forEach(move=>move.club=migratedClubName(move.club));
  (state.trophies||[]).forEach(trophy=>{if(trophy.club)trophy.club=migratedClubName(trophy.club)});
  if(state.pendingDecision?.type==='transfer')(state.pendingDecision.offers||[]).forEach(offer=>offer.clubName=migratedClubName(offer.clubName));
}
function migrateState(){
  migrateLegacyClubData();
  state.profile=state.profile||{personality:'自律',development:'技术',background:'普通家庭',agentStyle:'稳健',careerGoal:'成为世界最佳'};
  state.profile.playStyle=state.profile.playStyle||(PLAY_STYLES[state.pos]||['全能型'])[0];state.attributes=state.attributes||initialAttributes(state.pos,state.overall||52,state.profile.playStyle);ensureDetailedAttributes();
  state.eventHistory=state.eventHistory||{};state.injuryHistory=state.injuryHistory||{};state.flags=state.flags||{};state.flags.seasonEventCount=state.flags.seasonEventCount||0;state.flags.lastInteractiveEventMonth=state.flags.lastInteractiveEventMonth??-99;
  state.relationships=state.relationships||{coach:50,teammates:50,fans:35,agent:50};
  state.resources={challengeCredits:0,tacticalInsight:0,...(state.resources||{})};
  state.clubCharacters=state.clubCharacters&&typeof state.clubCharacters==='object'?state.clubCharacters:{};
  state.characterHistory=Array.isArray(state.characterHistory)?state.characterHistory:[];
  state.events=Array.isArray(state.events)?state.events:[];
  state.feed=Array.isArray(state.feed)?state.feed:[];
  state.matchReports=Array.isArray(state.matchReports)?state.matchReports:[];
  state.flags.matchSequence=Number(state.flags.matchSequence)||0;state.matchReports.forEach(report=>{if(!report.matchId)report.matchId=`legacy-${state.year}-${++state.flags.matchSequence}`;if(report.monthIndex==null){const index=MONTHS.indexOf(report.date);if(index>=0)report.monthIndex=index}});
  state.continentalHistory=Array.isArray(state.continentalHistory)?state.continentalHistory:[];
  state.trophies=Array.isArray(state.trophies)?state.trophies:[];
  state.seasons=Array.isArray(state.seasons)&&state.seasons.length?state.seasons:[newSeason(state.year||2026,state.club)];
  state.seasons.forEach(ensureSeasonBreakdown);
  state.careerBonusEarnings=Number(state.careerBonusEarnings)||0;ensureContractTerms();
  state.leagueMovements=Array.isArray(state.leagueMovements)?state.leagueMovements:[];applyStoredLeagueMovements();
  state.trophies.forEach(t=>{t.reason=t.reason||`${t.season} 赛季获得的重要荣誉。`;if(String(t.name).includes('联赛冠军')){t.type='league';t.league=t.league||LEAGUES.find(l=>String(t.name).includes(l.short))?.short}if(nationalTrophyImage(t.name))t.national=true;t.image=awardImage(t.name)});
  const c=clubByName(state.club);if(c){state.clubCode=c[1];state.clubColor=c[2];state.clubStrength=c[3]}
  const season=state.seasons[state.seasons.length-1];if(state.continentalCurrent){state.continentalCurrent.club=state.continentalCurrent.club||season?.stints?.[0]?.club||season?.club||state.club;state.continentalCurrent.club=migratedClubName(state.continentalCurrent.club);const campaignClub=clubByName(state.continentalCurrent.club),meta=CONTINENTAL_META[state.continentalCurrent.code];if(campaignClub){state.continentalCurrent.clubCode=campaignClub[1];state.continentalCurrent.clubColor=campaignClub[2];state.continentalCurrent.clubStrength=campaignClub[3]}if(meta){state.continentalCurrent.competition=meta.competition;state.continentalCurrent.format=meta.format;state.continentalCurrent.target=meta.target;state.continentalCurrent.accent=meta.accent;state.continentalCurrent.qualificationRoute=state.continentalCurrent.qualificationRoute||'旧存档洲际资格延续';if(meta.format==='knockout'&&state.continentalCurrent.stage==='联赛阶段')state.continentalCurrent.stage=state.month<=6?'第一轮':state.month===7?'16强':state.month===8?'四分之一决赛':'半决赛'}if(state.continentalCurrent.club!==state.club){archiveContinentalCampaign(state.continentalCurrent,{leftClubMidSeason:true,leftAtMonth:state.month,leftForClub:state.club,migrated:true});state.continentalCurrent=null}}
  if(state.age>=16&&!state.continentalCurrent&&state.month===0&&!(season?.stints?.length>1))state.continentalCurrent=createContinentalCampaign();
  if(state.pendingDecision&&!['career','injury','transfer','seasonObjective','match','objectiveCheck'].includes(state.pendingDecision.type))delete state.pendingDecision;
  recalculateOverall();ensureNational();ensureSquadCompetition();ensureShortChallenge();state.version=GAME_STATE_VERSION;
}
function weeklySalaryText(weekly){
  if(!weekly)return'€0m/周';const millions=weekly/1000000,digits=millions<.01?4:millions<1?3:2;return`€${millions.toFixed(digits)}m/周`;
}
function annualSalaryText(weekly){return weeklySalaryText(weekly)}
function leagueSalaryFactor(){
  const league=leagueForClub(state.club),short=league?.short;if(league?.tier===2)return.58;return short==='沙特联'?1.9:short==='美职联'?1.05:short==='中超'?.72:['J1联赛','K联赛1'].includes(short)?.76:1;
}
function updateSalary(){
  if(state.age<16){state.wage=0;return}const factor=leagueSalaryFactor(),performance=1+seasonPerformanceScore()*.045;
  const base=Math.exp((state.overall-55)/6.15)*820*(state.clubStrength/82)*factor*performance;state.wage=Math.min(shortSalaryCap(),Math.max(600,Math.round(base/100)*100));
}
function shortSalaryCap(){
  const short=leagueForClub(state.club)?.short;return short==='沙特联'?1600000:short==='美职联'?900000:short==='中超'?250000:750000;
}
function eligibleInjuries(){
  const now=state.year*12+state.month;return INJURIES.filter(i=>(!i.pos||i.pos===state.pos)&&(!i.maxAge||state.age<=i.maxAge)&&Object.keys(i.loss).some(k=>k in state.attributes)&&(!state.injuryHistory?.[i.name]||now-state.injuryHistory[i.name]>=36));
}
function startInjury(injury,months,accelerated){
  state.injuryHistory=state.injuryHistory||{};state.injuryHistory[injury.name]=state.year*12+state.month;
  const loss=lossForPosition(injury.loss),extra=accelerated?1:0,applied={};Object.entries(loss).forEach(([k,v])=>applied[k]=v+extra);
  const permanent=Math.max(0,injury.permanent+(accelerated&&injury.months[1]>=3?1:0)),restore={};Object.entries(applied).forEach(([k,v])=>restore[k]=Math.max(0,v-Math.min(permanent,v)));
  const negative={};Object.entries(applied).forEach(([k,v])=>negative[k]=-v);changeAttributes(negative);state.potential=clamp(state.potential-(injury.potential||0)-(accelerated&&injury.potential?1:0),40,100);recalculateOverall();
  if(injury.months[1]>=6)state.seriousInjuries=(state.seriousInjuries||0)+1;state.injured=Math.max(1,months-(accelerated?1:0));state.fitness=clamp(state.fitness-rand(accelerated?28:18,accelerated?42:32),8,100);state.morale=clamp(state.morale-8,0,100);
  state.injuryDetail={name:injury.name,description:injury.desc,effect:`${lossText(applied)}${permanent?`；可能留下每项最多 ${permanent} 点长期损失`:''}`,restore,plan:accelerated?'加速复出':'完整康复'};
  if(accelerated){state.trust=clamp(state.trust+3,0,100);state.flags.rushedReturn=true}addFeed('医疗中心报告',`${injury.name} · ${state.injuryDetail.plan} · 预计缺席 ${state.injured} 个月。`,'✚');renderAll();showInfo('康复方案确认',accelerated?'恢复周期缩短，但额外属性损失和复发风险上升。':'完整康复会在复出时返还可恢复属性，严重结构损伤仍可能留下影响。',accelerated?'!':'+');
}
function regionForLeague(league){
  if(league?.region)return league.region;if(['中超','沙特联'].includes(league?.short))return'AFC';if(league?.short==='美职联')return'CONCACAF';return'UEFA';
}
function afcZoneForLeague(league){return league?.short==='沙特联'?'West':'East'}
function createContinentalCampaign(){
  const league=leagueForClub(state.club),source=recentSeason(),qualification=source?.continentalQualification||calculateContinentalQualification(source);if(state.age<16||league?.tier===2||!qualification)return null;
  const meta=CONTINENTAL_META[qualification.code];if(!meta)return null;const stage=qualification.entryStage||(meta.format==='knockout'?'第一轮':'联赛阶段');
  return {season:currentSeason(),sourceSeason:source?.season,qualificationRoute:qualification.route,club:state.club,clubCode:state.clubCode,clubColor:state.clubColor,clubStrength:state.clubStrength,leagueShort:league?.short,competition:meta.competition,code:qualification.code,accent:meta.accent,target:meta.target,format:meta.format,region:regionForLeague(league),zone:regionForLeague(league)==='AFC'?afcZoneForLeague(league):'',entryStage:qualification.entryStage,stage,played:0,won:0,drawn:0,lost:0,points:0,goals:0,assists:0,cleanSheets:0,ratingSum:0,ratingCount:0,leagueMatches:0,eliminated:false,wonTitle:false};
}
function archiveContinentalCampaign(c,extra={}){
  if(!c)return;state.continentalHistory=state.continentalHistory||[];
  const archived={...c,...extra};const duplicate=state.continentalHistory.some(item=>item.season===archived.season&&item.code===archived.code&&item.club===archived.club&&!!item.leftClubMidSeason===!!archived.leftClubMidSeason);
  if(!duplicate)state.continentalHistory.push(archived);
}
function leaveContinentalCampaignOnTransfer(oldClub,newClub){
  const c=state.continentalCurrent;if(!c)return;
  if(!c.club)c.club=oldClub;
  if(c.club!==newClub){archiveContinentalCampaign(c,{leftClubMidSeason:true,leftAtMonth:state.month,leftForClub:newClub});state.continentalCurrent=null;addFeed('洲际赛事注册终止',`离开 ${c.club} 后，你不再代表该队参加 ${c.competition}；原俱乐部征程不会转移到 ${newClub}。`,'×')}
}
function leaveDomesticCupOnTransfer(oldClub,newClub){
  const cup=seasonStats().cup;if(!cup||cup.club!==oldClub||cup.eliminated||cup.wonTitle)return;
  cup.leftClubMidSeason=true;cup.leftAtMonth=state.month;cup.leftForClub=newClub;cup.eliminated=true;cup.stage=`离队时止步${cup.stage}`;addFeed('国内杯赛资格终止',`离开 ${oldClub} 后，你不再代表原队参加 ${cup.name}；该杯赛不会转移到 ${newClub}。`,'×');
}
function simulateDomesticCupMonth(){
  const s=seasonStats(),cup=s.cup;if(state.age<16||!cup||cup.eliminated||cup.wonTitle||cup.club!==state.club)return null;
  const stage=CUP_STAGES[cup.stageIndex];if(!stage||state.month!==stage[1])return null;
  const league=leagueForClub(cup.club),sameCountry=LEAGUES.filter(item=>item.country===league?.country),lowerTier=sameCountry.filter(item=>item.tier===2).flatMap(item=>item.clubs),allOpponents=sameCountry.flatMap(item=>item.clubs).filter(club=>club[0]!==cup.club),opponents=cup.stageIndex<=1&&lowerTier.length&&Math.random()<.42?lowerTier:allOpponents;if(!opponents.length)return null;
  const opponent=pick(opponents),report=simulateFixture(`${cup.code} · ${stage[0]}`,opponent,false,'cup'),edge=(clubByName(cup.club)?.[3]||state.clubStrength)-opponent[3],shootout=report.teamGoals===report.oppGoals;
  const advanced=report.teamGoals>report.oppGoals||(shootout&&Math.random()<clamp(.5+edge*.018+((report.rating||6.5)-6.5)*.035,.24,.78));
  report.cupKnockout=true;report.cupStage=stage[0];report.shootout=shootout?(advanced?'点球大战晋级':'点球大战出局'):'';
  cup.matches.push({matchId:report.matchId,stage:stage[0],opponent:opponent[0],advanced,shootout:report.shootout});
  if(!advanced){cup.eliminated=true;cup.stage=`止步${stage[0]}`;addFeed('国内杯赛出局',`${cup.club} 在 ${cup.name}${stage[0]}被 ${opponent[0]} 淘汰。`,'×');return report}
  if(stage[0]==='决赛'){
    cup.wonTitle=true;cup.stage='冠军';const name=`${cup.name} 冠军`,reason=`${s.season} 赛季随 ${cup.club} 赢得 ${cup.name}，完成国内杯赛夺冠。`;
    state.trophies.unshift({name,season:s.season,reason,image:awardImage(name),team:true,club:cup.club,type:'cup'});addEvent('赢得国内杯赛',reason,'♜');addFeed('国内杯赛冠军',`${cup.club} 击败 ${opponent[0]}，捧起 ${cup.name}。`,'♜');playSfx('trophy');return report;
  }
  cup.stageIndex++;cup.stage=CUP_STAGES[cup.stageIndex][0];addFeed('国内杯赛晋级',`${cup.club} 淘汰 ${opponent[0]}，晋级 ${cup.name}${cup.stage}。`,'◆');return report;
}
function renderDomesticCup(){
  const status=$('#domestic-cup-status'),content=$('#domestic-cup-content');if(!status||!content||!state)return;const cup=seasonStats().cup;
  if(state.age<16||!cup){status.textContent='未参赛';content.innerHTML='<div class="empty-state">升入一线队后，将参加所在国家的国内杯赛。</div>';return}
  status.textContent=cup.wonTitle?'冠军':cup.eliminated?'已结束':'进行中';
  const path=CUP_STAGES.map(([stage],index)=>`<span class="${index===cup.stageIndex&&!cup.eliminated?'current':''}">${stage}</span>`).join('');
  const note=cup.leftClubMidSeason?`你已离开 ${cup.club}，本赛季不再参加该项杯赛。`:cup.wonTitle?'杯赛冠军已经加入荣誉殿堂。':cup.eliminated?cup.stage:`下一轮：${cup.stage}`;
  content.innerHTML=`<div class="cup-identity"><div class="cup-mark">${cup.code}</div><div><strong>${cup.name}</strong><small>${cup.club} · ${note}</small></div></div><div class="cup-path">${path}</div>`;
}
function pickEuropeanOpponent(campaign){
  const campaignClub=campaign.club||state.club,ownLeague=leagueForClub(campaignClub),region=campaign.region||regionForLeague(ownLeague),sameAfcZone=league=>region!=='AFC'||afcZoneForLeague(league)===(campaign.zone||afcZoneForLeague(ownLeague));let pool=LEAGUES.filter(l=>l.tier!==2&&regionForLeague(l)===region&&sameAfcZone(l)).flatMap(l=>l.clubs.map(c=>({club:c,country:l.country}))).filter(x=>x.club[0]!==campaignClub&&x.country!==ownLeague?.country);
  if(!pool.length)pool=LEAGUES.filter(l=>l.tier!==2&&regionForLeague(l)===region&&sameAfcZone(l)).flatMap(l=>l.clubs.map(c=>({club:c}))).filter(x=>x.club[0]!==campaignClub);return pick(pool.length?pool:LEAGUES.filter(l=>l.tier!==2).flatMap(l=>l.clubs.map(c=>({club:c}))).filter(x=>x.club[0]!==campaignClub)).club;
}
function simulateContinentalMonth(){
  const c=state.continentalCurrent;if(!c||c.eliminated||c.wonTitle||state.age<16)return;if(!c.club)c.club=state.club;if(c.club!==state.club){leaveContinentalCampaignOnTransfer(c.club,state.club);return}
  if(c.format==='knockout'||c.code==='CCC'){
    if(c.stage==='第一轮'&&state.month===6){playEuropeanRound(c,'第一轮','16强',2);return}
    if(c.stage==='16强'&&state.month===7){playEuropeanRound(c,'16强','四分之一决赛',2);return}
    if(c.stage==='四分之一决赛'&&state.month===8){playEuropeanRound(c,'四分之一决赛','半决赛',2);return}
    if(c.stage==='半决赛'&&state.month===9)playEuropeanRound(c,'半决赛','决赛',2);
    if(c.stage==='决赛'&&state.month===9)playEuropeanRound(c,'决赛','冠军',1);
    return;
  }
  const schedule=c.target===8?{1:2,2:2,3:1,4:1,5:2}:{1:1,2:1,3:1,4:1,5:2};
  if(c.stage==='联赛阶段'&&schedule[state.month]){for(let i=0;i<schedule[state.month];i++)recordContinentalReport(c,simulateFixture(c.code,pickEuropeanOpponent(c),true));if(c.leagueMatches>=c.target){const direct=c.points>=(c.target===6?11:16),alive=c.points>=(c.target===6?7:10);if(direct)c.stage='16强';else if(alive)c.stage='淘汰赛附加赛';else eliminateFromEurope(c,'联赛阶段')}return}
  if(c.stage==='淘汰赛附加赛'&&state.month===6){playEuropeanRound(c,'淘汰赛附加赛','16强',2);return}if(c.stage==='16强'&&state.month===7){playEuropeanRound(c,'16强','四分之一决赛',2);return}if(c.stage==='四分之一决赛'&&state.month===8){playEuropeanRound(c,'四分之一决赛','半决赛',2);return}if(c.stage==='半决赛'&&state.month===9){playEuropeanRound(c,'半决赛','决赛',2);return}if(c.stage==='决赛'&&state.month===10)playEuropeanRound(c,'决赛','冠军',1);
}
function playEuropeanRound(c,stage,nextStage,legs){
  const opponent=pickEuropeanOpponent(c),roundReports=[];let aggregateFor=0,aggregateAgainst=0;for(let i=0;i<legs;i++){const r=simulateFixture(`${c.code} · ${stage}`,opponent,true);roundReports.push(r);c.played++;if(r.result==='胜')c.won++;else if(r.result==='平')c.drawn++;else c.lost++;aggregateFor+=r.teamGoals;aggregateAgainst+=r.oppGoals;if(r.appeared){c.goals+=r.goals;c.assists+=r.assists;if(r.cleanSheet)c.cleanSheets++;c.ratingSum+=r.rating;c.ratingCount++}}
  const campaignStrength=c.clubStrength||clubByName(c.club)?.[3]||state.clubStrength,won=aggregateFor>aggregateAgainst||(aggregateFor===aggregateAgainst&&Math.random()<clamp(.5+(campaignStrength-opponent[3])*.018,.25,.75));roundReports.forEach(report=>report.continentalRound={stage,nextStage,aggregateFor,aggregateAgainst,tieBreakWon:won,oldWon:won});if(!won){eliminateFromEurope(c,stage);return}
  if(nextStage==='冠军'){c.stage='冠军';c.wonTitle=true;const trophy=`${c.competition} 冠军`,reason=`${currentSeason()} 随 ${c.club} 赢得 ${c.competition}，洲际赛事出场 ${c.played} 次。`;state.trophies.unshift({name:trophy,season:currentSeason(),reason,image:awardImage(trophy),team:true,club:c.club,type:'continental'});addFeed('洲际冠军之夜',`${c.club} 击败 ${opponent[0]}，捧起 ${c.competition} 奖杯。`,'♜');addEvent('赢得洲际冠军',reason,'♜')}else{c.stage=nextStage;addFeed('洲际赛事晋级',`${c.club} 淘汰 ${opponent[0]}，晋级${nextStage}。`,'◆')}
}
function leagueMatchTarget(league){return league?.short==='美职联'?34:league?.short==='苏超'?38:Math.max(1,((league?.clubs.length||20)-1)*2)}
function currentLeagueSchedule(s,league,club=state.club){
  ensureSeasonBreakdown(s);if(s.leagueSchedules[club])return s.leagueSchedules[club];
  const opponents=league.clubs.filter(team=>team[0]!==club),target=leagueMatchTarget(league),schedule=[];
  while(schedule.length<target){schedule.push(...opponents.slice().sort(()=>Math.random()-.5).map(team=>team[0]))}
  return s.leagueSchedules[club]=schedule.slice(0,target);
}
function seedTeamRecordForArrival(league,clubStrength,month){
  const played=Math.round(leagueMatchTarget(league)*Math.min(month,10)/10),winRate=clamp(.27+(clubStrength-70)*.012,.2,.72),drawRate=.24,wins=Math.min(played,Math.round(played*winRate)),draws=Math.min(played-wins,Math.round(played*drawRate)),losses=played-wins-draws,gf=Math.max(0,Math.round(played*(1.15+(clubStrength-70)*.018))),ga=Math.max(0,Math.round(played*(1.35-(clubStrength-70)*.012)));return{played,wins,draws,losses,gf,ga,points:wins*3+draws};
}
function simulateTrackedTeamUntil(s,club,targetPlayed){
  ensureSeasonBreakdown(s);const league=leagueForClub(club),clubData=clubByName(club);if(!league||!clubData)return;const record=currentTeamLeagueRecord(s,club),target=Math.min(leagueMatchTarget(league),Math.max(record.played,targetPlayed)),opponents=league.clubs.filter(team=>team[0]!==club);
  while(record.played<target){const opponent=pick(opponents),home=Math.random()<.5,score=home?simulateClubScore(clubData,opponent,{formStore:s.teamForm}):simulateClubScore(opponent,clubData,{formStore:s.teamForm}),goals=home?score.homeGoals:score.awayGoals,against=home?score.awayGoals:score.homeGoals,result=goals>against?'胜':goals<against?'负':'平';record.played++;record.gf+=goals;record.ga+=against;if(result==='胜'){record.wins++;record.points+=3}else if(result==='平'){record.draws++;record.points++}else record.losses++;pushTeamForm(s.teamForm,club,result==='胜'?3:result==='平'?1:0);pushTeamForm(s.teamForm,opponent[0],result==='负'?3:result==='平'?1:0)}
}
function advanceInactiveTrackedTeams(s,month){
  ensureSeasonBreakdown(s);Object.keys(s.teamLeagueRecords).filter(club=>club!==state.club).forEach(club=>{const league=leagueForClub(club);if(!league)return;const target=month>=10?leagueMatchTarget(league):Math.round(leagueMatchTarget(league)*(month+1)/10);simulateTrackedTeamUntil(s,club,target)});
}
function completeTrackedTeamRecords(s){
  ensureSeasonBreakdown(s);Object.keys(s.teamLeagueRecords).forEach(club=>{const league=leagueForClub(club);if(league)simulateTrackedTeamUntil(s,club,leagueMatchTarget(league))});
}
function simulateMonth(playerUnavailable=false){
  const youth=state.age<16,league=leagueForClub(state.club),season=seasonStats(),targetMatches=leagueMatchTarget(league),record=currentTeamLeagueRecord(season),schedule=youth?[]:currentLeagueSchedule(season,league),remaining=Math.max(0,targetMatches-record.played),scheduledByMonth=state.month>=10?targetMatches:Math.round(targetMatches*(state.month+1)/10),fixtures=youth?rand(2,4):Math.min(remaining,Math.max(0,scheduledByMonth-record.played));let apps=0,goals=0,assists=0,clean=0;const monthReports=[];
  if(!youth)advanceInactiveTrackedTeams(season,state.month);
  for(let i=0;i<fixtures;i++){const opponentName=schedule[record.played],opponent=league?.clubs.find(team=>team[0]===opponentName)||pickDomesticOpponent(),r=simulateFixture(youth?'青年联赛':league?.short||'国内联赛',opponent,false);monthReports.push(r);if(r.appeared){apps++;goals+=r.goals;assists+=r.assists;clean+=r.cleanSheet?1:0}}
  const perf=goals*4+assists*3+clean*2+apps;if(!playerUnavailable){state.trust=clamp(state.trust+rand(-2,2)+Math.floor(perf/6),10,100);state.fitness=clamp(state.fitness-rand(6,14)+rand(2,7),20,100);state.morale=clamp(state.morale+rand(-4,5)+(goals+assists+clean>1?3:0),10,100);applyMonthlyDevelopment()}
  const summary=playerUnavailable?`球队完成 ${fixtures} 场联赛，你因伤缺席。`:state.pos==='GK'?`${apps} 次出场，完成 ${clean} 场零封。`:`${apps} 次出场，贡献 ${goals} 球 ${assists} 助攻。`;addFeed(`${MONTHS[state.month]}战报`,summary,goals+assists+clean?'★':'›');
  const standout=monthReports.filter(r=>r.appeared).sort((a,b)=>(b.rating||0)-(a.rating||0))[0];if(standout&&standout.rating>=8)addFeed('单场高光',`${standout.competition}对阵 ${standout.opponent}：${reportPerformanceText(standout)}，获评 ${standout.rating}。`,'★');
}
function simulateLeagueTable(s){
  const seasonClub=s.finalClub||state.club||s.club,league=leagueForClub(seasonClub);if(!league)return[];completeTrackedTeamRecords(s);const clubs=league.clubs,targetMatches=league.short==='美职联'?34:league.short==='苏超'?38:(clubs.length-1)*2,playerBoost=clamp(seasonPerformanceScore()*.32,0,2.5);
  const table=clubs.map(c=>({name:c[0],code:c[1],strength:c[3]+(c[0]===seasonClub?playerBoost:0),played:0,wins:0,draws:0,losses:0,gf:0,ga:0,gd:0,points:0}));
  const byName=Object.fromEntries(table.map(t=>[t.name,t])),rotation=clubs.map(c=>c[0]),rounds=[];for(let round=0;round<rotation.length-1;round++){const pairs=[];for(let i=0;i<rotation.length/2;i++)pairs.push([rotation[i],rotation[rotation.length-1-i]]);rounds.push(pairs);rotation.splice(1,0,rotation.pop())}
  const simulatedForm={},play=(homeName,awayName)=>{const home=byName[homeName],away=byName[awayName],score=simulateClubScore(home,away,{formStore:simulatedForm}),homeGoals=score.homeGoals,awayGoals=score.awayGoals;home.played++;away.played++;home.gf+=homeGoals;home.ga+=awayGoals;away.gf+=awayGoals;away.ga+=homeGoals;if(homeGoals>awayGoals){home.wins++;away.losses++;home.points+=3;pushTeamForm(simulatedForm,homeName,3);pushTeamForm(simulatedForm,awayName,0)}else if(homeGoals<awayGoals){away.wins++;home.losses++;away.points+=3;pushTeamForm(simulatedForm,homeName,0);pushTeamForm(simulatedForm,awayName,3)}else{home.draws++;away.draws++;home.points++;away.points++;pushTeamForm(simulatedForm,homeName,1);pushTeamForm(simulatedForm,awayName,1)}};
  let cycle=0;while(table.some(t=>t.played<targetMatches)&&cycle<6){for(let r=0;r<rounds.length&&table.some(t=>t.played<targetMatches);r++){rounds[r].forEach(([a,b],i)=>{if(byName[a].played>=targetMatches||byName[b].played>=targetMatches)return;const swap=(cycle+r+i)%2===1;play(swap?b:a,swap?a:b)})}cycle++}
  table.forEach(t=>{t.gd=t.gf-t.ga;t.strength=Math.round(t.strength)});
  Object.entries(s.teamLeagueRecords||{}).forEach(([club,record])=>{const row=table.find(team=>team.name===club);if(row&&record.played)Object.assign(row,{played:record.played,wins:record.wins,draws:record.draws,losses:record.losses,gf:record.gf,ga:record.ga,points:record.points,gd:record.gf-record.ga})});
  s.teamLeagueRecord=s.teamLeagueRecords?.[seasonClub]||s.teamLeagueRecord;
  const mine=table.find(t=>t.name===seasonClub);
  table.sort((a,b)=>b.points-a.points||b.gd-a.gd||b.gf-a.gf||b.wins-a.wins);table.forEach((t,i)=>t.rank=i+1);
  s.finalClub=seasonClub;s.leagueRank=mine?.rank||clubs.length;s.leaguePoints=mine?.points||0;s.leagueTable=table;s.leagueName=league.name;s.leagueShort=league.short;s.leagueTier=league.tier||1;s.leagueMatches=targetMatches;
  if(league.short==='美职联'){
    let playoff=table.slice(0,8);while(playoff.length>1){const next=[];for(let i=0;i<playoff.length/2;i++){const higher=playoff[i],lower=playoff[playoff.length-1-i],chance=clamp(.54+(higher.strength-lower.strength)*.022+(higher.rank<lower.rank?.045:0),.24,.8);next.push(Math.random()<chance?higher:lower)}playoff=next}
    s.mlsCupChampionClub=playoff[0]?.name;s.mlsCupChampion=s.mlsCupChampionClub===seasonClub;
    if(s.mlsCupChampion){const name='MLS Cup 冠军',reason=`${s.season} 赛季随 ${seasonClub} 赢得 MLS 季后赛并夺得 MLS Cup。`;state.trophies.unshift({name,season:s.season,reason,image:leagueTrophyImage(league.short),league:league.short,type:'league',team:true,club:seasonClub});addEvent('赢得 MLS Cup',reason,'♜');addFeed('MLS Cup 冠军',`${seasonClub} 在季后赛中连续晋级并捧杯。`,'♜')}
  }
  if(s.leagueRank===1){const name=league.short==='美职联'?'MLS Supporters’ Shield':`${league.short} 联赛冠军`,reason=`${s.season} 赛季以 ${s.leaguePoints} 分随 ${seasonClub} 获得 ${league.name}${league.short==='美职联'?'常规赛头名':'冠军'}。`;state.trophies.unshift({name,season:s.season,reason,image:leagueTrophyImage(league.short),league:league.short,type:'league',team:true,club:seasonClub});addEvent('赢得联赛冠军',reason,'♜');addFeed('联赛冠军',`${seasonClub} 登上 ${league.short} 积分榜首位，你收获一座联赛奖杯。`,'♜')}return table;
}
function leagueGoldenTarget(league,s){
  const short=league?.short||'所在联赛';s.leagueGoldenTargets=s.leagueGoldenTargets||{};if(s.leagueGoldenTargets[short])return s.leagueGoldenTargets[short];const range=['英超','西甲','德甲','意甲','法甲'].includes(short)?[22,31]:short==='沙特联'?[19,28]:short==='美职联'?[18,25]:short==='中超'?[15,23]:[18,28];return s.leagueGoldenTargets[short]=rand(range[0],range[1]);
}
function addTrophy(name,s,reason,personal=true){
  if(state.trophies.some(t=>t.name===name&&t.season===s.season))return;state.trophies.unshift({name,season:s.season,reason,image:awardImage(name),personal});addEvent(`赢得${name}`,reason,'♜');addFeed(`荣膺${name}`,`${state.name} 获得 ${name}，奖项已经加入主页荣誉橱窗。`,'♜');playSfx('trophy');
}
if(!AWARDS.some(a=>a.name==='联赛金靴奖'))AWARDS.splice(3,0,{name:'联赛金靴奖',icon:'♟',mark:'L',desc:'授予所在国内联赛当赛季获得金靴的球员。',rule:'非门将 · 所在联赛赛季金靴'});
function awardImage(name){
  const label=String(name||''),national=nationalTrophyImage(label);if(national)return national;
  const specialKey=Object.keys(SPECIAL_TROPHY_IMAGES).find(key=>label.includes(key));if(specialKey)return SPECIAL_TROPHY_IMAGES[specialKey];
  const league=LEAGUES.find(l=>label.includes(l.short)&&label.includes('联赛冠军'));if(league)return leagueTrophyImage(league.short);
  const cupKey=Object.keys(DOMESTIC_CUP_TROPHY_IMAGES).find(key=>label.includes(key));if(cupKey)return DOMESTIC_CUP_TROPHY_IMAGES[cupKey];
  const continentalKey=Object.keys(CONTINENTAL_TROPHY_IMAGES).find(key=>label.includes(key));if(continentalKey)return CONTINENTAL_TROPHY_IMAGES[continentalKey];
  if(label.includes('金靴'))return AWARD_IMAGES['欧洲金靴奖'];if(label.includes('金球'))return AWARD_IMAGES['金球奖'];if(label.includes('雅辛')||label.includes('金手套'))return AWARD_IMAGES['雅辛奖 · 金手套'];if(label.includes('金童'))return AWARD_IMAGES['欧洲金童奖'];return AWARD_IMAGES.DEFAULT;
}
function evaluateAwards(s){
  ensureSeasonBreakdown(s);const seasonClub=s.finalClub||state.club||s.club,league=leagueForClub(seasonClub),groups=leagueStatGroups(s),finalLeagueStats=groups[league?.short]?.stats||emptyStatLine(),totalStats=s.stats.total,rating=+totalStats.rating||0,output=state.pos==='GK'?totalStats.cleanSheets*3+totalStats.apps+rating*2:totalStats.goals*4+totalStats.assists*2+totalStats.apps*.3+rating*2;
  if(regionForLeague(league)==='UEFA'&&league?.tier!==2&&state.age<=21&&output>58&&state.overall>=70)addTrophy('欧洲金童奖',s,awardReason('欧洲金童奖',s));
  if(state.pos==='GK'&&finalLeagueStats.cleanSheets>=12&&state.overall>=78)addTrophy('雅辛奖 · 金手套',s,awardReason('雅辛奖 · 金手套',s));
  if(state.pos!=='GK'){
    const leagueGoals=finalLeagueStats.goals,target=leagueGoldenTarget(league,s);if(leagueGoals>=target)addTrophy(`${league?.short||'联赛'}金靴奖`,s,`${s.season} 赛季在 ${league?.short||'所在联赛'}攻入 ${leagueGoals} 个进球，获得联赛金靴奖。`);
    const europeanEntries=Object.values(groups).filter(group=>group.league&&regionForLeague(group.league)==='UEFA'&&group.league.tier!==2),points=europeanEntries.reduce((sum,group)=>sum+group.stats.goals*(['英超','西甲','德甲','意甲','法甲'].includes(group.league.short)?2:1.5),0),europeGoals=europeanEntries.reduce((sum,group)=>sum+group.stats.goals,0),targetPoints=s.europeGoldenTargetPoints=s.europeGoldenTargetPoints||rand(56,66);
    if(points>=targetPoints)addTrophy('欧洲金靴奖',s,`${s.season} 赛季在欧洲联赛分段攻入 ${europeGoals} 球并按各联赛系数累计，获得欧洲金靴奖。`);
  }
  if(state.overall>=88&&output>108)addTrophy('金球奖',s,awardReason('金球奖',s));
}
function settleSeasonValue(s){
  const before=state.value||0;updateValue();if(state.flags.pendingValueMultiplier){state.value=Math.round(state.value*state.flags.pendingValueMultiplier);delete state.flags.pendingValueMultiplier}if(!state.wage)updateSalary();s.valueBefore=before;s.valueAfter=state.value;s.valueChange=state.value-before;
  if(before<10000&&state.value>=10000){s.valueMilestone=true;addEvent('身价突破一亿欧元',`${s.season} 赛季结算后身价达到 ${money(state.value)}，正式进入足坛亿元球星行列。`,'€');addFeed('亿元球星诞生',`赛季身价结算：${money(before)} → ${money(state.value)}。俱乐部和媒体给予最高级别关注。`,'€')}
  else{const sign=s.valueChange>0?'+':s.valueChange<0?'-':'';addFeed('赛季身价结算',`${money(before)} → ${money(state.value)}（${sign}${money(Math.abs(s.valueChange))}）。身价只在赛季结束时更新。`,'€')}
}
function settleContractSeason(s){
  if(state.age<16)return;const terms=ensureContractTerms(),stats=s.stats.total,signedThisSeason=terms.signedSeason===s.season,contractStarts=Math.max(0,(Number(stats.starts)||0)-(signedThisSeason?Number(terms.startsBaseline)||0:0)),contractApps=Math.max(0,(Number(stats.apps)||0)-(signedThisSeason?Number(terms.appsBaseline)||0:0)),roleTarget=terms.rolePromise==='核心'?24:terms.rolePromise==='主力'?18:terms.rolePromise==='轮换'?10:0;
  if(roleTarget){
    if(contractStarts>=roleTarget){state.morale=clamp(state.morale+4,0,100);addFeed('合同角色承诺兑现',`${terms.rolePromise}承诺得到兑现：合同生效后完成 ${contractStarts} 次首发。`,'§')}
    else{state.flags.promiseBroken=true;state.morale=clamp(state.morale-7,0,100);state.relationships.agent=clamp((state.relationships.agent||50)+5,0,100);addFeed('合同角色承诺未兑现',`合同约定${terms.rolePromise}定位，但合同生效后只有 ${contractStarts} 次首发。经纪人建议续约谈判或申请转会。`,'!')}
  }
  const qualified=!!s.continentalQualification;
  if(qualified&&terms.continentalBonus){s.bonusEarnings=(Number(s.bonusEarnings)||0)+terms.continentalBonus;state.careerBonusEarnings=(Number(state.careerBonusEarnings)||0)+terms.continentalBonus;addFeed('欧战资格奖金到账',`${s.finalClub||state.club} 获得洲际赛事资格，合同奖金 ${salaryAmount(terms.continentalBonus)} 已结算。`,'€')}
  if(s.relegated&&terms.relegationPayCut<1){state.wage=Math.round(state.wage*terms.relegationPayCut/100)*100;addFeed('降级降薪条款生效',`固定周薪调整为 ${weeklySalaryText(state.wage)}。`,'€')}
  if(contractApps>=terms.autoExtensionApps&&state.contractEnd-state.year<=1){state.contractEnd++;addFeed('自动续约条款触发',`合同生效后出场达到 ${terms.autoExtensionApps} 场，合同自动延长至 ${state.contractEnd}。`,'§')}
}
function endSeason(silent=false){
  const s=seasonStats(),stint=currentSeasonStint(s);stint.toMonth=11;s.finalClub=state.club;s.done=true;simulateLeagueTable(s);ensureUefaPerformanceSpots(s);s.continentalQualification=calculateContinentalQualification(s);settleShortChallengeAtSeasonEnd(s);settleSeasonObjective(s);evaluateAwards(s);if(state.continentalCurrent)archiveContinentalCampaign(state.continentalCurrent);settlePromotionRelegation(s);settleContractSeason(s);const oldAge=state.age;state.year++;state.age++;
  if(oldAge===15){state.contractEnd=state.year+4;state.trust=48;addEvent('签下职业合同',`年满 16 岁，与 ${state.club} 签下第一份职业合同。`,'✎');addFeed('升入一线队',`${state.name} 正式进入 ${state.club} 一线队名单。`,'↑')}
  settleSeasonValue(s);if(oldAge===15){state.contract={...contractOfferTerms(state.wage,state.clubStrength,'轮换'),signedSeason:`${state.year}/${String(state.year+1).slice(-2)}`,signedMonth:0,appsBaseline:0,startsBaseline:0};state.contract.releaseClause=0}if(state.age>=35&&Math.random()<.22+(state.age-35)*.18){retire();return s}
  state.month=0;state.flags.seasonEventCount=0;state.flags.lastEventCategory='';state.seasons.push(newSeason(state.year,state.club));state.continentalCurrent=createContinentalCampaign();state.fitness=state.injured?state.fitness:94;state.morale=clamp(state.morale+5,0,100);state.trust=clamp(state.trust-5,20,100);addFeed('新赛季开始',`${currentSeason()} 赛季拉开帷幕。上赛季联赛排名：第 ${s.leagueRank} 名。${s.continentalQualification?` 已通过“${s.continentalQualification.route}”获得 ${s.continentalQualification.competition} 资格。`:' 未获得下赛季洲际赛事资格。'}`,'◉');setPendingDecision({type:'seasonObjective'});renderAll();if(!silent)showSeasonRecap(s);return s;
}
function ambientEvent(){
  const pool=[
    ['训练节奏调整','教练组减少一次高强度训练，你的身体状态得到恢复。',{fitness:7,morale:1},'+'],
    ['社区开放日','你与球迷完成一次轻松互动，关注度和归属感提高。',{morale:5,fans:3},'♡'],
    ['录像复盘','一次安静的赛后复盘帮助你理解位置细节。',{trust:3,fitness:-2},'▥'],
    ['队内聚餐','更衣室在密集赛程间得到放松。',{morale:5,fitness:2},'◇'],
    ['商业拍摄','品牌曝光提高，但占用了部分休息时间。',{morale:2,fitness:-5},'◌']
  ],e=pick(pool);state.fitness=clamp(state.fitness+(e[2].fitness||0),0,100);state.morale=clamp(state.morale+(e[2].morale||0),0,100);if(e[2].trust)state.trust=clamp(state.trust+e[2].trust,0,100);if(e[2].fans)state.relationships.fans=clamp(state.relationships.fans+e[2].fans,0,100);addFeed(e[0],e[1],e[3]);
}
function maybeRandomEvent(months=2){
  if(state.flags.relegationChoicePending){state.flags.seasonEventCount=(state.flags.seasonEventCount||0)+1;return triggerCareerEvent('relegation_decision')}
  if(state.flags.promotionChoicePending){state.flags.seasonEventCount=(state.flags.seasonEventCount||0)+1;return triggerCareerEvent('promotion_role_talk')}
  const profile=state.profile||{},now=state.year*12+state.month,injuryRisk=clamp(((profile.personality==='自律'?.035:.05)+(state.flags.overloaded?.03:0)+(state.flags.rushedReturnMonths?.05:0)+(state.fitness<45?.04:0))*(months/2),.025,.24);
  if(state.flags.rushedReturnMonths){state.flags.rushedReturnMonths--;if(!state.flags.rushedReturnMonths)delete state.flags.rushedReturnMonths}if(!state.injured&&Math.random()<injuryRisk)return triggerInjury();
  const transferChance=state.flags.transferRequested?.72:(profile.agentStyle==='进取'?.16:profile.agentStyle==='忠诚'?.055:.1);if(state.flags.transferWindowOpen&&state.age>=16&&Math.random()<transferChance){state.flags.transferWindowOpen=false;return transferOffer()}state.flags.transferWindowOpen=false;
  const count=state.flags.seasonEventCount||0,cool=now-(state.flags.lastInteractiveEventMonth||-99),targetByNow=Math.min(5,Math.floor((state.month+2)/2.4)),eventChance=count<targetByNow ? .44 : .09;if(count<5&&cool>=2&&Math.random()<eventChance){const triggered=triggerCareerEvent();if(triggered){state.flags.seasonEventCount=count+1;state.flags.lastInteractiveEventMonth=now;return true}}
  return false;
}
function advanceCareer(monthCount){
  if(state.retired)return;if(state.pendingDecision){restorePendingDecision();toast('请先完成当前选择');return}
  if(maybeObjectiveCheckpoint()){state.flags.pendingAdvanceMonths=monthCount;renderAll();updateAdvanceUI();return}
  delete state.flags.pendingAdvanceMonths;state.flags.transferWindowOpen=false;
  for(let step=0;step<monthCount&&!state.retired;step++){
    if([0,5,10,11].includes(state.month))state.flags.transferWindowOpen=true;
    const previousReports=new Set((state.matchReports||[]).map(report=>report.matchId)),wasInjured=state.injured>0;state.flags.playerUnavailableThisMonth=wasInjured;simulateMonth(wasInjured);simulateContinentalMonth();simulateDomesticCupMonth();simulateNationalMonth();
    if(wasInjured){state.injured--;state.fitness=clamp(state.fitness+rand(12,21),0,100);state.morale=clamp(state.morale+rand(-3,4),0,100);if(!state.injured)finishRecovery();else if(step%2===0)addFeed('康复进度',`${state.injuryDetail?.name||'伤病'}恢复中，预计还需 ${state.injured} 个月。`,'+')}
    if(state.flags.positionTransitionMonths){state.flags.positionTransitionMonths--;if(!state.flags.positionTransitionMonths){delete state.flags.positionTransitionMonths;addFeed('位置适应完成',`你已经完成 ${state.pos} 位置的熟练度适应。`,'↔')}}
    updateSquadCompetitionMonth();updateShortChallenge();delete state.flags.playerUnavailableThisMonth;state.month++;queueObjectiveCheckpoint();
    const remaining=monthCount-step-1;
    if(state.month>=12){const finished=endSeason(true);if(remaining>0)state.flags.pendingAdvanceMonths=remaining;renderAll();showSeasonRecap(finished,remaining);return}
    const newReports=(state.matchReports||[]).filter(report=>report.matchId&&!previousReports.has(report.matchId));if(!wasInjured&&maybeKeyMatchDecision(newReports)){if(remaining>0)state.flags.pendingAdvanceMonths=remaining;renderAll();updateAdvanceUI();return}
    if(maybeObjectiveCheckpoint()){if(remaining>0)state.flags.pendingAdvanceMonths=remaining;renderAll();updateAdvanceUI();return}
    if(!wasInjured&&maybeRandomEvent(1)){if(remaining>0)state.flags.pendingAdvanceMonths=remaining;renderAll();updateAdvanceUI();return}
  }
  if(state.retired)return;if(monthCount>=6)ambientEvent();renderAll();
}
function advanceTwoMonths(){if(state.pendingDecision){restorePendingDecision();toast('请先完成当前选择');return}const pending=Number(state.flags.pendingAdvanceMonths)||0;if(pending)delete state.flags.pendingAdvanceMonths;advanceCareer(pending||+($('#advance-span')?.value||2))}
function updateAdvanceUI(){
  const select=$('#advance-span');if(!select||!state)return;const decision=!!state.pendingDecision,pending=Number(state.flags.pendingAdvanceMonths)||0,months=pending||+select.value,label=pending?`剩余 ${pending} 个月`:months===2?'两个月':months===6?'半个赛季':'一个赛季';
  $('#next-title').textContent=state.retired?'传奇已经谢幕':decision?'先完成当前选择':pending?`继续推进${label}`:state.injured?`${label}：康复与赛程继续推进`:`推进${label}`;
  $('#next-desc').textContent=state.retired?'你的生涯数据已经定格。':decision?'赛季目标、比赛选择、伤病方案、转会报价或职业事件尚未处理；刷新页面后也会继续恢复。':pending?'上一段推进因关键事件暂停；处理完成后可从这里继续。':`将逐月模拟未来 ${months} 个月；联赛、杯赛和关键比赛选择会共同推进。`;
  $('#advance-btn').disabled=state.retired||decision;$('#advance-btn').innerHTML=state.retired?'生涯已结束':decision?'等待选择':`${pending?'继续推进':'推进'}${label} <b>→</b>`;
  $('#mobile-advance-btn').disabled=state.retired||decision;$('#mobile-advance-btn').innerHTML=state.retired?'生涯已结束':decision?'等待选择':`${pending?'继续推进':'推进'}${label} <b>→</b>`;
  $$('[data-mobile-span]').forEach(button=>button.classList.toggle('active',+button.dataset.mobileSpan===months));
}
function destinationSalaryFactor(short){const league=LEAGUES.find(l=>l.short===short);if(league?.tier===2)return.58;return short==='沙特联'?1.9:short==='美职联'?1.05:short==='中超'?.72:['J1联赛','K联赛1'].includes(short)?.76:1}
function transferOffers(){
  const currentCountry=leagueForClub(state.club)?.country,perf=seasonPerformanceScore(),youthUpside=state.age<=22?Math.min(5,(state.potential-state.overall)*.18):0,marketLevel=state.overall+perf+youthUpside;
  let clubs=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c,league:l}))).filter(x=>x.club[0]!==state.club);if(state.age<18)clubs=clubs.filter(x=>x.league.country===currentCountry);
  clubs=clubs.filter(x=>{const strength=x.club[3],required=strength-(strength>=90?10:strength>=82?13:16),floor=state.age>=33?marketLevel-20:marketLevel-13;return marketLevel>=required&&strength>=Math.max(64,floor)&&strength<=marketLevel+22});
  if(!clubs.length)clubs=LEAGUES.flatMap(l=>l.clubs.map(c=>({club:c,league:l}))).filter(x=>x.club[0]!==state.club&&(state.age>=18||x.league.country===currentCountry)).sort((a,b)=>Math.abs(a.club[3]-(marketLevel+8))-Math.abs(b.club[3]-(marketLevel+8))).slice(0,7);
  clubs.sort((a,b)=>(Math.abs(a.club[3]-(marketLevel+9))+Math.random()*7)-(Math.abs(b.club[3]-(marketLevel+9))+Math.random()*7));
  return clubs.slice(0,Math.min(clubs.length,rand(2,4))).map(x=>{const years=Math.max(1,state.contractEnd-state.year),clause=ensureContractTerms().releaseClause,marketFee=Math.round(state.value*(.9+Math.random()*.22)*(1+Math.min(4,years)*.025)),fee=state.flags.transferRequested&&clause?Math.min(marketFee,clause):marketFee,factor=destinationSalaryFactor(x.league.short),wage=Math.min(x.league.short==='沙特联'?1600000:x.league.short==='美职联'?900000:x.league.short==='中超'?250000:750000,Math.max(600,Math.round(Math.exp((state.overall-55)/6.15)*820*(x.club[3]/82)*factor*(1+perf*.04)/100)*100)),terms=contractOfferTerms(wage,x.club[3]);return{club:x.club,league:x.league,wage,fee,rank:worldRank(x.club[0]),terms,dealType:'永久转会'}}).sort((a,b)=>a.rank-b.rank);
}
function transferOffer(){
  if(state.age<16){addFeed('转会规则限制','未满 16 岁，暂不进入职业转会市场。','×');return false}const offers=transferOffers();if(!offers.length)return false;
  return showTransferDecision(offers,true);
}
function completeTransfer(offer){
  const c=offer.club,old=state.club,oldLeague=leagueForClub(old),season=seasonStats(),oldStint=currentSeasonStint(season);oldStint.toMonth=state.month;
  if(season.shortChallenge&&!season.shortChallenge.settled){season.shortChallenge.settled=true;season.shortChallenge.completed=false;season.shortChallenge.reason='转会中断';season.shortChallengeHistory.push({...season.shortChallenge});season.shortChallenge=null;state.flags.shortChallengeCooldownUntil=state.year*12+state.month+1}
  leaveContinentalCampaignOnTransfer(old,c[0]);leaveDomesticCupOnTransfer(old,c[0]);state.club=c[0];state.clubCode=c[1];state.clubColor=c[2];state.clubStrength=c[3];state.wage=offer.wage;state.contract={...contractOfferTerms(offer.wage,c[3]),...(offer.terms||{}),signedSeason:currentSeason(),signedMonth:state.month,appsBaseline:Number(season.stats.total.apps)||0,startsBaseline:Number(season.stats.total.starts)||0};season.finalClub=c[0];season.stints.push(createSeasonStint(c[0],state.month));
  if(!season.teamLeagueRecords[c[0]])season.teamLeagueRecords[c[0]]=seedTeamRecordForArrival(offer.league,c[3],state.month);season.teamLeagueRecord=season.teamLeagueRecords[c[0]];
  state.trust=clamp(48+(state.overall-(c[3]-12))*2,25,72);state.contractEnd=state.year+rand(3,5);state.flags.lastNegotiationSeason=currentSeason();if(oldLeague&&offer.league.country!==oldLeague.country){state.flags.needsAdaptation=true;state.flags.foreignAdaptationMonths=rand(4,10)}delete state.flags.transferRequested;delete state.flags.frozenOut;delete state.flags.transferRequestMonth;delete state.flags.promiseBroken;delete state.flags.lastDecisionCenterActionMonth;ensureSquadCompetition();
  clearPendingDecision();addFeed('转会完成',`${state.name} 以约 ${money(offer.fee)} 的报价从 ${old} 转会加盟 ${c[0]}，周薪 ${weeklySalaryText(offer.wage)}，获得${state.contract.rolePromise}承诺。`,'↗');addEvent('完成转会',`加盟参考排名第 ${offer.rank} 的 ${c[0]}；新合同包含比赛奖金、解约金和角色承诺。`,'↗');closeModal();renderAll();playSfx('transfer');toast('转会已完成');
}
function recentSeason(){return state.seasons.slice().reverse().find(s=>s.done&&s.leagueRank)}
function seasonTrophies(season){return state.trophies.filter(t=>t.season===season)}
function renderSeasonSummary(){
  const el=$('#season-summary-panel'),s=recentSeason();if(!s){el.classList.add('hidden');el.innerHTML='';return}el.classList.remove('hidden');
  const seasonClub=s.finalClub||s.club,me=s.leagueTable?.findIndex(t=>t.name===seasonClub),start=Math.max(0,(me<0?0:me)-1),rows=(s.leagueTable||[]).slice(start,start+3);
  const movements=(s.leagueMovements||[]).map(m=>`<span class="${m.direction}">${m.club} ${m.direction==='up'?'升级':'降级'}</span>`).join('');
  el.innerHTML=`<div class="section-head"><div><p class="eyebrow">LAST SEASON</p><h3>赛季排名结算</h3></div><span class="tag">${s.season}</span></div><div class="season-rank-hero"><div><span>${s.leagueName||'国内联赛'}</span><small>${seasonClub} · ${s.leaguePoints} 分</small></div><strong>第 ${s.leagueRank} 名</strong></div><div class="mini-table">${rows.map(t=>`<div class="mini-table-row ${t.name===seasonClub?'me':''}"><span>${t.rank}</span><span>${t.name}</span><small>${t.wins}-${t.draws}-${t.losses}</small><b>${t.points}</b></div>`).join('')}</div>${movements?`<div class="league-movement-badges">${movements}</div>`:''}`;
}
function showSeasonRecap(s,postMonths=0){
  const seasonClub=s.finalClub||s.club,trophies=seasonTrophies(s.season),league=LEAGUES.find(item=>item.short===s.leagueShort)||leagueForClub(seasonClub),continentalCutoff=continentalQualificationCutoff(league),badges=[`联赛第 ${s.leagueRank} 名`,s.relegated?'随队降级':s.promoted?'随队升级':'完成联赛征程',`${s.apps} 次出场`,state.pos==='GK'?`${s.cleanSheets} 场零封`:`${s.goals} 球 ${s.assists} 助攻`,...trophies.map(t=>t.name)];
  if(s.valueMilestone)badges.unshift('★ 身价突破一亿欧元');
  const table=(s.leagueTable||[]).map(t=>`<div class="standing-row ${t.name===seasonClub?'me':t.rank===1?'champion':continentalCutoff&&t.rank<=continentalCutoff?'europe-zone':t.rank>(s.leagueTable.length-3)?'relegation':''}"><span>${t.rank}</span><span>${t.name}</span><span>${t.played}</span><span>${t.wins}</span><span>${t.draws}</span><span>${t.losses}</span><span>${t.gf}:${t.ga}</span><span>${t.gd>=0?'+':''}${t.gd}</span><b>${t.points}</b></div>`).join('');
  const head='<div class="standing-row standing-head"><span>#</span><span>球队</span><span>赛</span><span>胜</span><span>平</span><span>负</span><span>进:失</span><span>净胜</span><b>分</b></div>';
  const objectiveAction=[postMonths?`制定目标后继续剩余 ${postMonths} 个月`:'制定新赛季目标',()=>{
    closeModal();
    if(postMonths)state.flags.pendingAdvanceMonths=postMonths;
    showSeasonObjectiveDecision(true);
  },true,'先选择新赛季方向；目标、阶段进度、奖励与失败后果会持续显示在主页'];
  showModal({icon:s.leagueRank===1?'♜':'✓',kicker:'赛季结束 · 最终积分榜',title:`${seasonClub} 最终排名第 ${s.leagueRank}`,body:`${s.season} 赛季已经结算。身价 ${money(s.valueBefore||0)} → ${money(s.valueAfter||0)}，新赛季周薪为 ${weeklySalaryText(state.wage||0)}。${s.continentalQualification?`洲际资格：${s.continentalQualification.route}。`:'球队未获得下赛季洲际赛事资格。'}${postMonths?` 本次批量推进还剩 ${postMonths} 个月，已在赛季边界暂停。`:''}`,extra:`<div class="season-badges">${badges.map(b=>`<span>${b}</span>`).join('')}</div><div class="standings-modal">${head}${table}</div>`,actions:[objectiveAction],locked:true});
}
function renderAwardShowcase(){
  const el=$('#award-showcase'),items=(state.trophies||[]).slice(0,4);if(!items.length){el.classList.add('hidden');el.innerHTML='';return}el.classList.remove('hidden');
  el.innerHTML=`<div class="honour-title"><div><p class="eyebrow">TROPHY SPOTLIGHT</p><h3>冠军与个人荣誉</h3></div><span>${state.trophies.length} 座</span></div><div class="honour-grid">${items.map((t,i)=>`<div class="honour-card"><img src="${t.image||awardImage(t.name)}" alt="${t.name}" onerror="this.outerHTML='<div class=&quot;award-fallback&quot;>♜</div>'"><div><strong>${t.name}</strong><p>${t.reason||'随球队或凭个人表现赢得的重要荣誉。'}</p><small>${t.season}${i===0?' · 最新荣誉':''}</small></div></div>`).join('')}</div>`;
}
function renderFeed(){
  const majorIcons=['♜','€','★','↗','✚'],feed=Array.isArray(state?.feed)?state.feed:[];$('#feed').innerHTML=feed.slice(0,7).map((f,i)=>`<div class="feed-item ${i===0||majorIcons.includes(f.icon)?'major':''}"><span class="feed-seq">${String(i+1).padStart(2,'0')}</span><div class="feed-icon">${f.icon}</div><div><strong>${f.title}</strong><p>${f.text}</p><time>${f.date}</time></div></div>`).join('')||'<div class="empty-state">故事还没有开始</div>';
}
function renderCareer(){
  if(!state)return;
  const seasons=Array.isArray(state.seasons)?state.seasons:[],trophies=Array.isArray(state.trophies)?state.trophies:[],events=Array.isArray(state.events)?state.events:[];
  const totals=seasons.reduce((a,s)=>{a.apps+=Number(s.apps)||0;a.goals+=Number(s.goals)||0;a.assists+=Number(s.assists)||0;a.clean+=Number(s.cleanSheets)||0;return a},{apps:0,goals:0,assists:0,clean:0});
  $('#career-total').textContent=`总计 ${totals.apps} 场 · ${state.pos==='GK'?totals.clean+' 零封':totals.goals+' 球'} · ${trophies.length} 冠军/奖项`;
  $('#season-table').innerHTML=`<div class="season-head"><span>俱乐部</span><span>赛季</span><span>出场</span><span>${state.pos==='GK'?'零封':'进球'}</span><span>助攻</span><span>评分</span></div>`+seasons.slice().reverse().map(s=>{
    ensureSeasonBreakdown(s);const stints=s.stints||[],mainClub=stints[stints.length-1]?.club||s.finalClub||s.club||state.club,c=clubByName(mainClub)||['','','#63766a'],titles=seasonTrophies(s.season).map(t=>t.name).join(' · '),rank=s.leagueRank?`联赛第${s.leagueRank}名`:'',clubs=stints.map(stint=>`${stint.club} ${Number(stint.apps)||0}场`).join(' → '),detail=stints.length>1?[clubs,rank,titles].filter(Boolean).join(' · '):[rank,titles].filter(Boolean).join(' · ')||'赛季进行中';
    return `<div class="season-row"><span class="team-cell"><i class="mini-dot" style="--club:${c[2]}"></i><span class="team-cell-copy"><strong>${stints.length>1?'赛季内转会':mainClub}</strong><small>${detail}</small></span></span><span>${s.season||currentSeason()}</span><b>${Number(s.apps)||0}</b><b>${state.pos==='GK'?(Number(s.cleanSheets)||0):(Number(s.goals)||0)}</b><span>${Number(s.assists)||0}</span><span>${s.rating||'—'}</span></div>`;
  }).join('');
  $('#timeline').innerHTML=events.map(e=>`<div class="timeline-item"><time>${e.date||'日期未记录'}</time><h4>${e.icon||'✦'} ${e.title||'生涯事件'}</h4><p>${e.text||'旧存档中的事件详情未记录。'}</p></div>`).join('')||'<div class="empty-state">暂无生涯事件，继续推进时间后会在这里记录。</div>';
}
function applyEventEffects(e){
  if(e.trust)state.trust+=e.trust;if(e.fitness)state.fitness+=e.fitness;if(e.morale)state.morale+=e.morale;if(e.overall){const changes={};attributeKeys().forEach(k=>changes[k]=e.overall);changeAttributes(changes)}if(e.potential)state.potential=clamp(state.potential+e.potential,40,100);
  if(e.valuePct)state.flags.pendingValueMultiplier=(state.flags.pendingValueMultiplier||1)*e.valuePct;if(e.wagePct)state.wage=Math.max(1,Math.round(state.wage*e.wagePct));if(e.contractYears)state.contractEnd=Math.max(state.contractEnd||state.year,state.year+e.contractYears);if(e.flag)state.flags[e.flag]=true;if(e.clearFlag)delete state.flags[e.clearFlag];if(e.flags)Object.assign(state.flags,e.flags);if(e.clearFlags)e.clearFlags.forEach(flag=>delete state.flags[flag]);
  if(e.transitionMonths&&state.flags.positionTransitionMonths){state.flags.positionTransitionMonths=Math.max(0,state.flags.positionTransitionMonths+e.transitionMonths);if(!state.flags.positionTransitionMonths){delete state.flags.positionTransitionMonths;addFeed('位置适应提前完成','专项训练帮助你提前掌握新位置要求。','↔')}}
  if(e.relation)Object.entries(e.relation).forEach(([k,v])=>state.relationships[k]=clamp((state.relationships[k]||50)+v,0,100));recalculateOverall();
}
function applyMonthlyDevelopment(){
  const old=state.overall,age=state.age;
  if(age>30){
    const chance=clamp(.07+(age-30)*.032,.07,.45);if(Math.random()>=chance)return;
    const pool=state.pos==='GK'?['physical','pace','reflexes','positioning','oneOnOnes','aerialReach']:['pace','acceleration','physical','stamina','dribbling','ballControl','shooting','defending'],changes={};
    for(let i=0;i<(Math.random()<.22?2:1);i++){const k=pick(pool);changes[k]=(changes[k]||0)-1}changeAttributes(changes);
    if(state.overall<old)addFeed('年龄曲线变化',`${age} 岁后恢复、爆发或技术状态出现随机下滑，能力值 ${old} → ${state.overall}。`,'↓');return;
  }
  const base=age<=17?.52:age<=20?.44:age<=24?.29:age<=29?.11:0;
  const internalGap=Math.max(0,state.potential-state.overall),catchUp=clamp((internalGap-10)/155,0,.17);
  const bonus=(state.profile?.personality==='自律'?.04:0)+(state.morale>84?.025:0)-(state.fitness<45?.075:0);
  const growthChance=clamp(base+catchUp+bonus,.10,.76);
  if(Math.random()>=growthChance||state.overall>=state.potential)return;
  const roll=Math.random(),breakthrough=roll<.15,steady=roll<.76,pool=developmentPool(),changes={};
  const count=breakthrough?(age<=20?rand(6,9):rand(4,6)):steady?(age<=20?rand(4,6):age<=24?rand(3,5):rand(2,3)):(age<=20?rand(2,3):1);
  for(let i=0;i<count;i++){const k=pick(pool);if(state.attributes[k]<100)changes[k]=(changes[k]||0)+(breakthrough&&i===0?2:1)}
  changeAttributes(changes);
  if(state.overall>old){
    const title=breakthrough?'训练突破':steady?'稳定积累':'细节进步';
    addFeed(title,`${state.profile?.playStyle||'位置'}训练在本月转化为能力，能力值 ${old} → ${state.overall}。每个月的提升幅度与具体属性均会随机变化。`,breakthrough?'★':'↑');
  }
}
function legacyV1_retire(){
  state.retired=true;
  addEvent('宣布退役',`${state.age} 岁的 ${state.name} 正式结束职业球员生涯。`,'◉');
  addFeed('传奇谢幕',`从 15 岁起步，到 ${state.age} 岁挂靴，这段生涯共收获 ${state.trophies.length} 项冠军与荣誉。`,'◉');
  renderAll();
  showModal({
    icon:'15',
    kicker:'生涯终章',
    title:'终场哨响',
    body:`${state.age} 岁的你决定挂靴。联赛排名、洲际冠军、个人奖项与每一次选择都已经写入履历。`,
    actions:[
      ['重新开始新生涯',resetGame,true,'清除本次存档，返回球员创建页面'],
      ['回顾生涯履历',()=>{closeModal();showPage('career')},false,'保留本次存档，继续查看数据与荣誉']
    ]
  });
}

/* Version 6: ability-based selection, national teams, three-match form and viewport dashboard. */
const EXTRA_NATIONALITIES={
  '摩洛哥':'ma','尼日利亚':'ng','塞内加尔':'sn','埃及':'eg','喀麦隆':'cm','加纳':'gh','科特迪瓦':'ci',
  '墨西哥':'mx','加拿大':'ca','乌拉圭':'uy','哥伦比亚':'co','智利':'cl','澳大利亚':'au','伊朗':'ir'
};
Object.entries(EXTRA_NATIONALITIES).forEach(([country,code])=>{if(!COUNTRIES.includes(country))COUNTRIES.push(country);COUNTRY_CODES[country]=code});
const NATIONAL_CONFEDS={
  AFC:['中国','日本','韩国','沙特阿拉伯','澳大利亚','伊朗'],
  CAF:['摩洛哥','尼日利亚','塞内加尔','埃及','喀麦隆','加纳','科特迪瓦'],
  CONMEBOL:['巴西','阿根廷','乌拉圭','哥伦比亚','智利'],
  CONCACAF:['美国','墨西哥','加拿大']
};
const NATIONAL_STRENGTH={'阿根廷':94,'巴西':93,'法国':93,'西班牙':92,'英格兰':91,'德国':89,'葡萄牙':89,'荷兰':88,'意大利':88,'比利时':86,'克罗地亚':85,'乌拉圭':85,'哥伦比亚':84,'摩洛哥':84,'日本':82,'美国':80,'墨西哥':80,'塞内加尔':80,'韩国':79,'瑞士':81,'丹麦':80,'挪威':80,'塞尔维亚':79,'瑞典':78,'奥地利':78,'苏格兰':77,'加拿大':77,'尼日利亚':78,'埃及':77,'科特迪瓦':78,'喀麦隆':77,'加纳':75,'沙特阿拉伯':75,'澳大利亚':78,'伊朗':77,'智利':76,'中国':66};
const NATIONAL_OPPONENTS={
  UEFA:['英格兰','西班牙','德国','意大利','法国','葡萄牙','荷兰','比利时','挪威','克罗地亚','塞尔维亚','瑞典','丹麦','瑞士','奥地利','苏格兰'],
  AFC:NATIONAL_CONFEDS.AFC,CAF:NATIONAL_CONFEDS.CAF,CONMEBOL:NATIONAL_CONFEDS.CONMEBOL,CONCACAF:NATIONAL_CONFEDS.CONCACAF
};
function nationalProfile(country){
  const confed=Object.entries(NATIONAL_CONFEDS).find(([,countries])=>countries.includes(country))?.[0]||'UEFA';
  const cups={UEFA:'欧洲杯',AFC:'亚洲杯',CAF:'非洲杯',CONMEBOL:'美洲杯',CONCACAF:'中北美及加勒比海金杯'};
  return{confed,continentalCup:cups[confed],strength:NATIONAL_STRENGTH[country]||78};
}
function newNationalState(){
  const p=nationalProfile(state.country);return{country:state.country,confed:p.confed,continentalCup:p.continentalCup,caps:0,starts:0,goals:0,assists:0,cleanSheets:0,calledUp:false,lastTournamentYear:0,tournaments:[],titles:[]};
}
function ensureNational(){
  if(!state)return null;if(!state.national||state.national.country!==state.country)state.national=newNationalState();
  const p=nationalProfile(state.country);state.national.confed=p.confed;state.national.continentalCup=p.continentalCup;state.national.tournaments=state.national.tournaments||[];state.national.titles=state.national.titles||[];return state.national;
}
function recentFormScore(){
  if(!state?.matchReports?.length)return 6.5;const ratings=state.matchReports.filter(r=>r.appeared&&r.rating).slice(0,3).map(r=>+r.rating);
  return ratings.length?ratings.reduce((n,v)=>n+v,0)/ratings.length:6.5;
}
function positionTransitionPenalty(){return state?.flags?.positionTransitionMonths?clamp(state.flags.positionTransitionMonths*.025,.025,.15):0}
function projectedClubSelection(){
  const youth=state.age<16,form=recentFormScore(),benchmark=youth?50:state.clubStrength-20,gap=state.overall-benchmark;
  const rows=squadCompetitionRows(),playerRank=rows.find(row=>row.isPlayer)?.rank||1,availableSlots=state.pos==='GK'?1:['LW','RW','LB','RB','CB','CM'].includes(state.pos)?2:1,competitionPenalty=Math.max(0,playerRank-availableSlots)*.055;
  const requestPenalty=state.flags?.frozenOut?.24:state.flags?.transferRequested?.07:0,transitionPenalty=positionTransitionPenalty(),roleBoost=contractRoleBoost();
  const appearance=state.injured?0:clamp((youth?.62:.46)+gap*.035+(state.trust-50)*.006+(form-6.5)*.09-requestPenalty-transitionPenalty+roleBoost-competitionPenalty*.6,.02,.98);
  const start=state.injured?0:clamp(appearance*(.34+gap*.04+(state.trust-50)*.007+(form-6.5)*.12-transitionPenalty*1.25+roleBoost*.75-competitionPenalty),.02,.93);
  return{appearance,start,form,benchmark,gap,transitionPenalty,roleBoost,competitionPenalty,playerRank,availableSlots,rows};
}
function renderSelectionInsights(){
  const el=$('#selection-insights');if(!el)return;const p=projectedClubSelection(),nScore=nationalSelectionScore(),nThreshold=nationalSelectionThreshold(),roleTarget=state.trust>=75?'核心位置已稳固':`距离核心信任还差 ${Math.max(0,75-state.trust)} 点`,valueGoal=state.value>=10000?'已进入亿元球星行列':`距离 €1 亿还差 ${money(Math.max(0,10000-state.value))}`;
  const milestones=[
    [`国家队`,state.age<17?'17 岁后开放成年队竞争':nScore>=nThreshold?'已达到成年队参考线':`距入选线 ${Math.max(0,nThreshold-nScore).toFixed(1)} 分`],
    [`队内角色`,roleTarget],
    [`身价目标`,valueGoal],
    [`合同规划`,state.age<16?'16 岁签职业合同':`${Math.max(0,state.contractEnd-state.year)} 年后到期`]
  ];
  const selectionMessage=state.injured?`当前因${state.injuryDetail?.name||'伤病'}无法出场。`:state.flags.frozenOut?'转会申请引发弃用：教练组额外降低约 24% 出场概率，撤回申请或完成转会可解除。':state.flags.transferRequested?'主动转会申请处理中：教练信任下降，并额外降低约 7% 出场概率。':p.transitionPenalty?`位置适应还需 ${state.flags.positionTransitionMonths} 个月：当前出场、首发与比赛评分受到递减影响。`:p.playerRank>p.availableSlots?`当前处于第 ${p.playerRank} 顺位，位置通常提供 ${p.availableSlots} 个首发名额；训练、状态和教练信任会实时改变排名。`:p.gap>=0?'能力与顺位已经接近首发要求，状态和教练信任将决定最终名单。':'所在球队阵容更强，需要通过训练、替补表现和合适的转会提高机会。';
  el.innerHTML=`<div class="selection-dashboard"><div class="chance-block"><div class="chance-main"><div><span>预计下场出场</span><strong>${Math.round(p.appearance*100)}%</strong></div><div><span>预计首发</span><strong>${Math.round(p.start*100)}%</strong></div></div><div class="chance-track"><i style="width:${p.appearance*100}%"></i><em style="left:${p.start*100}%"></em></div><div class="chance-factors"><span>位置顺位 <b>${p.playerRank}</b></span><span>你的总评 <b>${state.overall}</b></span><span>近三场状态 <b>${p.form.toFixed(2)}</b></span><span>教练信任 <b>${state.trust}</b></span></div><p>${selectionMessage}</p></div><div class="selection-competition">${p.rows.slice(0,4).map(row=>`<div class="${row.isPlayer?'mine':''}"><b>${row.rank}</b><span><strong>${row.name}${row.isPlayer?'（你）':''}</strong><small>${row.status}</small></span><em>${row.overall}</em></div>`).join('')}<button id="open-decision-center-btn" type="button">打开赛季决策中心</button></div><div class="milestone-list">${milestones.map(([label,text],i)=>`<div><i>${String(i+1).padStart(2,'0')}</i><span><b>${label}</b><small>${text}</small></span></div>`).join('')}</div></div>`;$('#open-decision-center-btn').onclick=openDecisionCenter;
}

/* Version 12: persistent people, visible squad competition, short challenges and objective checkpoints. */
const CHARACTER_FIRST_NAMES=['Marco','James','Daniel','Alex','David','Lucas','Mateo','Noah','Elias','Samuel','Adrian','Leo','Hugo','Milan','Jonas','Rafael','Kenji','Min-jun','Wei','Omar'];
const CHARACTER_LAST_NAMES=['Silva','Carter','Ruiz','Morgan','Lee','Costa','Martins','Meyer','Rossi','Dubois','Santos','Nakamura','Kim','Zhang','Hassan','Andersson','Kovacic','Williams','Torres','Bennett'];
const COACH_PERSONALITIES=['严格','务实','善于沟通','重视年轻人','结果至上'];
const COACH_TACTICS=['高强度压迫','快速反击','控球推进','低位防守','边路进攻'];
function newCharacterName(used=[]){
  for(let attempt=0;attempt<30;attempt++){const name=`${pick(CHARACTER_FIRST_NAMES)} ${pick(CHARACTER_LAST_NAMES)}`;if(!used.includes(name))return name}
  return`${pick(CHARACTER_FIRST_NAMES)} ${rand(10,99)}`;
}
function createClubCharacters(club){
  const used=[],coachName=newCharacterName(used);used.push(coachName);const captainName=newCharacterName(used);used.push(captainName);
  return{club,createdSeason:currentSeason(),coach:{name:coachName,personality:pick(COACH_PERSONALITIES),tactic:pick(COACH_TACTICS),relation:state.relationships?.coach||50,tenure:0},captain:{name:captainName,position:pick(['CB','CM','CDM','GK']),relation:clamp((state.relationships?.teammates||50)+rand(3,13),0,100),support:rand(48,78)},competitors:{},usedNames:used};
}
function createPositionCompetitors(group,pos){
  const benchmark=state.age<16?Math.max(48,state.clubStrength-23):Math.max(55,state.clubStrength-14),count=pos==='GK'?2:3;
  return Array.from({length:count},(_,index)=>{
    const name=newCharacterName(group.usedNames);group.usedNames.push(name);
    return{id:`${state.clubCode||'CLB'}-${pos}-${Date.now()}-${index}-${rand(10,99)}`,name,position:pos,overall:clamp(benchmark+rand(-5,6)+(index===0?2:0),42,94),form:rand(55,82),coachTrust:rand(43,78),relationship:rand(34,66),starts:0,apps:0,injuredMonths:0,status:'健康'};
  });
}
function ensureSquadCompetition(){
  if(!state)return null;state.clubCharacters=state.clubCharacters&&typeof state.clubCharacters==='object'?state.clubCharacters:{};
  let group=state.clubCharacters[state.club];if(!group){group=createClubCharacters(state.club);state.clubCharacters[state.club]=group}
  group.usedNames=Array.isArray(group.usedNames)?group.usedNames:[group.coach?.name,group.captain?.name].filter(Boolean);
  group.coach=group.coach||createClubCharacters(state.club).coach;group.captain=group.captain||createClubCharacters(state.club).captain;group.competitors=group.competitors||{};
  if(!Array.isArray(group.competitors[state.pos])||!group.competitors[state.pos].length)group.competitors[state.pos]=createPositionCompetitors(group,state.pos);
  return{group,coach:group.coach,captain:group.captain,competitors:group.competitors[state.pos]};
}
function replaceClubCoach(){
  const squad=ensureSquadCompetition();if(!squad)return;const old=squad.coach,used=squad.group.usedNames||[],name=newCharacterName(used);used.push(name);
  state.characterHistory=state.characterHistory||[];state.characterHistory.unshift({...old,club:state.club,leftSeason:currentSeason(),reason:'换帅'});
  squad.group.coach={name,personality:pick(COACH_PERSONALITIES),tactic:pick(COACH_TACTICS),relation:50,tenure:0};state.relationships.coach=50;
  squad.competitors.forEach(player=>player.coachTrust=clamp(player.coachTrust+rand(-12,12),25,90));
  addFeed('新主教练到任',`${name} 接手 ${state.club}，偏好${squad.group.coach.tactic}；所有位置顺位重新评估。`,'⌁');
}
function squadPlayerScore(){
  return state.overall+(state.trust-50)*.075+(recentFormScore()-6.5)*2.8+(ensureContractTerms()?.rolePromise==='核心'?2:0)-(state.injured?12:0)-(state.flags.frozenOut?8:0);
}
function competitorScore(player){return player.overall+(player.coachTrust-50)*.06+(player.form-65)*.055-(player.injuredMonths?10:0)}
function squadCompetitionRows(){
  const squad=ensureSquadCompetition();if(!squad)return[];const rows=[{id:'player',name:state.name,position:state.pos,overall:state.overall,form:Math.round(recentFormScore()*10),trust:state.trust,status:state.injured?`${state.injuryDetail?.name||'伤病'} · ${state.injured}月`:'可出场',score:squadPlayerScore(),isPlayer:true,starts:Number(seasonStats()?.starts)||0}];
  squad.competitors.forEach(player=>rows.push({...player,trust:player.coachTrust,score:competitorScore(player),status:player.injuredMonths?`伤缺 ${player.injuredMonths}月`:(player.form>=76?'状态出色':player.form<58?'状态低迷':'正常')}));rows.sort((a,b)=>b.score-a.score);rows.forEach((row,index)=>row.rank=index+1);return rows;
}
function updateSquadCompetitionMonth(){
  const squad=ensureSquadCompetition();if(!squad)return;squad.coach.tenure=(Number(squad.coach.tenure)||0)+1;
  squad.competitors.forEach(player=>{
    if(player.injuredMonths){player.injuredMonths--;player.status=player.injuredMonths?`伤缺 ${player.injuredMonths}月`:'恢复合练'}
    else if(Math.random()<.035){player.injuredMonths=rand(1,3);player.status=`伤缺 ${player.injuredMonths}月`}
    player.form=clamp(player.form+rand(-7,7)+(player.injuredMonths?-5:0),38,92);
    if(state.month===0&&Math.random()<.5)player.overall=clamp(player.overall+rand(0,1),42,96);
    const plays=!player.injuredMonths&&Math.random()<clamp(.42+(competitorScore(player)-state.clubStrength+15)*.025,.15,.9);if(plays){player.apps++;if(Math.random()<clamp(.45+(player.coachTrust-50)*.01,.2,.88))player.starts++}
  });
}
function shortChallengeReports(challenge){
  return(state.matchReports||[]).filter(report=>!report.international&&report.club===challenge.club&&report.season===challenge.season&&Number(String(report.matchId||'').split('-').pop())>challenge.startSequence).slice().reverse();
}
function shortChallengeDefinition(id){
  const impactLabel=state.pos==='GK'?'完成 2 场零封':['CB','LB','RB','CDM'].includes(state.pos)?'完成 2 场评分 7.2+ 的比赛':'贡献 2 个进球或助攻';
  return{
    starts:{id:'starts',title:'争取首发',description:'未来五场完成 3 次首发。',reward:'解锁一次决策中心专项加练'},
    rating:{id:'rating',title:'稳定输出',description:'未来五场平均评分达到 7.0。',reward:'获得战术洞察与教练认可'},
    impact:{id:'impact',title:'制造影响',description:`未来五场${impactLabel}。`,reward:'获得额外训练机会与关注'},
    fitness:{id:'fitness',title:'负荷管理',description:'完成五场后体能保持在 65 以上。',reward:'获得两个月伤病保护'}
  }[id];
}
function ensureShortChallenge(s=seasonStats()){
  if(!state||!s||s.done)return null;ensureSeasonBreakdown(s);if(s.shortChallenge)return s.shortChallenge;
  const now=state.year*12+state.month;if(now<(state.flags.shortChallengeCooldownUntil||0))return null;
  const ids=['starts','rating','impact','fitness'].filter(id=>id!==state.flags.lastShortChallengeId),id=pick(ids),definition=shortChallengeDefinition(id);
  s.shortChallenge={id,title:definition.title,description:definition.description,reward:definition.reward,club:state.club,season:s.season,startSequence:Number(state.flags.matchSequence)||0,startedAtMonth:state.month,settled:false};state.flags.lastShortChallengeId=id;return s.shortChallenge;
}
function shortChallengeProgress(challenge=ensureShortChallenge()){
  if(!challenge)return null;const reports=shortChallengeReports(challenge),played=Math.min(5,reports.length),appeared=reports.filter(report=>report.appeared),definition=shortChallengeDefinition(challenge.id);let current=0,target=1,label='';
  if(challenge.id==='starts'){current=reports.filter(report=>report.start).length;target=3;label=`${current} / ${target} 次首发`}
  else if(challenge.id==='rating'){current=appeared.length?appeared.reduce((sum,report)=>sum+(Number(report.rating)||0),0)/appeared.length:0;target=7;label=`场均 ${current?current.toFixed(2):'—'} / 7.00`}
  else if(challenge.id==='impact'){current=state.pos==='GK'?appeared.filter(report=>report.cleanSheet).length:['CB','LB','RB','CDM'].includes(state.pos)?appeared.filter(report=>(Number(report.rating)||0)>=7.2).length:appeared.reduce((sum,report)=>sum+(Number(report.goals)||0)+(Number(report.assists)||0),0);target=2;label=`${current} / ${target} 次关键贡献`}
  else{current=state.fitness;target=65;label=`当前体能 ${current} / ${target}`}
  const metricComplete=current>=target,complete=played>=5&&metricComplete,percent=clamp((played/5*.45)+(Math.min(current,target)/target*.55),0,1)*100;return{challenge,definition,reports,played,current,target,label,metricComplete,complete,percent};
}
function settleShortChallenge(){
  const s=seasonStats(),progress=shortChallengeProgress(s.shortChallenge);if(!progress||progress.played<5||progress.challenge.settled)return false;progress.challenge.settled=true;progress.challenge.completed=progress.complete;progress.challenge.finalLabel=progress.label;
  s.shortChallengeHistory.push({...progress.challenge});if(progress.complete){state.resources.challengeCredits=(Number(state.resources.challengeCredits)||0)+1;state.morale=clamp(state.morale+4,0,100);state.trust=clamp(state.trust+3,0,100);if(progress.challenge.id==='rating')state.resources.tacticalInsight=(Number(state.resources.tacticalInsight)||0)+1;if(progress.challenge.id==='fitness')state.flags.injuryProtectionMonths=2;addFeed('五场挑战完成',`${progress.challenge.title}：${progress.label}。${progress.challenge.reward}。`,'★')}else addFeed('五场挑战结束',`${progress.challenge.title}未完成（${progress.label}）。下一阶段会生成方向不同的新挑战。`,'◇');
  state.flags.shortChallengeCooldownUntil=state.year*12+state.month+1;s.shortChallenge=null;return true;
}
function settleShortChallengeAtSeasonEnd(s=seasonStats()){
  if(!s?.shortChallenge||s.shortChallenge.settled)return;const progress=shortChallengeProgress(s.shortChallenge);s.shortChallenge.settled=true;s.shortChallenge.completed=!!progress?.complete;s.shortChallenge.finalLabel=progress?.label||'赛季结束';s.shortChallenge.reason=progress?.played>=5?'赛季结算':'赛季结束前未满五场';s.shortChallengeHistory.push({...s.shortChallenge});
  if(progress?.complete){state.resources.challengeCredits=(Number(state.resources.challengeCredits)||0)+1;addFeed('五场挑战赛季结算',`${s.shortChallenge.title}已完成，挑战奖励保留到新赛季。`,'★')}else addFeed('五场挑战随赛季结束',`${s.shortChallenge.title}：${progress?.label||'尚未形成有效进度'}。`,'◇');
  s.shortChallenge=null;
}
function updateShortChallenge(){ensureShortChallenge();return settleShortChallenge()}
function renderShortChallenge(){
  const content=$('#short-challenge-content'),status=$('#short-challenge-status');if(!content||!status||!state)return;const progress=shortChallengeProgress();
  if(!progress){status.textContent='下一阶段';content.innerHTML='<div class="empty-state compact">新挑战将在下个月生成。</div>';return}
  status.textContent=`${progress.played}/5 场`;content.innerHTML=`<div class="challenge-copy"><div><strong>${progress.challenge.title}</strong><p>${progress.challenge.description}</p></div><span>${Math.round(progress.percent)}%</span></div><div class="objective-track challenge-track"><i style="width:${progress.percent}%"></i></div><div class="challenge-foot"><span>${progress.label}</span><b>奖励：${progress.challenge.reward}</b></div><button class="decision-center-inline" type="button">查看人物与位置竞争</button>`;content.querySelector('button').onclick=openDecisionCenter;
}
function decisionCenterUsedThisMonth(){return state.flags.lastDecisionCenterActionMonth===state.year*12+state.month}
function applyDecisionCenterAction(action){
  const squad=ensureSquadCompetition(),rival=squad.competitors.slice().sort((a,b)=>competitorScore(b)-competitorScore(a))[0],now=state.year*12+state.month;if(decisionCenterUsedThisMonth()){closeModal();toast('本月已经完成一次队内管理选择');return}
  let summary='';
  if(action==='focus'){
    if((state.resources.challengeCredits||0)>0){state.resources.challengeCredits--;const pool=Object.keys(state.attributes).sort((a,b)=>state.attributes[a]-state.attributes[b]),key=pool[0];changeAttributes({[key]:1});state.fitness=clamp(state.fitness-5,0,100);summary=`你使用挑战奖励完成专项加练，${ATTRIBUTE_LABELS[key]}得到提升。`}
    else{state.fitness=clamp(state.fitness-6,0,100);state.morale=clamp(state.morale+3,0,100);summary='你针对当前弱项完成额外训练，短期状态更专注，但消耗了恢复时间。'}
  }else if(action==='coach'){const success=Math.random()<clamp(.48+(state.relationships.coach-50)*.008,.28,.78);state.trust=clamp(state.trust+(success?5:-2),0,100);state.relationships.coach=clamp(state.relationships.coach+(success?4:1),0,100);squad.coach.relation=state.relationships.coach;summary=success?`${squad.coach.name} 明确了首发要求，你在队内评价中获得正面反馈。`:`${squad.coach.name} 认为你应先用训练表现说话，本次沟通没有提升顺位。`}
  else if(action==='rival'){state.fitness=clamp(state.fitness-5,0,100);state.relationships.teammates=clamp(state.relationships.teammates+5,0,100);rival.relationship=clamp(rival.relationship+8,0,100);rival.form=clamp(rival.form+3,0,100);state.morale=clamp(state.morale+3,0,100);summary=`你与 ${rival.name} 共同加练。竞争仍在继续，但关系和配合得到改善。`}
  else{state.relationships.agent=clamp(state.relationships.agent+5,0,100);state.flags.loanInterest=state.age<=23;state.flags.transferMarketReview=true;summary=state.age<=23?'经纪人开始同时评估租借与永久转会路线。':'经纪人开始评估下一窗口的角色与报价。'}
  state.flags.lastDecisionCenterActionMonth=now;addFeed('赛季决策中心',summary,'▥');closeModal();renderAll();showInfo('本月安排已确认',summary,'▥');
}
function openDecisionCenter(){
  const squad=ensureSquadCompetition(),rows=squadCompetitionRows(),progress=shortChallengeProgress(),used=decisionCenterUsedThisMonth(),credits=Number(state.resources.challengeCredits)||0;
  const extra=`<div class="decision-people"><div><span>主教练</span><strong>${squad.coach.name}</strong><small>${squad.coach.personality} · ${squad.coach.tactic}</small></div><div><span>队长</span><strong>${squad.captain.name}</strong><small>${squad.captain.position} · ${squad.captain.support>=65?'支持你竞争首发':'保持中立'}</small></div></div><div class="competition-table">${rows.map(row=>`<div class="competition-row ${row.isPlayer?'mine':''}"><b>${row.rank}</b><span><strong>${row.name}${row.isPlayer?'（你）':''}</strong><small>${row.position} · ${row.status}</small></span><em>${row.overall}</em><i>${row.starts||0} 首发</i></div>`).join('')}</div><div class="decision-challenge"><span>五场挑战</span><strong>${progress?`${progress.challenge.title} · ${progress.played}/5 场`:'下一阶段准备中'}</strong><small>${progress?.label||'等待新挑战'} · 可用挑战奖励 ${credits}</small></div>`;
  const actions=used?[['关闭',closeModal,true,'本月已经完成队内管理选择；下月可再次安排']]:[
    [credits?'使用奖励进行专项加练':'针对弱项训练',()=>applyDecisionCenterAction('focus'),credits>0,credits?'消耗 1 次挑战奖励 · 提升最低位置属性':'消耗体能 · 偏向长期成长'],
    [`与 ${squad.coach.name} 沟通`,()=>applyDecisionCenterAction('coach'),false,'可能提高顺位，也可能被要求先证明自己'],
    ['与主要竞争对手共同加练',()=>applyDecisionCenterAction('rival'),false,'改善关系与配合 · 同时也会帮助对手保持状态'],
    [state.age<=23?'请经纪人评估租借路线':'请经纪人评估转会市场',()=>applyDecisionCenterAction('agent'),false,'不立即离队 · 解锁下一窗口的路线评估']
  ];
  showModal({icon:'▥',kicker:`${state.club} · SQUAD HUB`,title:`${state.pos} 位置竞争与本阶段决策`,body:`${squad.coach.name} 的战术偏好是${squad.coach.tactic}。顺位综合能力、近况、教练信任、伤病和合同角色计算，不再是黑箱。`,extra,actions});
}
function queueObjectiveCheckpoint(){
  const s=seasonStats(),quarter=Math.floor(state.month/3);if(!s.objective||![1,2,3].includes(quarter)||s.objectiveChecks.some(check=>check.quarter===quarter))return false;state.flags.objectiveCheckDue=quarter;return true;
}
function objectiveProjection(progress){
  const elapsed=Math.max(1,state.month),projected=progress.definition.id==='challenge'?Math.round(progress.percent):Math.round(progress.current/elapsed*12);return projected;
}
function resolveObjectiveCheckpoint(quarter,choice){
  const s=seasonStats(),progress=seasonObjectiveProgress(),squad=ensureSquadCompetition();let summary='';
  if(choice==='coach'){const success=Math.random()<clamp(.42+(state.trust-50)*.008+(state.relationships.coach-50)*.006,.22,.78);state.trust=clamp(state.trust+(success?6:-3),0,100);squad.coach.relation=state.relationships.coach=clamp(state.relationships.coach+(success?4:-1),0,100);summary=success?'你用训练和比赛片段说服了主教练，未来阶段会获得更多证明机会。':'主教练拒绝提前承诺出场，要求你先在训练中超过竞争对手。'}
  else if(choice==='role'){state.fitness=clamp(state.fitness+7,0,100);state.morale=clamp(state.morale+3,0,100);state.trust=clamp(state.trust+2,0,100);summary='你接受当前角色并把精力投入下一次登场，状态和稳定性得到改善。'}
  else{state.relationships.agent=clamp(state.relationships.agent+7,0,100);state.flags.loanInterest=state.age<=23;state.flags.transferMarketReview=true;state.trust=clamp(state.trust-3,0,100);summary=state.age<=23?'经纪人开始寻找保证出场时间的租借方案，教练注意到了你的态度。':'经纪人开始评估下一窗口的球队角色与报价。'}
  s.objectiveChecks.push({quarter,month:state.month,choice,progress:progress?.label||'',projection:progress?objectiveProjection(progress):0,summary});delete state.flags.objectiveCheckDue;clearPendingDecision();addFeed('赛季目标阶段检查',summary,'◎');closeModal();renderAll();showInfo('阶段应对方案已确认',summary,'◎');
}
function showObjectiveCheckpoint(quarter=state.flags.objectiveCheckDue,persist=true){
  const s=seasonStats(),progress=seasonObjectiveProgress();if(!progress||!quarter)return false;if(persist)setPendingDecision({type:'objectiveCheck',quarter});
  const projected=objectiveProjection(progress),projectionLabel=progress.definition.id==='challenge'?`预计完成度 ${projected}%`:`预计赛季结束达到约 ${projected} / ${progress.target}`,risk=progress.percent>=quarter*25?'进度正常':progress.percent>=quarter*17?'存在失败风险':'明显落后';
  showModal({icon:'◎',kicker:`赛季目标 · 第 ${quarter} 阶段检查`,title:`${progress.definition.name}：${risk}`,body:`当前进度：${progress.label}\n${projectionLabel}。你可以主动改变后续路线，但任何方案都存在取舍。`,locked:true,actions:[
    ['与主教练争取更多机会',()=>resolveObjectiveCheckpoint(quarter,'coach'),true,'可能提高教练信任与顺位 · 关系不足时可能适得其反'],
    ['接受当前角色并专注表现',()=>resolveObjectiveCheckpoint(quarter,'role'),false,'提高体能和稳定性 · 出场增长相对稳健'],
    [state.age<=23?'要求经纪人寻找租借':'要求经纪人评估转会',()=>resolveObjectiveCheckpoint(quarter,'agent'),false,'增加下一窗口选择 · 可能影响现俱乐部信任']
  ]});return true;
}
function maybeObjectiveCheckpoint(){const quarter=Number(state.flags.objectiveCheckDue)||0;return quarter?showObjectiveCheckpoint(quarter,true):false}

function nationalSelectionScore(){
  return state.overall+seasonPerformanceScore()*1.15+(recentFormScore()-6.5)*2.2+(state.trust-50)*.035;
}
function nationalSelectionThreshold(){
  return clamp(nationalProfile(state.country).strength-18,54,76);
}
function competitionForYear(confed,year){
  if(year%4===2)return'FIFA 世界杯';if(['AFC','CAF','CONCACAF'].includes(confed)&&year%4===3)return{AFC:'亚洲杯',CAF:'非洲杯',CONCACAF:'中北美及加勒比海金杯'}[confed];
  if(['UEFA','CONMEBOL'].includes(confed)&&year%4===0)return{UEFA:'欧洲杯',CONMEBOL:'美洲杯'}[confed];return'';
}
function nextNationalCompetition(){
  const confed=nationalProfile(state.country).confed;for(let year=state.year+1;year<=state.year+5;year++){const competition=competitionForYear(confed,year);if(competition)return{competition,year}}return{competition:'FIFA 世界杯',year:state.year+4};
}
function generatedCrestData(team,color='#52675b',code='FC'){
  const safeColor=/^#[0-9a-f]{6}$/i.test(color)?color:'#52675b',initials=String(code||team).replace(/[^A-Za-z0-9]/g,'').slice(0,3).toUpperCase()||'FC';
  return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 72"><path d="M32 2 59 13l-4 42-23 15L9 55 5 13Z" fill="${safeColor}" stroke="#dfe8e2" stroke-width="3"/><text x="32" y="42" fill="white" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700">${initials}</text></svg>`)}`;
}
function matchTeamHtml(club){
  const name=club[0],countryCode=COUNTRY_CODES[name],src=countryCode?`https://flagcdn.com/48x36/${countryCode}.png`:(logoUrl(name)||generatedCrestData(name,club[2],club[1]));
  return`<img class="match-team-logo" src="${src}" alt="${name}队徽" onerror="this.src='${generatedCrestData(name,club[2],club[1])}'"><span>${name}</span>`;
}
function renderNational(){
  const n=ensureNational(),p=nationalProfile(state.country),next=nextNationalCompetition(),score=nationalSelectionScore(),threshold=nationalSelectionThreshold(),eligible=state.age>=17&&score>=threshold;
  n.calledUp=eligible;$('#national-status').textContent=state.age<17?'青年阶段':eligible?'成年国家队':'等待征召';
  const flag=COUNTRY_CODES[state.country]?`<img src="https://flagcdn.com/48x36/${COUNTRY_CODES[state.country]}.png" alt="${state.country}国旗">`:`<img src="${generatedCrestData(state.country,'#315f48','NT')}" alt="${state.country}队徽">`;
  $('#national-content').innerHTML=`<div class="national-identity">${flag}<div><strong>${state.country}国家队</strong><small>${p.confed} · 下一大赛 ${next.year} ${next.competition}</small></div></div><div class="national-stats"><div><span>国家队出场</span><b>${n.caps}</b></div><div><span>${state.pos==='GK'?'零封':'进球/助攻'}</span><b>${state.pos==='GK'?n.cleanSheets:`${n.goals}/${n.assists}`}</b></div><div><span>入选评分</span><b>${score.toFixed(1)}</b></div></div><div class="selection-meter"><i style="width:${clamp(score/threshold*100,0,100)}%"></i></div><small class="selection-note">${eligible?'能力、近期三场状态和俱乐部表现已达到国家队标准。':`成年队参考线 ${threshold}；继续提升能力与近期状态。`}</small>`;
}
function pickNationalOpponent(confed){
  let pool=(NATIONAL_OPPONENTS[confed]||NATIONAL_OPPONENTS.UEFA).filter(c=>c!==state.country);if(pool.length<3)pool=Object.values(NATIONAL_OPPONENTS).flat().filter(c=>c!==state.country);return pick(pool);
}
function simulateNationalMatch(competition){
  const n=ensureNational(),p=nationalProfile(state.country),opponent=pickNationalOpponent(p.confed),oppStrength=NATIONAL_STRENGTH[opponent]||78,home=Math.random()<.5,edge=(p.strength-oppStrength)/15;
  let teamGoals=rand(0,2)+(Math.random()<clamp(.34+edge*.12,.12,.68)?1:0),oppGoals=rand(0,2)+(Math.random()<clamp(.34-edge*.12,.12,.68)?1:0);
  const callGap=nationalSelectionScore()-nationalSelectionThreshold(),appearanceChance=clamp(.68+callGap*.025+(recentFormScore()-6.5)*.06,.35,.98),appeared=state.injured<=0&&Math.random()<appearanceChance,start=appeared&&Math.random()<clamp(.55+callGap*.03,.25,.95),minutes=appeared?(start?rand(68,95):rand(12,34)):0;
  let goals=0,assists=0,cleanSheet=false,rating=null;if(appeared){const attacking=['ST','LW','RW','CAM'].includes(state.pos),goalChance=attacking?.15:['CM','CDM'].includes(state.pos)?.045:.018,assistChance=attacking?.13:['CM','CDM','LB','RB'].includes(state.pos)?.09:.025;if(state.pos==='GK')cleanSheet=oppGoals===0;else{const finish=state.attributes.finishing*.6+state.attributes.shooting*.25+state.attributes.positioning*.15,create=state.attributes.vision*.6+state.attributes.passing*.4;if(Math.random()<clamp(goalChance+(finish-50)/320,.01,.52))goals++;if(Math.random()<clamp(assistChance+(create-50)/360,.01,.44))assists++;teamGoals=Math.max(teamGoals,goals,assists)}rating=clamp(6+goals*.9+assists*.65+(cleanSheet?.65:0)+Math.random()*1.2+(teamGoals>oppGoals?.25:-.05),4.8,9.8);n.caps++;if(start)n.starts++;n.goals+=goals;n.assists+=assists;if(cleanSheet)n.cleanSheets++}
  const result=teamGoals>oppGoals?'胜':teamGoals<oppGoals?'负':'平',report={season:currentSeason(),date:MONTHS[state.month],competition,international:true,club:state.country,clubCode:(COUNTRY_CODES[state.country]||'NT').toUpperCase(),clubColor:'#315f48',position:state.pos,opponent,opponentCode:(COUNTRY_CODES[opponent]||'NT').toUpperCase(),opponentColor:'#73553e',home,teamGoals,oppGoals,result,appeared,start,minutes,goals,assists,cleanSheet,rating:rating?+rating.toFixed(1):null,appearanceChance,shots:goals?rand(2,5):rand(0,3),keyPasses:assists?rand(2,5):rand(0,2),tackles:rand(0,4),interceptions:rand(0,3),saves:state.pos==='GK'?rand(2,7):0,passAccuracy:rand(68,92),dribbles:rand(0,4),aerials:rand(0,4),highlight:appeared&&(rating>=8||goals+assists>=2||cleanSheet&&rating>=7.5)};
  state.matchReports.unshift(report);state.matchReports=state.matchReports.slice(0,80);return report;
}
function addNationalTitle(name,year){
  const season=`${year} 国家队赛季`;if(state.trophies.some(t=>t.name===name&&t.season===season))return;const reason=`代表 ${state.country} 赢得 ${name}，国家队生涯出场达到 ${state.national.caps} 次。`;
  state.trophies.unshift({name,season,reason,image:awardImage(name),team:true,national:true});state.national.titles.unshift({name,year});addEvent(`国家队赢得${name}`,reason,'⚑');addFeed('国家队冠军',`${state.country} 捧起 ${name}，这座奖杯已加入主页荣誉橱窗。`,'♜');
}
function simulateNationalTournament(competition,year){
  const n=ensureNational(),p=nationalProfile(state.country),score=nationalSelectionScore(),qualification=clamp(.35+(p.strength-70)*.025+(score-nationalSelectionThreshold())*.018,.18,.97),qualified=Math.random()<qualification;
  n.lastTournamentYear=year;if(!qualified){n.tournaments.unshift({competition,year,result:'未获正赛资格'});addFeed('国家队大赛资格',`${state.country} 未能进入 ${year} ${competition} 正赛。`,'⚑');return}
  const matches=rand(3,7);let wins=0;for(let i=0;i<matches;i++){const report=simulateNationalMatch(competition);if(report.result==='胜')wins++}
  const titleChance=clamp(.035+(p.strength-66)*.011+(state.overall-nationalSelectionThreshold())*.006+(wins-3)*.035,.02,.48),won=wins>=4&&Math.random()<titleChance,result=won?'冠军':wins>=3?'淘汰赛阶段':'小组赛阶段';n.tournaments.unshift({competition,year,result,matches,wins});if(won)addNationalTitle(`${competition}冠军`,year);else addFeed('国家队大赛征程',`${state.country} 在 ${year} ${competition} 止步${result}；你累计 ${n.caps} 次国家队出场。`,'⚑');
}
function simulateNationalMonth(){
  const n=ensureNational(),score=nationalSelectionScore(),threshold=nationalSelectionThreshold();n.calledUp=state.age>=17&&score>=threshold&&!state.injured;if(!n.calledUp)return;
  if([2,7,9].includes(state.month)){const competition=state.month===7?'世界杯/洲际杯预选赛':'国家队比赛窗口';simulateNationalMatch(competition)}
  if(state.month===10){const year=state.year+1,competition=competitionForYear(n.confed,year);if(competition&&n.lastTournamentYear!==year)simulateNationalTournament(competition,year)}
}

CAREER_EVENT_DECK.push(
  {id:'pitch_surface_choice',category:'match',title:'客场草皮条件异常',icon:'▦',minAge:16,cooldown:42,maxRepeat:2,body:'赛前踩场发现草皮湿滑且不平，球鞋选择会直接影响启动、触球和受伤风险。',choices:[
    {label:'换用更长鞋钉',outcome:'抓地更稳，但急停时膝踝负荷提高。',effects:{trust:4,fitness:-6,morale:2}},
    {label:'维持熟悉的鞋钉',outcome:'触球感觉稳定，但冲刺时需要更谨慎。',effects:{morale:5,trust:1}},
    {label:'请装备经理重新调校',outcome:'准备时间更长，换来抓地与舒适度的平衡。',effects:{fitness:5,relation:{teammates:3}}}]},
  {id:'sleep_monitor',category:'health',title:'睡眠监测出现红色警报',icon:'◒',minAge:16,cooldown:40,maxRepeat:2,body:'连续客场让你的深睡时间明显下降。体能教练给出三套同样有效、方向不同的干预方案。',choices:[
    {label:'减少晚间社交活动',outcome:'恢复更快，但生活自由度下降。',effects:{fitness:14,morale:-3}},
    {label:'降低两次训练负荷',outcome:'身体回到安全区，短期竞争顺位略受影响。',effects:{fitness:11,trust:-3,morale:2}},
    {label:'学习呼吸与放松训练',outcome:'心理恢复改善，见效速度相对平缓。',effects:{morale:10,fitness:5}}]},
  {id:'loan_route',category:'transfer',title:'半赛季租借方案',icon:'⇢',minAge:17,maxAge:23,cooldown:54,maxRepeat:2,condition:s=>s.trust<58,body:'俱乐部提供三种发展路径：低级别稳定首发、同级别轮换，或留队竞争。',choices:[
    {label:'选择稳定首发环境',outcome:'比赛经验快速积累，但训练平台和曝光下降。',effects:{trust:10,overall:1,valuePct:.96}},
    {label:'选择同级别轮换',outcome:'环境质量更高，出场保障相对有限。',effects:{potential:1,trust:4,morale:3}},
    {label:'拒绝租借留队竞争',outcome:'留在熟悉体系中承担更激烈的位置竞争。',effects:{morale:8,fitness:-8,trust:2}}]},
  {id:'family_ticket_request',category:'personal',title:'重要比赛的家属票',icon:'⌂',minAge:17,cooldown:50,maxRepeat:2,body:'一场焦点战前，亲友希望获得更多家属票，而俱乐部分配名额有限。',choices:[
    {label:'使用个人名额满足家人',outcome:'家庭支持增强，但你欠下队友一个人情。',effects:{morale:9,relation:{teammates:-3}}},
    {label:'按俱乐部规则处理',outcome:'职业边界清晰，家人略感失望。',effects:{trust:5,morale:-2}},
    {label:'邀请家人赛后团聚',outcome:'没有突破规则，也保留了情感连接。',effects:{morale:5,trust:2}}]},
  {id:'analyst_disagreement',category:'coach',title:'数据模型与你的感觉冲突',icon:'▥',minAge:17,cooldown:44,maxRepeat:2,body:'分析师建议你减少高风险传球，但你的创造力正来自这些尝试。教练要求你提出执行方案。',choices:[
    {label:'完全遵循数据方案',outcome:'失误减少，创造力被暂时压缩。',effects:{trust:8,morale:-4}},
    {label:'坚持个人判断',outcome:'风格得到保留，但教练承担更多不确定性。',effects:{morale:8,trust:-4,potential:1}},
    {label:'只在前场承担风险',outcome:'你划定风险区域，兼顾纪律和创造。',effects:{trust:5,overall:1,fitness:-3}}]},
  {id:'autograph_resale',category:'media',title:'签名球衣被高价转卖',icon:'✎',minAge:18,cooldown:60,maxRepeat:2,condition:s=>s.relationships.fans>50,body:'你送给年轻球迷的签名球衣出现在拍卖网站，引发“真球迷还是黄牛”的争论。',choices:[
    {label:'再次赠送并不公开回应',outcome:'善意得到延续，事件慢慢平息。',effects:{relation:{fans:8},morale:4}},
    {label:'公开反对牟利行为',outcome:'立场清晰，但争议继续占据新闻。',effects:{relation:{fans:5},trust:3,morale:-4}},
    {label:'与基金会办正式拍卖',outcome:'将关注转化为公益资源，也增加了行程。',effects:{relation:{fans:10},fitness:-4,valuePct:1.03}}]},
  {id:'national_role_talk',category:'national',title:'国家队定位沟通',icon:'⚑',minAge:18,cooldown:60,maxRepeat:2,condition:s=>(s.national?.caps||0)>0,body:'国家队主教练询问你更看重稳定首发、战术自由，还是多位置适应。',choices:[
    {label:'争取稳定首发',outcome:'定位更明确，竞争压力同步上升。',effects:{morale:5,fitness:-6,trust:3}},
    {label:'争取战术自由',outcome:'创造空间扩大，但需要承担更多决策责任。',effects:{potential:1,morale:4,trust:-2}},
    {label:'接受多位置角色',outcome:'入选概率更稳定，个人数据可能更分散。',effects:{trust:7,overall:1,morale:-2}}]},
  {id:'travel_delay',category:'team',title:'客场航班严重延误',icon:'⌁',minAge:16,cooldown:38,maxRepeat:3,body:'球队深夜仍滞留机场。你可以组织队友活动、独自休息，或帮助工作人员协调。',choices:[
    {label:'组织轻松的团队游戏',outcome:'更衣室气氛改善，休息质量一般。',effects:{morale:7,fitness:-4,relation:{teammates:7}}},
    {label:'戴上耳塞独自休息',outcome:'个人恢复最好，团队互动减少。',effects:{fitness:10,relation:{teammates:-2}}},
    {label:'协助队务沟通安排',outcome:'队友与教练认可责任感，但你更加疲惫。',effects:{trust:6,relation:{teammates:4},fitness:-5}}]},
  {id:'sports_psychologist',category:'professional',title:'运动心理师的一对一计划',icon:'◇',minAge:17,cooldown:48,maxRepeat:2,body:'俱乐部提供注意力、压力管理和领袖沟通三种训练模块，只能优先选择一项。',choices:[
    {label:'训练比赛专注力',outcome:'状态波动减小，训练过程较枯燥。',effects:{trust:5,morale:-2,overall:1}},
    {label:'训练压力管理',outcome:'关键时刻更平静，日常能力提升有限。',effects:{morale:11,fitness:3}},
    {label:'训练领袖沟通',outcome:'更衣室影响力提高，占用额外恢复时间。',effects:{relation:{teammates:9,coach:5},fitness:-5}}]},
  {id:'boot_blister',category:'health',title:'新球鞋造成水泡',icon:'+',minAge:15,cooldown:32,maxRepeat:2,body:'赞助商的新鞋在训练中磨伤脚后跟，下一场比赛前只能在商业约定和舒适度间选择。',choices:[
    {label:'继续穿新鞋并加保护',outcome:'履行商业约定，但触球与跑动略受影响。',effects:{valuePct:1.03,fitness:-7,morale:2}},
    {label:'换回旧鞋',outcome:'身体舒适，品牌团队需要额外沟通。',effects:{fitness:8,relation:{agent:-3}}},
    {label:'要求连夜定制修改',outcome:'沟通成本高，最终得到兼顾性能的版本。',effects:{trust:2,morale:5,relation:{agent:3}}}]},
  {id:'referee_apology',category:'match',title:'裁判赛后承认误判',icon:'◎',minAge:17,cooldown:58,maxRepeat:2,body:'一次关键进球被错误取消。裁判委员会私下道歉，媒体追问你是否要求公开说明。',choices:[
    {label:'接受道歉并向前看',outcome:'职业形象稳健，球迷觉得你过于克制。',effects:{trust:6,relation:{fans:-2},morale:3}},
    {label:'要求透明公开说明',outcome:'推动了讨论，也可能面临纪律关注。',effects:{relation:{fans:8},trust:-3,morale:4}},
    {label:'只谈球队自身表现',outcome:'不卷入争议，把注意力留给下一场。',effects:{fitness:4,trust:3,morale:4}}]},
  {id:'captain_mediation',category:'team',title:'更衣室出现训练争执',icon:'C',minAge:20,cooldown:52,maxRepeat:2,condition:s=>s.trust>=65,body:'两名队友在对抗训练后发生争执，教练没有立即介入，大家都在观察你的反应。',choices:[
    {label:'当场分开双方',outcome:'冲突迅速停止，但问题尚未真正解决。',effects:{trust:5,relation:{teammates:4},fitness:-3}},
    {label:'训练后分别沟通',outcome:'花费更多精力，换来更牢固的团队关系。',effects:{relation:{teammates:10,coach:4},fitness:-6}},
    {label:'交给正式队长处理',outcome:'尊重职责边界，个人不承担额外消耗。',effects:{fitness:5,trust:1}}]}
);

CAREER_EVENT_DECK.push({
  id:'agent_salary_negotiation',category:'contract',title:'经纪人提出新合同谈薪',icon:'€',minAge:17,cooldown:36,maxRepeat:4,
  condition:s=>s.wage>0&&((s.contractEnd||s.year)-s.year<=2||seasonPerformanceScore()>=9),
  body:s=>`经纪人带来俱乐部的续约框架。你目前的周薪是 ${weeklySalaryText(s.wage)}，可以争取更高固定周薪、奖金型结构，或用长期合同换取球队定位。`,
  choices:[
    {label:'坚持提高固定周薪',outcome:'保障收入明显提高，但俱乐部希望你立即承担核心球员压力。',effects:{wagePct:1.22,morale:6,trust:-5,relation:{agent:5}}},
    {label:'降低底薪，加入表现奖金',outcome:'固定涨幅适中，出场与成绩将带来更高市场回报。',effects:{wagePct:1.12,valuePct:1.03,morale:3,trust:3,relation:{agent:3}}},
    {label:'优先争取长期合同与球队角色',outcome:'短期收入涨幅最小，但续约年限和教练信任更稳定。',effects:{wagePct:1.05,contractYears:4,morale:3,trust:8,relation:{agent:-2}}}
  ]
});

function renderLeagueTabs(){
  $('#league-tabs').innerHTML=LEAGUES.map((l,i)=>`<button data-league="${i}" class="${i===activeLeague?'active':''}">${l.short}</button>`).join('');
  $$('#league-tabs button').forEach(b=>b.onclick=()=>{activeLeague=+b.dataset.league;renderLeagueTabs();renderClubs()});
}
function renderClubs(){
  const l=LEAGUES[activeLeague];$('#club-database').innerHTML=l.clubs.map(c=>`<div class="club-card"><div class="crest" style="--club:${c[2]}">${crestContent(c)}</div><div><strong>${c[0]}</strong><small>参赛球队 · 俱乐部参考排名 #${worldRank(c[0])}</small></div></div>`).join('');
}

/* Version 8.1: promotion/relegation, transfer requests and higher-variance human events. */
const PROMOTION_SYSTEMS={
  '英超':{second:'英冠',directFrom:18,playoffRank:0,autoUp:2,playoffUp:[3,4,5,6],label:'末三名直接降级；英冠前二和附加赛冠军升级'},
  '西甲':{second:'西乙',directFrom:18,playoffRank:0,autoUp:2,playoffUp:[3,4,5,6],label:'末三名直接降级；西乙前二和附加赛冠军升级'},
  '德甲':{second:'德乙',directFrom:17,playoffRank:16,autoUp:2,playoffUp:[3],label:'末两名直接降级；第16名参加两回合保级附加赛'},
  '意甲':{second:'意乙',directFrom:18,playoffRank:0,autoUp:2,playoffUp:[3,4,5,6,7,8],label:'末三名降级；意乙前二和升级附加赛球队升级'},
  '法甲':{second:'法乙',directFrom:17,playoffRank:16,autoUp:2,playoffUp:[3,4,5],label:'末两名直接降级；第16名参加升降级附加赛'}
};

function applyLeagueMove(move,record=false){
  const from=LEAGUES.find(l=>l.short===move.from),to=LEAGUES.find(l=>l.short===move.to);if(!from||!to)return false;
  if(to.clubs.some(c=>c[0]===move.club))return true;
  const index=from.clubs.findIndex(c=>c[0]===move.club);if(index<0)return false;
  const [club]=from.clubs.splice(index,1);to.clubs.push(club);
  if(record){state.leagueMovements=state.leagueMovements||[];state.leagueMovements.push({...move,season:currentSeason()})}
  return true;
}
function applyStoredLeagueMovements(){
  LEAGUES.forEach(league=>{if(LEAGUE_BASE_CLUBS[league.short])league.clubs=LEAGUE_BASE_CLUBS[league.short].map(c=>[...c])});
  (state.leagueMovements||[]).forEach(move=>applyLeagueMove(move,false));
}
function leagueMove(club,from,to,reason){
  const moved=applyLeagueMove({club,from,to,reason},true);
  if(moved)addFeed(reason==='升级'?'升级席位确认':'降级席位确认',`${club}：${from} → ${to}（${reason}）。`,reason==='升级'?'↑':'↓');
  return moved;
}
function promotionCandidate(second,exclude=[]){
  return second.clubs.filter(c=>!exclude.includes(c[0])).slice().sort((a,b)=>(b[3]+Math.random()*7)-(a[3]+Math.random()*7))[0];
}
function settlePromotionRelegation(s){
  const league=LEAGUES.find(l=>l.short===s.leagueShort)||leagueForClub(state.club);if(!league)return;
  const topShort=league.tier===2?league.parentShort:league.short,system=PROMOTION_SYSTEMS[topShort];if(!system)return;
  const top=LEAGUES.find(l=>l.short===topShort),second=LEAGUES.find(l=>l.short===system.second);if(!top||!second)return;
  s.leagueMovements=[];s.promotionRule=system.label;
  if(league.tier!==2){
    const relegated=s.leagueTable.filter(row=>row.rank>=system.directFrom).map(row=>row.name);
    if(system.playoffRank){
      const playoff=s.leagueTable.find(row=>row.rank===system.playoffRank),challenger=promotionCandidate(second);
      if(playoff&&challenger){
        const topClub=top.clubs.find(c=>c[0]===playoff.name),surviveChance=clamp(.54+((topClub?.[3]||72)-challenger[3])*.022,.28,.76),survived=Math.random()<surviveChance;
        s.relegationPlayoff={club:playoff.name,opponent:challenger[0],survived};
        addFeed('保级附加赛',`${playoff.name} 对阵 ${challenger[0]}，${survived?'两回合守住顶级联赛席位':'附加赛失利并降入二级联赛'}。`,survived?'✓':'↓');
        if(!survived)relegated.push(playoff.name);
      }
    }
    const promoted=[];for(let i=0;i<relegated.length;i++){const candidate=promotionCandidate(second,promoted);if(candidate)promoted.push(candidate[0])}
    relegated.forEach((club,i)=>{if(leagueMove(club,top.short,second.short,'降级'))s.leagueMovements.push({club,from:top.short,to:second.short,direction:'down'});const promotedClub=promoted[i];if(promotedClub&&leagueMove(promotedClub,second.short,top.short,'升级'))s.leagueMovements.push({club:promotedClub,from:second.short,to:top.short,direction:'up'})});
    if(relegated.includes(state.club)){
      s.relegated=true;state.flags.relegatedRecently=true;state.flags.relegationChoicePending=true;state.morale=clamp(state.morale-12,0,100);state.trust=clamp(state.trust-5,0,100);
      addEvent('随队降级',`${state.club} 在 ${s.season} 赛季从 ${top.short} 降入 ${second.short}。你必须决定留队冲甲还是推动转会。`,'↓');
    }
  }else{
    let promoted=s.leagueRank<=system.autoUp;
    if(!promoted&&system.playoffUp.includes(s.leagueRank)){
      const rankEdge=(system.playoffUp.length-system.playoffUp.indexOf(s.leagueRank))*0.055,promoteChance=clamp(.31+rankEdge+(state.clubStrength-72)*.025,.22,.72);promoted=Math.random()<promoteChance;
      s.promotionPlayoff={rank:s.leagueRank,promoted};addFeed('升级附加赛',`${state.club} ${promoted?'赢下升级附加赛，重返顶级联赛':'在升级附加赛中止步'}。`,promoted?'↑':'×');
    }
    if(promoted){
      const relegatedClub=top.clubs.slice().sort((a,b)=>(a[3]+Math.random()*5)-(b[3]+Math.random()*5))[0];
      if(relegatedClub&&leagueMove(relegatedClub[0],top.short,second.short,'降级'))s.leagueMovements.push({club:relegatedClub[0],from:top.short,to:second.short,direction:'down'});
      if(leagueMove(state.club,second.short,top.short,'升级'))s.leagueMovements.push({club:state.club,from:second.short,to:top.short,direction:'up'});
      s.promoted=true;state.flags.promotedRecently=true;state.flags.promotionChoicePending=true;state.morale=clamp(state.morale+12,0,100);state.trust=clamp(state.trust+8,0,100);addEvent('升入顶级联赛',`${state.club} 从 ${second.short} 升入 ${top.short}。新赛季的阵容竞争和曝光度都将提升。`,'↑');
    }
  }
}

function renderTransferRequestControl(){
  const button=$('#transfer-request-btn'),note=$('#transfer-request-note');if(!button||!note)return;
  if(state.age<16){button.disabled=true;button.textContent='16 岁后可提交转会申请';note.textContent='青训阶段不进入职业转会申请流程。';note.className='';return}
  if(state.retired){button.disabled=true;button.textContent='生涯已结束';note.textContent='退役后可在生涯履历中回顾所有转会。';note.className='';return}
  button.disabled=false;
  if(state.flags.frozenOut){button.textContent='转会申请处理中 · 已被降低顺位';note.textContent='俱乐部没有立即放人，教练组已减少你的比赛机会。可再次进入沟通并撤回申请。';note.className='request-warning';return}
  if(state.flags.transferRequested){button.textContent='转会申请处理中';note.textContent='经纪人会在下一个转会窗口优先寻找多家报价；你也可以撤回申请。';note.className='request-warning';return}
  button.textContent='向俱乐部提交转会申请';note.textContent='主动申请可能加快报价，也可能导致教练组降低你的出场顺位。';note.className='';
}
function submitTransferRequest(){
  const years=Math.max(0,(state.contractEnd||state.year)-state.year),coach=state.relationships.coach||50;
  const freezeChance=clamp(.18+years*.065+(state.trust<48?.12:0)+(coach<45?.1:0),.18,.68);
  state.flags.transferRequested=true;state.flags.transferRequestMonth=state.year*12+state.month;state.trust=clamp(state.trust-rand(7,13),0,100);state.relationships.coach=clamp(coach-rand(5,11),0,100);state.relationships.agent=clamp((state.relationships.agent||50)+6,0,100);
  const frozen=Math.random()<freezeChance;if(frozen){state.flags.frozenOut=true;state.trust=clamp(state.trust-8,0,100)}
  addEvent('主动提交转会申请',`${state.name} 正式要求离开 ${state.club}。${frozen?'俱乐部拒绝立即放人，教练组将你调低了出场顺位。':'俱乐部接受经纪人接触潜在买家。'}`,'↗');
  addFeed(frozen?'转会申请引发弃用':'主动进入转会市场',frozen?`申请引起教练组不满，预计出场概率额外下降 24%；下个窗口仍会优先生成报价。`:`经纪人开始联系多家俱乐部，下个转会窗口获得报价的概率显著提高。`,frozen?'!':'↗');
  renderAll();showInfo(frozen?'俱乐部强硬回应':'转会申请已提交',frozen?'这是一次有代价的选择：转会推动速度提高，但在离队前可能持续缺少比赛。':'经纪人会在转会窗口集中收集报价；现俱乐部的信任已经下降。',frozen?'!':'↗');
}
function withdrawTransferRequest(){
  delete state.flags.transferRequested;delete state.flags.frozenOut;delete state.flags.transferRequestMonth;state.trust=clamp(state.trust+5,0,100);state.relationships.coach=clamp((state.relationships.coach||50)+4,0,100);addFeed('撤回转会申请','你向教练和管理层说明将重新争取位置，弃用状态解除。','↩');closeModal();renderAll();
}
function openTransferRequest(){
  if(state.age<16||state.retired)return;
  if(state.flags.transferRequested){
    showModal({icon:'↗',kicker:'TRANSFER REQUEST · 主动转会',title:state.flags.frozenOut?'俱乐部正在将你排除在主要轮换之外':'你的转会申请仍在处理中',body:'你可以坚持申请并等待窗口、要求经纪人立即收集意向，或撤回申请修复教练关系。',actions:[
      ['要求经纪人立即收集报价',()=>{state.flags.transferWindowOpen=true;closeModal();transferOffer()},true,'立即生成 2–4 家符合能力与球队实力的潜在报价'],
      ['撤回申请，重新竞争位置',withdrawTransferRequest,false,'解除弃用 · 教练信任 +5 · 仍保留当前合同'],
      ['继续等待下个窗口',()=>{closeModal();addFeed('坚持转会立场','你没有撤回申请，经纪人继续寻找合适方案。','↗');renderAll()},false,'维持更高报价概率，也继续承担出场顺位风险']
    ]});return;
  }
  showModal({icon:'↗',kicker:'TRANSFER REQUEST · 风险选择',title:`是否正式要求离开 ${state.club}？`,body:'主动申请不会保证转会成功。合同年限较长、教练关系较差或球队不愿放人时，原俱乐部可能降低你的比赛顺位。',actions:[
    ['正式提交转会申请',submitTransferRequest,true,'下个窗口报价概率大幅提高 · 教练信任下降 · 18%–68% 概率被弃用'],
    ['先与主教练沟通角色',()=>{state.trust=clamp(state.trust+4,0,100);state.relationships.coach=clamp((state.relationships.coach||50)+5,0,100);closeModal();addFeed('暂缓转会申请','你先与主教练确认定位，关系得到改善，但没有进入转会市场。','◇');renderAll()},false,'教练信任 +4 · 教练关系 +5 · 不进入转会市场'],
    ['暂不提交',closeModal,false,'不产生即时影响']
  ]});
}

const foreignClub=s=>{const league=leagueForClub(s.club);return !!league&&league.country!==s.country};
CAREER_EVENT_DECK.push(
  {id:'relegation_decision',category:'relegation',title:'降级后的十字路口',icon:'↓',minAge:16,cooldown:10,maxRepeat:4,condition:s=>s.flags.relegationChoicePending,body:s=>`${s.club} 已经降入 ${leagueForClub(s.club)?.short||'二级联赛'}。预算、工资和阵容都会变化，你需要向教练和经纪人明确下一步。`,choices:[
    {label:'留下并承担冲甲核心',outcome:'你选择对球队负责，教练给予更重要角色；曝光度会暂时下降。',effects:{trust:13,morale:7,valuePct:.95,relation:{coach:9,teammates:8},clearFlags:['relegationChoicePending','transferRequested','frozenOut']}},
    {label:'要求经纪人寻找顶级联赛',outcome:'你把竞技平台放在首位，转会机会增加，但部分球迷与队友认为你在逃离。',effects:{trust:-8,morale:4,relation:{agent:10,teammates:-6,fans:-5},flags:{transferRequested:true,transferWindowOpen:true},clearFlag:'relegationChoicePending'}},
    {label:'接受降薪，换取合理解约条款',outcome:'周薪下降，但俱乐部同意降低离队阻力，你仍可在二级联赛争取出场。',effects:{wagePct:.82,trust:6,morale:-2,relation:{agent:5,coach:4},flags:{transferRequested:true},clearFlag:'relegationChoicePending'}}
  ]},
  {id:'promotion_role_talk',category:'promotion',title:'升级后的阵容定位会议',icon:'↑',minAge:16,cooldown:10,maxRepeat:4,condition:s=>s.flags.promotionChoicePending,body:'球队升入顶级联赛后计划补强。教练给出三条同样有价值、方向不同的发展路线。',choices:[
    {label:'保住熟悉位置，竞争首发',outcome:'你专注本职位置，短期信任更高，但竞争压力消耗体能。',effects:{trust:9,fitness:-6,morale:4,clearFlag:'promotionChoicePending'}},
    {label:'接受多位置轮换',outcome:'出场路径更宽，个人数据可能更分散。',effects:{overall:1,trust:5,morale:2,clearFlag:'promotionChoicePending'}},
    {label:'要求按表现重新谈薪',outcome:'周薪和商业地位提高，教练要求你迅速证明自己。',effects:{wagePct:1.18,trust:-3,morale:7,relation:{agent:6},clearFlag:'promotionChoicePending'}}
  ]},
  {id:'coach_tactical_conflict',category:'coach',title:'你与主教练发生战术分歧',icon:'△',minAge:17,cooldown:52,maxRepeat:2,body:'连续几场比赛后，你认为过于保守的站位限制了发挥；主教练则认为你没有完成无球职责。',choices:[
    {label:'接受要求，先把纪律做好',outcome:'教练关系改善，进攻自由度与士气短期下降。',effects:{trust:9,morale:-5,relation:{coach:8}}},
    {label:'用比赛录像坚持观点',outcome:'你争取到部分自由，但对话让关系更紧张。',effects:{overall:1,trust:-5,morale:6,relation:{coach:-7}}},
    {label:'请助教设计折中方案',outcome:'双方各退一步，战术理解提高，也占用额外恢复时间。',effects:{trust:5,fitness:-5,relation:{coach:4}}}
  ]},
  {id:'coach_public_criticism',category:'media',title:'主教练公开批评你的比赛态度',icon:'!',minAge:18,cooldown:60,maxRepeat:2,condition:s=>(s.relationships.coach||50)<58,body:'赛后发布会上，主教练点名批评你的回防和训练态度。媒体要求你立即回应。',choices:[
    {label:'公开承担责任',outcome:'舆论快速降温，教练认可态度，但你的自信受到影响。',effects:{trust:8,morale:-7,relation:{coach:6,fans:3}}},
    {label:'私下沟通，不公开争辩',outcome:'关系有修复空间，外界仍会讨论几天。',effects:{trust:3,morale:-2,relation:{coach:8}}},
    {label:'公开反驳教练',outcome:'球迷欣赏直率，教练组明显降低你的顺位。',effects:{trust:-12,morale:8,relation:{coach:-12,fans:6},flags:{frozenOut:true}}}
  ]},
  {id:'teammate_pass_conflict',category:'team',title:'你与队友因一次传球选择争执',icon:'◇',minAge:16,cooldown:44,maxRepeat:2,body:'关键反击中你选择射门而没有横传，队友在更衣室指责你过于自我。',choices:[
    {label:'承认判断失误并请客',outcome:'更衣室很快翻篇，你的个人气势略有下降。',effects:{morale:-2,relation:{teammates:10}}},
    {label:'坚持射门选择正确',outcome:'你保住进攻者的自信，但队友关系变差。',effects:{morale:7,trust:2,relation:{teammates:-9}}},
    {label:'一起复盘再决定',outcome:'双方发现跑位和视野都有问题，协作与比赛理解同步提升。',effects:{overall:1,fitness:-4,relation:{teammates:5}}}
  ]},
  {id:'locker_room_clique',category:'team',title:'更衣室小团体邀请你选边',icon:'≋',minAge:18,cooldown:66,maxRepeat:2,body:'队内两组资深球员因训练强度产生分歧，双方都希望你公开支持。',choices:[
    {label:'支持高强度训练派',outcome:'竞技状态受益，另一部分队友认为你缺乏体谅。',effects:{fitness:-7,overall:1,relation:{teammates:-4},trust:5}},
    {label:'支持负荷管理派',outcome:'身体恢复更好，教练怀疑你在回避竞争。',effects:{fitness:10,trust:-5,relation:{teammates:4}}},
    {label:'拒绝站队并促成会议',outcome:'你承担沟通压力，最终获得更广泛的尊重。',effects:{morale:-3,trust:4,relation:{teammates:9,coach:3}}}
  ]},
  {id:'foreign_food_adaptation',category:'adaptation',title:'异国饮食让身体状态失衡',icon:'≈',minAge:16,cooldown:42,maxRepeat:2,condition:s=>foreignClub(s)&&(s.flags.needsAdaptation||s.flags.foreignAdaptationMonths),body:s=>`来到${leagueForClub(s.club)?.country}后，饮食、作息和训练补给与过去差异明显。队医发现你的恢复指标持续波动。`,choices:[
    {label:'聘请熟悉家乡饮食的营养师',outcome:'身体状态稳定，额外安排减少了自由时间。',effects:{fitness:10,morale:-2,relation:{agent:3},clearFlag:'needsAdaptation'}},
    {label:'完全尝试融入当地饮食',outcome:'适应过程更慢，但你与队友建立了共同生活话题。',effects:{fitness:-4,morale:6,relation:{teammates:8},clearFlag:'needsAdaptation'}},
    {label:'要求俱乐部制定混合方案',outcome:'恢复和融入取得平衡，俱乐部认可你的职业沟通。',effects:{fitness:5,trust:4,relation:{coach:3},clearFlag:'needsAdaptation'}}
  ]},
  {id:'foreign_language_barrier',category:'adaptation',title:'战术会议中的语言误解',icon:'文',minAge:16,cooldown:54,maxRepeat:2,condition:foreignClub,body:'一次训练失位源自战术术语理解错误。主教练要求你尽快解决语言问题。',choices:[
    {label:'每天增加语言课程',outcome:'沟通能力持续提高，但恢复时间被压缩。',effects:{trust:7,fitness:-6,relation:{coach:5,teammates:3}}},
    {label:'依靠双语队友翻译',outcome:'短期效率更高，也让你更依赖特定队友。',effects:{trust:3,relation:{teammates:9}}},
    {label:'要求教练提供图像化战术资料',outcome:'全队都受益于更清晰的资料，你主动提出方案获得认可。',effects:{trust:6,morale:4,relation:{coach:4}}}
  ]},
  {id:'foreign_homesickness',category:'personal',title:'远离家乡的适应低谷',icon:'⌂',minAge:17,cooldown:72,maxRepeat:2,condition:foreignClub,body:'节日期间队友大多与家人团聚，你第一次明显感到孤独，训练注意力开始下降。',choices:[
    {label:'安排家人短期探访',outcome:'情绪恢复明显，但行程与私人安排增加。',effects:{morale:12,fitness:-3,valuePct:.99}},
    {label:'主动参加球队社区活动',outcome:'当地归属感提升，身体休息略少。',effects:{morale:7,fitness:-5,relation:{fans:8,teammates:5}}},
    {label:'把情绪转化为额外训练',outcome:'能力细节有进步，但心理压力没有完全消失。',effects:{overall:1,morale:-4,fitness:-7,trust:4}}
  ]},
  {id:'relegation_wage_cut',category:'contract',title:'降级工资条款被触发',icon:'€',minAge:17,cooldown:30,maxRepeat:3,condition:s=>s.flags.relegatedRecently&&s.wage>0,body:'俱乐部因降级启动工资调整条款。经纪人认为你可以接受、申诉，或把降薪换成更低的解约金。',choices:[
    {label:'接受统一降薪方案',outcome:'更衣室认可你与球队共担风险，周薪明显下降。',effects:{wagePct:.78,trust:8,relation:{teammates:7},clearFlag:'relegatedRecently'}},
    {label:'正式提出合同申诉',outcome:'保住更多收入，但俱乐部与球迷对你的态度转冷。',effects:{wagePct:.94,trust:-8,relation:{agent:7,fans:-6},clearFlag:'relegatedRecently'}},
    {label:'用降薪换取离队条款',outcome:'收入下降较小，转会阻力也随之降低。',effects:{wagePct:.86,relation:{agent:8},flags:{transferRequested:true},clearFlag:'relegatedRecently'}}
  ]},
  {id:'relegation_squad_exodus',category:'relegation',title:'降级后多名主力准备离队',icon:'↗',minAge:17,cooldown:40,maxRepeat:2,condition:s=>s.flags.relegatedRecently,body:'更衣室里不断出现离队消息，教练希望你帮助稳定阵容，经纪人则提醒这是寻找新平台的窗口。',choices:[
    {label:'公开承诺留队冲甲',outcome:'你成为重建核心，商业曝光暂时下降。',effects:{trust:12,morale:5,valuePct:.94,relation:{fans:10,teammates:7},clearFlag:'relegatedRecently'}},
    {label:'保持沉默，评估报价',outcome:'你保留全部选项，团队信任小幅下降。',effects:{trust:-4,relation:{agent:6,teammates:-4},flags:{transferRequested:true},clearFlag:'relegatedRecently'}},
    {label:'只承诺完成当前窗口',outcome:'态度务实，教练暂时保留你的位置。',effects:{trust:4,morale:2,relation:{coach:3,agent:3},clearFlag:'relegatedRecently'}}
  ]}
);

init();

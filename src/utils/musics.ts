const titles = [
	['雨の樹素描II -オリヴィエ・メシアンの追憶に-', '武満 徹'],
	['night', '[.que]'],
	['Twangle Frent', 'µ-Ziq'],
	['Butterfly Effect feat. Hidetake Takayama', '★STAR GUiTAR'],
	['Moon Lie', 'A-bee × IMMI'],
	['Azure', 'Akira Kosemura & haruka nakamura'],
	['虹の彼方 (Suguru Oba Remix)', 'Akira Kosemura'],
	['Light Dance', 'Akira Kosemura'],
	['ママに咲いたカーネーション', 'arai tasuku'],
	['リチャードのかくれんぼ', 'arai tasuku'],
	['エリザベスの絵の具', 'arai tasuku'],
	['ベルの時計は壊れない', 'arai tasuku'],
	['ジョンのベッドは水中へ', 'arai tasuku'],
	['ヴァージニアは嗤う', 'arai tasuku'],
	['エドワードは枕をひっくり返す', 'arai tasuku'],
	['イルマは瞼に包まれて', 'arai tasuku'],
	['アルバートは夜が好き', 'arai tasuku'],
	['Onslaught', 'Cenob1te'],
	['City of Lights', 'Masanori Yasuda'],
	['Orion', 'haruka nakamura'],
	['Arne', 'haruka nakamura'],
	['空色', 'いろのみ'],
	['Lust', 'Rei Harakami'],
	['Fly by Night Only', 'The Glitch Mob; Yaarrohs'],
	['Setakamuy', 'Tomoyuki Sakakida'],
	['Story Board', 'The Album Leaf'],
	['Planetarium', 'Squarepusher'],
	['With Your Friends (Long Drive)', 'Skrillex'],
	['Ｒｅ：Ｂｕｇ　Ｂｅａｔｓ', 'no.9'],
	['4 cerezos', 'LisM'],
	['note:01', '佐藤礼央'],
	['Weeping Rock Rock', 'mum'],
	['City Lights from a Train', 'Vector Lovers'],
	['Fahrenheit Fair Enough', 'Telefon Tel Aviv'],
	['Hakodate (Original Mix)', 'Shingo Nakamura'],
	['Wonder (feat. KaNa)', 'Shingo Nakamura'],
	['Move On (Original Mix)', 'Shingo Nakamura & Kazusa'],
	['Decide', 'Que'],
	['Every Home Has a Knife', 'NQ'],
	['Far East Garden', 'Nhato'],
	['Strathcona', 'Loscil'],
	['Iridescence', 'Kiwamu'],
	['Whom', 'Kettel'],
	['Pray for the Earth', 'Kentaro Takizawa'],
	['Thirty', 'Hiroyuki Oda'],
	['Hope Valley Hill', 'Helios'],
	['夕べの祈り', 'haruka nakamura'],
	['Dazing Off', 'Fjordne'],
	['Mirror Maru', 'Cashmere Cat'],
	['Ｆｘｘｘｘｎ’　Ｂｉｒｔｈｄａｙ（→ＳＣＨＯＯＬ←　ｒｅｍｉｘ）', 'HIEROPHANT GREEN'],
	['From Japan To Japan.....', 'Daishi Dance'],
	['One More Time', 'Daft Punk'],
	['Don\'t Wake Me Up', 'Chris Brown'],
	['やさしい気持ち', 'CHARA'],
	['Yellow kz(livetune)', '初音ミク'],
];

export default function musics(): string {
	'use strict';
	return titles[Math.floor(Math.random() * titles.length)].join(' / ');
}

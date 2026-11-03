import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ"
	},
	illustrator: "Tomohiro Kitakaze",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		572
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "きれい好きな 性格の ポケモン。 しっぽを ほうき代わりに いつも 住処の ほこりを 払っている。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "しっぽでたたく"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		}
	]
}

export default card

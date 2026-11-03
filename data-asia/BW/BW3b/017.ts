import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "バニリッチ"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		583
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "雪山に 生息する ポケモン。 大昔 氷河期の ときに 南の 土地に 移動してきた。"
	},
	attacks: [
		{
			name: {
				ja: "スノーアイス"
			},
			cost: [
				"Water"
			],
			damage: 20
		},
		{
			name: {
				ja: "こごえるかぜ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 2,
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
	],
	evolveFrom: {
		ja: "バニプッチ"
	}
}

export default card

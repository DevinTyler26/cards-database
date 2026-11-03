import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ハクリュー"
	},
	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		148
	],
	hp: 70,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	description: {
		ja: "全身が オーラに 包まれるとき まわりの 天気が 一変する。 海や 湖に 住むという。"
	},
	attacks: [
		{
			name: {
				ja: "まきつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 20
		},
		{
			name: {
				ja: "しっぽでたたく"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Dragon",
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
	],
	evolveFrom: {
		ja: "ミニリュウ"
	}
}

export default card

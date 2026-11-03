import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "カイリュー"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		149
	],
	hp: 150,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	description: {
		ja: "広い 海の どこかに 住処が あると 言われている。 難破した 船を 陸まで 導いてくれる。"
	},
	attacks: [
		{
			name: {
				ja: "つんざく"
			},
			effect: {
				ja: "次の相手の番、相手は手札から「グッズ」を出して使えない。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "ヒールウイング"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	],
	evolveFrom: {
		ja: "ハクリュー"
	}
}

export default card

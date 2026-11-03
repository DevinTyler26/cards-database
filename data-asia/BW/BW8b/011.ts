import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌオー"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		195
	],
	hp: 100,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "船底や 川の岩に 頭を ぶつけまくっても 気にせず 気ままに 泳いでいる のんきな ポケモン。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "むとんちゃく"
			},
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "どろでっぽう"
			},
			effect: {
				ja: "このポケモンに闘エネルギーがついているなら、30ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
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
		ja: "ウパー"
	}
}

export default card

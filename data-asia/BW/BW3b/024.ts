import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ"
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		26
	],
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	description: {
		ja: "しっぽが アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。"
	},
	attacks: [
		{
			name: {
				ja: "でんきショック"
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
				ja: "たたきつける"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×80ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: "80×"
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
	],
	evolveFrom: {
		ja: "ピカチュウ"
	}
}

export default card

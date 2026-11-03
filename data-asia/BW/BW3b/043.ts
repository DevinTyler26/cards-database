import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "プリン"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		39
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "つぶらな ひとみが ゆれるとき だれもが 眠くなってしまう 子守歌を 歌いはじめる。"
	},
	attacks: [
		{
			name: {
				ja: "うたう"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "おうふくビンタ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
	]
}

export default card

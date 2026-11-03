import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "バイバニラ"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		584
	],
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage2",
	description: {
		ja: "大量の 水を 飲みこんで 体の中で 雪雲に 変える。 怒ると 猛吹雪を まきおこす。"
	},
	attacks: [
		{
			name: {
				ja: "ゆきだまMAX"
			},
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "60×"
		},
		{
			name: {
				ja: "コールドブレス"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
		ja: "バニリッチ"
	}
}

export default card

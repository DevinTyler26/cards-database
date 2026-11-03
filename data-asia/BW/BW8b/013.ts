import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "バニリッチ"
	},
	illustrator: "Kyoko Umemoto",
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
		ja: "辺りの 空気を 冷やして 氷の 粒を 発生 させて 敵の 体を 凍りつかせる。"
	},
	attacks: [
		{
			name: {
				ja: "ひっさつスピン"
			},
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、40ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
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
		ja: "バニプッチ"
	}
}

export default card

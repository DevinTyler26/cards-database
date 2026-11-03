import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		417
	],
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。"
	},
	attacks: [
		{
			name: {
				ja: "ちいさなおつかい"
			},
			effect: {
				ja: "自分の山札から基本エネルギーを2枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "でんきしっぽ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 10
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

import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		296
	],
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "太い 木の幹に ぶつかって 体を 鍛える。 住処の そばは へし折られた 木が たくさんある。"
	},
	attacks: [
		{
			name: {
				ja: "れんぞくはりて"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数×20ダメージ。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
	]
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "マルマイン"
	},
	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		101
	],
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	description: {
		ja: "電気エネルギーを ためすぎて ぱんぱんに 膨らんだ マルマインが 風に 流されてくることが ある。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "でんじドロー"
			},
			effect: {
				ja: "自分の手札が4枚になるように、山札を引く。この特性は、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "エレキボール"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
		ja: "ビリリダマ"
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラ"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [
		609
	],
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "のろいのかげ"
			},
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "あやしいともしび"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	retreat: 2,
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
		ja: "ランプラー"
	}
}

export default card

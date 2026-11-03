import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ウインディ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		59
	],
	hp: 130,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "威風堂々とした 姿は 古くから 人々の 心を 虜にしてきた。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しゃくねつのたてがみ"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ほのおのうず"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Water",
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
		ja: "ガーディ"
	}
}

export default card

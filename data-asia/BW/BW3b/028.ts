import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [
		282
	],
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	description: {
		ja: "トレーナーを 守るためなら サイコパワーを 使いきり 小さな ブラックホールを 作り出す。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "サイコミラージュ"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の超ポケモンについている「基本超エネルギー」は、それぞれ超エネルギー2個ぶんとしてはたらく。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "マインドショック"
			},
			effect: {
				ja: "このワザのダメージは弱点・抵抗力の計算をしない。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
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
		ja: "キルリア"
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		274
	],
	hp: 80,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "コノハナが 奏でる 草笛の 音色は 人を 不安にさせる。 森の 奥に 住んでいる。"
	},
	attacks: [
		{
			name: {
				ja: "びっくりパンチ"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
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
		ja: "タネボー"
	}
}

export default card

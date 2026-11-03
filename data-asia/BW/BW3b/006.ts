import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "メブキジカ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		586
	],
	hp: 100,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "季節によって ツノに 生える 草花が 変わる。 立派な ツノの 持ち主が 群れを 率いている。"
	},
	attacks: [
		{
			name: {
				ja: "つきとばす"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "とっしん"
			},
			effect: {
				ja: "このポケモンにも20ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
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
	],
	evolveFrom: {
		ja: "シキジカ"
	}
}

export default card

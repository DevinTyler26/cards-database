import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ムクホーク"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		398
	],
	hp: 130,
	types: [
		"Colorless"
	],
	stage: "Stage2",
	description: {
		ja: "自分の 体が 傷つこうとも 攻撃を やめなくなった。 トサカの 形を 気にしている。"
	},
	attacks: [
		{
			name: {
				ja: "つばさでうつ"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "つむじかぜ"
			},
			effect: {
				ja: "相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどす。そして山札を切る。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
		ja: "ムクバード"
	}
}

export default card

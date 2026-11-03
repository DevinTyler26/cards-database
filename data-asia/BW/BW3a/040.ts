import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング"
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		275
	],
	hp: 130,
	types: [
		"Darkness"
	],
	stage: "Stage2",
	description: {
		ja: "葉っぱの ウチワを あおぐと 風速３０メートルの 突風が 巻き起こり 民家を 吹き飛ばす。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "きょだいなうちわ"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどす。そして山札を切る。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ふきとばし"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Darkness",
				"Darkness",
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
		ja: "コノハナ"
	}
}

export default card

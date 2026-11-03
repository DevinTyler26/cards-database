import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [
		571
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	attacks: [
		{
			name: {
				ja: "わるだくみ"
			},
			effect: {
				ja: "自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "イカサマ"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
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
			value: "-20"
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
		ja: "ゾロア"
	}
}

export default card

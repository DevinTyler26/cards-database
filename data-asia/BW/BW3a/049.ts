import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "レベルボール"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
	},
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

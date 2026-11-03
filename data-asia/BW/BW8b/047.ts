import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "プラズマ団のモンスターボール"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札から「プラズマ団」のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
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

import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘビーボール"
	},
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札から、にげるために必要なエネルギーが「3」以上のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
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

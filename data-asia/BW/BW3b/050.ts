import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "デント"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札から基本エネルギーを3枚選び、相手に見せてから、手札に加える。そして山札を切る。"
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

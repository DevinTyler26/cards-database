import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークトリニティ"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分のトラッシュから「プラズマ団」のカードを1枚選び、相手に見せてから、手札に加える。"
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

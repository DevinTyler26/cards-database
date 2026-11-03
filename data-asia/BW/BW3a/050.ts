import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "学習装置"
	},
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、そのポケモンについていた基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。"
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

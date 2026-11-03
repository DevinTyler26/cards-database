import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "スカイアローブリッジ"
	},
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのたねポケモン全員のにげるために必要なエネルギーは、それぞれ1個ぶん少なくなる。 スタジアムは、自分の番に1枚だけ、バトル場の横に出せる。別の名前のスタジアムが場に出たなら、このカードをトラッシュする。"
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

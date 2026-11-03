import { Card } from "../../../interfaces"
import Set from "../BW3b"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンセンター"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の番ごとに1回、自分のベンチポケモンを1匹選び、HPを「20」回復させてよい。 スタジアムは、自分の番に1枚だけ、バトル場の横に出せる。別の名前のスタジアムが場に出たなら、このカードをトラッシュする。"
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

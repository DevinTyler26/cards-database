import { Card } from "../../../interfaces"
import Set from "../BW8b"

const card: Card = {
	set: Set,
	name: {
		ja: "まんたんのくすり"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分のポケモンを1匹選び、HPをすべて回復する。その後、そのポケモンについているエネルギーをすべてトラッシュする。"
	},
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
	]
}

export default card

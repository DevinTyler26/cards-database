import { Card } from "../../../interfaces"
import Set from "../BW3a"

const card: Card = {
	set: Set,
	name: {
		ja: "プリズムエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは、無エネルギー1個ぶんとしてはたらく。 たねポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。"
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

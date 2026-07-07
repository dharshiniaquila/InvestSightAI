export default function MarketTicker() {

const stocks=[
{name:"AAPL",price:"+3.2%"},
{name:"NVDA",price:"+6.8%"},
{name:"TSLA",price:"-1.2%"},
{name:"MSFT",price:"+2.4%"},
{name:"GOOGL",price:"+1.6%"}
]

return(

<div className="flex gap-4 overflow-x-auto py-6">

{stocks.map((stock,index)=>(

<div
key={index}
className="min-w-[140px] rounded-2xl bg-zinc-900 border border-zinc-800 p-4"
>

<h2 className="font-bold">

{stock.name}

</h2>

<p className="text-green-400 mt-2">

{stock.price}

</p>

</div>

))}

</div>

)

}
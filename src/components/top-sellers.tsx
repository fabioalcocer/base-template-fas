import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const topSellers = [
  { name: 'Alice Smith', sales: 12000 },
  { name: 'Bob Johnson', sales: 11500 },
  { name: 'Carlos Rivera', sales: 11000 },
  { name: 'Diana Lee', sales: 10800 },
  { name: 'Ethan Brown', sales: 10500 },
  { name: 'Fiona White', sales: 10200 },
  { name: 'George Black', sales: 9900 },
  { name: 'Hannah Green', sales: 9700 },
  { name: 'Ivan Grey', sales: 9500 },
  { name: 'Julia Blue', sales: 9300 },
]

export function TopSellers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Sellers</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-4 space-y-1">
          {topSellers.map((seller, idx) => (
            <li key={seller.name} className="flex justify-between">
              <span>
                {idx + 1}. {seller.name}
              </span>
              <span className="font-mono">
                ${seller.sales.toLocaleString()}
              </span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Error al obtener usuarios')
  }
  return response.json()
}

function App() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  const handleToast = () => {
    toast.success('¡Toast de prueba!', {
      description: 'Sonner está funcionando correctamente',
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Cargando...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg text-destructive">Error: {error.message}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Template App con Admin</h1>
          <p className="text-muted-foreground">
            Con Tanstack Query, Sonner, ShadCN UI y Tailwind 4
          </p>
          <Button onClick={handleToast} className="mx-auto">
            Mostrar Toast
          </Button>

          <Link to="/dashboard">
            <Button className="mx-auto ml-4">Dashboard</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.slice(0, 6).map(
            (user: {
              id: number
              name: string
              email: string
              address: { city: string; zipcode: string }
            }) => (
              <Card key={user.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <CardDescription className="font-mono">
                    {user.email}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default App

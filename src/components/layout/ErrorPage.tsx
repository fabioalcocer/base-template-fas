import { AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
			<div className="max-w-md w-full space-y-6 text-center">
				<div>
					<AlertCircle className="mx-auto h-24 w-24 text-primary" />
					<h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
						404
					</h1>
					<p className="mt-2 text-lg text-gray-600">
						Oops! No se encontró la página.
					</p>
				</div>

				<p className="space-y-2 text-gray-500">
					La página que estás buscando no está disponible o ha sido movida.
				</p>

				<div className="mt-8 flex justify-center space-x-4">
					<Link
						to="/"
						className="flex items-center rounded-lg px-4 py-2 border border-transparent text-base text-white bg-primary hover:bg-primary-foreground transition-colors duration-300"
					>
						<Home className="mr-2 h-5 w-5" />
						Volver al inicio
					</Link>
				</div>

				<div className="mt-12">
					<p className="text-sm text-gray-500">
						Si cree que se trata de un error, póngase en contacto con el
						servicio de asistencia.
					</p>
				</div>
			</div>
		</div>
	);
}

import Form from '../components/form-vehiculo'

export default function Registro ({ params }) {
  return (
    <main className="flex flex-col justify-center h-screen w-screen items-center p-5 gap-4">
      <Form type={params.type} />
    </main>
  )
}

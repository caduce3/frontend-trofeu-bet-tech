"use client"

import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z, infer as zodInfer } from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from 'react'

// Esquema de validação usando Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

// Inferindo o tipo do esquema Zod
type FormSchema = zodInfer<typeof formSchema>

export default function ProfileForm() {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)
  const router = useRouter() // Hook para navegação programática

  // Inicializando o formulário com react-hook-form e o esquema de validação
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  // Função que lida com o envio do formulário usando axios
  const onSubmit = async (data: FormSchema) => {
    try {
      const response = await axios.post("http://localhost:3333/sessions", data)
      console.log("Login successful:", response.data)
      // Limpa a mensagem de erro se a requisição for bem-sucedida
      setErrorMessage(null)
      // Redireciona para a página principal
      router.push('/')
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Define a mensagem de erro com base na resposta da API
        setErrorMessage(error.response?.data?.message || "An error occurred")
        console.error("Axios error:", error.message)
      } else {
        setErrorMessage("An unexpected error occurred")
        console.error("Unexpected error:", error)
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-screen space-y-4">
        {errorMessage && (
          <div className="text-red-500">{errorMessage}</div>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-72">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-72">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-72">
          Entrar
        </Button>
      </form>
    </Form>
  )
}
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define the form schema with email and password fields
const formSchema = z.object({
  email: z.string().email({ message: "Endereço de e-mail inválido." }),
  password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
})

export function SignIn() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: { email: string; password: string }) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 max-w-[450px] flex flex-col justify-center gap-6 ">
        {/* Email Field */}
        <div className="max-w-[450px] flex flex-col justify-center gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight"> Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe os jogadores através do painel da trofeu.bet!</p>
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="trofeu.bet@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                Digite sua senha
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">Entrar</Button>
      </form>
      <Helmet title="Login"/>
    </Form>
  )
}
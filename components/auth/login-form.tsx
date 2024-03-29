"use client"

import * as z from 'zod'
import { CardWrapper } from "./card-wrapper"
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {Form,FormControl,FormField,FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { login } from '@/actions/login'
import { useState,useTransition } from 'react'


export const LoginForm = () =>{
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string| undefined>("")
    const [success, setSuccess] = useState<string| undefined>("")
    const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
        setError("")
        setSuccess("")
        startTransition(()=>{
            login(values)
            .then((data)=>{
                if(data){
                    setError(data.error)
                }
            })
        })
    }
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password:"",
        }
    })
    return(
        <CardWrapper headerLabel="Welcome Back">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField control={form.control} name='email' render={({field})=>(<FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='johndoe@gmail.com' type='email' disabled={isPending}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}/>
                    </div>
                    <div className='space-y-4'>
                        <FormField control={form.control} name='password' render={({field})=>(<FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='********' type='password' disabled={isPending}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>)}/>

                    </div>
                    
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button type='submit' className='w-full' disabled={isPending}>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

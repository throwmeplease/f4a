import { FormEvent } from "react";
import { useRouter } from "next/router";
{
    /*import { zodResolver } from "@hookform/resolvers/zod";*/
}
{
    /* import { useForm } from "zod";*/
}
import { Button } from "@/components/ui/button";
{
    /*import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";*/
}
import { Input } from "@/components/ui/input";
{
    /*import { toast } from "@/components/ui/use-toast";*/
}

export default function LoginPage() {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const password = formData.get("password");

        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, password }),
        });
		console.log(JSON.stringify({ name, password }))
		console.log(response);
        if (response.ok) {
					
            //router.push("/profile");
        } else {
            // Handle errors
        }
    }
    return (
        <main
            className={`bg-gradient-to-b from-purple-900 via-purple-800 to-black flex min-h-screen flex-col items-center justify-evenly p-24 `}
        >
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Username" required />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                {/*<input type="file" id="file_input" webkitdirectory="" directory="" /> */}
                <Button type="submit">Login</Button>
            </form>
        </main>
    );
}

{
    /*
    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    });

    const form =
        useForm <
        z.infer <
        typeof FormSchema >>
            {
                resolver: zodResolver(FormSchema),
                defaultValues: {
                    username: "",
                },
            };

    function onSubmit(data) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }*/
}
